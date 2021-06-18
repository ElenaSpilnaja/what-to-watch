import React, {PureComponent} from "react";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handleChangeActive = this.handleChangeActive.bind(this);
  }

  handleChangeActive () {
    this.props.onCardActive('film-id-'+this.props.film.filmId)
  }

  render(){
    const {film} = this.props;
    const {image, title} = film;
    return(
      <article onMouseEnter={this.handleChangeActive} className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={image}
               alt={title} width="280" height="175"/>
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
}

}

export default SmallMovieCard;
