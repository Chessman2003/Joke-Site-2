import React from 'react';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { Button } from '../Button/Button';
import { BoredActivityPage } from '../BoredActivityPage/BoredActivityPage';
import { DisplayComponent } from '../DisplayComponent/DisplayComponent';


export const WrapperPageActivity = () => {
    return (
        <ControlPanel>
            <Button onClick={loadNextObject()} text='Следующая активность' />
        </ControlPanel>

        <DisplayComponent isLoading={false}>
            <BoredActivityPage url={'https://www.boredapi.com/api/activity'} />
        </DisplayComponent>
    )
}