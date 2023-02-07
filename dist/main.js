/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/checkDuplicated.js":
/*!********************************!*\
  !*** ./src/checkDuplicated.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ checkDuplicated)\n/* harmony export */ });\nfunction checkDuplicated(arr) {\n  var finalArr = [];\n  for (var i = 0; i < arr.length; i++) {\n    if (arr[i] !== arr[i + 1]) {\n      finalArr.push(arr[i]);\n    }\n  }\n  return finalArr;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/checkDuplicated.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mergeSort_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mergeSort.js */ \"./src/mergeSort.js\");\n/* harmony import */ var _checkDuplicated_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkDuplicated.js */ \"./src/checkDuplicated.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar Node = /*#__PURE__*/_createClass(function Node() {\n  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  var right = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  _classCallCheck(this, Node);\n  this.data = data;\n  this.left = left;\n  this.right = right;\n});\nvar Tree = /*#__PURE__*/_createClass(function Tree(arr) {\n  _classCallCheck(this, Tree);\n  this.root = buildTree(arr);\n});\nvar buildTree = function buildTree(arr) {\n  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : arr.length - 1;\n  if (start > end) return null;\n  var mid = parseInt((start + end) / 2);\n  var node = new Node(arr[mid]);\n  node.left = buildTree(arr, start, mid - 1);\n  node.right = buildTree(arr, mid + 1, end);\n  return node;\n};\n\n// sorting and removing the duplicated values\nvar myArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];\nvar settingTheArray = function settingTheArray(arr) {\n  var sortedArr = (0,_mergeSort_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr);\n  var finalArr = (0,_checkDuplicated_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sortedArr);\n  return finalArr;\n};\n\n// building the tree\nvar finalArr = settingTheArray(myArray);\nvar newTree = new Tree(finalArr);\n// console.log(newTree);\n\n// visualizing the tree in the console\nvar prettyPrint = function prettyPrint(node) {\n  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n  var isLeft = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  if (node.right !== null) {\n    prettyPrint(node.right, \"\".concat(prefix).concat(isLeft ? '│   ' : '    '), false);\n  }\n  console.log(\"\".concat(prefix).concat(isLeft ? '└── ' : '┌── ').concat(node.data));\n  if (node.left !== null) {\n    prettyPrint(node.left, \"\".concat(prefix).concat(isLeft ? '    ' : '│   '), true);\n  }\n};\n// prettyPrint(newTree.root);\n\n// finding on the tree recursively\nvar find = function find(root, key) {\n  if (root === null || root.data === key) {\n    return root;\n  }\n  if (root.data < key) {\n    return find(root.right, key);\n  }\n  if (root.data > key) {\n    return find(root.left, key);\n  }\n};\n// console.log(find(newTree.root, 67));\n\n// inserting values on the tree (only on leaf node)\nvar insert = function insert(root, key) {\n  if (root === null) {\n    root = new Node(key);\n    return root;\n  }\n  if (root.data < key) {\n    root.right = insert(root.right, key);\n  }\n  if (root.data > key) {\n    root.left = insert(root.left, key);\n  }\n  return root;\n};\n// insert(newTree.root, 63405);\n\n// removing a value from the tree\nvar removeNode = function removeNode(root, key) {\n  if (root === null) {\n    return root;\n  }\n  if (root.data < key) {\n    root.right = removeNode(root.right, key);\n  } else if (root.data > key) {\n    root.left = removeNode(root.left, key);\n  } else {\n    if (root.right === null) {\n      return root.left;\n    } else if (root.left === null) {\n      return root.right;\n    }\n    root.data = minValue(root.right);\n    root.right = removeNode(root.right, root.data);\n  }\n  return root;\n};\nvar minValue = function minValue(root) {\n  var minv = root.data;\n  while (root.left != null) {\n    minv = root.left.data;\n    root = root.left;\n  }\n  return minv;\n};\n// removeNode(newTree.root, 67);\n\n// traversing the tree in breadth-first level order\nvar levelOrder = function levelOrder(root) {\n  var fun = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  if (root === null) return root;\n  var q = [];\n  var results = [];\n  q.push(root);\n  while (q.length) {\n    var node = q[0];\n    q.shift();\n    results.push(node.data);\n    if (fun !== null) fun(node.data);\n    if (node.left !== null) q.push(node.left);\n    if (node.right !== null) q.push(node.right);\n  }\n  return fun ? null : results;\n};\n// console.log(levelOrder(newTree.root));\n\n// traversing the tree in depth-first in inOrder\nvar inOrder = function inOrder(root) {\n  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var fun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  if (root === null) return root;\n  if (fun !== null) fun(root.data);\n  inOrder(root.left, results);\n  results.push(root.data);\n  inOrder(root.right, results);\n  return fun ? null : results;\n};\n// console.log(inOrder(newTree.root));\n\n// traversing the tree in depth-first in preOrder\nvar preOrder = function preOrder(root) {\n  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var fun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  if (root === null) return root;\n  if (fun !== null) fun(root.data);\n  results.push(root.data);\n  preOrder(root.left, results);\n  preOrder(root.right, results);\n  return fun ? null : results;\n};\n// console.log(preOrder(newTree.root));\n\n// traversing the tree in depth-first in postOrder\nvar postOrder = function postOrder(root) {\n  var results = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];\n  var fun = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  if (root === null) return root;\n  if (fun !== null) fun(root.data);\n  postOrder(root.left, results);\n  postOrder(root.right, results);\n  results.push(root.data);\n  return fun ? null : results;\n};\n// console.log(postOrder(newTree.root));\n\n// finding tree heights and node height\nvar height = 0;\nvar helperGetMaxHeight = function helperGetMaxHeight(root, node) {\n  if (root === null) return 0;\n  var leftHeight = helperGetMaxHeight(root.left, node);\n  var rightHeight = helperGetMaxHeight(root.right, node);\n  var maxHeight = Math.max(leftHeight, rightHeight) + 1;\n  if (root.data === node) {\n    height = maxHeight;\n  }\n  return maxHeight;\n};\nvar getHeight = function getHeight(root, node) {\n  helperGetMaxHeight(root, node);\n  return height;\n};\n// console.log(helperGetMaxHeight(newTree.root));\n// console.log(getHeight(newTree.root, 8));\n\n// finding node depth\nvar getDepth = function getDepth(root, node) {\n  var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  if (root === null) return 0;\n  if (root.data === node) return depth;\n  depth++;\n  if (root.data > node) {\n    return getDepth(root.left, node, depth);\n  }\n  if (root.data < node) {\n    return getDepth(root.right, node, depth);\n  }\n};\n// console.log(getDepth(newTree.root, 3));\n\n// Checking if the tree is balanced\nvar isBalanced = function isBalanced(root) {\n  var primallyCheck = function primallyCheck(root) {\n    if (root === null) return 0;\n\n    // checking left subtree\n    var leftSubtreeHeight = primallyCheck(root.left);\n    // if left subtree is not balanced then the entire tree is also not balanced\n    if (leftSubtreeHeight === -1) return -1;\n\n    //checking right subtree\n    var rightSubtreeHeight = primallyCheck(root.right);\n    // if right subtree is not balanced then the entire tree is also not balanced\n    if (rightSubtreeHeight === -1) return -1;\n\n    //checking the difference of left and right subtree for current node\n    if (Math.abs(leftSubtreeHeight - rightSubtreeHeight) > 1) {\n      return -1;\n    }\n    //if it is balanced then return the height\n    return leftSubtreeHeight + rightSubtreeHeight + 1;\n  };\n  if (primallyCheck(root) === -1) return false;else return true;\n};\n// console.log(isBalanced(newTree.root));\n\n// rebalancing the tree\nvar rebalancing = function rebalancing(unbalancedTreeRoot) {\n  var treeArr = levelOrder(unbalancedTreeRoot);\n  var newArr = settingTheArray(treeArr);\n  var balancedTree = new Tree(newArr);\n  return balancedTree;\n};\n// console.log(rebalancing(newTree.root));\n\n//!--------------------------- tieing it all together -----------------------------\nvar createRandomArray = function createRandomArray(length) {\n  var arr = [];\n  for (var i = 0; i < length; i++) {\n    var randomNum = Math.floor(Math.random() * 100);\n    arr.push(randomNum);\n  }\n  return arr;\n};\nvar buildRandomBST = function buildRandomBST() {\n  var randomArr = createRandomArray(15);\n  var newArr = settingTheArray(randomArr);\n  var balancedTree = new Tree(newArr);\n  return balancedTree;\n};\nvar myRandomBST = buildRandomBST();\n\n// checking if balanced\nconsole.log(isBalanced(myRandomBST.root));\n\n// Print out all elements in level, pre, post, and in order\nconsole.log(levelOrder(myRandomBST.root));\nconsole.log(preOrder(myRandomBST.root));\nconsole.log(postOrder(myRandomBST.root));\nconsole.log(inOrder(myRandomBST.root));\n\n// Unbalance the tree by adding several numbers > 100\ninsert(myRandomBST.root, 111);\ninsert(myRandomBST.root, 200);\ninsert(myRandomBST.root, 300);\ninsert(myRandomBST.root, 400);\ninsert(myRandomBST.root, 500);\n\n// visualizing the BST\nprettyPrint(myRandomBST.root);\n\n// checking if balanced again\nconsole.log(isBalanced(myRandomBST.root));\n\n// Balancing the tree\nvar rebalancedTree = rebalancing(myRandomBST.root);\n\n// visualizing the BST\nprettyPrint(rebalancedTree.root);\n\n// checking if balanced once again\nconsole.log(isBalanced(rebalancedTree.root));\n\n// Print out all elements in level, pre, post, and in order\nconsole.log(levelOrder(rebalancedTree.root));\nconsole.log(preOrder(rebalancedTree.root));\nconsole.log(postOrder(rebalancedTree.root));\nconsole.log(inOrder(rebalancedTree.root));\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/mergeSort.js":
/*!**************************!*\
  !*** ./src/mergeSort.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\nvar mergeSort = function mergeSort(arr) {\n  if (arr.length < 2) return arr;\n  var midIndex = Math.floor(arr.length / 2);\n  var leftArr = arr.slice(0, midIndex);\n  var rightArr = arr.slice(midIndex);\n  var l = mergeSort(leftArr);\n  var r = mergeSort(rightArr);\n  return merge(l, r);\n};\nvar merge = function merge(leftArr, rightArr) {\n  var output = [];\n  var leftIndex = 0;\n  var rightIndex = 0;\n  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {\n    var leftEle = leftArr[leftIndex];\n    var rightEle = rightArr[rightIndex];\n    if (leftEle < rightEle) {\n      output.push(leftEle);\n      leftIndex++;\n    } else {\n      output.push(rightEle);\n      rightIndex++;\n    }\n  }\n  return [].concat(output, _toConsumableArray(leftArr.slice(leftIndex)), _toConsumableArray(rightArr.slice(rightIndex)));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mergeSort);\n\n//# sourceURL=webpack://my-webpack-project/./src/mergeSort.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;