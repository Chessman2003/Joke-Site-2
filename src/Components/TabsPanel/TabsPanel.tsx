import React, {useState} from "react";

import {TabHolder, TabHolderProps} from '../TabHolder/TabHolder'

import './TabsPanel.scss'

type Props = {
    holderTabs: TabHolderProps[]
    onSelectedTab: (id: string) => void
}

export const TabsPanel = ({
    holderTabs,
    onSelectedTab
}: Props) => {
    const [selectedId, setSelectedId] = useState('');

    const onChangeTab = (tabId: string) => {
        setSelectedId(tabId)
        onSelectedTab(tabId)
    }

    return (
        <div className={'tabsHolder'} >
            {holderTabs.map(h => {
                return <TabHolder key={h.id}
                 id={h.id}
                 selected={selectedId===h.id}
                 title={h.title}
                 onChangeTab={onChangeTab}
                 />
            })}
        </div>
    )
}