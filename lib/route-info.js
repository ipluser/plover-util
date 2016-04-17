'use strict';


/**
 * 解析url构造一个route信息，用于定位一个资源
 *
 * @param {Object} parent  - 父route信息
 * @param {String} url     - 路径
 * @return {Object}        - route信息
 *  - module
 *  - action
 */
exports.parse = function(parent, url) {
  const route = {};

  url = url || '';
  if (url.indexOf(':') === -1) {
    route.module = parent.module;
    route.action = url;
  } else {
    const parts = url.split(':');

    let module = parts[0];
    if (module.startsWith('./')) {
      module = parent.module + module.substr(1);
    }

    route.module = module;
    route.action = parts[1];
  }

  route.parent = parent;
  route.root = parent.root;

  return exports.regular(route);
};


/**
 * 规范化route对象
 * @param {Object} route - route信息
 * @return {Object}      - 规范后的route信息
 */
exports.regular = function(route) {
  route.action = route.action || 'view';
  route.url = route.module + ':' + route.action;
  return route;
};

