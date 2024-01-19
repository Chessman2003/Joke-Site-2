import React, { useState, useEffect, Fragment } from 'react';
import { PartBoredActivityType } from '../lib/types/boredActivityType';
import { getPartBoredActivity } from '../lib/getPartBoredActivity';

type Props = {
    activityItem: PartBoredActivityType
};

export const BoredActivityPage = ({ activityItem }: Props) => {   
    return (
        <>
            <div>{activityItem.activity}</div>
            <div>{activityItem.key}</div>
        </>
    );
}
    