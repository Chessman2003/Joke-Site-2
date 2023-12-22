import React, { useState } from "react";
import {CatFactsLoader} from '../lib/catFactsLoader'
import {CatFactsType} from '../lib/types/catFacts'

import './CatFactsPage.scss'

type Props = {
    urlApi: string
}

export const CatFactsPage = ({
    urlApi
}: Props) => {
    const catsLoader = new CatFactsLoader(urlApi)

    const [nextFact, setNextFact] = useState<CatFactsType>({
        fact: '',
        length: ''
    });

    const [error, setError] = useState<string>('');

    const getNextFact = async () => {
        const nextFact = await catsLoader.getNextFact().catch(e => {

        });
        setNextFact(nextFact)
    }

    if (error != '')  {
        return (<div>
            {error}
        </div>)
    }

    return (
        <div className="catfactsWrapper">
            <div className="buttonNext">
                <button onClick={()=>{getNextFact()}}>Next Fact</button>
            </div>
            <div className="fact">
                <div>{nextFact.fact}</div>
                <div>{nextFact.length}</div>
            </div>
        </div>
    )
}