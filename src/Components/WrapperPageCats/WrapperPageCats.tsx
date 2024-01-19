import React, {useState} from 'react';
import { ControlPanel } from '../ControlPanel/ControlPanel';
import { Button } from '../Button/Button';
import { CatFactsPage } from '../CatFactsPage/CatFactsPage';
import { DisplayComponent } from '../DisplayComponent/DisplayComponent';

import { CatFactsLoader } from '../lib/catFactsLoader'
import { CatFactsType } from '../lib/types/catFacts'


export const WrapperPageCats = () => {
    const catsLoader = new CatFactsLoader('https://catfact.ninja/fact')

    const [nextFact, setNextFact] = useState<CatFactsType>({
        fact: '',
        length: ''
    });

    const [error, setError] = useState<string>('');

    const getNextFact = async () => {
        const nextFact = await catsLoader.getNextFact().catch(e => {
            setError(e + '');
        });
        setNextFact(nextFact)
    }

    if (error != '') {
        return (<div>
            {error}
        </div>)
    }

    return (
        <>
            <ControlPanel>
                <Button onClick={()=>{getNextFact()}} text='Следующая активность' />
                <Button text='Какая-то кнопка' onClick={()=>{}} />
                <Button text='Какая-то кнопка' onClick={()=>{}} />
            </ControlPanel>
            <DisplayComponent isLoading={false}>
                <CatFactsPage  nextFact={nextFact} />
            </DisplayComponent>
        </>
    )
}