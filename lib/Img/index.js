'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n'], ['\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  animation-name: ', ';\n  animation-duration: 500ms;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: both;\n'], ['\n  animation-name: ', ';\n  animation-duration: 500ms;\n  animation-timing-function: ease-in-out;\n  animation-fill-mode: both;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// external imports


var fadeIn = (0, _styledComponents.keyframes)(_templateObject);

var FadeInImg = _styledComponents2.default.img(_templateObject2, function (props) {
  return props.isLoading ? 'none' : fadeIn;
});

/**
 * An image tag that fades in.
 */

var Img = function (_React$Component) {
  _inherits(Img, _React$Component);

  function Img(props) {
    _classCallCheck(this, Img);

    var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, props));

    _this.render = function () {
      return _react2.default.createElement(FadeInImg, {
        isLoading: _this.state.isLoading,
        alt: 'img',
        src: _this.state.src,
        onLoad: function onLoad() {
          return _this.setState({ isLoading: false });
        },
        style: _extends({
          display: _this.state.isLoading ? 'none' : 'inline-block',
          maxWidth: '100%',
          maxHeight: '100%'
        }, _this.props.style)
      });
    };

    _this.state = {
      isLoading: true,
      src: props.src
    };
    return _this;
  }

  _createClass(Img, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var currentSrc = this.state.src;
      var nextSrc = nextProps.src;

      if (currentSrc && nextSrc && currentSrc !== nextSrc) {
        this.setState({ src: nextSrc, isLoading: true });
      }
    }
  }]);

  return Img;
}(_react2.default.Component);

exports.default = Img;