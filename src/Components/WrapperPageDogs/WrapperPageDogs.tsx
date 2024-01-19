import React from 'react';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { Button } from '../Button/Button';
import { DogFactsPage } from '../DogFactsPage/DogFactsPage';
import { DisplayComponent } from '../DisplayComponent/DisplayComponent';


export const WrapperPageDogs = () => {
    return (
        <ControlPanel>
            <Button onClick={getNextFact()} text='Следующая активность' />
            <Button text='Какая-то кнопка' />
        </ControlPanel>

        <DisplayComponent isLoading={false}>
            <DogFactsPage url={'https://dog.ceo/api/breeds/image/random'} />
        </DisplayComponent>
    )
}