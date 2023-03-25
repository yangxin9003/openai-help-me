import { useCallback, useEffect, useState } from 'react';
import { Button, Tabs } from 'antd';
import { getMenuData, MenuItem, saveMenuData } from '../menu';
import type { TabItem, TargetKey } from './types';
import MenuContentForm from './menu-content-form';

export default function MenuForm() {
    const [activeKey, setActiveKey] = useState('0');
    const [menuList, setMenuList] = useState<MenuItem[]>([]);

    useEffect(() => {
        getMenuData().then((menuList) => {
            setMenuList(menuList);
        });
    }, []);

    const setMenu = (menu: MenuItem, index: number) => {
        const newMenuList = [...menuList];
        newMenuList[index] = menu;
        setMenuList(newMenuList);
    };

    const getTabList = () => {
        return menuList.map((menu, index) => ({
            key: String(index),
            label: menu.name || `new menu`,
            children: <MenuContentForm menu={menu} onChange={(menu) => setMenu(menu, index)} />,
        }));
    };

    const onChange = (newActiveKey: string) => {
        setActiveKey(newActiveKey);
    };

    const add = () => {
        const newActiveKey = String(menuList.length);
        const newMenuList = [...menuList];
        newMenuList.push({ name: '', question: '{selection}' });
        setMenuList(newMenuList);
        setActiveKey(newActiveKey);
    };

    const remove = (targetKey: TargetKey) => {
        let newActiveKey = Number(activeKey);
        if (Number(targetKey) <= newActiveKey) {
            newActiveKey = Math.max(newActiveKey - 1, 0);
        }
        const newMenuList = menuList.filter((item, i) => String(i) !== targetKey);
        setMenuList(newMenuList);
        setActiveKey(String(newActiveKey));
    };

    const onEdit = (
        targetKey: React.MouseEvent | React.KeyboardEvent | string,
        action: 'add' | 'remove'
    ) => {
        if (action === 'add') {
            add();
        } else {
            remove(targetKey);
        }
    };

    const save = () => {
        saveMenuData(menuList);
    };

    return (
        <Tabs
            type="editable-card"
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
            items={getTabList()}
            tabBarExtraContent={
                <Button type="primary" onClick={save}>
                    Save Menus
                </Button>
            }
        />
    );
}
