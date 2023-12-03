(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[4334],{32554:(e,o,t)=>{const n=t(94184),i=t(45697),a=t(67294),{useIntl:r}=t(76186),l=t(87962),{storyVideoPosition:d}=t(26544),s=t(83647),c=t(84076),h=t(98288),g=t(13134),{transformLegacySources:p}=t(8998),u=t(19206).Z,{ContentHeaderLeadAsset:m,ContentHeaderResponsiveAsset:b,ContentHeaderLeadAssetContent:C,ContentHeaderLeadAssetCaption:S,ContentHeaderLeadAssetContentMedia:v,ContentHeaderLedeLightboxButton:f,ContentHeaderLeadRailAnchor:w,ContentHeaderLeadContentFullWidth:$,ContentHeaderLeadContentCaptionCredit:y,ContentHeaderLeadAssetAwards:T}=t(6845),{useState:H,Fragment:L}=a,k="portrait",A=({awards:e,className:o,captionWidth:t,containerTheme:i,lede:h,mediaWidth:A,shouldRenderRailAnchor:x,showFullWidthLeadImage:E,socialIcons:I,hasLightboxButton:P,hasStaticPositionedAward:W,hasInvertedLedeBackground:N,hideLedeCaption:D,shouldAlignCenterWhenNoCaption:R})=>{const[B,U]=H((e=>{var o;const t=null===(o=null==e?void 0:e.masterAspectRatio)||void 0===o?void 0:o.split(":");return(null==e?void 0:e.restrictCropping)&&2===(null==t?void 0:t.length)&&Number(t[0])/Number(t[1])<=1?k:"landscape"})(h)),{formatMessage:M}=r(),O=({width:e,height:o})=>{e/o<=1&&U(k)},_=p(h),G="cnevideo"===h.modelName,j="gallery"===h.modelName,F="clip"===h.modelName,V=!D&&(h.caption&&h.caption.trim()||h.credit&&h.credit.trim()),z=R&&(!h.caption||""===h.caption),q=a.createElement(S,{dangerousCaptionText:h.caption,dangerousCredit:h.credit,mediaWidth:A,isLedeTextCenterForMobile:z});return a.createElement(L,null,a.createElement(m,{className:n("lead-asset",o),mediaWidth:A,containerTheme:i,ledeContentType:h.contentType,ledeAssetOrientation:B,hasInvertedLedeBackground:N,"data-testid":"ContentHeaderLeadAsset"},a.createElement(C,null,a.createElement(v,{ledeContentType:h.contentType,showFullWidthLeadImage:E,mediaWidth:A,className:`lead-asset__content__${h.contentType}`},!G&&!j&&!F&&a.createElement(L,null,e&&!W&&a.createElement(T,{awards:e,hasStaticPositionedAward:W}),a.createElement(b,Object.assign({},_,{onAssetLoaded:O,shouldRestrictCropping:null==h?void 0:h.restrictCropping,masterAspectRatio:null==h?void 0:h.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:A,"data-testid":"assetMedia"}))),G&&h.scriptEmbedUrl&&a.createElement(l,{shouldAutoplay:!0,scriptUrl:h.scriptEmbedUrl,shouldHaveTeaser:!0,videoEmbedPosition:d}),j&&a.createElement(s,Object.assign({},h,{showNoAdsFromParent:!0})),I&&a.createElement(g.Overlay,{links:I.links}),F&&a.createElement(b,Object.assign({},_,{onAssetLoaded:O,shouldRestrictCropping:null==h?void 0:h.restrictCropping,masterAspectRatio:null==h?void 0:h.masterAspectRatio,shouldHoldImageSpace:!0,mediaWidth:A,"data-testid":"assetMedia"})),P&&a.createElement(f,{onClickHandler:()=>{document.querySelector(".responsive-image--expandable").click()},ButtonIcon:()=>a.createElement(c,null),hasEnableIcon:!0,btnStyle:"text",iconPosition:"before",inputKind:"button",isStaticText:!0,label:M(u.showAllPhotos),shouldRenderCaption:V}),V&&"fullbleed"!==t&&q,e&&W&&a.createElement(T,{awards:e,hasStaticPositionedAward:W}))),x&&a.createElement(w,{"data-testid":"ContentHeaderLeadRailAnchor"})),V&&"fullbleed"===t&&a.createElement($,null,a.createElement(y,null,q)))};A.propTypes={awards:i.array,captionWidth:i.oneOf(["standard","fullbleed"]),className:i.string,containerTheme:i.oneOf(["standard","inverted","special"]),hasInvertedLedeBackground:i.bool,hasLightboxButton:i.bool,hasStaticPositionedAward:i.bool,hideLedeCaption:i.bool,lede:i.oneOfType([i.shape(h.propTypes),i.shape(l.propTypes)]).isRequired,mediaWidth:i.oneOf(["small","smallrule","grid","fullbleed"]),shouldAlignCenterWhenNoCaption:i.bool,shouldRenderRailAnchor:i.bool,showFullWidthLeadImage:i.bool,socialIcons:i.shape(g.propTypes)},A.defaultProps={captionWidth:"standard",hasStaticPositionedAward:!1,hideLedeCaption:!1,shouldAlignCenterWhenNoCaption:!1},e.exports=A,e.exports.transformLegacySources=p},19206:(e,o,t)=>{const n=t(76186);o.Z=(0,n.defineMessages)({showAllPhotos:{id:"ContentHeader.ShowAllPhotos",defaultMessage:"Show all Photos",description:"Call to action to view entire photo gallery"},readReviews:{id:"ContentHeader.ReadReviews",defaultMessage:"Read Reviews",description:"Call to action to read reviews"}})},2542:(e,o,t)=>{const n=t(45697),i=t(67294),{useEffect:a,useRef:r,useState:l}=t(67294),{trackComponent:d}=t(40199),{asThemedComponent:s}=t(3517),c=t(81768),{ToggleButton:h}=t(27e3),{componentTracking:g}=t(28601),p=({children:e,chipShouldGetUncheckedIn:o,fullPageTheme:t,isAnchorUrl:n,isChecked:s,onChange:p,redirectUrl:u,role:m,shouldDefaultChecked:b,shouldDisplaySingleChip:C,shouldUrlRedirect:S,shouldEnableBundleComponentAnalytics:v,index:f})=>{a((()=>{d("ToggleChip")}),[]);const{current:w}=r(void 0!==s),[$,y]=l(b),T=w?s:$,[H,L]=l(T);let k={};return v&&(k=g.addDataSectionTitleAttribute(v,"filterable toggle",f)),i.createElement(h,Object.assign({},k,{as:u?"a":"button",href:u||void 0,role:m||"switch","aria-checked":C?H:T,onClick:t=>(t=>{let i,a;if(C?L((e=>(a=!e,!e))):i=!T,w||y(i),p){const e=new CustomEvent("change",{detail:{checked:a||i}});p(e)}if(o&&setTimeout((()=>y(!1)),1e3*o),n){const o=`#${e.toString().toLowerCase()}`;window.history.replaceState(void 0,void 0,o)}S||t.preventDefault()})(t),fullPageTheme:t}),C&&H&&i.createElement(c,null),e)};p.propTypes={analyticsDataAttribute:n.object,children:n.node.isRequired,chipShouldGetUncheckedIn:n.number,fullPageTheme:n.oneOf(["standard","inverted"]),index:n.number,isAnchorUrl:n.bool,isChecked:n.bool,onChange:n.func,redirectUrl:n.string,role:n.string,shouldDefaultChecked:n.bool,shouldDisplaySingleChip:n.bool,shouldEnableBundleComponentAnalytics:n.bool,shouldUrlRedirect:n.bool},p.defaultProps={isAnchorUrl:!1,isChecked:void 0,onChange:()=>{},shouldDefaultChecked:!1,shouldDisplaySingleChip:!1,shouldEnableBundleComponentAnalytics:!1,shouldUrlRedirect:!0},e.exports=s(p)},67924:(e,o,t)=>{const{asConfiguredComponent:n}=t(36380),i=t(2542);e.exports=n(i,"ToggleChip")},27e3:(e,o,t)=>{const n=t(51117).default,{calculateSpacing:i,getColorStyles:a,getColorToken:r,getTypographyStyles:l}=t(79720),d=n.button.withConfig({displayName:"ToggleButton"})`
  display: inline-block;
  border-radius: ${i(3)};
  cursor: pointer;
  padding: ${i(1)} ${i(3)};
  text-decoration: none;
  white-space: nowrap;

  .icon {
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
    fill: ${r("colors.interactive.base.white")};
    margin-left: ${i(-2)};
    width: ${i(4)};
    height: ${i(2)};
    vertical-align: middle;

    &:hover {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.tags")};

  &[aria-checked='false'] {
    /* TODO support rgba in getColorStyles  */
    transition: background-color 0.25s, color 0.25s;
    background-color: rgba(
      ${r("colors.interactive.base.black",{rgbOnly:!0})},
      0.1
    );
    ${({theme:e})=>a(e,"color","colors.interactive.base.black")};
  }

  &[aria-checked='true'] {
    transition: background-color 0.25s, color 0.25s;
    text-decoration: none;
    ${({theme:e})=>a(e,"background-color","colors.interactive.base.black")};
    ${({theme:e})=>a(e,"color","colors.interactive.base.white")};

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  &:hover,
  &:focus {
    outline: 0;
    /* TODO support this in getColorStyles  */
    box-shadow: 0 0 0 1px ${r("colors.interactive.base.black")}
      inset;
    text-decoration: none;

    .icon {
      fill: ${r("colors.interactive.base.black")};
    }
  }

  ${({fullPageTheme:e,theme:o})=>"inverted"===e?`\n\n      border: 1px solid;\n      ${a(o,"border-color","colors.discovery.body.white.border")};\n\n      &[aria-checked='false'] {\n        &:hover{\n          ${a(o,"background-color","colors.interactive.base.white")};\n          ${a(o,"color","colors.interactive.base.black")};\n        }\n        ${a(o,"background-color","colors.interactive.base.black")};\n        ${a(o,"color","colors.interactive.base.white")};\n      }\n\n      &[aria-checked='true'] {\n        ${a(o,"background-color","colors.interactive.base.white")};\n        ${a(o,"color","colors.interactive.base.black")};\n      }\n\n      &:hover,\n      &:focus {\n        box-shadow: none;\n      }\n    `:""}
`;e.exports={ToggleButton:d}},24334:(e,o,t)=>{const n=t(94184),i=t(45697),a=t(67294),r=t(67924),l=t(41334),{googleAnalytics:d}=t(28601),{trackComponent:s}=t(40199),{SectionHeaderWrapper:c,SectionHeaderContainer:h,SectionHeaderHed:g,SectionHeaderSubhed:p,SectionHeaderSubhedClamp:u,SectionHeaderGrid:m,SectionHeaderLedeSection:b,SectionHeaderHedDivider:C,ChipWrapper:S}=t(8610),v="above",f="below",w=({chipLengthToCenterAlignInMobile:e,hasNoHorizontalScroll:o,className:t,contentAlign:i,customTitle:w,dangerousHed:$,fullPageTheme:y,dividerLength:T,hasBackgroundLightColor:H,hasInvertedDivider:L,hasInvertedTheme:k,hasMinimalVerticalPadding:A,hasSectionContainerWidth:x,hedTag:E,subHed:I,subHedMaxLines:P,subHedPosition:W,lede:N,ledeLogoBaseUrl:D,mobileDividerLength:R,shouldCenterAlignChipsInMobile:B,shouldEnableLede:U,shouldEnableSubNavigation:M,shouldHideBottomSpacing:O,shouldHideTopSpacing:_,shouldInvertDangerousDek:G,shouldIncreaseBottomSpacingDivider:j,shouldUseCollectionHeaderFont:F,shouldUseLedeAsLogo:V,shouldUseCustomTitle:z,showDivider:q,showSmallerSubHed:K,showSubChannelHed:Z,showTwolineSubHed:J,variations:Q,toggleChipsWithLink:X,toggleChipRole:Y,type:ee})=>{a.useEffect((()=>{s("SectionHeader")}),[]);const{showSubHedToggleChips:oe}=Q,te=P>0,ne=(null==X?void 0:X.length)===e;let ie=I?a.createElement(p,{hasSectionContainerWidth:x,className:"section-header__subhed","data-testid":"SectionHeaderSubhed",dangerouslySetInnerHTML:{__html:I},contentAlign:i,showSmallerSubHed:K,showtwolineSubHed:J,fullPageTheme:y,shouldInvertDangerousDek:G}):null;ie&&te&&(ie=a.createElement(u,{lines:P,linesInExtraLargeDesktop:P,isCollapsible:!0},ie));const[ae,re]=a.useState(X);return a.useEffect((()=>{var e;{const o=null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.pathname;re(o)}}),[X]),a.createElement(c,{className:n("section-header",t,{"inverted-section-header":k}),shouldEnableLede:U,fullPageTheme:y,hasBackgroundLightColor:H,shouldHideTopSpacing:_,shouldHideBottomSpacing:O},U&&N&&a.createElement("a",{href:D,"aria-label":"Lede Logo"},a.createElement(b,{lede:N,captionWidth:"standard",shouldUseLedeAsLogo:V})),(!V||!N)&&a.createElement(m,{contentAlign:i,hasSectionContainerWidth:x},a.createElement(h,{className:n("section-header__container",A&&"section-header__container--minimal-padding"),contentAlign:i,hasSectionContainerWidth:x,shouldHideTopSpacing:_},W===v&&ie,W===v&&q&&a.createElement(C,{contentAlign:i,subHedPosition:W,dividerLength:T,mobileDividerLength:R,hasInvertedDivider:L,shouldIncreaseBottomSpacingDivider:j,shouldHideTopSpacing:_}),a.createElement(g,{className:"section-header__hed","data-testid":"SectionHeaderHed",dangerouslySetInnerHTML:{__html:Z?$:z&&w?w:$},fullPageTheme:y,as:E,showSubChannelHed:Z,shouldUseCollectionHeaderFont:F}),W===f&&q&&a.createElement(C,{contentAlign:i,subHedPosition:W,dividerLength:T,mobileDividerLength:R,hasInvertedDivider:L,shouldIncreaseBottomSpacingDivider:j,shouldHideTopSpacing:_}),W===f&&ie,M&&oe&&X&&X.length>0&&a.createElement(S,{hasSectionContainerWidth:x,shouldCenterAlignChipsInMobile:ne&&B},a.createElement(l,{contentAlign:"center",layout:"nowrap",hasNoHorizontalScroll:o},X.map((e=>a.createElement(r,{analyticsDataAttribute:{},key:e.label,isChecked:e.url===ae,onChange:()=>{return o=e.label,t=ee,void d.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:o,clickType:t});var o,t},redirectUrl:e.url,role:Y},e.label))))))))};w.propTypes={chipLengthToCenterAlignInMobile:i.number,className:i.string,contentAlign:i.oneOf(["center","left"]),customTitle:i.string,dangerousHed:i.string.isRequired,dividerLength:i.number,fullPageTheme:i.oneOf(["inverted","standard"]),hasBackgroundLightColor:i.bool,hasInvertedDivider:i.bool,hasInvertedTheme:i.bool,hasMinimalVerticalPadding:i.bool,hasNoHorizontalScroll:i.bool,hasSectionContainerWidth:i.bool,hedTag:i.string,lede:i.object,ledeLogoBaseUrl:i.string,mobileDividerLength:i.number,shouldCenterAlignChipsInMobile:i.bool,shouldEnableLede:i.bool,shouldEnableSubNavigation:i.bool,shouldHideBottomSpacing:i.bool,shouldHideTopSpacing:i.bool,shouldIncreaseBottomSpacingDivider:i.bool,shouldInvertDangerousDek:i.bool,shouldUseCollectionHeaderFont:i.bool,shouldUseCustomTitle:i.bool,shouldUseLedeAsLogo:i.bool,showDivider:i.bool,showSmallerSubHed:i.bool,showSubChannelHed:i.bool,showTwolineSubHed:i.bool,subHed:i.string,subHedMaxLines:i.number,subHedPosition:i.oneOf([f,v]),toggleChipRole:i.string,toggleChipsWithLink:i.array,type:i.string,variations:i.shape({showSubHedToggleChips:i.bool})},w.defaultProps={contentAlign:"center",dividerLength:12.5,fullPageTheme:"standard",hasBackgroundLightColor:!1,hasInvertedDivider:!1,hasInvertedTheme:!1,hasMinimalVerticalPadding:!1,hasNoHorizontalScroll:!0,hedTag:"h1",ledeLogoBaseUrl:"",mobileDividerLength:12.5,shouldCenterAlignChipsInMobile:!1,shouldEnableLede:!1,shouldEnableSubNavigation:!0,shouldHideBottomSpacing:!1,shouldHideTopSpacing:!1,shouldIncreaseBottomSpacingDivider:!1,shouldInvertDangerousDek:!1,shouldUseCustomTitle:!1,shouldUseLedeAsLogo:!1,showDivider:!1,showSmallerSubHed:!1,showSubChannelHed:!1,subHedMaxLines:0,subHedPosition:f,toggleChipRole:"switch",variations:{showSubHedToggleChips:!1}},e.exports=w},8610:(e,o,t)=>{const{default:n}=t(51117),i=t(22068),{GridItem:a}=t(14134),r=t(48655),{BREAKPOINTS:l}=t(85326),{BaseText:d}=t(74327),{ListWrapper:s}=t(10719),c=t(32554),{calculateSpacing:h,getColorStyles:g,getColorToken:p,getTypographyStyles:u}=t(79720),{applyGridSpacing:m}=t(62470),{ResponsiveImageContainer:b}=t(7230),{ContentHeaderLeadContentFullWidth:C,ContentHeaderResponsiveAsset:S}=t(6845),v=n.header.withConfig({displayName:"SectionHeaderWrapper"})`
  && {
    ${({shouldHideTopSpacing:e})=>e&&"\n        margin-top: 0px;\n    "}
    ${({shouldHideBottomSpacing:e})=>e&&"\n        margin-bottom: 0px;\n    "}
  }

  ${m("padding")}

  display: grid;
  padding-bottom: ${h(5)}
    ${({theme:e,hasBackgroundLightColor:o})=>g(e,"background-color",o?"colors.background.light":"colors.discovery.lead.primary.background")};

  ${({shouldEnableLede:e})=>e&&`\n      grid-template-columns: 1fr;\n      ${C} {\n        grid-column: inherit;\n      }\n    `}

  ${({fullPageTheme:e,theme:o})=>"inverted"===e?`${g(o,"background","colors.consumption.lead.inverted.background")}`:""}
      ${({hasSectionColor:e,theme:o})=>e&&`${g(o,"background","colors.background.light")}`}
`,f=n.div.withConfig({displayName:"SectionHeaderContainer"})`
  ${({hasSectionContainerWidth:e})=>!e&&" max-width: 850px;"}
  padding: ${h(4)} 0;
  ${({hasSectionColor:e})=>e&&`padding: ${h(5)} 0 ${h(4)};`}
  text-align: ${({contentAlign:e})=>e};

  &.section-header__container--minimal-padding {
    padding: ${h(5)} 0 0;
  }

  @media (min-width: ${l.md}) {
    padding: ${h(5)} 0;
    ${({hasSectionColor:e})=>e&&`padding: ${h(5)} 0 ${h(4)};`}
  }

  && {
    ${({shouldHideTopSpacing:e})=>e&&"\n          padding-top: 0px;\n      "}
  }
`,w=n(c).withConfig({displayName:"SectionHeaderLedeSection"})`
  grid-column: 1;
  grid-row: 1;
  ${({theme:e})=>g(e,"background","colors.background.white")};

  ${({shouldUseLedeAsLogo:e})=>e&&"\n      .lead-asset__content {\n        padding: 32px 0;\n      }\n    "}

  .lead-asset__content__photo,
  ${b} {
    max-height: none;
  }

  ${S},
  ${b} {
    ${({shouldUseLedeAsLogo:e})=>e?`\n    width: 21em;\n    text-align: center;\n    margin: 0 auto;\n\n    @media (max-width: ${l.md}) {\n      width: 16em;\n    }\n    `:"\n    width: 100%;\n    "}
  }
`,$=n.span.withConfig({displayName:"SectionHeaderHedDivider"})`
  @media (min-width: ${l.md}) {
    margin-top: ${h(4)};
    margin-bottom: ${h(2)};
  }
  display: block;
  grid-column: 1 / -1;
  margin-top: ${h(2)};
  margin-right: auto;
  margin-bottom: ${({subHedPosition:e})=>"above"===e?h(2):0};
  margin-left: ${({contentAlign:e})=>"center"===e?"auto":0};
  border-bottom-width: ${h(.25,"px")};
  border-bottom-style: solid;
  border-bottom-color: ${p("colors.consumption.lead.standard.accent")};
  width: ${h(12.5,"px")};

  && {
    ${({hasInvertedDivider:e,dividerLength:o,mobileDividerLength:t})=>e&&`border-bottom-width: ${h(1.5,"px")};\n       border-bottom-style: solid;\n       border-bottom-color: white;\n       \n       @media (min-width: ${l.md}) {\n          width: ${h(o,"px")};\n        }\n\n       @media (max-width: ${l.md}) {\n          width: ${h(t,"px")};\n        }`}
    ${({shouldHideTopSpacing:e})=>e&&"\n          margin-top: 0px;\n      "}

    ${({shouldIncreaseBottomSpacingDivider:e})=>e&&"\n          margin-bottom: 48px;\n      "}
  }
`,y=n(d).withConfig({displayName:"SectionHeaderHed"})`
  ${({fullPageTheme:e,theme:o})=>g(o,"color","inverted"===e?"colors.consumption.lead.inverted.heading":"colors.discovery.lead.primary.hed")};

  ${({hasSectionColor:e,theme:o,showSubChannelHed:t})=>t?`\n        ${u(o,"typography.definitions.discovery.subhed-section-secondary")}\n      `:e?`\n        ${u(o,"typography.definitions.discovery.subhed-section-primary")}\n      `:""}
  ${({shouldUseCollectionHeaderFont:e,theme:o})=>e&&`\n  ${u(o,"typography.definitions.discovery.page-hed-subsection")}\n  `}
`;y.defaultProps={as:"h1",bottomSpacing:0,topSpacing:0,typeIdentity:"typography.definitions.discovery.page-hed-section"};const T=n(d).withConfig({displayName:"SectionHeaderSubhed"})`
  padding: ${({contentAlign:e})=>"center"===e?`${h(2)}  ${h(3)} 0 ${h(3)}`:`${h(2)}  ${h(3)} 0 0`};
  ${({hasSectionColor:e,showSmallerSubHed:o})=>(e||o)&&u("typography.definitions.consumptionEditorial.description-core")}
  ${({showtwolineSubHed:e})=>e&&u("typography.definitions.consumptionEditorial.display-medium")}
  @media (max-width: ${l.md}) {
    ${({hasSectionContainerWidth:e})=>e&&`\n     margin-left:${h(3)};\n     margin-right:${h(3)};\n     `}
  }
  ${({fullPageTheme:e,shouldInvertDangerousDek:o,theme:t})=>"inverted"===e&&o?`${g(t,"color","colors.consumption.lead.inverted.description")}`:""}
`;T.defaultProps={colorToken:"colors.discovery.lead.primary.description",typeIdentity:"typography.definitions.discovery.description-page"};const H=n(i).withConfig({displayName:"SectionHeaderSubhedClamp"})``,L=n(r.WithMargins).withConfig({displayName:"SectionHeaderGrid"})`
  ${a} {
    grid-column-end: -1;
    grid-column-start: 1;
    justify-self: ${({hasSectionContainerWidth:e,contentAlign:o})=>e?"auto":`${o}`};
  }
  @media (max-width: ${l.md}) {
    ${({hasSectionContainerWidth:e})=>e&&"&.grid {\n    --grid-margin: 0;\n  }"}
  }
`,k=n.div.withConfig({displayName:"ChipWrapper"})`
  margin: ${h(2)} 0 0 0;

  .list-item-wrapper:first-child {
    margin-left: initial;
  }

  .list-item-wrapper:last-child {
    margin-right: unset;
  }

  ${s} {
    a {
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
    }
    @media (min-width: ${l.md}) {
      flex-wrap: wrap;
      overflow-x: none;
      justify-content: center;
      padding: ${h(1)} ${h(3)};

      .list-item-wrapper {
        margin-bottom: ${h(1)};
      }
    }
    @media (max-width: ${l.md}) {
      ${({hasSectionContainerWidth:e})=>e?`\n        padding-left:${h(3)};\n        padding-right:${h(3)};\n        `:"width: 350px;\n            padding-left: 0;"}
      ${({shouldCenterAlignChipsInMobile:e})=>e&&"justify-content: center"};
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
    }
  }
`;e.exports={SectionHeaderWrapper:v,SectionHeaderContainer:f,SectionHeaderHed:y,SectionHeaderHedDivider:$,SectionHeaderSubhed:T,SectionHeaderSubhedClamp:H,SectionHeaderGrid:L,SectionHeaderLedeSection:w,ChipWrapper:k}},85187:(e,o,t)=>{const n=t(45697),i=t(67294),{ToggleChipListWrapper:a,LabelText:r,ListWrapper:l,ListItemWrapper:d,HelperText:s}=t(10719),{trackComponent:c}=t(40199),{asThemedComponent:h}=t(3517),g=({label:e,children:o,contentAlign:t,fullPageTheme:n,hasNoHorizontalScroll:h,isReadViewShopViewEnabled:g,hasIncreasedBottomMargin:p,hasLargeLabel:u,hasSpacing:m,hasToggleGridColor:b,helper:C,shouldReduceTopPadding:S,layout:v})=>(i.useEffect((()=>{c("ToggleChipList")}),[]),i.createElement(a,{contentAlign:t,hasToggleGridColor:b},e&&i.createElement(r,{fullPageTheme:n,hasIncreasedBottomMargin:p,hasLargeLabel:u},e),i.createElement(l,{contentAlign:t,layout:v,isReadViewShopViewEnabled:g,hasNoHorizontalScroll:h,hasToggleGridColor:b,shouldReduceTopPadding:S,className:"list-wrapper"},i.Children.map(o,((e,o)=>e?i.createElement(d,{contentAlign:t,key:o,layout:v,hasSpacing:m,className:"list-item-wrapper"},e):null))),C&&i.createElement(s,null,C)));g.propTypes={children:n.array.isRequired,contentAlign:n.oneOf(["left","center","right"]),fullPageTheme:n.oneOf(["standard","inverted"]),hasIncreasedBottomMargin:n.bool,hasLargeLabel:n.bool,hasNoHorizontalScroll:n.bool,hasSpacing:n.bool,hasToggleGridColor:n.bool,helper:n.string,isReadViewShopViewEnabled:n.bool,label:n.string,layout:n.oneOf(["wrap","nowrap"]),shouldReduceTopPadding:n.bool},g.defaultProps={contentAlign:"left",hasIncreasedBottomMargin:!1,hasLargeLabel:!1,hasNoHorizontalScroll:!1,hasSpacing:!1,layout:"wrap",shouldReduceTopPadding:!1},e.exports=h(g)},41334:(e,o,t)=>{const{asConfiguredComponent:n}=t(36380),i=t(85187);e.exports=n(i,"ToggleChipList")},10719:(e,o,t)=>{const n=t(51117).default,{BaseText:i}=t(74327),{calculateSpacing:a,getColorStyles:r,getColorToken:l}=t(79720),{resolveMenuKey:d}=t(37332),{BREAKPOINTS:s}=t(85326),c=n.div.withConfig({displayName:"ToggleChipListWrapper"})`
  ${({theme:e})=>`\n    @media (max-width: ${s.md}) {\n       &::after {\n        background: linear-gradient(90deg, rgba(${l(e,d(e,"colors.foundation.menu-bg.collapsed"),{rgbOnly:!0})}, 0) 0%, rgba(${l(e,d(e,"colors.foundation.menu-bg.collapsed"),{rgbOnly:!0})}, 1) 75%);\n        width: ${a(7)};\n        content: '';\n        position: absolute;\n        height: 8%;\n        margin-top: ${a(1.25,"px")};\n        right: 0;\n        padding-right: ${a(1)};\n       }\n    }\n  `}
  ${({hasToggleGridColor:e,theme:o})=>e&&`\n  ${r(o,"background-color","colors.background.light")};\n  border-bottom:${a(4)} solid ;\n  ${r(o,"border-color","colors.background.light")};\n  `}
  display: flex;
  flex-direction: column;
  ${({contentAlign:e})=>"left"===e?"align-items: flex-start":"center"===e?"align-items: center":"right"===e&&"align-items: flex-end"}
`,h=n(i).withConfig({displayName:"LabelText"})`
  margin: 0 0 ${a(1)};

  ${({hasIncreasedBottomMargin:e})=>e&&` \n    margin: 0 0 ${a(2)};\n  `}

  ${({hasLargeLabel:e})=>e&&" \n    font-size: 1rem;\n    letter-spacing: 1px;\n  "}

  ${({fullPageTheme:e,theme:o})=>"inverted"===e?r(o,"color","colors.interactive.base.white"):""}
`;h.defaultProps={as:"div",colorToken:"colors.interactive.base.black",typeIdentity:"typography.definitions.utility.label"};const g=n.div.withConfig({displayName:"ListWrapper"})`
  display: flex;
  flex-direction: row;
  padding: ${a(2,"px")} ${a(3)};
  ${({shouldReduceTopPadding:e})=>e&&`padding-top: ${a(1)};`}
  width: 100%;
  gap: ${a(1.5)};

  ${({hasNoHorizontalScroll:e})=>e&&" &::-webkit-scrollbar \n    {\n      display: none;\n    }"}

  ${({layout:e})=>"wrap"===e?"flex-wrap: wrap;":"overflow-x: auto;"}
  
  ${({contentAlign:e,layout:o})=>{if("nowrap"===o)return"";switch(e){case"left":return"justify-content: flex-start;";case"center":return"justify-content: center;";case"right":return"justify-content: flex-end;";default:return""}}}
  
  ${({hasToggleGridColor:e})=>e&&`--grid-margin: ${a(3)};`}
  ${({isReadViewShopViewEnabled:e})=>e&&`\n        padding:${a(.5)};\n         gap: ${a(.5)};\n        `}
`,p=n.div.withConfig({displayName:"ListItemWrapper"})`
  ${({contentAlign:e,layout:o,hasSpacing:t})=>{if("wrap"===o)return"";let n=e;switch(t&&(n="centerWithPadding"),n){case"center":return"\n        &:first-child {\n          margin-left: auto;\n        }\n\n        &:last-child {\n          margin-right: auto;\n        }\n      ";case"right":return"\n        &:first-child {\n          margin-left: auto;\n        }\n      ";case"centerWithPadding":return`\n        @media (min-width: ${s.md}) {\n          &:first-child {\n            margin-left: auto;\n          }\n\n          &:last-child {\n            margin-right: auto;\n          }\n        }\n\n        @media (min-width: ${s.sm}) and (max-width: ${s.md}) {\n          &:first-child {\n            margin-left: 1.5rem;\n          }\n  \n          &:last-child {\n            margin-right: 1.5rem;\n          }\n        }          \n        `;default:return""}}}
`,u=n(i).withConfig({displayName:"HelperText"})`
  margin: ${a(1)} 0 0;
`;u.defaultProps={as:"div",colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.utility.assistive-text"},e.exports={ToggleChipListWrapper:c,LabelText:h,ListWrapper:g,ListItemWrapper:p,HelperText:u}}}]);