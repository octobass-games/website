import React, { Component } from 'react';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  render() {
    const images = this.props.images || []
    const index = this.state.index;

    const image = images[index]
    const next = () => this.setState({ index: (index + 1) % images.length })
    return (
      <div className="flex-container description gallery">
        <h3 className="gallery-header">Screenshots</h3>
        <div className="flex-item">
          <img className="moody-soup-image" src={image} alt="screenshot"/>
        </div>
        {images.length > 1 && <div className="flex-item">
          <i className="fas fa-arrow-right" onClick={next}></i>
        </div>}
      </div>)
  }
}

export default Gallery;
