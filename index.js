'use strict';

let Logger = require('minilog');
Logger.enable();

const Levels = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error'
};

module.exports = {

  Levels: Levels,

  setLevel: (level) => {

    Logger.suggest.defaultResult = false;

    Logger
      .suggest
      .clear()
      .allow(/[\s\S]/, level || Levels.ERROR);

    Logger.enable();
  },

  get: (name) => {

    return Logger(name);
  }
};
