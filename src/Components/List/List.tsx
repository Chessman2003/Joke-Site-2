import React from "react";

import {Joke} from '../../model/emulateData'

type Props = {
rows: Joke[]
}

export const List = ({rows}: Props) => {
    return (
        <ul>
            {rows.map(r=>{
                return (
                    <li key={r.getId()}>
                        <div>
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