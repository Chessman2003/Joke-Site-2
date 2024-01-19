import React from 'react';
import './Button.scss'

type Props = {
    onClick: () => void,
    text: string
};

export const Button = ({ onClick, text }: Props) => {
    return (
        <div className="buttonNext">
            <button className='button' onClick={onClick}>{text}</button>
        </div>
    );
};

