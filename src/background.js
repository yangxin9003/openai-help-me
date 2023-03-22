'use strict';

chrome.runtime.onInstalled.addListener(async () => {
    chrome.action.onClicked.addListener(() => {
        chrome.runtime.openOptionsPage()
    })
    chrome.contextMenus.create({
        id: 'ask',
        title: 'Ask',
        type: 'normal',
        contexts: ['selection']
    });
    chrome.contextMenus.create({
        id: 'translate',
        title: 'Translate',
        type: 'normal',
        contexts: ['selection']
    });
});

chrome.contextMenus.onClicked.addListener(async (item, tab) => {
    const id = item.menuItemId;
    if (id) {
        chrome.tabs.sendMessage(tab.id, {
            type: id,
            // content: item.selectionText
        })
    }
});

