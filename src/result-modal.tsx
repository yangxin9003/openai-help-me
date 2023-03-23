import React, { useEffect, useInsertionEffect, useRef, useState } from 'react';
import { Modal, Divider, Spin } from 'antd';
import { Configuration, OpenAIApi } from 'openai';
import Draggable from 'react-draggable';
import type { DraggableEvent, DraggableData } from 'react-draggable';
import { apiKeyStorage } from './constant';
import './result-modal.css';

let _openAI: OpenAIApi;

const setRequestHeader = XMLHttpRequest.prototype.setRequestHeader;
XMLHttpRequest.prototype.setRequestHeader = function newSetRequestHeader(key: string, val: string) {
    if (key.toLocaleLowerCase() === 'user-agent') {
        return;
    }
    setRequestHeader.apply(this, [key, val]);
};

async function getOpenAIInstance() {
    if (!_openAI) {
        const storageResult = await chrome.storage.local.get(apiKeyStorage);
        const apiKey = storageResult[apiKeyStorage];
        const configuration = new Configuration({ apiKey });
        _openAI = new OpenAIApi(configuration);
    }
    return _openAI;
}

async function askOpenAI(question: string) {
    const openAI = await getOpenAIInstance();
    const response = await openAI.createChatCompletion(
        {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: question }],
        },
        {
            timeout: 1800000,
        }
    );
    return response?.data?.choices?.[0]?.message?.content?.trim();
}

type Props = {
    question: string;
    afterClose: () => void;
};
function ResultModal(props: Props) {
    const { question, afterClose } = props;
    const [open, setOpen] = useState(true);
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
    const draggleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setLoading(true);
        askOpenAI(question)
            .then((answer) => {
                setResult(answer || '');
            })
            .catch((e: any) => {
                setError(e.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const handleCancel = () => {
        setOpen(false);
    };

    useInsertionEffect(() => {
        Promise.resolve(true).then(() => {
            document.head.querySelector('[rc-util-key ^= rc-util-locker]:last-child')?.remove();
        });
    });

    const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    return (
        <Modal
            afterClose={afterClose}
            destroyOnClose={true}
            mask={false}
            maskClosable={false}
            style={{
                cursor: 'move',
            }}
            wrapClassName="open-ai-result-modal-wrap"
            title="OpenAI help me!"
            open={open}
            footer={null}
            onCancel={handleCancel}
            modalRender={(modal) => (
                <Draggable bounds={bounds} onStart={(event, uiData) => onStart(event, uiData)}>
                    <div ref={draggleRef}>{modal}</div>
                </Draggable>
            )}
        >
            <div className="open-ai-result-modal-content">
                <Divider orientation="left">question:</Divider>
                <div className="question">
                    <pre>{question}</pre>
                </div>
                <Divider orientation="left">answer:</Divider>
                <div className="answer">
                    {loading ? (
                        <Spin />
                    ) : error ? (
                        <span className="error">{error}</span>
                    ) : (
                        <pre>{result}</pre>
                    )}
                </div>
            </div>
        </Modal>
    );
}

export default ResultModal;
