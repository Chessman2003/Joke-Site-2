import React from 'react';
import { WrapperPageDogs } from '../WrapperPageDogs/WrapperPageDogs';
import { EmulateData } from '../../model/emulateData'
import { Tabs, Holder } from '../Tabs/Tabs';
import { List } from '../List/List';
import { WrapperPageActivity } from '../WrapperPageActivity/WrapperPageActivity';
import { WrapperPageCats } from '../WrapperPageCats/WrapperPageCats';
import './App.scss'


export const App = () => {
  const emulator = new EmulateData();
  const genres = emulator.getAllGenres();
  const catfactsHolderId = 'catfacts';
  const dogfactsHolderId = 'dogfacts'
  const activitiesHolderId = 'activities'
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
  });

  holders.push({
    id: activitiesHolderId,
    title: 'Активности'
  })

  return (
    <div className="App">
      <h1>Анекдоты</h1>
      <Tabs
        holderTabs={holders}
        getContent={(id) => {
          if (id === catfactsHolderId) {
            return <WrapperPageCats />
          } else if (id === dogfactsHolderId) {
            return <WrapperPageDogs />
          } else if (id === activitiesHolderId) {
            return <WrapperPageActivity />
          };
          return <List rows={emulator.getJokesByGenre(id)} />
        }
        }
      />
    </div>
  );
}
