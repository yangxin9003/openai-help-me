import { createRoot } from 'react-dom/client';
import ResultModal from './result-modal';
import { StyleProvider } from '@ant-design/cssinjs/es/index';
import resultModalCss from './result-modal.css';
import type { GetQuestionIntent, IntentMessage, MenuClickIntent } from './background';

let shadowRoot: ShadowRoot;
function getShadowRoot() {
    if (shadowRoot) {
        return shadowRoot;
    }
    const rootEl = document.createElement('div');
    document.body.appendChild(rootEl);
    shadowRoot = rootEl.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    style.innerHTML = resultModalCss;
    shadowRoot.appendChild(style);
    return shadowRoot;
}

function onMenuClick(menuIndex: number) {
    const selectionText = window.getSelection()?.toString() || '';
    if (!selectionText.replace(/\s/g, '')) {
        return;
    }
    const shadowRoot = getShadowRoot();
    const container = document.createElement('div');
    shadowRoot.appendChild(container);
    const root = createRoot(container);
    try {
        const getQuestionMessage: GetQuestionIntent = {
            intent: 'getQuestion',
            payload: {
                selectionText,
                menuIndex: menuIndex,
            },
        };
        chrome.runtime.sendMessage(getQuestionMessage, undefined, (question: string) => {
            if (question) {
                root.render(
                    <StyleProvider container={shadowRoot}>
                        <ResultModal
                            container={container}
                            question={question}
                            afterClose={() => container.remove()}
                        />
                    </StyleProvider>
                );
            } else {
                console.error('getQuestionMessage empty', getQuestionMessage);
            }
        });
    } catch (e) {
        container.remove();
        console.error(e);
    }
}

chrome.runtime.onMessage.addListener((message: IntentMessage<string, any>) => {
    if (message.intent === 'menuClick') {
        const menuClickPayload = (message as MenuClickIntent).payload;
        onMenuClick(menuClickPayload.menuIndex);
    }
    return false;
});
