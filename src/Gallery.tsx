import React, { Component } from "react";

interface GalleryProps {
  images: string[];
}

interface GalleryState {
  index: number;
  imageLoaded: boolean;
}

class Gallery extends Component<GalleryProps, GalleryState> {
  constructor(props: GalleryProps) {
    super(props);
    this.state = { index: 0, imageLoaded: false };
  }

  slideyClassname = "slideRight";

  render() {
    const images = this.props.images || [];
    const index = this.state.index;

    const image = images[index];
    const update = (key: number) =>
      this.setState({ index: key, imageLoaded: false });

    this.slideyClassname = this.state.imageLoaded
      ? "slideRight"
      : "image-loading";
    return (
      <div className="description gallery">
        <div className="flex-container">
          <div className="flex-item">
            <img
              className={"moody-soup-image " + this.slideyClassname}
              src={image}
              alt="screenshot"
              onLoad={() => this.setState({ imageLoaded: true })}
            />
          </div>
        </div>
        <div className="flex-container ">
          <div className="flex-item">
            {images.map((img, key) => (
              <i
                key={key}
                className={
                  "fas fa-heart gallery-icon " +
                  (key === index && "gallery-icon__selected")
                }
                onClick={() => update(key)}
              ></i>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
