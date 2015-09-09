'use strict';

var logger = require('minilog');
logger.enable();

module.exports = {

  config: function(options) {
    // TODO: Configure whatever makes sense
  },

  get: function(name) {

    return logger(name);
  }
};
