import React, { Component } from 'react';
import Aux from '../../hoc/Aux';

// the Aux helps fulfil the requirement of having a wrapping element. so we don't use a div.
class CocktailBuilder extends Component {
  render () {
    return (
      <Aux>
        <div>Cocktail</div>
        <div>Cocktail controls</div>
      </Aux>
    );
  }
}


export default CocktailBuilder;
