import React, {Component} from 'react';
import HeaderSecond from "../First/Header/HeaderSecond/HeaderSecond";
 import axios from 'axios'
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';


import { FaFacebookF , FaInstagram ,FaTwitter,FaKickstarterK,FaLinkedinIn} from "react-icons/fa";

class FirstLandingKickStarter extends Component {
    constructor(props) {
        super(props);
        this.state={
            value:'',day:"",subscribe:""
        }
    }
    componentDidMount(){
        let old='1579857046744';
        let oldS='1579557046744';

        var d = new Date();
        var todayMS=(d.getHours()*3600000)+(d.getMinutes()*60000)+(d.getSeconds()*1000);
        let now=d.getTime();
             let day=Math.floor((now- old)/86400000);
             let dayS=Math.floor((now- oldS)/86400000);

         this.setState({
            day
        });

        var fibonacci_series = function (n,TimeStamp)
        {
            if (n===1||0)
            {
                return 1;
            }
            else
            {
               let x= (Math.floor(Math.pow(1.6, n))-Math.floor(Math.pow(-1.6, -n)))/Math.floor((Math.pow(5, 0.5)))*10;
               let y= (Math.floor(Math.pow(1.6, n+1))-Math.floor(Math.pow(-1.6, -(n+1))))/Math.floor((Math.pow(5, 0.5)))*10;
                 return  Math.floor(x+((y-x)*TimeStamp/86400000));
            }
        };
        let subscribe=fibonacci_series(dayS,todayMS);
        this.setState({
            subscribe
        })
    }

      ValidateEmail(mail)
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
        {
            return (true)
        }
         return (false)
    }

    handelChange(e) {
        this.setState({
            value:e.target.value
        })
    }

   async handelSend(e) {
        e.preventDefault();
         let validate=this.ValidateEmail(this.state.value);
         console.log(this.state.value)
         console.log(validate)
        if (validate){
                 var resp="";
                await axios.get(`http://chichiapp.ir:30032/ticket-to-heaven/kickstarter/email/add?email=${this.state.value}` ).then(function (response) {
                    // console.log(response);
                    // let { ItemId } = response.data ;
                     console.log(response);
                    NotificationManager.success('Your join to team', 'congratulations');
                }).catch(function (error) {
                    NotificationManager.error('your email set before', 'Invalid Email');

                    console.log(error);
                 });
         }else {
             NotificationManager.error('your email not valid', 'Invalid Email');
        }

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
                        <div className='  w-100  ml-inputs'    >
                            <div className='h-22vh d-flex justify-content-start align-items-start flex-column    '>
                                <p className='paddingZero marginZero text-white fs-17vw-inputs'>{this.state.subscribe} SUBSCRIBERS   </p>
                                <div className='d-flex w-100 justify-content-start align-items-center h-7vh mt-4'>
                                    <input type='text' className='  col-7 h-100 fs-13vw ' placeholder='ENTER YOUR EMAIL' value={value}
                                           onChange={this.handelChange.bind(this)}/>
                                    <button className='sendBtn fs-13vw h-100 col-sm-5  col-4' onClick={this.handelSend.bind(this)}>SIGN UP
                                        NOW
                                    </button>
                                </div>
                            </div>

                            <div className='w-100'>
                                <div className='  w-15vw offset-3 h-22vh  position-relative justify-content-center '>

                                        <div className="w-100  d-flex  align-items-center justify-content-around position-absolute" style={{top:'-15px' }}>
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
                <p className=' m-0 textColorFooter fs-17vw-inputs'>Day{this.state.day} </p>
                <p className=' m-0 d-flex ml-auto  textColorFooter fs-13vw-inputs'>the handMade Interactive product </p>
                </div>

                {/*<div className='main w-100 h-100vh'>*/}
                    {/*<img src={ax} alt="ax" className='imgSelf'/>*/}
                {/*</div>*/}
                <NotificationContainer/>
            </div>
        );
    }
}

export default FirstLandingKickStarter;