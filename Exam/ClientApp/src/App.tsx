import React, { Component } from 'react';
import { Route , Routes} from 'react-router';
import { Layout } from './components/Layout';
import Home from './components/Home';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

  render () {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </Layout>
    );
  }
}