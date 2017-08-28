'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Grid = require('../Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _Month = require('./Month');

var _Month2 = _interopRequireDefault(_Month);

var _dates = require('../shared/dates');

var _utils = require('../shared/utils');

var _propTypes3 = require('../shared/propTypes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Months = function (_Component) {
  (0, _inherits3.default)(Months, _Component);

  function Months() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Months);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Months.__proto__ || (0, _getPrototypeOf2.default)(Months)).call.apply(_ref, [this].concat(args))), _this), _this.start = 0, _this.end = 11, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Months, [{
    key: 'render',
    value: function render() {
      var end = this.end,
          start = this.start,
          year = this.year;
      var _props = this.props,
          maxDate = _props.maxDate,
          minDate = _props.minDate,
          onChange = _props.onChange,
          value = _props.value,
          valueType = _props.valueType;


      var months = [];
      for (var monthIndex = start; monthIndex <= end; monthIndex += 1) {
        var date = new Date(year, monthIndex, 1);

        months.push(_react2.default.createElement(_Month2.default, (0, _extends3.default)({}, (0, _utils.getTileActivityFlags)(value, valueType, date, 'month'), {
          date: date,
          key: monthIndex,
          maxDate: maxDate,
          minDate: minDate,
          onChange: onChange
        })));
      }

      return _react2.default.createElement(
        _Grid2.default,
        {
          className: 'react-calendar__year-view__months',
          grow: true
        },
        months
      );
    }
  }, {
    key: 'year',
    get: function get() {
      var activeStartDate = this.props.activeStartDate;

      return (0, _dates.getYear)(activeStartDate);
    }
  }]);
  return Months;
}(_react.Component);

exports.default = Months;


Months.propTypes = {
  activeStartDate: _propTypes2.default.instanceOf(Date).isRequired,
  maxDate: _propTypes3.isMaxDate,
  minDate: _propTypes3.isMinDate,
  onChange: _propTypes2.default.func,
  value: _propTypes3.isValue,
  valueType: _propTypes2.default.string
};