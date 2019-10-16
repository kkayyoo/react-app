import React from 'react';
import Header from '../Header';
import OrderLists from '../OrderLists';
import './style.scss';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <OrderLists />
    </div>
  );
}

export default App;
