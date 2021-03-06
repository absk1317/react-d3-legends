"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Legend$propTypes;

exports.default = Legend;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LegendItem = require("./LegendItem");

var _LegendItem2 = _interopRequireDefault(_LegendItem);

var _LegendLabel = require("./LegendLabel");

var _LegendLabel2 = _interopRequireDefault(_LegendLabel);

var _LegendShape = require("./LegendShape");

var _LegendShape2 = _interopRequireDefault(_LegendShape);

var _valueOrIdentity = require("../util/valueOrIdentity");

var _valueOrIdentity2 = _interopRequireDefault(_valueOrIdentity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Legend.propTypes = (_Legend$propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  scale: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.object]).isRequired,
  shapeWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  shapeHeight: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  shapeMargin: _propTypes2.default.string,
  labelMargin: _propTypes2.default.string,
  itemMargin: _propTypes2.default.string,
  direction: _propTypes2.default.string,
  itemDirection: _propTypes2.default.string,
  fill: _propTypes2.default.func,
  shape: _propTypes2.default.oneOfType([_propTypes2.default.func, _propTypes2.default.string])
}, _defineProperty(_Legend$propTypes, "shape", _propTypes2.default.object), _defineProperty(_Legend$propTypes, "labelFormat", _propTypes2.default.func), _defineProperty(_Legend$propTypes, "labelTransform", _propTypes2.default.func), _Legend$propTypes);

var defaultStyle = {
  display: "flex"
};

function Legend(_ref) {
  var className = _ref.className,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? defaultStyle : _ref$style,
      shapeStyle = _ref.shapeStyle,
      scale = _ref.scale,
      shape = _ref.shape,
      _ref$shapes = _ref.shapes,
      shapes = _ref$shapes === undefined ? {} : _ref$shapes,
      domain = _ref.domain,
      _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? _valueOrIdentity2.default : _ref$fill,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? _valueOrIdentity2.default : _ref$size,
      _ref$labelFormat = _ref.labelFormat,
      labelFormat = _ref$labelFormat === undefined ? _valueOrIdentity2.default : _ref$labelFormat,
      _ref$labelTransform = _ref.labelTransform,
      labelTransform = _ref$labelTransform === undefined ? defaultTransform : _ref$labelTransform,
      _ref$shapeWidth = _ref.shapeWidth,
      shapeWidth = _ref$shapeWidth === undefined ? 15 : _ref$shapeWidth,
      _ref$shapeHeight = _ref.shapeHeight,
      shapeHeight = _ref$shapeHeight === undefined ? 15 : _ref$shapeHeight,
      _ref$shapeMargin = _ref.shapeMargin,
      shapeMargin = _ref$shapeMargin === undefined ? "2px 4px 2px 0" : _ref$shapeMargin,
      _ref$labelAlign = _ref.labelAlign,
      labelAlign = _ref$labelAlign === undefined ? "left" : _ref$labelAlign,
      _ref$labelMargin = _ref.labelMargin,
      labelMargin = _ref$labelMargin === undefined ? "0 4px" : _ref$labelMargin,
      _ref$itemMargin = _ref.itemMargin,
      itemMargin = _ref$itemMargin === undefined ? "0" : _ref$itemMargin,
      _ref$direction = _ref.direction,
      direction = _ref$direction === undefined ? "column" : _ref$direction,
      _ref$itemDirection = _ref.itemDirection,
      itemDirection = _ref$itemDirection === undefined ? "row" : _ref$itemDirection,
      restProps = _objectWithoutProperties(_ref, ["className", "style", "shapeStyle", "scale", "shape", "shapes", "domain", "fill", "size", "labelFormat", "labelTransform", "shapeWidth", "shapeHeight", "shapeMargin", "labelAlign", "labelMargin", "itemMargin", "direction", "itemDirection"]);

  domain = domain || scale.domain();
  var labels = domain.map(labelTransform({ scale: scale, labelFormat: labelFormat }));
  return _react2.default.createElement(
    "div",
    {
      className: (0, _classnames2.default)("vx-legend", className),
      style: _extends({}, style, {
        flexDirection: direction
      })
    },
    labels.map(function (label, i) {
      shape = shapes[label.text] == undefined ? shape : shapes[label.text];
      var text = label.text;

      return _react2.default.createElement(
        _LegendItem2.default,
        _extends({
          key: "legend-" + label + "-" + i,
          margin: itemMargin,
          flexDirection: itemDirection,
          label: label
        }, restProps),
        _react2.default.createElement(_LegendShape2.default, {
          shape: shape,
          height: shapeHeight,
          width: shapeWidth,
          margin: shapeMargin,
          label: label,
          fill: fill,
          size: size,
          shapeStyle: shapeStyle
        }),
        _react2.default.createElement(_LegendLabel2.default, { label: text, margin: labelMargin, align: labelAlign })
      );
    })
  );
}

function defaultTransform(_ref2) {
  var scale = _ref2.scale,
      labelFormat = _ref2.labelFormat;

  return function (d, i) {
    return {
      datum: d,
      index: i,
      text: "" + labelFormat(d, i),
      value: scale(d)
    };
  };
}