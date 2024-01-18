import React, { ReactNode } from 'react';
import './DisplayComponent.scss';
import { Loader } from '../Loader/Loader';

type DisplayComponentType = {
    isLoading: boolean,
    children: ReactNode
}

export const DisplayComponent: React.FC<DisplayComponentType> = ({isLoading, children}) => {
    return (
        <div className="displayComponent">
            {isLoading ? <Loader /> : children}
        </div>
    )
}
