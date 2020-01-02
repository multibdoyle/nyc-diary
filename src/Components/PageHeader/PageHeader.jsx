import React from 'react';
import ReactDOM from 'react-dom';
import TransparentFunnyLogo from '../../assets/TransparentFunnyLogo.png';
import { createMuiTheme, ThemeProvider, withTheme  } from '@material-ui/core/styles';
import MenuAppBar from '../AppBar/MenuAppBar'
import MenuDrawer from '../AppBar/MenuDrawer'
//import './PageHeader.css'
import theming from '../../themes';
import './PageHeader.css'

class PageHeader extends React.Component 
{ render() {
    return (
      <ThemeProvider theme={theming} color='primary'>
<header class="page-header">
<MenuDrawer></MenuDrawer>
  <img src={TransparentFunnyLogo}></img>
  <h2>Always Watching</h2>
</header>
</ThemeProvider>
)
}
}
export default PageHeader;