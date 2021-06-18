import React from "react";
import ReactDOM from "react-dom";
import {App} from "./components/app/app";
import {films, filmReviews,filmsFilter} from "./mocks/films";

ReactDOM.render(
    <App films={films} reviews={filmReviews} infoForFilter={filmsFilter}/>,
    document.querySelector(`#root`)
);
