(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[2315],{59559:(e,t,n)=>{const r=n(45697),o=n(67294),{asConfiguredComponent:a}=n(36380),i=n(81768),{CategoryFilterItemButton:l,CategoryFilterItemText:s,CategoryFilterItemWapper:d}=n(55410),{trackComponent:c}=n(40199),p=({dangerousText:e,Icon:t,onClickHandler:n,theme:r})=>{const a="inverted"===r;return o.useEffect((()=>{c("CategoryFilterItem")}),[]),o.createElement(d,{className:"item-wrapper"},o.createElement(l,{onClick:n,isInverted:a,"aria-label":"action button"},o.createElement(t,null)),o.createElement(s,{isInverted:a,dangerouslySetInnerHTML:{__html:e}}))};p.propTypes={dangerousText:r.string.isRequired,Icon:r.func,onClickHandler:r.func,theme:r.oneOf(["standard","inverted"])},p.defaultProps={Icon:i,theme:"standard"},p.displayName="CategoryFilterItem",e.exports=a(p,"CategoryFilterItem")},29034:(e,t,n)=>{e.exports=n(59559)},55410:(e,t,n)=>{const r=n(51117).default,{BaseText:o}=n(74327),{getColorToken:a,calculateSpacing:i,getTypographyStyles:l}=n(79720),s=r.div.withConfig({displayName:"CategoryFilterItemWapper"})`
  display: flex;
  flex-shrink: 0;
  padding: 0;
`,d=r.button.withConfig({displayName:"CategoryFilterItemButton"})`
  ${"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"}
  margin-right: ${i(2)};
  outline: none;
  border: 1px solid ${a("colors.interactive.base.black")};
  border-radius: 50%;
  background: #fff;
  background-color: ${({isInverted:e,theme:t})=>a(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.standard.heading")};
  padding: 0;
  width: 17px;
  height: 17px;

  svg {
    fill: ${({isInverted:e,theme:t})=>a(t,e?"colors.interactive.base.black":"colors.interactive.base.white")};
  }

  &:hover {
    text-decoration: none;
  }
`,c=r(o).withConfig({displayName:"CategoryFilterItemText"})`
  ${({theme:e})=>l(e,"typography.definitions.utility.input-core")};

  color: ${({isInverted:e,theme:t})=>a(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.standard.heading")};
`;e.exports={CategoryFilterItemButton:d,CategoryFilterItemText:c,CategoryFilterItemWapper:s}},58918:(e,t,n)=>{const r=n(45697),o=n(67294),{useState:a,useEffect:i,useImperativeHandle:l}=n(67294),{asConfiguredComponent:s}=n(36380),{asThemedComponent:d}=n(3517),{connector:c}=n(92078),{trackComponent:p}=n(40199),{FilterWrapper:u,ButtonUtilityInvertedWrapper:m,TriangleUpIconWrapper:g,ButtonUtilityWrapper:h,InvertedTriangleDownIconWrapper:v,WrapSelectedTokens:f}=n(75753),b=n(7279),{BaseWrap:y}=n(74327),x=n(48655),C=n(75238),w=n(76612),k=n(42670),I=({channelTree:e,hideStoryCount:t,storyCount:n,onFilterSaveCallback:r,variations:s,isGridLayout:d,saveButtonText:c,hasEnableIcon:I,filterRef:S,variationName:T})=>{o.useEffect((()=>{p("ChannelFilter",T)}),[T]);const[N,F]=a(!1),[$,W]=a({}),[E,O]=a(JSON.parse(JSON.stringify(e))),[B,D]=a([]),[A,M]=a([]),[H,j]=a(!1),[U,P]=a(!1),L=d?x.WithMargins:y;i((()=>{const e=new URLSearchParams(window.location.search);(e.get("q")||e.get("filter"))&&P(!0);const t=E?[...E]:[],n=[];t.forEach((e=>{let t=0;e.sub.forEach((e=>{e.selected&&(n.push(e),t++)})),e.text=t>0?`${e.originalText} (${t})`:e.originalText})),M(n),O(t)}),[]),l(S,(()=>({resetSelectedSubFilters:()=>{D([]),M([]),O((e=>e.map((e=>Object.assign(Object.assign({},e),{text:e.originalText,sub:e.sub.map((e=>Object.assign(Object.assign({},e),{selected:!1})))})))))}})));const z={filterData:E,finalSelectedSubFilters:A,isDirty:H,isGridLayout:d,overlayData:$,selectedSubFilters:B,setFilterData:O,setFinalSelectedSubFilters:M,onFilterSaveCallback:r,setIsDirty:j,setIsOverlayVisible:F,setSelectedSubFilters:D,variations:s,saveButtonText:c},R={filterData:E,finalSelectedSubFilters:A,setFilterData:O,setFinalSelectedSubFilters:M,onFilterSaveCallback:r,storyCount:n,hideStoryCount:t,variations:s};return o.createElement(L,{className:"channelfilter-wrapper"},o.createElement(u,null,E.map((e=>{const{ButtonComponent:t,ButtonWrapper:n,IconWrapper:r}={ButtonComponent:(a=e.text===e.originalText)?b.Utility:b.UtilityInverted,ButtonWrapper:a?h:m,IconWrapper:a?v:g};var a;return o.createElement(n,{key:e.id,isInverted:s.isInverted,className:"button-wrapper"},o.createElement(t,{id:e.id,label:e.text,title:e.text,iconPosition:"after",hasDarkBackground:!0,hasEnableIcon:I,onClickHandler:()=>{const t=e.sub.filter((e=>e.selected));D(t),F(!0),W(e)},ButtonIcon:()=>o.createElement(r,{isInverted:s.isInverted},o.createElement(C,null))}))})),N&&o.createElement(w,Object.assign({},z))),o.createElement(f,null,U&&o.createElement(k,Object.assign({},R))))};I.propTypes={channelTree:r.arrayOf(r.shape({id:r.string,text:r.string,originalText:r.string,sub:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string}))})),filterRef:r.shape({current:r.object}),hasEnableIcon:r.bool,hideStoryCount:r.bool,isGridLayout:r.bool,onFilterSaveCallback:r.func,saveButtonText:r.string,storyCount:r.number,variationName:r.string,variations:r.shape({isInverted:r.bool})},I.defaultProps={hasEnableIcon:!1,hideStoryCount:!1,isGridLayout:!0,variations:{isInverted:!1}},I.displayName="ChannelFilter",e.exports=c(d(s(I,"ChannelFilter")),{keysToPluck:["channelTree"]})},42670:(e,t,n)=>{const r=n(45697),o=n(67294),{useIntl:a}=n(76186),i=n(68164).Z,{SearchTokensContainer:l,SearchTokensInfoCount:s,SearchTokensinfoClearAllButton:d,SearchTokensInfoWapper:c,TokenWrapper:p}=n(75753),u=n(29034),{getUrlWithUpdatedFilters:m}=n(19287),g=({filterData:e,finalSelectedSubFilters:t,setFilterData:n,setFinalSelectedSubFilters:r,onFilterSaveCallback:g,storyCount:h,hideStoryCount:v,variations:f})=>{const{formatMessage:b}=a();return o.createElement(l,{isInverted:f.isInverted,className:"info-container"},o.createElement(c,{className:"info-wapper"},!v&&o.createElement(s,{isInverted:f.isInverted,className:"story-count"},b(i.storyCountText,{storyCount:h})),o.createElement(d,{isInverted:f.isInverted,onClick:()=>(()=>{const e=`${window.location.origin}${window.location.pathname}`;window.location=`${e}`})(),className:"clear-all-selected-filter"},b(i.clearAllFiltersText))),t.map((a=>o.createElement(p,{key:a.id,isInverted:f.isInverted,className:"selected-filter-token"},o.createElement(u,{onClickHandler:()=>(o=>{const a=[...e],i=(()=>{for(const e of a)for(const t of e.sub)if(t.id===o.id)return e;return{}})();let l=0;i.sub.forEach((e=>{o.id===e.id&&(e.selected=!1),e.selected&&l++})),i.text=0!==l?`${i.originalText} (${l})`:i.originalText;const s=t.filter((e=>e.id!==o.id));if(n(a),r(s),g)g(s);else{const{location:e}=window,t=m({filters:s,location:e});window.location=t}})(a),dangerousText:a.text,theme:f.isInverted?"inverted":"standard"})))))};g.propTypes={filterData:r.arrayOf(r.shape({id:r.string,text:r.string,originalText:r.string,sub:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string}))})),finalSelectedSubFilters:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string})),hideStoryCount:r.bool,onFilterSaveCallback:r.func,setFilterData:r.func,setFinalSelectedSubFilters:r.func,storyCount:r.number,variations:r.shape({isInverted:r.bool})},g.displayName="FilterInfo",e.exports=g},76612:(e,t,n)=>{const r=n(45697),o=n(67294),{useRef:a}=n(67294),{useIntl:i}=n(76186),{googleAnalytics:l}=n(28601),s=n(68164).Z,{ModalWrapper:d,OverlayWrapper:c,ModalDialogWrapper:p,HeaderTextWrapper:u,FilterOptionTextWrapper:m,FlexContainer:g,MobileFooterWrapper:h,HeaderButtonsWrapper:v,SaveButtonWrapper:f,FilterOptionsWrapper:b,HeaderWrapper:y,CloseIconWrapper:x,ClearAllTextWrapper:C,FilterOptionTokenWrapper:w}=n(75753),{BaseWrap:k}=n(74327),I=n(81768),S=n(6083),T=n(29034),{getUrlWithUpdatedFilters:N,useOutsideClick:F}=n(19287),$=({filterData:e,finalSelectedSubFilters:t,isDirty:n,isGridLayout:r,overlayData:$,selectedSubFilters:W,setFilterData:E,setFinalSelectedSubFilters:O,onFilterSaveCallback:B,setIsDirty:D,setIsOverlayVisible:A,setSelectedSubFilters:M,variations:H,saveButtonText:j})=>{const{formatMessage:U}=i(),P=a(null);F(P,A);const L=r?c:k,z=e=>{W.includes(e)?M(W.filter((t=>t!==e))):M([...W,e]),D(!0)};return o.createElement(d,{className:"modal-wrapper"},o.createElement(L,{className:"channelfilter-wrapper"},o.createElement(p,{isInverted:H.isInverted,ref:P},o.createElement(y,null,o.createElement(u,{isInverted:H.isInverted},`${U(s.filterPreamble)} ${$.text}`),o.createElement(x,{isInverted:H.isInverted,onClick:()=>{A(!1),D(!1),M([])}},o.createElement(I,null)),o.createElement(h,null,o.createElement(v,{isInverted:H.isInverted},o.createElement(C,{isInverted:H.isInverted,onClick:()=>(()=>{const e=W.filter((e=>{for(const t of $.sub)if(t.id===e.id)return!1;return!0}));M(e),D(!0)})(),className:"clear-all-filter"},U(s.clearAllText)),o.createElement(f,{id:"channel-filter-save",label:j||U(s.saveButtonText),title:U(s.saveButtonText),onClickHandler:()=>(()=>{const n=[...e];n.forEach((e=>{if(e.id===$.id){let t=0;e.sub.forEach((e=>{e.selected=!1,W.forEach((n=>{e.id===n.id&&(e.selected=!0,t++)}))})),e.text=0!==t?`${e.originalText} (${t})`:e.originalText}}));const r=[...t.filter((e=>{for(const t of $.sub)if(e.id===t.id)return!1;return!0})),...W];if((e=>{const t=W.map((e=>e.text)),n=`${$.originalText}: ${t.join(" | ")}`;l.emitGoogleTrackingEvent("channelfilter click-tracking",{"ai-hub-filter":n})})(),O(r),E(n),D(!1),M([]),A(!1),t.length>0||r.length>0)if(B)B(r);else{const{location:e}=window,t=N({filters:r,location:e});window.location=t}})(),isInverted:H.isInverted,className:"save-filter"})))),o.createElement(b,null,o.createElement(g,null,$.sub.map((e=>{const r=n?W:t;for(const t of r)if(e.id===t.id)return o.createElement(w,{key:e.id,isInverted:H.isInverted,onClick:()=>z(e),className:"token-wrapper"},o.createElement(T,{dangerousText:e.text,theme:H.isInverted?"standard":"inverted",Icon:S}));return o.createElement(m,{key:e.id,onClick:()=>z(e),className:"text-wrapper"},e.text)})))))))};$.propTypes={filterData:r.arrayOf(r.shape({id:r.string,text:r.string,originalText:r.string,sub:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string}))})),finalSelectedSubFilters:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string})),isDirty:r.bool,isGridLayout:r.bool,onFilterSaveCallback:r.func,overlayData:r.shape({id:r.string,text:r.string,originalText:r.string,sub:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string}))}),saveButtonText:r.string,selectedSubFilters:r.arrayOf(r.shape({id:r.string,text:r.string,selected:r.boolean,hierarchyString:r.string})),setFilterData:r.func,setFinalSelectedSubFilters:r.func,setIsDirty:r.func,setIsOverlayVisible:r.func,setSelectedSubFilters:r.func,variations:r.shape({isInverted:r.bool})},$.displayName="FilterOverlay",e.exports=$},3217:e=>{e.exports=({filters:e,location:t})=>{const n=e.map((e=>e.hierarchyString));let r="";const o=new URLSearchParams(t.search).get("q");return n.length&&(r=`?filter=${n.join(",")}`,t.search===r)?t:(o&&(r+=r?"&":"?",r+=`q=${o}${0===n.length?"&filter=channels/artificial-intelligence":""}`),`${t.origin}${t.pathname}${r}`)}},19287:(e,t,n)=>{const r=n(3217),o=n(93221);e.exports={getUrlWithUpdatedFilters:r,useOutsideClick:o}},93221:(e,t,n)=>{const{useEffect:r}=n(67294);e.exports=(e,t)=>{r((()=>{const n=n=>{e.current&&!e.current.contains(n.target)&&t(!1)};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e,t])}},33570:(e,t,n)=>{const r=n(24139);e.exports=r},75753:(e,t,n)=>{const r=n(51117).default,{BaseText:o}=n(74327),{BREAKPOINTS:a}=n(85326),i=n(48655),l=n(7279),{getColorToken:s,calculateSpacing:d,getTypographyStyles:c}=n(79720),p=r.div.withConfig({displayName:"FilterWrapper"})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0;
  padding: 15px 0 15px 0;
`,u=r.div.withConfig({displayName:"ButtonUtilityInvertedWrapper"})`
  padding: 0 20px 20px 0;

  .button {
    border-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
    text-transform: capitalize;

    ${({theme:e})=>c(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};

    &:hover,
    &:focus {
      background-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
      color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};
    }
  }
`,m=r(u).withConfig({displayName:"ButtonUtilityWrapper"})`
  .button {
    border-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};

    &:hover,
    &:focus {
      border-color: ${({isInverted:e,theme:t})=>e&&s(t,"colors.consumption.lead.inverted.heading")};
      background-color: ${({isInverted:e,theme:t})=>s(t,"colors.consumption.lead.inverted.background")};
      color: ${({theme:e})=>s(e,"colors.consumption.lead.inverted.heading")};
    }
  }
`,g=r.div.withConfig({displayName:"TriangleUpIconWrapper"})`
  height: 14px;

  .icon {
    width: 15px;
    height: 15px;
    stroke-width: 3;
  }
`,h=r.div.withConfig({displayName:"InvertedTriangleDownIconWrapper"})`
  height: 14px;

  .icon {
    width: 15px;
    height: 15px;
    stroke-width: 3;

    polyline {
      stroke: ${({theme:e})=>s(e,"colors.consumption.lead.inverted.heading")};
    }
  }
`,v=r.div.withConfig({displayName:"ModalWrapper"})`
  position: absolute;
  left: 0;
  z-index: 49;
  outline: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${a.md}) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    overflow-y: scroll;
  }
