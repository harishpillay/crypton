/* Crypton Server, Copyright 2013 SpiderOak, Inc.
 *
 * This file is part of Crypton Server.
 *
 * Crypton Server is free software: you can redistribute it and/or modify it
 * under the terms of the Affero GNU General Public License as published by the
 * Free Software Foundation, either version 3 of the License, or (at your
 * option) any later version.
 *
 * Crypton Server is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the Affero GNU General Public
 * License for more details.
 *
 * You should have received a copy of the Affero GNU General Public License
 * along with Crypton Server.  If not, see <http://www.gnu.org/licenses/>.
*/

var colors = require('colors');

var maxLevel;
var env = process.env.NODE_ENV;
var possibleLevels = [
  'error',
  'warn',
  'info',
  'debug',
  'trace'
];

switch (env) {
  case 'test':
    maxLevel = 'trace';
    break;
  case 'production':
    maxLevel = 'info';
    break;
  default:
    maxLevel = 'debug';
    break;
}

var maxIndex = possibleLevels.indexOf(maxLevel);

module.exports = function log (level, message) {
  if (!message) {
    message = level;
    level = 'info';
  }

  var levelIndex = possibleLevels.indexOf(level);
  if (!~levelIndex || levelIndex <= maxIndex) {
    var initial = '[' + level + ']';
    console.log(initial.blue + ' ' + message);
  }
}