import React, { useState, useEffect, Fragment } from 'react';
import { PartBoredActivityType } from '../lib/types/boredActivityType';
import { getPartBoredActivity } from '../lib/getPartBoredActivity';
import './BoredActivityPage.scss'

type Props = {
    activityItem: PartBoredActivityType
};

export const BoredActivityPage = ({ activityItem }: Props) => {
    return (
        <div className='activity'>
            <div className='items'>Активность: {activityItem.activity}</div>
            <div className='items'>Ключ: {activityItem.key}</div>
        </div>
    );
}
