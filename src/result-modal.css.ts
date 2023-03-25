export default `
.open-ai-result-modal-wrap {
    text-align: left;
    pointer-events: none;
}
.open-ai-result-modal-content .open-ai-result-modal-content-answer {
    max-height: 300px;
    overflow: auto;
}
.open-ai-result-modal-content .open-ai-result-modal-content-question {
    max-height: 100px;
    overflow: auto;
}
.open-ai-result-modal-content pre {
    display: block;
    padding: 8px;
    margin: 0;
    font-size: 14px;
    line-height: 1.5em;
    color: #333;
    white-space: pre-wrap;
    word-break: break-all;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
}
.open-ai-result-modal-content pre.open-ai-result-modal-content-error {
    color: #b3261e;
}
`;
