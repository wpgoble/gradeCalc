(function(){"use strict";var n={1139:function(n,e,t){var a=t(9242),r=t(3396);const l=(0,r._)("h1",null,"Prof. Goble's Grade Calculator",-1);function o(n,e,t,a,o,u){const i=(0,r.up)("CalculatorApp");return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,(0,r.Wm)(i)],64)}var u=t(7139);const i=n=>((0,r.dD)("data-v-d7621f20"),n=n(),(0,r.Cn)(),n),c={class:"hello"},d=i((()=>(0,r._)("label",null,"Attendance: ",-1))),f=i((()=>(0,r._)("label",null,"Homework: ",-1))),m=i((()=>(0,r._)("label",null,"Labs: ",-1))),p=i((()=>(0,r._)("label",null,"Written Test: ",-1))),s=i((()=>(0,r._)("label",null,"Lab Exam: ",-1))),b=i((()=>(0,r._)("label",null,"Final Exam: ",-1)));function h(n,e,t,l,o,i){return(0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("h1",null,(0,u.zw)(o.msg),1),d,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=n=>o.attendance=n)},null,512),[[a.nr,o.attendance]]),f,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[1]||(e[1]=n=>o.homework=n)},null,512),[[a.nr,o.homework]]),m,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=n=>o.labs=n)},null,512),[[a.nr,o.labs]]),p,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[3]||(e[3]=n=>o.midterm=n)},null,512),[[a.nr,o.midterm]]),s,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[4]||(e[4]=n=>o.lab_exam=n)},null,512),[[a.nr,o.lab_exam]]),b,(0,r.wy)((0,r._)("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=n=>o.final_exam=n)},null,512),[[a.nr,o.final_exam]]),(0,r._)("input",{type:"button",value:"Calculate Grade",onClick:e[6]||(e[6]=n=>i.calculateGrade(o.attendance,o.homework,o.labs,o.midterm,o.lab_exam,o.final_exam))})])}var _={name:"CalculatorApp",data(){return{msg:"Enter your grades and click calculate to see your potential final grade",attendance:0,homework:0,labs:0,midterm:0,lab_exam:0,final_exam:0,grade:0}},methods:{calculateGrade:function(n,e,t,a,r,l){this.attendance=n,this.homework=e,this.labs=t,this.midterm=a,this.lab_exam=r,this.final_exam=l,this.grade=.25*e+.25*t+.15*a+.15*r+.15*l+.05*n}}},v=t(89);const w=(0,v.Z)(_,[["render",h],["__scopeId","data-v-d7621f20"]]);var y=w,x={name:"App",components:{CalculatorApp:y}};const g=(0,v.Z)(x,[["render",o]]);var k=g;(0,a.ri)(k).mount("#app")}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var l=e[a]={exports:{}};return n[a].call(l.exports,l,l.exports,t),l.exports}t.m=n,function(){var n=[];t.O=function(e,a,r,l){if(!a){var o=1/0;for(d=0;d<n.length;d++){a=n[d][0],r=n[d][1],l=n[d][2];for(var u=!0,i=0;i<a.length;i++)(!1&l||o>=l)&&Object.keys(t.O).every((function(n){return t.O[n](a[i])}))?a.splice(i--,1):(u=!1,l<o&&(o=l));if(u){n.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}l=l||0;for(var d=n.length;d>0&&n[d-1][2]>l;d--)n[d]=n[d-1];n[d]=[a,r,l]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var r,l,o=a[0],u=a[1],i=a[2],c=0;if(o.some((function(e){return 0!==n[e]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(i)var d=i(t)}for(e&&e(a);c<o.length;c++)l=o[c],t.o(n,l)&&n[l]&&n[l][0](),n[l]=0;return t.O(d)},a=self["webpackChunkcalculator"]=self["webpackChunkcalculator"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(1139)}));a=t.O(a)})();
//# sourceMappingURL=app.70381ba5.js.map