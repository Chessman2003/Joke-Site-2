import React from "react";

export type TabHolderProps = {
    id: string
    title: string
    selected?: boolean
    onChangeTab?: (id: string) => void
}

export const TabHolder = ({
    id,
    title,
    selected = false,
    onChangeTab
}: TabHolderProps) => {
    let newClassname = 'tabHolder';
    if (selected) {
        newClassname += ' selected';
    } 

    return (
        <div className={newClassname} onClick={()=>{onChangeTab(id)}}>{title}</div>
    )
}