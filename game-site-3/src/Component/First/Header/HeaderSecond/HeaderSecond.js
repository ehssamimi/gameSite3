import React, {Component} from 'react';
import { IoIosMenu } from "react-icons/io";
class HeaderSecond extends Component {
    render() {
        return (
            <div className=' w-100 d-flex h-10vh align-items-center  bg-black' dir='rtl'>

                <div className='col-2   text-white fs-13vw  h-100 paddingZero d-flex align-items-center justify-content-center bg-green' dir='ltr'>
                   SOON ON KICKSTARTER !
                </div>
                <div className='col-9 text-center text-white fs-23vw  '>
                    Ticket To Heaven
                </div>
                <div className='col-1 text-left  text-white fs-17vw b-r paddingLeftMain h-100 d-flex align-items-center'>
                    <span> MENU <IoIosMenu />  </span>
                </div>
            </div>
        );
    }
}

export default HeaderSecond;