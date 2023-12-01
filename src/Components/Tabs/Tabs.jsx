import React, { useState } from 'react';
import TabContent from './TabContent';
import JokesData from './JokesData';
import './Tabs.scss';

const Tabs = ({tabsData}) => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const[loading, setLoading] = useState(false);

    const switchTab = (tabId) => {
        setLoading(true);
        setTimeout(() => {
            setActiveTab(tabId);
            setLoading(false);
        }, 2000);
    };

    return(
        <div className="tabs">
            <ul className="tabsHeader">
                {tabsData.map((tab) => {
                    <li key ={tab.id}
                    className={tabsHeaderItem}
                    onClick={switchTab(tab.id)}>
                        {tab.title}
                    </li>
                })}
            </ul>
            <div className="tab-content">
        {loading ? <div className="pre-loader">Загружаем...</div> : 
        <TabContent content={JokesData.getJokesByGenre(activeTab)} />}
            </div>
        </div>  
    );
};


export default Tabs