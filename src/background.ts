import { getMenuData } from './menu';

export type IntentMessage<I extends string, T> = {
    intent: I;
    payload: T;
};

export type GetQuestionIntent = IntentMessage<
    'getQuestion',
    {
        menuIndex: number;
        selectionText: string;
    }
>;

export type MenuClickIntent = IntentMessage<
    'menuClick',
    {
        menuIndex: number;
    }
>;

async function initMenu() {
    const menuData = await getMenuData();
    chrome.contextMenus.removeAll();
    menuData.forEach((menu, index) => {
        chrome.contextMenus.create({
            id: String(index),
            title: menu.name,
            type: 'normal',
            contexts: ['selection'],
        });
    });
}

chrome.runtime.onInstalled.addListener(initMenu);
chrome.storage.onChanged.addListener(initMenu);

chrome.contextMenus.onClicked.addListener((item, tab) => {
    if (tab?.id) {
        const intent: MenuClickIntent = {
            intent: 'menuClick',
            payload: {
                menuIndex: Number(item.menuItemId),
            },
        };
        chrome.tabs.sendMessage(tab.id, intent);
    }
});

chrome.runtime.onMessage.addListener(
    (message: IntentMessage<string, any>, sender, sendResponse) => {
        if (message.intent === 'getQuestion') {
            getMenuData()
                .then((menuData) => {
                    const payload = (message as GetQuestionIntent).payload;
                    if (menuData[payload.menuIndex]) {
                        const questionText = menuData[payload.menuIndex].question.replace(
                            /\{selection\}/g,
                            payload.selectionText
                        );
                        const _sendResponse = sendResponse as (...args: any[]) => void;
                        _sendResponse(questionText);
                    } else {
                        sendResponse();
                    }
                })
                .catch(() => {
                    sendResponse();
                });
            return true;
        }
        return false;
    }
);

chrome.action.onClicked.addListener(() => {
    chrome.runtime.openOptionsPage();
});

export {};
