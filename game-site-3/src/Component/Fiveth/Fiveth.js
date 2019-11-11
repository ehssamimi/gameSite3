import React, {Component} from 'react';
import mockups from "../../Common/Assets-3/Fold5 and Footer/mockups.png";
import right from "../../Common/Assets-3/Fold5 and Footer/right.png";

class Fiveth extends Component {
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
        console.log(this.state.value)

    }

    render() {
        let {value}=this.state;
        return (
            <div className=' h-110vh d-flex flex-column position-relative  bg-black b-b'>
                <div className='h-15vh d-flex justify-content-center align-items-center b-b text-white fs-23vw'>
                    COMMING SOON ...
                </div>
                <div className='h-70vh d-flex   position-relative  bg-black mt-10vh'>
                    <div className='col-5   h-100 d-flex align-items-start justify-content-start ml-2vw '>
                        <img src={mockups} alt={mockups} className=' h-100 w-100'/>
                    </div>
                    <div>
                        <p className='paddingZero marginZero text-white fs-5vw'>AVAILABLE ON </p>
                        <p className='paddingZero marginZero text-white fs-5vw'>IOS,ANDROID,PC </p>
                    </div>
                    <div className='col-3 ml-auto'>
                        <img src={right} alt={right} className=' h-100 w-100'/>
                    </div>
                </div>
                <div className='h-30vh d-flex justify-content-center align-items-center flex-column mb-5vh mt-3vh'>
                    <p className='paddingZero marginZero text-white fs-23vw'>STAY UPDATED WITH OUR WEEKLY
                        NEWSLETTER </p>
                    <div className='d-flex w-100 justify-content-center align-items-center h-9vh'>
                        <input type='text' className='col-4 h-100 fs-17vw' placeholder='ENTER YOUR EMAIL' value={value}
                               onChange={this.handelChange.bind(this)}/>
                        <button className='sendBtn fs-17vw h-100 col-2' onClick={this.handelSend.bind(this)}>SIGN UP
                            NOW
                        </button>
                    </div>

                </div>

            </div>
        );
    }
}

export default Fiveth;