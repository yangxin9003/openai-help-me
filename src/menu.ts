import { menuStorage } from './constant';

export type MenuItem = {
    name: string;
    question: string;
};

export const defaultMenu: MenuItem[] = [
    {
        name: 'ask',
        question: '{selection}',
    },
];

export async function getMenuData() {
    const MenusData = await chrome.storage.local.get(menuStorage);
    let menuData: MenuItem[] | undefined = MenusData[menuStorage];
    if (!menuData) {
        menuData = defaultMenu;
    }
    return menuData;
}

export function saveMenuData(data: MenuItem[]) {
    return chrome.storage.local.set({ [menuStorage]: data });
}
