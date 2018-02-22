function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { scrollbarSize } from '../utils';
var styles = {
  'wrapper': 'Cal__Weekdays__wrapper',
  'root': 'Cal__Weekdays__root',
  'mini': 'Cal__Weekdays__mini',
  'day': 'Cal__Weekdays__day'
};

var Weekdays = function (_PureComponent) {
  _inherits(Weekdays, _PureComponent);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
  }

  Weekdays.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        weekdays = _props.weekdays,
        weekStartsOn = _props.weekStartsOn,
        theme = _props.theme,
        miniCalendar = _props.miniCalendar;

    var orderedWeekdays = void 0;
    if (miniCalendar) {
      orderedWeekdays = [].concat(weekdays.slice(weekStartsOn, 6), weekdays.slice(1, weekStartsOn));
    } else {
      orderedWeekdays = [].concat(weekdays.slice(weekStartsOn, 7), weekdays.slice(0, weekStartsOn));
    }

    return React.createElement(
      'div',
      { className: styles.wrapper, style: { backgroundColor: miniCalendar ? theme.miniweekdayBackground : theme.weekdayBackground, height: miniCalendar ? theme.miniWeekdaysHeight : theme.weekdaysHeight } },
      React.createElement(
        'ul',
        {
          className: classNames(styles.root, (_classNames = {}, _classNames[styles.mini] = miniCalendar, _classNames)),
          style: {
            backgroundColor: miniCalendar ? theme.miniWeekdayColor : theme.weekdayColor,
            color: theme.textColor.weekday,
            paddingRight: scrollbarSize
          },
          'aria-hidden': true
        },
        orderedWeekdays.map(function (val, index) {
          return React.createElement(
            'li',
            { key: 'Weekday-' + index, className: styles.day },
            val
          );
        })
      )
    );
  };

  return Weekdays;
}(PureComponent);

export { Weekdays as default };
process.env.NODE_ENV !== "production" ? Weekdays.propTypes = {
  locale: PropTypes.object,
  theme: PropTypes.object
} : void 0;