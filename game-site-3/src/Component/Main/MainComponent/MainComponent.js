import React, {Component} from 'react';



import PlayVideo from "../../PlayVideo/PlayVideo";
 import First from "../../First/First";
import Second from "../../Second/Second";
import Three from "../../Three/Three";
import Fiveth from "../../Fiveth/Fiveth";
import Footer from "../../Footer/Footer";
import Fourth from "../../Fourth/Fourth";
import Slider from "../../Slider/Slider";

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state={
            playVideo:false
        };
    }
    playVideo(state){
        console.log('ckick on video');
        this.setState({
            playVideo:state
        })
    }


    render() {
        return (
            <div>
                {
                    this.state.playVideo?
                        <PlayVideo  playVideo={this.playVideo.bind(this)}/>
                        :
                        <div>
                            {/*<Slider/>*/}
                            <div>
                                <First playVideo={this.playVideo.bind(this)}/>
                                {/*<Second/>*/}
                                {/*<Three/>*/}
                                {/*<Fourth/>*/}
                                {/*<Fiveth/>*/}
                                {/*<Footer/>*/}
                            </div>

                            {/*<SecondPage/>*/}

                        </div>

                }


                {/*<Nine2/>*/}

            </div>
        );
    }
}

export default MainComponent;