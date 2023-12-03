(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[6128],{86128:(e,o,n)=>{const t=n(94184),i=n(45697),a=n(67294),{components:r}=n(23157),l=n(79e3),{SearchResultOption:s}=n(4836),d=n(61143),{AsyncDropdownSelect:p,DropdownWrapper:c,DropdownName:h,DropdownSelect:u}=n(78079),{trackComponent:b}=n(40199),g=({innerProps:e})=>a.createElement("span",Object.assign({},e,{className:"dropdown__icon"}),a.createElement(l,null));g.propTypes={innerProps:i.any};const m=(e,o,n)=>e&&Object.keys(e).length>0||!n?void 0:o,w=()=>({}),_=()=>{},v=e=>{const{data:o,isSelected:n,label:t,options:i,value:l}=e;return a.createElement("div",null,a.createElement(r.Option,Object.assign({},e),a.createElement(d.Checkbox,{formName:"option-with-checkbox",index:i.map(((e,n)=>e===o?n:0)).filter(Number.isFinite)[0],isChecked:n,label:t,name:l,onChangeHandler:_,value:l})))};v.propTypes={data:i.shape({label:i.string,value:i.string}),isSelected:i.bool,label:i.string,options:i.array,value:i.string.isRequired};const y=({assistiveLabel:e,className:o,selectedValue:n,defaultValue:i,dropdownInputName:r,hasEnableGreyout:l,hasNoPadding:d,hideBackgroundColor:_,instanceId:y,inputAttributes:f,isAsyncSelect:$,isDisabled:O,isDropdownMenuOpen:k,isInline:S,loadOptions:x,noOptionsMessage:C,onInputChange:N,configWidth:D,options:E,variations:{isMultiSelect:I,isSearchable:T},placeholderText:M,shouldCloseMenuOnSelect:R,shouldControlShowValue:j,shouldHideSelectedOptions:P,shouldRenderOptionWithCheckbox:V,shouldShowPlaceholderText:W,DropdownIcon:A,isClearable:B,isMenuOpen:q,onKeyUp:G,variationName:H})=>{const L=Object.assign(Object.assign(Object.assign({},f),n?{value:n}:{}),{className:"dropdown__field",classNamePrefix:"dropdown",components:Object.assign(Object.assign({DropdownIndicator:A||g},V&&{Option:v}),$&&{Option:s}),closeMenuOnSelect:R,controlShouldRenderValue:j,defaultValue:i,hasEnableGreyout:l,hideSelectedOptions:P,instanceId:y,isClearable:B,isDisabled:O,isSearchable:T,isAsyncSelect:$,isMenuOpen:q,isMulti:I,menuIsOpen:k,name:r,noOptionsMessage:()=>(e=>`${e}`)(C),onChange:N,onInputChange:G,options:E,placeholder:m(i,M,W),styles:{input:w},hideBackgroundColor:_,isInline:S});return a.useEffect((()=>{b("Dropdown",H)}),[H]),a.createElement(c,{className:t("dropdown",o,T?"dropdown--async":"dropdown--static"),isInline:S,isDisabled:O,configWidth:D},e&&a.createElement(h,{className:"dropdown__assistive-label",hasNoPadding:d,configWidth:D},e),$?a.createElement(p,Object.assign({},L,{loadOptions:x})):a.createElement(u,Object.assign({configWidth:D},L)))};y.propTypes={assistiveLabel:i.string,className:i.string,configWidth:i.string,defaultValue:i.shape({label:i.string.isRequired,value:i.string}),DropdownIcon:i.func,dropdownInputName:i.string,hasEnableGreyout:i.bool,hasMultipleValues:i.bool,hasNoPadding:i.bool,hideBackgroundColor:i.bool,inputAttributes:i.object,instanceId:i.string,isAsyncSelect:i.bool,isClearable:i.bool,isDisabled:i.bool,isDropdownMenuOpen:i.bool,isInline:i.bool,isMenuOpen:i.bool,loadOptions:i.func,noOptionsMessage:i.string,onInputChange:i.func,onKeyUp:i.func,options:i.arrayOf(i.shape({label:i.string.isRequired,value:i.string})).isRequired,placeholderText:i.string,selectedValue:i.oneOfType([i.shape({label:i.string.isRequired,value:i.string}),i.arrayOf(i.shape({label:i.string.isRequired,value:i.string}))]),shouldCloseMenuOnSelect:i.bool,shouldControlShowValue:i.bool,shouldHideSelectedOptions:i.bool,shouldRenderOptionWithCheckbox:i.bool,shouldShowPlaceholderText:i.bool,value:i.string,variationName:i.string,variations:i.shape({isMultiSelect:i.bool,isSearchable:i.bool})},y.defaultProps={hasEnableGreyout:!1,hasMultipleValues:!1,hideBackgroundColor:!1,isClearable:!1,noOptionsMessage:"No options",shouldCloseMenuOnSelect:!0,shouldControlShowValue:!0,shouldHideSelectedOptions:!1,shouldRenderOptionWithCheckbox:!1,shouldShowPlaceholderText:!0,variations:{isMultiSelect:!1,isSearchable:!1}},y.DropdownIndicator=g,e.exports=y},4836:(e,o,n)=>{Object.defineProperty(o,"__esModule",{value:!0}),o.SearchResultOption=void 0;const t=n(45697),i=n(67294),{components:a}=n(23157);o.SearchResultOption=e=>{const{data:o,label:n}=e,{inputValue:t}=o;return i.createElement(i.Fragment,null,i.createElement(a.Option,Object.assign({},e),(r=n,l=t,i.createElement("span",null,r.split(new RegExp(`(${l})`,"i")).map(((e,o)=>e.toLowerCase()===l.toLowerCase()?i.createElement("b",{key:o},e):e))))));var r,l},o.SearchResultOption.propTypes={data:t.shape({value:t.string,label:t.string,inputValue:t.string}),label:t.string}},78079:(e,o,n)=>{const{default:t,css:i}=n(51117),a=n(23157).default,r=n(59410).Z,{calculateSpacing:l,getColorStyles:s,getTypographyStyles:d,getInputFieldStyles:p,getColorToken:c}=n(79720),{INTERACTIVE:{timingButtonDefault:h},BREAKPOINTS:u}=n(85326),{BaseText:b}=n(73049),g=t.label.withConfig({displayName:"DropdownWrapper"})`
  display: block;
  position: relative;
  ${({configWidth:e})=>e?`width: ${e}%;`:""}
  ${({isDisabled:e})=>e?"cursor: default;\n        pointer-events: none;":""}

  ${({isInline:e})=>e?`display: flex;\n      justify-content: space-between;\n      margin-bottom: 0;\n      width: 100%;\n      @media (min-width: ${u.md}) {\n        align-items: center;\n        width: max-content;\n      }\n      .dropdown__assistive-label {\n        margin-right: ${l(1)};\n        padding-bottom: 0;\n      }\n      `:""}
`,m=t(b).withConfig({displayName:"DropdownName"})`
  ${({theme:e,typeToken:o})=>d(e,o)};
  display: block;
  ${({hasNoPadding:e})=>!e&&`padding-bottom: ${l(1)};`}
  ${({theme:e,colorToken:o})=>s(e,"color",o)};
`;m.defaultProps={as:"span",colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.label"};const w=i`
  .dropdown__value-container {
    ${({theme:e})=>p(e,"active","border")}
    ${({theme:e})=>p(e,"active","background")}
  }

  .dropdown__placeholder,
  .dropdown__single-value {
    ${({theme:e})=>p(e,"active","text")}
  }

  .dropdown__icon {
    svg {
      ${({theme:e})=>p(e,"active","icon")}
    }
  }
`,_=i`
  min-width: ${l(21)};

  .dropdown--disabled {
    cursor: default;
    pointer-events: none;
  }

  .dropdown__assistive-label {
    ${({theme:e})=>d(e,"typography.definitions.utility.label")};
    display: block;
    padding-bottom: ${l(1)};
    ${({theme:e})=>s(e,"color","colors.interactive.base.black")};
  }

  .dropdown__control {
    position: relative;
    align-items: initial;
    border: none;
    border-radius: 0;
    padding: 0;
    width: 100%;
    overflow: hidden;
    text-align: left;
  }

  ${({hideBackgroundColor:e})=>e?"\n    .dropdown__control,\n    .dropdown__value-container {\n      background-color: unset;\n    }":""}

  .dropdown__control--is-focused {
    ${w}
  }

  .dropdown__control--menu-is-open {
    box-shadow: none;
  }

  .dropdown__control--is-disabled {
    .dropdown__value-container {
      ${({theme:e})=>p(e,"disabled","border")}
      ${({hasEnableGreyout:e,theme:o})=>e?"opacity:0.5":p(o,"disabled","background")}
    }

    .dropdown__placeholder,
    .dropdown__single-value {
      ${({theme:e})=>p(e,"disabled","text")}
    }

    .dropdown__icon {
      svg {
        ${({theme:e})=>p(e,"disabled","icon")}
      }
    }
  }

  .dropdown__value-container {
    ${({theme:e})=>p(e,"normal","border")}
    ${({theme:e})=>p(e,"normal","background")}
    ${({theme:e})=>d(e,"typography.definitions.utility.input-core")};
    display: flex;
    align-items: center;
    transition-property: background, border;
    transition-duration: ${h};
    transition-timing-function: ease-in;
    box-shadow: none;
    padding: ${l(2)} ${l(6)}
      ${l(2)} ${l(1)};
    height: 50px;
    overflow: hidden;

    /* styles the searchable dropdown's input when typing  */
    > .css-0:first-child {
      ${({theme:e})=>p(e,"active","text")}
      display: inline-block;
      position: relative;
      top: initial;
      transform: none;
      margin: 0;
      width: 100%;
      max-width: 100%;
    }
  }

  .dropdown__value-container--has-value {
    ${({theme:e})=>p(e,"valid","border")}
    ${({theme:e})=>p(e,"valid","background")}

    .dropdown__icon {
      svg {
        ${({theme:e})=>p(e,"valid","icon")}
      }
    }

    .dropdown__input-container {
      position: absolute;
    }
  }

  /* prevent long searchable input string from running into icon container
    overrides react-select auto-generated width of input field  */
  .dropdown__input {
    input {
      && {
        padding-right: ${l(6)};
      }
    }
  }

  .dropdown__placeholder {
    position: absolute;
  }

  .dropdown__placeholder,
  .dropdown__single-value {
    ${({theme:e})=>p(e,"normal","text")}
    ${({theme:e})=>d(e,"typography.definitions.utility.input-core")};
    display: inline-block;
    top: initial;
    transform: none;
    transition: color ${h} ease-in;
    margin: 0;
    max-width: initial;

    .dropdown__value-container--has-value & {
      ${({theme:e})=>p(e,"valid","text")}
    }
  }

  .dropdown__indicators {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
  }

  .dropdown__indicator-separator {
    width: 0;
  }

  .dropdown__icon {
    top: 50%;
    margin-right: ${l(2)};

    svg {
      ${({theme:e})=>p(e,"normal","icon")}
      width: 10px;
      height: 10px;
    }
  }

  .dropdown__menu {
    animation: dropdown-menu-fade-in ${h} ease;
    margin: 0;
    border: 0;
    border-radius: 0;
    box-shadow: none;
    width: 100%;
  }

  @keyframes dropdown-menu-fade-in {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .dropdown__menu-list {
    ${({theme:e})=>p(e,"normal","border")}
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 0;
    max-height: ${l(20)};
  }

  .dropdown__menu-notice,
  .dropdown__option {
    ${({theme:e})=>p(e,"normal","border")}
    ${({theme:e})=>d(e,"typography.definitions.utility.input-core")};
    position: relative;
    border-top: none;
    background-color: transparent;
    padding: ${l(1)} ${l(2)};
    min-height: ${l(5)};
    text-align: left;
    text-decoration: none;
    line-height: unset;
    ${({theme:e})=>s(e,"color","colors.interactive.base.black")};
    transition-duration: ${h};
    transition-property: color, background;
    transition-timing-function: ease-in;

    &::before {
      ${({theme:e})=>p(e,"normal","background")}
    }

    /* remove last list option border to avoid double border with bottom of menu list  */
    &:last-of-type {
      border-bottom: 0;
    }

    &:active,
    &:focus,
    &:hover {
      /* override color provided by react-select */
      background-color: transparent;
    }

    &:not(.dropdown__option--is-selected):not(
        .dropdown__menu-notice--no-options
      ) {
      &:active::after,
      &:focus::after,
      &:hover::after {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.4;
        z-index: -1;
        ${({theme:e})=>s(e,"background-color","colors.interactive.base.light")};
        width: 100%;
        height: 100%;
        content: '';
      }
    }
  }

  .css-d7l1ni-option {
    /* stylelint-disable declaration-no-important */
    background-color: ${c("colors.interactive.base.hover")} !important;
    /* stylelint-enable declaration-no-important */
  }

  :not(.dropdown__option--is-selected) {
    &.dropdown__option--is-focused::after {
      position: absolute;
      top: 0;
      left: 0;
      opacity: 0.4;
      z-index: -1;
      ${({theme:e})=>s(e,"background-color","colors.interactive.base.light")};
      width: 100%;
      height: 100%;
      content: '';
    }
  }

  .dropdown__option--is-selected::after {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    z-index: -1;
    ${({theme:e})=>s(e,"background-color","colors.interactive.base.light")};
    width: 100%;
    height: 100%;
    content: '';
  }
`,v=t(a).withConfig({displayName:"DropdownSelect"})`
  ${_}

  ${({configWidth:e})=>e?"width: 100%;":""}
`,y=t(r).withConfig({displayName:"AsyncDropdownSelect"})`
  ${_}
  .dropdown__value-container {
    font-weight: bold;
  }
`;e.exports={AsyncDropdownSelect:y,DropdownWrapper:g,DropdownName:m,DropdownSelect:v}}}]);