import type { ReactNode, MouseEvent, KeyboardEvent } from 'react';

export type TargetKey = MouseEvent | KeyboardEvent | string;

export type TabItem = {
    key: string;
    label: string;
    children: ReactNode;
};
