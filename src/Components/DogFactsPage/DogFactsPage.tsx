import React, { useEffect, useState } from 'react'
import { DogsFactsLoader } from '../lib/dogFactsLoader'
import { DogFactsType } from '../lib/types/dogFacts'

import './DogFactsPage.scss'

type Props = {
    urlApi: string
}

export const DogFactsPage = ({urlApi}: Props) => {
    const [loading, setLoading] = useState<boolean>(true);
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
        setLoading(false);
    };

    useEffect(()=>{
        getNextFact()
    }, []);

    if (loading) {
        return <div>Loading ...</div>
    }


    if (error != '') {
    return (<div>
        {error}
    </div>)
    }

    return(
        <div className="dogFactsWrapper">
            <div className="buttonNext" onClick={() => {
                getNextFact();
            }}>
                <button>Next Fact</button>
            </div>
            <div className="fact">
                <div>{nextFact.status}</div>
                <div>{
                    nextFact.message && <img src={nextFact.message.toString()}/>
                }</div>
            </div>
        </div>
    )
}
