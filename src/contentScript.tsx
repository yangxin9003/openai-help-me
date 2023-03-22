import React from 'react'
import { createRoot } from 'react-dom/client';
import ResultModal from "./result-modal";

chrome.runtime.onMessage.addListener((message, sender, response) => {
    const selectionText = window.getSelection()?.toString() || ''
    if (!selectionText.replace(/\s/g, '')) {
        return
    }
    const rootEl = document.createElement('div')
    document.body.appendChild(rootEl)
    try {
        const root = createRoot(rootEl);
        let question = ''
        if (message.type === 'ask') {
            question = selectionText
        } else if (message.type === 'translate') {
            question = `Translate the following Text to chinese: ${selectionText}`
        }
        root.render(<ResultModal question={question} afterClose={()=> rootEl.remove()}/>);
    } catch (e) {
        rootEl.remove()
    }
    return true
})

