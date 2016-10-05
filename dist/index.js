"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReduxState = exports.ReduxState = function () {
  function ReduxState(props) {
    var _this = this;

    _classCallCheck(this, ReduxState);

    this.props = props;
    this.handlers = {};
    this.default = function (event) {
      return _this;
    };
  }

  _createClass(ReduxState, [{
    key: "register",
    value: function register(eventName, callback) {
      this.handlers[eventName] = callback;
    }
  }, {
    key: "registerDefault",
    value: function registerDefault(callback) {
      this.default = callback;
    }
  }, {
    key: "handle",
    value: function handle(event) {
      var callback = handler[event.type];
      if (callback) return callback(event);

      return this.default(event);
    }
  }]);

  return ReduxState;
}();
//# sourceMappingURL=index.js.map