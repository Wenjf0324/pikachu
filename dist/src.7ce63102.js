// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "/* \u4F60\u597D\uFF0C\u6211\u662F\u6E29\u91D1\u51E4\n * \u63A5\u4E0B\u6765\u6211\u6F14\u793A\u4E00\u4E0B\u5982\u4F55\u753B\u4E00\u53EA\u76AE\u5361\u4E18\n * \u9996\u5148\uFF0C\u9700\u8981\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE\u80A4\n */\n.skin {\n    background: #fee433;\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50\n */\n.nose {\n    width: 0;\n    height: 0;\n    border: 10px solid #000;\n    border-color: #000 transparent transparent;\n}\n.nose:before {\n    content: \"\";\n    display: block;\n    width: 20px;\n    height: 5px;\n    background: #000;\n    border-radius: 10px / 5px 5px 0px 0px;\n}\n/* \n * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B\n */\n.eye {\n    background: #2e2e2e;\n    border: 2px solid #000;\n    width: 50px;\n    height: 50px;\n    border-radius: 50%;\n} \n/*\n * \u773C\u775B\u91CC\u9762\u7684\u73E0\u5B50\n */\n.eye:before {\n    content: \"\";\n    display: block;\n    border: 2px solid #000;\n    background: #fff;\n    width: 26px;\n    height: 26px;\n    border-radius: 50%;\n}\n/*\n * \u5DE6\u773C\n */\n.eye.left {\n    transform: translateX(-105px);\n}\n/*\n * \u53F3\u773C\n */\n.eye.right {\n    transform: translateX(105px);\n}\n/*\n * \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u5634\u5DF4\n *\n * \u4E0A\u5634\u5507\n */\n.mouth .up .lip {\n    border: 2px solid #000;\n    height: 25px;\n    width: 80px;\n    background: #fee433;\n}\n.mouth .up .lip.left {\n    border-bottom-left-radius: 40px 25px;\n    border-top: none;\n    border-right: none;\n    transform: rotate(-20deg);\n}\n.mouth .up .lip.right {\n    border-bottom-right-radius: 40px 25px;\n    border-top: none;\n    border-left: none;\n    transform: rotate(20deg);\n}\n/*\n * \u4E0B\u5634\u5507\n */\n.mouth .down .yuan1 {\n    width: 150px;\n    height: 1000px;\n    border: 2px solid #000;\n    border-radius: 75px / 350px;\n    background: #9b000a;\n    overflow: hidden;\n}  \n/*\n * \u5C0F\u820C\u5934\n */\n.mouth .down .yuan1:after {\n    width: 200px;\n    height: 300px;\n    background: #ff485f;\n    border-radius: 100px / 150px;\n} \n/*\n * \u7136\u540E\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u8138\n */\n.face {\n    width: 68px;\n    height: 68px;\n    background: #f00;\n    border: 2px solid #000;\n    border-radius: 50%;\n}  \n/* \n * \u5C06\u8138\u653E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\n */\n.face.left {\n    transform: translate(-140px);\n}\n.face.right {\n    transform: translate(140px);\n}  \n/*\n * \u597D\u4E86\uFF0C\u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60\n */";
var _default = string;
exports.default = _default;
},{}],"Focm":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 1,
  id: undefined,
  time: 25,
  ui: {
    text: document.querySelector("#text"),
    styleTag: document.querySelector("#styleTag"),
    buttons: document.querySelectorAll('#buttons > button')
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.ui.text.innerHTML = _css.default.substr(0, player.n);
    player.ui.styleTag.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      //判断key是否为自身的属性，排除继承的属性
      if (player.events.hasOwnProperty(key)) {
        (function () {
          var value = player.events[key];
          var currentBtn = document.querySelector(key);

          currentBtn.onclick = function () {
            player.selected(currentBtn);
            player[value](); //以value作为player的属性去取player对象对应的player.pause/player.play...
          };
        })();
      }
    }
  },
  selected: function selected(selectedButton) {
    for (var i = 0; i < player.ui.buttons.length; i++) {
      var current = player.ui.buttons[i];

      if (current.className === 'active') {
        current.classList.remove('active');
      }
    }

    selectedButton.classList.add('active');
  },
  run: function run() {
    player.n += 1;

    if (player.n + 1 >= _css.default.length) {
      window.clearInterval(player.id);
    }

    player.ui.text.innerText = _css.default.substr(0, player.n);
    player.ui.styleTag.innerHTML = _css.default.substr(0, player.n);
    player.ui.text.scrollTop = player.ui.text.scrollHeight; //控制滚动条在最下面
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  play: function play() {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 25;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["Focm"], null)
//# sourceMappingURL=src.7ce63102.js.map