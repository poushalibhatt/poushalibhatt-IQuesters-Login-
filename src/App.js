import React from 'react';
import './App.css';
import DashBoard from './Component/DashBoard';
import UserProvider from './Component/UserProvider';


function App() {
  
  return (
    <div className="App">
      <UserProvider>
        <DashBoard />
      </UserProvider>
    </div>
  );
}

export default App;
