import React from 'react';
<<<<<<< HEAD:src/Components/App.jsx
import Tabs from './Tabs/Tabs';
=======
import Tabs from './Tabs/Tabs.jsx';
>>>>>>> f211979731932378fb2fb25d919d2ec9088700db:src/Components/App.tsx


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
