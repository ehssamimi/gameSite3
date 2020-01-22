import React, {Component} from 'react';
import { IoIosMenu } from "react-icons/io";
import { slide as Menu } from 'react-burger-menu';
import usa from "../../../../Common/Flag_of_the_United_States.svg";
import { FaWindowClose} from "react-icons/fa";

class HeaderSecond extends Component {
    constructor(props) {
        super(props);
        this.state={
            close:false
        }
    }


    showSettings (event) {
        event.preventDefault();

    }
    handelClickMenu(){
        this.setState(pre=>({
            close:!pre.close
        }));
        if (this.state.close){
            document.getElementById("mySidebar").style.width = "100vw";
        }else{
            document.getElementById("mySidebar").style.width = "0";
        }
    }
    render() {
        return (
            <div className=' w-100 d-flex h-9vh align-items-center  bg-black' dir='rtl'>

                <div className='col-2  fs-13vw  h-100 paddingZero d-flex align-items-center justify-content-center textColorKickStarter' dir='ltr'>
                   SOON ON KICKSTARTER !
                </div>
                <div className='col-8 text-center text-white fs-23vw  '>
                    Ticket To Heaven
                </div>

                {/*<Menu className='h-100vh'>*/}

                {/*</Menu>*/}
                <div className='col-2 d-flex h-100   justify-content-end paddingLeftMain   pr-0'>
                <div className='col-sm-9 col-md-7   text-left  text-white fs-17vw   h-100 d-flex align-items-center justify-content-end  b-r pr-3'>

                    <span className='d-flex align-items-center justify-content-center pointer' onClick={this.handelClickMenu.bind(this)}> MENU <IoIosMenu className="mr-2"/>  </span>
                </div>
            </div>
                <div className='slider d-flex ' id='mySidebar' >
                    <div style={{width:"60%"}} className='bg-dark-side'>

                     </div>
                    <div style={{width:"40%"}} className='bg-black-menu'>
                        <div className='d-flex Menu-Item w-100 paddingLeftMain'>


                        <span className='d-flex  col-10 align-items-center justify-content-start pointer  ' onClick={this.handelClickMenu.bind(this)}>
                            <FaWindowClose className='ml-2 mt-1'/>CLose
                        </span>
                            <span className='col-2 h-100 align-items-center justify-content-end MenuTxt '>
                            <img src={usa} alt={usa} className='fit-fill h-100 w-80'/>
                        </span>
                        </div>
                        <a id="about" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">HOME</a>
                        <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">KICKSTARTER</a>
                        <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">JOBS & TALENTS</a>
                        <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">ABOUT US</a>
                        <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">EVENTS</a>
                        <a id="contact" className="menu-item Menu-Item d-flex justify-content-center align-items-center" href="#">CONTACT US</a>
                        <div className='MenuTxt text-left d-flex flex-column paddingLeftMain' dir='ltr' >
                            <span className="mt-4 text-left">IF YOU ARE INTERESTED IN WORKING WITH US,</span>
                            <span  className=" ">PLEASE CONTACT US  <a id="contact" className=" linkPublisher"  href="publisher-section">HERE</a></span>
                        </div>
                    </div>





                </div>

            </div>
        );
    }
}

export default HeaderSecond;