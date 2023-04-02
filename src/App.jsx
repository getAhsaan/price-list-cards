import React from 'react';
import Navbar from './components/Navbar/Navbar';
import CardList from './components/CardList/CardList';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-purple-600 text-3xl font-bold underline">
        Hello world!
      </h1>
      <CardList></CardList>
    </div>
  );
};

export default App;