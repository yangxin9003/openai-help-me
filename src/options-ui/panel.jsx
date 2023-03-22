import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import {apiKeyStorage} from '../constanst.js'

const onFinish = (values) => {
    chrome.storage.local.set({[apiKeyStorage]: values.apiKey})
};

const App = () => {
    const formRef = React.useRef(null);
    useEffect(() => {
        chrome.storage.local.get(apiKeyStorage).then((result) => {
            formRef.current.setFieldValue('apiKey', result[apiKeyStorage])
        })
    }, [])
    return  <Form
        name="basic"
        ref={formRef}
        onFinish={onFinish}
        autoComplete="off"
    >
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
            <Input/>
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
};
export default App;
