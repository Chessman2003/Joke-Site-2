import React, { useState } from "react";
import { CatFactsLoader } from '../lib/catFactsLoader'
import { CatFactsType } from '../lib/types/catFacts'
import './CatFactsPage.scss'

type Props = {
    nextFact: CatFactsType
}

export const CatFactsPage = ({
    nextFact
}: Props) => {
    return (
        <>
            <div>{nextFact.fact}</div> 
            <div>{nextFact.length}</div>
        </>
    )
}