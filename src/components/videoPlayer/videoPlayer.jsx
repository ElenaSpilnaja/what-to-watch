import React from "react";

class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: props.autoplay,
      muted: props.muted
    }

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const video = this.videoRef.current;
    console.log(video)
  }

  render() {
    const {autoPlay, muted} = this.state;

    return (

      <video className="player__video"
             ref={this.videoRef}
             poster={this.props.poster}
             src={this.props.video}
             autoPlay={autoPlay}
             controls={this.props.controls} muted={muted}/>
    );
  }
}

export default VideoPlayer;
