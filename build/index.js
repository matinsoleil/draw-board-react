module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(3);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(5)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/dist/cjs.js!./DashBoard.css", function() {
		var newContent = require("!!../node_modules/css-loader/dist/cjs.js!./DashBoard.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Drawboard = function (_React$Component) {
    _inherits(Drawboard, _React$Component);

    function Drawboard(props) {
        _classCallCheck(this, Drawboard);

        var _this = _possibleConstructorReturn(this, (Drawboard.__proto__ || Object.getPrototypeOf(Drawboard)).call(this, props));

        _this.showDashBoard = function () {
            //this.props.show();
            console.log('show or hidden');
        };

        _this.pickColor = function (color) {
            _this.color = color;
            _this.setState({
                lineColor: color
            });
        };

        _this.selectFiles = function (e) {
            var _loop = function _loop(file) {
                var blobUrl = URL.createObjectURL(file);
                var xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = function () {
                    var recoveredBlob = xhr.response;
                    var reader = new FileReader();
                    reader.onload = function () {
                        this.imageUrl = reader.result;
                        this.loadImage();
                    }.bind(this);

                    if (recoveredBlob instanceof Blob) {
                        reader.readAsDataURL(recoveredBlob);
                    }
                }.bind(_this);
                xhr.open('GET', blobUrl);
                xhr.send();
            };

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = _this.fileChooser.files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var file = _step.value;

                    _loop(file);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };

        _this.saveAsImage = function () {
            var image = _this.refs.canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');
            _this.setState({
                imageDashBoard: image
            });
            _this.props.imageDashBoard(image);
            var date = new Date();
            _this.props.addMessage(_this.conversationId, {
                id: _this.messageId,
                sender: _this.userId,
                message: {
                    type: "3",
                    blobURL: _this.refs.canvas.toDataURL("image/png"),
                    fileName: 'dashboard',
                    size: 100
                },
                hour: date.getHours() + ':' + date.getMinutes(),
                status: "1"
            });
            _this.props.showModal();
        };

        _this.insertText = function (fontText, fontSize, toLeft, toTop) {
            var fixLeft = -Number(_this.refs.canvas.offsetLeft) - 2;
            _this.ctx.restore();
            _this.ctx.font = fontSize + " Arial";
            _this.ctx.fillStyle = _this.color;
            _this.ctx.fillText(fontText, toLeft + fixLeft, toTop);
        };

        _this.displayTool = function (tool) {
            if (tool === 'color') {
                _this.setState({
                    toolColor: 'block',
                    toolLineWeight: 'none',
                    toolUploadImage: 'none',
                    toolWrite: 'none'
                });
            } else if (tool === 'load') {
                _this.selectFiles;
                _this.setState({
                    toolColor: 'none',
                    toolLineWeight: 'none',
                    toolUploadImage: 'block',
                    toolWrite: 'none'
                });
            } else if (tool === 'weight') {
                _this.setState({
                    toolColor: 'none',
                    toolLineWeight: 'block',
                    toolUploadImage: 'none',
                    toolWrite: 'none'
                });
            } else if (tool === 'write') {
                _this.setState({
                    toolColor: 'none',
                    toolLineWeight: 'none',
                    toolUploadImage: 'none',
                    toolWrite: 'block'
                });
            }
        };

        _this.conversationId = '00';
        _this.messageId = '00';
        _this.userId = '00';
        _this.contactName = 'luis';
        _this.contactImage = '';
        _this.state = {
            image: 'https://cdn-images-1.medium.com/max/2000/1*4tT8NSatOjW8F4sybzzb9g.jpeg',
            width: '1200',
            height: '600',
            border: '1px solid black',
            x: 0,
            y: 0,
            last_x: 0,
            last_y: 0,
            down: 0,
            lineWeight: 5,
            lineColor: '#000000',
            imageDashBoard: '',
            toolColor: 'none',
            toolLineWeight: 'none',
            toolUploadImage: 'none',
            toolWrite: 'none',
            marginTop: '8',
            showColor: 'none',
            labelText: 'write here',
            ctx: ''
        };
        _this.down = 0;
        _this.counter = 0;
        _this.ctx = undefined;
        _this.lastX = 0;
        _this.lastY = 0;
        _this.x = 0;
        _this.y = 0;
        _this.IMAGE = {};
        _this.lineColor = 'black';
        _this.lineWeight = '5px';
        _this.saveAsImage = _this.saveAsImage.bind(_this);
        _this.clearCanvas = _this.clearCanvas.bind(_this);
        _this.loadImage = _this.loadImage.bind(_this);
        _this.matchWeight = _this.matchWeight.bind(_this);
        _this.colors = ['#C0C0C0', '#808080', '#FF0000', '#800000', '#FFFF00', '#808000', '#00FF00', '#008000', '#00FFFF', '#008080', '#0000FF', '#000080', '#FF00FF', '#800080'];
        _this.lineWeight = ['4', '6', '8', '10', '12', '14', '16', '18', '20', '22', '24', '26', '28'];
        _this.weight = 5;
        _this.color = '#000000';
        _this.loadImage = _this.loadImage.bind(_this);
        _this.selectFiles = _this.selectFiles.bind(_this);
        _this.imageUrl = '';
        _this.showPickColor = 'none';
        return _this;
    }

    _createClass(Drawboard, [{
        key: '_onMouseMove',

        // this method draw line in dash board
        value: function _onMouseMove(e) {
            var contentDashBoard = document.getElementById('contentDashBoard');
            this.x = e.clientX - this.refs.canvas.offsetLeft + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft) + contentDashBoard.scrollLeft;
            this.y = e.clientY - this.refs.canvas.offsetTop + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) + contentDashBoard.scrollTop;
            if (this.down === 1) {
                this.ctx.beginPath(); // begin line path
                this.ctx.lineWidth = this.weight;
                this.ctx.lineCap = 'round';
                this.ctx.strokeStyle = this.color;
                this.ctx.moveTo(this.lastX, this.lastY); // from
                this.ctx.lineTo(this.x, this.y); // to
                this.ctx.stroke(); // draw it!
                this.lastY = this.y;
                this.lastX = this.x;
            }
        }

        // this method mark position to start line draw

    }, {
        key: '_onMouseDown',
        value: function _onMouseDown(e) {
            var contentDashBoard = document.getElementById('contentDashBoard');
            this.lastX = e.clientX - this.refs.canvas.offsetLeft + (window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft) + contentDashBoard.scrollLeft;
            this.lastY = e.clientY - this.refs.canvas.offsetTop + (window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop) + contentDashBoard.scrollTop;
            this.down = 1;
        }
        // this method mark position to end line draw

    }, {
        key: '_onMouseUp',
        value: function _onMouseUp(e) {
            this.down = 0;
        }
        // this method end line draw when out from dashboard

    }, {
        key: '_onMouseLeave',
        value: function _onMouseLeave(e) {
            this.down = 0;
        }
        // this method pickup color line

    }, {
        key: 'matchWeight',

        // this method pickup weight line
        value: function matchWeight(line) {
            this.weight = line;
        }
        // this method start a dashBoard and background as image and paint with white

    }, {
        key: 'updateCanvas',
        value: function updateCanvas() {
            this.ctx = this.refs.canvas.getContext('2d');
            this.ctx.save();
            this.img = new Image();
            this.img.setAttribute('crossOrigin', 'annonymous');
            this.img.onload = function () {
                this.ctx.fillStyle = "white";
                this.ctx.fillRect(0, 0, this.refs.canvas.width - 1, this.refs.canvas.height - 1);
                this.ctx.restore();
                this.ctx.fillText("", 10, 10);
                this.refs.canvas.setAttribute('crossorigin', 'anonymous');
            }.bind(this);
            this.img.crossOrigin = '';
            this.img.crossOrigin = 'anonymous';
            this.img.src = this.state.image;
        }
        // this method clear all dash board with white background as size of dashboard

    }, {
        key: 'clearCanvas',
        value: function clearCanvas() {
            this.ctx.restore();
            this.ctx.fillStyle = "white";
            this.ctx.fillRect(0, 0, this.refs.canvas.width - 1, this.refs.canvas.height - 1);
        }
        // this method select images to load

    }, {
        key: 'loadImage',

        // this method load image to dashboard, if image is greather resize this, and/or center image in dash
        value: function loadImage() {
            this.setState({ width: '1200', height: '600' });
            this.refs.canvas.width = '1200';
            this.refs.canvas.height = '600';
            this.img = new Image();
            this.img.onload = function () {
                this.img.setAttribute('crossOrigin', '');
                if (this.state.width >= this.img.width && this.state.height >= this.img.height) {
                    var customMargin = (600 - this.img.height) / 2;
                    this.setState({ width: this.img.width, height: this.img.height, marginTop: customMargin });
                    this.refs.canvas.height = this.img.height;
                    this.refs.canvas.width = this.img.width;
                    this.ctx.drawImage(this.img, 0, 0, this.img.width, this.img.height);
                    this.refs.canvas.setAttribute('crossorigin', 'anonymous');
                } else {
                    var customSize = this.resizeKeepingRatio(this.img.width, this.img.height, '1200', '600');
                    var _customMargin = (600 - customSize.height) / 2;
                    this.refs.canvas.height = customSize.height;
                    this.refs.canvas.width = customSize.width;
                    this.setState({ width: customSize.width, height: customSize.height, marginTop: _customMargin });
                    this.ctx.drawImage(this.img, 0, 0, customSize.width, customSize.height);
                    this.refs.canvas.setAttribute('crossorigin', 'anonymous');
                }
            }.bind(this);
            this.img.src = this.imageUrl.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
        }
        //this method get aspect ratio from a square (image) and return correspondence width and height

    }, {
        key: 'resizeKeepingRatio',
        value: function resizeKeepingRatio(width, height, destWidth, destHeight) {
            if (!width || !height || width <= 0 || height <= 0) {
                throw "Params error !!";
            }
            var ratioW = width / destWidth;
            var ratioH = height / destHeight;
            if (ratioW <= 1 && ratioH <= 1) {
                var ratio = 1 / (ratioW > ratioH ? ratioW : ratioH);
                width *= ratio;
                height *= ratio;
            } else if (ratioW > 1 && ratioH <= 1) {
                var ratio = 1 / ratioW;
                width *= ratio;
                height *= ratio;
            } else if (ratioW <= 1 && ratioH > 1) {
                var ratio = 1 / ratioH;
                width *= ratio;
                height *= ratio;
            } else if (ratioW >= 1 && ratioH >= 1) {
                var ratio = 1 / (ratioW > ratioH ? ratioW : ratioH);
                width *= ratio;
                height *= ratio;
            }
            return {
                width: width,
                height: height
            };
        }
        // When Component Listen update canvas 

    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updateCanvas();
        }
        // this method save dashboard  as message image (blob URL base 64) 


        // this method insert text on dashboard

        // display tools at dashboard

    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'modal-show', style: { display: this.props.display } },
                _react2.default.createElement(
                    'div',
                    { className: 'contentModal' },
                    _react2.default.createElement(
                        'div',
                        { className: 'contentDashBoard', id: 'contentDashBoard' },
                        _react2.default.createElement(
                            'div',
                            { className: 'sharedUser' },
                            _react2.default.createElement(
                                'div',
                                { className: 'contactDashBoard' },
                                _react2.default.createElement('img', { className: 'contactImageDashBoard', src: this.contactImage }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'contactNameDashBoard' },
                                    this.contactName
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'closeDashBoard', onClick: function onClick() {
                                        return _this2.showDashBoard();
                                    } },
                                _react2.default.createElement('img', { className: 'close-icon', src: this.props.close_icon, alt: 'close-icon' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'drawDashBoard' },
                            _react2.default.createElement('canvas', { id: 'DashBoard', className: 'theBoard', crossOrigin: 'Anonymous', onMouseMove: this._onMouseMove.bind(this), onMouseDown: this._onMouseDown.bind(this), onMouseLeave: this._onMouseLeave.bind(this), onMouseUp: this._onMouseUp.bind(this), ref: 'canvas', width: this.state.width, height: this.state.height, style: { marginTop: this.state.marginTop + 'px' } })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'optionsDashBoard' },
                            _react2.default.createElement(
                                'div',
                                { className: 'toolsDraw' },
                                _react2.default.createElement('div', { className: 'tool none' }),
                                _react2.default.createElement('div', { className: 'tool colors', style: { display: this.state.toolColor } }),
                                _react2.default.createElement('div', { className: 'tool write', style: { display: this.state.toolWrite } }),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'tool loadFile', style: { display: this.state.toolUploadImage } },
                                    _react2.default.createElement('input', { onChange: this.selectFiles, ref: function ref(input) {
                                            _this2.fileChooser = input;
                                        }, type: 'file', style: { display: "block" }, multiple: true })
                                ),
                                _react2.default.createElement('div', { className: 'tool weightLine', style: { display: this.state.toolLineWeight } })
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'drawOptions' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'drawOption' },
                                    _react2.default.createElement(
                                        'a',
                                        { onClick: function onClick() {
                                                return _this2.showDashBoard();
                                            } },
                                        ' ',
                                        _react2.default.createElement('img', { className: 'optionIconDashBoard', src: this.props.reply_icon, alt: 'reply-icon' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'drawOption', onClick: function onClick() {
                                            return _this2.displayTool('load');
                                        } },
                                    _react2.default.createElement('img', { className: 'optionIconDashBoard', src: this.props.canvas_icon, alt: 'canvas-icon' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'drawOption' },
                                    _react2.default.createElement(
                                        'a',
                                        { ref: 'clear', onClick: this.clearCanvas },
                                        _react2.default.createElement('img', { className: 'optionIconDashBoard', src: this.props.erase_icon, alt: 'erase-icon' })
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'drawOption', onClick: function onClick() {
                                            return _this2.displayTool('weight');
                                        } },
                                    _react2.default.createElement('img', { className: 'optionIconDashBoard', src: this.props.pen_icon, alt: 'pen-icon' })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'drawOption', onClick: function onClick() {
                                            return _this2.displayTool('write');
                                        }, style: { color: '#5886c0', fontSize: '25px', fontWeight: 'bold' } },
                                    'T'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'drawOption', onClick: function onClick() {
                                            return _this2.displayTool('color');
                                        } },
                                    _react2.default.createElement('span', { className: 'optionIconDashBoard colorDashBoard', style: { float: 'left', width: '24px', height: '24px', border: '1px solid gray', backgroundColor: this.state.lineColor } })
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'drawOption finalOption' },
                                    _react2.default.createElement(
                                        'a',
                                        { onClick: this.saveAsImage },
                                        this.props.Translator.t('END')
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Drawboard;
}(_react2.default.Component);

exports.default = Drawboard;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// Module
exports.push([module.i, ".contentDashBoard{\n    position: fixed;\n    width:99.4%;\n    margin:0.3%;\n    height:90%;\n    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.5);\n    border: solid 1px #d2d2d2;\n    background-color: #ffffff;\n    overflow:scroll;\n    border-radius: 10px 10px 10px 10px;\n    -moz-border-radius: 10px 10px 10px 10px;\n    -webkit-border-radius: 10px 10px 10px 10px;\n    \n}\n\n.theBoard{\n    border:0.5px solid silver;\n    vertical-align:middle;\n    margin:0 0;\n    \n}\n\n\n.colors{\n    float:left;\n    height: 40px;\n    width: 100%;\n    \n\n}\n.color{\n     width:20px;\n     height:20px;\n     float:left;\n     margin:5px;\n}\n\n.weightLine{\n     float:left;\n     width:100%;\n     height:40px;\n     \n     \n\n}\n\n.lineWeight{\n    float:left;\n    margin:5px;\n}\n\n.drawDashBoard{\n     float:left;\n     width: 90%;\n     margin-left:5%;\n     height:620px;\n     text-align: center;\n    \n   \n}\n\n.sharedUser{\n    float:left;\n    width:100%;\n    height:50px;\n   \n}\n\n.contactImageDashBoard{\n    float:left;\n    width:32px;\n    height:32px;\n   \n}\n\n.closeDashBoard{\n     float:right;\n     margin: 10px;\n}\n\n.optionsDashBoard{\n    float:left;\n    width: 70%;\n    margin-left:15%;\n    height:12%;\n    margin-top:0px;\n    \n    text-align: center;\n}\n\n.optionIconDashBoard{\n    width:24px;\n    height:24px;\n    float:left;\n}\n\n.colorDashBoard{\n    border:2px solid #E3E7E8;\n    border-radius: 24px 24px 24px 24px;\n    -moz-border-radius: 24px 24px 24px 24px;\n    -webkit-border-radius: 24px 24px 24px 24px;\n\n}\n\n.color{\n    height:24px;\n    width:24px;\n    border:3px solid #E3E7E8;\n    border-radius: 24px 24px 24px 24px;\n    -moz-border-radius: 24px 24px 24px 24px;\n    -webkit-border-radius: 24px 24px 24px 24px;\n\n}\n\n.tool{\n    width:70%;\n    margin-left:15%;\n    float:left;\n}\n\n.toolsDraw{\n    float:left;\n    width:100%;\n    height:40px;\n    \n}\n\n\n\n.drawOptions{\n\n    float:left;\n    \n    bottom:0px;\n    width:60%;\n    margin-left:20%;\n\n}\n\n.drawOption{\n    float:left;\n    width:24px;\n    height:24px;\n    margin:8px;\n}\n\n.finalOption{\n     float:right;\n}\n\n.picker{\n    float:left;\n    height:152px;\n    width:150px;\n\n}\n\n.colorPicker{\n    float:left;\n    width: 192px;\n    margin-top:-166px;\n}\n\n.picker-wrapper{\n    float:left;\n    border:0px solid black;\n    width: 150px;\n\n    margin:0px;\n   \n}\n\n.slide-wrapper{\n    float:left;\n    border:1px solid black;\n    width:30px;\n    margin:0px;\n    height:152px;\n  \n}\n\n.picker-indicator{\n    float:left;\n    margin:0px;\n     width:100px;\n     height:100px;\n}\n", ""]);



/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {
		return null;
	}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);