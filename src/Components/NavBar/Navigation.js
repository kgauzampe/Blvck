import React from 'react';
import { Link } from 'gatsby';
import { NavItem, NavMenu } from '@mui-treasury/components/menu/navigation';


const Navigation = () => {
    return (
        <>
        <NavMenu gutter={'8px'}>
          <NavItem as={Link} to={'/components/menu/'}>
            Products
          </NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Blog</NavItem>
          <NavItem active>Help</NavItem>
          <NavItem>Contact Us</NavItem>
        </NavMenu>
      </>
    )
}


export default Navigation