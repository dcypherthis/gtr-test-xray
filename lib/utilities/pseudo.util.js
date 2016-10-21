'use strict';

/**
 * Adds the :active psuedo class to a selector
 *
 * @param {String} baseSelector element to wait for/click on
 * @returns {String} baseSelector:active
 */
exports.makeActive = function (baseSelector) {
  var activeState = ':active';
  return baseSelector + activeState;
};

/**
 * Adds the :hover psuedo class to a selector
 *
 * @param {String} baseSelector element to wait for/click on
 * @returns {String} baseSelector:hover
 */
exports.makeHover = function (baseSelector) {
  var hoverState = ':hover';
  return baseSelector + hoverState;
};

/**
 * Adds the :focus psuedo class to a selector
 *
 * @param {String} baseSelector element to wait for/click on
 * @returns {String} baseSelector:focus
 */
exports.makeFocus = function (baseSelector) {
  var focusState = ':focus';
  return baseSelector + focusState;
};

/**
 * Adds the :visted psuedo class to a selector
 *
 * @param {String} baseSelector element to wait for/click on
 * @returns {String} baseSelector:visited
 */
exports.makeVisited = function (baseSelector) {
  var visitedState = ':visited';
  return baseSelector + visitedState;
};