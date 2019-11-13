import React, {Component} from 'react';
import { slide as Menu } from 'react-burger-menu'
import { FaWindowClose} from "react-icons/fa";
import usa from './../../Common/Flag_of_the_United_States.svg'


class Slider extends Component {
    showSettings (event) {
        event.preventDefault();

    }
    render() {
        return (
            <div className='mt-9vh b-r'>
                <Menu className=' w-50vw '>
                    <div className='d-flex Menu-Item w-100'>

                        <span className='col-2 h-100 align-items-center justify-content-end mr-auto'>
                            <img src={usa} alt={usa} className='imgSelf'/>
                        </span>
                        <span className='d-flex  col-10 align-items-center justify-content-end  '>
                            CLose <FaWindowClose className='ml-2'/>
                        </span>
                    </div>
                    <a id="about" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">HOME</a>
                    <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">KICKSTARTER</a>
                    <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">JOBS & TALENTS</a>
                    <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">ABOUT US</a>
                    <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">EVENTS</a>
                    <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">CONTACTS US</a>
                    {/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
                </Menu>
            </div>
        );
    }
}

export default Slider;