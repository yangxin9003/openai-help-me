import { useEffect, useRef } from 'react';
import { Button, Form, Input } from 'antd';
import type { FormInstance } from 'antd';
import { apiKeyStorage } from '../constant';

const onFinish = (values: Record<string, any>) => {
    chrome.storage.local.set({ [apiKeyStorage]: values.apiKey });
};

export default function BaseForm() {
    const formRef = useRef<FormInstance>(null);
    useEffect(() => {
        chrome.storage.local.get(apiKeyStorage).then((result) => {
            formRef?.current?.setFieldValue('apiKey', result[apiKeyStorage]);
        });
    }, []);
    return (
        <Form name="basic" ref={formRef} onFinish={onFinish} autoComplete="off">
            <Form.Item
                label="API Key"
                name="apiKey"
                rules={[
                    {
                        required: true,
                        message: 'Please input your API Key!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Save
                </Button>
            </Form.Item>
        </Form>
    );
}
