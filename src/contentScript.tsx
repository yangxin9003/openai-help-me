import React from 'react';
import { createRoot } from 'react-dom/client';
import ResultModal from './result-modal';
import { StyleProvider } from '@ant-design/cssinjs/es/index';
import resultModalCss from './result-modal.css';

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

chrome.runtime.onMessage.addListener((message, sender, response) => {
    const selectionText = window.getSelection()?.toString() || '';
    if (!selectionText.replace(/\s/g, '')) {
        return;
    }
    const shadowRoot = getShadowRoot();
    const container = document.createElement('div');
    shadowRoot.appendChild(container);
    const root = createRoot(container);
    try {
        let question = '';
        if (message.type === 'ask') {
            question = selectionText;
        } else if (message.type === 'translate') {
            question = `Translate the following Text to chinese:\n\n "${selectionText}"`;
        }
        root.render(
            <StyleProvider container={shadowRoot}>
                <ResultModal
                    container={container}
                    question={question}
                    afterClose={() => container.remove()}
                />
            </StyleProvider>
        );
    } catch (e) {
        container.remove();
    }
    return false;
});
