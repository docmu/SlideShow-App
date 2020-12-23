import React, { Component } from 'react';
import './App.css';
import 'h8k-components';

import Slides from './components/Slides';
const title = "Slideshow App";

//App as functional component since it's stateless
export default function App({ slides }) {
    return (
        <div>
            <h8k-navbar header={title}></h8k-navbar>
            <Slides slides={slides} />
        </div>
    );

}

//App as a class component bc it manages state; all the logic for slides lie here
// export default class App extends Component {
//     slides = this.props.slides;
//     state = {
//         index: 0,
//     }
//     prevSlide = () => {
//         this.setState({ index: this.state.index - 1 });
//     };
//     nextSlide = () => {
//         this.setState({ index: this.state.index + 1 });
//     };
//     resetSlides = () => this.setState({ index: 0 });
//     render() {
//         return (
//             <div>
//                 <h8k-navbar header={title}></h8k-navbar>
//                 <Slides
//                     prevSlide={this.prevSlide}
//                     nextSlide={this.nextSlide}
//                     resetSlides={this.resetSlides}
//                     slides={this.slides}
//                     index={this.state.index}
//                 />
//             </div>
//         );
//     }
// }


