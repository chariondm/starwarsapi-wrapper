"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toJSON = exports.toJSON = function toJSON(data) {
  return data.json();
};

var getRandomInt = exports.getRandomInt = function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};