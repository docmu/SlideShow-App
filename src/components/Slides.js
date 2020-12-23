import React, { Component } from 'react';

//Slides as a class component bc it manages state
//all the logic is related to Slides so makes sense to put it here
export default class Slides extends Component {
    //a change in the index determines the slide to be rendered on the screen so we must manage its state
    state = {
        index: 0,
    }

    //array of slides objects passed as props from App
    slides = [...this.props.slides];

    //functions are binded to the related buttons and are triggered on click
    prevSlide = () => {
        this.setState({ index: this.state.index - 1 });
    };

    nextSlide = () => {
        this.setState({ index: this.state.index + 1 });
    };

    resetSlides = () => this.setState({ index: 0 });

    render() {
        //reference to the current slide
        const slide = this.slides[this.state.index];
        //reference to the current index
        const index = this.state.index;
        return (
            <div>
                <div id="navigation" className="text-center">
                    <button onClick={this.resetSlides} data-testid="button-restart" className="small outlined">Restart</button>
                    <button onClick={this.prevSlide} disabled={index === 0} data-testid="button-prev" className="small">Prev</button>
                    <button onClick={this.nextSlide} disabled={index === this.slides.length - 1} data-testid="button-next" className="small">Next</button>
                </div>
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{slide.title}</h1>
                    <p data-testid="text">{slide.text}</p>
                </div>
            </div>
        );
    }
}

//solution using a functional component
// export default function Slides(props) {
//     const item = props.slides[props.index];
//     const index = props.index;
//     return (
//         <div>
//             <div id="navigation" className="text-center">
//                 <button onClick={props.resetSlides} data-testid="button-restart" className="small outlined">Restart</button>
//                 <button onClick={props.prevSlide} disabled={index === 0} data-testid="button-prev" className="small">Prev</button>
//                 <button onClick={props.nextSlide} disabled={index === props.slides.length - 1} data-testid="button-next" className="small">Next</button>
//             </div>
//             <div id="slide" className="card text-center">
//                 <h1 data-testid="title">{item.title}</h1>
//                 <p data-testid="text">{item.text}</p>
//             </div>
//         </div>
//     );
// }

