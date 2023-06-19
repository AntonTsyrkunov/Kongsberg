"use strict";(self.webpackChunkbooks_search=self.webpackChunkbooks_search||[]).push([[274],{6274:function(e,n,l){l.r(n);var i=l(9439),t=l(5488),s=l(854),o=l(2791),a=l(6157),r=l(2591),c=l(5373),d=l(184);n.default=function(e){var n=e.loading,l=e.authorsBooks,h=e.handleBackFromAuthor,u=e.handleBackHomeFromAuthor,m=(0,o.useState)(!1),x=(0,i.Z)(m,2),v=x[0],f=x[1],j=(0,o.useState)([]),p=(0,i.Z)(j,2),b=p[0],g=p[1],k=function(e){0===b.length?g(e):g([]),f(!v)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(a.Z,{variant:"link",onClick:function(){return u()},children:"Home"}),(0,d.jsx)(a.Z,{variant:"link",onClick:function(){return h()},children:"Searched books"})," > Authors books"]}),l&&l.length>0?n?(0,d.jsx)(s.Z,{}):(0,d.jsxs)(r.Z,{striped:!0,bordered:!0,hover:!0,responsive:!0,children:[(0,d.jsx)("thead",{className:"text-center",children:(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Book's ID"}),(0,d.jsx)("th",{children:"Title"}),(0,d.jsx)("th",{children:"Publisher"}),(0,d.jsx)("th",{children:"Date of publishing"}),(0,d.jsx)("th",{children:"Description"}),(0,d.jsx)("th",{children:"Page count"}),(0,d.jsx)("th",{children:"Thumbnail"}),(0,d.jsx)("th",{children:"Language"}),(0,d.jsx)("th",{})]})}),(0,d.jsx)("tbody",{children:l.map((function(e,n){return(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{className:"text-center",children:e.id}),(0,d.jsx)("td",{className:"text-center",children:e.volumeInfo.title}),(0,d.jsx)("td",{className:"text-center",children:e.volumeInfo.publisher?e.volumeInfo.publisher:"Unknown"}),(0,d.jsx)("td",{className:"text-center",children:e.volumeInfo.publishedDate?e.volumeInfo.publishedDate:"Unknown"}),(0,d.jsx)("td",{className:"text-center",children:e.volumeInfo.description?e.volumeInfo.description:"No description available"}),(0,d.jsx)("td",{className:"text-center",children:e.volumeInfo.pageCount}),(0,d.jsx)("td",{className:"text-center",children:e.volumeInfo.imageLinks&&e.volumeInfo.imageLinks.smallThumbnail?(0,d.jsx)("img",{src:e.volumeInfo.imageLinks.smallThumbnail,alt:"Cover",width:"50%",height:"50%"}):(0,d.jsx)("p",{children:"No thumbnail available"})}),(0,d.jsx)("td",{className:"text-center",children:e.volumeInfo.language}),(0,d.jsx)("td",{className:"text-center",children:(0,d.jsx)(a.Z,{variant:"link",onClick:function(){return k(e)},children:"Expanded view"})})]},e.id)}))})]}):null,v&&(0,d.jsxs)(t.Z,{toggleModal:k,bookdata:b,className:c.Z.modal_container,children:[(0,d.jsxs)("p",{children:["Book ID: ",b.id]}),(0,d.jsxs)("p",{children:["Book title: ",b.volumeInfo.title]}),(0,d.jsxs)("p",{children:["Publisher: ",b.volumeInfo.publisher?b.volumeInfo.publisher:null]}),(0,d.jsxs)("p",{children:["Published date: ",b.volumeInfo.publishedDate?b.volumeInfo.publishedDate:null]}),(0,d.jsxs)("p",{className:c.Z.description,children:["Description: ",b.volumeInfo.description?b.volumeInfo.description:"No description available"]}),(0,d.jsxs)("p",{children:["Page count: ",b.volumeInfo.pageCount]}),(0,d.jsx)("div",{children:b.volumeInfo.imageLinks&&b.volumeInfo.imageLinks.smallThumbnail?(0,d.jsx)("img",{src:b.volumeInfo.imageLinks.smallThumbnail,alt:"Cover",width:"50%",height:"50%"}):(0,d.jsx)("p",{children:"No thumbnail available"})}),(0,d.jsxs)("p",{children:["Language: ",b.volumeInfo.language]})]})]})}},854:function(e,n,l){var i=l(643),t=l(184);n.Z=function(){return(0,t.jsx)("div",{children:(0,t.jsx)(i.Ll,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"bars-loading",wrapperStyle:{},wrapperClass:"",visible:!0})})}},5488:function(e,n,l){var i=l(2791),t=l(4164),s=l(5373),o=l(184),a=document.getElementById("modal-root");n.Z=function(e){var n=e.toggleModal,l=e.children;e.bookdata;(0,i.useEffect)((function(){var e=function(e){"Escape"===e.code&&n()};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[n]);return(0,t.createPortal)((0,o.jsx)("div",{className:s.Z.Overlay,onClick:function(e){e.target===e.currentTarget&&n()},children:(0,o.jsx)("div",{className:"".concat(s.Z.Modal," ").concat(s.Z.modal_container),children:l})}),a)}},5373:function(e,n){n.Z={Overlay:"styles_Overlay__nMvru",Modal:"styles_Modal__25F64",img:"styles_img__m7PBM",modal_container:"styles_modal_container__ffuur","no-thumbnail":"styles_no-thumbnail__ichzL",description:"styles_description__yj9t2"}}}]);
//# sourceMappingURL=274.06c978af.chunk.js.map