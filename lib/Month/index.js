'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utils = require('../utils');

var _format = require('date-fns/format');

var _format2 = _interopRequireDefault(_format);

var _parse = require('date-fns/parse');

var _parse2 = _interopRequireDefault(_parse);

var _get_day = require('date-fns/get_day');

var _get_day2 = _interopRequireDefault(_get_day);

var _add_days = require('date-fns/add_days');

var _add_days2 = _interopRequireDefault(_add_days);

var _sub_days = require('date-fns/sub_days');

var _sub_days2 = _interopRequireDefault(_sub_days);

var _each_day = require('date-fns/each_day');

var _each_day2 = _interopRequireDefault(_each_day);

var _is_before = require('date-fns/is_before');

var _is_before2 = _interopRequireDefault(_is_before);

var _is_after = require('date-fns/is_after');

var _is_after2 = _interopRequireDefault(_is_after);

var _is_date = require('date-fns/is_date');

var _is_date2 = _interopRequireDefault(_is_date);

var _is_same_year = require('date-fns/is_same_year');

var _is_same_year2 = _interopRequireDefault(_is_same_year);

var _is_this_month = require('date-fns/is_this_month');

var _is_this_month2 = _interopRequireDefault(_is_this_month);

var _is_this_year = require('date-fns/is_this_year');

var _is_this_year2 = _interopRequireDefault(_is_this_year);

var _is_within_range = require('date-fns/is_within_range');

var _is_within_range2 = _interopRequireDefault(_is_within_range);

var _get_iso_week = require('date-fns/get_iso_week');

var _get_iso_week2 = _interopRequireDefault(_get_iso_week);

var _start_of_year = require('date-fns/start_of_year');

var _start_of_year2 = _interopRequireDefault(_start_of_year);

var _start_of_week = require('date-fns/start_of_week');

var _start_of_week2 = _interopRequireDefault(_start_of_week);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    'rows': 'Cal__Month__rows',
    'row': 'Cal__Month__row',
    'partial': 'Cal__Month__partial',
    'root': 'Cal__Month__root',
    'mini': 'Cal__Month__mini',
    'multiple': 'Cal__Month__multiple',
    'indicator': 'Cal__Month__indicator',
    'display': 'Cal__Month__display',
    'month': 'Cal__Month__month',
    'year': 'Cal__Month__year',
    'indicatorCurrent': 'Cal__Month__indicatorCurrent',
    'label': 'Cal__Month__label',
    'partialFirstRow': 'Cal__Month__partialFirstRow',
    'weekNumber': 'Cal__Month__weekNumber'
};

