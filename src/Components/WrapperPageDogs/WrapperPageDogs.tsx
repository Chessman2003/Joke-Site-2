import React, { useState, useEffect } from 'react';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { Button } from '../Button/Button';
import { DogFactsPage } from '../DogFactsPage/DogFactsPage';
import { DisplayComponent } from '../DisplayComponent/DisplayComponent';

import { DogsFactsLoader } from '../lib/dogFactsLoader'
import { DogFactsType } from '../lib/types/dogFacts'

export const WrapperPageDogs = () => {
    const loader = new DogsFactsLoader('https://dog.ceo/api/breeds/image/random');

    const [nextFact, setNextFact] = useState<DogFactsType>({
        message: null,
        status: ''
    });

    const [error, setError] = useState<string>('');

    const getNextFact = async () => {
        const nextFact = await loader.getNextFact().catch(e => {
            setError(e + '');
        });
        console.log(JSON.stringify(nextFact));
        if (nextFact) {
            setNextFact(nextFact);
        }
    };

    useEffect(() => {
        getNextFact()
    }, []);

    if (error != '') {
        return (
            <div className={'error'}>
                {error}
            </div>
        );
    }

    return (
        <>
            <ControlPanel>
                <Button onClick={() => { getNextFact() }} text='Следующая активность' />
                <Button text='Какая-то кнопка' onClick={() => { }} />
            </ControlPanel>

            <DisplayComponent isLoading={false}>
                <DogFactsPage nextFact={nextFact} />
            </DisplayComponent>
        </>
    )
}