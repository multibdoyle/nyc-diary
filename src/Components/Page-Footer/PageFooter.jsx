import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, ThemeProvider, withTheme  } from '@material-ui/core/styles';

import theming from '../../themes';
import './PageFooter.css'
import { Nav, Navbar, NavItem } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom';


class PageFooter extends React.Component 
{ render() {
    return (
<footer class="footer">
      
<div class='social'>
   <div class='github' href='https://github.com/multibdoyle/' target="_blank"><img src={require("../../github_logo.png")} class="img-thumbnail" alt='logo' width='25px' 
   style={{ position:'relative',
   top: -2.1    
}}
   
   ></img></div>
<div class='linkedin' href='https://www.linkedin.com/in/brendan-doyle-403ba028' target="_blank"><img src={require("../../linkedin_logo.png")} class="img-thumbnail"alt='linkedinlogo' width='25px'
style={{
    position:'relative',

}}
></img></div>

</div>
</footer>
)
}
}

export default PageFooter;