`,f=r.div.withConfig({displayName:"ModalDialogWrapper"})`
  background: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
  height: fit-content;

  @media (max-width: ${a.md}) {
    height: 100%;
  }
`,b=r(i.WithMargins).withConfig({displayName:"OverlayWrapper"})`
  min-height: 313px;

  @media (max-width: ${a.md}) {
    && {
      padding: 0;
    }
    height: 100vh;
  }
`,y=r.h1.withConfig({displayName:"HeaderTextWrapper"})`
  ${({theme:e})=>c(e,"typography.discover.hed.core.secondary")};

  float: left;
  line-height: 29px;
  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.standard.heading":"colors.consumption.lead.inverted.heading")};

  font-size: 24px;
  @media (max-width: ${a.md}) {
    max-width: 70vw;
  }
`,x=r.div.withConfig({displayName:"HeaderWrapper"})`
  padding: 31px 69px 50px 67px;

  @media (max-width: ${a.md}) {
    padding: 31px 22px 31px 22px;
  }
`,C=r.div.withConfig({displayName:"FilterOptionTextWrapper"})`
  ${({theme:e})=>c(e,"typography.definitions.utility.input-core")};

  cursor: pointer;
  padding-right: 24px;
  padding-bottom: 32px;
  line-height: 40px;

  -webkit-text-fill-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.body.standard.body-deemphasized":"colors.consumption.body.inverted.body-deemphasized")};
  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.body.standard.body-deemphasized":"colors.consumption.body.inverted.body-deemphasized")};

  &:hover,
  &:focus {
    text-decoration: underline;
  }

  @media (max-width: ${a.md}) {
    padding: 0 0 24px 0;
    line-height: 20px;
  }
