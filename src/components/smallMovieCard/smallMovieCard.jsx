import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import VideoPlayer from "../videoPlayer/videoPlayer";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      autoplay: false,
      controls: false,
      muted: true,
      video: ''
    }

    this.handleChangeActive = this.handleChangeActive.bind(this);
  }

  handleChangeActive() {
    this.props.onCardActive(`film-id-` + this.props.film.filmId);
    setTimeout(()=>{
      this.setState({autoplay: true, controls: true, video: this.props.film.video})
    },1000)
  }

  render() {
    const {film} = this.props;
    const {image, title, video} = film;
    return (
      <article onMouseEnter={this.handleChangeActive} className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <VideoPlayer

                       poster={image}
                       video={this.state.video}
                       autoplay={this.state.autoplay}
                       controls={this.state.controls}
                       muted={this.state.muted}/>
        </div>
        <h3 className="small-movie-card__title">
          <Link className="small-movie-card__link" to="/films/1">{title}</Link>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  onCardActive: PropTypes.func,
  film: PropTypes.shape({
    filmId: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    video: PropTypes.string.isRequired
  })

};

export default SmallMovieCard;
