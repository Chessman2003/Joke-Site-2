import react from 'react';
import './DataDisplay.scss'

type Props = {
    first: any,
    second: any
}

export const DataDisplay = ({ first, second }: Props) => {
    return (
        <div className="displayItems">
            <div>{first}</div>
            <div>{second}</div>
        </div>
    );
}