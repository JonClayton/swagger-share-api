'use strict';

var url = require('url');


var User = require('./UserService');


module.exports.create = function create (req, res, next) {
  User.create(req.swagger.params, res, next);
};

module.exports.delete = function delete (req, res, next) {
  User.delete(req.swagger.params, res, next);
};

module.exports.getSearch = function getSearch (req, res, next) {
  User.getSearch(req.swagger.params, res, next);
};
