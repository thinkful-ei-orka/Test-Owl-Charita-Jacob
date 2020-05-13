import React from 'react';
import List from './List';
import participants from './store';
import Stage from './Stage';
import ChatList from './chatList';

function App() {
  
  let onStageList = participants.filter(person => person.onStage === true);
  console.log(onStageList);
  return (
    <main className='App'>
      <List participantList={participants}/>
      <Stage stageList={onStageList} />
      <ChatList />
    </main>
  );
}


export default App;
