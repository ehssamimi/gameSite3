import React, {Component} from 'react';
import { FaFacebookF , FaInstagram ,FaTwitter} from "react-icons/fa";
class HeaderTop extends Component {
    render() {
        return (

            <div className=' w-100 d-flex h-9vh align-items-center  bg-black b-b paddingAll'  dir='rtl'>
                <div className="col-2 d-flex  align-items-center justify-content-start">
                    <FaTwitter  className='fs-12vw text-white ml-2'/>
                    <FaFacebookF className='fs-12vw text-white ml-2'/>
                    <FaInstagram  className='fs-12vw text-white ml-2'/>
                </div>
                <div className='col-8 text-center text-white fs-11vw  '>
                            A HANDMADE INTERACTIVE PRODUCTION
                </div>
                <div className='col-2 text-left fs-08vw  Color50 '>
                    English
                </div>
            </div>
        )
            ;
    }
}

export default HeaderTop;