var Month = function (_PureComponent) {
    _inherits(Month, _PureComponent);

    function Month() {
        _classCallCheck(this, Month);

        return _possibleConstructorReturn(this, _PureComponent.apply(this, arguments));
    }

    Month.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
        var differentLastUpdate = nextProps.lastUpdate !== this.props.lastUpdate;
        var differentSelectionStart = nextProps.selected.start_time !== this.props.selected.start_time;
        var differentSelectionEnd = nextProps.selected.end_time !== this.props.selected.end_time;
        var differentSelectionDone = nextProps.passThrough.selectionDone !== this.props.passThrough.selectionDone;
        var differentUpdateFromController = nextProps.passThrough.updateFromController !== this.props.passThrough.updateFromController;
        return differentLastUpdate || differentSelectionStart || differentSelectionEnd || differentSelectionDone || differentUpdateFromController;
    };

    Month.prototype.renderRows = function renderRows() {
        var _props = this.props,
            DayComponent = _props.DayComponent,
            disabledDates = _props.disabledDates,
            originalDisabledDates = _props.originalDisabledDates,
            lastSelectableDate = _props.lastSelectableDate,
            disabledDays = _props.disabledDays,
            monthDate = _props.monthDate,
            lastUpdate = _props.lastUpdate,
            locale = _props.locale,
            maxDate = _props.maxDate,
            minDate = _props.minDate,
            min = _props.min,
            max = _props.max,
            rowHeight = _props.rowHeight,
            rows = _props.rows,
            selected = _props.selected,
            miniCalendar = _props.miniCalendar,
            preselected = _props.preselected,
            getDateOffset = _props.getDateOffset,
            today = _props.today,
            passThrough = _props.passThrough;

        var year = monthDate.getFullYear();
        var month = monthDate.getMonth();
        var monthRows = [];
        var lastDate = (0, _format2.default)((0, _sub_days2.default)(lastSelectableDate, 1), 'YYYY-MM-DD', { locale: locale.locale });
        var day = 0;
        var isDisabled = false;
        var nextDisabled = false;
        var beforeLastDisabled = false;
        var prevDisabled = false;
        var isToday = false;
        var dateDisabled = { date: null, type: null };
        var selectionArray = passThrough.selectionArray;
        var preselectedDates = passThrough.preselectedDates;
        var selectionType = passThrough.selectionType;
        var selectionDone = passThrough.selectionDone;
        var date = void 0,
            nextDate = void 0,
            prevDate = void 0,
            days = void 0,
            dow = void 0,
            nextdow = void 0,
            prevdow = void 0,
            row = void 0;
        var nextDateObject = null;
        var prevDateObject = null;
        var isoWeek = null;
        var weekNumber = null;
        var dayDow = 0;
        var absoluteMin = (0, _format2.default)(min, 'YYYY-MM-DD');
        var absoluteMax = (0, _format2.default)(max, 'YYYY-MM-DD');

        // Used for faster comparisons
        var _today = (0, _format2.default)(today, 'YYYY-MM-DD');
        var _minDate = (0, _format2.default)(minDate, 'YYYY-MM-DD');
        var _maxDate = (0, _format2.default)(maxDate, 'YYYY-MM-DD');
        var initialDisabledDatesArray = originalDisabledDates && originalDisabledDates[0] ? originalDisabledDates : [];

        var enabledDatesArray = preselected && preselected[0] ? preselected.map(function (dateObj) {
            return { date: (0, _format2.default)(dateObj.start_time, 'YYYY-MM-DD'), type: 'preselect' };
        }) : null;
        var reallyDisabledDatesArray = originalDisabledDates && originalDisabledDates[0] ? originalDisabledDates.filter(function (object) {
            return object.type === 'holiday' || object.type === 'no-reservation';
        }) : [];

        if (selectionType === 'not_preselected') {
            reallyDisabledDatesArray = reallyDisabledDatesArray.concat(preselectedDates);
        } else if (selectionType === 'preselected' && enabledDatesArray != null && enabledDatesArray.length) {
            enabledDatesArray = enabledDatesArray.concat(preselectedDates);

            if (selected && selected.start_time && (0, _is_date2.default)(lastSelectableDate) && (0, _is_before2.default)((0, _format2.default)(selected.start_time, 'YYYY-MM-DD'), lastDate)) {
                enabledDatesArray = enabledDatesArray.filter(function (date) {
                    return (0, _is_before2.default)(date.date, lastDate);
                });
            } else if (selected && selected.start_time && (0, _is_date2.default)(lastSelectableDate) && (0, _is_before2.default)(lastDate, (0, _format2.default)(selected.start_time, 'YYYY-MM-DD'))) {
                enabledDatesArray = enabledDatesArray.filter(function (date) {
                    return (0, _is_before2.default)(lastDate, date.date);
                });
            }
        }

        for (var i = 0, len = rows.length; i < len; i++) {
            row = rows[i];
            days = [];
            dow = (0, _get_day2.default)(new Date(year, month, row[0]));
            dow === 0 ? dow = 7 : dow;
            weekNumber = null;

            for (var k = 0, _len = row.length; k < _len; k++) {
                dateDisabled = { date: null, type: null };
                day = row[k];
                nextDateObject = null;
                prevDateObject = null;
                date = (0, _utils.getDateString)(year, month, day);
                nextDate = (0, _format2.default)((0, _add_days2.default)(date, 1), 'YYYY-MM-DD');
                prevDate = (0, _format2.default)((0, _sub_days2.default)(date, 1), 'YYYY-MM-DD');
                nextDateObject = { date: (0, _format2.default)((0, _add_days2.default)(date, 1), 'YYYY-MM-DD'), type: 'holiday' };
                prevDateObject = { date: (0, _format2.default)((0, _sub_days2.default)(date, 1), 'YYYY-MM-DD'), type: 'holiday' };
                isToday = date === _today;
                nextdow = dow + 1;
                prevdow = dow === 1 ? 7 : dow - 1;
                isoWeek = null;

                if (dow === 4) {
                    isoWeek = (0, _get_iso_week2.default)(date);
                    weekNumber = _react2.default.createElement(
                        'div',
                        { className: styles.weekNumber },
                        ' ',
                        isoWeek,
                        ' '
                    );
                }

                isDisabled = minDate && date < _minDate || maxDate && date > _maxDate || selectionArray.includes((0, _format2.default)(date, 'YYYY-MM-DD')) || disabledDays && disabledDays.length && disabledDays.indexOf(dow) !== -1 || initialDisabledDatesArray && selectionType === 'preselected' && (0, _is_date2.default)(lastSelectableDate) && (0, _is_before2.default)(date, lastDate);

                prevDisabled = disabledDays && disabledDays.length && disabledDays.indexOf(prevdow) !== -1 || reallyDisabledDatesArray && reallyDisabledDatesArray.length && reallyDisabledDatesArray.map(function (e) {
                    return e.date;
                }).indexOf(prevDateObject.date) !== -1;

                nextDisabled = disabledDays && disabledDays.length && disabledDays.indexOf(nextdow) !== -1 || reallyDisabledDatesArray && reallyDisabledDatesArray.length && reallyDisabledDatesArray.map(function (e) {
                    return e.date;
                }).indexOf(nextDateObject.date) !== -1;

                beforeLastDisabled = (0, _is_date2.default)(lastSelectableDate) && (0, _is_before2.default)(date, lastDate);

                days[k] = _react2.default.createElement(DayComponent, _extends({
                    key: 'day-' + day,
                    date: date,
                    day: day,
                    originalDisabledDates: originalDisabledDates,
                    beforeLastDisabled: beforeLastDisabled,
                    selected: selected,
                    selectionArray: selectionArray,
                    preselected: preselected,
                    lastUpdate: lastUpdate,
                    nextDisabled: nextDisabled,
                    prevDisabled: prevDisabled,
                    isDisabled: isDisabled,
                    selectionType: selectionType,
                    isToday: isToday
                }, passThrough.Day));

                dow += 1;
            }
            {
                var _classNames, _classNames2;

                days.length ? monthRows[i] = _react2.default.createElement(
                    'ul',
                    {
                        key: 'Row-' + i,
                        className: (0, _classnames2.default)(styles.row, (_classNames = {}, _classNames[styles.partial] = !miniCalendar && row.length !== 7, _classNames), (_classNames2 = {}, _classNames2[styles.partial] = miniCalendar && row.length !== 5, _classNames2)),
                        style: { height: rowHeight },
                        role: 'row',
                        'aria-label': 'Week ' + (i + 1)
                    },
                    !miniCalendar ? weekNumber : null,
                    days
                ) : null;
            }
        }

        return monthRows;
    };

    Month.prototype.render = function render() {
        var _classNames3, _classNames4, _classNames5;

        var _props2 = this.props,
            locale = _props2.locale.locale,
            miniCalendar = _props2.miniCalendar,
            monthDate = _props2.monthDate,
            today = _props2.today,
            rows = _props2.rows,
            rowHeight = _props2.rowHeight,
            style = _props2.style;

        var dateFormat = (0, _is_same_year2.default)(monthDate, today) ? 'MMMM' : 'MMMM YYYY';
        var isCurrentMonth = (0, _is_this_month2.default)(monthDate) && (0, _is_this_year2.default)(monthDate);

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)(styles.root, (_classNames3 = {}, _classNames3[styles.multiple] = miniCalendar && this.props.rows.length > 1, _classNames3)), style: _extends({}, style, { lineHeight: rowHeight + 'px' }) },
            !miniCalendar ? _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(styles.indicator, (_classNames4 = {}, _classNames4[styles.indicatorCurrent] = isCurrentMonth, _classNames4)) },
                _react2.default.createElement(
                    'div',
                    { className: styles.display },
                    _react2.default.createElement(
                        'span',
                        { className: 'month' },
                        (0, _format2.default)(monthDate, 'MMMM', { locale: locale })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'year' },
                        (0, _format2.default)(monthDate, 'YYYY', { locale: locale })
                    )
                )
            ) : null,
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(styles.rows, (_classNames5 = {}, _classNames5[styles.mini] = miniCalendar, _classNames5)) },
                this.renderRows()
            )
        );
    };

    return Month;
}(_react.PureComponent);

exports.default = Month;
module.exports = exports['default'];