import React, {Component} from 'react';
import { IoIosMenu } from "react-icons/io";
import { slide as Menu } from 'react-burger-menu';

class HeaderSecond extends Component {
    showSettings (event) {
        event.preventDefault();

    }
    render() {
        return (
            <div className=' w-100 d-flex h-12vh align-items-center  bg-black' dir='rtl'>

                <div className='col-2   text-white fs-13vw  h-100 paddingZero d-flex align-items-center justify-content-center bg-green' dir='ltr'>
                   SOON ON KICKSTARTER !
                </div>
                <div className='col-8 text-center text-white fs-23vw  '>
                    Ticket To Heaven
                </div>

                {/*<Menu className='h-100vh'>*/}
                    {/*<a id="home" className="menu-item" href="/">Home</a>*/}
                    {/*<a id="about" className="menu-item" href="/about">About</a>*/}
                    {/*<a id="contact" className="menu-item" href="/contact">Contact</a>*/}
                    {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
                {/*</Menu>*/}
                {/*<div className='col-2 d-flex h-100   justify-content-end paddingLeftMain   pr-0'>*/}
                {/*<div className='col-6 text-left  text-white fs-17vw   h-100 d-flex align-items-center justify-content-end  b-r pr-3'>*/}



                    {/*<span className='d-flex align-items-center justify-content-center'> MENU <IoIosMenu className="mr-2"/>  </span>*/}
                {/*</div>*/}
            {/*</div>*/}

            </div>
        );
    }
}

export default HeaderSecond;