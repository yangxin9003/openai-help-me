import { Divider } from 'antd';
import styled from 'styled-components';
import BaseForm from './base-form';
import MenuForm from './menu-form';

const Page = styled.div`
    padding: 24px;
`;

export default function Panel() {
    return (
        <Page>
            <Divider orientation="left">Base Settings</Divider>
            <BaseForm />
            <Divider orientation="left">Menu Settings</Divider>
            <MenuForm />
        </Page>
    );
}
