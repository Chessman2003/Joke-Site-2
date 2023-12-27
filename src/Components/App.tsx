import React from 'react';

import {EmulateData} from '../model/emulateData'
import {Tabs, Holder} from './Tabs/Tabs';
import {List} from './List/List';

import {CatFactsPage} from './CatFactsPage/CatFactsPage';
import { DogFactsPage } from './DogFactsPage/DogFactsPage';

export const App = () => {
  const emulator = new EmulateData();
  const genres = emulator.getAllGenres();
  const catfactsHolderId = 'catfacts';
  const dogfactsHolderId = 'dogfacts'
  const holders = genres.map(g => {
    return {
      id: g.getId(),
      title: g.getTitle()
    }
  });

  holders.push({
    id: catfactsHolderId,
    title: 'Факты о котиках'
  });

  holders.push({
    id: dogfactsHolderId,
    title: 'Факты о собаках'
  })

  return (
    <div className="App">
      <h1>Анекдоты</h1>
      <Tabs 
          holderTabs={holders} 
          getContent={(id) => {
            if (id === catfactsHolderId) {
              return <CatFactsPage urlApi={'https://catfact.ninja/fact'} />
            } else if (id === dogfactsHolderId) {
              return <DogFactsPage urlApi={'https://dog.ceo/api/breeds/image/random'} />
            }
            return <List rows={emulator.getJokesByGenre(id)} />
          }
        } 
      />
    </div>
  );
}
