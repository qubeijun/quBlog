(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{614:function(e,t,a){"use strict";a.r(t);var v={data:function(){return{message:"Message.",rawHtml:'<span style="color:red">This should be red.</span>',Disabled1:null,Disabled2:void 0,Disabled3:!1,Disabled:!0,number:1e4,ok:!0,id:201907249025,url:"http://www.baidu.com",attributeName:"href",eventName:"click"}},mounted:function(){},methods:{handleChange:function(){"Message."===this.message?this.message="Message Change.":this.message="Message."},doSomething:function(){alert("doSomething")},onSubmit:function(){alert("onSubmit")}}},_=a(71),n=Object(_.a)(v,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("模版语法")]),e._v(" "),a("h2",[e._v("插值")]),e._v(" "),a("h3",[e._v("文本")]),e._v(" "),a("p",[e._v("这个将会改变: "+e._s(e.message))]),e._v(" "),e._m(0),e._v(" "),a("el-button",{on:{click:e.handleChange}},[e._v("change")]),e._v(" "),a("h3",[e._v("原始HTML")]),e._v(" "),a("p",[e._v("Using mustaches: "+e._s(e.rawHtml))]),e._v(" "),a("p",[e._v("\n    Using v-html directive:\n    "),a("span",{domProps:{innerHTML:e._s(e.rawHtml)}}),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v("v-html：输出真正的html")])],1),e._v(" "),a("h3",[e._v("Attribute")]),e._v(" "),a("el-button",{attrs:{disabled:e.Disabled1}},[e._v("Disabled1==null")]),e._v(" "),a("el-button",{attrs:{disabled:e.Disabled2}},[e._v("Disabled2==undefined")]),e._v(" "),a("el-button",{attrs:{disabled:e.Disabled3}},[e._v("Disabled3==false")]),e._v(" "),a("el-button",{attrs:{disabled:e.Disabled}},[e._v("Disabled=true")]),e._v(" "),a("h3",[e._v("使用 JavaScript 表达式")]),e._v(" "),a("p",[e._v(e._s(e.number+1)),a("el-tag",{attrs:{effect:"dark"}},[e._v("{ {number + 1} }")])],1),e._v(" "),a("p",[e._v("\n    "+e._s(e.ok?"YES":"NO")+"\n    "),a("el-tag",{attrs:{effect:"dark"}},[e._v('{ {ok ? "YES" : "NO"} }')])],1),e._v(" "),a("p",[e._v("\n    "+e._s(e.message.split("").reverse().join(""))+"\n    "),a("el-tag",{attrs:{effect:"dark"}},[e._v('{ {message.split("").reverse().join("")} }')])],1),e._v(" "),a("p",{attrs:{id:"list-"+e.id}},[e._v("\n    list-"+e._s(e.id)),a("el-tag",{attrs:{effect:"dark"}},[e._v("{ {v-bind:id=\"'list-' + id\"} }")])],1),e._v(" "),a("h2",[e._v("指令")]),e._v(" "),a("h3",[e._v("参数")]),e._v(" "),a("p",[a("a",{attrs:{href:e.url}},[e._v("百度")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v('v-bind:href="url"')])],1),e._v(" "),a("p",[a("a",{on:{click:e.doSomething}},[e._v("doSomething")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v('v-on:click="doSomething"')])],1),e._v(" "),a("h3",[e._v("动态参数")]),e._v(" "),a("p",[a("a",e._b({},"a",e._d({},[e.attributeName,e.url])),[e._v("百度")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v("\n      v-bind:[attributeName]=\"url\"---\x3eattributeName: 'href'\n    ")])],1),e._v(" "),a("p",[a("a",{on:e._d({},[e.eventName,e.doSomething])},[e._v("doSomething")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v("\n      v-on:[eventName]=\"doSomething\"---\x3eeventName: 'click'\n    ")])],1),e._v(" "),a("h3",[e._v("修饰符")]),e._v(" "),a("el-button",{on:{click:function(t){return t.preventDefault(),e.onSubmit(t)}}},[e._v("onSubmit")]),e._v(" "),a("h2",[e._v("缩写")]),e._v(" "),a("h3",[e._v("v-bind缩写")]),e._v(" "),a("p",[a("a",{attrs:{href:e.url}},[e._v("百度")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v('v-bind:href="url"')])],1),e._v(" "),a("p",[a("a",{attrs:{href:e.url}},[e._v("百度")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v(':href="url"')])],1),e._v(" "),a("p",[a("a",e._b({},"a",e._d({},[e.attributeName,e.url])),[e._v("百度")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v(':[attributeName]="url"')])],1),e._v(" "),a("h3",[e._v("v-on缩写")]),e._v(" "),a("p",[a("a",{on:{click:e.doSomething}},[e._v("doSomething")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v('v-on:click="doSomething"')])],1),e._v(" "),a("p",[a("a",{on:{click:e.doSomething}},[e._v("doSomething")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v('@click="doSomething"')])],1),e._v(" "),a("p",[a("a",{on:e._d({},[e.eventName,e.doSomething])},[e._v("doSomething")]),e._v(" "),a("el-tag",{attrs:{effect:"dark"}},[e._v('@[eventName]="doSomething"')])],1)],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("\n    这个将不会改变："+this._s(this.message)+"\n    "),t("el-tag",{attrs:{effect:"dark"}},[this._v("v-once：执行一次性地插值")])],1)}],!1,null,null,null);t.default=n.exports}}]);