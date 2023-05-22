exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 76000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TeamMembers)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/app/about/team/page.module.css
var page_module = __webpack_require__(7633);
var page_module_default = /*#__PURE__*/__webpack_require__.n(page_module);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@mui/material/node/index.js
var node = __webpack_require__(64085);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/Facebook.js
var Facebook = __webpack_require__(97245);
// EXTERNAL MODULE: ./node_modules/@mui/icons-material/LinkedIn.js
var LinkedIn = __webpack_require__(18532);
;// CONCATENATED MODULE: ./src/app/about/team/mediaCard.js




/* harmony default export */ const mediaCard = (/*#__PURE__*/(0,react_.forwardRef)(function MediaCard(props, ref) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Card, {
        sx: {
            maxWidth: 400
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(node.CardMedia, {
                className: (page_module_default()).cardMedia,
                image: props.img,
                title: props.name
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.CardContent, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                        gutterBottom: true,
                        variant: "h5",
                        component: "div",
                        children: props.name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                        variant: "subtitle1",
                        color: "text.secondary",
                        children: props.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(node.Typography, {
                        variant: "body2",
                        color: "body2",
                        className: (page_module_default()).bio,
                        children: props.bio
                    })
                ]
            })
        ]
    });
}));

;// CONCATENATED MODULE: ./src/app/about/team/modal.js





/* harmony default export */ const modal = (/*#__PURE__*/(0,react_.forwardRef)(function BasicModal(props, ref) {
    const [open, setOpen] = (0,react_.useState)(false);
    const [name, setName] = (0,react_.useState)(null);
    const [title, setTitle] = (0,react_.useState)(null);
    const [bio, setBio] = (0,react_.useState)(null);
    const [img, setImg] = (0,react_.useState)(null);
    (0,react_.useImperativeHandle)(ref, ()=>({
            handleOpen (teamMember) {
                setOpen(true);
                setName(teamMember.name);
                setTitle(teamMember.title);
                setBio(teamMember.bio);
                setImg(teamMember.img);
            }
        }));
    const handleClose = ()=>setOpen(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(node.Modal, {
            open: open,
            onClose: ()=>handleClose(),
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (page_module_default()).modal,
                children: /*#__PURE__*/ jsx_runtime_.jsx(mediaCard, {
                    name: name,
                    title: title,
                    bio: bio,
                    img: img
                })
            })
        })
    });
}));

;// CONCATENATED MODULE: ./src/app/about/team/page.js
/* __next_internal_client_entry_do_not_use__ default auto */ 






