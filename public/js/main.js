"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
(function () {
  "use strict";

  new ( /*#__PURE__*/function () {
    function _class(e, t, s, l, r, i) {
      _classCallCheck(this, _class);
      this.marginBetweenElements = l, this.firstControllButtonId = r, this.elementsFromClick = i, this.carousel = document.querySelector(e), this.firstEl = document.querySelectorAll(t)[0], this.controllButtons = document.querySelectorAll(s);
    }
    _createClass(_class, [{
      key: "sliderInit",
      value: function sliderInit() {
        var _this = this;
        var e,
          t,
          s = !1;
        this.controllButtons.forEach(function (e) {
          return e.addEventListener("click", function () {
            var t = _this.firstEl.clientWidth + _this.marginBetweenElements;
            _this.carousel.scrollLeft += e.id == "".concat(_this.firstControllButtonId) ? -t * _this.elementsFromClick : t * _this.elementsFromClick;
          });
        }), this.carousel.addEventListener("mousedown", function (l) {
          s = !0, e = l.pageX, t = _this.carousel.scrollLeft;
        }), this.carousel.addEventListener("mousemove", function (l) {
          if (!s) return;
          l.preventDefault(), _this.carousel.classList.add("dragging");
          var r = l.pageX - e;
          _this.carousel.scrollLeft = t - r;
        }), this.carousel.addEventListener("mouseup", function (e) {
          s = !1, _this.carousel.classList.remove("dragging");
        }), this.carousel.addEventListener("mouseleave", function (e) {
          s = !1, _this.carousel.classList.remove("dragging");
        });
      }
    }]);
    return _class;
  }())(".gallery__carousel__line", ".gallery__carousel__line__element", ".gallery__carousel__controll", 38, "galleryCarouselLeft", 1).sliderInit();
})();