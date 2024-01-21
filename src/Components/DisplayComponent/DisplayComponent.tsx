import React, { ReactNode } from 'react';
import './DisplayComponent.scss';
import { Loader } from '../Loader/Loader';

import './DisplayComponent.scss'

type DisplayComponentType = {
    isLoading: boolean,
    children: ReactNode
}

export const DisplayComponent: React.FC<DisplayComponentType> = ({ isLoading, children }) => {
    return (
        <div className="displayComponent">
            {isLoading ? <Loader text='Загружаю...' /> : children}
        </div>
    )
}

