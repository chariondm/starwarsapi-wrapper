"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlanetRandom = exports.getPlanets = exports.getPlanet = undefined;

var _config = require("./config");

var _utils = require("./utils");

/* global fetch */

var getPlanet = exports.getPlanet = function getPlanet(id) {
  return fetch(_config.API_URL + "/planets/" + id + "/").then(_utils.toJSON);
};

var getPlanets = exports.getPlanets = function getPlanets() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return fetch(_config.API_URL + "/planets/" + query).then(_utils.toJSON);
};

var getPlanetRandom = exports.getPlanetRandom = function getPlanetRandom() {
  return getPlanet((0, _utils.getRandomInt)(1, 61));
};