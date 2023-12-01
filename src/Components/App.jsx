// App.js
import React from 'react';
import Tabs from './Tabs';


const tabsData = [
  {id: 'all', title: 'Все анекдоты' },
  {id: 'shtirlits', title: 'Про Штирлица' },
  {id: 'sherlock', title: 'Про Шерлока'},
  {id: 'developper', title: "Про программистов"}

];

function App() {
  return (
    <div className="App">
      <h1>Анекдоты</h1>
      <Tabs tabsData={tabsData} />
    </div>
  );
}

export default App;
