(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[2],{16:function(e,n,t){"use strict";t.d(n,"e",(function(){return a})),t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"c",(function(){return u})),t.d(n,"f",(function(){return c})),t.d(n,"g",(function(){return l}));var a="SET_MODAL_VIEW",r="SET_AMOUNT",o="CLOSE_MODAL",i="CLEAR_FORMS",c="SET_SELLER_DATA",l="UPDATE_SELLER_DATA",u=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/},43:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f})),t.d(n,"c",(function(){return h}));var a=t(20),r=t(0),o=t.n(r),i={amount:"5",customInput:!1,modalView:-1,sellerData:{id:0,seller_id:"",cuisine_name:"",name:"",target_amount:0,amount_raised:0,num_contributions:0,num_donations:0,num_gift_cards:0,donation_amount:0,gift_card_amount:0,progress_bar_color:"",summary:"",story:"",accept_donations:!0,sell_gift_cards:!0,owner_name:"",owner_image_url:"",hero_image_url:"",business_type:"",num_employees:0,founded_year:0,website_url:"",menu_url:"",cost_per_meal:0}},c=t(19),l=t(16),u=function(e,n){var t=n.type,a=n.payload;switch(t){case l.e:return Object(c.a)({},e,{modalView:a});case l.d:return Object(c.a)({},e,{amount:a});case l.f:return Object(c.a)({},e,{sellerData:a});case l.g:return Object(c.a)({},e,{sellerData:Object(c.a)({},e.sellerData,{amount_raised:a})});case l.b:return Object(c.a)({},e,{modalView:-1,customInput:!1,amount:i.amount});case l.a:return i;default:return e}},s=o.a.createContext(i),m=o.a.createContext((function(){return null})),d=function(e){var n=o.a.useReducer(u,i),t=Object(a.a)(n,2),r=t[0],c=t[1];return o.a.createElement(s.Provider,{value:r},o.a.createElement(m.Provider,{value:c},e.children))};function h(){var e=o.a.useContext(s);if(void 0===e)throw new Error("useModalPaymentState must be used within a CountProvider");return e}function f(){var e=o.a.useContext(m);if(void 0===e)throw new Error("useModalPaymentDispatch must be used within a CountProvider");return e}},46:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"a",(function(){return m}));var a=t(3),r=t(0),o=t(96),i=t(4);function c(){var e=Object(a.a)(["\n  width: 100%;\n  height: 74vh;\n"]);return c=function(){return e},e}function l(){var e=Object(a.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: ",";\n  div {\n    color: #ab192e;\n  }\n"]);return l=function(){return e},e}var u=function(e){var n=e.isPage;return r.createElement(s,{isPage:n},r.createElement(o.a,null))},s=i.a.div(l(),(function(e){return e.isPage?"100vh":"100%"})),m=i.a.div(c())},47:function(e,n,t){},48:function(e,n,t){e.exports=t.p+"static/media/logo.909f1479.svg"},52:function(e){e.exports=JSON.parse('{"paymentProcessing":{"amount":{"header":"Please select an amount or enter a custom amount","label1":"Select an amount","label2":"Or enter any amount","minimum":"Minimum","maximum":"Maximum","amount":"amount","submit":"Next"}},"navBar":{"header":{"home":"HOME","merchants":"MERCHANTS"},"languages":{"english":"ENG","chinese":"\u4e2d\u6587"}},"buyMeal":{"header":"Gift a meal for ","subheader":"Send Chinatown Love will connect merchants with local organizations that will distribute your gifted meals to a community in need.","prompt":"Please enter how many meals to gift","explanationFirst":"By gifting a meal, your donation will still go directly to the merchant.","explanationSecond":"Our partners will then distribute vouchers with those who can benefit the most from a free meal.","totalLabel":"Total: "},"purchase":{"donation":"Donation for ","voucher":"Voucher for "},"errorPage":{"body":{"header":"Sorry Your Dumpling Was Not Found","subHeader1":"The page you are trying does not exist or has been moved.","subHeader2":"Please try going back to the homepage.","link":"GO TO HOMEPAGE"}},"merchantsPage":{"platformInfoHeader":"Our Chinatown","platformInfoDescription":"We are providing an online platform to low-tech, cash-only, Asian-owned small businesses that have been disproportionately impacted by COVID-19.","platformInfoAction":"Support local merchants by making a donation or purchasing a voucher from them.","flyerAsk":"Know of any business owners that fit our target merchant?","flyerDownload":"Download our flyer to share with them."},"merchantNavBar":{"all":"All","bakery":"Bakery","restaurant":"Restaurant","grocery":"Grocery","salon":"Salon"},"donationPool":{"header":"Checked out our merchants but not sure who to donate to first?","description1":"You can support by donating to our donation pool!","description2":"All donations will be distributed evenly to our merchants.","button":"SUPPORT CHINATOWN!"},"contributionBar":{"header":"Total Raised","vouchers":"VOUCHERS","donations":"DONATIONS","footer":"100% of all proceeds go to the businesses, and we cover the credit card processing fees."},"descriptionBox":{"header":"Meet our Target Merchant","bullet1":"Asian immigrant-owned small businesses","bullet2":"Not fluent in English, run cash-only establishments, and not tech-savvy","bullet3":"Currently struggling to pay rent, utility bill and employee wages","bullet4":"Do not have websites, online delivery service, or vouchers available","bullet5":"Located in NYC Manhattan Chinatown, Flushing, or Bensonhurst"},"storeDetails":{"storyHeader":"Story"},"ownerPanel":{"donation":"Donation","voucher":"Voucher","extraInfo":{"Type":"Type","Employees":"Employees","Founded":"Founded","Website":"Website","Menu":"Menu"}}}')},53:function(e){e.exports=JSON.parse('{"paymentProcessing":{"amount":{"header":"Please select an amount or enter a custom amount","label1":"Select an amount","label2":"Or enter any amount","minimum":"Minimum","maximum":"Maximum","amount":"amount","submit":"Next"}},"navBar":{"header":{"home":"HOME","merchants":"MERCHANTS"},"languages":{"english":"ENG","chinese":"\u4e2d\u6587"}},"buyMeal":{"header":"Gift a meal for ","subheader":"Send Chinatown Love will connect merchants with local organizations that will distribute your gifted meals to our community in need.","prompt":"Please enter how many meals to gift","explanationFirst":"By gifting a meal, your donation will still go directly to the merchant.","explanationSecond":"Our partners will then distribute vouchers with those who can benefit the most from a free meal.","totalLabel":"Total: "},"purchase":{"donation":"Donation for ","voucher":"Voucher for "},"errorPage":{"body":{"header":"Sorry Your Dumpling Was Not Found","subHeader1":"The page you are trying does not exist or has been moved.","subHeader2":"Please try going back to the homepage.","link":"GO TO HOMEPAGE"}},"merchantsPage":{"platformInfoHeader":"\u6211\u4eec\u7684\u4e2d\u56fd\u57ce","platformInfoDescription":"\u6211\u4eec\u4f1a\u63d0\u4f9b\u7f51\u4e0a\u5e73\u53f0\u53bb\u5e2e\u52a9\u4e00\u4e9b\u53d7\u5230\u75ab\u60c5\u5f71\u54cd\u7684\u4f20\u7edf\u7684\uff0c\u4e0d\u4f1a\u4f7f\u7528\u79d1\u6280\u7684\uff0c\u53ea\u6536\u73b0\u91d1\u7684\u4e9a\u6d32\u534e\u4eba\u5546\u5bb6\u3002","platformInfoAction":"\u6211\u4eec\u5c06\u4f1a\u901a\u8fc7\u52df\u96c6\u63a5\u53d7\u6350\u6b3e\u6216\u793c\u54c1\u5238\u53bb\u5e2e\u52a9\u4ed6\u4eec","flyerAsk":"Know of any business owners that fit our target merchant?","flyerDownload":"Download our flyer to share with them."},"merchantNavBar":{"all":"\u6240\u6709\u7684\u5e97\u94fa","bakery":"\u70d8\u7119\u5e97","restaurant":"\u9910\u9986","grocery":"\u6742\u8d27\u5e97","salon":"\u7f8e\u53d1\u5e97"},"donationPool":{"header":"\u5982\u679c\u4f60\u4e0d\u592a\u7f3a\u70b9\u6350\u6b3e\u7ed9\u90a3\u4e2a\u5546\u5bb6\uff1f","description1":"\u6211\u4eec\u4f1a\u628a\u4f60\u7684\u6350\u6b3e\u5e73\u5747\u5206\u914d\u7ed9\u5546\u5bb6","description2":"","button":"\u8bf7\u652f\u6301\u4e2d\u56fd\u57ce!"},"contributionBar":{"header":"\u7b79\u6b3e\u603b\u989d","vouchers":"\u4ee3\u91d1\u5238","donations":"\u6350\u6b3e","footer":"\u6240\u6709\u7684\u6536\u76ca\u5c06\u4f1a\u5230\u6240\u9700\u7684\u5546\u5bb6\u624b\u91cc\uff0c\u514d\u4fe1\u7528\u5361\u624b\u7eed\u8d39"},"descriptionBox":{"header":"\u6211\u4eec\u76ee\u6807\u5546\u4eba\u6709","bullet1":"\u4e9a\u6d32\u79fb\u6c11\u521b\u529e\u7684\u5c0f\u751f\u610f","bullet2":"\u82f1\u8bed\u4e0a\u4e0d\u6d41\u7545\uff0c\u4ee5\u73b0\u91d1\u6536\u5165\u4e3a\u4e3b\uff0c\u6216\u8005\u4e0d\u592a\u61c2\u7f51\u4e0a\u65b0\u79d1\u6280\u7684\u5546\u4eba","bullet3":"\u73b0\u5728\u8d22\u52a1\u53d7\u56f0\uff0c\u5f71\u54cd\u5230\u4ed8\u623f\u79df\uff0c\u4ed8\u6c34\u7535\u8d39\uff0c\u53ca\u53d1\u5de5\u8d44\u7ed9\u5458\u5de5\u7684\u80fd\u529b","bullet4":"\u6c92\u6709\u7f51\u5740\uff0c\u7f51\u4e0a\u5916\u5356\uff0c\u6216\u63a5\u53d7\u793c\u54c1\u5238\u7684\u670d\u52a1","bullet5":"\u5728\u7ebd\u7ea6\u4e2d\u56fd\u57ce\uff0c\u6cd5\u62c9\u76db\uff0c\u53ca\u516b\u5927\u9053\u7b49"},"storeDetails":{"storyHeader":"\u80cc\u666f\u7b80\u4ecb"},"ownerPanel":{"donation":"\u6350\u8d60","voucher":"\u8d2d\u4e70\u793c\u54c1\u5361","extraInfo":{"Type":"\u5546\u4e1a\u7c7b\u578b","Employees":"\u5458\u5de5\u4eba\u6570","Founded":"\u521b\u529e\u4e8e","Website":"Website","Menu":"Menu"}}}')},68:function(e,n,t){e.exports=t(84)},73:function(e,n,t){},84:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(44),i=t.n(o),c=(t(73),t(40)),l=t(23),u=t(52),s=t(53);c.a.use(l.f).init({initImmediate:!1,preload:["en","cn"],fallbackLng:"en",lng:"en",ns:["translation"],defaultNS:"translation",interpolation:{escapeValue:!1},resources:{en:{translation:u},cn:{translation:s}}});c.a;var m=t(20),d=t(6),h=t(13),f=t(35),p=t(46),b=t(3),w=t(4),g=t(36),v=t(61),E=t.n(v),x=t(62),y=t.n(x);t(47);function O(){var e=Object(b.a)(["\n  width: 150px;\n  height: 70px;\n\n  @media (max-width: 599px) {\n    width: 112px;\n    height: 50px;\n  }\n"]);return O=function(){return e},e}var S=function(e){e.theme;return r.a.createElement(j,{src:t(48),alt:"send chinatown love"})},j=w.a.img(O()),k=t(98);function T(){var e=Object(b.a)(["\n  cursor: pointer;\n"]);return T=function(){return e},e}function _(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n  transition: 0.1s;\n  margin: 0 20px;\n  ","\n  "," :link {\n    color: black;\n  }\n  :hover {\n    color: #9e9e9e;\n  }\n"]);return _=function(){return e},e}function P(){var e=Object(b.a)(["\n  margin: 0;\n  transition: 0.1s;\n  color: #9e9e9e;\n  font-size: 14px;\n  cursor: pointer;\n  font-weight: 200;\n  :hover {\n    color: #a7182d;\n  }\n  width: 35px;\n"]);return P=function(){return e},e}function C(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 13px;\n  width: 78px;\n  margin-left: 20px;\n  ","\n"]);return C=function(){return e},e}function M(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n  transition: 0.1s;\n  margin: 0 20px;\n  "," :link {\n    color: black;\n  }\n  :hover {\n    color: #9e9e9e;\n  }\n"]);return M=function(){return e},e}function D(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n  width: 125px;\n  justify-content: space-between;\n"]);return D=function(){return e},e}function N(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: ",";\n  width: 100%;\n  ","\n"]);return N=function(){return e},e}function A(){var e=Object(b.a)(["\n  background-color: transparent;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 90%;\n  max-width: 1280px;\n  margin: 15px auto;\n  align-items: center;\n  font-size: 14px;\n  font-family: 'Open Sans', 'Helvetica Neue', sans-serif;\n"]);return A=function(){return e},e}var R=function(e){var n=Object(k.a)(),t=n.t,o=n.i18n,i=Object(a.useState)(!1),c=Object(m.a)(i,2),l=c[0],u=c[1],s=function(e,n){e.preventDefault(),o.changeLanguage(n)},d=function(){window.innerWidth<767&&!e.menuOpen?u(!0):(u(!1),e.setMenuOpen(!1))},f=!!Object(h.f)(window.location.pathname,"/merchants");Object(a.useEffect)((function(){return window.innerWidth<767?u(!0):u(!1),window.addEventListener("resize",d),function(){window.removeEventListener("resize",d)}}),[]);return r.a.createElement(B,null,r.a.createElement(S,null),l?e.menuOpen?r.a.createElement(H,{compact:l.toString()},r.a.createElement(B,null,r.a.createElement(S,null),r.a.createElement(V,{onClick:function(n){return e.setMenuOpen(!1)}})),r.a.createElement(z,{compact:l.toString(),href:"https://sendchinatownlove.com/",i18nText:"navBar.header.home",altText:"HOME"}),r.a.createElement(F,{to:"/merchants",compact:l.toString(),onClick:function(n){return e.setMenuOpen(!1)}},t("navBar.header.merchants")),r.a.createElement(z,{compact:l.toString(),href:"https://www.sendchinatownlove.com/resource-center.html",i18nText:"RESOURCES",altText:"RESOURCES"}),r.a.createElement(z,{compact:l.toString(),href:"https://www.sendchinatownlove.com/press",i18nText:"PRESS",altText:"PRESS"})):r.a.createElement(L,null,r.a.createElement(W,{compact:l.toString()},r.a.createElement(G,{onClick:function(e){return s(e,"en")}},"ENG"),r.a.createElement("span",null,"|"),r.a.createElement(G,{onClick:function(e){return s(e,"cn")}},"\u4e2d\u6587")),r.a.createElement(E.a,{onClick:function(n){return e.setMenuOpen(!0)}})):r.a.createElement(H,{compact:l.toString()},r.a.createElement(z,{compact:l.toString(),href:"https://sendchinatownlove.com/",i18nText:"navBar.header.home",altText:"HOME"}),r.a.createElement(F,{to:"/merchants",compact:l.toString(),active:f.toString()},t("navBar.header.merchants")),r.a.createElement(z,{compact:l.toString(),href:"https://www.sendchinatownlove.com/resource-center.html",i18nText:"RESOURCES",altText:"RESOURCES"}),r.a.createElement(z,{compact:l.toString(),href:"https://www.sendchinatownlove.com/press",i18nText:"PRESS",altText:"PRESS"}),r.a.createElement(W,{compact:l.toString()},r.a.createElement(G,{onClick:function(e){return s(e,"en")}},"ENG"),r.a.createElement("span",null,"|"),r.a.createElement(G,{onClick:function(e){return s(e,"cn")}},"\u4e2d\u6587"))))},B=w.a.header(A()),H=w.a.div(N(),(function(e){return"true"===e.compact?"column":"row"}),(function(e){return"true"===e.compact?"\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right:0;\n    background-color: white;\n    z-index: 10;\n  ":"\n    max-width: 600px;\n    justify-content: flex-end;\n  "})),L=w.a.div(D()),I=w.a.a(M(),(function(e){return"true"===e.compact&&"\n    width: 100%;\n    margin: 16px auto;\n    text-align: center;\n  "})),z=function(e){var n=Object(k.a)().t,t=e.i18nText&&!n(e.i18nText).includes("navBar")?n(e.i18nText):e.altText;return r.a.createElement(I,Object.assign({},e,{compact:e.compact}),t)},W=w.a.div(C(),(function(e){return"true"===e.compact&&"margin-right: 20px;"})),G=w.a.div(P()),F=Object(w.a)(g.a)(_(),(function(e){return"true"===e.compact&&"\n    width: 100%;\n    margin: 16px auto;\n    text-align: center;\n  "}),(function(e){return"true"===e.active&&"\n    border-bottom: 1.5px #9e9e9e solid;\n  "})),V=Object(w.a)(y.a)(T());function U(){var e=Object(b.a)(["\n  text-decoration: none;\n  color: black;\n"]);return U=function(){return e},e}function J(){var e=Object(b.a)(["\n  padding: 0;\n  display: flex;\n"]);return J=function(){return e},e}function Y(){var e=Object(b.a)(["\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: row;\n  @media (min-width: 600px) {\n    order: 2;\n  }\n  @media (max-width: 599px) {\n    flex-direction: row;\n  }\n"]);return Y=function(){return e},e}function K(){var e=Object(b.a)(["\n  width: 90%;\n  max-width: 1280px;\n  margin: 0 auto;\n  display: ",";\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: ",";\n\n  span {\n    margin-left: 24px;\n    color: #a8192e;\n  }\n  @media (min-width: 600px) {\n    justify-content: space-between;\n    height: 120px;\n  }\n  @media (max-width: 599px) {\n    padding: 0 16px 0 16px;\n    height: 80px;\n  }\n"]);return K=function(){return e},e}var $=function(e){var n=e.theme,t=void 0===n?"none":n;return r.a.createElement(q,{menuOpen:e.menuOpen,theme:t},r.a.createElement("a",{href:"https://sendchinatownlove.com/"},r.a.createElement(S,{theme:t})),r.a.createElement(Q,null,r.a.createElement(X,null,r.a.createElement(Z,{href:"https://www.facebook.com/Send-Chinatown-Love-100872288240891/"},r.a.createElement("span",{className:"fa fa-facebook"}))),r.a.createElement(X,null,r.a.createElement(Z,{href:"https://instagram.com/sendchinatownlove"},r.a.createElement("span",{className:"fa fa-instagram"}))),r.a.createElement(X,null,r.a.createElement(Z,{href:"mailto:hello@sendchinatownlove.com"},r.a.createElement("span",{className:"fa fa-envelope"})))))},q=w.a.footer(K(),(function(e){return e.menuOpen?"none":"flex"}),(function(e){return"dark"===e.theme?"#f7f7f7":"#ffffff"})),Q=w.a.div(Y()),X=w.a.div(J()),Z=w.a.a(U()),ee=t(43),ne=t(42),te=t.n(ne);f.a.initialize("https://api.sendchinatownlove.com/");var ae=Object(d.a)();ae.listen((function(e){f.a.set({page:e.pathname}),f.a.pageview(e.pathname)}));var re=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(5),t.e(1),t.e(6)]).then(t.bind(null,215))})),oe=Object(a.lazy)((function(){return Promise.all([t.e(0),t.e(1),t.e(7)]).then(t.bind(null,217))})),ie=Object(a.lazy)((function(){return t.e(8).then(t.bind(null,131))}));te.a.init("781939739005509",void 0,{autoConfig:!0,debug:!0});var ce=function(){var e=Object(a.useState)(!1),n=Object(m.a)(e,2),t=n[0],o=n[1],i=function(e){var n;switch(e){case"all":n=r.a.createElement(oe,{menuOpen:t});break;case"merchants":n=r.a.createElement(h.a,{to:"/all"});break;case"seller":n=r.a.createElement(re,{menuOpen:t});break;default:n=r.a.createElement(ie,{menuOpen:t})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ee.a,null,r.a.createElement(R,{menuOpen:t,setMenuOpen:o}),n,r.a.createElement($,{menuOpen:t})))};return r.a.createElement(h.c,{history:ae},r.a.createElement(a.Suspense,{fallback:r.a.createElement(p.b,{isPage:!0})},r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/all"},i("all")),r.a.createElement(h.b,{path:"/merchants"},i("merchants")),r.a.createElement(h.b,{path:"/:id"},i("seller")),r.a.createElement(h.b,{path:"/:id#story"},i("seller")),r.a.createElement(h.b,null,i("error")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,3,4]]]);
//# sourceMappingURL=main.637f4a71.chunk.js.map