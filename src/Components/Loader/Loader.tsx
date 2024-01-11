import react, { useState, useEffect } from 'react';
import './Loader.scss';

type Props = {
    text: string
};


const Loader = ({ text }: Props) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return (
            () => {
                clearTimeout(timer);
            };
        );

}, []);

if (isLoading) {
    return (
        <div className="loader">
            <div className="spinner"></div>
            <div className="text">{text}</div>
        </div>
    )

};
};

export default Loader