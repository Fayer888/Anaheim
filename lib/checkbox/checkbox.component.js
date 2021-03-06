'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _checkbox = require('./checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _template = require('./template.html');

var _template2 = _interopRequireDefault(_template);

require('./checkbox.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

'use strict';

/**
 * @type {Object}
 * @property {Boolean}    disabled       - binding symbol is <, 禁用状态
 * @property {Boolean}    checked        - binding symbol is =?, 是否被选中状态
 * @property {Boolean}    halfChecked    - binding symbol is =?, 是否是半选状态
 * @property {ANY}        trueValue      - binding symbol is @, like ng-true-value, 是对ng-true-value的封装
 * @property {ANY}        falseValue     - binding symbol is @, like ng-false-value, 是对ng-false-value的封装
 */
/**
 * Checkbox component define
 * @author fengpeng
 */

var CheckboxComponentDefine = {
  template: _template2.default,
  controller: _checkbox2.default,
  controllerAs: 'controller',
  transclude: true,
  bindings: {
    disabled: '<',
    checked: '=?checked',
    halfChecked: '=?halfChecked',
    trueValue: '@',
    falseValue: '@',
    change: '&?',
    click: '&?'
  }
};

exports.default = CheckboxComponentDefine;