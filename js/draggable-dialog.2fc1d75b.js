(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["draggable-dialog"],{b224:function(a,e,l){"use strict";l.r(e);var t=function(){var a=this,e=a.$createElement,l=a._self._c||e;return l("div",{staticClass:"components-container"},[l("el-button",{attrs:{type:"primary"},on:{click:function(e){a.dialogTableVisible=!0}}},[a._v("\n    Open a Draggable Dialog\n  ")]),l("el-dialog",{directives:[{name:"el-draggable-dialog",rawName:"v-el-draggable-dialog"}],attrs:{visible:a.dialogTableVisible,title:"Shipping address"},on:{"update:visible":function(e){a.dialogTableVisible=e},onDialogDrag:a.handleDialogDrag}},[l("el-select",{ref:"select",attrs:{placeholder:"Please select"},model:{value:a.value,callback:function(e){a.value=e},expression:"value"}},a._l(a.options,function(a){return l("el-option",{key:a.value,attrs:{label:a.label,value:a.value}})}),1),l("el-table",{attrs:{data:a.gridData}},[l("el-table-column",{attrs:{property:"date",label:"Date",width:"150"}}),l("el-table-column",{attrs:{property:"name",label:"Name",width:"200"}}),l("el-table-column",{attrs:{property:"address",label:"Address"}})],1)],1)],1)},i=[],n=l("d225"),o=l("b0b4"),s=l("308d"),r=l("6bb5"),d=l("4e2b"),b=l("9ab4"),u=l("60a3"),c=function(a){function e(){var a;return Object(n["a"])(this,e),a=Object(s["a"])(this,Object(r["a"])(e).apply(this,arguments)),a.dialogTableVisible=!1,a.options=[{value:"选项1",label:"黄金糕"},{value:"选项2",label:"双皮奶"},{value:"选项3",label:"蚵仔煎"},{value:"选项4",label:"龙须面"}],a.value="",a.gridData=[{date:"2016-05-02",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-04",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-01",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"},{date:"2016-05-03",name:"John Smith",address:"No.1518,  Jinshajiang Road, Putuo District"}],a}return Object(d["a"])(e,a),Object(o["a"])(e,[{key:"handleDialogDrag",value:function(){this.$refs.select.blur()}}]),e}(u["c"]);c=b["a"]([Object(u["a"])({name:"DraggableDialogDemo"})],c);var g=c,p=g,h=l("0c7c"),v=Object(h["a"])(p,t,i,!1,null,null,null);e["default"]=v.exports}}]);