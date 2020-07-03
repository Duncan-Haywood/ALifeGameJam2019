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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry_points/machine.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/p5/lib/p5.js":
/*!***********************************!*\
  !*** ./node_modules/p5/lib/p5.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/entry_points/machine.ts":
/*!*************************************!*\
  !*** ./src/entry_points/machine.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! p5 */ \"./node_modules/p5/lib/p5.js\");\n/* harmony import */ var p5__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(p5__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities */ \"./src/utilities.ts\");\nvar __read = (undefined && undefined.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spread = (undefined && undefined.__spread) || function () {\n    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));\n    return ar;\n};\n\n\n/**\n * TODO:\n * iをランダムな位置から検索し、子孫数を1未満にする\n */\nvar parameters = Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"parsedQueries\"])();\n// tslint:disable: no-string-literal\nvar rawDebug = parseInt(parameters[\"debug\"], 10);\nvar DEBUG = isNaN(rawDebug) ? false : (rawDebug ? true : false);\nvar rawTest = parseInt(parameters[\"test\"], 10);\nvar TEST = isNaN(rawTest) ? false : (rawTest ? true : false);\nvar size = parameters[\"size\"] ? parseInt(parameters[\"size\"], 10) : 100;\nvar machineCount = parameters[\"machines\"] ? parseInt(parameters[\"machines\"], 10) : 100;\nvar machineMax = parameters[\"max\"] ? parseInt(parameters[\"max\"], 10) : 1000;\nvar matingRate = parameters[\"mating_rate\"] ? parseFloat(parameters[\"mating_rate\"]) : 0.1;\nvar mutationRate = parameters[\"mutation_rate\"] ? parseFloat(parameters[\"mutation_rate\"]) : 0.03;\nvar speed = parameters[\"speed\"] ? parseInt(parameters[\"speed\"], 10) : 300;\nvar rawSingleGene = parseInt(parameters[\"single_gene\"], 10);\nvar singleGene = isNaN(rawSingleGene) ? true : (rawSingleGene ? true : false);\n// tslint:enable: no-string-literal\nfunction log(message) {\n    if (DEBUG) {\n        console.log(message);\n    }\n}\nvar tt = -1;\nvar t = 0;\nvar machines = [];\nvar main = function (p) {\n    p.setup = function () {\n        var fieldSize = size;\n        var canvas = p.createCanvas(fieldSize, fieldSize);\n        canvas.id(\"canvas\");\n        canvas.parent(\"canvas-parent\");\n        if (TEST) {\n            tests();\n        }\n        for (var i = 0; i < machineCount; i += 1) {\n            var gene = singleGene ? new Gene(828) : Gene.random();\n            machines.push(new Machine(gene));\n        }\n        log(\"DEBUG: \" + DEBUG + \", TEST: \" + TEST);\n        log(\"max: \" + machineMax + \", mating rate: \" + matingRate + \", mutation rate: \" + mutationRate + \", single gene: \" + singleGene);\n    };\n    p.draw = function () {\n        tt += 1;\n        if (tt % speed !== 0) {\n            return;\n        }\n        next();\n        t += 1;\n        setTimestamp(t);\n    };\n};\nvar sketch = new p5__WEBPACK_IMPORTED_MODULE_0__(main);\nfunction next() {\n    var trimmed = trimMachines();\n    var born = reproduceMachines();\n    showStatistics(born, trimmed);\n}\nfunction reproduceMachines() {\n    var newMachines = [];\n    for (var i = 0; i < machines.length; i += 1) {\n        var machine = machines[i];\n        for (var j = i + 1; j < machines.length; j += 1) {\n            if (Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(1) > matingRate) {\n                continue;\n            }\n            var other = machines[j];\n            var offsprings = machine.reproduce(other);\n            newMachines.push.apply(newMachines, __spread(offsprings));\n        }\n    }\n    machines.push.apply(machines, __spread(newMachines));\n    return newMachines.length;\n}\nfunction trimMachines() {\n    if (machines.length <= machineMax) {\n        return 0;\n    }\n    var trimmed = [];\n    for (var i = 0; i < machines.length; i += 1) {\n        if ((machines.length - trimmed.length) <= machineMax) {\n            break;\n        }\n        var machine = machines[i];\n        if (machine.age > 0) { // machines は先頭から古い順に並ぶため // TODO: 子孫を多く残したものを優先して残す\n            trimmed.push(machine);\n        }\n    }\n    machines = machines.filter(function (m) { return trimmed.indexOf(m) === -1; });\n    return trimmed.length;\n}\nfunction showStatistics(born, trimmed) {\n    var genesMap = new Map(); // {gene: number of genes}\n    log(\"\\n\\n\\n[\" + t + \"]\\nMachines: \" + machines.length + \", \" + born + \" born, \" + trimmed + \" die\");\n    machines.forEach(function (m) {\n        // tslint:disable-next-line: strict-boolean-expressions\n        var numberOfMachines = genesMap.get(m.gene.value) || 0;\n        genesMap.set(m.gene.value, numberOfMachines + 1);\n    });\n    var genes = [];\n    genesMap.forEach(function (value, gene) {\n        genes.push([gene, value]);\n    });\n    var sorted = genes.sort(function (lhs, rhs) { return rhs[1] - lhs[1]; });\n    sorted.slice(0, Math.min(sorted.length, 5))\n        .forEach(function (e) {\n        log(e[0].toString(2) + \": \" + e[1]);\n    });\n}\n/**\n * geneLength bits binary\n * |-header-|-transition table-|\n */\nvar Gene = /** @class */ (function () {\n    function Gene(value) {\n        this.value = value;\n        this.header = value >> Gene.transitionTableLength;\n        var rawTransitionTable = value & Gene.transitionTableMask;\n        var upper = rawTransitionTable << Gene.headerLength;\n        var lower = rawTransitionTable >> (Gene.transitionTableLength - Gene.headerLength);\n        this.transitionTable = upper + lower;\n    }\n    Gene.random = function () {\n        return new Gene(Math.floor(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(Gene.geneMask)));\n    };\n    Gene.prototype.mutated = function () {\n        var mutation = 1 << Math.floor(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(Gene.geneLength, 0));\n        var mutatedValue = this.value ^ mutation;\n        return new Gene(mutatedValue);\n    };\n    Gene.prototype.reproduce = function (other) {\n        var result = [];\n        var otherDoubledValue = ((other.value << Gene.geneLength) + other.value);\n        var shiftOrigin = Gene.transitionTableLength + Gene.geneLength;\n        var start = Math.floor(Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(Gene.geneLength));\n        for (var i = 0; i < Gene.geneLength; i += 1) {\n            var j = (i + start) % Gene.geneLength;\n            var checkValue = (otherDoubledValue >> (shiftOrigin - j)) & Gene.headerMask;\n            if ((checkValue ^ this.header) === Gene.headerMask) {\n                var newValue = this.decode(other.value, (j + Gene.headerLength) % Gene.geneLength);\n                result.push(new Gene(newValue));\n                if (TEST === false) {\n                    break; // 生産数が多すぎるため、mating ごとの子孫数を1未満に制限\n                }\n            }\n        }\n        return result;\n    };\n    /// i: number of bits to shift the table\n    Gene.prototype.decode = function (rawTable, i) {\n        var table = (((rawTable << Gene.geneLength) + rawTable) >> (Gene.geneLength - i)) & Gene.geneMask;\n        // log(`${this.transitionTable.toString(2)} ^ ${table.toString(2)}(${rawTable.toString(2)}, ${i}) -> ${(this.transitionTable ^ table).toString(2)}`)\n        return this.transitionTable ^ table;\n    };\n    Gene.headerLength = 4;\n    Gene.geneLength = 10;\n    Gene.geneMask = Math.pow(2, Gene.geneLength) - 1;\n    Gene.transitionTableLength = Gene.geneLength - Gene.headerLength;\n    Gene.headerMask = Math.pow(2, Gene.headerLength) - 1;\n    Gene.transitionTableMask = Math.pow(2, Gene.transitionTableLength) - 1;\n    return Gene;\n}());\nvar Machine = /** @class */ (function () {\n    function Machine(gene) {\n        this.gene = gene;\n        this.createdAt = t;\n    }\n    Object.defineProperty(Machine.prototype, \"age\", {\n        get: function () {\n            return t - this.createdAt;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Machine.prototype.reproduce = function (other) {\n        return this.gene.reproduce(other.gene)\n            .map(function (g) {\n            if (Object(_utilities__WEBPACK_IMPORTED_MODULE_1__[\"random\"])(1) < mutationRate) {\n                return new Machine(g.mutated());\n            }\n            else {\n                return new Machine(g);\n            }\n        });\n    };\n    return Machine;\n}());\nfunction assert(b, message) {\n    if (b !== true) {\n        throw new Error(\"[Failed] \" + message);\n    }\n}\nfunction tests() {\n    assert(Gene.geneLength === 10, \"Expected gene length == 10\");\n    var reproducibleValues = [\n        828,\n        960,\n    ];\n    reproducibleValues.forEach(function (v) {\n        var reproducibleGene = new Gene(v);\n        var reproducedGenes = reproducibleGene.reproduce(reproducibleGene);\n        assert(reproducedGenes.length > 0, \"Reproduction failed (\" + reproducibleGene.value.toString(2) + \")\");\n        var reproducedValues = reproducedGenes.map(function (g) { return g.value; });\n        assert(reproducedValues.indexOf(v) >= 0, v.toString(2) + \"'s offsprings do not contain itself: \" + reproducedValues.join(\",\"));\n    });\n    log(\"Test finished\");\n    TEST = false;\n}\n\n\n//# sourceURL=webpack:///./src/entry_points/machine.ts?");

