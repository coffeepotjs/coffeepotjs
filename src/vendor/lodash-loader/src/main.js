define(['module'], function(module) {
  'use strict';

  var lodashMap = getMap();
  var config = module.config();
  var lodashPackageName = config.lodashPackageName || 'lodash';
  var devOptimizedLoad = config.hasOwnProperty('devOptimizedLoad') ? config.devOptimizedLoad : true;
  var overrides = config.overrides || {};

  lodashMap = Object.keys(overrides).reduce(function(map, key) {
    map[key] = overrides[key];
    return map;
  }, lodashMap);

  return {
    load: load
  };

  /**
   * The load function, see requirejs docs
   */
  function load(name, req, onload, config) {

    var modules = name.split(',').map(function(mod) {
      return mod.trim();
    });

    var actualPaths = modules.map(function(key) {
      if (!lodashMap.hasOwnProperty(key)) throw new Error('module ' + key + ' is not part of lodash, according to the map. You can add this to the loader override object in the config if you want.');
      return lodashPackageName + '/' + lodashMap[key];
    });

    //>>excludeStart('build', true)
    //Only load optimzed if not disabled and if not after build, or during optimization
    if (devOptimizedLoad && !config.isBuild) {
      req([lodashPackageName], function(_) {
        onload(_.pick(_, modules)); //use lodash itself to select only the functions we want
      }, onload.error);
      return;
    }
    //>>excludeEnd('build')

    req(actualPaths, function() {
      var loadedModules = [].slice.call(arguments);
      var customLodash = loadedModules.reduce(function(custom, module, index) {
        custom[modules[index]] = module;
        return custom;
      }, {});

      onload(customLodash);
    }, onload.error);
  }

  /**
   * The lodash module map as of 3.10.1-amd
   */
  function getMap() {
    return {
      "chunk": "chunk",
      "compact": "compact",
      "difference": "difference",
      "drop": "drop",
      "dropRight": "dropRight",
      "dropRightWhile": "dropRightWhile",
      "dropWhile": "dropWhile",
      "fill": "fill",
      "findIndex": "findIndex",
      "findLastIndex": "findLastIndex",
      "first": "first",
      "flatten": "flatten",
      "flattenDeep": "flattenDeep",
      "head": "head",
      "indexOf": "indexOf",
      "initial": "initial",
      "intersection": "intersection",
      "last": "last",
      "lastIndexOf": "lastIndexOf",
      "object": "object",
      "pull": "pull",
      "pullAt": "pullAt",
      "remove": "remove",
      "rest": "rest",
      "slice": "slice",
      "sortedIndex": "sortedIndex",
      "sortedLastIndex": "sortedLastIndex",
      "tail": "tail",
      "take": "take",
      "takeRight": "takeRight",
      "takeRightWhile": "takeRightWhile",
      "takeWhile": "takeWhile",
      "union": "union",
      "uniq": "uniq",
      "unique": "unique",
      "uniqBy": "uniqBy",
      "uniqWith": "uniqWith",
      "unzip": "unzip",
      "unzipWith": "unzipWith",
      "without": "without",
      "xor": "xor",
      "zip": "zip",
      "zipObject": "zipObject",
      "zipWith": "zipWith",
      "chain": "chain",
      "commit": "commit",
      "concat": "concat",
      "lodash": "lodash",
      "plant": "plant",
      "reverse": "reverse",
      "run": "run",
      "tap": "tap",
      "thru": "thru",
      "toJSON": "toJSON",
      "toString": "toString",
      "value": "value",
      "valueOf": "valueOf",
      "wrapperChain": "wrapperChain",
      "wrapperCommit": "wrapperCommit",
      "wrapperConcat": "wrapperConcat",
      "wrapperPlant": "wrapperPlant",
      "wrapperReverse": "wrapperReverse",
      "wrapperToString": "wrapperToString",
      "wrapperValue": "wrapperValue",
      "all": "all",
      "any": "any",
      "at": "at",
      "collect": "collect",
      "contains": "contains",
      "countBy": "countBy",
      "detect": "detect",
      "each": "each",
      "eachRight": "eachRight",
      "every": "every",
      "filter": "filter",
      "find": "find",
      "findLast": "findLast",
      "findWhere": "findWhere",
      "foldl": "foldl",
      "foldr": "foldr",
      "forEach": "forEach",
      "forEachRight": "forEachRight",
      "groupBy": "groupBy",
      "include": "include",
      "includes": "includes",
      "indexBy": "indexBy",
      "inject": "inject",
      "invoke": "invoke",
      "map": "map",
      "partition": "partition",
      "pluck": "pluck",
      "reduce": "reduce",
      "reduceRight": "reduceRight",
      "reject": "reject",
      "sample": "sample",
      "select": "select",
      "shuffle": "shuffle",
      "size": "size",
      "some": "some",
      "sortBy": "sortBy",
      "sortByAll": "sortByAll",
      "sortByOrder": "sortByOrder",
      "where": "where",
      "now": "now",
      "after": "after",
      "ary": "ary",
      "backflow": "backflow",
      "before": "before",
      "bind": "bind",
      "bindAll": "bindAll",
      "bindKey": "bindKey",
      "compose": "compose",
      "curry": "curry",
      "curryRight": "curryRight",
      "debounce": "debounce",
      "defer": "defer",
      "delay": "delay",
      "flow": "flow",
      "flowRight": "flowRight",
      "memoize": "memoize",
      "modArgs": "modArgs",
      "negate": "negate",
      "once": "once",
      "partial": "partial",
      "partialRight": "partialRight",
      "rearg": "rearg",
      "restParam": "restParam",
      "spread": "spread",
      "throttle": "throttle",
      "wrap": "wrap",
      "clone": "clone",
      "cloneDeep": "cloneDeep",
      "eq": "eq",
      "gt": "gt",
      "gte": "gte",
      "isArguments": "isArguments",
      "isArray": "isArray",
      "isBoolean": "isBoolean",
      "isDate": "isDate",
      "isElement": "isElement",
      "isEmpty": "isEmpty",
      "isEqual": "isEqual",
      "isError": "isError",
      "isFinite": "isFinite",
      "isFunction": "isFunction",
      "isMatch": "isMatch",
      "isNaN": "isNaN",
      "isNative": "isNative",
      "isNull": "isNull",
      "isNumber": "isNumber",
      "isObject": "isObject",
      "isPlainObject": "isPlainObject",
      "isRegExp": "isRegExp",
      "isString": "isString",
      "isTypedArray": "isTypedArray",
      "isUndefined": "isUndefined",
      "lt": "lt",
      "lte": "lte",
      "toArray": "toArray",
      "toPlainObject": "toPlainObject",
      "add": "add",
      "ceil": "ceil",
      "floor": "floor",
      "max": "max",
      "min": "min",
      "round": "round",
      "sum": "sum",
      "inRange": "inRange",
      "random": "random",
      "assign": "assign",
      "create": "create",
      "defaults": "defaults",
      "defaultsDeep": "defaultsDeep",
      "extend": "extend",
      "findKey": "findKey",
      "findLastKey": "findLastKey",
      "forIn": "forIn",
      "forInRight": "forInRight",
      "forOwn": "forOwn",
      "forOwnRight": "forOwnRight",
      "functions": "functions",
      "get": "get",
      "has": "has",
      "invert": "invert",
      "keys": "keys",
      "keysIn": "keysIn",
      "mapKeys": "mapKeys",
      "mapValues": "mapValues",
      "merge": "merge",
      "methods": "methods",
      "omit": "omit",
      "pairs": "pairs",
      "pick": "pick",
      "result": "result",
      "set": "set",
      "transform": "transform",
      "values": "values",
      "valuesIn": "valuesIn",
      "camelCase": "camelCase",
      "capitalize": "capitalize",
      "deburr": "deburr",
      "endsWith": "endsWith",
      "escape": "escape",
      "escapeRegExp": "escapeRegExp",
      "kebabCase": "kebabCase",
      "pad": "pad",
      "padLeft": "padLeft",
      "padRight": "padRight",
      "parseInt": "parseInt",
      "repeat": "repeat",
      "snakeCase": "snakeCase",
      "startCase": "startCase",
      "startsWith": "startsWith",
      "template": "template",
      "templateSettings": "templateSettings",
      "trim": "trim",
      "trimLeft": "trimLeft",
      "trimRight": "trimRight",
      "trunc": "trunc",
      "unescape": "unescape",
      "words": "words",
      "attempt": "attempt",
      "callback": "callback",
      "constant": "constant",
      "identity": "identity",
      "iteratee": "iteratee",
      "matches": "matches",
      "matchesProperty": "matchesProperty",
      "method": "method",
      "methodOf": "methodOf",
      "mixin": "mixin",
      "noop": "noop",
      "property": "property",
      "propertyOf": "propertyOf",
      "range": "range",
      "times": "times",
      "uniqueId": "uniqueId"
    };
  }

});
