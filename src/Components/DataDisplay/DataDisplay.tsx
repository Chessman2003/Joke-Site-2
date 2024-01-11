import react from 'react';
import { PartBoredActivityType } from '../lib/types/boredActivityType';
import './BoredActivityPage.scss'


export const DataDisplay = ({ activity, key }) => {
    return (
        <div className="activities">
            <div>{activity}</div>
            <div>{key}</div>
        </div>
    );
}