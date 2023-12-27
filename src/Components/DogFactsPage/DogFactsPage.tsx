import React, { useState } from 'react'
import { dogsFactsLoader } from '../lib/dogFactsLoader'
import { dogFactsType, dogsFactsType } from '../lib/types/dogFacts'

import './DogFactsPage.scss'

type Props = {
    urlApi: string
}

export const DogFactsPage = ({urlApi}: Props) => {
    const dogsLoader = new dogsFactsLoader(urlApi);
    const [nextFact, setNextFact] = useState<dogFactsType>({
        message: '',
        status: ''
    });

    const error = [error, setError] = useState<string>('');

    const getNextFact = async () => {
        const nextFact = await dogsFactsLoader.getNextFact().catch(e => {
            setError(alert);
        });
        setNextFact(nextFact);
    };


    if (error != '') {
    return (<div>
        {error}
    </div>)
    }

    return(
        <div className="dogFactsWrapper">
            <div className="buttonNext">
                <button>Next Fact</button>
            </div>
            <div className="fact">
                <div>{nextFact.message}</div>
                <div>{nextFact.status}</div>
                <div>
                    <img src={}
                </div>
            </div>
        </div>
    )
}
