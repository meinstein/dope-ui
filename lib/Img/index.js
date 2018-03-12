'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ImgPlaceholder = function ImgPlaceholder() {
  return _react2.default.createElement('div', { className: 'img-placeholder' });
};

var Img = function (_React$Component) {
  _inherits(Img, _React$Component);

  function Img(props) {
    _classCallCheck(this, Img);

    var _this = _possibleConstructorReturn(this, (Img.__proto__ || Object.getPrototypeOf(Img)).call(this, props));

    _this.render = function () {
      return _react2.default.createElement(
        'div',
        { style: _extends({}, _styles2.default.container, _this.props.style), onClick: _this.props.onClick },
        !_this.state.error && _react2.default.createElement('img', {
          className: !_this.state.loading ? 'fade-in' : '',
          src: _this.state.src,
          onLoad: function onLoad() {
            return _this.setState({ loading: false });
          },
          onError: function onError() {
            return _this.setState({ loading: false, error: true });
          },
          alt: 'img',
          style: _extends({
            display: _this.state.loading ? 'none' : 'inline-block'
          }, _styles2.default.img)
        }),
        _this.state.loading && _react2.default.createElement(ImgPlaceholder, null)
      );
    };

    _this.state = {
      error: false,
      loading: true,
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
        this.setState({ src: nextSrc, loading: true, error: false });
      }
    }
  }]);

  return Img;
}(_react2.default.Component);

Img.defaultProps = {
  onClick: function onClick() {
    return {};
  }
};
exports.default = Img;