/***/ }),

/***/ "./src/utilities.ts":
/*!**************************!*\
  !*** ./src/utilities.ts ***!
  \**************************/
/*! exports provided: random, Color, parsedQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Color\", function() { return Color; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parsedQueries\", function() { return parsedQueries; });\nvar __values = (undefined && undefined.__values) || function(o) {\n    var s = typeof Symbol === \"function\" && Symbol.iterator, m = s && o[s], i = 0;\n    if (m) return m.call(o);\n    if (o && typeof o.length === \"number\") return {\n        next: function () {\n            if (o && i >= o.length) o = void 0;\n            return { value: o && o[i++], done: !o };\n        }\n    };\n    throw new TypeError(s ? \"Object is not iterable.\" : \"Symbol.iterator is not defined.\");\n};\n// export function random(max: number): number\t// not working: raises \"Expected 1 arguments, but got 2.\"\nfunction random(max, min) {\n    if (min == undefined) {\n        return Math.random() * max;\n    }\n    var range = max - min;\n    return Math.random() * range + min;\n}\nvar Color = /** @class */ (function () {\n    function Color(r, g, b) {\n        this.r = r;\n        this.g = g;\n        this.b = b;\n    }\n    Color.prototype.p5 = function (p) {\n        return p.color(this.r, this.g, this.b);\n    };\n    return Color;\n}());\n\n// tslint:disable-next-line:no-any\nfunction parsedQueries() {\n    var e_1, _a;\n    var rawQuery = document.location.search;\n    var queries = rawQuery\n        .slice(rawQuery.indexOf(\"?\") + 1)\n        .split(\"&\");\n    // tslint:disable-next-line:no-any\n    var parameters = {};\n    try {\n        for (var queries_1 = __values(queries), queries_1_1 = queries_1.next(); !queries_1_1.done; queries_1_1 = queries_1.next()) {\n            var query = queries_1_1.value;\n            var pair = query.split(\"=\");\n            parameters[pair[0]] = pair[1];\n        }\n    }\n    catch (e_1_1) { e_1 = { error: e_1_1 }; }\n    finally {\n        try {\n            if (queries_1_1 && !queries_1_1.done && (_a = queries_1.return)) _a.call(queries_1);\n        }\n        finally { if (e_1) throw e_1.error; }\n    }\n    console.log(parameters);\n    return parameters;\n}\n\n\n//# sourceURL=webpack:///./src/utilities.ts?");

/***/ })

/******/ });