import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Main} from "../main/main";
import {SignIn} from "../../pages/sign-in/sign-in";
import {MyList} from "../../pages/my-list/my-list";
import {Film} from "../../pages/film/film";
import {AddReview} from "../../pages/add-review/add-review";
import {Player} from "../../pages/player/player";

const App = (props) => {
  const {films, reviews, infoForFilter} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main films={infoForFilter}/>
        </Route>
        <Route path="/login" exact>
          <SignIn/>
        </Route>
        <Route path="/mylist" exact>
          <MyList/>
        </Route>
        <Route path="/films/1" exact>
          <Film/>
        </Route>
        <Route path="/films/1/review" exact>
          <AddReview/>
        </Route>
        <Route path="/player/1" exact>
          <Player/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape({
        filmId: PropTypes.number.isRequired,
        filmTitle: PropTypes.string.isRequired,
        filmImage: PropTypes.string.isRequired,
        filmBgImage: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        trailer: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        ratingName: PropTypes.func.isRequired,
        numberOfReviews: PropTypes.number.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        director: PropTypes.string.isRequired,
        stars: PropTypes.arrayOf(PropTypes.string).isRequired,
        runTime: PropTypes.string.isRequired
      })
  ),
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        filmId: PropTypes.number.isRequired,
        filmTitle: PropTypes.string.isRequired,
        filmReviews: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          data: PropTypes.instanceOf(Date).isRequired,
          rating: PropTypes.number.isRequired,
          ratingName: PropTypes.func.isRequired,
          description: PropTypes.arrayOf(PropTypes.string).isRequired,
        }))
      })
  ),
  infoForFilter: PropTypes.arrayOf(
      PropTypes.shape({
        filmId: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        video: PropTypes.string.isRequired
      })
  ),
};
export {App};
