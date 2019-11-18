import React, {Component} from 'react';
import Lightgray from "../../Common/Assets-3/Fold3/right gray.png";
import { Slide } from 'react-slideshow-image';
// import woman from "../../Common/Assets-3/Fold2/woman.png";
// import joker from "../../Common/Assets-3/Fold2/friend.png";
// import {Button} from "reactstrap";

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

class Three extends Component {
    render() {
        return (
            <div className=' h-100vh d-flex flex-column position-relative'>
                <div className='h-10vh w-100 bg-black d-flex justify-content-center align-items-center fs-2vw text-white b-t'>
                    WE ALWAYS HAVE YOU COVERED!
                </div>

                <div className='d-flex h-80vh w-100 position-relative ' dir=' '>
                    <div className="w-100 h-100">
                        <Slide {...properties}>
                            <div className="each-slide d-flex ">
                                <div className='col-6 bg-1 d-flex justify-content-start align-items-center flex-column'>
                                    <p className='text-white fs-4vw'>ALWAYS ARMED</p>
                                    <p className='text-white fs-4vw'>ALWAYS HEALTHY</p>

                                </div>
                                <div className='col-6 bg-2 d-flex justify-content-center align-items-start'>
                                    <p className='text-white fs-4vw'>NEVER TRUST THE LAND</p>
                                </div>
                            </div>
                            <div className="each-slide d-flex ">
                                <div className='col-6 bg-3 d-flex justify-content-start align-items-center flex-column'>
                                    <p className='text-white fs-4vw'>ALWAYS ARMED</p>
                                    <p className='text-white fs-4vw'>ALWAYS HEALTHY</p>
                                </div>
                                <div className='col-6 bg-4 d-flex justify-content-center align-items-start'>
                                    <p className='text-white fs-4vw'>NEVER TRUST THE LAND</p>

                                </div>
                            </div>

                        </Slide>
                    </div>
                </div>
                {/*<div className='h-10vh w-100 bg-black d-flex justify-content-end align-items-center position-relative'>*/}
              {/*AA*/}

                {/*</div>*/}
            </div>
        );
    }
}

export default Three;