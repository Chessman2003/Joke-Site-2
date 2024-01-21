import React, { useEffect, useState } from 'react'
import { DogsFactsLoader } from '../lib/dogFactsLoader'
import { DogFactsType } from '../lib/types/dogFacts'

import './DogFactsPage.scss'

type Props = {
    nextFact: DogFactsType
}

export const DogFactsPage = ({ nextFact }: Props) => {
    return (
        <>
            <div className='status'>Статус: {nextFact.status}</div>
            <div>
                {
                    nextFact.message && <img className='image' src={nextFact.message.toString()} />
                }
            </div>
        </>
    )
}
