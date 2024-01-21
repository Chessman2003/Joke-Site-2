import React from "react";
import { Joke } from '../../model/emulateData'

import './List.scss'

type Props = {
    rows: Joke[]
}

export const List = ({ rows }: Props) => {
    return (
        <ul>
            {rows.map(r => {
                return (
                    <li key={r.getId()}>
                        <div className="header">
                            {r.getHeader()}
                        </div>
                        <div>
                            {r.getText()}
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}