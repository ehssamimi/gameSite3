import React, {Component} from 'react';
// import ax from './'
import { FaCopyright} from "react-icons/fa";
import ax from './../../Common/Assets-3/Fold5 and Footer/OS.png'


class Footer extends Component {
    render() {
        return (
            <div className=' h-40vh   w-100 d-flex flex-column bg-footer'>
                <div className='h-70 d-flex b-b align-items-center'>
                    <div className='d-flex flex-column'>
                        <ul>
                            <li className='list-unstyled'><a href="#" className='alink'>FAQ</a></li>
                            <li className='list-unstyled'><a href="#" className='alink'>CONTACT US</a></li>
                            <li className='list-unstyled'><a href="#" className='alink'>WATCH</a></li>
                        </ul>

                    </div>
                    <div className='d-flex flex-column'>
                        <ul>
                            <li className='list-unstyled'><a href="#" className='alink '>TERMS OF SERVICES</a></li>
                            <li className='list-unstyled'><a href="#" className='alink'>PRIVACY POLICY</a></li>
                            <li className='list-unstyled'><a href="#" className='alink'>HELP</a></li>
                        </ul>

                    </div>
                </div>
                <div className='d-flex justify-content-start align-items-center  h-30' dir='rtl'>
                    <div className='col-md-2 col-4   ml-auto  '>
                        <img src={ax}  className='imgSelf'/>
                    </div>
                    <div className='col-6 d-flex justify-content-end align-items-center h-100 '  >
                        <span className=' ml-2 fs-13vw '>2019 HANDMADE INTERACTIVE LLIC ALL RIGHTS RESERVED  </span>

                        <span className=' d-flex   align-items-center pt-1'><FaCopyright/></span>
                    </div>


                </div>

            </div>
        );
    }
}

export default Footer;