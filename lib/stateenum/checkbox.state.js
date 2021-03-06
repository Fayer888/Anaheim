'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _angular = require('angular');

var _angular2 = _interopRequireDefault(_angular);

var _common = require('./common.state');

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Checkbox states enumeration
 */

'use strict';

exports.default = _angular2.default.extend({
  /**
   * 选中
   * 
   * @type {String}
   */
  CHECKED: 'checked',
  /**
   * 半选状态, 这个集中在做列表全选的时候会出现
   * 表现是, 选择了但又没有全选这个尴尬的状态
   * 
   * @type {String}
   */
  HALF_CHECKED: 'halfChecked'

}, _common2.default);