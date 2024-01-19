import React from 'react';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { Button } from '../Button/Button';
import { CatFactsPage } from '../CatFactsPage/CatFactsPage';
import { DisplayComponent } from '../DisplayComponent/DisplayComponent';


export const WrapperPageCats = () => {
    return (
        <ControlPanel>
            <Button onClick={loadNextObject()} text='Следующая активность' />
            <Button text='Какая-то кнопка' />
            <Button text='Какая-то кнопка' />
        </ControlPanel>

        <DisplayComponent isLoading={false}>
            <CatFactsPage url={'https://catfact.ninja/fact'} />
        </DisplayComponent>
    )
}