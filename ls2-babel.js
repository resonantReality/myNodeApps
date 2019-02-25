require("babel-polyfill");
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fs = require('fs');
var util = require('util');

//const fs_readdir = util.promisify(fs.readdir);

var fs_readdir = function fs_readdir(dir) {
    return new Promise(function (resolve, reject) {
        fs.readdir(dir, function (err, fileList) {
            if (err) reject(err);else resolve(fileList);
        });
    });
};

_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var dir, files, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, fn;

    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    dir = '.';

                    if (process.argv[2]) dir = process.argv[2];
                    _context.next = 4;
                    return fs_readdir(dir);

                case 4:
                    files = _context.sent;
                    _iteratorNormalCompletion = true;
                    _didIteratorError = false;
                    _iteratorError = undefined;
                    _context.prev = 8;

                    for (_iterator = files[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        fn = _step.value;

                        console.log(fn);
                    }
                    _context.next = 16;
                    break;

                case 12:
                    _context.prev = 12;
                    _context.t0 = _context['catch'](8);
                    _didIteratorError = true;
                    _iteratorError = _context.t0;

                case 16:
                    _context.prev = 16;
                    _context.prev = 17;

                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }

                case 19:
                    _context.prev = 19;

                    if (!_didIteratorError) {
                        _context.next = 22;
                        break;
                    }

                    throw _iteratorError;

                case 22:
                    return _context.finish(19);

                case 23:
                    return _context.finish(16);

                case 24:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, undefined, [[8, 12, 16, 24], [17,, 19, 23]]);
}))().catch(function (err) {
    console.error(err);
});
