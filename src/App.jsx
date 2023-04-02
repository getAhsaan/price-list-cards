import React from 'react';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-purple-600 text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  );
};

export default App;