`,w=r(C).withConfig({displayName:"FilterOptionTokenWrapper"})`
  margin-top: 10px;
  padding-bottom: 45px;
  text-decoration: underline;

  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};

  @media (max-width: ${a.md}) {
    margin-top: 0;
    padding-bottom: 25px;
  }
`,k=r(C).withConfig({displayName:"ClearAllTextWrapper"})`
  padding: 4px 30px;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};
  }

  @media (max-width: ${a.md}) {
    padding: 15px 30px;
  }
`,I=r.div.withConfig({displayName:"FlexContainer"})`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${a.md}) {
    && {
      all: unset;
    }
  }
`,S=r.div.withConfig({displayName:"FilterOptionsWrapper"})`
  padding: 32px 69px 0 69px;

  @media (max-width: ${a.md}) {
    padding-top: 46px;
    padding-bottom: 70px;
    padding-left: 22px;
  }
`,T=r.div.withConfig({displayName:"MobileFooterWrapper"})`
  @media (max-width: ${a.md}) {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000000;
    box-shadow: 0 4px 24px rgb(0 0 0 / 25%);
    width: 100%;
  }
`,N=r.div.withConfig({displayName:"HeaderButtonsWrapper"})`
  display: flex;
  float: right;

  @media (max-width: ${a.md}) {
    justify-content: center;
    float: none;
    background-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
    padding: 10px;
  }
