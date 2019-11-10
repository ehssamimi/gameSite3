import React, {Component} from 'react';
import man from './../../Common/Assets-3/Fold2/man.png';
import joker from './../../Common/Assets-3/Fold2/friend.png';
import woman from './../../Common/Assets-3/Fold2/woman.png';
import {Button} from "reactstrap";

class Second extends Component {
    render() {
        return (
            <div className=' h-100vh d-flex flex-column position-relative'>
                <div className='h-10vh w-100 bg-black d-flex justify-content-center align-items-center fs-2vw text-white'>
                    LETS MEET “THE FRIEND”
                </div>
                <div className='d-flex h-80vh w-100 position-relative ' dir='rtl'>
                    <div className='col-4 bg-second-green h-100 d-flex align-items-center justify-content-start paddingZero'>
                        <img src={man} alt={man} className=' h-65 w-65' />

                    </div>
                    <div className='col-4 bg-second-red h-100'>
                        {/*<img src={man} alt={man} className='w-100 h-100' />*/}

                    </div>
                    <div className='col-4 bg-second-yellow h-100 d-flex align-items-center justify-content-end paddingZero '>
                        <img src={woman} alt={woman} className='h-65  w-93 mt-2' />

                    </div>
                    <div className='joker d-flex align-items-end'>
                        <img src={joker} alt={joker} className='h-98 w-100' />
                    </div>
                    <p className='text-Second-Tab marginZero text-line-height'>YOU ARE ONLY  REAL FRIEND</p>
                </div>
                <div className='h-10vh w-100 bg-black d-flex justify-content-end align-items-center position-relative'>
                    <p className='  marginZero tab-second-text  '>AND YOUR TICKET TO HEAVEN</p>
                    <Button className='button-second m-2 fs-17vw w-12vw ml-auto '>KICK STARTER</Button>

                </div>
            </div>
        );
    }
}

export default Second;