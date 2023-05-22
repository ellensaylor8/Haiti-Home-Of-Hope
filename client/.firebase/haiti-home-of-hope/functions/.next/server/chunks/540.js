exports.id = 540;
exports.ids = [540];
exports.modules = {

/***/ 77540:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Story)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/about/story/page.module.css
var page_module = __webpack_require__(35134);
var page_module_default = /*#__PURE__*/__webpack_require__.n(page_module);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Typography/index.js
var Typography = __webpack_require__(43360);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/Grid/index.js
var Grid = __webpack_require__(89216);
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
;// CONCATENATED MODULE: ./src/app/about/story/imageList.js



function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`
    };
}
function QuiltedImageList() {
    return /*#__PURE__*/ jsx_runtime_.jsx(node.ImageList, {
        className: (page_module_default()).imgList,
        variant: "quilted",
        cols: 4,
        rowHeight: 121,
        children: itemData.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(node.ImageListItem, {
                cols: item.cols || 1,
                rows: item.rows || 1,
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    ...srcset(item.img, 121, item.rows, item.cols),
                    alt: item.title,
                    loading: "lazy",
                    className: (page_module_default()).imgListItem
                })
            }, item.img))
    });
}
const itemData = [
    {
        img: "/images/ministry/HHH_compound_2008.jpg",
        title: "HHH Compound 2008",
        rows: 2,
        cols: 2
    },
    {
        img: "/images/ministry/campfire.jpg",
        title: "Campfire"
    },
    {
        img: "/images/ministry/Kiddos.jpg",
        title: "Kiddos"
    },
    {
        img: "/images/ministry/Devenel.jpg",
        title: "Devenel"
    },
    {
        img: "/images/ministry/Preaching_Gaspar.jpg",
        title: "Preaching in Gaspar"
    },
    {
        img: "/images/ministry/Family_NoText.jpg",
        title: "Family",
        cols: 2
    },
    {
        img: "/images/ministry/SuckingThumb.jpg",
        title: "Kiddo sucking her thumb",
        rows: 2,
        cols: 2
    },
    {
        img: "/images/ministry/babyWoody5mths.jpg",
        title: "Baby Woody 5 mths"
    },
    {
        img: "/images/ministry/Lumanes.jpg",
        title: "Lumanes"
    },
    {
        img: "/images/ministry/Kiddo_RedShirt.jpg",
        title: "Kiddo in Red Shirt",
        rows: 2,
        cols: 2
    },
    {
        img: "/images/ministry/Jenn_Infant.jpg",
        title: "Jennifer holding an infant"
    },
    {
        img: "/images/ministry/CircleOfKiddos.jpg",
        title: "Circle of children"
    },
    {
        img: "/images/ministry/lavi.jpg",
        title: "Lavi"
    },
    {
        img: "/images/ministry/Fricot.jpg",
        title: "Fricot 8 yrs old"
    }
];

;// CONCATENATED MODULE: ./src/app/about/story/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Story() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
        container: true,
        className: (page_module_default()).storyContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
                className: (page_module_default()).imgListGrid,
                children: /*#__PURE__*/ jsx_runtime_.jsx(QuiltedImageList, {})
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Grid_default()), {
                item: true,
                xs: 12,
                md: 6,
                className: (page_module_default()).storyDescription,
                children: [
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                        variant: "h3",
                        children: "Our Story"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((Typography_default()), {
                        variant: "body1",
                        children: [
                            "Founded January 5th, 2003, Haiti Home of Hope, Inc is a non-profit 501c(3) with primary operations in Pignon, Haiti.",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "Haiti Home of Hope operates an Orphanage, Feeding and Milk Clinics, and provides outreach to the community.",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "The ministry sits on 12 acres and consists of a boys dorm, girls dorm, missions house, library and others."
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 35134:
/***/ ((module) => {

// Exports
module.exports = {
	"storyContainer": "page_storyContainer__AUKTZ",
	"storyDescription": "page_storyDescription__sOtZq",
	"imgListGrid": "page_imgListGrid__2ib5I",
	"imgList": "page_imgList__hPq4F",
	"imgListItem": "page_imgListItem__atHKF"
};

module.exports.__checksum = "7635b55418b0"


/***/ })

};
;