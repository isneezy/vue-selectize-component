(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{141:function(t,e,i){},142:function(t,e,i){"use strict";var n=i(141);i.n(n).a},143:function(t,e,i){"use strict";var n=i(144),s=(i(145),i(146),i(147),i(9),i(13),i(148),i(149)),o=i.n(s),a=i(150),l=i.n(a),c=i(151),u=i.n(c);var r={name:"v-selectize",props:{multiple:{default:!1,type:Boolean},placeholder:{default:"",type:String},options:{default:function(){return[]},type:Array},keyBy:{default:"id",type:String},label:{default:"label",type:String},keys:{default:function(){return["label"]}},value:{default:null,type:[Array,Object,String,Number]},disabled:{default:!1,type:Boolean},disableSearch:{default:!1,type:Boolean},createItem:{default:function(t){return Promise.resolve(t)},type:[Function,Boolean]},searchFn:{default:!1,type:[Boolean,Function]},theme:{default:"",type:String}},data:function(){return{inputWidth:0,hasFocus:!1,searchText:"",activeOptionKey:"",selected:[],busy:!1}},mounted:function(){this.setSelectedValue(this.value),this.updateInputWidth()},computed:{computedPlaceholder:function(){return this.selectedItems.length?"":this.placeholder},selectedItems:function(){var t=this;return this.selected.map(function(e){return t.formatOption(e)})},formattedOptions:function(){var t=this;return(this.hasFocus&&!this.multiple?this.options:u()(this.options,this.selected)).map(function(e){return t.formatOption(e)})},filteredOptions:function(){var t=new o.a(this.formattedOptions,{shouldSort:!0,threshold:.2,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:this.keys});return this.searchText.length&&!this.disableSearch?t.search(this.searchText):this.formattedOptions},activeOption:function(){var t=this,e=this.filteredOptions.find(function(e){return e[t.keyBy]===t.activeOptionKey});return e||(this.filteredOptions.length?this.filteredOptions[0]:null)},activeOptionIndex:function(){var t=this;return this.filteredOptions.findIndex(function(e){return e[t.keyBy]===t.activeOptionKey})},hasOptions:function(){return!!this.options.length},isFull:function(){return!1},controlClassName:function(){var t={};return t[this.theme]=!0,t.multi=this.multiple,t.single=!this.multiple,t.loading=this.busy,t},inputClassName:function(){var t={};return t.focus=this.hasFocus,t["input-active"]=this.hasFocus,t["dropdown-active"]=this.hasFocus,t["not-full"]=!this.isFull,t["has-options"]=this.hasOptions,t["has-items"]=!!this.selected.length,t},inputStyle:function(){var t={};return t.width="".concat(this.inputWidth,"px"),t.opacity=1,t.position="relative",t.left="0px",t},dropdownClassName:function(){var t={};return t[this.theme]=!0,t.multi=this.multiple,t.single=!this.multiple,t},dropdownStyle:function(){var t={};return t.display=this.hasFocus&&(this.filteredOptions.length||this.searchText.length&&"function"==typeof this.createItem)?"block":"none",t.width="100%",t}},methods:{onFocus:function(){this.disabled||(this.hasFocus=!this.disabled,this.$refs.input.focus())},onBlur:function(){this.activeOptionKey="",this.searchText="",this.updateInputWidth(),this.$refs.input.blur(),this.hasFocus=!1},onSearch:function(t){!this.selected.length||this.multiple?(this.searchText=t.target.value,this.$emit("search",this.searchText),"function"==typeof this.searchFn&&(this.onAjaxStart(),this.searchFn(this.searchText,this.onAjaxDone)),this.updateInputWidth()):t.target.value=this.searchText},formatOption:function(t){if("object"!==Object(n.a)(t)){var e={formatted:!0};return e[this.keyBy]=t,e[this.label]=t,e}return t},updateInputWidth:function(){this.canvas=this.canvas||document.createElement("div"),this.canvas.style.visibility="hidden",this.canvas.style.position="absolute",this.$el&&this.$el.appendChild(this.canvas),this.canvas.innerText=this.placeholder||this.searchText,this.inputWidth=this.canvas.clientWidth+4,this.$el&&this.$el.removeChild(this.canvas)},activateOption:function(t){this.activeOptionKey=t[this.keyBy]},activatePrevious:function(){this.activeOptionIndex>0&&this.filteredOptions.length&&this.activateOption(this.filteredOptions[this.activeOptionIndex-1])},activateNext:function(){this.filteredOptions.length-1>this.activeOptionIndex&&this.activateOption(this.filteredOptions[this.activeOptionIndex+1])},getOptionClassName:function(t){var e={};return e.active=t[this.keyBy]===this.activeOption[this.keyBy],e},selectOption:function(t){if(t){this.multiple?this.onFocus():this.onBlur();var e=t.formatted?t[this.label]:t;this.multiple?this.selected.push(e):this.selected=[e],this.emitInput()}},selectActiveOption:function(){var t=this;if(this.setBusy(),this.activeOption)this.selectOption(this.activeOption);else if("function"==typeof this.createItem&&this.searchText.length){var e=this.createItem(this.searchText);!function(t){return"then"in t&&"catch"in t}(e)?(this.selectOption(this.formatOption(e)),this.searchText="",this.setNotBusy()):e.then(function(e){t.selectOption(t.formatOption(e)),t.searchText="",t.setNotBusy()}).catch(function(e){return t.setNotBusy(),Promise.reject(e)})}},popOption:function(){if(this.deleteOnNextCall=0===this.deleteOnNextCall?-1:this.searchText.length,-1===this.deleteOnNextCall||!this.multiple){var t=this.selected.pop();"object"===Object(n.a)(t)&&void 0!==t&&(t=t[this.label]),this.multiple&&(this.searchText=void 0!==t?t:""),this.emitInput(),this.updateInputWidth()}},emitInput:function(){this.multiple?this.$emit("input",this.selected):this.$emit("input",this.selected.length?this.selected[0]:null)},setSelectedValue:function(t){Array.isArray(t)?this.selected=t.slice():this.selected=t?[t]:[]},onAjaxStart:function(){this.setBusy()},onAjaxDone:function(){this.setNotBusy()},setBusy:function(){this.busy=!0},setNotBusy:function(){this.busy=!1}},watch:{value:{handler:function(t){this.setSelectedValue(t)},deep:!0}},directives:{ClickOutside:l.a}},h=(i(142),i(0)),d=Object(h.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.onBlur,expression:"onBlur"}],staticClass:"selectize-control",class:t.controlClassName,attrs:{tabindex:"0"},on:{focus:t.onFocus}},[i("div",{staticClass:"selectize-input items",class:t.inputClassName,on:{click:t.onFocus,keydown:function(e){return"button"in e||!t._k(e.keyCode,"tab",9,e.key,"Tab")?t.onBlur(e):null}}},[t._l(t.selectedItems,function(e){return i("div",{key:e[t.keyBy],staticClass:"item",attrs:{"data-value":e[t.keyBy]}},[t._t("item",[t._v(t._s(e[t.label]))],{item:e})],2)}),i("input",{ref:"input",style:t.inputStyle,attrs:{disabled:t.disabled,placeholder:t.computedPlaceholder,autocomplete:"off",tabindex:"-1"},domProps:{value:t.searchText},on:{input:t.onSearch,keyup:[function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.activatePrevious(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.activateNext(e):null},function(e){return"button"in e||!t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete"])?t.popOption(e):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.selectActiveOption(e):null}]}})],2),i("div",{staticClass:"selectize-dropdown",class:t.dropdownClassName,style:t.dropdownStyle},[i("div",{staticClass:"selectize-dropdown-content"},[t._l(t.filteredOptions,function(e){return i("div",{key:e[t.keyBy],staticClass:"option",class:t.getOptionClassName(e),attrs:{"data-selectable":"","data-value":e[t.keyBy]},on:{mouseover:function(i){t.activateOption(e)},click:function(i){t.selectOption(e)}}},[t._t("option",[t._v(t._s(e[t.label]))],{option:e})],2)}),!t.filteredOptions.length&&t.searchText.length&&"function"==typeof t.createItem?i("div",{staticClass:"option create active",attrs:{"data-selectable":""},on:{click:t.selectActiveOption}},[t._t("create-item",[t._v("Add "),i("strong",[t._v(t._s(t.searchText))])],{text:t.searchText})],2):t._e()],2)])])},[],!1,null,"5df4f5d6",null);e.a=d.exports},165:function(t,e,i){"use strict";i.r(e);var n={name:"tagging",data:function(){return{options:["neat","awesome"],selected:["neat","awesome"]}},components:{VSelectize:i(143).a}},s=i(0),o=Object(s.a)(n,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",[t._v("Tags:")]),i("v-selectize",{attrs:{options:t.options,multiple:""},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),i("div",[t._v("Current Value: "+t._s(t.selected))])],1)},[],!1,null,null,null);e.default=o.exports}}]);