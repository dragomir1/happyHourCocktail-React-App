import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import CocktailBuilder from './containers/CocktailBuilder/CocktailBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <CocktailBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
