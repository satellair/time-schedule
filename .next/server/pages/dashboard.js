"use strict";
(() => {
var exports = {};
exports.id = "pages/dashboard";
exports.ids = ["pages/dashboard"];
exports.modules = {

/***/ "./pages/dashboard.js":
/*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Learning\\web_proj\\time-schedule\\pages\\dashboard.js";




function Dashboard() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    h: [null, null, "100vh"],
    maxW: "2000px",
    flexDir: ["column", "column", "row"],
    overflow: "hidden",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: ["100%", "100%", "10%", "15%", "15%"],
      flexDir: "column",
      alignItems: "center",
      backgroundColor: "#020202",
      color: "#fff",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: "column",
        h: [null, null, "100vh"],
        justifyContent: "space-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          flexDir: "column",
          as: "nav",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
            mt: 50,
            mb: [25, 50, 100],
            fontSize: ["4xl", "4xl", "2xl", "3xl", "4xl"],
            alignSelf: "center",
            letterSpacing: "tight",
            children: "Rise."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            flexDir: ["row", "row", "column", "column", "column"],
            align: ["center", "center", "center", "flex-start", "flex-start"],
            wrap: ["wrap", "wrap", "nowrap", "nowrap", "nowrap"],
            justifyContent: "center",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              className: "sidebar-items",
              mr: [2, 6, 0, 0, 0],
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                display: ["none", "none", "flex", "flex", "flex"],
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  as: FiHome,
                  fontSize: "2xl",
                  className: "active-icon"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                _hover: {
                  textDecor: 'none'
                },
                display: ["flex", "flex", "none", "flex", "flex"],
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  className: "active",
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              className: "sidebar-items",
              mr: [2, 6, 0, 0, 0],
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                display: ["none", "none", "flex", "flex", "flex"],
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  as: FiPieChart,
                  fontSize: "2xl"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                _hover: {
                  textDecor: 'none'
                },
                display: ["flex", "flex", "none", "flex", "flex"],
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  children: "Credit"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              className: "sidebar-items",
              mr: [2, 6, 0, 0, 0],
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                display: ["none", "none", "flex", "flex", "flex"],
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  as: FiDollarSign,
                  fontSize: "2xl"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                _hover: {
                  textDecor: 'none'
                },
                display: ["flex", "flex", "none", "flex", "flex"],
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  children: "Wallet"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              className: "sidebar-items",
              mr: [2, 6, 0, 0, 0],
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                display: ["none", "none", "flex", "flex", "flex"],
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                  as: FiBox,
                  fontSize: "2xl"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                _hover: {
                  textDecor: 'none'
                },
                display: ["flex", "flex", "none", "flex", "flex"],
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  children: "Services"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 94,
                  columnNumber: 37
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          flexDir: "column",
          alignItems: "center",
          mb: 10,
          mt: 5,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            my: 2,
            src: "avatar-1.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 100,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            textAlign: "center",
            children: "Calvin West"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 25
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: ["100%", "100%", "60%", "60%", "55%"],
      p: "3%",
      flexDir: "column",
      overflow: "auto",
      minH: "100vh",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        fontWeight: "normal",
        mb: 4,
        letterSpacing: "tight",
        children: ["Welcome back, ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          display: "inline-flex",
          fontWeight: "bold",
          children: "Calvin"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 35
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        color: "gray",
        fontSize: "sm",
        children: "My Balance"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        fontWeight: "bold",
        fontSize: "2xl",
        children: "$5,750.20"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(MyChart, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "space-between",
        mt: 8,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          align: "flex-end",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
            as: "h2",
            size: "lg",
            letterSpacing: "tight",
            children: "Transactions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontSize: "small",
            color: "gray",
            ml: 4,
            children: "Apr 2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FiCalendar, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 39
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: "column",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          overflow: "auto",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Table, {
            variant: "unstyled",
            mt: 4,
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Thead, {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                color: "gray",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                  children: "Name of transaction"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                  children: "Category"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 137,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                  isNumeric: true,
                  children: "Cashback"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Th, {
                  isNumeric: true,
                  children: "Amount"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 139,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 135,
                columnNumber: 33
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 134,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tbody, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    align: "center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                      size: "sm",
                      mr: 2,
                      src: "amazon.jpeg"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 146,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                      flexDir: "column",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                        size: "sm",
                        letterSpacing: "tight",
                        children: "Amazon"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 148,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "sm",
                        color: "gray",
                        children: "Apr 24, 2021 at 1:40pm"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 147,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 145,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 144,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  children: "Electronic Devices"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 153,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  isNumeric: true,
                  children: "+$2"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  isNumeric: true,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    fontWeight: "bold",
                    display: "inline-table",
                    children: "-$242"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 51
                  }, this), ".00"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 155,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    align: "center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                      size: "sm",
                      mr: 2,
                      src: "starbucks.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 160,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                      flexDir: "column",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                        size: "sm",
                        letterSpacing: "tight",
                        children: "Starbucks"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 162,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "sm",
                        color: "gray",
                        children: "Apr 22, 2021 at 2:43pm"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 163,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 159,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 158,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  children: "Cafe and restaurant"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 167,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  isNumeric: true,
                  children: "+$23"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 168,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  isNumeric: true,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    fontWeight: "bold",
                    display: "inline-table",
                    children: "-$32"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 169,
                    columnNumber: 51
                  }, this), ".00"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 169,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 157,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                    align: "center",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                      size: "sm",
                      mr: 2,
                      src: "youtube.png"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 45
                    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                      flexDir: "column",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                        size: "sm",
                        letterSpacing: "tight",
                        children: "YouTube"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 176,
                        columnNumber: 49
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontSize: "sm",
                        color: "gray",
                        children: "Apr 13, 2021 at 11:23am"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 177,
                        columnNumber: 49
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 175,
                      columnNumber: 45
                    }, this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 41
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 172,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  children: "Social Media"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 181,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  isNumeric: true,
                  children: "+$4"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 182,
                  columnNumber: 37
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                  isNumeric: true,
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                    fontWeight: "bold",
                    display: "inline-table",
                    children: "-$112"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 183,
                    columnNumber: 51
                  }, this), ".00"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 183,
                  columnNumber: 37
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 171,
                columnNumber: 33
              }, this), display == 'show' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                      align: "center",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                        size: "sm",
                        mr: 2,
                        src: "amazon.jpeg"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 190,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        flexDir: "column",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                          size: "sm",
                          letterSpacing: "tight",
                          children: "Amazon"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 192,
                          columnNumber: 57
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                          fontSize: "sm",
                          color: "gray",
                          children: "Apr 12, 2021 at 9:40pm"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 193,
                          columnNumber: 57
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 191,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 189,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 188,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    children: "Electronic Devices"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 197,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    isNumeric: true,
                    children: "+$2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 198,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    isNumeric: true,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                      fontWeight: "bold",
                      display: "inline-table",
                      children: "-$242"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 199,
                      columnNumber: 59
                    }, this), ".00"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 187,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                      align: "center",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                        size: "sm",
                        mr: 2,
                        src: "starbucks.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 204,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        flexDir: "column",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                          size: "sm",
                          letterSpacing: "tight",
                          children: "Starbucks"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 206,
                          columnNumber: 57
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                          fontSize: "sm",
                          color: "gray",
                          children: "Apr 10, 2021 at 2:10pm"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 207,
                          columnNumber: 57
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 205,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 203,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 202,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    children: "Cafe and restaurant"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 211,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    isNumeric: true,
                    children: "+$23"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 212,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    isNumeric: true,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                      fontWeight: "bold",
                      display: "inline-table",
                      children: "-$32"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 213,
                      columnNumber: 59
                    }, this), ".00"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 213,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 201,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tr, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                      align: "center",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                        size: "sm",
                        mr: 2,
                        src: "youtube.png"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 218,
                        columnNumber: 53
                      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        flexDir: "column",
                        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                          size: "sm",
                          letterSpacing: "tight",
                          children: "YouTube"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 220,
                          columnNumber: 57
                        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                          fontSize: "sm",
                          color: "gray",
                          children: "Apr 7, 2021 at 9:03am"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 221,
                          columnNumber: 57
                        }, this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 219,
                        columnNumber: 53
                      }, this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 217,
                      columnNumber: 49
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 216,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    children: "Social Media"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 225,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    isNumeric: true,
                    children: "+$4"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 226,
                    columnNumber: 45
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Td, {
                    isNumeric: true,
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                      fontWeight: "bold",
                      display: "inline-table",
                      children: "-$112"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 227,
                      columnNumber: 59
                    }, this), ".00"]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 45
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 215,
                  columnNumber: 41
                }, this)]
              }, void 0, true)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          align: "center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 235,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
            icon: display == 'show' ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FiChevronUp, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 55
            }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FiChevronDown, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 73
            }, this),
            onClick: () => {
              if (display == 'show') {
                changeDisplay('none');
              } else {
                changeDisplay('show');
              }
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 246,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
      w: ["100%", "100%", "30%"],
      bgColor: "#F5F5F5",
      p: "3%",
      flexDir: "column",
      overflow: "auto",
      minW: [null, null, "300px", "300px", "400px"],
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        alignContent: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
          bgColor: "#fff",
          mb: 4,
          border: "none",
          borderColor: "#fff",
          borderRadius: "10px",
          mr: 2,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftElement, {
            pointerEvents: "none",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FiSearch, {
              color: "gray"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 263,
              columnNumber: 39
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 261,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
            type: "number",
            placeholder: "Search",
            borderRadius: "10px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 265,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FiBell, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 267,
            columnNumber: 39
          }, this),
          fontSize: "sm",
          bgColor: "#fff",
          borderRadius: "50%",
          p: "10px"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          w: 30,
          h: 25,
          bgColor: "#B57295",
          borderRadius: "50%",
          color: "#fff",
          align: "center",
          justify: "center",
          ml: "-3",
          mt: "-2",
          zIndex: "100",
          fontSize: "xs",
          children: "2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        letterSpacing: "tight",
        children: "My Cards"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 17
      }, this), value == 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        borderRadius: "25px",
        mt: 4,
        w: "100%",
        h: "200px",
        bgGradient: "linear(to-t, #B57295, #29259A)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          p: "1em",
          color: "#fff",
          flexDir: "column",
          h: "100%",
          justify: "space-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            justify: "space-between",
            w: "100%",
            align: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              flexDir: "column",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                color: "gray.400",
                children: "Current Balance"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontWeight: "bold",
                fontSize: "xl",
                children: "$5,750.20"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 297,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              align: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                mr: 2,
                as: FiCreditCard
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 300,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: "Rise."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 299,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mb: 4,
            children: "**** **** **** 1289"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 304,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            align: "flex-end",
            justify: "space-between",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flexDir: "column",
                mr: 4,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  textTransform: "uppercase",
                  fontSize: "xs",
                  children: "Valid Thru"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 308,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  fontSize: "lg",
                  children: "12/23"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 309,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 307,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flexDir: "column",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  textTransform: "uppercase",
                  fontSize: "xs",
                  children: "CVV"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 312,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  fontSize: "lg",
                  children: "***"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 313,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 311,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 306,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              as: FiCreditCard
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 316,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 305,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 21
      }, this), value == 2 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        borderRadius: "25px",
        mt: 4,
        w: "100%",
        h: "200px",
        bgGradient: "linear(to-t, yellow.300, blue.500)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          p: "1em",
          color: "#fff",
          flexDir: "column",
          h: "100%",
          justify: "space-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            justify: "space-between",
            w: "100%",
            align: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              flexDir: "column",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                color: "gray.400",
                children: "Current Balance"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 332,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontWeight: "bold",
                fontSize: "xl",
                children: "$350.00"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 333,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 331,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              align: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                mr: 2,
                as: FiCreditCard
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 336,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: "Rise."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 337,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 335,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 330,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mb: 4,
            children: "**** **** **** 8956"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 340,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            align: "flex-end",
            justify: "space-between",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flexDir: "column",
                mr: 4,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  textTransform: "uppercase",
                  fontSize: "xs",
                  children: "Valid Thru"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 344,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  fontSize: "lg",
                  children: "9/24"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 345,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 343,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flexDir: "column",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  textTransform: "uppercase",
                  fontSize: "xs",
                  children: "CVV"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 348,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  fontSize: "lg",
                  children: "***"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 349,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 347,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              as: FiCreditCard
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 352,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 341,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 322,
        columnNumber: 21
      }, this), value == 3 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        borderRadius: "25px",
        mt: 4,
        w: "100%",
        h: "200px",
        bgGradient: "linear(to-t, orange.300, pink.600)",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          p: "1em",
          color: "#fff",
          flexDir: "column",
          h: "100%",
          justify: "space-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            justify: "space-between",
            w: "100%",
            align: "flex-start",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              flexDir: "column",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                color: "gray.400",
                children: "Current Balance"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 368,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                fontWeight: "bold",
                fontSize: "xl",
                children: "$2,150.72"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 369,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              align: "center",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                mr: 2,
                as: FiCreditCard
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 372,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                children: "Rise."
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 373,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 371,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 366,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            mb: 4,
            children: "**** **** **** 8353"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            align: "flex-end",
            justify: "space-between",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flexDir: "column",
                mr: 4,
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  textTransform: "uppercase",
                  fontSize: "xs",
                  children: "Valid Thru"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 380,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  fontSize: "lg",
                  children: "11/22"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 381,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 379,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                flexDir: "column",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  textTransform: "uppercase",
                  fontSize: "xs",
                  children: "CVV"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 384,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                  fontSize: "lg",
                  children: "***"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 385,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 383,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 378,
              columnNumber: 33
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
              as: FiCreditCard
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 388,
              columnNumber: 33
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 377,
            columnNumber: 29
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 365,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 21
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        justifyContent: "center",
        mt: 2,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          bgColor: value == 1 ? "gray.600" : "gray.400",
          size: "xs",
          mx: 1,
          onClick: () => changeValue(1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 394,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          bgColor: value == 2 ? "gray.600" : "gray.400",
          size: "xs",
          mx: 1,
          onClick: () => changeValue(2)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
          bgColor: value == 3 ? "gray.600" : "gray.400",
          size: "xs",
          mx: 1,
          onClick: () => changeValue(3)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 396,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 393,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        flexDir: "column",
        my: 4,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          justify: "space-between",
          mb: 2,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Balance"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 400,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontWeight: "bold",
            children: "$140.42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 401,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 399,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
          justify: "space-between",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            children: "Credit Limit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 404,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
            fontWeight: "bold",
            children: "$150.00"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 405,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 403,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
        letterSpacing: "tight",
        size: "md",
        my: 4,
        children: "Send money to"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 408,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AvatarGroup, {
          size: "md",
          max: 3,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            src: "avatar-2.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 411,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            src: "avatar-3.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            src: "avatar-4.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            src: "avatar-4.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 414,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
            src: "avatar-4.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 415,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 410,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
          icon: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FiPlus, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 417,
            columnNumber: 35
          }, this),
          ml: 2,
          color: "#fff",
          bgColor: "gray.300"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 417,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 409,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        color: "gray",
        mt: 10,
        mb: 2,
        children: "Card number"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftElement, {
          pointerEvents: "none",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FiCreditCard, {
            color: "gray.700"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 423,
            columnNumber: 35
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 421,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
          type: "number",
          placeholder: "xxxx xxxx xxxx xxxx"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
        color: "gray",
        mt: 4,
        mb: 2,
        children: "Sum"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputGroup, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.InputLeftElement, {
          pointerEvents: "none",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(FiDollarSign, {
            color: "gray.700"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 431,
            columnNumber: 35
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 429,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
          type: "number",
          placeholder: "130.00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 433,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
        mt: 4,
        bgColor: "blackAlpha.900",
        color: "#fff",
        p: 7,
        borderRadius: 15,
        children: "Send money"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/dashboard.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBOUM7QUFBcUQsU0FBQyxFQUFFLENBQXhEO0FBQTJELG9CQUFZLEVBQUUsRUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0F2TEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaE9KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNFpIOzs7Ozs7Ozs7O0FDdGJEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpbWUtc2NoZWR1bGUvLi9wYWdlcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vdGltZS1zY2hlZHVsZS9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly90aW1lLXNjaGVkdWxlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly90aW1lLXNjaGVkdWxlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7XHJcbiAgICBGbGV4LFxyXG4gICAgSGVhZGluZyxcclxuICAgIEF2YXRhcixcclxuICAgIEF2YXRhckdyb3VwLFxyXG4gICAgVGV4dCxcclxuICAgIEljb24sXHJcbiAgICBJY29uQnV0dG9uLFxyXG4gICAgVGFibGUsXHJcbiAgICBUaGVhZCxcclxuICAgIFRib2R5LFxyXG4gICAgVHIsXHJcbiAgICBUaCxcclxuICAgIFRkLFxyXG4gICAgRGl2aWRlcixcclxuICAgIExpbmssXHJcbiAgICBCb3gsXHJcbiAgICBCdXR0b24sXHJcbiAgICBJbnB1dCxcclxuICAgIElucHV0R3JvdXAsXHJcbiAgICBJbnB1dExlZnRFbGVtZW50XHJcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhc2hib2FyZCgpIHtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgaD17W251bGwsIG51bGwsIFwiMTAwdmhcIl19XHJcbiAgICAgICAgICAgIG1heFc9XCIyMDAwcHhcIlxyXG4gICAgICAgICAgICBmbGV4RGlyPXtbXCJjb2x1bW5cIiwgXCJjb2x1bW5cIiwgXCJyb3dcIl19XHJcbiAgICAgICAgICAgIG92ZXJmbG93PVwiaGlkZGVuXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBDb2x1bW4gMSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgIHc9e1tcIjEwMCVcIiwgXCIxMDAlXCIsIFwiMTAlXCIsIFwiMTUlXCIsIFwiMTUlXCJdfVxyXG4gICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj1cIiMwMjAyMDJcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCIjZmZmXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICBoPXtbbnVsbCwgbnVsbCwgXCIxMDB2aFwiXX1cclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXI9XCJjb2x1bW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcz1cIm5hdlwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQ9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWI9e1syNSwgNTAsIDEwMF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT17W1wiNHhsXCIsIFwiNHhsXCIsIFwiMnhsXCIsIFwiM3hsXCIsIFwiNHhsXCIsXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduU2VsZj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXJTcGFjaW5nPVwidGlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSaXNlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyPXtbXCJyb3dcIiwgXCJyb3dcIiwgXCJjb2x1bW5cIiwgXCJjb2x1bW5cIiwgXCJjb2x1bW5cIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17W1wiY2VudGVyXCIsIFwiY2VudGVyXCIsIFwiY2VudGVyXCIsIFwiZmxleC1zdGFydFwiLCBcImZsZXgtc3RhcnRcIl19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwPXtbXCJ3cmFwXCIsIFwid3JhcFwiLCBcIm5vd3JhcFwiLCBcIm5vd3JhcFwiLCBcIm5vd3JhcFwiXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwic2lkZWJhci1pdGVtc1wiIG1yPXtbMiwgNiwgMCwgMCwgMF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGRpc3BsYXk9e1tcIm5vbmVcIiwgXCJub25lXCIsIFwiZmxleFwiLCBcImZsZXhcIiwgXCJmbGV4XCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gYXM9e0ZpSG9tZX0gZm9udFNpemU9XCIyeGxcIiBjbGFzc05hbWU9XCJhY3RpdmUtaWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIF9ob3Zlcj17eyB0ZXh0RGVjb3I6ICdub25lJyB9fSBkaXNwbGF5PXtbXCJmbGV4XCIsIFwiZmxleFwiLCBcIm5vbmVcIiwgXCJmbGV4XCIsIFwiZmxleFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNsYXNzTmFtZT1cImFjdGl2ZVwiPkhvbWU8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggY2xhc3NOYW1lPVwic2lkZWJhci1pdGVtc1wiIG1yPXtbMiwgNiwgMCwgMCwgMF19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGRpc3BsYXk9e1tcIm5vbmVcIiwgXCJub25lXCIsIFwiZmxleFwiLCBcImZsZXhcIiwgXCJmbGV4XCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gYXM9e0ZpUGllQ2hhcnR9IGZvbnRTaXplPVwiMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgX2hvdmVyPXt7IHRleHREZWNvcjogJ25vbmUnIH19IGRpc3BsYXk9e1tcImZsZXhcIiwgXCJmbGV4XCIsIFwibm9uZVwiLCBcImZsZXhcIiwgXCJmbGV4XCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+Q3JlZGl0PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT1cInNpZGViYXItaXRlbXNcIiBtcj17WzIsIDYsIDAsIDAsIDBdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBkaXNwbGF5PXtbXCJub25lXCIsIFwibm9uZVwiLCBcImZsZXhcIiwgXCJmbGV4XCIsIFwiZmxleFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtGaURvbGxhclNpZ259IGZvbnRTaXplPVwiMnhsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgX2hvdmVyPXt7IHRleHREZWNvcjogJ25vbmUnIH19IGRpc3BsYXk9e1tcImZsZXhcIiwgXCJmbGV4XCIsIFwibm9uZVwiLCBcImZsZXhcIiwgXCJmbGV4XCJdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+V2FsbGV0PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGNsYXNzTmFtZT1cInNpZGViYXItaXRlbXNcIiBtcj17WzIsIDYsIDAsIDAsIDBdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBkaXNwbGF5PXtbXCJub25lXCIsIFwibm9uZVwiLCBcImZsZXhcIiwgXCJmbGV4XCIsIFwiZmxleFwiXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtGaUJveH0gZm9udFNpemU9XCIyeGxcIiAvPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBfaG92ZXI9e3sgdGV4dERlY29yOiAnbm9uZScgfX0gZGlzcGxheT17W1wiZmxleFwiLCBcImZsZXhcIiwgXCJub25lXCIsIFwiZmxleFwiLCBcImZsZXhcIl19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5TZXJ2aWNlczwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBtYj17MTB9IG10PXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBteT17Mn0gc3JjPVwiYXZhdGFyLTEuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dEFsaWduPVwiY2VudGVyXCI+Q2FsdmluIFdlc3Q8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgICB7LyogQ29sdW1uIDIgKi99XHJcbiAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICB3PXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjYwJVwiLCBcIjYwJVwiLCBcIjU1JVwiXX1cclxuICAgICAgICAgICAgICAgIHA9XCIzJVwiXHJcbiAgICAgICAgICAgICAgICBmbGV4RGlyPVwiY29sdW1uXCJcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93PVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICBtaW5IPVwiMTAwdmhcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1iPXs0fVxyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgV2VsY29tZSBiYWNrLCA8RmxleCBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPkNhbHZpbjwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JheVwiIGZvbnRTaXplPVwic21cIj5NeSBCYWxhbmNlPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT1cIjJ4bFwiPiQ1LDc1MC4yMDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxNeUNoYXJ0IC8+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBtdD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJmbGV4LWVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImgyXCIgc2l6ZT1cImxnXCIgbGV0dGVyU3BhY2luZz1cInRpZ2h0XCI+VHJhbnNhY3Rpb25zPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtYWxsXCIgY29sb3I9XCJncmF5XCIgbWw9ezR9PkFwciAyMDIxPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBpY29uPXs8RmlDYWxlbmRhciAvPn0gLz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBvdmVyZmxvdz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiIG10PXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHIgY29sb3I9XCJncmF5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaD5OYW1lIG9mIHRyYW5zYWN0aW9uPC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoPkNhdGVnb3J5PC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRoIGlzTnVtZXJpYz5DYXNoYmFjazwvVGg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaCBpc051bWVyaWM+QW1vdW50PC9UaD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaGVhZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzaXplPVwic21cIiBtcj17Mn0gc3JjPVwiYW1hem9uLmpwZWdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cInNtXCIgbGV0dGVyU3BhY2luZz1cInRpZ2h0XCI+QW1hem9uPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJncmF5XCI+QXByIDI0LCAyMDIxIGF0IDE6NDBwbTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD5FbGVjdHJvbmljIERldmljZXM8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQgaXNOdW1lcmljPiskMjwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+PFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBkaXNwbGF5PVwiaW5saW5lLXRhYmxlXCI+LSQyNDI8L1RleHQ+LjAwPC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNpemU9XCJzbVwiIG1yPXsyfSBzcmM9XCJzdGFyYnVja3MucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJzbVwiIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiPlN0YXJidWNrczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheVwiPkFwciAyMiwgMjAyMSBhdCAyOjQzcG08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQ+Q2FmZSBhbmQgcmVzdGF1cmFudDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+KyQyMzwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+PFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBkaXNwbGF5PVwiaW5saW5lLXRhYmxlXCI+LSQzMjwvVGV4dD4uMDA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVHI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT1cInNtXCIgbXI9ezJ9IHNyYz1cInlvdXR1YmUucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJzbVwiIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiPllvdVR1YmU8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIiBjb2xvcj1cImdyYXlcIj5BcHIgMTMsIDIwMjEgYXQgMTE6MjNhbTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD5Tb2NpYWwgTWVkaWE8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQgaXNOdW1lcmljPiskNDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+PFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBkaXNwbGF5PVwiaW5saW5lLXRhYmxlXCI+LSQxMTI8L1RleHQ+LjAwPC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNwbGF5ID09ICdzaG93JyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT1cInNtXCIgbXI9ezJ9IHNyYz1cImFtYXpvbi5qcGVnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIiBsZXR0ZXJTcGFjaW5nPVwidGlnaHRcIj5BbWF6b248L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JheVwiPkFwciAxMiwgMjAyMSBhdCA5OjQwcG08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD5FbGVjdHJvbmljIERldmljZXM8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+KyQyPC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQgaXNOdW1lcmljPjxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZGlzcGxheT1cImlubGluZS10YWJsZVwiPi0kMjQyPC9UZXh0Pi4wMDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT1cInNtXCIgbXI9ezJ9IHNyYz1cInN0YXJidWNrcy5wbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJzbVwiIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiPlN0YXJidWNrczwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cInNtXCIgY29sb3I9XCJncmF5XCI+QXByIDEwLCAyMDIxIGF0IDI6MTBwbTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRkPkNhZmUgYW5kIHJlc3RhdXJhbnQ8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+KyQyMzwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRkIGlzTnVtZXJpYz48VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGRpc3BsYXk9XCJpbmxpbmUtdGFibGVcIj4tJDMyPC9UZXh0Pi4wMDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc2l6ZT1cInNtXCIgbXI9ezJ9IHNyYz1cInlvdXR1YmUucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwic21cIiBsZXR0ZXJTcGFjaW5nPVwidGlnaHRcIj5Zb3VUdWJlPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwic21cIiBjb2xvcj1cImdyYXlcIj5BcHIgNywgMjAyMSBhdCA5OjAzYW08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZD5Tb2NpYWwgTWVkaWE8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZCBpc051bWVyaWM+KyQ0PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGQgaXNOdW1lcmljPjxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZGlzcGxheT1cImlubGluZS10YWJsZVwiPi0kMTEyPC9UZXh0Pi4wMDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rib2R5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZGlzcGxheSA9PSAnc2hvdycgPyA8RmlDaGV2cm9uVXAgLz4gOiA8RmlDaGV2cm9uRG93biAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcGxheSA9PSAnc2hvdycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRGlzcGxheSgnbm9uZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlRGlzcGxheSgnc2hvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICAgIHsvKiBDb2x1bW4gMyAqL31cclxuICAgICAgICAgICAgPEZsZXhcclxuICAgICAgICAgICAgICAgIHc9e1tcIjEwMCVcIiwgXCIxMDAlXCIsIFwiMzAlXCJdfVxyXG4gICAgICAgICAgICAgICAgYmdDb2xvcj1cIiNGNUY1RjVcIiBwPVwiMyVcIlxyXG4gICAgICAgICAgICAgICAgZmxleERpcj1cImNvbHVtblwiXHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdz1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgbWluVz17W251bGwsIG51bGwsIFwiMzAwcHhcIiwgXCIzMDBweFwiLCBcIjQwMHB4XCJdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRHcm91cCBiZ0NvbG9yPVwiI2ZmZlwiIG1iPXs0fSBib3JkZXI9XCJub25lXCIgYm9yZGVyQ29sb3I9XCIjZmZmXCIgYm9yZGVyUmFkaXVzPVwiMTBweFwiIG1yPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXJFdmVudHM9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXs8RmlTZWFyY2ggY29sb3I9XCJncmF5XCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIiBib3JkZXJSYWRpdXM9XCIxMHB4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0lucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gaWNvbj17PEZpQmVsbCAvPn0gZm9udFNpemU9XCJzbVwiIGJnQ29sb3I9XCIjZmZmXCIgYm9yZGVyUmFkaXVzPVwiNTAlXCIgcD1cIjEwcHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHc9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoPXsyNX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYmdDb2xvcj1cIiNCNTcyOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1MCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIiNmZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnk9XCJjZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtbD1cIi0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9XCItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHpJbmRleD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwieHNcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgMlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGxldHRlclNwYWNpbmc9XCJ0aWdodFwiPk15IENhcmRzPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAge3ZhbHVlID09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdD17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoPVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0dyYWRpZW50PVwibGluZWFyKHRvLXQsICNCNTcyOTUsICMyOTI1OUEpXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IHA9XCIxZW1cIiBjb2xvcj1cIiNmZmZcIiBmbGV4RGlyPVwiY29sdW1uXCIgaD1cIjEwMCVcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiB3PVwiMTAwJVwiIGFsaWduPVwiZmxleC1zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmF5LjQwMFwiPkN1cnJlbnQgQmFsYW5jZTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIiBmb250U2l6ZT1cInhsXCI+JDUsNzUwLjIwPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBtcj17Mn0gYXM9e0ZpQ3JlZGl0Q2FyZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+UmlzZS48L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbWI9ezR9PioqKiogKioqKiAqKioqIDEyODk8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBhbGlnbj1cImZsZXgtZW5kXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiIG1yPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIiBmb250U2l6ZT1cInhzXCI+VmFsaWQgVGhydTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj4xMi8yMzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCIgZm9udFNpemU9XCJ4c1wiPkNWVjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIj4qKio8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gYXM9e0ZpQ3JlZGl0Q2FyZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAge3ZhbHVlID09IDIgJiZcclxuICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtdD17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdz1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoPVwiMjAwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBiZ0dyYWRpZW50PVwibGluZWFyKHRvLXQsIHllbGxvdy4zMDAsIGJsdWUuNTAwKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBwPVwiMWVtXCIgY29sb3I9XCIjZmZmXCIgZmxleERpcj1cImNvbHVtblwiIGg9XCIxMDAlXCIganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCIgdz1cIjEwMCVcIiBhbGlnbj1cImZsZXgtc3RhcnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JheS40MDBcIj5DdXJyZW50IEJhbGFuY2U8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCIgZm9udFNpemU9XCJ4bFwiPiQzNTAuMDA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG1yPXsyfSBhcz17RmlDcmVkaXRDYXJkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5SaXNlLjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtYj17NH0+KioqKiAqKioqICoqKiogODk1NjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiZmxleC1lbmRcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwiY29sdW1uXCIgbXI9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiIGZvbnRTaXplPVwieHNcIj5WYWxpZCBUaHJ1PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPjkvMjQ8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiIGZvbnRTaXplPVwieHNcIj5DVlY8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCI+KioqPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGFzPXtGaUNyZWRpdENhcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHt2YWx1ZSA9PSAzICYmXHJcbiAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCIyNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXQ9ezR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHc9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaD1cIjIwMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmdHcmFkaWVudD1cImxpbmVhcih0by10LCBvcmFuZ2UuMzAwLCBwaW5rLjYwMClcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggcD1cIjFlbVwiIGNvbG9yPVwiI2ZmZlwiIGZsZXhEaXI9XCJjb2x1bW5cIiBoPVwiMTAwJVwiIGp1c3RpZnk9XCJzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiIHc9XCIxMDAlXCIgYWxpZ249XCJmbGV4LXN0YXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggZmxleERpcj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cImdyYXkuNDAwXCI+Q3VycmVudCBCYWxhbmNlPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiIGZvbnRTaXplPVwieGxcIj4kMiwxNTAuNzI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG1yPXsyfSBhcz17RmlDcmVkaXRDYXJkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5SaXNlLjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtYj17NH0+KioqKiAqKioqICoqKiogODM1MzwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiZmxleC1lbmRcIiBqdXN0aWZ5PVwic3BhY2UtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleCBmbGV4RGlyPVwiY29sdW1uXCIgbXI9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiIGZvbnRTaXplPVwieHNcIj5WYWxpZCBUaHJ1PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPjExLzIyPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIiBmb250U2l6ZT1cInhzXCI+Q1ZWPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiPioqKjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBhcz17RmlDcmVkaXRDYXJkfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIG10PXsyfT5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnQ29sb3I9e3ZhbHVlID09IDEgPyBcImdyYXkuNjAwXCIgOiBcImdyYXkuNDAwXCJ9IHNpemU9XCJ4c1wiIG14PXsxfSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VWYWx1ZSgxKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnQ29sb3I9e3ZhbHVlID09IDIgPyBcImdyYXkuNjAwXCIgOiBcImdyYXkuNDAwXCJ9IHNpemU9XCJ4c1wiIG14PXsxfSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VWYWx1ZSgyKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGJnQ29sb3I9e3ZhbHVlID09IDMgPyBcImdyYXkuNjAwXCIgOiBcImdyYXkuNDAwXCJ9IHNpemU9XCJ4c1wiIG14PXsxfSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VWYWx1ZSgzKX0gLz5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgIDxGbGV4IGZsZXhEaXI9XCJjb2x1bW5cIiBteT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIiBtYj17Mn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PkJhbGFuY2U8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRXZWlnaHQ9XCJib2xkXCI+JDE0MC40MjwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cInNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+Q3JlZGl0IExpbWl0PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250V2VpZ2h0PVwiYm9sZFwiPiQxNTAuMDA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgbGV0dGVyU3BhY2luZz1cInRpZ2h0XCIgc2l6ZT1cIm1kXCIgbXk9ezR9PlNlbmQgbW9uZXkgdG88L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyR3JvdXAgc2l6ZT1cIm1kXCIgbWF4PXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9XCJhdmF0YXItMi5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz1cImF2YXRhci0zLmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiYXZhdGFyLTQuanBnXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEF2YXRhciBzcmM9XCJhdmF0YXItNC5qcGdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz1cImF2YXRhci00LmpwZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BdmF0YXJHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8QXZhdGFyIGljb249ezxGaVBsdXMgLz59IG1sPXsyfSBjb2xvcj1cIiNmZmZcIiBiZ0NvbG9yPVwiZ3JheS4zMDBcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJncmF5XCIgbXQ9ezEwfSBtYj17Mn0+Q2FyZCBudW1iZXI8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyRXZlbnRzPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXs8RmlDcmVkaXRDYXJkIGNvbG9yPVwiZ3JheS43MDBcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwibnVtYmVyXCIgcGxhY2Vob2xkZXI9XCJ4eHh4IHh4eHggeHh4eCB4eHh4XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwiZ3JheVwiIG10PXs0fSBtYj17Mn0+U3VtPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPElucHV0R3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0TGVmdEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9pbnRlckV2ZW50cz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17PEZpRG9sbGFyU2lnbiBjb2xvcj1cImdyYXkuNzAwXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiMTMwLjAwXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSW5wdXRHcm91cD5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gbXQ9ezR9IGJnQ29sb3I9XCJibGFja0FscGhhLjkwMFwiIGNvbG9yPVwiI2ZmZlwiIHA9ezd9IGJvcmRlclJhZGl1cz17MTV9PlNlbmQgbW9uZXk8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRmxleCIsIkhlYWRpbmciLCJBdmF0YXIiLCJBdmF0YXJHcm91cCIsIlRleHQiLCJJY29uIiwiSWNvbkJ1dHRvbiIsIlRhYmxlIiwiVGhlYWQiLCJUYm9keSIsIlRyIiwiVGgiLCJUZCIsIkRpdmlkZXIiLCJMaW5rIiwiQm94IiwiQnV0dG9uIiwiSW5wdXQiLCJJbnB1dEdyb3VwIiwiSW5wdXRMZWZ0RWxlbWVudCIsIkRhc2hib2FyZCIsIkZpSG9tZSIsInRleHREZWNvciIsIkZpUGllQ2hhcnQiLCJGaURvbGxhclNpZ24iLCJGaUJveCIsImRpc3BsYXkiLCJjaGFuZ2VEaXNwbGF5IiwidmFsdWUiLCJGaUNyZWRpdENhcmQiLCJjaGFuZ2VWYWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=