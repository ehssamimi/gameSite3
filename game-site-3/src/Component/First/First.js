import React, {Component} from 'react';

import Headers from "./Header/Headers";
import FirstMain from "./FirstMain";

class First extends Component {
    render() {
        return (
            <div className='h-100vh  '>
                <Headers/>
                <FirstMain/>
            </div>
        );
    }
}

export default First;