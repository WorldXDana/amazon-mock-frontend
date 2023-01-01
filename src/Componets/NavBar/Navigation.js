import React, {Component} from 'react';
import "./NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        return ( 
            <div className='navbar_component'>
                <div className='navbar_logo' ></div>
                <div className='navbar_locator'>
                    <div className='navbar_locatorImage'></div>
                    <div className='navbar_location'> Israel </div>
                </div>
                <div className='navbar_searchComponent'>
                    <div></div>
                    <div>
                        <input type="text" className='navbar_searchBox' />
                    </div>
                    <div className='navbar_searchboxdiv' >
                        <div className='navbar_searchIcon' />
                    </div>
                </div>
                <div className='navBar_signIn'>
                    <div style={ {fontSize: "14px"} }> Hello, Sign In</div>
                    <div style = {{fontWeight: 'bold'}}> Account </div>
                </div>
                <div className='navbar_cart'>
                    <div src= "" className='cart_image'/>
                    <div className='cart_ItemCount' />0<div/>
                </div>
            </div>
        );
    }
}

export default NavBar;