function TeamMembers() {
    const modalRef = (0,react_.useRef)();
    const imgListItemRef = (0,react_.useRef)();
    const [visibleTeamMemberName, setVisibleTeamMemberName] = (0,react_.useState)();
    const [mobile, setMobile] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        setMobile(window.innerWidth <= 500);
        window.addEventListener("resize", ()=>{
            setMobile(window.innerWidth <= 500);
        });
        return ()=>{
            window.removeEventListener("resize", ()=>{
                setWindowWidth(window.innerWidth);
            });
        };
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.Grid, {
        item: true,
        xs: 12,
        className: (page_module_default()).teamContainer,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(modal, {
                ref: modalRef
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(node.ImageList, {
                cols: mobile ? 1 : 4,
                gap: 16,
                children: itemData.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(node.ImageListItem, {
                        ref: imgListItemRef,
                        className: (page_module_default()).listItem,
                        onMouseEnter: ()=>setVisibleTeamMemberName(item.name),
                        onMouseLeave: ()=>setVisibleTeamMemberName(null),
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: `${item.img}?w=248&fit=crop&auto=format`,
                                srcSet: `${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`,
                                alt: item.title,
                                loading: "lazy",
                                onClick: ()=>modalRef.current.handleOpen(item)
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(node.Slide, {
                                direction: "up",
                                in: mobile || item.name === visibleTeamMemberName,
                                container: imgListItemRef.current,
                                children: /*#__PURE__*/ jsx_runtime_.jsx(node.ImageListItemBar, {
                                    position: mobile ? "below" : "bottom",
                                    title: item.name,
                                    subtitle: item.title,
                                    actionIcon: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                        children: [
                                            item.facebook && /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                                                className: (page_module_default()).iconButton,
                                                "aria-label": `info about ${item.name}`,
                                                onClick: ()=>window.open(item.facebook),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(Facebook/* default */.Z, {
                                                    className: (page_module_default()).facebookIcon
                                                })
                                            }),
                                            item.linkedIn && /*#__PURE__*/ jsx_runtime_.jsx(node.IconButton, {
                                                className: (page_module_default()).iconButton,
                                                "aria-label": `info about ${item.name}`,
                                                onClick: ()=>window.open(item.linkedIn),
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(LinkedIn/* default */.Z, {
                                                    className: (page_module_default()).linkedInIcon
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        ]
                    }, item.img))
            })
        ]
    });
}
const itemData = [
    {
        img: "/images/bio/Webb_Bio.jpg",
        name: "Web Chenault",
        title: "Founder & Visionary",
        facebook: null,
        linkedIn: null,
        bio: "The late Webb Chenault had a passion and heart for the Haitian children. His vision to create an orphanage in Haiti, and his willingness to entrust his property to Red Bridge Baptist Church, allowed Haiti Home of Hope to be founded. Only eternity will reveal the fruitfulness of this man’s faithfulness."
    },
    {
        img: "/images/bio/Campbell_Bio.jpg",
        name: "Bill and Jennifer Campbell",
        title: "Directors of Field Operations",
        facebook: "https://www.facebook.com/jennifer.w.campbell.98",
        linkedIn: null,
        bio: "Bill and Jennifer were commissioned to the field on January 5, 2003 by Red Bridge Baptist Church. They have led and directed the ministry since the foundation. Bill and Jennifer direct all aspects of the work on the ground at the Haiti Home of Hope. Their ministry involves full time care for 44 orphans, running the Feeding Clinic and Milk Clinic every week, maintenance of the property, directing the Haitian staff, and many more tasks. Their dedication and servant attitude towards the Lord through serving these children is truly an inspiration for all."
    },
    {
        img: "/images/bio/Pastor_Bio.jpg",
        name: "Dr. Victor Borden",
        title: "President",
        facebook: "https://www.facebook.com/vic.borden",
        linkedIn: null,
        bio: `Dr. Victor B. Borden became the Senior Pastor of Red Bridge Baptist Church in Kansas City, MO in 1993. Prior to serving as Senior Pastor, he was RBBC's Associate Pastor from 1986 to 1993.
    \n As the vision and inspiration of Webb Chenault was presented to RBBC, Vic had the privilege of being one of the first boots on the ground to evaluate the possibility of starting the ministry. Upon returning from Haiti in 2001(in 2001 added), Vic was jazzed at the blessing God had entrusted to this small Midwestern church.
    \n Vic still wears many hats in the ministry serving in roles such as trip coordinator, community liaison, organizing fundraisers, and chief cheerleader.  He is always willing to share with others what the Lord has done in Haiti. Vic Borden serves as President of the Board of Directors.`
    },
    {
        img: "/images/bio/Chris_Bio.jpg",
        name: "Chris Brennan",
        title: "Chairman",
        facebook: "https://www.facebook.com/brenny007",
        linkedIn: "https://www.linkedin.com/in/chris-brennan-405a6034",
        bio: "Chris has been the Chairman of the Haiti Home of Hope, Inc since 2012. He has served with the ministry in multiple roles since 2007. Chris has a Bachelor’s of Science in Computer Information Systems from DeVry University. After graduating, he went on to work at Cerner, a healthcare technology company, for 10 years as a Manager/Software Architect customizing back office solutions for Cerner and multiple health systems. He currently serves as the Director of Technology at Ascension, the largest nonprofit health system in the U.S."
    }
];


/***/ }),

/***/ 7633:
/***/ ((module) => {

// Exports
module.exports = {
	"teamContainer": "page_teamContainer__xIIoR",
	"listItem": "page_listItem__L3pAU",
	"modal": "page_modal__VweAm",
	"bio": "page_bio__G0HsP",
	"cardMedia": "page_cardMedia__Nyyyd",
	"iconButton": "page_iconButton__SU_Qs",
	"facebookIcon": "page_facebookIcon__Zue3P",
	"linkedInIcon": "page_linkedInIcon__UIrND"
};

module.exports.__checksum = "4a79a3e0ac69"


/***/ })

};
;