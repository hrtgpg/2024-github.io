(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[443],{71266:(e,o,t)=>{const i=t(94184),a=t(45697),n=t(67294),r=t(44031),l=t(32168),{PaymentGateway:s}=t(28576),{componentTracking:d,googleAnalytics:m}=t(28601),{useOnAdFilled:c}=t(84540),{asConfiguredComponent:h}=t(36380),{trackComponent:u}=t(40199),{useViewportObserver:g}=t(47041),{SummaryCollectionRowWrapper:p,SummaryCollectionRowSectionTitle:y,SummaryCollectionRowSectionTitleWrapper:S,SummaryCollectionRowItems:b,SummaryCollectionRowItem:T,SummaryCollectionRowAd:I}=t(2651),v=({className:e,dangerousHed:o,dangerousSubHed:t,hasBackgroundColor:a,hasNoBottomSpacingInMobile:r,hasBorderItem:h,hasExtraRubricSpace:v,hasLessBottomSpace:B,hasNoDividerWidth:k,hasSummaryItemAssetSpacing:w,hasTighterBylineSpacing:$,hideRubricItemSummary:C,imageAlignment:f,itemHedTag:R,items:x,isInvertedTheme:H,nativeTrendingPosition:D,sectionTitleVariation:N,shouldShowSectionTitle:A,shouldHideDangerousDek:P,shouldHideDangerousHed:E,shouldHideSponsoredContent:O,shouldEnableBundleComponentAnalytics:W,shouldHaveIncreasedHorizontalPadding:L,shouldRemoveLastItemBorder:_,shouldShowAllContentWhenDense:F,summaryItemRubricVariation:M,summaryItemVariation:V,titleHedTag:j,trackingNamespace:G,template:U,variations:{columnAmount:q,hasFullWidth:z},variationName:K})=>{n.useEffect((()=>{u("SummaryCollectionRow",K)}),[K]);const J=R||(o?"h3":"h2"),[Q,,X]=c("trending-ad"),Y=x.map((e=>e.dangerousHed)).join("|");return g(".summary-collection-row",void 0,(e=>{e&&m.emitUniqueGoogleTrackingEvent("summary-collection-row-impressions",{"summary-collection-row-titles":Y,"summary-collection-row-template":U})})),n.createElement(p,{className:i(e,{"summary-collection-row--four-columns":4===q}),"data-testid":"SummaryCollectionRowWrapper",isInvertedTheme:H,hasBackgroundColor:a,shouldHaveIncreasedHorizontalPadding:L},o&&A&&n.createElement(S,null,n.createElement(y,{as:l[N],dangerousHed:o,dangerousSubHed:t,"data-testid":"SummaryCollectionRowSectionTitle",hedTag:j,hasNoDividerWidth:k})),n.createElement(b,{dataTestId:"SummaryCollectionRowItems",showTrendingAd:!O&&Q,columnAmount:q,hasFullWidth:z,hasNoBottomSpacingInMobile:r,shouldRemoveLastItemBorder:_},x.map(((e,o)=>{const t=!O&&o===D-1,i=d.addDataSectionTitleAttribute(W,null==G?void 0:G.item,o);return n.createElement(n.Fragment,{key:o},t&&n.createElement(s,{group:"ads"},n.createElement(I,{"data-testid":"SummaryCollectionRowAd",position:"trending",isBorderSpaceDisabled:!h,onFilled:X})),n.createElement(T,Object.assign({},e,{analyticsDataAttribute:i,variation:V,hasBorder:h,hedTag:J,key:o,rubricVariation:M,"data-testid":"SummaryCollectionRowItem",shouldHideDangerousDek:P,shouldHideDangerousHed:E,hasTighterBylineSpacing:$,hasLessBottomSpace:B,hasExtraRubricSpace:v,hasSummaryItemAssetSpacing:w,hideRubricItemSummary:C,shouldShowAllContentWhenDense:F,imageAlignment:f,isInvertedTheme:H,sectionTemplate:U,clickHandlerHed:()=>{return t=o+1,i=e.dangerousHed,void m.emitGoogleTrackingEvent("summary-collection-row-clicks",{"summary-collection-row-click-position":t,"summary-collection-row-click-title":i,"summary-collection-row-template":U});var t,i}})))}))))};v.propTypes={className:a.string,dangerousHed:a.string,dangerousSubHed:a.string,hasBackgroundColor:a.bool,hasBorderItem:a.bool,hasExtraRubricSpace:a.bool,hasLessBottomSpace:a.bool,hasNoBottomSpacingInMobile:a.bool,hasNoDividerWidth:a.bool,hasSummaryItemAssetSpacing:a.bool,hasTighterBylineSpacing:a.bool,hideRubricItemSummary:a.bool,imageAlignment:a.oneOf(["top","default","bottom"]),isInvertedTheme:a.bool,itemHedTag:a.string,items:a.arrayOf(a.shape(r.propTypes)).isRequired,nativeTrendingPosition:a.number,sectionTitleVariation:a.string,shouldEnableBundleComponentAnalytics:a.bool,shouldHaveIncreasedHorizontalPadding:a.bool,shouldHideDangerousDek:a.bool,shouldHideDangerousHed:a.bool,shouldHideSponsoredContent:a.bool,shouldRemoveLastItemBorder:a.bool,shouldShowAllContentWhenDense:a.bool,shouldShowSectionTitle:a.bool,summaryItemRubricVariation:a.string,summaryItemVariation:a.oneOf(["TextBelowLeft","TextBelowCenter","TextBelowLeftCard","TextBelowCenterCard","ImageRatio43","ImageRatio169","ImageRatio11","CircularImage","TextBelowDesktopOnly","TextBelowDesktopOnlyImageRight","TextBelowDesktopOnlyThirds","TextBelowDesktopOnlyThirdsImageRight","TextBelowDesktopOnlyThirdsImageRightThumbnail","SideBySide","SideBySideImageRight","SideBySideThirds","SideBySideThirdsImageRight","SideBySideDesktopOnly","SideBySideDesktopOnlyImageRight","SideBySideDesktopOnlyThirds","SideBySideDesktopOnlyThirdsImageRight","SideBySideCenterDesktopOnlyThirdsCircularImage","SideBySideDesktopOnlyThirdsCircularImage","NoAssetTextCenter"]),template:a.string,titleHedTag:a.string,trackingNamespace:a.object,variationName:a.string,variations:a.shape({columnAmount:a.number,hasFullWidth:a.bool})},v.defaultProps={hasBackgroundColor:!0,hasBorderItem:!0,hasExtraRubricSpace:!1,hasLessBottomSpace:!1,hasNoBottomSpacingInMobile:!1,hasNoDividerWidth:!1,hasSummaryItemAssetSpacing:!1,hasTighterBylineSpacing:!1,imageAlignment:"default",isInvertedTheme:!1,nativeTrendingPosition:3,sectionTitleVariation:"LineAboveLineBelowTextCenter",shouldHideDangerousDek:!0,shouldHideDangerousHed:!1,shouldHideSponsoredContent:!1,shouldRemoveLastItemBorder:!1,shouldShowAllContentWhenDense:!1,shouldShowSectionTitle:!0,summaryItemVariation:"SideBySideThirds",titleHedTag:"h2",variations:{}},v.displayName="SummaryCollectionRow",e.exports=h(v,"SummaryCollectionRow")},75324:(e,o,t)=>{e.exports=t(3101)},2651:function(e,o,t){var i=this&&this.__rest||function(e,o){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&o.indexOf(i)<0&&(t[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)o.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(t[i[a]]=e[i[a]])}return t};const a=t(67294),{css:n,default:r}=t(51117),l=t(46647),{BylineWrapper:s,BylinePreamble:d,BylineName:m,BylineLink:c}=t(72369),{SectionTitleHed:h}=t(80577),u=t(44031),{SummaryItemWrapper:g}=t(88269),{GridItem:p}=t(14134),y=t(48655),{maxThresholds:S}=t(28657),{calculateSpacing:b,getColorToken:T,getTypographyStyles:I,minScreen:v,styledProperty:B,maxScreen:k}=t(79720),{applyGridSpacing:w,cssVariablesGrid:$}=t(62470),{BREAKPOINTS:C}=t(85326),f=r.div.withConfig({displayName:"SummaryCollectionRowWrapper"})`
  background-color: ${({hasBackgroundColor:e,isInvertedTheme:o})=>e?T(!o&&e?"colors.discovery.body.light.background":"colors.interactive.base.black"):"transparent"};

  ${v(C.lg)} {
    ${({shouldHaveIncreasedHorizontalPadding:e})=>e?`padding: 0 ${b(8)}`:""};
  }
`,R=r.div.withConfig({displayName:"SummaryCollectionRowSectionTitleWrapper"})`
  ${$()}
  margin: 0 auto;
  ${w("padding")}
  max-width: ${C.xxl};
`,x=r.div.withConfig({displayName:"SummaryCollectionRowSectionTitle"})`
  ${h} {
    ${I("typography.definitions.discovery.subhed-section-collection")};
  }
`,H=`\n  &:last-child {\n    padding-bottom: 0;\n    \n    ${v(C.md)}{\n      padding-bottom: ${b(2)};\n    }\n  }\n`,D=r((e=>{var{columnAmount:o,variation:t,shouldHideDangerousDek:n,shouldHideDangerousHed:r,hasExtraRubricSpace:l,hasLessBottomSpace:s,hasTighterBylineSpacing:d}=e,m=i(e,["columnAmount","variation","shouldHideDangerousDek","shouldHideDangerousHed","hasExtraRubricSpace","hasLessBottomSpace","hasTighterBylineSpacing"]);const c=u[t];return a.createElement(c,Object.assign({},m))})).withConfig({displayName:"SummaryCollectionRowItem"})`
  ${f} & {
    align-items: start;
    padding-bottom: ${b(2)};
    ${v(C.md)} {
      border-bottom: 0;
    }

    .summary-item__rubric {
      ${({isInvertedTheme:e})=>I(e?"typography.definitions.discovery.subhed-section-tertiary":"typography.definitions.globalEditorial.context-primary")};
      display: block;
      color: ${T("colors.discovery.body.light.context-signature")};

      ${v(C.md)} {
        margin-bottom: ${({hasExtraRubricSpace:e})=>b(e?1:.5)};
      }

      > * {
        ${({isInvertedTheme:e,theme:o})=>e&&`color:${T(o,"colors.discovery.body.white.background")}`};
      }
    }

    .summary-item__hed-link {
      display: ${({shouldHideDangerousHed:e})=>e?"none":"block"};

      &::after {
        display: none;
      }
      color: ${({isInvertedTheme:e})=>`${T(e?"colors.discovery.body.white.description":"colors.discovery.body.light.heading")}`};
    }

    .summary-item__hed {
      ${({isInvertedTheme:e})=>I(e?"typography.definitions.globalEditorial.context-tertiary":"typography.definitions.discovery.hed-bulletin-primary")};
      margin-bottom: 0;
    }

    .summary-item__hed:hover {
      ${({isInvertedTheme:e,theme:o})=>e&&`color: ${T(o,"colors.consumption.lead.inverted.link-hover")}`};
    }

    .summary-item__dek {
      ${I("typography.definitions.discovery.description-page")}
      display: ${({shouldHideDangerousDek:e})=>e?"none":"block"};
      margin: ${b(2)} 0 ${b(1)};
      color: ${T("colors.discovery.body.white.description")};
    }

    .summary-item__content {
      ${({hasLessBottomSpace:e})=>e?`padding-bottom: ${b(0)}`:""}
      ${({isInvertedTheme:e})=>e?`padding-bottom: ${b(2)};\n            padding-top: ${b(3)}`:""};
    }

    .summary-item__byline {
      margin-top: ${({hasTighterBylineSpacing:e})=>b(e?1:2)};

      ${s},
      ${d},
      ${m},
      ${c} {
        ${I("typography.definitions.globalEditorial.accreditation-core")};
        color: ${T("colors.discovery.body.light.accreditation")};
      }

      ${c}:link {
        color: ${T("colors.discovery.body.light.accreditation")};
      }
    }

    .summary-item__metadata-secondary {
      margin: ${b(2)} 0 0 0;
    }

    ${B("hasBorder",!1,H)};
  }
`,N=r(l).withConfig({displayName:"SummaryCollectionRowAd"})`
  padding-bottom: ${b(2)};

  ${v(C.md)} {
    border-bottom: 0;
  }
  ${B("isBorderSpaceDisabled",!0,H)};
`,A=r(y.ThreeUp).withConfig({displayName:"SummaryCollectionRowItems"})`
  .ad--trending {
    display: ${({showTrendingAd:e})=>e?"block":"none"};
  }

  ${B("showTrendingAd",!0,n`
      ${p}:last-of-type ${D} {
        display: none;
      }
    `)}

  padding-top: ${b(2)};
  padding-bottom: ${b(5)};

  ${k(`${S.md}px`)} {
    ${({hasNoBottomSpacingInMobile:e})=>e&&"padding-bottom: 0;"};
  }

  ${p} {
    grid-column: 1 / -1;
    /* crosshairs x axis */
    :nth-child(n) {
      @media (min-width: ${C.md}) and (max-width: ${S.lg}px) {
        position: relative;

        &::before {
          position: absolute;
          bottom: 0;
          background: ${({theme:e})=>T(e,"colors.discovery.body.white.border")};
          width: 100%;
          height: 1px;
          content: '';
        }
      }
    }

    ${({shouldRemoveLastItemBorder:e})=>e&&n`
        &:last-child ${g} {
          ${k(`${S.md}px`)} {
            border-bottom: none;
            padding-bottom: 0;
          }
        }
      `};
  }

  @media only screen and (min-width: ${S.md}px) and (max-width: ${S.lg}px) {
    padding-bottom: 0;
    ${p} {
      ${({columnAmount:e,hasFullWidth:o})=>1===e||o?"grid-column: 1 / -1":"grid-column: "+(4===e?"span 6":"span 4")}
    }
  }

  ${v(C.lg)} {
    padding-bottom: 0;

    ${p} {
      ${({columnAmount:e,hasFullWidth:o})=>1===e||o?"grid-column: 1 / -1":"grid-column: "+(4===e?"span 3":"span 4")}
    }
  }
`;e.exports={SummaryCollectionRowWrapper:f,SummaryCollectionRowSectionTitle:x,SummaryCollectionRowSectionTitleWrapper:R,SummaryCollectionRowItems:A,SummaryCollectionRowItem:D,SummaryCollectionRowAd:N}},3101:(e,o,t)=>{const{asVariation:i}=t(95545),a=t(71266);a.FourColumnsTighterBylineSpaceWithDek=i(a,"FourColumnsTighterBylineSpaceWithDek",{columnAmount:4},{shouldHideDangerousDek:!1,hasTighterBylineSpacing:!0,hasLessBottomSpace:!0,hasExtraRubricSpace:!0}),a.OneColumnWithFullWidth=i(a,"OneColumnWithFullWidth",{columnAmount:1,hasFullWidth:!0},{shouldHideDangerousDek:!1,hasTighterBylineSpacing:!0,hasLessBottomSpace:!0,hasExtraRubricSpace:!0}),e.exports=a},15995:(e,o,t)=>{const i=t(94184),a=t(45697),n=t(67294),{trackComponent:r}=t(40199),l=t(7279),s=t(98288),{TickerImage:d,TickerText:m,TickerHed:c,TickerLink:h,TickerWrapper:u}=t(31828),{componentTracking:g}=t(28601),p=({btnStyle:e,buttonVariation:o,className:t,fullPageTheme:a,hasBorders:s,marginTopType:p,hasMinimalBottomMargin:y,hasSolidBorders:S,hasRoundedImage:b,hideTopBorder:T,image:I,imageMinWidth:v,index:B,isLink:k,isInvertedTheme:w,isSpecialTheme:$,typeTokenSet:C,link:f,shouldEnableBundleComponentAnalytics:R,target:x,trackingNamespace:H,text:D,variations:N,variationName:A})=>{var P;n.useEffect((()=>{r("Ticker",A)}),[A]);const E=l[o],{imagePosition:O,layoutPlacement:W}=N,L=(null===(P=null==f?void 0:f.text)||void 0===P?void 0:P.length)>0,_=g.addDataSectionTitleAttribute(R,H||"ticker position",B),F=null==I?void 0:I.segmentedSources.sm[0].width,M=null==I?void 0:I.segmentedSources.sm[0].height;let V=!1,j=!1,G=W,U=O;F&&M&&"dense"!==W?M>F||M===F?(G="side-by-side",U="left"):j=!0:V=!0;const q=w||"inverted"===a;return n.createElement(u,Object.assign({},_,{className:i("ticker-wrapper",t),hasBorders:s,hideTopBorder:T,marginTopType:p,hasMinimalBottomMargin:y,isInverted:q,isSpecialTheme:$,hasSolidBorders:S,layoutPlacement:G,applyStyleForNoImage:V,applyStyleForLandscapeImg:j}),I&&I.segmentedSources&&n.createElement(d,Object.assign({},I,{className:"ticker__image",marginTopType:p,hasRoundedImage:b,imagePosition:U,imageMinWidth:v,layoutPlacement:G,shouldHoldImageSpace:!0,applyStyleForNoImage:V})),n.createElement(m,{layoutPlacement:G,applyStyleForNoImage:V,applyStyleForLandscapeImg:j},D&&n.createElement(c,{"data-testid":"TickerText",dangerouslySetInnerHTML:{__html:D},isLink:k,isInverted:q,layoutPlacement:G,typeTokenSet:C,applyStyleForNoImage:V,applyStyleForLandscapeImg:j}),k&&L&&n.createElement(h,{className:"ticker__link",dangerouslySetInnerHTML:{__html:f.text},href:f.href,isInverted:q,layoutPlacement:G,typeTokenSet:C,applyStyleForNoImage:V,applyStyleForLandscapeImg:j}),!k&&L&&n.createElement(E,{btnStyle:e,href:f.href,inputKind:"link",label:f.text,target:x,isInverted:q,shouldEnableBundleComponentAnalytics:R,typeTokenSet:C,applyStyleForNoImage:V})))};p.propTypes={btnStyle:a.string,buttonVariation:a.string,className:a.string,fullPageTheme:a.oneOf(["standard","inverted"]),hasBorders:a.bool,hasMinimalBottomMargin:a.bool,hasRoundedImage:a.bool,hasSolidBorders:a.bool,hideTopBorder:a.bool,image:a.shape(s.propTypes),imageMinWidth:a.oneOf([48,56,64,72]),index:a.number,isInvertedTheme:a.bool,isLink:a.bool,isSpecialTheme:a.bool,link:a.shape({href:a.string,text:a.string}).isRequired,marginTopType:a.oneOf(["small","none","large"]),shouldEnableBundleComponentAnalytics:a.bool,target:a.string,text:a.string.isRequired,trackingNamespace:a.object,typeTokenSet:a.oneOf(["default","utility"]),variationName:a.string,variations:a.shape({imagePosition:a.oneOf(["left","right"]),layoutPlacement:a.oneOf(["side-by-side","text-below-mobile-only","dense"])})},p.defaultProps={btnStyle:"filled",buttonVariation:"Utility",fullPageTheme:"standard",hasBorders:!0,hasMinimalBottomMargin:!1,hasSolidBorders:!1,hideTopBorder:!1,imageMinWidth:72,isInvertedTheme:!1,isLink:!1,isSpecialTheme:!1,marginTopType:"small",variations:{imagePosition:"left",layoutPlacement:"text-below-mobile-only"}},p.displayName="Ticker",e.exports=p},81543:(e,o,t)=>{const{asConfiguredComponent:i}=t(36380),{asThemedComponent:a}=t(3517);e.exports=a(i(t(56606),"Ticker"))},56606:(e,o,t)=>{const{asVariation:i}=t(95545),a=t(15995);a.ImageLeft=i(a,"ImageLeft",{imagePosition:"left",layoutPlacement:"text-below-mobile-only"}),a.ImageRight=i(a,"ImageRight",{imagePosition:"right",layoutPlacement:"text-below-mobile-only"}),a.SideBySide=i(a,"SideBySide",{imagePosition:"left",layoutPlacement:"side-by-side"}),a.Utility=i(a,"Utility",{imagePosition:"left",layoutPlacement:"dense"},{typeTokenSet:"utility",hasBorders:!1,hasRoundedImage:!0,imageMinWidth:48,isLink:!0}),e.exports=a}}]);