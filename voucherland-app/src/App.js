import React from 'react';
import './App.scss';
import "./scss/media_queries.scss";
import "./scss/header.scss";
import Header from './components/header/Header';

function App() {
  return (
    <section className="app">
      <Header />
    </section>
  );
}

export default App;
