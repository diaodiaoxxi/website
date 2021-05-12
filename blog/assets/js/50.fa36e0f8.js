(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{481:function(v,_,t){"use strict";t.r(_);var d={name:"date-type",props:{value:{type:Boolean,default:!1}},data:function(){return{currentVisible:this.value}},watch:{value:function(v){this.currentVisible=v},currentVisible:function(v){this.$emit("input",v)}}},r=t(22),e=Object(r.a)(d,(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("h-msg-box",{attrs:{title:"常见的日期和时间格式"},model:{value:v.currentVisible,callback:function(_){v.currentVisible=_},expression:"currentVisible"}},[t("div",{staticClass:"api"},[t("table",[t("thead",[t("tr",[t("th",[v._v("名称")]),v._v(" "),t("th",[v._v("说明")]),v._v(" "),t("th",[v._v("示例")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("yyyy")]),v._v(" "),t("td",[v._v("年份（四位）")]),v._v(" "),t("td",[v._v("2016")])]),v._v(" "),t("tr",[t("td",[v._v("yy")]),v._v(" "),t("td",[v._v("年份（两位）")]),v._v(" "),t("td",[v._v("16")])]),v._v(" "),t("tr",[t("td",[v._v("MM")]),v._v(" "),t("td",[v._v("月份（两位）")]),v._v(" "),t("td",[v._v("01")])]),v._v(" "),t("tr",[t("td",[v._v("M")]),v._v(" "),t("td",[v._v("月份（一位）")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("MMMM")]),v._v(" "),t("td",[v._v("月份（英文）")]),v._v(" "),t("td",[v._v("January")])]),v._v(" "),t("tr",[t("td",[v._v("MMM")]),v._v(" "),t("td",[v._v("月份（英文简写）")]),v._v(" "),t("td",[v._v("Jan")])]),v._v(" "),t("tr",[t("td",[v._v("dd")]),v._v(" "),t("td",[v._v("日期（两位）")]),v._v(" "),t("td",[v._v("01")])]),v._v(" "),t("tr",[t("td",[v._v("d")]),v._v(" "),t("td",[v._v("日期（一位）")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("Do")]),v._v(" "),t("td",[v._v("日期（简写）")]),v._v(" "),t("td",[v._v("1st")])]),v._v(" "),t("tr",[t("td",[v._v("DD")]),v._v(" "),t("td",[v._v("星期（两位）")]),v._v(" "),t("td",[v._v("00")])]),v._v(" "),t("tr",[t("td",[v._v("D")]),v._v(" "),t("td",[v._v("星期（一位）")]),v._v(" "),t("td",[v._v("0")])]),v._v(" "),t("tr",[t("td",[v._v("dddd")]),v._v(" "),t("td",[v._v("星期（英文）")]),v._v(" "),t("td",[v._v("Monday")])]),v._v(" "),t("tr",[t("td",[v._v("ddd")]),v._v(" "),t("td",[v._v("星期（英文简写）")]),v._v(" "),t("td",[v._v("Mon")])]),v._v(" "),t("tr",[t("td",[v._v("HH")]),v._v(" "),t("td",[v._v("小时（24小时制两位）")]),v._v(" "),t("td",[v._v("01")])]),v._v(" "),t("tr",[t("td",[v._v("H")]),v._v(" "),t("td",[v._v("小时（24小时制一位）")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("hh")]),v._v(" "),t("td",[v._v("小时（12小时制两位）")]),v._v(" "),t("td",[v._v("01")])]),v._v(" "),t("tr",[t("td",[v._v("h")]),v._v(" "),t("td",[v._v("小时（12小时制一位）")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("mm")]),v._v(" "),t("td",[v._v("分钟（两位）")]),v._v(" "),t("td",[v._v("01")])]),v._v(" "),t("tr",[t("td",[v._v("m")]),v._v(" "),t("td",[v._v("分钟（一位）")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("ss")]),v._v(" "),t("td",[v._v("秒钟（两位）")]),v._v(" "),t("td",[v._v("01")])]),v._v(" "),t("tr",[t("td",[v._v("s")]),v._v(" "),t("td",[v._v("秒钟（一位）")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("SSS")]),v._v(" "),t("td",[v._v("毫秒（三位）")]),v._v(" "),t("td",[v._v("019")])]),v._v(" "),t("tr",[t("td",[v._v("SS")]),v._v(" "),t("td",[v._v("毫秒（两位）")]),v._v(" "),t("td",[v._v("01")])]),v._v(" "),t("tr",[t("td",[v._v("S")]),v._v(" "),t("td",[v._v("毫秒（一位）")]),v._v(" "),t("td",[v._v("1")])]),v._v(" "),t("tr",[t("td",[v._v("A")]),v._v(" "),t("td",[v._v("上午与下午（大写）")]),v._v(" "),t("td",[v._v("AM/PM")])]),v._v(" "),t("tr",[t("td",[v._v("a")]),v._v(" "),t("td",[v._v("上午与下午（小写）")]),v._v(" "),t("td",[v._v("am/pm")])]),v._v(" "),t("tr",[t("td",[v._v("ZZ")]),v._v(" "),t("td",[v._v("时区")]),v._v(" "),t("td",[v._v("+0800")])])])])]),v._v(" "),t("div",{staticClass:"h-article demo-date-type"},[t("p",[v._v("以上是 HUI 支持的日期格式，你可以自由组合出你需要的类型，例如：")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("yyyy年M月d日")]),v._v("：2016年1月1日")]),v._v(" "),t("li",[t("strong",[v._v("MM/dd/yy")]),v._v("：12/24/16")]),v._v(" "),t("li",[t("strong",[v._v("H点m分s秒")]),v._v("：9点41分0秒")])])])])}),[],!1,null,null,null);_.default=e.exports}}]);