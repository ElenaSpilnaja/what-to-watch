import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import {films, filmsFilter} from "./mocks/films";
ReactDOM.render(
    <App films={films} infoForFilter={filmsFilter}/>,
    document.querySelector(`#root`)
);
