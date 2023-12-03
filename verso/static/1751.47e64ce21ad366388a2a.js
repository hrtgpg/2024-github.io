(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[1751],{77990:(e,o,n)=>{const t=n(45697),r=n(67294),i=n(75346),{trackComponent:a}=n(40199),{BundleHeaderHed:d,BundleHeaderWrapper:l,BundleHeaderSection:s,BundleHeaderHedDekGrid:c,BundleHeaderHedDekBlock:u,BundleHeaderDekText:m,SectionHeaderStyle:p,BundleHeaderFullBleedContainer:h,BundleHeaderFullBleedHedText:g,ButtonGroupWrapper:y,BundleHeaderBylines:b}=n(80957),B=n(34042),$=({contributors:e,dangerousDek:o,directoryCategories:n,hasTopMargin:t,hasMarginBottom:B,headerType:$,hed:f,hideLedeCaption:v,shouldApplyDarkBackground:k,isDestinationBundle:w,isDirectoryBundle:H,isFullBleedForXXXL:x,isInverted:T,lede:C,headerPosition:D,overlayType:S,shouldAddBottomSpacing:O,shouldDecorateHeader:E,shouldHighlightDekText:I,shouldOverrideBundleHeaderDekText:F,shouldOverrideDirectoryBundle:L,shouldOverrideTypeToken:M,showByline:A,showHeaderOnBottom:N,showHeaderOnTop:_})=>{r.useEffect((()=>{a("BundleHeader")}),[]);const X=r.createElement(c,{isDestinationBundle:w,isDirectoryBundle:H,headerPosition:D,isInverted:T},r.createElement(u,{showByline:A,showHeaderOnBottom:N,showHeaderOnTop:_,isInverted:T},f&&function(e,o,n,t,i,a){switch(e){case"bundle-header":return r.createElement(d,{shouldDecorateHeader:i,shouldOverrideTypeToken:a,dangerouslySetInnerHTML:{__html:o}});case"section-header":return r.createElement(p,{dangerousHed:o});case"full-bleed-header":return r.createElement(h,null,r.createElement(g,{isDestinationBundle:n,isDirectoryBundle:t,dangerouslySetInnerHTML:{__html:`${o}`}}));default:return null}}($,f,w,H,E,M),o&&r.createElement(m,{isDestinationBundle:w,isDirectoryBundle:H,dangerouslySetInnerHTML:{__html:I?o.replace("<strong>",'<strong style="color: white; font-weight: 500;">'):o},shouldOverrideBundleHeaderDekText:F,showByline:A,showHeaderOnBottom:N,showHeaderOnTop:_,isInverted:T,shouldAddBottomSpacing:O,shouldOverrideDirectoryBundle:L}),H&&r.createElement(y,null,r.createElement(i,null,n.map(((e,o)=>r.createElement("p",{key:o},r.createElement("a",{href:e.href,rel:"nofollow noreferrer"},e.text)))))),A&&e?r.createElement(b,{contributors:e,isCompact:!1}):null));return r.createElement(r.Fragment,null,_&&!N&&X,r.createElement(l,{"data-testid":"BundleHeader",overlayType:S,isDestinationBundle:w,isDirectoryBundle:H,isFullBleedForXXXL:x,isInverted:T,hasMarginBottom:B},C&&r.createElement(s,{overlayType:S,lede:C,captionWidth:"fullbleed",hasTopMargin:t,hideLedeCaption:v,shouldApplyDarkBackground:k}),!_&&!N&&X),!_&&N&&X)};$.propTypes={contributors:t.shape(B.propTypes.contributors),dangerousDek:t.string,directoryCategories:t.array,hasMarginBottom:t.bool,hasTopMargin:t.bool,headerPosition:t.oneOf(["center","top"]),headerType:t.oneOf(["bundle-header","full-bleed-header","section-header"]),hed:t.string,hideLedeCaption:t.bool,isDestinationBundle:t.bool,isDirectoryBundle:t.bool,isFullBleedForXXXL:t.bool,isInverted:t.bool,lede:t.object,overlayType:t.oneOf(["none","gradient","solid"]),shouldAddBottomSpacing:t.bool,shouldApplyDarkBackground:t.bool,shouldDecorateHeader:t.bool,shouldHighlightDekText:t.bool,shouldOverrideBundleHeaderDekText:t.bool,shouldOverrideDirectoryBundle:t.bool,shouldOverrideTypeToken:t.bool,showByline:t.bool,showHeaderOnBottom:t.bool,showHeaderOnTop:t.bool},$.defaultProps={hasMarginBottom:!1,hasTopMargin:!1,headerPosition:"top",headerType:"bundle-header",hideLedeCaption:!1,isFullBleedForXXXL:!1,isInverted:!1,overlayType:"none",shouldAddBottomSpacing:!1,shouldDecorateHeader:!0,shouldHighlightDekText:!1,shouldOverrideBundleHeaderDekText:!1,shouldOverrideDirectoryBundle:!1,shouldOverrideTypeToken:!1,showByline:!1,showHeaderOnBottom:!1,showHeaderOnTop:!1},$.displayName="BundleHeader",e.exports=$},88451:(e,o,n)=>{const{asConfiguredComponent:t}=n(36380),r=n(77990);e.exports=t(r,"BundleHeader")},80957:(e,o,n)=>{const{default:t,css:r}=n(51117),{calculateSpacing:i,getColorToken:a,getTypographyStyles:d,minScreen:l,getColorStyles:s}=n(79720),{applyGridSpacing:c,cssVariablesGrid:u}=n(62470),{BaseText:m}=n(74327),{BREAKPOINTS:p}=n(85326),h=n(32554),g=n(17272),y=n(34042),{ResponsiveImageContainer:b}=n(7230),{ContentHeaderLeadAssetCaption:B,ContentHeaderLeadContentFullWidth:$,ContentHeaderLeadContentCaptionCredit:f,ContentHeaderResponsiveAsset:v,ContentHeaderLeadAsset:k}=n(6845),{ButtonCalloutWrapper:w}=n(86580),H=t.header.withConfig({displayName:"BundleHeaderWrapper"})`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  ${({hasMarginBottom:e})=>e&&`\n    margin-bottom: ${i(6)};\n  `}

  ${({isDestinationBundle:e,theme:o})=>e&&r`
      background: ${a(o,"colors.background.light")};
    `}

  ${({overlayType:e,isDirectoryBundle:o,isFullBleedForXXXL:n})=>"none"!==e&&!o&&!n&&`\n      ${k} {\n        @media (min-width: ${p.xxl}) {\n          width: ${p.xxl};\n          margin: 0 auto;\n        }\n      }\n    `}

  ${$} {
    grid-column: inherit;

    ${({isDestinationBundle:e,theme:o})=>e&&r`
        background: ${a(o,"colors.background.light")};

        ${f} {
          @media (min-width: ${p.xxl}) {
            padding-left: 0;
            padding-right: 0;
          }
        }
        ${B} {
          grid-column: 1/-1;
        }
      `}

    ${f} {
      margin-top: ${i(2)};

      @media (min-width: ${p.md}) {
        margin-top: ${i(2)};
      }

      ${B} {
        ${({isInverted:e,theme:o})=>e&&`\n              background: ${a(o,"colors.background.black")};\n            `}

        .caption__credit {
          ${({isInverted:e,theme:o})=>e&&`\n              color: ${a(o,"colors.consumption.lead.inverted.description")};\n            `}
        }
      }
    }
  }
`,x=t(h).withConfig({displayName:"BundleHeaderSection"})`
  grid-column: 1;
  grid-row: 1;
  background: ${({theme:e})=>a(e,"colors.background.light")};

  ${({shouldApplyDarkBackground:e,theme:o})=>e&&`\n      background: ${a(o,"colors.consumption.lead.inverted.background")};\n    `}

  ${({hasTopMargin:e})=>e&&`\n    ${l(p.lg)} {\n      margin-top: -8%;\n    }\n  `}
    
  ${({overlayType:e})=>"gradient"===e?r`
        &:after {
          background: linear-gradient(to top, rgb(0, 0, 0) 0, transparent 65%);
          content: '';
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `:"solid"===e?r`
        &:after {
          background-color: rgba(
            ${a("colors.interactive.base.black",{rgbOnly:!0})},
            0.35
          );
          content: '';
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
        }
      `:""}

  .lead-asset__content__photo,
  ${v} ${b} {
    ${l(p.md)} {
      max-height: none;
    }
  }

  ${v},
  ${b} {
    width: 100%;
  }
`,T=t.div.withConfig({displayName:"BundleHeaderHedDekGrid"})`
  ${u()}

  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  z-index: 1;
  width: 100%;
  row-gap: var(--grid-gap);
  ${({isInverted:e,theme:o})=>e&&`\n      background: ${a(o,"colors.consumption.lead.inverted.background")};\n    `}

  ${c("padding")}
  ${({headerPosition:e})=>"center"===e?"place-items: center center;":"place-items: start center;"}

  ${l(p.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,C=t.div.withConfig({displayName:"BundleHeaderHedDekBlock"})`
  grid-column: 1 / -1;
  text-align: center;
  @media (min-width: ${p.lg}) {
    ${({isDirectoryBundle:e})=>e?"grid-column: 4 / 10":"grid-column: 1 / -1;"}
    ${({showHeaderOnTop:e,showHeaderOnBottom:o})=>(e||o)&&"\n        grid-column: 3 / -3;\n      "}
  }
`,D=t(g).withConfig({displayName:"SectionHeaderStyle"})`
  margin-top: ${i(5)};
  margin-bottom: ${i(2)};

  color: ${({theme:e})=>a(e,"colors.discovery.body.white.heading")};

  ${({isInverted:e,theme:o})=>e&&`\n    color: ${a(o,"colors.discovery.body.white.heading")};\n      `}

  @media (min-width: ${p.xl}) {
    margin-top: ${i(8)};
    margin-bottom: ${i(4)};
  }
`,S=t(m).withConfig({displayName:"BundleHeaderHed"})`
  margin-top: ${i(5)};
  margin-bottom: ${i(2)};
  ${({theme:e,shouldDecorateHeader:o})=>o?`text-decoration: underline; text-decoration-color: ${a(e,"colors.discovery.lead.primary.accent")};`:"text-decoration: none"};
  ${({theme:e,shouldOverrideTypeToken:o})=>d(e,o?"typography.definitions.consumptionEditorial.hed-standard":"typography.definitions.consumptionEditorial.display-small")};

  @media (min-width: ${p.xl}) {
    margin-top: ${i(8)};
    margin-bottom: ${i(4)};
    ${({theme:e,shouldOverrideTypeToken:o})=>d(e,o?"typography.definitions.consumptionEditorial.hed-standard":"typography.definitions.discovery.hed-break-out")};
  }
`;S.defaultProps={as:"h1",colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const O=t(m).withConfig({displayName:"BundleHeaderDekText"})`
  ${({isDestinationBundle:e,shouldOverrideDirectoryBundle:o,theme:n})=>d(n,e||o?"typography.definitions.consumptionEditorial.description-core":"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
  ${({shouldOverrideDirectoryBundle:e,isDirectoryBundle:o,theme:n})=>!e&&d(n,o?"typography.definitions.consumptionEditorial.subhed-break-secondary":"typography.definitions.consumptionEditorial.subhed-aux-secondary")};

  margin-top: 0;
  color: ${({isDestinationBundle:e,theme:o})=>a(o,e?"colors.discovery.body.black.description":"colors.discovery.body.white.description")};

  ${({shouldOverrideDirectoryBundle:e,theme:o})=>e&&`\n        ${s(o,"color","colors.consumption.body.inverted.body-deemphasized")}\n    `}

  ${({isDirectoryBundle:e,theme:o})=>e?r`
          margin-bottom: ${i(4)};
          color: ${a(o,"colors.discovery.body.white.context-texture")};
          @media (max-width: ${p.lg}) {
            font-size: ${i(2)};
          }
        `:""};

  ${({showByline:e,showHeaderOnTop:o})=>!e&&o&&`\n        margin-bottom: ${i(5)};\n\n        @media (min-width: ${p.lg}) {\n          margin-bottom: ${i(6)};\n        }\n      `}

  ${({shouldOverrideBundleHeaderDekText:e})=>e&&`\n    @media (min-width: ${p.xl}) {\n      text-align: justify;\n      font-size: ${i(3.3,"px")};\n      margin-bottom: ${i(8,"px")};\n    }\n\n    @media (max-width: ${p.xl}) {\n      text-align: left;\n      font-size: ${i(2.75,"px")};\n      margin: ${i(6,"px")} 0 ${i(8,"px")} 0;\n    }\n  `}

  ${({shouldAddBottomSpacing:e})=>e&&`\n        margin-bottom: ${i(5)};\n\n        @media (min-width: ${p.lg}) {\n          margin-bottom: ${i(6)};\n        }\n    `}
`,E=t.div.withConfig({displayName:"BundleHeaderFullBleedContainer"})`
  display: grid;
  grid-column: -1 / 1;
  align-items: center;
  text-align: center;
  @media (min-width: ${p.lg}) {
    grid-column: 4 / 10;
  }
`,I=t(m).withConfig({displayName:"BundleHeaderFullBleedHedText"})`
  margin-bottom: ${i(1)};
  font-size: 2em;
  font-weight: bold;
  ${({isDestinationBundle:e,theme:o})=>!0===e?r`
          margin-bottom: 0;
          ${d(o,"typography.definitions.discovery.page-hed-section")};
        `:""}
  ${({isDirectoryBundle:e,theme:o})=>e?r`
          margin-bottom: ${i(2)};
          ${d(o,"typography.definitions.discovery.page-hed-subsection")};
          @media (max-width: ${p.lg}) {
            font-size: ${i(4)};
          }
        `:""}
`;I.defaultProps={as:"h1",colorToken:"colors.discovery.body.white.background",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const F=t.div.withConfig({displayName:"ButtonGroupWrapper"})`
  a {
    margin-right: ${i(2.5)};
    border: none;
    @media (max-width: ${p.lg}) {
      margin-right: 0;
      width: 100%;
    }
  }

  a:hover {
    border: none;
  }
  ${w} {
    justify-content: center;
    @media (max-width: ${p.lg}) {
      margin: ${i(2)} 0 ${i(.5)};
    }
  }
`,L=t(y).withConfig({displayName:"BundleHeaderBylines"})`
  margin-top: ${i(2)};
  margin-bottom: ${i(5)};

  @media (min-width: ${p.xl}) {
    margin-top: ${i(4)};
    margin-bottom: ${i(6)};
  }
`;L.defaultProps={colorToken:"colors.consumption.lead.standard.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-core"},e.exports={BundleHeaderHed:S,BundleHeaderWrapper:H,BundleHeaderSection:x,BundleHeaderHedDekGrid:T,BundleHeaderHedDekBlock:C,BundleHeaderDekText:O,SectionHeaderStyle:D,BundleHeaderFullBleedContainer:E,BundleHeaderFullBleedHedText:I,ButtonGroupWrapper:F,BundleHeaderBylines:L}},11752:(e,o,n)=>{const t=n(45697),r=n(67294),i=n(17843),a=n(48655),{getSeparatorIconComponent:d}=n(73067),{BreadcrumbTrailWrapper:l,BreadcrumbTrailScrollContainer:s,BreadcrumbTrailItem:c}=n(96033),{trackComponent:u}=n(40199),m=({hierarchy:e,shouldRemoveBackgroundColor:o,theme:n,shouldUseContentHeaderColorForLink:t,separatorIcon:m})=>(r.useEffect((()=>{u("BreadcrumbTrail")}),[]),r.createElement(i,{palette:n},r.createElement(l,{"data-testid":"BreadcrumbTrail",shouldRemoveBackgroundColor:o},e&&e.length>0&&r.createElement(a.WithMargins,null,r.createElement(s,null,e.map(((e,o)=>{const{name:n,slug:i}=e||{};return r.createElement(c,{key:o,shouldUseContentHeaderColorForLink:t},i?r.createElement("a",{className:"breadCrumbLink",href:i},n):r.createElement("span",null,n),d(m))})))))));m.displayName="BreadcrumbTrail",m.defaultProps={separatorIcon:{name:"Chevron",type:"standard"},shouldRemoveBackgroundColor:!1,theme:"standard"},m.propTypes={hierarchy:t.array.isRequired,separatorIcon:t.shape({name:t.string,type:t.oneOf(["standard","thin","thinner"])}),shouldRemoveBackgroundColor:t.bool,shouldUseContentHeaderColorForLink:t.bool,theme:t.string},e.exports=m},32803:(e,o,n)=>{const{asConfiguredComponent:t}=n(36380),r=n(11752);e.exports=t(r,"BreadcrumbTrail")},96033:(e,o,n)=>{const{default:t}=n(51117),{BaseText:r}=n(74327),{calculateSpacing:i,getLinkStyles:a,getColorStyles:d}=n(79720),{BREAKPOINTS:l}=n(85326),{isInverted:s}=n(37332),c=t.div.withConfig({displayName:"BreadcrumbTrailWrapper"})`
  ${({theme:e,shouldRemoveBackgroundColor:o})=>{const n=s(e)?"colors.background.black":"colors.background.light";return o?"background-color: transparent;":`${d(e,"background-color",n)};`}};

  padding-top: ${i(2.4)};
  padding-bottom: ${i(2.4)};
  width: 100%;

  @media (max-width: ${l.md}) {
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`,u=t.div.withConfig({displayName:"BreadcrumbTrailScrollContainer"})`
  display: flex;
  width: max-content;
`,m=t(r).withConfig({displayName:"BreadcrumbTrailItem"})`
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  ${({theme:e})=>s(e)&&`\n      ${d(e,"color","colors.consumption.lead.inverted.link")};`}

  a:active,
  a:link {
    text-decoration: none;
  }

  a:hover,
  a:focus {
    text-decoration: underline;
  }

  .icon {
    margin: 0 ${i(.2)};

    path {
      ${({theme:e})=>s(e)&&`\n          ${d(e,"fill","colors.consumption.lead.inverted.link")};\n        `}
    }
  }

  &:last-of-type {
    a {
      ${({theme:e,shouldUseContentHeaderColorForLink:o})=>{const n=s(e)?a(e,"colors.consumption.lead.inverted.link",null):a(e,"colors.discovery.lead.secondary.link",null);return o?a(e,"colors.consumption.lead.standard.context-signature",null):n}}

      &:active,
      &:link {
        text-decoration: none;
      }

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }

    span {
      ${({theme:e})=>d(e,"color","colors.discovery.lead.secondary.link")};
    }

    .icon {
      display: none;
    }
  }
`;m.defaultProps={typeIdentity:"typography.definitions.globalEditorial.tags"},e.exports={BreadcrumbTrailWrapper:c,BreadcrumbTrailScrollContainer:u,BreadcrumbTrailItem:m}},73067:(e,o,n)=>{const t=n(67294),{getIconComponent:r}=n(30579);e.exports={getSeparatorIconComponent:e=>{const{name:o,type:n}=e,i=r(o,n)||r("Chevron","standard");return t.createElement(i,Object.assign({},{width:"1rem",height:"1rem"}))}}},80640:(e,o,n)=>{e.exports=n(72874)},72874:(e,o,n)=>{const{asVariation:t}=n(95545),r=n(86128);r.MultipleSelect=t(r,"Multiple Select",{isMultiSelect:!0,isSearchable:!1}),r.MultipleSelectSearchable=t(r,"Multiple Select Searchable",{isMultiSelect:!0,isSearchable:!0}),r.Searchable=t(r,"Searchable",{isSearchable:!0}),r.Static=t(r,"Static",{isSearchable:!1}),e.exports=r},30579:(e,o,n)=>{const t={standard:n(18322),thin:n(23693),thinner:n(69598)};e.exports={getIconComponent:(e,o="standard")=>{if(!e)return null;return t[o][e]||null}}},69598:(e,o,n)=>{const t=n(85322),r=n(30157),i=n(68537),a=n(94101),d=n(6664),l=n(17390),s=n(94838);e.exports={Bookmark:t,BookmarkActivated:r,Email:i,Facebook:a,Twitter:l,Print:d,Shopping:s}},30302:(e,o,n)=>{"use strict";n.d(o,{O:()=>g});var t=n(66292),r=n(94371),i=n(45042),a=/[A-Z]|^ms/g,d=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!=typeof e},c=(0,i.Z)((function(e){return l(e)?e:e.replace(a,"-$&").toLowerCase()})),u=function(e,o){switch(e){case"animation":case"animationName":if("string"==typeof o)return o.replace(d,(function(e,o,n){return p={name:o,styles:n,next:p},o}))}return 1===r.Z[e]||l(e)||"number"!=typeof o||0===o?o:o+"px"};function m(e,o,n){if(null==n)return"";if(void 0!==n.__emotion_styles)return n;switch(typeof n){case"boolean":return"";case"object":if(1===n.anim)return p={name:n.name,styles:n.styles,next:p},n.name;if(void 0!==n.styles){var t=n.next;if(void 0!==t)for(;void 0!==t;)p={name:t.name,styles:t.styles,next:p},t=t.next;return n.styles+";"}return function(e,o,n){var t="";if(Array.isArray(n))for(var r=0;r<n.length;r++)t+=m(e,o,n[r])+";";else for(var i in n){var a=n[i];if("object"!=typeof a)null!=o&&void 0!==o[a]?t+=i+"{"+o[a]+"}":s(a)&&(t+=c(i)+":"+u(i,a)+";");else if(!Array.isArray(a)||"string"!=typeof a[0]||null!=o&&void 0!==o[a[0]]){var d=m(e,o,a);switch(i){case"animation":case"animationName":t+=c(i)+":"+d+";";break;default:t+=i+"{"+d+"}"}}else for(var l=0;l<a.length;l++)s(a[l])&&(t+=c(i)+":"+u(i,a[l])+";")}return t}(e,o,n);case"function":if(void 0!==e){var r=p,i=n(e);return p=r,m(e,o,i)}}if(null==o)return n;var a=o[n];return void 0!==a?a:n}var p,h=/label:\s*([^\s;\n{]+)\s*(;|$)/g,g=function(e,o,n){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,i="";p=void 0;var a=e[0];null==a||void 0===a.raw?(r=!1,i+=m(n,o,a)):i+=a[0];for(var d=1;d<e.length;d++)i+=m(n,o,e[d]),r&&(i+=a[d]);h.lastIndex=0;for(var l,s="";null!==(l=h.exec(i));)s+="-"+l[1];return{name:(0,t.Z)(i)+s,styles:i,next:p}}}}]);