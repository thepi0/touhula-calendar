var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import classNames from 'classnames';
import parse from 'date-fns/parse';
var styles = {
  'root': 'Cal__Day__root',
  'preselected': 'Cal__Day__preselected',
  'nextselected': 'Cal__Day__nextselected',
  'prevselected': 'Cal__Day__prevselected',
  'multiple': 'Cal__Day__multiple',
  'enabled': 'Cal__Day__enabled',
  'highlighted': 'Cal__Day__highlighted',
  'today': 'Cal__Day__today',
  'disabled': 'Cal__Day__disabled',
  'selected': 'Cal__Day__selected',
  'selection': 'Cal__Day__selection',
  'nextdisabled': 'Cal__Day__nextdisabled',
  'prevdisabled': 'Cal__Day__prevdisabled',
  'range': 'Cal__Day__range',
  'start': 'Cal__Day__start',
  'betweenRange': 'Cal__Day__betweenRange',
  'end': 'Cal__Day__end',
  'day': 'Cal__Day__day',
  'month': 'Cal__Day__month'
};

var Day = function (_PureComponent) {
  _inherits(Day, _PureComponent);

  function Day() {
    var _temp, _this, _ret;

    _classCallCheck(this, Day);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _PureComponent.call.apply(_PureComponent, [this].concat(args))), _this), _this.handleClick = function () {
      var _this$props = _this.props,
          date = _this$props.date,
          isDisabled = _this$props.isDisabled,
          onClick = _this$props.onClick;


      if (!isDisabled && typeof onClick === 'function') {
        onClick(parse(date));
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Day.prototype.renderSelection = function renderSelection(selectionColor) {
    var _props = this.props,
        day = _props.day,
        date = _props.date,
        isToday = _props.isToday,
        todayLabel = _props.locale.todayLabel,
        monthShort = _props.monthShort,
        textColor = _props.theme.textColor,
        selectionStyle = _props.selectionStyle;


    return React.createElement('div', {
      className: styles.selection,
      'data-date': date
    });
  };

  Day.prototype.render = function render() {
    var _classNames;

    var _props2 = this.props,
        className = _props2.className,
        currentYear = _props2.currentYear,
        date = _props2.date,
        day = _props2.day,
        handlers = _props2.handlers,
        isDisabled = _props2.isDisabled,
        isHighlighted = _props2.isHighlighted,
        isToday = _props2.isToday,
        isSelected = _props2.isSelected,
        isPreSelected = _props2.isPreSelected,
        prevDisabled = _props2.prevDisabled,
        nextDisabled = _props2.nextDisabled,
        monthShort = _props2.monthShort,
        _props2$theme = _props2.theme,
        selectionColor = _props2$theme.selectionColor,
        todayColor = _props2$theme.todayColor,
        year = _props2.year;


    return React.createElement(
      'li',
      _extends({
        className: classNames(styles.root, (_classNames = {}, _classNames[styles.today] = isToday, _classNames[styles.highlighted] = isHighlighted, _classNames[styles.selected] = isSelected, _classNames[styles.preselected] = isPreSelected, _classNames[styles.prevdisabled] = prevDisabled, _classNames[styles.nextdisabled] = nextDisabled, _classNames[styles.disabled] = isDisabled, _classNames[styles.enabled] = !isDisabled, _classNames), className),
        onClick: this.handleClick,
        'data-date': date
      }, handlers),
      day,
      isSelected && this.renderSelection()
    );
  };

  return Day;
}(PureComponent);

export { Day as default };