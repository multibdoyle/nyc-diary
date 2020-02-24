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
<footer class="page-footer">
    <div>
        <div classname='footer-content'>Nothing here copyrighted but if you steal bruh I'ma find u</div> 
    </div>
</footer>
)
}
}

export default PageFooter;