import React, { Component } from 'react';

export default class Slides extends Component {
    render() {
        const item = this.props.slides[this.props.index];
        const index = this.props.index;

        return (
            <div>
                <div id="navigation" className="text-center">
                    <button onClick={this.props.resetSlides} data-testid="button-restart" className="small outlined">Restart</button>
                    <button onClick={this.props.prevSlide} disabled={index === 0} data-testid="button-prev" className="small">Prev</button>
                    <button onClick={this.props.nextSlide} disabled={index === this.props.slides.length - 1} data-testid="button-next" className="small">Next</button>
                </div>
                <div id="slide" className="card text-center">
                    <h1 data-testid="title">{item.title}</h1>
                    <p data-testid="text">{item.text}</p>
                </div>
            </div>
        );
    }
}