`,F=r(l.Utility).withConfig({displayName:"SaveButtonWrapper"})`
  border-radius: 3px;

  background-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};
  min-width: 100px;
  height: 47px;

  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};

  &:hover,
  &:focus {
    border-color: ${({theme:e})=>s(e,"colors.consumption.lead.inverted.background")};

    background-color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.background":"colors.consumption.lead.inverted.heading")};
    color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
  }
`,$=r.div.withConfig({displayName:"CloseIconWrapper"})`
  display: none;

  @media (max-width: ${a.md}) {
    display: block;
    float: right;
    margin-top: 15px;
    cursor: pointer;

    svg {
      path {
        fill: ${({isInverted:e,theme:t})=>e?"initial":s(t,"colors.interactive.base.white")};
      }
    }
  }
`,W=r.div.withConfig({displayName:"SearchTokensContainer"})`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: ${d(2)};

  ${({isInverted:e,theme:t})=>e&&`\n    background: ${s(t,"colors.consumption.lead.inverted.heading-background")};\n  `}
`,E=r(o).withConfig({displayName:"SearchTokensInfoWapper"})`
  margin: ${d(1)} 0 ${d(4)} 0;
  width: 100%;
  ${c("typography.definitions.utility.label")}
`,O=r.span.withConfig({displayName:"SearchTokensInfoCount"})`
  margin-right: ${d(1)};
  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.body.inverted.body-deemphasized":"colors.consumption.body.standard.body-deemphasized")};
