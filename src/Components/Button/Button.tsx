import react from 'react';
import './Button.scss'

type Props = {
    onClick: MouseEventHendler<HTMLButtonElement>,
    text: string
};

const Button = ({ onClick, text }: Props) => {
    return (
        <div className="buttonNext">
            <button className='button' onClick={OnClick}>{text}</button>
        </div>
    );
};

export default Button