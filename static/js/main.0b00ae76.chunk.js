(this["webpackJsonpfaiyaz-vaid"]=this["webpackJsonpfaiyaz-vaid"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/3.141fb207.jpg"},37:function(e,a,t){e.exports=t.p+"static/media/me-1.cf5ae32f.jpg"},38:function(e,a,t){e.exports=t.p+"static/media/me.b31f2878.jpg"},41:function(e,a,t){e.exports=t(70)},46:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},70:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),s=t.n(r),i=(t(46),t(10)),o=t(11),c=t(13),m=t(12),d=t(35),u=t.n(d),p=(t(47),t(48),t(49),t(50),t(6)),f=t(17),h=t(7),E=t(8),g=t.n(E),v=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"closeMobileMenu",value:function(e){document.body.className=document.body.className.replace("mmenu-push","")}},{key:"render",value:function(){return l.a.createElement("section",{className:"mobile-menu d-lg-none d-md-none"},l.a.createElement(f.a,{bg:"transparent"},l.a.createElement(p.a,null,l.a.createElement(f.a.Collapse,{id:"mobile-navbar-nav"},l.a.createElement(h.a,{as:"ul",defaultActiveKey:"#home"},l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#home",beforeAnimate:this.closeMobileMenu,animate:{offset:0,duration:800},className:"nav-link"},"Home")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#about",beforeAnimate:this.closeMobileMenu,animate:{offset:-50,duration:800},className:"nav-link"},"About")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#skills",beforeAnimate:this.closeMobileMenu,animate:{offset:-50,duration:800},className:"nav-link"},"Skills")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#services",beforeAnimate:this.closeMobileMenu,animate:{offset:-50,duration:800},className:"nav-link"},"Services")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#portfolio",beforeAnimate:this.closeMobileMenu,animate:{offset:-50,duration:800},className:"nav-link"},"Portfolio")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#contact",beforeAnimate:this.closeMobileMenu,animate:{offset:-50,duration:800},className:"nav-link"},"Contact")))))))}}]),t}(l.a.Component),b=t(36),w=t.n(b),y=t(9),N=t(3),k=t(37),C=t.n(k),_=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={activeClass:"bigscreen-header"},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){var a="bigscreen-header nav_scroll";0===window.scrollY&&(a="bigscreen-header"),e.setState({activeClass:a})})),w()(document).ready((function(e){function a(s){var i=l(s);if(s.parents(".cd-headline").hasClass("type")){var o=s.parent(".cd-words-wrapper");o.addClass("selected").removeClass("waiting"),setTimeout((function(){o.removeClass("selected"),s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")}),500),setTimeout((function(){t(i,150)}),1300)}else if(s.parents(".cd-headline").hasClass("letters")){var c=s.children("i").length>=i.children("i").length;!function t(n,s,i,o){n.removeClass("in").addClass("out"),n.is(":last-child")?i&&setTimeout((function(){a(l(s))}),2500):setTimeout((function(){t(n.next(),s,i,o)}),o);if(n.is(":last-child")&&e("html").hasClass("no-csstransitions")){var c=l(s);r(s,c)}}(s.find("i").eq(0),s,c,50),n(i.find("i").eq(0),i,c,50)}else s.parents(".cd-headline").hasClass("clip")?s.parents(".cd-words-wrapper").animate({width:"2px"},600,(function(){r(s,i),t(i)})):s.parents(".cd-headline").hasClass("loading-bar")?(s.parents(".cd-words-wrapper").removeClass("is-loading"),r(s,i),setTimeout((function(){a(i)}),3800),setTimeout((function(){s.parents(".cd-words-wrapper").addClass("is-loading")}),800)):(r(s,i),setTimeout((function(){a(i)}),2500))}function t(e,t){e.parents(".cd-headline").hasClass("type")?(n(e.find("i").eq(0),e,!1,t),e.addClass("is-visible").removeClass("is-hidden")):e.parents(".cd-headline").hasClass("clip")&&e.parents(".cd-words-wrapper").animate({width:e.width()+10},600,(function(){setTimeout((function(){a(e)}),1500)}))}function n(e,t,l,r){e.addClass("in").removeClass("out"),e.is(":last-child")?(t.parents(".cd-headline").hasClass("type")&&setTimeout((function(){t.parents(".cd-words-wrapper").addClass("waiting")}),200),l||setTimeout((function(){a(t)}),2500)):setTimeout((function(){n(e.next(),t,l,r)}),r)}function l(e){return e.is(":last-child")?e.parent().children().eq(0):e.next()}function r(e,a){e.removeClass("is-visible").addClass("is-hidden"),a.removeClass("is-hidden").addClass("is-visible")}!function(){t=e(".cd-headline.letters").find("b"),t.each((function(){var a=e(this),t=a.text().split(""),n=a.hasClass("is-visible");for(var l in t)a.parents(".rotate-2").length>0&&(t[l]="<em>"+t[l]+"</em>"),t[l]=n?'<i class="in">'+t[l]+"</i>":"<i>"+t[l]+"</i>";var r=t.join("");a.html(r).css("opacity",1)})),function(t){var n=2500;t.each((function(){var t=e(this);if(t.hasClass("loading-bar"))n=3800,setTimeout((function(){t.find(".cd-words-wrapper").addClass("is-loading")}),800);else if(t.hasClass("clip")){var l=t.find(".cd-words-wrapper"),r=l.width()+10;l.css("width",r)}else if(!t.hasClass("type")){var s=t.find(".cd-words-wrapper b"),i=0;s.each((function(){var a=e(this).width();a>i&&(i=a)})),t.find(".cd-words-wrapper").css("width",i)}setTimeout((function(){a(t.find(".is-visible").eq(0))}),n)}))}(e(".cd-headline"));var t}(),e(window).on("resize",(function(){setTimeout((function(){var a=e(".cd-words-wrapper b").width();e(".cd-words-wrapper").css("width",a)}),100)}))}))}},{key:"render",value:function(){return l.a.createElement("section",{className:"home svg_shape bg_image",id:"home",style:{backgroundImage:"url("+C.a+")"}},l.a.createElement("div",{className:"full_height"},l.a.createElement(f.a,{collapseOnSelect:!0,expand:"md",bg:"transparent",fixed:"top",className:"".concat(this.state.activeClass)},l.a.createElement(p.a,null,l.a.createElement(f.a.Brand,{href:"#home"},"FAIYAZ"),l.a.createElement("button",{className:"mobile-menu-trigger navbar-toggler collapsed",onClick:this.activateMobileMenu},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement(f.a.Collapse,{id:"basic-navbar-nav",className:"justify-content-end"},l.a.createElement(h.a,{as:"ul",defaultActiveKey:"#home"},l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#home",animate:{offset:0,duration:800},className:"nav-link"},"Home")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#about",animate:{offset:-50,duration:800},className:"nav-link"},"About")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#skills",animate:{offset:-50,duration:800},className:"nav-link"},"Skills")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#services",animate:{offset:-50,duration:800},className:"nav-link"},"Services")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#portfolio",animate:{offset:-50,duration:800},className:"nav-link"},"Portfolio")),l.a.createElement(h.a.Item,{as:"li"},l.a.createElement(g.a,{to:"#contact",animate:{offset:-50,duration:800},className:"nav-link"},"Contact")))))),l.a.createElement(p.a,null,l.a.createElement(y.a,{style:{height:"100vh"}},l.a.createElement(N.a,{className:"align-self-center"},l.a.createElement("h3",null,"Hello, I'm Faiyaz Vaid"),l.a.createElement("h1",{className:"cd-headline letters rotate-2 is-full-width"},l.a.createElement("span",{className:"cd-words-wrapper"},l.a.createElement("b",{className:"is-visible"},"Developer"),l.a.createElement("b",null,"Freelancer")))))),l.a.createElement(p.a,{className:"go_down_container"},l.a.createElement("div",{className:"go_down"},l.a.createElement(g.a,{to:"#about",animate:{offset:-50,duration:800},className:"smooth_scroll"},l.a.createElement("span",null),l.a.createElement("span",null))))),l.a.createElement("svg",{className:"curveDownColor",xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100",viewBox:"0 0 100 100",preserveAspectRatio:"none",style:{fill:"#fff"}}," ",l.a.createElement("path",{d:"M0 0 C 50 100 80 100 100 0 Z"})," "))}},{key:"activateMobileMenu",value:function(e){e.preventDefault(),document.body.classList.contains("mmenu-push")?document.body.className=document.body.className.replace("mmenu-push",""):document.body.classList.add("mmenu-push")}}]),t}(l.a.Component),x=t(38),I=t.n(x);var D=function(){return l.a.createElement("section",{className:"about padding-top-110 padding-bottom-90",id:"about"},l.a.createElement(p.a,null,l.a.createElement(y.a,null,l.a.createElement(N.a,{lg:6,md:6,sm:12},l.a.createElement("div",{className:"my__img"},l.a.createElement("img",{src:I.a,alt:""}))),l.a.createElement(N.a,{lg:6,md:6,sm:12},l.a.createElement("h3",null,"Hello! My Name is Faiyaz Vaid"),l.a.createElement("p",null,"I'm 28 years old web developer based in India, specializing in Wordpress Development. I build clean, appealing, and functional websites which comply with the latest web standards."),l.a.createElement("p",null,"From last 5 years I am working on beautiful yet challenging tasks. Keep working let me keep healty and knowledgeful."),l.a.createElement("p",null,"Its my habit to ask a question before diving into any task and which always help me as well as my clients to resolve their problem."),l.a.createElement("p",null,"I have worked on many frameworks of PHP but then I found wordpress very interesting. People think wordpress is just blogging software but they are not aware that this is known as big CMS giant! Trust me! you will fall in love with wordpress once you get to know how easy it is."),l.a.createElement("div",{className:"follow-me"},l.a.createElement("h6",null,"Follow Me :"),l.a.createElement("ul",{className:"text-center list-unstyled social"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/faiyaz.vaid",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-facebook fa-2x"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/vaidfaiyaz",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-twitter fa-2x"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://in.linkedin.com/in/faiyaz-vaid-9708ab65",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin fa-2x"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"http://instagram.com/faiyaz.vaid",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram fa-2x"})))))))))},j=t(18),M=t.n(j);var A=function(){return l.a.createElement("section",{className:"skills padding-top-110 padding-bottom-90 primary_bg",id:"skills"},l.a.createElement(p.a,null,l.a.createElement("div",{className:"sec_title"},l.a.createElement("h2",null,"Skills")),l.a.createElement(y.a,null,l.a.createElement(N.a,{lg:2,md:3,sm:6,className:"md-5"},l.a.createElement("div",{className:"skill-wrapper"},l.a.createElement("h3",null,"PHP"),l.a.createElement(M.a,{width:"100%",height:"100%",fontColor:"white",trackWidth:"10",percentage:"80",trackPathColor:"#fff",trackBorderColor:"#ccc",hollowBackgroundColor:"#787CB4",defColor:{fair:"#787CB4",good:"#787CB4",excellent:"#787CB4",poor:"#787CB4"}}))),l.a.createElement(N.a,{lg:2,md:3,sm:6,className:"md-5"},l.a.createElement("div",{className:"skill-wrapper"},l.a.createElement("h3",null,"Wordpress"),l.a.createElement(M.a,{width:"100%",height:"100%",fontColor:"white",trackWidth:"10",percentage:"70",trackPathColor:"#fff",trackBorderColor:"#ccc",hollowBackgroundColor:"#32373C",defColor:{fair:"#32373C",good:"#32373C",excellent:"#32373C",poor:"#32373C"}}))),l.a.createElement(N.a,{lg:2,md:3,sm:6,className:"md-5"},l.a.createElement("div",{className:"skill-wrapper"},l.a.createElement("h3",null,"HTML"),l.a.createElement(M.a,{width:"100%",height:"100%",fontColor:"white",trackWidth:"10",percentage:"80",trackPathColor:"#fff",trackBorderColor:"#ccc",hollowBackgroundColor:"#E44D26",defColor:{fair:"#E44D26",good:"#E44D26",excellent:"#E44D26",poor:"#E44D26"}}))),l.a.createElement(N.a,{lg:2,md:3,sm:6,className:"md-5"},l.a.createElement("div",{className:"skill-wrapper"},l.a.createElement("h3",null,"SCSS/CSS"),l.a.createElement(M.a,{width:"100%",height:"100%",fontColor:"white",trackWidth:"10",percentage:"60",trackPathColor:"#fff",trackBorderColor:"#ccc",hollowBackgroundColor:"#264DE4",defColor:{fair:"#264DE4",good:"#264DE4",excellent:"#264DE4",poor:"#264DE4"}}))),l.a.createElement(N.a,{lg:2,md:3,sm:6,className:"md-5"},l.a.createElement("div",{className:"skill-wrapper"},l.a.createElement("h3",null,"jQuery"),l.a.createElement(M.a,{width:"100%",height:"100%",fontColor:"white",trackWidth:"10",percentage:"60",trackPathColor:"#fff",trackBorderColor:"#ccc",hollowBackgroundColor:"#0968AC",defColor:{fair:"#0968AC",good:"#0968AC",excellent:"#0968AC",poor:"#0968AC"}}))),l.a.createElement(N.a,{lg:2,md:3,sm:6,className:"md-5"},l.a.createElement("div",{className:"skill-wrapper"},l.a.createElement("h3",null,"Hubspot"),l.a.createElement(M.a,{width:"100%",height:"100%",fontColor:"white",trackWidth:"10",percentage:"70",trackPathColor:"#fff",trackBorderColor:"#ccc",hollowBackgroundColor:"#F4795A",defColor:{fair:"#F4795A",good:"#F4795A",excellent:"#F4795A",poor:"#F4795A"}}))))))};var S=function(){return l.a.createElement("section",{className:"services padding-top-110 padding-bottom-90",id:"services"},l.a.createElement(p.a,null,l.a.createElement("div",{className:"sec_title"},l.a.createElement("h2",null,"Services")),l.a.createElement(y.a,null,l.a.createElement(N.a,{lg:4,md:4,sm:12,className:"mb-5"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fa fa-desktop"})),l.a.createElement("h3",null,"Web Development"),l.a.createElement("p",null,"Whether a new website or existing website or need changes to website I am always available to help you out."))),l.a.createElement(N.a,{lg:4,md:4,sm:12,className:"mb-5"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fa fa-magic"})),l.a.createElement("h3",null,"Frontend Development"),l.a.createElement("p",null,"Do you have design and want to implement it on web? You are on right place. Let's get in touch and start the work."))),l.a.createElement(N.a,{lg:4,md:4,sm:12,className:"mb-5"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fa fa-bolt"})),l.a.createElement("h3",null,"Web Optimization"),l.a.createElement("p",null,"Do you have website which is running slow? You have good choice just contact me so I can convert your slow turtle to faster rabbit! :)"))),l.a.createElement(N.a,{lg:4,md:4,sm:12,className:"mb-5"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fa fa-lock"})),l.a.createElement("h3",null,"Web Security"),l.a.createElement("p",null,"Are you afraid of being hacked! Or your website has been hacked! Don't worry! I will help you out to increase your website security as well as I will recover your hacked website."))),l.a.createElement(N.a,{lg:4,md:4,sm:12,className:"mb-5"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fa fa-plug"})),l.a.createElement("h3",null,"Plugin Development"),l.a.createElement("p",null,"Are you looking for the plugin developer? You are at the right place! I can help you out to implement your ideas through wordpress plugin. Let's get in touch!"))),l.a.createElement(N.a,{lg:4,md:4,sm:12,className:"mb-5"},l.a.createElement("div",{className:"content"},l.a.createElement("div",{className:"icon"},l.a.createElement("i",{className:"fa fa-hubspot"})),l.a.createElement("h3",null,"Hubspot Development"),l.a.createElement("p",null,"Do you want to develop or move website to Hubspot CMS? You are looking at the right page. Let's get in touch to work together to implement your desired website on Hubspot."))))))},O=t(39),z=t.n(O),B=t(40),P=t.n(B),F=t(19),W=t.n(F),H="",T=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).handleDone=function(e){H=new z.a(".grid",{itemSelector:".grid-item",percentPosition:!0})},e.filterIso=function(e){var a=e.target.getAttribute("data-filter");console.log(a),H.arrange({filter:a})},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("section",{className:"portfolio padding-top-110 padding-bottom-90 primary_bg",id:"portfolio"},l.a.createElement(P.a,{done:this.handleDone},l.a.createElement(p.a,null,l.a.createElement("div",{className:"sec_title"},l.a.createElement("h2",null,"Portfolio")),l.a.createElement("ul",{className:"list-unstyled ul-filter"},l.a.createElement("li",{"data-filter":"*",className:"active_filter",onClick:this.filterIso},"all"),l.a.createElement("li",{"data-filter":".wordpress",onClick:this.filterIso},"Wordpress"),l.a.createElement("li",{"data-filter":".woocommerce",onClick:this.filterIso},"Woocommerce"),l.a.createElement("li",{"data-filter":".optimization",onClick:this.filterIso},"Optimization"),l.a.createElement("li",{"data-filter":".optimization",onClick:this.filterIso},"Plugins"),l.a.createElement("li",{"data-filter":".optimization",onClick:this.filterIso},"Hubspot")),l.a.createElement(y.a,{className:"grid"},l.a.createElement(N.a,{md:"4",sm:"6",xs:"12",className:"grid-item wordpress"},l.a.createElement("div",{className:"box animated1 animated1_scroll fadeInUp",style:{animationDelay:"0.3s"}},l.a.createElement("div",{className:"my_img","data-mfp-src":"<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/1.jpg"},l.a.createElement("img",{src:W.a,alt:""})))),l.a.createElement(N.a,{md:"4",sm:"6",xs:"12",className:"grid-item wordpress"},l.a.createElement("div",{className:"box animated1 animated1_scroll fadeInUp",style:{animationDelay:"0.3s"}},l.a.createElement("div",{className:"my_img","data-mfp-src":"<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg"},l.a.createElement("img",{src:W.a,alt:""})))),l.a.createElement(N.a,{md:"4",sm:"6",xs:"12",className:"grid-item wordpress"},l.a.createElement("div",{className:"box animated1 animated1_scroll fadeInUp",style:{animationDelay:"0.3s"}},l.a.createElement("div",{className:"my_img","data-mfp-src":"<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg"},l.a.createElement("img",{src:W.a,alt:""})))),l.a.createElement(N.a,{md:"4",sm:"6",xs:"12",className:"grid-item woocommerce"},l.a.createElement("div",{className:"box animated1 animated1_scroll fadeInUp",style:{animationDelay:"0.3s"}},l.a.createElement("div",{className:"my_img","data-mfp-src":"<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg"},l.a.createElement("img",{src:W.a,alt:""})))),l.a.createElement(N.a,{md:"4",sm:"6",xs:"12",className:"grid-item wordpress"},l.a.createElement("div",{className:"box animated1 animated1_scroll fadeInUp",style:{animationDelay:"0.3s"}},l.a.createElement("div",{className:"my_img","data-mfp-src":"<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg"},l.a.createElement("img",{src:W.a,alt:""})))),l.a.createElement(N.a,{md:"4",sm:"6",xs:"12",className:"grid-item woocommerce"},l.a.createElement("div",{className:"box animated1 animated1_scroll fadeInUp",style:{animationDelay:"0.3s"}},l.a.createElement("div",{className:"my_img","data-mfp-src":"<?php echo get_template_directory_uri(); ?>/assets/images/portfolio/2.jpg"},l.a.createElement("img",{src:W.a,alt:""}))))))))}}]),t}(l.a.Component),q=t(24),L=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).submitForm=n.submitForm.bind(Object(q.a)(n)),n.state={status:""},n}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"contact padding-top-110 padding-bottom-90",id:"contact"},l.a.createElement(p.a,null,l.a.createElement("div",{className:"sec_title"},l.a.createElement("h2",null,"Contact")),l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:"12"},l.a.createElement("div",{className:"contact_form"},l.a.createElement("form",{action:"https://formspree.io/f/xqkgvoaz",method:"post"},l.a.createElement("input",{placeholder:"Name",name:"name",type:"text",className:"form-control",required:!0}),l.a.createElement("input",{placeholder:"E-mail",name:"_replyto",type:"email",className:"form-control",required:!0}),l.a.createElement("textarea",{placeholder:"Message",name:"message",className:"form-control",required:!0}),l.a.createElement("button",{type:"submit",className:"submit btn"},"Send"),l.a.createElement("div",{className:"msg_success"},l.a.createElement("p",null,"Your message has been sent. Thank you!")),l.a.createElement("div",{className:"msg_error"},l.a.createElement("p",null,"Sorry your message can not be sent."))))))))}},{key:"submitForm",value:function(e){var a=this;e.preventDefault();var t=e.target,n=new FormData(t),l=new XMLHttpRequest;l.open(t.method,t.action),l.setRequestHeader("Accept","application/json"),l.onreadystatechange=function(){l.readyState===XMLHttpRequest.DONE&&(200===l.status?(t.reset(),a.setState({status:"SUCCESS"})):a.setState({status:"ERROR"}))},l.send(n)}}]),t}(l.a.Component);var R=function(){return l.a.createElement("footer",null,l.a.createElement(p.a,{className:"text-center"},l.a.createElement("h3",null,"Faiyaz Vaid"),l.a.createElement("div",{className:"social-links"},l.a.createElement("a",{href:"https://www.facebook.com/faiyaz.vaid",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-facebook"})),l.a.createElement("a",{href:"https://twitter.com/vaidfaiyaz",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-twitter"})),l.a.createElement("a",{href:"https://in.linkedin.com/in/faiyaz-vaid-9708ab65",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-linkedin"})),l.a.createElement("a",{href:"http://instagram.com/faiyaz.vaid",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("i",{className:"fa fa-instagram"}))),l.a.createElement("p",null,"\xa9 2021 Faiyaz Vaid | All rights reserved.")))},U=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"componentDidMount",value:function(){document.title="Faiyaz Vaid | Wordpress | Frontend | Hubspot | Woocommerce | Plugin Developer in India",document.querySelector("meta[name='viewport']").content="width=device-width, initial-scale=1; maximum-scale=1",document.querySelector("meta[name='description']").content="Wordpress developer since 2015 and with expertise in Wordpress, PHP, Hubspot",u.a.load({google:{families:["Montserrat:300,400,500,600,700,800,900","Poppins:300,400,500,600,700,800,900"]}})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(_,null),l.a.createElement(D,null),l.a.createElement(A,null),l.a.createElement(S,null),l.a.createElement(T,null),l.a.createElement(L,null),l.a.createElement(R,null))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.0b00ae76.chunk.js.map