import { Input } from 'antd';
import styled from 'styled-components';
import type { MenuItem } from '../menu';

type Props = {
    menu: MenuItem;
    onChange: (value: MenuItem) => void;
};

const Margin = styled.div`
    margin: 16px 0;
`;

export default function MenuContentForm(props: Props) {
    return (
        <>
            <Margin>
                <Input
                    value={props.menu.name}
                    placeholder="menu name"
                    onChange={(event) =>
                        props.onChange({ ...props.menu, name: event.target.value })
                    }
                />
            </Margin>
            <Margin>
                <Input.TextArea
                    rows={8}
                    value={props.menu.question}
                    placeholder='question, the string "{selection}" will replace to your selection text'
                    onChange={(event) =>
                        props.onChange({ ...props.menu, question: event.target.value })
                    }
                />
            </Margin>
        </>
    );
}
