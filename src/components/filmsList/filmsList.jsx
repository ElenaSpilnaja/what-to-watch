import React, {PureComponent} from "react";
import SmallMovieCard from "../smallMovieCard/smallMovieCard";
import PropTypes from "prop-types";

class FilmsList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: ` `,
    };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(filmId) {
    this.setState({activeCard: filmId});
  }

  render() {
    const {films} = this.props;
    return <div className="catalog__movies-list">
      {films.map((film) => (
        <SmallMovieCard key={`film-id-` + film.filmId} film={film} onCardActive={this._handleChange}/>))};
    </div>;
  }
}

export default FilmsList;

FilmsList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        filmId: PropTypes.number.isRequired,
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired
      })
  )
};
