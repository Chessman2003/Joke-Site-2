import React, { useEffect, useState } from 'react';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { Button } from '../Button/Button';
import { BoredActivityPage } from '../BoredActivityPage/BoredActivityPage';
import { DisplayComponent } from '../DisplayComponent/DisplayComponent';

import { PartBoredActivityType } from '../lib/types/boredActivityType';
import { getPartBoredActivity } from '../lib/getPartBoredActivity';

export const WrapperPageActivity = () => {
    const [activityItem, setActivityItem] = useState<PartBoredActivityType>({
        activity: "",
        key: ""
    })


    const loadNextObject = async () => {
        const item = await getPartBoredActivity('https://www.boredapi.com/api/activity');
        setActivityItem(item);
    };

    useEffect(() => {
        loadNextObject()
    }, [])

    return (
        <div>
            <ControlPanel>
                <Button onClick={() => { loadNextObject() }} text='Следующая активность' />
            </ControlPanel>

            <div>
                <DisplayComponent isLoading={false}>
                    <BoredActivityPage activityItem={activityItem} />
                </DisplayComponent>
            </div>
        </div>
    )
}