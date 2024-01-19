import React, { useState, useEffect } from 'react';
import { PartBoredActivityType } from '../lib/types/boredActivityType';
import { getPartBoredActivity } from '../lib/getPartBoredActivity';




type Props = {
    url: string
};


export const BoredActivityPage = ({ url }: Props) => {
    const [activityItem, setActivityItem] = useState<PartBoredActivityType>({ 
        activity: "",
        key: ""
    })

    
    const loadNextObject = async () => {
        const item = await getPartBoredActivity(url);
        setActivityItem(item);
    };

    useEffect(() => {
        loadNextObject()
    }, [url])

   
    return (
                    <div>{activityItem.activity}</div>
                    <div>{activityItem.key}</div>
    );
}
    