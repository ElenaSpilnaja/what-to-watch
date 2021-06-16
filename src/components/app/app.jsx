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
  const {film} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Main film={film}/>
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
  film: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired
      })
  )
};
export {App};
