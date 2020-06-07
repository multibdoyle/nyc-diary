import React from 'react';
import ReactDOM from 'react-dom';
import TransparentFunnyLogo from '../../assets/TransparentFunnyLogo.png';
import './PageHeader.css'

import { Nav, Navbar, NavItem } from "react-bootstrap"
import { Link, withRouter } from 'react-router-dom';



export default function BDZPageHeader() {
  return (
  <Navbar className='Nav' >
<h1 id='Title' style={{
                margin: 1,
                top: 2,
                right: 0,
             bottom:20,
                left: 0,
                position: 'fixed', 
       
             
            }}><Link to='/' >Questions</Link></h1>
<div className='social-media' >
<NavItem style={{
                margin: 1,
                top: 2,
                right: 40,
             bottom:20,
                left: 'auto',
                position: 'fixed',
            }}>
<Nav.Link href='https://github.com/multibdoyle/'><img src={require("../../github_logo.png")} class="img-thumbnail" alt='logo' width='25px' float='right'></img></Nav.Link>
</NavItem>
<NavItem style={{
                margin: 1,
                top: 4,
                right: 90,
             bottom:20,
                left: 'auto',
                position: 'fixed',
            }}>
<a href='https://www.linkedin.com/in/brendan-doyle-403ba028'><img src={require("../../linkedin_logo.png")} class="img-thumbnail"alt='linkedinlogo' width='25px' float='right'></img></a>
</NavItem>
<NavItem style={{
                margin: 1,
                top: 4,
                right: 60,
             bottom:20,
                left: 'auto',
                position: 'fixed',
            }}>
<a href='https://www.instagram.com/multibdoyle/'><img src={require("../../instagram_logo.png")} class="img-thumbnail" alt='instagramlogo' width='25px' float='right'></img></a>
</NavItem>
</div>
 </Navbar >

)
}

//<img src={require("../../skeleton_praying.png")} className="Logo" alt='logo'/>
//style={{ textDecoration: 'none' , color: 'black'}}