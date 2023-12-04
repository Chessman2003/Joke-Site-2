import React from "react";

type Props = {
    id: string
    getContent: (id: string) => JSX.Element
}

export const TabContent = ({
    id,
    getContent
}: Props) => {
    return (
        <div className="tabContent">{getContent(id)}</div>
    )
}