(function (window, undefined) {
  var readyList, rootjQuery, core_strundefined = typeof undefined, document = window.document, location = window.location, _jQuery = window.jQuery, _$ = window.$, class2type = {}, core_deletedIds = [], core_version = '1.9.1', core_concat = core_deletedIds.concat, core_push = core_deletedIds.push, core_slice = core_deletedIds.slice, core_indexOf = core_deletedIds.indexOf, core_toString = class2type.toString, core_hasOwn = class2type.hasOwnProperty, core_trim = core_version.trim, jQuery = function (selector, context) {
      return new jQuery.fn.init(selector, context, rootjQuery);
    }, core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, core_rnotwhite = /\S+/g, rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, rvalidchars = /^[\],:{}\s]*$/, rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g, rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, rmsPrefix = /^-ms-/, rdashAlpha = /-([\da-z])/gi, fcamelCase = function (all, letter) {
      return letter.toUpperCase();
    }, completed = function (event) {
      if (document.addEventListener || event.type === 'load' || document.readyState === 'complete') {
        detach();
        jQuery.ready();
      }
    }, detach = function () {
      if (document.addEventListener) {
        document.removeEventListener('DOMContentLoaded', completed, false);
        window.removeEventListener('load', completed, false);
      } else {
        document.detachEvent('onreadystatechange', completed);
        window.detachEvent('onload', completed);
      }
    };
  jQuery.fn = jQuery.prototype = {
    jquery: core_version,
    constructor: jQuery,
    init: function (selector, context, rootjQuery) {
      var match, elem;
      if (!selector) {
        return this;
      }
      if (typeof selector === 'string') {
        if (selector.charAt(0) === '<' && selector.charAt(selector.length - 1) === '>' && selector.length >= 3) {
          match = [
            null,
            selector,
            null
          ];
        } else {
          match = rquickExpr.exec(selector);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;
            jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (jQuery.isFunction(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = document.getElementById(match[2]);
            if (elem && elem.parentNode) {
              if (elem.id !== match[2]) {
                return rootjQuery.find(selector);
              }
              this.length = 1;
              this[0] = elem;
            }
            this.context = document;
            this.selector = selector;
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || rootjQuery).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this.context = this[0] = selector;
        this.length = 1;
        return this;
      } else if (jQuery.isFunction(selector)) {
        return rootjQuery.ready(selector);
      }
      if (selector.selector !== undefined) {
        this.selector = selector.selector;
        this.context = selector.context;
      }
      return jQuery.makeArray(selector, this);
    },
    selector: '',
    length: 0,
    size: function () {
      return this.length;
    },
    toArray: function () {
      return core_slice.call(this);
    },
    get: function (num) {
      return num == null ? this.toArray() : num < 0 ? this[this.length + num] : this[num];
    },
    pushStack: function (elems) {
      var ret = jQuery.merge(this.constructor(), elems);
      ret.prevObject = this;
      ret.context = this.context;
      return ret;
    },
    each: function (callback, args) {
      return jQuery.each(this, callback, args);
    },
    ready: function (fn) {
      jQuery.ready.promise().done(fn);
      return this;
    },
    slice: function () {
      return this.pushStack(core_slice.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (i) {
      var len = this.length, j = +i + (i < 0 ? len : 0);
      return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
    },
    map: function (callback) {
      return this.pushStack(jQuery.map(this, function (elem, i) {
        return callback.call(elem, i, elem);
      }));
    },
    end: function () {
      return this.prevObject || this.constructor(null);
    },
    push: core_push,
    sort: [].sort,
    splice: [].splice
  };
  jQuery.fn.init.prototype = jQuery.fn;
  jQuery.extend = jQuery.fn.extend = function () {
    var src, copyIsArray, copy, name, options, clone, target = arguments[0] || {}, i = 1, length = arguments.length, deep = false;
    if (typeof target === 'boolean') {
      deep = target;
      target = arguments[1] || {};
      i = 2;
    }
    if (typeof target !== 'object' && !jQuery.isFunction(target)) {
      target = {};
    }
    if (length === i) {
      target = this;
      --i;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) != null) {
        for (name in options) {
          src = target[name];
          copy = options[name];
          if (target === copy) {
            continue;
          }
          if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };
  jQuery.extend({
    noConflict: function (deep) {
      if (window.$ === jQuery) {
        window.$ = _$;
      }
      if (deep && window.jQuery === jQuery) {
        window.jQuery = _jQuery;
      }
      return jQuery;
    },
    isReady: false,
    readyWait: 1,
    holdReady: function (hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    },
    ready: function (wait) {
      if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
        return;
      }
      if (!document.body) {
        return setTimeout(jQuery.ready);
      }
      jQuery.isReady = true;
      if (wait !== true && --jQuery.readyWait > 0) {
        return;
      }
      readyList.resolveWith(document, [jQuery]);
      if (jQuery.fn.trigger) {
        jQuery(document).trigger('ready').off('ready');
      }
    },
    isFunction: function (obj) {
      return jQuery.type(obj) === 'function';
    },
    isArray: Array.isArray || function (obj) {
      return jQuery.type(obj) === 'array';
    },
    isWindow: function (obj) {
      return obj != null && obj == obj.window;
    },
    isNumeric: function (obj) {
      return !isNaN(parseFloat(obj)) && isFinite(obj);
    },
    type: function (obj) {
      if (obj == null) {
        return String(obj);
      }
      return typeof obj === 'object' || typeof obj === 'function' ? class2type[core_toString.call(obj)] || 'object' : typeof obj;
    },
    isPlainObject: function (obj) {
      if (!obj || jQuery.type(obj) !== 'object' || obj.nodeType || jQuery.isWindow(obj)) {
        return false;
      }
      try {
        if (obj.constructor && !core_hasOwn.call(obj, 'constructor') && !core_hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
          return false;
        }
      } catch (e) {
        return false;
      }
      var key;
      for (key in obj) {
      }
      return key === undefined || core_hasOwn.call(obj, key);
    },
    isEmptyObject: function (obj) {
      var name;
      for (name in obj) {
        return false;
      }
      return true;
    },
    error: function (msg) {
      throw new Error(msg);
    },
    parseHTML: function (data, context, keepScripts) {
      if (!data || typeof data !== 'string') {
        return null;
      }
      if (typeof context === 'boolean') {
        keepScripts = context;
        context = false;
      }
      context = context || document;
      var parsed = rsingleTag.exec(data), scripts = !keepScripts && [];
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = jQuery.buildFragment([data], context, scripts);
      if (scripts) {
        jQuery(scripts).remove();
      }
      return jQuery.merge([], parsed.childNodes);
    },
    parseJSON: function (data) {
      if (window.JSON && window.JSON.parse) {
        return window.JSON.parse(data);
      }
      if (data === null) {
        return data;
      }
      if (typeof data === 'string') {
        data = jQuery.trim(data);
        if (data) {
          if (rvalidchars.test(data.replace(rvalidescape, '@').replace(rvalidtokens, ']').replace(rvalidbraces, ''))) {
            return new Function('return ' + data)();
          }
        }
      }
      jQuery.error('Invalid JSON: ' + data);
    },
    parseXML: function (data) {
      var xml, tmp;
      if (!data || typeof data !== 'string') {
        return null;
      }
      try {
        if (window.DOMParser) {
          tmp = new DOMParser();
          xml = tmp.parseFromString(data, 'text/xml');
        } else {
          xml = new ActiveXObject('Microsoft.XMLDOM');
          xml.async = 'false';
          xml.loadXML(data);
        }
      } catch (e) {
        xml = undefined;
      }
      if (!xml || !xml.documentElement || xml.getElementsByTagName('parsererror').length) {
        jQuery.error('Invalid XML: ' + data);
      }
      return xml;
    },
    noop: function () {
    },
    globalEval: function (data) {
      if (data && jQuery.trim(data)) {
        (window.execScript || function (data) {
          window['eval'].call(window, data);
        })(data);
      }
    },
    camelCase: function (string) {
      return string.replace(rmsPrefix, 'ms-').replace(rdashAlpha, fcamelCase);
    },
    nodeName: function (elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    },
    each: function (obj, callback, args) {
      var value, i = 0, length = obj.length, isArray = isArraylike(obj);
      if (args) {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.apply(obj[i], args);
            if (value === false) {
              break;
            }
          }
        }
      } else {
        if (isArray) {
          for (; i < length; i++) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        } else {
          for (i in obj) {
            value = callback.call(obj[i], i, obj[i]);
            if (value === false) {
              break;
            }
          }
        }
      }
      return obj;
    },
    trim: core_trim && !core_trim.call('\ufeff\xa0') ? function (text) {
      return text == null ? '' : core_trim.call(text);
    } : function (text) {
      return text == null ? '' : (text + '').replace(rtrim, '');
    },
    makeArray: function (arr, results) {
      var ret = results || [];
      if (arr != null) {
        if (isArraylike(Object(arr))) {
          jQuery.merge(ret, typeof arr === 'string' ? [arr] : arr);
        } else {
          core_push.call(ret, arr);
        }
      }
      return ret;
    },
    inArray: function (elem, arr, i) {
      var len;
      if (arr) {
        if (core_indexOf) {
          return core_indexOf.call(arr, elem, i);
        }
        len = arr.length;
        i = i ? i < 0 ? Math.max(0, len + i) : i : 0;
        for (; i < len; i++) {
          if (i in arr && arr[i] === elem) {
            return i;
          }
        }
      }
      return -1;
    },
    merge: function (first, second) {
      var l = second.length, i = first.length, j = 0;
      if (typeof l === 'number') {
        for (; j < l; j++) {
          first[i++] = second[j];
        }
      } else {
        while (second[j] !== undefined) {
          first[i++] = second[j++];
        }
      }
      first.length = i;
      return first;
    },
    grep: function (elems, callback, inv) {
      var retVal, ret = [], i = 0, length = elems.length;
      inv = !!inv;
      for (; i < length; i++) {
        retVal = !!callback(elems[i], i);
        if (inv !== retVal) {
          ret.push(elems[i]);
        }
      }
      return ret;
    },
    map: function (elems, callback, arg) {
      var value, i = 0, length = elems.length, isArray = isArraylike(elems), ret = [];
      if (isArray) {
        for (; i < length; i++) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret[ret.length] = value;
          }
        }
      } else {
        for (i in elems) {
          value = callback(elems[i], i, arg);
          if (value != null) {
            ret[ret.length] = value;
          }
        }
      }
      return core_concat.apply([], ret);
    },
    guid: 1,
    proxy: function (fn, context) {
      var args, proxy, tmp;
      if (typeof context === 'string') {
        tmp = fn[context];
        context = fn;
        fn = tmp;
      }
      if (!jQuery.isFunction(fn)) {
        return undefined;
      }
      args = core_slice.call(arguments, 2);
      proxy = function () {
        return fn.apply(context || this, args.concat(core_slice.call(arguments)));
      };
      proxy.guid = fn.guid = fn.guid || jQuery.guid++;
      return proxy;
    },
    access: function (elems, fn, key, value, chainable, emptyGet, raw) {
      var i = 0, length = elems.length, bulk = key == null;
      if (jQuery.type(key) === 'object') {
        chainable = true;
        for (i in key) {
          jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
        }
      } else if (value !== undefined) {
        chainable = true;
        if (!jQuery.isFunction(value)) {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn.call(elems, value);
            fn = null;
          } else {
            bulk = fn;
            fn = function (elem, key, value) {
              return bulk.call(jQuery(elem), value);
            };
          }
        }
        if (fn) {
          for (; i < length; i++) {
            fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
          }
        }
      }
      return chainable ? elems : bulk ? fn.call(elems) : length ? fn(elems[0], key) : emptyGet;
    },
    now: function () {
      return new Date().getTime();
    }
  });
  jQuery.ready.promise = function (obj) {
    if (!readyList) {
      readyList = jQuery.Deferred();
      if (document.readyState === 'complete') {
        setTimeout(jQuery.ready);
      } else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', completed, false);
        window.addEventListener('load', completed, false);
      } else {
        document.attachEvent('onreadystatechange', completed);
        window.attachEvent('onload', completed);
        var top = false;
        try {
          top = window.frameElement == null && document.documentElement;
        } catch (e) {
        }
        if (top && top.doScroll) {
          (function doScrollCheck() {
            if (!jQuery.isReady) {
              try {
                top.doScroll('left');
              } catch (e) {
                return setTimeout(doScrollCheck, 50);
              }
              detach();
              jQuery.ready();
            }
          }());
        }
      }
    }
    return readyList.promise(obj);
  };
  jQuery.each('Boolean Number String Function Array Date RegExp Object Error'.split(' '), function (i, name) {
    class2type['[object ' + name + ']'] = name.toLowerCase();
  });
  function isArraylike(obj) {
    var length = obj.length, type = jQuery.type(obj);
    if (jQuery.isWindow(obj)) {
      return false;
    }
    if (obj.nodeType === 1 && length) {
      return true;
    }
    return type === 'array' || type !== 'function' && (length === 0 || typeof length === 'number' && length > 0 && length - 1 in obj);
  }
  rootjQuery = jQuery(document);
  var optionsCache = {};
  function createOptions(options) {
    var object = optionsCache[options] = {};
    jQuery.each(options.match(core_rnotwhite) || [], function (_, flag) {
      object[flag] = true;
    });
    return object;
  }
  jQuery.Callbacks = function (options) {
    options = typeof options === 'string' ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);
    var firing, memory, fired, firingLength, firingIndex, firingStart, list = [], stack = !options.once && [], fire = function (data) {
        memory = options.memory && data;
        fired = true;
        firingIndex = firingStart || 0;
        firingStart = 0;
        firingLength = list.length;
        firing = true;
        for (; list && firingIndex < firingLength; firingIndex++) {
          if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
            memory = false;
            break;
          }
        }
        firing = false;
        if (list) {
          if (stack) {
            if (stack.length) {
              fire(stack.shift());
            }
          } else if (memory) {
            list = [];
          } else {
            self.disable();
          }
        }
      }, self = {
        add: function () {
          if (list) {
            var start = list.length;
            (function add(args) {
              jQuery.each(args, function (_, arg) {
                var type = jQuery.type(arg);
                if (type === 'function') {
                  if (!options.unique || !self.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && type !== 'string') {
                  add(arg);
                }
              });
            }(arguments));
            if (firing) {
              firingLength = list.length;
            } else if (memory) {
              firingStart = start;
              fire(memory);
            }
          }
          return this;
        },
        remove: function () {
          if (list) {
            jQuery.each(arguments, function (_, arg) {
              var index;
              while ((index = jQuery.inArray(arg, list, index)) > -1) {
                list.splice(index, 1);
                if (firing) {
                  if (index <= firingLength) {
                    firingLength--;
                  }
                  if (index <= firingIndex) {
                    firingIndex--;
                  }
                }
              }
            });
          }
          return this;
        },
        has: function (fn) {
          return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
        },
        empty: function () {
          list = [];
          return this;
        },
        disable: function () {
          list = stack = memory = undefined;
          return this;
        },
        disabled: function () {
          return !list;
        },
        lock: function () {
          stack = undefined;
          if (!memory) {
            self.disable();
          }
          return this;
        },
        locked: function () {
          return !stack;
        },
        fireWith: function (context, args) {
          args = args || [];
          args = [
            context,
            args.slice ? args.slice() : args
          ];
          if (list && (!fired || stack)) {
            if (firing) {
              stack.push(args);
            } else {
              fire(args);
            }
          }
          return this;
        },
        fire: function () {
          self.fireWith(this, arguments);
          return this;
        },
        fired: function () {
          return !!fired;
        }
      };
    return self;
  };
  jQuery.extend({
    Deferred: function (func) {
      var tuples = [
          [
            'resolve',
            'done',
            jQuery.Callbacks('once memory'),
            'resolved'
          ],
          [
            'reject',
            'fail',
            jQuery.Callbacks('once memory'),
            'rejected'
          ],
          [
            'notify',
            'progress',
            jQuery.Callbacks('memory')
          ]
        ], state = 'pending', promise = {
          state: function () {
            return state;
          },
          always: function () {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          then: function () {
            var fns = arguments;
            return jQuery.Deferred(function (newDefer) {
              jQuery.each(tuples, function (i, tuple) {
                var action = tuple[0], fn = jQuery.isFunction(fns[i]) && fns[i];
                deferred[tuple[1]](function () {
                  var returned = fn && fn.apply(this, arguments);
                  if (returned && jQuery.isFunction(returned.promise)) {
                    returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                  } else {
                    newDefer[action + 'With'](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                  }
                });
              });
              fns = null;
            }).promise();
          },
          promise: function (obj) {
            return obj != null ? jQuery.extend(obj, promise) : promise;
          }
        }, deferred = {};
      promise.pipe = promise.then;
      jQuery.each(tuples, function (i, tuple) {
        var list = tuple[2], stateString = tuple[3];
        promise[tuple[1]] = list.add;
        if (stateString) {
          list.add(function () {
            state = stateString;
          }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
        }
        deferred[tuple[0]] = function () {
          deferred[tuple[0] + 'With'](this === deferred ? promise : this, arguments);
          return this;
        };
        deferred[tuple[0] + 'With'] = list.fireWith;
      });
      promise.promise(deferred);
      if (func) {
        func.call(deferred, deferred);
      }
      return deferred;
    },
    when: function (subordinate) {
      var i = 0, resolveValues = core_slice.call(arguments), length = resolveValues.length, remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0, deferred = remaining === 1 ? subordinate : jQuery.Deferred(), updateFunc = function (i, contexts, values) {
          return function (value) {
            contexts[i] = this;
            values[i] = arguments.length > 1 ? core_slice.call(arguments) : value;
            if (values === progressValues) {
              deferred.notifyWith(contexts, values);
            } else if (!--remaining) {
              deferred.resolveWith(contexts, values);
            }
          };
        }, progressValues, progressContexts, resolveContexts;
      if (length > 1) {
        progressValues = new Array(length);
        progressContexts = new Array(length);
        resolveContexts = new Array(length);
        for (; i < length; i++) {
          if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
            resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
          } else {
            --remaining;
          }
        }
      }
      if (!remaining) {
        deferred.resolveWith(resolveContexts, resolveValues);
      }
      return deferred.promise();
    }
  });
  jQuery.support = function () {
    var support, all, a, input, select, fragment, opt, eventName, isSupported, i, div = document.createElement('div');
    div.setAttribute('className', 't');
    div.innerHTML = '  <link/><table></table><a href=\'/a\'>a</a><input type=\'checkbox\'/>';
    all = div.getElementsByTagName('*');
    a = div.getElementsByTagName('a')[0];
    if (!all || !a || !all.length) {
      return {};
    }
    select = document.createElement('select');
    opt = select.appendChild(document.createElement('option'));
    input = div.getElementsByTagName('input')[0];
    a.style.cssText = 'top:1px;float:left;opacity:.5';
    support = {
      getSetAttribute: div.className !== 't',
      leadingWhitespace: div.firstChild.nodeType === 3,
      tbody: !div.getElementsByTagName('tbody').length,
      htmlSerialize: !!div.getElementsByTagName('link').length,
      style: /top/.test(a.getAttribute('style')),
      hrefNormalized: a.getAttribute('href') === '/a',
      opacity: /^0.5/.test(a.style.opacity),
      cssFloat: !!a.style.cssFloat,
      checkOn: !!input.value,
      optSelected: opt.selected,
      enctype: !!document.createElement('form').enctype,
      html5Clone: document.createElement('nav').cloneNode(true).outerHTML !== '<:nav></:nav>',
      boxModel: document.compatMode === 'CSS1Compat',
      deleteExpando: true,
      noCloneEvent: true,
      inlineBlockNeedsLayout: false,
      shrinkWrapBlocks: false,
      reliableMarginRight: true,
      boxSizingReliable: true,
      pixelPosition: false
    };
    input.checked = true;
    support.noCloneChecked = input.cloneNode(true).checked;
    select.disabled = true;
    support.optDisabled = !opt.disabled;
    try {
      delete div.test;
    } catch (e) {
      support.deleteExpando = false;
    }
    input = document.createElement('input');
    input.setAttribute('value', '');
    support.input = input.getAttribute('value') === '';
    input.value = 't';
    input.setAttribute('type', 'radio');
    support.radioValue = input.value === 't';
    input.setAttribute('checked', 't');
    input.setAttribute('name', 't');
    fragment = document.createDocumentFragment();
    fragment.appendChild(input);
    support.appendChecked = input.checked;
    support.checkClone = fragment.cloneNode(true).cloneNode(true).lastChild.checked;
    if (div.attachEvent) {
      div.attachEvent('onclick', function () {
        support.noCloneEvent = false;
      });
      div.cloneNode(true).click();
    }
    for (i in {
        submit: true,
        change: true,
        focusin: true
      }) {
      div.setAttribute(eventName = 'on' + i, 't');
      support[i + 'Bubbles'] = eventName in window || div.attributes[eventName].expando === false;
    }
    div.style.backgroundClip = 'content-box';
    div.cloneNode(true).style.backgroundClip = '';
    support.clearCloneStyle = div.style.backgroundClip === 'content-box';
    jQuery(function () {
      var container, marginDiv, tds, divReset = 'padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;', body = document.getElementsByTagName('body')[0];
      if (!body) {
        return;
      }
      container = document.createElement('div');
      container.style.cssText = 'border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px';
      body.appendChild(container).appendChild(div);
      div.innerHTML = '<table><tr><td></td><td>t</td></tr></table>';
      tds = div.getElementsByTagName('td');
      tds[0].style.cssText = 'padding:0;margin:0;border:0;display:none';
      isSupported = tds[0].offsetHeight === 0;
      tds[0].style.display = '';
      tds[1].style.display = 'none';
      support.reliableHiddenOffsets = isSupported && tds[0].offsetHeight === 0;
      div.innerHTML = '';
      div.style.cssText = 'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;';
      support.boxSizing = div.offsetWidth === 4;
      support.doesNotIncludeMarginInBodyOffset = body.offsetTop !== 1;
      if (window.getComputedStyle) {
        support.pixelPosition = (window.getComputedStyle(div, null) || {}).top !== '1%';
        support.boxSizingReliable = (window.getComputedStyle(div, null) || { width: '4px' }).width === '4px';
        marginDiv = div.appendChild(document.createElement('div'));
        marginDiv.style.cssText = div.style.cssText = divReset;
        marginDiv.style.marginRight = marginDiv.style.width = '0';
        div.style.width = '1px';
        support.reliableMarginRight = !parseFloat((window.getComputedStyle(marginDiv, null) || {}).marginRight);
      }
      if (typeof div.style.zoom !== core_strundefined) {
        div.innerHTML = '';
        div.style.cssText = divReset + 'width:1px;padding:1px;display:inline;zoom:1';
        support.inlineBlockNeedsLayout = div.offsetWidth === 3;
        div.style.display = 'block';
        div.innerHTML = '<div></div>';
        div.firstChild.style.width = '5px';
        support.shrinkWrapBlocks = div.offsetWidth !== 3;
        if (support.inlineBlockNeedsLayout) {
          body.style.zoom = 1;
        }
      }
      body.removeChild(container);
      container = div = tds = marginDiv = null;
    });
    all = select = fragment = opt = a = input = null;
    return support;
  }();
  var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, rmultiDash = /([A-Z])/g;
  function internalData(elem, name, data, pvt) {
    if (!jQuery.acceptData(elem)) {
      return;
    }
    var thisCache, ret, internalKey = jQuery.expando, getByName = typeof name === 'string', isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;
    if ((!id || !cache[id] || !pvt && !cache[id].data) && getByName && data === undefined) {
      return;
    }
    if (!id) {
      if (isNode) {
        elem[internalKey] = id = core_deletedIds.pop() || jQuery.guid++;
      } else {
        id = internalKey;
      }
    }
    if (!cache[id]) {
      cache[id] = {};
      if (!isNode) {
        cache[id].toJSON = jQuery.noop;
      }
    }
    if (typeof name === 'object' || typeof name === 'function') {
      if (pvt) {
        cache[id] = jQuery.extend(cache[id], name);
      } else {
        cache[id].data = jQuery.extend(cache[id].data, name);
      }
    }
    thisCache = cache[id];
    if (!pvt) {
      if (!thisCache.data) {
        thisCache.data = {};
      }
      thisCache = thisCache.data;
    }
    if (data !== undefined) {
      thisCache[jQuery.camelCase(name)] = data;
    }
    if (getByName) {
      ret = thisCache[name];
      if (ret == null) {
        ret = thisCache[jQuery.camelCase(name)];
      }
    } else {
      ret = thisCache;
    }
    return ret;
  }
  function internalRemoveData(elem, name, pvt) {
    if (!jQuery.acceptData(elem)) {
      return;
    }
    var i, l, thisCache, isNode = elem.nodeType, cache = isNode ? jQuery.cache : elem, id = isNode ? elem[jQuery.expando] : jQuery.expando;
    if (!cache[id]) {
      return;
    }
    if (name) {
      thisCache = pvt ? cache[id] : cache[id].data;
      if (thisCache) {
        if (!jQuery.isArray(name)) {
          if (name in thisCache) {
            name = [name];
          } else {
            name = jQuery.camelCase(name);
            if (name in thisCache) {
              name = [name];
            } else {
              name = name.split(' ');
            }
          }
        } else {
          name = name.concat(jQuery.map(name, jQuery.camelCase));
        }
        for (i = 0, l = name.length; i < l; i++) {
          delete thisCache[name[i]];
        }
        if (!(pvt ? isEmptyDataObject : jQuery.isEmptyObject)(thisCache)) {
          return;
        }
      }
    }
    if (!pvt) {
      delete cache[id].data;
      if (!isEmptyDataObject(cache[id])) {
        return;
      }
    }
    if (isNode) {
      jQuery.cleanData([elem], true);
    } else if (jQuery.support.deleteExpando || cache != cache.window) {
      delete cache[id];
    } else {
      cache[id] = null;
    }
  }
  jQuery.extend({
    cache: {},
    expando: 'jQuery' + (core_version + Math.random()).replace(/\D/g, ''),
    noData: {
      'embed': true,
      'object': 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000',
      'applet': true
    },
    hasData: function (elem) {
      elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
      return !!elem && !isEmptyDataObject(elem);
    },
    data: function (elem, name, data) {
      return internalData(elem, name, data);
    },
    removeData: function (elem, name) {
      return internalRemoveData(elem, name);
    },
    _data: function (elem, name, data) {
      return internalData(elem, name, data, true);
    },
    _removeData: function (elem, name) {
      return internalRemoveData(elem, name, true);
    },
    acceptData: function (elem) {
      if (elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9) {
        return false;
      }
      var noData = elem.nodeName && jQuery.noData[elem.nodeName.toLowerCase()];
      return !noData || noData !== true && elem.getAttribute('classid') === noData;
    }
  });
  jQuery.fn.extend({
    data: function (key, value) {
      var attrs, name, elem = this[0], i = 0, data = null;
      if (key === undefined) {
        if (this.length) {
          data = jQuery.data(elem);
          if (elem.nodeType === 1 && !jQuery._data(elem, 'parsedAttrs')) {
            attrs = elem.attributes;
            for (; i < attrs.length; i++) {
              name = attrs[i].name;
              if (!name.indexOf('data-')) {
                name = jQuery.camelCase(name.slice(5));
                dataAttr(elem, name, data[name]);
              }
            }
            jQuery._data(elem, 'parsedAttrs', true);
          }
        }
        return data;
      }
      if (typeof key === 'object') {
        return this.each(function () {
          jQuery.data(this, key);
        });
      }
      return jQuery.access(this, function (value) {
        if (value === undefined) {
          return elem ? dataAttr(elem, key, jQuery.data(elem, key)) : null;
        }
        this.each(function () {
          jQuery.data(this, key, value);
        });
      }, null, value, arguments.length > 1, null, true);
    },
    removeData: function (key) {
      return this.each(function () {
        jQuery.removeData(this, key);
      });
    }
  });
  function dataAttr(elem, key, data) {
    if (data === undefined && elem.nodeType === 1) {
      var name = 'data-' + key.replace(rmultiDash, '-$1').toLowerCase();
      data = elem.getAttribute(name);
      if (typeof data === 'string') {
        try {
          data = data === 'true' ? true : data === 'false' ? false : data === 'null' ? null : +data + '' === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
        } catch (e) {
        }
        jQuery.data(elem, key, data);
      } else {
        data = undefined;
      }
    }
    return data;
  }
  function isEmptyDataObject(obj) {
    var name;
    for (name in obj) {
      if (name === 'data' && jQuery.isEmptyObject(obj[name])) {
        continue;
      }
      if (name !== 'toJSON') {
        return false;
      }
    }
    return true;
  }
  jQuery.extend({
    queue: function (elem, type, data) {
      var queue;
      if (elem) {
        type = (type || 'fx') + 'queue';
        queue = jQuery._data(elem, type);
        if (data) {
          if (!queue || jQuery.isArray(data)) {
            queue = jQuery._data(elem, type, jQuery.makeArray(data));
          } else {
            queue.push(data);
          }
        }
        return queue || [];
      }
    },
    dequeue: function (elem, type) {
      type = type || 'fx';
      var queue = jQuery.queue(elem, type), startLength = queue.length, fn = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function () {
          jQuery.dequeue(elem, type);
        };
      if (fn === 'inprogress') {
        fn = queue.shift();
        startLength--;
      }
      hooks.cur = fn;
      if (fn) {
        if (type === 'fx') {
          queue.unshift('inprogress');
        }
        delete hooks.stop;
        fn.call(elem, next, hooks);
      }
      if (!startLength && hooks) {
        hooks.empty.fire();
      }
    },
    _queueHooks: function (elem, type) {
      var key = type + 'queueHooks';
      return jQuery._data(elem, key) || jQuery._data(elem, key, {
        empty: jQuery.Callbacks('once memory').add(function () {
          jQuery._removeData(elem, type + 'queue');
          jQuery._removeData(elem, key);
        })
      });
    }
  });
  jQuery.fn.extend({
    queue: function (type, data) {
      var setter = 2;
      if (typeof type !== 'string') {
        data = type;
        type = 'fx';
        setter--;
      }
      if (arguments.length < setter) {
        return jQuery.queue(this[0], type);
      }
      return data === undefined ? this : this.each(function () {
        var queue = jQuery.queue(this, type, data);
        jQuery._queueHooks(this, type);
        if (type === 'fx' && queue[0] !== 'inprogress') {
          jQuery.dequeue(this, type);
        }
      });
    },
    dequeue: function (type) {
      return this.each(function () {
        jQuery.dequeue(this, type);
      });
    },
    delay: function (time, type) {
      time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
      type = type || 'fx';
      return this.queue(type, function (next, hooks) {
        var timeout = setTimeout(next, time);
        hooks.stop = function () {
          clearTimeout(timeout);
        };
      });
    },
    clearQueue: function (type) {
      return this.queue(type || 'fx', []);
    },
    promise: function (type, obj) {
      var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i = this.length, resolve = function () {
          if (!--count) {
            defer.resolveWith(elements, [elements]);
          }
        };
      if (typeof type !== 'string') {
        obj = type;
        type = undefined;
      }
      type = type || 'fx';
      while (i--) {
        tmp = jQuery._data(elements[i], type + 'queueHooks');
        if (tmp && tmp.empty) {
          count++;
          tmp.empty.add(resolve);
        }
      }
      resolve();
      return defer.promise(obj);
    }
  });
  var nodeHook, boolHook, rclass = /[\t\r\n]/g, rreturn = /\r/g, rfocusable = /^(?:input|select|textarea|button|object)$/i, rclickable = /^(?:a|area)$/i, rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, ruseDefault = /^(?:checked|selected)$/i, getSetAttribute = jQuery.support.getSetAttribute, getSetInput = jQuery.support.input;
  jQuery.fn.extend({
    attr: function (name, value) {
      return jQuery.access(this, jQuery.attr, name, value, arguments.length > 1);
    },
    removeAttr: function (name) {
      return this.each(function () {
        jQuery.removeAttr(this, name);
      });
    },
    prop: function (name, value) {
      return jQuery.access(this, jQuery.prop, name, value, arguments.length > 1);
    },
    removeProp: function (name) {
      name = jQuery.propFix[name] || name;
      return this.each(function () {
        try {
          this[name] = undefined;
          delete this[name];
        } catch (e) {
        }
      });
    },
    addClass: function (value) {
      var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = typeof value === 'string' && value;
      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).addClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || '').match(core_rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (' ' + elem.className + ' ').replace(rclass, ' ') : ' ');
          if (cur) {
            j = 0;
            while (clazz = classes[j++]) {
              if (cur.indexOf(' ' + clazz + ' ') < 0) {
                cur += clazz + ' ';
              }
            }
            elem.className = jQuery.trim(cur);
          }
        }
      }
      return this;
    },
    removeClass: function (value) {
      var classes, elem, cur, clazz, j, i = 0, len = this.length, proceed = arguments.length === 0 || typeof value === 'string' && value;
      if (jQuery.isFunction(value)) {
        return this.each(function (j) {
          jQuery(this).removeClass(value.call(this, j, this.className));
        });
      }
      if (proceed) {
        classes = (value || '').match(core_rnotwhite) || [];
        for (; i < len; i++) {
          elem = this[i];
          cur = elem.nodeType === 1 && (elem.className ? (' ' + elem.className + ' ').replace(rclass, ' ') : '');
          if (cur) {
            j = 0;
            while (clazz = classes[j++]) {
              while (cur.indexOf(' ' + clazz + ' ') >= 0) {
                cur = cur.replace(' ' + clazz + ' ', ' ');
              }
            }
            elem.className = value ? jQuery.trim(cur) : '';
          }
        }
      }
      return this;
    },
    toggleClass: function (value, stateVal) {
      var type = typeof value, isBool = typeof stateVal === 'boolean';
      if (jQuery.isFunction(value)) {
        return this.each(function (i) {
          jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
        });
      }
      return this.each(function () {
        if (type === 'string') {
          var className, i = 0, self = jQuery(this), state = stateVal, classNames = value.match(core_rnotwhite) || [];
          while (className = classNames[i++]) {
            state = isBool ? state : !self.hasClass(className);
            self[state ? 'addClass' : 'removeClass'](className);
          }
        } else if (type === core_strundefined || type === 'boolean') {
          if (this.className) {
            jQuery._data(this, '__className__', this.className);
          }
          this.className = this.className || value === false ? '' : jQuery._data(this, '__className__') || '';
        }
      });
    },
    hasClass: function (selector) {
      var className = ' ' + selector + ' ', i = 0, l = this.length;
      for (; i < l; i++) {
        if (this[i].nodeType === 1 && (' ' + this[i].className + ' ').replace(rclass, ' ').indexOf(className) >= 0) {
          return true;
        }
      }
      return false;
    },
    val: function (value) {
      var ret, hooks, isFunction, elem = this[0];
      if (!arguments.length) {
        if (elem) {
          hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
          if (hooks && 'get' in hooks && (ret = hooks.get(elem, 'value')) !== undefined) {
            return ret;
          }
          ret = elem.value;
          return typeof ret === 'string' ? ret.replace(rreturn, '') : ret == null ? '' : ret;
        }
        return;
      }
      isFunction = jQuery.isFunction(value);
      return this.each(function (i) {
        var val, self = jQuery(this);
        if (this.nodeType !== 1) {
          return;
        }
        if (isFunction) {
          val = value.call(this, i, self.val());
        } else {
          val = value;
        }
        if (val == null) {
          val = '';
        } else if (typeof val === 'number') {
          val += '';
        } else if (jQuery.isArray(val)) {
          val = jQuery.map(val, function (value) {
            return value == null ? '' : value + '';
          });
        }
        hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
        if (!hooks || !('set' in hooks) || hooks.set(this, val, 'value') === undefined) {
          this.value = val;
        }
      });
    }
  });
  jQuery.extend({
    valHooks: {
      option: {
        get: function (elem) {
          var val = elem.attributes.value;
          return !val || val.specified ? elem.value : elem.text;
        }
      },
      select: {
        get: function (elem) {
          var value, option, options = elem.options, index = elem.selectedIndex, one = elem.type === 'select-one' || index < 0, values = one ? null : [], max = one ? index + 1 : options.length, i = index < 0 ? max : one ? index : 0;
          for (; i < max; i++) {
            option = options[i];
            if ((option.selected || i === index) && (jQuery.support.optDisabled ? !option.disabled : option.getAttribute('disabled') === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, 'optgroup'))) {
              value = jQuery(option).val();
              if (one) {
                return value;
              }
              values.push(value);
            }
          }
          return values;
        },
        set: function (elem, value) {
          var values = jQuery.makeArray(value);
          jQuery(elem).find('option').each(function () {
            this.selected = jQuery.inArray(jQuery(this).val(), values) >= 0;
          });
          if (!values.length) {
            elem.selectedIndex = -1;
          }
          return values;
        }
      }
    },
    attr: function (elem, name, value) {
      var hooks, notxml, ret, nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      if (typeof elem.getAttribute === core_strundefined) {
        return jQuery.prop(elem, name, value);
      }
      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
      if (notxml) {
        name = name.toLowerCase();
        hooks = jQuery.attrHooks[name] || (rboolean.test(name) ? boolHook : nodeHook);
      }
      if (value !== undefined) {
        if (value === null) {
          jQuery.removeAttr(elem, name);
        } else if (hooks && notxml && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          elem.setAttribute(name, value + '');
          return value;
        }
      } else if (hooks && notxml && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
        return ret;
      } else {
        if (typeof elem.getAttribute !== core_strundefined) {
          ret = elem.getAttribute(name);
        }
        return ret == null ? undefined : ret;
      }
    },
    removeAttr: function (elem, value) {
      var name, propName, i = 0, attrNames = value && value.match(core_rnotwhite);
      if (attrNames && elem.nodeType === 1) {
        while (name = attrNames[i++]) {
          propName = jQuery.propFix[name] || name;
          if (rboolean.test(name)) {
            if (!getSetAttribute && ruseDefault.test(name)) {
              elem[jQuery.camelCase('default-' + name)] = elem[propName] = false;
            } else {
              elem[propName] = false;
            }
          } else {
            jQuery.attr(elem, name, '');
          }
          elem.removeAttribute(getSetAttribute ? name : propName);
        }
      }
    },
    attrHooks: {
      type: {
        set: function (elem, value) {
          if (!jQuery.support.radioValue && value === 'radio' && jQuery.nodeName(elem, 'input')) {
            var val = elem.value;
            elem.setAttribute('type', value);
            if (val) {
              elem.value = val;
            }
            return value;
          }
        }
      }
    },
    propFix: {
      tabindex: 'tabIndex',
      readonly: 'readOnly',
      'for': 'htmlFor',
      'class': 'className',
      maxlength: 'maxLength',
      cellspacing: 'cellSpacing',
      cellpadding: 'cellPadding',
      rowspan: 'rowSpan',
      colspan: 'colSpan',
      usemap: 'useMap',
      frameborder: 'frameBorder',
      contenteditable: 'contentEditable'
    },
    prop: function (elem, name, value) {
      var ret, hooks, notxml, nType = elem.nodeType;
      if (!elem || nType === 3 || nType === 8 || nType === 2) {
        return;
      }
      notxml = nType !== 1 || !jQuery.isXMLDoc(elem);
      if (notxml) {
        name = jQuery.propFix[name] || name;
        hooks = jQuery.propHooks[name];
      }
      if (value !== undefined) {
        if (hooks && 'set' in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
          return ret;
        } else {
          return elem[name] = value;
        }
      } else {
        if (hooks && 'get' in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        } else {
          return elem[name];
        }
      }
    },
    propHooks: {
      tabIndex: {
        get: function (elem) {
          var attributeNode = elem.getAttributeNode('tabindex');
          return attributeNode && attributeNode.specified ? parseInt(attributeNode.value, 10) : rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href ? 0 : undefined;
        }
      }
    }
  });
  boolHook = {
    get: function (elem, name) {
      var prop = jQuery.prop(elem, name), attr = typeof prop === 'boolean' && elem.getAttribute(name), detail = typeof prop === 'boolean' ? getSetInput && getSetAttribute ? attr != null : ruseDefault.test(name) ? elem[jQuery.camelCase('default-' + name)] : !!attr : elem.getAttributeNode(name);
      return detail && detail.value !== false ? name.toLowerCase() : undefined;
    },
    set: function (elem, value, name) {
      if (value === false) {
        jQuery.removeAttr(elem, name);
      } else if (getSetInput && getSetAttribute || !ruseDefault.test(name)) {
        elem.setAttribute(!getSetAttribute && jQuery.propFix[name] || name, name);
      } else {
        elem[jQuery.camelCase('default-' + name)] = elem[name] = true;
      }
      return name;
    }
  };
  if (!getSetInput || !getSetAttribute) {
    jQuery.attrHooks.value = {
      get: function (elem, name) {
        var ret = elem.getAttributeNode(name);
        return jQuery.nodeName(elem, 'input') ? elem.defaultValue : ret && ret.specified ? ret.value : undefined;
      },
      set: function (elem, value, name) {
        if (jQuery.nodeName(elem, 'input')) {
          elem.defaultValue = value;
        } else {
          return nodeHook && nodeHook.set(elem, value, name);
        }
      }
    };
  }
  if (!getSetAttribute) {
    nodeHook = jQuery.valHooks.button = {
      get: function (elem, name) {
        var ret = elem.getAttributeNode(name);
        return ret && (name === 'id' || name === 'name' || name === 'coords' ? ret.value !== '' : ret.specified) ? ret.value : undefined;
      },
      set: function (elem, value, name) {
        var ret = elem.getAttributeNode(name);
        if (!ret) {
          elem.setAttributeNode(ret = elem.ownerDocument.createAttribute(name));
        }
        ret.value = value += '';
        return name === 'value' || value === elem.getAttribute(name) ? value : undefined;
      }
    };
    jQuery.attrHooks.contenteditable = {
      get: nodeHook.get,
      set: function (elem, value, name) {
        nodeHook.set(elem, value === '' ? false : value, name);
      }
    };
    jQuery.each([
      'width',
      'height'
    ], function (i, name) {
      jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
        set: function (elem, value) {
          if (value === '') {
            elem.setAttribute(name, 'auto');
            return value;
          }
        }
      });
    });
  }
  if (!jQuery.support.hrefNormalized) {
    jQuery.each([
      'href',
      'src',
      'width',
      'height'
    ], function (i, name) {
      jQuery.attrHooks[name] = jQuery.extend(jQuery.attrHooks[name], {
        get: function (elem) {
          var ret = elem.getAttribute(name, 2);
          return ret == null ? undefined : ret;
        }
      });
    });
    jQuery.each([
      'href',
      'src'
    ], function (i, name) {
      jQuery.propHooks[name] = {
        get: function (elem) {
          return elem.getAttribute(name, 4);
        }
      };
    });
  }
  if (!jQuery.support.style) {
    jQuery.attrHooks.style = {
      get: function (elem) {
        return elem.style.cssText || undefined;
      },
      set: function (elem, value) {
        return elem.style.cssText = value + '';
      }
    };
  }
  if (!jQuery.support.optSelected) {
    jQuery.propHooks.selected = jQuery.extend(jQuery.propHooks.selected, {
      get: function (elem) {
        var parent = elem.parentNode;
        if (parent) {
          parent.selectedIndex;
          if (parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
        }
        return null;
      }
    });
  }
  if (!jQuery.support.enctype) {
    jQuery.propFix.enctype = 'encoding';
  }
  if (!jQuery.support.checkOn) {
    jQuery.each([
      'radio',
      'checkbox'
    ], function () {
      jQuery.valHooks[this] = {
        get: function (elem) {
          return elem.getAttribute('value') === null ? 'on' : elem.value;
        }
      };
    });
  }
  jQuery.each([
    'radio',
    'checkbox'
  ], function () {
    jQuery.valHooks[this] = jQuery.extend(jQuery.valHooks[this], {
      set: function (elem, value) {
        if (jQuery.isArray(value)) {
          return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
        }
      }
    });
  });
  var rformElems = /^(?:input|select|textarea)$/i, rkeyEvent = /^key/, rmouseEvent = /^(?:mouse|contextmenu)|click/, rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;
  function returnTrue() {
    return true;
  }
  function returnFalse() {
    return false;
  }
  jQuery.event = {
    global: {},
    add: function (elem, types, handler, data, selector) {
      var tmp, events, t, handleObjIn, special, eventHandle, handleObj, handlers, type, namespaces, origType, elemData = jQuery._data(elem);
      if (!elemData) {
        return;
      }
      if (handler.handler) {
        handleObjIn = handler;
        handler = handleObjIn.handler;
        selector = handleObjIn.selector;
      }
      if (!handler.guid) {
        handler.guid = jQuery.guid++;
      }
      if (!(events = elemData.events)) {
        events = elemData.events = {};
      }
      if (!(eventHandle = elemData.handle)) {
        eventHandle = elemData.handle = function (e) {
          return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ? jQuery.event.dispatch.apply(eventHandle.elem, arguments) : undefined;
        };
        eventHandle.elem = elem;
      }
      types = (types || '').match(core_rnotwhite) || [''];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || '').split('.').sort();
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        special = jQuery.event.special[type] || {};
        handleObj = jQuery.extend({
          type: type,
          origType: origType,
          data: data,
          handler: handler,
          guid: handler.guid,
          selector: selector,
          needsContext: selector && jQuery.expr.match.needsContext.test(selector),
          namespace: namespaces.join('.')
        }, handleObjIn);
        if (!(handlers = events[type])) {
          handlers = events[type] = [];
          handlers.delegateCount = 0;
          if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
            if (elem.addEventListener) {
              elem.addEventListener(type, eventHandle, false);
            } else if (elem.attachEvent) {
              elem.attachEvent('on' + type, eventHandle);
            }
          }
        }
        if (special.add) {
          special.add.call(elem, handleObj);
          if (!handleObj.handler.guid) {
            handleObj.handler.guid = handler.guid;
          }
        }
        if (selector) {
          handlers.splice(handlers.delegateCount++, 0, handleObj);
        } else {
          handlers.push(handleObj);
        }
        jQuery.event.global[type] = true;
      }
      elem = null;
    },
    remove: function (elem, types, handler, selector, mappedTypes) {
      var j, handleObj, tmp, origCount, t, events, special, handlers, type, namespaces, origType, elemData = jQuery.hasData(elem) && jQuery._data(elem);
      if (!elemData || !(events = elemData.events)) {
        return;
      }
      types = (types || '').match(core_rnotwhite) || [''];
      t = types.length;
      while (t--) {
        tmp = rtypenamespace.exec(types[t]) || [];
        type = origType = tmp[1];
        namespaces = (tmp[2] || '').split('.').sort();
        if (!type) {
          for (type in events) {
            jQuery.event.remove(elem, type + types[t], handler, selector, true);
          }
          continue;
        }
        special = jQuery.event.special[type] || {};
        type = (selector ? special.delegateType : special.bindType) || type;
        handlers = events[type] || [];
        tmp = tmp[2] && new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)');
        origCount = j = handlers.length;
        while (j--) {
          handleObj = handlers[j];
          if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === '**' && handleObj.selector)) {
            handlers.splice(j, 1);
            if (handleObj.selector) {
              handlers.delegateCount--;
            }
            if (special.remove) {
              special.remove.call(elem, handleObj);
            }
          }
        }
        if (origCount && !handlers.length) {
          if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
            jQuery.removeEvent(elem, type, elemData.handle);
          }
          delete events[type];
        }
      }
      if (jQuery.isEmptyObject(events)) {
        delete elemData.handle;
        jQuery._removeData(elem, 'events');
      }
    },
    trigger: function (event, data, elem, onlyHandlers) {
      var handle, ontype, cur, bubbleType, special, tmp, i, eventPath = [elem || document], type = core_hasOwn.call(event, 'type') ? event.type : event, namespaces = core_hasOwn.call(event, 'namespace') ? event.namespace.split('.') : [];
      cur = tmp = elem = elem || document;
      if (elem.nodeType === 3 || elem.nodeType === 8) {
        return;
      }
      if (rfocusMorph.test(type + jQuery.event.triggered)) {
        return;
      }
      if (type.indexOf('.') >= 0) {
        namespaces = type.split('.');
        type = namespaces.shift();
        namespaces.sort();
      }
      ontype = type.indexOf(':') < 0 && 'on' + type;
      event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === 'object' && event);
      event.isTrigger = true;
      event.namespace = namespaces.join('.');
      event.namespace_re = event.namespace ? new RegExp('(^|\\.)' + namespaces.join('\\.(?:.*\\.|)') + '(\\.|$)') : null;
      event.result = undefined;
      if (!event.target) {
        event.target = elem;
      }
      data = data == null ? [event] : jQuery.makeArray(data, [event]);
      special = jQuery.event.special[type] || {};
      if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
        return;
      }
      if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {
        bubbleType = special.delegateType || type;
        if (!rfocusMorph.test(bubbleType + type)) {
          cur = cur.parentNode;
        }
        for (; cur; cur = cur.parentNode) {
          eventPath.push(cur);
          tmp = cur;
        }
        if (tmp === (elem.ownerDocument || document)) {
          eventPath.push(tmp.defaultView || tmp.parentWindow || window);
        }
      }
      i = 0;
      while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {
        event.type = i > 1 ? bubbleType : special.bindType || type;
        handle = (jQuery._data(cur, 'events') || {})[event.type] && jQuery._data(cur, 'handle');
        if (handle) {
          handle.apply(cur, data);
        }
        handle = ontype && cur[ontype];
        if (handle && jQuery.acceptData(cur) && handle.apply && handle.apply(cur, data) === false) {
          event.preventDefault();
        }
      }
      event.type = type;
      if (!onlyHandlers && !event.isDefaultPrevented()) {
        if ((!special._default || special._default.apply(elem.ownerDocument, data) === false) && !(type === 'click' && jQuery.nodeName(elem, 'a')) && jQuery.acceptData(elem)) {
          if (ontype && elem[type] && !jQuery.isWindow(elem)) {
            tmp = elem[ontype];
            if (tmp) {
              elem[ontype] = null;
            }
            jQuery.event.triggered = type;
            try {
              elem[type]();
            } catch (e) {
            }
            jQuery.event.triggered = undefined;
            if (tmp) {
              elem[ontype] = tmp;
            }
          }
        }
      }
      return event.result;
    },
    dispatch: function (event) {
      event = jQuery.event.fix(event);
      var i, ret, handleObj, matched, j, handlerQueue = [], args = core_slice.call(arguments), handlers = (jQuery._data(this, 'events') || {})[event.type] || [], special = jQuery.event.special[event.type] || {};
      args[0] = event;
      event.delegateTarget = this;
      if (special.preDispatch && special.preDispatch.call(this, event) === false) {
        return;
      }
      handlerQueue = jQuery.event.handlers.call(this, event, handlers);
      i = 0;
      while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
        event.currentTarget = matched.elem;
        j = 0;
        while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {
          if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {
            event.handleObj = handleObj;
            event.data = handleObj.data;
            ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
            if (ret !== undefined) {
              if ((event.result = ret) === false) {
                event.preventDefault();
                event.stopPropagation();
              }
            }
          }
        }
      }
      if (special.postDispatch) {
        special.postDispatch.call(this, event);
      }
      return event.result;
    },
    handlers: function (event, handlers) {
      var sel, handleObj, matches, i, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
      if (delegateCount && cur.nodeType && (!event.button || event.type !== 'click')) {
        for (; cur != this; cur = cur.parentNode || this) {
          if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== 'click')) {
            matches = [];
            for (i = 0; i < delegateCount; i++) {
              handleObj = handlers[i];
              sel = handleObj.selector + ' ';
              if (matches[sel] === undefined) {
                matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
              }
              if (matches[sel]) {
                matches.push(handleObj);
              }
            }
            if (matches.length) {
              handlerQueue.push({
                elem: cur,
                handlers: matches
              });
            }
          }
        }
      }
      if (delegateCount < handlers.length) {
        handlerQueue.push({
          elem: this,
          handlers: handlers.slice(delegateCount)
        });
      }
      return handlerQueue;
    },
    fix: function (event) {
      if (event[jQuery.expando]) {
        return event;
      }
      var i, prop, copy, type = event.type, originalEvent = event, fixHook = this.fixHooks[type];
      if (!fixHook) {
        this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
      }
      copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;
      event = new jQuery.Event(originalEvent);
      i = copy.length;
      while (i--) {
        prop = copy[i];
        event[prop] = originalEvent[prop];
      }
      if (!event.target) {
        event.target = originalEvent.srcElement || document;
      }
      if (event.target.nodeType === 3) {
        event.target = event.target.parentNode;
      }
      event.metaKey = !!event.metaKey;
      return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    },
    props: 'altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(' '),
    fixHooks: {},
    keyHooks: {
      props: 'char charCode key keyCode'.split(' '),
      filter: function (event, original) {
        if (event.which == null) {
          event.which = original.charCode != null ? original.charCode : original.keyCode;
        }
        return event;
      }
    },
    mouseHooks: {
      props: 'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(' '),
      filter: function (event, original) {
        var body, eventDoc, doc, button = original.button, fromElement = original.fromElement;
        if (event.pageX == null && original.clientX != null) {
          eventDoc = event.target.ownerDocument || document;
          doc = eventDoc.documentElement;
          body = eventDoc.body;
          event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
          event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
        }
        if (!event.relatedTarget && fromElement) {
          event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
        }
        if (!event.which && button !== undefined) {
          event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
        }
        return event;
      }
    },
    special: {
      load: { noBubble: true },
      click: {
        trigger: function () {
          if (jQuery.nodeName(this, 'input') && this.type === 'checkbox' && this.click) {
            this.click();
            return false;
          }
        }
      },
      focus: {
        trigger: function () {
          if (this !== document.activeElement && this.focus) {
            try {
              this.focus();
              return false;
            } catch (e) {
            }
          }
        },
        delegateType: 'focusin'
      },
      blur: {
        trigger: function () {
          if (this === document.activeElement && this.blur) {
            this.blur();
            return false;
          }
        },
        delegateType: 'focusout'
      },
      beforeunload: {
        postDispatch: function (event) {
          if (event.result !== undefined) {
            event.originalEvent.returnValue = event.result;
          }
        }
      }
    },
    simulate: function (type, elem, event, bubble) {
      var e = jQuery.extend(new jQuery.Event(), event, {
          type: type,
          isSimulated: true,
          originalEvent: {}
        });
      if (bubble) {
        jQuery.event.trigger(e, null, elem);
      } else {
        jQuery.event.dispatch.call(elem, e);
      }
      if (e.isDefaultPrevented()) {
        event.preventDefault();
      }
    }
  };
  jQuery.removeEvent = document.removeEventListener ? function (elem, type, handle) {
    if (elem.removeEventListener) {
      elem.removeEventListener(type, handle, false);
    }
  } : function (elem, type, handle) {
    var name = 'on' + type;
    if (elem.detachEvent) {
      if (typeof elem[name] === core_strundefined) {
        elem[name] = null;
      }
      elem.detachEvent(name, handle);
    }
  };
  jQuery.Event = function (src, props) {
    if (!(this instanceof jQuery.Event)) {
      return new jQuery.Event(src, props);
    }
    if (src && src.type) {
      this.originalEvent = src;
      this.type = src.type;
      this.isDefaultPrevented = src.defaultPrevented || src.returnValue === false || src.getPreventDefault && src.getPreventDefault() ? returnTrue : returnFalse;
    } else {
      this.type = src;
    }
    if (props) {
      jQuery.extend(this, props);
    }
    this.timeStamp = src && src.timeStamp || jQuery.now();
    this[jQuery.expando] = true;
  };
  jQuery.Event.prototype = {
    isDefaultPrevented: returnFalse,
    isPropagationStopped: returnFalse,
    isImmediatePropagationStopped: returnFalse,
    preventDefault: function () {
      var e = this.originalEvent;
      this.isDefaultPrevented = returnTrue;
      if (!e) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    },
    stopPropagation: function () {
      var e = this.originalEvent;
      this.isPropagationStopped = returnTrue;
      if (!e) {
        return;
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      e.cancelBubble = true;
    },
    stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = returnTrue;
      this.stopPropagation();
    }
  };
  jQuery.each({
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  }, function (orig, fix) {
    jQuery.event.special[orig] = {
      delegateType: fix,
      bindType: fix,
      handle: function (event) {
        var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
        if (!related || related !== target && !jQuery.contains(target, related)) {
          event.type = handleObj.origType;
          ret = handleObj.handler.apply(this, arguments);
          event.type = fix;
        }
        return ret;
      }
    };
  });
  if (!jQuery.support.submitBubbles) {
    jQuery.event.special.submit = {
      setup: function () {
        if (jQuery.nodeName(this, 'form')) {
          return false;
        }
        jQuery.event.add(this, 'click._submit keypress._submit', function (e) {
          var elem = e.target, form = jQuery.nodeName(elem, 'input') || jQuery.nodeName(elem, 'button') ? elem.form : undefined;
          if (form && !jQuery._data(form, 'submitBubbles')) {
            jQuery.event.add(form, 'submit._submit', function (event) {
              event._submit_bubble = true;
            });
            jQuery._data(form, 'submitBubbles', true);
          }
        });
      },
      postDispatch: function (event) {
        if (event._submit_bubble) {
          delete event._submit_bubble;
          if (this.parentNode && !event.isTrigger) {
            jQuery.event.simulate('submit', this.parentNode, event, true);
          }
        }
      },
      teardown: function () {
        if (jQuery.nodeName(this, 'form')) {
          return false;
        }
        jQuery.event.remove(this, '._submit');
      }
    };
  }
  if (!jQuery.support.changeBubbles) {
    jQuery.event.special.change = {
      setup: function () {
        if (rformElems.test(this.nodeName)) {
          if (this.type === 'checkbox' || this.type === 'radio') {
            jQuery.event.add(this, 'propertychange._change', function (event) {
              if (event.originalEvent.propertyName === 'checked') {
                this._just_changed = true;
              }
            });
            jQuery.event.add(this, 'click._change', function (event) {
              if (this._just_changed && !event.isTrigger) {
                this._just_changed = false;
              }
              jQuery.event.simulate('change', this, event, true);
            });
          }
          return false;
        }
        jQuery.event.add(this, 'beforeactivate._change', function (e) {
          var elem = e.target;
          if (rformElems.test(elem.nodeName) && !jQuery._data(elem, 'changeBubbles')) {
            jQuery.event.add(elem, 'change._change', function (event) {
              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                jQuery.event.simulate('change', this.parentNode, event, true);
              }
            });
            jQuery._data(elem, 'changeBubbles', true);
          }
        });
      },
      handle: function (event) {
        var elem = event.target;
        if (this !== elem || event.isSimulated || event.isTrigger || elem.type !== 'radio' && elem.type !== 'checkbox') {
          return event.handleObj.handler.apply(this, arguments);
        }
      },
      teardown: function () {
        jQuery.event.remove(this, '._change');
        return !rformElems.test(this.nodeName);
      }
    };
  }
  if (!jQuery.support.focusinBubbles) {
    jQuery.each({
      focus: 'focusin',
      blur: 'focusout'
    }, function (orig, fix) {
      var attaches = 0, handler = function (event) {
          jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
        };
      jQuery.event.special[fix] = {
        setup: function () {
          if (attaches++ === 0) {
            document.addEventListener(orig, handler, true);
          }
        },
        teardown: function () {
          if (--attaches === 0) {
            document.removeEventListener(orig, handler, true);
          }
        }
      };
    });
  }
  jQuery.fn.extend({
    on: function (types, selector, data, fn, one) {
      var type, origFn;
      if (typeof types === 'object') {
        if (typeof selector !== 'string') {
          data = data || selector;
          selector = undefined;
        }
        for (type in types) {
          this.on(type, selector, data, types[type], one);
        }
        return this;
      }
      if (data == null && fn == null) {
        fn = selector;
        data = selector = undefined;
      } else if (fn == null) {
        if (typeof selector === 'string') {
          fn = data;
          data = undefined;
        } else {
          fn = data;
          data = selector;
          selector = undefined;
        }
      }
      if (fn === false) {
        fn = returnFalse;
      } else if (!fn) {
        return this;
      }
      if (one === 1) {
        origFn = fn;
        fn = function (event) {
          jQuery().off(event);
          return origFn.apply(this, arguments);
        };
        fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }
      return this.each(function () {
        jQuery.event.add(this, types, fn, data, selector);
      });
    },
    one: function (types, selector, data, fn) {
      return this.on(types, selector, data, fn, 1);
    },
    off: function (types, selector, fn) {
      var handleObj, type;
      if (types && types.preventDefault && types.handleObj) {
        handleObj = types.handleObj;
        jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + '.' + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
        return this;
      }
      if (typeof types === 'object') {
        for (type in types) {
          this.off(type, selector, types[type]);
        }
        return this;
      }
      if (selector === false || typeof selector === 'function') {
        fn = selector;
        selector = undefined;
      }
      if (fn === false) {
        fn = returnFalse;
      }
      return this.each(function () {
        jQuery.event.remove(this, types, fn, selector);
      });
    },
    bind: function (types, data, fn) {
      return this.on(types, null, data, fn);
    },
    unbind: function (types, fn) {
      return this.off(types, null, fn);
    },
    delegate: function (selector, types, data, fn) {
      return this.on(types, selector, data, fn);
    },
    undelegate: function (selector, types, fn) {
      return arguments.length === 1 ? this.off(selector, '**') : this.off(types, selector || '**', fn);
    },
    trigger: function (type, data) {
      return this.each(function () {
        jQuery.event.trigger(type, data, this);
      });
    },
    triggerHandler: function (type, data) {
      var elem = this[0];
      if (elem) {
        return jQuery.event.trigger(type, data, elem, true);
      }
    }
  });
  (function (window, undefined) {
    var i, cachedruns, Expr, getText, isXML, compile, hasDuplicate, outermostContext, setDocument, document, docElem, documentIsXML, rbuggyQSA, rbuggyMatches, matches, contains, sortOrder, expando = 'sizzle' + -new Date(), preferredDoc = window.document, support = {}, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), strundefined = typeof undefined, MAX_NEGATIVE = 1 << 31, arr = [], pop = arr.pop, push = arr.push, slice = arr.slice, indexOf = arr.indexOf || function (elem) {
        var i = 0, len = this.length;
        for (; i < len; i++) {
          if (this[i] === elem) {
            return i;
          }
        }
        return -1;
      }, whitespace = '[\\x20\\t\\r\\n\\f]', characterEncoding = '(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+', identifier = characterEncoding.replace('w', 'w#'), operators = '([*^$|!~]?=)', attributes = '\\[' + whitespace + '*(' + characterEncoding + ')' + whitespace + '*(?:' + operators + whitespace + '*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' + identifier + ')|)|)' + whitespace + '*\\]', pseudos = ':(' + characterEncoding + ')(?:\\((([\'"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|' + attributes.replace(3, 8) + ')*)|.*)\\)|)', rtrim = new RegExp('^' + whitespace + '+|((?:^|[^\\\\])(?:\\\\.)*)' + whitespace + '+$', 'g'), rcomma = new RegExp('^' + whitespace + '*,' + whitespace + '*'), rcombinators = new RegExp('^' + whitespace + '*([\\x20\\t\\r\\n\\f>+~])' + whitespace + '*'), rpseudo = new RegExp(pseudos), ridentifier = new RegExp('^' + identifier + '$'), matchExpr = {
        'ID': new RegExp('^#(' + characterEncoding + ')'),
        'CLASS': new RegExp('^\\.(' + characterEncoding + ')'),
        'NAME': new RegExp('^\\[name=[\'"]?(' + characterEncoding + ')[\'"]?\\]'),
        'TAG': new RegExp('^(' + characterEncoding.replace('w', 'w*') + ')'),
        'ATTR': new RegExp('^' + attributes),
        'PSEUDO': new RegExp('^' + pseudos),
        'CHILD': new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + whitespace + '*(even|odd|(([+-]|)(\\d*)n|)' + whitespace + '*(?:([+-]|)' + whitespace + '*(\\d+)|))' + whitespace + '*\\)|)', 'i'),
        'needsContext': new RegExp('^' + whitespace + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + whitespace + '*((?:-\\d)?\\d*)' + whitespace + '*\\)|)(?=[^-]|$)', 'i')
      }, rsibling = /[\x20\t\r\n\f]*[+~]/, rnative = /^[^{]+\{\s*\[native code/, rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rescape = /'|\\/g, rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, funescape = function (_, escaped) {
        var high = '0x' + escaped - 65536;
        return high !== high ? escaped : high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      };
    try {
      slice.call(preferredDoc.documentElement.childNodes, 0)[0].nodeType;
    } catch (e) {
      slice = function (i) {
        var elem, results = [];
        while (elem = this[i++]) {
          results.push(elem);
        }
        return results;
      };
    }
    function isNative(fn) {
      return rnative.test(fn + '');
    }
    function createCache() {
      var cache, keys = [];
      return cache = function (key, value) {
        if (keys.push(key += ' ') > Expr.cacheLength) {
          delete cache[keys.shift()];
        }
        return cache[key] = value;
      };
    }
    function markFunction(fn) {
      fn[expando] = true;
      return fn;
    }
    function assert(fn) {
      var div = document.createElement('div');
      try {
        return fn(div);
      } catch (e) {
        return false;
      } finally {
        div = null;
      }
    }
    function Sizzle(selector, context, results, seed) {
      var match, elem, m, nodeType, i, groups, old, nid, newContext, newSelector;
      if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
        setDocument(context);
      }
      context = context || document;
      results = results || [];
      if (!selector || typeof selector !== 'string') {
        return results;
      }
      if ((nodeType = context.nodeType) !== 1 && nodeType !== 9) {
        return [];
      }
      if (!documentIsXML && !seed) {
        if (match = rquickExpr.exec(selector)) {
          if (m = match[1]) {
            if (nodeType === 9) {
              elem = context.getElementById(m);
              if (elem && elem.parentNode) {
                if (elem.id === m) {
                  results.push(elem);
                  return results;
                }
              } else {
                return results;
              }
            } else {
              if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
                results.push(elem);
                return results;
              }
            }
          } else if (match[2]) {
            push.apply(results, slice.call(context.getElementsByTagName(selector), 0));
            return results;
          } else if ((m = match[3]) && support.getByClassName && context.getElementsByClassName) {
            push.apply(results, slice.call(context.getElementsByClassName(m), 0));
            return results;
          }
        }
        if (support.qsa && !rbuggyQSA.test(selector)) {
          old = true;
          nid = expando;
          newContext = context;
          newSelector = nodeType === 9 && selector;
          if (nodeType === 1 && context.nodeName.toLowerCase() !== 'object') {
            groups = tokenize(selector);
            if (old = context.getAttribute('id')) {
              nid = old.replace(rescape, '\\$&');
            } else {
              context.setAttribute('id', nid);
            }
            nid = '[id=\'' + nid + '\'] ';
            i = groups.length;
            while (i--) {
              groups[i] = nid + toSelector(groups[i]);
            }
            newContext = rsibling.test(selector) && context.parentNode || context;
            newSelector = groups.join(',');
          }
          if (newSelector) {
            try {
              push.apply(results, slice.call(newContext.querySelectorAll(newSelector), 0));
              return results;
            } catch (qsaError) {
            } finally {
              if (!old) {
                context.removeAttribute('id');
              }
            }
          }
        }
      }
      return select(selector.replace(rtrim, '$1'), context, results, seed);
    }
    isXML = Sizzle.isXML = function (elem) {
      var documentElement = elem && (elem.ownerDocument || elem).documentElement;
      return documentElement ? documentElement.nodeName !== 'HTML' : false;
    };
    setDocument = Sizzle.setDocument = function (node) {
      var doc = node ? node.ownerDocument || node : preferredDoc;
      if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
        return document;
      }
      document = doc;
      docElem = doc.documentElement;
      documentIsXML = isXML(doc);
      support.tagNameNoComments = assert(function (div) {
        div.appendChild(doc.createComment(''));
        return !div.getElementsByTagName('*').length;
      });
      support.attributes = assert(function (div) {
        div.innerHTML = '<select></select>';
        var type = typeof div.lastChild.getAttribute('multiple');
        return type !== 'boolean' && type !== 'string';
      });
      support.getByClassName = assert(function (div) {
        div.innerHTML = '<div class=\'hidden e\'></div><div class=\'hidden\'></div>';
        if (!div.getElementsByClassName || !div.getElementsByClassName('e').length) {
          return false;
        }
        div.lastChild.className = 'e';
        return div.getElementsByClassName('e').length === 2;
      });
      support.getByName = assert(function (div) {
        div.id = expando + 0;
        div.innerHTML = '<a name=\'' + expando + '\'></a><div name=\'' + expando + '\'></div>';
        docElem.insertBefore(div, docElem.firstChild);
        var pass = doc.getElementsByName && doc.getElementsByName(expando).length === 2 + doc.getElementsByName(expando + 0).length;
        support.getIdNotName = !doc.getElementById(expando);
        docElem.removeChild(div);
        return pass;
      });
      Expr.attrHandle = assert(function (div) {
        div.innerHTML = '<a href=\'#\'></a>';
        return div.firstChild && typeof div.firstChild.getAttribute !== strundefined && div.firstChild.getAttribute('href') === '#';
      }) ? {} : {
        'href': function (elem) {
          return elem.getAttribute('href', 2);
        },
        'type': function (elem) {
          return elem.getAttribute('type');
        }
      };
      if (support.getIdNotName) {
        Expr.find['ID'] = function (id, context) {
          if (typeof context.getElementById !== strundefined && !documentIsXML) {
            var m = context.getElementById(id);
            return m && m.parentNode ? [m] : [];
          }
        };
        Expr.filter['ID'] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            return elem.getAttribute('id') === attrId;
          };
        };
      } else {
        Expr.find['ID'] = function (id, context) {
          if (typeof context.getElementById !== strundefined && !documentIsXML) {
            var m = context.getElementById(id);
            return m ? m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode('id').value === id ? [m] : undefined : [];
          }
        };
        Expr.filter['ID'] = function (id) {
          var attrId = id.replace(runescape, funescape);
          return function (elem) {
            var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode('id');
            return node && node.value === attrId;
          };
        };
      }
      Expr.find['TAG'] = support.tagNameNoComments ? function (tag, context) {
        if (typeof context.getElementsByTagName !== strundefined) {
          return context.getElementsByTagName(tag);
        }
      } : function (tag, context) {
        var elem, tmp = [], i = 0, results = context.getElementsByTagName(tag);
        if (tag === '*') {
          while (elem = results[i++]) {
            if (elem.nodeType === 1) {
              tmp.push(elem);
            }
          }
          return tmp;
        }
        return results;
      };
      Expr.find['NAME'] = support.getByName && function (tag, context) {
        if (typeof context.getElementsByName !== strundefined) {
          return context.getElementsByName(name);
        }
      };
      Expr.find['CLASS'] = support.getByClassName && function (className, context) {
        if (typeof context.getElementsByClassName !== strundefined && !documentIsXML) {
          return context.getElementsByClassName(className);
        }
      };
      rbuggyMatches = [];
      rbuggyQSA = [':focus'];
      if (support.qsa = isNative(doc.querySelectorAll)) {
        assert(function (div) {
          div.innerHTML = '<select><option selected=\'\'></option></select>';
          if (!div.querySelectorAll('[selected]').length) {
            rbuggyQSA.push('\\[' + whitespace + '*(?:checked|disabled|ismap|multiple|readonly|selected|value)');
          }
          if (!div.querySelectorAll(':checked').length) {
            rbuggyQSA.push(':checked');
          }
        });
        assert(function (div) {
          div.innerHTML = '<input type=\'hidden\' i=\'\'/>';
          if (div.querySelectorAll('[i^=\'\']').length) {
            rbuggyQSA.push('[*^$]=' + whitespace + '*(?:""|\'\')');
          }
          if (!div.querySelectorAll(':enabled').length) {
            rbuggyQSA.push(':enabled', ':disabled');
          }
          div.querySelectorAll('*,:x');
          rbuggyQSA.push(',.*:');
        });
      }
      if (support.matchesSelector = isNative(matches = docElem.matchesSelector || docElem.mozMatchesSelector || docElem.webkitMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {
        assert(function (div) {
          support.disconnectedMatch = matches.call(div, 'div');
          matches.call(div, '[s!=\'\']:x');
          rbuggyMatches.push('!=', pseudos);
        });
      }
      rbuggyQSA = new RegExp(rbuggyQSA.join('|'));
      rbuggyMatches = new RegExp(rbuggyMatches.join('|'));
      contains = isNative(docElem.contains) || docElem.compareDocumentPosition ? function (a, b) {
        var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
        return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
      } : function (a, b) {
        if (b) {
          while (b = b.parentNode) {
            if (b === a) {
              return true;
            }
          }
        }
        return false;
      };
      sortOrder = docElem.compareDocumentPosition ? function (a, b) {
        var compare;
        if (a === b) {
          hasDuplicate = true;
          return 0;
        }
        if (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b)) {
          if (compare & 1 || a.parentNode && a.parentNode.nodeType === 11) {
            if (a === doc || contains(preferredDoc, a)) {
              return -1;
            }
            if (b === doc || contains(preferredDoc, b)) {
              return 1;
            }
            return 0;
          }
          return compare & 4 ? -1 : 1;
        }
        return a.compareDocumentPosition ? -1 : 1;
      } : function (a, b) {
        var cur, i = 0, aup = a.parentNode, bup = b.parentNode, ap = [a], bp = [b];
        if (a === b) {
          hasDuplicate = true;
          return 0;
        } else if (!aup || !bup) {
          return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : 0;
        } else if (aup === bup) {
          return siblingCheck(a, b);
        }
        cur = a;
        while (cur = cur.parentNode) {
          ap.unshift(cur);
        }
        cur = b;
        while (cur = cur.parentNode) {
          bp.unshift(cur);
        }
        while (ap[i] === bp[i]) {
          i++;
        }
        return i ? siblingCheck(ap[i], bp[i]) : ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
      };
      hasDuplicate = false;
      [
        0,
        0
      ].sort(sortOrder);
      support.detectDuplicates = hasDuplicate;
      return document;
    };
    Sizzle.matches = function (expr, elements) {
      return Sizzle(expr, null, null, elements);
    };
    Sizzle.matchesSelector = function (elem, expr) {
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      expr = expr.replace(rattributeQuotes, '=\'$1\']');
      if (support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr)) {
        try {
          var ret = matches.call(elem, expr);
          if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
            return ret;
          }
        } catch (e) {
        }
      }
      return Sizzle(expr, document, null, [elem]).length > 0;
    };
    Sizzle.contains = function (context, elem) {
      if ((context.ownerDocument || context) !== document) {
        setDocument(context);
      }
      return contains(context, elem);
    };
    Sizzle.attr = function (elem, name) {
      var val;
      if ((elem.ownerDocument || elem) !== document) {
        setDocument(elem);
      }
      if (!documentIsXML) {
        name = name.toLowerCase();
      }
      if (val = Expr.attrHandle[name]) {
        return val(elem);
      }
      if (documentIsXML || support.attributes) {
        return elem.getAttribute(name);
      }
      return ((val = elem.getAttributeNode(name)) || elem.getAttribute(name)) && elem[name] === true ? name : val && val.specified ? val.value : null;
    };
    Sizzle.error = function (msg) {
      throw new Error('Syntax error, unrecognized expression: ' + msg);
    };
    Sizzle.uniqueSort = function (results) {
      var elem, duplicates = [], i = 1, j = 0;
      hasDuplicate = !support.detectDuplicates;
      results.sort(sortOrder);
      if (hasDuplicate) {
        for (; elem = results[i]; i++) {
          if (elem === results[i - 1]) {
            j = duplicates.push(i);
          }
        }
        while (j--) {
          results.splice(duplicates[j], 1);
        }
      }
      return results;
    };
    function siblingCheck(a, b) {
      var cur = b && a, diff = cur && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);
      if (diff) {
        return diff;
      }
      if (cur) {
        while (cur = cur.nextSibling) {
          if (cur === b) {
            return -1;
          }
        }
      }
      return a ? 1 : -1;
    }
    function createInputPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return name === 'input' && elem.type === type;
      };
    }
    function createButtonPseudo(type) {
      return function (elem) {
        var name = elem.nodeName.toLowerCase();
        return (name === 'input' || name === 'button') && elem.type === type;
      };
    }
    function createPositionalPseudo(fn) {
      return markFunction(function (argument) {
        argument = +argument;
        return markFunction(function (seed, matches) {
          var j, matchIndexes = fn([], seed.length, argument), i = matchIndexes.length;
          while (i--) {
            if (seed[j = matchIndexes[i]]) {
              seed[j] = !(matches[j] = seed[j]);
            }
          }
        });
      });
    }
    getText = Sizzle.getText = function (elem) {
      var node, ret = '', i = 0, nodeType = elem.nodeType;
      if (!nodeType) {
        for (; node = elem[i]; i++) {
          ret += getText(node);
        }
      } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
        if (typeof elem.textContent === 'string') {
          return elem.textContent;
        } else {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            ret += getText(elem);
          }
        }
      } else if (nodeType === 3 || nodeType === 4) {
        return elem.nodeValue;
      }
      return ret;
    };
    Expr = Sizzle.selectors = {
      cacheLength: 50,
      createPseudo: markFunction,
      match: matchExpr,
      find: {},
      relative: {
        '>': {
          dir: 'parentNode',
          first: true
        },
        ' ': { dir: 'parentNode' },
        '+': {
          dir: 'previousSibling',
          first: true
        },
        '~': { dir: 'previousSibling' }
      },
      preFilter: {
        'ATTR': function (match) {
          match[1] = match[1].replace(runescape, funescape);
          match[3] = (match[4] || match[5] || '').replace(runescape, funescape);
          if (match[2] === '~=') {
            match[3] = ' ' + match[3] + ' ';
          }
          return match.slice(0, 4);
        },
        'CHILD': function (match) {
          match[1] = match[1].toLowerCase();
          if (match[1].slice(0, 3) === 'nth') {
            if (!match[3]) {
              Sizzle.error(match[0]);
            }
            match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === 'even' || match[3] === 'odd'));
            match[5] = +(match[7] + match[8] || match[3] === 'odd');
          } else if (match[3]) {
            Sizzle.error(match[0]);
          }
          return match;
        },
        'PSEUDO': function (match) {
          var excess, unquoted = !match[5] && match[2];
          if (matchExpr['CHILD'].test(match[0])) {
            return null;
          }
          if (match[4]) {
            match[2] = match[4];
          } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(')', unquoted.length - excess) - unquoted.length)) {
            match[0] = match[0].slice(0, excess);
            match[2] = unquoted.slice(0, excess);
          }
          return match.slice(0, 3);
        }
      },
      filter: {
        'TAG': function (nodeName) {
          if (nodeName === '*') {
            return function () {
              return true;
            };
          }
          nodeName = nodeName.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
          };
        },
        'CLASS': function (className) {
          var pattern = classCache[className + ' '];
          return pattern || (pattern = new RegExp('(^|' + whitespace + ')' + className + '(' + whitespace + '|$)')) && classCache(className, function (elem) {
            return pattern.test(elem.className || typeof elem.getAttribute !== strundefined && elem.getAttribute('class') || '');
          });
        },
        'ATTR': function (name, operator, check) {
          return function (elem) {
            var result = Sizzle.attr(elem, name);
            if (result == null) {
              return operator === '!=';
            }
            if (!operator) {
              return true;
            }
            result += '';
            return operator === '=' ? result === check : operator === '!=' ? result !== check : operator === '^=' ? check && result.indexOf(check) === 0 : operator === '*=' ? check && result.indexOf(check) > -1 : operator === '$=' ? check && result.slice(-check.length) === check : operator === '~=' ? (' ' + result + ' ').indexOf(check) > -1 : operator === '|=' ? result === check || result.slice(0, check.length + 1) === check + '-' : false;
          };
        },
        'CHILD': function (type, what, argument, first, last) {
          var simple = type.slice(0, 3) !== 'nth', forward = type.slice(-4) !== 'last', ofType = what === 'of-type';
          return first === 1 && last === 0 ? function (elem) {
            return !!elem.parentNode;
          } : function (elem, context, xml) {
            var cache, outerCache, node, diff, nodeIndex, start, dir = simple !== forward ? 'nextSibling' : 'previousSibling', parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml && !ofType;
            if (parent) {
              if (simple) {
                while (dir) {
                  node = elem;
                  while (node = node[dir]) {
                    if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
                      return false;
                    }
                  }
                  start = dir = type === 'only' && !start && 'nextSibling';
                }
                return true;
              }
              start = [forward ? parent.firstChild : parent.lastChild];
              if (forward && useCache) {
                outerCache = parent[expando] || (parent[expando] = {});
                cache = outerCache[type] || [];
                nodeIndex = cache[0] === dirruns && cache[1];
                diff = cache[0] === dirruns && cache[2];
                node = nodeIndex && parent.childNodes[nodeIndex];
                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                  if (node.nodeType === 1 && ++diff && node === elem) {
                    outerCache[type] = [
                      dirruns,
                      nodeIndex,
                      diff
                    ];
                    break;
                  }
                }
              } else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
                diff = cache[1];
              } else {
                while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {
                  if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
                    if (useCache) {
                      (node[expando] || (node[expando] = {}))[type] = [
                        dirruns,
                        diff
                      ];
                    }
                    if (node === elem) {
                      break;
                    }
                  }
                }
              }
              diff -= last;
              return diff === first || diff % first === 0 && diff / first >= 0;
            }
          };
        },
        'PSEUDO': function (pseudo, argument) {
          var args, fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error('unsupported pseudo: ' + pseudo);
          if (fn[expando]) {
            return fn(argument);
          }
          if (fn.length > 1) {
            args = [
              pseudo,
              pseudo,
              '',
              argument
            ];
            return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
              var idx, matched = fn(seed, argument), i = matched.length;
              while (i--) {
                idx = indexOf.call(seed, matched[i]);
                seed[idx] = !(matches[idx] = matched[i]);
              }
            }) : function (elem) {
              return fn(elem, 0, args);
            };
          }
          return fn;
        }
      },
      pseudos: {
        'not': markFunction(function (selector) {
          var input = [], results = [], matcher = compile(selector.replace(rtrim, '$1'));
          return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
            var elem, unmatched = matcher(seed, null, xml, []), i = seed.length;
            while (i--) {
              if (elem = unmatched[i]) {
                seed[i] = !(matches[i] = elem);
              }
            }
          }) : function (elem, context, xml) {
            input[0] = elem;
            matcher(input, null, xml, results);
            return !results.pop();
          };
        }),
        'has': markFunction(function (selector) {
          return function (elem) {
            return Sizzle(selector, elem).length > 0;
          };
        }),
        'contains': markFunction(function (text) {
          return function (elem) {
            return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
          };
        }),
        'lang': markFunction(function (lang) {
          if (!ridentifier.test(lang || '')) {
            Sizzle.error('unsupported lang: ' + lang);
          }
          lang = lang.replace(runescape, funescape).toLowerCase();
          return function (elem) {
            var elemLang;
            do {
              if (elemLang = documentIsXML ? elem.getAttribute('xml:lang') || elem.getAttribute('lang') : elem.lang) {
                elemLang = elemLang.toLowerCase();
                return elemLang === lang || elemLang.indexOf(lang + '-') === 0;
              }
            } while ((elem = elem.parentNode) && elem.nodeType === 1);
            return false;
          };
        }),
        'target': function (elem) {
          var hash = window.location && window.location.hash;
          return hash && hash.slice(1) === elem.id;
        },
        'root': function (elem) {
          return elem === docElem;
        },
        'focus': function (elem) {
          return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
        },
        'enabled': function (elem) {
          return elem.disabled === false;
        },
        'disabled': function (elem) {
          return elem.disabled === true;
        },
        'checked': function (elem) {
          var nodeName = elem.nodeName.toLowerCase();
          return nodeName === 'input' && !!elem.checked || nodeName === 'option' && !!elem.selected;
        },
        'selected': function (elem) {
          if (elem.parentNode) {
            elem.parentNode.selectedIndex;
          }
          return elem.selected === true;
        },
        'empty': function (elem) {
          for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
            if (elem.nodeName > '@' || elem.nodeType === 3 || elem.nodeType === 4) {
              return false;
            }
          }
          return true;
        },
        'parent': function (elem) {
          return !Expr.pseudos['empty'](elem);
        },
        'header': function (elem) {
          return rheader.test(elem.nodeName);
        },
        'input': function (elem) {
          return rinputs.test(elem.nodeName);
        },
        'button': function (elem) {
          var name = elem.nodeName.toLowerCase();
          return name === 'input' && elem.type === 'button' || name === 'button';
        },
        'text': function (elem) {
          var attr;
          return elem.nodeName.toLowerCase() === 'input' && elem.type === 'text' && ((attr = elem.getAttribute('type')) == null || attr.toLowerCase() === elem.type);
        },
        'first': createPositionalPseudo(function () {
          return [0];
        }),
        'last': createPositionalPseudo(function (matchIndexes, length) {
          return [length - 1];
        }),
        'eq': createPositionalPseudo(function (matchIndexes, length, argument) {
          return [argument < 0 ? argument + length : argument];
        }),
        'even': createPositionalPseudo(function (matchIndexes, length) {
          var i = 0;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        'odd': createPositionalPseudo(function (matchIndexes, length) {
          var i = 1;
          for (; i < length; i += 2) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        'lt': createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; --i >= 0;) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        }),
        'gt': createPositionalPseudo(function (matchIndexes, length, argument) {
          var i = argument < 0 ? argument + length : argument;
          for (; ++i < length;) {
            matchIndexes.push(i);
          }
          return matchIndexes;
        })
      }
    };
    for (i in {
        radio: true,
        checkbox: true,
        file: true,
        password: true,
        image: true
      }) {
      Expr.pseudos[i] = createInputPseudo(i);
    }
    for (i in {
        submit: true,
        reset: true
      }) {
      Expr.pseudos[i] = createButtonPseudo(i);
    }
    function tokenize(selector, parseOnly) {
      var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + ' '];
      if (cached) {
        return parseOnly ? 0 : cached.slice(0);
      }
      soFar = selector;
      groups = [];
      preFilters = Expr.preFilter;
      while (soFar) {
        if (!matched || (match = rcomma.exec(soFar))) {
          if (match) {
            soFar = soFar.slice(match[0].length) || soFar;
          }
          groups.push(tokens = []);
        }
        matched = false;
        if (match = rcombinators.exec(soFar)) {
          matched = match.shift();
          tokens.push({
            value: matched,
            type: match[0].replace(rtrim, ' ')
          });
          soFar = soFar.slice(matched.length);
        }
        for (type in Expr.filter) {
          if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: type,
              matches: match
            });
            soFar = soFar.slice(matched.length);
          }
        }
        if (!matched) {
          break;
        }
      }
      return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) : tokenCache(selector, groups).slice(0);
    }
    function toSelector(tokens) {
      var i = 0, len = tokens.length, selector = '';
      for (; i < len; i++) {
        selector += tokens[i].value;
      }
      return selector;
    }
    function addCombinator(matcher, combinator, base) {
      var dir = combinator.dir, checkNonElements = base && dir === 'parentNode', doneName = done++;
      return combinator.first ? function (elem, context, xml) {
        while (elem = elem[dir]) {
          if (elem.nodeType === 1 || checkNonElements) {
            return matcher(elem, context, xml);
          }
        }
      } : function (elem, context, xml) {
        var data, cache, outerCache, dirkey = dirruns + ' ' + doneName;
        if (xml) {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              if (matcher(elem, context, xml)) {
                return true;
              }
            }
          }
        } else {
          while (elem = elem[dir]) {
            if (elem.nodeType === 1 || checkNonElements) {
              outerCache = elem[expando] || (elem[expando] = {});
              if ((cache = outerCache[dir]) && cache[0] === dirkey) {
                if ((data = cache[1]) === true || data === cachedruns) {
                  return data === true;
                }
              } else {
                cache = outerCache[dir] = [dirkey];
                cache[1] = matcher(elem, context, xml) || cachedruns;
                if (cache[1] === true) {
                  return true;
                }
              }
            }
          }
        }
      };
    }
    function elementMatcher(matchers) {
      return matchers.length > 1 ? function (elem, context, xml) {
        var i = matchers.length;
        while (i--) {
          if (!matchers[i](elem, context, xml)) {
            return false;
          }
        }
        return true;
      } : matchers[0];
    }
    function condense(unmatched, map, filter, context, xml) {
      var elem, newUnmatched = [], i = 0, len = unmatched.length, mapped = map != null;
      for (; i < len; i++) {
        if (elem = unmatched[i]) {
          if (!filter || filter(elem, context, xml)) {
            newUnmatched.push(elem);
            if (mapped) {
              map.push(i);
            }
          }
        }
      }
      return newUnmatched;
    }
    function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
      if (postFilter && !postFilter[expando]) {
        postFilter = setMatcher(postFilter);
      }
      if (postFinder && !postFinder[expando]) {
        postFinder = setMatcher(postFinder, postSelector);
      }
      return markFunction(function (seed, results, context, xml) {
        var temp, i, elem, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(selector || '*', context.nodeType ? [context] : context, []), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems, matcherOut = matcher ? postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results : matcherIn;
        if (matcher) {
          matcher(matcherIn, matcherOut, context, xml);
        }
        if (postFilter) {
          temp = condense(matcherOut, postMap);
          postFilter(temp, [], context, xml);
          i = temp.length;
          while (i--) {
            if (elem = temp[i]) {
              matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
            }
          }
        }
        if (seed) {
          if (postFinder || preFilter) {
            if (postFinder) {
              temp = [];
              i = matcherOut.length;
              while (i--) {
                if (elem = matcherOut[i]) {
                  temp.push(matcherIn[i] = elem);
                }
              }
              postFinder(null, matcherOut = [], temp, xml);
            }
            i = matcherOut.length;
            while (i--) {
              if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i]) > -1) {
                seed[temp] = !(results[temp] = elem);
              }
            }
          }
        } else {
          matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
          if (postFinder) {
            postFinder(null, results, matcherOut, xml);
          } else {
            push.apply(results, matcherOut);
          }
        }
      });
    }
    function matcherFromTokens(tokens) {
      var checkContext, matcher, j, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[' '], i = leadingRelative ? 1 : 0, matchContext = addCombinator(function (elem) {
          return elem === checkContext;
        }, implicitRelative, true), matchAnyContext = addCombinator(function (elem) {
          return indexOf.call(checkContext, elem) > -1;
        }, implicitRelative, true), matchers = [function (elem, context, xml) {
            return !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
          }];
      for (; i < len; i++) {
        if (matcher = Expr.relative[tokens[i].type]) {
          matchers = [addCombinator(elementMatcher(matchers), matcher)];
        } else {
          matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);
          if (matcher[expando]) {
            j = ++i;
            for (; j < len; j++) {
              if (Expr.relative[tokens[j].type]) {
                break;
              }
            }
            return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(tokens.slice(0, i - 1)).replace(rtrim, '$1'), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
          }
          matchers.push(matcher);
        }
      }
      return elementMatcher(matchers);
    }
    function matcherFromGroupMatchers(elementMatchers, setMatchers) {
      var matcherCachedRuns = 0, bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function (seed, context, xml, results, expandContext) {
          var elem, j, matcher, setMatched = [], matchedCount = 0, i = '0', unmatched = seed && [], outermost = expandContext != null, contextBackup = outermostContext, elems = seed || byElement && Expr.find['TAG']('*', expandContext && context.parentNode || context), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1;
          if (outermost) {
            outermostContext = context !== document && context;
            cachedruns = matcherCachedRuns;
          }
          for (; (elem = elems[i]) != null; i++) {
            if (byElement && elem) {
              j = 0;
              while (matcher = elementMatchers[j++]) {
                if (matcher(elem, context, xml)) {
                  results.push(elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
                cachedruns = ++matcherCachedRuns;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i;
          if (bySet && i !== matchedCount) {
            j = 0;
            while (matcher = setMatchers[j++]) {
              matcher(unmatched, setMatched, context, xml);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i--) {
                  if (!(unmatched[i] || setMatched[i])) {
                    setMatched[i] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              Sizzle.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
      return bySet ? markFunction(superMatcher) : superMatcher;
    }
    compile = Sizzle.compile = function (selector, group) {
      var i, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + ' '];
      if (!cached) {
        if (!group) {
          group = tokenize(selector);
        }
        i = group.length;
        while (i--) {
          cached = matcherFromTokens(group[i]);
          if (cached[expando]) {
            setMatchers.push(cached);
          } else {
            elementMatchers.push(cached);
          }
        }
        cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));
      }
      return cached;
    };
    function multipleContexts(selector, contexts, results) {
      var i = 0, len = contexts.length;
      for (; i < len; i++) {
        Sizzle(selector, contexts[i], results);
      }
      return results;
    }
    function select(selector, context, results, seed) {
      var i, tokens, token, type, find, match = tokenize(selector);
      if (!seed) {
        if (match.length === 1) {
          tokens = match[0] = match[0].slice(0);
          if (tokens.length > 2 && (token = tokens[0]).type === 'ID' && context.nodeType === 9 && !documentIsXML && Expr.relative[tokens[1].type]) {
            context = Expr.find['ID'](token.matches[0].replace(runescape, funescape), context)[0];
            if (!context) {
              return results;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i = matchExpr['needsContext'].test(selector) ? 0 : tokens.length;
          while (i--) {
            token = tokens[i];
            if (Expr.relative[type = token.type]) {
              break;
            }
            if (find = Expr.find[type]) {
              if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && context.parentNode || context)) {
                tokens.splice(i, 1);
                selector = seed.length && toSelector(tokens);
                if (!selector) {
                  push.apply(results, slice.call(seed, 0));
                  return results;
                }
                break;
              }
            }
          }
        }
      }
      compile(selector, match)(seed, context, documentIsXML, results, rsibling.test(selector));
      return results;
    }
    Expr.pseudos['nth'] = Expr.pseudos['eq'];
    function setFilters() {
    }
    Expr.filters = setFilters.prototype = Expr.pseudos;
    Expr.setFilters = new setFilters();
    setDocument();
    Sizzle.attr = jQuery.attr;
    jQuery.find = Sizzle;
    jQuery.expr = Sizzle.selectors;
    jQuery.expr[':'] = jQuery.expr.pseudos;
    jQuery.unique = Sizzle.uniqueSort;
    jQuery.text = Sizzle.getText;
    jQuery.isXMLDoc = Sizzle.isXML;
    jQuery.contains = Sizzle.contains;
  }(window));
  var runtil = /Until$/, rparentsprev = /^(?:parents|prev(?:Until|All))/, isSimple = /^.[^:#\[\.,]*$/, rneedsContext = jQuery.expr.match.needsContext, guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
  jQuery.fn.extend({
    find: function (selector) {
      var i, ret, self, len = this.length;
      if (typeof selector !== 'string') {
        self = this;
        return this.pushStack(jQuery(selector).filter(function () {
          for (i = 0; i < len; i++) {
            if (jQuery.contains(self[i], this)) {
              return true;
            }
          }
        }));
      }
      ret = [];
      for (i = 0; i < len; i++) {
        jQuery.find(selector, this[i], ret);
      }
      ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
      ret.selector = (this.selector ? this.selector + ' ' : '') + selector;
      return ret;
    },
    has: function (target) {
      var i, targets = jQuery(target, this), len = targets.length;
      return this.filter(function () {
        for (i = 0; i < len; i++) {
          if (jQuery.contains(this, targets[i])) {
            return true;
          }
        }
      });
    },
    not: function (selector) {
      return this.pushStack(winnow(this, selector, false));
    },
    filter: function (selector) {
      return this.pushStack(winnow(this, selector, true));
    },
    is: function (selector) {
      return !!selector && (typeof selector === 'string' ? rneedsContext.test(selector) ? jQuery(selector, this.context).index(this[0]) >= 0 : jQuery.filter(selector, this).length > 0 : this.filter(selector).length > 0);
    },
    closest: function (selectors, context) {
      var cur, i = 0, l = this.length, ret = [], pos = rneedsContext.test(selectors) || typeof selectors !== 'string' ? jQuery(selectors, context || this.context) : 0;
      for (; i < l; i++) {
        cur = this[i];
        while (cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11) {
          if (pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors)) {
            ret.push(cur);
            break;
          }
          cur = cur.parentNode;
        }
      }
      return this.pushStack(ret.length > 1 ? jQuery.unique(ret) : ret);
    },
    index: function (elem) {
      if (!elem) {
        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      }
      if (typeof elem === 'string') {
        return jQuery.inArray(this[0], jQuery(elem));
      }
      return jQuery.inArray(elem.jquery ? elem[0] : elem, this);
    },
    add: function (selector, context) {
      var set = typeof selector === 'string' ? jQuery(selector, context) : jQuery.makeArray(selector && selector.nodeType ? [selector] : selector), all = jQuery.merge(this.get(), set);
      return this.pushStack(jQuery.unique(all));
    },
    addBack: function (selector) {
      return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
    }
  });
  jQuery.fn.andSelf = jQuery.fn.addBack;
  function sibling(cur, dir) {
    do {
      cur = cur[dir];
    } while (cur && cur.nodeType !== 1);
    return cur;
  }
  jQuery.each({
    parent: function (elem) {
      var parent = elem.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    parents: function (elem) {
      return jQuery.dir(elem, 'parentNode');
    },
    parentsUntil: function (elem, i, until) {
      return jQuery.dir(elem, 'parentNode', until);
    },
    next: function (elem) {
      return sibling(elem, 'nextSibling');
    },
    prev: function (elem) {
      return sibling(elem, 'previousSibling');
    },
    nextAll: function (elem) {
      return jQuery.dir(elem, 'nextSibling');
    },
    prevAll: function (elem) {
      return jQuery.dir(elem, 'previousSibling');
    },
    nextUntil: function (elem, i, until) {
      return jQuery.dir(elem, 'nextSibling', until);
    },
    prevUntil: function (elem, i, until) {
      return jQuery.dir(elem, 'previousSibling', until);
    },
    siblings: function (elem) {
      return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
    },
    children: function (elem) {
      return jQuery.sibling(elem.firstChild);
    },
    contents: function (elem) {
      return jQuery.nodeName(elem, 'iframe') ? elem.contentDocument || elem.contentWindow.document : jQuery.merge([], elem.childNodes);
    }
  }, function (name, fn) {
    jQuery.fn[name] = function (until, selector) {
      var ret = jQuery.map(this, fn, until);
      if (!runtil.test(name)) {
        selector = until;
      }
      if (selector && typeof selector === 'string') {
        ret = jQuery.filter(selector, ret);
      }
      ret = this.length > 1 && !guaranteedUnique[name] ? jQuery.unique(ret) : ret;
      if (this.length > 1 && rparentsprev.test(name)) {
        ret = ret.reverse();
      }
      return this.pushStack(ret);
    };
  });
  jQuery.extend({
    filter: function (expr, elems, not) {
      if (not) {
        expr = ':not(' + expr + ')';
      }
      return elems.length === 1 ? jQuery.find.matchesSelector(elems[0], expr) ? [elems[0]] : [] : jQuery.find.matches(expr, elems);
    },
    dir: function (elem, dir, until) {
      var matched = [], cur = elem[dir];
      while (cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery(cur).is(until))) {
        if (cur.nodeType === 1) {
          matched.push(cur);
        }
        cur = cur[dir];
      }
      return matched;
    },
    sibling: function (n, elem) {
      var r = [];
      for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== elem) {
          r.push(n);
        }
      }
      return r;
    }
  });
  function winnow(elements, qualifier, keep) {
    qualifier = qualifier || 0;
    if (jQuery.isFunction(qualifier)) {
      return jQuery.grep(elements, function (elem, i) {
        var retVal = !!qualifier.call(elem, i, elem);
        return retVal === keep;
      });
    } else if (qualifier.nodeType) {
      return jQuery.grep(elements, function (elem) {
        return elem === qualifier === keep;
      });
    } else if (typeof qualifier === 'string') {
      var filtered = jQuery.grep(elements, function (elem) {
          return elem.nodeType === 1;
        });
      if (isSimple.test(qualifier)) {
        return jQuery.filter(qualifier, filtered, !keep);
      } else {
        qualifier = jQuery.filter(qualifier, filtered);
      }
    }
    return jQuery.grep(elements, function (elem) {
      return jQuery.inArray(elem, qualifier) >= 0 === keep;
    });
  }
  function createSafeFragment(document) {
    var list = nodeNames.split('|'), safeFrag = document.createDocumentFragment();
    if (safeFrag.createElement) {
      while (list.length) {
        safeFrag.createElement(list.pop());
      }
    }
    return safeFrag;
  }
  var nodeNames = 'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|' + 'header|hgroup|mark|meter|nav|output|progress|section|summary|time|video', rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g, rnoshimcache = new RegExp('<(?:' + nodeNames + ')[\\s/>]', 'i'), rleadingWhitespace = /^\s+/, rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, rtagName = /<([\w:]+)/, rtbody = /<tbody/i, rhtml = /<|&#?\w+;/, rnoInnerhtml = /<(?:script|style|link)/i, manipulation_rcheckableType = /^(?:checkbox|radio)$/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rscriptType = /^$|\/(?:java|ecma)script/i, rscriptTypeMasked = /^true\/(.*)/, rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, wrapMap = {
      option: [
        1,
        '<select multiple=\'multiple\'>',
        '</select>'
      ],
      legend: [
        1,
        '<fieldset>',
        '</fieldset>'
      ],
      area: [
        1,
        '<map>',
        '</map>'
      ],
      param: [
        1,
        '<object>',
        '</object>'
      ],
      thead: [
        1,
        '<table>',
        '</table>'
      ],
      tr: [
        2,
        '<table><tbody>',
        '</tbody></table>'
      ],
      col: [
        2,
        '<table><tbody></tbody><colgroup>',
        '</colgroup></table>'
      ],
      td: [
        3,
        '<table><tbody><tr>',
        '</tr></tbody></table>'
      ],
      _default: jQuery.support.htmlSerialize ? [
        0,
        '',
        ''
      ] : [
        1,
        'X<div>',
        '</div>'
      ]
    }, safeFragment = createSafeFragment(document), fragmentDiv = safeFragment.appendChild(document.createElement('div'));
  wrapMap.optgroup = wrapMap.option;
  wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
  wrapMap.th = wrapMap.td;
  jQuery.fn.extend({
    text: function (value) {
      return jQuery.access(this, function (value) {
        return value === undefined ? jQuery.text(this) : this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(value));
      }, null, value, arguments.length);
    },
    wrapAll: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapAll(html.call(this, i));
        });
      }
      if (this[0]) {
        var wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          wrap.insertBefore(this[0]);
        }
        wrap.map(function () {
          var elem = this;
          while (elem.firstChild && elem.firstChild.nodeType === 1) {
            elem = elem.firstChild;
          }
          return elem;
        }).append(this);
      }
      return this;
    },
    wrapInner: function (html) {
      if (jQuery.isFunction(html)) {
        return this.each(function (i) {
          jQuery(this).wrapInner(html.call(this, i));
        });
      }
      return this.each(function () {
        var self = jQuery(this), contents = self.contents();
        if (contents.length) {
          contents.wrapAll(html);
        } else {
          self.append(html);
        }
      });
    },
    wrap: function (html) {
      var isFunction = jQuery.isFunction(html);
      return this.each(function (i) {
        jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
      });
    },
    unwrap: function () {
      return this.parent().each(function () {
        if (!jQuery.nodeName(this, 'body')) {
          jQuery(this).replaceWith(this.childNodes);
        }
      }).end();
    },
    append: function () {
      return this.domManip(arguments, true, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          this.appendChild(elem);
        }
      });
    },
    prepend: function () {
      return this.domManip(arguments, true, function (elem) {
        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
          this.insertBefore(elem, this.firstChild);
        }
      });
    },
    before: function () {
      return this.domManip(arguments, false, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this);
        }
      });
    },
    after: function () {
      return this.domManip(arguments, false, function (elem) {
        if (this.parentNode) {
          this.parentNode.insertBefore(elem, this.nextSibling);
        }
      });
    },
    remove: function (selector, keepData) {
      var elem, i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (!selector || jQuery.filter(selector, [elem]).length > 0) {
          if (!keepData && elem.nodeType === 1) {
            jQuery.cleanData(getAll(elem));
          }
          if (elem.parentNode) {
            if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
              setGlobalEval(getAll(elem, 'script'));
            }
            elem.parentNode.removeChild(elem);
          }
        }
      }
      return this;
    },
    empty: function () {
      var elem, i = 0;
      for (; (elem = this[i]) != null; i++) {
        if (elem.nodeType === 1) {
          jQuery.cleanData(getAll(elem, false));
        }
        while (elem.firstChild) {
          elem.removeChild(elem.firstChild);
        }
        if (elem.options && jQuery.nodeName(elem, 'select')) {
          elem.options.length = 0;
        }
      }
      return this;
    },
    clone: function (dataAndEvents, deepDataAndEvents) {
      dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
      deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
      return this.map(function () {
        return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
      });
    },
    html: function (value) {
      return jQuery.access(this, function (value) {
        var elem = this[0] || {}, i = 0, l = this.length;
        if (value === undefined) {
          return elem.nodeType === 1 ? elem.innerHTML.replace(rinlinejQuery, '') : undefined;
        }
        if (typeof value === 'string' && !rnoInnerhtml.test(value) && (jQuery.support.htmlSerialize || !rnoshimcache.test(value)) && (jQuery.support.leadingWhitespace || !rleadingWhitespace.test(value)) && !wrapMap[(rtagName.exec(value) || [
            '',
            ''
          ])[1].toLowerCase()]) {
          value = value.replace(rxhtmlTag, '<$1></$2>');
          try {
            for (; i < l; i++) {
              elem = this[i] || {};
              if (elem.nodeType === 1) {
                jQuery.cleanData(getAll(elem, false));
                elem.innerHTML = value;
              }
            }
            elem = 0;
          } catch (e) {
          }
        }
        if (elem) {
          this.empty().append(value);
        }
      }, null, value, arguments.length);
    },
    replaceWith: function (value) {
      var isFunc = jQuery.isFunction(value);
      if (!isFunc && typeof value !== 'string') {
        value = jQuery(value).not(this).detach();
      }
      return this.domManip([value], true, function (elem) {
        var next = this.nextSibling, parent = this.parentNode;
        if (parent) {
          jQuery(this).remove();
          parent.insertBefore(elem, next);
        }
      });
    },
    detach: function (selector) {
      return this.remove(selector, true);
    },
    domManip: function (args, table, callback) {
      args = core_concat.apply([], args);
      var first, node, hasScripts, scripts, doc, fragment, i = 0, l = this.length, set = this, iNoClone = l - 1, value = args[0], isFunction = jQuery.isFunction(value);
      if (isFunction || !(l <= 1 || typeof value !== 'string' || jQuery.support.checkClone || !rchecked.test(value))) {
        return this.each(function (index) {
          var self = set.eq(index);
          if (isFunction) {
            args[0] = value.call(this, index, table ? self.html() : undefined);
          }
          self.domManip(args, table, callback);
        });
      }
      if (l) {
        fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
        first = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first;
        }
        if (first) {
          table = table && jQuery.nodeName(first, 'tr');
          scripts = jQuery.map(getAll(fragment, 'script'), disableScript);
          hasScripts = scripts.length;
          for (; i < l; i++) {
            node = fragment;
            if (i !== iNoClone) {
              node = jQuery.clone(node, true, true);
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, 'script'));
              }
            }
            callback.call(table && jQuery.nodeName(this[i], 'table') ? findOrAppend(this[i], 'tbody') : this[i], node, i);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery.map(scripts, restoreScript);
            for (i = 0; i < hasScripts; i++) {
              node = scripts[i];
              if (rscriptType.test(node.type || '') && !jQuery._data(node, 'globalEval') && jQuery.contains(doc, node)) {
                if (node.src) {
                  jQuery.ajax({
                    url: node.src,
                    type: 'GET',
                    dataType: 'script',
                    async: false,
                    global: false,
                    'throws': true
                  });
                } else {
                  jQuery.globalEval((node.text || node.textContent || node.innerHTML || '').replace(rcleanScript, ''));
                }
              }
            }
          }
          fragment = first = null;
        }
      }
      return this;
    }
  });
  function findOrAppend(elem, tag) {
    return elem.getElementsByTagName(tag)[0] || elem.appendChild(elem.ownerDocument.createElement(tag));
  }
  function disableScript(elem) {
    var attr = elem.getAttributeNode('type');
    elem.type = (attr && attr.specified) + '/' + elem.type;
    return elem;
  }
  function restoreScript(elem) {
    var match = rscriptTypeMasked.exec(elem.type);
    if (match) {
      elem.type = match[1];
    } else {
      elem.removeAttribute('type');
    }
    return elem;
  }
  function setGlobalEval(elems, refElements) {
    var elem, i = 0;
    for (; (elem = elems[i]) != null; i++) {
      jQuery._data(elem, 'globalEval', !refElements || jQuery._data(refElements[i], 'globalEval'));
    }
  }
  function cloneCopyEvent(src, dest) {
    if (dest.nodeType !== 1 || !jQuery.hasData(src)) {
      return;
    }
    var type, i, l, oldData = jQuery._data(src), curData = jQuery._data(dest, oldData), events = oldData.events;
    if (events) {
      delete curData.handle;
      curData.events = {};
      for (type in events) {
        for (i = 0, l = events[type].length; i < l; i++) {
          jQuery.event.add(dest, type, events[type][i]);
        }
      }
    }
    if (curData.data) {
      curData.data = jQuery.extend({}, curData.data);
    }
  }
  function fixCloneNodeIssues(src, dest) {
    var nodeName, e, data;
    if (dest.nodeType !== 1) {
      return;
    }
    nodeName = dest.nodeName.toLowerCase();
    if (!jQuery.support.noCloneEvent && dest[jQuery.expando]) {
      data = jQuery._data(dest);
      for (e in data.events) {
        jQuery.removeEvent(dest, e, data.handle);
      }
      dest.removeAttribute(jQuery.expando);
    }
    if (nodeName === 'script' && dest.text !== src.text) {
      disableScript(dest).text = src.text;
      restoreScript(dest);
    } else if (nodeName === 'object') {
      if (dest.parentNode) {
        dest.outerHTML = src.outerHTML;
      }
      if (jQuery.support.html5Clone && (src.innerHTML && !jQuery.trim(dest.innerHTML))) {
        dest.innerHTML = src.innerHTML;
      }
    } else if (nodeName === 'input' && manipulation_rcheckableType.test(src.type)) {
      dest.defaultChecked = dest.checked = src.checked;
      if (dest.value !== src.value) {
        dest.value = src.value;
      }
    } else if (nodeName === 'option') {
      dest.defaultSelected = dest.selected = src.defaultSelected;
    } else if (nodeName === 'input' || nodeName === 'textarea') {
      dest.defaultValue = src.defaultValue;
    }
  }
  jQuery.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
  }, function (name, original) {
    jQuery.fn[name] = function (selector) {
      var elems, i = 0, ret = [], insert = jQuery(selector), last = insert.length - 1;
      for (; i <= last; i++) {
        elems = i === last ? this : this.clone(true);
        jQuery(insert[i])[original](elems);
        core_push.apply(ret, elems.get());
      }
      return this.pushStack(ret);
    };
  });
  function getAll(context, tag) {
    var elems, elem, i = 0, found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName(tag || '*') : typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll(tag || '*') : undefined;
    if (!found) {
      for (found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++) {
        if (!tag || jQuery.nodeName(elem, tag)) {
          found.push(elem);
        } else {
          jQuery.merge(found, getAll(elem, tag));
        }
      }
    }
    return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], found) : found;
  }
  function fixDefaultChecked(elem) {
    if (manipulation_rcheckableType.test(elem.type)) {
      elem.defaultChecked = elem.checked;
    }
  }
  jQuery.extend({
    clone: function (elem, dataAndEvents, deepDataAndEvents) {
      var destElements, node, clone, i, srcElements, inPage = jQuery.contains(elem.ownerDocument, elem);
      if (jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test('<' + elem.nodeName + '>')) {
        clone = elem.cloneNode(true);
      } else {
        fragmentDiv.innerHTML = elem.outerHTML;
        fragmentDiv.removeChild(clone = fragmentDiv.firstChild);
      }
      if ((!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
        destElements = getAll(clone);
        srcElements = getAll(elem);
        for (i = 0; (node = srcElements[i]) != null; ++i) {
          if (destElements[i]) {
            fixCloneNodeIssues(node, destElements[i]);
          }
        }
      }
      if (dataAndEvents) {
        if (deepDataAndEvents) {
          srcElements = srcElements || getAll(elem);
          destElements = destElements || getAll(clone);
          for (i = 0; (node = srcElements[i]) != null; i++) {
            cloneCopyEvent(node, destElements[i]);
          }
        } else {
          cloneCopyEvent(elem, clone);
        }
      }
      destElements = getAll(clone, 'script');
      if (destElements.length > 0) {
        setGlobalEval(destElements, !inPage && getAll(elem, 'script'));
      }
      destElements = srcElements = node = null;
      return clone;
    },
    buildFragment: function (elems, context, scripts, selection) {
      var j, elem, contains, tmp, tag, tbody, wrap, l = elems.length, safe = createSafeFragment(context), nodes = [], i = 0;
      for (; i < l; i++) {
        elem = elems[i];
        if (elem || elem === 0) {
          if (jQuery.type(elem) === 'object') {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || safe.appendChild(context.createElement('div'));
            tag = (rtagName.exec(elem) || [
              '',
              ''
            ])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, '<$1></$2>') + wrap[2];
            j = wrap[0];
            while (j--) {
              tmp = tmp.lastChild;
            }
            if (!jQuery.support.leadingWhitespace && rleadingWhitespace.test(elem)) {
              nodes.push(context.createTextNode(rleadingWhitespace.exec(elem)[0]));
            }
            if (!jQuery.support.tbody) {
              elem = tag === 'table' && !rtbody.test(elem) ? tmp.firstChild : wrap[1] === '<table>' && !rtbody.test(elem) ? tmp : 0;
              j = elem && elem.childNodes.length;
              while (j--) {
                if (jQuery.nodeName(tbody = elem.childNodes[j], 'tbody') && !tbody.childNodes.length) {
                  elem.removeChild(tbody);
                }
              }
            }
            jQuery.merge(nodes, tmp.childNodes);
            tmp.textContent = '';
            while (tmp.firstChild) {
              tmp.removeChild(tmp.firstChild);
            }
            tmp = safe.lastChild;
          }
        }
      }
      if (tmp) {
        safe.removeChild(tmp);
      }
      if (!jQuery.support.appendChecked) {
        jQuery.grep(getAll(nodes, 'input'), fixDefaultChecked);
      }
      i = 0;
      while (elem = nodes[i++]) {
        if (selection && jQuery.inArray(elem, selection) !== -1) {
          continue;
        }
        contains = jQuery.contains(elem.ownerDocument, elem);
        tmp = getAll(safe.appendChild(elem), 'script');
        if (contains) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j = 0;
          while (elem = tmp[j++]) {
            if (rscriptType.test(elem.type || '')) {
              scripts.push(elem);
            }
          }
        }
      }
      tmp = null;
      return safe;
    },
    cleanData: function (elems, acceptData) {
      var elem, type, id, data, i = 0, internalKey = jQuery.expando, cache = jQuery.cache, deleteExpando = jQuery.support.deleteExpando, special = jQuery.event.special;
      for (; (elem = elems[i]) != null; i++) {
        if (acceptData || jQuery.acceptData(elem)) {
          id = elem[internalKey];
          data = id && cache[id];
          if (data) {
            if (data.events) {
              for (type in data.events) {
                if (special[type]) {
                  jQuery.event.remove(elem, type);
                } else {
                  jQuery.removeEvent(elem, type, data.handle);
                }
              }
            }
            if (cache[id]) {
              delete cache[id];
              if (deleteExpando) {
                delete elem[internalKey];
              } else if (typeof elem.removeAttribute !== core_strundefined) {
                elem.removeAttribute(internalKey);
              } else {
                elem[internalKey] = null;
              }
              core_deletedIds.push(id);
            }
          }
        }
      }
    }
  });
  var iframe, getStyles, curCSS, ralpha = /alpha\([^)]*\)/i, ropacity = /opacity\s*=\s*([^)]*)/, rposition = /^(top|right|bottom|left)$/, rdisplayswap = /^(none|table(?!-c[ea]).+)/, rmargin = /^margin/, rnumsplit = new RegExp('^(' + core_pnum + ')(.*)$', 'i'), rnumnonpx = new RegExp('^(' + core_pnum + ')(?!px)[a-z%]+$', 'i'), rrelNum = new RegExp('^([+-])=(' + core_pnum + ')', 'i'), elemdisplay = { BODY: 'block' }, cssShow = {
      position: 'absolute',
      visibility: 'hidden',
      display: 'block'
    }, cssNormalTransform = {
      letterSpacing: 0,
      fontWeight: 400
    }, cssExpand = [
      'Top',
      'Right',
      'Bottom',
      'Left'
    ], cssPrefixes = [
      'Webkit',
      'O',
      'Moz',
      'ms'
    ];
  function vendorPropName(style, name) {
    if (name in style) {
      return name;
    }
    var capName = name.charAt(0).toUpperCase() + name.slice(1), origName = name, i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in style) {
        return name;
      }
    }
    return origName;
  }
  function isHidden(elem, el) {
    elem = el || elem;
    return jQuery.css(elem, 'display') === 'none' || !jQuery.contains(elem.ownerDocument, elem);
  }
  function showHide(elements, show) {
    var display, elem, hidden, values = [], index = 0, length = elements.length;
    for (; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      values[index] = jQuery._data(elem, 'olddisplay');
      display = elem.style.display;
      if (show) {
        if (!values[index] && display === 'none') {
          elem.style.display = '';
        }
        if (elem.style.display === '' && isHidden(elem)) {
          values[index] = jQuery._data(elem, 'olddisplay', css_defaultDisplay(elem.nodeName));
        }
      } else {
        if (!values[index]) {
          hidden = isHidden(elem);
          if (display && display !== 'none' || !hidden) {
            jQuery._data(elem, 'olddisplay', hidden ? display : jQuery.css(elem, 'display'));
          }
        }
      }
    }
    for (index = 0; index < length; index++) {
      elem = elements[index];
      if (!elem.style) {
        continue;
      }
      if (!show || elem.style.display === 'none' || elem.style.display === '') {
        elem.style.display = show ? values[index] || '' : 'none';
      }
    }
    return elements;
  }
  jQuery.fn.extend({
    css: function (name, value) {
      return jQuery.access(this, function (elem, name, value) {
        var len, styles, map = {}, i = 0;
        if (jQuery.isArray(name)) {
          styles = getStyles(elem);
          len = name.length;
          for (; i < len; i++) {
            map[name[i]] = jQuery.css(elem, name[i], false, styles);
          }
          return map;
        }
        return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
      }, name, value, arguments.length > 1);
    },
    show: function () {
      return showHide(this, true);
    },
    hide: function () {
      return showHide(this);
    },
    toggle: function (state) {
      var bool = typeof state === 'boolean';
      return this.each(function () {
        if (bool ? state : isHidden(this)) {
          jQuery(this).show();
        } else {
          jQuery(this).hide();
        }
      });
    }
  });
  jQuery.extend({
    cssHooks: {
      opacity: {
        get: function (elem, computed) {
          if (computed) {
            var ret = curCSS(elem, 'opacity');
            return ret === '' ? '1' : ret;
          }
        }
      }
    },
    cssNumber: {
      'columnCount': true,
      'fillOpacity': true,
      'fontWeight': true,
      'lineHeight': true,
      'opacity': true,
      'orphans': true,
      'widows': true,
      'zIndex': true,
      'zoom': true
    },
    cssProps: { 'float': jQuery.support.cssFloat ? 'cssFloat' : 'styleFloat' },
    style: function (elem, name, value, extra) {
      if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
        return;
      }
      var ret, type, hooks, origName = jQuery.camelCase(name), style = elem.style;
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (value !== undefined) {
        type = typeof value;
        if (type === 'string' && (ret = rrelNum.exec(value))) {
          value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
          type = 'number';
        }
        if (value == null || type === 'number' && isNaN(value)) {
          return;
        }
        if (type === 'number' && !jQuery.cssNumber[origName]) {
          value += 'px';
        }
        if (!jQuery.support.clearCloneStyle && value === '' && name.indexOf('background') === 0) {
          style[name] = 'inherit';
        }
        if (!hooks || !('set' in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
          try {
            style[name] = value;
          } catch (e) {
          }
        }
      } else {
        if (hooks && 'get' in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
          return ret;
        }
        return style[name];
      }
    },
    css: function (elem, name, extra, styles) {
      var num, val, hooks, origName = jQuery.camelCase(name);
      name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));
      hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
      if (hooks && 'get' in hooks) {
        val = hooks.get(elem, true, extra);
      }
      if (val === undefined) {
        val = curCSS(elem, name, styles);
      }
      if (val === 'normal' && name in cssNormalTransform) {
        val = cssNormalTransform[name];
      }
      if (extra === '' || extra) {
        num = parseFloat(val);
        return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
      }
      return val;
    },
    swap: function (elem, options, callback, args) {
      var ret, name, old = {};
      for (name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
      }
      ret = callback.apply(elem, args || []);
      for (name in options) {
        elem.style[name] = old[name];
      }
      return ret;
    }
  });
  if (window.getComputedStyle) {
    getStyles = function (elem) {
      return window.getComputedStyle(elem, null);
    };
    curCSS = function (elem, name, _computed) {
      var width, minWidth, maxWidth, computed = _computed || getStyles(elem), ret = computed ? computed.getPropertyValue(name) || computed[name] : undefined, style = elem.style;
      if (computed) {
        if (ret === '' && !jQuery.contains(elem.ownerDocument, elem)) {
          ret = jQuery.style(elem, name);
        }
        if (rnumnonpx.test(ret) && rmargin.test(name)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      return ret;
    };
  } else if (document.documentElement.currentStyle) {
    getStyles = function (elem) {
      return elem.currentStyle;
    };
    curCSS = function (elem, name, _computed) {
      var left, rs, rsLeft, computed = _computed || getStyles(elem), ret = computed ? computed[name] : undefined, style = elem.style;
      if (ret == null && style && style[name]) {
        ret = style[name];
      }
      if (rnumnonpx.test(ret) && !rposition.test(name)) {
        left = style.left;
        rs = elem.runtimeStyle;
        rsLeft = rs && rs.left;
        if (rsLeft) {
          rs.left = elem.currentStyle.left;
        }
        style.left = name === 'fontSize' ? '1em' : ret;
        ret = style.pixelLeft + 'px';
        style.left = left;
        if (rsLeft) {
          rs.left = rsLeft;
        }
      }
      return ret === '' ? 'auto' : ret;
    };
  }
  function setPositiveNumber(elem, value, subtract) {
    var matches = rnumsplit.exec(value);
    return matches ? Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || 'px') : value;
  }
  function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
    var i = extra === (isBorderBox ? 'border' : 'content') ? 4 : name === 'width' ? 1 : 0, val = 0;
    for (; i < 4; i += 2) {
      if (extra === 'margin') {
        val += jQuery.css(elem, extra + cssExpand[i], true, styles);
      }
      if (isBorderBox) {
        if (extra === 'content') {
          val -= jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
        }
        if (extra !== 'margin') {
          val -= jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
        }
      } else {
        val += jQuery.css(elem, 'padding' + cssExpand[i], true, styles);
        if (extra !== 'padding') {
          val += jQuery.css(elem, 'border' + cssExpand[i] + 'Width', true, styles);
        }
      }
    }
    return val;
  }
  function getWidthOrHeight(elem, name, extra) {
    var valueIsBorderBox = true, val = name === 'width' ? elem.offsetWidth : elem.offsetHeight, styles = getStyles(elem), isBorderBox = jQuery.support.boxSizing && jQuery.css(elem, 'boxSizing', false, styles) === 'border-box';
    if (val <= 0 || val == null) {
      val = curCSS(elem, name, styles);
      if (val < 0 || val == null) {
        val = elem.style[name];
      }
      if (rnumnonpx.test(val)) {
        return val;
      }
      valueIsBorderBox = isBorderBox && (jQuery.support.boxSizingReliable || val === elem.style[name]);
      val = parseFloat(val) || 0;
    }
    return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? 'border' : 'content'), valueIsBorderBox, styles) + 'px';
  }
  function css_defaultDisplay(nodeName) {
    var doc = document, display = elemdisplay[nodeName];
    if (!display) {
      display = actualDisplay(nodeName, doc);
      if (display === 'none' || !display) {
        iframe = (iframe || jQuery('<iframe frameborder=\'0\' width=\'0\' height=\'0\'/>').css('cssText', 'display:block !important')).appendTo(doc.documentElement);
        doc = (iframe[0].contentWindow || iframe[0].contentDocument).document;
        doc.write('<!doctype html><html><body>');
        doc.close();
        display = actualDisplay(nodeName, doc);
        iframe.detach();
      }
      elemdisplay[nodeName] = display;
    }
    return display;
  }
  function actualDisplay(name, doc) {
    var elem = jQuery(doc.createElement(name)).appendTo(doc.body), display = jQuery.css(elem[0], 'display');
    elem.remove();
    return display;
  }
  jQuery.each([
    'height',
    'width'
  ], function (i, name) {
    jQuery.cssHooks[name] = {
      get: function (elem, computed, extra) {
        if (computed) {
          return elem.offsetWidth === 0 && rdisplayswap.test(jQuery.css(elem, 'display')) ? jQuery.swap(elem, cssShow, function () {
            return getWidthOrHeight(elem, name, extra);
          }) : getWidthOrHeight(elem, name, extra);
        }
      },
      set: function (elem, value, extra) {
        var styles = extra && getStyles(elem);
        return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.support.boxSizing && jQuery.css(elem, 'boxSizing', false, styles) === 'border-box', styles) : 0);
      }
    };
  });
  if (!jQuery.support.opacity) {
    jQuery.cssHooks.opacity = {
      get: function (elem, computed) {
        return ropacity.test((computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || '') ? 0.01 * parseFloat(RegExp.$1) + '' : computed ? '1' : '';
      },
      set: function (elem, value) {
        var style = elem.style, currentStyle = elem.currentStyle, opacity = jQuery.isNumeric(value) ? 'alpha(opacity=' + value * 100 + ')' : '', filter = currentStyle && currentStyle.filter || style.filter || '';
        style.zoom = 1;
        if ((value >= 1 || value === '') && jQuery.trim(filter.replace(ralpha, '')) === '' && style.removeAttribute) {
          style.removeAttribute('filter');
          if (value === '' || currentStyle && !currentStyle.filter) {
            return;
          }
        }
        style.filter = ralpha.test(filter) ? filter.replace(ralpha, opacity) : filter + ' ' + opacity;
      }
    };
  }
  jQuery(function () {
    if (!jQuery.support.reliableMarginRight) {
      jQuery.cssHooks.marginRight = {
        get: function (elem, computed) {
          if (computed) {
            return jQuery.swap(elem, { 'display': 'inline-block' }, curCSS, [
              elem,
              'marginRight'
            ]);
          }
        }
      };
    }
    if (!jQuery.support.pixelPosition && jQuery.fn.position) {
      jQuery.each([
        'top',
        'left'
      ], function (i, prop) {
        jQuery.cssHooks[prop] = {
          get: function (elem, computed) {
            if (computed) {
              computed = curCSS(elem, prop);
              return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + 'px' : computed;
            }
          }
        };
      });
    }
  });
  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.hidden = function (elem) {
      return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 || !jQuery.support.reliableHiddenOffsets && (elem.style && elem.style.display || jQuery.css(elem, 'display')) === 'none';
    };
    jQuery.expr.filters.visible = function (elem) {
      return !jQuery.expr.filters.hidden(elem);
    };
  }
  jQuery.each({
    margin: '',
    padding: '',
    border: 'Width'
  }, function (prefix, suffix) {
    jQuery.cssHooks[prefix + suffix] = {
      expand: function (value) {
        var i = 0, expanded = {}, parts = typeof value === 'string' ? value.split(' ') : [value];
        for (; i < 4; i++) {
          expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
        }
        return expanded;
      }
    };
    if (!rmargin.test(prefix)) {
      jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
    }
  });
  var r20 = /%20/g, rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
  jQuery.fn.extend({
    serialize: function () {
      return jQuery.param(this.serializeArray());
    },
    serializeArray: function () {
      return this.map(function () {
        var elements = jQuery.prop(this, 'elements');
        return elements ? jQuery.makeArray(elements) : this;
      }).filter(function () {
        var type = this.type;
        return this.name && !jQuery(this).is(':disabled') && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !manipulation_rcheckableType.test(type));
      }).map(function (i, elem) {
        var val = jQuery(this).val();
        return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
          return {
            name: elem.name,
            value: val.replace(rCRLF, '\r\n')
          };
        }) : {
          name: elem.name,
          value: val.replace(rCRLF, '\r\n')
        };
      }).get();
    }
  });
  jQuery.param = function (a, traditional) {
    var prefix, s = [], add = function (key, value) {
        value = jQuery.isFunction(value) ? value() : value == null ? '' : value;
        s[s.length] = encodeURIComponent(key) + '=' + encodeURIComponent(value);
      };
    if (traditional === undefined) {
      traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
    }
    if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
      jQuery.each(a, function () {
        add(this.name, this.value);
      });
    } else {
      for (prefix in a) {
        buildParams(prefix, a[prefix], traditional, add);
      }
    }
    return s.join('&').replace(r20, '+');
  };
  function buildParams(prefix, obj, traditional, add) {
    var name;
    if (jQuery.isArray(obj)) {
      jQuery.each(obj, function (i, v) {
        if (traditional || rbracket.test(prefix)) {
          add(prefix, v);
        } else {
          buildParams(prefix + '[' + (typeof v === 'object' ? i : '') + ']', v, traditional, add);
        }
      });
    } else if (!traditional && jQuery.type(obj) === 'object') {
      for (name in obj) {
        buildParams(prefix + '[' + name + ']', obj[name], traditional, add);
      }
    } else {
      add(prefix, obj);
    }
  }
  jQuery.each(('blur focus focusin focusout load resize scroll unload click dblclick ' + 'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave ' + 'change select submit keydown keypress keyup error contextmenu').split(' '), function (i, name) {
    jQuery.fn[name] = function (data, fn) {
      return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
    };
  });
  jQuery.fn.hover = function (fnOver, fnOut) {
    return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
  };
  var ajaxLocParts, ajaxLocation, ajax_nonce = jQuery.now(), ajax_rquery = /\?/, rhash = /#.*$/, rts = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, _load = jQuery.fn.load, prefilters = {}, transports = {}, allTypes = '*/'.concat('*');
  try {
    ajaxLocation = location.href;
  } catch (e) {
    ajaxLocation = document.createElement('a');
    ajaxLocation.href = '';
    ajaxLocation = ajaxLocation.href;
  }
  ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];
  function addToPrefiltersOrTransports(structure) {
    return function (dataTypeExpression, func) {
      if (typeof dataTypeExpression !== 'string') {
        func = dataTypeExpression;
        dataTypeExpression = '*';
      }
      var dataType, i = 0, dataTypes = dataTypeExpression.toLowerCase().match(core_rnotwhite) || [];
      if (jQuery.isFunction(func)) {
        while (dataType = dataTypes[i++]) {
          if (dataType[0] === '+') {
            dataType = dataType.slice(1) || '*';
            (structure[dataType] = structure[dataType] || []).unshift(func);
          } else {
            (structure[dataType] = structure[dataType] || []).push(func);
          }
        }
      }
    };
  }
  function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
    var inspected = {}, seekingTransport = structure === transports;
    function inspect(dataType) {
      var selected;
      inspected[dataType] = true;
      jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
        var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
        if (typeof dataTypeOrTransport === 'string' && !seekingTransport && !inspected[dataTypeOrTransport]) {
          options.dataTypes.unshift(dataTypeOrTransport);
          inspect(dataTypeOrTransport);
          return false;
        } else if (seekingTransport) {
          return !(selected = dataTypeOrTransport);
        }
      });
      return selected;
    }
    return inspect(options.dataTypes[0]) || !inspected['*'] && inspect('*');
  }
  function ajaxExtend(target, src) {
    var deep, key, flatOptions = jQuery.ajaxSettings.flatOptions || {};
    for (key in src) {
      if (src[key] !== undefined) {
        (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
      }
    }
    if (deep) {
      jQuery.extend(true, target, deep);
    }
    return target;
  }
  jQuery.fn.load = function (url, params, callback) {
    if (typeof url !== 'string' && _load) {
      return _load.apply(this, arguments);
    }
    var selector, response, type, self = this, off = url.indexOf(' ');
    if (off >= 0) {
      selector = url.slice(off, url.length);
      url = url.slice(0, off);
    }
    if (jQuery.isFunction(params)) {
      callback = params;
      params = undefined;
    } else if (params && typeof params === 'object') {
      type = 'POST';
    }
    if (self.length > 0) {
      jQuery.ajax({
        url: url,
        type: type,
        dataType: 'html',
        data: params
      }).done(function (responseText) {
        response = arguments;
        self.html(selector ? jQuery('<div>').append(jQuery.parseHTML(responseText)).find(selector) : responseText);
      }).complete(callback && function (jqXHR, status) {
        self.each(callback, response || [
          jqXHR.responseText,
          status,
          jqXHR
        ]);
      });
    }
    return this;
  };
  jQuery.each([
    'ajaxStart',
    'ajaxStop',
    'ajaxComplete',
    'ajaxError',
    'ajaxSuccess',
    'ajaxSend'
  ], function (i, type) {
    jQuery.fn[type] = function (fn) {
      return this.on(type, fn);
    };
  });
  jQuery.each([
    'get',
    'post'
  ], function (i, method) {
    jQuery[method] = function (url, data, callback, type) {
      if (jQuery.isFunction(data)) {
        type = type || callback;
        callback = data;
        data = undefined;
      }
      return jQuery.ajax({
        url: url,
        type: method,
        dataType: type,
        data: data,
        success: callback
      });
    };
  });
  jQuery.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: ajaxLocation,
      type: 'GET',
      isLocal: rlocalProtocol.test(ajaxLocParts[1]),
      global: true,
      processData: true,
      async: true,
      contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
      accepts: {
        '*': allTypes,
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript'
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: 'responseXML',
        text: 'responseText'
      },
      converters: {
        '* text': window.String,
        'text html': true,
        'text json': jQuery.parseJSON,
        'text xml': jQuery.parseXML
      },
      flatOptions: {
        url: true,
        context: true
      }
    },
    ajaxSetup: function (target, settings) {
      return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
    },
    ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
    ajaxTransport: addToPrefiltersOrTransports(transports),
    ajax: function (url, options) {
      if (typeof url === 'object') {
        options = url;
        url = undefined;
      }
      options = options || {};
      var parts, i, cacheURL, responseHeadersString, timeoutTimer, fireGlobals, transport, responseHeaders, s = jQuery.ajaxSetup({}, options), callbackContext = s.context || s, globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks('once memory'), statusCode = s.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, state = 0, strAbort = 'canceled', jqXHR = {
          readyState: 0,
          getResponseHeader: function (key) {
            var match;
            if (state === 2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase()] = match[2];
                }
              }
              match = responseHeaders[key.toLowerCase()];
            }
            return match == null ? null : match;
          },
          getAllResponseHeaders: function () {
            return state === 2 ? responseHeadersString : null;
          },
          setRequestHeader: function (name, value) {
            var lname = name.toLowerCase();
            if (!state) {
              name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
              requestHeaders[name] = value;
            }
            return this;
          },
          overrideMimeType: function (type) {
            if (!state) {
              s.mimeType = type;
            }
            return this;
          },
          statusCode: function (map) {
            var code;
            if (map) {
              if (state < 2) {
                for (code in map) {
                  statusCode[code] = [
                    statusCode[code],
                    map[code]
                  ];
                }
              } else {
                jqXHR.always(map[jqXHR.status]);
              }
            }
            return this;
          },
          abort: function (statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        };
      deferred.promise(jqXHR).complete = completeDeferred.add;
      jqXHR.success = jqXHR.done;
      jqXHR.error = jqXHR.fail;
      s.url = ((url || s.url || ajaxLocation) + '').replace(rhash, '').replace(rprotocol, ajaxLocParts[1] + '//');
      s.type = options.method || options.type || s.method || s.type;
      s.dataTypes = jQuery.trim(s.dataType || '*').toLowerCase().match(core_rnotwhite) || [''];
      if (s.crossDomain == null) {
        parts = rurl.exec(s.url.toLowerCase());
        s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === 'http:' ? 80 : 443)) != (ajaxLocParts[3] || (ajaxLocParts[1] === 'http:' ? 80 : 443))));
      }
      if (s.data && s.processData && typeof s.data !== 'string') {
        s.data = jQuery.param(s.data, s.traditional);
      }
      inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);
      if (state === 2) {
        return jqXHR;
      }
      fireGlobals = s.global;
      if (fireGlobals && jQuery.active++ === 0) {
        jQuery.event.trigger('ajaxStart');
      }
      s.type = s.type.toUpperCase();
      s.hasContent = !rnoContent.test(s.type);
      cacheURL = s.url;
      if (!s.hasContent) {
        if (s.data) {
          cacheURL = s.url += (ajax_rquery.test(cacheURL) ? '&' : '?') + s.data;
          delete s.data;
        }
        if (s.cache === false) {
          s.url = rts.test(cacheURL) ? cacheURL.replace(rts, '$1_=' + ajax_nonce++) : cacheURL + (ajax_rquery.test(cacheURL) ? '&' : '?') + '_=' + ajax_nonce++;
        }
      }
      if (s.ifModified) {
        if (jQuery.lastModified[cacheURL]) {
          jqXHR.setRequestHeader('If-Modified-Since', jQuery.lastModified[cacheURL]);
        }
        if (jQuery.etag[cacheURL]) {
          jqXHR.setRequestHeader('If-None-Match', jQuery.etag[cacheURL]);
        }
      }
      if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
        jqXHR.setRequestHeader('Content-Type', s.contentType);
      }
      jqXHR.setRequestHeader('Accept', s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== '*' ? ', ' + allTypes + '; q=0.01' : '') : s.accepts['*']);
      for (i in s.headers) {
        jqXHR.setRequestHeader(i, s.headers[i]);
      }
      if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
        return jqXHR.abort();
      }
      strAbort = 'abort';
      for (i in {
          success: 1,
          error: 1,
          complete: 1
        }) {
        jqXHR[i](s[i]);
      }
      transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);
      if (!transport) {
        done(-1, 'No Transport');
      } else {
        jqXHR.readyState = 1;
        if (fireGlobals) {
          globalEventContext.trigger('ajaxSend', [
            jqXHR,
            s
          ]);
        }
        if (s.async && s.timeout > 0) {
          timeoutTimer = setTimeout(function () {
            jqXHR.abort('timeout');
          }, s.timeout);
        }
        try {
          state = 1;
          transport.send(requestHeaders, done);
        } catch (e) {
          if (state < 2) {
            done(-1, e);
          } else {
            throw e;
          }
        }
      }
      function done(status, nativeStatusText, responses, headers) {
        var isSuccess, success, error, response, modified, statusText = nativeStatusText;
        if (state === 2) {
          return;
        }
        state = 2;
        if (timeoutTimer) {
          clearTimeout(timeoutTimer);
        }
        transport = undefined;
        responseHeadersString = headers || '';
        jqXHR.readyState = status > 0 ? 4 : 0;
        if (responses) {
          response = ajaxHandleResponses(s, jqXHR, responses);
        }
        if (status >= 200 && status < 300 || status === 304) {
          if (s.ifModified) {
            modified = jqXHR.getResponseHeader('Last-Modified');
            if (modified) {
              jQuery.lastModified[cacheURL] = modified;
            }
            modified = jqXHR.getResponseHeader('etag');
            if (modified) {
              jQuery.etag[cacheURL] = modified;
            }
          }
          if (status === 204) {
            isSuccess = true;
            statusText = 'nocontent';
          } else if (status === 304) {
            isSuccess = true;
            statusText = 'notmodified';
          } else {
            isSuccess = ajaxConvert(s, response);
            statusText = isSuccess.state;
            success = isSuccess.data;
            error = isSuccess.error;
            isSuccess = !error;
          }
        } else {
          error = statusText;
          if (status || !statusText) {
            statusText = 'error';
            if (status < 0) {
              status = 0;
            }
          }
        }
        jqXHR.status = status;
        jqXHR.statusText = (nativeStatusText || statusText) + '';
        if (isSuccess) {
          deferred.resolveWith(callbackContext, [
            success,
            statusText,
            jqXHR
          ]);
        } else {
          deferred.rejectWith(callbackContext, [
            jqXHR,
            statusText,
            error
          ]);
        }
        jqXHR.statusCode(statusCode);
        statusCode = undefined;
        if (fireGlobals) {
          globalEventContext.trigger(isSuccess ? 'ajaxSuccess' : 'ajaxError', [
            jqXHR,
            s,
            isSuccess ? success : error
          ]);
        }
        completeDeferred.fireWith(callbackContext, [
          jqXHR,
          statusText
        ]);
        if (fireGlobals) {
          globalEventContext.trigger('ajaxComplete', [
            jqXHR,
            s
          ]);
          if (!--jQuery.active) {
            jQuery.event.trigger('ajaxStop');
          }
        }
      }
      return jqXHR;
    },
    getScript: function (url, callback) {
      return jQuery.get(url, undefined, callback, 'script');
    },
    getJSON: function (url, data, callback) {
      return jQuery.get(url, data, callback, 'json');
    }
  });
  function ajaxHandleResponses(s, jqXHR, responses) {
    var firstDataType, ct, finalDataType, type, contents = s.contents, dataTypes = s.dataTypes, responseFields = s.responseFields;
    for (type in responseFields) {
      if (type in responses) {
        jqXHR[responseFields[type]] = responses[type];
      }
    }
    while (dataTypes[0] === '*') {
      dataTypes.shift();
      if (ct === undefined) {
        ct = s.mimeType || jqXHR.getResponseHeader('Content-Type');
      }
    }
    if (ct) {
      for (type in contents) {
        if (contents[type] && contents[type].test(ct)) {
          dataTypes.unshift(type);
          break;
        }
      }
    }
    if (dataTypes[0] in responses) {
      finalDataType = dataTypes[0];
    } else {
      for (type in responses) {
        if (!dataTypes[0] || s.converters[type + ' ' + dataTypes[0]]) {
          finalDataType = type;
          break;
        }
        if (!firstDataType) {
          firstDataType = type;
        }
      }
      finalDataType = finalDataType || firstDataType;
    }
    if (finalDataType) {
      if (finalDataType !== dataTypes[0]) {
        dataTypes.unshift(finalDataType);
      }
      return responses[finalDataType];
    }
  }
  function ajaxConvert(s, response) {
    var conv2, current, conv, tmp, converters = {}, i = 0, dataTypes = s.dataTypes.slice(), prev = dataTypes[0];
    if (s.dataFilter) {
      response = s.dataFilter(response, s.dataType);
    }
    if (dataTypes[1]) {
      for (conv in s.converters) {
        converters[conv.toLowerCase()] = s.converters[conv];
      }
    }
    for (; current = dataTypes[++i];) {
      if (current !== '*') {
        if (prev !== '*' && prev !== current) {
          conv = converters[prev + ' ' + current] || converters['* ' + current];
          if (!conv) {
            for (conv2 in converters) {
              tmp = conv2.split(' ');
              if (tmp[1] === current) {
                conv = converters[prev + ' ' + tmp[0]] || converters['* ' + tmp[0]];
                if (conv) {
                  if (conv === true) {
                    conv = converters[conv2];
                  } else if (converters[conv2] !== true) {
                    current = tmp[0];
                    dataTypes.splice(i--, 0, current);
                  }
                  break;
                }
              }
            }
          }
          if (conv !== true) {
            if (conv && s['throws']) {
              response = conv(response);
            } else {
              try {
                response = conv(response);
              } catch (e) {
                return {
                  state: 'parsererror',
                  error: conv ? e : 'No conversion from ' + prev + ' to ' + current
                };
              }
            }
          }
        }
        prev = current;
      }
    }
    return {
      state: 'success',
      data: response
    };
  }
  jQuery.ajaxSetup({
    accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
    contents: { script: /(?:java|ecma)script/ },
    converters: {
      'text script': function (text) {
        jQuery.globalEval(text);
        return text;
      }
    }
  });
  jQuery.ajaxPrefilter('script', function (s) {
    if (s.cache === undefined) {
      s.cache = false;
    }
    if (s.crossDomain) {
      s.type = 'GET';
      s.global = false;
    }
  });
  jQuery.ajaxTransport('script', function (s) {
    if (s.crossDomain) {
      var script, head = document.head || jQuery('head')[0] || document.documentElement;
      return {
        send: function (_, callback) {
          script = document.createElement('script');
          script.async = true;
          if (s.scriptCharset) {
            script.charset = s.scriptCharset;
          }
          script.src = s.url;
          script.onload = script.onreadystatechange = function (_, isAbort) {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
              script.onload = script.onreadystatechange = null;
              if (script.parentNode) {
                script.parentNode.removeChild(script);
              }
              script = null;
              if (!isAbort) {
                callback(200, 'success');
              }
            }
          };
          head.insertBefore(script, head.firstChild);
        },
        abort: function () {
          if (script) {
            script.onload(undefined, true);
          }
        }
      };
    }
  });
  var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
  jQuery.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var callback = oldCallbacks.pop() || jQuery.expando + '_' + ajax_nonce++;
      this[callback] = true;
      return callback;
    }
  });
  jQuery.ajaxPrefilter('json jsonp', function (s, originalSettings, jqXHR) {
    var callbackName, overwritten, responseContainer, jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? 'url' : typeof s.data === 'string' && !(s.contentType || '').indexOf('application/x-www-form-urlencoded') && rjsonp.test(s.data) && 'data');
    if (jsonProp || s.dataTypes[0] === 'jsonp') {
      callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;
      if (jsonProp) {
        s[jsonProp] = s[jsonProp].replace(rjsonp, '$1' + callbackName);
      } else if (s.jsonp !== false) {
        s.url += (ajax_rquery.test(s.url) ? '&' : '?') + s.jsonp + '=' + callbackName;
      }
      s.converters['script json'] = function () {
        if (!responseContainer) {
          jQuery.error(callbackName + ' was not called');
        }
        return responseContainer[0];
      };
      s.dataTypes[0] = 'json';
      overwritten = window[callbackName];
      window[callbackName] = function () {
        responseContainer = arguments;
      };
      jqXHR.always(function () {
        window[callbackName] = overwritten;
        if (s[callbackName]) {
          s.jsonpCallback = originalSettings.jsonpCallback;
          oldCallbacks.push(callbackName);
        }
        if (responseContainer && jQuery.isFunction(overwritten)) {
          overwritten(responseContainer[0]);
        }
        responseContainer = overwritten = undefined;
      });
      return 'script';
    }
  });
  var xhrCallbacks, xhrSupported, xhrId = 0, xhrOnUnloadAbort = window.ActiveXObject && function () {
      var key;
      for (key in xhrCallbacks) {
        xhrCallbacks[key](undefined, true);
      }
    };
  function createStandardXHR() {
    try {
      return new window.XMLHttpRequest();
    } catch (e) {
    }
  }
  function createActiveXHR() {
    try {
      return new window.ActiveXObject('Microsoft.XMLHTTP');
    } catch (e) {
    }
  }
  jQuery.ajaxSettings.xhr = window.ActiveXObject ? function () {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } : createStandardXHR;
  xhrSupported = jQuery.ajaxSettings.xhr();
  jQuery.support.cors = !!xhrSupported && 'withCredentials' in xhrSupported;
  xhrSupported = jQuery.support.ajax = !!xhrSupported;
  if (xhrSupported) {
    jQuery.ajaxTransport(function (s) {
      if (!s.crossDomain || jQuery.support.cors) {
        var callback;
        return {
          send: function (headers, complete) {
            var handle, i, xhr = s.xhr();
            if (s.username) {
              xhr.open(s.type, s.url, s.async, s.username, s.password);
            } else {
              xhr.open(s.type, s.url, s.async);
            }
            if (s.xhrFields) {
              for (i in s.xhrFields) {
                xhr[i] = s.xhrFields[i];
              }
            }
            if (s.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(s.mimeType);
            }
            if (!s.crossDomain && !headers['X-Requested-With']) {
              headers['X-Requested-With'] = 'XMLHttpRequest';
            }
            try {
              for (i in headers) {
                xhr.setRequestHeader(i, headers[i]);
              }
            } catch (err) {
            }
            xhr.send(s.hasContent && s.data || null);
            callback = function (_, isAbort) {
              var status, responseHeaders, statusText, responses;
              try {
                if (callback && (isAbort || xhr.readyState === 4)) {
                  callback = undefined;
                  if (handle) {
                    xhr.onreadystatechange = jQuery.noop;
                    if (xhrOnUnloadAbort) {
                      delete xhrCallbacks[handle];
                    }
                  }
                  if (isAbort) {
                    if (xhr.readyState !== 4) {
                      xhr.abort();
                    }
                  } else {
                    responses = {};
                    status = xhr.status;
                    responseHeaders = xhr.getAllResponseHeaders();
                    if (typeof xhr.responseText === 'string') {
                      responses.text = xhr.responseText;
                    }
                    try {
                      statusText = xhr.statusText;
                    } catch (e) {
                      statusText = '';
                    }
                    if (!status && s.isLocal && !s.crossDomain) {
                      status = responses.text ? 200 : 404;
                    } else if (status === 1223) {
                      status = 204;
                    }
                  }
                }
              } catch (firefoxAccessException) {
                if (!isAbort) {
                  complete(-1, firefoxAccessException);
                }
              }
              if (responses) {
                complete(status, statusText, responses, responseHeaders);
              }
            };
            if (!s.async) {
              callback();
            } else if (xhr.readyState === 4) {
              setTimeout(callback);
            } else {
              handle = ++xhrId;
              if (xhrOnUnloadAbort) {
                if (!xhrCallbacks) {
                  xhrCallbacks = {};
                  jQuery(window).unload(xhrOnUnloadAbort);
                }
                xhrCallbacks[handle] = callback;
              }
              xhr.onreadystatechange = callback;
            }
          },
          abort: function () {
            if (callback) {
              callback(undefined, true);
            }
          }
        };
      }
    });
  }
  var fxNow, timerId, rfxtypes = /^(?:toggle|show|hide)$/, rfxnum = new RegExp('^(?:([+-])=|)(' + core_pnum + ')([a-z%]*)$', 'i'), rrun = /queueHooks$/, animationPrefilters = [defaultPrefilter], tweeners = {
      '*': [function (prop, value) {
          var end, unit, tween = this.createTween(prop, value), parts = rfxnum.exec(value), target = tween.cur(), start = +target || 0, scale = 1, maxIterations = 20;
          if (parts) {
            end = +parts[2];
            unit = parts[3] || (jQuery.cssNumber[prop] ? '' : 'px');
            if (unit !== 'px' && start) {
              start = jQuery.css(tween.elem, prop, true) || end || 1;
              do {
                scale = scale || '.5';
                start = start / scale;
                jQuery.style(tween.elem, prop, start + unit);
              } while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
            }
            tween.unit = unit;
            tween.start = start;
            tween.end = parts[1] ? start + (parts[1] + 1) * end : end;
          }
          return tween;
        }]
    };
  function createFxNow() {
    setTimeout(function () {
      fxNow = undefined;
    });
    return fxNow = jQuery.now();
  }
  function createTweens(animation, props) {
    jQuery.each(props, function (prop, value) {
      var collection = (tweeners[prop] || []).concat(tweeners['*']), index = 0, length = collection.length;
      for (; index < length; index++) {
        if (collection[index].call(animation, prop, value)) {
          return;
        }
      }
    });
  }
  function Animation(elem, properties, options) {
    var result, stopped, index = 0, length = animationPrefilters.length, deferred = jQuery.Deferred().always(function () {
        delete tick.elem;
      }), tick = function () {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index = 0, length = animation.tweens.length;
        for (; index < length; index++) {
          animation.tweens[index].run(percent);
        }
        deferred.notifyWith(elem, [
          animation,
          percent,
          remaining
        ]);
        if (percent < 1 && length) {
          return remaining;
        } else {
          deferred.resolveWith(elem, [animation]);
          return false;
        }
      }, animation = deferred.promise({
        elem: elem,
        props: jQuery.extend({}, properties),
        opts: jQuery.extend(true, { specialEasing: {} }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function (prop, end) {
          var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
          animation.tweens.push(tween);
          return tween;
        },
        stop: function (gotoEnd) {
          var index = 0, length = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index < length; index++) {
            animation.tweens[index].run(1);
          }
          if (gotoEnd) {
            deferred.resolveWith(elem, [
              animation,
              gotoEnd
            ]);
          } else {
            deferred.rejectWith(elem, [
              animation,
              gotoEnd
            ]);
          }
          return this;
        }
      }), props = animation.props;
    propFilter(props, animation.opts.specialEasing);
    for (; index < length; index++) {
      result = animationPrefilters[index].call(animation, elem, props, animation.opts);
      if (result) {
        return result;
      }
    }
    createTweens(animation, props);
    if (jQuery.isFunction(animation.opts.start)) {
      animation.opts.start.call(elem, animation);
    }
    jQuery.fx.timer(jQuery.extend(tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    }));
    return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
  }
  function propFilter(props, specialEasing) {
    var value, name, index, easing, hooks;
    for (index in props) {
      name = jQuery.camelCase(index);
      easing = specialEasing[name];
      value = props[index];
      if (jQuery.isArray(value)) {
        easing = value[1];
        value = props[index] = value[0];
      }
      if (index !== name) {
        props[name] = value;
        delete props[index];
      }
      hooks = jQuery.cssHooks[name];
      if (hooks && 'expand' in hooks) {
        value = hooks.expand(value);
        delete props[name];
        for (index in value) {
          if (!(index in props)) {
            props[index] = value[index];
            specialEasing[index] = easing;
          }
        }
      } else {
        specialEasing[name] = easing;
      }
    }
  }
  jQuery.Animation = jQuery.extend(Animation, {
    tweener: function (props, callback) {
      if (jQuery.isFunction(props)) {
        callback = props;
        props = ['*'];
      } else {
        props = props.split(' ');
      }
      var prop, index = 0, length = props.length;
      for (; index < length; index++) {
        prop = props[index];
        tweeners[prop] = tweeners[prop] || [];
        tweeners[prop].unshift(callback);
      }
    },
    prefilter: function (callback, prepend) {
      if (prepend) {
        animationPrefilters.unshift(callback);
      } else {
        animationPrefilters.push(callback);
      }
    }
  });
  function defaultPrefilter(elem, props, opts) {
    var prop, index, length, value, dataShow, toggle, tween, hooks, oldfire, anim = this, style = elem.style, orig = {}, handled = [], hidden = elem.nodeType && isHidden(elem);
    if (!opts.queue) {
      hooks = jQuery._queueHooks(elem, 'fx');
      if (hooks.unqueued == null) {
        hooks.unqueued = 0;
        oldfire = hooks.empty.fire;
        hooks.empty.fire = function () {
          if (!hooks.unqueued) {
            oldfire();
          }
        };
      }
      hooks.unqueued++;
      anim.always(function () {
        anim.always(function () {
          hooks.unqueued--;
          if (!jQuery.queue(elem, 'fx').length) {
            hooks.empty.fire();
          }
        });
      });
    }
    if (elem.nodeType === 1 && ('height' in props || 'width' in props)) {
      opts.overflow = [
        style.overflow,
        style.overflowX,
        style.overflowY
      ];
      if (jQuery.css(elem, 'display') === 'inline' && jQuery.css(elem, 'float') === 'none') {
        if (!jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay(elem.nodeName) === 'inline') {
          style.display = 'inline-block';
        } else {
          style.zoom = 1;
        }
      }
    }
    if (opts.overflow) {
      style.overflow = 'hidden';
      if (!jQuery.support.shrinkWrapBlocks) {
        anim.always(function () {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
    }
    for (index in props) {
      value = props[index];
      if (rfxtypes.exec(value)) {
        delete props[index];
        toggle = toggle || value === 'toggle';
        if (value === (hidden ? 'hide' : 'show')) {
          continue;
        }
        handled.push(index);
      }
    }
    length = handled.length;
    if (length) {
      dataShow = jQuery._data(elem, 'fxshow') || jQuery._data(elem, 'fxshow', {});
      if ('hidden' in dataShow) {
        hidden = dataShow.hidden;
      }
      if (toggle) {
        dataShow.hidden = !hidden;
      }
      if (hidden) {
        jQuery(elem).show();
      } else {
        anim.done(function () {
          jQuery(elem).hide();
        });
      }
      anim.done(function () {
        var prop;
        jQuery._removeData(elem, 'fxshow');
        for (prop in orig) {
          jQuery.style(elem, prop, orig[prop]);
        }
      });
      for (index = 0; index < length; index++) {
        prop = handled[index];
        tween = anim.createTween(prop, hidden ? dataShow[prop] : 0);
        orig[prop] = dataShow[prop] || jQuery.style(elem, prop);
        if (!(prop in dataShow)) {
          dataShow[prop] = tween.start;
          if (hidden) {
            tween.end = tween.start;
            tween.start = prop === 'width' || prop === 'height' ? 1 : 0;
          }
        }
      }
    }
  }
  function Tween(elem, options, prop, end, easing) {
    return new Tween.prototype.init(elem, options, prop, end, easing);
  }
  jQuery.Tween = Tween;
  Tween.prototype = {
    constructor: Tween,
    init: function (elem, options, prop, end, easing, unit) {
      this.elem = elem;
      this.prop = prop;
      this.easing = easing || 'swing';
      this.options = options;
      this.start = this.now = this.cur();
      this.end = end;
      this.unit = unit || (jQuery.cssNumber[prop] ? '' : 'px');
    },
    cur: function () {
      var hooks = Tween.propHooks[this.prop];
      return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
    },
    run: function (percent) {
      var eased, hooks = Tween.propHooks[this.prop];
      if (this.options.duration) {
        this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
      } else {
        this.pos = eased = percent;
      }
      this.now = (this.end - this.start) * eased + this.start;
      if (this.options.step) {
        this.options.step.call(this.elem, this.now, this);
      }
      if (hooks && hooks.set) {
        hooks.set(this);
      } else {
        Tween.propHooks._default.set(this);
      }
      return this;
    }
  };
  Tween.prototype.init.prototype = Tween.prototype;
  Tween.propHooks = {
    _default: {
      get: function (tween) {
        var result;
        if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
          return tween.elem[tween.prop];
        }
        result = jQuery.css(tween.elem, tween.prop, '');
        return !result || result === 'auto' ? 0 : result;
      },
      set: function (tween) {
        if (jQuery.fx.step[tween.prop]) {
          jQuery.fx.step[tween.prop](tween);
        } else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
          jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
        } else {
          tween.elem[tween.prop] = tween.now;
        }
      }
    }
  };
  Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
    set: function (tween) {
      if (tween.elem.nodeType && tween.elem.parentNode) {
        tween.elem[tween.prop] = tween.now;
      }
    }
  };
  jQuery.each([
    'toggle',
    'show',
    'hide'
  ], function (i, name) {
    var cssFn = jQuery.fn[name];
    jQuery.fn[name] = function (speed, easing, callback) {
      return speed == null || typeof speed === 'boolean' ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
    };
  });
  jQuery.fn.extend({
    fadeTo: function (speed, to, easing, callback) {
      return this.filter(isHidden).css('opacity', 0).show().end().animate({ opacity: to }, speed, easing, callback);
    },
    animate: function (prop, speed, easing, callback) {
      var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function () {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          doAnimation.finish = function () {
            anim.stop(true);
          };
          if (empty || jQuery._data(this, 'finish')) {
            anim.stop(true);
          }
        };
      doAnimation.finish = doAnimation;
      return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
    },
    stop: function (type, clearQueue, gotoEnd) {
      var stopQueue = function (hooks) {
        var stop = hooks.stop;
        delete hooks.stop;
        stop(gotoEnd);
      };
      if (typeof type !== 'string') {
        gotoEnd = clearQueue;
        clearQueue = type;
        type = undefined;
      }
      if (clearQueue && type !== false) {
        this.queue(type || 'fx', []);
      }
      return this.each(function () {
        var dequeue = true, index = type != null && type + 'queueHooks', timers = jQuery.timers, data = jQuery._data(this);
        if (index) {
          if (data[index] && data[index].stop) {
            stopQueue(data[index]);
          }
        } else {
          for (index in data) {
            if (data[index] && data[index].stop && rrun.test(index)) {
              stopQueue(data[index]);
            }
          }
        }
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
            timers[index].anim.stop(gotoEnd);
            dequeue = false;
            timers.splice(index, 1);
          }
        }
        if (dequeue || !gotoEnd) {
          jQuery.dequeue(this, type);
        }
      });
    },
    finish: function (type) {
      if (type !== false) {
        type = type || 'fx';
      }
      return this.each(function () {
        var index, data = jQuery._data(this), queue = data[type + 'queue'], hooks = data[type + 'queueHooks'], timers = jQuery.timers, length = queue ? queue.length : 0;
        data.finish = true;
        jQuery.queue(this, type, []);
        if (hooks && hooks.cur && hooks.cur.finish) {
          hooks.cur.finish.call(this);
        }
        for (index = timers.length; index--;) {
          if (timers[index].elem === this && timers[index].queue === type) {
            timers[index].anim.stop(true);
            timers.splice(index, 1);
          }
        }
        for (index = 0; index < length; index++) {
          if (queue[index] && queue[index].finish) {
            queue[index].finish.call(this);
          }
        }
        delete data.finish;
      });
    }
  });
  function genFx(type, includeWidth) {
    var which, attrs = { height: type }, i = 0;
    includeWidth = includeWidth ? 1 : 0;
    for (; i < 4; i += 2 - includeWidth) {
      which = cssExpand[i];
      attrs['margin' + which] = attrs['padding' + which] = type;
    }
    if (includeWidth) {
      attrs.opacity = attrs.width = type;
    }
    return attrs;
  }
  jQuery.each({
    slideDown: genFx('show'),
    slideUp: genFx('hide'),
    slideToggle: genFx('toggle'),
    fadeIn: { opacity: 'show' },
    fadeOut: { opacity: 'hide' },
    fadeToggle: { opacity: 'toggle' }
  }, function (name, props) {
    jQuery.fn[name] = function (speed, easing, callback) {
      return this.animate(props, speed, easing, callback);
    };
  });
  jQuery.speed = function (speed, easing, fn) {
    var opt = speed && typeof speed === 'object' ? jQuery.extend({}, speed) : {
        complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
        duration: speed,
        easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
      };
    opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === 'number' ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;
    if (opt.queue == null || opt.queue === true) {
      opt.queue = 'fx';
    }
    opt.old = opt.complete;
    opt.complete = function () {
      if (jQuery.isFunction(opt.old)) {
        opt.old.call(this);
      }
      if (opt.queue) {
        jQuery.dequeue(this, opt.queue);
      }
    };
    return opt;
  };
  jQuery.easing = {
    linear: function (p) {
      return p;
    },
    swing: function (p) {
      return 0.5 - Math.cos(p * Math.PI) / 2;
    }
  };
  jQuery.timers = [];
  jQuery.fx = Tween.prototype.init;
  jQuery.fx.tick = function () {
    var timer, timers = jQuery.timers, i = 0;
    fxNow = jQuery.now();
    for (; i < timers.length; i++) {
      timer = timers[i];
      if (!timer() && timers[i] === timer) {
        timers.splice(i--, 1);
      }
    }
    if (!timers.length) {
      jQuery.fx.stop();
    }
    fxNow = undefined;
  };
  jQuery.fx.timer = function (timer) {
    if (timer() && jQuery.timers.push(timer)) {
      jQuery.fx.start();
    }
  };
  jQuery.fx.interval = 13;
  jQuery.fx.start = function () {
    if (!timerId) {
      timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
    }
  };
  jQuery.fx.stop = function () {
    clearInterval(timerId);
    timerId = null;
  };
  jQuery.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
  };
  jQuery.fx.step = {};
  if (jQuery.expr && jQuery.expr.filters) {
    jQuery.expr.filters.animated = function (elem) {
      return jQuery.grep(jQuery.timers, function (fn) {
        return elem === fn.elem;
      }).length;
    };
  }
  jQuery.fn.offset = function (options) {
    if (arguments.length) {
      return options === undefined ? this : this.each(function (i) {
        jQuery.offset.setOffset(this, options, i);
      });
    }
    var docElem, win, box = {
        top: 0,
        left: 0
      }, elem = this[0], doc = elem && elem.ownerDocument;
    if (!doc) {
      return;
    }
    docElem = doc.documentElement;
    if (!jQuery.contains(docElem, elem)) {
      return box;
    }
    if (typeof elem.getBoundingClientRect !== core_strundefined) {
      box = elem.getBoundingClientRect();
    }
    win = getWindow(doc);
    return {
      top: box.top + (win.pageYOffset || docElem.scrollTop) - (docElem.clientTop || 0),
      left: box.left + (win.pageXOffset || docElem.scrollLeft) - (docElem.clientLeft || 0)
    };
  };
  jQuery.offset = {
    setOffset: function (elem, options, i) {
      var position = jQuery.css(elem, 'position');
      if (position === 'static') {
        elem.style.position = 'relative';
      }
      var curElem = jQuery(elem), curOffset = curElem.offset(), curCSSTop = jQuery.css(elem, 'top'), curCSSLeft = jQuery.css(elem, 'left'), calculatePosition = (position === 'absolute' || position === 'fixed') && jQuery.inArray('auto', [
          curCSSTop,
          curCSSLeft
        ]) > -1, props = {}, curPosition = {}, curTop, curLeft;
      if (calculatePosition) {
        curPosition = curElem.position();
        curTop = curPosition.top;
        curLeft = curPosition.left;
      } else {
        curTop = parseFloat(curCSSTop) || 0;
        curLeft = parseFloat(curCSSLeft) || 0;
      }
      if (jQuery.isFunction(options)) {
        options = options.call(elem, i, curOffset);
      }
      if (options.top != null) {
        props.top = options.top - curOffset.top + curTop;
      }
      if (options.left != null) {
        props.left = options.left - curOffset.left + curLeft;
      }
      if ('using' in options) {
        options.using.call(elem, props);
      } else {
        curElem.css(props);
      }
    }
  };
  jQuery.fn.extend({
    position: function () {
      if (!this[0]) {
        return;
      }
      var offsetParent, offset, parentOffset = {
          top: 0,
          left: 0
        }, elem = this[0];
      if (jQuery.css(elem, 'position') === 'fixed') {
        offset = elem.getBoundingClientRect();
      } else {
        offsetParent = this.offsetParent();
        offset = this.offset();
        if (!jQuery.nodeName(offsetParent[0], 'html')) {
          parentOffset = offsetParent.offset();
        }
        parentOffset.top += jQuery.css(offsetParent[0], 'borderTopWidth', true);
        parentOffset.left += jQuery.css(offsetParent[0], 'borderLeftWidth', true);
      }
      return {
        top: offset.top - parentOffset.top - jQuery.css(elem, 'marginTop', true),
        left: offset.left - parentOffset.left - jQuery.css(elem, 'marginLeft', true)
      };
    },
    offsetParent: function () {
      return this.map(function () {
        var offsetParent = this.offsetParent || document.documentElement;
        while (offsetParent && (!jQuery.nodeName(offsetParent, 'html') && jQuery.css(offsetParent, 'position') === 'static')) {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || document.documentElement;
      });
    }
  });
  jQuery.each({
    scrollLeft: 'pageXOffset',
    scrollTop: 'pageYOffset'
  }, function (method, prop) {
    var top = /Y/.test(prop);
    jQuery.fn[method] = function (val) {
      return jQuery.access(this, function (elem, method, val) {
        var win = getWindow(elem);
        if (val === undefined) {
          return win ? prop in win ? win[prop] : win.document.documentElement[method] : elem[method];
        }
        if (win) {
          win.scrollTo(!top ? val : jQuery(win).scrollLeft(), top ? val : jQuery(win).scrollTop());
        } else {
          elem[method] = val;
        }
      }, method, val, arguments.length, null);
    };
  });
  function getWindow(elem) {
    return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 ? elem.defaultView || elem.parentWindow : false;
  }
  jQuery.each({
    Height: 'height',
    Width: 'width'
  }, function (name, type) {
    jQuery.each({
      padding: 'inner' + name,
      content: type,
      '': 'outer' + name
    }, function (defaultExtra, funcName) {
      jQuery.fn[funcName] = function (margin, value) {
        var chainable = arguments.length && (defaultExtra || typeof margin !== 'boolean'), extra = defaultExtra || (margin === true || value === true ? 'margin' : 'border');
        return jQuery.access(this, function (elem, type, value) {
          var doc;
          if (jQuery.isWindow(elem)) {
            return elem.document.documentElement['client' + name];
          }
          if (elem.nodeType === 9) {
            doc = elem.documentElement;
            return Math.max(elem.body['scroll' + name], doc['scroll' + name], elem.body['offset' + name], doc['offset' + name], doc['client' + name]);
          }
          return value === undefined ? jQuery.css(elem, type, extra) : jQuery.style(elem, type, value, extra);
        }, type, chainable ? margin : undefined, chainable, null);
      };
    });
  });
  window.jQuery = window.$ = jQuery;
  if (typeof define === 'function' && define.amd && define.amd.jQuery) {
    define('jquery', [], function () {
      return jQuery;
    });
  }
}(window));
(function (window, document, undefined) {
  'use strict';
  var lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
  };
  var uppercase = function (string) {
    return isString(string) ? string.toUpperCase() : string;
  };
  var manualLowercase = function (s) {
    return isString(s) ? s.replace(/[A-Z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) | 32);
    }) : s;
  };
  var manualUppercase = function (s) {
    return isString(s) ? s.replace(/[a-z]/g, function (ch) {
      return String.fromCharCode(ch.charCodeAt(0) & ~32);
    }) : s;
  };
  if ('i' !== 'I'.toLowerCase()) {
    lowercase = manualLowercase;
    uppercase = manualUppercase;
  }
  var msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]), jqLite, jQuery, slice = [].slice, push = [].push, toString = Object.prototype.toString, angular = window.angular || (window.angular = {}), angularModule, nodeName_, uid = [
      '0',
      '0',
      '0'
    ];
  function isArrayLike(obj) {
    if (!obj || typeof obj.length !== 'number')
      return false;
    if (typeof obj.hasOwnProperty != 'function' && typeof obj.constructor != 'function') {
      return true;
    } else {
      return obj instanceof JQLite || jQuery && obj instanceof jQuery || toString.call(obj) !== '[object Object]' || typeof obj.callee === 'function';
    }
  }
  function forEach(obj, iterator, context) {
    var key;
    if (obj) {
      if (isFunction(obj)) {
        for (key in obj) {
          if (key != 'prototype' && key != 'length' && key != 'name' && obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key);
          }
        }
      } else if (obj.forEach && obj.forEach !== forEach) {
        obj.forEach(iterator, context);
      } else if (isArrayLike(obj)) {
        for (key = 0; key < obj.length; key++)
          iterator.call(context, obj[key], key);
      } else {
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            iterator.call(context, obj[key], key);
          }
        }
      }
    }
    return obj;
  }
  function sortedKeys(obj) {
    var keys = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys.sort();
  }
  function forEachSorted(obj, iterator, context) {
    var keys = sortedKeys(obj);
    for (var i = 0; i < keys.length; i++) {
      iterator.call(context, obj[keys[i]], keys[i]);
    }
    return keys;
  }
  function reverseParams(iteratorFn) {
    return function (value, key) {
      iteratorFn(key, value);
    };
  }
  function nextUid() {
    var index = uid.length;
    var digit;
    while (index) {
      index--;
      digit = uid[index].charCodeAt(0);
      if (digit == 57) {
        uid[index] = 'A';
        return uid.join('');
      }
      if (digit == 90) {
        uid[index] = '0';
      } else {
        uid[index] = String.fromCharCode(digit + 1);
        return uid.join('');
      }
    }
    uid.unshift('0');
    return uid.join('');
  }
  function setHashKey(obj, h) {
    if (h) {
      obj.$$hashKey = h;
    } else {
      delete obj.$$hashKey;
    }
  }
  function extend(dst) {
    var h = dst.$$hashKey;
    forEach(arguments, function (obj) {
      if (obj !== dst) {
        forEach(obj, function (value, key) {
          dst[key] = value;
        });
      }
    });
    setHashKey(dst, h);
    return dst;
  }
  function int(str) {
    return parseInt(str, 10);
  }
  function inherit(parent, extra) {
    return extend(new (extend(function () {
    }, { prototype: parent }))(), extra);
  }
  function noop() {
  }
  noop.$inject = [];
  function identity($) {
    return $;
  }
  identity.$inject = [];
  function valueFn(value) {
    return function () {
      return value;
    };
  }
  function isUndefined(value) {
    return typeof value == 'undefined';
  }
  function isDefined(value) {
    return typeof value != 'undefined';
  }
  function isObject(value) {
    return value != null && typeof value == 'object';
  }
  function isString(value) {
    return typeof value == 'string';
  }
  function isNumber(value) {
    return typeof value == 'number';
  }
  function isDate(value) {
    return toString.apply(value) == '[object Date]';
  }
  function isArray(value) {
    return toString.apply(value) == '[object Array]';
  }
  function isFunction(value) {
    return typeof value == 'function';
  }
  function isWindow(obj) {
    return obj && obj.document && obj.location && obj.alert && obj.setInterval;
  }
  function isScope(obj) {
    return obj && obj.$evalAsync && obj.$watch;
  }
  function isFile(obj) {
    return toString.apply(obj) === '[object File]';
  }
  function isBoolean(value) {
    return typeof value == 'boolean';
  }
  function trim(value) {
    return isString(value) ? value.replace(/^\s*/, '').replace(/\s*$/, '') : value;
  }
  function isElement(node) {
    return node && (node.nodeName || node.bind && node.find);
  }
  function makeMap(str) {
    var obj = {}, items = str.split(','), i;
    for (i = 0; i < items.length; i++)
      obj[items[i]] = true;
    return obj;
  }
  if (msie < 9) {
    nodeName_ = function (element) {
      element = element.nodeName ? element : element[0];
      return element.scopeName && element.scopeName != 'HTML' ? uppercase(element.scopeName + ':' + element.nodeName) : element.nodeName;
    };
  } else {
    nodeName_ = function (element) {
      return element.nodeName ? element.nodeName : element[0].nodeName;
    };
  }
  function map(obj, iterator, context) {
    var results = [];
    forEach(obj, function (value, index, list) {
      results.push(iterator.call(context, value, index, list));
    });
    return results;
  }
  function size(obj, ownPropsOnly) {
    var size = 0, key;
    if (isArray(obj) || isString(obj)) {
      return obj.length;
    } else if (isObject(obj)) {
      for (key in obj)
        if (!ownPropsOnly || obj.hasOwnProperty(key))
          size++;
    }
    return size;
  }
  function includes(array, obj) {
    return indexOf(array, obj) != -1;
  }
  function indexOf(array, obj) {
    if (array.indexOf)
      return array.indexOf(obj);
    for (var i = 0; i < array.length; i++) {
      if (obj === array[i])
        return i;
    }
    return -1;
  }
  function arrayRemove(array, value) {
    var index = indexOf(array, value);
    if (index >= 0)
      array.splice(index, 1);
    return value;
  }
  function isLeafNode(node) {
    if (node) {
      switch (node.nodeName) {
      case 'OPTION':
      case 'PRE':
      case 'TITLE':
        return true;
      }
    }
    return false;
  }
  function copy(source, destination) {
    if (isWindow(source) || isScope(source))
      throw Error('Can\'t copy Window or Scope');
    if (!destination) {
      destination = source;
      if (source) {
        if (isArray(source)) {
          destination = copy(source, []);
        } else if (isDate(source)) {
          destination = new Date(source.getTime());
        } else if (isObject(source)) {
          destination = copy(source, {});
        }
      }
    } else {
      if (source === destination)
        throw Error('Can\'t copy equivalent objects or arrays');
      if (isArray(source)) {
        destination.length = 0;
        for (var i = 0; i < source.length; i++) {
          destination.push(copy(source[i]));
        }
      } else {
        var h = destination.$$hashKey;
        forEach(destination, function (value, key) {
          delete destination[key];
        });
        for (var key in source) {
          destination[key] = copy(source[key]);
        }
        setHashKey(destination, h);
      }
    }
    return destination;
  }
  function shallowCopy(src, dst) {
    dst = dst || {};
    for (var key in src) {
      if (src.hasOwnProperty(key) && key.substr(0, 2) !== '$$') {
        dst[key] = src[key];
      }
    }
    return dst;
  }
  function equals(o1, o2) {
    if (o1 === o2)
      return true;
    if (o1 === null || o2 === null)
      return false;
    if (o1 !== o1 && o2 !== o2)
      return true;
    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
    if (t1 == t2) {
      if (t1 == 'object') {
        if (isArray(o1)) {
          if ((length = o1.length) == o2.length) {
            for (key = 0; key < length; key++) {
              if (!equals(o1[key], o2[key]))
                return false;
            }
            return true;
          }
        } else if (isDate(o1)) {
          return isDate(o2) && o1.getTime() == o2.getTime();
        } else {
          if (isScope(o1) || isScope(o2) || isWindow(o1) || isWindow(o2))
            return false;
          keySet = {};
          for (key in o1) {
            if (key.charAt(0) === '$' || isFunction(o1[key]))
              continue;
            if (!equals(o1[key], o2[key]))
              return false;
            keySet[key] = true;
          }
          for (key in o2) {
            if (!keySet[key] && key.charAt(0) !== '$' && o2[key] !== undefined && !isFunction(o2[key]))
              return false;
          }
          return true;
        }
      }
    }
    return false;
  }
  function concat(array1, array2, index) {
    return array1.concat(slice.call(array2, index));
  }
  function sliceArgs(args, startIndex) {
    return slice.call(args, startIndex || 0);
  }
  function bind(self, fn) {
    var curryArgs = arguments.length > 2 ? sliceArgs(arguments, 2) : [];
    if (isFunction(fn) && !(fn instanceof RegExp)) {
      return curryArgs.length ? function () {
        return arguments.length ? fn.apply(self, curryArgs.concat(slice.call(arguments, 0))) : fn.apply(self, curryArgs);
      } : function () {
        return arguments.length ? fn.apply(self, arguments) : fn.call(self);
      };
    } else {
      return fn;
    }
  }
  function toJsonReplacer(key, value) {
    var val = value;
    if (/^\$+/.test(key)) {
      val = undefined;
    } else if (isWindow(value)) {
      val = '$WINDOW';
    } else if (value && document === value) {
      val = '$DOCUMENT';
    } else if (isScope(value)) {
      val = '$SCOPE';
    }
    return val;
  }
  function toJson(obj, pretty) {
    return JSON.stringify(obj, toJsonReplacer, pretty ? '  ' : null);
  }
  function fromJson(json) {
    return isString(json) ? JSON.parse(json) : json;
  }
  function toBoolean(value) {
    if (value && value.length !== 0) {
      var v = lowercase('' + value);
      value = !(v == 'f' || v == '0' || v == 'false' || v == 'no' || v == 'n' || v == '[]');
    } else {
      value = false;
    }
    return value;
  }
  function startingTag(element) {
    element = jqLite(element).clone();
    try {
      element.html('');
    } catch (e) {
    }
    var TEXT_NODE = 3;
    var elemHtml = jqLite('<div>').append(element).html();
    try {
      return element[0].nodeType === TEXT_NODE ? lowercase(elemHtml) : elemHtml.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (match, nodeName) {
        return '<' + lowercase(nodeName);
      });
    } catch (e) {
      return lowercase(elemHtml);
    }
  }
  function parseKeyValue(keyValue) {
    var obj = {}, key_value, key;
    forEach((keyValue || '').split('&'), function (keyValue) {
      if (keyValue) {
        key_value = keyValue.split('=');
        key = decodeURIComponent(key_value[0]);
        obj[key] = isDefined(key_value[1]) ? decodeURIComponent(key_value[1]) : true;
      }
    });
    return obj;
  }
  function toKeyValue(obj) {
    var parts = [];
    forEach(obj, function (value, key) {
      parts.push(encodeUriQuery(key, true) + (value === true ? '' : '=' + encodeUriQuery(value, true)));
    });
    return parts.length ? parts.join('&') : '';
  }
  function encodeUriSegment(val) {
    return encodeUriQuery(val, true).replace(/%26/gi, '&').replace(/%3D/gi, '=').replace(/%2B/gi, '+');
  }
  function encodeUriQuery(val, pctEncodeSpaces) {
    return encodeURIComponent(val).replace(/%40/gi, '@').replace(/%3A/gi, ':').replace(/%24/g, '$').replace(/%2C/gi, ',').replace(/%20/g, pctEncodeSpaces ? '%20' : '+');
  }
  function angularInit(element, bootstrap) {
    var elements = [element], appElement, module, names = [
        'ng:app',
        'ng-app',
        'x-ng-app',
        'data-ng-app'
      ], NG_APP_CLASS_REGEXP = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
    function append(element) {
      element && elements.push(element);
    }
    forEach(names, function (name) {
      names[name] = true;
      append(document.getElementById(name));
      name = name.replace(':', '\\:');
      if (element.querySelectorAll) {
        forEach(element.querySelectorAll('.' + name), append);
        forEach(element.querySelectorAll('.' + name + '\\:'), append);
        forEach(element.querySelectorAll('[' + name + ']'), append);
      }
    });
    forEach(elements, function (element) {
      if (!appElement) {
        var className = ' ' + element.className + ' ';
        var match = NG_APP_CLASS_REGEXP.exec(className);
        if (match) {
          appElement = element;
          module = (match[2] || '').replace(/\s+/g, ',');
        } else {
          forEach(element.attributes, function (attr) {
            if (!appElement && names[attr.name]) {
              appElement = element;
              module = attr.value;
            }
          });
        }
      }
    });
    if (appElement) {
      bootstrap(appElement, module ? [module] : []);
    }
  }
  function bootstrap(element, modules) {
    var resumeBootstrapInternal = function () {
      element = jqLite(element);
      modules = modules || [];
      modules.unshift([
        '$provide',
        function ($provide) {
          $provide.value('$rootElement', element);
        }
      ]);
      modules.unshift('ng');
      var injector = createInjector(modules);
      injector.invoke([
        '$rootScope',
        '$rootElement',
        '$compile',
        '$injector',
        function (scope, element, compile, injector) {
          scope.$apply(function () {
            element.data('$injector', injector);
            compile(element)(scope);
          });
        }
      ]);
      return injector;
    };
    var NG_DEFER_BOOTSTRAP = /^NG_DEFER_BOOTSTRAP!/;
    if (window && !NG_DEFER_BOOTSTRAP.test(window.name)) {
      return resumeBootstrapInternal();
    }
    window.name = window.name.replace(NG_DEFER_BOOTSTRAP, '');
    angular.resumeBootstrap = function (extraModules) {
      forEach(extraModules, function (module) {
        modules.push(module);
      });
      resumeBootstrapInternal();
    };
  }
  var SNAKE_CASE_REGEXP = /[A-Z]/g;
  function snake_case(name, separator) {
    separator = separator || '_';
    return name.replace(SNAKE_CASE_REGEXP, function (letter, pos) {
      return (pos ? separator : '') + letter.toLowerCase();
    });
  }
  function bindJQuery() {
    jQuery = window.jQuery;
    if (jQuery) {
      jqLite = jQuery;
      extend(jQuery.fn, {
        scope: JQLitePrototype.scope,
        controller: JQLitePrototype.controller,
        injector: JQLitePrototype.injector,
        inheritedData: JQLitePrototype.inheritedData
      });
      JQLitePatchJQueryRemove('remove', true);
      JQLitePatchJQueryRemove('empty');
      JQLitePatchJQueryRemove('html');
    } else {
      jqLite = JQLite;
    }
    angular.element = jqLite;
  }
  function assertArg(arg, name, reason) {
    if (!arg) {
      throw new Error('Argument \'' + (name || '?') + '\' is ' + (reason || 'required'));
    }
    return arg;
  }
  function assertArgFn(arg, name, acceptArrayAnnotation) {
    if (acceptArrayAnnotation && isArray(arg)) {
      arg = arg[arg.length - 1];
    }
    assertArg(isFunction(arg), name, 'not a function, got ' + (arg && typeof arg == 'object' ? arg.constructor.name || 'Object' : typeof arg));
    return arg;
  }
  function setupModuleLoader(window) {
    function ensure(obj, name, factory) {
      return obj[name] || (obj[name] = factory());
    }
    return ensure(ensure(window, 'angular', Object), 'module', function () {
      var modules = {};
      return function module(name, requires, configFn) {
        if (requires && modules.hasOwnProperty(name)) {
          modules[name] = null;
        }
        return ensure(modules, name, function () {
          if (!requires) {
            throw Error('No module: ' + name);
          }
          var invokeQueue = [];
          var runBlocks = [];
          var config = invokeLater('$injector', 'invoke');
          var moduleInstance = {
              _invokeQueue: invokeQueue,
              _runBlocks: runBlocks,
              requires: requires,
              name: name,
              provider: invokeLater('$provide', 'provider'),
              factory: invokeLater('$provide', 'factory'),
              service: invokeLater('$provide', 'service'),
              value: invokeLater('$provide', 'value'),
              constant: invokeLater('$provide', 'constant', 'unshift'),
              filter: invokeLater('$filterProvider', 'register'),
              controller: invokeLater('$controllerProvider', 'register'),
              directive: invokeLater('$compileProvider', 'directive'),
              config: config,
              run: function (block) {
                runBlocks.push(block);
                return this;
              }
            };
          if (configFn) {
            config(configFn);
          }
          return moduleInstance;
          function invokeLater(provider, method, insertMethod) {
            return function () {
              invokeQueue[insertMethod || 'push']([
                provider,
                method,
                arguments
              ]);
              return moduleInstance;
            };
          }
        });
      };
    });
  }
  var version = {
      full: '1.0.7',
      major: 1,
      minor: 0,
      dot: 7,
      codeName: 'monochromatic-rainbow'
    };
  function publishExternalAPI(angular) {
    extend(angular, {
      'bootstrap': bootstrap,
      'copy': copy,
      'extend': extend,
      'equals': equals,
      'element': jqLite,
      'forEach': forEach,
      'injector': createInjector,
      'noop': noop,
      'bind': bind,
      'toJson': toJson,
      'fromJson': fromJson,
      'identity': identity,
      'isUndefined': isUndefined,
      'isDefined': isDefined,
      'isString': isString,
      'isFunction': isFunction,
      'isObject': isObject,
      'isNumber': isNumber,
      'isElement': isElement,
      'isArray': isArray,
      'version': version,
      'isDate': isDate,
      'lowercase': lowercase,
      'uppercase': uppercase,
      'callbacks': { counter: 0 }
    });
    angularModule = setupModuleLoader(window);
    try {
      angularModule('ngLocale');
    } catch (e) {
      angularModule('ngLocale', []).provider('$locale', $LocaleProvider);
    }
    angularModule('ng', ['ngLocale'], [
      '$provide',
      function ngModule($provide) {
        $provide.provider('$compile', $CompileProvider).directive({
          a: htmlAnchorDirective,
          input: inputDirective,
          textarea: inputDirective,
          form: formDirective,
          script: scriptDirective,
          select: selectDirective,
          style: styleDirective,
          option: optionDirective,
          ngBind: ngBindDirective,
          ngBindHtmlUnsafe: ngBindHtmlUnsafeDirective,
          ngBindTemplate: ngBindTemplateDirective,
          ngClass: ngClassDirective,
          ngClassEven: ngClassEvenDirective,
          ngClassOdd: ngClassOddDirective,
          ngCsp: ngCspDirective,
          ngCloak: ngCloakDirective,
          ngController: ngControllerDirective,
          ngForm: ngFormDirective,
          ngHide: ngHideDirective,
          ngInclude: ngIncludeDirective,
          ngInit: ngInitDirective,
          ngNonBindable: ngNonBindableDirective,
          ngPluralize: ngPluralizeDirective,
          ngRepeat: ngRepeatDirective,
          ngShow: ngShowDirective,
          ngSubmit: ngSubmitDirective,
          ngStyle: ngStyleDirective,
          ngSwitch: ngSwitchDirective,
          ngSwitchWhen: ngSwitchWhenDirective,
          ngSwitchDefault: ngSwitchDefaultDirective,
          ngOptions: ngOptionsDirective,
          ngView: ngViewDirective,
          ngTransclude: ngTranscludeDirective,
          ngModel: ngModelDirective,
          ngList: ngListDirective,
          ngChange: ngChangeDirective,
          required: requiredDirective,
          ngRequired: requiredDirective,
          ngValue: ngValueDirective
        }).directive(ngAttributeAliasDirectives).directive(ngEventDirectives);
        $provide.provider({
          $anchorScroll: $AnchorScrollProvider,
          $browser: $BrowserProvider,
          $cacheFactory: $CacheFactoryProvider,
          $controller: $ControllerProvider,
          $document: $DocumentProvider,
          $exceptionHandler: $ExceptionHandlerProvider,
          $filter: $FilterProvider,
          $interpolate: $InterpolateProvider,
          $http: $HttpProvider,
          $httpBackend: $HttpBackendProvider,
          $location: $LocationProvider,
          $log: $LogProvider,
          $parse: $ParseProvider,
          $route: $RouteProvider,
          $routeParams: $RouteParamsProvider,
          $rootScope: $RootScopeProvider,
          $q: $QProvider,
          $sniffer: $SnifferProvider,
          $templateCache: $TemplateCacheProvider,
          $timeout: $TimeoutProvider,
          $window: $WindowProvider
        });
      }
    ]);
  }
  var jqCache = JQLite.cache = {}, jqName = JQLite.expando = 'ng-' + new Date().getTime(), jqId = 1, addEventListenerFn = window.document.addEventListener ? function (element, type, fn) {
      element.addEventListener(type, fn, false);
    } : function (element, type, fn) {
      element.attachEvent('on' + type, fn);
    }, removeEventListenerFn = window.document.removeEventListener ? function (element, type, fn) {
      element.removeEventListener(type, fn, false);
    } : function (element, type, fn) {
      element.detachEvent('on' + type, fn);
    };
  function jqNextId() {
    return ++jqId;
  }
  var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
  var MOZ_HACK_REGEXP = /^moz([A-Z])/;
  function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
      return offset ? letter.toUpperCase() : letter;
    }).replace(MOZ_HACK_REGEXP, 'Moz$1');
  }
  function JQLitePatchJQueryRemove(name, dispatchThis) {
    var originalJqFn = jQuery.fn[name];
    originalJqFn = originalJqFn.$original || originalJqFn;
    removePatch.$original = originalJqFn;
    jQuery.fn[name] = removePatch;
    function removePatch() {
      var list = [this], fireEvent = dispatchThis, set, setIndex, setLength, element, childIndex, childLength, children, fns, events;
      while (list.length) {
        set = list.shift();
        for (setIndex = 0, setLength = set.length; setIndex < setLength; setIndex++) {
          element = jqLite(set[setIndex]);
          if (fireEvent) {
            element.triggerHandler('$destroy');
          } else {
            fireEvent = !fireEvent;
          }
          for (childIndex = 0, childLength = (children = element.children()).length; childIndex < childLength; childIndex++) {
            list.push(jQuery(children[childIndex]));
          }
        }
      }
      return originalJqFn.apply(this, arguments);
    }
  }
  function JQLite(element) {
    if (element instanceof JQLite) {
      return element;
    }
    if (!(this instanceof JQLite)) {
      if (isString(element) && element.charAt(0) != '<') {
        throw Error('selectors not implemented');
      }
      return new JQLite(element);
    }
    if (isString(element)) {
      var div = document.createElement('div');
      div.innerHTML = '<div>&#160;</div>' + element;
      div.removeChild(div.firstChild);
      JQLiteAddNodes(this, div.childNodes);
      this.remove();
    } else {
      JQLiteAddNodes(this, element);
    }
  }
  function JQLiteClone(element) {
    return element.cloneNode(true);
  }
  function JQLiteDealoc(element) {
    JQLiteRemoveData(element);
    for (var i = 0, children = element.childNodes || []; i < children.length; i++) {
      JQLiteDealoc(children[i]);
    }
  }
  function JQLiteUnbind(element, type, fn) {
    var events = JQLiteExpandoStore(element, 'events'), handle = JQLiteExpandoStore(element, 'handle');
    if (!handle)
      return;
    if (isUndefined(type)) {
      forEach(events, function (eventHandler, type) {
        removeEventListenerFn(element, type, eventHandler);
        delete events[type];
      });
    } else {
      if (isUndefined(fn)) {
        removeEventListenerFn(element, type, events[type]);
        delete events[type];
      } else {
        arrayRemove(events[type], fn);
      }
    }
  }
  function JQLiteRemoveData(element) {
    var expandoId = element[jqName], expandoStore = jqCache[expandoId];
    if (expandoStore) {
      if (expandoStore.handle) {
        expandoStore.events.$destroy && expandoStore.handle({}, '$destroy');
        JQLiteUnbind(element);
      }
      delete jqCache[expandoId];
      element[jqName] = undefined;
    }
  }
  function JQLiteExpandoStore(element, key, value) {
    var expandoId = element[jqName], expandoStore = jqCache[expandoId || -1];
    if (isDefined(value)) {
      if (!expandoStore) {
        element[jqName] = expandoId = jqNextId();
        expandoStore = jqCache[expandoId] = {};
      }
      expandoStore[key] = value;
    } else {
      return expandoStore && expandoStore[key];
    }
  }
  function JQLiteData(element, key, value) {
    var data = JQLiteExpandoStore(element, 'data'), isSetter = isDefined(value), keyDefined = !isSetter && isDefined(key), isSimpleGetter = keyDefined && !isObject(key);
    if (!data && !isSimpleGetter) {
      JQLiteExpandoStore(element, 'data', data = {});
    }
    if (isSetter) {
      data[key] = value;
    } else {
      if (keyDefined) {
        if (isSimpleGetter) {
          return data && data[key];
        } else {
          extend(data, key);
        }
      } else {
        return data;
      }
    }
  }
  function JQLiteHasClass(element, selector) {
    return (' ' + element.className + ' ').replace(/[\n\t]/g, ' ').indexOf(' ' + selector + ' ') > -1;
  }
  function JQLiteRemoveClass(element, cssClasses) {
    if (cssClasses) {
      forEach(cssClasses.split(' '), function (cssClass) {
        element.className = trim((' ' + element.className + ' ').replace(/[\n\t]/g, ' ').replace(' ' + trim(cssClass) + ' ', ' '));
      });
    }
  }
  function JQLiteAddClass(element, cssClasses) {
    if (cssClasses) {
      forEach(cssClasses.split(' '), function (cssClass) {
        if (!JQLiteHasClass(element, cssClass)) {
          element.className = trim(element.className + ' ' + trim(cssClass));
        }
      });
    }
  }
  function JQLiteAddNodes(root, elements) {
    if (elements) {
      elements = !elements.nodeName && isDefined(elements.length) && !isWindow(elements) ? elements : [elements];
      for (var i = 0; i < elements.length; i++) {
        root.push(elements[i]);
      }
    }
  }
  function JQLiteController(element, name) {
    return JQLiteInheritedData(element, '$' + (name || 'ngController') + 'Controller');
  }
  function JQLiteInheritedData(element, name, value) {
    element = jqLite(element);
    if (element[0].nodeType == 9) {
      element = element.find('html');
    }
    while (element.length) {
      if (value = element.data(name))
        return value;
      element = element.parent();
    }
  }
  var JQLitePrototype = JQLite.prototype = {
      ready: function (fn) {
        var fired = false;
        function trigger() {
          if (fired)
            return;
          fired = true;
          fn();
        }
        this.bind('DOMContentLoaded', trigger);
        JQLite(window).bind('load', trigger);
      },
      toString: function () {
        var value = [];
        forEach(this, function (e) {
          value.push('' + e);
        });
        return '[' + value.join(', ') + ']';
      },
      eq: function (index) {
        return index >= 0 ? jqLite(this[index]) : jqLite(this[this.length + index]);
      },
      length: 0,
      push: push,
      sort: [].sort,
      splice: [].splice
    };
  var BOOLEAN_ATTR = {};
  forEach('multiple,selected,checked,disabled,readOnly,required'.split(','), function (value) {
    BOOLEAN_ATTR[lowercase(value)] = value;
  });
  var BOOLEAN_ELEMENTS = {};
  forEach('input,select,option,textarea,button,form'.split(','), function (value) {
    BOOLEAN_ELEMENTS[uppercase(value)] = true;
  });
  function getBooleanAttrName(element, name) {
    var booleanAttr = BOOLEAN_ATTR[name.toLowerCase()];
    return booleanAttr && BOOLEAN_ELEMENTS[element.nodeName] && booleanAttr;
  }
  forEach({
    data: JQLiteData,
    inheritedData: JQLiteInheritedData,
    scope: function (element) {
      return JQLiteInheritedData(element, '$scope');
    },
    controller: JQLiteController,
    injector: function (element) {
      return JQLiteInheritedData(element, '$injector');
    },
    removeAttr: function (element, name) {
      element.removeAttribute(name);
    },
    hasClass: JQLiteHasClass,
    css: function (element, name, value) {
      name = camelCase(name);
      if (isDefined(value)) {
        element.style[name] = value;
      } else {
        var val;
        if (msie <= 8) {
          val = element.currentStyle && element.currentStyle[name];
          if (val === '')
            val = 'auto';
        }
        val = val || element.style[name];
        if (msie <= 8) {
          val = val === '' ? undefined : val;
        }
        return val;
      }
    },
    attr: function (element, name, value) {
      var lowercasedName = lowercase(name);
      if (BOOLEAN_ATTR[lowercasedName]) {
        if (isDefined(value)) {
          if (!!value) {
            element[name] = true;
            element.setAttribute(name, lowercasedName);
          } else {
            element[name] = false;
            element.removeAttribute(lowercasedName);
          }
        } else {
          return element[name] || (element.attributes.getNamedItem(name) || noop).specified ? lowercasedName : undefined;
        }
      } else if (isDefined(value)) {
        element.setAttribute(name, value);
      } else if (element.getAttribute) {
        var ret = element.getAttribute(name, 2);
        return ret === null ? undefined : ret;
      }
    },
    prop: function (element, name, value) {
      if (isDefined(value)) {
        element[name] = value;
      } else {
        return element[name];
      }
    },
    text: extend(msie < 9 ? function (element, value) {
      if (element.nodeType == 1) {
        if (isUndefined(value))
          return element.innerText;
        element.innerText = value;
      } else {
        if (isUndefined(value))
          return element.nodeValue;
        element.nodeValue = value;
      }
    } : function (element, value) {
      if (isUndefined(value)) {
        return element.textContent;
      }
      element.textContent = value;
    }, { $dv: '' }),
    val: function (element, value) {
      if (isUndefined(value)) {
        return element.value;
      }
      element.value = value;
    },
    html: function (element, value) {
      if (isUndefined(value)) {
        return element.innerHTML;
      }
      for (var i = 0, childNodes = element.childNodes; i < childNodes.length; i++) {
        JQLiteDealoc(childNodes[i]);
      }
      element.innerHTML = value;
    }
  }, function (fn, name) {
    JQLite.prototype[name] = function (arg1, arg2) {
      var i, key;
      if ((fn.length == 2 && (fn !== JQLiteHasClass && fn !== JQLiteController) ? arg1 : arg2) === undefined) {
        if (isObject(arg1)) {
          for (i = 0; i < this.length; i++) {
            if (fn === JQLiteData) {
              fn(this[i], arg1);
            } else {
              for (key in arg1) {
                fn(this[i], key, arg1[key]);
              }
            }
          }
          return this;
        } else {
          if (this.length)
            return fn(this[0], arg1, arg2);
        }
      } else {
        for (i = 0; i < this.length; i++) {
          fn(this[i], arg1, arg2);
        }
        return this;
      }
      return fn.$dv;
    };
  });
  function createEventHandler(element, events) {
    var eventHandler = function (event, type) {
      if (!event.preventDefault) {
        event.preventDefault = function () {
          event.returnValue = false;
        };
      }
      if (!event.stopPropagation) {
        event.stopPropagation = function () {
          event.cancelBubble = true;
        };
      }
      if (!event.target) {
        event.target = event.srcElement || document;
      }
      if (isUndefined(event.defaultPrevented)) {
        var prevent = event.preventDefault;
        event.preventDefault = function () {
          event.defaultPrevented = true;
          prevent.call(event);
        };
        event.defaultPrevented = false;
      }
      event.isDefaultPrevented = function () {
        return event.defaultPrevented;
      };
      forEach(events[type || event.type], function (fn) {
        fn.call(element, event);
      });
      if (msie <= 8) {
        event.preventDefault = null;
        event.stopPropagation = null;
        event.isDefaultPrevented = null;
      } else {
        delete event.preventDefault;
        delete event.stopPropagation;
        delete event.isDefaultPrevented;
      }
    };
    eventHandler.elem = element;
    return eventHandler;
  }
  forEach({
    removeData: JQLiteRemoveData,
    dealoc: JQLiteDealoc,
    bind: function bindFn(element, type, fn) {
      var events = JQLiteExpandoStore(element, 'events'), handle = JQLiteExpandoStore(element, 'handle');
      if (!events)
        JQLiteExpandoStore(element, 'events', events = {});
      if (!handle)
        JQLiteExpandoStore(element, 'handle', handle = createEventHandler(element, events));
      forEach(type.split(' '), function (type) {
        var eventFns = events[type];
        if (!eventFns) {
          if (type == 'mouseenter' || type == 'mouseleave') {
            var contains = document.body.contains || document.body.compareDocumentPosition ? function (a, b) {
                var adown = a.nodeType === 9 ? a.documentElement : a, bup = b && b.parentNode;
                return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
              } : function (a, b) {
                if (b) {
                  while (b = b.parentNode) {
                    if (b === a) {
                      return true;
                    }
                  }
                }
                return false;
              };
            events[type] = [];
            var eventmap = {
                mouseleave: 'mouseout',
                mouseenter: 'mouseover'
              };
            bindFn(element, eventmap[type], function (event) {
              var ret, target = this, related = event.relatedTarget;
              if (!related || related !== target && !contains(target, related)) {
                handle(event, type);
              }
            });
          } else {
            addEventListenerFn(element, type, handle);
            events[type] = [];
          }
          eventFns = events[type];
        }
        eventFns.push(fn);
      });
    },
    unbind: JQLiteUnbind,
    replaceWith: function (element, replaceNode) {
      var index, parent = element.parentNode;
      JQLiteDealoc(element);
      forEach(new JQLite(replaceNode), function (node) {
        if (index) {
          parent.insertBefore(node, index.nextSibling);
        } else {
          parent.replaceChild(node, element);
        }
        index = node;
      });
    },
    children: function (element) {
      var children = [];
      forEach(element.childNodes, function (element) {
        if (element.nodeType === 1)
          children.push(element);
      });
      return children;
    },
    contents: function (element) {
      return element.childNodes || [];
    },
    append: function (element, node) {
      forEach(new JQLite(node), function (child) {
        if (element.nodeType === 1)
          element.appendChild(child);
      });
    },
    prepend: function (element, node) {
      if (element.nodeType === 1) {
        var index = element.firstChild;
        forEach(new JQLite(node), function (child) {
          if (index) {
            element.insertBefore(child, index);
          } else {
            element.appendChild(child);
            index = child;
          }
        });
      }
    },
    wrap: function (element, wrapNode) {
      wrapNode = jqLite(wrapNode)[0];
      var parent = element.parentNode;
      if (parent) {
        parent.replaceChild(wrapNode, element);
      }
      wrapNode.appendChild(element);
    },
    remove: function (element) {
      JQLiteDealoc(element);
      var parent = element.parentNode;
      if (parent)
        parent.removeChild(element);
    },
    after: function (element, newElement) {
      var index = element, parent = element.parentNode;
      forEach(new JQLite(newElement), function (node) {
        parent.insertBefore(node, index.nextSibling);
        index = node;
      });
    },
    addClass: JQLiteAddClass,
    removeClass: JQLiteRemoveClass,
    toggleClass: function (element, selector, condition) {
      if (isUndefined(condition)) {
        condition = !JQLiteHasClass(element, selector);
      }
      (condition ? JQLiteAddClass : JQLiteRemoveClass)(element, selector);
    },
    parent: function (element) {
      var parent = element.parentNode;
      return parent && parent.nodeType !== 11 ? parent : null;
    },
    next: function (element) {
      if (element.nextElementSibling) {
        return element.nextElementSibling;
      }
      var elm = element.nextSibling;
      while (elm != null && elm.nodeType !== 1) {
        elm = elm.nextSibling;
      }
      return elm;
    },
    find: function (element, selector) {
      return element.getElementsByTagName(selector);
    },
    clone: JQLiteClone,
    triggerHandler: function (element, eventName) {
      var eventFns = (JQLiteExpandoStore(element, 'events') || {})[eventName];
      forEach(eventFns, function (fn) {
        fn.call(element, null);
      });
    }
  }, function (fn, name) {
    JQLite.prototype[name] = function (arg1, arg2) {
      var value;
      for (var i = 0; i < this.length; i++) {
        if (value == undefined) {
          value = fn(this[i], arg1, arg2);
          if (value !== undefined) {
            value = jqLite(value);
          }
        } else {
          JQLiteAddNodes(value, fn(this[i], arg1, arg2));
        }
      }
      return value == undefined ? this : value;
    };
  });
  function hashKey(obj) {
    var objType = typeof obj, key;
    if (objType == 'object' && obj !== null) {
      if (typeof (key = obj.$$hashKey) == 'function') {
        key = obj.$$hashKey();
      } else if (key === undefined) {
        key = obj.$$hashKey = nextUid();
      }
    } else {
      key = obj;
    }
    return objType + ':' + key;
  }
  function HashMap(array) {
    forEach(array, this.put, this);
  }
  HashMap.prototype = {
    put: function (key, value) {
      this[hashKey(key)] = value;
    },
    get: function (key) {
      return this[hashKey(key)];
    },
    remove: function (key) {
      var value = this[key = hashKey(key)];
      delete this[key];
      return value;
    }
  };
  function HashQueueMap() {
  }
  HashQueueMap.prototype = {
    push: function (key, value) {
      var array = this[key = hashKey(key)];
      if (!array) {
        this[key] = [value];
      } else {
        array.push(value);
      }
    },
    shift: function (key) {
      var array = this[key = hashKey(key)];
      if (array) {
        if (array.length == 1) {
          delete this[key];
          return array[0];
        } else {
          return array.shift();
        }
      }
    },
    peek: function (key) {
      var array = this[hashKey(key)];
      if (array) {
        return array[0];
      }
    }
  };
  var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var FN_ARG_SPLIT = /,/;
  var FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
  function annotate(fn) {
    var $inject, fnText, argDecl, last;
    if (typeof fn == 'function') {
      if (!($inject = fn.$inject)) {
        $inject = [];
        fnText = fn.toString().replace(STRIP_COMMENTS, '');
        argDecl = fnText.match(FN_ARGS);
        forEach(argDecl[1].split(FN_ARG_SPLIT), function (arg) {
          arg.replace(FN_ARG, function (all, underscore, name) {
            $inject.push(name);
          });
        });
        fn.$inject = $inject;
      }
    } else if (isArray(fn)) {
      last = fn.length - 1;
      assertArgFn(fn[last], 'fn');
      $inject = fn.slice(0, last);
    } else {
      assertArgFn(fn, 'fn', true);
    }
    return $inject;
  }
  function createInjector(modulesToLoad) {
    var INSTANTIATING = {}, providerSuffix = 'Provider', path = [], loadedModules = new HashMap(), providerCache = {
        $provide: {
          provider: supportObject(provider),
          factory: supportObject(factory),
          service: supportObject(service),
          value: supportObject(value),
          constant: supportObject(constant),
          decorator: decorator
        }
      }, providerInjector = createInternalInjector(providerCache, function () {
        throw Error('Unknown provider: ' + path.join(' <- '));
      }), instanceCache = {}, instanceInjector = instanceCache.$injector = createInternalInjector(instanceCache, function (servicename) {
        var provider = providerInjector.get(servicename + providerSuffix);
        return instanceInjector.invoke(provider.$get, provider);
      });
    forEach(loadModules(modulesToLoad), function (fn) {
      instanceInjector.invoke(fn || noop);
    });
    return instanceInjector;
    function supportObject(delegate) {
      return function (key, value) {
        if (isObject(key)) {
          forEach(key, reverseParams(delegate));
        } else {
          return delegate(key, value);
        }
      };
    }
    function provider(name, provider_) {
      if (isFunction(provider_) || isArray(provider_)) {
        provider_ = providerInjector.instantiate(provider_);
      }
      if (!provider_.$get) {
        throw Error('Provider ' + name + ' must define $get factory method.');
      }
      return providerCache[name + providerSuffix] = provider_;
    }
    function factory(name, factoryFn) {
      return provider(name, { $get: factoryFn });
    }
    function service(name, constructor) {
      return factory(name, [
        '$injector',
        function ($injector) {
          return $injector.instantiate(constructor);
        }
      ]);
    }
    function value(name, value) {
      return factory(name, valueFn(value));
    }
    function constant(name, value) {
      providerCache[name] = value;
      instanceCache[name] = value;
    }
    function decorator(serviceName, decorFn) {
      var origProvider = providerInjector.get(serviceName + providerSuffix), orig$get = origProvider.$get;
      origProvider.$get = function () {
        var origInstance = instanceInjector.invoke(orig$get, origProvider);
        return instanceInjector.invoke(decorFn, null, { $delegate: origInstance });
      };
    }
    function loadModules(modulesToLoad) {
      var runBlocks = [];
      forEach(modulesToLoad, function (module) {
        if (loadedModules.get(module))
          return;
        loadedModules.put(module, true);
        if (isString(module)) {
          var moduleFn = angularModule(module);
          runBlocks = runBlocks.concat(loadModules(moduleFn.requires)).concat(moduleFn._runBlocks);
          try {
            for (var invokeQueue = moduleFn._invokeQueue, i = 0, ii = invokeQueue.length; i < ii; i++) {
              var invokeArgs = invokeQueue[i], provider = invokeArgs[0] == '$injector' ? providerInjector : providerInjector.get(invokeArgs[0]);
              provider[invokeArgs[1]].apply(provider, invokeArgs[2]);
            }
          } catch (e) {
            if (e.message)
              e.message += ' from ' + module;
            throw e;
          }
        } else if (isFunction(module)) {
          try {
            runBlocks.push(providerInjector.invoke(module));
          } catch (e) {
            if (e.message)
              e.message += ' from ' + module;
            throw e;
          }
        } else if (isArray(module)) {
          try {
            runBlocks.push(providerInjector.invoke(module));
          } catch (e) {
            if (e.message)
              e.message += ' from ' + String(module[module.length - 1]);
            throw e;
          }
        } else {
          assertArgFn(module, 'module');
        }
      });
      return runBlocks;
    }
    function createInternalInjector(cache, factory) {
      function getService(serviceName) {
        if (typeof serviceName !== 'string') {
          throw Error('Service name expected');
        }
        if (cache.hasOwnProperty(serviceName)) {
          if (cache[serviceName] === INSTANTIATING) {
            throw Error('Circular dependency: ' + path.join(' <- '));
          }
          return cache[serviceName];
        } else {
          try {
            path.unshift(serviceName);
            cache[serviceName] = INSTANTIATING;
            return cache[serviceName] = factory(serviceName);
          } finally {
            path.shift();
          }
        }
      }
      function invoke(fn, self, locals) {
        var args = [], $inject = annotate(fn), length, i, key;
        for (i = 0, length = $inject.length; i < length; i++) {
          key = $inject[i];
          args.push(locals && locals.hasOwnProperty(key) ? locals[key] : getService(key));
        }
        if (!fn.$inject) {
          fn = fn[length];
        }
        switch (self ? -1 : args.length) {
        case 0:
          return fn();
        case 1:
          return fn(args[0]);
        case 2:
          return fn(args[0], args[1]);
        case 3:
          return fn(args[0], args[1], args[2]);
        case 4:
          return fn(args[0], args[1], args[2], args[3]);
        case 5:
          return fn(args[0], args[1], args[2], args[3], args[4]);
        case 6:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5]);
        case 7:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        case 8:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7]);
        case 9:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8]);
        case 10:
          return fn(args[0], args[1], args[2], args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
        default:
          return fn.apply(self, args);
        }
      }
      function instantiate(Type, locals) {
        var Constructor = function () {
          }, instance, returnedValue;
        Constructor.prototype = (isArray(Type) ? Type[Type.length - 1] : Type).prototype;
        instance = new Constructor();
        returnedValue = invoke(Type, instance, locals);
        return isObject(returnedValue) ? returnedValue : instance;
      }
      return {
        invoke: invoke,
        instantiate: instantiate,
        get: getService,
        annotate: annotate
      };
    }
  }
  function $AnchorScrollProvider() {
    var autoScrollingEnabled = true;
    this.disableAutoScrolling = function () {
      autoScrollingEnabled = false;
    };
    this.$get = [
      '$window',
      '$location',
      '$rootScope',
      function ($window, $location, $rootScope) {
        var document = $window.document;
        function getFirstAnchor(list) {
          var result = null;
          forEach(list, function (element) {
            if (!result && lowercase(element.nodeName) === 'a')
              result = element;
          });
          return result;
        }
        function scroll() {
          var hash = $location.hash(), elm;
          if (!hash)
            $window.scrollTo(0, 0);
          else if (elm = document.getElementById(hash))
            elm.scrollIntoView();
          else if (elm = getFirstAnchor(document.getElementsByName(hash)))
            elm.scrollIntoView();
          else if (hash === 'top')
            $window.scrollTo(0, 0);
        }
        if (autoScrollingEnabled) {
          $rootScope.$watch(function autoScrollWatch() {
            return $location.hash();
          }, function autoScrollWatchAction() {
            $rootScope.$evalAsync(scroll);
          });
        }
        return scroll;
      }
    ];
  }
  function Browser(window, document, $log, $sniffer) {
    var self = this, rawDocument = document[0], location = window.location, history = window.history, setTimeout = window.setTimeout, clearTimeout = window.clearTimeout, pendingDeferIds = {};
    self.isMock = false;
    var outstandingRequestCount = 0;
    var outstandingRequestCallbacks = [];
    self.$$completeOutstandingRequest = completeOutstandingRequest;
    self.$$incOutstandingRequestCount = function () {
      outstandingRequestCount++;
    };
    function completeOutstandingRequest(fn) {
      try {
        fn.apply(null, sliceArgs(arguments, 1));
      } finally {
        outstandingRequestCount--;
        if (outstandingRequestCount === 0) {
          while (outstandingRequestCallbacks.length) {
            try {
              outstandingRequestCallbacks.pop()();
            } catch (e) {
              $log.error(e);
            }
          }
        }
      }
    }
    self.notifyWhenNoOutstandingRequests = function (callback) {
      forEach(pollFns, function (pollFn) {
        pollFn();
      });
      if (outstandingRequestCount === 0) {
        callback();
      } else {
        outstandingRequestCallbacks.push(callback);
      }
    };
    var pollFns = [], pollTimeout;
    self.addPollFn = function (fn) {
      if (isUndefined(pollTimeout))
        startPoller(100, setTimeout);
      pollFns.push(fn);
      return fn;
    };
    function startPoller(interval, setTimeout) {
      (function check() {
        forEach(pollFns, function (pollFn) {
          pollFn();
        });
        pollTimeout = setTimeout(check, interval);
      }());
    }
    var lastBrowserUrl = location.href, baseElement = document.find('base');
    self.url = function (url, replace) {
      if (url) {
        if (lastBrowserUrl == url)
          return;
        lastBrowserUrl = url;
        if ($sniffer.history) {
          if (replace)
            history.replaceState(null, '', url);
          else {
            history.pushState(null, '', url);
            baseElement.attr('href', baseElement.attr('href'));
          }
        } else {
          if (replace)
            location.replace(url);
          else
            location.href = url;
        }
        return self;
      } else {
        return location.href.replace(/%27/g, '\'');
      }
    };
    var urlChangeListeners = [], urlChangeInit = false;
    function fireUrlChange() {
      if (lastBrowserUrl == self.url())
        return;
      lastBrowserUrl = self.url();
      forEach(urlChangeListeners, function (listener) {
        listener(self.url());
      });
    }
    self.onUrlChange = function (callback) {
      if (!urlChangeInit) {
        if ($sniffer.history)
          jqLite(window).bind('popstate', fireUrlChange);
        if ($sniffer.hashchange)
          jqLite(window).bind('hashchange', fireUrlChange);
        else
          self.addPollFn(fireUrlChange);
        urlChangeInit = true;
      }
      urlChangeListeners.push(callback);
      return callback;
    };
    self.baseHref = function () {
      var href = baseElement.attr('href');
      return href ? href.replace(/^https?\:\/\/[^\/]*/, '') : '';
    };
    var lastCookies = {};
    var lastCookieString = '';
    var cookiePath = self.baseHref();
    self.cookies = function (name, value) {
      var cookieLength, cookieArray, cookie, i, index;
      if (name) {
        if (value === undefined) {
          rawDocument.cookie = escape(name) + '=;path=' + cookiePath + ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
        } else {
          if (isString(value)) {
            cookieLength = (rawDocument.cookie = escape(name) + '=' + escape(value) + ';path=' + cookiePath).length + 1;
            if (cookieLength > 4096) {
              $log.warn('Cookie \'' + name + '\' possibly not set or overflowed because it was too large (' + cookieLength + ' > 4096 bytes)!');
            }
          }
        }
      } else {
        if (rawDocument.cookie !== lastCookieString) {
          lastCookieString = rawDocument.cookie;
          cookieArray = lastCookieString.split('; ');
          lastCookies = {};
          for (i = 0; i < cookieArray.length; i++) {
            cookie = cookieArray[i];
            index = cookie.indexOf('=');
            if (index > 0) {
              var name = unescape(cookie.substring(0, index));
              if (lastCookies[name] === undefined) {
                lastCookies[name] = unescape(cookie.substring(index + 1));
              }
            }
          }
        }
        return lastCookies;
      }
    };
    self.defer = function (fn, delay) {
      var timeoutId;
      outstandingRequestCount++;
      timeoutId = setTimeout(function () {
        delete pendingDeferIds[timeoutId];
        completeOutstandingRequest(fn);
      }, delay || 0);
      pendingDeferIds[timeoutId] = true;
      return timeoutId;
    };
    self.defer.cancel = function (deferId) {
      if (pendingDeferIds[deferId]) {
        delete pendingDeferIds[deferId];
        clearTimeout(deferId);
        completeOutstandingRequest(noop);
        return true;
      }
      return false;
    };
  }
  function $BrowserProvider() {
    this.$get = [
      '$window',
      '$log',
      '$sniffer',
      '$document',
      function ($window, $log, $sniffer, $document) {
        return new Browser($window, $document, $log, $sniffer);
      }
    ];
  }
  function $CacheFactoryProvider() {
    this.$get = function () {
      var caches = {};
      function cacheFactory(cacheId, options) {
        if (cacheId in caches) {
          throw Error('cacheId ' + cacheId + ' taken');
        }
        var size = 0, stats = extend({}, options, { id: cacheId }), data = {}, capacity = options && options.capacity || Number.MAX_VALUE, lruHash = {}, freshEnd = null, staleEnd = null;
        return caches[cacheId] = {
          put: function (key, value) {
            var lruEntry = lruHash[key] || (lruHash[key] = { key: key });
            refresh(lruEntry);
            if (isUndefined(value))
              return;
            if (!(key in data))
              size++;
            data[key] = value;
            if (size > capacity) {
              this.remove(staleEnd.key);
            }
          },
          get: function (key) {
            var lruEntry = lruHash[key];
            if (!lruEntry)
              return;
            refresh(lruEntry);
            return data[key];
          },
          remove: function (key) {
            var lruEntry = lruHash[key];
            if (!lruEntry)
              return;
            if (lruEntry == freshEnd)
              freshEnd = lruEntry.p;
            if (lruEntry == staleEnd)
              staleEnd = lruEntry.n;
            link(lruEntry.n, lruEntry.p);
            delete lruHash[key];
            delete data[key];
            size--;
          },
          removeAll: function () {
            data = {};
            size = 0;
            lruHash = {};
            freshEnd = staleEnd = null;
          },
          destroy: function () {
            data = null;
            stats = null;
            lruHash = null;
            delete caches[cacheId];
          },
          info: function () {
            return extend({}, stats, { size: size });
          }
        };
        function refresh(entry) {
          if (entry != freshEnd) {
            if (!staleEnd) {
              staleEnd = entry;
            } else if (staleEnd == entry) {
              staleEnd = entry.n;
            }
            link(entry.n, entry.p);
            link(entry, freshEnd);
            freshEnd = entry;
            freshEnd.n = null;
          }
        }
        function link(nextEntry, prevEntry) {
          if (nextEntry != prevEntry) {
            if (nextEntry)
              nextEntry.p = prevEntry;
            if (prevEntry)
              prevEntry.n = nextEntry;
          }
        }
      }
      cacheFactory.info = function () {
        var info = {};
        forEach(caches, function (cache, cacheId) {
          info[cacheId] = cache.info();
        });
        return info;
      };
      cacheFactory.get = function (cacheId) {
        return caches[cacheId];
      };
      return cacheFactory;
    };
  }
  function $TemplateCacheProvider() {
    this.$get = [
      '$cacheFactory',
      function ($cacheFactory) {
        return $cacheFactory('templates');
      }
    ];
  }
  var NON_ASSIGNABLE_MODEL_EXPRESSION = 'Non-assignable model expression: ';
  $CompileProvider.$inject = ['$provide'];
  function $CompileProvider($provide) {
    var hasDirectives = {}, Suffix = 'Directive', COMMENT_DIRECTIVE_REGEXP = /^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/, CLASS_DIRECTIVE_REGEXP = /(([\d\w\-_]+)(?:\:([^;]+))?;?)/, MULTI_ROOT_TEMPLATE_ERROR = 'Template must have exactly one root element. was: ', urlSanitizationWhitelist = /^\s*(https?|ftp|mailto|file):/;
    this.directive = function registerDirective(name, directiveFactory) {
      if (isString(name)) {
        assertArg(directiveFactory, 'directive');
        if (!hasDirectives.hasOwnProperty(name)) {
          hasDirectives[name] = [];
          $provide.factory(name + Suffix, [
            '$injector',
            '$exceptionHandler',
            function ($injector, $exceptionHandler) {
              var directives = [];
              forEach(hasDirectives[name], function (directiveFactory) {
                try {
                  var directive = $injector.invoke(directiveFactory);
                  if (isFunction(directive)) {
                    directive = { compile: valueFn(directive) };
                  } else if (!directive.compile && directive.link) {
                    directive.compile = valueFn(directive.link);
                  }
                  directive.priority = directive.priority || 0;
                  directive.name = directive.name || name;
                  directive.require = directive.require || directive.controller && directive.name;
                  directive.restrict = directive.restrict || 'A';
                  directives.push(directive);
                } catch (e) {
                  $exceptionHandler(e);
                }
              });
              return directives;
            }
          ]);
        }
        hasDirectives[name].push(directiveFactory);
      } else {
        forEach(name, reverseParams(registerDirective));
      }
      return this;
    };
    this.urlSanitizationWhitelist = function (regexp) {
      if (isDefined(regexp)) {
        urlSanitizationWhitelist = regexp;
        return this;
      }
      return urlSanitizationWhitelist;
    };
    this.$get = [
      '$injector',
      '$interpolate',
      '$exceptionHandler',
      '$http',
      '$templateCache',
      '$parse',
      '$controller',
      '$rootScope',
      '$document',
      function ($injector, $interpolate, $exceptionHandler, $http, $templateCache, $parse, $controller, $rootScope, $document) {
        var Attributes = function (element, attr) {
          this.$$element = element;
          this.$attr = attr || {};
        };
        Attributes.prototype = {
          $normalize: directiveNormalize,
          $set: function (key, value, writeAttr, attrName) {
            var booleanKey = getBooleanAttrName(this.$$element[0], key), $$observers = this.$$observers, normalizedVal;
            if (booleanKey) {
              this.$$element.prop(key, value);
              attrName = booleanKey;
            }
            this[key] = value;
            if (attrName) {
              this.$attr[key] = attrName;
            } else {
              attrName = this.$attr[key];
              if (!attrName) {
                this.$attr[key] = attrName = snake_case(key, '-');
              }
            }
            if (nodeName_(this.$$element[0]) === 'A' && key === 'href') {
              urlSanitizationNode.setAttribute('href', value);
              normalizedVal = urlSanitizationNode.href;
              if (!normalizedVal.match(urlSanitizationWhitelist)) {
                this[key] = value = 'unsafe:' + normalizedVal;
              }
            }
            if (writeAttr !== false) {
              if (value === null || value === undefined) {
                this.$$element.removeAttr(attrName);
              } else {
                this.$$element.attr(attrName, value);
              }
            }
            $$observers && forEach($$observers[key], function (fn) {
              try {
                fn(value);
              } catch (e) {
                $exceptionHandler(e);
              }
            });
          },
          $observe: function (key, fn) {
            var attrs = this, $$observers = attrs.$$observers || (attrs.$$observers = {}), listeners = $$observers[key] || ($$observers[key] = []);
            listeners.push(fn);
            $rootScope.$evalAsync(function () {
              if (!listeners.$$inter) {
                fn(attrs[key]);
              }
            });
            return fn;
          }
        };
        var urlSanitizationNode = $document[0].createElement('a'), startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol(), denormalizeTemplate = startSymbol == '{{' || endSymbol == '}}' ? identity : function denormalizeTemplate(template) {
            return template.replace(/\{\{/g, startSymbol).replace(/}}/g, endSymbol);
          };
        return compile;
        function compile($compileNodes, transcludeFn, maxPriority) {
          if (!($compileNodes instanceof jqLite)) {
            $compileNodes = jqLite($compileNodes);
          }
          forEach($compileNodes, function (node, index) {
            if (node.nodeType == 3 && node.nodeValue.match(/\S+/)) {
              $compileNodes[index] = jqLite(node).wrap('<span></span>').parent()[0];
            }
          });
          var compositeLinkFn = compileNodes($compileNodes, transcludeFn, $compileNodes, maxPriority);
          return function publicLinkFn(scope, cloneConnectFn) {
            assertArg(scope, 'scope');
            var $linkNode = cloneConnectFn ? JQLitePrototype.clone.call($compileNodes) : $compileNodes;
            for (var i = 0, ii = $linkNode.length; i < ii; i++) {
              var node = $linkNode[i];
              if (node.nodeType == 1 || node.nodeType == 9) {
                $linkNode.eq(i).data('$scope', scope);
              }
            }
            safeAddClass($linkNode, 'ng-scope');
            if (cloneConnectFn)
              cloneConnectFn($linkNode, scope);
            if (compositeLinkFn)
              compositeLinkFn(scope, $linkNode, $linkNode);
            return $linkNode;
          };
        }
        function wrongMode(localName, mode) {
          throw Error('Unsupported \'' + mode + '\' for \'' + localName + '\'.');
        }
        function safeAddClass($element, className) {
          try {
            $element.addClass(className);
          } catch (e) {
          }
        }
        function compileNodes(nodeList, transcludeFn, $rootElement, maxPriority) {
          var linkFns = [], nodeLinkFn, childLinkFn, directives, attrs, linkFnFound;
          for (var i = 0; i < nodeList.length; i++) {
            attrs = new Attributes();
            directives = collectDirectives(nodeList[i], [], attrs, maxPriority);
            nodeLinkFn = directives.length ? applyDirectivesToNode(directives, nodeList[i], attrs, transcludeFn, $rootElement) : null;
            childLinkFn = nodeLinkFn && nodeLinkFn.terminal || !nodeList[i].childNodes || !nodeList[i].childNodes.length ? null : compileNodes(nodeList[i].childNodes, nodeLinkFn ? nodeLinkFn.transclude : transcludeFn);
            linkFns.push(nodeLinkFn);
            linkFns.push(childLinkFn);
            linkFnFound = linkFnFound || nodeLinkFn || childLinkFn;
          }
          return linkFnFound ? compositeLinkFn : null;
          function compositeLinkFn(scope, nodeList, $rootElement, boundTranscludeFn) {
            var nodeLinkFn, childLinkFn, node, childScope, childTranscludeFn, i, ii, n;
            var stableNodeList = [];
            for (i = 0, ii = nodeList.length; i < ii; i++) {
              stableNodeList.push(nodeList[i]);
            }
            for (i = 0, n = 0, ii = linkFns.length; i < ii; n++) {
              node = stableNodeList[n];
              nodeLinkFn = linkFns[i++];
              childLinkFn = linkFns[i++];
              if (nodeLinkFn) {
                if (nodeLinkFn.scope) {
                  childScope = scope.$new(isObject(nodeLinkFn.scope));
                  jqLite(node).data('$scope', childScope);
                } else {
                  childScope = scope;
                }
                childTranscludeFn = nodeLinkFn.transclude;
                if (childTranscludeFn || !boundTranscludeFn && transcludeFn) {
                  nodeLinkFn(childLinkFn, childScope, node, $rootElement, function (transcludeFn) {
                    return function (cloneFn) {
                      var transcludeScope = scope.$new();
                      transcludeScope.$$transcluded = true;
                      return transcludeFn(transcludeScope, cloneFn).bind('$destroy', bind(transcludeScope, transcludeScope.$destroy));
                    };
                  }(childTranscludeFn || transcludeFn));
                } else {
                  nodeLinkFn(childLinkFn, childScope, node, undefined, boundTranscludeFn);
                }
              } else if (childLinkFn) {
                childLinkFn(scope, node.childNodes, undefined, boundTranscludeFn);
              }
            }
          }
        }
        function collectDirectives(node, directives, attrs, maxPriority) {
          var nodeType = node.nodeType, attrsMap = attrs.$attr, match, className;
          switch (nodeType) {
          case 1:
            addDirective(directives, directiveNormalize(nodeName_(node).toLowerCase()), 'E', maxPriority);
            for (var attr, name, nName, value, nAttrs = node.attributes, j = 0, jj = nAttrs && nAttrs.length; j < jj; j++) {
              attr = nAttrs[j];
              if (attr.specified) {
                name = attr.name;
                nName = directiveNormalize(name.toLowerCase());
                attrsMap[nName] = name;
                attrs[nName] = value = trim(msie && name == 'href' ? decodeURIComponent(node.getAttribute(name, 2)) : attr.value);
                if (getBooleanAttrName(node, nName)) {
                  attrs[nName] = true;
                }
                addAttrInterpolateDirective(node, directives, value, nName);
                addDirective(directives, nName, 'A', maxPriority);
              }
            }
            className = node.className;
            if (isString(className) && className !== '') {
              while (match = CLASS_DIRECTIVE_REGEXP.exec(className)) {
                nName = directiveNormalize(match[2]);
                if (addDirective(directives, nName, 'C', maxPriority)) {
                  attrs[nName] = trim(match[3]);
                }
                className = className.substr(match.index + match[0].length);
              }
            }
            break;
          case 3:
            addTextInterpolateDirective(directives, node.nodeValue);
            break;
          case 8:
            try {
              match = COMMENT_DIRECTIVE_REGEXP.exec(node.nodeValue);
              if (match) {
                nName = directiveNormalize(match[1]);
                if (addDirective(directives, nName, 'M', maxPriority)) {
                  attrs[nName] = trim(match[2]);
                }
              }
            } catch (e) {
            }
            break;
          }
          directives.sort(byPriority);
          return directives;
        }
        function applyDirectivesToNode(directives, compileNode, templateAttrs, transcludeFn, jqCollection) {
          var terminalPriority = -Number.MAX_VALUE, preLinkFns = [], postLinkFns = [], newScopeDirective = null, newIsolateScopeDirective = null, templateDirective = null, $compileNode = templateAttrs.$$element = jqLite(compileNode), directive, directiveName, $template, transcludeDirective, childTranscludeFn = transcludeFn, controllerDirectives, linkFn, directiveValue;
          for (var i = 0, ii = directives.length; i < ii; i++) {
            directive = directives[i];
            $template = undefined;
            if (terminalPriority > directive.priority) {
              break;
            }
            if (directiveValue = directive.scope) {
              assertNoDuplicate('isolated scope', newIsolateScopeDirective, directive, $compileNode);
              if (isObject(directiveValue)) {
                safeAddClass($compileNode, 'ng-isolate-scope');
                newIsolateScopeDirective = directive;
              }
              safeAddClass($compileNode, 'ng-scope');
              newScopeDirective = newScopeDirective || directive;
            }
            directiveName = directive.name;
            if (directiveValue = directive.controller) {
              controllerDirectives = controllerDirectives || {};
              assertNoDuplicate('\'' + directiveName + '\' controller', controllerDirectives[directiveName], directive, $compileNode);
              controllerDirectives[directiveName] = directive;
            }
            if (directiveValue = directive.transclude) {
              assertNoDuplicate('transclusion', transcludeDirective, directive, $compileNode);
              transcludeDirective = directive;
              terminalPriority = directive.priority;
              if (directiveValue == 'element') {
                $template = jqLite(compileNode);
                $compileNode = templateAttrs.$$element = jqLite(document.createComment(' ' + directiveName + ': ' + templateAttrs[directiveName] + ' '));
                compileNode = $compileNode[0];
                replaceWith(jqCollection, jqLite($template[0]), compileNode);
                childTranscludeFn = compile($template, transcludeFn, terminalPriority);
              } else {
                $template = jqLite(JQLiteClone(compileNode)).contents();
                $compileNode.html('');
                childTranscludeFn = compile($template, transcludeFn);
              }
            }
            if (directiveValue = directive.template) {
              assertNoDuplicate('template', templateDirective, directive, $compileNode);
              templateDirective = directive;
              directiveValue = denormalizeTemplate(directiveValue);
              if (directive.replace) {
                $template = jqLite('<div>' + trim(directiveValue) + '</div>').contents();
                compileNode = $template[0];
                if ($template.length != 1 || compileNode.nodeType !== 1) {
                  throw new Error(MULTI_ROOT_TEMPLATE_ERROR + directiveValue);
                }
                replaceWith(jqCollection, $compileNode, compileNode);
                var newTemplateAttrs = { $attr: {} };
                directives = directives.concat(collectDirectives(compileNode, directives.splice(i + 1, directives.length - (i + 1)), newTemplateAttrs));
                mergeTemplateAttributes(templateAttrs, newTemplateAttrs);
                ii = directives.length;
              } else {
                $compileNode.html(directiveValue);
              }
            }
            if (directive.templateUrl) {
              assertNoDuplicate('template', templateDirective, directive, $compileNode);
              templateDirective = directive;
              nodeLinkFn = compileTemplateUrl(directives.splice(i, directives.length - i), nodeLinkFn, $compileNode, templateAttrs, jqCollection, directive.replace, childTranscludeFn);
              ii = directives.length;
            } else if (directive.compile) {
              try {
                linkFn = directive.compile($compileNode, templateAttrs, childTranscludeFn);
                if (isFunction(linkFn)) {
                  addLinkFns(null, linkFn);
                } else if (linkFn) {
                  addLinkFns(linkFn.pre, linkFn.post);
                }
              } catch (e) {
                $exceptionHandler(e, startingTag($compileNode));
              }
            }
            if (directive.terminal) {
              nodeLinkFn.terminal = true;
              terminalPriority = Math.max(terminalPriority, directive.priority);
            }
          }
          nodeLinkFn.scope = newScopeDirective && newScopeDirective.scope;
          nodeLinkFn.transclude = transcludeDirective && childTranscludeFn;
          return nodeLinkFn;
          function addLinkFns(pre, post) {
            if (pre) {
              pre.require = directive.require;
              preLinkFns.push(pre);
            }
            if (post) {
              post.require = directive.require;
              postLinkFns.push(post);
            }
          }
          function getControllers(require, $element) {
            var value, retrievalMethod = 'data', optional = false;
            if (isString(require)) {
              while ((value = require.charAt(0)) == '^' || value == '?') {
                require = require.substr(1);
                if (value == '^') {
                  retrievalMethod = 'inheritedData';
                }
                optional = optional || value == '?';
              }
              value = $element[retrievalMethod]('$' + require + 'Controller');
              if (!value && !optional) {
                throw Error('No controller: ' + require);
              }
              return value;
            } else if (isArray(require)) {
              value = [];
              forEach(require, function (require) {
                value.push(getControllers(require, $element));
              });
            }
            return value;
          }
          function nodeLinkFn(childLinkFn, scope, linkNode, $rootElement, boundTranscludeFn) {
            var attrs, $element, i, ii, linkFn, controller;
            if (compileNode === linkNode) {
              attrs = templateAttrs;
            } else {
              attrs = shallowCopy(templateAttrs, new Attributes(jqLite(linkNode), templateAttrs.$attr));
            }
            $element = attrs.$$element;
            if (newIsolateScopeDirective) {
              var LOCAL_REGEXP = /^\s*([@=&])\s*(\w*)\s*$/;
              var parentScope = scope.$parent || scope;
              forEach(newIsolateScopeDirective.scope, function (definiton, scopeName) {
                var match = definiton.match(LOCAL_REGEXP) || [], attrName = match[2] || scopeName, mode = match[1], lastValue, parentGet, parentSet;
                scope.$$isolateBindings[scopeName] = mode + attrName;
                switch (mode) {
                case '@': {
                    attrs.$observe(attrName, function (value) {
                      scope[scopeName] = value;
                    });
                    attrs.$$observers[attrName].$$scope = parentScope;
                    break;
                  }
                case '=': {
                    parentGet = $parse(attrs[attrName]);
                    parentSet = parentGet.assign || function () {
                      lastValue = scope[scopeName] = parentGet(parentScope);
                      throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + attrs[attrName] + ' (directive: ' + newIsolateScopeDirective.name + ')');
                    };
                    lastValue = scope[scopeName] = parentGet(parentScope);
                    scope.$watch(function parentValueWatch() {
                      var parentValue = parentGet(parentScope);
                      if (parentValue !== scope[scopeName]) {
                        if (parentValue !== lastValue) {
                          lastValue = scope[scopeName] = parentValue;
                        } else {
                          parentSet(parentScope, parentValue = lastValue = scope[scopeName]);
                        }
                      }
                      return parentValue;
                    });
                    break;
                  }
                case '&': {
                    parentGet = $parse(attrs[attrName]);
                    scope[scopeName] = function (locals) {
                      return parentGet(parentScope, locals);
                    };
                    break;
                  }
                default: {
                    throw Error('Invalid isolate scope definition for directive ' + newIsolateScopeDirective.name + ': ' + definiton);
                  }
                }
              });
            }
            if (controllerDirectives) {
              forEach(controllerDirectives, function (directive) {
                var locals = {
                    $scope: scope,
                    $element: $element,
                    $attrs: attrs,
                    $transclude: boundTranscludeFn
                  };
                controller = directive.controller;
                if (controller == '@') {
                  controller = attrs[directive.name];
                }
                $element.data('$' + directive.name + 'Controller', $controller(controller, locals));
              });
            }
            for (i = 0, ii = preLinkFns.length; i < ii; i++) {
              try {
                linkFn = preLinkFns[i];
                linkFn(scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element));
              } catch (e) {
                $exceptionHandler(e, startingTag($element));
              }
            }
            childLinkFn && childLinkFn(scope, linkNode.childNodes, undefined, boundTranscludeFn);
            for (i = 0, ii = postLinkFns.length; i < ii; i++) {
              try {
                linkFn = postLinkFns[i];
                linkFn(scope, $element, attrs, linkFn.require && getControllers(linkFn.require, $element));
              } catch (e) {
                $exceptionHandler(e, startingTag($element));
              }
            }
          }
        }
        function addDirective(tDirectives, name, location, maxPriority) {
          var match = false;
          if (hasDirectives.hasOwnProperty(name)) {
            for (var directive, directives = $injector.get(name + Suffix), i = 0, ii = directives.length; i < ii; i++) {
              try {
                directive = directives[i];
                if ((maxPriority === undefined || maxPriority > directive.priority) && directive.restrict.indexOf(location) != -1) {
                  tDirectives.push(directive);
                  match = true;
                }
              } catch (e) {
                $exceptionHandler(e);
              }
            }
          }
          return match;
        }
        function mergeTemplateAttributes(dst, src) {
          var srcAttr = src.$attr, dstAttr = dst.$attr, $element = dst.$$element;
          forEach(dst, function (value, key) {
            if (key.charAt(0) != '$') {
              if (src[key]) {
                value += (key === 'style' ? ';' : ' ') + src[key];
              }
              dst.$set(key, value, true, srcAttr[key]);
            }
          });
          forEach(src, function (value, key) {
            if (key == 'class') {
              safeAddClass($element, value);
              dst['class'] = (dst['class'] ? dst['class'] + ' ' : '') + value;
            } else if (key == 'style') {
              $element.attr('style', $element.attr('style') + ';' + value);
            } else if (key.charAt(0) != '$' && !dst.hasOwnProperty(key)) {
              dst[key] = value;
              dstAttr[key] = srcAttr[key];
            }
          });
        }
        function compileTemplateUrl(directives, beforeTemplateNodeLinkFn, $compileNode, tAttrs, $rootElement, replace, childTranscludeFn) {
          var linkQueue = [], afterTemplateNodeLinkFn, afterTemplateChildLinkFn, beforeTemplateCompileNode = $compileNode[0], origAsyncDirective = directives.shift(), derivedSyncDirective = extend({}, origAsyncDirective, {
              controller: null,
              templateUrl: null,
              transclude: null,
              scope: null
            });
          $compileNode.html('');
          $http.get(origAsyncDirective.templateUrl, { cache: $templateCache }).success(function (content) {
            var compileNode, tempTemplateAttrs, $template;
            content = denormalizeTemplate(content);
            if (replace) {
              $template = jqLite('<div>' + trim(content) + '</div>').contents();
              compileNode = $template[0];
              if ($template.length != 1 || compileNode.nodeType !== 1) {
                throw new Error(MULTI_ROOT_TEMPLATE_ERROR + content);
              }
              tempTemplateAttrs = { $attr: {} };
              replaceWith($rootElement, $compileNode, compileNode);
              collectDirectives(compileNode, directives, tempTemplateAttrs);
              mergeTemplateAttributes(tAttrs, tempTemplateAttrs);
            } else {
              compileNode = beforeTemplateCompileNode;
              $compileNode.html(content);
            }
            directives.unshift(derivedSyncDirective);
            afterTemplateNodeLinkFn = applyDirectivesToNode(directives, compileNode, tAttrs, childTranscludeFn);
            afterTemplateChildLinkFn = compileNodes($compileNode[0].childNodes, childTranscludeFn);
            while (linkQueue.length) {
              var controller = linkQueue.pop(), linkRootElement = linkQueue.pop(), beforeTemplateLinkNode = linkQueue.pop(), scope = linkQueue.pop(), linkNode = compileNode;
              if (beforeTemplateLinkNode !== beforeTemplateCompileNode) {
                linkNode = JQLiteClone(compileNode);
                replaceWith(linkRootElement, jqLite(beforeTemplateLinkNode), linkNode);
              }
              afterTemplateNodeLinkFn(function () {
                beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, linkNode, $rootElement, controller);
              }, scope, linkNode, $rootElement, controller);
            }
            linkQueue = null;
          }).error(function (response, code, headers, config) {
            throw Error('Failed to load template: ' + config.url);
          });
          return function delayedNodeLinkFn(ignoreChildLinkFn, scope, node, rootElement, controller) {
            if (linkQueue) {
              linkQueue.push(scope);
              linkQueue.push(node);
              linkQueue.push(rootElement);
              linkQueue.push(controller);
            } else {
              afterTemplateNodeLinkFn(function () {
                beforeTemplateNodeLinkFn(afterTemplateChildLinkFn, scope, node, rootElement, controller);
              }, scope, node, rootElement, controller);
            }
          };
        }
        function byPriority(a, b) {
          return b.priority - a.priority;
        }
        function assertNoDuplicate(what, previousDirective, directive, element) {
          if (previousDirective) {
            throw Error('Multiple directives [' + previousDirective.name + ', ' + directive.name + '] asking for ' + what + ' on: ' + startingTag(element));
          }
        }
        function addTextInterpolateDirective(directives, text) {
          var interpolateFn = $interpolate(text, true);
          if (interpolateFn) {
            directives.push({
              priority: 0,
              compile: valueFn(function textInterpolateLinkFn(scope, node) {
                var parent = node.parent(), bindings = parent.data('$binding') || [];
                bindings.push(interpolateFn);
                safeAddClass(parent.data('$binding', bindings), 'ng-binding');
                scope.$watch(interpolateFn, function interpolateFnWatchAction(value) {
                  node[0].nodeValue = value;
                });
              })
            });
          }
        }
        function addAttrInterpolateDirective(node, directives, value, name) {
          var interpolateFn = $interpolate(value, true);
          if (!interpolateFn)
            return;
          directives.push({
            priority: 100,
            compile: valueFn(function attrInterpolateLinkFn(scope, element, attr) {
              var $$observers = attr.$$observers || (attr.$$observers = {});
              if (name === 'class') {
                interpolateFn = $interpolate(attr[name], true);
              }
              attr[name] = undefined;
              ($$observers[name] || ($$observers[name] = [])).$$inter = true;
              (attr.$$observers && attr.$$observers[name].$$scope || scope).$watch(interpolateFn, function interpolateFnWatchAction(value) {
                attr.$set(name, value);
              });
            })
          });
        }
        function replaceWith($rootElement, $element, newNode) {
          var oldNode = $element[0], parent = oldNode.parentNode, i, ii;
          if ($rootElement) {
            for (i = 0, ii = $rootElement.length; i < ii; i++) {
              if ($rootElement[i] == oldNode) {
                $rootElement[i] = newNode;
                break;
              }
            }
          }
          if (parent) {
            parent.replaceChild(newNode, oldNode);
          }
          newNode[jqLite.expando] = oldNode[jqLite.expando];
          $element[0] = newNode;
        }
      }
    ];
  }
  var PREFIX_REGEXP = /^(x[\:\-_]|data[\:\-_])/i;
  function directiveNormalize(name) {
    return camelCase(name.replace(PREFIX_REGEXP, ''));
  }
  function nodesetLinkingFn(scope, nodeList, rootElement, boundTranscludeFn) {
  }
  function directiveLinkingFn(nodesetLinkingFn, scope, node, rootElement, boundTranscludeFn) {
  }
  function $ControllerProvider() {
    var controllers = {};
    this.register = function (name, constructor) {
      if (isObject(name)) {
        extend(controllers, name);
      } else {
        controllers[name] = constructor;
      }
    };
    this.$get = [
      '$injector',
      '$window',
      function ($injector, $window) {
        return function (constructor, locals) {
          if (isString(constructor)) {
            var name = constructor;
            constructor = controllers.hasOwnProperty(name) ? controllers[name] : getter(locals.$scope, name, true) || getter($window, name, true);
            assertArgFn(constructor, name, true);
          }
          return $injector.instantiate(constructor, locals);
        };
      }
    ];
  }
  function $DocumentProvider() {
    this.$get = [
      '$window',
      function (window) {
        return jqLite(window.document);
      }
    ];
  }
  function $ExceptionHandlerProvider() {
    this.$get = [
      '$log',
      function ($log) {
        return function (exception, cause) {
          $log.error.apply($log, arguments);
        };
      }
    ];
  }
  function $InterpolateProvider() {
    var startSymbol = '{{';
    var endSymbol = '}}';
    this.startSymbol = function (value) {
      if (value) {
        startSymbol = value;
        return this;
      } else {
        return startSymbol;
      }
    };
    this.endSymbol = function (value) {
      if (value) {
        endSymbol = value;
        return this;
      } else {
        return endSymbol;
      }
    };
    this.$get = [
      '$parse',
      function ($parse) {
        var startSymbolLength = startSymbol.length, endSymbolLength = endSymbol.length;
        function $interpolate(text, mustHaveExpression) {
          var startIndex, endIndex, index = 0, parts = [], length = text.length, hasInterpolation = false, fn, exp, concat = [];
          while (index < length) {
            if ((startIndex = text.indexOf(startSymbol, index)) != -1 && (endIndex = text.indexOf(endSymbol, startIndex + startSymbolLength)) != -1) {
              index != startIndex && parts.push(text.substring(index, startIndex));
              parts.push(fn = $parse(exp = text.substring(startIndex + startSymbolLength, endIndex)));
              fn.exp = exp;
              index = endIndex + endSymbolLength;
              hasInterpolation = true;
            } else {
              index != length && parts.push(text.substring(index));
              index = length;
            }
          }
          if (!(length = parts.length)) {
            parts.push('');
            length = 1;
          }
          if (!mustHaveExpression || hasInterpolation) {
            concat.length = length;
            fn = function (context) {
              for (var i = 0, ii = length, part; i < ii; i++) {
                if (typeof (part = parts[i]) == 'function') {
                  part = part(context);
                  if (part == null || part == undefined) {
                    part = '';
                  } else if (typeof part != 'string') {
                    part = toJson(part);
                  }
                }
                concat[i] = part;
              }
              return concat.join('');
            };
            fn.exp = text;
            fn.parts = parts;
            return fn;
          }
        }
        $interpolate.startSymbol = function () {
          return startSymbol;
        };
        $interpolate.endSymbol = function () {
          return endSymbol;
        };
        return $interpolate;
      }
    ];
  }
  var URL_MATCH = /^([^:]+):\/\/(\w+:{0,1}\w*@)?(\{?[\w\.-]*\}?)(:([0-9]+))?(\/[^\?#]*)?(\?([^#]*))?(#(.*))?$/, PATH_MATCH = /^([^\?#]*)?(\?([^#]*))?(#(.*))?$/, HASH_MATCH = PATH_MATCH, DEFAULT_PORTS = {
      'http': 80,
      'https': 443,
      'ftp': 21
    };
  function encodePath(path) {
    var segments = path.split('/'), i = segments.length;
    while (i--) {
      segments[i] = encodeUriSegment(segments[i]);
    }
    return segments.join('/');
  }
  function stripHash(url) {
    return url.split('#')[0];
  }
  function matchUrl(url, obj) {
    var match = URL_MATCH.exec(url);
    match = {
      protocol: match[1],
      host: match[3],
      port: int(match[5]) || DEFAULT_PORTS[match[1]] || null,
      path: match[6] || '/',
      search: match[8],
      hash: match[10]
    };
    if (obj) {
      obj.$$protocol = match.protocol;
      obj.$$host = match.host;
      obj.$$port = match.port;
    }
    return match;
  }
  function composeProtocolHostPort(protocol, host, port) {
    return protocol + '://' + host + (port == DEFAULT_PORTS[protocol] ? '' : ':' + port);
  }
  function pathPrefixFromBase(basePath) {
    return basePath.substr(0, basePath.lastIndexOf('/'));
  }
  function convertToHtml5Url(url, basePath, hashPrefix) {
    var match = matchUrl(url);
    if (decodeURIComponent(match.path) != basePath || isUndefined(match.hash) || match.hash.indexOf(hashPrefix) !== 0) {
      return url;
    } else {
      return composeProtocolHostPort(match.protocol, match.host, match.port) + pathPrefixFromBase(basePath) + match.hash.substr(hashPrefix.length);
    }
  }
  function convertToHashbangUrl(url, basePath, hashPrefix) {
    var match = matchUrl(url);
    if (decodeURIComponent(match.path) == basePath && !isUndefined(match.hash) && match.hash.indexOf(hashPrefix) === 0) {
      return url;
    } else {
      var search = match.search && '?' + match.search || '', hash = match.hash && '#' + match.hash || '', pathPrefix = pathPrefixFromBase(basePath), path = match.path.substr(pathPrefix.length);
      if (match.path.indexOf(pathPrefix) !== 0) {
        throw Error('Invalid url "' + url + '", missing path prefix "' + pathPrefix + '" !');
      }
      return composeProtocolHostPort(match.protocol, match.host, match.port) + basePath + '#' + hashPrefix + path + search + hash;
    }
  }
  function LocationUrl(url, pathPrefix, appBaseUrl) {
    pathPrefix = pathPrefix || '';
    this.$$parse = function (newAbsoluteUrl) {
      var match = matchUrl(newAbsoluteUrl, this);
      if (match.path.indexOf(pathPrefix) !== 0) {
        throw Error('Invalid url "' + newAbsoluteUrl + '", missing path prefix "' + pathPrefix + '" !');
      }
      this.$$path = decodeURIComponent(match.path.substr(pathPrefix.length));
      this.$$search = parseKeyValue(match.search);
      this.$$hash = match.hash && decodeURIComponent(match.hash) || '';
      this.$$compose();
    };
    this.$$compose = function () {
      var search = toKeyValue(this.$$search), hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
      this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
      this.$$absUrl = composeProtocolHostPort(this.$$protocol, this.$$host, this.$$port) + pathPrefix + this.$$url;
    };
    this.$$rewriteAppUrl = function (absoluteLinkUrl) {
      if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
        return absoluteLinkUrl;
      }
    };
    this.$$parse(url);
  }
  function LocationHashbangUrl(url, hashPrefix, appBaseUrl) {
    var basePath;
    this.$$parse = function (url) {
      var match = matchUrl(url, this);
      if (match.hash && match.hash.indexOf(hashPrefix) !== 0) {
        throw Error('Invalid url "' + url + '", missing hash prefix "' + hashPrefix + '" !');
      }
      basePath = match.path + (match.search ? '?' + match.search : '');
      match = HASH_MATCH.exec((match.hash || '').substr(hashPrefix.length));
      if (match[1]) {
        this.$$path = (match[1].charAt(0) == '/' ? '' : '/') + decodeURIComponent(match[1]);
      } else {
        this.$$path = '';
      }
      this.$$search = parseKeyValue(match[3]);
      this.$$hash = match[5] && decodeURIComponent(match[5]) || '';
      this.$$compose();
    };
    this.$$compose = function () {
      var search = toKeyValue(this.$$search), hash = this.$$hash ? '#' + encodeUriSegment(this.$$hash) : '';
      this.$$url = encodePath(this.$$path) + (search ? '?' + search : '') + hash;
      this.$$absUrl = composeProtocolHostPort(this.$$protocol, this.$$host, this.$$port) + basePath + (this.$$url ? '#' + hashPrefix + this.$$url : '');
    };
    this.$$rewriteAppUrl = function (absoluteLinkUrl) {
      if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
        return absoluteLinkUrl;
      }
    };
    this.$$parse(url);
  }
  LocationUrl.prototype = {
    $$replace: false,
    absUrl: locationGetter('$$absUrl'),
    url: function (url, replace) {
      if (isUndefined(url))
        return this.$$url;
      var match = PATH_MATCH.exec(url);
      if (match[1])
        this.path(decodeURIComponent(match[1]));
      if (match[2] || match[1])
        this.search(match[3] || '');
      this.hash(match[5] || '', replace);
      return this;
    },
    protocol: locationGetter('$$protocol'),
    host: locationGetter('$$host'),
    port: locationGetter('$$port'),
    path: locationGetterSetter('$$path', function (path) {
      return path.charAt(0) == '/' ? path : '/' + path;
    }),
    search: function (search, paramValue) {
      if (isUndefined(search))
        return this.$$search;
      if (isDefined(paramValue)) {
        if (paramValue === null) {
          delete this.$$search[search];
        } else {
          this.$$search[search] = paramValue;
        }
      } else {
        this.$$search = isString(search) ? parseKeyValue(search) : search;
      }
      this.$$compose();
      return this;
    },
    hash: locationGetterSetter('$$hash', identity),
    replace: function () {
      this.$$replace = true;
      return this;
    }
  };
  LocationHashbangUrl.prototype = inherit(LocationUrl.prototype);
  function LocationHashbangInHtml5Url(url, hashPrefix, appBaseUrl, baseExtra) {
    LocationHashbangUrl.apply(this, arguments);
    this.$$rewriteAppUrl = function (absoluteLinkUrl) {
      if (absoluteLinkUrl.indexOf(appBaseUrl) == 0) {
        return appBaseUrl + baseExtra + '#' + hashPrefix + absoluteLinkUrl.substr(appBaseUrl.length);
      }
    };
  }
  LocationHashbangInHtml5Url.prototype = inherit(LocationHashbangUrl.prototype);
  function locationGetter(property) {
    return function () {
      return this[property];
    };
  }
  function locationGetterSetter(property, preprocess) {
    return function (value) {
      if (isUndefined(value))
        return this[property];
      this[property] = preprocess(value);
      this.$$compose();
      return this;
    };
  }
  function $LocationProvider() {
    var hashPrefix = '', html5Mode = false;
    this.hashPrefix = function (prefix) {
      if (isDefined(prefix)) {
        hashPrefix = prefix;
        return this;
      } else {
        return hashPrefix;
      }
    };
    this.html5Mode = function (mode) {
      if (isDefined(mode)) {
        html5Mode = mode;
        return this;
      } else {
        return html5Mode;
      }
    };
    this.$get = [
      '$rootScope',
      '$browser',
      '$sniffer',
      '$rootElement',
      function ($rootScope, $browser, $sniffer, $rootElement) {
        var $location, basePath, pathPrefix, initUrl = $browser.url(), initUrlParts = matchUrl(initUrl), appBaseUrl;
        if (html5Mode) {
          basePath = $browser.baseHref() || '/';
          pathPrefix = pathPrefixFromBase(basePath);
          appBaseUrl = composeProtocolHostPort(initUrlParts.protocol, initUrlParts.host, initUrlParts.port) + pathPrefix + '/';
          if ($sniffer.history) {
            $location = new LocationUrl(convertToHtml5Url(initUrl, basePath, hashPrefix), pathPrefix, appBaseUrl);
          } else {
            $location = new LocationHashbangInHtml5Url(convertToHashbangUrl(initUrl, basePath, hashPrefix), hashPrefix, appBaseUrl, basePath.substr(pathPrefix.length + 1));
          }
        } else {
          appBaseUrl = composeProtocolHostPort(initUrlParts.protocol, initUrlParts.host, initUrlParts.port) + (initUrlParts.path || '') + (initUrlParts.search ? '?' + initUrlParts.search : '') + '#' + hashPrefix + '/';
          $location = new LocationHashbangUrl(initUrl, hashPrefix, appBaseUrl);
        }
        $rootElement.bind('click', function (event) {
          if (event.ctrlKey || event.metaKey || event.which == 2)
            return;
          var elm = jqLite(event.target);
          while (lowercase(elm[0].nodeName) !== 'a') {
            if (elm[0] === $rootElement[0] || !(elm = elm.parent())[0])
              return;
          }
          var absHref = elm.prop('href'), rewrittenUrl = $location.$$rewriteAppUrl(absHref);
          if (absHref && !elm.attr('target') && rewrittenUrl) {
            $location.$$parse(rewrittenUrl);
            $rootScope.$apply();
            event.preventDefault();
            window.angular['ff-684208-preventDefault'] = true;
          }
        });
        if ($location.absUrl() != initUrl) {
          $browser.url($location.absUrl(), true);
        }
        $browser.onUrlChange(function (newUrl) {
          if ($location.absUrl() != newUrl) {
            if ($rootScope.$broadcast('$locationChangeStart', newUrl, $location.absUrl()).defaultPrevented) {
              $browser.url($location.absUrl());
              return;
            }
            $rootScope.$evalAsync(function () {
              var oldUrl = $location.absUrl();
              $location.$$parse(newUrl);
              afterLocationChange(oldUrl);
            });
            if (!$rootScope.$$phase)
              $rootScope.$digest();
          }
        });
        var changeCounter = 0;
        $rootScope.$watch(function $locationWatch() {
          var oldUrl = $browser.url();
          var currentReplace = $location.$$replace;
          if (!changeCounter || oldUrl != $location.absUrl()) {
            changeCounter++;
            $rootScope.$evalAsync(function () {
              if ($rootScope.$broadcast('$locationChangeStart', $location.absUrl(), oldUrl).defaultPrevented) {
                $location.$$parse(oldUrl);
              } else {
                $browser.url($location.absUrl(), currentReplace);
                afterLocationChange(oldUrl);
              }
            });
          }
          $location.$$replace = false;
          return changeCounter;
        });
        return $location;
        function afterLocationChange(oldUrl) {
          $rootScope.$broadcast('$locationChangeSuccess', $location.absUrl(), oldUrl);
        }
      }
    ];
  }
  function $LogProvider() {
    this.$get = [
      '$window',
      function ($window) {
        return {
          log: consoleLog('log'),
          warn: consoleLog('warn'),
          info: consoleLog('info'),
          error: consoleLog('error')
        };
        function formatError(arg) {
          if (arg instanceof Error) {
            if (arg.stack) {
              arg = arg.message && arg.stack.indexOf(arg.message) === -1 ? 'Error: ' + arg.message + '\n' + arg.stack : arg.stack;
            } else if (arg.sourceURL) {
              arg = arg.message + '\n' + arg.sourceURL + ':' + arg.line;
            }
          }
          return arg;
        }
        function consoleLog(type) {
          var console = $window.console || {}, logFn = console[type] || console.log || noop;
          if (logFn.apply) {
            return function () {
              var args = [];
              forEach(arguments, function (arg) {
                args.push(formatError(arg));
              });
              return logFn.apply(console, args);
            };
          }
          return function (arg1, arg2) {
            logFn(arg1, arg2);
          };
        }
      }
    ];
  }
  var OPERATORS = {
      'null': function () {
        return null;
      },
      'true': function () {
        return true;
      },
      'false': function () {
        return false;
      },
      undefined: noop,
      '+': function (self, locals, a, b) {
        a = a(self, locals);
        b = b(self, locals);
        if (isDefined(a)) {
          if (isDefined(b)) {
            return a + b;
          }
          return a;
        }
        return isDefined(b) ? b : undefined;
      },
      '-': function (self, locals, a, b) {
        a = a(self, locals);
        b = b(self, locals);
        return (isDefined(a) ? a : 0) - (isDefined(b) ? b : 0);
      },
      '*': function (self, locals, a, b) {
        return a(self, locals) * b(self, locals);
      },
      '/': function (self, locals, a, b) {
        return a(self, locals) / b(self, locals);
      },
      '%': function (self, locals, a, b) {
        return a(self, locals) % b(self, locals);
      },
      '^': function (self, locals, a, b) {
        return a(self, locals) ^ b(self, locals);
      },
      '=': noop,
      '==': function (self, locals, a, b) {
        return a(self, locals) == b(self, locals);
      },
      '!=': function (self, locals, a, b) {
        return a(self, locals) != b(self, locals);
      },
      '<': function (self, locals, a, b) {
        return a(self, locals) < b(self, locals);
      },
      '>': function (self, locals, a, b) {
        return a(self, locals) > b(self, locals);
      },
      '<=': function (self, locals, a, b) {
        return a(self, locals) <= b(self, locals);
      },
      '>=': function (self, locals, a, b) {
        return a(self, locals) >= b(self, locals);
      },
      '&&': function (self, locals, a, b) {
        return a(self, locals) && b(self, locals);
      },
      '||': function (self, locals, a, b) {
        return a(self, locals) || b(self, locals);
      },
      '&': function (self, locals, a, b) {
        return a(self, locals) & b(self, locals);
      },
      '|': function (self, locals, a, b) {
        return b(self, locals)(self, locals, a(self, locals));
      },
      '!': function (self, locals, a) {
        return !a(self, locals);
      }
    };
  var ESCAPE = {
      'n': '\n',
      'f': '\f',
      'r': '\r',
      't': '\t',
      'v': '\x0B',
      '\'': '\'',
      '"': '"'
    };
  function lex(text, csp) {
    var tokens = [], token, index = 0, json = [], ch, lastCh = ':';
    while (index < text.length) {
      ch = text.charAt(index);
      if (is('"\'')) {
        readString(ch);
      } else if (isNumber(ch) || is('.') && isNumber(peek())) {
        readNumber();
      } else if (isIdent(ch)) {
        readIdent();
        if (was('{,') && json[0] == '{' && (token = tokens[tokens.length - 1])) {
          token.json = token.text.indexOf('.') == -1;
        }
      } else if (is('(){}[].,;:')) {
        tokens.push({
          index: index,
          text: ch,
          json: was(':[,') && is('{[') || is('}]:,')
        });
        if (is('{['))
          json.unshift(ch);
        if (is('}]'))
          json.shift();
        index++;
      } else if (isWhitespace(ch)) {
        index++;
        continue;
      } else {
        var ch2 = ch + peek(), fn = OPERATORS[ch], fn2 = OPERATORS[ch2];
        if (fn2) {
          tokens.push({
            index: index,
            text: ch2,
            fn: fn2
          });
          index += 2;
        } else if (fn) {
          tokens.push({
            index: index,
            text: ch,
            fn: fn,
            json: was('[,:') && is('+-')
          });
          index += 1;
        } else {
          throwError('Unexpected next character ', index, index + 1);
        }
      }
      lastCh = ch;
    }
    return tokens;
    function is(chars) {
      return chars.indexOf(ch) != -1;
    }
    function was(chars) {
      return chars.indexOf(lastCh) != -1;
    }
    function peek() {
      return index + 1 < text.length ? text.charAt(index + 1) : false;
    }
    function isNumber(ch) {
      return '0' <= ch && ch <= '9';
    }
    function isWhitespace(ch) {
      return ch == ' ' || ch == '\r' || ch == '\t' || ch == '\n' || ch == '\x0B' || ch == '\xa0';
    }
    function isIdent(ch) {
      return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' == ch || ch == '$';
    }
    function isExpOperator(ch) {
      return ch == '-' || ch == '+' || isNumber(ch);
    }
    function throwError(error, start, end) {
      end = end || index;
      throw Error('Lexer Error: ' + error + ' at column' + (isDefined(start) ? 's ' + start + '-' + index + ' [' + text.substring(start, end) + ']' : ' ' + end) + ' in expression [' + text + '].');
    }
    function readNumber() {
      var number = '';
      var start = index;
      while (index < text.length) {
        var ch = lowercase(text.charAt(index));
        if (ch == '.' || isNumber(ch)) {
          number += ch;
        } else {
          var peekCh = peek();
          if (ch == 'e' && isExpOperator(peekCh)) {
            number += ch;
          } else if (isExpOperator(ch) && peekCh && isNumber(peekCh) && number.charAt(number.length - 1) == 'e') {
            number += ch;
          } else if (isExpOperator(ch) && (!peekCh || !isNumber(peekCh)) && number.charAt(number.length - 1) == 'e') {
            throwError('Invalid exponent');
          } else {
            break;
          }
        }
        index++;
      }
      number = 1 * number;
      tokens.push({
        index: start,
        text: number,
        json: true,
        fn: function () {
          return number;
        }
      });
    }
    function readIdent() {
      var ident = '', start = index, lastDot, peekIndex, methodName, ch;
      while (index < text.length) {
        ch = text.charAt(index);
        if (ch == '.' || isIdent(ch) || isNumber(ch)) {
          if (ch == '.')
            lastDot = index;
          ident += ch;
        } else {
          break;
        }
        index++;
      }
      if (lastDot) {
        peekIndex = index;
        while (peekIndex < text.length) {
          ch = text.charAt(peekIndex);
          if (ch == '(') {
            methodName = ident.substr(lastDot - start + 1);
            ident = ident.substr(0, lastDot - start);
            index = peekIndex;
            break;
          }
          if (isWhitespace(ch)) {
            peekIndex++;
          } else {
            break;
          }
        }
      }
      var token = {
          index: start,
          text: ident
        };
      if (OPERATORS.hasOwnProperty(ident)) {
        token.fn = token.json = OPERATORS[ident];
      } else {
        var getter = getterFn(ident, csp);
        token.fn = extend(function (self, locals) {
          return getter(self, locals);
        }, {
          assign: function (self, value) {
            return setter(self, ident, value);
          }
        });
      }
      tokens.push(token);
      if (methodName) {
        tokens.push({
          index: lastDot,
          text: '.',
          json: false
        });
        tokens.push({
          index: lastDot + 1,
          text: methodName,
          json: false
        });
      }
    }
    function readString(quote) {
      var start = index;
      index++;
      var string = '';
      var rawString = quote;
      var escape = false;
      while (index < text.length) {
        var ch = text.charAt(index);
        rawString += ch;
        if (escape) {
          if (ch == 'u') {
            var hex = text.substring(index + 1, index + 5);
            if (!hex.match(/[\da-f]{4}/i))
              throwError('Invalid unicode escape [\\u' + hex + ']');
            index += 4;
            string += String.fromCharCode(parseInt(hex, 16));
          } else {
            var rep = ESCAPE[ch];
            if (rep) {
              string += rep;
            } else {
              string += ch;
            }
          }
          escape = false;
        } else if (ch == '\\') {
          escape = true;
        } else if (ch == quote) {
          index++;
          tokens.push({
            index: start,
            text: rawString,
            string: string,
            json: true,
            fn: function () {
              return string;
            }
          });
          return;
        } else {
          string += ch;
        }
        index++;
      }
      throwError('Unterminated quote', start);
    }
  }
  function parser(text, json, $filter, csp) {
    var ZERO = valueFn(0), value, tokens = lex(text, csp), assignment = _assignment, functionCall = _functionCall, fieldAccess = _fieldAccess, objectIndex = _objectIndex, filterChain = _filterChain;
    if (json) {
      assignment = logicalOR;
      functionCall = fieldAccess = objectIndex = filterChain = function () {
        throwError('is not valid json', {
          text: text,
          index: 0
        });
      };
      value = primary();
    } else {
      value = statements();
    }
    if (tokens.length !== 0) {
      throwError('is an unexpected token', tokens[0]);
    }
    return value;
    function throwError(msg, token) {
      throw Error('Syntax Error: Token \'' + token.text + '\' ' + msg + ' at column ' + (token.index + 1) + ' of the expression [' + text + '] starting at [' + text.substring(token.index) + '].');
    }
    function peekToken() {
      if (tokens.length === 0)
        throw Error('Unexpected end of expression: ' + text);
      return tokens[0];
    }
    function peek(e1, e2, e3, e4) {
      if (tokens.length > 0) {
        var token = tokens[0];
        var t = token.text;
        if (t == e1 || t == e2 || t == e3 || t == e4 || !e1 && !e2 && !e3 && !e4) {
          return token;
        }
      }
      return false;
    }
    function expect(e1, e2, e3, e4) {
      var token = peek(e1, e2, e3, e4);
      if (token) {
        if (json && !token.json) {
          throwError('is not valid json', token);
        }
        tokens.shift();
        return token;
      }
      return false;
    }
    function consume(e1) {
      if (!expect(e1)) {
        throwError('is unexpected, expecting [' + e1 + ']', peek());
      }
    }
    function unaryFn(fn, right) {
      return function (self, locals) {
        return fn(self, locals, right);
      };
    }
    function binaryFn(left, fn, right) {
      return function (self, locals) {
        return fn(self, locals, left, right);
      };
    }
    function statements() {
      var statements = [];
      while (true) {
        if (tokens.length > 0 && !peek('}', ')', ';', ']'))
          statements.push(filterChain());
        if (!expect(';')) {
          return statements.length == 1 ? statements[0] : function (self, locals) {
            var value;
            for (var i = 0; i < statements.length; i++) {
              var statement = statements[i];
              if (statement)
                value = statement(self, locals);
            }
            return value;
          };
        }
      }
    }
    function _filterChain() {
      var left = expression();
      var token;
      while (true) {
        if (token = expect('|')) {
          left = binaryFn(left, token.fn, filter());
        } else {
          return left;
        }
      }
    }
    function filter() {
      var token = expect();
      var fn = $filter(token.text);
      var argsFn = [];
      while (true) {
        if (token = expect(':')) {
          argsFn.push(expression());
        } else {
          var fnInvoke = function (self, locals, input) {
            var args = [input];
            for (var i = 0; i < argsFn.length; i++) {
              args.push(argsFn[i](self, locals));
            }
            return fn.apply(self, args);
          };
          return function () {
            return fnInvoke;
          };
        }
      }
    }
    function expression() {
      return assignment();
    }
    function _assignment() {
      var left = logicalOR();
      var right;
      var token;
      if (token = expect('=')) {
        if (!left.assign) {
          throwError('implies assignment but [' + text.substring(0, token.index) + '] can not be assigned to', token);
        }
        right = logicalOR();
        return function (scope, locals) {
          return left.assign(scope, right(scope, locals), locals);
        };
      } else {
        return left;
      }
    }
    function logicalOR() {
      var left = logicalAND();
      var token;
      while (true) {
        if (token = expect('||')) {
          left = binaryFn(left, token.fn, logicalAND());
        } else {
          return left;
        }
      }
    }
    function logicalAND() {
      var left = equality();
      var token;
      if (token = expect('&&')) {
        left = binaryFn(left, token.fn, logicalAND());
      }
      return left;
    }
    function equality() {
      var left = relational();
      var token;
      if (token = expect('==', '!=')) {
        left = binaryFn(left, token.fn, equality());
      }
      return left;
    }
    function relational() {
      var left = additive();
      var token;
      if (token = expect('<', '>', '<=', '>=')) {
        left = binaryFn(left, token.fn, relational());
      }
      return left;
    }
    function additive() {
      var left = multiplicative();
      var token;
      while (token = expect('+', '-')) {
        left = binaryFn(left, token.fn, multiplicative());
      }
      return left;
    }
    function multiplicative() {
      var left = unary();
      var token;
      while (token = expect('*', '/', '%')) {
        left = binaryFn(left, token.fn, unary());
      }
      return left;
    }
    function unary() {
      var token;
      if (expect('+')) {
        return primary();
      } else if (token = expect('-')) {
        return binaryFn(ZERO, token.fn, unary());
      } else if (token = expect('!')) {
        return unaryFn(token.fn, unary());
      } else {
        return primary();
      }
    }
    function primary() {
      var primary;
      if (expect('(')) {
        primary = filterChain();
        consume(')');
      } else if (expect('[')) {
        primary = arrayDeclaration();
      } else if (expect('{')) {
        primary = object();
      } else {
        var token = expect();
        primary = token.fn;
        if (!primary) {
          throwError('not a primary expression', token);
        }
      }
      var next, context;
      while (next = expect('(', '[', '.')) {
        if (next.text === '(') {
          primary = functionCall(primary, context);
          context = null;
        } else if (next.text === '[') {
          context = primary;
          primary = objectIndex(primary);
        } else if (next.text === '.') {
          context = primary;
          primary = fieldAccess(primary);
        } else {
          throwError('IMPOSSIBLE');
        }
      }
      return primary;
    }
    function _fieldAccess(object) {
      var field = expect().text;
      var getter = getterFn(field, csp);
      return extend(function (scope, locals, self) {
        return getter(self || object(scope, locals), locals);
      }, {
        assign: function (scope, value, locals) {
          return setter(object(scope, locals), field, value);
        }
      });
    }
    function _objectIndex(obj) {
      var indexFn = expression();
      consume(']');
      return extend(function (self, locals) {
        var o = obj(self, locals), i = indexFn(self, locals), v, p;
        if (!o)
          return undefined;
        v = o[i];
        if (v && v.then) {
          p = v;
          if (!('$$v' in v)) {
            p.$$v = undefined;
            p.then(function (val) {
              p.$$v = val;
            });
          }
          v = v.$$v;
        }
        return v;
      }, {
        assign: function (self, value, locals) {
          return obj(self, locals)[indexFn(self, locals)] = value;
        }
      });
    }
    function _functionCall(fn, contextGetter) {
      var argsFn = [];
      if (peekToken().text != ')') {
        do {
          argsFn.push(expression());
        } while (expect(','));
      }
      consume(')');
      return function (scope, locals) {
        var args = [], context = contextGetter ? contextGetter(scope, locals) : scope;
        for (var i = 0; i < argsFn.length; i++) {
          args.push(argsFn[i](scope, locals));
        }
        var fnPtr = fn(scope, locals, context) || noop;
        return fnPtr.apply ? fnPtr.apply(context, args) : fnPtr(args[0], args[1], args[2], args[3], args[4]);
      };
    }
    function arrayDeclaration() {
      var elementFns = [];
      if (peekToken().text != ']') {
        do {
          elementFns.push(expression());
        } while (expect(','));
      }
      consume(']');
      return function (self, locals) {
        var array = [];
        for (var i = 0; i < elementFns.length; i++) {
          array.push(elementFns[i](self, locals));
        }
        return array;
      };
    }
    function object() {
      var keyValues = [];
      if (peekToken().text != '}') {
        do {
          var token = expect(), key = token.string || token.text;
          consume(':');
          var value = expression();
          keyValues.push({
            key: key,
            value: value
          });
        } while (expect(','));
      }
      consume('}');
      return function (self, locals) {
        var object = {};
        for (var i = 0; i < keyValues.length; i++) {
          var keyValue = keyValues[i];
          object[keyValue.key] = keyValue.value(self, locals);
        }
        return object;
      };
    }
  }
  function setter(obj, path, setValue) {
    var element = path.split('.');
    for (var i = 0; element.length > 1; i++) {
      var key = element.shift();
      var propertyObj = obj[key];
      if (!propertyObj) {
        propertyObj = {};
        obj[key] = propertyObj;
      }
      obj = propertyObj;
    }
    obj[element.shift()] = setValue;
    return setValue;
  }
  function getter(obj, path, bindFnToScope) {
    if (!path)
      return obj;
    var keys = path.split('.');
    var key;
    var lastInstance = obj;
    var len = keys.length;
    for (var i = 0; i < len; i++) {
      key = keys[i];
      if (obj) {
        obj = (lastInstance = obj)[key];
      }
    }
    if (!bindFnToScope && isFunction(obj)) {
      return bind(lastInstance, obj);
    }
    return obj;
  }
  var getterFnCache = {};
  function cspSafeGetterFn(key0, key1, key2, key3, key4) {
    return function (scope, locals) {
      var pathVal = locals && locals.hasOwnProperty(key0) ? locals : scope, promise;
      if (pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key0];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key1 || pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key1];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key2 || pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key2];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key3 || pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key3];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      if (!key4 || pathVal === null || pathVal === undefined)
        return pathVal;
      pathVal = pathVal[key4];
      if (pathVal && pathVal.then) {
        if (!('$$v' in pathVal)) {
          promise = pathVal;
          promise.$$v = undefined;
          promise.then(function (val) {
            promise.$$v = val;
          });
        }
        pathVal = pathVal.$$v;
      }
      return pathVal;
    };
  }
  function getterFn(path, csp) {
    if (getterFnCache.hasOwnProperty(path)) {
      return getterFnCache[path];
    }
    var pathKeys = path.split('.'), pathKeysLength = pathKeys.length, fn;
    if (csp) {
      fn = pathKeysLength < 6 ? cspSafeGetterFn(pathKeys[0], pathKeys[1], pathKeys[2], pathKeys[3], pathKeys[4]) : function (scope, locals) {
        var i = 0, val;
        do {
          val = cspSafeGetterFn(pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++], pathKeys[i++])(scope, locals);
          locals = undefined;
          scope = val;
        } while (i < pathKeysLength);
        return val;
      };
    } else {
      var code = 'var l, fn, p;\n';
      forEach(pathKeys, function (key, index) {
        code += 'if(s === null || s === undefined) return s;\n' + 'l=s;\n' + 's=' + (index ? 's' : '((k&&k.hasOwnProperty("' + key + '"))?k:s)') + '["' + key + '"]' + ';\n' + 'if (s && s.then) {\n' + ' if (!("$$v" in s)) {\n' + ' p=s;\n' + ' p.$$v = undefined;\n' + ' p.then(function(v) {p.$$v=v;});\n' + '}\n' + ' s=s.$$v\n' + '}\n';
      });
      code += 'return s;';
      fn = Function('s', 'k', code);
      fn.toString = function () {
        return code;
      };
    }
    return getterFnCache[path] = fn;
  }
  function $ParseProvider() {
    var cache = {};
    this.$get = [
      '$filter',
      '$sniffer',
      function ($filter, $sniffer) {
        return function (exp) {
          switch (typeof exp) {
          case 'string':
            return cache.hasOwnProperty(exp) ? cache[exp] : cache[exp] = parser(exp, false, $filter, $sniffer.csp);
          case 'function':
            return exp;
          default:
            return noop;
          }
        };
      }
    ];
  }
  function $QProvider() {
    this.$get = [
      '$rootScope',
      '$exceptionHandler',
      function ($rootScope, $exceptionHandler) {
        return qFactory(function (callback) {
          $rootScope.$evalAsync(callback);
        }, $exceptionHandler);
      }
    ];
  }
  function qFactory(nextTick, exceptionHandler) {
    var defer = function () {
      var pending = [], value, deferred;
      deferred = {
        resolve: function (val) {
          if (pending) {
            var callbacks = pending;
            pending = undefined;
            value = ref(val);
            if (callbacks.length) {
              nextTick(function () {
                var callback;
                for (var i = 0, ii = callbacks.length; i < ii; i++) {
                  callback = callbacks[i];
                  value.then(callback[0], callback[1]);
                }
              });
            }
          }
        },
        reject: function (reason) {
          deferred.resolve(reject(reason));
        },
        promise: {
          then: function (callback, errback) {
            var result = defer();
            var wrappedCallback = function (value) {
              try {
                result.resolve((callback || defaultCallback)(value));
              } catch (e) {
                exceptionHandler(e);
                result.reject(e);
              }
            };
            var wrappedErrback = function (reason) {
              try {
                result.resolve((errback || defaultErrback)(reason));
              } catch (e) {
                exceptionHandler(e);
                result.reject(e);
              }
            };
            if (pending) {
              pending.push([
                wrappedCallback,
                wrappedErrback
              ]);
            } else {
              value.then(wrappedCallback, wrappedErrback);
            }
            return result.promise;
          }
        }
      };
      return deferred;
    };
    var ref = function (value) {
      if (value && value.then)
        return value;
      return {
        then: function (callback) {
          var result = defer();
          nextTick(function () {
            result.resolve(callback(value));
          });
          return result.promise;
        }
      };
    };
    var reject = function (reason) {
      return {
        then: function (callback, errback) {
          var result = defer();
          nextTick(function () {
            result.resolve((errback || defaultErrback)(reason));
          });
          return result.promise;
        }
      };
    };
    var when = function (value, callback, errback) {
      var result = defer(), done;
      var wrappedCallback = function (value) {
        try {
          return (callback || defaultCallback)(value);
        } catch (e) {
          exceptionHandler(e);
          return reject(e);
        }
      };
      var wrappedErrback = function (reason) {
        try {
          return (errback || defaultErrback)(reason);
        } catch (e) {
          exceptionHandler(e);
          return reject(e);
        }
      };
      nextTick(function () {
        ref(value).then(function (value) {
          if (done)
            return;
          done = true;
          result.resolve(ref(value).then(wrappedCallback, wrappedErrback));
        }, function (reason) {
          if (done)
            return;
          done = true;
          result.resolve(wrappedErrback(reason));
        });
      });
      return result.promise;
    };
    function defaultCallback(value) {
      return value;
    }
    function defaultErrback(reason) {
      return reject(reason);
    }
    function all(promises) {
      var deferred = defer(), counter = promises.length, results = [];
      if (counter) {
        forEach(promises, function (promise, index) {
          ref(promise).then(function (value) {
            if (index in results)
              return;
            results[index] = value;
            if (!--counter)
              deferred.resolve(results);
          }, function (reason) {
            if (index in results)
              return;
            deferred.reject(reason);
          });
        });
      } else {
        deferred.resolve(results);
      }
      return deferred.promise;
    }
    return {
      defer: defer,
      reject: reject,
      when: when,
      all: all
    };
  }
  function $RouteProvider() {
    var routes = {};
    this.when = function (path, route) {
      routes[path] = extend({ reloadOnSearch: true }, route);
      if (path) {
        var redirectPath = path[path.length - 1] == '/' ? path.substr(0, path.length - 1) : path + '/';
        routes[redirectPath] = { redirectTo: path };
      }
      return this;
    };
    this.otherwise = function (params) {
      this.when(null, params);
      return this;
    };
    this.$get = [
      '$rootScope',
      '$location',
      '$routeParams',
      '$q',
      '$injector',
      '$http',
      '$templateCache',
      function ($rootScope, $location, $routeParams, $q, $injector, $http, $templateCache) {
        var forceReload = false, $route = {
            routes: routes,
            reload: function () {
              forceReload = true;
              $rootScope.$evalAsync(updateRoute);
            }
          };
        $rootScope.$on('$locationChangeSuccess', updateRoute);
        return $route;
        function switchRouteMatcher(on, when) {
          when = '^' + when.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + '$';
          var regex = '', params = [], dst = {};
          var re = /:(\w+)/g, paramMatch, lastMatchedIndex = 0;
          while ((paramMatch = re.exec(when)) !== null) {
            regex += when.slice(lastMatchedIndex, paramMatch.index);
            regex += '([^\\/]*)';
            params.push(paramMatch[1]);
            lastMatchedIndex = re.lastIndex;
          }
          regex += when.substr(lastMatchedIndex);
          var match = on.match(new RegExp(regex));
          if (match) {
            forEach(params, function (name, index) {
              dst[name] = match[index + 1];
            });
          }
          return match ? dst : null;
        }
        function updateRoute() {
          var next = parseRoute(), last = $route.current;
          if (next && last && next.$$route === last.$$route && equals(next.pathParams, last.pathParams) && !next.reloadOnSearch && !forceReload) {
            last.params = next.params;
            copy(last.params, $routeParams);
            $rootScope.$broadcast('$routeUpdate', last);
          } else if (next || last) {
            forceReload = false;
            $rootScope.$broadcast('$routeChangeStart', next, last);
            $route.current = next;
            if (next) {
              if (next.redirectTo) {
                if (isString(next.redirectTo)) {
                  $location.path(interpolate(next.redirectTo, next.params)).search(next.params).replace();
                } else {
                  $location.url(next.redirectTo(next.pathParams, $location.path(), $location.search())).replace();
                }
              }
            }
            $q.when(next).then(function () {
              if (next) {
                var keys = [], values = [], template;
                forEach(next.resolve || {}, function (value, key) {
                  keys.push(key);
                  values.push(isString(value) ? $injector.get(value) : $injector.invoke(value));
                });
                if (isDefined(template = next.template)) {
                } else if (isDefined(template = next.templateUrl)) {
                  template = $http.get(template, { cache: $templateCache }).then(function (response) {
                    return response.data;
                  });
                }
                if (isDefined(template)) {
                  keys.push('$template');
                  values.push(template);
                }
                return $q.all(values).then(function (values) {
                  var locals = {};
                  forEach(values, function (value, index) {
                    locals[keys[index]] = value;
                  });
                  return locals;
                });
              }
            }).then(function (locals) {
              if (next == $route.current) {
                if (next) {
                  next.locals = locals;
                  copy(next.params, $routeParams);
                }
                $rootScope.$broadcast('$routeChangeSuccess', next, last);
              }
            }, function (error) {
              if (next == $route.current) {
                $rootScope.$broadcast('$routeChangeError', next, last, error);
              }
            });
          }
        }
        function parseRoute() {
          var params, match;
          forEach(routes, function (route, path) {
            if (!match && (params = switchRouteMatcher($location.path(), path))) {
              match = inherit(route, {
                params: extend({}, $location.search(), params),
                pathParams: params
              });
              match.$$route = route;
            }
          });
          return match || routes[null] && inherit(routes[null], {
            params: {},
            pathParams: {}
          });
        }
        function interpolate(string, params) {
          var result = [];
          forEach((string || '').split(':'), function (segment, i) {
            if (i == 0) {
              result.push(segment);
            } else {
              var segmentMatch = segment.match(/(\w+)(.*)/);
              var key = segmentMatch[1];
              result.push(params[key]);
              result.push(segmentMatch[2] || '');
              delete params[key];
            }
          });
          return result.join('');
        }
      }
    ];
  }
  function $RouteParamsProvider() {
    this.$get = valueFn({});
  }
  function $RootScopeProvider() {
    var TTL = 10;
    this.digestTtl = function (value) {
      if (arguments.length) {
        TTL = value;
      }
      return TTL;
    };
    this.$get = [
      '$injector',
      '$exceptionHandler',
      '$parse',
      function ($injector, $exceptionHandler, $parse) {
        function Scope() {
          this.$id = nextUid();
          this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          this['this'] = this.$root = this;
          this.$$destroyed = false;
          this.$$asyncQueue = [];
          this.$$listeners = {};
          this.$$isolateBindings = {};
        }
        Scope.prototype = {
          $new: function (isolate) {
            var Child, child;
            if (isFunction(isolate)) {
              throw Error('API-CHANGE: Use $controller to instantiate controllers.');
            }
            if (isolate) {
              child = new Scope();
              child.$root = this.$root;
            } else {
              Child = function () {
              };
              Child.prototype = this;
              child = new Child();
              child.$id = nextUid();
            }
            child['this'] = child;
            child.$$listeners = {};
            child.$parent = this;
            child.$$asyncQueue = [];
            child.$$watchers = child.$$nextSibling = child.$$childHead = child.$$childTail = null;
            child.$$prevSibling = this.$$childTail;
            if (this.$$childHead) {
              this.$$childTail.$$nextSibling = child;
              this.$$childTail = child;
            } else {
              this.$$childHead = this.$$childTail = child;
            }
            return child;
          },
          $watch: function (watchExp, listener, objectEquality) {
            var scope = this, get = compileToFn(watchExp, 'watch'), array = scope.$$watchers, watcher = {
                fn: listener,
                last: initWatchVal,
                get: get,
                exp: watchExp,
                eq: !!objectEquality
              };
            if (!isFunction(listener)) {
              var listenFn = compileToFn(listener || noop, 'listener');
              watcher.fn = function (newVal, oldVal, scope) {
                listenFn(scope);
              };
            }
            if (!array) {
              array = scope.$$watchers = [];
            }
            array.unshift(watcher);
            return function () {
              arrayRemove(array, watcher);
            };
          },
          $digest: function () {
            var watch, value, last, watchers, asyncQueue, length, dirty, ttl = TTL, next, current, target = this, watchLog = [], logIdx, logMsg;
            beginPhase('$digest');
            do {
              dirty = false;
              current = target;
              do {
                asyncQueue = current.$$asyncQueue;
                while (asyncQueue.length) {
                  try {
                    current.$eval(asyncQueue.shift());
                  } catch (e) {
                    $exceptionHandler(e);
                  }
                }
                if (watchers = current.$$watchers) {
                  length = watchers.length;
                  while (length--) {
                    try {
                      watch = watchers[length];
                      if ((value = watch.get(current)) !== (last = watch.last) && !(watch.eq ? equals(value, last) : typeof value == 'number' && typeof last == 'number' && isNaN(value) && isNaN(last))) {
                        dirty = true;
                        watch.last = watch.eq ? copy(value) : value;
                        watch.fn(value, last === initWatchVal ? value : last, current);
                        if (ttl < 5) {
                          logIdx = 4 - ttl;
                          if (!watchLog[logIdx])
                            watchLog[logIdx] = [];
                          logMsg = isFunction(watch.exp) ? 'fn: ' + (watch.exp.name || watch.exp.toString()) : watch.exp;
                          logMsg += '; newVal: ' + toJson(value) + '; oldVal: ' + toJson(last);
                          watchLog[logIdx].push(logMsg);
                        }
                      }
                    } catch (e) {
                      $exceptionHandler(e);
                    }
                  }
                }
                if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) {
                  while (current !== target && !(next = current.$$nextSibling)) {
                    current = current.$parent;
                  }
                }
              } while (current = next);
              if (dirty && !ttl--) {
                clearPhase();
                throw Error(TTL + ' $digest() iterations reached. Aborting!\n' + 'Watchers fired in the last 5 iterations: ' + toJson(watchLog));
              }
            } while (dirty || asyncQueue.length);
            clearPhase();
          },
          $destroy: function () {
            if ($rootScope == this || this.$$destroyed)
              return;
            var parent = this.$parent;
            this.$broadcast('$destroy');
            this.$$destroyed = true;
            if (parent.$$childHead == this)
              parent.$$childHead = this.$$nextSibling;
            if (parent.$$childTail == this)
              parent.$$childTail = this.$$prevSibling;
            if (this.$$prevSibling)
              this.$$prevSibling.$$nextSibling = this.$$nextSibling;
            if (this.$$nextSibling)
              this.$$nextSibling.$$prevSibling = this.$$prevSibling;
            this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
          },
          $eval: function (expr, locals) {
            return $parse(expr)(this, locals);
          },
          $evalAsync: function (expr) {
            this.$$asyncQueue.push(expr);
          },
          $apply: function (expr) {
            try {
              beginPhase('$apply');
              return this.$eval(expr);
            } catch (e) {
              $exceptionHandler(e);
            } finally {
              clearPhase();
              try {
                $rootScope.$digest();
              } catch (e) {
                $exceptionHandler(e);
                throw e;
              }
            }
          },
          $on: function (name, listener) {
            var namedListeners = this.$$listeners[name];
            if (!namedListeners) {
              this.$$listeners[name] = namedListeners = [];
            }
            namedListeners.push(listener);
            return function () {
              namedListeners[indexOf(namedListeners, listener)] = null;
            };
          },
          $emit: function (name, args) {
            var empty = [], namedListeners, scope = this, stopPropagation = false, event = {
                name: name,
                targetScope: scope,
                stopPropagation: function () {
                  stopPropagation = true;
                },
                preventDefault: function () {
                  event.defaultPrevented = true;
                },
                defaultPrevented: false
              }, listenerArgs = concat([event], arguments, 1), i, length;
            do {
              namedListeners = scope.$$listeners[name] || empty;
              event.currentScope = scope;
              for (i = 0, length = namedListeners.length; i < length; i++) {
                if (!namedListeners[i]) {
                  namedListeners.splice(i, 1);
                  i--;
                  length--;
                  continue;
                }
                try {
                  namedListeners[i].apply(null, listenerArgs);
                  if (stopPropagation)
                    return event;
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
              scope = scope.$parent;
            } while (scope);
            return event;
          },
          $broadcast: function (name, args) {
            var target = this, current = target, next = target, event = {
                name: name,
                targetScope: target,
                preventDefault: function () {
                  event.defaultPrevented = true;
                },
                defaultPrevented: false
              }, listenerArgs = concat([event], arguments, 1), listeners, i, length;
            do {
              current = next;
              event.currentScope = current;
              listeners = current.$$listeners[name] || [];
              for (i = 0, length = listeners.length; i < length; i++) {
                if (!listeners[i]) {
                  listeners.splice(i, 1);
                  i--;
                  length--;
                  continue;
                }
                try {
                  listeners[i].apply(null, listenerArgs);
                } catch (e) {
                  $exceptionHandler(e);
                }
              }
              if (!(next = current.$$childHead || current !== target && current.$$nextSibling)) {
                while (current !== target && !(next = current.$$nextSibling)) {
                  current = current.$parent;
                }
              }
            } while (current = next);
            return event;
          }
        };
        var $rootScope = new Scope();
        return $rootScope;
        function beginPhase(phase) {
          if ($rootScope.$$phase) {
            throw Error($rootScope.$$phase + ' already in progress');
          }
          $rootScope.$$phase = phase;
        }
        function clearPhase() {
          $rootScope.$$phase = null;
        }
        function compileToFn(exp, name) {
          var fn = $parse(exp);
          assertArgFn(fn, name);
          return fn;
        }
        function initWatchVal() {
        }
      }
    ];
  }
  function $SnifferProvider() {
    this.$get = [
      '$window',
      function ($window) {
        var eventSupport = {}, android = int((/android (\d+)/.exec(lowercase($window.navigator.userAgent)) || [])[1]);
        return {
          history: !!($window.history && $window.history.pushState && !(android < 4)),
          hashchange: 'onhashchange' in $window && (!$window.document.documentMode || $window.document.documentMode > 7),
          hasEvent: function (event) {
            if (event == 'input' && msie == 9)
              return false;
            if (isUndefined(eventSupport[event])) {
              var divElm = $window.document.createElement('div');
              eventSupport[event] = 'on' + event in divElm;
            }
            return eventSupport[event];
          },
          csp: false
        };
      }
    ];
  }
  function $WindowProvider() {
    this.$get = valueFn(window);
  }
  function parseHeaders(headers) {
    var parsed = {}, key, val, i;
    if (!headers)
      return parsed;
    forEach(headers.split('\n'), function (line) {
      i = line.indexOf(':');
      key = lowercase(trim(line.substr(0, i)));
      val = trim(line.substr(i + 1));
      if (key) {
        if (parsed[key]) {
          parsed[key] += ', ' + val;
        } else {
          parsed[key] = val;
        }
      }
    });
    return parsed;
  }
  function headersGetter(headers) {
    var headersObj = isObject(headers) ? headers : undefined;
    return function (name) {
      if (!headersObj)
        headersObj = parseHeaders(headers);
      if (name) {
        return headersObj[lowercase(name)] || null;
      }
      return headersObj;
    };
  }
  function transformData(data, headers, fns) {
    if (isFunction(fns))
      return fns(data, headers);
    forEach(fns, function (fn) {
      data = fn(data, headers);
    });
    return data;
  }
  function isSuccess(status) {
    return 200 <= status && status < 300;
  }
  function $HttpProvider() {
    var JSON_START = /^\s*(\[|\{[^\{])/, JSON_END = /[\}\]]\s*$/, PROTECTION_PREFIX = /^\)\]\}',?\n/;
    var $config = this.defaults = {
        transformResponse: [function (data) {
            if (isString(data)) {
              data = data.replace(PROTECTION_PREFIX, '');
              if (JSON_START.test(data) && JSON_END.test(data))
                data = fromJson(data, true);
            }
            return data;
          }],
        transformRequest: [function (d) {
            return isObject(d) && !isFile(d) ? toJson(d) : d;
          }],
        headers: {
          common: {
            'Accept': 'application/json, text/plain, */*',
            'X-Requested-With': 'XMLHttpRequest'
          },
          post: { 'Content-Type': 'application/json;charset=utf-8' },
          put: { 'Content-Type': 'application/json;charset=utf-8' }
        }
      };
    var providerResponseInterceptors = this.responseInterceptors = [];
    this.$get = [
      '$httpBackend',
      '$browser',
      '$cacheFactory',
      '$rootScope',
      '$q',
      '$injector',
      function ($httpBackend, $browser, $cacheFactory, $rootScope, $q, $injector) {
        var defaultCache = $cacheFactory('$http'), responseInterceptors = [];
        forEach(providerResponseInterceptors, function (interceptor) {
          responseInterceptors.push(isString(interceptor) ? $injector.get(interceptor) : $injector.invoke(interceptor));
        });
        function $http(config) {
          config.method = uppercase(config.method);
          var reqTransformFn = config.transformRequest || $config.transformRequest, respTransformFn = config.transformResponse || $config.transformResponse, defHeaders = $config.headers, reqHeaders = extend({ 'X-XSRF-TOKEN': $browser.cookies()['XSRF-TOKEN'] }, defHeaders.common, defHeaders[lowercase(config.method)], config.headers), reqData = transformData(config.data, headersGetter(reqHeaders), reqTransformFn), promise;
          if (isUndefined(config.data)) {
            delete reqHeaders['Content-Type'];
          }
          promise = sendReq(config, reqData, reqHeaders);
          promise = promise.then(transformResponse, transformResponse);
          forEach(responseInterceptors, function (interceptor) {
            promise = interceptor(promise);
          });
          promise.success = function (fn) {
            promise.then(function (response) {
              fn(response.data, response.status, response.headers, config);
            });
            return promise;
          };
          promise.error = function (fn) {
            promise.then(null, function (response) {
              fn(response.data, response.status, response.headers, config);
            });
            return promise;
          };
          return promise;
          function transformResponse(response) {
            var resp = extend({}, response, { data: transformData(response.data, response.headers, respTransformFn) });
            return isSuccess(response.status) ? resp : $q.reject(resp);
          }
        }
        $http.pendingRequests = [];
        createShortMethods('get', 'delete', 'head', 'jsonp');
        createShortMethodsWithData('post', 'put');
        $http.defaults = $config;
        return $http;
        function createShortMethods(names) {
          forEach(arguments, function (name) {
            $http[name] = function (url, config) {
              return $http(extend(config || {}, {
                method: name,
                url: url
              }));
            };
          });
        }
        function createShortMethodsWithData(name) {
          forEach(arguments, function (name) {
            $http[name] = function (url, data, config) {
              return $http(extend(config || {}, {
                method: name,
                url: url,
                data: data
              }));
            };
          });
        }
        function sendReq(config, reqData, reqHeaders) {
          var deferred = $q.defer(), promise = deferred.promise, cache, cachedResp, url = buildUrl(config.url, config.params);
          $http.pendingRequests.push(config);
          promise.then(removePendingReq, removePendingReq);
          if (config.cache && config.method == 'GET') {
            cache = isObject(config.cache) ? config.cache : defaultCache;
          }
          if (cache) {
            cachedResp = cache.get(url);
            if (cachedResp) {
              if (cachedResp.then) {
                cachedResp.then(removePendingReq, removePendingReq);
                return cachedResp;
              } else {
                if (isArray(cachedResp)) {
                  resolvePromise(cachedResp[1], cachedResp[0], copy(cachedResp[2]));
                } else {
                  resolvePromise(cachedResp, 200, {});
                }
              }
            } else {
              cache.put(url, promise);
            }
          }
          if (!cachedResp) {
            $httpBackend(config.method, url, reqData, done, reqHeaders, config.timeout, config.withCredentials);
          }
          return promise;
          function done(status, response, headersString) {
            if (cache) {
              if (isSuccess(status)) {
                cache.put(url, [
                  status,
                  response,
                  parseHeaders(headersString)
                ]);
              } else {
                cache.remove(url);
              }
            }
            resolvePromise(response, status, headersString);
            $rootScope.$apply();
          }
          function resolvePromise(response, status, headers) {
            status = Math.max(status, 0);
            (isSuccess(status) ? deferred.resolve : deferred.reject)({
              data: response,
              status: status,
              headers: headersGetter(headers),
              config: config
            });
          }
          function removePendingReq() {
            var idx = indexOf($http.pendingRequests, config);
            if (idx !== -1)
              $http.pendingRequests.splice(idx, 1);
          }
        }
        function buildUrl(url, params) {
          if (!params)
            return url;
          var parts = [];
          forEachSorted(params, function (value, key) {
            if (value == null || value == undefined)
              return;
            if (isObject(value)) {
              value = toJson(value);
            }
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
          });
          return url + (url.indexOf('?') == -1 ? '?' : '&') + parts.join('&');
        }
      }
    ];
  }
  var XHR = window.XMLHttpRequest || function () {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      } catch (e1) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      } catch (e2) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      } catch (e3) {
      }
      throw new Error('This browser does not support XMLHttpRequest.');
    };
  function $HttpBackendProvider() {
    this.$get = [
      '$browser',
      '$window',
      '$document',
      function ($browser, $window, $document) {
        return createHttpBackend($browser, XHR, $browser.defer, $window.angular.callbacks, $document[0], $window.location.protocol.replace(':', ''));
      }
    ];
  }
  function createHttpBackend($browser, XHR, $browserDefer, callbacks, rawDocument, locationProtocol) {
    return function (method, url, post, callback, headers, timeout, withCredentials) {
      $browser.$$incOutstandingRequestCount();
      url = url || $browser.url();
      if (lowercase(method) == 'jsonp') {
        var callbackId = '_' + (callbacks.counter++).toString(36);
        callbacks[callbackId] = function (data) {
          callbacks[callbackId].data = data;
        };
        jsonpReq(url.replace('JSON_CALLBACK', 'angular.callbacks.' + callbackId), function () {
          if (callbacks[callbackId].data) {
            completeRequest(callback, 200, callbacks[callbackId].data);
          } else {
            completeRequest(callback, -2);
          }
          delete callbacks[callbackId];
        });
      } else {
        var xhr = new XHR();
        xhr.open(method, url, true);
        forEach(headers, function (value, key) {
          if (value)
            xhr.setRequestHeader(key, value);
        });
        var status;
        xhr.onreadystatechange = function () {
          if (xhr.readyState == 4) {
            var responseHeaders = xhr.getAllResponseHeaders();
            var value, simpleHeaders = [
                'Cache-Control',
                'Content-Language',
                'Content-Type',
                'Expires',
                'Last-Modified',
                'Pragma'
              ];
            if (!responseHeaders) {
              responseHeaders = '';
              forEach(simpleHeaders, function (header) {
                var value = xhr.getResponseHeader(header);
                if (value) {
                  responseHeaders += header + ': ' + value + '\n';
                }
              });
            }
            completeRequest(callback, status || xhr.status, xhr.responseText, responseHeaders);
          }
        };
        if (withCredentials) {
          xhr.withCredentials = true;
        }
        xhr.send(post || '');
        if (timeout > 0) {
          $browserDefer(function () {
            status = -1;
            xhr.abort();
          }, timeout);
        }
      }
      function completeRequest(callback, status, response, headersString) {
        var protocol = (url.match(URL_MATCH) || [
            '',
            locationProtocol
          ])[1];
        status = protocol == 'file' ? response ? 200 : 404 : status;
        status = status == 1223 ? 204 : status;
        callback(status, response, headersString);
        $browser.$$completeOutstandingRequest(noop);
      }
    };
    function jsonpReq(url, done) {
      var script = rawDocument.createElement('script'), doneWrapper = function () {
          rawDocument.body.removeChild(script);
          if (done)
            done();
        };
      script.type = 'text/javascript';
      script.src = url;
      if (msie) {
        script.onreadystatechange = function () {
          if (/loaded|complete/.test(script.readyState))
            doneWrapper();
        };
      } else {
        script.onload = script.onerror = doneWrapper;
      }
      rawDocument.body.appendChild(script);
    }
  }
  function $LocaleProvider() {
    this.$get = function () {
      return {
        id: 'en-us',
        NUMBER_FORMATS: {
          DECIMAL_SEP: '.',
          GROUP_SEP: ',',
          PATTERNS: [
            {
              minInt: 1,
              minFrac: 0,
              maxFrac: 3,
              posPre: '',
              posSuf: '',
              negPre: '-',
              negSuf: '',
              gSize: 3,
              lgSize: 3
            },
            {
              minInt: 1,
              minFrac: 2,
              maxFrac: 2,
              posPre: '\xa4',
              posSuf: '',
              negPre: '(\xa4',
              negSuf: ')',
              gSize: 3,
              lgSize: 3
            }
          ],
          CURRENCY_SYM: '$'
        },
        DATETIME_FORMATS: {
          MONTH: 'January,February,March,April,May,June,July,August,September,October,November,December'.split(','),
          SHORTMONTH: 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec'.split(','),
          DAY: 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday'.split(','),
          SHORTDAY: 'Sun,Mon,Tue,Wed,Thu,Fri,Sat'.split(','),
          AMPMS: [
            'AM',
            'PM'
          ],
          medium: 'MMM d, y h:mm:ss a',
          short: 'M/d/yy h:mm a',
          fullDate: 'EEEE, MMMM d, y',
          longDate: 'MMMM d, y',
          mediumDate: 'MMM d, y',
          shortDate: 'M/d/yy',
          mediumTime: 'h:mm:ss a',
          shortTime: 'h:mm a'
        },
        pluralCat: function (num) {
          if (num === 1) {
            return 'one';
          }
          return 'other';
        }
      };
    };
  }
  function $TimeoutProvider() {
    this.$get = [
      '$rootScope',
      '$browser',
      '$q',
      '$exceptionHandler',
      function ($rootScope, $browser, $q, $exceptionHandler) {
        var deferreds = {};
        function timeout(fn, delay, invokeApply) {
          var deferred = $q.defer(), promise = deferred.promise, skipApply = isDefined(invokeApply) && !invokeApply, timeoutId, cleanup;
          timeoutId = $browser.defer(function () {
            try {
              deferred.resolve(fn());
            } catch (e) {
              deferred.reject(e);
              $exceptionHandler(e);
            }
            if (!skipApply)
              $rootScope.$apply();
          }, delay);
          cleanup = function () {
            delete deferreds[promise.$$timeoutId];
          };
          promise.$$timeoutId = timeoutId;
          deferreds[timeoutId] = deferred;
          promise.then(cleanup, cleanup);
          return promise;
        }
        timeout.cancel = function (promise) {
          if (promise && promise.$$timeoutId in deferreds) {
            deferreds[promise.$$timeoutId].reject('canceled');
            return $browser.defer.cancel(promise.$$timeoutId);
          }
          return false;
        };
        return timeout;
      }
    ];
  }
  $FilterProvider.$inject = ['$provide'];
  function $FilterProvider($provide) {
    var suffix = 'Filter';
    function register(name, factory) {
      return $provide.factory(name + suffix, factory);
    }
    this.register = register;
    this.$get = [
      '$injector',
      function ($injector) {
        return function (name) {
          return $injector.get(name + suffix);
        };
      }
    ];
    register('currency', currencyFilter);
    register('date', dateFilter);
    register('filter', filterFilter);
    register('json', jsonFilter);
    register('limitTo', limitToFilter);
    register('lowercase', lowercaseFilter);
    register('number', numberFilter);
    register('orderBy', orderByFilter);
    register('uppercase', uppercaseFilter);
  }
  function filterFilter() {
    return function (array, expression) {
      if (!isArray(array))
        return array;
      var predicates = [];
      predicates.check = function (value) {
        for (var j = 0; j < predicates.length; j++) {
          if (!predicates[j](value)) {
            return false;
          }
        }
        return true;
      };
      var search = function (obj, text) {
        if (text.charAt(0) === '!') {
          return !search(obj, text.substr(1));
        }
        switch (typeof obj) {
        case 'boolean':
        case 'number':
        case 'string':
          return ('' + obj).toLowerCase().indexOf(text) > -1;
        case 'object':
          for (var objKey in obj) {
            if (objKey.charAt(0) !== '$' && search(obj[objKey], text)) {
              return true;
            }
          }
          return false;
        case 'array':
          for (var i = 0; i < obj.length; i++) {
            if (search(obj[i], text)) {
              return true;
            }
          }
          return false;
        default:
          return false;
        }
      };
      switch (typeof expression) {
      case 'boolean':
      case 'number':
      case 'string':
        expression = { $: expression };
      case 'object':
        for (var key in expression) {
          if (key == '$') {
            (function () {
              var text = ('' + expression[key]).toLowerCase();
              if (!text)
                return;
              predicates.push(function (value) {
                return search(value, text);
              });
            }());
          } else {
            (function () {
              var path = key;
              var text = ('' + expression[key]).toLowerCase();
              if (!text)
                return;
              predicates.push(function (value) {
                return search(getter(value, path), text);
              });
            }());
          }
        }
        break;
      case 'function':
        predicates.push(expression);
        break;
      default:
        return array;
      }
      var filtered = [];
      for (var j = 0; j < array.length; j++) {
        var value = array[j];
        if (predicates.check(value)) {
          filtered.push(value);
        }
      }
      return filtered;
    };
  }
  currencyFilter.$inject = ['$locale'];
  function currencyFilter($locale) {
    var formats = $locale.NUMBER_FORMATS;
    return function (amount, currencySymbol) {
      if (isUndefined(currencySymbol))
        currencySymbol = formats.CURRENCY_SYM;
      return formatNumber(amount, formats.PATTERNS[1], formats.GROUP_SEP, formats.DECIMAL_SEP, 2).replace(/\u00A4/g, currencySymbol);
    };
  }
  numberFilter.$inject = ['$locale'];
  function numberFilter($locale) {
    var formats = $locale.NUMBER_FORMATS;
    return function (number, fractionSize) {
      return formatNumber(number, formats.PATTERNS[0], formats.GROUP_SEP, formats.DECIMAL_SEP, fractionSize);
    };
  }
  var DECIMAL_SEP = '.';
  function formatNumber(number, pattern, groupSep, decimalSep, fractionSize) {
    if (isNaN(number) || !isFinite(number))
      return '';
    var isNegative = number < 0;
    number = Math.abs(number);
    var numStr = number + '', formatedText = '', parts = [];
    var hasExponent = false;
    if (numStr.indexOf('e') !== -1) {
      var match = numStr.match(/([\d\.]+)e(-?)(\d+)/);
      if (match && match[2] == '-' && match[3] > fractionSize + 1) {
        numStr = '0';
      } else {
        formatedText = numStr;
        hasExponent = true;
      }
    }
    if (!hasExponent) {
      var fractionLen = (numStr.split(DECIMAL_SEP)[1] || '').length;
      if (isUndefined(fractionSize)) {
        fractionSize = Math.min(Math.max(pattern.minFrac, fractionLen), pattern.maxFrac);
      }
      var pow = Math.pow(10, fractionSize);
      number = Math.round(number * pow) / pow;
      var fraction = ('' + number).split(DECIMAL_SEP);
      var whole = fraction[0];
      fraction = fraction[1] || '';
      var pos = 0, lgroup = pattern.lgSize, group = pattern.gSize;
      if (whole.length >= lgroup + group) {
        pos = whole.length - lgroup;
        for (var i = 0; i < pos; i++) {
          if ((pos - i) % group === 0 && i !== 0) {
            formatedText += groupSep;
          }
          formatedText += whole.charAt(i);
        }
      }
      for (i = pos; i < whole.length; i++) {
        if ((whole.length - i) % lgroup === 0 && i !== 0) {
          formatedText += groupSep;
        }
        formatedText += whole.charAt(i);
      }
      while (fraction.length < fractionSize) {
        fraction += '0';
      }
      if (fractionSize && fractionSize !== '0')
        formatedText += decimalSep + fraction.substr(0, fractionSize);
    }
    parts.push(isNegative ? pattern.negPre : pattern.posPre);
    parts.push(formatedText);
    parts.push(isNegative ? pattern.negSuf : pattern.posSuf);
    return parts.join('');
  }
  function padNumber(num, digits, trim) {
    var neg = '';
    if (num < 0) {
      neg = '-';
      num = -num;
    }
    num = '' + num;
    while (num.length < digits)
      num = '0' + num;
    if (trim)
      num = num.substr(num.length - digits);
    return neg + num;
  }
  function dateGetter(name, size, offset, trim) {
    offset = offset || 0;
    return function (date) {
      var value = date['get' + name]();
      if (offset > 0 || value > -offset)
        value += offset;
      if (value === 0 && offset == -12)
        value = 12;
      return padNumber(value, size, trim);
    };
  }
  function dateStrGetter(name, shortForm) {
    return function (date, formats) {
      var value = date['get' + name]();
      var get = uppercase(shortForm ? 'SHORT' + name : name);
      return formats[get][value];
    };
  }
  function timeZoneGetter(date) {
    var zone = -1 * date.getTimezoneOffset();
    var paddedZone = zone >= 0 ? '+' : '';
    paddedZone += padNumber(Math[zone > 0 ? 'floor' : 'ceil'](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2);
    return paddedZone;
  }
  function ampmGetter(date, formats) {
    return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1];
  }
  var DATE_FORMATS = {
      yyyy: dateGetter('FullYear', 4),
      yy: dateGetter('FullYear', 2, 0, true),
      y: dateGetter('FullYear', 1),
      MMMM: dateStrGetter('Month'),
      MMM: dateStrGetter('Month', true),
      MM: dateGetter('Month', 2, 1),
      M: dateGetter('Month', 1, 1),
      dd: dateGetter('Date', 2),
      d: dateGetter('Date', 1),
      HH: dateGetter('Hours', 2),
      H: dateGetter('Hours', 1),
      hh: dateGetter('Hours', 2, -12),
      h: dateGetter('Hours', 1, -12),
      mm: dateGetter('Minutes', 2),
      m: dateGetter('Minutes', 1),
      ss: dateGetter('Seconds', 2),
      s: dateGetter('Seconds', 1),
      EEEE: dateStrGetter('Day'),
      EEE: dateStrGetter('Day', true),
      a: ampmGetter,
      Z: timeZoneGetter
    };
  var DATE_FORMATS_SPLIT = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, NUMBER_STRING = /^\d+$/;
  dateFilter.$inject = ['$locale'];
  function dateFilter($locale) {
    var R_ISO8601_STR = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
    function jsonStringToDate(string) {
      var match;
      if (match = string.match(R_ISO8601_STR)) {
        var date = new Date(0), tzHour = 0, tzMin = 0;
        if (match[9]) {
          tzHour = int(match[9] + match[10]);
          tzMin = int(match[9] + match[11]);
        }
        date.setUTCFullYear(int(match[1]), int(match[2]) - 1, int(match[3]));
        date.setUTCHours(int(match[4] || 0) - tzHour, int(match[5] || 0) - tzMin, int(match[6] || 0), int(match[7] || 0));
        return date;
      }
      return string;
    }
    return function (date, format) {
      var text = '', parts = [], fn, match;
      format = format || 'mediumDate';
      format = $locale.DATETIME_FORMATS[format] || format;
      if (isString(date)) {
        if (NUMBER_STRING.test(date)) {
          date = int(date);
        } else {
          date = jsonStringToDate(date);
        }
      }
      if (isNumber(date)) {
        date = new Date(date);
      }
      if (!isDate(date)) {
        return date;
      }
      while (format) {
        match = DATE_FORMATS_SPLIT.exec(format);
        if (match) {
          parts = concat(parts, match, 1);
          format = parts.pop();
        } else {
          parts.push(format);
          format = null;
        }
      }
      forEach(parts, function (value) {
        fn = DATE_FORMATS[value];
        text += fn ? fn(date, $locale.DATETIME_FORMATS) : value.replace(/(^'|'$)/g, '').replace(/''/g, '\'');
      });
      return text;
    };
  }
  function jsonFilter() {
    return function (object) {
      return toJson(object, true);
    };
  }
  var lowercaseFilter = valueFn(lowercase);
  var uppercaseFilter = valueFn(uppercase);
  function limitToFilter() {
    return function (array, limit) {
      if (!(array instanceof Array))
        return array;
      limit = int(limit);
      var out = [], i, n;
      if (!array || !(array instanceof Array))
        return out;
      if (limit > array.length)
        limit = array.length;
      else if (limit < -array.length)
        limit = -array.length;
      if (limit > 0) {
        i = 0;
        n = limit;
      } else {
        i = array.length + limit;
        n = array.length;
      }
      for (; i < n; i++) {
        out.push(array[i]);
      }
      return out;
    };
  }
  orderByFilter.$inject = ['$parse'];
  function orderByFilter($parse) {
    return function (array, sortPredicate, reverseOrder) {
      if (!isArray(array))
        return array;
      if (!sortPredicate)
        return array;
      sortPredicate = isArray(sortPredicate) ? sortPredicate : [sortPredicate];
      sortPredicate = map(sortPredicate, function (predicate) {
        var descending = false, get = predicate || identity;
        if (isString(predicate)) {
          if (predicate.charAt(0) == '+' || predicate.charAt(0) == '-') {
            descending = predicate.charAt(0) == '-';
            predicate = predicate.substring(1);
          }
          get = $parse(predicate);
        }
        return reverseComparator(function (a, b) {
          return compare(get(a), get(b));
        }, descending);
      });
      var arrayCopy = [];
      for (var i = 0; i < array.length; i++) {
        arrayCopy.push(array[i]);
      }
      return arrayCopy.sort(reverseComparator(comparator, reverseOrder));
      function comparator(o1, o2) {
        for (var i = 0; i < sortPredicate.length; i++) {
          var comp = sortPredicate[i](o1, o2);
          if (comp !== 0)
            return comp;
        }
        return 0;
      }
      function reverseComparator(comp, descending) {
        return toBoolean(descending) ? function (a, b) {
          return comp(b, a);
        } : comp;
      }
      function compare(v1, v2) {
        var t1 = typeof v1;
        var t2 = typeof v2;
        if (t1 == t2) {
          if (t1 == 'string')
            v1 = v1.toLowerCase();
          if (t1 == 'string')
            v2 = v2.toLowerCase();
          if (v1 === v2)
            return 0;
          return v1 < v2 ? -1 : 1;
        } else {
          return t1 < t2 ? -1 : 1;
        }
      }
    };
  }
  function ngDirective(directive) {
    if (isFunction(directive)) {
      directive = { link: directive };
    }
    directive.restrict = directive.restrict || 'AC';
    return valueFn(directive);
  }
  var htmlAnchorDirective = valueFn({
      restrict: 'E',
      compile: function (element, attr) {
        if (msie <= 8) {
          if (!attr.href && !attr.name) {
            attr.$set('href', '');
          }
          element.append(document.createComment('IE fix'));
        }
        return function (scope, element) {
          element.bind('click', function (event) {
            if (!element.attr('href')) {
              event.preventDefault();
            }
          });
        };
      }
    });
  var ngAttributeAliasDirectives = {};
  forEach(BOOLEAN_ATTR, function (propName, attrName) {
    var normalized = directiveNormalize('ng-' + attrName);
    ngAttributeAliasDirectives[normalized] = function () {
      return {
        priority: 100,
        compile: function () {
          return function (scope, element, attr) {
            scope.$watch(attr[normalized], function ngBooleanAttrWatchAction(value) {
              attr.$set(attrName, !!value);
            });
          };
        }
      };
    };
  });
  forEach([
    'src',
    'href'
  ], function (attrName) {
    var normalized = directiveNormalize('ng-' + attrName);
    ngAttributeAliasDirectives[normalized] = function () {
      return {
        priority: 99,
        link: function (scope, element, attr) {
          attr.$observe(normalized, function (value) {
            if (!value)
              return;
            attr.$set(attrName, value);
            if (msie)
              element.prop(attrName, attr[attrName]);
          });
        }
      };
    };
  });
  var nullFormCtrl = {
      $addControl: noop,
      $removeControl: noop,
      $setValidity: noop,
      $setDirty: noop
    };
  FormController.$inject = [
    '$element',
    '$attrs',
    '$scope'
  ];
  function FormController(element, attrs) {
    var form = this, parentForm = element.parent().controller('form') || nullFormCtrl, invalidCount = 0, errors = form.$error = {};
    form.$name = attrs.name;
    form.$dirty = false;
    form.$pristine = true;
    form.$valid = true;
    form.$invalid = false;
    parentForm.$addControl(form);
    element.addClass(PRISTINE_CLASS);
    toggleValidCss(true);
    function toggleValidCss(isValid, validationErrorKey) {
      validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
      element.removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
    }
    form.$addControl = function (control) {
      if (control.$name && !form.hasOwnProperty(control.$name)) {
        form[control.$name] = control;
      }
    };
    form.$removeControl = function (control) {
      if (control.$name && form[control.$name] === control) {
        delete form[control.$name];
      }
      forEach(errors, function (queue, validationToken) {
        form.$setValidity(validationToken, true, control);
      });
    };
    form.$setValidity = function (validationToken, isValid, control) {
      var queue = errors[validationToken];
      if (isValid) {
        if (queue) {
          arrayRemove(queue, control);
          if (!queue.length) {
            invalidCount--;
            if (!invalidCount) {
              toggleValidCss(isValid);
              form.$valid = true;
              form.$invalid = false;
            }
            errors[validationToken] = false;
            toggleValidCss(true, validationToken);
            parentForm.$setValidity(validationToken, true, form);
          }
        }
      } else {
        if (!invalidCount) {
          toggleValidCss(isValid);
        }
        if (queue) {
          if (includes(queue, control))
            return;
        } else {
          errors[validationToken] = queue = [];
          invalidCount++;
          toggleValidCss(false, validationToken);
          parentForm.$setValidity(validationToken, false, form);
        }
        queue.push(control);
        form.$valid = false;
        form.$invalid = true;
      }
    };
    form.$setDirty = function () {
      element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS);
      form.$dirty = true;
      form.$pristine = false;
      parentForm.$setDirty();
    };
  }
  var formDirectiveFactory = function (isNgForm) {
    return [
      '$timeout',
      function ($timeout) {
        var formDirective = {
            name: 'form',
            restrict: 'E',
            controller: FormController,
            compile: function () {
              return {
                pre: function (scope, formElement, attr, controller) {
                  if (!attr.action) {
                    var preventDefaultListener = function (event) {
                      event.preventDefault ? event.preventDefault() : event.returnValue = false;
                    };
                    addEventListenerFn(formElement[0], 'submit', preventDefaultListener);
                    formElement.bind('$destroy', function () {
                      $timeout(function () {
                        removeEventListenerFn(formElement[0], 'submit', preventDefaultListener);
                      }, 0, false);
                    });
                  }
                  var parentFormCtrl = formElement.parent().controller('form'), alias = attr.name || attr.ngForm;
                  if (alias) {
                    scope[alias] = controller;
                  }
                  if (parentFormCtrl) {
                    formElement.bind('$destroy', function () {
                      parentFormCtrl.$removeControl(controller);
                      if (alias) {
                        scope[alias] = undefined;
                      }
                      extend(controller, nullFormCtrl);
                    });
                  }
                }
              };
            }
          };
        return isNgForm ? extend(copy(formDirective), { restrict: 'EAC' }) : formDirective;
      }
    ];
  };
  var formDirective = formDirectiveFactory();
  var ngFormDirective = formDirectiveFactory(true);
  var URL_REGEXP = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/;
  var EMAIL_REGEXP = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  var NUMBER_REGEXP = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/;
  var inputType = {
      'text': textInputType,
      'number': numberInputType,
      'url': urlInputType,
      'email': emailInputType,
      'radio': radioInputType,
      'checkbox': checkboxInputType,
      'hidden': noop,
      'button': noop,
      'submit': noop,
      'reset': noop
    };
  function isEmpty(value) {
    return isUndefined(value) || value === '' || value === null || value !== value;
  }
  function textInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    var listener = function () {
      var value = trim(element.val());
      if (ctrl.$viewValue !== value) {
        scope.$apply(function () {
          ctrl.$setViewValue(value);
        });
      }
    };
    if ($sniffer.hasEvent('input')) {
      element.bind('input', listener);
    } else {
      var timeout;
      var deferListener = function () {
        if (!timeout) {
          timeout = $browser.defer(function () {
            listener();
            timeout = null;
          });
        }
      };
      element.bind('keydown', function (event) {
        var key = event.keyCode;
        if (key === 91 || 15 < key && key < 19 || 37 <= key && key <= 40)
          return;
        deferListener();
      });
      element.bind('change', listener);
      if ($sniffer.hasEvent('paste')) {
        element.bind('paste cut', deferListener);
      }
    }
    ctrl.$render = function () {
      element.val(isEmpty(ctrl.$viewValue) ? '' : ctrl.$viewValue);
    };
    var pattern = attr.ngPattern, patternValidator;
    var validate = function (regexp, value) {
      if (isEmpty(value) || regexp.test(value)) {
        ctrl.$setValidity('pattern', true);
        return value;
      } else {
        ctrl.$setValidity('pattern', false);
        return undefined;
      }
    };
    if (pattern) {
      if (pattern.match(/^\/(.*)\/$/)) {
        pattern = new RegExp(pattern.substr(1, pattern.length - 2));
        patternValidator = function (value) {
          return validate(pattern, value);
        };
      } else {
        patternValidator = function (value) {
          var patternObj = scope.$eval(pattern);
          if (!patternObj || !patternObj.test) {
            throw new Error('Expected ' + pattern + ' to be a RegExp but was ' + patternObj);
          }
          return validate(patternObj, value);
        };
      }
      ctrl.$formatters.push(patternValidator);
      ctrl.$parsers.push(patternValidator);
    }
    if (attr.ngMinlength) {
      var minlength = int(attr.ngMinlength);
      var minLengthValidator = function (value) {
        if (!isEmpty(value) && value.length < minlength) {
          ctrl.$setValidity('minlength', false);
          return undefined;
        } else {
          ctrl.$setValidity('minlength', true);
          return value;
        }
      };
      ctrl.$parsers.push(minLengthValidator);
      ctrl.$formatters.push(minLengthValidator);
    }
    if (attr.ngMaxlength) {
      var maxlength = int(attr.ngMaxlength);
      var maxLengthValidator = function (value) {
        if (!isEmpty(value) && value.length > maxlength) {
          ctrl.$setValidity('maxlength', false);
          return undefined;
        } else {
          ctrl.$setValidity('maxlength', true);
          return value;
        }
      };
      ctrl.$parsers.push(maxLengthValidator);
      ctrl.$formatters.push(maxLengthValidator);
    }
  }
  function numberInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    ctrl.$parsers.push(function (value) {
      var empty = isEmpty(value);
      if (empty || NUMBER_REGEXP.test(value)) {
        ctrl.$setValidity('number', true);
        return value === '' ? null : empty ? value : parseFloat(value);
      } else {
        ctrl.$setValidity('number', false);
        return undefined;
      }
    });
    ctrl.$formatters.push(function (value) {
      return isEmpty(value) ? '' : '' + value;
    });
    if (attr.min) {
      var min = parseFloat(attr.min);
      var minValidator = function (value) {
        if (!isEmpty(value) && value < min) {
          ctrl.$setValidity('min', false);
          return undefined;
        } else {
          ctrl.$setValidity('min', true);
          return value;
        }
      };
      ctrl.$parsers.push(minValidator);
      ctrl.$formatters.push(minValidator);
    }
    if (attr.max) {
      var max = parseFloat(attr.max);
      var maxValidator = function (value) {
        if (!isEmpty(value) && value > max) {
          ctrl.$setValidity('max', false);
          return undefined;
        } else {
          ctrl.$setValidity('max', true);
          return value;
        }
      };
      ctrl.$parsers.push(maxValidator);
      ctrl.$formatters.push(maxValidator);
    }
    ctrl.$formatters.push(function (value) {
      if (isEmpty(value) || isNumber(value)) {
        ctrl.$setValidity('number', true);
        return value;
      } else {
        ctrl.$setValidity('number', false);
        return undefined;
      }
    });
  }
  function urlInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    var urlValidator = function (value) {
      if (isEmpty(value) || URL_REGEXP.test(value)) {
        ctrl.$setValidity('url', true);
        return value;
      } else {
        ctrl.$setValidity('url', false);
        return undefined;
      }
    };
    ctrl.$formatters.push(urlValidator);
    ctrl.$parsers.push(urlValidator);
  }
  function emailInputType(scope, element, attr, ctrl, $sniffer, $browser) {
    textInputType(scope, element, attr, ctrl, $sniffer, $browser);
    var emailValidator = function (value) {
      if (isEmpty(value) || EMAIL_REGEXP.test(value)) {
        ctrl.$setValidity('email', true);
        return value;
      } else {
        ctrl.$setValidity('email', false);
        return undefined;
      }
    };
    ctrl.$formatters.push(emailValidator);
    ctrl.$parsers.push(emailValidator);
  }
  function radioInputType(scope, element, attr, ctrl) {
    if (isUndefined(attr.name)) {
      element.attr('name', nextUid());
    }
    element.bind('click', function () {
      if (element[0].checked) {
        scope.$apply(function () {
          ctrl.$setViewValue(attr.value);
        });
      }
    });
    ctrl.$render = function () {
      var value = attr.value;
      element[0].checked = value == ctrl.$viewValue;
    };
    attr.$observe('value', ctrl.$render);
  }
  function checkboxInputType(scope, element, attr, ctrl) {
    var trueValue = attr.ngTrueValue, falseValue = attr.ngFalseValue;
    if (!isString(trueValue))
      trueValue = true;
    if (!isString(falseValue))
      falseValue = false;
    element.bind('click', function () {
      scope.$apply(function () {
        ctrl.$setViewValue(element[0].checked);
      });
    });
    ctrl.$render = function () {
      element[0].checked = ctrl.$viewValue;
    };
    ctrl.$formatters.push(function (value) {
      return value === trueValue;
    });
    ctrl.$parsers.push(function (value) {
      return value ? trueValue : falseValue;
    });
  }
  var inputDirective = [
      '$browser',
      '$sniffer',
      function ($browser, $sniffer) {
        return {
          restrict: 'E',
          require: '?ngModel',
          link: function (scope, element, attr, ctrl) {
            if (ctrl) {
              (inputType[lowercase(attr.type)] || inputType.text)(scope, element, attr, ctrl, $sniffer, $browser);
            }
          }
        };
      }
    ];
  var VALID_CLASS = 'ng-valid', INVALID_CLASS = 'ng-invalid', PRISTINE_CLASS = 'ng-pristine', DIRTY_CLASS = 'ng-dirty';
  var NgModelController = [
      '$scope',
      '$exceptionHandler',
      '$attrs',
      '$element',
      '$parse',
      function ($scope, $exceptionHandler, $attr, $element, $parse) {
        this.$viewValue = Number.NaN;
        this.$modelValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = true;
        this.$dirty = false;
        this.$valid = true;
        this.$invalid = false;
        this.$name = $attr.name;
        var ngModelGet = $parse($attr.ngModel), ngModelSet = ngModelGet.assign;
        if (!ngModelSet) {
          throw Error(NON_ASSIGNABLE_MODEL_EXPRESSION + $attr.ngModel + ' (' + startingTag($element) + ')');
        }
        this.$render = noop;
        var parentForm = $element.inheritedData('$formController') || nullFormCtrl, invalidCount = 0, $error = this.$error = {};
        $element.addClass(PRISTINE_CLASS);
        toggleValidCss(true);
        function toggleValidCss(isValid, validationErrorKey) {
          validationErrorKey = validationErrorKey ? '-' + snake_case(validationErrorKey, '-') : '';
          $element.removeClass((isValid ? INVALID_CLASS : VALID_CLASS) + validationErrorKey).addClass((isValid ? VALID_CLASS : INVALID_CLASS) + validationErrorKey);
        }
        this.$setValidity = function (validationErrorKey, isValid) {
          if ($error[validationErrorKey] === !isValid)
            return;
          if (isValid) {
            if ($error[validationErrorKey])
              invalidCount--;
            if (!invalidCount) {
              toggleValidCss(true);
              this.$valid = true;
              this.$invalid = false;
            }
          } else {
            toggleValidCss(false);
            this.$invalid = true;
            this.$valid = false;
            invalidCount++;
          }
          $error[validationErrorKey] = !isValid;
          toggleValidCss(isValid, validationErrorKey);
          parentForm.$setValidity(validationErrorKey, isValid, this);
        };
        this.$setViewValue = function (value) {
          this.$viewValue = value;
          if (this.$pristine) {
            this.$dirty = true;
            this.$pristine = false;
            $element.removeClass(PRISTINE_CLASS).addClass(DIRTY_CLASS);
            parentForm.$setDirty();
          }
          forEach(this.$parsers, function (fn) {
            value = fn(value);
          });
          if (this.$modelValue !== value) {
            this.$modelValue = value;
            ngModelSet($scope, value);
            forEach(this.$viewChangeListeners, function (listener) {
              try {
                listener();
              } catch (e) {
                $exceptionHandler(e);
              }
            });
          }
        };
        var ctrl = this;
        $scope.$watch(function ngModelWatch() {
          var value = ngModelGet($scope);
          if (ctrl.$modelValue !== value) {
            var formatters = ctrl.$formatters, idx = formatters.length;
            ctrl.$modelValue = value;
            while (idx--) {
              value = formatters[idx](value);
            }
            if (ctrl.$viewValue !== value) {
              ctrl.$viewValue = value;
              ctrl.$render();
            }
          }
        });
      }
    ];
  var ngModelDirective = function () {
    return {
      require: [
        'ngModel',
        '^?form'
      ],
      controller: NgModelController,
      link: function (scope, element, attr, ctrls) {
        var modelCtrl = ctrls[0], formCtrl = ctrls[1] || nullFormCtrl;
        formCtrl.$addControl(modelCtrl);
        element.bind('$destroy', function () {
          formCtrl.$removeControl(modelCtrl);
        });
      }
    };
  };
  var ngChangeDirective = valueFn({
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        ctrl.$viewChangeListeners.push(function () {
          scope.$eval(attr.ngChange);
        });
      }
    });
  var requiredDirective = function () {
    return {
      require: '?ngModel',
      link: function (scope, elm, attr, ctrl) {
        if (!ctrl)
          return;
        attr.required = true;
        var validator = function (value) {
          if (attr.required && (isEmpty(value) || value === false)) {
            ctrl.$setValidity('required', false);
            return;
          } else {
            ctrl.$setValidity('required', true);
            return value;
          }
        };
        ctrl.$formatters.push(validator);
        ctrl.$parsers.unshift(validator);
        attr.$observe('required', function () {
          validator(ctrl.$viewValue);
        });
      }
    };
  };
  var ngListDirective = function () {
    return {
      require: 'ngModel',
      link: function (scope, element, attr, ctrl) {
        var match = /\/(.*)\//.exec(attr.ngList), separator = match && new RegExp(match[1]) || attr.ngList || ',';
        var parse = function (viewValue) {
          var list = [];
          if (viewValue) {
            forEach(viewValue.split(separator), function (value) {
              if (value)
                list.push(trim(value));
            });
          }
          return list;
        };
        ctrl.$parsers.push(parse);
        ctrl.$formatters.push(function (value) {
          if (isArray(value)) {
            return value.join(', ');
          }
          return undefined;
        });
      }
    };
  };
  var CONSTANT_VALUE_REGEXP = /^(true|false|\d+)$/;
  var ngValueDirective = function () {
    return {
      priority: 100,
      compile: function (tpl, tplAttr) {
        if (CONSTANT_VALUE_REGEXP.test(tplAttr.ngValue)) {
          return function (scope, elm, attr) {
            attr.$set('value', scope.$eval(attr.ngValue));
          };
        } else {
          return function (scope, elm, attr) {
            scope.$watch(attr.ngValue, function valueWatchAction(value) {
              attr.$set('value', value, false);
            });
          };
        }
      }
    };
  };
  var ngBindDirective = ngDirective(function (scope, element, attr) {
      element.addClass('ng-binding').data('$binding', attr.ngBind);
      scope.$watch(attr.ngBind, function ngBindWatchAction(value) {
        element.text(value == undefined ? '' : value);
      });
    });
  var ngBindTemplateDirective = [
      '$interpolate',
      function ($interpolate) {
        return function (scope, element, attr) {
          var interpolateFn = $interpolate(element.attr(attr.$attr.ngBindTemplate));
          element.addClass('ng-binding').data('$binding', interpolateFn);
          attr.$observe('ngBindTemplate', function (value) {
            element.text(value);
          });
        };
      }
    ];
  var ngBindHtmlUnsafeDirective = [function () {
        return function (scope, element, attr) {
          element.addClass('ng-binding').data('$binding', attr.ngBindHtmlUnsafe);
          scope.$watch(attr.ngBindHtmlUnsafe, function ngBindHtmlUnsafeWatchAction(value) {
            element.html(value || '');
          });
        };
      }];
  function classDirective(name, selector) {
    name = 'ngClass' + name;
    return ngDirective(function (scope, element, attr) {
      var oldVal = undefined;
      scope.$watch(attr[name], ngClassWatchAction, true);
      attr.$observe('class', function (value) {
        var ngClass = scope.$eval(attr[name]);
        ngClassWatchAction(ngClass, ngClass);
      });
      if (name !== 'ngClass') {
        scope.$watch('$index', function ($index, old$index) {
          var mod = $index & 1;
          if (mod !== old$index & 1) {
            if (mod === selector) {
              addClass(scope.$eval(attr[name]));
            } else {
              removeClass(scope.$eval(attr[name]));
            }
          }
        });
      }
      function ngClassWatchAction(newVal) {
        if (selector === true || scope.$index % 2 === selector) {
          if (oldVal && !equals(newVal, oldVal)) {
            removeClass(oldVal);
          }
          addClass(newVal);
        }
        oldVal = copy(newVal);
      }
      function removeClass(classVal) {
        if (isObject(classVal) && !isArray(classVal)) {
          classVal = map(classVal, function (v, k) {
            if (v)
              return k;
          });
        }
        element.removeClass(isArray(classVal) ? classVal.join(' ') : classVal);
      }
      function addClass(classVal) {
        if (isObject(classVal) && !isArray(classVal)) {
          classVal = map(classVal, function (v, k) {
            if (v)
              return k;
          });
        }
        if (classVal) {
          element.addClass(isArray(classVal) ? classVal.join(' ') : classVal);
        }
      }
    });
  }
  var ngClassDirective = classDirective('', true);
  var ngClassOddDirective = classDirective('Odd', 0);
  var ngClassEvenDirective = classDirective('Even', 1);
  var ngCloakDirective = ngDirective({
      compile: function (element, attr) {
        attr.$set('ngCloak', undefined);
        element.removeClass('ng-cloak');
      }
    });
  var ngControllerDirective = [function () {
        return {
          scope: true,
          controller: '@'
        };
      }];
  var ngCspDirective = [
      '$sniffer',
      function ($sniffer) {
        return {
          priority: 1000,
          compile: function () {
            $sniffer.csp = true;
          }
        };
      }
    ];
  var ngEventDirectives = {};
  forEach('click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave'.split(' '), function (name) {
    var directiveName = directiveNormalize('ng-' + name);
    ngEventDirectives[directiveName] = [
      '$parse',
      function ($parse) {
        return function (scope, element, attr) {
          var fn = $parse(attr[directiveName]);
          element.bind(lowercase(name), function (event) {
            scope.$apply(function () {
              fn(scope, { $event: event });
            });
          });
        };
      }
    ];
  });
  var ngSubmitDirective = ngDirective(function (scope, element, attrs) {
      element.bind('submit', function () {
        scope.$apply(attrs.ngSubmit);
      });
    });
  var ngIncludeDirective = [
      '$http',
      '$templateCache',
      '$anchorScroll',
      '$compile',
      function ($http, $templateCache, $anchorScroll, $compile) {
        return {
          restrict: 'ECA',
          terminal: true,
          compile: function (element, attr) {
            var srcExp = attr.ngInclude || attr.src, onloadExp = attr.onload || '', autoScrollExp = attr.autoscroll;
            return function (scope, element) {
              var changeCounter = 0, childScope;
              var clearContent = function () {
                if (childScope) {
                  childScope.$destroy();
                  childScope = null;
                }
                element.html('');
              };
              scope.$watch(srcExp, function ngIncludeWatchAction(src) {
                var thisChangeId = ++changeCounter;
                if (src) {
                  $http.get(src, { cache: $templateCache }).success(function (response) {
                    if (thisChangeId !== changeCounter)
                      return;
                    if (childScope)
                      childScope.$destroy();
                    childScope = scope.$new();
                    element.html(response);
                    $compile(element.contents())(childScope);
                    if (isDefined(autoScrollExp) && (!autoScrollExp || scope.$eval(autoScrollExp))) {
                      $anchorScroll();
                    }
                    childScope.$emit('$includeContentLoaded');
                    scope.$eval(onloadExp);
                  }).error(function () {
                    if (thisChangeId === changeCounter)
                      clearContent();
                  });
                } else
                  clearContent();
              });
            };
          }
        };
      }
    ];
  var ngInitDirective = ngDirective({
      compile: function () {
        return {
          pre: function (scope, element, attrs) {
            scope.$eval(attrs.ngInit);
          }
        };
      }
    });
  var ngNonBindableDirective = ngDirective({
      terminal: true,
      priority: 1000
    });
  var ngPluralizeDirective = [
      '$locale',
      '$interpolate',
      function ($locale, $interpolate) {
        var BRACE = /{}/g;
        return {
          restrict: 'EA',
          link: function (scope, element, attr) {
            var numberExp = attr.count, whenExp = element.attr(attr.$attr.when), offset = attr.offset || 0, whens = scope.$eval(whenExp), whensExpFns = {}, startSymbol = $interpolate.startSymbol(), endSymbol = $interpolate.endSymbol();
            forEach(whens, function (expression, key) {
              whensExpFns[key] = $interpolate(expression.replace(BRACE, startSymbol + numberExp + '-' + offset + endSymbol));
            });
            scope.$watch(function ngPluralizeWatch() {
              var value = parseFloat(scope.$eval(numberExp));
              if (!isNaN(value)) {
                if (!(value in whens))
                  value = $locale.pluralCat(value - offset);
                return whensExpFns[value](scope, element, true);
              } else {
                return '';
              }
            }, function ngPluralizeWatchAction(newVal) {
              element.text(newVal);
            });
          }
        };
      }
    ];
  var ngRepeatDirective = ngDirective({
      transclude: 'element',
      priority: 1000,
      terminal: true,
      compile: function (element, attr, linker) {
        return function (scope, iterStartElement, attr) {
          var expression = attr.ngRepeat;
          var match = expression.match(/^\s*(.+)\s+in\s+(.*)\s*$/), lhs, rhs, valueIdent, keyIdent;
          if (!match) {
            throw Error('Expected ngRepeat in form of \'_item_ in _collection_\' but got \'' + expression + '\'.');
          }
          lhs = match[1];
          rhs = match[2];
          match = lhs.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
          if (!match) {
            throw Error('\'item\' in \'item in collection\' should be identifier or (key, value) but got \'' + lhs + '\'.');
          }
          valueIdent = match[3] || match[1];
          keyIdent = match[2];
          var lastOrder = new HashQueueMap();
          scope.$watch(function ngRepeatWatch(scope) {
            var index, length, collection = scope.$eval(rhs), cursor = iterStartElement, nextOrder = new HashQueueMap(), arrayBound, childScope, key, value, array, last;
            if (!isArray(collection)) {
              array = [];
              for (key in collection) {
                if (collection.hasOwnProperty(key) && key.charAt(0) != '$') {
                  array.push(key);
                }
              }
              array.sort();
            } else {
              array = collection || [];
            }
            arrayBound = array.length - 1;
            for (index = 0, length = array.length; index < length; index++) {
              key = collection === array ? index : array[index];
              value = collection[key];
              last = lastOrder.shift(value);
              if (last) {
                childScope = last.scope;
                nextOrder.push(value, last);
                if (index === last.index) {
                  cursor = last.element;
                } else {
                  last.index = index;
                  cursor.after(last.element);
                  cursor = last.element;
                }
              } else {
                childScope = scope.$new();
              }
              childScope[valueIdent] = value;
              if (keyIdent)
                childScope[keyIdent] = key;
              childScope.$index = index;
              childScope.$first = index === 0;
              childScope.$last = index === arrayBound;
              childScope.$middle = !(childScope.$first || childScope.$last);
              if (!last) {
                linker(childScope, function (clone) {
                  cursor.after(clone);
                  last = {
                    scope: childScope,
                    element: cursor = clone,
                    index: index
                  };
                  nextOrder.push(value, last);
                });
              }
            }
            for (key in lastOrder) {
              if (lastOrder.hasOwnProperty(key)) {
                array = lastOrder[key];
                while (array.length) {
                  value = array.pop();
                  value.element.remove();
                  value.scope.$destroy();
                }
              }
            }
            lastOrder = nextOrder;
          });
        };
      }
    });
  var ngShowDirective = ngDirective(function (scope, element, attr) {
      scope.$watch(attr.ngShow, function ngShowWatchAction(value) {
        element.css('display', toBoolean(value) ? '' : 'none');
      });
    });
  var ngHideDirective = ngDirective(function (scope, element, attr) {
      scope.$watch(attr.ngHide, function ngHideWatchAction(value) {
        element.css('display', toBoolean(value) ? 'none' : '');
      });
    });
  var ngStyleDirective = ngDirective(function (scope, element, attr) {
      scope.$watch(attr.ngStyle, function ngStyleWatchAction(newStyles, oldStyles) {
        if (oldStyles && newStyles !== oldStyles) {
          forEach(oldStyles, function (val, style) {
            element.css(style, '');
          });
        }
        if (newStyles)
          element.css(newStyles);
      }, true);
    });
  var NG_SWITCH = 'ng-switch';
  var ngSwitchDirective = valueFn({
      restrict: 'EA',
      require: 'ngSwitch',
      controller: [
        '$scope',
        function ngSwitchController() {
          this.cases = {};
        }
      ],
      link: function (scope, element, attr, ctrl) {
        var watchExpr = attr.ngSwitch || attr.on, selectedTransclude, selectedElement, selectedScope;
        scope.$watch(watchExpr, function ngSwitchWatchAction(value) {
          if (selectedElement) {
            selectedScope.$destroy();
            selectedElement.remove();
            selectedElement = selectedScope = null;
          }
          if (selectedTransclude = ctrl.cases['!' + value] || ctrl.cases['?']) {
            scope.$eval(attr.change);
            selectedScope = scope.$new();
            selectedTransclude(selectedScope, function (caseElement) {
              selectedElement = caseElement;
              element.append(caseElement);
            });
          }
        });
      }
    });
  var ngSwitchWhenDirective = ngDirective({
      transclude: 'element',
      priority: 500,
      require: '^ngSwitch',
      compile: function (element, attrs, transclude) {
        return function (scope, element, attr, ctrl) {
          ctrl.cases['!' + attrs.ngSwitchWhen] = transclude;
        };
      }
    });
  var ngSwitchDefaultDirective = ngDirective({
      transclude: 'element',
      priority: 500,
      require: '^ngSwitch',
      compile: function (element, attrs, transclude) {
        return function (scope, element, attr, ctrl) {
          ctrl.cases['?'] = transclude;
        };
      }
    });
  var ngTranscludeDirective = ngDirective({
      controller: [
        '$transclude',
        '$element',
        function ($transclude, $element) {
          $transclude(function (clone) {
            $element.append(clone);
          });
        }
      ]
    });
  var ngViewDirective = [
      '$http',
      '$templateCache',
      '$route',
      '$anchorScroll',
      '$compile',
      '$controller',
      function ($http, $templateCache, $route, $anchorScroll, $compile, $controller) {
        return {
          restrict: 'ECA',
          terminal: true,
          link: function (scope, element, attr) {
            var lastScope, onloadExp = attr.onload || '';
            scope.$on('$routeChangeSuccess', update);
            update();
            function destroyLastScope() {
              if (lastScope) {
                lastScope.$destroy();
                lastScope = null;
              }
            }
            function clearContent() {
              element.html('');
              destroyLastScope();
            }
            function update() {
              var locals = $route.current && $route.current.locals, template = locals && locals.$template;
              if (template) {
                element.html(template);
                destroyLastScope();
                var link = $compile(element.contents()), current = $route.current, controller;
                lastScope = current.scope = scope.$new();
                if (current.controller) {
                  locals.$scope = lastScope;
                  controller = $controller(current.controller, locals);
                  element.children().data('$ngControllerController', controller);
                }
                link(lastScope);
                lastScope.$emit('$viewContentLoaded');
                lastScope.$eval(onloadExp);
                $anchorScroll();
              } else {
                clearContent();
              }
            }
          }
        };
      }
    ];
  var scriptDirective = [
      '$templateCache',
      function ($templateCache) {
        return {
          restrict: 'E',
          terminal: true,
          compile: function (element, attr) {
            if (attr.type == 'text/ng-template') {
              var templateUrl = attr.id, text = element[0].text;
              $templateCache.put(templateUrl, text);
            }
          }
        };
      }
    ];
  var ngOptionsDirective = valueFn({ terminal: true });
  var selectDirective = [
      '$compile',
      '$parse',
      function ($compile, $parse) {
        var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w\d]*)|(?:\(\s*([\$\w][\$\w\d]*)\s*,\s*([\$\w][\$\w\d]*)\s*\)))\s+in\s+(.*)$/, nullModelCtrl = { $setViewValue: noop };
        return {
          restrict: 'E',
          require: [
            'select',
            '?ngModel'
          ],
          controller: [
            '$element',
            '$scope',
            '$attrs',
            function ($element, $scope, $attrs) {
              var self = this, optionsMap = {}, ngModelCtrl = nullModelCtrl, nullOption, unknownOption;
              self.databound = $attrs.ngModel;
              self.init = function (ngModelCtrl_, nullOption_, unknownOption_) {
                ngModelCtrl = ngModelCtrl_;
                nullOption = nullOption_;
                unknownOption = unknownOption_;
              };
              self.addOption = function (value) {
                optionsMap[value] = true;
                if (ngModelCtrl.$viewValue == value) {
                  $element.val(value);
                  if (unknownOption.parent())
                    unknownOption.remove();
                }
              };
              self.removeOption = function (value) {
                if (this.hasOption(value)) {
                  delete optionsMap[value];
                  if (ngModelCtrl.$viewValue == value) {
                    this.renderUnknownOption(value);
                  }
                }
              };
              self.renderUnknownOption = function (val) {
                var unknownVal = '? ' + hashKey(val) + ' ?';
                unknownOption.val(unknownVal);
                $element.prepend(unknownOption);
                $element.val(unknownVal);
                unknownOption.prop('selected', true);
              };
              self.hasOption = function (value) {
                return optionsMap.hasOwnProperty(value);
              };
              $scope.$on('$destroy', function () {
                self.renderUnknownOption = noop;
              });
            }
          ],
          link: function (scope, element, attr, ctrls) {
            if (!ctrls[1])
              return;
            var selectCtrl = ctrls[0], ngModelCtrl = ctrls[1], multiple = attr.multiple, optionsExp = attr.ngOptions, nullOption = false, emptyOption, optionTemplate = jqLite(document.createElement('option')), optGroupTemplate = jqLite(document.createElement('optgroup')), unknownOption = optionTemplate.clone();
            for (var i = 0, children = element.children(), ii = children.length; i < ii; i++) {
              if (children[i].value == '') {
                emptyOption = nullOption = children.eq(i);
                break;
              }
            }
            selectCtrl.init(ngModelCtrl, nullOption, unknownOption);
            if (multiple && (attr.required || attr.ngRequired)) {
              var requiredValidator = function (value) {
                ngModelCtrl.$setValidity('required', !attr.required || value && value.length);
                return value;
              };
              ngModelCtrl.$parsers.push(requiredValidator);
              ngModelCtrl.$formatters.unshift(requiredValidator);
              attr.$observe('required', function () {
                requiredValidator(ngModelCtrl.$viewValue);
              });
            }
            if (optionsExp)
              Options(scope, element, ngModelCtrl);
            else if (multiple)
              Multiple(scope, element, ngModelCtrl);
            else
              Single(scope, element, ngModelCtrl, selectCtrl);
            function Single(scope, selectElement, ngModelCtrl, selectCtrl) {
              ngModelCtrl.$render = function () {
                var viewValue = ngModelCtrl.$viewValue;
                if (selectCtrl.hasOption(viewValue)) {
                  if (unknownOption.parent())
                    unknownOption.remove();
                  selectElement.val(viewValue);
                  if (viewValue === '')
                    emptyOption.prop('selected', true);
                } else {
                  if (isUndefined(viewValue) && emptyOption) {
                    selectElement.val('');
                  } else {
                    selectCtrl.renderUnknownOption(viewValue);
                  }
                }
              };
              selectElement.bind('change', function () {
                scope.$apply(function () {
                  if (unknownOption.parent())
                    unknownOption.remove();
                  ngModelCtrl.$setViewValue(selectElement.val());
                });
              });
            }
            function Multiple(scope, selectElement, ctrl) {
              var lastView;
              ctrl.$render = function () {
                var items = new HashMap(ctrl.$viewValue);
                forEach(selectElement.find('option'), function (option) {
                  option.selected = isDefined(items.get(option.value));
                });
              };
              scope.$watch(function selectMultipleWatch() {
                if (!equals(lastView, ctrl.$viewValue)) {
                  lastView = copy(ctrl.$viewValue);
                  ctrl.$render();
                }
              });
              selectElement.bind('change', function () {
                scope.$apply(function () {
                  var array = [];
                  forEach(selectElement.find('option'), function (option) {
                    if (option.selected) {
                      array.push(option.value);
                    }
                  });
                  ctrl.$setViewValue(array);
                });
              });
            }
            function Options(scope, selectElement, ctrl) {
              var match;
              if (!(match = optionsExp.match(NG_OPTIONS_REGEXP))) {
                throw Error('Expected ngOptions in form of \'_select_ (as _label_)? for (_key_,)?_value_ in _collection_\'' + ' but got \'' + optionsExp + '\'.');
              }
              var displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ''), valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]), optionGroupsCache = [[{
                      element: selectElement,
                      label: ''
                    }]];
              if (nullOption) {
                $compile(nullOption)(scope);
                nullOption.removeClass('ng-scope');
                nullOption.remove();
              }
              selectElement.html('');
              selectElement.bind('change', function () {
                scope.$apply(function () {
                  var optionGroup, collection = valuesFn(scope) || [], locals = {}, key, value, optionElement, index, groupIndex, length, groupLength;
                  if (multiple) {
                    value = [];
                    for (groupIndex = 0, groupLength = optionGroupsCache.length; groupIndex < groupLength; groupIndex++) {
                      optionGroup = optionGroupsCache[groupIndex];
                      for (index = 1, length = optionGroup.length; index < length; index++) {
                        if ((optionElement = optionGroup[index].element)[0].selected) {
                          key = optionElement.val();
                          if (keyName)
                            locals[keyName] = key;
                          locals[valueName] = collection[key];
                          value.push(valueFn(scope, locals));
                        }
                      }
                    }
                  } else {
                    key = selectElement.val();
                    if (key == '?') {
                      value = undefined;
                    } else if (key == '') {
                      value = null;
                    } else {
                      locals[valueName] = collection[key];
                      if (keyName)
                        locals[keyName] = key;
                      value = valueFn(scope, locals);
                    }
                  }
                  ctrl.$setViewValue(value);
                });
              });
              ctrl.$render = render;
              scope.$watch(render);
              function render() {
                var optionGroups = { '': [] }, optionGroupNames = [''], optionGroupName, optionGroup, option, existingParent, existingOptions, existingOption, modelValue = ctrl.$modelValue, values = valuesFn(scope) || [], keys = keyName ? sortedKeys(values) : values, groupLength, length, groupIndex, index, locals = {}, selected, selectedSet = false, lastElement, element, label;
                if (multiple) {
                  selectedSet = new HashMap(modelValue);
                }
                for (index = 0; length = keys.length, index < length; index++) {
                  locals[valueName] = values[keyName ? locals[keyName] = keys[index] : index];
                  optionGroupName = groupByFn(scope, locals) || '';
                  if (!(optionGroup = optionGroups[optionGroupName])) {
                    optionGroup = optionGroups[optionGroupName] = [];
                    optionGroupNames.push(optionGroupName);
                  }
                  if (multiple) {
                    selected = selectedSet.remove(valueFn(scope, locals)) != undefined;
                  } else {
                    selected = modelValue === valueFn(scope, locals);
                    selectedSet = selectedSet || selected;
                  }
                  label = displayFn(scope, locals);
                  label = label === undefined ? '' : label;
                  optionGroup.push({
                    id: keyName ? keys[index] : index,
                    label: label,
                    selected: selected
                  });
                }
                if (!multiple) {
                  if (nullOption || modelValue === null) {
                    optionGroups[''].unshift({
                      id: '',
                      label: '',
                      selected: !selectedSet
                    });
                  } else if (!selectedSet) {
                    optionGroups[''].unshift({
                      id: '?',
                      label: '',
                      selected: true
                    });
                  }
                }
                for (groupIndex = 0, groupLength = optionGroupNames.length; groupIndex < groupLength; groupIndex++) {
                  optionGroupName = optionGroupNames[groupIndex];
                  optionGroup = optionGroups[optionGroupName];
                  if (optionGroupsCache.length <= groupIndex) {
                    existingParent = {
                      element: optGroupTemplate.clone().attr('label', optionGroupName),
                      label: optionGroup.label
                    };
                    existingOptions = [existingParent];
                    optionGroupsCache.push(existingOptions);
                    selectElement.append(existingParent.element);
                  } else {
                    existingOptions = optionGroupsCache[groupIndex];
                    existingParent = existingOptions[0];
                    if (existingParent.label != optionGroupName) {
                      existingParent.element.attr('label', existingParent.label = optionGroupName);
                    }
                  }
                  lastElement = null;
                  for (index = 0, length = optionGroup.length; index < length; index++) {
                    option = optionGroup[index];
                    if (existingOption = existingOptions[index + 1]) {
                      lastElement = existingOption.element;
                      if (existingOption.label !== option.label) {
                        lastElement.text(existingOption.label = option.label);
                      }
                      if (existingOption.id !== option.id) {
                        lastElement.val(existingOption.id = option.id);
                      }
                      if (lastElement[0].selected !== option.selected) {
                        lastElement.prop('selected', existingOption.selected = option.selected);
                      }
                    } else {
                      if (option.id === '' && nullOption) {
                        element = nullOption;
                      } else {
                        (element = optionTemplate.clone()).val(option.id).attr('selected', option.selected).text(option.label);
                      }
                      existingOptions.push(existingOption = {
                        element: element,
                        label: option.label,
                        id: option.id,
                        selected: option.selected
                      });
                      if (lastElement) {
                        lastElement.after(element);
                      } else {
                        existingParent.element.append(element);
                      }
                      lastElement = element;
                    }
                  }
                  index++;
                  while (existingOptions.length > index) {
                    existingOptions.pop().element.remove();
                  }
                }
                while (optionGroupsCache.length > groupIndex) {
                  optionGroupsCache.pop()[0].element.remove();
                }
              }
            }
          }
        };
      }
    ];
  var optionDirective = [
      '$interpolate',
      function ($interpolate) {
        var nullSelectCtrl = {
            addOption: noop,
            removeOption: noop
          };
        return {
          restrict: 'E',
          priority: 100,
          compile: function (element, attr) {
            if (isUndefined(attr.value)) {
              var interpolateFn = $interpolate(element.text(), true);
              if (!interpolateFn) {
                attr.$set('value', element.text());
              }
            }
            return function (scope, element, attr) {
              var selectCtrlName = '$selectController', parent = element.parent(), selectCtrl = parent.data(selectCtrlName) || parent.parent().data(selectCtrlName);
              if (selectCtrl && selectCtrl.databound) {
                element.prop('selected', false);
              } else {
                selectCtrl = nullSelectCtrl;
              }
              if (interpolateFn) {
                scope.$watch(interpolateFn, function interpolateWatchAction(newVal, oldVal) {
                  attr.$set('value', newVal);
                  if (newVal !== oldVal)
                    selectCtrl.removeOption(oldVal);
                  selectCtrl.addOption(newVal);
                });
              } else {
                selectCtrl.addOption(attr.value);
              }
              element.bind('$destroy', function () {
                selectCtrl.removeOption(attr.value);
              });
            };
          }
        };
      }
    ];
  var styleDirective = valueFn({
      restrict: 'E',
      terminal: true
    });
  bindJQuery();
  publishExternalAPI(angular);
  jqLite(document).ready(function () {
    angularInit(document, bootstrap);
  });
}(window, document));
angular.element(document).find('head').append('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak{display:none;}ng\\:form{display:block;}</style>');
if (!jQuery)
  throw new Error('Bootstrap requires jQuery');
+function (a) {
  'use strict';
  function b() {
    var a = document.createElement('bootstrap'), b = {
        WebkitTransition: 'webkitTransitionEnd',
        MozTransition: 'transitionend',
        OTransition: 'oTransitionEnd otransitionend',
        transition: 'transitionend'
      };
    for (var c in b)
      if (void 0 !== a.style[c])
        return { end: b[c] };
  }
  a.fn.emulateTransitionEnd = function (b) {
    var c = !1, d = this;
    a(this).one(a.support.transition.end, function () {
      c = !0;
    });
    var e = function () {
      c || a(d).trigger(a.support.transition.end);
    };
    return setTimeout(e, b), this;
  }, a(function () {
    a.support.transition = b();
  });
}(window.jQuery), +function (a) {
  'use strict';
  var b = '[data-dismiss="alert"]', c = function (c) {
      a(c).on('click', b, this.close);
    };
  c.prototype.close = function (b) {
    function c() {
      f.trigger('closed.bs.alert').remove();
    }
    var d = a(this), e = d.attr('data-target');
    e || (e = d.attr('href'), e = e && e.replace(/.*(?=#[^\s]*$)/, ''));
    var f = a(e);
    b && b.preventDefault(), f.length || (f = d.hasClass('alert') ? d : d.parent()), f.trigger(b = a.Event('close.bs.alert')), b.isDefaultPrevented() || (f.removeClass('in'), a.support.transition && f.hasClass('fade') ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c());
  };
  var d = a.fn.alert;
  a.fn.alert = function (b) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.alert');
      e || d.data('bs.alert', e = new c(this)), 'string' == typeof b && e[b].call(d);
    });
  }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function () {
    return a.fn.alert = d, this;
  }, a(document).on('click.bs.alert.data-api', b, c.prototype.close);
}(window.jQuery), +function (a) {
  'use strict';
  var b = function (c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d);
  };
  b.DEFAULTS = { loadingText: 'loading...' }, b.prototype.setState = function (a) {
    var b = 'disabled', c = this.$element, d = c.is('input') ? 'val' : 'html', e = c.data();
    a += 'Text', e.resetText || c.data('resetText', c[d]()), c[d](e[a] || this.options[a]), setTimeout(function () {
      'loadingText' == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b);
    }, 0);
  }, b.prototype.toggle = function () {
    var a = this.$element.closest('[data-toggle="buttons"]');
    if (a.length) {
      var b = this.$element.find('input').prop('checked', !this.$element.hasClass('active')).trigger('change');
      'radio' === b.prop('type') && a.find('.active').removeClass('active');
    }
    this.$element.toggleClass('active');
  };
  var c = a.fn.button;
  a.fn.button = function (c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.button'), f = 'object' == typeof c && c;
      e || d.data('bs.button', e = new b(this, f)), 'toggle' == c ? e.toggle() : c && e.setState(c);
    });
  }, a.fn.button.Constructor = b, a.fn.button.noConflict = function () {
    return a.fn.button = c, this;
  }, a(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (b) {
    var c = a(b.target);
    c.hasClass('btn') || (c = c.closest('.btn')), c.button('toggle'), b.preventDefault();
  });
}(window.jQuery), +function (a) {
  'use strict';
  var b = function (b, c) {
    this.$element = a(b), this.$indicators = this.$element.find('.carousel-indicators'), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 'hover' == this.options.pause && this.$element.on('mouseenter', a.proxy(this.pause, this)).on('mouseleave', a.proxy(this.cycle, this));
  };
  b.DEFAULTS = {
    interval: 5000,
    pause: 'hover',
    wrap: !0
  }, b.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
  }, b.prototype.getActiveIndex = function () {
    return this.$active = this.$element.find('.item.active'), this.$items = this.$active.parent().children(), this.$items.index(this.$active);
  }, b.prototype.to = function (b) {
    var c = this, d = this.getActiveIndex();
    return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one('slid', function () {
      c.to(b);
    }) : d == b ? this.pause().cycle() : this.slide(b > d ? 'next' : 'prev', a(this.$items[b]));
  }, b.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find('.next, .prev').length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
  }, b.prototype.next = function () {
    return this.sliding ? void 0 : this.slide('next');
  }, b.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide('prev');
  }, b.prototype.slide = function (b, c) {
    var d = this.$element.find('.item.active'), e = c || d[b](), f = this.interval, g = 'next' == b ? 'left' : 'right', h = 'next' == b ? 'first' : 'last', i = this;
    if (!e.length) {
      if (!this.options.wrap)
        return;
      e = this.$element.find('.item')[h]();
    }
    this.sliding = !0, f && this.pause();
    var j = a.Event('slide.bs.carousel', {
        relatedTarget: e[0],
        direction: g
      });
    if (!e.hasClass('active')) {
      if (this.$indicators.length && (this.$indicators.find('.active').removeClass('active'), this.$element.one('slid', function () {
          var b = a(i.$indicators.children()[i.getActiveIndex()]);
          b && b.addClass('active');
        })), a.support.transition && this.$element.hasClass('slide')) {
        if (this.$element.trigger(j), j.isDefaultPrevented())
          return;
        e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function () {
          e.removeClass([
            b,
            g
          ].join(' ')).addClass('active'), d.removeClass([
            'active',
            g
          ].join(' ')), i.sliding = !1, setTimeout(function () {
            i.$element.trigger('slid');
          }, 0);
        }).emulateTransitionEnd(600);
      } else {
        if (this.$element.trigger(j), j.isDefaultPrevented())
          return;
        d.removeClass('active'), e.addClass('active'), this.sliding = !1, this.$element.trigger('slid');
      }
      return f && this.cycle(), this;
    }
  };
  var c = a.fn.carousel;
  a.fn.carousel = function (c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.carousel'), f = a.extend({}, b.DEFAULTS, d.data(), 'object' == typeof c && c), g = 'string' == typeof c ? c : f.slide;
      e || d.data('bs.carousel', e = new b(this, f)), 'number' == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
    });
  }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = c, this;
  }, a(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (b) {
    var c, d = a(this), e = a(d.attr('data-target') || (c = d.attr('href')) && c.replace(/.*(?=#[^\s]+$)/, '')), f = a.extend({}, e.data(), d.data()), g = d.attr('data-slide-to');
    g && (f.interval = !1), e.carousel(f), (g = d.attr('data-slide-to')) && e.data('bs.carousel').to(g), b.preventDefault();
  }), a(window).on('load', function () {
    a('[data-ride="carousel"]').each(function () {
      var b = a(this);
      b.carousel(b.data());
    });
  });
}(window.jQuery), +function (a) {
  'use strict';
  var b = function (c, d) {
    this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
  };
  b.DEFAULTS = { toggle: !0 }, b.prototype.dimension = function () {
    var a = this.$element.hasClass('width');
    return a ? 'width' : 'height';
  }, b.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass('in')) {
      var b = a.Event('show.bs.collapse');
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.$parent && this.$parent.find('> .panel > .in');
        if (c && c.length) {
          var d = c.data('bs.collapse');
          if (d && d.transitioning)
            return;
          c.collapse('hide'), d || c.data('bs.collapse', null);
        }
        var e = this.dimension();
        this.$element.removeClass('collapse').addClass('collapsing')[e](0), this.transitioning = 1;
        var f = function () {
          this.$element.removeClass('collapsing').addClass('in')[e]('auto'), this.transitioning = 0, this.$element.trigger('shown.bs.collapse');
        };
        if (!a.support.transition)
          return f.call(this);
        var g = a.camelCase([
            'scroll',
            e
          ].join('-'));
        this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
      }
    }
  }, b.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass('in')) {
      var b = a.Event('hide.bs.collapse');
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass('collapsing').removeClass('collapse').removeClass('in'), this.transitioning = 1;
        var d = function () {
          this.transitioning = 0, this.$element.trigger('hidden.bs.collapse').removeClass('collapsing').addClass('collapse');
        };
        return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), void 0) : d.call(this);
      }
    }
  }, b.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']();
  };
  var c = a.fn.collapse;
  a.fn.collapse = function (c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.collapse'), f = a.extend({}, b.DEFAULTS, d.data(), 'object' == typeof c && c);
      e || d.data('bs.collapse', e = new b(this, f)), 'string' == typeof c && e[c]();
    });
  }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = c, this;
  }, a(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (b) {
    var c, d = a(this), e = d.attr('data-target') || b.preventDefault() || (c = d.attr('href')) && c.replace(/.*(?=#[^\s]+$)/, ''), f = a(e), g = f.data('bs.collapse'), h = g ? 'toggle' : d.data(), i = d.attr('data-parent'), j = i && a(i);
    g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass('collapsed'), d[f.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')), f.collapse(h);
  });
}(window.jQuery), +function (a) {
  'use strict';
  function b() {
    a(d).remove(), a(e).each(function (b) {
      var d = c(a(this));
      d.hasClass('open') && (d.trigger(b = a.Event('hide.bs.dropdown')), b.isDefaultPrevented() || d.removeClass('open').trigger('hidden.bs.dropdown'));
    });
  }
  function c(b) {
    var c = b.attr('data-target');
    c || (c = b.attr('href'), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ''));
    var d = c && a(c);
    return d && d.length ? d : b.parent();
  }
  var d = '.dropdown-backdrop', e = '[data-toggle=dropdown]', f = function (b) {
      a(b).on('click.bs.dropdown', this.toggle);
    };
  f.prototype.toggle = function (d) {
    var e = a(this);
    if (!e.is('.disabled, :disabled')) {
      var f = c(e), g = f.hasClass('open');
      if (b(), !g) {
        if ('ontouchstart' in document.documentElement && !f.closest('.navbar-nav').length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on('click', b), f.trigger(d = a.Event('show.bs.dropdown')), d.isDefaultPrevented())
          return;
        f.toggleClass('open').trigger('shown.bs.dropdown'), e.focus();
      }
      return !1;
    }
  }, f.prototype.keydown = function (b) {
    if (/(38|40|27)/.test(b.keyCode)) {
      var d = a(this);
      if (b.preventDefault(), b.stopPropagation(), !d.is('.disabled, :disabled')) {
        var f = c(d), g = f.hasClass('open');
        if (!g || g && 27 == b.keyCode)
          return 27 == b.which && f.find(e).focus(), d.click();
        var h = a('[role=menu] li:not(.divider):visible a', f);
        if (h.length) {
          var i = h.index(h.filter(':focus'));
          38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), h.eq(i).focus();
        }
      }
    }
  };
  var g = a.fn.dropdown;
  a.fn.dropdown = function (b) {
    return this.each(function () {
      var c = a(this), d = c.data('dropdown');
      d || c.data('dropdown', d = new f(this)), 'string' == typeof b && d[b].call(c);
    });
  }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = g, this;
  }, a(document).on('click.bs.dropdown.data-api', b).on('click.bs.dropdown.data-api', '.dropdown form', function (a) {
    a.stopPropagation();
  }).on('click.bs.dropdown.data-api', e, f.prototype.toggle).on('keydown.bs.dropdown.data-api', e + ', [role=menu]', f.prototype.keydown);
}(window.jQuery), +function (a) {
  'use strict';
  var b = function (b, c) {
    this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.load(this.options.remote);
  };
  b.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, b.prototype.toggle = function (a) {
    return this[this.isShown ? 'hide' : 'show'](a);
  }, b.prototype.show = function (b) {
    var c = this, d = a.Event('show.bs.modal', { relatedTarget: b });
    this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function () {
      var d = a.support.transition && c.$element.hasClass('fade');
      c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show(), d && c.$element[0].offsetWidth, c.$element.addClass('in').attr('aria-hidden', !1), c.enforceFocus();
      var e = a.Event('shown.bs.modal', { relatedTarget: b });
      d ? c.$element.find('.modal-dialog').one(a.support.transition.end, function () {
        c.$element.focus().trigger(e);
      }).emulateTransitionEnd(300) : c.$element.focus().trigger(e);
    }));
  }, b.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event('hide.bs.modal'), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off('focusin.bs.modal'), this.$element.removeClass('in').attr('aria-hidden', !0).off('click.dismiss.modal'), a.support.transition && this.$element.hasClass('fade') ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
  }, b.prototype.enforceFocus = function () {
    a(document).off('focusin.bs.modal').on('focusin.bs.modal', a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
    }, this));
  }, b.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on('keyup.dismiss.bs.modal', a.proxy(function (a) {
      27 == a.which && this.hide();
    }, this)) : this.isShown || this.$element.off('keyup.dismiss.bs.modal');
  }, b.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.removeBackdrop(), a.$element.trigger('hidden.bs.modal');
    });
  }, b.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
  }, b.prototype.backdrop = function (b) {
    var c = this.$element.hasClass('fade') ? 'fade' : '';
    if (this.isShown && this.options.backdrop) {
      var d = a.support.transition && c;
      if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on('click.dismiss.modal', a.proxy(function (a) {
          a.target === a.currentTarget && ('static' == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
        }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass('in'), !b)
        return;
      d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b();
    } else
      !this.isShown && this.$backdrop ? (this.$backdrop.removeClass('in'), a.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b();
  };
  var c = a.fn.modal;
  a.fn.modal = function (c, d) {
    return this.each(function () {
      var e = a(this), f = e.data('bs.modal'), g = a.extend({}, b.DEFAULTS, e.data(), 'object' == typeof c && c);
      f || e.data('bs.modal', f = new b(this, g)), 'string' == typeof c ? f[c](d) : g.show && f.show(d);
    });
  }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function () {
    return a.fn.modal = c, this;
  }, a(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (b) {
    var c = a(this), d = c.attr('href'), e = a(c.attr('data-target') || d && d.replace(/.*(?=#[^\s]+$)/, '')), f = e.data('modal') ? 'toggle' : a.extend({ remote: !/#/.test(d) && d }, e.data(), c.data());
    b.preventDefault(), e.modal(f, this).one('hide', function () {
      c.is(':visible') && c.focus();
    });
  }), a(document).on('show.bs.modal', '.modal', function () {
    a(document.body).addClass('modal-open');
  }).on('hidden.bs.modal', '.modal', function () {
    a(document.body).removeClass('modal-open');
  });
}(window.jQuery), +function (a) {
  'use strict';
  var b = function (a, b) {
    this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init('tooltip', a, b);
  };
  b.DEFAULTS = {
    animation: !0,
    placement: 'top',
    selector: !1,
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: !1,
    container: !1
  }, b.prototype.init = function (b, c, d) {
    this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
    for (var e = this.options.trigger.split(' '), f = e.length; f--;) {
      var g = e[f];
      if ('click' == g)
        this.$element.on('click.' + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ('manual' != g) {
        var h = 'hover' == g ? 'mouseenter' : 'focus', i = 'hover' == g ? 'mouseleave' : 'blur';
        this.$element.on(h + '.' + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + '.' + this.type, this.options.selector, a.proxy(this.leave, this));
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: 'manual',
      selector: ''
    }) : this.fixTitle();
  }, b.prototype.getDefaults = function () {
    return b.DEFAULTS;
  }, b.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && 'number' == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b;
  }, b.prototype.getDelegateOptions = function () {
    var b = {}, c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d);
    }), b;
  }, b.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
    return clearTimeout(c.timeout), c.hoverState = 'in', c.options.delay && c.options.delay.show ? (c.timeout = setTimeout(function () {
      'in' == c.hoverState && c.show();
    }, c.options.delay.show), void 0) : c.show();
  }, b.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type);
    return clearTimeout(c.timeout), c.hoverState = 'out', c.options.delay && c.options.delay.hide ? (c.timeout = setTimeout(function () {
      'out' == c.hoverState && c.hide();
    }, c.options.delay.hide), void 0) : c.hide();
  }, b.prototype.show = function () {
    var b = a.Event('show.bs.' + this.type);
    if (this.hasContent() && this.enabled) {
      if (this.$element.trigger(b), b.isDefaultPrevented())
        return;
      var c = this.tip();
      this.setContent(), this.options.animation && c.addClass('fade');
      var d = 'function' == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement, e = /\s?auto?\s?/i, f = e.test(d);
      f && (d = d.replace(e, '') || 'top'), c.detach().css({
        top: 0,
        left: 0,
        display: 'block'
      }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
      var g = this.getPosition(), h = c[0].offsetWidth, i = c[0].offsetHeight;
      if (f) {
        var j = this.$element.parent(), k = d, l = document.documentElement.scrollTop || document.body.scrollTop, m = 'body' == this.options.container ? window.innerWidth : j.outerWidth(), n = 'body' == this.options.container ? window.innerHeight : j.outerHeight(), o = 'body' == this.options.container ? 0 : j.offset().left;
        d = 'bottom' == d && g.top + g.height + i - l > n ? 'top' : 'top' == d && g.top - l - i < 0 ? 'bottom' : 'right' == d && g.right + h > m ? 'left' : 'left' == d && g.left - h < o ? 'right' : d, c.removeClass(k).addClass(d);
      }
      var p = this.getCalculatedOffset(d, g, h, i);
      this.applyPlacement(p, d), this.$element.trigger('shown.bs.' + this.type);
    }
  }, b.prototype.applyPlacement = function (a, b) {
    var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css('margin-top'), 10), h = parseInt(d.css('margin-left'), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, d.offset(a).addClass('in');
    var i = d[0].offsetWidth, j = d[0].offsetHeight;
    if ('top' == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
      var k = 0;
      a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), this.replaceArrow(k - e + i, i, 'left');
    } else
      this.replaceArrow(j - f, j, 'top');
    c && d.offset(a);
  }, b.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c, a ? 50 * (1 - a / b) + '%' : '');
  }, b.prototype.setContent = function () {
    var a = this.tip(), b = this.getTitle();
    a.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](b), a.removeClass('fade in top bottom left right');
  }, b.prototype.hide = function () {
    function b() {
      'in' != c.hoverState && d.detach();
    }
    var c = this, d = this.tip(), e = a.Event('hide.bs.' + this.type);
    return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass('in'), a.support.transition && this.$tip.hasClass('fade') ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.$element.trigger('hidden.bs.' + this.type), this);
  }, b.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr('title') || 'string' != typeof a.attr('data-original-title')) && a.attr('data-original-title', a.attr('title') || '').attr('title', '');
  }, b.prototype.hasContent = function () {
    return this.getTitle();
  }, b.prototype.getPosition = function () {
    var b = this.$element[0];
    return a.extend({}, 'function' == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
      width: b.offsetWidth,
      height: b.offsetHeight
    }, this.$element.offset());
  }, b.prototype.getCalculatedOffset = function (a, b, c, d) {
    return 'bottom' == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : 'top' == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : 'left' == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    };
  }, b.prototype.getTitle = function () {
    var a, b = this.$element, c = this.options;
    return a = b.attr('data-original-title') || ('function' == typeof c.title ? c.title.call(b[0]) : c.title);
  }, b.prototype.tip = function () {
    return this.$tip = this.$tip || a(this.options.template);
  }, b.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow');
  }, b.prototype.validate = function () {
    this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
  }, b.prototype.enable = function () {
    this.enabled = !0;
  }, b.prototype.disable = function () {
    this.enabled = !1;
  }, b.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled;
  }, b.prototype.toggle = function (b) {
    var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this;
    c.tip().hasClass('in') ? c.leave(c) : c.enter(c);
  }, b.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type);
  };
  var c = a.fn.tooltip;
  a.fn.tooltip = function (c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.tooltip'), f = 'object' == typeof c && c;
      e || d.data('bs.tooltip', e = new b(this, f)), 'string' == typeof c && e[c]();
    });
  }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = c, this;
  };
}(window.jQuery), +function (a) {
  'use strict';
  var b = function (a, b) {
    this.init('popover', a, b);
  };
  if (!a.fn.tooltip)
    throw new Error('Popover requires tooltip.js');
  b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function () {
    return b.DEFAULTS;
  }, b.prototype.setContent = function () {
    var a = this.tip(), b = this.getTitle(), c = this.getContent();
    a.find('.popover-title')[this.options.html ? 'html' : 'text'](b), a.find('.popover-content')[this.options.html ? 'html' : 'text'](c), a.removeClass('fade top bottom left right in'), a.find('.popover-title').html() || a.find('.popover-title').hide();
  }, b.prototype.hasContent = function () {
    return this.getTitle() || this.getContent();
  }, b.prototype.getContent = function () {
    var a = this.$element, b = this.options;
    return a.attr('data-content') || ('function' == typeof b.content ? b.content.call(a[0]) : b.content);
  }, b.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow');
  }, b.prototype.tip = function () {
    return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
  };
  var c = a.fn.popover;
  a.fn.popover = function (c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.popover'), f = 'object' == typeof c && c;
      e || d.data('bs.popover', e = new b(this, f)), 'string' == typeof c && e[c]();
    });
  }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function () {
    return a.fn.popover = c, this;
  };
}(window.jQuery), +function (a) {
  'use strict';
  function b(c, d) {
    var e, f = a.proxy(this.process, this);
    this.$element = a(c).is('body') ? a(window) : a(c), this.$body = a('body'), this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr('href')) && e.replace(/.*(?=#[^\s]+$)/, '') || '') + ' .nav li > a', this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process();
  }
  b.DEFAULTS = { offset: 10 }, b.prototype.refresh = function () {
    var b = this.$element[0] == window ? 'offset' : 'position';
    this.offsets = a([]), this.targets = a([]);
    var c = this;
    this.$body.find(this.selector).map(function () {
      var d = a(this), e = d.data('target') || d.attr('href'), f = /^#\w/.test(e) && a(e);
      return f && f.length && [[
          f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()),
          e
        ]] || null;
    }).sort(function (a, b) {
      return a[0] - b[0];
    }).each(function () {
      c.offsets.push(this[0]), c.targets.push(this[1]);
    });
  }, b.prototype.process = function () {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
    if (b >= d)
      return g != (a = f.last()[0]) && this.activate(a);
    for (a = e.length; a--;)
      g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, a(this.selector).parents('.active').removeClass('active');
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents('li').addClass('active');
    d.parent('.dropdown-menu').length && (d = d.closest('li.dropdown').addClass('active')), d.trigger('activate');
  };
  var c = a.fn.scrollspy;
  a.fn.scrollspy = function (c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.scrollspy'), f = 'object' == typeof c && c;
      e || d.data('bs.scrollspy', e = new b(this, f)), 'string' == typeof c && e[c]();
    });
  }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = c, this;
  }, a(window).on('load', function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      b.scrollspy(b.data());
    });
  });
}(window.jQuery), +function (a) {
  'use strict';
  var b = function (b) {
    this.element = a(b);
  };
  b.prototype.show = function () {
    var b = this.element, c = b.closest('ul:not(.dropdown-menu)'), d = b.attr('data-target');
    if (d || (d = b.attr('href'), d = d && d.replace(/.*(?=#[^\s]*$)/, '')), !b.parent('li').hasClass('active')) {
      var e = c.find('.active:last a')[0], f = a.Event('show.bs.tab', { relatedTarget: e });
      if (b.trigger(f), !f.isDefaultPrevented()) {
        var g = a(d);
        this.activate(b.parent('li'), c), this.activate(g, g.parent(), function () {
          b.trigger({
            type: 'shown.bs.tab',
            relatedTarget: e
          });
        });
      }
    }
  }, b.prototype.activate = function (b, c, d) {
    function e() {
      f.removeClass('active').find('> .dropdown-menu > .active').removeClass('active'), b.addClass('active'), g ? (b[0].offsetWidth, b.addClass('in')) : b.removeClass('fade'), b.parent('.dropdown-menu') && b.closest('li.dropdown').addClass('active'), d && d();
    }
    var f = c.find('> .active'), g = d && a.support.transition && f.hasClass('fade');
    g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass('in');
  };
  var c = a.fn.tab;
  a.fn.tab = function (c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.tab');
      e || d.data('bs.tab', e = new b(this)), 'string' == typeof c && e[c]();
    });
  }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function () {
    return a.fn.tab = c, this;
  }, a(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (b) {
    b.preventDefault(), a(this).tab('show');
  });
}(window.jQuery), +function (a) {
  'use strict';
  var b = function (c, d) {
    this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on('scroll.bs.affix.data-api', a.proxy(this.checkPosition, this)).on('click.bs.affix.data-api', a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition();
  };
  b.RESET = 'affix affix-top affix-bottom', b.DEFAULTS = { offset: 0 }, b.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1);
  }, b.prototype.checkPosition = function () {
    if (this.$element.is(':visible')) {
      var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
      'object' != typeof f && (h = g = f), 'function' == typeof g && (g = f.top()), 'function' == typeof h && (h = f.bottom());
      var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? 'bottom' : null != g && g >= d ? 'top' : !1;
      this.affixed !== i && (this.unpin && this.$element.css('top', ''), this.affixed = i, this.unpin = 'bottom' == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass('affix' + (i ? '-' + i : '')), 'bottom' == i && this.$element.offset({ top: document.body.offsetHeight - h - this.$element.height() }));
    }
  };
  var c = a.fn.affix;
  a.fn.affix = function (c) {
    return this.each(function () {
      var d = a(this), e = d.data('bs.affix'), f = 'object' == typeof c && c;
      e || d.data('bs.affix', e = new b(this, f)), 'string' == typeof c && e[c]();
    });
  }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function () {
    return a.fn.affix = c, this;
  }, a(window).on('load', function () {
    a('[data-spy="affix"]').each(function () {
      var b = a(this), c = b.data();
      c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
    });
  });
}(window.jQuery);
!function () {
  var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, v = e.reduce, h = e.reduceRight, d = e.filter, g = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, _ = Object.keys, w = i.bind, j = function (n) {
      return n instanceof j ? n : this instanceof j ? (this._wrapped = n, void 0) : new j(n);
    };
  'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = '1.5.1';
  var A = j.each = j.forEach = function (n, t, e) {
      if (null != n)
        if (s && n.forEach === s)
          n.forEach(t, e);
        else if (n.length === +n.length) {
          for (var u = 0, i = n.length; i > u; u++)
            if (t.call(e, n[u], u, n) === r)
              return;
        } else
          for (var a in n)
            if (j.has(n, a) && t.call(e, n[a], a, n) === r)
              return;
    };
  j.map = j.collect = function (n, t, r) {
    var e = [];
    return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function (n, u, i) {
      e.push(t.call(r, n, u, i));
    }), e);
  };
  var E = 'Reduce of empty array with no initial value';
  j.reduce = j.foldl = j.inject = function (n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), v && n.reduce === v)
      return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t);
    if (A(n, function (n, i, a) {
        u ? r = t.call(e, r, n, i, a) : (r = n, u = !0);
      }), !u)
      throw new TypeError(E);
    return r;
  }, j.reduceRight = j.foldr = function (n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), h && n.reduceRight === h)
      return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
    var i = n.length;
    if (i !== +i) {
      var a = j.keys(n);
      i = a.length;
    }
    if (A(n, function (o, c, l) {
        c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0);
      }), !u)
      throw new TypeError(E);
    return r;
  }, j.find = j.detect = function (n, t, r) {
    var e;
    return O(n, function (n, u, i) {
      return t.call(r, n, u, i) ? (e = n, !0) : void 0;
    }), e;
  }, j.filter = j.select = function (n, t, r) {
    var e = [];
    return null == n ? e : d && n.filter === d ? n.filter(t, r) : (A(n, function (n, u, i) {
      t.call(r, n, u, i) && e.push(n);
    }), e);
  }, j.reject = function (n, t, r) {
    return j.filter(n, function (n, e, u) {
      return !t.call(r, n, e, u);
    }, r);
  }, j.every = j.all = function (n, t, e) {
    t || (t = j.identity);
    var u = !0;
    return null == n ? u : g && n.every === g ? n.every(t, e) : (A(n, function (n, i, a) {
      return (u = u && t.call(e, n, i, a)) ? void 0 : r;
    }), !!u);
  };
  var O = j.some = j.any = function (n, t, e) {
      t || (t = j.identity);
      var u = !1;
      return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function (n, i, a) {
        return u || (u = t.call(e, n, i, a)) ? r : void 0;
      }), !!u);
    };
  j.contains = j.include = function (n, t) {
    return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : O(n, function (n) {
      return n === t;
    });
  }, j.invoke = function (n, t) {
    var r = o.call(arguments, 2), e = j.isFunction(t);
    return j.map(n, function (n) {
      return (e ? t : n[t]).apply(n, r);
    });
  }, j.pluck = function (n, t) {
    return j.map(n, function (n) {
      return n[t];
    });
  }, j.where = function (n, t, r) {
    return j.isEmpty(t) ? r ? void 0 : [] : j[r ? 'find' : 'filter'](n, function (n) {
      for (var r in t)
        if (t[r] !== n[r])
          return !1;
      return !0;
    });
  }, j.findWhere = function (n, t) {
    return j.where(n, t, !0);
  }, j.max = function (n, t, r) {
    if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)
      return Math.max.apply(Math, n);
    if (!t && j.isEmpty(n))
      return -1 / 0;
    var e = {
        computed: -1 / 0,
        value: -1 / 0
      };
    return A(n, function (n, u, i) {
      var a = t ? t.call(r, n, u, i) : n;
      a > e.computed && (e = {
        value: n,
        computed: a
      });
    }), e.value;
  }, j.min = function (n, t, r) {
    if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535)
      return Math.min.apply(Math, n);
    if (!t && j.isEmpty(n))
      return 1 / 0;
    var e = {
        computed: 1 / 0,
        value: 1 / 0
      };
    return A(n, function (n, u, i) {
      var a = t ? t.call(r, n, u, i) : n;
      a < e.computed && (e = {
        value: n,
        computed: a
      });
    }), e.value;
  }, j.shuffle = function (n) {
    var t, r = 0, e = [];
    return A(n, function (n) {
      t = j.random(r++), e[r - 1] = e[t], e[t] = n;
    }), e;
  };
  var F = function (n) {
    return j.isFunction(n) ? n : function (t) {
      return t[n];
    };
  };
  j.sortBy = function (n, t, r) {
    var e = F(t);
    return j.pluck(j.map(n, function (n, t, u) {
      return {
        value: n,
        index: t,
        criteria: e.call(r, n, t, u)
      };
    }).sort(function (n, t) {
      var r = n.criteria, e = t.criteria;
      if (r !== e) {
        if (r > e || r === void 0)
          return 1;
        if (e > r || e === void 0)
          return -1;
      }
      return n.index < t.index ? -1 : 1;
    }), 'value');
  };
  var k = function (n, t, r, e) {
    var u = {}, i = F(null == t ? j.identity : t);
    return A(n, function (t, a) {
      var o = i.call(r, t, a, n);
      e(u, o, t);
    }), u;
  };
  j.groupBy = function (n, t, r) {
    return k(n, t, r, function (n, t, r) {
      (j.has(n, t) ? n[t] : n[t] = []).push(r);
    });
  }, j.countBy = function (n, t, r) {
    return k(n, t, r, function (n, t) {
      j.has(n, t) || (n[t] = 0), n[t]++;
    });
  }, j.sortedIndex = function (n, t, r, e) {
    r = null == r ? j.identity : F(r);
    for (var u = r.call(e, t), i = 0, a = n.length; a > i;) {
      var o = i + a >>> 1;
      r.call(e, n[o]) < u ? i = o + 1 : a = o;
    }
    return i;
  }, j.toArray = function (n) {
    return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : [];
  }, j.size = function (n) {
    return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length;
  }, j.first = j.head = j.take = function (n, t, r) {
    return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t);
  }, j.initial = function (n, t, r) {
    return o.call(n, 0, n.length - (null == t || r ? 1 : t));
  }, j.last = function (n, t, r) {
    return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0));
  }, j.rest = j.tail = j.drop = function (n, t, r) {
    return o.call(n, null == t || r ? 1 : t);
  }, j.compact = function (n) {
    return j.filter(n, j.identity);
  };
  var R = function (n, t, r) {
    return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function (n) {
      j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : R(n, t, r) : r.push(n);
    }), r);
  };
  j.flatten = function (n, t) {
    return R(n, t, []);
  }, j.without = function (n) {
    return j.difference(n, o.call(arguments, 1));
  }, j.uniq = j.unique = function (n, t, r, e) {
    j.isFunction(t) && (e = r, r = t, t = !1);
    var u = r ? j.map(n, r, e) : n, i = [], a = [];
    return A(u, function (r, e) {
      (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e]));
    }), i;
  }, j.union = function () {
    return j.uniq(j.flatten(arguments, !0));
  }, j.intersection = function (n) {
    var t = o.call(arguments, 1);
    return j.filter(j.uniq(n), function (n) {
      return j.every(t, function (t) {
        return j.indexOf(t, n) >= 0;
      });
    });
  }, j.difference = function (n) {
    var t = c.apply(e, o.call(arguments, 1));
    return j.filter(n, function (n) {
      return !j.contains(t, n);
    });
  }, j.zip = function () {
    for (var n = j.max(j.pluck(arguments, 'length').concat(0)), t = new Array(n), r = 0; n > r; r++)
      t[r] = j.pluck(arguments, '' + r);
    return t;
  }, j.object = function (n, t) {
    if (null == n)
      return {};
    for (var r = {}, e = 0, u = n.length; u > e; e++)
      t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
    return r;
  }, j.indexOf = function (n, t, r) {
    if (null == n)
      return -1;
    var e = 0, u = n.length;
    if (r) {
      if ('number' != typeof r)
        return e = j.sortedIndex(n, t), n[e] === t ? e : -1;
      e = 0 > r ? Math.max(0, u + r) : r;
    }
    if (y && n.indexOf === y)
      return n.indexOf(t, r);
    for (; u > e; e++)
      if (n[e] === t)
        return e;
    return -1;
  }, j.lastIndexOf = function (n, t, r) {
    if (null == n)
      return -1;
    var e = null != r;
    if (b && n.lastIndexOf === b)
      return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
    for (var u = e ? r : n.length; u--;)
      if (n[u] === t)
        return u;
    return -1;
  }, j.range = function (n, t, r) {
    arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1;
    for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e); e > u;)
      i[u++] = n, n += r;
    return i;
  };
  var M = function () {
  };
  j.bind = function (n, t) {
    var r, e;
    if (w && n.bind === w)
      return w.apply(n, o.call(arguments, 1));
    if (!j.isFunction(n))
      throw new TypeError();
    return r = o.call(arguments, 2), e = function () {
      if (!(this instanceof e))
        return n.apply(t, r.concat(o.call(arguments)));
      M.prototype = n.prototype;
      var u = new M();
      M.prototype = null;
      var i = n.apply(u, r.concat(o.call(arguments)));
      return Object(i) === i ? i : u;
    };
  }, j.partial = function (n) {
    var t = o.call(arguments, 1);
    return function () {
      return n.apply(this, t.concat(o.call(arguments)));
    };
  }, j.bindAll = function (n) {
    var t = o.call(arguments, 1);
    if (0 === t.length)
      throw new Error('bindAll must be passed function names');
    return A(t, function (t) {
      n[t] = j.bind(n[t], n);
    }), n;
  }, j.memoize = function (n, t) {
    var r = {};
    return t || (t = j.identity), function () {
      var e = t.apply(this, arguments);
      return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments);
    };
  }, j.delay = function (n, t) {
    var r = o.call(arguments, 2);
    return setTimeout(function () {
      return n.apply(null, r);
    }, t);
  }, j.defer = function (n) {
    return j.delay.apply(j, [
      n,
      1
    ].concat(o.call(arguments, 1)));
  }, j.throttle = function (n, t, r) {
    var e, u, i, a = null, o = 0;
    r || (r = {});
    var c = function () {
      o = r.leading === !1 ? 0 : new Date(), a = null, i = n.apply(e, u);
    };
    return function () {
      var l = new Date();
      o || r.leading !== !1 || (o = l);
      var f = t - (l - o);
      return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u)) : a || r.trailing === !1 || (a = setTimeout(c, f)), i;
    };
  }, j.debounce = function (n, t, r) {
    var e, u = null;
    return function () {
      var i = this, a = arguments, o = function () {
          u = null, r || (e = n.apply(i, a));
        }, c = r && !u;
      return clearTimeout(u), u = setTimeout(o, t), c && (e = n.apply(i, a)), e;
    };
  }, j.once = function (n) {
    var t, r = !1;
    return function () {
      return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t);
    };
  }, j.wrap = function (n, t) {
    return function () {
      var r = [n];
      return a.apply(r, arguments), t.apply(this, r);
    };
  }, j.compose = function () {
    var n = arguments;
    return function () {
      for (var t = arguments, r = n.length - 1; r >= 0; r--)
        t = [n[r].apply(this, t)];
      return t[0];
    };
  }, j.after = function (n, t) {
    return function () {
      return --n < 1 ? t.apply(this, arguments) : void 0;
    };
  }, j.keys = _ || function (n) {
    if (n !== Object(n))
      throw new TypeError('Invalid object');
    var t = [];
    for (var r in n)
      j.has(n, r) && t.push(r);
    return t;
  }, j.values = function (n) {
    var t = [];
    for (var r in n)
      j.has(n, r) && t.push(n[r]);
    return t;
  }, j.pairs = function (n) {
    var t = [];
    for (var r in n)
      j.has(n, r) && t.push([
        r,
        n[r]
      ]);
    return t;
  }, j.invert = function (n) {
    var t = {};
    for (var r in n)
      j.has(n, r) && (t[n[r]] = r);
    return t;
  }, j.functions = j.methods = function (n) {
    var t = [];
    for (var r in n)
      j.isFunction(n[r]) && t.push(r);
    return t.sort();
  }, j.extend = function (n) {
    return A(o.call(arguments, 1), function (t) {
      if (t)
        for (var r in t)
          n[r] = t[r];
    }), n;
  }, j.pick = function (n) {
    var t = {}, r = c.apply(e, o.call(arguments, 1));
    return A(r, function (r) {
      r in n && (t[r] = n[r]);
    }), t;
  }, j.omit = function (n) {
    var t = {}, r = c.apply(e, o.call(arguments, 1));
    for (var u in n)
      j.contains(r, u) || (t[u] = n[u]);
    return t;
  }, j.defaults = function (n) {
    return A(o.call(arguments, 1), function (t) {
      if (t)
        for (var r in t)
          n[r] === void 0 && (n[r] = t[r]);
    }), n;
  }, j.clone = function (n) {
    return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n;
  }, j.tap = function (n, t) {
    return t(n), n;
  };
  var S = function (n, t, r, e) {
    if (n === t)
      return 0 !== n || 1 / n == 1 / t;
    if (null == n || null == t)
      return n === t;
    n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped);
    var u = l.call(n);
    if (u != l.call(t))
      return !1;
    switch (u) {
    case '[object String]':
      return n == String(t);
    case '[object Number]':
      return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
    case '[object Date]':
    case '[object Boolean]':
      return +n == +t;
    case '[object RegExp]':
      return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase;
    }
    if ('object' != typeof n || 'object' != typeof t)
      return !1;
    for (var i = r.length; i--;)
      if (r[i] == n)
        return e[i] == t;
    var a = n.constructor, o = t.constructor;
    if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o))
      return !1;
    r.push(n), e.push(t);
    var c = 0, f = !0;
    if ('[object Array]' == u) {
      if (c = n.length, f = c == t.length)
        for (; c-- && (f = S(n[c], t[c], r, e)););
    } else {
      for (var s in n)
        if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e))))
          break;
      if (f) {
        for (s in t)
          if (j.has(t, s) && !c--)
            break;
        f = !c;
      }
    }
    return r.pop(), e.pop(), f;
  };
  j.isEqual = function (n, t) {
    return S(n, t, [], []);
  }, j.isEmpty = function (n) {
    if (null == n)
      return !0;
    if (j.isArray(n) || j.isString(n))
      return 0 === n.length;
    for (var t in n)
      if (j.has(n, t))
        return !1;
    return !0;
  }, j.isElement = function (n) {
    return !(!n || 1 !== n.nodeType);
  }, j.isArray = x || function (n) {
    return '[object Array]' == l.call(n);
  }, j.isObject = function (n) {
    return n === Object(n);
  }, A([
    'Arguments',
    'Function',
    'String',
    'Number',
    'Date',
    'RegExp'
  ], function (n) {
    j['is' + n] = function (t) {
      return l.call(t) == '[object ' + n + ']';
    };
  }), j.isArguments(arguments) || (j.isArguments = function (n) {
    return !(!n || !j.has(n, 'callee'));
  }), 'function' != typeof /./ && (j.isFunction = function (n) {
    return 'function' == typeof n;
  }), j.isFinite = function (n) {
    return isFinite(n) && !isNaN(parseFloat(n));
  }, j.isNaN = function (n) {
    return j.isNumber(n) && n != +n;
  }, j.isBoolean = function (n) {
    return n === !0 || n === !1 || '[object Boolean]' == l.call(n);
  }, j.isNull = function (n) {
    return null === n;
  }, j.isUndefined = function (n) {
    return n === void 0;
  }, j.has = function (n, t) {
    return f.call(n, t);
  }, j.noConflict = function () {
    return n._ = t, this;
  }, j.identity = function (n) {
    return n;
  }, j.times = function (n, t, r) {
    for (var e = Array(Math.max(0, n)), u = 0; n > u; u++)
      e[u] = t.call(r, u);
    return e;
  }, j.random = function (n, t) {
    return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1));
  };
  var I = {
      escape: {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#x27;',
        '/': '&#x2F;'
      }
    };
  I.unescape = j.invert(I.escape);
  var T = {
      escape: new RegExp('[' + j.keys(I.escape).join('') + ']', 'g'),
      unescape: new RegExp('(' + j.keys(I.unescape).join('|') + ')', 'g')
    };
  j.each([
    'escape',
    'unescape'
  ], function (n) {
    j[n] = function (t) {
      return null == t ? '' : ('' + t).replace(T[n], function (t) {
        return I[n][t];
      });
    };
  }), j.result = function (n, t) {
    if (null == n)
      return void 0;
    var r = n[t];
    return j.isFunction(r) ? r.call(n) : r;
  }, j.mixin = function (n) {
    A(j.functions(n), function (t) {
      var r = j[t] = n[t];
      j.prototype[t] = function () {
        var n = [this._wrapped];
        return a.apply(n, arguments), z.call(this, r.apply(j, n));
      };
    });
  };
  var N = 0;
  j.uniqueId = function (n) {
    var t = ++N + '';
    return n ? n + t : t;
  }, j.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var q = /(.)^/, B = {
      '\'': '\'',
      '\\': '\\',
      '\r': 'r',
      '\n': 'n',
      '\t': 't',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  j.template = function (n, t, r) {
    var e;
    r = j.defaults({}, r, j.templateSettings);
    var u = new RegExp([
        (r.escape || q).source,
        (r.interpolate || q).source,
        (r.evaluate || q).source
      ].join('|') + '|$', 'g'), i = 0, a = '__p+=\'';
    n.replace(u, function (t, r, e, u, o) {
      return a += n.slice(i, o).replace(D, function (n) {
        return '\\' + B[n];
      }), r && (a += '\'+\n((__t=(' + r + '))==null?\'\':_.escape(__t))+\n\''), e && (a += '\'+\n((__t=(' + e + '))==null?\'\':__t)+\n\''), u && (a += '\';\n' + u + '\n__p+=\''), i = o + t.length, t;
    }), a += '\';\n', r.variable || (a = 'with(obj||{}){\n' + a + '}\n'), a = 'var __t,__p=\'\',__j=Array.prototype.join,' + 'print=function(){__p+=__j.call(arguments,\'\');};\n' + a + 'return __p;\n';
    try {
      e = new Function(r.variable || 'obj', '_', a);
    } catch (o) {
      throw o.source = a, o;
    }
    if (t)
      return e(t, j);
    var c = function (n) {
      return e.call(this, n, j);
    };
    return c.source = 'function(' + (r.variable || 'obj') + '){\n' + a + '}', c;
  }, j.chain = function (n) {
    return j(n).chain();
  };
  var z = function (n) {
    return this._chain ? j(n).chain() : n;
  };
  j.mixin(j), A([
    'pop',
    'push',
    'reverse',
    'shift',
    'sort',
    'splice',
    'unshift'
  ], function (n) {
    var t = e[n];
    j.prototype[n] = function () {
      var r = this._wrapped;
      return t.apply(r, arguments), 'shift' != n && 'splice' != n || 0 !== r.length || delete r[0], z.call(this, r);
    };
  }), A([
    'concat',
    'join',
    'slice'
  ], function (n) {
    var t = e[n];
    j.prototype[n] = function () {
      return z.call(this, t.apply(this._wrapped, arguments));
    };
  }), j.extend(j.prototype, {
    chain: function () {
      return this._chain = !0, this;
    },
    value: function () {
      return this._wrapped;
    }
  });
}.call(this);
(function (t) {
  t.Parse = t.Parse || {}, t.Parse.VERSION = 'js1.2.8';
}(this), function () {
  var t = this, e = t._, n = {}, i = Array.prototype, r = Object.prototype, s = Function.prototype, a = i.push, o = i.slice, u = i.concat, c = r.toString, l = r.hasOwnProperty, h = i.forEach, f = i.map, d = i.reduce, p = i.reduceRight, _ = i.filter, m = i.every, v = i.some, g = i.indexOf, b = i.lastIndexOf, y = Array.isArray, O = Object.keys, x = s.bind, w = function (t) {
      return t instanceof w ? t : this instanceof w ? (this._wrapped = t, void 0) : new w(t);
    };
  'undefined' != typeof exports ? ('undefined' != typeof module && module.exports && (exports = module.exports = w), exports._ = w) : t._ = w, w.VERSION = '1.4.4';
  var E = w.each = w.forEach = function (t, e, i) {
      if (null != t)
        if (h && t.forEach === h)
          t.forEach(e, i);
        else if (t.length === +t.length) {
          for (var r = 0, s = t.length; s > r; r++)
            if (e.call(i, t[r], r, t) === n)
              return;
        } else
          for (var a in t)
            if (w.has(t, a) && e.call(i, t[a], a, t) === n)
              return;
    };
  w.map = w.collect = function (t, e, n) {
    var i = [];
    return null == t ? i : f && t.map === f ? t.map(e, n) : (E(t, function (t, r, s) {
      i[i.length] = e.call(n, t, r, s);
    }), i);
  };
  var S = 'Reduce of empty array with no initial value';
  w.reduce = w.foldl = w.inject = function (t, e, n, i) {
    var r = arguments.length > 2;
    if (null == t && (t = []), d && t.reduce === d)
      return i && (e = w.bind(e, i)), r ? t.reduce(e, n) : t.reduce(e);
    if (E(t, function (t, s, a) {
        r ? n = e.call(i, n, t, s, a) : (n = t, r = !0);
      }), !r)
      throw new TypeError(S);
    return n;
  }, w.reduceRight = w.foldr = function (t, e, n, i) {
    var r = arguments.length > 2;
    if (null == t && (t = []), p && t.reduceRight === p)
      return i && (e = w.bind(e, i)), r ? t.reduceRight(e, n) : t.reduceRight(e);
    var s = t.length;
    if (s !== +s) {
      var a = w.keys(t);
      s = a.length;
    }
    if (E(t, function (o, u, c) {
        u = a ? a[--s] : --s, r ? n = e.call(i, n, t[u], u, c) : (n = t[u], r = !0);
      }), !r)
      throw new TypeError(S);
    return n;
  }, w.find = w.detect = function (t, e, n) {
    var i;
    return A(t, function (t, r, s) {
      return e.call(n, t, r, s) ? (i = t, !0) : void 0;
    }), i;
  }, w.filter = w.select = function (t, e, n) {
    var i = [];
    return null == t ? i : _ && t.filter === _ ? t.filter(e, n) : (E(t, function (t, r, s) {
      e.call(n, t, r, s) && (i[i.length] = t);
    }), i);
  }, w.reject = function (t, e, n) {
    return w.filter(t, function (t, i, r) {
      return !e.call(n, t, i, r);
    }, n);
  }, w.every = w.all = function (t, e, i) {
    e || (e = w.identity);
    var r = !0;
    return null == t ? r : m && t.every === m ? t.every(e, i) : (E(t, function (t, s, a) {
      return (r = r && e.call(i, t, s, a)) ? void 0 : n;
    }), !!r);
  };
  var A = w.some = w.any = function (t, e, i) {
      e || (e = w.identity);
      var r = !1;
      return null == t ? r : v && t.some === v ? t.some(e, i) : (E(t, function (t, s, a) {
        return r || (r = e.call(i, t, s, a)) ? n : void 0;
      }), !!r);
    };
  w.contains = w.include = function (t, e) {
    return null == t ? !1 : g && t.indexOf === g ? -1 != t.indexOf(e) : A(t, function (t) {
      return t === e;
    });
  }, w.invoke = function (t, e) {
    var n = o.call(arguments, 2), i = w.isFunction(e);
    return w.map(t, function (t) {
      return (i ? e : t[e]).apply(t, n);
    });
  }, w.pluck = function (t, e) {
    return w.map(t, function (t) {
      return t[e];
    });
  }, w.where = function (t, e, n) {
    return w.isEmpty(e) ? n ? null : [] : w[n ? 'find' : 'filter'](t, function (t) {
      for (var n in e)
        if (e[n] !== t[n])
          return !1;
      return !0;
    });
  }, w.findWhere = function (t, e) {
    return w.where(t, e, !0);
  }, w.max = function (t, e, n) {
    if (!e && w.isArray(t) && t[0] === +t[0] && 65535 > t.length)
      return Math.max.apply(Math, t);
    if (!e && w.isEmpty(t))
      return -1 / 0;
    var i = {
        computed: -1 / 0,
        value: -1 / 0
      };
    return E(t, function (t, r, s) {
      var a = e ? e.call(n, t, r, s) : t;
      a >= i.computed && (i = {
        value: t,
        computed: a
      });
    }), i.value;
  }, w.min = function (t, e, n) {
    if (!e && w.isArray(t) && t[0] === +t[0] && 65535 > t.length)
      return Math.min.apply(Math, t);
    if (!e && w.isEmpty(t))
      return 1 / 0;
    var i = {
        computed: 1 / 0,
        value: 1 / 0
      };
    return E(t, function (t, r, s) {
      var a = e ? e.call(n, t, r, s) : t;
      i.computed > a && (i = {
        value: t,
        computed: a
      });
    }), i.value;
  }, w.shuffle = function (t) {
    var e, n = 0, i = [];
    return E(t, function (t) {
      e = w.random(n++), i[n - 1] = i[e], i[e] = t;
    }), i;
  };
  var j = function (t) {
    return w.isFunction(t) ? t : function (e) {
      return e[t];
    };
  };
  w.sortBy = function (t, e, n) {
    var i = j(e);
    return w.pluck(w.map(t, function (t, e, r) {
      return {
        value: t,
        index: e,
        criteria: i.call(n, t, e, r)
      };
    }).sort(function (t, e) {
      var n = t.criteria, i = e.criteria;
      if (n !== i) {
        if (n > i || void 0 === n)
          return 1;
        if (i > n || void 0 === i)
          return -1;
      }
      return t.index < e.index ? -1 : 1;
    }), 'value');
  };
  var N = function (t, e, n, i) {
    var r = {}, s = j(e || w.identity);
    return E(t, function (e, a) {
      var o = s.call(n, e, a, t);
      i(r, o, e);
    }), r;
  };
  w.groupBy = function (t, e, n) {
    return N(t, e, n, function (t, e, n) {
      (w.has(t, e) ? t[e] : t[e] = []).push(n);
    });
  }, w.countBy = function (t, e, n) {
    return N(t, e, n, function (t, e) {
      w.has(t, e) || (t[e] = 0), t[e]++;
    });
  }, w.sortedIndex = function (t, e, n, i) {
    n = null == n ? w.identity : j(n);
    for (var r = n.call(i, e), s = 0, a = t.length; a > s;) {
      var o = s + a >>> 1;
      r > n.call(i, t[o]) ? s = o + 1 : a = o;
    }
    return s;
  }, w.toArray = function (t) {
    return t ? w.isArray(t) ? o.call(t) : t.length === +t.length ? w.map(t, w.identity) : w.values(t) : [];
  }, w.size = function (t) {
    return null == t ? 0 : t.length === +t.length ? t.length : w.keys(t).length;
  }, w.first = w.head = w.take = function (t, e, n) {
    return null == t ? void 0 : null == e || n ? t[0] : o.call(t, 0, e);
  }, w.initial = function (t, e, n) {
    return o.call(t, 0, t.length - (null == e || n ? 1 : e));
  }, w.last = function (t, e, n) {
    return null == t ? void 0 : null == e || n ? t[t.length - 1] : o.call(t, Math.max(t.length - e, 0));
  }, w.rest = w.tail = w.drop = function (t, e, n) {
    return o.call(t, null == e || n ? 1 : e);
  }, w.compact = function (t) {
    return w.filter(t, w.identity);
  };
  var C = function (t, e, n) {
    return E(t, function (t) {
      w.isArray(t) ? e ? a.apply(n, t) : C(t, e, n) : n.push(t);
    }), n;
  };
  w.flatten = function (t, e) {
    return C(t, e, []);
  }, w.without = function (t) {
    return w.difference(t, o.call(arguments, 1));
  }, w.uniq = w.unique = function (t, e, n, i) {
    w.isFunction(e) && (i = n, n = e, e = !1);
    var r = n ? w.map(t, n, i) : t, s = [], a = [];
    return E(r, function (n, i) {
      (e ? i && a[a.length - 1] === n : w.contains(a, n)) || (a.push(n), s.push(t[i]));
    }), s;
  }, w.union = function () {
    return w.uniq(u.apply(i, arguments));
  }, w.intersection = function (t) {
    var e = o.call(arguments, 1);
    return w.filter(w.uniq(t), function (t) {
      return w.every(e, function (e) {
        return w.indexOf(e, t) >= 0;
      });
    });
  }, w.difference = function (t) {
    var e = u.apply(i, o.call(arguments, 1));
    return w.filter(t, function (t) {
      return !w.contains(e, t);
    });
  }, w.zip = function () {
    for (var t = o.call(arguments), e = w.max(w.pluck(t, 'length')), n = Array(e), i = 0; e > i; i++)
      n[i] = w.pluck(t, '' + i);
    return n;
  }, w.object = function (t, e) {
    if (null == t)
      return {};
    for (var n = {}, i = 0, r = t.length; r > i; i++)
      e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
    return n;
  }, w.indexOf = function (t, e, n) {
    if (null == t)
      return -1;
    var i = 0, r = t.length;
    if (n) {
      if ('number' != typeof n)
        return i = w.sortedIndex(t, e), t[i] === e ? i : -1;
      i = 0 > n ? Math.max(0, r + n) : n;
    }
    if (g && t.indexOf === g)
      return t.indexOf(e, n);
    for (; r > i; i++)
      if (t[i] === e)
        return i;
    return -1;
  }, w.lastIndexOf = function (t, e, n) {
    if (null == t)
      return -1;
    var i = null != n;
    if (b && t.lastIndexOf === b)
      return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
    for (var r = i ? n : t.length; r--;)
      if (t[r] === e)
        return r;
    return -1;
  }, w.range = function (t, e, n) {
    1 >= arguments.length && (e = t || 0, t = 0), n = arguments[2] || 1;
    for (var i = Math.max(Math.ceil((e - t) / n), 0), r = 0, s = Array(i); i > r;)
      s[r++] = t, t += n;
    return s;
  }, w.bind = function (t, e) {
    if (t.bind === x && x)
      return x.apply(t, o.call(arguments, 1));
    var n = o.call(arguments, 2);
    return function () {
      return t.apply(e, n.concat(o.call(arguments)));
    };
  }, w.partial = function (t) {
    var e = o.call(arguments, 1);
    return function () {
      return t.apply(this, e.concat(o.call(arguments)));
    };
  }, w.bindAll = function (t) {
    var e = o.call(arguments, 1);
    return 0 === e.length && (e = w.functions(t)), E(e, function (e) {
      t[e] = w.bind(t[e], t);
    }), t;
  }, w.memoize = function (t, e) {
    var n = {};
    return e || (e = w.identity), function () {
      var i = e.apply(this, arguments);
      return w.has(n, i) ? n[i] : n[i] = t.apply(this, arguments);
    };
  }, w.delay = function (t, e) {
    var n = o.call(arguments, 2);
    return setTimeout(function () {
      return t.apply(null, n);
    }, e);
  }, w.defer = function (t) {
    return w.delay.apply(w, [
      t,
      1
    ].concat(o.call(arguments, 1)));
  }, w.throttle = function (t, e) {
    var n, i, r, s, a = 0, o = function () {
        a = new Date(), r = null, s = t.apply(n, i);
      };
    return function () {
      var u = new Date(), c = e - (u - a);
      return n = this, i = arguments, 0 >= c ? (clearTimeout(r), r = null, a = u, s = t.apply(n, i)) : r || (r = setTimeout(o, c)), s;
    };
  }, w.debounce = function (t, e, n) {
    var i, r;
    return function () {
      var s = this, a = arguments, o = function () {
          i = null, n || (r = t.apply(s, a));
        }, u = n && !i;
      return clearTimeout(i), i = setTimeout(o, e), u && (r = t.apply(s, a)), r;
    };
  }, w.once = function (t) {
    var e, n = !1;
    return function () {
      return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e);
    };
  }, w.wrap = function (t, e) {
    return function () {
      var n = [t];
      return a.apply(n, arguments), e.apply(this, n);
    };
  }, w.compose = function () {
    var t = arguments;
    return function () {
      for (var e = arguments, n = t.length - 1; n >= 0; n--)
        e = [t[n].apply(this, e)];
      return e[0];
    };
  }, w.after = function (t, e) {
    return 0 >= t ? e() : function () {
      return 1 > --t ? e.apply(this, arguments) : void 0;
    };
  }, w.keys = O || function (t) {
    if (t !== Object(t))
      throw new TypeError('Invalid object');
    var e = [];
    for (var n in t)
      w.has(t, n) && (e[e.length] = n);
    return e;
  }, w.values = function (t) {
    var e = [];
    for (var n in t)
      w.has(t, n) && e.push(t[n]);
    return e;
  }, w.pairs = function (t) {
    var e = [];
    for (var n in t)
      w.has(t, n) && e.push([
        n,
        t[n]
      ]);
    return e;
  }, w.invert = function (t) {
    var e = {};
    for (var n in t)
      w.has(t, n) && (e[t[n]] = n);
    return e;
  }, w.functions = w.methods = function (t) {
    var e = [];
    for (var n in t)
      w.isFunction(t[n]) && e.push(n);
    return e.sort();
  }, w.extend = function (t) {
    return E(o.call(arguments, 1), function (e) {
      if (e)
        for (var n in e)
          t[n] = e[n];
    }), t;
  }, w.pick = function (t) {
    var e = {}, n = u.apply(i, o.call(arguments, 1));
    return E(n, function (n) {
      n in t && (e[n] = t[n]);
    }), e;
  }, w.omit = function (t) {
    var e = {}, n = u.apply(i, o.call(arguments, 1));
    for (var r in t)
      w.contains(n, r) || (e[r] = t[r]);
    return e;
  }, w.defaults = function (t) {
    return E(o.call(arguments, 1), function (e) {
      if (e)
        for (var n in e)
          null == t[n] && (t[n] = e[n]);
    }), t;
  }, w.clone = function (t) {
    return w.isObject(t) ? w.isArray(t) ? t.slice() : w.extend({}, t) : t;
  }, w.tap = function (t, e) {
    return e(t), t;
  };
  var P = function (t, e, n, i) {
    if (t === e)
      return 0 !== t || 1 / t == 1 / e;
    if (null == t || null == e)
      return t === e;
    t instanceof w && (t = t._wrapped), e instanceof w && (e = e._wrapped);
    var r = c.call(t);
    if (r != c.call(e))
      return !1;
    switch (r) {
    case '[object String]':
      return t == e + '';
    case '[object Number]':
      return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
    case '[object Date]':
    case '[object Boolean]':
      return +t == +e;
    case '[object RegExp]':
      return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase;
    }
    if ('object' != typeof t || 'object' != typeof e)
      return !1;
    for (var s = n.length; s--;)
      if (n[s] == t)
        return i[s] == e;
    n.push(t), i.push(e);
    var a = 0, o = !0;
    if ('[object Array]' == r) {
      if (a = t.length, o = a == e.length)
        for (; a-- && (o = P(t[a], e[a], n, i)););
    } else {
      var u = t.constructor, l = e.constructor;
      if (u !== l && !(w.isFunction(u) && u instanceof u && w.isFunction(l) && l instanceof l))
        return !1;
      for (var h in t)
        if (w.has(t, h) && (a++, !(o = w.has(e, h) && P(t[h], e[h], n, i))))
          break;
      if (o) {
        for (h in e)
          if (w.has(e, h) && !a--)
            break;
        o = !a;
      }
    }
    return n.pop(), i.pop(), o;
  };
  w.isEqual = function (t, e) {
    return P(t, e, [], []);
  }, w.isEmpty = function (t) {
    if (null == t)
      return !0;
    if (w.isArray(t) || w.isString(t))
      return 0 === t.length;
    for (var e in t)
      if (w.has(t, e))
        return !1;
    return !0;
  }, w.isElement = function (t) {
    return !(!t || 1 !== t.nodeType);
  }, w.isArray = y || function (t) {
    return '[object Array]' == c.call(t);
  }, w.isObject = function (t) {
    return t === Object(t);
  }, E([
    'Arguments',
    'Function',
    'String',
    'Number',
    'Date',
    'RegExp'
  ], function (t) {
    w['is' + t] = function (e) {
      return c.call(e) == '[object ' + t + ']';
    };
  }), w.isArguments(arguments) || (w.isArguments = function (t) {
    return !(!t || !w.has(t, 'callee'));
  }), w.isFunction = function (t) {
    return 'function' == typeof t;
  }, w.isFinite = function (t) {
    return isFinite(t) && !isNaN(parseFloat(t));
  }, w.isNaN = function (t) {
    return w.isNumber(t) && t != +t;
  }, w.isBoolean = function (t) {
    return t === !0 || t === !1 || '[object Boolean]' == c.call(t);
  }, w.isNull = function (t) {
    return null === t;
  }, w.isUndefined = function (t) {
    return void 0 === t;
  }, w.has = function (t, e) {
    return l.call(t, e);
  }, w.noConflict = function () {
    return t._ = e, this;
  }, w.identity = function (t) {
    return t;
  }, w.times = function (t, e, n) {
    for (var i = Array(t), r = 0; t > r; r++)
      i[r] = e.call(n, r);
    return i;
  }, w.random = function (t, e) {
    return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1));
  };
  var R = {
      escape: {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#x27;',
        '/': '&#x2F;'
      }
    };
  R.unescape = w.invert(R.escape);
  var I = {
      escape: RegExp('[' + w.keys(R.escape).join('') + ']', 'g'),
      unescape: RegExp('(' + w.keys(R.unescape).join('|') + ')', 'g')
    };
  w.each([
    'escape',
    'unescape'
  ], function (t) {
    w[t] = function (e) {
      return null == e ? '' : ('' + e).replace(I[t], function (e) {
        return R[t][e];
      });
    };
  }), w.result = function (t, e) {
    if (null == t)
      return null;
    var n = t[e];
    return w.isFunction(n) ? n.call(t) : n;
  }, w.mixin = function (t) {
    E(w.functions(t), function (e) {
      var n = w[e] = t[e];
      w.prototype[e] = function () {
        var t = [this._wrapped];
        return a.apply(t, arguments), F.call(this, n.apply(w, t));
      };
    });
  };
  var U = 0;
  w.uniqueId = function (t) {
    var e = ++U + '';
    return t ? t + e : e;
  }, w.templateSettings = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
    escape: /<%-([\s\S]+?)%>/g
  };
  var k = /(.)^/, T = {
      '\'': '\'',
      '\\': '\\',
      '\r': 'r',
      '\n': 'n',
      '\t': 't',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  w.template = function (t, e, n) {
    var i;
    n = w.defaults({}, n, w.templateSettings);
    var r = RegExp([
        (n.escape || k).source,
        (n.interpolate || k).source,
        (n.evaluate || k).source
      ].join('|') + '|$', 'g'), s = 0, a = '__p+=\'';
    t.replace(r, function (e, n, i, r, o) {
      return a += t.slice(s, o).replace(D, function (t) {
        return '\\' + T[t];
      }), n && (a += '\'+\n((__t=(' + n + '))==null?\'\':_.escape(__t))+\n\''), i && (a += '\'+\n((__t=(' + i + '))==null?\'\':__t)+\n\''), r && (a += '\';\n' + r + '\n__p+=\''), s = o + e.length, e;
    }), a += '\';\n', n.variable || (a = 'with(obj||{}){\n' + a + '}\n'), a = 'var __t,__p=\'\',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,\'\');};\n' + a + 'return __p;\n';
    try {
      i = Function(n.variable || 'obj', '_', a);
    } catch (o) {
      throw o.source = a, o;
    }
    if (e)
      return i(e, w);
    var u = function (t) {
      return i.call(this, t, w);
    };
    return u.source = 'function(' + (n.variable || 'obj') + '){\n' + a + '}', u;
  }, w.chain = function (t) {
    return w(t).chain();
  };
  var F = function (t) {
    return this._chain ? w(t).chain() : t;
  };
  w.mixin(w), E([
    'pop',
    'push',
    'reverse',
    'shift',
    'sort',
    'splice',
    'unshift'
  ], function (t) {
    var e = i[t];
    w.prototype[t] = function () {
      var n = this._wrapped;
      return e.apply(n, arguments), 'shift' != t && 'splice' != t || 0 !== n.length || delete n[0], F.call(this, n);
    };
  }), E([
    'concat',
    'join',
    'slice'
  ], function (t) {
    var e = i[t];
    w.prototype[t] = function () {
      return F.call(this, e.apply(this._wrapped, arguments));
    };
  }), w.extend(w.prototype, {
    chain: function () {
      return this._chain = !0, this;
    },
    value: function () {
      return this._wrapped;
    }
  });
}.call(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse;
  'undefined' != typeof exports && exports._ ? (e._ = exports._.noConflict(), e.localStorage = require('localStorage'), e.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest, exports.Parse = e) : (e._ = _.noConflict(), 'undefined' != typeof localStorage && (e.localStorage = localStorage), 'undefined' != typeof XMLHttpRequest && (e.XMLHttpRequest = XMLHttpRequest)), 'undefined' != typeof $ && (e.$ = $);
  var n = function () {
    }, i = function (t, i, r) {
      var s;
      return s = i && i.hasOwnProperty('constructor') ? i.constructor : function () {
        t.apply(this, arguments);
      }, e._.extend(s, t), n.prototype = t.prototype, s.prototype = new n(), i && e._.extend(s.prototype, i), r && e._.extend(s, r), s.prototype.constructor = s, s.__super__ = t.prototype, s;
    };
  e.serverURL = 'https://api.parse.com', 'undefined' != typeof process && process.versions && process.versions.node && (e._isNode = !0), e.initialize = function (t, n, i) {
    if (i)
      throw 'Parse.initialize() was passed a Master Key, which is only allowed from within Node.js.';
    e._initialize(t, n);
  }, e._initialize = function (t, n, i) {
    e.applicationId = t, e.javaScriptKey = n, e.masterKey = i, e._useMasterKey = !1;
  }, e._isNode && (e.initialize = e._initialize, e.Cloud = e.Cloud || {}, e.Cloud.useMasterKey = function () {
    e._useMasterKey = !0;
  }), e._getParsePath = function (t) {
    if (!e.applicationId)
      throw 'You need to call Parse.initialize before using Parse.';
    if (t || (t = ''), !e._.isString(t))
      throw 'Tried to get a localStorage path that wasn\'t a String.';
    return '/' === t[0] && (t = t.substring(1)), 'Parse/' + e.applicationId + '/' + t;
  }, e._installationId = null, e._getInstallationId = function () {
    if (e._installationId)
      return e._installationId;
    var t = e._getParsePath('installationId');
    if (e._installationId = e.localStorage.getItem(t), !e._installationId || '' === e._installationId) {
      var n = function () {
        return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
      };
      e._installationId = n() + n() + '-' + n() + '-' + n() + '-' + n() + '-' + n() + n() + n(), e.localStorage.setItem(t, e._installationId);
    }
    return e._installationId;
  }, e._parseDate = function (t) {
    var e = RegExp('^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$'), n = e.exec(t);
    if (!n)
      return null;
    var i = n[1] || 0, r = (n[2] || 1) - 1, s = n[3] || 0, a = n[4] || 0, o = n[5] || 0, u = n[6] || 0, c = n[8] || 0;
    return new Date(Date.UTC(i, r, s, a, o, u, c));
  }, e._ajaxIE8 = function (t, n, i) {
    var r = new e.Promise(), s = new XDomainRequest();
    return s.onload = function () {
      var t;
      try {
        t = JSON.parse(s.responseText);
      } catch (e) {
        r.reject(e);
      }
      t && r.resolve(t);
    }, s.onerror = s.ontimeout = function () {
      r.reject(s);
    }, s.onprogress = function () {
    }, s.open(t, n), s.send(i), r;
  }, e._ajax = function (t, n, i, r, s) {
    var a = {
        success: r,
        error: s
      };
    if ('undefined' != typeof XDomainRequest)
      return e._ajaxIE8(t, n, i)._thenRunCallbacks(a);
    var o = new e.Promise(), u = !1, c = new e.XMLHttpRequest();
    return c.onreadystatechange = function () {
      if (4 === c.readyState) {
        if (u)
          return;
        if (u = !0, c.status >= 200 && 300 > c.status) {
          var t;
          try {
            t = JSON.parse(c.responseText);
          } catch (e) {
            o.reject(e);
          }
          t && o.resolve(t, c.status, c);
        } else
          o.reject(c);
      }
    }, c.open(t, n, !0), c.setRequestHeader('Content-Type', 'text/plain'), e._isNode && c.setRequestHeader('User-Agent', 'Parse/' + e.VERSION + ' (NodeJS ' + process.versions.node + ')'), c.send(i), o._thenRunCallbacks(a);
  }, e._extend = function (t, e) {
    var n = i(this, t, e);
    return n.extend = this.extend, n;
  }, e._request = function (t, n, i, r, s) {
    if (!e.applicationId)
      throw 'You must specify your applicationId using Parse.initialize';
    if (!e.javaScriptKey && !e.masterKey)
      throw 'You must specify a key using Parse.initialize';
    if ('batch' !== t && 'classes' !== t && 'files' !== t && 'functions' !== t && 'login' !== t && 'push' !== t && 'requestPasswordReset' !== t && 'users' !== t)
      throw 'Bad route: \'' + t + '\'.';
    var a = e.serverURL;
    '/' !== a.charAt(a.length - 1) && (a += '/'), a += '1/' + t, n && (a += '/' + n), i && (a += '/' + i), s = e._.clone(s || {}), 'POST' !== r && (s._method = r, r = 'POST'), s._ApplicationId = e.applicationId, e._useMasterKey ? s._MasterKey = e.masterKey : s._JavaScriptKey = e.javaScriptKey, s._ClientVersion = e.VERSION, s._InstallationId = e._getInstallationId();
    var o = e.User.current();
    o && o._sessionToken && (s._SessionToken = o._sessionToken);
    var u = JSON.stringify(s);
    return e._ajax(r, a, u).then(null, function (t) {
      var n;
      if (t && t.responseText)
        try {
          var i = JSON.parse(t.responseText);
          i && (n = new e.Error(i.code, i.error));
        } catch (r) {
        }
      return n = n || new e.Error(-1, t.responseText), e.Promise.error(n);
    });
  }, e._getValue = function (t, n) {
    return t && t[n] ? e._.isFunction(t[n]) ? t[n]() : t[n] : null;
  }, e._encode = function (t, n, i) {
    var r = e._;
    if (t instanceof e.Object) {
      if (i)
        throw 'Parse.Objects not allowed here';
      if (!n || r.include(n, t) || !t._hasData)
        return t._toPointer();
      if (!t.dirty())
        return n = n.concat(t), e._encode(t._toFullJSON(n), n, i);
      throw 'Tried to save an object with a pointer to a new, unsaved object.';
    }
    if (t instanceof e.ACL)
      return t.toJSON();
    if (r.isDate(t))
      return {
        __type: 'Date',
        iso: t.toJSON()
      };
    if (t instanceof e.GeoPoint)
      return t.toJSON();
    if (r.isArray(t))
      return r.map(t, function (t) {
        return e._encode(t, n, i);
      });
    if (r.isRegExp(t))
      return t.source;
    if (t instanceof e.Relation)
      return t.toJSON();
    if (t instanceof e.Op)
      return t.toJSON();
    if (t instanceof e.File) {
      if (!t.url())
        throw 'Tried to save an object containing an unsaved file.';
      return {
        __type: 'File',
        name: t.name(),
        url: t.url()
      };
    }
    if (r.isObject(t)) {
      var s = {};
      return e._objectEach(t, function (t, r) {
        s[r] = e._encode(t, n, i);
      }), s;
    }
    return t;
  }, e._decode = function (t, n) {
    var i = e._;
    if (!i.isObject(n))
      return n;
    if (i.isArray(n))
      return e._arrayEach(n, function (t, i) {
        n[i] = e._decode(i, t);
      }), n;
    if (n instanceof e.Object)
      return n;
    if (n instanceof e.File)
      return n;
    if (n instanceof e.Op)
      return n;
    if (n.__op)
      return e.Op._decode(n);
    if ('Pointer' === n.__type) {
      var r = e.Object._create(n.className);
      return r._finishFetch({ objectId: n.objectId }, !1), r;
    }
    if ('Object' === n.__type) {
      var s = n.className;
      delete n.__type, delete n.className;
      var a = e.Object._create(s);
      return a._finishFetch(n, !0), a;
    }
    if ('Date' === n.__type)
      return e._parseDate(n.iso);
    if ('GeoPoint' === n.__type)
      return new e.GeoPoint({
        latitude: n.latitude,
        longitude: n.longitude
      });
    if ('ACL' === t)
      return n instanceof e.ACL ? n : new e.ACL(n);
    if ('Relation' === n.__type) {
      var o = new e.Relation(null, t);
      return o.targetClassName = n.className, o;
    }
    if ('File' === n.__type) {
      var u = new e.File(n.name);
      return u._url = n.url, u;
    }
    return e._objectEach(n, function (t, i) {
      n[i] = e._decode(i, t);
    }), n;
  }, e._arrayEach = e._.each, e._traverse = function (t, n, i) {
    if (t instanceof e.Object) {
      if (i = i || [], e._.indexOf(i, t) >= 0)
        return;
      return i.push(t), e._traverse(t.attributes, n, i), n(t);
    }
    return t instanceof e.Relation || t instanceof e.File ? n(t) : e._.isArray(t) ? (e._.each(t, function (r, s) {
      var a = e._traverse(r, n, i);
      a && (t[s] = a);
    }), n(t)) : e._.isObject(t) ? (e._each(t, function (r, s) {
      var a = e._traverse(r, n, i);
      a && (t[s] = a);
    }), n(t)) : n(t);
  }, e._objectEach = e._each = function (t, n) {
    var i = e._;
    i.isObject(t) ? i.each(i.keys(t), function (e) {
      n(t[e], e);
    }) : i.each(t, n);
  }, e._isNullOrUndefined = function (t) {
    return e._.isNull(t) || e._.isUndefined(t);
  };
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Error = function (t, e) {
    this.code = t, this.message = e;
  }, n.extend(e.Error, {
    OTHER_CAUSE: -1,
    INTERNAL_SERVER_ERROR: 1,
    CONNECTION_FAILED: 100,
    OBJECT_NOT_FOUND: 101,
    INVALID_QUERY: 102,
    INVALID_CLASS_NAME: 103,
    MISSING_OBJECT_ID: 104,
    INVALID_KEY_NAME: 105,
    INVALID_POINTER: 106,
    INVALID_JSON: 107,
    COMMAND_UNAVAILABLE: 108,
    NOT_INITIALIZED: 109,
    INCORRECT_TYPE: 111,
    INVALID_CHANNEL_NAME: 112,
    PUSH_MISCONFIGURED: 115,
    OBJECT_TOO_LARGE: 116,
    OPERATION_FORBIDDEN: 119,
    CACHE_MISS: 120,
    INVALID_NESTED_KEY: 121,
    INVALID_FILE_NAME: 122,
    INVALID_ACL: 123,
    TIMEOUT: 124,
    INVALID_EMAIL_ADDRESS: 125,
    MISSING_CONTENT_TYPE: 126,
    MISSING_CONTENT_LENGTH: 127,
    INVALID_CONTENT_LENGTH: 128,
    FILE_TOO_LARGE: 129,
    FILE_SAVE_ERROR: 130,
    FILE_DELETE_ERROR: 153,
    DUPLICATE_VALUE: 137,
    INVALID_ROLE_NAME: 139,
    EXCEEDED_QUOTA: 140,
    SCRIPT_FAILED: 141,
    VALIDATION_ERROR: 142,
    INVALID_IMAGE_DATA: 150,
    UNSAVED_FILE_ERROR: 151,
    INVALID_PUSH_TIME_ERROR: 152,
    USERNAME_MISSING: 200,
    PASSWORD_MISSING: 201,
    USERNAME_TAKEN: 202,
    EMAIL_TAKEN: 203,
    EMAIL_MISSING: 204,
    EMAIL_NOT_FOUND: 205,
    SESSION_MISSING: 206,
    MUST_CREATE_USER_THROUGH_SIGNUP: 207,
    ACCOUNT_ALREADY_LINKED: 208,
    LINKED_ID_MISSING: 250,
    INVALID_LINKED_SESSION: 251,
    UNSUPPORTED_SERVICE: 252
  });
}(this), function () {
  var t = this, e = t.Parse || (t.Parse = {}), n = /\s+/, i = Array.prototype.slice;
  e.Events = {
    on: function (t, e, i) {
      var r, s, a, o, u;
      if (!e)
        return this;
      for (t = t.split(n), r = this._callbacks || (this._callbacks = {}), s = t.shift(); s;)
        u = r[s], a = u ? u.tail : {}, a.next = o = {}, a.context = i, a.callback = e, r[s] = {
          tail: o,
          next: u ? u.next : a
        }, s = t.shift();
      return this;
    },
    off: function (t, e, i) {
      var r, s, a, o, u, c;
      if (s = this._callbacks) {
        if (!(t || e || i))
          return delete this._callbacks, this;
        for (t = t ? t.split(n) : _.keys(s), r = t.shift(); r;)
          if (a = s[r], delete s[r], a && (e || i)) {
            for (o = a.tail, a = a.next; a !== o;)
              u = a.callback, c = a.context, (e && u !== e || i && c !== i) && this.on(r, u, c), a = a.next;
            r = t.shift();
          }
        return this;
      }
    },
    trigger: function (t) {
      var e, r, s, a, o, u, c;
      if (!(s = this._callbacks))
        return this;
      for (u = s.all, t = t.split(n), c = i.call(arguments, 1), e = t.shift(); e;) {
        if (r = s[e])
          for (a = r.tail; (r = r.next) !== a;)
            r.callback.apply(r.context || this, c);
        if (r = u)
          for (a = r.tail, o = [e].concat(c); (r = r.next) !== a;)
            r.callback.apply(r.context || this, o);
        e = t.shift();
      }
      return this;
    }
  }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off;
}.call(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.GeoPoint = function (t, i) {
    n.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : n.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), this.latitude = t.latitude, this.longitude = t.longitude) : n.isNumber(t) && n.isNumber(i) ? (e.GeoPoint._validate(t, i), this.latitude = t, this.longitude = i) : (this.latitude = 0, this.longitude = 0);
    var r = this;
    this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, this._longitude = this.longitude, this.__defineGetter__('latitude', function () {
      return r._latitude;
    }), this.__defineGetter__('longitude', function () {
      return r._longitude;
    }), this.__defineSetter__('latitude', function (t) {
      e.GeoPoint._validate(t, r.longitude), r._latitude = t;
    }), this.__defineSetter__('longitude', function (t) {
      e.GeoPoint._validate(r.latitude, t), r._longitude = t;
    }));
  }, e.GeoPoint._validate = function (t, e) {
    if (-90 > t)
      throw 'Parse.GeoPoint latitude ' + t + ' < -90.0.';
    if (t > 90)
      throw 'Parse.GeoPoint latitude ' + t + ' > 90.0.';
    if (-180 > e)
      throw 'Parse.GeoPoint longitude ' + e + ' < -180.0.';
    if (e > 180)
      throw 'Parse.GeoPoint longitude ' + e + ' > 180.0.';
  }, e.GeoPoint.current = function (t) {
    var n = new e.Promise();
    return navigator.geolocation.getCurrentPosition(function (t) {
      n.resolve(new e.GeoPoint({
        latitude: t.coords.latitude,
        longitude: t.coords.longitude
      }));
    }, function (t) {
      n.reject(t);
    }), n._thenRunCallbacks(t);
  }, e.GeoPoint.prototype = {
    toJSON: function () {
      return e.GeoPoint._validate(this.latitude, this.longitude), {
        __type: 'GeoPoint',
        latitude: this.latitude,
        longitude: this.longitude
      };
    },
    radiansTo: function (t) {
      var e = Math.PI / 180, n = this.latitude * e, i = this.longitude * e, r = t.latitude * e, s = t.longitude * e, a = n - r, o = i - s, u = Math.sin(a / 2), c = Math.sin(o / 2), l = u * u + Math.cos(n) * Math.cos(r) * c * c;
      return l = Math.min(1, l), 2 * Math.asin(Math.sqrt(l));
    },
    kilometersTo: function (t) {
      return 6371 * this.radiansTo(t);
    },
    milesTo: function (t) {
      return 3958.8 * this.radiansTo(t);
    }
  };
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._, i = '*';
  e.ACL = function (t) {
    var i = this;
    if (i.permissionsById = {}, n.isObject(t))
      if (t instanceof e.User)
        i.setReadAccess(t, !0), i.setWriteAccess(t, !0);
      else {
        if (n.isFunction(t))
          throw 'Parse.ACL() called with a function.  Did you forget ()?';
        e._objectEach(t, function (t, r) {
          if (!n.isString(r))
            throw 'Tried to create an ACL with an invalid userId.';
          i.permissionsById[r] = {}, e._objectEach(t, function (t, e) {
            if ('read' !== e && 'write' !== e)
              throw 'Tried to create an ACL with an invalid permission type.';
            if (!n.isBoolean(t))
              throw 'Tried to create an ACL with an invalid permission value.';
            i.permissionsById[r][e] = t;
          });
        });
      }
  }, e.ACL.prototype.toJSON = function () {
    return n.clone(this.permissionsById);
  }, e.ACL.prototype._setAccess = function (t, i, r) {
    if (i instanceof e.User ? i = i.id : i instanceof e.Role && (i = 'role:' + i.getName()), !n.isString(i))
      throw 'userId must be a string.';
    if (!n.isBoolean(r))
      throw 'allowed must be either true or false.';
    var s = this.permissionsById[i];
    if (!s) {
      if (!r)
        return;
      s = {}, this.permissionsById[i] = s;
    }
    r ? this.permissionsById[i][t] = !0 : (delete s[t], n.isEmpty(s) && delete s[i]);
  }, e.ACL.prototype._getAccess = function (t, n) {
    n instanceof e.User ? n = n.id : n instanceof e.Role && (n = 'role:' + n.getName());
    var i = this.permissionsById[n];
    return i ? i[t] ? !0 : !1 : !1;
  }, e.ACL.prototype.setReadAccess = function (t, e) {
    this._setAccess('read', t, e);
  }, e.ACL.prototype.getReadAccess = function (t) {
    return this._getAccess('read', t);
  }, e.ACL.prototype.setWriteAccess = function (t, e) {
    this._setAccess('write', t, e);
  }, e.ACL.prototype.getWriteAccess = function (t) {
    return this._getAccess('write', t);
  }, e.ACL.prototype.setPublicReadAccess = function (t) {
    this.setReadAccess(i, t);
  }, e.ACL.prototype.getPublicReadAccess = function () {
    return this.getReadAccess(i);
  }, e.ACL.prototype.setPublicWriteAccess = function (t) {
    this.setWriteAccess(i, t);
  }, e.ACL.prototype.getPublicWriteAccess = function () {
    return this.getWriteAccess(i);
  }, e.ACL.prototype.getRoleReadAccess = function (t) {
    if (t instanceof e.Role && (t = t.getName()), n.isString(t))
      return this.getReadAccess('role:' + t);
    throw 'role must be a Parse.Role or a String';
  }, e.ACL.prototype.getRoleWriteAccess = function (t) {
    if (t instanceof e.Role && (t = t.getName()), n.isString(t))
      return this.getWriteAccess('role:' + t);
    throw 'role must be a Parse.Role or a String';
  }, e.ACL.prototype.setRoleReadAccess = function (t, i) {
    if (t instanceof e.Role && (t = t.getName()), n.isString(t))
      return this.setReadAccess('role:' + t, i), void 0;
    throw 'role must be a Parse.Role or a String';
  }, e.ACL.prototype.setRoleWriteAccess = function (t, i) {
    if (t instanceof e.Role && (t = t.getName()), n.isString(t))
      return this.setWriteAccess('role:' + t, i), void 0;
    throw 'role must be a Parse.Role or a String';
  };
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Op = function () {
    this._initialize.apply(this, arguments);
  }, e.Op.prototype = {
    _initialize: function () {
    }
  }, n.extend(e.Op, {
    _extend: e._extend,
    _opDecoderMap: {},
    _registerDecoder: function (t, n) {
      e.Op._opDecoderMap[t] = n;
    },
    _decode: function (t) {
      var n = e.Op._opDecoderMap[t.__op];
      return n ? n(t) : void 0;
    }
  }), e.Op._registerDecoder('Batch', function (t) {
    var n = null;
    return e._arrayEach(t.ops, function (t) {
      t = e.Op._decode(t), n = t._mergeWithPrevious(n);
    }), n;
  }), e.Op.Set = e.Op._extend({
    _initialize: function (t) {
      this._value = t;
    },
    value: function () {
      return this._value;
    },
    toJSON: function () {
      return e._encode(this.value());
    },
    _mergeWithPrevious: function () {
      return this;
    },
    _estimate: function () {
      return this.value();
    }
  }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
    toJSON: function () {
      return { __op: 'Delete' };
    },
    _mergeWithPrevious: function () {
      return this;
    },
    _estimate: function () {
      return e.Op._UNSET;
    }
  }), e.Op._registerDecoder('Delete', function () {
    return new e.Op.Unset();
  }), e.Op.Increment = e.Op._extend({
    _initialize: function (t) {
      this._amount = t;
    },
    amount: function () {
      return this._amount;
    },
    toJSON: function () {
      return {
        __op: 'Increment',
        amount: this._amount
      };
    },
    _mergeWithPrevious: function (t) {
      if (t) {
        if (t instanceof e.Op.Unset)
          return new e.Op.Set(this.amount());
        if (t instanceof e.Op.Set)
          return new e.Op.Set(t.value() + this.amount());
        if (t instanceof e.Op.Increment)
          return new e.Op.Increment(this.amount() + t.amount());
        throw 'Op is invalid after previous op.';
      }
      return this;
    },
    _estimate: function (t) {
      return t ? t + this.amount() : this.amount();
    }
  }), e.Op._registerDecoder('Increment', function (t) {
    return new e.Op.Increment(t.amount);
  }), e.Op.Add = e.Op._extend({
    _initialize: function (t) {
      this._objects = t;
    },
    objects: function () {
      return this._objects;
    },
    toJSON: function () {
      return {
        __op: 'Add',
        objects: e._encode(this.objects())
      };
    },
    _mergeWithPrevious: function (t) {
      if (t) {
        if (t instanceof e.Op.Unset)
          return new e.Op.Set(this.objects());
        if (t instanceof e.Op.Set)
          return new e.Op.Set(this._estimate(t.value()));
        if (t instanceof e.Op.Add)
          return new e.Op.Add(t.objects().concat(this.objects()));
        throw 'Op is invalid after previous op.';
      }
      return this;
    },
    _estimate: function (t) {
      return t ? t.concat(this.objects()) : n.clone(this.objects());
    }
  }), e.Op._registerDecoder('Add', function (t) {
    return new e.Op.Add(e._decode(void 0, t.objects));
  }), e.Op.AddUnique = e.Op._extend({
    _initialize: function (t) {
      this._objects = n.uniq(t);
    },
    objects: function () {
      return this._objects;
    },
    toJSON: function () {
      return {
        __op: 'AddUnique',
        objects: e._encode(this.objects())
      };
    },
    _mergeWithPrevious: function (t) {
      if (t) {
        if (t instanceof e.Op.Unset)
          return new e.Op.Set(this.objects());
        if (t instanceof e.Op.Set)
          return new e.Op.Set(this._estimate(t.value()));
        if (t instanceof e.Op.AddUnique)
          return new e.Op.AddUnique(this._estimate(t.objects()));
        throw 'Op is invalid after previous op.';
      }
      return this;
    },
    _estimate: function (t) {
      if (t) {
        var i = n.clone(t);
        return e._arrayEach(this.objects(), function (t) {
          if (t instanceof e.Object && t.id) {
            var r = n.find(i, function (n) {
                return n instanceof e.Object && n.id === t.id;
              });
            if (r) {
              var s = n.indexOf(i, r);
              i[s] = t;
            } else
              i.push(t);
          } else
            n.contains(i, t) || i.push(t);
        }), i;
      }
      return n.clone(this.objects());
    }
  }), e.Op._registerDecoder('AddUnique', function (t) {
    return new e.Op.AddUnique(e._decode(void 0, t.objects));
  }), e.Op.Remove = e.Op._extend({
    _initialize: function (t) {
      this._objects = n.uniq(t);
    },
    objects: function () {
      return this._objects;
    },
    toJSON: function () {
      return {
        __op: 'Remove',
        objects: e._encode(this.objects())
      };
    },
    _mergeWithPrevious: function (t) {
      if (t) {
        if (t instanceof e.Op.Unset)
          return t;
        if (t instanceof e.Op.Set)
          return new e.Op.Set(this._estimate(t.value()));
        if (t instanceof e.Op.Remove)
          return new e.Op.Remove(n.union(t.objects(), this.objects()));
        throw 'Op is invalid after previous op.';
      }
      return this;
    },
    _estimate: function (t) {
      if (t) {
        var i = n.difference(t, this.objects());
        return e._arrayEach(this.objects(), function (t) {
          t instanceof e.Object && t.id && (i = n.reject(i, function (n) {
            return n instanceof e.Object && n.id === t.id;
          }));
        }), i;
      }
      return [];
    }
  }), e.Op._registerDecoder('Remove', function (t) {
    return new e.Op.Remove(e._decode(void 0, t.objects));
  }), e.Op.Relation = e.Op._extend({
    _initialize: function (t, i) {
      this._targetClassName = null;
      var r = this, s = function (t) {
          if (t instanceof e.Object) {
            if (!t.id)
              throw 'You can\'t add an unsaved Parse.Object to a relation.';
            if (r._targetClassName || (r._targetClassName = t.className), r._targetClassName !== t.className)
              throw 'Tried to create a Parse.Relation with 2 different types: ' + r._targetClassName + ' and ' + t.className + '.';
            return t.id;
          }
          return t;
        };
      this.relationsToAdd = n.uniq(n.map(t, s)), this.relationsToRemove = n.uniq(n.map(i, s));
    },
    added: function () {
      var t = this;
      return n.map(this.relationsToAdd, function (n) {
        var i = e.Object._create(t._targetClassName);
        return i.id = n, i;
      });
    },
    removed: function () {
      var t = this;
      return n.map(this.relationsToRemove, function (n) {
        var i = e.Object._create(t._targetClassName);
        return i.id = n, i;
      });
    },
    toJSON: function () {
      var t = null, e = null, i = this, r = function (t) {
          return {
            __type: 'Pointer',
            className: i._targetClassName,
            objectId: t
          };
        }, s = null;
      return this.relationsToAdd.length > 0 && (s = n.map(this.relationsToAdd, r), t = {
        __op: 'AddRelation',
        objects: s
      }), this.relationsToRemove.length > 0 && (s = n.map(this.relationsToRemove, r), e = {
        __op: 'RemoveRelation',
        objects: s
      }), t && e ? {
        __op: 'Batch',
        ops: [
          t,
          e
        ]
      } : t || e || {};
    },
    _mergeWithPrevious: function (t) {
      if (t) {
        if (t instanceof e.Op.Unset)
          throw 'You can\'t modify a relation after deleting it.';
        if (t instanceof e.Op.Relation) {
          if (t._targetClassName && t._targetClassName !== this._targetClassName)
            throw 'Related object must be of class ' + t._targetClassName + ', but ' + this._targetClassName + ' was passed in.';
          var i = n.union(n.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd), r = n.union(n.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove), s = new e.Op.Relation(i, r);
          return s._targetClassName = this._targetClassName, s;
        }
        throw 'Op is invalid after previous op.';
      }
      return this;
    },
    _estimate: function (t, n, i) {
      if (t) {
        if (t instanceof e.Relation) {
          if (this._targetClassName)
            if (t.targetClassName) {
              if (t.targetClassName !== this._targetClassName)
                throw 'Related object must be a ' + t.targetClassName + ', but a ' + this._targetClassName + ' was passed in.';
            } else
              t.targetClassName = this._targetClassName;
          return t;
        }
        throw 'Op is invalid after previous op.';
      }
      var r = new e.Relation(n, i);
      r.targetClassName = this._targetClassName;
    }
  }), e.Op._registerDecoder('AddRelation', function (t) {
    return new e.Op.Relation(e._decode(void 0, t.objects), []);
  }), e.Op._registerDecoder('RemoveRelation', function (t) {
    return new e.Op.Relation([], e._decode(void 0, t.objects));
  });
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Relation = function (t, e) {
    this.parent = t, this.key = e, this.targetClassName = null;
  }, e.Relation.prototype = {
    _ensureParentAndKey: function (t, e) {
      if (this.parent = this.parent || t, this.key = this.key || e, this.parent !== t)
        throw 'Internal Error. Relation retrieved from two different Objects.';
      if (this.key !== e)
        throw 'Internal Error. Relation retrieved from two different keys.';
    },
    add: function (t) {
      n.isArray(t) || (t = [t]);
      var i = new e.Op.Relation(t, []);
      this.parent.set(this.key, i), this.targetClassName = i._targetClassName;
    },
    remove: function (t) {
      n.isArray(t) || (t = [t]);
      var i = new e.Op.Relation([], t);
      this.parent.set(this.key, i), this.targetClassName = i._targetClassName;
    },
    toJSON: function () {
      return {
        __type: 'Relation',
        className: this.targetClassName
      };
    },
    query: function () {
      var t, n;
      return this.targetClassName ? (t = e.Object._getSubclass(this.targetClassName), n = new e.Query(t)) : (t = e.Object._getSubclass(this.parent.className), n = new e.Query(t), n._extraOptions.redirectClassNameForKey = this.key), n._addCondition('$relatedTo', 'object', this.parent._toPointer()), n._addCondition('$relatedTo', 'key', this.key), n;
    }
  };
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Promise = function () {
    this._resolved = !1, this._rejected = !1, this._resolvedCallbacks = [], this._rejectedCallbacks = [];
  }, n.extend(e.Promise, {
    is: function (t) {
      return t && t.then && n.isFunction(t.then);
    },
    as: function () {
      var t = new e.Promise();
      return t.resolve.apply(t, arguments), t;
    },
    error: function () {
      var t = new e.Promise();
      return t.reject.apply(t, arguments), t;
    },
    when: function (t) {
      var n;
      n = t && e._isNullOrUndefined(t.length) ? arguments : t;
      var i = n.length, r = !1, s = [], a = [];
      if (s.length = n.length, a.length = n.length, 0 === i)
        return e.Promise.as.apply(this, s);
      var o = new e.Promise(), u = function () {
          i -= 1, 0 === i && (r ? o.reject(a) : o.resolve.apply(o, s));
        };
      return e._arrayEach(n, function (t, n) {
        e.Promise.is(t) ? t.then(function (t) {
          s[n] = t, u();
        }, function (t) {
          a[n] = t, r = !0, u();
        }) : (s[n] = t, u());
      }), o;
    },
    _continueWhile: function (t, n) {
      return t() ? n().then(function () {
        return e.Promise._continueWhile(t, n);
      }) : e.Promise.as();
    }
  }), n.extend(e.Promise.prototype, {
    resolve: function () {
      if (this._resolved || this._rejected)
        throw 'A promise was resolved even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.';
      this._resolved = !0, this._result = arguments;
      var t = arguments;
      e._arrayEach(this._resolvedCallbacks, function (e) {
        e.apply(this, t);
      }), this._resolvedCallbacks = [], this._rejectedCallbacks = [];
    },
    reject: function (t) {
      if (this._resolved || this._rejected)
        throw 'A promise was rejected even though it had already been ' + (this._resolved ? 'resolved' : 'rejected') + '.';
      this._rejected = !0, this._error = t, e._arrayEach(this._rejectedCallbacks, function (e) {
        e(t);
      }), this._resolvedCallbacks = [], this._rejectedCallbacks = [];
    },
    then: function (t, n) {
      var i = new e.Promise(), r = function () {
          var n = arguments;
          t && (n = [t.apply(this, n)]), 1 === n.length && e.Promise.is(n[0]) ? n[0].then(function () {
            i.resolve.apply(i, arguments);
          }, function (t) {
            i.reject(t);
          }) : i.resolve.apply(i, n);
        }, s = function (t) {
          var r = [];
          n ? (r = [n(t)], 1 === r.length && e.Promise.is(r[0]) ? r[0].then(function () {
            i.resolve.apply(i, arguments);
          }, function (t) {
            i.reject(t);
          }) : i.reject(r[0])) : i.reject(t);
        };
      return this._resolved ? r.apply(this, this._result) : this._rejected ? s(this._error) : (this._resolvedCallbacks.push(r), this._rejectedCallbacks.push(s)), i;
    },
    _thenRunCallbacks: function (t, i) {
      var r;
      if (n.isFunction(t)) {
        var s = t;
        r = {
          success: function (t) {
            s(t, null);
          },
          error: function (t) {
            s(null, t);
          }
        };
      } else
        r = n.clone(t);
      return r = r || {}, this.then(function (t) {
        return r.success ? r.success.apply(this, arguments) : i && i.trigger('sync', i, t, r), e.Promise.as.apply(e.Promise, arguments);
      }, function (t) {
        return r.error ? n.isUndefined(i) ? r.error(t) : r.error(i, t) : i && i.trigger('error', i, t, r), e.Promise.error(t);
      });
    },
    _continueWith: function (t) {
      return this.then(function () {
        return t(arguments, null);
      }, function (e) {
        return t(null, e);
      });
    }
  });
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._, i = function (t) {
      if (26 > t)
        return String.fromCharCode(65 + t);
      if (52 > t)
        return String.fromCharCode(97 + (t - 26));
      if (62 > t)
        return String.fromCharCode(48 + (t - 52));
      if (62 === t)
        return '+';
      if (63 === t)
        return '/';
      throw 'Tried to encode large digit ' + t + ' in base64.';
    }, r = function (t) {
      var e = [];
      return e.length = Math.ceil(t.length / 3), n.times(e.length, function (n) {
        var r = t[3 * n], s = t[3 * n + 1] || 0, a = t[3 * n + 2] || 0, o = t.length > 3 * n + 1, u = t.length > 3 * n + 2;
        e[n] = [
          i(63 & r >> 2),
          i(48 & r << 4 | 15 & s >> 4),
          o ? i(60 & s << 2 | 3 & a >> 6) : '=',
          u ? i(63 & a) : '='
        ].join('');
      }), e.join('');
    }, s = {
      ai: 'application/postscript',
      aif: 'audio/x-aiff',
      aifc: 'audio/x-aiff',
      aiff: 'audio/x-aiff',
      asc: 'text/plain',
      atom: 'application/atom+xml',
      au: 'audio/basic',
      avi: 'video/x-msvideo',
      bcpio: 'application/x-bcpio',
      bin: 'application/octet-stream',
      bmp: 'image/bmp',
      cdf: 'application/x-netcdf',
      cgm: 'image/cgm',
      'class': 'application/octet-stream',
      cpio: 'application/x-cpio',
      cpt: 'application/mac-compactpro',
      csh: 'application/x-csh',
      css: 'text/css',
      dcr: 'application/x-director',
      dif: 'video/x-dv',
      dir: 'application/x-director',
      djv: 'image/vnd.djvu',
      djvu: 'image/vnd.djvu',
      dll: 'application/octet-stream',
      dmg: 'application/octet-stream',
      dms: 'application/octet-stream',
      doc: 'application/msword',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      dotx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
      docm: 'application/vnd.ms-word.document.macroEnabled.12',
      dotm: 'application/vnd.ms-word.template.macroEnabled.12',
      dtd: 'application/xml-dtd',
      dv: 'video/x-dv',
      dvi: 'application/x-dvi',
      dxr: 'application/x-director',
      eps: 'application/postscript',
      etx: 'text/x-setext',
      exe: 'application/octet-stream',
      ez: 'application/andrew-inset',
      gif: 'image/gif',
      gram: 'application/srgs',
      grxml: 'application/srgs+xml',
      gtar: 'application/x-gtar',
      hdf: 'application/x-hdf',
      hqx: 'application/mac-binhex40',
      htm: 'text/html',
      html: 'text/html',
      ice: 'x-conference/x-cooltalk',
      ico: 'image/x-icon',
      ics: 'text/calendar',
      ief: 'image/ief',
      ifb: 'text/calendar',
      iges: 'model/iges',
      igs: 'model/iges',
      jnlp: 'application/x-java-jnlp-file',
      jp2: 'image/jp2',
      jpe: 'image/jpeg',
      jpeg: 'image/jpeg',
      jpg: 'image/jpeg',
      js: 'application/x-javascript',
      kar: 'audio/midi',
      latex: 'application/x-latex',
      lha: 'application/octet-stream',
      lzh: 'application/octet-stream',
      m3u: 'audio/x-mpegurl',
      m4a: 'audio/mp4a-latm',
      m4b: 'audio/mp4a-latm',
      m4p: 'audio/mp4a-latm',
      m4u: 'video/vnd.mpegurl',
      m4v: 'video/x-m4v',
      mac: 'image/x-macpaint',
      man: 'application/x-troff-man',
      mathml: 'application/mathml+xml',
      me: 'application/x-troff-me',
      mesh: 'model/mesh',
      mid: 'audio/midi',
      midi: 'audio/midi',
      mif: 'application/vnd.mif',
      mov: 'video/quicktime',
      movie: 'video/x-sgi-movie',
      mp2: 'audio/mpeg',
      mp3: 'audio/mpeg',
      mp4: 'video/mp4',
      mpe: 'video/mpeg',
      mpeg: 'video/mpeg',
      mpg: 'video/mpeg',
      mpga: 'audio/mpeg',
      ms: 'application/x-troff-ms',
      msh: 'model/mesh',
      mxu: 'video/vnd.mpegurl',
      nc: 'application/x-netcdf',
      oda: 'application/oda',
      ogg: 'application/ogg',
      pbm: 'image/x-portable-bitmap',
      pct: 'image/pict',
      pdb: 'chemical/x-pdb',
      pdf: 'application/pdf',
      pgm: 'image/x-portable-graymap',
      pgn: 'application/x-chess-pgn',
      pic: 'image/pict',
      pict: 'image/pict',
      png: 'image/png',
      pnm: 'image/x-portable-anymap',
      pnt: 'image/x-macpaint',
      pntg: 'image/x-macpaint',
      ppm: 'image/x-portable-pixmap',
      ppt: 'application/vnd.ms-powerpoint',
      pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      potx: 'application/vnd.openxmlformats-officedocument.presentationml.template',
      ppsx: 'application/vnd.openxmlformats-officedocument.presentationml.slideshow',
      ppam: 'application/vnd.ms-powerpoint.addin.macroEnabled.12',
      pptm: 'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
      potm: 'application/vnd.ms-powerpoint.template.macroEnabled.12',
      ppsm: 'application/vnd.ms-powerpoint.slideshow.macroEnabled.12',
      ps: 'application/postscript',
      qt: 'video/quicktime',
      qti: 'image/x-quicktime',
      qtif: 'image/x-quicktime',
      ra: 'audio/x-pn-realaudio',
      ram: 'audio/x-pn-realaudio',
      ras: 'image/x-cmu-raster',
      rdf: 'application/rdf+xml',
      rgb: 'image/x-rgb',
      rm: 'application/vnd.rn-realmedia',
      roff: 'application/x-troff',
      rtf: 'text/rtf',
      rtx: 'text/richtext',
      sgm: 'text/sgml',
      sgml: 'text/sgml',
      sh: 'application/x-sh',
      shar: 'application/x-shar',
      silo: 'model/mesh',
      sit: 'application/x-stuffit',
      skd: 'application/x-koan',
      skm: 'application/x-koan',
      skp: 'application/x-koan',
      skt: 'application/x-koan',
      smi: 'application/smil',
      smil: 'application/smil',
      snd: 'audio/basic',
      so: 'application/octet-stream',
      spl: 'application/x-futuresplash',
      src: 'application/x-wais-source',
      sv4cpio: 'application/x-sv4cpio',
      sv4crc: 'application/x-sv4crc',
      svg: 'image/svg+xml',
      swf: 'application/x-shockwave-flash',
      t: 'application/x-troff',
      tar: 'application/x-tar',
      tcl: 'application/x-tcl',
      tex: 'application/x-tex',
      texi: 'application/x-texinfo',
      texinfo: 'application/x-texinfo',
      tif: 'image/tiff',
      tiff: 'image/tiff',
      tr: 'application/x-troff',
      tsv: 'text/tab-separated-values',
      txt: 'text/plain',
      ustar: 'application/x-ustar',
      vcd: 'application/x-cdlink',
      vrml: 'model/vrml',
      vxml: 'application/voicexml+xml',
      wav: 'audio/x-wav',
      wbmp: 'image/vnd.wap.wbmp',
      wbmxl: 'application/vnd.wap.wbxml',
      wml: 'text/vnd.wap.wml',
      wmlc: 'application/vnd.wap.wmlc',
      wmls: 'text/vnd.wap.wmlscript',
      wmlsc: 'application/vnd.wap.wmlscriptc',
      wrl: 'model/vrml',
      xbm: 'image/x-xbitmap',
      xht: 'application/xhtml+xml',
      xhtml: 'application/xhtml+xml',
      xls: 'application/vnd.ms-excel',
      xml: 'application/xml',
      xpm: 'image/x-xpixmap',
      xsl: 'application/xml',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      xltx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
      xlsm: 'application/vnd.ms-excel.sheet.macroEnabled.12',
      xltm: 'application/vnd.ms-excel.template.macroEnabled.12',
      xlam: 'application/vnd.ms-excel.addin.macroEnabled.12',
      xlsb: 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
      xslt: 'application/xslt+xml',
      xul: 'application/vnd.mozilla.xul+xml',
      xwd: 'image/x-xwindowdump',
      xyz: 'chemical/x-xyz',
      zip: 'application/zip'
    }, a = function (t, n) {
      var i = new e.Promise();
      if ('undefined' == typeof FileReader)
        return e.Promise.error(new e.Error(-1, 'Attempted to use a FileReader on an unsupported browser.'));
      var r = new FileReader();
      return r.onloadend = function () {
        if (2 !== r.readyState)
          return i.reject(new e.Error(-1, 'Error reading file.')), void 0;
        var t = r.result, s = /^data:([^;]*);base64,(.*)$/.exec(t);
        return s ? (i.resolve(s[2], n || s[1]), void 0) : (i.reject(new e.Error(-1, 'Unable to interpret data URL: ' + t)), void 0);
      }, r.readAsDataURL(t), i;
    };
  e.File = function (t, i, o) {
    this._name = t;
    var u = /\.([^.]*)$/.exec(t);
    u && (u = u[1].toLowerCase());
    var c = o || s[u] || 'text/plain';
    if (n.isArray(i))
      this._source = e.Promise.as(r(i), c);
    else if (i && i.base64)
      this._source = e.Promise.as(i.base64, c);
    else if ('undefined' != typeof File && i instanceof File)
      this._source = a(i, o);
    else if (n.isString(i))
      throw 'Creating a Parse.File from a String is not yet supported.';
  }, e.File.prototype = {
    name: function () {
      return this._name;
    },
    url: function () {
      return this._url;
    },
    save: function (t) {
      var n = this;
      return n._previousSave || (n._previousSave = n._source.then(function (t, i) {
        var r = {
            base64: t,
            _ContentType: i
          };
        return e._request('files', n._name, null, 'POST', r);
      }).then(function (t) {
        return n._name = t.name, n._url = t.url, n;
      })), n._previousSave._thenRunCallbacks(t);
    }
  };
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Object = function (t, i) {
    if (n.isString(t))
      return e.Object._create.apply(this, arguments);
    t = t || {}, i && i.parse && (t = this.parse(t));
    var r = e._getValue(this, 'defaults');
    if (r && (t = n.extend({}, r, t)), i && i.collection && (this.collection = i.collection), this._serverData = {}, this._opSetQueue = [{}], this.attributes = {}, this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = n.uniqueId('c'), this.changed = {}, this._silent = {}, this._pending = {}, !this.set(t, { silent: !0 }))
      throw Error('Can\'t create an invalid Parse.Object');
    this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, this._previousAttributes = n.clone(this.attributes), this.initialize.apply(this, arguments);
  }, e.Object.saveAll = function (t, n) {
    return e.Object._deepSaveAsync(t)._thenRunCallbacks(n);
  }, n.extend(e.Object.prototype, e.Events, {
    _existed: !1,
    initialize: function () {
    },
    toJSON: function () {
      var t = this._toFullJSON();
      return e._arrayEach([
        '__type',
        'className'
      ], function (e) {
        delete t[e];
      }), t;
    },
    _toFullJSON: function (t) {
      var i = n.clone(this.attributes);
      return e._objectEach(i, function (n, r) {
        i[r] = e._encode(n, t);
      }), e._objectEach(this._operations, function (t, e) {
        i[e] = t;
      }), n.has(this, 'id') && (i.objectId = this.id), n.has(this, 'createdAt') && (i.createdAt = n.isDate(this.createdAt) ? this.createdAt.toJSON() : this.createdAt), n.has(this, 'updatedAt') && (i.updatedAt = n.isDate(this.updatedAt) ? this.updatedAt.toJSON() : this.updatedAt), i.__type = 'Object', i.className = this.className, i;
    },
    _refreshCache: function () {
      var t = this;
      t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function (i, r) {
        i instanceof e.Object ? i._refreshCache() : n.isObject(i) && t._resetCacheForKey(r) && t.set(r, new e.Op.Set(i), { silent: !0 });
      }), delete t._refreshingCache);
    },
    dirty: function (t) {
      this._refreshCache();
      var e = n.last(this._opSetQueue);
      return t ? e[t] ? !0 : !1 : this.id ? n.keys(e).length > 0 ? !0 : !1 : !0;
    },
    _toPointer: function () {
      if (!this.id)
        throw Error('Can\'t serialize an unsaved Parse.Object');
      return {
        __type: 'Pointer',
        className: this.className,
        objectId: this.id
      };
    },
    get: function (t) {
      return this.attributes[t];
    },
    relation: function (t) {
      var n = this.get(t);
      if (n) {
        if (!(n instanceof e.Relation))
          throw 'Called relation() on non-relation field ' + t;
        return n._ensureParentAndKey(this, t), n;
      }
      return new e.Relation(this, t);
    },
    escape: function (t) {
      var i = this._escapedAttributes[t];
      if (i)
        return i;
      var r, s = this.attributes[t];
      return r = e._isNullOrUndefined(s) ? '' : n.escape('' + s), this._escapedAttributes[t] = r, r;
    },
    has: function (t) {
      return !e._isNullOrUndefined(this.attributes[t]);
    },
    _mergeMagicFields: function (t) {
      var i = this, r = [
          'id',
          'objectId',
          'createdAt',
          'updatedAt'
        ];
      e._arrayEach(r, function (r) {
        t[r] && ('objectId' === r ? i.id = t[r] : i[r] = 'createdAt' !== r && 'updatedAt' !== r || n.isDate(t[r]) ? t[r] : e._parseDate(t[r]), delete t[r]);
      });
    },
    _startSave: function () {
      this._opSetQueue.push({});
    },
    _cancelSave: function () {
      var t = n.first(this._opSetQueue);
      this._opSetQueue = n.rest(this._opSetQueue);
      var i = n.first(this._opSetQueue);
      e._objectEach(t, function (e, n) {
        var r = t[n], s = i[n];
        r && s ? i[n] = s._mergeWithPrevious(r) : r && (i[n] = r);
      }), this._saving = this._saving - 1;
    },
    _finishSave: function (t) {
      var i = {};
      e._traverse(this.attributes, function (t) {
        t instanceof e.Object && t.id && t._hasData && (i[t.id] = t);
      });
      var r = n.first(this._opSetQueue);
      this._opSetQueue = n.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), this._mergeMagicFields(t);
      var s = this;
      e._objectEach(t, function (t, n) {
        s._serverData[n] = e._decode(n, t);
        var r = e._traverse(s._serverData[n], function (t) {
            return t instanceof e.Object && i[t.id] ? i[t.id] : void 0;
          });
        r && (s._serverData[n] = r);
      }), this._rebuildAllEstimatedData(), this._saving = this._saving - 1;
    },
    _finishFetch: function (t, n) {
      this._opSetQueue = [{}], this._mergeMagicFields(t);
      var i = this;
      e._objectEach(t, function (t, n) {
        i._serverData[n] = e._decode(n, t);
      }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [{}], this._hasData = n;
    },
    _applyOpSet: function (t, n) {
      var i = this;
      e._objectEach(t, function (t, r) {
        n[r] = t._estimate(n[r], i, r), n[r] === e.Op._UNSET && delete n[r];
      });
    },
    _resetCacheForKey: function (t) {
      var i = this.attributes[t];
      if (!(!n.isObject(i) || i instanceof e.Object || i instanceof e.File)) {
        i = i.toJSON ? i.toJSON() : i;
        var r = JSON.stringify(i);
        if (this._hashedJSON[t] !== r)
          return this._hashedJSON[t] = r, !0;
      }
      return !1;
    },
    _rebuildEstimatedDataForKey: function (t) {
      var n = this;
      delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), e._arrayEach(this._opSetQueue, function (i) {
        var r = i[t];
        r && (n.attributes[t] = r._estimate(n.attributes[t], n, t), n.attributes[t] === e.Op._UNSET ? delete n.attributes[t] : n._resetCacheForKey(t));
      });
    },
    _rebuildAllEstimatedData: function () {
      var t = this, i = n.clone(this.attributes);
      this.attributes = n.clone(this._serverData), e._arrayEach(this._opSetQueue, function (n) {
        t._applyOpSet(n, t.attributes), e._objectEach(n, function (e, n) {
          t._resetCacheForKey(n);
        });
      }), e._objectEach(i, function (e, n) {
        t.attributes[n] !== e && t.trigger('change:' + n, t, t.attributes[n], {});
      }), e._objectEach(this.attributes, function (e, r) {
        n.has(i, r) || t.trigger('change:' + r, t, e, {});
      });
    },
    set: function (t, i, r) {
      var s;
      if (n.isObject(t) || e._isNullOrUndefined(t) ? (s = t, e._objectEach(s, function (t, n) {
          s[n] = e._decode(n, t);
        }), r = i) : (s = {}, s[t] = e._decode(t, i)), r = r || {}, !s)
        return this;
      s instanceof e.Object && (s = s.attributes), r.unset && e._objectEach(s, function (t, n) {
        s[n] = new e.Op.Unset();
      });
      var a = n.clone(s), o = this;
      if (e._objectEach(a, function (t, n) {
          t instanceof e.Op && (a[n] = t._estimate(o.attributes[n], o, n), a[n] === e.Op._UNSET && delete a[n]);
        }), !this._validate(s, r))
        return !1;
      this._mergeMagicFields(s), r.changes = {};
      var u = this._escapedAttributes;
      return this._previousAttributes || {}, e._arrayEach(n.keys(s), function (t) {
        var i = s[t];
        i instanceof e.Relation && (i.parent = o), i instanceof e.Op || (i = new e.Op.Set(i));
        var a = !0;
        i instanceof e.Op.Set && n.isEqual(o.attributes[t], i.value) && (a = !1), a && (delete u[t], r.silent ? o._silent[t] = !0 : r.changes[t] = !0);
        var c = n.last(o._opSetQueue);
        c[t] = i._mergeWithPrevious(c[t]), o._rebuildEstimatedDataForKey(t), a ? (o.changed[t] = o.attributes[t], r.silent || (o._pending[t] = !0)) : (delete o.changed[t], delete o._pending[t]);
      }), r.silent || this.change(r), this;
    },
    unset: function (t, e) {
      return e = e || {}, e.unset = !0, this.set(t, null, e);
    },
    increment: function (t, i) {
      return (n.isUndefined(i) || n.isNull(i)) && (i = 1), this.set(t, new e.Op.Increment(i));
    },
    add: function (t, n) {
      return this.set(t, new e.Op.Add([n]));
    },
    addUnique: function (t, n) {
      return this.set(t, new e.Op.AddUnique([n]));
    },
    remove: function (t, n) {
      return this.set(t, new e.Op.Remove([n]));
    },
    op: function (t) {
      return n.last(this._opSetQueue)[t];
    },
    clear: function (t) {
      t = t || {}, t.unset = !0;
      var e = n.extend(this.attributes, this._operations);
      return this.set(e, t);
    },
    _getSaveJSON: function () {
      var t = n.clone(n.first(this._opSetQueue));
      return e._objectEach(t, function (e, n) {
        t[n] = e.toJSON();
      }), t;
    },
    _canBeSerialized: function () {
      return e.Object._canBeSerializedAsValue(this.attributes);
    },
    fetch: function (t) {
      var n = this, i = e._request('classes', this.className, this.id, 'GET');
      return i.then(function (t, e, i) {
        return n._finishFetch(n.parse(t, e, i), !0), n;
      })._thenRunCallbacks(t, this);
    },
    save: function (t, i, r) {
      var s, a, o;
      if (n.isObject(t) || e._isNullOrUndefined(t) ? (s = t, o = i) : (s = {}, s[t] = i, o = r), !o && s) {
        var u = n.reject(s, function (t, e) {
            return n.include([
              'success',
              'error',
              'wait'
            ], e);
          });
        if (0 === u.length) {
          var c = !0;
          if (n.has(s, 'success') && !n.isFunction(s.success) && (c = !1), n.has(s, 'error') && !n.isFunction(s.error) && (c = !1), c)
            return this.save(null, s);
        }
      }
      o = n.clone(o) || {}, o.wait && (a = n.clone(this.attributes));
      var l = n.clone(o) || {};
      l.wait && (l.silent = !0);
      var h;
      if (l.error = function (t, e) {
          h = e;
        }, s && !this.set(s, l))
        return e.Promise.error(h)._thenRunCallbacks(o, this);
      var f = this;
      f._refreshCache();
      var d = [], p = [];
      return e.Object._findUnsavedChildren(f.attributes, d, p), d.length + p.length > 0 ? e.Object._deepSaveAsync(this.attributes).then(function () {
        return f.save(null, o);
      }, function (t) {
        return e.Promise.error(t)._thenRunCallbacks(o, f);
      }) : (this._startSave(), this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || e.Promise.as(), this._allPreviousSaves = this._allPreviousSaves._continueWith(function () {
        var t = f.id ? 'PUT' : 'POST', i = f._getSaveJSON(), r = 'classes', u = f.className;
        '_User' !== f.className || f.id || (r = 'users', u = null);
        var c = e._request(r, u, f.id, t, i);
        return c = c.then(function (t, e, i) {
          var r = f.parse(t, e, i);
          return o.wait && (r = n.extend(s || {}, r)), f._finishSave(r), o.wait && f.set(a, l), f;
        }, function (t) {
          return f._cancelSave(), e.Promise.error(t);
        })._thenRunCallbacks(o, f);
      }), this._allPreviousSaves);
    },
    destroy: function (t) {
      t = t || {};
      var n = this, i = function () {
          n.trigger('destroy', n, n.collection, t);
        };
      if (!this.id)
        return i();
      t.wait || i();
      var r = e._request('classes', this.className, this.id, 'DELETE');
      return r.then(function () {
        return t.wait && i(), n;
      })._thenRunCallbacks(t, this);
    },
    parse: function (t, i) {
      var r = n.clone(t);
      return n([
        'createdAt',
        'updatedAt'
      ]).each(function (t) {
        r[t] && (r[t] = e._parseDate(r[t]));
      }), r.updatedAt || (r.updatedAt = r.createdAt), i && (this._existed = 201 !== i), r;
    },
    clone: function () {
      return new this.constructor(this.attributes);
    },
    isNew: function () {
      return !this.id;
    },
    change: function (t) {
      t = t || {};
      var i = this._changing;
      this._changing = !0;
      var r = this;
      e._objectEach(this._silent, function (t) {
        r._pending[t] = !0;
      });
      var s = n.extend({}, t.changes, this._silent);
      if (this._silent = {}, e._objectEach(s, function (e, n) {
          r.trigger('change:' + n, r, r.get(n), t);
        }), i)
        return this;
      for (var a = function (t, e) {
          r._pending[e] || r._silent[e] || delete r.changed[e];
        }; !n.isEmpty(this._pending);)
        this._pending = {}, this.trigger('change', this, t), e._objectEach(this.changed, a), r._previousAttributes = n.clone(this.attributes);
      return this._changing = !1, this;
    },
    existed: function () {
      return this._existed;
    },
    hasChanged: function (t) {
      return arguments.length ? this.changed && n.has(this.changed, t) : !n.isEmpty(this.changed);
    },
    changedAttributes: function (t) {
      if (!t)
        return this.hasChanged() ? n.clone(this.changed) : !1;
      var i = {}, r = this._previousAttributes;
      return e._objectEach(t, function (t, e) {
        n.isEqual(r[e], t) || (i[e] = t);
      }), i;
    },
    previous: function (t) {
      return arguments.length && this._previousAttributes ? this._previousAttributes[t] : null;
    },
    previousAttributes: function () {
      return n.clone(this._previousAttributes);
    },
    isValid: function () {
      return !this.validate(this.attributes);
    },
    validate: function (t) {
      return !n.has(t, 'ACL') || t.ACL instanceof e.ACL ? !1 : new e.Error(e.Error.OTHER_CAUSE, 'ACL must be a Parse.ACL.');
    },
    _validate: function (t, e) {
      if (e.silent || !this.validate)
        return !0;
      t = n.extend({}, this.attributes, t);
      var i = this.validate(t, e);
      return i ? (e && e.error ? e.error(this, i, e) : this.trigger('error', this, i, e), !1) : !0;
    },
    getACL: function () {
      return this.get('ACL');
    },
    setACL: function (t, e) {
      return this.set('ACL', t, e);
    }
  }), e.Object._getSubclass = function (t) {
    if (!n.isString(t))
      throw 'Parse.Object._getSubclass requires a string argument.';
    var i = e.Object._classMap[t];
    return i || (i = e.Object.extend(t), e.Object._classMap[t] = i), i;
  }, e.Object._create = function (t, n, i) {
    var r = e.Object._getSubclass(t);
    return new r(n, i);
  }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.extend = function (t, i, r) {
    if (!n.isString(t)) {
      if (t && n.has(t, 'className'))
        return e.Object.extend(t.className, t, i);
      throw Error('Parse.Object.extend\'s first argument should be the className.');
    }
    'User' === t && (t = '_User');
    var s = null;
    if (n.has(e.Object._classMap, t)) {
      var a = e.Object._classMap[t];
      s = a._extend(i, r);
    } else
      i = i || {}, i.className = t, s = this._extend(i, r);
    return s.extend = function (i) {
      if (n.isString(i) || i && n.has(i, 'className'))
        return e.Object.extend.apply(s, arguments);
      var r = [t].concat(e._.toArray(arguments));
      return e.Object.extend.apply(s, r);
    }, e.Object._classMap[t] = s, s;
  }, e.Object._findUnsavedChildren = function (t, n, i) {
    e._traverse(t, function (t) {
      return t instanceof e.Object ? (t._refreshCache(), t.dirty() && n.push(t), void 0) : t instanceof e.File ? (t.url() || i.push(t), void 0) : void 0;
    });
  }, e.Object._canBeSerializedAsValue = function (t) {
    var i = !0;
    return t instanceof e.Object ? i = !!t.id : n.isArray(t) ? e._arrayEach(t, function (t) {
      e.Object._canBeSerializedAsValue(t) || (i = !1);
    }) : n.isObject(t) && e._objectEach(t, function (t) {
      e.Object._canBeSerializedAsValue(t) || (i = !1);
    }), i;
  }, e.Object._deepSaveAsync = function (t) {
    var i = [], r = [];
    e.Object._findUnsavedChildren(t, i, r);
    var s = e.Promise.as();
    n.each(r, function (t) {
      s = s.then(function () {
        return t.save();
      });
    });
    var a = n.uniq(i), o = n.uniq(a);
    return s.then(function () {
      return e.Promise._continueWhile(function () {
        return o.length > 0;
      }, function () {
        var t = [], i = [];
        if (e._arrayEach(o, function (e) {
            return t.length > 20 ? (i.push(e), void 0) : (e._canBeSerialized() ? t.push(e) : i.push(e), void 0);
          }), o = i, 0 === t.length)
          return e.Promise.error(new e.Error(e.Error.OTHER_CAUSE, 'Tried to save a batch with a cycle.'));
        var r = e.Promise.when(n.map(t, function (t) {
            return t._allPreviousSaves || e.Promise.as();
          })), s = new e.Promise();
        return e._arrayEach(t, function (t) {
          t._allPreviousSaves = s;
        }), r._continueWith(function () {
          return e._request('batch', null, null, 'POST', {
            requests: n.map(t, function (t) {
              var e = t._getSaveJSON(), n = 'POST', i = '/1/classes/' + t.className;
              return t.id && (i = i + '/' + t.id, n = 'PUT'), t._startSave(), {
                method: n,
                path: i,
                body: e
              };
            })
          }).then(function (n, i, r) {
            var s;
            return e._arrayEach(t, function (t, e) {
              n[e].success ? t._finishSave(t.parse(n[e].success, i, r)) : (s = s || n[e].error, t._cancelSave());
            }), s ? e.Promise.error(new e.Error(s.code, s.error)) : void 0;
          }).then(function (t) {
            return s.resolve(t), t;
          }, function (t) {
            return s.reject(t), e.Promise.error(t);
          });
        });
      });
    }).then(function () {
      return t;
    });
  };
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Role = e.Object.extend('_Role', {
    constructor: function (t, i) {
      n.isString(t) && i instanceof e.ACL ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t), this.setACL(i)) : e.Object.prototype.constructor.call(this, t, i);
    },
    getName: function () {
      return this.get('name');
    },
    setName: function (t, e) {
      return this.set('name', t, e);
    },
    getUsers: function () {
      return this.relation('users');
    },
    getRoles: function () {
      return this.relation('roles');
    },
    validate: function (t, i) {
      if ('name' in t && t.name !== this.getName()) {
        var r = t.name;
        if (this.id && this.id !== t.objectId)
          return new e.Error(e.Error.OTHER_CAUSE, 'A role\'s name can only be set before it has been saved.');
        if (!n.isString(r))
          return new e.Error(e.Error.OTHER_CAUSE, 'A role\'s name must be a String.');
        if (!/^[0-9a-zA-Z\-_ ]+$/.test(r))
          return new e.Error(e.Error.OTHER_CAUSE, 'A role\'s name can only contain alphanumeric characters, _, -, and spaces.');
      }
      return e.Object.prototype.validate ? e.Object.prototype.validate.call(this, t, i) : !1;
    }
  });
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Collection = function (t, e) {
    e = e || {}, e.comparator && (this.comparator = e.comparator), e.model && (this.model = e.model), e.query && (this.query = e.query), this._reset(), this.initialize.apply(this, arguments), t && this.reset(t, {
      silent: !0,
      parse: e.parse
    });
  }, n.extend(e.Collection.prototype, e.Events, {
    model: e.Object,
    initialize: function () {
    },
    toJSON: function () {
      return this.map(function (t) {
        return t.toJSON();
      });
    },
    add: function (t, i) {
      var r, s, a, o, u, c, l = {}, h = {};
      for (i = i || {}, t = n.isArray(t) ? t.slice() : [t], r = 0, a = t.length; a > r; r++) {
        if (t[r] = this._prepareModel(t[r], i), o = t[r], !o)
          throw Error('Can\'t add an invalid model to a collection');
        if (u = o.cid, l[u] || this._byCid[u])
          throw Error('Duplicate cid: can\'t add the same model to a collection twice');
        if (c = o.id, !e._isNullOrUndefined(c) && (h[c] || this._byId[c]))
          throw Error('Duplicate id: can\'t add the same model to a collection twice');
        h[c] = o, l[u] = o;
      }
      for (r = 0; a > r; r++)
        (o = t[r]).on('all', this._onModelEvent, this), this._byCid[o.cid] = o, o.id && (this._byId[o.id] = o);
      if (this.length += a, s = e._isNullOrUndefined(i.at) ? this.models.length : i.at, this.models.splice.apply(this.models, [
          s,
          0
        ].concat(t)), this.comparator && this.sort({ silent: !0 }), i.silent)
        return this;
      for (r = 0, a = this.models.length; a > r; r++)
        o = this.models[r], l[o.cid] && (i.index = r, o.trigger('add', o, this, i));
      return this;
    },
    remove: function (t, e) {
      var i, r, s, a;
      for (e = e || {}, t = n.isArray(t) ? t.slice() : [t], i = 0, r = t.length; r > i; i++)
        a = this.getByCid(t[i]) || this.get(t[i]), a && (delete this._byId[a.id], delete this._byCid[a.cid], s = this.indexOf(a), this.models.splice(s, 1), this.length--, e.silent || (e.index = s, a.trigger('remove', a, this, e)), this._removeReference(a));
      return this;
    },
    get: function (t) {
      return t && this._byId[t.id || t];
    },
    getByCid: function (t) {
      return t && this._byCid[t.cid || t];
    },
    at: function (t) {
      return this.models[t];
    },
    sort: function (t) {
      if (t = t || {}, !this.comparator)
        throw Error('Cannot sort a set without a comparator');
      var e = n.bind(this.comparator, this);
      return 1 === this.comparator.length ? this.models = this.sortBy(e) : this.models.sort(e), t.silent || this.trigger('reset', this, t), this;
    },
    pluck: function (t) {
      return n.map(this.models, function (e) {
        return e.get(t);
      });
    },
    reset: function (t, n) {
      var i = this;
      return t = t || [], n = n || {}, e._arrayEach(this.models, function (t) {
        i._removeReference(t);
      }), this._reset(), this.add(t, {
        silent: !0,
        parse: n.parse
      }), n.silent || this.trigger('reset', this, n), this;
    },
    fetch: function (t) {
      t = n.clone(t) || {}, void 0 === t.parse && (t.parse = !0);
      var i = this, r = this.query || new e.Query(this.model);
      return r.find().then(function (e) {
        return t.add ? i.add(e, t) : i.reset(e, t), i;
      })._thenRunCallbacks(t, this);
    },
    create: function (t, e) {
      var i = this;
      if (e = e ? n.clone(e) : {}, t = this._prepareModel(t, e), !t)
        return !1;
      e.wait || i.add(t, e);
      var r = e.success;
      return e.success = function (n, s) {
        e.wait && i.add(n, e), r ? r(n, s) : n.trigger('sync', t, s, e);
      }, t.save(null, e), t;
    },
    parse: function (t) {
      return t;
    },
    chain: function () {
      return n(this.models).chain();
    },
    _reset: function () {
      this.length = 0, this.models = [], this._byId = {}, this._byCid = {};
    },
    _prepareModel: function (t, n) {
      if (t instanceof e.Object)
        t.collection || (t.collection = this);
      else {
        var i = t;
        n.collection = this, t = new this.model(i, n), t._validate(t.attributes, n) || (t = !1);
      }
      return t;
    },
    _removeReference: function (t) {
      this === t.collection && delete t.collection, t.off('all', this._onModelEvent, this);
    },
    _onModelEvent: function (t, e, n, i) {
      ('add' !== t && 'remove' !== t || n === this) && ('destroy' === t && this.remove(e, i), e && 'change:objectId' === t && (delete this._byId[e.previous('objectId')], this._byId[e.id] = e), this.trigger.apply(this, arguments));
    }
  });
  var i = [
      'forEach',
      'each',
      'map',
      'reduce',
      'reduceRight',
      'find',
      'detect',
      'filter',
      'select',
      'reject',
      'every',
      'all',
      'some',
      'any',
      'include',
      'contains',
      'invoke',
      'max',
      'min',
      'sortBy',
      'sortedIndex',
      'toArray',
      'size',
      'first',
      'initial',
      'rest',
      'last',
      'without',
      'indexOf',
      'shuffle',
      'lastIndexOf',
      'isEmpty',
      'groupBy'
    ];
  e._arrayEach(i, function (t) {
    e.Collection.prototype[t] = function () {
      return n[t].apply(n, [this.models].concat(n.toArray(arguments)));
    };
  }), e.Collection.extend = e._extend;
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.View = function (t) {
    this.cid = n.uniqueId('view'), this._configure(t || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents();
  };
  var i = /^(\S+)\s*(.*)$/, r = [
      'model',
      'collection',
      'el',
      'id',
      'attributes',
      'className',
      'tagName'
    ];
  n.extend(e.View.prototype, e.Events, {
    tagName: 'div',
    $: function (t) {
      return this.$el.find(t);
    },
    initialize: function () {
    },
    render: function () {
      return this;
    },
    remove: function () {
      return this.$el.remove(), this;
    },
    make: function (t, n, i) {
      var r = document.createElement(t);
      return n && e.$(r).attr(n), i && e.$(r).html(i), r;
    },
    setElement: function (t, n) {
      return this.$el = e.$(t), this.el = this.$el[0], n !== !1 && this.delegateEvents(), this;
    },
    delegateEvents: function (t) {
      if (t = t || e._getValue(this, 'events')) {
        this.undelegateEvents();
        var r = this;
        e._objectEach(t, function (e, s) {
          if (n.isFunction(e) || (e = r[t[s]]), !e)
            throw Error('Event "' + t[s] + '" does not exist');
          var a = s.match(i), o = a[1], u = a[2];
          e = n.bind(e, r), o += '.delegateEvents' + r.cid, '' === u ? r.$el.bind(o, e) : r.$el.delegate(u, o, e);
        });
      }
    },
    undelegateEvents: function () {
      this.$el.unbind('.delegateEvents' + this.cid);
    },
    _configure: function (t) {
      this.options && (t = n.extend({}, this.options, t));
      var e = this;
      n.each(r, function (n) {
        t[n] && (e[n] = t[n]);
      }), this.options = t;
    },
    _ensureElement: function () {
      if (this.el)
        this.setElement(this.el, !1);
      else {
        var t = e._getValue(this, 'attributes') || {};
        this.id && (t.id = this.id), this.className && (t['class'] = this.className), this.setElement(this.make(this.tagName, t), !1);
      }
    }
  }), e.View.extend = e._extend;
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.User = e.Object.extend('_User', {
    _isCurrentUser: !1,
    _mergeMagicFields: function (t) {
      t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), e.User.__super__._mergeMagicFields.call(this, t);
    },
    _cleanupAuthData: function () {
      if (this.isCurrent()) {
        var t = this.get('authData');
        t && e._objectEach(this.get('authData'), function (e, n) {
          t[n] || delete t[n];
        });
      }
    },
    _synchronizeAllAuthData: function () {
      var t = this.get('authData');
      if (t) {
        var n = this;
        e._objectEach(this.get('authData'), function (t, e) {
          n._synchronizeAuthData(e);
        });
      }
    },
    _synchronizeAuthData: function (t) {
      if (this.isCurrent()) {
        var i;
        n.isString(t) ? (i = t, t = e.User._authProviders[i]) : i = t.getAuthType();
        var r = this.get('authData');
        if (r && t) {
          var s = t.restoreAuthentication(r[i]);
          s || this._unlinkFrom(t);
        }
      }
    },
    _handleSaveResult: function (t) {
      t && (this._isCurrentUser = !0), this._cleanupAuthData(), this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey('password'), this._refreshCache(), (t || this.isCurrent()) && e.User._saveCurrentUser(this);
    },
    _linkWith: function (t, i) {
      var r;
      if (n.isString(t) ? (r = t, t = e.User._authProviders[t]) : r = t.getAuthType(), n.has(i, 'authData')) {
        var s = this.get('authData') || {};
        s[r] = i.authData, this.set('authData', s);
        var a = n.clone(i) || {};
        return a.success = function (t) {
          t._handleSaveResult(!0), i.success && i.success.apply(this, arguments);
        }, this.save({ authData: s }, a);
      }
      var o = this, u = new e.Promise();
      return t.authenticate({
        success: function (t, e) {
          o._linkWith(t, {
            authData: e,
            success: i.success,
            error: i.error
          }).then(function () {
            u.resolve(o);
          });
        },
        error: function (t, e) {
          i.error && i.error(o, e), u.reject(e);
        }
      }), u;
    },
    _unlinkFrom: function (t, i) {
      var r;
      n.isString(t) ? (r = t, t = e.User._authProviders[t]) : r = t.getAuthType();
      var s = n.clone(i), a = this;
      return s.authData = null, s.success = function () {
        a._synchronizeAuthData(t), i.success && i.success.apply(this, arguments);
      }, this._linkWith(t, s);
    },
    _isLinked: function (t) {
      var e;
      e = n.isString(t) ? t : t.getAuthType();
      var i = this.get('authData') || {};
      return !!i[e];
    },
    _logOutWithAll: function () {
      var t = this.get('authData');
      if (t) {
        var n = this;
        e._objectEach(this.get('authData'), function (t, e) {
          n._logOutWith(e);
        });
      }
    },
    _logOutWith: function (t) {
      this.isCurrent() && (n.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate());
    },
    signUp: function (t, i) {
      var r;
      i = i || {};
      var s = t && t.username || this.get('username');
      if (!s || '' === s)
        return r = new e.Error(e.Error.OTHER_CAUSE, 'Cannot sign up user with an empty name.'), i && i.error && i.error(this, r), e.Promise.error(r);
      var a = t && t.password || this.get('password');
      if (!a || '' === a)
        return r = new e.Error(e.Error.OTHER_CAUSE, 'Cannot sign up user with an empty password.'), i && i.error && i.error(this, r), e.Promise.error(r);
      var o = n.clone(i);
      return o.success = function (t) {
        t._handleSaveResult(!0), i.success && i.success.apply(this, arguments);
      }, this.save(t, o);
    },
    logIn: function (t) {
      var n = this, i = e._request('login', null, null, 'GET', this.toJSON());
      return i.then(function (t, e, i) {
        var r = n.parse(t, e, i);
        return n._finishFetch(r), n._handleSaveResult(!0), n;
      })._thenRunCallbacks(t, this);
    },
    save: function (t, i, r) {
      var s, a;
      n.isObject(t) || n.isNull(t) || n.isUndefined(t) ? (s = t, a = i) : (s = {}, s[t] = i, a = r), a = a || {};
      var o = n.clone(a);
      return o.success = function (t) {
        t._handleSaveResult(!1), a.success && a.success.apply(this, arguments);
      }, e.Object.prototype.save.call(this, s, o);
    },
    fetch: function (t) {
      var i = t ? n.clone(t) : {};
      return i.success = function (e) {
        e._handleSaveResult(!1), t && t.success && t.success.apply(this, arguments);
      }, e.Object.prototype.fetch.call(this, i);
    },
    isCurrent: function () {
      return this._isCurrentUser;
    },
    getUsername: function () {
      return this.get('username');
    },
    setUsername: function (t, e) {
      return this.set('username', t, e);
    },
    setPassword: function (t, e) {
      return this.set('password', t, e);
    },
    getEmail: function () {
      return this.get('email');
    },
    setEmail: function (t, e) {
      return this.set('email', t, e);
    },
    authenticated: function () {
      return !!this._sessionToken && e.User.current() && e.User.current().id === this.id;
    }
  }, {
    _currentUser: null,
    _currentUserMatchesDisk: !1,
    _CURRENT_USER_KEY: 'currentUser',
    _authProviders: {},
    signUp: function (t, n, i, r) {
      i = i || {}, i.username = t, i.password = n;
      var s = e.Object._create('_User');
      return s.signUp(i, r);
    },
    logIn: function (t, n, i) {
      var r = e.Object._create('_User');
      return r._finishFetch({
        username: t,
        password: n
      }), r.logIn(i);
    },
    logOut: function () {
      null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, e.localStorage.removeItem(e._getParsePath(e.User._CURRENT_USER_KEY));
    },
    requestPasswordReset: function (t, n) {
      var i = { email: t }, r = e._request('requestPasswordReset', null, null, 'POST', i);
      return r._thenRunCallbacks(n);
    },
    current: function () {
      if (e.User._currentUser)
        return e.User._currentUser;
      if (e.User._currentUserMatchesDisk)
        return e.User._currentUser;
      e.User._currentUserMatchesDisk = !0;
      var t = e.localStorage.getItem(e._getParsePath(e.User._CURRENT_USER_KEY));
      if (!t)
        return null;
      e.User._currentUser = e.Object._create('_User'), e.User._currentUser._isCurrentUser = !0;
      var n = JSON.parse(t);
      return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, delete n._sessionToken, e.User._currentUser.set(n), e.User._currentUser._synchronizeAllAuthData(), e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [{}], e.User._currentUser;
    },
    _saveCurrentUser: function (t) {
      e.User._currentUser !== t && e.User.logOut(), t._isCurrentUser = !0, e.User._currentUser = t, e.User._currentUserMatchesDisk = !0;
      var n = t.toJSON();
      n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItem(e._getParsePath(e.User._CURRENT_USER_KEY), JSON.stringify(n));
    },
    _registerAuthenticationProvider: function (t) {
      e.User._authProviders[t.getAuthType()] = t, e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType());
    },
    _logInWith: function (t, n) {
      var i = e.Object._create('_User');
      return i._linkWith(t, n);
    }
  });
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Query = function (t) {
    n.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, this._where = {}, this._include = [], this._limit = -1, this._skip = 0, this._extraOptions = {};
  }, e.Query.or = function () {
    var t = n.toArray(arguments), i = null;
    e._arrayEach(t, function (t) {
      if (n.isNull(i) && (i = t.className), i !== t.className)
        throw 'All queries must be for the same class';
    });
    var r = new e.Query(i);
    return r._orQuery(t), r;
  }, e.Query.prototype = {
    get: function (t, n) {
      var i = this;
      return i.equalTo('objectId', t), i.first().then(function (t) {
        if (t)
          return t;
        var n = new e.Error(e.Error.OBJECT_NOT_FOUND, 'Object not found.');
        return e.Promise.error(n);
      })._thenRunCallbacks(n, null);
    },
    toJSON: function () {
      var t = { where: this._where };
      return this._include.length > 0 && (t.include = this._include.join(',')), this._select && (t.keys = this._select.join(',')), this._limit >= 0 && (t.limit = this._limit), this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), e._objectEach(this._extraOptions, function (e, n) {
        t[n] = e;
      }), t;
    },
    find: function (t) {
      var i = this, r = e._request('classes', this.className, null, 'GET', this.toJSON());
      return r.then(function (t) {
        return n.map(t.results, function (n) {
          var r;
          return r = t.className ? new e.Object(t.className) : new i.objectClass(), r._finishFetch(n, !0), r;
        });
      })._thenRunCallbacks(t);
    },
    count: function (t) {
      var n = this.toJSON();
      n.limit = 0, n.count = 1;
      var i = e._request('classes', this.className, null, 'GET', n);
      return i.then(function (t) {
        return t.count;
      })._thenRunCallbacks(t);
    },
    first: function (t) {
      var i = this, r = this.toJSON();
      r.limit = 1;
      var s = e._request('classes', this.className, null, 'GET', r);
      return s.then(function (t) {
        return n.map(t.results, function (t) {
          var e = new i.objectClass();
          return e._finishFetch(t, !0), e;
        })[0];
      })._thenRunCallbacks(t);
    },
    collection: function (t, i) {
      return i = i || {}, new e.Collection(t, n.extend(i, {
        model: this.objectClass,
        query: this
      }));
    },
    skip: function (t) {
      return this._skip = t, this;
    },
    limit: function (t) {
      return this._limit = t, this;
    },
    equalTo: function (t, n) {
      return this._where[t] = e._encode(n), this;
    },
    _addCondition: function (t, n, i) {
      return this._where[t] || (this._where[t] = {}), this._where[t][n] = e._encode(i), this;
    },
    notEqualTo: function (t, e) {
      return this._addCondition(t, '$ne', e), this;
    },
    lessThan: function (t, e) {
      return this._addCondition(t, '$lt', e), this;
    },
    greaterThan: function (t, e) {
      return this._addCondition(t, '$gt', e), this;
    },
    lessThanOrEqualTo: function (t, e) {
      return this._addCondition(t, '$lte', e), this;
    },
    greaterThanOrEqualTo: function (t, e) {
      return this._addCondition(t, '$gte', e), this;
    },
    containedIn: function (t, e) {
      return this._addCondition(t, '$in', e), this;
    },
    notContainedIn: function (t, e) {
      return this._addCondition(t, '$nin', e), this;
    },
    containsAll: function (t, e) {
      return this._addCondition(t, '$all', e), this;
    },
    exists: function (t) {
      return this._addCondition(t, '$exists', !0), this;
    },
    doesNotExist: function (t) {
      return this._addCondition(t, '$exists', !1), this;
    },
    matches: function (t, e, n) {
      return this._addCondition(t, '$regex', e), n || (n = ''), e.ignoreCase && (n += 'i'), e.multiline && (n += 'm'), n && n.length && this._addCondition(t, '$options', n), this;
    },
    matchesQuery: function (t, e) {
      var n = e.toJSON();
      return n.className = e.className, this._addCondition(t, '$inQuery', n), this;
    },
    doesNotMatchQuery: function (t, e) {
      var n = e.toJSON();
      return n.className = e.className, this._addCondition(t, '$notInQuery', n), this;
    },
    matchesKeyInQuery: function (t, e, n) {
      var i = n.toJSON();
      return i.className = n.className, this._addCondition(t, '$select', {
        key: e,
        query: i
      }), this;
    },
    doesNotMatchKeyInQuery: function (t, e, n) {
      var i = n.toJSON();
      return i.className = n.className, this._addCondition(t, '$dontSelect', {
        key: e,
        query: i
      }), this;
    },
    _orQuery: function (t) {
      var e = n.map(t, function (t) {
          return t.toJSON().where;
        });
      return this._where.$or = e, this;
    },
    _quote: function (t) {
      return '\\Q' + t.replace('\\E', '\\E\\\\E\\Q') + '\\E';
    },
    contains: function (t, e) {
      return this._addCondition(t, '$regex', this._quote(e)), this;
    },
    startsWith: function (t, e) {
      return this._addCondition(t, '$regex', '^' + this._quote(e)), this;
    },
    endsWith: function (t, e) {
      return this._addCondition(t, '$regex', this._quote(e) + '$'), this;
    },
    ascending: function (t) {
      return this._order = t, this;
    },
    descending: function (t) {
      return this._order = '-' + t, this;
    },
    near: function (t, n) {
      return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, '$nearSphere', n), this;
    },
    withinRadians: function (t, e, n) {
      return this.near(t, e), this._addCondition(t, '$maxDistance', n), this;
    },
    withinMiles: function (t, e, n) {
      return this.withinRadians(t, e, n / 3958.8);
    },
    withinKilometers: function (t, e, n) {
      return this.withinRadians(t, e, n / 6371);
    },
    withinGeoBox: function (t, n, i) {
      return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), i instanceof e.GeoPoint || (i = new e.GeoPoint(i)), this._addCondition(t, '$within', {
        $box: [
          n,
          i
        ]
      }), this;
    },
    include: function () {
      var t = this;
      return e._arrayEach(arguments, function (e) {
        n.isArray(e) ? t._include = t._include.concat(e) : t._include.push(e);
      }), this;
    },
    select: function () {
      var t = this;
      return this._select = this._select || [], e._arrayEach(arguments, function (e) {
        n.isArray(e) ? t._select = t._select.concat(e) : t._select.push(e);
      }), this;
    },
    each: function (t, i) {
      if (i = i || {}, this._order || this._skip || this._limit >= 0) {
        var r = 'Cannot iterate on a query with sort, skip, or limit.';
        return e.Promise.error(r)._thenRunCallbacks(i);
      }
      new e.Promise();
      var s = new e.Query(this.objectClass);
      s._limit = i.batchSize || 100, s._where = n.clone(this._where), s._include = n.clone(this._include), s.ascending('objectId');
      var a = !1;
      return e.Promise._continueWhile(function () {
        return !a;
      }, function () {
        return s.find().then(function (n) {
          var i = e.Promise.as();
          return e._.each(n, function (e) {
            i = i.then(function () {
              return t(e);
            });
          }), i.then(function () {
            n.length >= s._limit ? s.greaterThan('objectId', n[n.length - 1].id) : a = !0;
          });
        });
      })._thenRunCallbacks(i);
    }
  };
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e, n, i = t.Parse, r = i._, s = !1, a = {
      authenticate: function (t) {
        var n = this;
        FB.login(function (e) {
          e.authResponse ? t.success && t.success(n, {
            id: e.authResponse.userID,
            access_token: e.authResponse.accessToken,
            expiration_date: new Date(1000 * e.authResponse.expiresIn + new Date().getTime()).toJSON()
          }) : t.error && t.error(n, e);
        }, { scope: e });
      },
      restoreAuthentication: function (t) {
        if (t) {
          var e = {
              userID: t.id,
              accessToken: t.access_token,
              expiresIn: (i._parseDate(t.expiration_date).getTime() - new Date().getTime()) / 1000
            }, s = r.clone(n);
          s.authResponse = e, s.status = !1, FB.init(s);
        }
        return !0;
      },
      getAuthType: function () {
        return 'facebook';
      },
      deauthenticate: function () {
        this.restoreAuthentication(null), FB.logout();
      }
    };
  i.FacebookUtils = {
    init: function (t) {
      if ('undefined' == typeof FB)
        throw 'The Facebook JavaScript SDK must be loaded before calling init.';
      if (n = r.clone(t) || {}, n.status && 'undefined' != typeof console) {
        var e = console.warn || console.log || function () {
          };
        e.call(console, 'The \'status\' flag passed into FB.init, when set to true, can interfere with Parse Facebook integration, so it has been suppressed. Please call FB.getLoginStatus() explicitly if you require this behavior.');
      }
      n.status = !1, FB.init(n), i.User._registerAuthenticationProvider(a), s = !0;
    },
    isLinked: function (t) {
      return t._isLinked('facebook');
    },
    logIn: function (t, n) {
      if (!t || r.isString(t)) {
        if (!s)
          throw 'You must initialize FacebookUtils before calling logIn.';
        return e = t, i.User._logInWith('facebook', n);
      }
      var a = r.clone(n) || {};
      return a.authData = t, i.User._logInWith('facebook', a);
    },
    link: function (t, n, i) {
      if (!n || r.isString(n)) {
        if (!s)
          throw 'You must initialize FacebookUtils before calling link.';
        return e = n, t._linkWith('facebook', i);
      }
      var a = r.clone(i) || {};
      return a.authData = n, t._linkWith('facebook', a);
    },
    unlink: function (t, e) {
      if (!s)
        throw 'You must initialize FacebookUtils before calling unlink.';
      return t._unlinkFrom('facebook', e);
    }
  };
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.History = function () {
    this.handlers = [], n.bindAll(this, 'checkUrl');
  };
  var i = /^[#\/]/, r = /msie [\w.]+/;
  e.History.started = !1, n.extend(e.History.prototype, e.Events, {
    interval: 50,
    getHash: function (t) {
      var e = t ? t.location : window.location, n = e.href.match(/#(.*)$/);
      return n ? n[1] : '';
    },
    getFragment: function (t, n) {
      if (e._isNullOrUndefined(t))
        if (this._hasPushState || n) {
          t = window.location.pathname;
          var r = window.location.search;
          r && (t += r);
        } else
          t = this.getHash();
      return t.indexOf(this.options.root) || (t = t.substr(this.options.root.length)), t.replace(i, '');
    },
    start: function (t) {
      if (e.History.started)
        throw Error('Parse.history has already been started');
      e.History.started = !0, this.options = n.extend({}, { root: '/' }, this.options, t), this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && window.history && window.history.pushState);
      var s = this.getFragment(), a = document.documentMode, o = r.exec(navigator.userAgent.toLowerCase()) && (!a || 7 >= a);
      o && (this.iframe = e.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow, this.navigate(s)), this._hasPushState ? e.$(window).bind('popstate', this.checkUrl) : this._wantsHashChange && 'onhashchange' in window && !o ? e.$(window).bind('hashchange', this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = window.setInterval(this.checkUrl, this.interval)), this.fragment = s;
      var u = window.location, c = u.pathname === this.options.root;
      return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !c ? (this.fragment = this.getFragment(null, !0), window.location.replace(this.options.root + '#' + this.fragment), !0) : (this._wantsPushState && this._hasPushState && c && u.hash && (this.fragment = this.getHash().replace(i, ''), window.history.replaceState({}, document.title, u.protocol + '//' + u.host + this.options.root + this.fragment)), this.options.silent ? void 0 : this.loadUrl());
    },
    stop: function () {
      e.$(window).unbind('popstate', this.checkUrl).unbind('hashchange', this.checkUrl), window.clearInterval(this._checkUrlInterval), e.History.started = !1;
    },
    route: function (t, e) {
      this.handlers.unshift({
        route: t,
        callback: e
      });
    },
    checkUrl: function () {
      var t = this.getFragment();
      return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment ? !1 : (this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash()), void 0);
    },
    loadUrl: function (t) {
      var e = this.fragment = this.getFragment(t), i = n.any(this.handlers, function (t) {
          return t.route.test(e) ? (t.callback(e), !0) : void 0;
        });
      return i;
    },
    navigate: function (t, n) {
      if (!e.History.started)
        return !1;
      n && n !== !0 || (n = { trigger: n });
      var r = (t || '').replace(i, '');
      if (this.fragment !== r) {
        if (this._hasPushState) {
          0 !== r.indexOf(this.options.root) && (r = this.options.root + r), this.fragment = r;
          var s = n.replace ? 'replaceState' : 'pushState';
          window.history[s]({}, document.title, r);
        } else
          this._wantsHashChange ? (this.fragment = r, this._updateHash(window.location, r, n.replace), this.iframe && r !== this.getFragment(this.getHash(this.iframe)) && (n.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, r, n.replace))) : window.location.assign(this.options.root + t);
        n.trigger && this.loadUrl(t);
      }
    },
    _updateHash: function (t, e, n) {
      if (n) {
        var i = ('' + t).replace(/(javascript:|#).*$/, '');
        t.replace(i + '#' + e);
      } else
        t.hash = e;
    }
  });
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Router = function (t) {
    t = t || {}, t.routes && (this.routes = t.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
  };
  var i = /:\w+/g, r = /\*\w+/g, s = /[\-\[\]{}()+?.,\\\^\$\|#\s]/g;
  n.extend(e.Router.prototype, e.Events, {
    initialize: function () {
    },
    route: function (t, i, r) {
      return e.history = e.history || new e.History(), n.isRegExp(t) || (t = this._routeToRegExp(t)), r || (r = this[i]), e.history.route(t, n.bind(function (n) {
        var s = this._extractParameters(t, n);
        r && r.apply(this, s), this.trigger.apply(this, ['route:' + i].concat(s)), e.history.trigger('route', this, i, s);
      }, this)), this;
    },
    navigate: function (t, n) {
      e.history.navigate(t, n);
    },
    _bindRoutes: function () {
      if (this.routes) {
        var t = [];
        for (var e in this.routes)
          this.routes.hasOwnProperty(e) && t.unshift([
            e,
            this.routes[e]
          ]);
        for (var n = 0, i = t.length; i > n; n++)
          this.route(t[n][0], t[n][1], this[t[n][1]]);
      }
    },
    _routeToRegExp: function (t) {
      return t = t.replace(s, '\\$&').replace(i, '([^/]+)').replace(r, '(.*?)'), RegExp('^' + t + '$');
    },
    _extractParameters: function (t, e) {
      return t.exec(e).slice(1);
    }
  }), e.Router.extend = e._extend;
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse, n = e._;
  e.Cloud = e.Cloud || {}, n.extend(e.Cloud, {
    run: function (t, n, i) {
      var r = e._request('functions', t, null, 'POST', e._encode(n, null, !0));
      return r.then(function (t) {
        return e._decode(null, t).result;
      })._thenRunCallbacks(i);
    }
  });
}(this), function (t) {
  t.Parse = t.Parse || {};
  var e = t.Parse;
  e.Installation = e.Object.extend('_Installation'), e.Push = e.Push || {}, e.Push.send = function (t, n) {
    if (t.where && (t.where = t.where.toJSON().where), t.push_time && (t.push_time = t.push_time.toJSON()), t.expiration_time && (t.expiration_time = t.expiration_time.toJSON()), t.expiration_time && t.expiration_time_interval)
      throw 'Both expiration_time and expiration_time_interval can\'t be set';
    var i = e._request('push', null, null, 'POST', t);
    return i._thenRunCallbacks(n);
  };
}(this));
!function (a) {
  var b = '0.9.3', c = {
      isMsie: function () {
        var a = /(msie) ([\w.]+)/i.exec(navigator.userAgent);
        return a ? parseInt(a[2], 10) : !1;
      },
      isBlankString: function (a) {
        return !a || /^\s*$/.test(a);
      },
      escapeRegExChars: function (a) {
        return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
      },
      isString: function (a) {
        return 'string' == typeof a;
      },
      isNumber: function (a) {
        return 'number' == typeof a;
      },
      isArray: a.isArray,
      isFunction: a.isFunction,
      isObject: a.isPlainObject,
      isUndefined: function (a) {
        return 'undefined' == typeof a;
      },
      bind: a.proxy,
      bindAll: function (b) {
        var c;
        for (var d in b)
          a.isFunction(c = b[d]) && (b[d] = a.proxy(c, b));
      },
      indexOf: function (a, b) {
        for (var c = 0; c < a.length; c++)
          if (a[c] === b)
            return c;
        return -1;
      },
      each: a.each,
      map: a.map,
      filter: a.grep,
      every: function (b, c) {
        var d = !0;
        return b ? (a.each(b, function (a, e) {
          return (d = c.call(null, e, a, b)) ? void 0 : !1;
        }), !!d) : d;
      },
      some: function (b, c) {
        var d = !1;
        return b ? (a.each(b, function (a, e) {
          return (d = c.call(null, e, a, b)) ? !1 : void 0;
        }), !!d) : d;
      },
      mixin: a.extend,
      getUniqueId: function () {
        var a = 0;
        return function () {
          return a++;
        };
      }(),
      defer: function (a) {
        setTimeout(a, 0);
      },
      debounce: function (a, b, c) {
        var d, e;
        return function () {
          var f, g, h = this, i = arguments;
          return f = function () {
            d = null, c || (e = a.apply(h, i));
          }, g = c && !d, clearTimeout(d), d = setTimeout(f, b), g && (e = a.apply(h, i)), e;
        };
      },
      throttle: function (a, b) {
        var c, d, e, f, g, h;
        return g = 0, h = function () {
          g = new Date(), e = null, f = a.apply(c, d);
        }, function () {
          var i = new Date(), j = b - (i - g);
          return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f;
        };
      },
      tokenizeQuery: function (b) {
        return a.trim(b).toLowerCase().split(/[\s]+/);
      },
      tokenizeText: function (b) {
        return a.trim(b).toLowerCase().split(/[\s\-_]+/);
      },
      getProtocol: function () {
        return location.protocol;
      },
      noop: function () {
      }
    }, d = function () {
      var a = /\s+/;
      return {
        on: function (b, c) {
          var d;
          if (!c)
            return this;
          for (this._callbacks = this._callbacks || {}, b = b.split(a); d = b.shift();)
            this._callbacks[d] = this._callbacks[d] || [], this._callbacks[d].push(c);
          return this;
        },
        trigger: function (b, c) {
          var d, e;
          if (!this._callbacks)
            return this;
          for (b = b.split(a); d = b.shift();)
            if (e = this._callbacks[d])
              for (var f = 0; f < e.length; f += 1)
                e[f].call(this, {
                  type: d,
                  data: c
                });
          return this;
        }
      };
    }(), e = function () {
      function b(b) {
        b && b.el || a.error('EventBus initialized without el'), this.$el = a(b.el);
      }
      var d = 'typeahead:';
      return c.mixin(b.prototype, {
        trigger: function (a) {
          var b = [].slice.call(arguments, 1);
          this.$el.trigger(d + a, b);
        }
      }), b;
    }(), f = function () {
      function a(a) {
        this.prefix = [
          '__',
          a,
          '__'
        ].join(''), this.ttlKey = '__ttl__', this.keyMatcher = new RegExp('^' + this.prefix);
      }
      function b() {
        return new Date().getTime();
      }
      function d(a) {
        return JSON.stringify(c.isUndefined(a) ? null : a);
      }
      function e(a) {
        return JSON.parse(a);
      }
      var f, g;
      try {
        f = window.localStorage, f.setItem('~~~', '!'), f.removeItem('~~~');
      } catch (h) {
        f = null;
      }
      return g = f && window.JSON ? {
        _prefix: function (a) {
          return this.prefix + a;
        },
        _ttlKey: function (a) {
          return this._prefix(a) + this.ttlKey;
        },
        get: function (a) {
          return this.isExpired(a) && this.remove(a), e(f.getItem(this._prefix(a)));
        },
        set: function (a, e, g) {
          return c.isNumber(g) ? f.setItem(this._ttlKey(a), d(b() + g)) : f.removeItem(this._ttlKey(a)), f.setItem(this._prefix(a), d(e));
        },
        remove: function (a) {
          return f.removeItem(this._ttlKey(a)), f.removeItem(this._prefix(a)), this;
        },
        clear: function () {
          var a, b, c = [], d = f.length;
          for (a = 0; d > a; a++)
            (b = f.key(a)).match(this.keyMatcher) && c.push(b.replace(this.keyMatcher, ''));
          for (a = c.length; a--;)
            this.remove(c[a]);
          return this;
        },
        isExpired: function (a) {
          var d = e(f.getItem(this._ttlKey(a)));
          return c.isNumber(d) && b() > d ? !0 : !1;
        }
      } : {
        get: c.noop,
        set: c.noop,
        remove: c.noop,
        clear: c.noop,
        isExpired: c.noop
      }, c.mixin(a.prototype, g), a;
    }(), g = function () {
      function a(a) {
        c.bindAll(this), a = a || {}, this.sizeLimit = a.sizeLimit || 10, this.cache = {}, this.cachedKeysByAge = [];
      }
      return c.mixin(a.prototype, {
        get: function (a) {
          return this.cache[a];
        },
        set: function (a, b) {
          var c;
          this.cachedKeysByAge.length === this.sizeLimit && (c = this.cachedKeysByAge.shift(), delete this.cache[c]), this.cache[a] = b, this.cachedKeysByAge.push(a);
        }
      }), a;
    }(), h = function () {
      function b(a) {
        c.bindAll(this), a = c.isString(a) ? { url: a } : a, i = i || new g(), h = c.isNumber(a.maxParallelRequests) ? a.maxParallelRequests : h || 6, this.url = a.url, this.wildcard = a.wildcard || '%QUERY', this.filter = a.filter, this.replace = a.replace, this.ajaxSettings = {
          type: 'get',
          cache: a.cache,
          timeout: a.timeout,
          dataType: a.dataType || 'json',
          beforeSend: a.beforeSend
        }, this._get = (/^throttle$/i.test(a.rateLimitFn) ? c.throttle : c.debounce)(this._get, a.rateLimitWait || 300);
      }
      function d() {
        j++;
      }
      function e() {
        j--;
      }
      function f() {
        return h > j;
      }
      var h, i, j = 0, k = {};
      return c.mixin(b.prototype, {
        _get: function (a, b) {
          function c(c) {
            var e = d.filter ? d.filter(c) : c;
            b && b(e), i.set(a, c);
          }
          var d = this;
          f() ? this._sendRequest(a).done(c) : this.onDeckRequestArgs = [].slice.call(arguments, 0);
        },
        _sendRequest: function (b) {
          function c() {
            e(), k[b] = null, f.onDeckRequestArgs && (f._get.apply(f, f.onDeckRequestArgs), f.onDeckRequestArgs = null);
          }
          var f = this, g = k[b];
          return g || (d(), g = k[b] = a.ajax(b, this.ajaxSettings).always(c)), g;
        },
        get: function (a, b) {
          var d, e, f = this, g = encodeURIComponent(a || '');
          return b = b || c.noop, d = this.replace ? this.replace(this.url, g) : this.url.replace(this.wildcard, g), (e = i.get(d)) ? c.defer(function () {
            b(f.filter ? f.filter(e) : e);
          }) : this._get(d, b), !!e;
        }
      }), b;
    }(), i = function () {
      function d(b) {
        c.bindAll(this), c.isString(b.template) && !b.engine && a.error('no template engine specified'), b.local || b.prefetch || b.remote || a.error('one of local, prefetch, or remote is required'), this.name = b.name || c.getUniqueId(), this.limit = b.limit || 5, this.minLength = b.minLength || 1, this.header = b.header, this.footer = b.footer, this.valueKey = b.valueKey || 'value', this.template = e(b.template, b.engine, this.valueKey), this.local = b.local, this.prefetch = b.prefetch, this.remote = b.remote, this.itemHash = {}, this.adjacencyList = {}, this.storage = b.name ? new f(b.name) : null;
      }
      function e(a, b, d) {
        var e, f;
        return c.isFunction(a) ? e = a : c.isString(a) ? (f = b.compile(a), e = c.bind(f.render, f)) : e = function (a) {
          return '<p>' + a[d] + '</p>';
        }, e;
      }
      var g = {
          thumbprint: 'thumbprint',
          protocol: 'protocol',
          itemHash: 'itemHash',
          adjacencyList: 'adjacencyList'
        };
      return c.mixin(d.prototype, {
        _processLocalData: function (a) {
          this._mergeProcessedData(this._processData(a));
        },
        _loadPrefetchData: function (d) {
          function e(a) {
            var b = d.filter ? d.filter(a) : a, e = m._processData(b), f = e.itemHash, h = e.adjacencyList;
            m.storage && (m.storage.set(g.itemHash, f, d.ttl), m.storage.set(g.adjacencyList, h, d.ttl), m.storage.set(g.thumbprint, n, d.ttl), m.storage.set(g.protocol, c.getProtocol(), d.ttl)), m._mergeProcessedData(e);
          }
          var f, h, i, j, k, l, m = this, n = b + (d.thumbprint || '');
          return this.storage && (f = this.storage.get(g.thumbprint), h = this.storage.get(g.protocol), i = this.storage.get(g.itemHash), j = this.storage.get(g.adjacencyList)), k = f !== n || h !== c.getProtocol(), d = c.isString(d) ? { url: d } : d, d.ttl = c.isNumber(d.ttl) ? d.ttl : 86400000, i && j && !k ? (this._mergeProcessedData({
            itemHash: i,
            adjacencyList: j
          }), l = a.Deferred().resolve()) : l = a.getJSON(d.url).done(e), l;
        },
        _transformDatum: function (a) {
          var b = c.isString(a) ? a : a[this.valueKey], d = a.tokens || c.tokenizeText(b), e = {
              value: b,
              tokens: d
            };
          return c.isString(a) ? (e.datum = {}, e.datum[this.valueKey] = a) : e.datum = a, e.tokens = c.filter(e.tokens, function (a) {
            return !c.isBlankString(a);
          }), e.tokens = c.map(e.tokens, function (a) {
            return a.toLowerCase();
          }), e;
        },
        _processData: function (a) {
          var b = this, d = {}, e = {};
          return c.each(a, function (a, f) {
            var g = b._transformDatum(f), h = c.getUniqueId(g.value);
            d[h] = g, c.each(g.tokens, function (a, b) {
              var d = b.charAt(0), f = e[d] || (e[d] = [h]);
              !~c.indexOf(f, h) && f.push(h);
            });
          }), {
            itemHash: d,
            adjacencyList: e
          };
        },
        _mergeProcessedData: function (a) {
          var b = this;
          c.mixin(this.itemHash, a.itemHash), c.each(a.adjacencyList, function (a, c) {
            var d = b.adjacencyList[a];
            b.adjacencyList[a] = d ? d.concat(c) : c;
          });
        },
        _getLocalSuggestions: function (a) {
          var b, d = this, e = [], f = [], g = [];
          return c.each(a, function (a, b) {
            var d = b.charAt(0);
            !~c.indexOf(e, d) && e.push(d);
          }), c.each(e, function (a, c) {
            var e = d.adjacencyList[c];
            return e ? (f.push(e), (!b || e.length < b.length) && (b = e), void 0) : !1;
          }), f.length < e.length ? [] : (c.each(b, function (b, e) {
            var h, i, j = d.itemHash[e];
            h = c.every(f, function (a) {
              return ~c.indexOf(a, e);
            }), i = h && c.every(a, function (a) {
              return c.some(j.tokens, function (b) {
                return 0 === b.indexOf(a);
              });
            }), i && g.push(j);
          }), g);
        },
        initialize: function () {
          var b;
          return this.local && this._processLocalData(this.local), this.transport = this.remote ? new h(this.remote) : null, b = this.prefetch ? this._loadPrefetchData(this.prefetch) : a.Deferred().resolve(), this.local = this.prefetch = this.remote = null, this.initialize = function () {
            return b;
          }, b;
        },
        getSuggestions: function (a, b) {
          function d(a) {
            f = f.slice(0), c.each(a, function (a, b) {
              var d, e = g._transformDatum(b);
              return d = c.some(f, function (a) {
                return e.value === a.value;
              }), !d && f.push(e), f.length < g.limit;
            }), b && b(f);
          }
          var e, f, g = this, h = !1;
          a.length < this.minLength || (e = c.tokenizeQuery(a), f = this._getLocalSuggestions(e).slice(0, this.limit), f.length < this.limit && this.transport && (h = this.transport.get(a, d)), !h && b && b(f));
        }
      }), d;
    }(), j = function () {
      function b(b) {
        var d = this;
        c.bindAll(this), this.specialKeyCodeMap = {
          9: 'tab',
          27: 'esc',
          37: 'left',
          39: 'right',
          13: 'enter',
          38: 'up',
          40: 'down'
        }, this.$hint = a(b.hint), this.$input = a(b.input).on('blur.tt', this._handleBlur).on('focus.tt', this._handleFocus).on('keydown.tt', this._handleSpecialKeyEvent), c.isMsie() ? this.$input.on('keydown.tt keypress.tt cut.tt paste.tt', function (a) {
          d.specialKeyCodeMap[a.which || a.keyCode] || c.defer(d._compareQueryToInputValue);
        }) : this.$input.on('input.tt', this._compareQueryToInputValue), this.query = this.$input.val(), this.$overflowHelper = e(this.$input);
      }
      function e(b) {
        return a('<span></span>').css({
          position: 'absolute',
          left: '-9999px',
          visibility: 'hidden',
          whiteSpace: 'nowrap',
          fontFamily: b.css('font-family'),
          fontSize: b.css('font-size'),
          fontStyle: b.css('font-style'),
          fontVariant: b.css('font-variant'),
          fontWeight: b.css('font-weight'),
          wordSpacing: b.css('word-spacing'),
          letterSpacing: b.css('letter-spacing'),
          textIndent: b.css('text-indent'),
          textRendering: b.css('text-rendering'),
          textTransform: b.css('text-transform')
        }).insertAfter(b);
      }
      function f(a, b) {
        return a = (a || '').replace(/^\s*/g, '').replace(/\s{2,}/g, ' '), b = (b || '').replace(/^\s*/g, '').replace(/\s{2,}/g, ' '), a === b;
      }
      return c.mixin(b.prototype, d, {
        _handleFocus: function () {
          this.trigger('focused');
        },
        _handleBlur: function () {
          this.trigger('blured');
        },
        _handleSpecialKeyEvent: function (a) {
          var b = this.specialKeyCodeMap[a.which || a.keyCode];
          b && this.trigger(b + 'Keyed', a);
        },
        _compareQueryToInputValue: function () {
          var a = this.getInputValue(), b = f(this.query, a), c = b ? this.query.length !== a.length : !1;
          c ? this.trigger('whitespaceChanged', { value: this.query }) : b || this.trigger('queryChanged', { value: this.query = a });
        },
        destroy: function () {
          this.$hint.off('.tt'), this.$input.off('.tt'), this.$hint = this.$input = this.$overflowHelper = null;
        },
        focus: function () {
          this.$input.focus();
        },
        blur: function () {
          this.$input.blur();
        },
        getQuery: function () {
          return this.query;
        },
        setQuery: function (a) {
          this.query = a;
        },
        getInputValue: function () {
          return this.$input.val();
        },
        setInputValue: function (a, b) {
          this.$input.val(a), !b && this._compareQueryToInputValue();
        },
        getHintValue: function () {
          return this.$hint.val();
        },
        setHintValue: function (a) {
          this.$hint.val(a);
        },
        getLanguageDirection: function () {
          return (this.$input.css('direction') || 'ltr').toLowerCase();
        },
        isOverflow: function () {
          return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() > this.$input.width();
        },
        isCursorAtEnd: function () {
          var a, b = this.$input.val().length, d = this.$input[0].selectionStart;
          return c.isNumber(d) ? d === b : document.selection ? (a = document.selection.createRange(), a.moveStart('character', -b), b === a.text.length) : !0;
        }
      }), b;
    }(), k = function () {
      function b(b) {
        c.bindAll(this), this.isOpen = !1, this.isEmpty = !0, this.isMouseOverDropdown = !1, this.$menu = a(b.menu).on('mouseenter.tt', this._handleMouseenter).on('mouseleave.tt', this._handleMouseleave).on('click.tt', '.tt-suggestion', this._handleSelection).on('mouseover.tt', '.tt-suggestion', this._handleMouseover);
      }
      function e(a) {
        return a.data('suggestion');
      }
      var f = { suggestionsList: '<span class="tt-suggestions"></span>' }, g = {
          suggestionsList: { display: 'block' },
          suggestion: {
            whiteSpace: 'nowrap',
            cursor: 'pointer'
          },
          suggestionChild: { whiteSpace: 'normal' }
        };
      return c.mixin(b.prototype, d, {
        _handleMouseenter: function () {
          this.isMouseOverDropdown = !0;
        },
        _handleMouseleave: function () {
          this.isMouseOverDropdown = !1;
        },
        _handleMouseover: function (b) {
          var c = a(b.currentTarget);
          this._getSuggestions().removeClass('tt-is-under-cursor'), c.addClass('tt-is-under-cursor');
        },
        _handleSelection: function (b) {
          var c = a(b.currentTarget);
          this.trigger('suggestionSelected', e(c));
        },
        _show: function () {
          this.$menu.css('display', 'block');
        },
        _hide: function () {
          this.$menu.hide();
        },
        _moveCursor: function (a) {
          var b, c, d, f;
          if (this.isVisible()) {
            if (b = this._getSuggestions(), c = b.filter('.tt-is-under-cursor'), c.removeClass('tt-is-under-cursor'), d = b.index(c) + a, d = (d + 1) % (b.length + 1) - 1, -1 === d)
              return this.trigger('cursorRemoved'), void 0;
            -1 > d && (d = b.length - 1), f = b.eq(d).addClass('tt-is-under-cursor'), this._ensureVisibility(f), this.trigger('cursorMoved', e(f));
          }
        },
        _getSuggestions: function () {
          return this.$menu.find('.tt-suggestions > .tt-suggestion');
        },
        _ensureVisibility: function (a) {
          var b = this.$menu.height() + parseInt(this.$menu.css('paddingTop'), 10) + parseInt(this.$menu.css('paddingBottom'), 10), c = this.$menu.scrollTop(), d = a.position().top, e = d + a.outerHeight(!0);
          0 > d ? this.$menu.scrollTop(c + d) : e > b && this.$menu.scrollTop(c + (e - b));
        },
        destroy: function () {
          this.$menu.off('.tt'), this.$menu = null;
        },
        isVisible: function () {
          return this.isOpen && !this.isEmpty;
        },
        closeUnlessMouseIsOverDropdown: function () {
          this.isMouseOverDropdown || this.close();
        },
        close: function () {
          this.isOpen && (this.isOpen = !1, this.isMouseOverDropdown = !1, this._hide(), this.$menu.find('.tt-suggestions > .tt-suggestion').removeClass('tt-is-under-cursor'), this.trigger('closed'));
        },
        open: function () {
          this.isOpen || (this.isOpen = !0, !this.isEmpty && this._show(), this.trigger('opened'));
        },
        setLanguageDirection: function (a) {
          var b = {
              left: '0',
              right: 'auto'
            }, c = {
              left: 'auto',
              right: ' 0'
            };
          'ltr' === a ? this.$menu.css(b) : this.$menu.css(c);
        },
        moveCursorUp: function () {
          this._moveCursor(-1);
        },
        moveCursorDown: function () {
          this._moveCursor(1);
        },
        getSuggestionUnderCursor: function () {
          var a = this._getSuggestions().filter('.tt-is-under-cursor').first();
          return a.length > 0 ? e(a) : null;
        },
        getFirstSuggestion: function () {
          var a = this._getSuggestions().first();
          return a.length > 0 ? e(a) : null;
        },
        renderSuggestions: function (b, d) {
          var e, h, i, j, k, l = 'tt-dataset-' + b.name, m = '<div class="tt-suggestion">%body</div>', n = this.$menu.find('.' + l);
          0 === n.length && (h = a(f.suggestionsList).css(g.suggestionsList), n = a('<div></div>').addClass(l).append(b.header).append(h).append(b.footer).appendTo(this.$menu)), d.length > 0 ? (this.isEmpty = !1, this.isOpen && this._show(), i = document.createElement('div'), j = document.createDocumentFragment(), c.each(d, function (c, d) {
            d.dataset = b.name, e = b.template(d.datum), i.innerHTML = m.replace('%body', e), k = a(i.firstChild).css(g.suggestion).data('suggestion', d), k.children().each(function () {
              a(this).css(g.suggestionChild);
            }), j.appendChild(k[0]);
          }), n.show().find('.tt-suggestions').html(j)) : this.clearSuggestions(b.name), this.trigger('suggestionsRendered');
        },
        clearSuggestions: function (a) {
          var b = a ? this.$menu.find('.tt-dataset-' + a) : this.$menu.find('[class^="tt-dataset-"]'), c = b.find('.tt-suggestions');
          b.hide(), c.empty(), 0 === this._getSuggestions().length && (this.isEmpty = !0, this._hide());
        }
      }), b;
    }(), l = function () {
      function b(a) {
        var b, d, f;
        c.bindAll(this), this.$node = e(a.input), this.datasets = a.datasets, this.dir = null, this.eventBus = a.eventBus, b = this.$node.find('.tt-dropdown-menu'), d = this.$node.find('.tt-query'), f = this.$node.find('.tt-hint'), this.dropdownView = new k({ menu: b }).on('suggestionSelected', this._handleSelection).on('cursorMoved', this._clearHint).on('cursorMoved', this._setInputValueToSuggestionUnderCursor).on('cursorRemoved', this._setInputValueToQuery).on('cursorRemoved', this._updateHint).on('suggestionsRendered', this._updateHint).on('opened', this._updateHint).on('closed', this._clearHint).on('opened closed', this._propagateEvent), this.inputView = new j({
          input: d,
          hint: f
        }).on('focused', this._openDropdown).on('blured', this._closeDropdown).on('blured', this._setInputValueToQuery).on('enterKeyed tabKeyed', this._handleSelection).on('queryChanged', this._clearHint).on('queryChanged', this._clearSuggestions).on('queryChanged', this._getSuggestions).on('whitespaceChanged', this._updateHint).on('queryChanged whitespaceChanged', this._openDropdown).on('queryChanged whitespaceChanged', this._setLanguageDirection).on('escKeyed', this._closeDropdown).on('escKeyed', this._setInputValueToQuery).on('tabKeyed upKeyed downKeyed', this._managePreventDefault).on('upKeyed downKeyed', this._moveDropdownCursor).on('upKeyed downKeyed', this._openDropdown).on('tabKeyed leftKeyed rightKeyed', this._autocomplete);
      }
      function e(b) {
        var c = a(g.wrapper), d = a(g.dropdown), e = a(b), f = a(g.hint);
        c = c.css(h.wrapper), d = d.css(h.dropdown), f.css(h.hint).css({
          backgroundAttachment: e.css('background-attachment'),
          backgroundClip: e.css('background-clip'),
          backgroundColor: e.css('background-color'),
          backgroundImage: e.css('background-image'),
          backgroundOrigin: e.css('background-origin'),
          backgroundPosition: e.css('background-position'),
          backgroundRepeat: e.css('background-repeat'),
          backgroundSize: e.css('background-size')
        }), e.data('ttAttrs', {
          dir: e.attr('dir'),
          autocomplete: e.attr('autocomplete'),
          spellcheck: e.attr('spellcheck'),
          style: e.attr('style')
        }), e.addClass('tt-query').attr({
          autocomplete: 'off',
          spellcheck: !1
        }).css(h.query);
        try {
          !e.attr('dir') && e.attr('dir', 'auto');
        } catch (i) {
        }
        return e.wrap(c).parent().prepend(f).append(d);
      }
      function f(a) {
        var b = a.find('.tt-query');
        c.each(b.data('ttAttrs'), function (a, d) {
          c.isUndefined(d) ? b.removeAttr(a) : b.attr(a, d);
        }), b.detach().removeData('ttAttrs').removeClass('tt-query').insertAfter(a), a.remove();
      }
      var g = {
          wrapper: '<span class="twitter-typeahead"></span>',
          hint: '<input class="tt-hint" type="text" autocomplete="off" spellcheck="off" disabled>',
          dropdown: '<span class="tt-dropdown-menu"></span>'
        }, h = {
          wrapper: {
            position: 'relative',
            display: 'inline-block'
          },
          hint: {
            position: 'absolute',
            top: '0',
            left: '0',
            borderColor: 'transparent',
            boxShadow: 'none'
          },
          query: {
            position: 'relative',
            verticalAlign: 'top',
            backgroundColor: 'transparent'
          },
          dropdown: {
            position: 'absolute',
            top: '100%',
            left: '0',
            zIndex: '100',
            display: 'none'
          }
        };
      return c.isMsie() && c.mixin(h.query, { backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)' }), c.isMsie() && c.isMsie() <= 7 && (c.mixin(h.wrapper, {
        display: 'inline',
        zoom: '1'
      }), c.mixin(h.query, { marginTop: '-1px' })), c.mixin(b.prototype, d, {
        _managePreventDefault: function (a) {
          var b, c, d = a.data, e = !1;
          switch (a.type) {
          case 'tabKeyed':
            b = this.inputView.getHintValue(), c = this.inputView.getInputValue(), e = b && b !== c;
            break;
          case 'upKeyed':
          case 'downKeyed':
            e = !d.shiftKey && !d.ctrlKey && !d.metaKey;
          }
          e && d.preventDefault();
        },
        _setLanguageDirection: function () {
          var a = this.inputView.getLanguageDirection();
          a !== this.dir && (this.dir = a, this.$node.css('direction', a), this.dropdownView.setLanguageDirection(a));
        },
        _updateHint: function () {
          var a, b, d, e, f, g = this.dropdownView.getFirstSuggestion(), h = g ? g.value : null, i = this.dropdownView.isVisible(), j = this.inputView.isOverflow();
          h && i && !j && (a = this.inputView.getInputValue(), b = a.replace(/\s{2,}/g, ' ').replace(/^\s+/g, ''), d = c.escapeRegExChars(b), e = new RegExp('^(?:' + d + ')(.*$)', 'i'), f = e.exec(h), this.inputView.setHintValue(a + (f ? f[1] : '')));
        },
        _clearHint: function () {
          this.inputView.setHintValue('');
        },
        _clearSuggestions: function () {
          this.dropdownView.clearSuggestions();
        },
        _setInputValueToQuery: function () {
          this.inputView.setInputValue(this.inputView.getQuery());
        },
        _setInputValueToSuggestionUnderCursor: function (a) {
          var b = a.data;
          this.inputView.setInputValue(b.value, !0);
        },
        _openDropdown: function () {
          this.dropdownView.open();
        },
        _closeDropdown: function (a) {
          this.dropdownView['blured' === a.type ? 'closeUnlessMouseIsOverDropdown' : 'close']();
        },
        _moveDropdownCursor: function (a) {
          var b = a.data;
          b.shiftKey || b.ctrlKey || b.metaKey || this.dropdownView['upKeyed' === a.type ? 'moveCursorUp' : 'moveCursorDown']();
        },
        _handleSelection: function (a) {
          var b = 'suggestionSelected' === a.type, d = b ? a.data : this.dropdownView.getSuggestionUnderCursor();
          d && (this.inputView.setInputValue(d.value), b ? this.inputView.focus() : a.data.preventDefault(), b && c.isMsie() ? c.defer(this.dropdownView.close) : this.dropdownView.close(), this.eventBus.trigger('selected', d.datum, d.dataset));
        },
        _getSuggestions: function () {
          var a = this, b = this.inputView.getQuery();
          c.isBlankString(b) || c.each(this.datasets, function (c, d) {
            d.getSuggestions(b, function (c) {
              b === a.inputView.getQuery() && a.dropdownView.renderSuggestions(d, c);
            });
          });
        },
        _autocomplete: function (a) {
          var b, c, d, e, f;
          ('rightKeyed' !== a.type && 'leftKeyed' !== a.type || (b = this.inputView.isCursorAtEnd(), c = 'ltr' === this.inputView.getLanguageDirection() ? 'leftKeyed' === a.type : 'rightKeyed' === a.type, b && !c)) && (d = this.inputView.getQuery(), e = this.inputView.getHintValue(), '' !== e && d !== e && (f = this.dropdownView.getFirstSuggestion(), this.inputView.setInputValue(f.value), this.eventBus.trigger('autocompleted', f.datum, f.dataset)));
        },
        _propagateEvent: function (a) {
          this.eventBus.trigger(a.type);
        },
        destroy: function () {
          this.inputView.destroy(), this.dropdownView.destroy(), f(this.$node), this.$node = null;
        },
        setQuery: function (a) {
          this.inputView.setQuery(a), this.inputView.setInputValue(a), this._clearHint(), this._clearSuggestions(), this._getSuggestions();
        }
      }), b;
    }();
  !function () {
    var b, d = {}, f = 'ttView';
    b = {
      initialize: function (b) {
        function g() {
          var b, d = a(this), g = new e({ el: d });
          b = c.map(h, function (a) {
            return a.initialize();
          }), d.data(f, new l({
            input: d,
            eventBus: g = new e({ el: d }),
            datasets: h
          })), a.when.apply(a, b).always(function () {
            c.defer(function () {
              g.trigger('initialized');
            });
          });
        }
        var h;
        return b = c.isArray(b) ? b : [b], 0 === b.length && a.error('no datasets provided'), h = c.map(b, function (a) {
          var b = d[a.name] ? d[a.name] : new i(a);
          return a.name && (d[a.name] = b), b;
        }), this.each(g);
      },
      destroy: function () {
        function b() {
          var b = a(this), c = b.data(f);
          c && (c.destroy(), b.removeData(f));
        }
        return this.each(b);
      },
      setQuery: function (b) {
        function c() {
          var c = a(this).data(f);
          c && c.setQuery(b);
        }
        return this.each(c);
      }
    }, jQuery.fn.typeahead = function (a) {
      return b[a] ? b[a].apply(this, [].slice.call(arguments, 1)) : b.initialize.apply(this, arguments);
    };
  }();
}(window.jQuery);
var Hogan = {};
(function (Hogan, useArrayBuffer) {
  Hogan.Template = function (renderFunc, text, compiler, options) {
    this.r = renderFunc || this.r;
    this.c = compiler;
    this.options = options;
    this.text = text || '';
    this.buf = useArrayBuffer ? [] : '';
  };
  Hogan.Template.prototype = {
    r: function (context, partials, indent) {
      return '';
    },
    v: hoganEscape,
    t: coerceToString,
    render: function render(context, partials, indent) {
      return this.ri([context], partials || {}, indent);
    },
    ri: function (context, partials, indent) {
      return this.r(context, partials, indent);
    },
    rp: function (name, context, partials, indent) {
      var partial = partials[name];
      if (!partial) {
        return '';
      }
      if (this.c && typeof partial == 'string') {
        partial = this.c.compile(partial, this.options);
      }
      return partial.ri(context, partials, indent);
    },
    rs: function (context, partials, section) {
      var tail = context[context.length - 1];
      if (!isArray(tail)) {
        section(context, partials, this);
        return;
      }
      for (var i = 0; i < tail.length; i++) {
        context.push(tail[i]);
        section(context, partials, this);
        context.pop();
      }
    },
    s: function (val, ctx, partials, inverted, start, end, tags) {
      var pass;
      if (isArray(val) && val.length === 0) {
        return false;
      }
      if (typeof val == 'function') {
        val = this.ls(val, ctx, partials, inverted, start, end, tags);
      }
      pass = val === '' || !!val;
      if (!inverted && pass && ctx) {
        ctx.push(typeof val == 'object' ? val : ctx[ctx.length - 1]);
      }
      return pass;
    },
    d: function (key, ctx, partials, returnFound) {
      var names = key.split('.'), val = this.f(names[0], ctx, partials, returnFound), cx = null;
      if (key === '.' && isArray(ctx[ctx.length - 2])) {
        return ctx[ctx.length - 1];
      }
      for (var i = 1; i < names.length; i++) {
        if (val && typeof val == 'object' && names[i] in val) {
          cx = val;
          val = val[names[i]];
        } else {
          val = '';
        }
      }
      if (returnFound && !val) {
        return false;
      }
      if (!returnFound && typeof val == 'function') {
        ctx.push(cx);
        val = this.lv(val, ctx, partials);
        ctx.pop();
      }
      return val;
    },
    f: function (key, ctx, partials, returnFound) {
      var val = false, v = null, found = false;
      for (var i = ctx.length - 1; i >= 0; i--) {
        v = ctx[i];
        if (v && typeof v == 'object' && key in v) {
          val = v[key];
          found = true;
          break;
        }
      }
      if (!found) {
        return returnFound ? false : '';
      }
      if (!returnFound && typeof val == 'function') {
        val = this.lv(val, ctx, partials);
      }
      return val;
    },
    ho: function (val, cx, partials, text, tags) {
      var compiler = this.c;
      var options = this.options;
      options.delimiters = tags;
      var text = val.call(cx, text);
      text = text == null ? String(text) : text.toString();
      this.b(compiler.compile(text, options).render(cx, partials));
      return false;
    },
    b: useArrayBuffer ? function (s) {
      this.buf.push(s);
    } : function (s) {
      this.buf += s;
    },
    fl: useArrayBuffer ? function () {
      var r = this.buf.join('');
      this.buf = [];
      return r;
    } : function () {
      var r = this.buf;
      this.buf = '';
      return r;
    },
    ls: function (val, ctx, partials, inverted, start, end, tags) {
      var cx = ctx[ctx.length - 1], t = null;
      if (!inverted && this.c && val.length > 0) {
        return this.ho(val, cx, partials, this.text.substring(start, end), tags);
      }
      t = val.call(cx);
      if (typeof t == 'function') {
        if (inverted) {
          return true;
        } else if (this.c) {
          return this.ho(t, cx, partials, this.text.substring(start, end), tags);
        }
      }
      return t;
    },
    lv: function (val, ctx, partials) {
      var cx = ctx[ctx.length - 1];
      var result = val.call(cx);
      if (typeof result == 'function') {
        result = coerceToString(result.call(cx));
        if (this.c && ~result.indexOf('{{')) {
          return this.c.compile(result, this.options).render(cx, partials);
        }
      }
      return coerceToString(result);
    }
  };
  var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
  function coerceToString(val) {
    return String(val === null || val === undefined ? '' : val);
  }
  function hoganEscape(str) {
    str = coerceToString(str);
    return hChars.test(str) ? str.replace(rAmp, '&amp;').replace(rLt, '&lt;').replace(rGt, '&gt;').replace(rApos, '&#39;').replace(rQuot, '&quot;') : str;
  }
  var isArray = Array.isArray || function (a) {
      return Object.prototype.toString.call(a) === '[object Array]';
    };
}(typeof exports !== 'undefined' ? exports : Hogan));
(function (Hogan) {
  var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, tagTypes = {
      '#': 1,
      '^': 2,
      '/': 3,
      '!': 4,
      '>': 5,
      '<': 6,
      '=': 7,
      '_v': 8,
      '{': 9,
      '&': 10
    };
  Hogan.scan = function scan(text, delimiters) {
    var len = text.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag = null, buf = '', tokens = [], seenTag = false, i = 0, lineStart = 0, otag = '{{', ctag = '}}';
    function addBuf() {
      if (buf.length > 0) {
        tokens.push(new String(buf));
        buf = '';
      }
    }
    function lineIsWhitespace() {
      var isAllWhitespace = true;
      for (var j = lineStart; j < tokens.length; j++) {
        isAllWhitespace = tokens[j].tag && tagTypes[tokens[j].tag] < tagTypes['_v'] || !tokens[j].tag && tokens[j].match(rIsWhitespace) === null;
        if (!isAllWhitespace) {
          return false;
        }
      }
      return isAllWhitespace;
    }
    function filterLine(haveSeenTag, noNewLine) {
      addBuf();
      if (haveSeenTag && lineIsWhitespace()) {
        for (var j = lineStart, next; j < tokens.length; j++) {
          if (!tokens[j].tag) {
            if ((next = tokens[j + 1]) && next.tag == '>') {
              next.indent = tokens[j].toString();
            }
            tokens.splice(j, 1);
          }
        }
      } else if (!noNewLine) {
        tokens.push({ tag: '\n' });
      }
      seenTag = false;
      lineStart = tokens.length;
    }
    function changeDelimiters(text, index) {
      var close = '=' + ctag, closeIndex = text.indexOf(close, index), delimiters = trim(text.substring(text.indexOf('=', index) + 1, closeIndex)).split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
      return closeIndex + close.length - 1;
    }
    if (delimiters) {
      delimiters = delimiters.split(' ');
      otag = delimiters[0];
      ctag = delimiters[1];
    }
    for (i = 0; i < len; i++) {
      if (state == IN_TEXT) {
        if (tagChange(otag, text, i)) {
          --i;
          addBuf();
          state = IN_TAG_TYPE;
        } else {
          if (text.charAt(i) == '\n') {
            filterLine(seenTag);
          } else {
            buf += text.charAt(i);
          }
        }
      } else if (state == IN_TAG_TYPE) {
        i += otag.length - 1;
        tag = tagTypes[text.charAt(i + 1)];
        tagType = tag ? text.charAt(i + 1) : '_v';
        if (tagType == '=') {
          i = changeDelimiters(text, i);
          state = IN_TEXT;
        } else {
          if (tag) {
            i++;
          }
          state = IN_TAG;
        }
        seenTag = i;
      } else {
        if (tagChange(ctag, text, i)) {
          tokens.push({
            tag: tagType,
            n: trim(buf),
            otag: otag,
            ctag: ctag,
            i: tagType == '/' ? seenTag - ctag.length : i + otag.length
          });
          buf = '';
          i += ctag.length - 1;
          state = IN_TEXT;
          if (tagType == '{') {
            if (ctag == '}}') {
              i++;
            } else {
              cleanTripleStache(tokens[tokens.length - 1]);
            }
          }
        } else {
          buf += text.charAt(i);
        }
      }
    }
    filterLine(seenTag, true);
    return tokens;
  };
  function cleanTripleStache(token) {
    if (token.n.substr(token.n.length - 1) === '}') {
      token.n = token.n.substring(0, token.n.length - 1);
    }
  }
  function trim(s) {
    if (s.trim) {
      return s.trim();
    }
    return s.replace(/^\s*|\s*$/g, '');
  }
  function tagChange(tag, text, index) {
    if (text.charAt(index) != tag.charAt(0)) {
      return false;
    }
    for (var i = 1, l = tag.length; i < l; i++) {
      if (text.charAt(index + i) != tag.charAt(i)) {
        return false;
      }
    }
    return true;
  }
  function buildTree(tokens, kind, stack, customTags) {
    var instructions = [], opener = null, token = null;
    while (tokens.length > 0) {
      token = tokens.shift();
      if (token.tag == '#' || token.tag == '^' || isOpener(token, customTags)) {
        stack.push(token);
        token.nodes = buildTree(tokens, token.tag, stack, customTags);
        instructions.push(token);
      } else if (token.tag == '/') {
        if (stack.length === 0) {
          throw new Error('Closing tag without opener: /' + token.n);
        }
        opener = stack.pop();
        if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) {
          throw new Error('Nesting error: ' + opener.n + ' vs. ' + token.n);
        }
        opener.end = token.i;
        return instructions;
      } else {
        instructions.push(token);
      }
    }
    if (stack.length > 0) {
      throw new Error('missing closing tag: ' + stack.pop().n);
    }
    return instructions;
  }
  function isOpener(token, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].o == token.n) {
        token.tag = '#';
        return true;
      }
    }
  }
  function isCloser(close, open, tags) {
    for (var i = 0, l = tags.length; i < l; i++) {
      if (tags[i].c == close && tags[i].o == open) {
        return true;
      }
    }
  }
  Hogan.generate = function (tree, text, options) {
    var code = 'var _=this;_.b(i=i||"");' + walk(tree) + 'return _.fl();';
    if (options.asString) {
      return 'function(c,p,i){' + code + ';}';
    }
    return new Hogan.Template(new Function('c', 'p', 'i', code), text, Hogan, options);
  };
  function esc(s) {
    return s.replace(rSlash, '\\\\').replace(rQuot, '\\"').replace(rNewline, '\\n').replace(rCr, '\\r');
  }
  function chooseMethod(s) {
    return ~s.indexOf('.') ? 'd' : 'f';
  }
  function walk(tree) {
    var code = '';
    for (var i = 0, l = tree.length; i < l; i++) {
      var tag = tree[i].tag;
      if (tag == '#') {
        code += section(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n), tree[i].i, tree[i].end, tree[i].otag + ' ' + tree[i].ctag);
      } else if (tag == '^') {
        code += invertedSection(tree[i].nodes, tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '<' || tag == '>') {
        code += partial(tree[i]);
      } else if (tag == '{' || tag == '&') {
        code += tripleStache(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag == '\n') {
        code += text('"\\n"' + (tree.length - 1 == i ? '' : ' + i'));
      } else if (tag == '_v') {
        code += variable(tree[i].n, chooseMethod(tree[i].n));
      } else if (tag === undefined) {
        code += text('"' + esc(tree[i]) + '"');
      }
    }
    return code;
  }
  function section(nodes, id, method, start, end, tags) {
    return 'if(_.s(_.' + method + '("' + esc(id) + '",c,p,1),' + 'c,p,0,' + start + ',' + end + ',"' + tags + '")){' + '_.rs(c,p,' + 'function(c,p,_){' + walk(nodes) + '});c.pop();}';
  }
  function invertedSection(nodes, id, method) {
    return 'if(!_.s(_.' + method + '("' + esc(id) + '",c,p,1),c,p,1,0,0,"")){' + walk(nodes) + '};';
  }
  function partial(tok) {
    return '_.b(_.rp("' + esc(tok.n) + '",c,p,"' + (tok.indent || '') + '"));';
  }
  function tripleStache(id, method) {
    return '_.b(_.t(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }
  function variable(id, method) {
    return '_.b(_.v(_.' + method + '("' + esc(id) + '",c,p,0)));';
  }
  function text(id) {
    return '_.b(' + id + ');';
  }
  Hogan.parse = function (tokens, text, options) {
    options = options || {};
    return buildTree(tokens, '', [], options.sectionTags || []);
  }, Hogan.cache = {};
  Hogan.compile = function (text, options) {
    options = options || {};
    var key = text + '||' + !!options.asString;
    var t = this.cache[key];
    if (t) {
      return t;
    }
    t = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
    return this.cache[key] = t;
  };
}(typeof exports !== 'undefined' ? exports : Hogan));
(function (window, document, undefined) {
  (function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
      define(['jquery'], factory);
    } else if (jQuery && !jQuery.fn.dataTable) {
      factory(jQuery);
    }
  }(function ($) {
    'use strict';
    var DataTable = function (oInit) {
      function _fnAddColumn(oSettings, nTh) {
        var oDefaults = DataTable.defaults.columns;
        var iCol = oSettings.aoColumns.length;
        var oCol = $.extend({}, DataTable.models.oColumn, oDefaults, {
            'sSortingClass': oSettings.oClasses.sSortable,
            'sSortingClassJUI': oSettings.oClasses.sSortJUI,
            'nTh': nTh ? nTh : document.createElement('th'),
            'sTitle': oDefaults.sTitle ? oDefaults.sTitle : nTh ? nTh.innerHTML : '',
            'aDataSort': oDefaults.aDataSort ? oDefaults.aDataSort : [iCol],
            'mData': oDefaults.mData ? oDefaults.oDefaults : iCol
          });
        oSettings.aoColumns.push(oCol);
        if (oSettings.aoPreSearchCols[iCol] === undefined || oSettings.aoPreSearchCols[iCol] === null) {
          oSettings.aoPreSearchCols[iCol] = $.extend({}, DataTable.models.oSearch);
        } else {
          var oPre = oSettings.aoPreSearchCols[iCol];
          if (oPre.bRegex === undefined) {
            oPre.bRegex = true;
          }
          if (oPre.bSmart === undefined) {
            oPre.bSmart = true;
          }
          if (oPre.bCaseInsensitive === undefined) {
            oPre.bCaseInsensitive = true;
          }
        }
        _fnColumnOptions(oSettings, iCol, null);
      }
      function _fnColumnOptions(oSettings, iCol, oOptions) {
        var oCol = oSettings.aoColumns[iCol];
        if (oOptions !== undefined && oOptions !== null) {
          if (oOptions.mDataProp && !oOptions.mData) {
            oOptions.mData = oOptions.mDataProp;
          }
          if (oOptions.sType !== undefined) {
            oCol.sType = oOptions.sType;
            oCol._bAutoType = false;
          }
          $.extend(oCol, oOptions);
          _fnMap(oCol, oOptions, 'sWidth', 'sWidthOrig');
          if (oOptions.iDataSort !== undefined) {
            oCol.aDataSort = [oOptions.iDataSort];
          }
          _fnMap(oCol, oOptions, 'aDataSort');
        }
        var mRender = oCol.mRender ? _fnGetObjectDataFn(oCol.mRender) : null;
        var mData = _fnGetObjectDataFn(oCol.mData);
        oCol.fnGetData = function (oData, sSpecific) {
          var innerData = mData(oData, sSpecific);
          if (oCol.mRender && (sSpecific && sSpecific !== '')) {
            return mRender(innerData, sSpecific, oData);
          }
          return innerData;
        };
        oCol.fnSetData = _fnSetObjectDataFn(oCol.mData);
        if (!oSettings.oFeatures.bSort) {
          oCol.bSortable = false;
        }
        if (!oCol.bSortable || $.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) == -1) {
          oCol.sSortingClass = oSettings.oClasses.sSortableNone;
          oCol.sSortingClassJUI = '';
        } else if ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) == -1) {
          oCol.sSortingClass = oSettings.oClasses.sSortable;
          oCol.sSortingClassJUI = oSettings.oClasses.sSortJUI;
        } else if ($.inArray('asc', oCol.asSorting) != -1 && $.inArray('desc', oCol.asSorting) == -1) {
          oCol.sSortingClass = oSettings.oClasses.sSortableAsc;
          oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIAscAllowed;
        } else if ($.inArray('asc', oCol.asSorting) == -1 && $.inArray('desc', oCol.asSorting) != -1) {
          oCol.sSortingClass = oSettings.oClasses.sSortableDesc;
          oCol.sSortingClassJUI = oSettings.oClasses.sSortJUIDescAllowed;
        }
      }
      function _fnAdjustColumnSizing(oSettings) {
        if (oSettings.oFeatures.bAutoWidth === false) {
          return false;
        }
        _fnCalculateColumnWidths(oSettings);
        for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
          oSettings.aoColumns[i].nTh.style.width = oSettings.aoColumns[i].sWidth;
        }
      }
      function _fnVisibleToColumnIndex(oSettings, iMatch) {
        var aiVis = _fnGetColumns(oSettings, 'bVisible');
        return typeof aiVis[iMatch] === 'number' ? aiVis[iMatch] : null;
      }
      function _fnColumnIndexToVisible(oSettings, iMatch) {
        var aiVis = _fnGetColumns(oSettings, 'bVisible');
        var iPos = $.inArray(iMatch, aiVis);
        return iPos !== -1 ? iPos : null;
      }
      function _fnVisbleColumns(oSettings) {
        return _fnGetColumns(oSettings, 'bVisible').length;
      }
      function _fnGetColumns(oSettings, sParam) {
        var a = [];
        $.map(oSettings.aoColumns, function (val, i) {
          if (val[sParam]) {
            a.push(i);
          }
        });
        return a;
      }
      function _fnDetectType(sData) {
        var aTypes = DataTable.ext.aTypes;
        var iLen = aTypes.length;
        for (var i = 0; i < iLen; i++) {
          var sType = aTypes[i](sData);
          if (sType !== null) {
            return sType;
          }
        }
        return 'string';
      }
      function _fnReOrderIndex(oSettings, sColumns) {
        var aColumns = sColumns.split(',');
        var aiReturn = [];
        for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
          for (var j = 0; j < iLen; j++) {
            if (oSettings.aoColumns[i].sName == aColumns[j]) {
              aiReturn.push(j);
              break;
            }
          }
        }
        return aiReturn;
      }
      function _fnColumnOrdering(oSettings) {
        var sNames = '';
        for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
          sNames += oSettings.aoColumns[i].sName + ',';
        }
        if (sNames.length == iLen) {
          return '';
        }
        return sNames.slice(0, -1);
      }
      function _fnApplyColumnDefs(oSettings, aoColDefs, aoCols, fn) {
        var i, iLen, j, jLen, k, kLen;
        if (aoColDefs) {
          for (i = aoColDefs.length - 1; i >= 0; i--) {
            var aTargets = aoColDefs[i].aTargets;
            if (!$.isArray(aTargets)) {
              _fnLog(oSettings, 1, 'aTargets must be an array of targets, not a ' + typeof aTargets);
            }
            for (j = 0, jLen = aTargets.length; j < jLen; j++) {
              if (typeof aTargets[j] === 'number' && aTargets[j] >= 0) {
                while (oSettings.aoColumns.length <= aTargets[j]) {
                  _fnAddColumn(oSettings);
                }
                fn(aTargets[j], aoColDefs[i]);
              } else if (typeof aTargets[j] === 'number' && aTargets[j] < 0) {
                fn(oSettings.aoColumns.length + aTargets[j], aoColDefs[i]);
              } else if (typeof aTargets[j] === 'string') {
                for (k = 0, kLen = oSettings.aoColumns.length; k < kLen; k++) {
                  if (aTargets[j] == '_all' || $(oSettings.aoColumns[k].nTh).hasClass(aTargets[j])) {
                    fn(k, aoColDefs[i]);
                  }
                }
              }
            }
          }
        }
        if (aoCols) {
          for (i = 0, iLen = aoCols.length; i < iLen; i++) {
            fn(i, aoCols[i]);
          }
        }
      }
      function _fnAddData(oSettings, aDataSupplied) {
        var oCol;
        var aDataIn = $.isArray(aDataSupplied) ? aDataSupplied.slice() : $.extend(true, {}, aDataSupplied);
        var iRow = oSettings.aoData.length;
        var oData = $.extend(true, {}, DataTable.models.oRow);
        oData._aData = aDataIn;
        oSettings.aoData.push(oData);
        var nTd, sThisType;
        for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
          oCol = oSettings.aoColumns[i];
          if (typeof oCol.fnRender === 'function' && oCol.bUseRendered && oCol.mData !== null) {
            _fnSetCellData(oSettings, iRow, i, _fnRender(oSettings, iRow, i));
          } else {
            _fnSetCellData(oSettings, iRow, i, _fnGetCellData(oSettings, iRow, i));
          }
          if (oCol._bAutoType && oCol.sType != 'string') {
            var sVarType = _fnGetCellData(oSettings, iRow, i, 'type');
            if (sVarType !== null && sVarType !== '') {
              sThisType = _fnDetectType(sVarType);
              if (oCol.sType === null) {
                oCol.sType = sThisType;
              } else if (oCol.sType != sThisType && oCol.sType != 'html') {
                oCol.sType = 'string';
              }
            }
          }
        }
        oSettings.aiDisplayMaster.push(iRow);
        if (!oSettings.oFeatures.bDeferRender) {
          _fnCreateTr(oSettings, iRow);
        }
        return iRow;
      }
      function _fnGatherData(oSettings) {
        var iLoop, i, iLen, j, jLen, jInner, nTds, nTrs, nTd, nTr, aLocalData, iThisIndex, iRow, iRows, iColumn, iColumns, sNodeName, oCol, oData;
        if (oSettings.bDeferLoading || oSettings.sAjaxSource === null) {
          nTr = oSettings.nTBody.firstChild;
          while (nTr) {
            if (nTr.nodeName.toUpperCase() == 'TR') {
              iThisIndex = oSettings.aoData.length;
              nTr._DT_RowIndex = iThisIndex;
              oSettings.aoData.push($.extend(true, {}, DataTable.models.oRow, { 'nTr': nTr }));
              oSettings.aiDisplayMaster.push(iThisIndex);
              nTd = nTr.firstChild;
              jInner = 0;
              while (nTd) {
                sNodeName = nTd.nodeName.toUpperCase();
                if (sNodeName == 'TD' || sNodeName == 'TH') {
                  _fnSetCellData(oSettings, iThisIndex, jInner, $.trim(nTd.innerHTML));
                  jInner++;
                }
                nTd = nTd.nextSibling;
              }
            }
            nTr = nTr.nextSibling;
          }
        }
        nTrs = _fnGetTrNodes(oSettings);
        nTds = [];
        for (i = 0, iLen = nTrs.length; i < iLen; i++) {
          nTd = nTrs[i].firstChild;
          while (nTd) {
            sNodeName = nTd.nodeName.toUpperCase();
            if (sNodeName == 'TD' || sNodeName == 'TH') {
              nTds.push(nTd);
            }
            nTd = nTd.nextSibling;
          }
        }
        for (iColumn = 0, iColumns = oSettings.aoColumns.length; iColumn < iColumns; iColumn++) {
          oCol = oSettings.aoColumns[iColumn];
          if (oCol.sTitle === null) {
            oCol.sTitle = oCol.nTh.innerHTML;
          }
          var bAutoType = oCol._bAutoType, bRender = typeof oCol.fnRender === 'function', bClass = oCol.sClass !== null, bVisible = oCol.bVisible, nCell, sThisType, sRendered, sValType;
          if (bAutoType || bRender || bClass || !bVisible) {
            for (iRow = 0, iRows = oSettings.aoData.length; iRow < iRows; iRow++) {
              oData = oSettings.aoData[iRow];
              nCell = nTds[iRow * iColumns + iColumn];
              if (bAutoType && oCol.sType != 'string') {
                sValType = _fnGetCellData(oSettings, iRow, iColumn, 'type');
                if (sValType !== '') {
                  sThisType = _fnDetectType(sValType);
                  if (oCol.sType === null) {
                    oCol.sType = sThisType;
                  } else if (oCol.sType != sThisType && oCol.sType != 'html') {
                    oCol.sType = 'string';
                  }
                }
              }
              if (oCol.mRender) {
                nCell.innerHTML = _fnGetCellData(oSettings, iRow, iColumn, 'display');
              } else if (oCol.mData !== iColumn) {
                nCell.innerHTML = _fnGetCellData(oSettings, iRow, iColumn, 'display');
              }
              if (bRender) {
                sRendered = _fnRender(oSettings, iRow, iColumn);
                nCell.innerHTML = sRendered;
                if (oCol.bUseRendered) {
                  _fnSetCellData(oSettings, iRow, iColumn, sRendered);
                }
              }
              if (bClass) {
                nCell.className += ' ' + oCol.sClass;
              }
              if (!bVisible) {
                oData._anHidden[iColumn] = nCell;
                nCell.parentNode.removeChild(nCell);
              } else {
                oData._anHidden[iColumn] = null;
              }
              if (oCol.fnCreatedCell) {
                oCol.fnCreatedCell.call(oSettings.oInstance, nCell, _fnGetCellData(oSettings, iRow, iColumn, 'display'), oData._aData, iRow, iColumn);
              }
            }
          }
        }
        if (oSettings.aoRowCreatedCallback.length !== 0) {
          for (i = 0, iLen = oSettings.aoData.length; i < iLen; i++) {
            oData = oSettings.aoData[i];
            _fnCallbackFire(oSettings, 'aoRowCreatedCallback', null, [
              oData.nTr,
              oData._aData,
              i
            ]);
          }
        }
      }
      function _fnNodeToDataIndex(oSettings, n) {
        return n._DT_RowIndex !== undefined ? n._DT_RowIndex : null;
      }
      function _fnNodeToColumnIndex(oSettings, iRow, n) {
        var anCells = _fnGetTdNodes(oSettings, iRow);
        for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
          if (anCells[i] === n) {
            return i;
          }
        }
        return -1;
      }
      function _fnGetRowData(oSettings, iRow, sSpecific, aiColumns) {
        var out = [];
        for (var i = 0, iLen = aiColumns.length; i < iLen; i++) {
          out.push(_fnGetCellData(oSettings, iRow, aiColumns[i], sSpecific));
        }
        return out;
      }
      function _fnGetCellData(oSettings, iRow, iCol, sSpecific) {
        var sData;
        var oCol = oSettings.aoColumns[iCol];
        var oData = oSettings.aoData[iRow]._aData;
        if ((sData = oCol.fnGetData(oData, sSpecific)) === undefined) {
          if (oSettings.iDrawError != oSettings.iDraw && oCol.sDefaultContent === null) {
            _fnLog(oSettings, 0, 'Requested unknown parameter ' + (typeof oCol.mData == 'function' ? '{mData function}' : '\'' + oCol.mData + '\'') + ' from the data source for row ' + iRow);
            oSettings.iDrawError = oSettings.iDraw;
          }
          return oCol.sDefaultContent;
        }
        if (sData === null && oCol.sDefaultContent !== null) {
          sData = oCol.sDefaultContent;
        } else if (typeof sData === 'function') {
          return sData();
        }
        if (sSpecific == 'display' && sData === null) {
          return '';
        }
        return sData;
      }
      function _fnSetCellData(oSettings, iRow, iCol, val) {
        var oCol = oSettings.aoColumns[iCol];
        var oData = oSettings.aoData[iRow]._aData;
        oCol.fnSetData(oData, val);
      }
      var __reArray = /\[.*?\]$/;
      function _fnGetObjectDataFn(mSource) {
        if (mSource === null) {
          return function (data, type) {
            return null;
          };
        } else if (typeof mSource === 'function') {
          return function (data, type, extra) {
            return mSource(data, type, extra);
          };
        } else if (typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1)) {
          var fetchData = function (data, type, src) {
            var a = src.split('.');
            var arrayNotation, out, innerSrc;
            if (src !== '') {
              for (var i = 0, iLen = a.length; i < iLen; i++) {
                arrayNotation = a[i].match(__reArray);
                if (arrayNotation) {
                  a[i] = a[i].replace(__reArray, '');
                  if (a[i] !== '') {
                    data = data[a[i]];
                  }
                  out = [];
                  a.splice(0, i + 1);
                  innerSrc = a.join('.');
                  for (var j = 0, jLen = data.length; j < jLen; j++) {
                    out.push(fetchData(data[j], type, innerSrc));
                  }
                  var join = arrayNotation[0].substring(1, arrayNotation[0].length - 1);
                  data = join === '' ? out : out.join(join);
                  break;
                }
                if (data === null || data[a[i]] === undefined) {
                  return undefined;
                }
                data = data[a[i]];
              }
            }
            return data;
          };
          return function (data, type) {
            return fetchData(data, type, mSource);
          };
        } else {
          return function (data, type) {
            return data[mSource];
          };
        }
      }
      function _fnSetObjectDataFn(mSource) {
        if (mSource === null) {
          return function (data, val) {
          };
        } else if (typeof mSource === 'function') {
          return function (data, val) {
            mSource(data, 'set', val);
          };
        } else if (typeof mSource === 'string' && (mSource.indexOf('.') !== -1 || mSource.indexOf('[') !== -1)) {
          var setData = function (data, val, src) {
            var a = src.split('.'), b;
            var arrayNotation, o, innerSrc;
            for (var i = 0, iLen = a.length - 1; i < iLen; i++) {
              arrayNotation = a[i].match(__reArray);
              if (arrayNotation) {
                a[i] = a[i].replace(__reArray, '');
                data[a[i]] = [];
                b = a.slice();
                b.splice(0, i + 1);
                innerSrc = b.join('.');
                for (var j = 0, jLen = val.length; j < jLen; j++) {
                  o = {};
                  setData(o, val[j], innerSrc);
                  data[a[i]].push(o);
                }
                return;
              }
              if (data[a[i]] === null || data[a[i]] === undefined) {
                data[a[i]] = {};
              }
              data = data[a[i]];
            }
            data[a[a.length - 1].replace(__reArray, '')] = val;
          };
          return function (data, val) {
            return setData(data, val, mSource);
          };
        } else {
          return function (data, val) {
            data[mSource] = val;
          };
        }
      }
      function _fnGetDataMaster(oSettings) {
        var aData = [];
        var iLen = oSettings.aoData.length;
        for (var i = 0; i < iLen; i++) {
          aData.push(oSettings.aoData[i]._aData);
        }
        return aData;
      }
      function _fnClearTable(oSettings) {
        oSettings.aoData.splice(0, oSettings.aoData.length);
        oSettings.aiDisplayMaster.splice(0, oSettings.aiDisplayMaster.length);
        oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);
        _fnCalculateEnd(oSettings);
      }
      function _fnDeleteIndex(a, iTarget) {
        var iTargetIndex = -1;
        for (var i = 0, iLen = a.length; i < iLen; i++) {
          if (a[i] == iTarget) {
            iTargetIndex = i;
          } else if (a[i] > iTarget) {
            a[i]--;
          }
        }
        if (iTargetIndex != -1) {
          a.splice(iTargetIndex, 1);
        }
      }
      function _fnRender(oSettings, iRow, iCol) {
        var oCol = oSettings.aoColumns[iCol];
        return oCol.fnRender({
          'iDataRow': iRow,
          'iDataColumn': iCol,
          'oSettings': oSettings,
          'aData': oSettings.aoData[iRow]._aData,
          'mDataProp': oCol.mData
        }, _fnGetCellData(oSettings, iRow, iCol, 'display'));
      }
      function _fnCreateTr(oSettings, iRow) {
        var oData = oSettings.aoData[iRow];
        var nTd;
        if (oData.nTr === null) {
          oData.nTr = document.createElement('tr');
          oData.nTr._DT_RowIndex = iRow;
          if (oData._aData.DT_RowId) {
            oData.nTr.id = oData._aData.DT_RowId;
          }
          if (oData._aData.DT_RowClass) {
            oData.nTr.className = oData._aData.DT_RowClass;
          }
          for (var i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
            var oCol = oSettings.aoColumns[i];
            nTd = document.createElement(oCol.sCellType);
            nTd.innerHTML = typeof oCol.fnRender === 'function' && (!oCol.bUseRendered || oCol.mData === null) ? _fnRender(oSettings, iRow, i) : _fnGetCellData(oSettings, iRow, i, 'display');
            if (oCol.sClass !== null) {
              nTd.className = oCol.sClass;
            }
            if (oCol.bVisible) {
              oData.nTr.appendChild(nTd);
              oData._anHidden[i] = null;
            } else {
              oData._anHidden[i] = nTd;
            }
            if (oCol.fnCreatedCell) {
              oCol.fnCreatedCell.call(oSettings.oInstance, nTd, _fnGetCellData(oSettings, iRow, i, 'display'), oData._aData, iRow, i);
            }
          }
          _fnCallbackFire(oSettings, 'aoRowCreatedCallback', null, [
            oData.nTr,
            oData._aData,
            iRow
          ]);
        }
      }
      function _fnBuildHead(oSettings) {
        var i, nTh, iLen, j, jLen;
        var iThs = $('th, td', oSettings.nTHead).length;
        var iCorrector = 0;
        var jqChildren;
        if (iThs !== 0) {
          for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
            nTh = oSettings.aoColumns[i].nTh;
            nTh.setAttribute('role', 'columnheader');
            if (oSettings.aoColumns[i].bSortable) {
              nTh.setAttribute('tabindex', oSettings.iTabIndex);
              nTh.setAttribute('aria-controls', oSettings.sTableId);
            }
            if (oSettings.aoColumns[i].sClass !== null) {
              $(nTh).addClass(oSettings.aoColumns[i].sClass);
            }
            if (oSettings.aoColumns[i].sTitle != nTh.innerHTML) {
              nTh.innerHTML = oSettings.aoColumns[i].sTitle;
            }
          }
        } else {
          var nTr = document.createElement('tr');
          for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
            nTh = oSettings.aoColumns[i].nTh;
            nTh.innerHTML = oSettings.aoColumns[i].sTitle;
            nTh.setAttribute('tabindex', '0');
            if (oSettings.aoColumns[i].sClass !== null) {
              $(nTh).addClass(oSettings.aoColumns[i].sClass);
            }
            nTr.appendChild(nTh);
          }
          $(oSettings.nTHead).html('')[0].appendChild(nTr);
          _fnDetectHeader(oSettings.aoHeader, oSettings.nTHead);
        }
        $(oSettings.nTHead).children('tr').attr('role', 'row');
        if (oSettings.bJUI) {
          for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
            nTh = oSettings.aoColumns[i].nTh;
            var nDiv = document.createElement('div');
            nDiv.className = oSettings.oClasses.sSortJUIWrapper;
            $(nTh).contents().appendTo(nDiv);
            var nSpan = document.createElement('span');
            nSpan.className = oSettings.oClasses.sSortIcon;
            nDiv.appendChild(nSpan);
            nTh.appendChild(nDiv);
          }
        }
        if (oSettings.oFeatures.bSort) {
          for (i = 0; i < oSettings.aoColumns.length; i++) {
            if (oSettings.aoColumns[i].bSortable !== false) {
              _fnSortAttachListener(oSettings, oSettings.aoColumns[i].nTh, i);
            } else {
              $(oSettings.aoColumns[i].nTh).addClass(oSettings.oClasses.sSortableNone);
            }
          }
        }
        if (oSettings.oClasses.sFooterTH !== '') {
          $(oSettings.nTFoot).children('tr').children('th').addClass(oSettings.oClasses.sFooterTH);
        }
        if (oSettings.nTFoot !== null) {
          var anCells = _fnGetUniqueThs(oSettings, null, oSettings.aoFooter);
          for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
            if (anCells[i]) {
              oSettings.aoColumns[i].nTf = anCells[i];
              if (oSettings.aoColumns[i].sClass) {
                $(anCells[i]).addClass(oSettings.aoColumns[i].sClass);
              }
            }
          }
        }
      }
      function _fnDrawHead(oSettings, aoSource, bIncludeHidden) {
        var i, iLen, j, jLen, k, kLen, n, nLocalTr;
        var aoLocal = [];
        var aApplied = [];
        var iColumns = oSettings.aoColumns.length;
        var iRowspan, iColspan;
        if (bIncludeHidden === undefined) {
          bIncludeHidden = false;
        }
        for (i = 0, iLen = aoSource.length; i < iLen; i++) {
          aoLocal[i] = aoSource[i].slice();
          aoLocal[i].nTr = aoSource[i].nTr;
          for (j = iColumns - 1; j >= 0; j--) {
            if (!oSettings.aoColumns[j].bVisible && !bIncludeHidden) {
              aoLocal[i].splice(j, 1);
            }
          }
          aApplied.push([]);
        }
        for (i = 0, iLen = aoLocal.length; i < iLen; i++) {
          nLocalTr = aoLocal[i].nTr;
          if (nLocalTr) {
            while (n = nLocalTr.firstChild) {
              nLocalTr.removeChild(n);
            }
          }
          for (j = 0, jLen = aoLocal[i].length; j < jLen; j++) {
            iRowspan = 1;
            iColspan = 1;
            if (aApplied[i][j] === undefined) {
              nLocalTr.appendChild(aoLocal[i][j].cell);
              aApplied[i][j] = 1;
              while (aoLocal[i + iRowspan] !== undefined && aoLocal[i][j].cell == aoLocal[i + iRowspan][j].cell) {
                aApplied[i + iRowspan][j] = 1;
                iRowspan++;
              }
              while (aoLocal[i][j + iColspan] !== undefined && aoLocal[i][j].cell == aoLocal[i][j + iColspan].cell) {
                for (k = 0; k < iRowspan; k++) {
                  aApplied[i + k][j + iColspan] = 1;
                }
                iColspan++;
              }
              aoLocal[i][j].cell.rowSpan = iRowspan;
              aoLocal[i][j].cell.colSpan = iColspan;
            }
          }
        }
      }
      function _fnDraw(oSettings) {
        var aPreDraw = _fnCallbackFire(oSettings, 'aoPreDrawCallback', 'preDraw', [oSettings]);
        if ($.inArray(false, aPreDraw) !== -1) {
          _fnProcessingDisplay(oSettings, false);
          return;
        }
        var i, iLen, n;
        var anRows = [];
        var iRowCount = 0;
        var iStripes = oSettings.asStripeClasses.length;
        var iOpenRows = oSettings.aoOpenRows.length;
        oSettings.bDrawing = true;
        if (oSettings.iInitDisplayStart !== undefined && oSettings.iInitDisplayStart != -1) {
          if (oSettings.oFeatures.bServerSide) {
            oSettings._iDisplayStart = oSettings.iInitDisplayStart;
          } else {
            oSettings._iDisplayStart = oSettings.iInitDisplayStart >= oSettings.fnRecordsDisplay() ? 0 : oSettings.iInitDisplayStart;
          }
          oSettings.iInitDisplayStart = -1;
          _fnCalculateEnd(oSettings);
        }
        if (oSettings.bDeferLoading) {
          oSettings.bDeferLoading = false;
          oSettings.iDraw++;
        } else if (!oSettings.oFeatures.bServerSide) {
          oSettings.iDraw++;
        } else if (!oSettings.bDestroying && !_fnAjaxUpdate(oSettings)) {
          return;
        }
        if (oSettings.aiDisplay.length !== 0) {
          var iStart = oSettings._iDisplayStart;
          var iEnd = oSettings._iDisplayEnd;
          if (oSettings.oFeatures.bServerSide) {
            iStart = 0;
            iEnd = oSettings.aoData.length;
          }
          for (var j = iStart; j < iEnd; j++) {
            var aoData = oSettings.aoData[oSettings.aiDisplay[j]];
            if (aoData.nTr === null) {
              _fnCreateTr(oSettings, oSettings.aiDisplay[j]);
            }
            var nRow = aoData.nTr;
            if (iStripes !== 0) {
              var sStripe = oSettings.asStripeClasses[iRowCount % iStripes];
              if (aoData._sRowStripe != sStripe) {
                $(nRow).removeClass(aoData._sRowStripe).addClass(sStripe);
                aoData._sRowStripe = sStripe;
              }
            }
            _fnCallbackFire(oSettings, 'aoRowCallback', null, [
              nRow,
              oSettings.aoData[oSettings.aiDisplay[j]]._aData,
              iRowCount,
              j
            ]);
            anRows.push(nRow);
            iRowCount++;
            if (iOpenRows !== 0) {
              for (var k = 0; k < iOpenRows; k++) {
                if (nRow == oSettings.aoOpenRows[k].nParent) {
                  anRows.push(oSettings.aoOpenRows[k].nTr);
                  break;
                }
              }
            }
          }
        } else {
          anRows[0] = document.createElement('tr');
          if (oSettings.asStripeClasses[0]) {
            anRows[0].className = oSettings.asStripeClasses[0];
          }
          var oLang = oSettings.oLanguage;
          var sZero = oLang.sZeroRecords;
          if (oSettings.iDraw == 1 && oSettings.sAjaxSource !== null && !oSettings.oFeatures.bServerSide) {
            sZero = oLang.sLoadingRecords;
          } else if (oLang.sEmptyTable && oSettings.fnRecordsTotal() === 0) {
            sZero = oLang.sEmptyTable;
          }
          var nTd = document.createElement('td');
          nTd.setAttribute('valign', 'top');
          nTd.colSpan = _fnVisbleColumns(oSettings);
          nTd.className = oSettings.oClasses.sRowEmpty;
          nTd.innerHTML = _fnInfoMacros(oSettings, sZero);
          anRows[iRowCount].appendChild(nTd);
        }
        _fnCallbackFire(oSettings, 'aoHeaderCallback', 'header', [
          $(oSettings.nTHead).children('tr')[0],
          _fnGetDataMaster(oSettings),
          oSettings._iDisplayStart,
          oSettings.fnDisplayEnd(),
          oSettings.aiDisplay
        ]);
        _fnCallbackFire(oSettings, 'aoFooterCallback', 'footer', [
          $(oSettings.nTFoot).children('tr')[0],
          _fnGetDataMaster(oSettings),
          oSettings._iDisplayStart,
          oSettings.fnDisplayEnd(),
          oSettings.aiDisplay
        ]);
        var nAddFrag = document.createDocumentFragment(), nRemoveFrag = document.createDocumentFragment(), nBodyPar, nTrs;
        if (oSettings.nTBody) {
          nBodyPar = oSettings.nTBody.parentNode;
          nRemoveFrag.appendChild(oSettings.nTBody);
          if (!oSettings.oScroll.bInfinite || !oSettings._bInitComplete || oSettings.bSorted || oSettings.bFiltered) {
            while (n = oSettings.nTBody.firstChild) {
              oSettings.nTBody.removeChild(n);
            }
          }
          for (i = 0, iLen = anRows.length; i < iLen; i++) {
            nAddFrag.appendChild(anRows[i]);
          }
          oSettings.nTBody.appendChild(nAddFrag);
          if (nBodyPar !== null) {
            nBodyPar.appendChild(oSettings.nTBody);
          }
        }
        _fnCallbackFire(oSettings, 'aoDrawCallback', 'draw', [oSettings]);
        oSettings.bSorted = false;
        oSettings.bFiltered = false;
        oSettings.bDrawing = false;
        if (oSettings.oFeatures.bServerSide) {
          _fnProcessingDisplay(oSettings, false);
          if (!oSettings._bInitComplete) {
            _fnInitComplete(oSettings);
          }
        }
      }
      function _fnReDraw(oSettings) {
        if (oSettings.oFeatures.bSort) {
          _fnSort(oSettings, oSettings.oPreviousSearch);
        } else if (oSettings.oFeatures.bFilter) {
          _fnFilterComplete(oSettings, oSettings.oPreviousSearch);
        } else {
          _fnCalculateEnd(oSettings);
          _fnDraw(oSettings);
        }
      }
      function _fnAddOptionsHtml(oSettings) {
        var nHolding = $('<div></div>')[0];
        oSettings.nTable.parentNode.insertBefore(nHolding, oSettings.nTable);
        oSettings.nTableWrapper = $('<div id="' + oSettings.sTableId + '_wrapper" class="' + oSettings.oClasses.sWrapper + '" role="grid"></div>')[0];
        oSettings.nTableReinsertBefore = oSettings.nTable.nextSibling;
        var nInsertNode = oSettings.nTableWrapper;
        var aDom = oSettings.sDom.split('');
        var nTmp, iPushFeature, cOption, nNewNode, cNext, sAttr, j;
        for (var i = 0; i < aDom.length; i++) {
          iPushFeature = 0;
          cOption = aDom[i];
          if (cOption == '<') {
            nNewNode = $('<div></div>')[0];
            cNext = aDom[i + 1];
            if (cNext == '\'' || cNext == '"') {
              sAttr = '';
              j = 2;
              while (aDom[i + j] != cNext) {
                sAttr += aDom[i + j];
                j++;
              }
              if (sAttr == 'H') {
                sAttr = oSettings.oClasses.sJUIHeader;
              } else if (sAttr == 'F') {
                sAttr = oSettings.oClasses.sJUIFooter;
              }
              if (sAttr.indexOf('.') != -1) {
                var aSplit = sAttr.split('.');
                nNewNode.id = aSplit[0].substr(1, aSplit[0].length - 1);
                nNewNode.className = aSplit[1];
              } else if (sAttr.charAt(0) == '#') {
                nNewNode.id = sAttr.substr(1, sAttr.length - 1);
              } else {
                nNewNode.className = sAttr;
              }
              i += j;
            }
            nInsertNode.appendChild(nNewNode);
            nInsertNode = nNewNode;
          } else if (cOption == '>') {
            nInsertNode = nInsertNode.parentNode;
          } else if (cOption == 'l' && oSettings.oFeatures.bPaginate && oSettings.oFeatures.bLengthChange) {
            nTmp = _fnFeatureHtmlLength(oSettings);
            iPushFeature = 1;
          } else if (cOption == 'f' && oSettings.oFeatures.bFilter) {
            nTmp = _fnFeatureHtmlFilter(oSettings);
            iPushFeature = 1;
          } else if (cOption == 'r' && oSettings.oFeatures.bProcessing) {
            nTmp = _fnFeatureHtmlProcessing(oSettings);
            iPushFeature = 1;
          } else if (cOption == 't') {
            nTmp = _fnFeatureHtmlTable(oSettings);
            iPushFeature = 1;
          } else if (cOption == 'i' && oSettings.oFeatures.bInfo) {
            nTmp = _fnFeatureHtmlInfo(oSettings);
            iPushFeature = 1;
          } else if (cOption == 'p' && oSettings.oFeatures.bPaginate) {
            nTmp = _fnFeatureHtmlPaginate(oSettings);
            iPushFeature = 1;
          } else if (DataTable.ext.aoFeatures.length !== 0) {
            var aoFeatures = DataTable.ext.aoFeatures;
            for (var k = 0, kLen = aoFeatures.length; k < kLen; k++) {
              if (cOption == aoFeatures[k].cFeature) {
                nTmp = aoFeatures[k].fnInit(oSettings);
                if (nTmp) {
                  iPushFeature = 1;
                }
                break;
              }
            }
          }
          if (iPushFeature == 1 && nTmp !== null) {
            if (typeof oSettings.aanFeatures[cOption] !== 'object') {
              oSettings.aanFeatures[cOption] = [];
            }
            oSettings.aanFeatures[cOption].push(nTmp);
            nInsertNode.appendChild(nTmp);
          }
        }
        nHolding.parentNode.replaceChild(oSettings.nTableWrapper, nHolding);
      }
      function _fnDetectHeader(aLayout, nThead) {
        var nTrs = $(nThead).children('tr');
        var nTr, nCell;
        var i, k, l, iLen, jLen, iColShifted, iColumn, iColspan, iRowspan;
        var bUnique;
        var fnShiftCol = function (a, i, j) {
          var k = a[i];
          while (k[j]) {
            j++;
          }
          return j;
        };
        aLayout.splice(0, aLayout.length);
        for (i = 0, iLen = nTrs.length; i < iLen; i++) {
          aLayout.push([]);
        }
        for (i = 0, iLen = nTrs.length; i < iLen; i++) {
          nTr = nTrs[i];
          iColumn = 0;
          nCell = nTr.firstChild;
          while (nCell) {
            if (nCell.nodeName.toUpperCase() == 'TD' || nCell.nodeName.toUpperCase() == 'TH') {
              iColspan = nCell.getAttribute('colspan') * 1;
              iRowspan = nCell.getAttribute('rowspan') * 1;
              iColspan = !iColspan || iColspan === 0 || iColspan === 1 ? 1 : iColspan;
              iRowspan = !iRowspan || iRowspan === 0 || iRowspan === 1 ? 1 : iRowspan;
              iColShifted = fnShiftCol(aLayout, i, iColumn);
              bUnique = iColspan === 1 ? true : false;
              for (l = 0; l < iColspan; l++) {
                for (k = 0; k < iRowspan; k++) {
                  aLayout[i + k][iColShifted + l] = {
                    'cell': nCell,
                    'unique': bUnique
                  };
                  aLayout[i + k].nTr = nTr;
                }
              }
            }
            nCell = nCell.nextSibling;
          }
        }
      }
      function _fnGetUniqueThs(oSettings, nHeader, aLayout) {
        var aReturn = [];
        if (!aLayout) {
          aLayout = oSettings.aoHeader;
          if (nHeader) {
            aLayout = [];
            _fnDetectHeader(aLayout, nHeader);
          }
        }
        for (var i = 0, iLen = aLayout.length; i < iLen; i++) {
          for (var j = 0, jLen = aLayout[i].length; j < jLen; j++) {
            if (aLayout[i][j].unique && (!aReturn[j] || !oSettings.bSortCellsTop)) {
              aReturn[j] = aLayout[i][j].cell;
            }
          }
        }
        return aReturn;
      }
      function _fnAjaxUpdate(oSettings) {
        if (oSettings.bAjaxDataGet) {
          oSettings.iDraw++;
          _fnProcessingDisplay(oSettings, true);
          var iColumns = oSettings.aoColumns.length;
          var aoData = _fnAjaxParameters(oSettings);
          _fnServerParams(oSettings, aoData);
          oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aoData, function (json) {
            _fnAjaxUpdateDraw(oSettings, json);
          }, oSettings);
          return false;
        } else {
          return true;
        }
      }
      function _fnAjaxParameters(oSettings) {
        var iColumns = oSettings.aoColumns.length;
        var aoData = [], mDataProp, aaSort, aDataSort;
        var i, j;
        aoData.push({
          'name': 'sEcho',
          'value': oSettings.iDraw
        });
        aoData.push({
          'name': 'iColumns',
          'value': iColumns
        });
        aoData.push({
          'name': 'sColumns',
          'value': _fnColumnOrdering(oSettings)
        });
        aoData.push({
          'name': 'iDisplayStart',
          'value': oSettings._iDisplayStart
        });
        aoData.push({
          'name': 'iDisplayLength',
          'value': oSettings.oFeatures.bPaginate !== false ? oSettings._iDisplayLength : -1
        });
        for (i = 0; i < iColumns; i++) {
          mDataProp = oSettings.aoColumns[i].mData;
          aoData.push({
            'name': 'mDataProp_' + i,
            'value': typeof mDataProp === 'function' ? 'function' : mDataProp
          });
        }
        if (oSettings.oFeatures.bFilter !== false) {
          aoData.push({
            'name': 'sSearch',
            'value': oSettings.oPreviousSearch.sSearch
          });
          aoData.push({
            'name': 'bRegex',
            'value': oSettings.oPreviousSearch.bRegex
          });
          for (i = 0; i < iColumns; i++) {
            aoData.push({
              'name': 'sSearch_' + i,
              'value': oSettings.aoPreSearchCols[i].sSearch
            });
            aoData.push({
              'name': 'bRegex_' + i,
              'value': oSettings.aoPreSearchCols[i].bRegex
            });
            aoData.push({
              'name': 'bSearchable_' + i,
              'value': oSettings.aoColumns[i].bSearchable
            });
          }
        }
        if (oSettings.oFeatures.bSort !== false) {
          var iCounter = 0;
          aaSort = oSettings.aaSortingFixed !== null ? oSettings.aaSortingFixed.concat(oSettings.aaSorting) : oSettings.aaSorting.slice();
          for (i = 0; i < aaSort.length; i++) {
            aDataSort = oSettings.aoColumns[aaSort[i][0]].aDataSort;
            for (j = 0; j < aDataSort.length; j++) {
              aoData.push({
                'name': 'iSortCol_' + iCounter,
                'value': aDataSort[j]
              });
              aoData.push({
                'name': 'sSortDir_' + iCounter,
                'value': aaSort[i][1]
              });
              iCounter++;
            }
          }
          aoData.push({
            'name': 'iSortingCols',
            'value': iCounter
          });
          for (i = 0; i < iColumns; i++) {
            aoData.push({
              'name': 'bSortable_' + i,
              'value': oSettings.aoColumns[i].bSortable
            });
          }
        }
        return aoData;
      }
      function _fnServerParams(oSettings, aoData) {
        _fnCallbackFire(oSettings, 'aoServerParams', 'serverParams', [aoData]);
      }
      function _fnAjaxUpdateDraw(oSettings, json) {
        if (json.sEcho !== undefined) {
          if (json.sEcho * 1 < oSettings.iDraw) {
            return;
          } else {
            oSettings.iDraw = json.sEcho * 1;
          }
        }
        if (!oSettings.oScroll.bInfinite || oSettings.oScroll.bInfinite && (oSettings.bSorted || oSettings.bFiltered)) {
          _fnClearTable(oSettings);
        }
        oSettings._iRecordsTotal = parseInt(json.iTotalRecords, 10);
        oSettings._iRecordsDisplay = parseInt(json.iTotalDisplayRecords, 10);
        var sOrdering = _fnColumnOrdering(oSettings);
        var bReOrder = json.sColumns !== undefined && sOrdering !== '' && json.sColumns != sOrdering;
        var aiIndex;
        if (bReOrder) {
          aiIndex = _fnReOrderIndex(oSettings, json.sColumns);
        }
        var aData = _fnGetObjectDataFn(oSettings.sAjaxDataProp)(json);
        for (var i = 0, iLen = aData.length; i < iLen; i++) {
          if (bReOrder) {
            var aDataSorted = [];
            for (var j = 0, jLen = oSettings.aoColumns.length; j < jLen; j++) {
              aDataSorted.push(aData[i][aiIndex[j]]);
            }
            _fnAddData(oSettings, aDataSorted);
          } else {
            _fnAddData(oSettings, aData[i]);
          }
        }
        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        oSettings.bAjaxDataGet = false;
        _fnDraw(oSettings);
        oSettings.bAjaxDataGet = true;
        _fnProcessingDisplay(oSettings, false);
      }
      function _fnFeatureHtmlFilter(oSettings) {
        var oPreviousSearch = oSettings.oPreviousSearch;
        var sSearchStr = oSettings.oLanguage.sSearch;
        sSearchStr = sSearchStr.indexOf('_INPUT_') !== -1 ? sSearchStr.replace('_INPUT_', '<input type="text" />') : sSearchStr === '' ? '<input type="text" />' : sSearchStr + ' <input type="text" />';
        var nFilter = document.createElement('div');
        nFilter.className = oSettings.oClasses.sFilter;
        nFilter.innerHTML = '<label>' + sSearchStr + '</label>';
        if (!oSettings.aanFeatures.f) {
          nFilter.id = oSettings.sTableId + '_filter';
        }
        var jqFilter = $('input[type="text"]', nFilter);
        nFilter._DT_Input = jqFilter[0];
        jqFilter.val(oPreviousSearch.sSearch.replace('"', '&quot;'));
        jqFilter.bind('keyup.DT', function (e) {
          var n = oSettings.aanFeatures.f;
          var val = this.value === '' ? '' : this.value;
          for (var i = 0, iLen = n.length; i < iLen; i++) {
            if (n[i] != $(this).parents('div.dataTables_filter')[0]) {
              $(n[i]._DT_Input).val(val);
            }
          }
          if (val != oPreviousSearch.sSearch) {
            _fnFilterComplete(oSettings, {
              'sSearch': val,
              'bRegex': oPreviousSearch.bRegex,
              'bSmart': oPreviousSearch.bSmart,
              'bCaseInsensitive': oPreviousSearch.bCaseInsensitive
            });
          }
        });
        jqFilter.attr('aria-controls', oSettings.sTableId).bind('keypress.DT', function (e) {
          if (e.keyCode == 13) {
            return false;
          }
        });
        return nFilter;
      }
      function _fnFilterComplete(oSettings, oInput, iForce) {
        var oPrevSearch = oSettings.oPreviousSearch;
        var aoPrevSearch = oSettings.aoPreSearchCols;
        var fnSaveFilter = function (oFilter) {
          oPrevSearch.sSearch = oFilter.sSearch;
          oPrevSearch.bRegex = oFilter.bRegex;
          oPrevSearch.bSmart = oFilter.bSmart;
          oPrevSearch.bCaseInsensitive = oFilter.bCaseInsensitive;
        };
        if (!oSettings.oFeatures.bServerSide) {
          _fnFilter(oSettings, oInput.sSearch, iForce, oInput.bRegex, oInput.bSmart, oInput.bCaseInsensitive);
          fnSaveFilter(oInput);
          for (var i = 0; i < oSettings.aoPreSearchCols.length; i++) {
            _fnFilterColumn(oSettings, aoPrevSearch[i].sSearch, i, aoPrevSearch[i].bRegex, aoPrevSearch[i].bSmart, aoPrevSearch[i].bCaseInsensitive);
          }
          _fnFilterCustom(oSettings);
        } else {
          fnSaveFilter(oInput);
        }
        oSettings.bFiltered = true;
        $(oSettings.oInstance).trigger('filter', oSettings);
        oSettings._iDisplayStart = 0;
        _fnCalculateEnd(oSettings);
        _fnDraw(oSettings);
        _fnBuildSearchArray(oSettings, 0);
      }
      function _fnFilterCustom(oSettings) {
        var afnFilters = DataTable.ext.afnFiltering;
        var aiFilterColumns = _fnGetColumns(oSettings, 'bSearchable');
        for (var i = 0, iLen = afnFilters.length; i < iLen; i++) {
          var iCorrector = 0;
          for (var j = 0, jLen = oSettings.aiDisplay.length; j < jLen; j++) {
            var iDisIndex = oSettings.aiDisplay[j - iCorrector];
            var bTest = afnFilters[i](oSettings, _fnGetRowData(oSettings, iDisIndex, 'filter', aiFilterColumns), iDisIndex);
            if (!bTest) {
              oSettings.aiDisplay.splice(j - iCorrector, 1);
              iCorrector++;
            }
          }
        }
      }
      function _fnFilterColumn(oSettings, sInput, iColumn, bRegex, bSmart, bCaseInsensitive) {
        if (sInput === '') {
          return;
        }
        var iIndexCorrector = 0;
        var rpSearch = _fnFilterCreateSearch(sInput, bRegex, bSmart, bCaseInsensitive);
        for (var i = oSettings.aiDisplay.length - 1; i >= 0; i--) {
          var sData = _fnDataToSearch(_fnGetCellData(oSettings, oSettings.aiDisplay[i], iColumn, 'filter'), oSettings.aoColumns[iColumn].sType);
          if (!rpSearch.test(sData)) {
            oSettings.aiDisplay.splice(i, 1);
            iIndexCorrector++;
          }
        }
      }
      function _fnFilter(oSettings, sInput, iForce, bRegex, bSmart, bCaseInsensitive) {
        var i;
        var rpSearch = _fnFilterCreateSearch(sInput, bRegex, bSmart, bCaseInsensitive);
        var oPrevSearch = oSettings.oPreviousSearch;
        if (!iForce) {
          iForce = 0;
        }
        if (DataTable.ext.afnFiltering.length !== 0) {
          iForce = 1;
        }
        if (sInput.length <= 0) {
          oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);
          oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        } else {
          if (oSettings.aiDisplay.length == oSettings.aiDisplayMaster.length || oPrevSearch.sSearch.length > sInput.length || iForce == 1 || sInput.indexOf(oPrevSearch.sSearch) !== 0) {
            oSettings.aiDisplay.splice(0, oSettings.aiDisplay.length);
            _fnBuildSearchArray(oSettings, 1);
            for (i = 0; i < oSettings.aiDisplayMaster.length; i++) {
              if (rpSearch.test(oSettings.asDataSearch[i])) {
                oSettings.aiDisplay.push(oSettings.aiDisplayMaster[i]);
              }
            }
          } else {
            var iIndexCorrector = 0;
            for (i = 0; i < oSettings.asDataSearch.length; i++) {
              if (!rpSearch.test(oSettings.asDataSearch[i])) {
                oSettings.aiDisplay.splice(i - iIndexCorrector, 1);
                iIndexCorrector++;
              }
            }
          }
        }
      }
      function _fnBuildSearchArray(oSettings, iMaster) {
        if (!oSettings.oFeatures.bServerSide) {
          oSettings.asDataSearch = [];
          var aiFilterColumns = _fnGetColumns(oSettings, 'bSearchable');
          var aiIndex = iMaster === 1 ? oSettings.aiDisplayMaster : oSettings.aiDisplay;
          for (var i = 0, iLen = aiIndex.length; i < iLen; i++) {
            oSettings.asDataSearch[i] = _fnBuildSearchRow(oSettings, _fnGetRowData(oSettings, aiIndex[i], 'filter', aiFilterColumns));
          }
        }
      }
      function _fnBuildSearchRow(oSettings, aData) {
        var sSearch = aData.join('  ');
        if (sSearch.indexOf('&') !== -1) {
          sSearch = $('<div>').html(sSearch).text();
        }
        return sSearch.replace(/[\n\r]/g, ' ');
      }
      function _fnFilterCreateSearch(sSearch, bRegex, bSmart, bCaseInsensitive) {
        var asSearch, sRegExpString;
        if (bSmart) {
          asSearch = bRegex ? sSearch.split(' ') : _fnEscapeRegex(sSearch).split(' ');
          sRegExpString = '^(?=.*?' + asSearch.join(')(?=.*?') + ').*$';
          return new RegExp(sRegExpString, bCaseInsensitive ? 'i' : '');
        } else {
          sSearch = bRegex ? sSearch : _fnEscapeRegex(sSearch);
          return new RegExp(sSearch, bCaseInsensitive ? 'i' : '');
        }
      }
      function _fnDataToSearch(sData, sType) {
        if (typeof DataTable.ext.ofnSearch[sType] === 'function') {
          return DataTable.ext.ofnSearch[sType](sData);
        } else if (sData === null) {
          return '';
        } else if (sType == 'html') {
          return sData.replace(/[\r\n]/g, ' ').replace(/<.*?>/g, '');
        } else if (typeof sData === 'string') {
          return sData.replace(/[\r\n]/g, ' ');
        }
        return sData;
      }
      function _fnEscapeRegex(sVal) {
        var acEscape = [
            '/',
            '.',
            '*',
            '+',
            '?',
            '|',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '\\',
            '$',
            '^',
            '-'
          ];
        var reReplace = new RegExp('(\\' + acEscape.join('|\\') + ')', 'g');
        return sVal.replace(reReplace, '\\$1');
      }
      function _fnFeatureHtmlInfo(oSettings) {
        var nInfo = document.createElement('div');
        nInfo.className = oSettings.oClasses.sInfo;
        if (!oSettings.aanFeatures.i) {
          oSettings.aoDrawCallback.push({
            'fn': _fnUpdateInfo,
            'sName': 'information'
          });
          nInfo.id = oSettings.sTableId + '_info';
        }
        oSettings.nTable.setAttribute('aria-describedby', oSettings.sTableId + '_info');
        return nInfo;
      }
      function _fnUpdateInfo(oSettings) {
        if (!oSettings.oFeatures.bInfo || oSettings.aanFeatures.i.length === 0) {
          return;
        }
        var oLang = oSettings.oLanguage, iStart = oSettings._iDisplayStart + 1, iEnd = oSettings.fnDisplayEnd(), iMax = oSettings.fnRecordsTotal(), iTotal = oSettings.fnRecordsDisplay(), sOut;
        if (iTotal === 0) {
          sOut = oLang.sInfoEmpty;
        } else {
          sOut = oLang.sInfo;
        }
        if (iTotal != iMax) {
          sOut += ' ' + oLang.sInfoFiltered;
        }
        sOut += oLang.sInfoPostFix;
        sOut = _fnInfoMacros(oSettings, sOut);
        if (oLang.fnInfoCallback !== null) {
          sOut = oLang.fnInfoCallback.call(oSettings.oInstance, oSettings, iStart, iEnd, iMax, iTotal, sOut);
        }
        var n = oSettings.aanFeatures.i;
        for (var i = 0, iLen = n.length; i < iLen; i++) {
          $(n[i]).html(sOut);
        }
      }
      function _fnInfoMacros(oSettings, str) {
        var iStart = oSettings._iDisplayStart + 1, sStart = oSettings.fnFormatNumber(iStart), iEnd = oSettings.fnDisplayEnd(), sEnd = oSettings.fnFormatNumber(iEnd), iTotal = oSettings.fnRecordsDisplay(), sTotal = oSettings.fnFormatNumber(iTotal), iMax = oSettings.fnRecordsTotal(), sMax = oSettings.fnFormatNumber(iMax);
        if (oSettings.oScroll.bInfinite) {
          sStart = oSettings.fnFormatNumber(1);
        }
        return str.replace(/_START_/g, sStart).replace(/_END_/g, sEnd).replace(/_TOTAL_/g, sTotal).replace(/_MAX_/g, sMax);
      }
      function _fnInitialise(oSettings) {
        var i, iLen, iAjaxStart = oSettings.iInitDisplayStart;
        if (oSettings.bInitialised === false) {
          setTimeout(function () {
            _fnInitialise(oSettings);
          }, 200);
          return;
        }
        _fnAddOptionsHtml(oSettings);
        _fnBuildHead(oSettings);
        _fnDrawHead(oSettings, oSettings.aoHeader);
        if (oSettings.nTFoot) {
          _fnDrawHead(oSettings, oSettings.aoFooter);
        }
        _fnProcessingDisplay(oSettings, true);
        if (oSettings.oFeatures.bAutoWidth) {
          _fnCalculateColumnWidths(oSettings);
        }
        for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
          if (oSettings.aoColumns[i].sWidth !== null) {
            oSettings.aoColumns[i].nTh.style.width = _fnStringToCss(oSettings.aoColumns[i].sWidth);
          }
        }
        if (oSettings.oFeatures.bSort) {
          _fnSort(oSettings);
        } else if (oSettings.oFeatures.bFilter) {
          _fnFilterComplete(oSettings, oSettings.oPreviousSearch);
        } else {
          oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
          _fnCalculateEnd(oSettings);
          _fnDraw(oSettings);
        }
        if (oSettings.sAjaxSource !== null && !oSettings.oFeatures.bServerSide) {
          var aoData = [];
          _fnServerParams(oSettings, aoData);
          oSettings.fnServerData.call(oSettings.oInstance, oSettings.sAjaxSource, aoData, function (json) {
            var aData = oSettings.sAjaxDataProp !== '' ? _fnGetObjectDataFn(oSettings.sAjaxDataProp)(json) : json;
            for (i = 0; i < aData.length; i++) {
              _fnAddData(oSettings, aData[i]);
            }
            oSettings.iInitDisplayStart = iAjaxStart;
            if (oSettings.oFeatures.bSort) {
              _fnSort(oSettings);
            } else {
              oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
              _fnCalculateEnd(oSettings);
              _fnDraw(oSettings);
            }
            _fnProcessingDisplay(oSettings, false);
            _fnInitComplete(oSettings, json);
          }, oSettings);
          return;
        }
        if (!oSettings.oFeatures.bServerSide) {
          _fnProcessingDisplay(oSettings, false);
          _fnInitComplete(oSettings);
        }
      }
      function _fnInitComplete(oSettings, json) {
        oSettings._bInitComplete = true;
        _fnCallbackFire(oSettings, 'aoInitComplete', 'init', [
          oSettings,
          json
        ]);
      }
      function _fnLanguageCompat(oLanguage) {
        var oDefaults = DataTable.defaults.oLanguage;
        if (!oLanguage.sEmptyTable && oLanguage.sZeroRecords && oDefaults.sEmptyTable === 'No data available in table') {
          _fnMap(oLanguage, oLanguage, 'sZeroRecords', 'sEmptyTable');
        }
        if (!oLanguage.sLoadingRecords && oLanguage.sZeroRecords && oDefaults.sLoadingRecords === 'Loading...') {
          _fnMap(oLanguage, oLanguage, 'sZeroRecords', 'sLoadingRecords');
        }
      }
      function _fnFeatureHtmlLength(oSettings) {
        if (oSettings.oScroll.bInfinite) {
          return null;
        }
        var sName = 'name="' + oSettings.sTableId + '_length"';
        var sStdMenu = '<select size="1" ' + sName + '>';
        var i, iLen;
        var aLengthMenu = oSettings.aLengthMenu;
        if (aLengthMenu.length == 2 && typeof aLengthMenu[0] === 'object' && typeof aLengthMenu[1] === 'object') {
          for (i = 0, iLen = aLengthMenu[0].length; i < iLen; i++) {
            sStdMenu += '<option value="' + aLengthMenu[0][i] + '">' + aLengthMenu[1][i] + '</option>';
          }
        } else {
          for (i = 0, iLen = aLengthMenu.length; i < iLen; i++) {
            sStdMenu += '<option value="' + aLengthMenu[i] + '">' + aLengthMenu[i] + '</option>';
          }
        }
        sStdMenu += '</select>';
        var nLength = document.createElement('div');
        if (!oSettings.aanFeatures.l) {
          nLength.id = oSettings.sTableId + '_length';
        }
        nLength.className = oSettings.oClasses.sLength;
        nLength.innerHTML = '<label>' + oSettings.oLanguage.sLengthMenu.replace('_MENU_', sStdMenu) + '</label>';
        $('select option[value="' + oSettings._iDisplayLength + '"]', nLength).attr('selected', true);
        $('select', nLength).bind('change.DT', function (e) {
          var iVal = $(this).val();
          var n = oSettings.aanFeatures.l;
          for (i = 0, iLen = n.length; i < iLen; i++) {
            if (n[i] != this.parentNode) {
              $('select', n[i]).val(iVal);
            }
          }
          oSettings._iDisplayLength = parseInt(iVal, 10);
          _fnCalculateEnd(oSettings);
          if (oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay()) {
            oSettings._iDisplayStart = oSettings.fnDisplayEnd() - oSettings._iDisplayLength;
            if (oSettings._iDisplayStart < 0) {
              oSettings._iDisplayStart = 0;
            }
          }
          if (oSettings._iDisplayLength == -1) {
            oSettings._iDisplayStart = 0;
          }
          _fnDraw(oSettings);
        });
        $('select', nLength).attr('aria-controls', oSettings.sTableId);
        return nLength;
      }
      function _fnCalculateEnd(oSettings) {
        if (oSettings.oFeatures.bPaginate === false) {
          oSettings._iDisplayEnd = oSettings.aiDisplay.length;
        } else {
          if (oSettings._iDisplayStart + oSettings._iDisplayLength > oSettings.aiDisplay.length || oSettings._iDisplayLength == -1) {
            oSettings._iDisplayEnd = oSettings.aiDisplay.length;
          } else {
            oSettings._iDisplayEnd = oSettings._iDisplayStart + oSettings._iDisplayLength;
          }
        }
      }
      function _fnFeatureHtmlPaginate(oSettings) {
        if (oSettings.oScroll.bInfinite) {
          return null;
        }
        var nPaginate = document.createElement('div');
        nPaginate.className = oSettings.oClasses.sPaging + oSettings.sPaginationType;
        DataTable.ext.oPagination[oSettings.sPaginationType].fnInit(oSettings, nPaginate, function (oSettings) {
          _fnCalculateEnd(oSettings);
          _fnDraw(oSettings);
        });
        if (!oSettings.aanFeatures.p) {
          oSettings.aoDrawCallback.push({
            'fn': function (oSettings) {
              DataTable.ext.oPagination[oSettings.sPaginationType].fnUpdate(oSettings, function (oSettings) {
                _fnCalculateEnd(oSettings);
                _fnDraw(oSettings);
              });
            },
            'sName': 'pagination'
          });
        }
        return nPaginate;
      }
      function _fnPageChange(oSettings, mAction) {
        var iOldStart = oSettings._iDisplayStart;
        if (typeof mAction === 'number') {
          oSettings._iDisplayStart = mAction * oSettings._iDisplayLength;
          if (oSettings._iDisplayStart > oSettings.fnRecordsDisplay()) {
            oSettings._iDisplayStart = 0;
          }
        } else if (mAction == 'first') {
          oSettings._iDisplayStart = 0;
        } else if (mAction == 'previous') {
          oSettings._iDisplayStart = oSettings._iDisplayLength >= 0 ? oSettings._iDisplayStart - oSettings._iDisplayLength : 0;
          if (oSettings._iDisplayStart < 0) {
            oSettings._iDisplayStart = 0;
          }
        } else if (mAction == 'next') {
          if (oSettings._iDisplayLength >= 0) {
            if (oSettings._iDisplayStart + oSettings._iDisplayLength < oSettings.fnRecordsDisplay()) {
              oSettings._iDisplayStart += oSettings._iDisplayLength;
            }
          } else {
            oSettings._iDisplayStart = 0;
          }
        } else if (mAction == 'last') {
          if (oSettings._iDisplayLength >= 0) {
            var iPages = parseInt((oSettings.fnRecordsDisplay() - 1) / oSettings._iDisplayLength, 10) + 1;
            oSettings._iDisplayStart = (iPages - 1) * oSettings._iDisplayLength;
          } else {
            oSettings._iDisplayStart = 0;
          }
        } else {
          _fnLog(oSettings, 0, 'Unknown paging action: ' + mAction);
        }
        $(oSettings.oInstance).trigger('page', oSettings);
        return iOldStart != oSettings._iDisplayStart;
      }
      function _fnFeatureHtmlProcessing(oSettings) {
        var nProcessing = document.createElement('div');
        if (!oSettings.aanFeatures.r) {
          nProcessing.id = oSettings.sTableId + '_processing';
        }
        nProcessing.innerHTML = oSettings.oLanguage.sProcessing;
        nProcessing.className = oSettings.oClasses.sProcessing;
        oSettings.nTable.parentNode.insertBefore(nProcessing, oSettings.nTable);
        return nProcessing;
      }
      function _fnProcessingDisplay(oSettings, bShow) {
        if (oSettings.oFeatures.bProcessing) {
          var an = oSettings.aanFeatures.r;
          for (var i = 0, iLen = an.length; i < iLen; i++) {
            an[i].style.visibility = bShow ? 'visible' : 'hidden';
          }
        }
        $(oSettings.oInstance).trigger('processing', [
          oSettings,
          bShow
        ]);
      }
      function _fnFeatureHtmlTable(oSettings) {
        if (oSettings.oScroll.sX === '' && oSettings.oScroll.sY === '') {
          return oSettings.nTable;
        }
        var nScroller = document.createElement('div'), nScrollHead = document.createElement('div'), nScrollHeadInner = document.createElement('div'), nScrollBody = document.createElement('div'), nScrollFoot = document.createElement('div'), nScrollFootInner = document.createElement('div'), nScrollHeadTable = oSettings.nTable.cloneNode(false), nScrollFootTable = oSettings.nTable.cloneNode(false), nThead = oSettings.nTable.getElementsByTagName('thead')[0], nTfoot = oSettings.nTable.getElementsByTagName('tfoot').length === 0 ? null : oSettings.nTable.getElementsByTagName('tfoot')[0], oClasses = oSettings.oClasses;
        nScrollHead.appendChild(nScrollHeadInner);
        nScrollFoot.appendChild(nScrollFootInner);
        nScrollBody.appendChild(oSettings.nTable);
        nScroller.appendChild(nScrollHead);
        nScroller.appendChild(nScrollBody);
        nScrollHeadInner.appendChild(nScrollHeadTable);
        nScrollHeadTable.appendChild(nThead);
        if (nTfoot !== null) {
          nScroller.appendChild(nScrollFoot);
          nScrollFootInner.appendChild(nScrollFootTable);
          nScrollFootTable.appendChild(nTfoot);
        }
        nScroller.className = oClasses.sScrollWrapper;
        nScrollHead.className = oClasses.sScrollHead;
        nScrollHeadInner.className = oClasses.sScrollHeadInner;
        nScrollBody.className = oClasses.sScrollBody;
        nScrollFoot.className = oClasses.sScrollFoot;
        nScrollFootInner.className = oClasses.sScrollFootInner;
        if (oSettings.oScroll.bAutoCss) {
          nScrollHead.style.overflow = 'hidden';
          nScrollHead.style.position = 'relative';
          nScrollFoot.style.overflow = 'hidden';
          nScrollBody.style.overflow = 'auto';
        }
        nScrollHead.style.border = '0';
        nScrollHead.style.width = '100%';
        nScrollFoot.style.border = '0';
        nScrollHeadInner.style.width = oSettings.oScroll.sXInner !== '' ? oSettings.oScroll.sXInner : '100%';
        nScrollHeadTable.removeAttribute('id');
        nScrollHeadTable.style.marginLeft = '0';
        oSettings.nTable.style.marginLeft = '0';
        if (nTfoot !== null) {
          nScrollFootTable.removeAttribute('id');
          nScrollFootTable.style.marginLeft = '0';
        }
        var nCaption = $(oSettings.nTable).children('caption');
        if (nCaption.length > 0) {
          nCaption = nCaption[0];
          if (nCaption._captionSide === 'top') {
            nScrollHeadTable.appendChild(nCaption);
          } else if (nCaption._captionSide === 'bottom' && nTfoot) {
            nScrollFootTable.appendChild(nCaption);
          }
        }
        if (oSettings.oScroll.sX !== '') {
          nScrollHead.style.width = _fnStringToCss(oSettings.oScroll.sX);
          nScrollBody.style.width = _fnStringToCss(oSettings.oScroll.sX);
          if (nTfoot !== null) {
            nScrollFoot.style.width = _fnStringToCss(oSettings.oScroll.sX);
          }
          $(nScrollBody).scroll(function (e) {
            nScrollHead.scrollLeft = this.scrollLeft;
            if (nTfoot !== null) {
              nScrollFoot.scrollLeft = this.scrollLeft;
            }
          });
        }
        if (oSettings.oScroll.sY !== '') {
          nScrollBody.style.height = _fnStringToCss(oSettings.oScroll.sY);
        }
        oSettings.aoDrawCallback.push({
          'fn': _fnScrollDraw,
          'sName': 'scrolling'
        });
        if (oSettings.oScroll.bInfinite) {
          $(nScrollBody).scroll(function () {
            if (!oSettings.bDrawing && $(this).scrollTop() !== 0) {
              if ($(this).scrollTop() + $(this).height() > $(oSettings.nTable).height() - oSettings.oScroll.iLoadGap) {
                if (oSettings.fnDisplayEnd() < oSettings.fnRecordsDisplay()) {
                  _fnPageChange(oSettings, 'next');
                  _fnCalculateEnd(oSettings);
                  _fnDraw(oSettings);
                }
              }
            }
          });
        }
        oSettings.nScrollHead = nScrollHead;
        oSettings.nScrollFoot = nScrollFoot;
        return nScroller;
      }
      function _fnScrollDraw(o) {
        var nScrollHeadInner = o.nScrollHead.getElementsByTagName('div')[0], nScrollHeadTable = nScrollHeadInner.getElementsByTagName('table')[0], nScrollBody = o.nTable.parentNode, i, iLen, j, jLen, anHeadToSize, anHeadSizers, anFootSizers, anFootToSize, oStyle, iVis, nTheadSize, nTfootSize, iWidth, aApplied = [], aAppliedFooter = [], iSanityWidth, nScrollFootInner = o.nTFoot !== null ? o.nScrollFoot.getElementsByTagName('div')[0] : null, nScrollFootTable = o.nTFoot !== null ? nScrollFootInner.getElementsByTagName('table')[0] : null, ie67 = o.oBrowser.bScrollOversize, zeroOut = function (nSizer) {
            oStyle = nSizer.style;
            oStyle.paddingTop = '0';
            oStyle.paddingBottom = '0';
            oStyle.borderTopWidth = '0';
            oStyle.borderBottomWidth = '0';
            oStyle.height = 0;
          };
        $(o.nTable).children('thead, tfoot').remove();
        nTheadSize = $(o.nTHead).clone()[0];
        o.nTable.insertBefore(nTheadSize, o.nTable.childNodes[0]);
        anHeadToSize = o.nTHead.getElementsByTagName('tr');
        anHeadSizers = nTheadSize.getElementsByTagName('tr');
        if (o.nTFoot !== null) {
          nTfootSize = $(o.nTFoot).clone()[0];
          o.nTable.insertBefore(nTfootSize, o.nTable.childNodes[1]);
          anFootToSize = o.nTFoot.getElementsByTagName('tr');
          anFootSizers = nTfootSize.getElementsByTagName('tr');
        }
        if (o.oScroll.sX === '') {
          nScrollBody.style.width = '100%';
          nScrollHeadInner.parentNode.style.width = '100%';
        }
        var nThs = _fnGetUniqueThs(o, nTheadSize);
        for (i = 0, iLen = nThs.length; i < iLen; i++) {
          iVis = _fnVisibleToColumnIndex(o, i);
          nThs[i].style.width = o.aoColumns[iVis].sWidth;
        }
        if (o.nTFoot !== null) {
          _fnApplyToChildren(function (n) {
            n.style.width = '';
          }, anFootSizers);
        }
        if (o.oScroll.bCollapse && o.oScroll.sY !== '') {
          nScrollBody.style.height = nScrollBody.offsetHeight + o.nTHead.offsetHeight + 'px';
        }
        iSanityWidth = $(o.nTable).outerWidth();
        if (o.oScroll.sX === '') {
          o.nTable.style.width = '100%';
          if (ie67 && ($('tbody', nScrollBody).height() > nScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == 'scroll')) {
            o.nTable.style.width = _fnStringToCss($(o.nTable).outerWidth() - o.oScroll.iBarWidth);
          }
        } else {
          if (o.oScroll.sXInner !== '') {
            o.nTable.style.width = _fnStringToCss(o.oScroll.sXInner);
          } else if (iSanityWidth == $(nScrollBody).width() && $(nScrollBody).height() < $(o.nTable).height()) {
            o.nTable.style.width = _fnStringToCss(iSanityWidth - o.oScroll.iBarWidth);
            if ($(o.nTable).outerWidth() > iSanityWidth - o.oScroll.iBarWidth) {
              o.nTable.style.width = _fnStringToCss(iSanityWidth);
            }
          } else {
            o.nTable.style.width = _fnStringToCss(iSanityWidth);
          }
        }
        iSanityWidth = $(o.nTable).outerWidth();
        _fnApplyToChildren(zeroOut, anHeadSizers);
        _fnApplyToChildren(function (nSizer) {
          aApplied.push(_fnStringToCss($(nSizer).width()));
        }, anHeadSizers);
        _fnApplyToChildren(function (nToSize, i) {
          nToSize.style.width = aApplied[i];
        }, anHeadToSize);
        $(anHeadSizers).height(0);
        if (o.nTFoot !== null) {
          _fnApplyToChildren(zeroOut, anFootSizers);
          _fnApplyToChildren(function (nSizer) {
            aAppliedFooter.push(_fnStringToCss($(nSizer).width()));
          }, anFootSizers);
          _fnApplyToChildren(function (nToSize, i) {
            nToSize.style.width = aAppliedFooter[i];
          }, anFootToSize);
          $(anFootSizers).height(0);
        }
        _fnApplyToChildren(function (nSizer, i) {
          nSizer.innerHTML = '';
          nSizer.style.width = aApplied[i];
        }, anHeadSizers);
        if (o.nTFoot !== null) {
          _fnApplyToChildren(function (nSizer, i) {
            nSizer.innerHTML = '';
            nSizer.style.width = aAppliedFooter[i];
          }, anFootSizers);
        }
        if ($(o.nTable).outerWidth() < iSanityWidth) {
          var iCorrection = nScrollBody.scrollHeight > nScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == 'scroll' ? iSanityWidth + o.oScroll.iBarWidth : iSanityWidth;
          if (ie67 && (nScrollBody.scrollHeight > nScrollBody.offsetHeight || $(nScrollBody).css('overflow-y') == 'scroll')) {
            o.nTable.style.width = _fnStringToCss(iCorrection - o.oScroll.iBarWidth);
          }
          nScrollBody.style.width = _fnStringToCss(iCorrection);
          o.nScrollHead.style.width = _fnStringToCss(iCorrection);
          if (o.nTFoot !== null) {
            o.nScrollFoot.style.width = _fnStringToCss(iCorrection);
          }
          if (o.oScroll.sX === '') {
            _fnLog(o, 1, 'The table cannot fit into the current element which will cause column' + ' misalignment. The table has been drawn at its minimum possible width.');
          } else if (o.oScroll.sXInner !== '') {
            _fnLog(o, 1, 'The table cannot fit into the current element which will cause column' + ' misalignment. Increase the sScrollXInner value or remove it to allow automatic' + ' calculation');
          }
        } else {
          nScrollBody.style.width = _fnStringToCss('100%');
          o.nScrollHead.style.width = _fnStringToCss('100%');
          if (o.nTFoot !== null) {
            o.nScrollFoot.style.width = _fnStringToCss('100%');
          }
        }
        if (o.oScroll.sY === '') {
          if (ie67) {
            nScrollBody.style.height = _fnStringToCss(o.nTable.offsetHeight + o.oScroll.iBarWidth);
          }
        }
        if (o.oScroll.sY !== '' && o.oScroll.bCollapse) {
          nScrollBody.style.height = _fnStringToCss(o.oScroll.sY);
          var iExtra = o.oScroll.sX !== '' && o.nTable.offsetWidth > nScrollBody.offsetWidth ? o.oScroll.iBarWidth : 0;
          if (o.nTable.offsetHeight < nScrollBody.offsetHeight) {
            nScrollBody.style.height = _fnStringToCss(o.nTable.offsetHeight + iExtra);
          }
        }
        var iOuterWidth = $(o.nTable).outerWidth();
        nScrollHeadTable.style.width = _fnStringToCss(iOuterWidth);
        nScrollHeadInner.style.width = _fnStringToCss(iOuterWidth);
        var bScrolling = $(o.nTable).height() > nScrollBody.clientHeight || $(nScrollBody).css('overflow-y') == 'scroll';
        nScrollHeadInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth + 'px' : '0px';
        if (o.nTFoot !== null) {
          nScrollFootTable.style.width = _fnStringToCss(iOuterWidth);
          nScrollFootInner.style.width = _fnStringToCss(iOuterWidth);
          nScrollFootInner.style.paddingRight = bScrolling ? o.oScroll.iBarWidth + 'px' : '0px';
        }
        $(nScrollBody).scroll();
        if (o.bSorted || o.bFiltered) {
          nScrollBody.scrollTop = 0;
        }
      }
      function _fnApplyToChildren(fn, an1, an2) {
        var index = 0, i = 0, iLen = an1.length;
        var nNode1, nNode2;
        while (i < iLen) {
          nNode1 = an1[i].firstChild;
          nNode2 = an2 ? an2[i].firstChild : null;
          while (nNode1) {
            if (nNode1.nodeType === 1) {
              if (an2) {
                fn(nNode1, nNode2, index);
              } else {
                fn(nNode1, index);
              }
              index++;
            }
            nNode1 = nNode1.nextSibling;
            nNode2 = an2 ? nNode2.nextSibling : null;
          }
          i++;
        }
      }
      function _fnConvertToWidth(sWidth, nParent) {
        if (!sWidth || sWidth === null || sWidth === '') {
          return 0;
        }
        if (!nParent) {
          nParent = document.body;
        }
        var iWidth;
        var nTmp = document.createElement('div');
        nTmp.style.width = _fnStringToCss(sWidth);
        nParent.appendChild(nTmp);
        iWidth = nTmp.offsetWidth;
        nParent.removeChild(nTmp);
        return iWidth;
      }
      function _fnCalculateColumnWidths(oSettings) {
        var iTableWidth = oSettings.nTable.offsetWidth;
        var iUserInputs = 0;
        var iTmpWidth;
        var iVisibleColumns = 0;
        var iColums = oSettings.aoColumns.length;
        var i, iIndex, iCorrector, iWidth;
        var oHeaders = $('th', oSettings.nTHead);
        var widthAttr = oSettings.nTable.getAttribute('width');
        var nWrapper = oSettings.nTable.parentNode;
        for (i = 0; i < iColums; i++) {
          if (oSettings.aoColumns[i].bVisible) {
            iVisibleColumns++;
            if (oSettings.aoColumns[i].sWidth !== null) {
              iTmpWidth = _fnConvertToWidth(oSettings.aoColumns[i].sWidthOrig, nWrapper);
              if (iTmpWidth !== null) {
                oSettings.aoColumns[i].sWidth = _fnStringToCss(iTmpWidth);
              }
              iUserInputs++;
            }
          }
        }
        if (iColums == oHeaders.length && iUserInputs === 0 && iVisibleColumns == iColums && oSettings.oScroll.sX === '' && oSettings.oScroll.sY === '') {
          for (i = 0; i < oSettings.aoColumns.length; i++) {
            iTmpWidth = $(oHeaders[i]).width();
            if (iTmpWidth !== null) {
              oSettings.aoColumns[i].sWidth = _fnStringToCss(iTmpWidth);
            }
          }
        } else {
          var nCalcTmp = oSettings.nTable.cloneNode(false), nTheadClone = oSettings.nTHead.cloneNode(true), nBody = document.createElement('tbody'), nTr = document.createElement('tr'), nDivSizing;
          nCalcTmp.removeAttribute('id');
          nCalcTmp.appendChild(nTheadClone);
          if (oSettings.nTFoot !== null) {
            nCalcTmp.appendChild(oSettings.nTFoot.cloneNode(true));
            _fnApplyToChildren(function (n) {
              n.style.width = '';
            }, nCalcTmp.getElementsByTagName('tr'));
          }
          nCalcTmp.appendChild(nBody);
          nBody.appendChild(nTr);
          var jqColSizing = $('thead th', nCalcTmp);
          if (jqColSizing.length === 0) {
            jqColSizing = $('tbody tr:eq(0)>td', nCalcTmp);
          }
          var nThs = _fnGetUniqueThs(oSettings, nTheadClone);
          iCorrector = 0;
          for (i = 0; i < iColums; i++) {
            var oColumn = oSettings.aoColumns[i];
            if (oColumn.bVisible && oColumn.sWidthOrig !== null && oColumn.sWidthOrig !== '') {
              nThs[i - iCorrector].style.width = _fnStringToCss(oColumn.sWidthOrig);
            } else if (oColumn.bVisible) {
              nThs[i - iCorrector].style.width = '';
            } else {
              iCorrector++;
            }
          }
          for (i = 0; i < iColums; i++) {
            if (oSettings.aoColumns[i].bVisible) {
              var nTd = _fnGetWidestNode(oSettings, i);
              if (nTd !== null) {
                nTd = nTd.cloneNode(true);
                if (oSettings.aoColumns[i].sContentPadding !== '') {
                  nTd.innerHTML += oSettings.aoColumns[i].sContentPadding;
                }
                nTr.appendChild(nTd);
              }
            }
          }
          nWrapper.appendChild(nCalcTmp);
          if (oSettings.oScroll.sX !== '' && oSettings.oScroll.sXInner !== '') {
            nCalcTmp.style.width = _fnStringToCss(oSettings.oScroll.sXInner);
          } else if (oSettings.oScroll.sX !== '') {
            nCalcTmp.style.width = '';
            if ($(nCalcTmp).width() < nWrapper.offsetWidth) {
              nCalcTmp.style.width = _fnStringToCss(nWrapper.offsetWidth);
            }
          } else if (oSettings.oScroll.sY !== '') {
            nCalcTmp.style.width = _fnStringToCss(nWrapper.offsetWidth);
          } else if (widthAttr) {
            nCalcTmp.style.width = _fnStringToCss(widthAttr);
          }
          nCalcTmp.style.visibility = 'hidden';
          _fnScrollingWidthAdjust(oSettings, nCalcTmp);
          var oNodes = $('tbody tr:eq(0)', nCalcTmp).children();
          if (oNodes.length === 0) {
            oNodes = _fnGetUniqueThs(oSettings, $('thead', nCalcTmp)[0]);
          }
          if (oSettings.oScroll.sX !== '') {
            var iTotal = 0;
            iCorrector = 0;
            for (i = 0; i < oSettings.aoColumns.length; i++) {
              if (oSettings.aoColumns[i].bVisible) {
                if (oSettings.aoColumns[i].sWidthOrig === null) {
                  iTotal += $(oNodes[iCorrector]).outerWidth();
                } else {
                  iTotal += parseInt(oSettings.aoColumns[i].sWidth.replace('px', ''), 10) + ($(oNodes[iCorrector]).outerWidth() - $(oNodes[iCorrector]).width());
                }
                iCorrector++;
              }
            }
            nCalcTmp.style.width = _fnStringToCss(iTotal);
            oSettings.nTable.style.width = _fnStringToCss(iTotal);
          }
          iCorrector = 0;
          for (i = 0; i < oSettings.aoColumns.length; i++) {
            if (oSettings.aoColumns[i].bVisible) {
              iWidth = $(oNodes[iCorrector]).width();
              if (iWidth !== null && iWidth > 0) {
                oSettings.aoColumns[i].sWidth = _fnStringToCss(iWidth);
              }
              iCorrector++;
            }
          }
          var cssWidth = $(nCalcTmp).css('width');
          oSettings.nTable.style.width = cssWidth.indexOf('%') !== -1 ? cssWidth : _fnStringToCss($(nCalcTmp).outerWidth());
          nCalcTmp.parentNode.removeChild(nCalcTmp);
        }
        if (widthAttr) {
          oSettings.nTable.style.width = _fnStringToCss(widthAttr);
        }
      }
      function _fnScrollingWidthAdjust(oSettings, n) {
        if (oSettings.oScroll.sX === '' && oSettings.oScroll.sY !== '') {
          var iOrigWidth = $(n).width();
          n.style.width = _fnStringToCss($(n).outerWidth() - oSettings.oScroll.iBarWidth);
        } else if (oSettings.oScroll.sX !== '') {
          n.style.width = _fnStringToCss($(n).outerWidth());
        }
      }
      function _fnGetWidestNode(oSettings, iCol) {
        var iMaxIndex = _fnGetMaxLenString(oSettings, iCol);
        if (iMaxIndex < 0) {
          return null;
        }
        if (oSettings.aoData[iMaxIndex].nTr === null) {
          var n = document.createElement('td');
          n.innerHTML = _fnGetCellData(oSettings, iMaxIndex, iCol, '');
          return n;
        }
        return _fnGetTdNodes(oSettings, iMaxIndex)[iCol];
      }
      function _fnGetMaxLenString(oSettings, iCol) {
        var iMax = -1;
        var iMaxIndex = -1;
        for (var i = 0; i < oSettings.aoData.length; i++) {
          var s = _fnGetCellData(oSettings, i, iCol, 'display') + '';
          s = s.replace(/<.*?>/g, '');
          if (s.length > iMax) {
            iMax = s.length;
            iMaxIndex = i;
          }
        }
        return iMaxIndex;
      }
      function _fnStringToCss(s) {
        if (s === null) {
          return '0px';
        }
        if (typeof s == 'number') {
          if (s < 0) {
            return '0px';
          }
          return s + 'px';
        }
        var c = s.charCodeAt(s.length - 1);
        if (c < 48 || c > 57) {
          return s;
        }
        return s + 'px';
      }
      function _fnScrollBarWidth() {
        var inner = document.createElement('p');
        var style = inner.style;
        style.width = '100%';
        style.height = '200px';
        style.padding = '0px';
        var outer = document.createElement('div');
        style = outer.style;
        style.position = 'absolute';
        style.top = '0px';
        style.left = '0px';
        style.visibility = 'hidden';
        style.width = '200px';
        style.height = '150px';
        style.padding = '0px';
        style.overflow = 'hidden';
        outer.appendChild(inner);
        document.body.appendChild(outer);
        var w1 = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetWidth;
        if (w1 == w2) {
          w2 = outer.clientWidth;
        }
        document.body.removeChild(outer);
        return w1 - w2;
      }
      function _fnSort(oSettings, bApplyClasses) {
        var i, iLen, j, jLen, k, kLen, sDataType, nTh, aaSort = [], aiOrig = [], oSort = DataTable.ext.oSort, aoData = oSettings.aoData, aoColumns = oSettings.aoColumns, oAria = oSettings.oLanguage.oAria;
        if (!oSettings.oFeatures.bServerSide && (oSettings.aaSorting.length !== 0 || oSettings.aaSortingFixed !== null)) {
          aaSort = oSettings.aaSortingFixed !== null ? oSettings.aaSortingFixed.concat(oSettings.aaSorting) : oSettings.aaSorting.slice();
          for (i = 0; i < aaSort.length; i++) {
            var iColumn = aaSort[i][0];
            var iVisColumn = _fnColumnIndexToVisible(oSettings, iColumn);
            sDataType = oSettings.aoColumns[iColumn].sSortDataType;
            if (DataTable.ext.afnSortData[sDataType]) {
              var aData = DataTable.ext.afnSortData[sDataType].call(oSettings.oInstance, oSettings, iColumn, iVisColumn);
              if (aData.length === aoData.length) {
                for (j = 0, jLen = aoData.length; j < jLen; j++) {
                  _fnSetCellData(oSettings, j, iColumn, aData[j]);
                }
              } else {
                _fnLog(oSettings, 0, 'Returned data sort array (col ' + iColumn + ') is the wrong length');
              }
            }
          }
          for (i = 0, iLen = oSettings.aiDisplayMaster.length; i < iLen; i++) {
            aiOrig[oSettings.aiDisplayMaster[i]] = i;
          }
          var iSortLen = aaSort.length;
          var fnSortFormat, aDataSort;
          for (i = 0, iLen = aoData.length; i < iLen; i++) {
            for (j = 0; j < iSortLen; j++) {
              aDataSort = aoColumns[aaSort[j][0]].aDataSort;
              for (k = 0, kLen = aDataSort.length; k < kLen; k++) {
                sDataType = aoColumns[aDataSort[k]].sType;
                fnSortFormat = oSort[(sDataType ? sDataType : 'string') + '-pre'];
                aoData[i]._aSortData[aDataSort[k]] = fnSortFormat ? fnSortFormat(_fnGetCellData(oSettings, i, aDataSort[k], 'sort')) : _fnGetCellData(oSettings, i, aDataSort[k], 'sort');
              }
            }
          }
          oSettings.aiDisplayMaster.sort(function (a, b) {
            var k, l, lLen, iTest, aDataSort, sDataType;
            for (k = 0; k < iSortLen; k++) {
              aDataSort = aoColumns[aaSort[k][0]].aDataSort;
              for (l = 0, lLen = aDataSort.length; l < lLen; l++) {
                sDataType = aoColumns[aDataSort[l]].sType;
                iTest = oSort[(sDataType ? sDataType : 'string') + '-' + aaSort[k][1]](aoData[a]._aSortData[aDataSort[l]], aoData[b]._aSortData[aDataSort[l]]);
                if (iTest !== 0) {
                  return iTest;
                }
              }
            }
            return oSort['numeric-asc'](aiOrig[a], aiOrig[b]);
          });
        }
        if ((bApplyClasses === undefined || bApplyClasses) && !oSettings.oFeatures.bDeferRender) {
          _fnSortingClasses(oSettings);
        }
        for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
          var sTitle = aoColumns[i].sTitle.replace(/<.*?>/g, '');
          nTh = aoColumns[i].nTh;
          nTh.removeAttribute('aria-sort');
          nTh.removeAttribute('aria-label');
          if (aoColumns[i].bSortable) {
            if (aaSort.length > 0 && aaSort[0][0] == i) {
              nTh.setAttribute('aria-sort', aaSort[0][1] == 'asc' ? 'ascending' : 'descending');
              var nextSort = aoColumns[i].asSorting[aaSort[0][2] + 1] ? aoColumns[i].asSorting[aaSort[0][2] + 1] : aoColumns[i].asSorting[0];
              nTh.setAttribute('aria-label', sTitle + (nextSort == 'asc' ? oAria.sSortAscending : oAria.sSortDescending));
            } else {
              nTh.setAttribute('aria-label', sTitle + (aoColumns[i].asSorting[0] == 'asc' ? oAria.sSortAscending : oAria.sSortDescending));
            }
          } else {
            nTh.setAttribute('aria-label', sTitle);
          }
        }
        oSettings.bSorted = true;
        $(oSettings.oInstance).trigger('sort', oSettings);
        if (oSettings.oFeatures.bFilter) {
          _fnFilterComplete(oSettings, oSettings.oPreviousSearch, 1);
        } else {
          oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
          oSettings._iDisplayStart = 0;
          _fnCalculateEnd(oSettings);
          _fnDraw(oSettings);
        }
      }
      function _fnSortAttachListener(oSettings, nNode, iDataIndex, fnCallback) {
        _fnBindAction(nNode, {}, function (e) {
          if (oSettings.aoColumns[iDataIndex].bSortable === false) {
            return;
          }
          var fnInnerSorting = function () {
            var iColumn, iNextSort;
            if (e.shiftKey) {
              var bFound = false;
              for (var i = 0; i < oSettings.aaSorting.length; i++) {
                if (oSettings.aaSorting[i][0] == iDataIndex) {
                  bFound = true;
                  iColumn = oSettings.aaSorting[i][0];
                  iNextSort = oSettings.aaSorting[i][2] + 1;
                  if (!oSettings.aoColumns[iColumn].asSorting[iNextSort]) {
                    oSettings.aaSorting.splice(i, 1);
                  } else {
                    oSettings.aaSorting[i][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];
                    oSettings.aaSorting[i][2] = iNextSort;
                  }
                  break;
                }
              }
              if (bFound === false) {
                oSettings.aaSorting.push([
                  iDataIndex,
                  oSettings.aoColumns[iDataIndex].asSorting[0],
                  0
                ]);
              }
            } else {
              if (oSettings.aaSorting.length == 1 && oSettings.aaSorting[0][0] == iDataIndex) {
                iColumn = oSettings.aaSorting[0][0];
                iNextSort = oSettings.aaSorting[0][2] + 1;
                if (!oSettings.aoColumns[iColumn].asSorting[iNextSort]) {
                  iNextSort = 0;
                }
                oSettings.aaSorting[0][1] = oSettings.aoColumns[iColumn].asSorting[iNextSort];
                oSettings.aaSorting[0][2] = iNextSort;
              } else {
                oSettings.aaSorting.splice(0, oSettings.aaSorting.length);
                oSettings.aaSorting.push([
                  iDataIndex,
                  oSettings.aoColumns[iDataIndex].asSorting[0],
                  0
                ]);
              }
            }
            _fnSort(oSettings);
          };
          if (!oSettings.oFeatures.bProcessing) {
            fnInnerSorting();
          } else {
            _fnProcessingDisplay(oSettings, true);
            setTimeout(function () {
              fnInnerSorting();
              if (!oSettings.oFeatures.bServerSide) {
                _fnProcessingDisplay(oSettings, false);
              }
            }, 0);
          }
          if (typeof fnCallback == 'function') {
            fnCallback(oSettings);
          }
        });
      }
      function _fnSortingClasses(oSettings) {
        var i, iLen, j, jLen, iFound;
        var aaSort, sClass;
        var iColumns = oSettings.aoColumns.length;
        var oClasses = oSettings.oClasses;
        for (i = 0; i < iColumns; i++) {
          if (oSettings.aoColumns[i].bSortable) {
            $(oSettings.aoColumns[i].nTh).removeClass(oClasses.sSortAsc + ' ' + oClasses.sSortDesc + ' ' + oSettings.aoColumns[i].sSortingClass);
          }
        }
        if (oSettings.aaSortingFixed !== null) {
          aaSort = oSettings.aaSortingFixed.concat(oSettings.aaSorting);
        } else {
          aaSort = oSettings.aaSorting.slice();
        }
        for (i = 0; i < oSettings.aoColumns.length; i++) {
          if (oSettings.aoColumns[i].bSortable) {
            sClass = oSettings.aoColumns[i].sSortingClass;
            iFound = -1;
            for (j = 0; j < aaSort.length; j++) {
              if (aaSort[j][0] == i) {
                sClass = aaSort[j][1] == 'asc' ? oClasses.sSortAsc : oClasses.sSortDesc;
                iFound = j;
                break;
              }
            }
            $(oSettings.aoColumns[i].nTh).addClass(sClass);
            if (oSettings.bJUI) {
              var jqSpan = $('span.' + oClasses.sSortIcon, oSettings.aoColumns[i].nTh);
              jqSpan.removeClass(oClasses.sSortJUIAsc + ' ' + oClasses.sSortJUIDesc + ' ' + oClasses.sSortJUI + ' ' + oClasses.sSortJUIAscAllowed + ' ' + oClasses.sSortJUIDescAllowed);
              var sSpanClass;
              if (iFound == -1) {
                sSpanClass = oSettings.aoColumns[i].sSortingClassJUI;
              } else if (aaSort[iFound][1] == 'asc') {
                sSpanClass = oClasses.sSortJUIAsc;
              } else {
                sSpanClass = oClasses.sSortJUIDesc;
              }
              jqSpan.addClass(sSpanClass);
            }
          } else {
            $(oSettings.aoColumns[i].nTh).addClass(oSettings.aoColumns[i].sSortingClass);
          }
        }
        sClass = oClasses.sSortColumn;
        if (oSettings.oFeatures.bSort && oSettings.oFeatures.bSortClasses) {
          var nTds = _fnGetTdNodes(oSettings);
          var iClass, iTargetCol;
          var asClasses = [];
          for (i = 0; i < iColumns; i++) {
            asClasses.push('');
          }
          for (i = 0, iClass = 1; i < aaSort.length; i++) {
            iTargetCol = parseInt(aaSort[i][0], 10);
            asClasses[iTargetCol] = sClass + iClass;
            if (iClass < 3) {
              iClass++;
            }
          }
          var reClass = new RegExp(sClass + '[123]');
          var sTmpClass, sCurrentClass, sNewClass;
          for (i = 0, iLen = nTds.length; i < iLen; i++) {
            iTargetCol = i % iColumns;
            sCurrentClass = nTds[i].className;
            sNewClass = asClasses[iTargetCol];
            sTmpClass = sCurrentClass.replace(reClass, sNewClass);
            if (sTmpClass != sCurrentClass) {
              nTds[i].className = $.trim(sTmpClass);
            } else if (sNewClass.length > 0 && sCurrentClass.indexOf(sNewClass) == -1) {
              nTds[i].className = sCurrentClass + ' ' + sNewClass;
            }
          }
        }
      }
      function _fnSaveState(oSettings) {
        if (!oSettings.oFeatures.bStateSave || oSettings.bDestroying) {
          return;
        }
        var i, iLen, bInfinite = oSettings.oScroll.bInfinite;
        var oState = {
            'iCreate': new Date().getTime(),
            'iStart': bInfinite ? 0 : oSettings._iDisplayStart,
            'iEnd': bInfinite ? oSettings._iDisplayLength : oSettings._iDisplayEnd,
            'iLength': oSettings._iDisplayLength,
            'aaSorting': $.extend(true, [], oSettings.aaSorting),
            'oSearch': $.extend(true, {}, oSettings.oPreviousSearch),
            'aoSearchCols': $.extend(true, [], oSettings.aoPreSearchCols),
            'abVisCols': []
          };
        for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
          oState.abVisCols.push(oSettings.aoColumns[i].bVisible);
        }
        _fnCallbackFire(oSettings, 'aoStateSaveParams', 'stateSaveParams', [
          oSettings,
          oState
        ]);
        oSettings.fnStateSave.call(oSettings.oInstance, oSettings, oState);
      }
      function _fnLoadState(oSettings, oInit) {
        if (!oSettings.oFeatures.bStateSave) {
          return;
        }
        var oData = oSettings.fnStateLoad.call(oSettings.oInstance, oSettings);
        if (!oData) {
          return;
        }
        var abStateLoad = _fnCallbackFire(oSettings, 'aoStateLoadParams', 'stateLoadParams', [
            oSettings,
            oData
          ]);
        if ($.inArray(false, abStateLoad) !== -1) {
          return;
        }
        oSettings.oLoadedState = $.extend(true, {}, oData);
        oSettings._iDisplayStart = oData.iStart;
        oSettings.iInitDisplayStart = oData.iStart;
        oSettings._iDisplayEnd = oData.iEnd;
        oSettings._iDisplayLength = oData.iLength;
        oSettings.aaSorting = oData.aaSorting.slice();
        oSettings.saved_aaSorting = oData.aaSorting.slice();
        $.extend(oSettings.oPreviousSearch, oData.oSearch);
        $.extend(true, oSettings.aoPreSearchCols, oData.aoSearchCols);
        oInit.saved_aoColumns = [];
        for (var i = 0; i < oData.abVisCols.length; i++) {
          oInit.saved_aoColumns[i] = {};
          oInit.saved_aoColumns[i].bVisible = oData.abVisCols[i];
        }
        _fnCallbackFire(oSettings, 'aoStateLoaded', 'stateLoaded', [
          oSettings,
          oData
        ]);
      }
      function _fnCreateCookie(sName, sValue, iSecs, sBaseName, fnCallback) {
        var date = new Date();
        date.setTime(date.getTime() + iSecs * 1000);
        var aParts = window.location.pathname.split('/');
        var sNameFile = sName + '_' + aParts.pop().replace(/[\/:]/g, '').toLowerCase();
        var sFullCookie, oData;
        if (fnCallback !== null) {
          oData = typeof $.parseJSON === 'function' ? $.parseJSON(sValue) : eval('(' + sValue + ')');
          sFullCookie = fnCallback(sNameFile, oData, date.toGMTString(), aParts.join('/') + '/');
        } else {
          sFullCookie = sNameFile + '=' + encodeURIComponent(sValue) + '; expires=' + date.toGMTString() + '; path=' + aParts.join('/') + '/';
        }
        var aCookies = document.cookie.split(';'), iNewCookieLen = sFullCookie.split(';')[0].length, aOldCookies = [];
        if (iNewCookieLen + document.cookie.length + 10 > 4096) {
          for (var i = 0, iLen = aCookies.length; i < iLen; i++) {
            if (aCookies[i].indexOf(sBaseName) != -1) {
              var aSplitCookie = aCookies[i].split('=');
              try {
                oData = eval('(' + decodeURIComponent(aSplitCookie[1]) + ')');
                if (oData && oData.iCreate) {
                  aOldCookies.push({
                    'name': aSplitCookie[0],
                    'time': oData.iCreate
                  });
                }
              } catch (e) {
              }
            }
          }
          aOldCookies.sort(function (a, b) {
            return b.time - a.time;
          });
          while (iNewCookieLen + document.cookie.length + 10 > 4096) {
            if (aOldCookies.length === 0) {
              return;
            }
            var old = aOldCookies.pop();
            document.cookie = old.name + '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=' + aParts.join('/') + '/';
          }
        }
        document.cookie = sFullCookie;
      }
      function _fnReadCookie(sName) {
        var aParts = window.location.pathname.split('/'), sNameEQ = sName + '_' + aParts[aParts.length - 1].replace(/[\/:]/g, '').toLowerCase() + '=', sCookieContents = document.cookie.split(';');
        for (var i = 0; i < sCookieContents.length; i++) {
          var c = sCookieContents[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
          }
          if (c.indexOf(sNameEQ) === 0) {
            return decodeURIComponent(c.substring(sNameEQ.length, c.length));
          }
        }
        return null;
      }
      function _fnSettingsFromNode(nTable) {
        for (var i = 0; i < DataTable.settings.length; i++) {
          if (DataTable.settings[i].nTable === nTable) {
            return DataTable.settings[i];
          }
        }
        return null;
      }
      function _fnGetTrNodes(oSettings) {
        var aNodes = [];
        var aoData = oSettings.aoData;
        for (var i = 0, iLen = aoData.length; i < iLen; i++) {
          if (aoData[i].nTr !== null) {
            aNodes.push(aoData[i].nTr);
          }
        }
        return aNodes;
      }
      function _fnGetTdNodes(oSettings, iIndividualRow) {
        var anReturn = [];
        var iCorrector;
        var anTds, nTd;
        var iRow, iRows = oSettings.aoData.length, iColumn, iColumns, oData, sNodeName, iStart = 0, iEnd = iRows;
        if (iIndividualRow !== undefined) {
          iStart = iIndividualRow;
          iEnd = iIndividualRow + 1;
        }
        for (iRow = iStart; iRow < iEnd; iRow++) {
          oData = oSettings.aoData[iRow];
          if (oData.nTr !== null) {
            anTds = [];
            nTd = oData.nTr.firstChild;
            while (nTd) {
              sNodeName = nTd.nodeName.toLowerCase();
              if (sNodeName == 'td' || sNodeName == 'th') {
                anTds.push(nTd);
              }
              nTd = nTd.nextSibling;
            }
            iCorrector = 0;
            for (iColumn = 0, iColumns = oSettings.aoColumns.length; iColumn < iColumns; iColumn++) {
              if (oSettings.aoColumns[iColumn].bVisible) {
                anReturn.push(anTds[iColumn - iCorrector]);
              } else {
                anReturn.push(oData._anHidden[iColumn]);
                iCorrector++;
              }
            }
          }
        }
        return anReturn;
      }
      function _fnLog(oSettings, iLevel, sMesg) {
        var sAlert = oSettings === null ? 'DataTables warning: ' + sMesg : 'DataTables warning (table id = \'' + oSettings.sTableId + '\'): ' + sMesg;
        if (iLevel === 0) {
          if (DataTable.ext.sErrMode == 'alert') {
            alert(sAlert);
          } else {
            throw new Error(sAlert);
          }
          return;
        } else if (window.console && console.log) {
          console.log(sAlert);
        }
      }
      function _fnMap(oRet, oSrc, sName, sMappedName) {
        if (sMappedName === undefined) {
          sMappedName = sName;
        }
        if (oSrc[sName] !== undefined) {
          oRet[sMappedName] = oSrc[sName];
        }
      }
      function _fnExtend(oOut, oExtender) {
        var val;
        for (var prop in oExtender) {
          if (oExtender.hasOwnProperty(prop)) {
            val = oExtender[prop];
            if (typeof oInit[prop] === 'object' && val !== null && $.isArray(val) === false) {
              $.extend(true, oOut[prop], val);
            } else {
              oOut[prop] = val;
            }
          }
        }
        return oOut;
      }
      function _fnBindAction(n, oData, fn) {
        $(n).bind('click.DT', oData, function (e) {
          n.blur();
          fn(e);
        }).bind('keypress.DT', oData, function (e) {
          if (e.which === 13) {
            fn(e);
          }
        }).bind('selectstart.DT', function () {
          return false;
        });
      }
      function _fnCallbackReg(oSettings, sStore, fn, sName) {
        if (fn) {
          oSettings[sStore].push({
            'fn': fn,
            'sName': sName
          });
        }
      }
      function _fnCallbackFire(oSettings, sStore, sTrigger, aArgs) {
        var aoStore = oSettings[sStore];
        var aRet = [];
        for (var i = aoStore.length - 1; i >= 0; i--) {
          aRet.push(aoStore[i].fn.apply(oSettings.oInstance, aArgs));
        }
        if (sTrigger !== null) {
          $(oSettings.oInstance).trigger(sTrigger, aArgs);
        }
        return aRet;
      }
      var _fnJsonString = window.JSON ? JSON.stringify : function (o) {
          var sType = typeof o;
          if (sType !== 'object' || o === null) {
            if (sType === 'string') {
              o = '"' + o + '"';
            }
            return o + '';
          }
          var sProp, mValue, json = [], bArr = $.isArray(o);
          for (sProp in o) {
            mValue = o[sProp];
            sType = typeof mValue;
            if (sType === 'string') {
              mValue = '"' + mValue + '"';
            } else if (sType === 'object' && mValue !== null) {
              mValue = _fnJsonString(mValue);
            }
            json.push((bArr ? '' : '"' + sProp + '":') + mValue);
          }
          return (bArr ? '[' : '{') + json + (bArr ? ']' : '}');
        };
      function _fnBrowserDetect(oSettings) {
        var n = $('<div style="position:absolute; top:0; left:0; height:1px; width:1px; overflow:hidden">' + '<div style="position:absolute; top:1px; left:1px; width:100px; overflow:scroll;">' + '<div id="DT_BrowserTest" style="width:100%; height:10px;"></div>' + '</div>' + '</div>')[0];
        document.body.appendChild(n);
        oSettings.oBrowser.bScrollOversize = $('#DT_BrowserTest', n)[0].offsetWidth === 100 ? true : false;
        document.body.removeChild(n);
      }
      this.$ = function (sSelector, oOpts) {
        var i, iLen, a = [], tr;
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        var aoData = oSettings.aoData;
        var aiDisplay = oSettings.aiDisplay;
        var aiDisplayMaster = oSettings.aiDisplayMaster;
        if (!oOpts) {
          oOpts = {};
        }
        oOpts = $.extend({}, {
          'filter': 'none',
          'order': 'current',
          'page': 'all'
        }, oOpts);
        if (oOpts.page == 'current') {
          for (i = oSettings._iDisplayStart, iLen = oSettings.fnDisplayEnd(); i < iLen; i++) {
            tr = aoData[aiDisplay[i]].nTr;
            if (tr) {
              a.push(tr);
            }
          }
        } else if (oOpts.order == 'current' && oOpts.filter == 'none') {
          for (i = 0, iLen = aiDisplayMaster.length; i < iLen; i++) {
            tr = aoData[aiDisplayMaster[i]].nTr;
            if (tr) {
              a.push(tr);
            }
          }
        } else if (oOpts.order == 'current' && oOpts.filter == 'applied') {
          for (i = 0, iLen = aiDisplay.length; i < iLen; i++) {
            tr = aoData[aiDisplay[i]].nTr;
            if (tr) {
              a.push(tr);
            }
          }
        } else if (oOpts.order == 'original' && oOpts.filter == 'none') {
          for (i = 0, iLen = aoData.length; i < iLen; i++) {
            tr = aoData[i].nTr;
            if (tr) {
              a.push(tr);
            }
          }
        } else if (oOpts.order == 'original' && oOpts.filter == 'applied') {
          for (i = 0, iLen = aoData.length; i < iLen; i++) {
            tr = aoData[i].nTr;
            if ($.inArray(i, aiDisplay) !== -1 && tr) {
              a.push(tr);
            }
          }
        } else {
          _fnLog(oSettings, 1, 'Unknown selection options');
        }
        var jqA = $(a);
        var jqTRs = jqA.filter(sSelector);
        var jqDescendants = jqA.find(sSelector);
        return $([].concat($.makeArray(jqTRs), $.makeArray(jqDescendants)));
      };
      this._ = function (sSelector, oOpts) {
        var aOut = [];
        var i, iLen, iIndex;
        var aTrs = this.$(sSelector, oOpts);
        for (i = 0, iLen = aTrs.length; i < iLen; i++) {
          aOut.push(this.fnGetData(aTrs[i]));
        }
        return aOut;
      };
      this.fnAddData = function (mData, bRedraw) {
        if (mData.length === 0) {
          return [];
        }
        var aiReturn = [];
        var iTest;
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        if (typeof mData[0] === 'object' && mData[0] !== null) {
          for (var i = 0; i < mData.length; i++) {
            iTest = _fnAddData(oSettings, mData[i]);
            if (iTest == -1) {
              return aiReturn;
            }
            aiReturn.push(iTest);
          }
        } else {
          iTest = _fnAddData(oSettings, mData);
          if (iTest == -1) {
            return aiReturn;
          }
          aiReturn.push(iTest);
        }
        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        if (bRedraw === undefined || bRedraw) {
          _fnReDraw(oSettings);
        }
        return aiReturn;
      };
      this.fnAdjustColumnSizing = function (bRedraw) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        _fnAdjustColumnSizing(oSettings);
        if (bRedraw === undefined || bRedraw) {
          this.fnDraw(false);
        } else if (oSettings.oScroll.sX !== '' || oSettings.oScroll.sY !== '') {
          this.oApi._fnScrollDraw(oSettings);
        }
      };
      this.fnClearTable = function (bRedraw) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        _fnClearTable(oSettings);
        if (bRedraw === undefined || bRedraw) {
          _fnDraw(oSettings);
        }
      };
      this.fnClose = function (nTr) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        for (var i = 0; i < oSettings.aoOpenRows.length; i++) {
          if (oSettings.aoOpenRows[i].nParent == nTr) {
            var nTrParent = oSettings.aoOpenRows[i].nTr.parentNode;
            if (nTrParent) {
              nTrParent.removeChild(oSettings.aoOpenRows[i].nTr);
            }
            oSettings.aoOpenRows.splice(i, 1);
            return 0;
          }
        }
        return 1;
      };
      this.fnDeleteRow = function (mTarget, fnCallBack, bRedraw) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        var i, iLen, iAODataIndex;
        iAODataIndex = typeof mTarget === 'object' ? _fnNodeToDataIndex(oSettings, mTarget) : mTarget;
        var oData = oSettings.aoData.splice(iAODataIndex, 1);
        for (i = 0, iLen = oSettings.aoData.length; i < iLen; i++) {
          if (oSettings.aoData[i].nTr !== null) {
            oSettings.aoData[i].nTr._DT_RowIndex = i;
          }
        }
        var iDisplayIndex = $.inArray(iAODataIndex, oSettings.aiDisplay);
        oSettings.asDataSearch.splice(iDisplayIndex, 1);
        _fnDeleteIndex(oSettings.aiDisplayMaster, iAODataIndex);
        _fnDeleteIndex(oSettings.aiDisplay, iAODataIndex);
        if (typeof fnCallBack === 'function') {
          fnCallBack.call(this, oSettings, oData);
        }
        if (oSettings._iDisplayStart >= oSettings.fnRecordsDisplay()) {
          oSettings._iDisplayStart -= oSettings._iDisplayLength;
          if (oSettings._iDisplayStart < 0) {
            oSettings._iDisplayStart = 0;
          }
        }
        if (bRedraw === undefined || bRedraw) {
          _fnCalculateEnd(oSettings);
          _fnDraw(oSettings);
        }
        return oData;
      };
      this.fnDestroy = function (bRemove) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        var nOrig = oSettings.nTableWrapper.parentNode;
        var nBody = oSettings.nTBody;
        var i, iLen;
        bRemove = bRemove === undefined ? false : bRemove;
        oSettings.bDestroying = true;
        _fnCallbackFire(oSettings, 'aoDestroyCallback', 'destroy', [oSettings]);
        if (!bRemove) {
          for (i = 0, iLen = oSettings.aoColumns.length; i < iLen; i++) {
            if (oSettings.aoColumns[i].bVisible === false) {
              this.fnSetColumnVis(i, true);
            }
          }
        }
        $(oSettings.nTableWrapper).find('*').andSelf().unbind('.DT');
        $('tbody>tr>td.' + oSettings.oClasses.sRowEmpty, oSettings.nTable).parent().remove();
        if (oSettings.nTable != oSettings.nTHead.parentNode) {
          $(oSettings.nTable).children('thead').remove();
          oSettings.nTable.appendChild(oSettings.nTHead);
        }
        if (oSettings.nTFoot && oSettings.nTable != oSettings.nTFoot.parentNode) {
          $(oSettings.nTable).children('tfoot').remove();
          oSettings.nTable.appendChild(oSettings.nTFoot);
        }
        oSettings.nTable.parentNode.removeChild(oSettings.nTable);
        $(oSettings.nTableWrapper).remove();
        oSettings.aaSorting = [];
        oSettings.aaSortingFixed = [];
        _fnSortingClasses(oSettings);
        $(_fnGetTrNodes(oSettings)).removeClass(oSettings.asStripeClasses.join(' '));
        $('th, td', oSettings.nTHead).removeClass([
          oSettings.oClasses.sSortable,
          oSettings.oClasses.sSortableAsc,
          oSettings.oClasses.sSortableDesc,
          oSettings.oClasses.sSortableNone
        ].join(' '));
        if (oSettings.bJUI) {
          $('th span.' + oSettings.oClasses.sSortIcon + ', td span.' + oSettings.oClasses.sSortIcon, oSettings.nTHead).remove();
          $('th, td', oSettings.nTHead).each(function () {
            var jqWrapper = $('div.' + oSettings.oClasses.sSortJUIWrapper, this);
            var kids = jqWrapper.contents();
            $(this).append(kids);
            jqWrapper.remove();
          });
        }
        if (!bRemove && oSettings.nTableReinsertBefore) {
          nOrig.insertBefore(oSettings.nTable, oSettings.nTableReinsertBefore);
        } else if (!bRemove) {
          nOrig.appendChild(oSettings.nTable);
        }
        for (i = 0, iLen = oSettings.aoData.length; i < iLen; i++) {
          if (oSettings.aoData[i].nTr !== null) {
            nBody.appendChild(oSettings.aoData[i].nTr);
          }
        }
        if (oSettings.oFeatures.bAutoWidth === true) {
          oSettings.nTable.style.width = _fnStringToCss(oSettings.sDestroyWidth);
        }
        iLen = oSettings.asDestroyStripes.length;
        if (iLen) {
          var anRows = $(nBody).children('tr');
          for (i = 0; i < iLen; i++) {
            anRows.filter(':nth-child(' + iLen + 'n + ' + i + ')').addClass(oSettings.asDestroyStripes[i]);
          }
        }
        for (i = 0, iLen = DataTable.settings.length; i < iLen; i++) {
          if (DataTable.settings[i] == oSettings) {
            DataTable.settings.splice(i, 1);
          }
        }
        oSettings = null;
        oInit = null;
      };
      this.fnDraw = function (bComplete) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        if (bComplete === false) {
          _fnCalculateEnd(oSettings);
          _fnDraw(oSettings);
        } else {
          _fnReDraw(oSettings);
        }
      };
      this.fnFilter = function (sInput, iColumn, bRegex, bSmart, bShowGlobal, bCaseInsensitive) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        if (!oSettings.oFeatures.bFilter) {
          return;
        }
        if (bRegex === undefined || bRegex === null) {
          bRegex = false;
        }
        if (bSmart === undefined || bSmart === null) {
          bSmart = true;
        }
        if (bShowGlobal === undefined || bShowGlobal === null) {
          bShowGlobal = true;
        }
        if (bCaseInsensitive === undefined || bCaseInsensitive === null) {
          bCaseInsensitive = true;
        }
        if (iColumn === undefined || iColumn === null) {
          _fnFilterComplete(oSettings, {
            'sSearch': sInput + '',
            'bRegex': bRegex,
            'bSmart': bSmart,
            'bCaseInsensitive': bCaseInsensitive
          }, 1);
          if (bShowGlobal && oSettings.aanFeatures.f) {
            var n = oSettings.aanFeatures.f;
            for (var i = 0, iLen = n.length; i < iLen; i++) {
              try {
                if (n[i]._DT_Input != document.activeElement) {
                  $(n[i]._DT_Input).val(sInput);
                }
              } catch (e) {
                $(n[i]._DT_Input).val(sInput);
              }
            }
          }
        } else {
          $.extend(oSettings.aoPreSearchCols[iColumn], {
            'sSearch': sInput + '',
            'bRegex': bRegex,
            'bSmart': bSmart,
            'bCaseInsensitive': bCaseInsensitive
          });
          _fnFilterComplete(oSettings, oSettings.oPreviousSearch, 1);
        }
      };
      this.fnGetData = function (mRow, iCol) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        if (mRow !== undefined) {
          var iRow = mRow;
          if (typeof mRow === 'object') {
            var sNode = mRow.nodeName.toLowerCase();
            if (sNode === 'tr') {
              iRow = _fnNodeToDataIndex(oSettings, mRow);
            } else if (sNode === 'td') {
              iRow = _fnNodeToDataIndex(oSettings, mRow.parentNode);
              iCol = _fnNodeToColumnIndex(oSettings, iRow, mRow);
            }
          }
          if (iCol !== undefined) {
            return _fnGetCellData(oSettings, iRow, iCol, '');
          }
          return oSettings.aoData[iRow] !== undefined ? oSettings.aoData[iRow]._aData : null;
        }
        return _fnGetDataMaster(oSettings);
      };
      this.fnGetNodes = function (iRow) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        if (iRow !== undefined) {
          return oSettings.aoData[iRow] !== undefined ? oSettings.aoData[iRow].nTr : null;
        }
        return _fnGetTrNodes(oSettings);
      };
      this.fnGetPosition = function (nNode) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        var sNodeName = nNode.nodeName.toUpperCase();
        if (sNodeName == 'TR') {
          return _fnNodeToDataIndex(oSettings, nNode);
        } else if (sNodeName == 'TD' || sNodeName == 'TH') {
          var iDataIndex = _fnNodeToDataIndex(oSettings, nNode.parentNode);
          var iColumnIndex = _fnNodeToColumnIndex(oSettings, iDataIndex, nNode);
          return [
            iDataIndex,
            _fnColumnIndexToVisible(oSettings, iColumnIndex),
            iColumnIndex
          ];
        }
        return null;
      };
      this.fnIsOpen = function (nTr) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        var aoOpenRows = oSettings.aoOpenRows;
        for (var i = 0; i < oSettings.aoOpenRows.length; i++) {
          if (oSettings.aoOpenRows[i].nParent == nTr) {
            return true;
          }
        }
        return false;
      };
      this.fnOpen = function (nTr, mHtml, sClass) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        var nTableRows = _fnGetTrNodes(oSettings);
        if ($.inArray(nTr, nTableRows) === -1) {
          return;
        }
        this.fnClose(nTr);
        var nNewRow = document.createElement('tr');
        var nNewCell = document.createElement('td');
        nNewRow.appendChild(nNewCell);
        nNewCell.className = sClass;
        nNewCell.colSpan = _fnVisbleColumns(oSettings);
        if (typeof mHtml === 'string') {
          nNewCell.innerHTML = mHtml;
        } else {
          $(nNewCell).html(mHtml);
        }
        var nTrs = $('tr', oSettings.nTBody);
        if ($.inArray(nTr, nTrs) != -1) {
          $(nNewRow).insertAfter(nTr);
        }
        oSettings.aoOpenRows.push({
          'nTr': nNewRow,
          'nParent': nTr
        });
        return nNewRow;
      };
      this.fnPageChange = function (mAction, bRedraw) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        _fnPageChange(oSettings, mAction);
        _fnCalculateEnd(oSettings);
        if (bRedraw === undefined || bRedraw) {
          _fnDraw(oSettings);
        }
      };
      this.fnSetColumnVis = function (iCol, bShow, bRedraw) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        var i, iLen;
        var aoColumns = oSettings.aoColumns;
        var aoData = oSettings.aoData;
        var nTd, bAppend, iBefore;
        if (aoColumns[iCol].bVisible == bShow) {
          return;
        }
        if (bShow) {
          var iInsert = 0;
          for (i = 0; i < iCol; i++) {
            if (aoColumns[i].bVisible) {
              iInsert++;
            }
          }
          bAppend = iInsert >= _fnVisbleColumns(oSettings);
          if (!bAppend) {
            for (i = iCol; i < aoColumns.length; i++) {
              if (aoColumns[i].bVisible) {
                iBefore = i;
                break;
              }
            }
          }
          for (i = 0, iLen = aoData.length; i < iLen; i++) {
            if (aoData[i].nTr !== null) {
              if (bAppend) {
                aoData[i].nTr.appendChild(aoData[i]._anHidden[iCol]);
              } else {
                aoData[i].nTr.insertBefore(aoData[i]._anHidden[iCol], _fnGetTdNodes(oSettings, i)[iBefore]);
              }
            }
          }
        } else {
          for (i = 0, iLen = aoData.length; i < iLen; i++) {
            if (aoData[i].nTr !== null) {
              nTd = _fnGetTdNodes(oSettings, i)[iCol];
              aoData[i]._anHidden[iCol] = nTd;
              nTd.parentNode.removeChild(nTd);
            }
          }
        }
        aoColumns[iCol].bVisible = bShow;
        _fnDrawHead(oSettings, oSettings.aoHeader);
        if (oSettings.nTFoot) {
          _fnDrawHead(oSettings, oSettings.aoFooter);
        }
        for (i = 0, iLen = oSettings.aoOpenRows.length; i < iLen; i++) {
          oSettings.aoOpenRows[i].nTr.colSpan = _fnVisbleColumns(oSettings);
        }
        if (bRedraw === undefined || bRedraw) {
          _fnAdjustColumnSizing(oSettings);
          _fnDraw(oSettings);
        }
        _fnSaveState(oSettings);
      };
      this.fnSettings = function () {
        return _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
      };
      this.fnSort = function (aaSort) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        oSettings.aaSorting = aaSort;
        _fnSort(oSettings);
      };
      this.fnSortListener = function (nNode, iColumn, fnCallback) {
        _fnSortAttachListener(_fnSettingsFromNode(this[DataTable.ext.iApiIndex]), nNode, iColumn, fnCallback);
      };
      this.fnUpdate = function (mData, mRow, iColumn, bRedraw, bAction) {
        var oSettings = _fnSettingsFromNode(this[DataTable.ext.iApiIndex]);
        var i, iLen, sDisplay;
        var iRow = typeof mRow === 'object' ? _fnNodeToDataIndex(oSettings, mRow) : mRow;
        if ($.isArray(mData) && iColumn === undefined) {
          oSettings.aoData[iRow]._aData = mData.slice();
          for (i = 0; i < oSettings.aoColumns.length; i++) {
            this.fnUpdate(_fnGetCellData(oSettings, iRow, i), iRow, i, false, false);
          }
        } else if ($.isPlainObject(mData) && iColumn === undefined) {
          oSettings.aoData[iRow]._aData = $.extend(true, {}, mData);
          for (i = 0; i < oSettings.aoColumns.length; i++) {
            this.fnUpdate(_fnGetCellData(oSettings, iRow, i), iRow, i, false, false);
          }
        } else {
          _fnSetCellData(oSettings, iRow, iColumn, mData);
          sDisplay = _fnGetCellData(oSettings, iRow, iColumn, 'display');
          var oCol = oSettings.aoColumns[iColumn];
          if (oCol.fnRender !== null) {
            sDisplay = _fnRender(oSettings, iRow, iColumn);
            if (oCol.bUseRendered) {
              _fnSetCellData(oSettings, iRow, iColumn, sDisplay);
            }
          }
          if (oSettings.aoData[iRow].nTr !== null) {
            _fnGetTdNodes(oSettings, iRow)[iColumn].innerHTML = sDisplay;
          }
        }
        var iDisplayIndex = $.inArray(iRow, oSettings.aiDisplay);
        oSettings.asDataSearch[iDisplayIndex] = _fnBuildSearchRow(oSettings, _fnGetRowData(oSettings, iRow, 'filter', _fnGetColumns(oSettings, 'bSearchable')));
        if (bAction === undefined || bAction) {
          _fnAdjustColumnSizing(oSettings);
        }
        if (bRedraw === undefined || bRedraw) {
          _fnReDraw(oSettings);
        }
        return 0;
      };
      this.fnVersionCheck = DataTable.ext.fnVersionCheck;
      function _fnExternApiFunc(sFunc) {
        return function () {
          var aArgs = [_fnSettingsFromNode(this[DataTable.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));
          return DataTable.ext.oApi[sFunc].apply(this, aArgs);
        };
      }
      this.oApi = {
        '_fnExternApiFunc': _fnExternApiFunc,
        '_fnInitialise': _fnInitialise,
        '_fnInitComplete': _fnInitComplete,
        '_fnLanguageCompat': _fnLanguageCompat,
        '_fnAddColumn': _fnAddColumn,
        '_fnColumnOptions': _fnColumnOptions,
        '_fnAddData': _fnAddData,
        '_fnCreateTr': _fnCreateTr,
        '_fnGatherData': _fnGatherData,
        '_fnBuildHead': _fnBuildHead,
        '_fnDrawHead': _fnDrawHead,
        '_fnDraw': _fnDraw,
        '_fnReDraw': _fnReDraw,
        '_fnAjaxUpdate': _fnAjaxUpdate,
        '_fnAjaxParameters': _fnAjaxParameters,
        '_fnAjaxUpdateDraw': _fnAjaxUpdateDraw,
        '_fnServerParams': _fnServerParams,
        '_fnAddOptionsHtml': _fnAddOptionsHtml,
        '_fnFeatureHtmlTable': _fnFeatureHtmlTable,
        '_fnScrollDraw': _fnScrollDraw,
        '_fnAdjustColumnSizing': _fnAdjustColumnSizing,
        '_fnFeatureHtmlFilter': _fnFeatureHtmlFilter,
        '_fnFilterComplete': _fnFilterComplete,
        '_fnFilterCustom': _fnFilterCustom,
        '_fnFilterColumn': _fnFilterColumn,
        '_fnFilter': _fnFilter,
        '_fnBuildSearchArray': _fnBuildSearchArray,
        '_fnBuildSearchRow': _fnBuildSearchRow,
        '_fnFilterCreateSearch': _fnFilterCreateSearch,
        '_fnDataToSearch': _fnDataToSearch,
        '_fnSort': _fnSort,
        '_fnSortAttachListener': _fnSortAttachListener,
        '_fnSortingClasses': _fnSortingClasses,
        '_fnFeatureHtmlPaginate': _fnFeatureHtmlPaginate,
        '_fnPageChange': _fnPageChange,
        '_fnFeatureHtmlInfo': _fnFeatureHtmlInfo,
        '_fnUpdateInfo': _fnUpdateInfo,
        '_fnFeatureHtmlLength': _fnFeatureHtmlLength,
        '_fnFeatureHtmlProcessing': _fnFeatureHtmlProcessing,
        '_fnProcessingDisplay': _fnProcessingDisplay,
        '_fnVisibleToColumnIndex': _fnVisibleToColumnIndex,
        '_fnColumnIndexToVisible': _fnColumnIndexToVisible,
        '_fnNodeToDataIndex': _fnNodeToDataIndex,
        '_fnVisbleColumns': _fnVisbleColumns,
        '_fnCalculateEnd': _fnCalculateEnd,
        '_fnConvertToWidth': _fnConvertToWidth,
        '_fnCalculateColumnWidths': _fnCalculateColumnWidths,
        '_fnScrollingWidthAdjust': _fnScrollingWidthAdjust,
        '_fnGetWidestNode': _fnGetWidestNode,
        '_fnGetMaxLenString': _fnGetMaxLenString,
        '_fnStringToCss': _fnStringToCss,
        '_fnDetectType': _fnDetectType,
        '_fnSettingsFromNode': _fnSettingsFromNode,
        '_fnGetDataMaster': _fnGetDataMaster,
        '_fnGetTrNodes': _fnGetTrNodes,
        '_fnGetTdNodes': _fnGetTdNodes,
        '_fnEscapeRegex': _fnEscapeRegex,
        '_fnDeleteIndex': _fnDeleteIndex,
        '_fnReOrderIndex': _fnReOrderIndex,
        '_fnColumnOrdering': _fnColumnOrdering,
        '_fnLog': _fnLog,
        '_fnClearTable': _fnClearTable,
        '_fnSaveState': _fnSaveState,
        '_fnLoadState': _fnLoadState,
        '_fnCreateCookie': _fnCreateCookie,
        '_fnReadCookie': _fnReadCookie,
        '_fnDetectHeader': _fnDetectHeader,
        '_fnGetUniqueThs': _fnGetUniqueThs,
        '_fnScrollBarWidth': _fnScrollBarWidth,
        '_fnApplyToChildren': _fnApplyToChildren,
        '_fnMap': _fnMap,
        '_fnGetRowData': _fnGetRowData,
        '_fnGetCellData': _fnGetCellData,
        '_fnSetCellData': _fnSetCellData,
        '_fnGetObjectDataFn': _fnGetObjectDataFn,
        '_fnSetObjectDataFn': _fnSetObjectDataFn,
        '_fnApplyColumnDefs': _fnApplyColumnDefs,
        '_fnBindAction': _fnBindAction,
        '_fnExtend': _fnExtend,
        '_fnCallbackReg': _fnCallbackReg,
        '_fnCallbackFire': _fnCallbackFire,
        '_fnJsonString': _fnJsonString,
        '_fnRender': _fnRender,
        '_fnNodeToColumnIndex': _fnNodeToColumnIndex,
        '_fnInfoMacros': _fnInfoMacros,
        '_fnBrowserDetect': _fnBrowserDetect,
        '_fnGetColumns': _fnGetColumns
      };
      $.extend(DataTable.ext.oApi, this.oApi);
      for (var sFunc in DataTable.ext.oApi) {
        if (sFunc) {
          this[sFunc] = _fnExternApiFunc(sFunc);
        }
      }
      var _that = this;
      this.each(function () {
        var i = 0, iLen, j, jLen, k, kLen;
        var sId = this.getAttribute('id');
        var bInitHandedOff = false;
        var bUsePassedData = false;
        if (this.nodeName.toLowerCase() != 'table') {
          _fnLog(null, 0, 'Attempted to initialise DataTables on a node which is not a ' + 'table: ' + this.nodeName);
          return;
        }
        for (i = 0, iLen = DataTable.settings.length; i < iLen; i++) {
          if (DataTable.settings[i].nTable == this) {
            if (oInit === undefined || oInit.bRetrieve) {
              return DataTable.settings[i].oInstance;
            } else if (oInit.bDestroy) {
              DataTable.settings[i].oInstance.fnDestroy();
              break;
            } else {
              _fnLog(DataTable.settings[i], 0, 'Cannot reinitialise DataTable.\n\n' + 'To retrieve the DataTables object for this table, pass no arguments or see ' + 'the docs for bRetrieve and bDestroy');
              return;
            }
          }
          if (DataTable.settings[i].sTableId == this.id) {
            DataTable.settings.splice(i, 1);
            break;
          }
        }
        if (sId === null || sId === '') {
          sId = 'DataTables_Table_' + DataTable.ext._oExternConfig.iNextUnique++;
          this.id = sId;
        }
        var oSettings = $.extend(true, {}, DataTable.models.oSettings, {
            'nTable': this,
            'oApi': _that.oApi,
            'oInit': oInit,
            'sDestroyWidth': $(this).width(),
            'sInstance': sId,
            'sTableId': sId
          });
        DataTable.settings.push(oSettings);
        oSettings.oInstance = _that.length === 1 ? _that : $(this).dataTable();
        if (!oInit) {
          oInit = {};
        }
        if (oInit.oLanguage) {
          _fnLanguageCompat(oInit.oLanguage);
        }
        oInit = _fnExtend($.extend(true, {}, DataTable.defaults), oInit);
        _fnMap(oSettings.oFeatures, oInit, 'bPaginate');
        _fnMap(oSettings.oFeatures, oInit, 'bLengthChange');
        _fnMap(oSettings.oFeatures, oInit, 'bFilter');
        _fnMap(oSettings.oFeatures, oInit, 'bSort');
        _fnMap(oSettings.oFeatures, oInit, 'bInfo');
        _fnMap(oSettings.oFeatures, oInit, 'bProcessing');
        _fnMap(oSettings.oFeatures, oInit, 'bAutoWidth');
        _fnMap(oSettings.oFeatures, oInit, 'bSortClasses');
        _fnMap(oSettings.oFeatures, oInit, 'bServerSide');
        _fnMap(oSettings.oFeatures, oInit, 'bDeferRender');
        _fnMap(oSettings.oScroll, oInit, 'sScrollX', 'sX');
        _fnMap(oSettings.oScroll, oInit, 'sScrollXInner', 'sXInner');
        _fnMap(oSettings.oScroll, oInit, 'sScrollY', 'sY');
        _fnMap(oSettings.oScroll, oInit, 'bScrollCollapse', 'bCollapse');
        _fnMap(oSettings.oScroll, oInit, 'bScrollInfinite', 'bInfinite');
        _fnMap(oSettings.oScroll, oInit, 'iScrollLoadGap', 'iLoadGap');
        _fnMap(oSettings.oScroll, oInit, 'bScrollAutoCss', 'bAutoCss');
        _fnMap(oSettings, oInit, 'asStripeClasses');
        _fnMap(oSettings, oInit, 'asStripClasses', 'asStripeClasses');
        _fnMap(oSettings, oInit, 'fnServerData');
        _fnMap(oSettings, oInit, 'fnFormatNumber');
        _fnMap(oSettings, oInit, 'sServerMethod');
        _fnMap(oSettings, oInit, 'aaSorting');
        _fnMap(oSettings, oInit, 'aaSortingFixed');
        _fnMap(oSettings, oInit, 'aLengthMenu');
        _fnMap(oSettings, oInit, 'sPaginationType');
        _fnMap(oSettings, oInit, 'sAjaxSource');
        _fnMap(oSettings, oInit, 'sAjaxDataProp');
        _fnMap(oSettings, oInit, 'iCookieDuration');
        _fnMap(oSettings, oInit, 'sCookiePrefix');
        _fnMap(oSettings, oInit, 'sDom');
        _fnMap(oSettings, oInit, 'bSortCellsTop');
        _fnMap(oSettings, oInit, 'iTabIndex');
        _fnMap(oSettings, oInit, 'oSearch', 'oPreviousSearch');
        _fnMap(oSettings, oInit, 'aoSearchCols', 'aoPreSearchCols');
        _fnMap(oSettings, oInit, 'iDisplayLength', '_iDisplayLength');
        _fnMap(oSettings, oInit, 'bJQueryUI', 'bJUI');
        _fnMap(oSettings, oInit, 'fnCookieCallback');
        _fnMap(oSettings, oInit, 'fnStateLoad');
        _fnMap(oSettings, oInit, 'fnStateSave');
        _fnMap(oSettings.oLanguage, oInit, 'fnInfoCallback');
        _fnCallbackReg(oSettings, 'aoDrawCallback', oInit.fnDrawCallback, 'user');
        _fnCallbackReg(oSettings, 'aoServerParams', oInit.fnServerParams, 'user');
        _fnCallbackReg(oSettings, 'aoStateSaveParams', oInit.fnStateSaveParams, 'user');
        _fnCallbackReg(oSettings, 'aoStateLoadParams', oInit.fnStateLoadParams, 'user');
        _fnCallbackReg(oSettings, 'aoStateLoaded', oInit.fnStateLoaded, 'user');
        _fnCallbackReg(oSettings, 'aoRowCallback', oInit.fnRowCallback, 'user');
        _fnCallbackReg(oSettings, 'aoRowCreatedCallback', oInit.fnCreatedRow, 'user');
        _fnCallbackReg(oSettings, 'aoHeaderCallback', oInit.fnHeaderCallback, 'user');
        _fnCallbackReg(oSettings, 'aoFooterCallback', oInit.fnFooterCallback, 'user');
        _fnCallbackReg(oSettings, 'aoInitComplete', oInit.fnInitComplete, 'user');
        _fnCallbackReg(oSettings, 'aoPreDrawCallback', oInit.fnPreDrawCallback, 'user');
        if (oSettings.oFeatures.bServerSide && oSettings.oFeatures.bSort && oSettings.oFeatures.bSortClasses) {
          _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSortingClasses, 'server_side_sort_classes');
        } else if (oSettings.oFeatures.bDeferRender) {
          _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSortingClasses, 'defer_sort_classes');
        }
        if (oInit.bJQueryUI) {
          $.extend(oSettings.oClasses, DataTable.ext.oJUIClasses);
          if (oInit.sDom === DataTable.defaults.sDom && DataTable.defaults.sDom === 'lfrtip') {
            oSettings.sDom = '<"H"lfr>t<"F"ip>';
          }
        } else {
          $.extend(oSettings.oClasses, DataTable.ext.oStdClasses);
        }
        $(this).addClass(oSettings.oClasses.sTable);
        if (oSettings.oScroll.sX !== '' || oSettings.oScroll.sY !== '') {
          oSettings.oScroll.iBarWidth = _fnScrollBarWidth();
        }
        if (oSettings.iInitDisplayStart === undefined) {
          oSettings.iInitDisplayStart = oInit.iDisplayStart;
          oSettings._iDisplayStart = oInit.iDisplayStart;
        }
        if (oInit.bStateSave) {
          oSettings.oFeatures.bStateSave = true;
          _fnLoadState(oSettings, oInit);
          _fnCallbackReg(oSettings, 'aoDrawCallback', _fnSaveState, 'state_save');
        }
        if (oInit.iDeferLoading !== null) {
          oSettings.bDeferLoading = true;
          var tmp = $.isArray(oInit.iDeferLoading);
          oSettings._iRecordsDisplay = tmp ? oInit.iDeferLoading[0] : oInit.iDeferLoading;
          oSettings._iRecordsTotal = tmp ? oInit.iDeferLoading[1] : oInit.iDeferLoading;
        }
        if (oInit.aaData !== null) {
          bUsePassedData = true;
        }
        if (oInit.oLanguage.sUrl !== '') {
          oSettings.oLanguage.sUrl = oInit.oLanguage.sUrl;
          $.getJSON(oSettings.oLanguage.sUrl, null, function (json) {
            _fnLanguageCompat(json);
            $.extend(true, oSettings.oLanguage, oInit.oLanguage, json);
            _fnInitialise(oSettings);
          });
          bInitHandedOff = true;
        } else {
          $.extend(true, oSettings.oLanguage, oInit.oLanguage);
        }
        if (oInit.asStripeClasses === null) {
          oSettings.asStripeClasses = [
            oSettings.oClasses.sStripeOdd,
            oSettings.oClasses.sStripeEven
          ];
        }
        iLen = oSettings.asStripeClasses.length;
        oSettings.asDestroyStripes = [];
        if (iLen) {
          var bStripeRemove = false;
          var anRows = $(this).children('tbody').children('tr:lt(' + iLen + ')');
          for (i = 0; i < iLen; i++) {
            if (anRows.hasClass(oSettings.asStripeClasses[i])) {
              bStripeRemove = true;
              oSettings.asDestroyStripes.push(oSettings.asStripeClasses[i]);
            }
          }
          if (bStripeRemove) {
            anRows.removeClass(oSettings.asStripeClasses.join(' '));
          }
        }
        var anThs = [];
        var aoColumnsInit;
        var nThead = this.getElementsByTagName('thead');
        if (nThead.length !== 0) {
          _fnDetectHeader(oSettings.aoHeader, nThead[0]);
          anThs = _fnGetUniqueThs(oSettings);
        }
        if (oInit.aoColumns === null) {
          aoColumnsInit = [];
          for (i = 0, iLen = anThs.length; i < iLen; i++) {
            aoColumnsInit.push(null);
          }
        } else {
          aoColumnsInit = oInit.aoColumns;
        }
        for (i = 0, iLen = aoColumnsInit.length; i < iLen; i++) {
          if (oInit.saved_aoColumns !== undefined && oInit.saved_aoColumns.length == iLen) {
            if (aoColumnsInit[i] === null) {
              aoColumnsInit[i] = {};
            }
            aoColumnsInit[i].bVisible = oInit.saved_aoColumns[i].bVisible;
          }
          _fnAddColumn(oSettings, anThs ? anThs[i] : null);
        }
        _fnApplyColumnDefs(oSettings, oInit.aoColumnDefs, aoColumnsInit, function (iCol, oDef) {
          _fnColumnOptions(oSettings, iCol, oDef);
        });
        for (i = 0, iLen = oSettings.aaSorting.length; i < iLen; i++) {
          if (oSettings.aaSorting[i][0] >= oSettings.aoColumns.length) {
            oSettings.aaSorting[i][0] = 0;
          }
          var oColumn = oSettings.aoColumns[oSettings.aaSorting[i][0]];
          if (oSettings.aaSorting[i][2] === undefined) {
            oSettings.aaSorting[i][2] = 0;
          }
          if (oInit.aaSorting === undefined && oSettings.saved_aaSorting === undefined) {
            oSettings.aaSorting[i][1] = oColumn.asSorting[0];
          }
          for (j = 0, jLen = oColumn.asSorting.length; j < jLen; j++) {
            if (oSettings.aaSorting[i][1] == oColumn.asSorting[j]) {
              oSettings.aaSorting[i][2] = j;
              break;
            }
          }
        }
        _fnSortingClasses(oSettings);
        _fnBrowserDetect(oSettings);
        var captions = $(this).children('caption').each(function () {
            this._captionSide = $(this).css('caption-side');
          });
        var thead = $(this).children('thead');
        if (thead.length === 0) {
          thead = [document.createElement('thead')];
          this.appendChild(thead[0]);
        }
        oSettings.nTHead = thead[0];
        var tbody = $(this).children('tbody');
        if (tbody.length === 0) {
          tbody = [document.createElement('tbody')];
          this.appendChild(tbody[0]);
        }
        oSettings.nTBody = tbody[0];
        oSettings.nTBody.setAttribute('role', 'alert');
        oSettings.nTBody.setAttribute('aria-live', 'polite');
        oSettings.nTBody.setAttribute('aria-relevant', 'all');
        var tfoot = $(this).children('tfoot');
        if (tfoot.length === 0 && captions.length > 0 && (oSettings.oScroll.sX !== '' || oSettings.oScroll.sY !== '')) {
          tfoot = [document.createElement('tfoot')];
          this.appendChild(tfoot[0]);
        }
        if (tfoot.length > 0) {
          oSettings.nTFoot = tfoot[0];
          _fnDetectHeader(oSettings.aoFooter, oSettings.nTFoot);
        }
        if (bUsePassedData) {
          for (i = 0; i < oInit.aaData.length; i++) {
            _fnAddData(oSettings, oInit.aaData[i]);
          }
        } else {
          _fnGatherData(oSettings);
        }
        oSettings.aiDisplay = oSettings.aiDisplayMaster.slice();
        oSettings.bInitialised = true;
        if (bInitHandedOff === false) {
          _fnInitialise(oSettings);
        }
      });
      _that = null;
      return this;
    };
    DataTable.fnVersionCheck = function (sVersion) {
      var fnZPad = function (Zpad, count) {
        while (Zpad.length < count) {
          Zpad += '0';
        }
        return Zpad;
      };
      var aThis = DataTable.ext.sVersion.split('.');
      var aThat = sVersion.split('.');
      var sThis = '', sThat = '';
      for (var i = 0, iLen = aThat.length; i < iLen; i++) {
        sThis += fnZPad(aThis[i], 3);
        sThat += fnZPad(aThat[i], 3);
      }
      return parseInt(sThis, 10) >= parseInt(sThat, 10);
    };
    DataTable.fnIsDataTable = function (nTable) {
      var o = DataTable.settings;
      for (var i = 0; i < o.length; i++) {
        if (o[i].nTable === nTable || o[i].nScrollHead === nTable || o[i].nScrollFoot === nTable) {
          return true;
        }
      }
      return false;
    };
    DataTable.fnTables = function (bVisible) {
      var out = [];
      jQuery.each(DataTable.settings, function (i, o) {
        if (!bVisible || bVisible === true && $(o.nTable).is(':visible')) {
          out.push(o.nTable);
        }
      });
      return out;
    };
    DataTable.version = '1.9.4';
    DataTable.settings = [];
    DataTable.models = {};
    DataTable.models.ext = {
      'afnFiltering': [],
      'afnSortData': [],
      'aoFeatures': [],
      'aTypes': [],
      'fnVersionCheck': DataTable.fnVersionCheck,
      'iApiIndex': 0,
      'ofnSearch': {},
      'oApi': {},
      'oStdClasses': {},
      'oJUIClasses': {},
      'oPagination': {},
      'oSort': {},
      'sVersion': DataTable.version,
      'sErrMode': 'alert',
      '_oExternConfig': { 'iNextUnique': 0 }
    };
    DataTable.models.oSearch = {
      'bCaseInsensitive': true,
      'sSearch': '',
      'bRegex': false,
      'bSmart': true
    };
    DataTable.models.oRow = {
      'nTr': null,
      '_aData': [],
      '_aSortData': [],
      '_anHidden': [],
      '_sRowStripe': ''
    };
    DataTable.models.oColumn = {
      'aDataSort': null,
      'asSorting': null,
      'bSearchable': null,
      'bSortable': null,
      'bUseRendered': null,
      'bVisible': null,
      '_bAutoType': true,
      'fnCreatedCell': null,
      'fnGetData': null,
      'fnRender': null,
      'fnSetData': null,
      'mData': null,
      'mRender': null,
      'nTh': null,
      'nTf': null,
      'sClass': null,
      'sContentPadding': null,
      'sDefaultContent': null,
      'sName': null,
      'sSortDataType': 'std',
      'sSortingClass': null,
      'sSortingClassJUI': null,
      'sTitle': null,
      'sType': null,
      'sWidth': null,
      'sWidthOrig': null
    };
    DataTable.defaults = {
      'aaData': null,
      'aaSorting': [[
          0,
          'asc'
        ]],
      'aaSortingFixed': null,
      'aLengthMenu': [
        10,
        25,
        50,
        100
      ],
      'aoColumns': null,
      'aoColumnDefs': null,
      'aoSearchCols': [],
      'asStripeClasses': null,
      'bAutoWidth': true,
      'bDeferRender': false,
      'bDestroy': false,
      'bFilter': true,
      'bInfo': true,
      'bJQueryUI': false,
      'bLengthChange': true,
      'bPaginate': true,
      'bProcessing': false,
      'bRetrieve': false,
      'bScrollAutoCss': true,
      'bScrollCollapse': false,
      'bScrollInfinite': false,
      'bServerSide': false,
      'bSort': true,
      'bSortCellsTop': false,
      'bSortClasses': true,
      'bStateSave': false,
      'fnCookieCallback': null,
      'fnCreatedRow': null,
      'fnDrawCallback': null,
      'fnFooterCallback': null,
      'fnFormatNumber': function (iIn) {
        if (iIn < 1000) {
          return iIn;
        }
        var s = iIn + '', a = s.split(''), out = '', iLen = s.length;
        for (var i = 0; i < iLen; i++) {
          if (i % 3 === 0 && i !== 0) {
            out = this.oLanguage.sInfoThousands + out;
          }
          out = a[iLen - i - 1] + out;
        }
        return out;
      },
      'fnHeaderCallback': null,
      'fnInfoCallback': null,
      'fnInitComplete': null,
      'fnPreDrawCallback': null,
      'fnRowCallback': null,
      'fnServerData': function (sUrl, aoData, fnCallback, oSettings) {
        oSettings.jqXHR = $.ajax({
          'url': sUrl,
          'data': aoData,
          'success': function (json) {
            if (json.sError) {
              oSettings.oApi._fnLog(oSettings, 0, json.sError);
            }
            $(oSettings.oInstance).trigger('xhr', [
              oSettings,
              json
            ]);
            fnCallback(json);
          },
          'dataType': 'json',
          'cache': false,
          'type': oSettings.sServerMethod,
          'error': function (xhr, error, thrown) {
            if (error == 'parsererror') {
              oSettings.oApi._fnLog(oSettings, 0, 'DataTables warning: JSON data from ' + 'server could not be parsed. This is caused by a JSON formatting error.');
            }
          }
        });
      },
      'fnServerParams': null,
      'fnStateLoad': function (oSettings) {
        var sData = this.oApi._fnReadCookie(oSettings.sCookiePrefix + oSettings.sInstance);
        var oData;
        try {
          oData = typeof $.parseJSON === 'function' ? $.parseJSON(sData) : eval('(' + sData + ')');
        } catch (e) {
          oData = null;
        }
        return oData;
      },
      'fnStateLoadParams': null,
      'fnStateLoaded': null,
      'fnStateSave': function (oSettings, oData) {
        this.oApi._fnCreateCookie(oSettings.sCookiePrefix + oSettings.sInstance, this.oApi._fnJsonString(oData), oSettings.iCookieDuration, oSettings.sCookiePrefix, oSettings.fnCookieCallback);
      },
      'fnStateSaveParams': null,
      'iCookieDuration': 7200,
      'iDeferLoading': null,
      'iDisplayLength': 10,
      'iDisplayStart': 0,
      'iScrollLoadGap': 100,
      'iTabIndex': 0,
      'oLanguage': {
        'oAria': {
          'sSortAscending': ': activate to sort column ascending',
          'sSortDescending': ': activate to sort column descending'
        },
        'oPaginate': {
          'sFirst': 'First',
          'sLast': 'Last',
          'sNext': 'Next',
          'sPrevious': 'Previous'
        },
        'sEmptyTable': 'No data available in table',
        'sInfo': 'Showing _START_ to _END_ of _TOTAL_ entries',
        'sInfoEmpty': 'Showing 0 to 0 of 0 entries',
        'sInfoFiltered': '(filtered from _MAX_ total entries)',
        'sInfoPostFix': '',
        'sInfoThousands': ',',
        'sLengthMenu': 'Show _MENU_ entries',
        'sLoadingRecords': 'Loading...',
        'sProcessing': 'Processing...',
        'sSearch': 'Search:',
        'sUrl': '',
        'sZeroRecords': 'No matching records found'
      },
      'oSearch': $.extend({}, DataTable.models.oSearch),
      'sAjaxDataProp': 'aaData',
      'sAjaxSource': null,
      'sCookiePrefix': 'SpryMedia_DataTables_',
      'sDom': 'lfrtip',
      'sPaginationType': 'two_button',
      'sScrollX': '',
      'sScrollXInner': '',
      'sScrollY': '',
      'sServerMethod': 'GET'
    };
    DataTable.defaults.columns = {
      'aDataSort': null,
      'asSorting': [
        'asc',
        'desc'
      ],
      'bSearchable': true,
      'bSortable': true,
      'bUseRendered': true,
      'bVisible': true,
      'fnCreatedCell': null,
      'fnRender': null,
      'iDataSort': -1,
      'mData': null,
      'mRender': null,
      'sCellType': 'td',
      'sClass': '',
      'sContentPadding': '',
      'sDefaultContent': null,
      'sName': '',
      'sSortDataType': 'std',
      'sTitle': null,
      'sType': null,
      'sWidth': null
    };
    DataTable.models.oSettings = {
      'oFeatures': {
        'bAutoWidth': null,
        'bDeferRender': null,
        'bFilter': null,
        'bInfo': null,
        'bLengthChange': null,
        'bPaginate': null,
        'bProcessing': null,
        'bServerSide': null,
        'bSort': null,
        'bSortClasses': null,
        'bStateSave': null
      },
      'oScroll': {
        'bAutoCss': null,
        'bCollapse': null,
        'bInfinite': null,
        'iBarWidth': 0,
        'iLoadGap': null,
        'sX': null,
        'sXInner': null,
        'sY': null
      },
      'oLanguage': { 'fnInfoCallback': null },
      'oBrowser': { 'bScrollOversize': false },
      'aanFeatures': [],
      'aoData': [],
      'aiDisplay': [],
      'aiDisplayMaster': [],
      'aoColumns': [],
      'aoHeader': [],
      'aoFooter': [],
      'asDataSearch': [],
      'oPreviousSearch': {},
      'aoPreSearchCols': [],
      'aaSorting': null,
      'aaSortingFixed': null,
      'asStripeClasses': null,
      'asDestroyStripes': [],
      'sDestroyWidth': 0,
      'aoRowCallback': [],
      'aoHeaderCallback': [],
      'aoFooterCallback': [],
      'aoDrawCallback': [],
      'aoRowCreatedCallback': [],
      'aoPreDrawCallback': [],
      'aoInitComplete': [],
      'aoStateSaveParams': [],
      'aoStateLoadParams': [],
      'aoStateLoaded': [],
      'sTableId': '',
      'nTable': null,
      'nTHead': null,
      'nTFoot': null,
      'nTBody': null,
      'nTableWrapper': null,
      'bDeferLoading': false,
      'bInitialised': false,
      'aoOpenRows': [],
      'sDom': null,
      'sPaginationType': 'two_button',
      'iCookieDuration': 0,
      'sCookiePrefix': '',
      'fnCookieCallback': null,
      'aoStateSave': [],
      'aoStateLoad': [],
      'oLoadedState': null,
      'sAjaxSource': null,
      'sAjaxDataProp': null,
      'bAjaxDataGet': true,
      'jqXHR': null,
      'fnServerData': null,
      'aoServerParams': [],
      'sServerMethod': null,
      'fnFormatNumber': null,
      'aLengthMenu': null,
      'iDraw': 0,
      'bDrawing': false,
      'iDrawError': -1,
      '_iDisplayLength': 10,
      '_iDisplayStart': 0,
      '_iDisplayEnd': 10,
      '_iRecordsTotal': 0,
      '_iRecordsDisplay': 0,
      'bJUI': null,
      'oClasses': {},
      'bFiltered': false,
      'bSorted': false,
      'bSortCellsTop': null,
      'oInit': null,
      'aoDestroyCallback': [],
      'fnRecordsTotal': function () {
        if (this.oFeatures.bServerSide) {
          return parseInt(this._iRecordsTotal, 10);
        } else {
          return this.aiDisplayMaster.length;
        }
      },
      'fnRecordsDisplay': function () {
        if (this.oFeatures.bServerSide) {
          return parseInt(this._iRecordsDisplay, 10);
        } else {
          return this.aiDisplay.length;
        }
      },
      'fnDisplayEnd': function () {
        if (this.oFeatures.bServerSide) {
          if (this.oFeatures.bPaginate === false || this._iDisplayLength == -1) {
            return this._iDisplayStart + this.aiDisplay.length;
          } else {
            return Math.min(this._iDisplayStart + this._iDisplayLength, this._iRecordsDisplay);
          }
        } else {
          return this._iDisplayEnd;
        }
      },
      'oInstance': null,
      'sInstance': null,
      'iTabIndex': 0,
      'nScrollHead': null,
      'nScrollFoot': null
    };
    DataTable.ext = $.extend(true, {}, DataTable.models.ext);
    $.extend(DataTable.ext.oStdClasses, {
      'sTable': 'dataTable',
      'sPagePrevEnabled': 'paginate_enabled_previous',
      'sPagePrevDisabled': 'paginate_disabled_previous',
      'sPageNextEnabled': 'paginate_enabled_next',
      'sPageNextDisabled': 'paginate_disabled_next',
      'sPageJUINext': '',
      'sPageJUIPrev': '',
      'sPageButton': 'paginate_button',
      'sPageButtonActive': 'paginate_active',
      'sPageButtonStaticDisabled': 'paginate_button paginate_button_disabled',
      'sPageFirst': 'first',
      'sPagePrevious': 'previous',
      'sPageNext': 'next',
      'sPageLast': 'last',
      'sStripeOdd': 'odd',
      'sStripeEven': 'even',
      'sRowEmpty': 'dataTables_empty',
      'sWrapper': 'dataTables_wrapper',
      'sFilter': 'dataTables_filter',
      'sInfo': 'dataTables_info',
      'sPaging': 'dataTables_paginate paging_',
      'sLength': 'dataTables_length',
      'sProcessing': 'dataTables_processing',
      'sSortAsc': 'sorting_asc',
      'sSortDesc': 'sorting_desc',
      'sSortable': 'sorting',
      'sSortableAsc': 'sorting_asc_disabled',
      'sSortableDesc': 'sorting_desc_disabled',
      'sSortableNone': 'sorting_disabled',
      'sSortColumn': 'sorting_',
      'sSortJUIAsc': '',
      'sSortJUIDesc': '',
      'sSortJUI': '',
      'sSortJUIAscAllowed': '',
      'sSortJUIDescAllowed': '',
      'sSortJUIWrapper': '',
      'sSortIcon': '',
      'sScrollWrapper': 'dataTables_scroll',
      'sScrollHead': 'dataTables_scrollHead',
      'sScrollHeadInner': 'dataTables_scrollHeadInner',
      'sScrollBody': 'dataTables_scrollBody',
      'sScrollFoot': 'dataTables_scrollFoot',
      'sScrollFootInner': 'dataTables_scrollFootInner',
      'sFooterTH': '',
      'sJUIHeader': '',
      'sJUIFooter': ''
    });
    $.extend(DataTable.ext.oJUIClasses, DataTable.ext.oStdClasses, {
      'sPagePrevEnabled': 'fg-button ui-button ui-state-default ui-corner-left',
      'sPagePrevDisabled': 'fg-button ui-button ui-state-default ui-corner-left ui-state-disabled',
      'sPageNextEnabled': 'fg-button ui-button ui-state-default ui-corner-right',
      'sPageNextDisabled': 'fg-button ui-button ui-state-default ui-corner-right ui-state-disabled',
      'sPageJUINext': 'ui-icon ui-icon-circle-arrow-e',
      'sPageJUIPrev': 'ui-icon ui-icon-circle-arrow-w',
      'sPageButton': 'fg-button ui-button ui-state-default',
      'sPageButtonActive': 'fg-button ui-button ui-state-default ui-state-disabled',
      'sPageButtonStaticDisabled': 'fg-button ui-button ui-state-default ui-state-disabled',
      'sPageFirst': 'first ui-corner-tl ui-corner-bl',
      'sPageLast': 'last ui-corner-tr ui-corner-br',
      'sPaging': 'dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ' + 'ui-buttonset-multi paging_',
      'sSortAsc': 'ui-state-default',
      'sSortDesc': 'ui-state-default',
      'sSortable': 'ui-state-default',
      'sSortableAsc': 'ui-state-default',
      'sSortableDesc': 'ui-state-default',
      'sSortableNone': 'ui-state-default',
      'sSortJUIAsc': 'css_right ui-icon ui-icon-triangle-1-n',
      'sSortJUIDesc': 'css_right ui-icon ui-icon-triangle-1-s',
      'sSortJUI': 'css_right ui-icon ui-icon-carat-2-n-s',
      'sSortJUIAscAllowed': 'css_right ui-icon ui-icon-carat-1-n',
      'sSortJUIDescAllowed': 'css_right ui-icon ui-icon-carat-1-s',
      'sSortJUIWrapper': 'DataTables_sort_wrapper',
      'sSortIcon': 'DataTables_sort_icon',
      'sScrollHead': 'dataTables_scrollHead ui-state-default',
      'sScrollFoot': 'dataTables_scrollFoot ui-state-default',
      'sFooterTH': 'ui-state-default',
      'sJUIHeader': 'fg-toolbar ui-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix',
      'sJUIFooter': 'fg-toolbar ui-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix'
    });
    $.extend(DataTable.ext.oPagination, {
      'two_button': {
        'fnInit': function (oSettings, nPaging, fnCallbackDraw) {
          var oLang = oSettings.oLanguage.oPaginate;
          var oClasses = oSettings.oClasses;
          var fnClickHandler = function (e) {
            if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
              fnCallbackDraw(oSettings);
            }
          };
          var sAppend = !oSettings.bJUI ? '<a class="' + oSettings.oClasses.sPagePrevDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button">' + oLang.sPrevious + '</a>' + '<a class="' + oSettings.oClasses.sPageNextDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button">' + oLang.sNext + '</a>' : '<a class="' + oSettings.oClasses.sPagePrevDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button"><span class="' + oSettings.oClasses.sPageJUIPrev + '"></span></a>' + '<a class="' + oSettings.oClasses.sPageNextDisabled + '" tabindex="' + oSettings.iTabIndex + '" role="button"><span class="' + oSettings.oClasses.sPageJUINext + '"></span></a>';
          $(nPaging).append(sAppend);
          var els = $('a', nPaging);
          var nPrevious = els[0], nNext = els[1];
          oSettings.oApi._fnBindAction(nPrevious, { action: 'previous' }, fnClickHandler);
          oSettings.oApi._fnBindAction(nNext, { action: 'next' }, fnClickHandler);
          if (!oSettings.aanFeatures.p) {
            nPaging.id = oSettings.sTableId + '_paginate';
            nPrevious.id = oSettings.sTableId + '_previous';
            nNext.id = oSettings.sTableId + '_next';
            nPrevious.setAttribute('aria-controls', oSettings.sTableId);
            nNext.setAttribute('aria-controls', oSettings.sTableId);
          }
        },
        'fnUpdate': function (oSettings, fnCallbackDraw) {
          if (!oSettings.aanFeatures.p) {
            return;
          }
          var oClasses = oSettings.oClasses;
          var an = oSettings.aanFeatures.p;
          var nNode;
          for (var i = 0, iLen = an.length; i < iLen; i++) {
            nNode = an[i].firstChild;
            if (nNode) {
              nNode.className = oSettings._iDisplayStart === 0 ? oClasses.sPagePrevDisabled : oClasses.sPagePrevEnabled;
              nNode = nNode.nextSibling;
              nNode.className = oSettings.fnDisplayEnd() == oSettings.fnRecordsDisplay() ? oClasses.sPageNextDisabled : oClasses.sPageNextEnabled;
            }
          }
        }
      },
      'iFullNumbersShowPages': 5,
      'full_numbers': {
        'fnInit': function (oSettings, nPaging, fnCallbackDraw) {
          var oLang = oSettings.oLanguage.oPaginate;
          var oClasses = oSettings.oClasses;
          var fnClickHandler = function (e) {
            if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
              fnCallbackDraw(oSettings);
            }
          };
          $(nPaging).append('<a  tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + ' ' + oClasses.sPageFirst + '">' + oLang.sFirst + '</a>' + '<a  tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + ' ' + oClasses.sPagePrevious + '">' + oLang.sPrevious + '</a>' + '<span></span>' + '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + ' ' + oClasses.sPageNext + '">' + oLang.sNext + '</a>' + '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + ' ' + oClasses.sPageLast + '">' + oLang.sLast + '</a>');
          var els = $('a', nPaging);
          var nFirst = els[0], nPrev = els[1], nNext = els[2], nLast = els[3];
          oSettings.oApi._fnBindAction(nFirst, { action: 'first' }, fnClickHandler);
          oSettings.oApi._fnBindAction(nPrev, { action: 'previous' }, fnClickHandler);
          oSettings.oApi._fnBindAction(nNext, { action: 'next' }, fnClickHandler);
          oSettings.oApi._fnBindAction(nLast, { action: 'last' }, fnClickHandler);
          if (!oSettings.aanFeatures.p) {
            nPaging.id = oSettings.sTableId + '_paginate';
            nFirst.id = oSettings.sTableId + '_first';
            nPrev.id = oSettings.sTableId + '_previous';
            nNext.id = oSettings.sTableId + '_next';
            nLast.id = oSettings.sTableId + '_last';
          }
        },
        'fnUpdate': function (oSettings, fnCallbackDraw) {
          if (!oSettings.aanFeatures.p) {
            return;
          }
          var iPageCount = DataTable.ext.oPagination.iFullNumbersShowPages;
          var iPageCountHalf = Math.floor(iPageCount / 2);
          var iPages = Math.ceil(oSettings.fnRecordsDisplay() / oSettings._iDisplayLength);
          var iCurrentPage = Math.ceil(oSettings._iDisplayStart / oSettings._iDisplayLength) + 1;
          var sList = '';
          var iStartButton, iEndButton, i, iLen;
          var oClasses = oSettings.oClasses;
          var anButtons, anStatic, nPaginateList, nNode;
          var an = oSettings.aanFeatures.p;
          var fnBind = function (j) {
            oSettings.oApi._fnBindAction(this, { 'page': j + iStartButton - 1 }, function (e) {
              oSettings.oApi._fnPageChange(oSettings, e.data.page);
              fnCallbackDraw(oSettings);
              e.preventDefault();
            });
          };
          if (oSettings._iDisplayLength === -1) {
            iStartButton = 1;
            iEndButton = 1;
            iCurrentPage = 1;
          } else if (iPages < iPageCount) {
            iStartButton = 1;
            iEndButton = iPages;
          } else if (iCurrentPage <= iPageCountHalf) {
            iStartButton = 1;
            iEndButton = iPageCount;
          } else if (iCurrentPage >= iPages - iPageCountHalf) {
            iStartButton = iPages - iPageCount + 1;
            iEndButton = iPages;
          } else {
            iStartButton = iCurrentPage - Math.ceil(iPageCount / 2) + 1;
            iEndButton = iStartButton + iPageCount - 1;
          }
          for (i = iStartButton; i <= iEndButton; i++) {
            sList += iCurrentPage !== i ? '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButton + '">' + oSettings.fnFormatNumber(i) + '</a>' : '<a tabindex="' + oSettings.iTabIndex + '" class="' + oClasses.sPageButtonActive + '">' + oSettings.fnFormatNumber(i) + '</a>';
          }
          for (i = 0, iLen = an.length; i < iLen; i++) {
            nNode = an[i];
            if (!nNode.hasChildNodes()) {
              continue;
            }
            $('span:eq(0)', nNode).html(sList).children('a').each(fnBind);
            anButtons = nNode.getElementsByTagName('a');
            anStatic = [
              anButtons[0],
              anButtons[1],
              anButtons[anButtons.length - 2],
              anButtons[anButtons.length - 1]
            ];
            $(anStatic).removeClass(oClasses.sPageButton + ' ' + oClasses.sPageButtonActive + ' ' + oClasses.sPageButtonStaticDisabled);
            $([
              anStatic[0],
              anStatic[1]
            ]).addClass(iCurrentPage == 1 ? oClasses.sPageButtonStaticDisabled : oClasses.sPageButton);
            $([
              anStatic[2],
              anStatic[3]
            ]).addClass(iPages === 0 || iCurrentPage === iPages || oSettings._iDisplayLength === -1 ? oClasses.sPageButtonStaticDisabled : oClasses.sPageButton);
          }
        }
      }
    });
    $.extend(DataTable.ext.oSort, {
      'string-pre': function (a) {
        if (typeof a != 'string') {
          a = a !== null && a.toString ? a.toString() : '';
        }
        return a.toLowerCase();
      },
      'string-asc': function (x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      },
      'string-desc': function (x, y) {
        return x < y ? 1 : x > y ? -1 : 0;
      },
      'html-pre': function (a) {
        return a.replace(/<.*?>/g, '').toLowerCase();
      },
      'html-asc': function (x, y) {
        return x < y ? -1 : x > y ? 1 : 0;
      },
      'html-desc': function (x, y) {
        return x < y ? 1 : x > y ? -1 : 0;
      },
      'date-pre': function (a) {
        var x = Date.parse(a);
        if (isNaN(x) || x === '') {
          x = Date.parse('01/01/1970 00:00:00');
        }
        return x;
      },
      'date-asc': function (x, y) {
        return x - y;
      },
      'date-desc': function (x, y) {
        return y - x;
      },
      'numeric-pre': function (a) {
        return a == '-' || a === '' ? 0 : a * 1;
      },
      'numeric-asc': function (x, y) {
        return x - y;
      },
      'numeric-desc': function (x, y) {
        return y - x;
      }
    });
    $.extend(DataTable.ext.aTypes, [
      function (sData) {
        if (typeof sData === 'number') {
          return 'numeric';
        } else if (typeof sData !== 'string') {
          return null;
        }
        var sValidFirstChars = '0123456789-';
        var sValidChars = '0123456789.';
        var Char;
        var bDecimal = false;
        Char = sData.charAt(0);
        if (sValidFirstChars.indexOf(Char) == -1) {
          return null;
        }
        for (var i = 1; i < sData.length; i++) {
          Char = sData.charAt(i);
          if (sValidChars.indexOf(Char) == -1) {
            return null;
          }
          if (Char == '.') {
            if (bDecimal) {
              return null;
            }
            bDecimal = true;
          }
        }
        return 'numeric';
      },
      function (sData) {
        var iParse = Date.parse(sData);
        if (iParse !== null && !isNaN(iParse) || typeof sData === 'string' && sData.length === 0) {
          return 'date';
        }
        return null;
      },
      function (sData) {
        if (typeof sData === 'string' && sData.indexOf('<') != -1 && sData.indexOf('>') != -1) {
          return 'html';
        }
        return null;
      }
    ]);
    $.fn.DataTable = DataTable;
    $.fn.dataTable = DataTable;
    $.fn.dataTableSettings = DataTable.settings;
    $.fn.dataTableExt = DataTable.ext;
  }));
}(window, document));