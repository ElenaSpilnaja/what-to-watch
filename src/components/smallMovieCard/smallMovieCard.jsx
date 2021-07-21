import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChangeActive = this.handleChangeActive.bind(this);
  }

  handleChangeActive() {
    this.props.onCardActive(`film-id-` + this.props.film.filmId);
  }

  render() {
    const {film} = this.props;
    const {image, title} = film;
    return (
      <article onMouseEnter={this.handleChangeActive} className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={image} alt={title} width="280" height="175"/>
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
