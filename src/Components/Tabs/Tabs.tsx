import React, { useEffect, useState } from 'react';

import { TabsPanel } from '../TabsPanel/TabsPanel';
import { TabContent } from '../TabContent/TabContent';

import {TabHolderProps} from '../TabHolder/TabHolder'

import './Tabs.scss';

export type Holder = {
    id: string
    title: string
}

type Props = {
    getContent: (id: string) => JSX.Element
    holderTabs: Holder[]
}

export const Tabs = ({
    holderTabs,
    getContent
}: Props) => {

    const [selectedTab, setSelectedId] = useState('');

    const onChangeTab = (id: string) => {
        setSelectedId(id)
    }

    if (holderTabs.length == 0) {
        return (
            <div>
                Список табов пуст
            </div>
        );
    }

    return(
        <div className="tabs">
            <TabsPanel 
                holderTabs={holderTabs.map(h=>{
                        return {
                            ...h, 
                            getContent
                        }
                    })
                }
                onSelectedTab={onChangeTab}
             />
            <TabContent id={selectedTab} getContent={getContent} />
        </div>  
    );
};