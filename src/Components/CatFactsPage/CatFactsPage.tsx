import React, { useState } from "react";
import { CatFactsLoader } from '../lib/catFactsLoader'
import { CatFactsType } from '../lib/types/catFacts'
import Button from "../Button/Button";
import { DataDisplay } from "../DataDisplay/DataDisplay";
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
        <div className="catfactsWrapper">
            <Button onClick={getNextFact} text={"Next Fact"} />
            <DataDisplay first={nextFact.fact} second={nextFact.length} />
        </div>
    )
}