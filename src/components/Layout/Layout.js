import React from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';

// exporting jsx
// we use props.children to output the component we wrap with this layout. we need to pass props as an argument. this allows us to use this component as a wrapper around the core content component we want to render to the screen.
const layout = (props) => (
  <Aux>
    <div>ToolBar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
);


export default layout;
