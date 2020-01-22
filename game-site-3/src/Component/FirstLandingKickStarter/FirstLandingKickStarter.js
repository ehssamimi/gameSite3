import React, {Component} from 'react';
import HeaderSecond from "../First/Header/HeaderSecond/HeaderSecond";
import ax from './../../Common/Export/bg.jpg';
import { FaFacebookF , FaInstagram ,FaTwitter,FaKickstarterK,FaLinkedinIn} from "react-icons/fa";

class FirstLandingKickStarter extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:''
        }
    }

    handelChange(e) {
        this.setState({
            value:e.target.value
        })
    }

    handelSend(e) {
        e.preventDefault();
        console.log(this.state.value)
    }

    render() {
        let {value}=this.props;
        return (
            <div className='w-100 h-100vh bg-firstPage'>
                <HeaderSecond/>

                <div className='w-100 d-flex  '>
                    <div className='col-6 d-flex flex-column  '>
                        <div className="h-40vh">

                        </div>
                        <div className='  w-100 ' style={{marginLeft:'2vw'}}>
                            <div className='h-22vh d-flex justify-content-start align-items-start flex-column    '>
                                <p className='paddingZero marginZero text-white fs-17vw'>100,002 SUBSCRIBERS   </p>
                                <div className='d-flex w-100 justify-content-start align-items-center h-7vh mt-4'>
                                    <input type='text' className='col-7 h-100 fs-13vw ' placeholder='ENTER YOUR EMAIL' value={value}
                                           onChange={this.handelChange.bind(this)}/>
                                    <button className='sendBtn fs-13vw h-100 col-4' onClick={this.handelSend.bind(this)}>SIGN UP
                                        NOW
                                    </button>
                                </div>
                            </div>

                            <div className='w-100'>
                                <div className='  col-4 offset-3 h-22vh  position-relative justify-content-center '>

                                        <div className="w-85  d-flex  align-items-center justify-content-around position-absolute" style={{top:'-15px',left:' 15px'}}>
                                            <FaInstagram  className='fs-11vw text-white ml-1  Instagram-header-hover'/>
                                            <FaLinkedinIn  className='fs-11vw text-white ml-1  FacebookF-header-hover'/>

                                            <FaKickstarterK  className='fs-11vw text-white ml-1  KickstarterK-header-hover'/>
                                            <FaTwitter  className='fs-11vw text-white ml-2 twitter-header-hover'/>
                                            {/*<FaFacebookF className='fs-11vw text-white ml-1  FacebookF-header-hover'/>*/}

                                        </div>
                                    <div className="w-100 h-100 backGroundSocialMedia">

                                    </div>



                                </div>
                            </div>


                        </div>
                    </div>
                    <div className='col-6'>

                    </div>
                </div>





                <div className="w-95 position-absolute d-flex align-items-end" style={{bottom:0,left:' 2vw'}}>
                <p className=' m-0 textColorFooter fs-17vw'>Day 1 </p>
                <p className=' m-0 d-flex ml-auto  textColorFooter fs-13vw'>the handMade Interactive product </p>
                </div>

                {/*<div className='main w-100 h-100vh'>*/}
                    {/*<img src={ax} alt="ax" className='imgSelf'/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default FirstLandingKickStarter;