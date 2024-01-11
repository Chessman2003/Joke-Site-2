import React from 'react';
import './Button.scss'

type Props = {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    text: string
};

const Button = ({ onClick, text }: Props) => {
    return (
        <div className="buttonNext">
            <button className='button' onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button