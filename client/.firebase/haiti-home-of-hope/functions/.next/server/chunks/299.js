exports.id = 299;
exports.ids = [299];
exports.modules = {

/***/ 25299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Mission)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/about/mission/page.module.css
var page_module = __webpack_require__(97301);
var page_module_default = /*#__PURE__*/__webpack_require__.n(page_module);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Church.js
var Church = __webpack_require__(89927);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/AutoStories.js
var AutoStories = __webpack_require__(43255);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Favorite.js
var Favorite = __webpack_require__(13819);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Public.js
var Public = __webpack_require__(49893);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Diversity1.js
var Diversity1 = __webpack_require__(24327);
;// CONCATENATED MODULE: ./src/app/about/mission/values.js








function Values() {
    const values = [
        {
            name: "Christ-centered",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Church/* default */.Z, {})
        },
        {
            name: "Gospel-focused",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(AutoStories/* default */.Z, {})
        },
        {
            name: "Love-motivated",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Favorite/* default */.Z, {})
        },
        {
            name: "Mission-driven",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Public/* default */.Z, {})
        },
        {
            name: "Servant-minded",
            icon: /*#__PURE__*/ jsx_runtime_.jsx(Diversity1/* default */.Z, {})
        }
    ];
    return /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
        container: true,
        item: true,
        spacing: 1,
        children: values.map((value)=>/*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                xs: 12,
                md: 6,
                lg: 2,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Paper, {
                    elevation: 15,
                    className: (page_module_default()).valuePaper,
                    children: [
                        value.icon,
                        /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                            variant: "h6",
                            component: "div",
                            children: value.name
                        })
                    ]
                })
            }, value.name))
    });
}

;// CONCATENATED MODULE: ./src/app/about/mission/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Mission() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
        container: true,
        className: (page_module_default()).missionContainer,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                container: true,
                item: true,
                xs: 12,
                md: 8,
                className: (page_module_default()).missionStatement,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
                        item: true,
                        xs: 12,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                                variant: "h3",
                                children: "Our Mission"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Typography, {
                                variant: "h6",
                                children: [
                                    "The mission of Haiti Home of Hope, Inc. is to provide spiritual, physical, and emotional well-being for those most in need, through sharing the gospel, community outreach, orphan prevention, and orphan care. ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {})
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                        item: true,
                        xs: 12,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Values, {})
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.Grid, {
                item: true,
                xs: 12,
                md: 4,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    className: (page_module_default()).missionImage,
                    src: "/images/ministry/Love_the_fatherless.jpg",
                    alt: "Picture of staff member holding orphan"
                })
            })
        ]
    });
}


/***/ }),

/***/ 97301:
/***/ ((module) => {

// Exports
module.exports = {
	"missionContainer": "page_missionContainer__uEYIm",
	"missionStatement": "page_missionStatement__GupdS",
	"missionImage": "page_missionImage__6FANV",
	"valuePaper": "page_valuePaper__OLTWT"
};

module.exports.__checksum = "e3d3c9cd1c75"


/***/ })

};
;