`,B=r.button.withConfig({displayName:"SearchTokensinfoClearAllButton"})`
  outline: none;
  background: transparent;
  padding: 0;
  color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.standard.heading")};
  text-decoration-line: underline;
`,D=r.div.withConfig({displayName:"WrapSelectedTokens"})`
  margin-top: -40px;
`,A=r.hr.withConfig({displayName:"HorizontalLine"})`
  border-bottom: none;
  width: 100%;
`,M=r.div.withConfig({displayName:"TokenWrapper"})`
  margin-top: -10px;
  padding: 0 32px 16px 0;

  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${({isInverted:e,theme:t})=>s(t,e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.inverted.background")};
  }
`;e.exports={FilterWrapper:p,ButtonUtilityInvertedWrapper:u,TriangleUpIconWrapper:g,ModalWrapper:v,ModalDialogWrapper:f,OverlayWrapper:b,HeaderTextWrapper:y,FilterOptionTextWrapper:C,FlexContainer:I,MobileFooterWrapper:T,HeaderButtonsWrapper:N,SaveButtonWrapper:F,FilterOptionsWrapper:S,HeaderWrapper:x,CloseIconWrapper:$,ClearAllTextWrapper:k,ButtonUtilityWrapper:m,InvertedTriangleDownIconWrapper:h,SearchTokensContainer:W,SearchTokensInfoCount:O,SearchTokensinfoClearAllButton:B,SearchTokensInfoWapper:E,WrapSelectedTokens:D,HorizontalLine:A,TokenWrapper:M,FilterOptionTokenWrapper:w}},68164:(e,t,n)=>{const r=n(76186);t.Z=(0,r.defineMessages)({filterPreamble:{id:"ChannelFilter.FilterPreamble",defaultMessage:"Filter by",description:"ChannelFilter component filter preamble"},clearAllText:{id:"ChannelFilter.ClearAll",defaultMessage:"Clear All",description:"ChannelFilter component clear all text"},saveButtonText:{id:"ChannelFilter.Save",defaultMessage:"Save",description:"ChannelFilter component save button text"},storyCountText:{id:"ChannelFilter.StoryCount",defaultMessage:"Showing {storyCount, plural, one {# Story} other {# Stories}}",description:"ChannelFilter component story count text"},clearAllFiltersText:{id:"ChannelFilter.ClearAllFiltersText",defaultMessage:"Clear All Filters and Keywords",description:"ChannelFilter component clear all sub filter text"}})},24139:(e,t,n)=>{const{asVariation:r}=n(95545),o=n(58918);o.Inverted=r(o,"Inverted",{isInverted:!0}),e.exports=o},81535:function(e,t,n){var r=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};const o=n(45697),a=n(67294),{SubNavigationCarousel:i,SubNavigationDropdown:l}=n(26079),s=e=>{var{hasBackgroundColor:t,layout:n}=e,o=r(e,["hasBackgroundColor","layout"]);return a.createElement(a.Fragment,null,"SubNavigationCarousel"===n&&a.createElement(i,Object.assign({hasBackgroundColor:t},o)),"SubNavigationDropdown"===n&&a.createElement(a.Fragment,null,a.createElement(l,Object.assign({hasBackgroundColor:t,trackingNamespace:"SubNavigationDropdown"},o)),a.createElement(i,Object.assign({hasBackgroundColor:t,layout:n},o))))};s.displayName="SubNavigation",s.propTypes={hasBackgroundColor:o.bool,layout:o.oneOf(["SubNavigationCarousel","SubNavigationDropdown"])},s.defaultProps={hasBackgroundColor:!1,layout:"SubNavigationCarousel"},e.exports=s},26291:(e,t,n)=>{const{asConfiguredComponent:r}=n(36380),o=n(81535);e.exports=r(o,"SubNavigation")},26079:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SubNavigationDropdown=t.SubNavigationCarousel=void 0;const{default:r,css:o}=n(51117),{calculateSpacing:a,getColorToken:i}=n(79720),{resolveMenuKey:l}=n(37332),s=n(24445),d=n(44630),{BREAKPOINTS:c}=n(85326),p=o`
  ${({hasBackgroundColor:e,theme:t})=>e?`background-color: ${i(t,l(t,"colors.foundation.menu-bg.collapsed"))};`:`&::after {\n          background: linear-gradient(90deg, rgba(${i(t,l(t,"colors.background.adContainer.standard"),{rgbOnly:!0})}, 0) 0%, rgba(${i(t,l(t,"colors.background.adContainer.standard"),{rgbOnly:!0})}, 1) 75%);\n        @media (max-width: ${c.md}) {\n          width: ${a(7)};\n          position: absolute;\n          content: '';\n        }\n        }`}
`;t.SubNavigationCarousel=r(s).withConfig({displayName:"SubNavigationCarousel"})`
  ${p};

  ${({layout:e})=>"SubNavigationDropdown"===e&&`\n      display: flex;\n      @media (max-width: ${c.md}) {\n        display: none;\n      }\n  `}
`,t.SubNavigationDropdown=r(d).withConfig({displayName:"SubNavigationDropdown"})`
  ${p};

  display: none;
  @media (max-width: ${c.md}) {
    display: block;
  }
`},54844:(e,t,n)=>{const r=n(67294),{useRef:o}=n(67294),a=n(45697),{componentTracking:i}=n(28601),{trackComponent:l}=n(40199),{NavigationDropdownButton:s}=n(58468),{useSelectReducer:d,useCallbacks:c}=n(80754),{NavWrapper:p,NavDropdownWrapper:u}=n(16837),{NavListItem:m,NavLink:g}=n(62920),h=n(79e3),v={width:12,height:7},f=({links:e,shouldEnableBundleComponentAnalytics:t,trackingNamespace:n,className:a})=>{const f=o(null),b=o(null),y=o([]),[x,C]=d(),{onSelectOpen:w}=c(x,C,b,y);if(r.useEffect((()=>{l("DropdownNavigation")}),[]),!(null==e?void 0:e.length))return null;const k=e.find((e=>e.isActive))||e[0],I=k===e[0]?e.slice(1):e,S=x.isOpen?"opened-chevron":"";return r.createElement(p,{"data-testid":"DropdownNavigation"},r.createElement(s,{ref:f,"aria-expanded":x.isOpen,"aria-haspopup":"true",onClick:w,className:a},r.createElement("span",null,r.createElement(g,{tabIndex:"0",role:"link",href:k.url},r.createElement("span",null,k.text))),r.createElement("span",{"aria-hidden":"true",className:S},r.createElement(h,Object.assign({},v)))),r.createElement(u,{ref:b,isOpen:x.isOpen,role:"menu"},r.createElement((({navLinks:e})=>e.map((({onClick:e,isActive:o,text:a,url:l,showOnlyInBreakpoints:s},d)=>{let c={};return t&&(c=i.addDataSectionTitleAttribute(t,n,d)),r.createElement(m,Object.assign({},c,{key:a,isSlim:!0,isActive:o,showOnlyInBreakpoints:s}),r.createElement(g,{ref:e=>{y.current[d]=e},tabIndex:"0",role:"link",href:l,onClick:e,isActive:o},r.createElement("span",null,a)))}))),{navLinks:I})))};f.propTypes={className:a.string,links:a.array.isRequired,shouldEnableBundleComponentAnalytics:a.bool,trackingNamespace:a.string.isRequired},f.displayName="DropdownNavigation",e.exports=f},44630:(e,t,n)=>{e.exports=n(54844)},16837:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NavDropdownWrapper=t.NavWrapper=void 0;const{default:r}=n(51117),{getColorStyles:o,calculateSpacing:a}=n(79720),{resolveMenuKey:i}=n(37332),{BREAKPOINTS:l}=n(85326);t.NavWrapper=r.div.withConfig({displayName:"NavWrapper"})`
  display: none;
  position: relative;
  z-index: 1;
  border-width: 1px 0;
  border-style: solid;
  ${({theme:e})=>o(e,"border-color","colors.foundation.menu.dividers")};
  width: 100%;

  button {
    padding-left: ${a(3)};
    height: 48px;

    a {
      pointer-events: none;
    }
  }

  svg,
  button a span {
    ${({theme:e})=>o(e,"color",i(e,"colors.foundation.collapsed-menu.nav-link.hover"))};
  }

  svg {
    transition: transform 0.2s linear;
  }

  .opened-chevron svg {
    transform: rotate(180deg);
  }

  @media (max-width: ${l.md}) {
    display: block;
  }
`,t.NavDropdownWrapper=r.ul.withConfig({displayName:"NavDropdownWrapper"})`
  display: none;

  ${({theme:e})=>o(e,"background-color",i(e,"colors.foundation.menu-bg.expanded"))};

  margin: 0;
  box-shadow: -2px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 0 ${a(3)};

  @media (max-width: ${l.md}) {
    display: ${({isOpen:e})=>e?"block":"none"};

    li:first-child,
    li + li {
      margin-left: ${a(1.5)};

      &::before {
        bottom: unset;
        left: -${a(1.5)};
        width: 4px;
        height: 100%;
      }
    }
  }
`},17272:(e,t,n)=>{const{asConfiguredComponent:r}=n(36380),{asThemedComponent:o}=n(3517),a=n(31983);e.exports=o(r(a,"SectionHeader"))},31983:(e,t,n)=>{const{asVariation:r}=n(95545),o=n(24334);o.displayName="SectionHeader",o.SubHedToggleChips=r(o,"SubHedToggleChips",{showSubHedToggleChips:!0}),e.exports=o}}]);