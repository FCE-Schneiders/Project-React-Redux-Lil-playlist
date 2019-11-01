import React, { Component } from 'react';
import Aux from './hoc/_Aux/_Aux';
import Layout from './hoc/Layout/Layout';
import SongOverview from './containers/SongOverview/SongOverview';
import './App.css';

function App() {

  return (
    <Aux>
    <div className="App">
      <Layout>
        <SongOverview>hh</SongOverview>
      </Layout>
    </div>
    </Aux>
    );
  }


export default App;
