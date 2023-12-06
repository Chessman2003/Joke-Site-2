import React from 'react';

import {EmulateData} from '../model/emulateData'
import {Tabs, Holder} from './Tabs/Tabs';
import {List} from './List/List';

export const App = () => {
  const emulator = new EmulateData();
  const genres = emulator.getAllGenres();
  const holders = genres.map(g => {
    return {
      id: g.getId(),
      title: g.getTitle()
    }
  });

  return (
    <div className="App">
      <h1>Анекдоты</h1>
      <Tabs 
          holderTabs={holders} 
          getContent={(id) => <List rows={emulator.getJokesByGenre(id)} />} 
      />
    </div>
  );
}
