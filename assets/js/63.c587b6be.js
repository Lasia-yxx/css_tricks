(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{309:function(t,e,n){},467:function(t,e,n){"use strict";var i=n(309);n.n(i).a},497:function(t,e,n){"use strict";n.r(e);var i=function(t,e,n){var i={speed:166.67,curvature:.001,endScale:.5,progress:function(){},complete:function(){}},o={};for(var r in n=n||{},i)o[r]=n[r]||i[r];var a={mark:function(){return this},position:function(){return this},move:function(){return this},init:function(){return this}},s=o.curvature,c=0,l=!0;if(t&&e&&1==t.nodeType&&1==e.nodeType){var u={},p={},f={},d={},h={},m={};a.mark=function(){return 0==l?this:(void 0===h.x&&this.position(),t.setAttribute("data-center",[h.x,h.y].join()),e.setAttribute("data-center",[m.x,m.y].join()),this)},a.position=function(){if(0==l)return this;var n=document.documentElement.scrollLeft||document.body.scrollLeft,i=document.documentElement.scrollTop||document.body.scrollTop;return t.style.transform="translate(0, 0)",u=t.getBoundingClientRect(),p=e.getBoundingClientRect(),f={x:u.left+(u.right-u.left)/2+n,y:u.top+(u.bottom-u.top)/2+i},d={x:p.left+(p.right-p.left)/2+n,y:p.top+(p.bottom-p.top)/2+i},h={x:0,y:0},m={x:-1*(f.x-d.x),y:-1*(f.y-d.y)},c=(m.y-s*m.x*m.x)/m.x,this},a.move=function(){if(0==l)return this;var e=0,n=m.x>0?1:-1,i=1;return window.requestAnimationFrame((function r(){var a=2*s*e+c,u=Math.sqrt(o.speed/(a*a+1));e+=n*u;var p=(1-o.endScale)*u/Math.abs(h.x-m.x);i-=p,(1==n&&e>m.x||-1==n&&e<m.x)&&(e=m.x);var f=e,d=s*f*f+c*f;t.setAttribute("data-center",[Math.round(f),Math.round(d)].join()),t.style.transform="translate("+[f+"px",d+"px"].join()+") scale("+i+")",e!==m.x?(o.progress(f,d),window.requestAnimationFrame(r)):(o.complete({x:f,y:d}),l=!0)})),l=!1,this},a.init=function(){console.log("init"),this.position().mark().move()}}return a},o={name:"parabolaJs",data:function(){return{parabola:null}},methods:{containerClick:function(t){var e=t.target.getBoundingClientRect(),n=t.pageX-e.left-window.pageXOffset,o=t.pageY-e.top-window.pageYOffset;this.$refs.point.style.setProperty("left","".concat(n,"px")),this.$refs.point.style.setProperty("top","".concat(o,"px"));i(this.$refs.parabolaItem,this.$refs.point,{speed:500.01,endScale:.4}).init()}}},r=(n(467),n(2)),a=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"parabola-container",on:{click:this.containerClick}},[e("div",{staticClass:"placehloder"},[this._v("click panel to animate")]),this._v(" "),e("div",{ref:"parabolaItem",staticClass:"parabola-item"}),this._v(" "),e("div",{ref:"point",staticClass:"click-point"})])}),[],!1,null,"19600b96",null);e.default=a.exports}}]);