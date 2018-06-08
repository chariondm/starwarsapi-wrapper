/* global fetch */

import { API_URL } from "./config";
import { toJSON, getRandomInt } from "./utils";


export const getPlanet = id =>
  fetch(`${ API_URL}/planets/${ id }/`).then(toJSON);

export const getPlanets = (query = '') =>
  fetch(`${ API_URL}/planets/${ query }`).then(toJSON);

export const getPlanetRandom = () =>
  getPlanet(getRandomInt(1, 61));
