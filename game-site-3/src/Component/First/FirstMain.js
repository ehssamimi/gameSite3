import React, {Component} from 'react';
import Video from './../../Common/background-video2_x264.mp4'
import button from './../../Common/Asset 2@3x.png';
import ax from './../../Common/POSTER_FRIEND_new-min.jpg';
import { Button } from 'reactstrap';
import { Slide } from 'react-slideshow-image';
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    // onChange: (oldIndex, newIndex) => {
    //     console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    // }
};
class FirstMain extends Component {
    constructor(props) {
        super(props);
        this.state={
            playVideo:false
        };
        // this.scrollToTop = this.scrollToTop.bind(this);

    }

    playVideo() {
        this.props.playVideo(true)
    }
    render() {
        return (
            <div className='h-100  d-flex align-items-end h-80'>
                {/*<video autoPlay muted loop id="myVideo" className='h-100 w-100 fit-fill'>*/}
                    {/*<source src={Video} type="video/mp4"/>*/}
                {/*</video>*/}
                <div className='w-100 h-85  '>
                    <img src={ax} alt="ax" className=" w-100 h-100 fit-cover"/>
                </div>
                {/*<div className='div-first h-30vh d-flex flex-column' >*/}
                    {/*<div className='pre text-white fs-35vw'>*/}
                        {/*<p>FIGHT TO HEAVEN</p>*/}
                        {/*<p>OR</p>*/}
                        {/*<p>STAY HELL</p>*/}
                    {/*</div>*/}
                    {/*<div className='d-flex flex-column col-10 marginZero paddingZero'>*/}
                        {/*<button className='button-first w-100  mb-2 fs-17vw   paddingZero'   onClick={this.playVideo.bind(this)}>WATCH TRAILER</button>*/}
                        {/*<button className='button-first  w-100  mt-2 fs-17vw   paddingZero'>KICK STARTER</button>*/}
                    {/*</div>*/}
                {/*</div>*/}
                
                {/*<div className='buttonVideo h-15'>*/}
                    {/*<img src={button} alt={'button'} className='imgSelf  z-1  pointer svg-b'/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default FirstMain;