import React, { useEffect, useState } from 'react'
import { DogsFactsLoader } from '../lib/dogFactsLoader'
import { DogFactsType } from '../lib/types/dogFacts'

import './DogFactsPage.scss'

type Props = {
    urlApi: string
}

export const DogFactsPage = ({urlApi}: Props) => {
    const [nextFact, setNextFact] = useState<DogFactsType>({
        message: null,
        status: ''
    });

    const [error, setError] = useState<string>('');

    const getNextFact = async () => {
        const loader = new DogsFactsLoader(urlApi);
        const nextFact = await loader.getNextFact().catch(e => {
            setError(e+'');
        });
        console.log(JSON.stringify(nextFact));
        if (nextFact) {
            setNextFact(nextFact);
        }
    };

    useEffect(()=>{
        getNextFact()
    }, []);




    if (error != '') {
    return (<div className={'error'}>
        {error}
        </div>)
    }

    return(
       
            
                <div>{nextFact.status}</div>
                <div>{
                    nextFact.message && <img src={nextFact.message.toString()}/>
                }</div>
    )
}
