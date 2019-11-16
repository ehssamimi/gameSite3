import React, {Component} from 'react';
import man from './../../Common/Assets-3/Fold2/man.png';
import joker from './../../Common/Assets-3/Fold2/friend.png';
import woman from './../../Common/Assets-3/Fold2/woman.png';
import {Button} from "reactstrap";

class Second extends Component {
    constructor(props) {
        super(props);
        this.state={
            showMore:false
        }
    }
    showMore(){
        this.setState(pre=>({
            showMore:!pre.showMore
        }))

    }

    render() {
        let{showMore}=this.state;
        return (
            <div className=' h-100vh d-flex flex-column position-relative bg-black '>
                <div className='h-10vh w-100 bg-black d-flex justify-content-center align-items-center fs-2vw text-white b-t'>
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
                    <p className='text-Second-Tab marginZero text-line-height '>YOU ARE ONLY  REAL FRIEND</p>
                </div>
                <div className='h-10vh w-100 bg-black d-flex justify-content-end align-items-center position-relative  mb-3'>
                    <p className='  marginZero tab-second-text  '>AND YOUR TICKET TO HEAVEN</p>
                    <div className='paddingRightMain ml-auto'>
                        {
                            showMore?<Button className='button-first m-2 fs-17vw w-12vw   '  onClick={this.showMore.bind(this)}>Show Less</Button>:<Button className='button-second m-2 fs-17vw w-12vw     ' onClick={this.showMore.bind(this)}>LEARN MORE</Button>
                        }
                    </div>


                </div>

                {
                    showMore?
                        <div className='detail-section-2 z-2 w-100 d-flex justify-content-center align-items-center' onClick={this.showMore.bind(this)}>
                            <div className='d-flex flex-column  col-4 fs-text-2'>
                                <p>age:37</p>
                                <p>height:175cm</p>
                                <p>eye color:brown</p>
                                <p>career: vice president of mad ego tournaments</p>
                            </div>
                            <div className='   d-flex flex-column  col-4 fs-text-2'>
                                <p >I am the "friend", the person who runs the tournaments,</p>
                                <p > I believe these tournaments are great opportunity for people</p>
                                <p >to get a chance to live a better life.</p>
                                <p >if you want to know more about me</p>
                                <p >I always thinking you should care about</p>
                                <p >your appearances, I personally never</p>
                                <p > smoke a cigarette, never stay late nights</p>
                                <p >and eat vegetables only to</p>
                                <p > keep my body healthy!</p>
                            </div>
                        </div>

                        :''
                }
            </div>
        );
    }
}

export default Second;