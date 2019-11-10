import React, {Component} from 'react';
import Video from './../../Common/background-video2_x264.mp4'
import button from './../../Common/down.svg';
import { Button } from 'reactstrap';
class FirstMain extends Component {
    render() {
        return (
            <div className='h-100'>
                <video autoPlay muted loop id="myVideo" className='h-100 w-100 fit-fill'>
                    <source src={Video} type="video/mp4"/>
                </video>
                <div className='div-first h-30vh d-flex flex-column' >
                    <div className='pre text-white fs-35vw'>
                        <p>FIGHT TO HEAVEN</p>
                        <p>OR</p>
                        <p>STAY HELL</p>
                    </div>
                    <div className='d-flex flex-column col-10 '>
                        <Button className='button-first  m-2 fs-17vw'>WATCH TRAILER</Button>
                        <Button className='button-first m-2 fs-17vw'>KICK STARTER</Button>
                    </div>
                </div>

                <div className='buttonVideo h-15'>
                    <img src={button} alt={'button'} className='imgSelf  z-1  pointer'/>
                </div>
            </div>
        );
    }
}

export default FirstMain;