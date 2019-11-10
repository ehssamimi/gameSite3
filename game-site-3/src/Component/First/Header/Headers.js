import React, {Component} from 'react';
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderSecond from "./HeaderSecond/HeaderSecond";

class Headers extends Component {
    render() {
        return (
          <header className='headerTop w-100 '>
              <HeaderTop/>
              <HeaderSecond/>
          </header>
        );
    }
}

export default Headers;