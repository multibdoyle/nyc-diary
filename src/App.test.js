import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


// Code for elements of Navbar



<div className='social-media' >
<NavItem  style={{
                margin: 1,
                top:0,
                right: 0,
         
                left:400  ,
             position: 'relative'
             
            }}>
<Nav.Link href='https://github.com/multibdoyle/'><img src={require("./github_logo.png")} class="img-thumbnail" alt='logo' width='25px' float='right'></img></Nav.Link>
</NavItem>
<NavItem style={{
                margin: 1,
                top:-1.5,
                right: 0,
                left: 400  ,
             position: 'relative'
             
            }} >
<Nav.Link href='https://www.linkedin.com/in/brendan-doyle-403ba028' ><img src={require("./linkedin_logo.png")} class="img-thumbnail"alt='linkedinlogo' width='25px' float='right'></img></Nav.Link>
</NavItem>
<NavItem style={{
                margin: 1,
                top:-1.5,
                right: 0,
         
                left:400  ,
             position: 'relative'
             
            }}>
<Nav.Link href='https://www.instagram.com/multibdoyle/'><img src={require("./instagram_logo.png")} class="img-thumbnail" alt='instagramlogo' width='25px' float='right'></img></Nav.Link>
</NavItem>
</div>