import React, {Component} from 'react';
import gun from "../../Common/Assets-3/Fold4/guns.png";
import { FaYoutube , FaInstagram ,FaTwitter} from "react-icons/fa";

class Fourth extends Component {
    render() {
        return (
            <div className=' h-110vh d-flex flex-column position-relative  bg-black b-b'>
                <div className='h-35vh text-center d-flex flex-column bg-black b-t'>
                    <p  className='fs-35vw text-white marginZero'>BEAUTIFUL GUN</p>
                    <p className='fs-35vw text-white marginZero'>MAKE A BEAUTIFUL KILL!</p>
                    <p className='fs-15vw text-white marginZero'>ALL GUNS COME WITH EXCLUSIVE SKINS, FOR YOU TO MAKE</p>
                    <p className='fs-15vw text-white marginZero'>BEAUTIFUL KILLS!</p>
                </div>
                <div className='w-100   h-50vh bg-black d-flex align-items-start justify-content-center paddingZero position-relative'>
                    <img src={gun} alt={gun} className=' h-80 w-75' />

                    <div className='div-fourth-1 z-3'>
                        <h3 className='marginZero text-white'>AK47</h3>
                        <h3 className='marginZero text-white'>ASSAULT RIFLE</h3>
                    </div>

                    <div className='div-fourth-2 z-3'>
                        <h3 className='marginZero text-white'>THE SAME AK47</h3>
                        <h3 className='marginZero text-white'>BUT A BEAUTIFUL KILLING </h3>
                        <h3 className='marginZero text-white'>MACHINE </h3>
                    </div>

                </div>

                <div className='d-flex justify-content-center align-items-center w-100 h-20vh mb-5vh' dir='rtl'>
                    <div className='col-4 h-100 d-flex justify-content-center align-items-center bg-4-1' >
                        <span className='ml-2 fs-2vw'>INSTAGRAM</span>
                        <FaInstagram  className='fs-5vw text-white  '/>
                    </div>
                    <div className='col-4 h-100 d-flex justify-content-center align-items-center  bg-4-2'>
                        <span className='ml-2 fs-2vw'>TWITTER</span>
                        <FaTwitter  className='fs-5vw text-white  '/>

                    </div>
                    <div className='col-4 h-100 d-flex justify-content-center align-items-center bg-4-3'>
                        <span className='ml-2 fs-2vw'> YOUTUBE</span>
                        <FaYoutube  className='fs-5vw text-white  '/>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Fourth;