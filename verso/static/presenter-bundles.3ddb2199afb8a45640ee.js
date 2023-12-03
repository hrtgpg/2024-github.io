(()=>{var e,t,o,a={32715:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(59215),{trackComponent:n}=o(40199),s=({dangerousDek:e,dangerousHed:t,items:o,dangerousCategoryTitle:a,shouldEnableBundleComponentAnalytics:s})=>{i.useEffect((()=>{n("BestStories")}),[]);const l=o.slice(0,3),d=o.slice(3,8);return i.createElement(r,{dangerousHed:t,dangerousDek:e,dangerousCategoryTitle:a,items:o,shouldEnableBundleComponentAnalytics:s,sumCollageFourItems:l,sumListItems:d})};s.propTypes={dangerousCategoryTitle:a.string,dangerousDek:a.string,dangerousHed:a.string,items:a.array,shouldEnableBundleComponentAnalytics:a.bool},s.defaultProps={dangerousCategoryTitle:"Most Recent",dangerousDek:"",dangerousHed:"Todays's Pick",items:[],shouldEnableBundleComponentAnalytics:!1},s.displayName="BestStories",e.exports=s},96306:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(32715);e.exports=a(i,"BestStories")},45856:(e,t,o)=>{const a=o(45697),i=o(67294),{Wrapper:r}=o(34240),{BundleBodyClamp:n,BundleBodyContainer:s}=o(34240),{trackComponent:l}=o(40199),d=({body:e,isCollapsible:t,numberOfLinesToClamp:o,shouldOverrideSpacing:a,shouldOverrideTypeToken:d})=>(i.useEffect((()=>{l("BundleBody")}),[]),i.createElement(r,null,t?i.createElement(n,{isCollapsible:t,lines:o,className:"body__container"},i.createElement(s,{body:e,className:"article__body",shouldOverrideTypeToken:d,shouldOverrideSpacing:a})):i.createElement(s,{body:e,className:"body__container article__body",shouldOverrideTypeToken:d,shouldOverrideSpacing:a})));d.defaultProps={isCollapsible:!1,numberOfLinesToClamp:2,shouldOverrideSpacing:!1,shouldOverrideTypeToken:!1},d.propTypes={body:a.array.isRequired,isCollapsible:a.bool,numberOfLinesToClamp:a.number,shouldOverrideSpacing:a.bool,shouldOverrideTypeToken:a.bool},d.displayName="BundleBody",e.exports=d},54617:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(45856);e.exports=a(i,"BundleBody")},70897:(e,t,o)=>{const a=o(94184),i=o(67294),r=o(45697),{injectIntl:n}=o(76186),{connect:s}=o(59800),l=o(87962),d=o(32168),{TEASER_VARIATIONS:m}=o(96014),{trackComponent:c}=o(40199),{Dek:u,Hed:p,Wrapper:g,Container:h,ContainerWithMargins:y,Content:b}=o(28765),S=e=>{const t=(null==e?void 0:e.toString().split("|"))||[],o=Object.keys(m);return!!t.find((e=>o.includes(e)))},C=({dangerousDek:e,dangerousHed:t,functionalTags:o,hasBottomMargin:r,hasGridWithMargins:n,hasTopMargin:s,isSpecialTheme:m,items:C,shouldHaveTeaser:f,shouldUseBundleData:$,shouldHideCNEVideoDek:v})=>{i.useEffect((()=>{c("CNEVideo")}),[]);const w=!S(o);return null==C?void 0:C.map(((c,C)=>{const{scriptUrl:k,hed:T,dek:I}=c||{},x=$&&e,B=(({hasGridWithMargins:e})=>{let t=h;return e&&(t=y),t})({hasGridWithMargins:n});return i.createElement(B,{key:C,className:a({"verso-bundle-cne-embed--grid-with-margins":n}),hasTeaser:S(o)},i.createElement(g,{hasBottomMargin:r,hasTopMargin:s,isSpecialTheme:m},t&&i.createElement(d,{dangerousHed:t,dangerousDek:e,hasDividerAbove:!0,hasDividerBelow:!0,textAlign:"center","data-testid":"section-title"}),k&&i.createElement(l,{scriptUrl:k,shouldHaveTeaser:f}),!v&&w&&(T||I||x)&&i.createElement(b,null,x?i.createElement(u,{dangerouslySetInnerHTML:{__html:e}}):i.createElement(i.Fragment,null,T&&i.createElement(p,{className:"hed"},T),I&&i.createElement(u,{className:"dek"},I)))))}))};C.propTypes={dangerousDek:r.string,dangerousHed:r.string,functionalTags:r.string,hasBottomMoargin:r.bool,hasGridWithMargins:r.bool,hasTopMoargin:r.bool,isSpecialTheme:r.bool,items:r.array,shouldHaveTeaser:r.bool,shouldHideCNEVideoDek:r.bool,shouldUseBundleData:r.bool},C.defaultProps={hasBottomMoargin:!1,hasGridWithMargins:!1,hasTopMoargin:!1,isSpecialTheme:!1,items:[],shouldHaveTeaser:!1,shouldHideCNEVideoDek:!1,shouldUseBundleData:!1},C.displayName="CNEVideo",e.exports=s((e=>{var t;const{functionalTags:o}=(null===(t=e.coreDataLayer)||void 0===t?void 0:t.content)||{};return{functionalTags:o}}))(n(C))},20589:(e,t,o)=>{e.exports=o(70897)},28765:(e,t,o)=>{const{default:a,css:i}=o(51117),{BREAKPOINTS:r}=o(85326),{applyGridSpacing:n,cssVariablesGrid:s}=o(62470),{calculateSpacing:l,getTypographyStyles:d,getColorStyles:m}=o(79720),{SectionTitleRoot:c,SectionTitleHed:u}=o(80577),p=a.div.withConfig({displayName:"Container"})`
  figure {
    max-width: 75%;
  }
`,g=a.div.withConfig({displayName:"ContainerWithMargins"})`
  ${s()}
  ${n("padding")}

  figure {
    max-width: 100%;
  }
  @media (min-width: ${r.xxl}) {
    margin: 0 auto;
    max-width: ${l(200)};
    ${({hasTeaser:e})=>e&&"max-width: inherit;"}
  }
`,h=a.div.withConfig({displayName:"Dek"})`
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.body-core")};

  align-items: center;
  margin: auto 25%;
  text-align: center;

  a {
    ${({theme:e})=>m(e,"color","colors.interactive.base.black")};
  }

  @media (max-width: ${r.md}) {
    margin: auto 0;
  }
`,y=a.div.withConfig({displayName:"Hed"})`
  ${({theme:e})=>d(e,"typography.definitions.consumptionEditorial.hed-standard")};

  align-items: center;
  margin: auto 25% ${l(4)};
  text-align: center;

  @media (max-width: ${r.md}) {
    margin: auto 0 ${l(4)};
  }
`,b=i`
  margin-top: 3.5rem;
`,S=i`
  margin-bottom: 3.5rem;
`,C=a.div.withConfig({displayName:"Wrapper"})`
  ${({hasTopMargin:e})=>e&&b}
  ${({hasBottomMargin:e})=>e&&S}

  figure {
    margin-bottom: ${l(6)};

    @media (max-width: ${r.md}) {
      margin-bottom: ${l(3)};
    }
  }

  ${c} {
    ${({isSpecialTheme:e,theme:t})=>e&&`\n      ${m(t,"background-color","colors.consumption.lead.special.background")};\n      `}

    ${u} {
      ${({isSpecialTheme:e,theme:t})=>e&&`${m(t,"color","colors.background.white")};`}
    }
  }
`,f=a.div.withConfig({displayName:"Content"})`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: ${r.md}) {
    .hed {
      margin: auto 5% 20px;
    }

    .dek {
      margin: auto 5%;
    }
  }
`;h.displayName="Dek",y.displayName="Hed",e.exports={Dek:h,Hed:y,Wrapper:C,Content:f,Container:p,ContainerWithMargins:g}},21383:(e,t,o)=>{const a=o(67294),i=o(45697),{useIntl:r}=o(76186),n=o(63396).Z,{AllFiction:s,AllFictionDesktop:l,AllFictionMobile:d,AllFictionFooter:m,AllFictionViewMore:c}=o(27555),u=o(86667),{Circle:p}=o(26895),g=(e,t,o=1)=>o*e>=t,h=({dangerousHed:e,hasBorderOnMobileAndTabletOnly:t,hasBorderOnMobileOnly:o,hasItemsRule:i,hideIssueDate:h,hideRubricItemSummary:y,sectionTitleVariation:b,shouldHideContributors:S,shouldHidePublishDate:C,mobileSummaryItemVariation:f,mobileSummaryItemVerticalAlign:$,items:v,paginatedContainerPosition:w,pageNumber:k,pageSize:T,totalResults:I,showViewMoreButton:x})=>{const B=r(),E=(e=>2===e.length?u.TwoColumns:e.length%4==0?u.FourColumns:u.ThreeColumns)(v),[D,H]=a.useState(v),[N,P]=a.useState(""),[M,L]=a.useState(!1),[F,A]=a.useState({currentPage:k,itemsCount:v.length,isLastPage:g(T,I,k)});if(a.useEffect((()=>{P(window.location.href.split(/[?#]/)[0])}),[]),I<2)return null;const{isLastPage:O,currentPage:_}=F,R={dangerousHed:e,hasBorderOnMobileAndTabletOnly:t,hasItemsRule:i,hideIssueDate:h,hideRubricItemSummary:y,sectionTitleVariation:b,shouldHideContributors:S,shouldHidePublishDate:C,hasBorderOnMobileOnly:o,items:D};return a.createElement(s,null,a.createElement(l,Object.assign({as:E},R)),a.createElement(d,Object.assign({as:E},R,{summaryItemVariation:f,sideBySideVerticalAlign:$})),x&&!O&&a.createElement(m,null,a.createElement(c,{href:!M&&`${N}?page=${_+1}`,onClick:!M&&(e=>{e.preventDefault();const{currentPage:t}=F,o=t+1,a=`${window.location.href.split(/[?#]/)[0]}?page=${o}&container=${w}&format=json`;return L(!0),fetch(a).then((e=>e.json())).then((({bundle:e})=>{const{items:t,totalResults:a}=e.containers[0],i=D.concat(t);H(i),A({currentPage:o,itemsCount:i.length,isLastPage:g(T,a,o)}),L(!1)})).catch((e=>{L(!1),console.warn(e)}))}),title:B.formatMessage(n.viewMoreText)},B.formatMessage(n.viewMoreText),M&&a.createElement(p,{height:"20px",width:"20px",margin:"0"}))))};h.propTypes={dangerousHed:i.string.isRequired,hasBorderOnMobileAndTabletOnly:i.bool,hasBorderOnMobileOnly:i.bool,hasItemsRule:i.bool,hideIssueDate:i.bool,hideRubricItemSummary:i.bool,items:i.arrayOf(i.shape({categories:i.shape({tags:i.array}),dangerousDek:i.string,dangerousHed:i.string,image:i.object,url:i.string})).isRequired,mobileSummaryItemVariation:i.string,mobileSummaryItemVerticalAlign:i.oneOf(["top","center"]),pageNumber:i.number,pageSize:i.number.isRequired,paginatedContainerPosition:i.number,sectionTitleVariation:i.string,shouldHideContributors:i.bool,shouldHidePublishDate:i.bool,showViewMoreButton:i.bool,totalResults:i.number.isRequired},h.defaultProps={hasBorderOnMobileAndTabletOnly:!0,hasBorderOnMobileOnly:!1,hasItemsRule:!1,hideIssueDate:!1,hideRubricItemSummary:!0,mobileSummaryItemVariation:"SideBySideDense",mobileSummaryItemVerticalAlign:"center",pageNumber:1,sectionTitleVariation:"LineAboveLineBelowTextCenter",showViewMoreButton:!1},e.exports=h},63386:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),{asThemedComponent:i}=o(3517),r=o(21383);e.exports=i(a(r,"ContributorAllFiction"))},27555:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i,getColorToken:r,minScreen:n,maxScreen:s,getTypographyStyles:l}=o(79720),{BREAKPOINTS:d}=o(85326),{maxThresholds:m}=o(28657),{SummaryItemContent:c,SummaryItemWrapper:u}=o(88269),{SectionTitleRoot:p}=o(80577),{SummaryCollectionGridSummaryItem:g,SummaryCollectionGridItems:h}=o(84105),y=a.div.withConfig({displayName:"AllFictionFooter"})`
  display: flex;
  justify-content: center;
  margin-top: ${i(4)};
`,b=a.a.withConfig({displayName:"AllFictionViewMore"})`
  ${l("typography.definitions.foundation.link-primary")}

  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${r("colors.discovery.body.white.accent")};
  min-width: ${i(20)};
  height: ${i(6)};
  text-decoration: none;
  ${({theme:e})=>e&&`\n      background: ${r(e,"colors.discovery.lead.secondary.background")};\n      color: ${r(e,"colors.interactive.base.black")};\n  `}

  :hover {
    ${({theme:e})=>e&&`\n      background: ${r(e,"colors.interactive.base.black")};\n      color: ${r(e,"colors.interactive.base.white")};\n  `}
  }
`,S=a.div.withConfig({displayName:"AllFictionDesktop"})``,C=a.div.withConfig({displayName:"AllFictionMobile"})`
  ${h} {
    ${u}:last-child {
      border-bottom: none;
    }
  }
`,f=a.section.withConfig({displayName:"ContributorAllFiction"})`
  ${({theme:e})=>e&&`background: ${r(e,"colors.discovery.lead.secondary.background")}; }`}
  padding-top: ${i(4)};

  ${p} {
    margin-bottom: ${i(1)};
    border-top: 1px solid ${r("colors.discovery.body.white.accent")};
    border-bottom: 1px solid
      ${r("colors.discovery.body.white.accent")};

    ${n(`${m.lg+1}px`)} {
      margin-bottom: ${i(4)};
    }
  }

  ${c} {
    margin-bottom: 0;
  }

  ${S} {
    ${s(`${m.lg}px`)} {
      display: none;
    }
  }

  ${C} {
    ${n(`${m.lg+1}px`)} {
      display: none;
    }
    ${s(`${m.lg}px`)} {
      display: block;
    }
  }

  ${g} {
    &:not(.summary-item--layout-placement-side-by-side-mobile-only) {
      .summary-item__hed {
        ${n(d.md)} {
          ${({theme:e})=>l(e,"typography.definitions.discovery.hed-core-secondary")};
        }
      }
    }
  }
`;e.exports={AllFiction:f,AllFictionDesktop:S,AllFictionMobile:C,AllFictionFooter:y,AllFictionViewMore:b}},63396:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({viewMoreText:{id:"FeaturedContributorAllFiction.ViewMore",defaultMessage:"View more",description:"View more all fiction in featured contributor page"}})},18875:(e,t,o)=>{const a=o(67294),i=o(45697),{useIntl:r}=o(76186),n=o(86667),{ContributorCollection:s,ContributorCollectionDesktop:l,ContributorCollectionMobile:d,ContributorCollectionViewMore:m,ContributorCollectionFooter:c}=o(30227),u=o(32242).Z,{Circle:p}=o(26895),g=(e,t,o=1)=>o*e>=t,h=({dangerousHed:e,hasBorderOnMobileAndTabletOnly:t,hasBorderOnMobileOnly:o,hasItemsRule:i,hideAuthorByline:h,hideIssueDate:y,hideRuleFromMobile:b,items:S,sectionTitleVariation:C,shouldHideDangerousDekMobileOnly:f,shouldHidePublishDate:$,shouldShowAllContentWhenDense:v,showViewMoreButton:w,summaryItemVariationForMobile:k,paginatedContainerPosition:T,pageNumber:I,limit:x,totalResults:B})=>{const E=r(),D=(e=>2===e.length?n.TwoColumns:e.length%4==0?n.FourColumns:n.ThreeColumns)(S),[H,N]=a.useState(S),[P,M]=a.useState(""),[L,F]=a.useState(!1),[A,O]=a.useState({currentPage:I,isLastPage:g(x,B,I)});a.useEffect((()=>{M(window.location.href.split(/[?#]/)[0])}),[]);const{isLastPage:_,currentPage:R}=A;return a.createElement(s,null,a.createElement(l,{as:D,dangerousHed:e,hasBorderOnMobileAndTabletOnly:t,hasBorderOnMobileOnly:o,hasItemsRule:i,hideAuthorByline:h,hideIssueDate:y,items:H,sectionTitleVariation:C,shouldHidePublishDate:$}),a.createElement(d,{as:D,dangerousHed:e,hasBorderOnMobileAndTabletOnly:t,hasBorderOnMobileOnly:o,hasItemsRule:i,hideAuthorByline:h,hideIssueDate:y,hideRuleFromMobile:b,items:H,sectionTitleVariation:C,shouldHideDangerousDekMobileOnly:f,shouldHidePublishDate:$,shouldShowAllContentWhenDense:v,summaryItemVariation:k}),w&&!_&&a.createElement(c,null,a.createElement(m,{href:!L&&`${P}?page=${R+1}`,onClick:!L&&(e=>{e.preventDefault();const{currentPage:t}=A,o=t+1,a=`${window.location.href.split(/[?#]/)[0]}?page=${o}&container=${T}&format=json`;return F(!0),fetch(a).then((e=>e.json())).then((({bundle:e})=>{const{items:t,totalResults:o}=e.containers[0];return N(H.concat(t)),o})).then((e=>{O({currentPage:o,isLastPage:g(x,e,o)}),F(!1)})).catch((e=>{F(!1),console.warn(e)}))}),title:E.formatMessage(u.viewMoreText)},E.formatMessage(u.viewMoreText),L&&a.createElement(p,{height:"20px",width:"20px",margin:"0"}))))};h.propTypes={dangerousHed:i.string.isRequired,hasBorderOnMobileAndTabletOnly:i.bool,hasBorderOnMobileOnly:i.bool,hasItemsRule:i.bool,hideAuthorByline:i.bool,hideIssueDate:i.bool,hideRuleFromMobile:i.bool,items:i.arrayOf(i.shape({categories:i.shape({tags:i.array}),dangerousDek:i.string,dangerousHed:i.string,image:i.object,url:i.string})).isRequired,limit:i.number.isRequired,pageNumber:i.number,paginatedContainerPosition:i.number,sectionTitleVariation:i.string,shouldHideDangerousDekMobileOnly:i.bool,shouldHidePublishDate:i.bool,shouldShowAllContentWhenDense:i.bool,showViewMoreButton:i.bool,summaryItemVariationForMobile:i.string,totalResults:i.number.isRequired},h.defaultProps={hasBorderOnMobileOnly:!1,hasItemsRule:!1,hideAuthorByline:!1,hideIssueDate:!1,pageNumber:1,sectionTitleVariation:"LineAboveLineBelowTextCenter",summaryItemVariationForMobile:"SideBySideDense"},e.exports=h},60486:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),{asThemedComponent:i}=o(3517),r=o(18875);e.exports=i(a(r,"ContributorCollectionItems"))},30227:(e,t,o)=>{const{default:a}=o(51117),{maxScreen:i,minScreen:r,calculateSpacing:n,getColorToken:s,getTypographyStyles:l}=o(79720),{BREAKPOINTS:d}=o(85326),{maxThresholds:m}=o(28657),{SectionTitleRoot:c}=o(80577),{SummaryCollectionGridSummaryItem:u,SummaryCollectionGridItems:p}=o(84105),{SummaryItemAssetContainer:g,SummaryItemWrapper:h}=o(88269),{SummaryItemBaseByline:y}=o(44621),b=a.div.withConfig({displayName:"ContributorContributorCollectionDesktop"})`
  ${y} {
    ${({hideAuthorByline:e})=>e&&"display: none"}
  }
`,S=a.div.withConfig({displayName:"ContributorContributorCollectionMobile"})`
  ${g} {
    width: ${n(12.5)};
  }
  ${h} {
    grid-template-columns: auto auto ${n(12.5)};
  }

  ${p} {
    grid-template-columns: none;

    ${h}:last-child {
      border-bottom: none;
    }
  }
`,C=a.div.withConfig({displayName:"ContributorCollectionFooter"})`
  display: flex;
  justify-content: center;
  margin-top: ${n(2)};
  padding-bottom: ${n(8)};
`,f=a.a.withConfig({displayName:"ContributorCollectionViewMore"})`
  ${l("typography.definitions.foundation.link-primary")}
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${s("colors.discovery.body.white.accent")};
  min-width: ${n(20)};
  height: ${n(6)};
  text-decoration: none;
  ${({theme:e})=>e&&`\n        background: ${s(e,"colors.discovery.lead.secondary.background")};\n        color: ${s(e,"colors.interactive.base.black")};\n    `}
  :hover {
    ${({theme:e})=>e&&`\n        background: ${s(e,"colors.interactive.base.black")};\n        color: ${s(e,"colors.interactive.base.white")};\n    `}
  }
`,$=a.section.withConfig({displayName:"ContributorCollection"})`
  padding-top: ${n(5)};
  ${({theme:e})=>e&&`background: ${s(e,"colors.discovery.lead.secondary.background")};\n      }`}

  ${c} {
    margin-bottom: ${n(1)};
    border-top: 1px solid ${s("colors.discovery.body.white.accent")};
    border-bottom: 1px solid
      ${s("colors.discovery.body.white.accent")};

    ${r(d.lg)} {
      margin-bottom: ${n(4)};
    }
  }
  ${b} {
    ${i(`${m.lg}px`)} {
      display: none;
    }
  }

  ${S} {
    ${r(d.lg)} {
      display: none;
    }
  }

  ${u} {
    &:not(.summary-item--layout-placement-side-by-side-mobile-only) {
      .summary-item__hed {
        ${r(d.md)} {
          ${({theme:e})=>l(e,"typography.definitions.discovery.hed-core-secondary")};
        }
      }
    }
  }
`;e.exports={ContributorCollection:$,ContributorCollectionDesktop:b,ContributorCollectionMobile:S,ContributorCollectionFooter:C,ContributorCollectionViewMore:f}},32242:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({viewMoreText:{id:"FeaturedContributor.ViewMore",defaultMessage:"View more",description:"View more about author in author hub"}})},85003:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),{asThemedComponent:i}=o(3517),r=o(57703);e.exports=i(a(r,"ContributorHeader"))},93225:(e,t,o)=>{const a=o(67294),{useRef:i,useEffect:r}=o(67294),n=o(45697),s=o(94184),l=o(50361),{useIntl:d}=o(76186),m=o(41609),c=o(39597),u=o(27847).Z,p=o(81768),g=o(79e3),h=o(55738),y=o(70380),b=o(13501),S=o(80640),{trackSearchFilterEvent:C}=o(68612),{useOutsideClick:f}=o(19287),{convertStringAsSlug:$}=o(8638),{FilterComponentWrapper:v,RemoveFilter:w,FilterDrawerText:k,FilterDrawerSelectionCounter:T,FilterMobileDrawerHeader:I,FilterMobileDrawerTitle:x,FilterMobileDrawer:B,FilterSortMobileDrawerWrapper:E,FilterMobileWrapper:D,FilterMobileButton:H,FilterMobileAccordianData:N,FilterAccordionContainer:P,FilterAccordionItemContainer:M,FilterAccordionLabelContainer:L,FilterAccordionItemContainerLabel:F,FilterAccordionContainerCounter:A,FilterAccordionItemContainerContent:O,FilterAccordionItemContainerButton:_,FilterMobileActionWrapper:R,FilterMobileDrawerAccordionWrapper:V,FilterMobileApplyActionButton:W,FilterMobileCancelActionButton:j,SortSelectionControlWrapper:U,FilterCategoryList:G,FilterCategoryItem:z,Category:q,CategoryContainer:K,CategoryCounter:J,FilterCategoryWrapper:Q,StyledChevron:Z,FilterSelectionMenuWrapper:X,FilterMenuWrapper:Y,FilterMenuItemWrapper:ee,FilterMenuTypeDeselect:te,FilterMenuGridWrapper:oe,FilterMenuContent:ae,FilterMenuCloseIcon:ie,FilterSelectionControlWrapper:re,FilterMenuListWrapper:ne,FilterTotalItemWrapper:se,RadioCheckboxSelectionControl:le,SortContainer:de,SortWrapper:me,SortMobileContainer:ce,SortMobileButton:ue,SortMobileDrawer:pe}=o(88471),ge="filtering",he=["Type"],ye=({className:e,filterSortData:t,hasBottomBorder:o,isMobileView:ye,hasUpdateUrl:be,hideChannelNavigation:Se,isCentered:Ce,showTotalItems:fe,theme:$e,totalItems:ve,trackingEvent:we,updateParentDataHandler:ke})=>{const[Te,Ie]=a.useState(null),[xe,Be]=a.useState(null),[Ee,De]=a.useState(t.sortData),[He,Ne]=a.useState(t.filterData),[Pe,Me]=a.useState(!1),Le=i(null);f(Le,(()=>Me(!1)));const[Fe,Ae]=a.useState({}),{formatMessage:Oe}=d(),[_e,Re]=a.useState(!1),[Ve,We]=a.useState(!1),[je,Ue]=a.useState(""),Ge=(e=null)=>{let o;if(o=e?l(e):l(t.sortData).find((e=>e.default)),!o)return{label:Oe(u.sortBy)};let a=o.label;return o.label.includes(":")&&(a=o.label.split(":")[1].trim()),o.label=`${Oe(u.sortBy)}: ${a}`,o},ze=(e,t)=>{{const o=t!==ge||m(Te)?`Sort By ${e.selectedFilter.label}`:Te.label;window.dataLayer.push({event:we,interactionType:"Filtering/Sorting",nameOfSelection:`${t}_${o}`,valueOfFilter:e.selectedFilter.label,eventValue:""})}};r((()=>{Ne(t.filterData);const{pathname:e}=window.location;Ue(e)}),[t.filterData]);const qe=(e,t)=>{let o=e.value;return he.includes(t)&&(o=`${$(e.label)}`),o},Ke=(e,t={})=>{const o=[],a=[];return e.forEach((e=>{const t=e.children.map((t=>t.isSelected&&qe(t,e.label))).filter((e=>e));if(m(t)||"path"!==e.paramType){if(!m(t)){const a=`${qe(e,e.label)}=${t.join("+")}`;o.push(a)}}else{const e=`/${t.join()}`;a.push(e)}})),{filterParams:o.join("&"),pathParams:a.join("/"),sortParams:t.value}},Je=({filterData:e=[],sortData:t})=>{const{filterParams:o,pathParams:a,sortParams:i}=Ke(e,t),{pathname:r,origin:n}=window.location,s=!m(a)&&r!==a;if(s){const e=`${n}${a}`;return window.history.replaceState(null,null,e),void ke({pathChanged:s})}let l=`${n}${r}`;const d=[];o&&d.push(o),i&&d.push(`sort=${i}`),d.length&&(l=`${l}?${d.join("&")}`),window.history.replaceState(null,null,l),ke({pathChanged:s,filterData:e,activeFilter:Te})},Qe=e=>{e.preventDefault(),Ne(He.map((e=>Object.assign(Object.assign({},e),{isActive:!1}))))},Ze=e=>{""!==e.target.name&&(Qe(e),Me(!Pe))},Xe=e=>{const t=l(He).find((t=>t.value===e));if(t&&"single"===t.selectionType){const e=t.children.find((e=>e.isSelected));if(e)return`${t.label.split(":")[0]}: ${e.label}`}return t.label},Ye=a.createElement(c,{min:"xl"},(e=>e&&a.createElement(ie,{"aria-label":Oe(u.filterCloseButtonLabel),ButtonIcon:p,isIconButton:!0,label:Oe(u.filterCloseButtonLabel),onClickHandler:e=>Qe(e)}))),et=e=>0===e.children.filter((e=>e.isSelected)).length,tt=e=>{const t=l(He),o=t.findIndex((t=>t.value===e.value));e.children=e.children.map((e=>(e.isSelected&&(e.isSelected=!e.isSelected),e))),e.counter=0,t[o]=e,Ne(t),be&&Je({filterData:t,sortData:Fe})},ot=e=>{const{children:t,selectionType:o,value:i}=e,r="multiple"===o?le.Checkbox:le.Radio,n="multiple"===o,s=et(e);return a.createElement(a.Fragment,null,ye&&n&&a.createElement(te,{inputKind:"button",isDisabled:s,label:Oe(u.deseletActionLabel),isMobileView:ye,onClickHandler:()=>s?{}:tt(e),className:"un-select-filter-button"}),a.createElement(y,{dangerousLegend:i,className:"filter-selection-list",items:t},t.map(((e,t)=>{const o=Boolean(e.isSelected),s=((e,t,o)=>{const a=l(He),i=a.findIndex((t=>t.value===e)),r=a[i],n=r.children[t];n.isSelected=!0,r.children[t]=n,a[i]=r;const{filterParams:s}=Ke(a,Fe);let d=o?je:`/${n.value}`;return s&&(d+=`?${s}`),d})(i,t,n);return a.createElement("a",{href:s},a.createElement(re,Object.assign({as:r},e,{className:"filter-item",value:e.value,formName:i,key:`${e.label}.${e.value}`,index:t,isChecked:o,isDisabled:!1,onChangeHandler:()=>((e,t)=>{const o=l(He),a=o.findIndex((t=>t.value===e)),i=o[a],r=i.children[t];let n=!1;if("multiple"===i.selectionType)n=!r.isSelected,r.isSelected=!r.isSelected,i.children[t]=r;else{i.children=i.children.map(((e,o)=>Object.assign(Object.assign({},e),{isSelected:o===t})));const e=i.label.split(":")[0];i.label=`${e}: ${r.label}`,n=!0}o[a]=i,Ie(i),Ne(o);const s=o.map((e=>{const t="multiple"===e.selectionType?e.children.filter((e=>e.isSelected)).length:0;return Object.assign(Object.assign({},e),{counter:t})}));n&&ze({category:i,selectedFilter:r},ge),Ne(s),be&&Je({filterData:o,sortData:Fe})})(i,t)})))}))))},at=()=>{Re(!_e),Ne(He.map((e=>Object.assign(Object.assign({},e),{isActive:!1}))))},it=e=>{e&&Je({filterData:He,sortData:e}),We(!Ve)},rt=(e=0)=>(l(He).forEach((t=>{"multiple"===t.selectionType&&(e+=t.counter)})),e),nt=()=>{const e=rt();return a.createElement(I,null,a.createElement(x,null,a.createElement(k,null,_e?`${Oe(u.filterBy)}`:`${Oe(u.sortBy)}`),_e&&e>0&&a.createElement(T,null,"(",e,")")),a.createElement(w,null,a.createElement(p,{onClick:()=>_e?at():it(xe)})))},st=({id:e,label:t,value:o,counter:i})=>{const r=He[e];return a.createElement(P,null,a.createElement(M,{onClick:()=>(e=>{const t=He.map(((t,o)=>Object.assign(Object.assign({},t),{isActive:o===e&&!t.isActive}))),o=t.find((e=>e.isActive));Ie(o),Ne(t)})(e)},a.createElement(L,null,t?a.createElement(F,{dangerouslySetInnerHTML:{__html:Xe(o)}}):null,i>0&&a.createElement(A,null,"(",i,")")),a.createElement(_,{isActive:r.isActive,ButtonIcon:g,role:"button",isIconButton:!0,label:"FilterAccordionItemContainerButton",width:"0.5rem",height:"0.5rem"})),a.createElement(O,{activeCategory:Te,id:e,isActive:r.isActive},ot(r)))};st.propTypes={counter:n.number,id:n.number,label:n.string,value:n.string};const lt=t.sortData&&!m(t.sortData),dt=lt?Ge():{},mt=lt?((e=null)=>{let o;return o=e?l(e):l(t.sortData).find((e=>e.default)),o})():{},ct=()=>a.createElement(R,null,a.createElement(W,{inputKind:"button",label:_e?`${Oe(u.showItems,{totalItems:ve})}`:`${Oe(u.applyActionLabel)}`,onClickHandler:()=>_e?at():it(xe)}),a.createElement(j,{inputKind:"button",label:Oe(u.cancelActionLabel),onClickHandler:()=>_e?(()=>{const e=l(He);e.map((e=>("multiple"===e.selectionType&&(e.children=e.children.map((e=>Object.assign(Object.assign({},e),{isSelected:!1})))),e))),Ne(e),be&&Je({filterData:e,sortData:xe||mt}),Re(!_e),Ne(He.map((e=>Object.assign(Object.assign({},e),{isActive:!1}))))})():We(!Ve)}));return a.createElement(v,{onMouseLeave:e=>Qe(e)},a.createElement(Q,{"data-testid":"FilterComponent",hasBottomBorder:o,isCentered:Ce,className:e,id:"filter-wrapper"},a.createElement(a.Fragment,null,ye?a.createElement(D,null,a.createElement(H,{inputKind:"button",label:rt()>0?`${Oe(u.filterBy)} (${rt()})`:Oe(u.filterBy),ButtonIcon:h,iconPosition:"after",hasEnableIcon:!0,onClickHandler:()=>Re(!_e)}),a.createElement(B,{isOpen:_e,className:"drawer--filter-mobile",onClose:()=>{},hideChannelNavigation:Se},_e&&a.createElement(E,null,nt(),a.createElement(V,null,a.createElement(N,null,He.map((({label:e,value:t,counter:o},i)=>a.createElement(st,{id:i,label:e,value:t,counter:o})))),ct())))):a.createElement(G,{id:"filter-category"},He.map((({value:e,isActive:t,counter:o},i)=>a.createElement(z,{key:`${e}-${i}`,isActive:t,onClick:t=>((e,t)=>{t.preventDefault();const o=He.map((t=>Object.assign(Object.assign({},t),{isActive:!t.isActive&&t.value===e}))),a=o.find((e=>e.isActive));Ie(a),Ne(o)})(e,t)},a.createElement(K,null,a.createElement(q,{tabIndex:"0",role:"link",isActive:t,as:"a"},a.createElement("span",{dangerouslySetInnerHTML:{__html:Xe(e)}})),o>0&&a.createElement(J,null,"(",o,")")),a.createElement(Z,{isactive:String(t)}))))),lt&&a.createElement(me,{ref:Le},ye?a.createElement(ce,null,a.createElement(ue,{inputKind:"button",label:xe?xe.label:mt.label,ButtonIcon:h,iconPosition:"after",hasEnableIcon:!0,onClickHandler:()=>We(!Ve)}),a.createElement(pe,{isOpen:Ve,className:"drawer--filter-mobile",onClose:()=>{},hideChannelNavigation:Se},Ve&&a.createElement(E,null,nt(),a.createElement(U,{selectionType:"single"},a.createElement(y,{dangerousLegend:`${Oe(u.sortBy)}`},Ee.map(((e,t)=>{const o=e.default;return a.createElement(re,{as:b.Radio,label:e.label,value:e.value,formName:e.value,key:`${e.label}.${e.value}`,index:t,isChecked:o,isDisabled:!1,onChangeHandler:()=>(e=>{const t=Ee.map(((t,o)=>Object.assign(Object.assign({},t),{default:o===e}))),o=t.find((e=>e.default));Be(o),De(t)})(t)})})))),ct()))):a.createElement(de,{className:s({"is-sort-menu-open":Pe,"is-sort-menu-closed":!Pe}),onClick:e=>Ze(e),onTouchStart:e=>Ze(e),totalItems:ve},a.createElement(S,{defaultValue:dt,selectedValue:m(Fe)?dt:Fe,isDropdownMenuOpen:Pe,options:t.sortData,onInputChange:e=>{Ae(Ge(e)),m(e)||(ze({selectedFilter:e},"Sorting"),Je({filterData:He,sortData:e}));const t={type:"select",subject:"sort",criteria:{sort:e.label},platform:"verso",no_of_results_returned:ve};C(t)},shouldHideSelectedOptions:!0}))))),!ye&&He.map((e=>a.createElement(X,{isActive:e.isActive},a.createElement(Y,{theme:$e},a.createElement(oe,null,a.createElement(ae,null,a.createElement(ne,{showTotalItems:fe},ot(e)),Ye))),a.createElement(ee,null,"multiple"===e.selectionType&&a.createElement(te,{inputKind:"button",isDisabled:et(e),label:Oe(u.deseletActionLabel),onClickHandler:()=>et(e)?{}:tt(e)}),fe&&a.createElement(se,null,ve," ",Oe(u.items)))))))};ye.propTypes={className:n.string,filterSortData:n.object,hasBottomBorder:n.bool,hasUpdateUrl:n.bool,hideChannelNavigation:n.bool,isCentered:n.bool,isMobileView:n.bool,showTotalItems:n.bool,theme:n.oneOf(["standard","inverted"]),totalItems:n.number,trackingEvent:n.string,updateParentDataHandler:n.func},ye.defaultProps={filterSortData:{},hasUpdateUrl:!0,hideChannelNavigation:!0,theme:"standard",totalItems:0,trackingEvent:"plpFilterInteraction"},ye.displayName="FilterComponent",e.exports=ye},79778:(e,t,o)=>{e.exports=o(63556)},88471:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i,getColorStyles:r,getColorToken:n,getTypographyStyles:s,maxScreen:l,minScreen:d}=o(79720),{BaseLink:m,BaseWrap:c}=o(74327),{BREAKPOINTS:u}=o(85326),{resolveMenuKey:p,isInverted:g}=o(37332),{Chevron:h}=o(18322),y=o(48655),{GridItem:b}=o(14134),S=o(38167),C=o(7279),{BaseText:f}=o(73049),$=o(61143),{UtilitySelectionControlLabel:v}=o(29765),{DropdownSelect:w}=o(78079),k="0.2s",T=a.div.withConfig({displayName:"FilterComponentWrapper"})``,I=a.div.withConfig({displayName:"FilterCategoryWrapper"})`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: fill-available;
  ${({isCentered:e})=>e&&"justify-content: center;"}
  ${({hasBorders:e,theme:t})=>e&&`\n    border-width: 1px 0;\n    border-style: solid;\n    ${r(t,"border-color","colors.foundation.menu.dividers")};\n  `}
  ${({hasBottomBorder:e,theme:t})=>e&&`border-bottom: 1px solid;\n    ${r(t,"border-color","colors.foundation.menu.dividers")};\n  `}

  ${({hasGradient:e,fadeWidth:t,theme:o,hasAnchorLinkList:a})=>e&&`&::after {\n      position: ${a?"unset":"absolute"};\n      top: 1px;\n      right: 0;\n      bottom: 1px;\n      background: linear-gradient(90deg, rgba(${n(o,p(o,"colors.foundation.menu-bg.collapsed"),{rgbOnly:!0})}, 0) 0%, rgba(${n(o,p(o,"colors.foundation.menu-bg.collapsed"),{rgbOnly:!0})}, 1) 75%);\n     \n      width: ${i(3)} ;\n      content: '';\n      pointer-events: none;\n      ${"lg"===t&&`\n       width: ${i(9)} ;\n       opacity: 0.9;\n       @media (max-width: ${u.md}) {\n         right: -1px;\n       }\n       `}\n    }`}
`,x=a.ul.withConfig({displayName:"FilterCategoryList"})`
  display: inline-flex;
  margin: 0;
  padding: 0;
  padding-right: var(--grid-margin);
`,B=a(m).withConfig({displayName:"Category"})`
  text-decoration: none;
  line-height: 1;

  &:focus {
    text-decoration: none;
    ${({theme:e,isActive:t})=>`${r(e,"color",p(e,t?"colors.foundation.collapsed-menu.nav-link.hover":"colors.foundation.collapsed-menu.nav-link.default"))};`}
  }
`;B.defaultProps={colorToken:"colors.interactive.base.black",linkStyle:"navigation",typeToken:"typography.definitions.utility.input-core"};const E=a.div.withConfig({displayName:"CategoryContainer"})`
  display: inline-flex;
`,D=a.ul.withConfig({displayName:"CategoryCounter"})`
  position: relative;
  margin-top: -0.2rem;
  margin-left: 0.2rem;
  padding: 0;
  ${s("typography.definitions.utility.input-core")};
`,H=a(h).withConfig({displayName:"ScrollingNavigationChevron"})`
  fill: ${n("colors.foundation.collapsed-menu.nav-link.default")};
  transform: rotate(90deg);
  width: ${i(2)};
  height: ${i(2)};

  ${({theme:e,isactive:t})=>"true"===t&&`transform: rotate(270deg);\n      ${r(e,"fill",p(e,"colors.foundation.collapsed-menu.nav-link.hover"))};`}
`;v.defaultProps={as:"span",colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.input-core"};const N=a($).withConfig({displayName:"RadioCheckboxSelectionControl"})`
  ${v}
  &.filter-item {
    span {
      padding-top: 2px;
    }
  }
`,P=a.li.withConfig({displayName:"FilterCategoryItem"})`
  display: flex;
  position: relative;
  flex-shrink: 0;
  align-items: center;
  transition: all 500ms ease;
  height: 48px;
  text-transform: none;

  ${({theme:e,isActive:t})=>t&&`\n    &::before {\n      ${r(e,"background-color",p(e,g(e)?"colors.consumption.lead.inverted.background":"colors.foundation.collapsed-menu.nav-link.hover"))};\n      bottom: 0;\n      content: '';\n      height: 2px;\n      position: absolute;\n      width: 100%;\n    }\n  `};

  & + & {
    margin-left: ${i(2)};
  }

  &:first-child {
    margin-left: 0;
  }
`,M=a.div.withConfig({displayName:"FilterSelectionMenuWrapper"})`
  ${({isActive:e})=>"display: "+(e?"block":"none")};
  ${({theme:e})=>r(e,"background-color",g(e)?"colors.consumption.lead.inverted.background":"colors.foundation.menu-bg.collapsed")};

  position: relative;
  z-index: 9;
  width: 100%;
  height: auto;
`,L=a.div.withConfig({displayName:"FilterMenuWrapper"})`
  width: 100%;
  height: 100%;
  ${l(u.sm)} {
    padding: 0 ${i(2)};
  }
`,F=a(y.WithMargins).withConfig({displayName:"FilterMenuGridWrapper"})`
  && {
    width: 100%;
    max-width: inherit;

    ${l(`calc(${u.xxl} - 1px)`)} {
      padding: 0 ${i(0)};
    }
    ${d(u.xxl)} {
      padding: 0 ${i(0)};
    }
  }
  height: 100%;
  overflow-y: scroll;
  box-sizing: content-box;

  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  ${b} {
    grid-column: 1 / -1;
    margin-top: ${i(2)};
  }
`,A=a.div.withConfig({displayName:"FilterMenuContent"})`
  ${d(u.lg)} {
    display: flex;
    width: 100%;
  }
`,O=a(C.Utility).withConfig({displayName:"MegaMenuCloseIconWrapper"})`
  position: relative;
  margin-left: auto;
  padding: 0;
  height: ${i(4)};

  &,
  &:active,
  &:hover,
  &:focus {
    border: 0;
    background-color: transparent;
  }

  svg {
    ${({theme:e})=>r(e,"fill",g(e)?"colors.background.white":"colors.foundation.collapsed-menu.nav-link.default")};
  }
`,_=a("div").withConfig({displayName:"FilterSelectionControlWrapper"})`
  && {
    grid-column-gap: ${i(1)};
  }

  span {
    display: box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
`,R=a("div").withConfig({displayName:"FilterMenuListWrapper"})`
  margin: 1rem 0 0;
  ${({showTotalItems:e})=>`margin: 1rem 0rem ${i(e?0:4)};`}
  width: 100%;

  .filter-selection-list {
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(10, 1fr);
    column-gap: ${i(4)};
    height: ${i(16)};
    row-gap: ${i(1.5)};
    justify-items: start;
    overflow-y: scroll;
  }

  && {
    .filter-item {
      padding: 0;
    }
  }
`,V=a.div.withConfig({displayName:"FilterMenuItemWrapper"})`
  display: inline-flex;
  width: 100%;
`,W=a(C.Utility).withConfig({displayName:"FilterMenuTypeDeselect"})`
  padding: 0;
  ${({isDisabled:e})=>e?"color:#636363;":"color: black;"}
  ${({isMobileView:e})=>e?`\n      margin-bottom: ${i(3)};\n    `:"\n      width: 70px;\n      min-width : 0;\n    margin-top: -4px;\n    "}

  &&&,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
    height: 24px;
    text-align: left;
    text-decoration: underline;
    ${({theme:e,typeToken:t})=>s(e,t)};
    ${({isDisabled:e,theme:t})=>e?`color:${r(t,"color","colors.interactive.base.deemphasized")};\n           opacity: 80%;\n          `:"color: black;"}
  }
`;W.defaultProps={typeToken:"typography.definitions.utility.input-core"};const j=a(f).withConfig({displayName:"FilterTotalItemWrapper"})`
  display: flex;
  justify-content: center;
  margin-left: -70px;
  padding-bottom: ${i(2)};
  width: 100%;
  ${({theme:e,typeToken:t})=>s(e,t)}
  ${({theme:e,colorToken:t})=>r(e,"color",t)};
`;j.defaultProps={as:"span",colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.input-core"};const U=a(c).withConfig({displayName:"SortContainer"})`
  display: flex;

  .dropdown__control--menu-is-open {
    .dropdown__icon > svg {
      transform: rotate(180deg);
    }
  }

  .dropdown__value-container {
    height: 47px;
  }

  &.is-sort-menu-closed {
    .dropdown__value-container {
      border: none;
    }

    .dropdown__control--is-focused {
      border: none;
      box-shadow: none;
    }
  }

  &.is-sort-menu-open {
    .dropdown__value-container {
      border-width: 1px;
      border-style: solid;
      border-color: ${n("colors.interactive.base.black")};
    }
  }

  ${w} {
    min-width: ${i(12)};

    .dropdown__control {
      display: flex;
      justify-content: flex-start;

      .dropdown__single-value {
        ${({theme:e})=>s(e,"typography.definitions.utility.input-core")};
        color: ${n("colors.interactive.base.black")};
      }

      .dropdown__value-container {
        padding: 1rem 1.9rem 1rem 0.5rem;
      }

      .dropdown__control--menu-is-open {
        .dropdown__value-container {
          border-width: 1px;
          border-style: solid;
          border-color: ${n("colors.interactive.base.black")};
        }
      }
    }

    .dropdown__menu-list {
      .dropdown__option {
        border-width: 1px;
        border-color: ${n("colors.interactive.base.black")};

        &:last-of-type {
          border-bottom: 1px solid
            ${n("colors.interactive.base.black")};
          border-top-width: none;
          border-top-style: none;
        }
      }
    }
  }

  @media (max-width: ${u.md}) {
    left: -${i(2)};
  }
`,G=a(c).withConfig({displayName:"SortWrapper"})`
  position: relative;
  z-index: 1;

  @media (max-width: ${u.md}) {
    margin: 0;
  }
`,z=a.div.withConfig({displayName:"FilterMobileWrapper"})``,q=a(C.Utility).withConfig({displayName:"FilterMobileButton"})`
  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
    color: black;
  }
  padding: 0;
  ${({theme:e})=>s(e,"typography.definitions.utility.input-core")};

  svg {
    transform: rotate(90deg);
    width: ${i(1.25)};
    height: ${i(1.25)};
  }
`,K=a(S).withConfig({displayName:"FilterMobileDrawer"})`
  overflow-y: auto;
  position: relative;
`,J=a(c).withConfig({displayName:"FilterSortMobileDrawerWrapper"})``,Q=a.div.withConfig({displayName:"RemoveFilter"})`
  display: flex;
  cursor: pointer;

  svg {
    position: absolute;
    right: 1rem;
    width: ${i(4)};
    height: ${i(4)};

    path {
      fill: ${n("colors.interactive.base.black")};
    }
  }
`,Z=a.div.withConfig({displayName:"FilterMobileDrawerHeaderWrapper"})``,X=a(c).withConfig({displayName:"FilterMobileDrawerHeader"})`
  display: inline-flex;
  position: relative;
  background: rgb(248, 248, 248);
  padding: ${i(3)};
  width: fill-available;
`,Y=a(c).withConfig({displayName:"FilterMobileDrawerTitle"})`
  display: inline-flex;
`,ee=a(c).withConfig({displayName:"FilterDrawerText"})`
  ${({theme:e})=>s(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};

  ${({theme:e})=>r(e,"color","colors.interactive.base.black")};
`,te=a.div.withConfig({displayName:"FilterDrawerSelectionCounter"})`
  position: relative;
  margin-left: 0.2rem;
  ${({theme:e})=>s(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
`,oe=a(c).withConfig({displayName:"FilterMobileAccordianData"})`
  position: absolute;
  top: 80px;
  bottom: 160px;
  width: 100%;
  overflow-y: auto;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`,ae=a.div.withConfig({displayName:"FilterAccordionContainer"})`
  border-bottom: 1px solid;
  ${({theme:e})=>r(e,"border-bottom-color","colors.discovery.body.white.divider")};

  svg {
    float: right;
    transform-origin: center;
    transition: all ${k} ease-in-out;
    width: ${i(1.25)};
    height: ${i(1.25)};
  }
  overflow: hidden;
`,ie=a.label.withConfig({displayName:"FilterAccordionItemContainerLabel"})`
  ${s("typography.definitions.consumptionEditorial.subhed-aux-secondary")};
  ${({theme:e})=>r(e,"color","colors.background.black")};
`;ie.defaultProps={typeIdentity:"typography.definitions.consumptionEditorial.subhed-aux-primary"};const re=a.div.withConfig({displayName:"FilterAccordionContainerCounter"})`
  position: relative;
  margin-left: 0.2rem;
  ${s("typography.definitions.consumptionEditorial.subhed-aux-secondary")};
`,ne=a.div.withConfig({displayName:"FilterAccordionLabelContainer"})`
  display: inline-flex;
`,se=a(f).withConfig({displayName:"FilterAccordionItemContainerContent"})`
  margin: 0 ${i(3)};
  ${({isActive:e})=>e?`\n      overflow: hidden;\n      transition: ${k} linear;\n      padding-bottom: ${i(2)};\n     `:`\n     max-height: 0px;\n     transition: all ${k};\n     `}

  ${({theme:e})=>r(e,"color","colors.consumption.lead.standard.description")};

  && {
    .un-select-filter-button {
      margin-bottom: 0;
    }
  }
  ${_} {
    padding: ${i(2)} 0 ${i(1)};
  }
`,le=a.div.withConfig({displayName:"FilterAccordionItemContainer"})`
  margin: ${i(3)};
`,de=a(C.Utility).withConfig({displayName:"FilterAccordionItemContainerButton"})`
  fill: #615f66;
  float: right;
  transition: all 0.2s ease;
  padding: ${i(1)} ${i(.5)};

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
  ${({isActive:e})=>e&&"transform: rotate(180deg);"}
`,me=a(c).withConfig({displayName:"FilterMobileActionWrapper"})`
  position: absolute;
  bottom: 0;
  padding: ${i(3)};
  width: 100%;
  ${({theme:e})=>`\n  background: ${n(e,"colors.background.light")};`};
`,ce=a.div.withConfig({displayName:"FilterMobileDrawerAccordionWrapper"})``,ue=a(C.Primary).withConfig({displayName:"FilterMobileApplyActionButton"})`
  margin-bottom: ${i(2)};
  width: 100%;
`,pe=a(C.Secondary).withConfig({displayName:"FilterMobileCancelActionButton"})`
  width: 100%;
  ${({theme:e})=>`\n  background: ${n(e,"colors.background.light")};`}
`,ge=a.div.withConfig({displayName:"SortMobileContainer"})``,he=a(C.Utility).withConfig({displayName:"SortMobileButton"})`
  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
    color: black;
  }
  padding: 0;
  ${({theme:e})=>s(e,"typography.definitions.utility.input-core")};

  svg {
    transform: rotate(90deg);
    width: ${i(1.25)};
    height: ${i(1.25)};
  }
`,ye=a(S).withConfig({displayName:"FilterMobileDrawer"})`
  overflow-y: auto;
`,be=a.div.withConfig({displayName:"SortSelectionControlWrapper"})`
  position: absolute;
  top: 80px;
  bottom: 160px;
  margin: 1.5rem 1.5rem 0;
  width: 100%;
`;e.exports={FilterComponentWrapper:T,RemoveFilter:Q,FilterDrawerText:ee,FilterDrawerSelectionCounter:te,FilterMobileDrawerHeaderWrapper:Z,FilterMobileDrawerHeader:X,FilterMobileDrawerTitle:Y,FilterSortMobileDrawerWrapper:J,FilterMobileDrawer:K,FilterMobileWrapper:z,FilterMobileButton:q,FilterMobileAccordianData:oe,FilterAccordionContainer:ae,FilterAccordionItemContainer:le,FilterAccordionItemContainerLabel:ie,FilterAccordionContainerCounter:re,FilterAccordionLabelContainer:ne,FilterAccordionItemContainerContent:se,FilterAccordionItemContainerButton:de,FilterMobileApplyActionButton:ue,FilterMobileCancelActionButton:pe,FilterMobileActionWrapper:me,FilterMobileDrawerAccordionWrapper:ce,SortSelectionControlWrapper:be,FilterCategoryList:x,FilterCategoryItem:P,Category:B,CategoryContainer:E,CategoryCounter:D,FilterCategoryWrapper:I,StyledChevron:H,FilterSelectionMenuWrapper:M,FilterMenuWrapper:L,FilterMenuItemWrapper:V,FilterMenuTypeDeselect:W,FilterMenuGridWrapper:F,FilterMenuContent:A,FilterMenuCloseIcon:O,FilterSelectionControlWrapper:_,FilterMenuListWrapper:R,FilterTotalItemWrapper:j,RadioCheckboxSelectionControl:N,SortContainer:U,SortWrapper:G,SortMobileContainer:ge,SortMobileButton:he,SortMobileDrawer:ye}},27847:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({filterCloseButtonLabel:{id:"FilterComponent.FilterMenuCloseButton",defaultMessage:"Close Filter Menu",description:"ARIA label for the close button on filter Menu",isConfigurable:!0},items:{id:"FilterComponent.Items",defaultMessage:"Items",description:"Suffix text to append to the total count"},sortBy:{id:"FilterComponent.SortBy",defaultMessage:"Sort by",description:"Filter component sort by text for sorting result"},filterBy:{id:"FilterComponent.FilterBy",defaultMessage:"Filter by",description:"Filter component filter by text for sorting result"},showItems:{id:"FilterComponent.ShowItems",defaultMessage:"Show {totalItems} Results",description:"ShowItems string for filter component"},applyActionLabel:{id:"FilterComponent.FilterApplyActionButton",defaultMessage:"Apply",description:"Filter component apply text for sorting result"},cancelActionLabel:{id:"FilterComponent.FilterCancelActionButton",defaultMessage:"Cancel",description:"Filter component cancel text for sorting result"},deseletActionLabel:{id:"FilterComponent.FilterDeselectActionButton",defaultMessage:"Unselect all",description:"Filter component deselect text for filter result"}})},63556:(e,t,o)=>{const a=o(93225);e.exports=a},18798:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(98288),{FullBleedBannerWrapper:n,GridWrapper:s,SectionTitleWrapper:l,SectionDekWrapper:d,FullBleedTextWrapper:m}=o(15104),c=e=>{const{dek:t,fullBleedVisualAsset:o,hed:a,isLazy:c}=e;return i.createElement(n,null,i.createElement(s,null,i.createElement(m,null,a&&i.createElement(l,{as:"h2",dangerouslySetInnerHTML:{__html:a}}),t&&i.createElement(d,{as:"p",dangerouslySetInnerHTML:{__html:t}})),o&&i.createElement(r,Object.assign({},o,{isLazy:c}))))};c.propTypes={dek:a.string,fullBleedVisualAsset:a.object,hed:a.string,isLazy:a.bool},c.displayName="FullBleedBanner",e.exports=c},49956:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),{asThemedComponent:i}=o(3517),r=o(74804);e.exports=i(a(r,"FullBleedBanner"))},15104:(e,t,o)=>{const a=o(51117).default,{BaseText:i}=o(74327),{SpanWrapper:r}=o(89676),{calculateSpacing:n}=o(79720),s=a.div.withConfig({displayName:"FullBleedBannerWrapper"})`
  margin-bottom: ${n(3.2)};
`,l=a.div.withConfig({displayName:"FullBleedTextWrapper"})``,d=a(i).withConfig({displayName:"SectionTitleWrapper"})``;d.defaultProps={colorToken:"colors.interactive.base.white",typeIdentity:"typography.definitions.discovery.hed-feature"};const m=a(i).withConfig({displayName:"SectionDekWrapper"})``;m.defaultProps={colorToken:"colors.consumption.body.inverted.body",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const c=a.div.withConfig({displayName:"GridWrapper"})`
  display: grid;

  position: relative;
  grid-template: 'box';
  z-index: 0;
  /* Grid properties */
  width: 100%;
  overflow: hidden;

  > *,
  &::before {
    grid-area: box;
  }

  ${l} {
    place-self: center;
  }

  ${d} {
    text-align: center;
  }

  ${m} {
    text-align: center;
  }

  /* semi-transparent layer to darken image */
  &::before {
    position: relative;
    opacity: 0.4;
    z-index: -1;
    background: black;
    content: '';
  }

  ${r} {
    img {
      position: relative;
      z-index: -2;
      height: auto;
      /* object-fit and aspect-ratio in use for a consistent aspect ratio pattern for the image */
      object-fit: cover;
      aspect-ratio: 3 / 2; /* @TODO: dynamicize this in order for a brand to set which ratio they prefer */
      inline-size: 100%;
      max-height: 424px; /* @TODO: max-height value should be configurable on a per brand basis */
    }
  }
`;e.exports={FullBleedBannerWrapper:s,GridWrapper:c,SectionTitleWrapper:d,SectionDekWrapper:m,FullBleedTextWrapper:l}},74804:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(18798);i.Default=a(i,"Default",{}),e.exports=i},51014:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(44031),n=o(32168),{componentTracking:s}=o(28601),{trackComponent:l}=o(40199),{HorizontalListContainer:d,HorizontalListGrid:m,HorizontalListItem:c,HorizontalListTitle:u,HorizontalListWrapper:p}=o(88150),g=({dangerousHed:e,hasDividerAbove:t,hasTopMobilePadding:o,hasTopSpacing:a,hasVerticalRule:g,hideRubricItemSummary:h,items:y,sectionTitleVariation:b,sectionTitleTypeToken:S,shouldEnableDekStyling:C,shouldHideBylines:f,shouldEnableBundleComponentAnalytics:$,shouldThumbnailAlignTop:v,summaryItemVariation:w})=>{i.useEffect((()=>{l("HorizontalList")}),[]);const k=n[b]||n,T=r[w]||r;return y&&y.length>0?i.createElement(p,{"data-testid":"HorizontalListWrapper",hasTopSpacing:a},i.createElement(d,{hasDividerAbove:t},e&&i.createElement(u,{as:k,dangerousHed:e,sectionTitleTypeToken:S}),i.createElement(m,{"data-testid":"HorizontalListGrid"},y.map(((t,a)=>{const r=s.addDataSectionTitleAttribute($,e,a);return i.createElement(c,Object.assign({as:T,key:t.copilotID,hedTag:"h3",analyticsDataAttribute:r},t,{hasRule:!1,hasTopMobilePadding:o,hideRubricItemSummary:h,hasVerticalRule:g&&a>0,shouldEnableDekStyling:C,shouldHideBylines:f,shouldThumbnailAlignTop:v}))}))))):null};g.propTypes={dangerousHed:a.string,hasDividerAbove:a.bool,hasTopMobilePadding:a.bool,hasTopSpacing:a.bool,hasVerticalRule:a.bool,hideRubricItemSummary:a.bool,items:a.array,sectionTitleTypeToken:a.oneOf(["subhed-section-primary","subhed-section-collection"]),sectionTitleVariation:a.string,shouldEnableBundleComponentAnalytics:a.bool,shouldEnableDekStyling:a.bool,shouldHideBylines:a.bool,shouldThumbnailAlignTop:a.bool,summaryItemVariation:a.string},g.defaultProps={dangerousHed:"",hasDividerAbove:!1,hasTopMobilePadding:!1,hasTopSpacing:!1,hasVerticalRule:!0,hideRubricItemSummary:!1,items:[],sectionTitleTypeToken:"subhed-section-primary",sectionTitleVariation:"LineAboveLineBelowTextCenter",shouldEnableBundleComponentAnalytics:!1,shouldEnableDekStyling:!0,shouldHideBylines:!1,shouldThumbnailAlignTop:!1,summaryItemVariation:"SideBySideThirds"},g.displayName="HorizontalList",e.exports=g},30388:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380);e.exports=a(o(51014),"HorizontalList")},88150:(e,t,o)=>{const a=o(51117).default,{BREAKPOINTS:i}=o(85326),{maxThresholds:r}=o(28657),{calculateSpacing:n,getColorToken:s,getDecoration:l,getTypographyStyles:d,minScreen:m}=o(79720),c=o(48655),{GridItem:u}=o(14134),{SectionTitleHed:p}=o(80577),g=a(c.EvenFourMobileUp).withConfig({displayName:"HorizontalListGrid"})`
  &&& {
    grid-row-gap: 0;

    /* the grids are designed around 'max-widths', so the tablet grid kicks in at 769, but we actually want 768 */
    @media (min-width: ${i.md}) {
      grid-template-columns: repeat(12, 1fr);
    }

    @media (min-width: ${i.md}) and (max-width: ${r.lg}px) {
      position: relative;
      grid-column-gap: ${n(4)};
      grid-template-columns: repeat(12, 1fr);

      /* crosshairs y axis */
      &::after {
        position: absolute;
        left: 50%;
        background: ${({theme:e})=>s(e,"colors.discovery.body.white.divider")};
        width: 1px;
        height: 100%;
        content: '';
      }
    }

    > ${u} {
      @media (max-width: ${r.lg}px) {
        padding-top: ${n(2)};
      }

      @media (min-width: ${i.lg}) {
        /* grids dont turn over until xxl so had to override */
        grid-column: auto / span 3;
      }

      /* crosshairs x axis */
      :nth-child(1),
      :nth-child(2) {
        @media (min-width: ${i.md}) and (max-width: ${r.lg}px) {
          position: relative;

          &::before {
            position: absolute;
            bottom: 0;
            background: ${({theme:e})=>s(e,"colors.discovery.body.white.divider")};
            width: 100%;
            height: 1px;
            content: '';
          }
        }
      }

      :nth-last-child(1) {
        > div {
          @media (max-width: ${r.md}px) {
            border-bottom: none;
          }
        }
      }

      @media (min-width: ${i.md}) and (max-width: ${r.lg}px) {
        grid-column: auto / span 6;
      }
    }
  }
`,h=a.div.withConfig({displayName:"HorizontalListItem"})`
  &&& {
    border-color: ${({theme:e})=>s(e,"colors.discovery.body.white.divider")};

    @media (max-width: ${r.md}px) {
      border-bottom-width: 1px;
      border-bottom-style: solid;
      padding: 0;
      ${({hasTopMobilePadding:e})=>e&&"padding-top: 1rem; padding-bottom: 2rem"}
    }

    @media (min-width: ${i.md}) and (max-width: ${r.lg}px) {
      border: none;
    }

    @media (max-width: ${r.lg}px) {
      grid-column-gap: ${n(0)};
      align-items: center;
      padding-bottom: 0;
      ${({hasTopMobilePadding:e})=>e&&"padding-top: 1rem; padding-bottom: 2rem"}
    }

    @media (min-width: ${i.lg}) {
      grid-column-gap: ${n(2)};
      border: none;
      padding-top: ${n(2)};
      height: 100%;

      &::before {
        top: ${n(2)};
        left: calc(var(--grid-gap) / -2);
        height: calc(100% - 1rem);
      }
    }

    .summary-item__hed-link,
    .summary-item__hed-link:link,
    .summary-item__hed-link:visited {
      .summary-item__hed {
        margin-bottom: ${n(1)};
        ${({theme:e})=>d(e,"typography.definitions.discovery.subhed-section-tertiary")};
        color: ${({theme:e})=>s(e,"colors.discovery.lead.primary.hed")};
      }
    }

    .summary-item__asset-container {
      @media (max-width: ${r.lg}px) {
        margin: ${n(2)} ${n(2)}
          ${n(2)} 0;
        ${({shouldThumbnailAlignTop:e})=>e&&"align-self: baseline; margin-top: 0;"}
      }
    }

    .summary-item__asset-container {
      width: ${n(8)};
    }

    &.summary-item--text-align-center {
      .summary-item__asset-container {
        margin: 0 auto;
      }
    }

    &.summary-item--layout-placement-side-by-side {
      grid-column-gap: ${n(2)};
      align-items: normal;

      &.summary-item--layout-proportions-33-66 {
        grid-template-columns: ${n(8)} 1fr 1fr;
      }

      &.summary-item--layout-proportions-66-33 {
        grid-template-columns: 1fr 1fr ${n(8)};
      }

      .summary-item__content {
        padding-top: 0;
      }
    }

    .summary-item__content {
      padding: ${n(2)} 0 ${n(2)};

      @media (max-width: ${r.lg}px) {
        margin-bottom: 0;
      }
    }

    .summary-item__dek {
      margin: 0;
      /* allows short deks to occupy same space as wrapped deks */
      min-height: 30px;
      ${({theme:e,shouldEnableDekStyling:t})=>t&&d(e,"typography.definitions.globalEditorial.context-tertiary")};
      ${({theme:e,shouldEnableDekStyling:t})=>t&&`color: ${s(e,"colors.discovery.body.white.context-tertiary")}`};
    }
  }
`,y=a.div.withConfig({displayName:"HorizontalListTitle"})`
  margin-bottom: ${n(3)};

  ${p} {
    color: ${({theme:e})=>s(e,"colors.discovery.lead.primary.hed")};
    ${({theme:e,sectionTitleTypeToken:t})=>d(e,`typography.definitions.discovery.${t}`)};
  }
`,b=a(c.WithMargins).withConfig({displayName:"HorizontalListWrapper"})`
  grid-row-gap: ${n(0)};

  && {
    ${({hasTopSpacing:e})=>e?`\n          ${m(i.md)} {\n            margin-top: ${n(4)};\n          }\n        `:""}
  }

  > ${u} {
    grid-column: 1 / span 4;

    @media (min-width: ${i.md}) {
      grid-column: 1 / span 12;
    }
  }
`,S=a.div.withConfig({displayName:"HorizontalListContainer"})`
  --divider-width: ${({theme:e})=>l(e,"dividerWidth")};

  ${({hasDividerAbove:e,theme:t})=>e?`\n    border-top: var(--divider-width) solid ${s(t,"colors.discovery.body.white.divider")};\n    margin-top: ${n(3)};\n\n    ${m(i.md)} {\n      padding-top: ${n(3)};\n    }\n  `:""}
`;e.exports={HorizontalListContainer:S,HorizontalListGrid:g,HorizontalListItem:h,HorizontalListTitle:y,HorizontalListWrapper:b}},24301:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(95761),{trackComponent:n}=o(40199),{LiveStreamEmbedWrapper:s,LiveStreamHed:l}=o(44697),d=({livestreamUrl:e,dangerousHed:t})=>(i.useEffect((()=>{n("LiveStreamEmbed")}),[]),i.createElement(s,null,t&&i.createElement(l,{dangerousHed:t}),i.createElement(r,{url:e,shouldAllowFullScreen:!0,shouldApplyAspectRatio:!0,sandbox:"allow-scripts allow-same-origin",height:"100%",width:"100%",isLazyLoaded:!1})));d.propTypes={dangerousHed:a.string,livestreamUrl:a.string.isRequired},e.exports=d},49689:(e,t,o)=>{e.exports=o(24301)},44697:(e,t,o)=>{const a=o(51117).default,i=o(32168),{calculateSpacing:r}=o(79720),n=a.div.withConfig({displayName:"LiveStreamEmbedWrapper"})`
  margin: 0 auto;
  padding: 0 1.5rem;
  max-width: 720px;
`;n.displayName="LiveStreamEmbedWrapper";const s=a(i.TextCenter).withConfig({displayName:"LiveStreamHed"})`
  margin-bottom: ${r(2)};
  padding-top: ${r(6)};
`;s.displayName="LiveStreamHed",e.exports={LiveStreamEmbedWrapper:n,LiveStreamHed:s}},77858:(e,t,o)=>{const a=o(45697),i=o(67294),{generateId:r}=o(47857),{MultiPackageRow:n}=o(42041),s=e=>{if(!e.children)return null;const{hed:t,dangerousHed:o,container:a,copilotId:s}=e.children.props||{};let l;return t?l=r(e.children.props,"hed"):o?l=r(e.children.props,"dangerousHed"):(null==a?void 0:a.hed)?l=r(e.children.props.container,"hed"):(null==a?void 0:a.dangerousHed)?l=r(e.children.props.container,"dangerousHed"):s?l=s:(null==a?void 0:a.copilotId)&&(l=a.copilotId),i.createElement(n,Object.assign({},e,{id:l}),e.children)};s.propTypes={children:a.node},s.displayName="MultiPackageRow",e.exports=s},86753:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(77858);e.exports=a(i,"MultiPackageRow")},31162:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(94184),{useIntl:n}=o(76186),s=o(46647),l=o(96306),d=o(35559),{trackComponent:m}=o(40199),{trackingProducts:c}=o(96469),u=o(20589),p=o(81132),g=o(43625),h=o(90204),{PaymentGateway:y}=o(28576),b=o(86596),S=o(74637),C=o(81073),{LinkBanner:f}=o(51837),{NavigationList:$}=o(93210),v=o(49689),w=o(30388),k=o(30279),T=o(98797),I=o(28265),x=o(86345),B=o(75324),E=o(17366),D=o(86667),H=o(94806),N=o(53167),P=o(2863),M=o(81543),L=o(15935).Z,F=o(33946),A=o(46714),O=o(70787),_=o(65135),R=o(611),V=o(50037),W=o(9039),j=o(12731),U=o(93052),G=o(85003),z=o(78740),q=o(63386),K=o(73015),J=o(60486),Q=o(49956),Z=o(86753),X=o(46098),{PodcastDetailPageSummaryRiver:Y}=o(91547),ee=o(83074).Z,{Ticker:te}=o(58980),{findComponentOptions:oe,ProductListingItems:ae}=o(17974),{CMUnitWrapper:ie,DiscoveryQuoteRow:re,EventsListWrapper:ne,MultiPackageContainer:se,MultiPackageReadMore:le,NewsFeedWrapper:de,NewsletterWrapper:me,PromoBoxWrapper:ce,SubTopicDiscoveryWrapper:ue,TickerWrapper:pe,MultipackageNoItemsBlock:ge,MultiPackageBodyWrapperGrid:he,SectionJumpLinksWrapper:ye,UtilityButton:be}=o(42041),Se="row-content",Ce=o(20835),fe=o(48655),$e=o(44682),ve=o(86320),we=o(3973),{PresetProvider:ke}=o(76191),{minThresholds:Te}=o(28657),Ie=o(77343),{RIVER_LAYOUTS:xe}=o(57842),Be=o(88408),Ee=()=>()=>a.createElement(y,{group:"ads"},a.createElement(s,{position:"rail"}));function De(e,{shouldUseGridForEmbed:t,shouldUseJumpLinksSectionStyleForEmbed:o,shouldShowAdsInMultiPackageBody:i}){const r=t?fe.NarrowContentWithWideAdRail:he;if(i)return a.createElement(Ce,{FullBleedContentWrapper:r,GeneralContentWrapper:r,RailContent:Ee(),jsonml:e.body});const n=a.createElement(X,{copilotId:e.copilotId,body:e.body,dangerousHed:e.dangerousHed,dangerousDek:e.dangerousDek});return o?a.createElement(ye,{className:"verso-section-jump-links-wrapper"},n):n}function He(e){var t;return!!(null===(t=null==e?void 0:e.items)||void 0===t?void 0:t.length)}function Ne(e,t,o,i,n={},m={}){var c;const{buttonVariation:X,btnStyle:ae,collageComponentTemplates:se,associatedComponentRules:he,gridVariationForEmbed:ye,hasCarouselSliderPagination:Ce,hasControls:fe,hasDiscoveryPullQuoteUnderline:Ee,hasNavigationButtonVariation:Pe,hasCarouselSliderPaginationForArticle:Me,hasPlpFilterableContainerBackgroundColor:Le,hasPlpFilterableContainerLightBackgroundColor:Fe,hasRelatedContainerBackgroundColor:Ae,hasVersoFeaturesIncreasedVerticalPadding:Oe,hasVersoFeaturesIncreasedVerticalPaddingTop:_e,hasNoBottomMargin:Re,hasNoTopBottomMarginOnMobile:Ve,hasMarginBottomMultiPackageRow:We,hasMarginTopMultiPackageRow:je,hasMediumMargin:Ue,hasReducedMargin:Ge,hasStickyLinkBanner:ze,hasTickerSpecialTheme:qe,hasTopAndBottomBorderQuote:Ke,hasNoBackgroundColor:Je,hasNoStickyNavigationBanner:Qe,ProductListingCarouselContainersData:Ze,lightBgLinkBannerLayout:Xe,lowestHierarchy:Ye,includeSummaryCollageEight:et,isEmbedWrapperFullBleed:tt,shouldEnableBundleComponentAnalytics:ot,shouldHideAds:at,shouldHideNewsletter:it,shouldCheckProductInView:rt,shouldUseConstrainedParagraph:nt,shouldUseJumpLinksSectionStyleForEmbed:st,shouldUseThreeColumnsForContributors:lt,shouldUseFourColumnsForContributors:dt,shouldUseGridForEmbed:mt,shouldShowAdsInMultiPackageBody:ct,shouldUseGridWrapperForEmbed:ut,shouldShowPaginatedButtonAtEnd:pt,shouldShowSummaryGridButton:gt,hideCuratedShowsList:ht,showPriceForProduct:yt,expVariationName:bt,formatMessage:St,nativeTrendingPosition:Ct,summaryCollageOneVariation:ft}=m,$t=P[ft];let vt="";if(he){const t=oe(e,he);vt=null!==(c=null==t?void 0:t.behavior)&&void 0!==c?c:vt}const wt=!oe(e,se)&&n.featureFlags.preferCollectionGrid,kt=n.featureFlags.hasNewsletterWithoutWrapper;ot&&(e.shouldEnableBundleComponentAnalytics=ot);const Tt=({container:e,summaryCollageVariation:t})=>He(e)?a.createElement(Z,{dataJourneyHook:Se,key:i,hasNoBottomMargin:!0,hasNoTopMargin:!!o.hasVersoFeaturesReducedMargin,hasMarginBottomMultiPackageRow:We,hasMarginTopMultiPackageRow:je,hasNoTopBottomMarginOnMobile:Ve},a.createElement(R,{container:e,hasIncreasedVerticalPadding:Oe,hasIncreasedVerticalPaddingTop:_e,hasMinimalVerticalSpacing:o.hasVersoFeaturesReducedMargin,lowestHierarchy:n.bundle.isDestinationBundle?Ye:"",shouldPreferCollectionGrid:wt,shouldUseAdInCollectionGrid:n.featureFlags.shouldUseAdInCollectionGrid,isDestinationBundle:n.bundle.isDestinationBundle,summaryCollageVariation:t,hasNoTopBottomMarginOnMobile:Ve,hasReducedMargin:Ge,shouldUseCustomMargin:o.shouldUseCustomMargin})):null;switch(e.template){case"verso-features":case"verso-native-five-feature":case"verso-native-three-feature":case"verso-search-features":case"verso-article-and-curated-search":case"verso-features-with-recs-override":case"verso-multi-package-feature":return Tt({container:e});case"spotlight-article":return a.createElement(Z,{key:i,dataJourneyHook:Se,hasReducedMargin:Ge},a.createElement(A,Object.assign({},e)));case"spotlight-contributor":return a.createElement(Z,{key:i,dataJourneyHook:Se,hasReducedMargin:Ge,hasRightAndLeftMargin:!0},a.createElement(A.ContributorSummarySpotlight,Object.assign({},e)));case"spotlight-story":return a.createElement(Z,{key:i,dataJourneyHook:Se,hasReducedMargin:Ge,hasRightAndLeftMargin:!0},a.createElement(A.StorySummarySpotlight,Object.assign({},e)));case"verso-audio-article":return a.createElement(Z,{key:i,className:r("collection-grid-row"),hasReducedMargin:Ge},a.createElement(D.FourColumnsWithIcon,Object.assign({},e)));case"verso-features-rows":return Tt({container:e,summaryCollageVariation:"RowsWithDekAndItemsBelow"});case"verso-promobox":return e.asset?a.createElement(Z,{key:i,dataJourneyHook:Se,hasMarginTopMultiPackageRow:je},a.createElement(ce,null,a.createElement(T,Object.assign({isInvertedTheme:t},e,{isInverted:n.bundle.isInvertedTheme})))):null;case"verso-homepage-event-list":return e.eventItems&&a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(ne,null,a.createElement(S,{events:[e.eventItems]})));case"verso-homepage-tabbable-event-list":return e.eventItems&&a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(ne,null,a.createElement(S.SortByMonth,{events:e.eventItems,links:e.links,marquee:e.marquee,shouldUseTabs:e.shouldUseTabs,title:""})));case"verso-homepage-event":return e.eventItems&&a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(ne,null,a.createElement(S.SortByMonth,{events:[e.eventItems]})));case"verso-pullquote":return a.createElement(Z,{key:i,dataJourneyHook:Se,hasNoTopBottomMarginOnMobile:Ve},a.createElement(re,{hasTopAndBottomBorderQuote:Ke},a.createElement(b,Object.assign({},e,{hasUnderline:Ee}))));case"verso-spotlight-contributor":return a.createElement(Z,{key:i,dataJourneyHook:Se,hasReducedMargin:Ge},a.createElement(z,Object.assign({},e)));case"verso-summary-spotlight":return a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(O,Object.assign({},e)));case"verso-native":return at?null:a.createElement(Z,{dataJourneyHook:Se,className:"homepage__native-ad",hasReducedMargin:Ge,hasMediumMargin:Ue,hasNoTopBottomMarginOnMobile:Ve,isNativeAd:!0,key:i},a.createElement(y,{group:"ads"},a.createElement(s,{position:"promo"})));case"verso-cne-video":case"verso-cne-search-video":{const{dangerousDek:t,dangerousHed:o,isSpecialTheme:r,items:n,shouldUseBundleData:s,hasBottomMargin:l,hasGridWithMargins:d,hasTopMargin:m,shouldHideCNEVideoDek:c}=e;return a.createElement(Z,{className:"verso-bundle-cne-embed",key:i,dataJourneyHook:Se,hasMediumMargin:Ue,hasMarginTopMultiPackageRow:je,hasNoBottomMargin:r&&Re,hasNoTopBottomMarginOnMobile:Ve},a.createElement(u,{dangerousHed:o,dangerousDek:t,isSpecialTheme:r,items:n,shouldUseBundleData:s,shouldHideCNEVideoDek:c,shouldHaveTeaser:!0,hasBottomMargin:l,hasGridWithMargins:d,hasTopMargin:m}))}case"verso-native-cne-video":{if(!He(e))return null;const{dangerousHed:t,items:o}=e;return a.createElement(Z,{className:"verso-bundle-cne-embed",key:i,dataJourneyHook:Se},a.createElement(u,{dangerousHed:t,items:o}))}case"verso-related":case"verso-related-list-curation":return a.createElement(Z,{dataJourneyHook:Se,key:i,className:r({"homepage__related-row":Ae,"summary-collection-row":!0}),hasMarginBottomMultiPackageRow:We,hasMarginTopMultiPackageRow:je,hasNoBottomMargin:Re,hasMediumMargin:Ue},a.createElement(B,Object.assign({},e,{hasBackgroundColor:Ae,nativeTrendingPosition:Ct})));case"verso-searchable-summary-collection":{const{dangerousHed:t}=e;return a.createElement(Z,{className:"verso-searchable-summary-collection"},a.createElement(I,{dangerousHed:t}))}case"verso-summary-collection-row":return a.createElement(Z,{className:"verso-summary-collection-row summary-collection-row",key:i,dataJourneyHook:Se,hasMarginTopMultiPackageRow:je},a.createElement(B,Object.assign({isInvertedTheme:t},e)));case"verso-summary-grid-compact":return He(e)?a.createElement(Z,{className:"verso-summary-grid-compact",key:i,dataJourneyHook:Se,hasNoBottomMargin:Re},a.createElement(ne,null,a.createElement(E,Object.assign({},e,{hasButton:gt,showPrice:yt})))):null;case"verso-news-feed":return a.createElement(Z,{key:i,className:"news-feed-row",dataJourneyHook:Se},a.createElement(de,null,a.createElement(d,Object.assign({},e))));case"verso-river":case"verso-river-list":{const{bundle:{containers:r,homepagePromoUnitOrder:s=[],isPodcastBundle:l}}=n,d=s.map(((e,a)=>Ne(r.find((t=>e===t.template))||{template:e},t,o,a,n))).filter(Boolean),{dangerousHed:m="",noChannelItems:c=!1,searchUrl:u="",hasRule:p=!0}=e,g=new URLSearchParams(u);return e.searchQuery=g.get("q"),a.createElement("div",{key:i},c&&(g.get("q")||g.get("hierarchy"))&&a.createElement(Z,{dataJourneyHook:Se,hasMediumMargin:Ue,hasReducedMargin:Ge,hasNoTopMargin:!!o.hasNoTopMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasMarginTopMultiPackageRow:je},a.createElement(ge,{className:"no-items",hasRule:p},a.createElement("h3",null,St(L.noStories)),a.createElement("div",null,a.createElement("p",null,St(L.exploreInstead))))),a.createElement(Z,{dataJourneyHook:Se,hasMediumMargin:Ue,hasReducedMargin:Ge,hasNoTopMargin:!!o.hasNoTopMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasNoTopBottomMarginOnMobile:Ve,hasMarginTopMultiPackageRow:je},l?a.createElement(Y,Object.assign({},e,{shouldShowRiverHed:!0,summaryItemHedTag:"h3",hasLineAboveBelowInTitle:!0,hasLineAboveBelowTitleHead:!0,hasExtraTitlePadding:!0,dangerousHed:m||n.relatedArticleHed||St(ee.relatedArticleHed),chunkSize:3,summaryItemVariation:"SideBySideDesktopOnly",shouldHidePublishDate:!1,hasRail:!1,hasRule:c?!c:p})):a.createElement(H,Object.assign({},e,{summaryItemHedTag:"h3",promoUnits:d,recircRiver:(It=m,It.replace(/<[^>]*>/g,"")),hasRule:c?!c:p}))),!pt&&function(e,t,o,i={}){var r;return(null===(r=xe[null==i?void 0:i.layout])||void 0===r?void 0:r.isPaginated)&&a.createElement(le,{key:"paginated","data-test-id":"read-more-button-between"},a.createElement(k,{currentPage:e.bundle.paginatedPage,totalResults:i.totalResults,limit:i.limit,buttonVariation:t,btnStyle:o,filter:i.filter,searchQuery:i.searchQuery,shouldEnableBundleComponentAnalytics:i.shouldEnableBundleComponentAnalytics}))}(n,X,ae,e))}case"summary-carousel":{if(!He(e))return null;const{items:t,dangerousHed:o,dangerousDek:r}=e;return a.createElement(Z,{key:i,dataJourneyHook:Se,hasNoBottomMargin:Re,hasNoTopBottomMarginOnMobile:Ve},a.createElement(F,{items:t,dangerousHed:o,dangerousDek:r,shouldEnableBundleComponentAnalytics:ot,hasNoTopBottomMarginOnMobile:Ve,href:"/video",inputKind:"link"}))}case"verso-native-one-river":return He(e)?a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(H,Object.assign({isMidContentAdsDisabled:n.bundle.isMidContentAdsDisabled},e,{shouldShowRiverHed:!0,hasLineAboveBelowTitleHead:!0,hasRule:!1,hasNoTopBottomMarginOnMobile:Ve}))):null;case"newsletter":case"newsletter-subscribe":return it?null:kt?a.createElement(g,Object.assign({},n.newsletter,{sourceCode:"verso-hp-midpage",position:`container-newsletter-${i}`,key:i})):a.createElement(Z,{className:"homepage__newsletter-row",key:i,dataJourneyHook:Se},a.createElement(me,null,a.createElement(g,Object.assign({},n.newsletter,{sourceCode:"verso-hp-midpage"}))));case"verso-ticker":return a.createElement("div",{key:i,className:r("ticker-view",{"ticker-view--has-special-theme":qe}),"data-journey-hook":[0,2].includes(i)?null:Se},a.createElement(pe,null,a.createElement(h,{position:"cm-ticker"})),!n.featureFlags.hideTicker&&function(e,t,o={},i={}){const{hasNoBottomMargin:r,hasReducedMargin:n,tickerMarginTopType:s,hasVersoFeaturesReducedMargin:l,hasMediumMargin:d}=i;return e>0?a.createElement(Z,{key:e,hasReducedMargin:n,hasNoTopMargin:!!l,hasNoBottomMargin:!!r,hasMediumMargin:d},a.createElement(pe,{isInvertedTheme:t},a.createElement(M,Object.assign({marginTopType:s},o,{index:e,isInvertedTheme:t})))):a.createElement(pe,{key:e,isInvertedTheme:t},a.createElement(M,Object.assign({marginTopType:s,hasMinimalBottomMargin:n,index:e},o,{isInvertedTheme:t})))}(i,n.bundle.isInvertedTheme,e,o));case"verso-link-banner":{let t=ze;return"VisualCarousel"===e.layout&&(t=!1),e.hasContent&&a.createElement(Z,{key:i,dataJourneyHook:Se,hasMediumMargin:Ue,hasNoBottomMargin:Re,hasStickyLinkBanner:t,hasLightBgForLinkBanner:Xe===e.layout},a.createElement(f,Object.assign({},e)))}case"verso-navigation-list":return e.hasContent&&a.createElement(Z,{key:i,dataJourneyHook:Se,hasMediumMargin:Ue,hasNoBottomMargin:Re,hasStickyLinkBanner:("NavigationListAnchored"===e.layout||"NavigationListTextOverlayOnImage"===e.layout)&&!Qe,hasLightBgForLinkBanner:Xe===e.layout},a.createElement($,Object.assign({},e,{isInvertedTheme:t})));case"verso-image-slide-show":return e.hasContent?a.createElement(Z,{dataJourneyHook:Se,key:i,hasMediumMargin:Ue,hasMarginTopMultiPackageRow:je},a.createElement(C,Object.assign({},e.imageSlideShowData))):null;case"list":return a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(H,Object.assign({},e)));case"verso-native-list":return He(e)?a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(H,Object.assign({},e,{summaryItemVariationList:["SideBySideCenterImageLeft","SideBySideCenterImageRight"],summaryItemClassName:"summary-item--discovery-hed-consumption-dek"}))):null;case"verso-featured-item":return a.createElement(Z,{dataJourneyHook:Se,className:"verso-featured-item-row",key:i,hasReducedMargin:Ge,hasNoTopMargin:!!o.hasVersoFeaturesReducedMargin,hasNoBottomMargin:Re,hasNoTopBottomMarginOnMobile:Ve},a.createElement($t,Object.assign({},e,{hasNoTopBottomMarginOnMobile:Ve})));case"verso-section-jump-links":return a.createElement(Z,{key:i,className:"verso-embed-row verso-section-jump-links-row",dataJourneyHook:Se},De(e,{shouldUseGridForEmbed:mt,shouldUseConstrainedParagraph:nt,shouldUseJumpLinksSectionStyleForEmbed:st,shouldUseGridWrapperForEmbed:ut,gridVariationForEmbed:ye}));case"verso-collection-grid":case"verso-native-two-river":return He(e)?a.createElement(Z,{key:i,className:"collection-grid-row",dataJourneyHook:Se,hasNoBottomMargin:!!o.hasNoBottomMargin,hasNoTopBottomMarginOnMobile:Ve},a.createElement(D,Object.assign({},e))):null;case"verso-contributors":return a.createElement(Z,{key:i,className:r("collection-grid-row",vt),hasReducedMargin:Ge,hasNoBottomMargin:Re,hasNoTopBottomMarginOnMobile:Ve},function(e,t,o){return t?a.createElement(D.ContributorsInThreeColumnsWithButton,Object.assign({},e)):o?a.createElement(D.ContributorsInFourColumns,Object.assign({},e)):a.createElement(D.Contributors,Object.assign({},e))}(e,lt,dt));case"verso-issue-feature":return a.createElement(Z,{dataJourneyHook:Se,key:i,className:r("verso-issue-feature-row",{[vt]:et}),hasReducedMargin:Ge,hasNoTopBottomMarginOnMobile:Ve},a.createElement(W,Object.assign({},e)));case"verso-cm-unit":return a.createElement(Z,{key:i,className:"cm-unit-row",dataJourneyHook:Se},a.createElement(ie,null,a.createElement(h,{position:"homepage-mid-content"})));case"verso-cta-link":return e.hasLink?a.createElement(be,Object.assign({},e,{btnStyle:"outlined"})):null;case"verso-curated-shows":case"verso-tags-list":return He(e)?a.createElement(Z,{key:i,className:"curated-shows-row",dataJourneyHook:Se},a.createElement(_,Object.assign({},e,{hideCuratedShowsList:ht}))):null;case"verso-native-product":{if(!He(e))return null;const{items:t,dangerousHed:o}=e;return a.createElement(Z,{className:"product__list",key:i,dataJourneyHook:Se},a.createElement(j,{items:t,dangerousHed:o,isSponsoredAffiliateLinksEnabled:n.bundle.isSponsoredAffiliateLinksEnabled}))}case"verso-native-product-carousel":{if(!He(e))return null;const{items:t,dangerousHed:o}=e;return a.createElement(Z,{className:"product__carousel",key:i,dataJourneyHook:Se},a.createElement(U,{items:t,dangerousHed:o,isSponsoredAffiliateLinksEnabled:n.bundle.isSponsoredAffiliateLinksEnabled,hasNoTopBottomMarginOnMobile:Ve}))}case"verso-live-stream":return a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(v,Object.assign({},e)));case"verso-topics-list":return a.createElement(Z,{key:i,hasReducedMargin:Ge,dataJourneyHook:Se},a.createElement(w,Object.assign({},e)));case"verso-fifty-fifty":case"verso-search-fifty-fifty":return a.createElement(Z,{dataJourneyHook:Se,className:"homepage__fifty-fifty-row",key:i,hasNoTopMargin:!!o.hasVersoFeaturesReducedMargin,hasNoBottomMargin:!!o.hasNoBottomMargin},a.createElement(N,Object.assign({},e,{Ad:s})));case"verso-mid-content-ad":return at?null:a.createElement("div",{"data-journey-hook":Se,key:i,className:r("ad-container",{"ad-container-reduced-margin":Ge})},a.createElement(y,{group:"ads"},a.createElement(s,{position:"mid-content",shouldHoldSpace:!0,shouldDisplayLabel:!0})));case"verso-embed":return a.createElement(Z,{key:i,className:"verso-embed-row",dataJourneyHook:Se,hasMediumMargin:Ue,isInvertedTheme:t,hasMarginTopMultiPackageRow:je},De(e,{shouldUseGridForEmbed:mt,shouldUseConstrainedParagraph:nt,shouldShowAdsInMultiPackageBody:ct,shouldUseGridWrapperForEmbed:ut,gridVariationForEmbed:ye,isEmbedWrapperFullBleed:tt}));case"verso-subtopic-discovery":case"verso-subtopics":return He(e)?a.createElement(Z,{key:i,className:"verso-subtopic-discovery-row",hasMarginBottomMultiPackageRow:We,hasMarginTopMultiPackageRow:je,dataJourneyHook:Se},a.createElement(ue,null,a.createElement(x,Object.assign({},e)))):null;case"verso-popin":return a.createElement("div",{id:e.variation,"data-journey-hook":Se});case"verso-filterable-summary-list":return a.createElement(Z,{key:i,dataJourneyHook:Se,className:r({"homepage__plp-filterable-row":Le&&!(null==e?void 0:e.isGrid)}),hasNoTopMargin:!!o.hasNoTopMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasIncreasedVerticalPadding:!0},a.createElement(V,Object.assign({},e,{hasCarouselSliderPagination:Ce})));case"verso-article-filterable-feature":return a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(V,Object.assign({},e,{hasCarouselSliderPagination:Me})));case"verso-plp-multisearch-filterable-feature":case"verso-plp-filterable-feature":return a.createElement(Z,{key:i,dataJourneyHook:Se,className:r({"homepage__plp-filterable-row":Le&&!(null==e?void 0:e.isGrid)}),hasPlpFilterableContainerLightBackgroundColor:Fe,hasNoTopMargin:!!o.hasNoTopMargin,hasNoBottomMargin:!!o.hasNoBottomMargin,hasMediumMargin:Ue,hasIncreasedVerticalPadding:!0},a.createElement(V,Object.assign({},e,{hasControls:fe,hasCarouselSliderPagination:Ce,hasNavigationButtonVariation:Pe,shouldCheckProductInView:rt,expVariationName:bt})));case"verso-plp-curated-visual":return a.createElement(Z,{key:i,hasNoBottomMargin:Re},a.createElement($e,Object.assign({},e)));case"verso-plp-manual-curated":case"verso-plp-search-curated":{const t=(Ze&&Ze[0])===e||!1;return a.createElement(Z,{key:i,hasPlpFilterableContainerLightBackgroundColor:!Je&&"ContentCarousel"===e.templateLayout},a.createElement(ve,Object.assign({},e,{hasCarouselSliderPagination:Ce,isFirstProductListingCarousel:t})))}case"verso-pim-collection":return a.createElement(Z,{className:"verso-pim-collection-row",key:i},a.createElement(we,{container:e,pimCollectionBundleLinks:n.bundle.pimCollectionBundleLinks,isMobileView:n.bundle.isMobileView,shouldHideFilterComponent:n.bundle.pimCollectionHiddenFilter}));case"verso-full-bleed-banner":return a.createElement(Z,{key:i,hasNoBottomMargin:Re},a.createElement(Q,Object.assign({},e)));case"verso-best-stories-package":case"verso-hero-curated-feature":return He(e)?a.createElement(Z,{key:i,hasMarginBottomMultiPackageRow:We,hasMarginTopMultiPackageRow:je,className:"verso-best-stories-package"},a.createElement(l,Object.assign({},e))):null;case"verso-in-page-marketing-newsletter":return e.isPositionBottom?null:a.createElement(Z,{className:"verso-in-page-marketing-newsletter-row",key:i},a.createElement(g,Object.assign({},e,{sourceCode:"Homepage",position:`container-newsletter-${i}`,key:i,newsletterType:"impact-newsletter"})));case"verso-celebrated-entrypoint":return e.asset?a.createElement(Z,{key:i,dataJourneyHook:Se},a.createElement(p,Object.assign({},e))):null;case"featured-contributor":return a.createElement(Z,{key:i,hasNoBottomMargin:!0},a.createElement(G,Object.assign({},e)),a.createElement(N,Object.assign({},e,{summaryItemStickTopThreshold:Te.xl})));case"all-fictions":return a.createElement(q,Object.assign({},e,{key:i,pageSize:e.limit,pageNumber:n.bundle.paginatedPage}));case"podcast-articles":return a.createElement(K,Object.assign({},e,{key:i}));case"articles-about-author":case"more-by-author":return a.createElement(J,Object.assign({},e,{key:i,pageNumber:n.bundle.paginatedPage}));case"verso-flat-package":case"verso-focus-package":case"verso-puzzles-games-package":return a.createElement(Z,{key:i},n.featureFlags.enableSmartComponent?a.createElement(Ie,Object.assign({index:i},e)):a.createElement(ke,{id:e.id},a.createElement(D,Object.assign({},e))));case"verso-top-story-package":return a.createElement(a.Fragment,null,a.createElement(Be,Object.assign({key:i,index:i},e)),a.createElement(te,null));case"trending-curated":case"trending-collection":return a.createElement(Z,{key:i},a.createElement(D.ThreeColumns,Object.assign({shouldHideDangerousDek:!0,shouldHideContributors:!0,hasItemsRule:!1},e)));case"verso-category-feature-container":return a.createElement(Z,{key:i},a.createElement(D.FourColumns,Object.assign({shouldHideDangerousDek:!1,shouldHideDangerousHedOfSummaryItem:!0,shouldUseArrowIconInSummaryItemDek:!0},e)));default:return null}var It}const Pe=({associatedComponentRules:e,bundleProps:t,isInvertedTheme:o,buttonVariation:i,btnStyle:s,collageComponentTemplates:l,hasDiscoveryPullQuoteUnderline:d,containers:u,gridVariationForEmbed:p,hasCarouselSliderPagination:h,hasCarouselSliderPaginationForArticle:y,shouldPushProductIds:b,hasControls:S,shouldUseCustomMargin:C,hasNoBackgroundColor:f,hasNoStickyNavigationBanner:$,lightBgLinkBannerLayout:v,hasNavigationButtonVariation:w,hasNoBottomMargin:T,hasNoTopBottomMarginOnMobile:I,hasNoTopMargin:x,hasPlpFilterableContainerBackgroundColor:B,hasPlpFilterableContainerLightBackgroundColor:E,hasRelatedContainerBackgroundColor:D,hasTickerSpecialTheme:H,hasTopAndBottomBorderQuote:N,hasVersoFeaturesReducedMargin:P,hasVersoFeaturesIncreasedVerticalPadding:M,hasVersoFeaturesIncreasedVerticalPaddingTop:L,hasMarginBottomMultiPackageRow:F,hasMarginTopMultiPackageRow:A,hasEvenSpacingMultiPackageRow:O,hasMediumMargin:_,hasReducedMargin:R,hasStickyLinkBanner:V,isMidContentAdsDisabled:W,isEmbedWrapperFullBleed:j,multiPackageCustomClassName:U,newsletterType:G,shouldAddHjIgnoreAttribute:z,shouldEnableBundleComponentAnalytics:q,shouldHideAds:K,shouldHideNewsletter:J,shouldUseConstrainedParagraph:Q,shouldUseJumpLinksSectionStyleForEmbed:X,shouldUseGridForEmbed:Y,shouldUseGridWrapperForEmbed:ee,shouldUseThreeColumnsForContributors:te,shouldUseFourColumnsForContributors:ie,lowestHierarchy:re,shouldCheckProductInView:ne,shouldShowAdsInMultiPackageBody:de,shouldShowPaginatedButtonAtEnd:me,shouldShowSummaryGridButton:ce,hideCuratedShowsList:ue,showPriceForProduct:pe,expVariationName:ge,nativeTrendingPosition:he,summaryCollageOneVariation:ye})=>{a.useEffect((()=>{m("MultiPackages")}),[]),a.useEffect((()=>{t.bundle&&t.bundle.containers&&t.bundle.containers.length&&b&&c(t.bundle.containers[0].items)}),[t,b]);const be={hasVersoFeaturesReducedMargin:P,hasReducedMargin:R,hasMediumMargin:_,hasNoBottomMargin:T,hasNoTopMargin:x,shouldUseCustomMargin:C},Se=u.some((e=>oe(e,l)&&8===e.items.length)),Ce=ae(u),{formatMessage:fe}=n(),$e={buttonVariation:i,btnStyle:s,collageComponentTemplates:l,hasDiscoveryPullQuoteUnderline:d,associatedComponentRules:e,gridVariationForEmbed:p,hasCarouselSliderPagination:h,hasControls:S,lightBgLinkBannerLayout:v,hasNavigationButtonVariation:w,hasCarouselSliderPaginationForArticle:y,hasNoTopBottomMarginOnMobile:I,hasPlpFilterableContainerBackgroundColor:B,hasPlpFilterableContainerLightBackgroundColor:E,hasRelatedContainerBackgroundColor:D,hasTopAndBottomBorderQuote:N,hasVersoFeaturesIncreasedVerticalPadding:M,hasVersoFeaturesIncreasedVerticalPaddingTop:L,hasNoBackgroundColor:f,hasNoStickyNavigationBanner:$,hasNoBottomMargin:T,hasMarginBottomMultiPackageRow:F,hasMarginTopMultiPackageRow:A,hasMediumMargin:_,hasReducedMargin:R,hasStickyLinkBanner:V,hasTickerSpecialTheme:H,includeSummaryCollageEight:Se,isEmbedWrapperFullBleed:j,isMidContentAdsDisabled:W,ProductListingCarouselContainersData:Ce,shouldCheckProductInView:ne,shouldEnableBundleComponentAnalytics:q,shouldHideAds:K,shouldHideNewsletter:J,shouldUseConstrainedParagraph:Q,shouldUseGridForEmbed:Y,shouldUseJumpLinksSectionStyleForEmbed:X,shouldUseGridWrapperForEmbed:ee,shouldUseThreeColumnsForContributors:te,shouldUseFourColumnsForContributors:ie,lowestHierarchy:re,shouldShowAdsInMultiPackageBody:de,shouldShowPaginatedButtonAtEnd:me,shouldShowSummaryGridButton:ce,hideCuratedShowsList:ue,showPriceForProduct:pe,expVariationName:ge,formatMessage:fe,nativeTrendingPosition:he,summaryCollageOneVariation:ye},ve=u.find((({layout:e})=>{var t;return null===(t=xe[e])||void 0===t?void 0:t.isPaginated})),we=u.find((({template:e,isPositionBottom:t})=>"verso-in-page-marketing-newsletter"===e&&t)),ke=u.some((e=>"verso-plp-filterable-feature"===e.template&&e.isGrid));return a.createElement(se,{customClass:U,className:"multi-packages"+(U?` ${U}`:""),hasNoTopBottomMarginOnMobile:I,hasMarginBottomMultiPackageRow:F,hasMarginTopMultiPackageRow:A,hasEvenSpacingMultiPackageRow:O,showFooterAdPadding:ke,"data-hj-ignore-attributes":z?"":null},u.map(((e,a)=>Ne(e,o,be,a,t,$e))),ve&&me&&a.createElement(le,{key:"paginated","data-test-id":"read-more-button-end"},a.createElement(k,{currentPage:t.bundle.paginatedPage,totalResults:ve.totalResults,limit:ve.limit,btnStyle:s,buttonVariation:i,filter:ve.filter,searchQuery:ve.searchQuery,shouldEnableBundleComponentAnalytics:ve.shouldEnableBundleComponentAnalytics})),we&&a.createElement(Z,{className:r("verso-in-page-marketing-newsletter-row",{"newletter-container-layout":!0}),hasNoBottomMargin:!!be.hasNoBottomMargin},a.createElement(g,Object.assign({},we,{sourceCode:"Homepage",position:"container-newsletter",newsletterType:G}))))};Pe.defaultProps={gridVariationForEmbed:"NarrowContentWithWideAdRail",hasCarouselSliderPaginationForArticle:!1,hasEvenSpacingMultiPackageRow:!1,hasMarginBottomMultiPackageRow:!1,hasMarginTopMultiPackageRow:!0,hasMediumMargin:!1,hasNoBackgroundColor:!1,hasNoBottomMargin:!1,hasNoStickyNavigationBanner:!1,hasNoTopBottomMarginOnMobile:!1,hasNoTopMargin:!1,hasPlpFilterableContainerBackgroundColor:!1,hasPlpFilterableContainerLightBackgroundColor:!1,hasReducedMargin:!1,hasRelatedContainerBackgroundColor:!0,hasTickerSpecialTheme:!1,hasTopAndBottomBorderQuote:!1,hasVersoFeaturesIncreasedVerticalPadding:!1,hasVersoFeaturesIncreasedVerticalPaddingTop:!1,hasVersoFeaturesReducedMargin:!1,hideCuratedShowsList:!1,isEmbedWrapperFullBleed:!1,isInvertedTheme:!1,isMidContentAdsDisabled:!1,newsletterType:"impact-newsletter",shouldHideAds:!1,shouldHideNewsletter:!1,shouldPushProductIds:!1,shouldShowAdsInMultiPackageBody:!1,shouldShowPaginatedButtonAtEnd:!0,shouldShowSummaryGridButton:!0,shouldUseConstrainedParagraph:!1,shouldUseFourColumnsForContributors:!1,shouldUseGridForEmbed:!0,shouldUseGridWrapperForEmbed:!1,shouldUseJumpLinksSectionStyleForEmbed:!1,shouldUseThreeColumnsForContributors:!1,showPriceForProduct:!1,summaryCollageOneVariation:"SingleFeature",tickerMarginTopType:"small"},Pe.propTypes={associatedComponentRules:i.arrayOf(i.object),btnStyle:i.oneOf(["filled","outlined","text"]),bundleProps:i.object,buttonVariation:i.string,collageComponentTemplates:i.arrayOf(i.object),containers:i.array,expVariationName:i.string,gridVariationForEmbed:i.string,hasCarouselSliderPagination:i.bool,hasCarouselSliderPaginationForArticle:i.bool,hasControls:i.bool,hasDiscoveryPullQuoteUnderline:i.bool,hasEvenSpacingMultiPackageRow:i.bool,hasMarginBottomMultiPackageRow:i.bool,hasMarginTopMultiPackageRow:i.bool,hasMediumMargin:i.bool,hasNavigationButtonVariation:i.bool,hasNoBackgroundColor:i.bool,hasNoBottomMargin:i.bool,hasNoStickyNavigationBanner:i.bool,hasNoTopBottomMarginOnMobile:i.bool,hasNoTopMargin:i.bool,hasPlpFilterableContainerBackgroundColor:i.bool,hasPlpFilterableContainerLightBackgroundColor:i.bool,hasReducedMargin:i.bool,hasRelatedContainerBackgroundColor:i.bool,hasStickyLinkBanner:i.bool,hasTickerSpecialTheme:i.bool,hasTopAndBottomBorderQuote:i.bool,hasVersoFeaturesIncreasedVerticalPadding:i.bool,hasVersoFeaturesIncreasedVerticalPaddingTop:i.bool,hasVersoFeaturesReducedMargin:i.bool,hideCuratedShowsList:i.bool,isEmbedWrapperFullBleed:i.bool,isInvertedTheme:i.bool,isMidContentAdsDisabled:i.bool,lightBgLinkBannerLayout:i.string,lowestHierarchy:i.string,multiPackageCustomClassName:i.string,nativeTrendingPosition:i.number,newsletterType:i.string,shouldAddHjIgnoreAttribute:i.bool,shouldCheckProductInView:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldHideAds:i.bool,shouldHideNewsletter:i.bool,shouldPushProductIds:i.bool,shouldShowAdsInMultiPackageBody:i.bool,shouldShowPaginatedButtonAtEnd:i.bool,shouldShowSummaryGridButton:i.bool,shouldUseConstrainedParagraph:i.bool,shouldUseCustomMargin:i.bool,shouldUseFourColumnsForContributors:i.bool,shouldUseGridForEmbed:i.bool,shouldUseGridWrapperForEmbed:i.bool,shouldUseJumpLinksSectionStyleForEmbed:i.bool,shouldUseThreeColumnsForContributors:i.bool,showPriceForProduct:i.bool,summaryCollageOneVariation:i.string,tickerMarginTopType:i.oneOf(["small","none","large"])},Pe.displayName="MultiPackages",e.exports=Pe},8921:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(31162);e.exports=a(i,"MultiPackages")},15935:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({noStories:{id:"Multipackages.NoStories",defaultMessage:"No stories found for your search",description:"No stories label"},exploreInstead:{id:"Multipackages.ExploreInstead",defaultMessage:"Explore these instead",description:"Explore instead label"}})},17974:e=>{const t=e=>e.some((e=>"product"===e.contentType||"commerce-product"===e.contentType));e.exports={findComponentOptions:function(e,t=[]){return Array.isArray(t)?t.find((t=>e.template===t.template)):null},ProductListingItems:e=>{const o=[];return e.map((e=>{var a,i;return"verso-plp-manual-curated"!==e.template&&"verso-plp-search-curated"!==e.template||((null===(a=null==e?void 0:e.groups)||void 0===a?void 0:a.length)>0&&"ContentCarousel"===e.templateLayout?(e=>{const o=[];return e.forEach((e=>{var a;(null===(a=null==e?void 0:e.items)||void 0===a?void 0:a.length)>0?o.push(t(e.items)):o.push(!1)})),o.some(Boolean)})(null==e?void 0:e.groups)&&o.push(e):(null===(i=null==e?void 0:e.productList)||void 0===i?void 0:i.length)>0&&t(e.productList)&&o.push(e)),o})),o}}},64404:(e,t,o)=>{const a=o(45697),i=o(67294),{useIntl:r}=o(76186),n=o(71017),s=o(55399),l=o(32168),d=o(44241).Z,{trackComponent:m}=o(40199),{NewsFeedWrapper:c,NewsFeedSectionTitle:u,NewsFeedContentTabs:p,NewsFeedContentNavigation:g}=o(94618),h=({className:e,dangerousHed:t,defaultTab:o,feed:a,links:s,sectionTitleVariation:h,shouldUseTabs:y})=>{i.useEffect((()=>{m("NewsFeed")}),[]);const b=r(),S=l[h],C=a.map((e=>e.map(((e,t)=>i.createElement(n,Object.assign({},e,{key:t})))))),f=y?i.createElement(p,{buttonLabel:b.formatMessage(d.loadMoreNewsPreamble),defaultTab:o,tabContent:C,tabLabels:s}):i.createElement(i.Fragment,null,i.createElement(g,{attributes:{"aria-label":"Secondary",tabIndex:0},hasBorder:!0,justify:"center",links:s}),C);return i.createElement(c,{className:e,"data-testid":"NewsFeedWrapper"},t&&i.createElement(u,{as:S,dangerousHed:t,"data-testid":"NewsFeedSectionTitle",hedTag:"h2"}),f)};h.propTypes={className:a.string,dangerousHed:a.string,defaultTab:a.number,feed:a.arrayOf(a.arrayOf(a.shape(n.propTypes))).isRequired,links:a.arrayOf(a.shape(s.propTypes.links)).isRequired,sectionTitleVariation:a.string,shouldUseTabs:a.bool},h.defaultProps={sectionTitleVariation:"TextCenter",shouldUseTabs:!1},e.exports=h},35559:(e,t,o)=>{e.exports=o(64404)},94618:(e,t,o)=>{const a=o(51117).default,{BREAKPOINTS:i}=o(85326),{calculateSpacing:r}=o(79720),n=o(44260),s=o(55399),l=a.div.withConfig({displayName:"NewsFeedWrapper"})`
  @media (min-width: ${i.md}) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
`,d=a.div.withConfig({displayName:"NewsFeedSectionTitle"})`
  grid-column: 1 / span 12;
  margin-bottom: ${r(2)};
`,m=a(n).withConfig({displayName:"NewsFeedContentTabs"})``,c=a(s.Section).withConfig({displayName:"NewsFeedContentNavigation"})``;e.exports={NewsFeedWrapper:l,NewsFeedSectionTitle:d,NewsFeedContentTabs:m,NewsFeedContentNavigation:c}},44241:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({loadMoreNewsPreamble:{id:"NewsFeed.LoadMoreNewsPreamble",defaultMessage:"Show More News",description:"News feed component button label preamble"}})},93417:(e,t,o)=>{const a=o(45697),i=o(67294),{useIntl:r}=o(76186),n=o(67721).Z,{trackNavigationEvent:s}=o(68612),l=o(7279),{trackComponent:d}=o(40199),m=({buttonVariation:e,btnStyle:t,currentPage:o,filter:a,limit:m,totalResults:c,searchQuery:u,shouldEnableBundleComponentAnalytics:p})=>{i.useEffect((()=>{d("PaginationRow")}),[]);const{formatMessage:g}=r();if(o*m>=c)return null;const h=l[e];let y=a?`?filter=${a}&page=${o+1}`:`?page=${o+1}`;return y+=u?`&q=${u}`:"",i.createElement("div",null,i.createElement(h,{inputKind:"link",href:y,btnStyle:t,label:g(n.nextPage),shouldEnableBundleComponentAnalytics:p,onClickHandler:e=>{const t={type:"click",label:e.target.innerText,subject:"pagination",placement:"bottom"};s(t)}}))};m.propTypes={btnStyle:a.string,buttonVariation:a.string,currentPage:a.number.isRequired,filter:a.string,limit:a.number.isRequired,searchQuery:a.string,shouldEnableBundleComponentAnalytics:a.bool,totalResults:a.number.isRequired},m.defaultProps={buttonVariation:"Primary"},e.exports=m},30279:(e,t,o)=>{const a=o(93417);e.exports=a},67721:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({nextPage:{id:"PaginationRow.NextPage",defaultMessage:"Next Page",description:"The button label"}})},95145:(e,t,o)=>{const a=o(45697),i=o(67294),{ExpertCardWrapper:r,Title:n,ButtonsWrapper:s,UtilityButton:l,SubHed:d,DisclaimerText:m}=o(39546),c=({title:e,subHed:t,links:o=[],shouldUseHedInExpertCard:a,affiliateDisclaimer:c,shouldAffiliateDisclaimerPlpEnable:u,hasNoHeroProductVisualImage:p})=>e||0!==o.length?i.createElement(r,{hasNoHeroProductVisualImage:p},e&&i.createElement(n,{shouldUseHedInExpertCard:a,as:a?"h2":"p"},e),Boolean(u&&c)&&i.createElement(m,null,c),t&&i.createElement(d,null,t),i.createElement(s,null,o.map(((e,t)=>i.createElement(l,{key:`btn-${t}`,btnStyle:"outlined",inputKind:"link",label:e.label,href:e.href,target:e.target}))))):null;c.propTypes={affiliateDisclaimer:a.string,hasNoHeroProductVisualImage:a.bool,links:a.array,shouldAffiliateDisclaimerPlpEnable:a.bool,shouldUseHedInExpertCard:a.bool,subHed:a.string,title:a.string},e.exports=c},2436:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(23279),n=o(86857),s=o(85650),l=o(44031),d=o(16126),{ProductCardCarouselWrapper:m}=o(39546),c=o(37732),{formatGtmData:u,productImpressionTracking:p}=o(12190),g=({cardLayout:e,productList:t,carouselViewProps:o,hasBorder:a,hasUnderlineHed:g,productProps:h,layoutName:y,isLazy:b,shouldAppendReadMoreLinkForDek:S,summaryItemVariation:C,isUpcEnabled:f,isContentCenter:$,isPlpCurated:v,shouldNavigateToNewTab:w,hideDesktopPagination:k})=>{const T="ContentCarousel",{dangerousHed:I,pos:x}=o;i.useEffect((()=>{window.addEventListener("scroll",r((()=>p(T,document.getElementsByClassName("impressionTracking"))),1e3)),window.addEventListener("load",(()=>p(T,document.getElementsByClassName("impressionTracking"))))}),[T]);const B={spacing:"10px",width:{sm:"calc(50% - 10px)",lg:"calc(32% - 20px)"}};return i.createElement(m,{hasPadding:null==o?void 0:o.hasPadding},i.createElement(s,Object.assign({},o,{hideDesktopPagination:k}),t.map(((t,o)=>i.createElement(s.CarouselItem,Object.assign({key:`carouselItem-${o}`,carouselTitle:I,carouselItemIndex:o,carouselItemName:null==t?void 0:t.dangerousHed,pos:x},B,{isUpcEnabled:f}),((t,o)=>{const{contentType:r}=t||"",s=Object.assign(Object.assign({},t),{index:o,layout:"VisualCarousel"});let m=e,p=l[C];switch("article"!==r&&"gallery"!==r&&"externallink"!==r||(m="summary-item-card"),f&&["contentreference","product"].includes(r)&&(m="unified-product-card"),t.showAssetOnly||t.showLinkedAsset?p=d:$&&"externallink"===r&&(p=l.TextBelowCenter),m){case"summary-item-card":return i.createElement(p,Object.assign({},t,{key:`${t.dangerousHed}-${o}`},h,{hasUnderlineHed:g,isLazy:b,shouldAppendReadMoreLinkForDek:S,hasBorder:a,showShopNowButton:"externallink"===r,buttonSize:"default",shouldUseSmallHed:"externallink"===r,isPlpCurated:v,shouldNavigateToNewTab:w,layout:T,index:o}));case"unified-product-card":return i.createElement(c,Object.assign({},t,{key:`${t.dangerousHed}-${o}`,data_item:s,isLazy:b,hasImpressionTracking:!0,layoutName:y,layout:T}));default:return i.createElement(n,Object.assign({},t,{isLazy:b,key:`${t.dangerousHed}-${o}`},h,{hasImpressionTracking:!0,data_item:t,onClick:()=>u(window,t,o,T,y),layoutName:y,layout:T}))}})(t,o))))))};g.propTypes={cardLayout:a.oneOf(["summary-item-card","plp-product-card"]),carouselViewProps:a.object,hasBorder:a.bool,hasUnderlineHed:a.bool,hideDesktopPagination:a.bool,isContentCenter:a.bool,isLazy:a.bool,isPlpCurated:a.bool,isUpcEnabled:a.bool,layoutName:a.string,productList:a.array,productProps:a.object,shouldAppendReadMoreLinkForDek:a.bool,shouldNavigateToNewTab:a.bool,summaryItemVariation:a.string},g.defaultProps={hasBorder:!1,hasUnderlineHed:!0,shouldAppendReadMoreLinkForDek:!0,summaryItemVariation:"TextBelowLeft"},e.exports=g},3607:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(73955),n=o(32168),s=o(95145),l=o(2436),d=o(98288),m=o(17843),{Disclaimer:c}=o(5626),{ProductVisualWrapper:u,GridWrapper:p,SectionTitleWrapper:g}=o(39546),h=e=>{const{hed:t,productVisualAsset:o,sectionTitleVariation:a="LineAboveLineBelowTextCenter",expertCardContent:h,productList:y=[],carouselViewProps:b={hasControls:!0,hasPadding:!0,controlPosition:"center",hasPagination:!0,paginationStyle:"slider",hasCustomSlider:!0,hasImageCenteredButton:!0,controlPlacement:"space-between",shouldHideControlsOnDisable:!0,hasImpressionTracking:!0},productProps:S={isDropshipProduct:!0,isProductCardName:!0,hasUnderlineHed:!1,hasImageGrid:!0,hasProductPriceColor:!0},shouldUseHedInExpertCard:C=!0,theme:f,isLazy:$,variations:{layout:v},shouldAffiliateDisclaimerPlpEnable:w,affiliateDisclaimer:k,summaryItemVariation:T,shouldAppendReadMoreLinkForDek:I,isUpcEnabled:x,isContentCenter:B,isPlpCurated:E,shouldNavigateToNewTab:D,hideDesktopPagination:H,showDisclaimerTop:N}=e,P=t?t.replace(/[^a-zA-Z]+/gi,"-").toLowerCase():"";let M=t,L={};C&&t&&(M=void 0,L={title:t,subHed:null==h?void 0:h.title});const[F]=i.useState(parseInt(r(),10));b.dangerousHed=P,b.pos=F;const A=n[a];return i.createElement(m,{palette:f},i.createElement(u,{hasNoHeroProductVisualImage:!o},N&&i.createElement(c.TextCenterNoTopRule,{isEnabled:w,hasDisclaimerBottomMargin:!o,disclaimerHtml:k}),M&&i.createElement(g,null,i.createElement(A,{dangerousHed:M,affiliateDisclaimer:k,shouldAffiliateDisclaimerPlpEnable:!N&&w})),i.createElement(p,null,h&&i.createElement(s,Object.assign({},h,L,{hasNoHeroProductVisualImage:!o,shouldUseHedInExpertCard:C,affiliateDisclaimer:k,shouldAffiliateDisclaimerPlpEnable:!N&&w})),o&&i.createElement(d,Object.assign({},o,{isLazy:$})),y.length>0&&i.createElement(l,{cardLayout:v,productList:y,carouselViewProps:b,productProps:S,layoutName:P,isLazy:$,summaryItemVariation:T,shouldAppendReadMoreLinkForDek:I,isUpcEnabled:x,isContentCenter:B,isPlpCurated:E,shouldNavigateToNewTab:D,hideDesktopPagination:H}))))};h.propTypes={affiliateDisclaimer:a.string,carouselViewProps:a.object,expertCardContent:a.object,hed:a.string,hideDesktopPagination:a.bool,isContentCenter:a.bool,isLazy:a.bool,isPlpCurated:a.bool,isUpcEnabled:a.bool,productList:a.array,productProps:a.object,productVisualAsset:a.object,sectionTitleVariation:a.string,shouldAffiliateDisclaimerPlpEnable:a.bool,shouldAppendReadMoreLinkForDek:a.bool,shouldNavigateToNewTab:a.bool,shouldUseHedInExpertCard:a.bool,showDisclaimerTop:a.bool,summaryItemVariation:a.string,theme:a.oneOf(["standard","inverted"]),variations:a.shape({layout:a.oneOf(["summary-item-card","plp-product-card"])})},h.defaultProps={showDisclaimerTop:!1,theme:"standard",variations:{layout:"plp-product-card"}},e.exports=h},44682:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),{asThemedComponent:i}=o(3517),r=o(82256);e.exports=i(a(r,"ProductVisual"))},39546:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i,getTypographyStyles:r,minScreen:n,maxScreen:s,getColorStyles:l,isInverted:d}=o(79720),{BaseText:m}=o(74327),{CarouselWrapper:c,CarouselListItem:u,CurrentSlideIndicatorWrapper:p}=o(95764),g=o(48655),h=o(7279),{SpanWrapper:y}=o(89676),{BREAKPOINTS:b}=o(85326),S=a.div.withConfig({displayName:"ProductVisualWrapper"})`
  ${({hasNoHeroProductVisualImage:e})=>e&&`\n    ${n(b.md)} {\n    margin-top: ${i(15)};}`}
`,C=a(g.MarginsOnly).withConfig({displayName:"SectionTitleWrapper"})`
  padding-bottom: ${i(2)};
`,f=a.div.withConfig({displayName:"ExpertCardWrapper"})`
  grid-column: 1 / span 4;
  margin: ${i(2)} ${i(3)};
  ${({hasNoHeroProductVisualImage:e})=>e&&`\n    margin: 0;\n    text-align: center;\n    ${s(b.md)} {\n      margin-bottom : ${i(8)};\n    }\n  `}
  ${n(b.md)} {
    grid-column: 1 / span 3;
    grid-row: 2;
    margin: ${i(3)} 0 ${i(5)}
      ${i(6)};
  }
`,$=a(m).withConfig({displayName:"Title"})`
  ${({shouldUseHedInExpertCard:e})=>r(e?"typography.definitions.discovery.hed-core-secondary":"typography.definitions.discovery.hed-feature")}

  margin-bottom: ${i(2)};
  ${({theme:e})=>d(e)&&`\n  ${l(e,"color","colors.consumption.lead.inverted.heading")};\n  `}
`,v=a(m).withConfig({displayName:"DisclaimerText"})`
  margin-bottom: ${i(2)};
  ${r("typography.definitions.globalEditorial.context-secondary")};
  ${({theme:e})=>d(e)&&`\n  ${l(e,"color","colors.consumption.lead.inverted.description")};\n  `}
`,w=a(m).withConfig({displayName:"SubHed"})`
  ${r("typography.definitions.discovery.description-page")};
  margin: ${i(2)} 0 ${i(3)} 0;
  ${({theme:e})=>d(e)&&`\n  ${l(e,"color","colors.consumption.lead.inverted.description")};\n  `}
`,k=a.div.withConfig({displayName:"ButtonsWrapper"})``,T=a(h.Utility).withConfig({displayName:"UtilityButton"})`
  margin: 0 ${i(1.5)} ${i(2)} 0;
  ${n(b.md)} {
    margin: 0 ${i(1.5)} ${i(1.5)} 0;
  }
`,I=a.div.withConfig({displayName:"ProductCardCarouselWrapper"})`
  grid-column: 1 / span 4;
  margin: ${i(-5)} 0 ${i(4)} 0;
  overflow-x: clip;

  ${n(b.md)} {
    grid-column: 4 / -1;
    grid-row: 2;
    margin-top: ${i(-13)};
    margin-left: ${i(3)};
  }

  ${c} {
    margin-top: ${i(-3)};

    ${u}:first-child {
      box-sizing: content-box;
      ${({hasPadding:e})=>e?`padding-left: ${i(3)};\n            ${n(b.md)}\n            {  \n              padding-left: 0;\n            }`:"padding-left: 0;"}
    }
    ${u}:last-child {
      box-sizing: content-box;
      ${({hasPadding:e})=>e?`padding-right: ${i(3)};\n            ${n(b.md)}\n            {  \n              padding-right: ${i(6)};\n            }`:"padding-right: 0;"}
    }
  }

  ${p} {
    ${({hasPadding:e})=>e?`${n(b.md)}\n            {  \n              margin-left: 0;\n              margin-right: ${i(6)};\n            }`:null}
  }
`,x=a.div.withConfig({displayName:"GridWrapper"})`
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(4, 1fr);
  margin: 0 0 ${i(4)} 0;
  width: 100%;
  row-gap: 0;
  ${y} {
    grid-column: 1 / span 4;

    img {
      width: 100vw;
    }
  }
  ${n(b.md)} {
    grid-template-columns: repeat(12, 1fr);
    margin: 0 0 ${i(5)} 0;
    ${y} {
      grid-column: 1 / span 12;
      grid-row: 1;

      img {
        width: 100vw;
      }
    }
  }
`;e.exports={ProductVisualWrapper:S,SectionTitleWrapper:C,GridWrapper:x,ExpertCardWrapper:f,Title:$,ButtonsWrapper:k,UtilityButton:T,ProductCardCarouselWrapper:I,SubHed:w,DisclaimerText:v}},82256:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(3607);i.PLPProductCard=a(i,"PLPProductCard",{layout:"plp-product-card"}),i.SummaryItemCard=a(i,"SummaryItemCard",{layout:"summary-item-card"}),e.exports=i},35719:function(e,t,o){const a=o(45697),i=o(67294),{useState:r}=o(67294),{useIntl:n}=o(76186),s=o(3265),l=o(84528),d=o(83066),{HomepageSearchInput:m,HomePageSearchFormGrid:c}=o(29822),{trackComponent:u}=o(40199),p=({url:e})=>{i.useEffect((()=>{u("SearchFilter")}),[]);const{formatMessage:t}=n();let o=new URLSearchParams(e);const[a,p]=r(o.get("q")?o.get("q"):"");return i.createElement(s,{hideDividers:!0},i.createElement("form",{action:"",method:"GET",ref:e=>{this.formRef=e},"data-testid":"SearchForm"},i.createElement(c,null,i.createElement(m,{defaultValue:a,formName:"search",type:"search",name:"q",label:t(l.searchInputAriaLabel),hasAttachedButton:!0,hideButtonInMobile:!0,hideLabel:!0,buttonInputKind:"submit",buttonLabel:t(l.searchButtonLabel),placeholder:"Search",shouldUseUppercase:!1,LeadingIcon:({className:e})=>i.createElement("div",{className:e},i.createElement(d,null)),onClickHandler:e=>{e.stopPropagation(),e.preventDefault();const t=this.formRef[0].value;(t||o.get("q")&&!t)&&(e=>{o=new URLSearchParams(window.location.search),p(e),o.delete("q"),o.delete("page"),"channels/artificial-intelligence"===o.get("filter")&&o.delete("filter");let t=o.toString();t?t+="&":t="?",t+=e?`q=${e}`:"",t+=o.get("filter")?"":"&filter=channels/artificial-intelligence",window.location.search=t})(t)}}))))};p.propTypes={url:a.string},p.defaultProps={url:""},e.exports=p},85622:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(35719);e.exports=a(i,"SearchFilter")},29822:(e,t,o)=>{const a=o(51117).default,{calculateSpacing:i,minScreen:r,minMaxScreen:n,maxScreen:s}=o(79720),{BREAKPOINTS:l}=o(85326),d=o(24894),m=o(2638),c=o(48655),{GridItem:u}=o(14134),p=a(d).withConfig({displayName:"HomepageSearchInput"})`
  ${r(l.md)} {
    margin: ${i(1.25)} 0 0;
  }

  ${m} {
    appearance: none;
  }

  input {
    border-color: #fff;
    width: 100%;
  }

  button,
  button:hover,
  button:focus {
    border: 1px solid white;
  }
`,g=a(c.WithMargins).withConfig({displayName:"HomePageSearchFormGrid"})`
  > ${u}:first-child {
    grid-column: 1 / span 5;

    ${s(l.lg)} {
      grid-column: 1 / span 5;
    }
  }
  > ${u}:last-child {
    grid-column: 1 / span 4;

    ${n(l.md,l.xl)} {
      grid-column: 1 / span 5;
    }
  }
`;e.exports={HomepageSearchInput:p,HomePageSearchFormGrid:g}},83151:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{useState:n}=o(67294),{useIntl:s}=o(76186),l=o(27361),d=o(23279),{getLocationArray:m,getInputLocations:c}=o(31145),u=o(20578),p=o(86667),{asConfiguredComponent:g}=o(36380),{CategoryFilterFormWrapper:h,CategoryFilterDropdown:y,SearchableSummaryCollectionClickout:b,SearchableSummaryCollectionLoader:S,SearchableSummaryCollectionWrapper:C,SearchableSummaryCollectionSearchContainer:f}=o(94970),{BaseWrap:$}=o(74327),v=o(48655),w=o(16419).Z,k=o(83066),T=()=>r.createElement("span",{className:"category-filter__dropdown__icon"},r.createElement(k,null)),I=({handleOnSubmit:e,isGridLayout:t})=>{const{formatMessage:o}=s(),a=t?v.WithMargins:$,i=d(c,300);return r.createElement(h,{name:"search",type:"search"},r.createElement(a,null,r.createElement(y,{assistiveLabel:"",DropdownIcon:T,isClearable:!0,isAsyncSelect:!0,loadOptions:i,options:[],onInputChange:t=>{e(t)},isMenuOpen:!1,placeholderText:o(w.asyncDropdownPlaceholder)})))};I.propTypes={handleOnSubmit:i.func,isGridLayout:i.bool},I.defaultProps={isGridLayout:!0};const x=({className:e,clickoutPath:t,dangerousHed:o,searchSettings:i,shouldAppendReadMoreLinkForDek:d})=>{const[c,g]=n(!1),[h,y]=n([]),[$,v]=n(!0),[k,T]=n({}),{formatMessage:x}=s(),B=e=>{y(e),v(!1)},{locationName:E,locationHierarchy:D}=k,H=o||x(w.searchContainerHed),N=l(h,"venue.items",[]).length>=1,P=c&&!N&&!$;return r.createElement(C,{className:a("searchable-summary-collection-wrapper",e)},r.createElement(f,null,r.createElement("h2",null,H),r.createElement(I,{handleOnSubmit:e=>{e&&(v(!0),y([]),g(!0),m(e,i,B),T((e=>{const t=e.split("/");return{locationName:t.pop(-1),locationHierarchy:t.slice(1).join("/")}})(e.value)))}}),P&&r.createElement("span",null,x(w.noResultsMessage))),c&&r.createElement(r.Fragment,null,$&&r.createElement(S,null,r.createElement(u,null)),N&&r.createElement(r.Fragment,null,r.createElement(p.FourColumns,Object.assign({summaryItemVariation:"TextBelowImageLeftHasRuleWithDek",sectionTitleVariation:"WrappedComponent",shouldAppendReadMoreLinkForDek:d},h.venue,{items:h.venue.items.slice(0,4)})),r.createElement(b,{inputKind:"link",href:`${t}${E}?hierarchy=${D}`,label:x(w.clickoutButtonLabel,{location:E})}))))};x.propTypes={className:i.string,clickoutPath:i.string,dangerousHed:i.string,searchSettings:i.shape({apiEndpoint:i.string,contentType:i.string}),shouldAppendReadMoreLinkForDek:i.bool},x.defaultProps={searchSettings:{apiEndpoint:"venues",contentType:"hotel"},shouldAppendReadMoreLinkForDek:!1},x.displayName="SearchableSummaryCollection",e.exports=g(x,"SearchableSummaryCollection")},31145:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getLocationArray=t.getInputLocations=void 0;const{fetchWithTimeout:a}=o(84317);t.getInputLocations=(e,t)=>{(null==e?void 0:e.length)>2?a(`/api/locations/${e}`,{headers:{"Content-Type":"application/json"},method:"GET"},5e3).then((e=>e.json())).then((o=>{const a=o.locations.map((t=>Object.assign(Object.assign({},t),{inputValue:e})));return t(a)})).catch((()=>t([]))):t([])},t.getLocationArray=(e,t,o)=>{const{apiEndpoint:i,contentType:r}=t,n=`hierarchy=${e.value}&contentType=${r}`;a(`/api/${i}?${n}`,{headers:{"Content-Type":"application/json"},method:"GET"},5e3).then((e=>e.json())).then((e=>o(e))).catch((e=>(console.warn(`Fetching of Category Filter API '/api/venues' fails: ${e}`),o([]))))}},28265:(e,t,o)=>{e.exports=o(96215)},94970:(e,t,o)=>{const a=o(51117).default,{BREAKPOINTS:i}=o(85326),{applyGridSpacing:r}=o(62470),{calculateSpacing:n,minScreen:s,getColorStyles:l,getColorToken:d,getTypographyStyles:m}=o(79720),c=o(7279),u=o(80640),{GridItem:p}=o(14134),g=a.div.withConfig({displayName:"SearchableSummaryCollectionWrapper"})`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: ${n(2)};
  background-color: ${d("colors.discovery.body.light.background")};

  .summary-collection-grid--four-columns {
    ${s(i.md)} {
      grid-column: span 3;
    }
  }
`,h=a("div").withConfig({displayName:"SearchableSummaryCollectionLoader"})`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50px;
  }
`,y=a("div").withConfig({displayName:"SearchableSummaryCollectionSearchContainer"})`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  align-items: center;
  margin: ${n(2)} ${n(8)};
  ${r("padding")};

  h2 {
    ${m("typography.definitions.discovery.subhed-section-primary")}
    margin: ${n(2)} 0;
    text-align: center;
    color: ${l("colors.discovery.body.light.accreditation")};
  }

  ${p} {
    grid-column: span 12;
  }

  span {
    ${m("typography.definitions.discovery.description-core")}
    text-transform: capitalize;
    color: ${l("colors.discovery.body.light.accreditation")};
    justify-self: center;
  }
`,b=a(u.Searchable).withConfig({displayName:"CategoryFilterAsyncDropdown"})`
  grid-column: 2/9;
`,S=a("div").withConfig({displayName:"SearchWrapper"})`
  display: grid;
  grid-column-gap: ${n(2)};
  grid-template-columns: 30% 15%;
  justify-content: center;

  input {
    height: ${n(6)};
  }
`,C=a(c.Primary).withConfig({displayName:"SearchableSummaryCollectionClickout"})`
  grid-area: 3 / 1;
  margin: ${n(4)};

  ${s(i.lg)} {
    justify-self: center;
    max-width: 30%;
  }
`,f=a.form.withConfig({displayName:"CategoryFilterFormWrapper"})`
  .grid {
    align-items: center;
    justify-content: center;
  }

  ${p}:first-of-type {
    ${s(i.md)} {
      grid-column: 3/11;
    }
  }

  ${p} {
    grid-column: 1 / -1;

    ${s(i.md)} {
      grid-column: span 2;
    }
  }

  .category-filter__dropdown__icon {
    margin-top: ${n(.5)};
  }
`;e.exports={CategoryFilterFormWrapper:f,CategoryFilterDropdown:b,SearchableSummaryCollectionClickout:C,SearchableSummaryCollectionLoader:h,SearchableSummaryCollectionWrapper:g,SearchableSummaryCollectionSearchContainer:y,SearchWrapper:S}},16419:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({asyncDropdownPlaceholder:{id:"SearchableSummaryCollection.AsyncDropdownPlaceholder",defaultMessage:"Search by city or destination",description:"Placeholder for async dropdown"},searchContainerHed:{id:"SearchableSummaryCollection.SearchContainerHed",defaultMessage:"Where do you want to go?",description:"Hed for search container message"},submitButtonLabel:{id:"SearchableSummaryCollection.SubmitButtonLabel",defaultMessage:"Search",description:"Label for submit button"},noMatchesFoundLabel:{id:"SearchableSummaryCollection.NoMatchesFoundLabel",defaultMessage:"No matches found",description:"Label for dropdown when no matches are found"},noResultsMessage:{id:"SearchableSummaryCollection.NoResultsMessage",defaultMessage:"Sorry, there are no results for your search - please try another location",description:"Message to display when no results are found for location"},clickoutButtonLabel:{id:"SearchableSummaryCollection.ClickoutButtonLabel",defaultMessage:"View all {location} hotels",description:"Label for clickout button when matches are found"}})},96215:(e,t,o)=>{const a=o(83151);e.exports=a},36646:function(e,t,o){var a=this&&this.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o};const i=o(45697),r=o(67294),n=o(94184),{SmartComponentWrapper:s}=o(43846),{trackComponent:l}=o(40199),d=o(25267),{PresetProvider:m}=o(76191),{connector:c}=o(92078),u=e=>{var{id:t,className:o,themeExtensions:i={}}=e,c=a(e,["id","className","themeExtensions"]);return r.useEffect((()=>{l("SmartComponent")}),[]),r.createElement(s,{className:n("smart-component",o)},r.createElement(m,{id:t,themeExtensions:i},r.createElement(d,Object.assign({},c))))};u.propTypes={className:i.string,dangerousHed:i.string,id:i.string,themeExtensions:i.shape({componentStylePools:i.objectOf(i.objectOf(i.func))})},u.displayName="SmartComponent",e.exports=c(u,{keysToPluck:["bundle"]})},77343:(e,t,o)=>{e.exports=o(36646)},66686:(e,t,o)=>{const a=o(67294),i=o(45697),{SmartItem:r,SmartContainerWrapper:n,SmartContainerHeader:s,SmartContainerHeaderImage:l,SmartContainerHeaderHed:d,SmartContainerHeaderDek:m,SmartContainerContent:c,SmartContainerFooter:u,SmartContainerAd:p}=o(54752),g=o(98288),h=o(92607),y=o(15143),{useCarouselDots:b}=o(97641),{useTrackingAnalytics:S}=o(15382),C=({bundle:e,dangerousDek:t,dangerousHed:o,header:i,image:C,items:f,itemType:$,layout:v,styleSettings:w,itemLayouts:k,itemStyleSettings:T,index:I,template:x,sectionName:B,showHeader:E})=>{const{imageSize:D,imagePosition:H,isContributor:N,softRule:P}=i||{},M=`smart-container__content-${I}`,{clickHandler:L}=S({selector:`.${M}`,index:I,template:x,sectionName:B,containers:e.containers}),{handleScroll:F,carouselDots:A,selectedDot:O,ref:_}=b({itemsLength:f.length,listen:v.includes("carousel")}),R="string"==typeof $?h[$]:$;return a.createElement(n,{layout:v,styleSettings:w,itemLength:f.length,className:"smart-container__wrapper",onClick:L},E&&a.createElement(s,{className:"smart-container__header",softRule:P},C&&a.createElement(l,Object.assign({className:"smart-container__header__image",as:g,isLazy:!0},C,{imageAttributes:{"aria-hidden":!0},imageSize:D,imagePosition:H,isContributor:N})),a.createElement(d,{className:"smart-container__header__hed",dangerouslySetInnerHTML:{__html:o}}),t&&a.createElement(m,{className:"smart-container__header__dek",dangerouslySetInnerHTML:{__html:t}})),a.createElement(c,{className:M,onScroll:F,ref:_},f.map(((e,t)=>{var o,i;const n=null!==(o=k[t])&&void 0!==o?o:k.default,s=null!==(i=T[t])&&void 0!==i?i:T.default;return a.createElement(r,Object.assign({as:R,className:"smart-item",key:t},e,{layout:n,styleSettings:s}))})),"river"===v[2]&&a.createElement(p,{className:"smart-container__ad"},a.createElement("h3",null,"It is a ad section"),a.createElement("img",{src:f[0].image.sources.sm.url,alt:"ad"}))),a.createElement(u,{className:"smart-container__footer",as:y,dotLength:A,selectedDotIndex:O,onDotClick:()=>null}))};C.propTypes={bundle:i.shape({containers:i.array}).isRequired,dangerousDek:i.string,dangerousHed:i.string,header:i.shape({imageSize:i.oneOf(["icon","banner"]),imagePosition:i.oneOf(["above","below"]),isContributor:i.bool,softRule:i.bool}),image:i.shape(g.propTypes),index:i.number.isRequired,itemLayouts:i.objectOf(i.oneOfType([i.arrayOf(i.oneOf(["dense","side-by-side","stack"])),i.arrayOf(i.oneOf(["overlay","side-by-side","stack"]))])),items:i.arrayOf(i.object).isRequired,itemStyleSettings:i.objectOf(i.arrayOf(i.shape({inset:i.bool,textAlign:i.oneOf(["start","center","end"]),image:i.shape({inset:i.bool,showBackgroundColor:i.bool,showOutline:i.bool,shape:i.oneOf(["default","circle","curved"])})}))),itemType:i.oneOfType([i.string,i.elementType]),layout:i.arrayOf(i.oneOf(["grid","river","carousel"])),sectionName:i.string.isRequired,showHeader:i.bool,styleSettings:i.arrayOf(i.shape({fullBleed:i.bool})),template:i.string.isRequired},C.defaultProps={itemLayouts:{},itemStyleSettings:{default:[]},itemType:"StoryUnit",layout:["river","river","grid"],showHeader:!0,styleSettings:[]},C.displayName="SmartContainer",e.exports=C},67335:e=>{e.exports={calculateSpan:function(e){switch(e){case 1:return 12;case 2:return 6;default:return e%3==0&&e<=9?4:3}}}},25267:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=a(o(66686),"SmartContainer");e.exports=i},54752:(e,t,o)=>{const{default:a}=o(51117),{BaseWrap:i}=o(74327),{injectStyles:r}=o(99315),{BREAKPOINTS:n}=o(85326),{applyGridSpacing:s,cssVariablesGrid:l}=o(62470),{SmartContainerHeader:d,SmartContainerHeaderImage:m,SmartContainerHeaderHed:c,SmartContainerHeaderDek:u,SmartContainerContent:p,SmartContainerFooter:g,SmartContainerAd:h,SmartItem:y}=o(59357),b=o(89584),S=a(i).withConfig({displayName:"SmartContainerWrapper"})`
  margin: 0 auto;
  ${l()};
  ${s("padding")}
  width: 100%;
  max-width: ${n.xxl};
  ${({layout:e,styleSettings:t})=>r("layout",{layout:e,styleSettings:t},b)}

  .small {
    font-variant: small-caps;
    text-transform: lowercase;
    font-style: normal;
  }

  h3 {
    .small {
      font-synthesis-small-caps: none;
    }
  }
`;e.exports={SmartContainerWrapper:S,SmartContainerHeader:d,SmartContainerHeaderImage:m,SmartContainerHeaderHed:c,SmartContainerHeaderDek:u,SmartContainerContent:p,SmartContainerFooter:g,SmartContainerAd:h,SmartItem:y}},59357:(e,t,o)=>{const{default:a,css:i}=o(51117),{getColorToken:r,getDecoration:n,getColorStyles:s,calculateSpacing:l,minScreen:d,minMaxScreen:m,maxScreen:c}=o(79720),{BaseWrap:u,BaseText:p}=o(74327),{minThresholds:g,maxThresholds:h}=o(28657),{ResponsiveImageContainer:y}=o(7230),b=i`
  max-width: 48px;
  height: 48px;
`,S=i`
  max-width: 300px;
  height: auto;
`,C=a(u).withConfig({displayName:"SmartContainerHeader"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${l(1)};
  border-top: ${({theme:e})=>n(e,"dividerWidth")} solid;
  padding-top: ${l(2)};
  padding-bottom: ${l(6)};
  ${c(`${h.md}px`)} {
    padding-bottom: ${l(4)};
  }
  ${d(`${g.lg}px`)} {
    gap: ${l(2)};
  }

  ${({softRule:e,theme:t})=>s(t,"border-top-color",e?"colors.discovery.body.white.border":"colors.discovery.body.white.divider")};
`,f=a.div.withConfig({displayName:"SmartContainerHeaderImage"})`
  ${({imageSize:e})=>i`
    img {
      ${"icon"===e?b:S}
    }
  `}

  ${({imagePosition:e})=>"below"===e?i`
          order: 3;
          padding-bottom: 0;
        `:i`
          &:not(picture) {
            ${m(0,`${h.md}px`)} {
              padding-bottom: ${l(1)};
            }
          }
        `}

  ${({isContributor:e,theme:t})=>e?i`
          ${y} {
            border-radius: 50%;
            background: ${r(t,"colors.discovery.lead.secondary.background")};
          }
        `:""};
`,$=a(p).withConfig({displayName:"SmartContainerHeaderHed"})``;$.defaultProps={as:"h2",colorToken:"colors.discovery.body.white.heading",textAlign:"center",typeIdentity:"typography.definitions.discovery.subhed-section-primary"};const v=a(p).withConfig({displayName:"SmartContainerHeaderDek"})``;v.defaultProps={colorToken:"colors.discovery.body.white.heading",textAlign:"center",typeIdentity:"typography.definitions.discovery.description-page"};const w=a(u).withConfig({displayName:"SmartContainerContent"})``,k=a(u).withConfig({displayName:"SmartContainerFooter"})`
  display: none;
`,T=a(u).withConfig({displayName:"SmartContainerAd"})`
  display: none;
`,I=a.div.withConfig({displayName:"SmartItem"})``;e.exports={SmartContainerHeader:C,SmartContainerHeaderImage:f,SmartContainerHeaderHed:$,SmartContainerHeaderDek:v,SmartContainerContent:w,SmartContainerFooter:k,SmartContainerAd:T,SmartItem:I}},89584:(e,t,o)=>{const{css:a}=o(51117),{minScreen:i,minMaxScreen:r,calculateSpacing:n,getColorToken:s,maxScreen:l}=o(79720),{minThresholds:d,maxThresholds:m}=o(28657),{SmartContainerContent:c,SmartContainerFooter:u,SmartContainerAd:p,SmartItem:g}=o(59357),{calculateSpan:h}=o(67335),{SmartItemAssetContainer:y}=o(51901),{applyGridSpacing:b}=o(62470),S=a`
  ${y}:not(picture) {
    overflow: visible;

    &::after {
      display: block;
      position: absolute;
      top: 0;
      right: calc(-1 * var(--grid-gap) / 2);
      background-color: ${s("colors.discovery.body.white.border")};
      width: 1px;
      height: 100%;
      content: '';
    }
  }
`,C=({styleSettings:e})=>a`
  ${e.fullBleed&&a`
    ${b("padding",!0)};
    max-width: none;
  `}
`,f=(e,t={})=>a`
  --smart-container-layout: 'grid';
  ${C({styleSettings:t})}
  ${c} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    ${i(`${d.xl}px`)} {
      grid-template-columns: repeat(12, 1fr);
    }
    gap: var(--grid-gap);
  }
  ${g} {
    width: auto;
    ${({itemLength:e})=>{const t=h(e);let o;return o=4===t?"3n":3===t?"4n":`${e}n`,a`
        grid-column: span ${t};
        ${i(`${d.xl}px`)} {
          &:not(:nth-child(${o}), :last-child) {
            ${S}
          }
        }
      `}}
  }
`,$=(e,t={})=>a`
  --smart-container-layout: 'carousel';
  --grid-gap: ${n(4)};

  ${C({styleSettings:t})}
  ${c} {
    display: flex;
    ${l(`${m.xxl}px`)} {
      margin-right: calc(-1 * var(--grid-margin));
      margin-left: calc(-1 * var(--grid-margin));
      padding-right: var(--grid-margin);
      padding-left: var(--grid-margin);
    }
    padding-bottom: ${n(3)};
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: var(--grid-gap);
  }

  ${g} {
    flex-shrink: 0;
    align-self: stretch;
    scroll-snap-align: center;

    &:not(:last-child) {
      ${S}
    }
  }

  ${u} {
    display: flex;
  }

  ${r(0,`${m.md}px`)} {
    ${g} {
      width: 70%;
    }
  }
  ${r(`${d.lg}px`,`${m.lg}px`)} {
    ${g} {
      width: 38%;
    }
  }
  ${i(`${d.xl}px`)} {
    ${g} {
      width: calc(24% - ${n(4)});
    }
  }
`,v={grid:f,carousel:(e,t)=>a`
    ${({itemLength:e})=>e>4?$(0,t):a`
        ${r(0,`${m.lg}px`)} {
          ${$(0,t)}
        }
        ${i(`${d.xl}px`)} {
          ${f(0,t)}
        }
      `}
  `,river:(e,t={})=>a`
  --smart-container-layout: 'river';
  --margin: ${n(1)};
  --padding: ${n(2)};
  ${C({styleSettings:t})}
  ${c} {
    ${g} {
      border-bottom: 1px solid
        ${s("colors.discovery.body.white.border")};
      padding: var(--padding) 0;

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  }

  ${i(`${d.xl}px`)} {
    ${c} {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      ${p} {
        display: inline-block;
        grid-column: 9/13;
        grid-row: 1 / span 4;
        margin: var(--margin);
        padding: var(--padding);
      }
      ${g} {
        grid-column: span 8;
      }
    }
  }
`};e.exports=v},97641:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useCarouselDots=void 0;const a=o(67294),i=()=>null;t.useCarouselDots=({itemsLength:e,listen:t=!1})=>{const[o,r]=a.useState(1),[n,s]=a.useState(0);return{ref:function(e,{observe:t}){const o=a.useRef(null);return a.useEffect((()=>{const a=null==o?void 0:o.current;if(!a||!t)return i;const r=new ResizeObserver((t=>{e(a,t[0])}));return r.observe(a),()=>r.disconnect()}),[t,e,o]),o}(((t,o)=>{const{scrollWidth:a,clientWidth:i}=o.target,n=a/e,s=Math.round(i/n),l=Math.round(e/s);r(l)}),{observe:t}),handleScroll:t?e=>{const{scrollWidth:t,scrollLeft:a}=e.target,i=t/o,r=Math.round(a/i);s(r)}:i,selectedDot:n,carouselDots:o}}},15382:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTrackingAnalytics=void 0;const a=o(67294),{emitGoogleTrackingEvent:i,emitUniqueGoogleTrackingEvent:r}=o(48349),{useViewportObserver:n}=o(47041),{PresetContext:s}=o(76191);function l(e,t){const o=e.filter((e=>"verso-mid-content-ad"!==e.template));return`${o.indexOf(e[t])+1}/${o.length}`}t.useTrackingAnalytics=({selector:e,index:t,template:o,sectionName:d,containers:m})=>{const c=a.useContext(s),u=a.useMemo((()=>({preset_type:c.presetName||"none",package_type:o,section_name:d,package_position:l(m,t)})),[m,c.presetName,d,t,o]);return n(e,void 0,((e,t)=>{e&&(r("package-impression",u),t())})),{clickHandler:a.useCallback((e=>{const{target:t}=e,o=t.closest(".smart-item");let a;if(t.closest(".smart-item--tout")&&(a=t.getAttribute("href")),o){const e=o.querySelector(".smart-item__hed-link");i("package-interaction",Object.assign(Object.assign({},u),{url:a||(null==e?void 0:e.href),title:null==e?void 0:e.innerText}))}}),[u])}}},53317:function(e,t,o){var a=this&&this.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o};const i=o(67294),r=o(45697),{SmartItemAssetContainer:n}=o(51901),s=o(99956);function l(e){var{styleSettings:t,className:o,isContributor:r,insetType:l,isLazy:d,signalType:m,actionBarConfig:c}=e,u=a(e,["styleSettings","className","isContributor","insetType","isLazy","signalType","actionBarConfig"]);return i.createElement(n,{className:o,styleSettings:t,isContributor:r,insetType:l},i.createElement(s,Object.assign({shouldHoldImageSpace:!0,isLazy:d,signalType:m,actionBarConfig:c},u)))}l.propTypes=Object.assign(Object.assign({},s.propTypes),{actionBarConfig:r.object,className:r.string,insetType:r.string,isContributor:r.bool,isLazy:r.bool,signalType:r.string,styleSettings:r.arrayOf(r.shape({inset:r.bool,showBackgroundColor:r.bool,showOutline:r.bool,shape:r.oneOf(["default","circle","curved"])}))}),l.defaultProps={isLazy:!0},l.displayName="SmartItemAsset",e.exports=l},12540:(e,t,o)=>{const a=o(53317);e.exports=a},88574:(e,t,o)=>{const{css:a}=o(51117),{minThresholds:i}=o(28657),{calculateSpacing:r,minScreen:n}=o(79720),s=r(26),l=r(14),d=r(8);function m(e){const[t,o]=e.split(":");return Number(t)/Number(o)<=1?l:s}e.exports={getGridColumns:function({image:e,isContributor:t}){if(t)return a`
      grid-template-columns: auto ${d};
    `;const o=function(e){var t,o,a,i;return e?[null===(o=null===(t=e.segmentedSources)||void 0===t?void 0:t.sm)||void 0===o?void 0:o[0].aspectRatio,null===(i=null===(a=e.segmentedSources)||void 0===a?void 0:a.lg)||void 0===i?void 0:i[0].aspectRatio].filter(Boolean):[]}(e);if(!o.length)return a`
      grid-template-columns: auto max-content;
    `;const[r,s]=o.map(m);return a`
    grid-template-columns: auto ${r};
    ${n(`${i.lg}px`)} {
      grid-template-columns: auto ${s};
    }
  `},LANDSCAPE_COLUMN_WIDTH:s,PORTRAIT_COLUMN_WIDTH:l,CONTRIBUTOR_COLUMN_WIDTH:d}},57712:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(36895),{CardUnitWrapper:n,CardUnitHeader:s,SmartItemHed:l,SmartItemDek:d,SmartItemCTA:m}=o(35018),c=o(12540),u=o(99956),p=({layout:e,dangerousDek:t,dangerousHed:o,image:i,rubric:r,url:u,styleSettings:p,cardColor:g})=>{const h=p.map((e=>e.image));return a.createElement(n,{className:"test",layout:e,styleSettings:p,cardColor:g,onClick:()=>{window.location=u}},a.createElement(s,null,a.createElement(l,{className:"smart-item__hed",dangerouslySetInnerHTML:{__html:o}}),a.createElement(d,{className:"smart-item__dek",dangerouslySetInnerHTML:{__html:t}})),a.createElement(c,Object.assign({className:"smart-item__asset-container"},i,{styleSettings:h})),r&&a.createElement(m,{className:"smart-item__CTA",href:u,dangerouslySetInnerHTML:{__html:null==r?void 0:r.name}}))};p.propTypes={cardColor:i.string,dangerousDek:i.string,dangerousHed:i.string.isRequired,image:i.shape(u.propTypes),layout:i.arrayOf(i.oneOf(["side-by-side","stack"])),rubric:i.shape(r.propTypes),styleSettings:i.arrayOf(i.shape({})),url:i.string.isRequired},p.defaultProps={cardColor:"grey",layout:["side-by-side","side-by-side","stack"],styleSettings:[]},p.displayName="SmartItem",e.exports=p},51111:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(57712);e.exports=a(i,"SmartItem")},35018:(e,t,o)=>{const{default:a}=o(51117),{BaseWrap:i}=o(74327),{injectStyles:r}=o(99315),{SmartItemHed:n,SmartItemDek:s,SmartItemCTA:l}=o(90191),{CardUnitHeader:d}=o(72898),{calculateSpacing:m}=o(79720),c=o(98961),u={blue:"#84C9FF",pink:"#FFBACB",yellow:"#FFEFB9",grey:"#F6F6F6"},p=a(i).withConfig({displayName:"CardUnitWrapper"})`
  border-radius: ${m(2)};
  cursor: pointer;
  padding: ${m(3)};

  ${({cardColor:e})=>e&&`background: ${u[e]};`}

  ${({layout:e,styleSettings:t})=>r("layout",{layout:e,styleSettings:t},c)};
`;e.exports={CardUnitWrapper:p,CardUnitHeader:d,SmartItemHed:n,SmartItemDek:s,SmartItemCTA:l}},72898:(e,t,o)=>{const{default:a}=o(51117),i=a.div.withConfig({displayName:"CardUnitHeader"})``;e.exports={CardUnitHeader:i}},98961:(e,t,o)=>{const{css:a}=o(51117),{SmartItemAssetContainer:i}=o(51901),{SmartItemCTA:r,SmartItemDek:n}=o(90191),{CardUnitHeader:s}=o(72898),{calculateSpacing:l,minMaxScreen:d,maxScreen:m,minScreen:c}=o(79720),{minThresholds:u,maxThresholds:p}=o(28657),g={"side-by-side":e=>a`
    --smart-item-layout: 'side-by-side';
    display: grid;
    grid-column-gap: ${l(2)};
    grid-template-rows: auto;
    margin-bottom: ${l(2)};
    width: 100%;
    height: min-content;
    ${m(`${u.lg}px`)} {
      padding: ${l(2)};
    }
    ${d(`${u.lg}px`,`${p.lg}px`)} {
      padding-right: ${l(2)};
      padding-left: ${l(2)};
      min-height: ${l(12)};
    }

    ${s} {
      grid-column: 1;
      ${n} {
        padding-top: ${l(1)};
      }
    }

    ${i} {
      grid-column: 2;
      grid-row: 1 / final;
      margin-top: 0;
      margin-left: auto;
      ${m(`${u.lg}px`)} {
        width: ${l(14)};
        max-height: ${l(10)};
      }
      ${d(`${u.lg}px`,`${p.lg}px`)} {
        width: ${l(20)};
        max-height: ${l(15)};
      }
    }
    ${r} {
      grid-column: 1;
      margin-top: ${l(2)};
      ${c(`${u.lg}px`)} {
        margin-top: auto;
      }
    }
  `,stack:()=>a`
    --smart-item-layout: 'stack';
    display: flex;
    grid-column: span 3;
    flex-direction: column;
    padding: ${l(2)};

    & > * {
      text-align: center;
    }

    ${i} {
      margin-top: auto;
      max-height: ${l(22.5)};
    }
    ${r} {
      margin-top: ${l(3.75)};
    }
    ${n} {
      margin-top: ${l(1)};
    }
    ${c(`${u.xl}px`)} {
      min-height: ${l(40)};
      ${i} {
        margin-bottom: ${l(2)};
        max-height: ${l(12)};
      }
    }
    ${c(`${u.xxl}px`)} {
      aspect-ratio: 3 / 4;
      padding: ${l(3)};
      ${i} {
        margin-bottom: auto;
        max-height: ${l(16)};
      }
    }
    ${c(`${u.xxxl}px`)} {
      ${i} {
        max-height: ${l(20)};
      }
    }
  `};e.exports=g},47845:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(94184),n=o(36895),s=o(34042),{FocusUnitWrapper:l,FocusUnitActionBarWrapper:d,TextContainer:m,SmartItemHed:c,SmartItemHedLink:u,SmartItemDek:p,SmartItemRubric:g,SmartItemBylines:h,SmartItemPublishedDate:y}=o(96143),b=o(12540),S=o(99956),{PresetContext:C}=o(76191),{AdditionalContentWrapper:f}=o(83797),$=o(59185),{getVariationNames:v}=o(95545),w={audio:{defaultLabel:"audioPrimaryLabel",defaultIcon:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2C6.7 2 2 6.7 2 12.5V17.5C2 20.5 4.5 23 7.5 23H8V21.4C8.9 21.2 9.5 20.4 9.5 19.5V15.5C9.5 14.6 8.9 13.8 8 13.6V12H7.5C5.6 12 4 12.9 3 14.3V12.5C3 7.3 7.3 3 12.5 3C17.7 3 22 7.3 22 12.5V14.3C21 12.9 19.4 12 17.5 12H17V13.6C16.1 13.8 15.5 14.6 15.5 15.5V19.5C15.5 20.4 16.1 21.2 17 21.4V23H17.5C20.5 23 23 20.5 23 17.5V12.5C23 6.7 18.3 2 12.5 2ZM7 13V22C4.8 21.8 3 19.8 3 17.5C3 15.2 4.8 13.3 7 13ZM18 22V13C20.2 13.2 22 15.2 22 17.5C22 19.8 20.2 21.7 18 22Z" fill="black"/></svg>'}},k=({additionalContent:e,className:t,layout:o,contributors:i,dangerousDek:S,dangerousHed:v,date:k,image:T,rubric:I,insetType:x,url:B,styleSettings:E,maxContributors:D,maxContributorsNames:H,textPosition:N,rubricVariation:P,shouldLinkBylines:M,signalType:L})=>{const F=E.map((e=>e.image)),{presetCategory:A}=a.useContext(C),O=n[P];return a.createElement(l,{layout:o,styleSettings:E,className:r("smart-item",t),image:T,presetCategory:A,textPosition:N,onClick:()=>{window.location=B},additionalContent:e,contributors:i,date:k,signalType:L},a.createElement(m,null,I&&a.createElement(g,Object.assign({className:"smart-item__rubric",as:O},I)),a.createElement(u,{className:"smart-item__hed-link",href:B},a.createElement(c,{className:"smart-item__hed",dangerouslySetInnerHTML:{__html:v}})),S&&a.createElement(p,{className:"smart-item__dek",dangerouslySetInnerHTML:{__html:S}}),i&&a.createElement(h,{className:"smart-item__contributor",as:s,contributors:i,maxContributors:D,maxContributorsNames:H,shouldLink:M}),k&&a.createElement(y,{className:"smart-item__published-date"},k),L&&a.createElement(d,null,a.createElement($,{actionButtons:[L],actionBarConfig:w,isInteractive:!1}))),e&&a.createElement(f,null,e),T&&a.createElement(b,Object.assign({className:"smart-item__asset-container"},T,{styleSettings:F,insetType:x,shouldYieldControlOfVideoPlayPause:!0})))};k.propTypes={additionalContent:i.element,className:i.string,contributors:i.shape(s.propTypes.contributors),dangerousDek:i.string,dangerousHed:i.string.isRequired,date:i.string,image:i.shape(S.propTypes),insetType:i.oneOf(["focus","default"]),layout:i.arrayOf(i.oneOf(["stack","side-by-side","overlay"])),maxContributors:i.number,maxContributorsNames:i.number,rubric:i.shape(n.propTypes),rubricVariation:i.oneOf(v(n)),shouldLinkBylines:i.bool,signalType:i.string,styleSettings:i.arrayOf(i.shape({image:i.shape({inset:i.bool})})),textPosition:i.oneOf(["start","center","end"]),url:i.string.isRequired},k.defaultProps={additionalContent:null,insetType:"focus",layout:["stack","side-by-side","side-by-side"],rubricVariation:"ItemAsText",shouldLinkBylines:!1,styleSettings:[]},k.displayName="FocusUnit",e.exports=k},47873:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(47845);e.exports=a(i,"SmartItem")},31776:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(94184),n=o(36895),s=o(34042),{StoryUnitWrapper:l,SmartItemHed:d,SmartItemHedLink:m,SmartItemDek:c,SmartItemRubric:u,SmartItemBylines:p,SmartItemPublishedDate:g}=o(58341),h=o(12540),y=o(99956),{getVariationNames:b}=o(95545),S={audio:{defaultLabel:"audioPrimaryLabel",defaultIcon:'<svg width="14" height="14" viewBox="0 0 21.5 21.5" xmlns="http://www.w3.org/2000/svg"><title>Listen</title><defs><style>.cls-1{fill:#231f20;stroke:#231f20;stroke-miterlimit:10;stroke-width:0.5px;}</style></defs><g id="icons"><path class="cls-1" d="M39.75,29.5A10.51,10.51,0,0,0,29.25,40v5a5.51,5.51,0,0,0,5.5,5.5h.5V48.93A2,2,0,0,0,36.75,47V43a2,2,0,0,0-1.5-1.93V39.5h-.5a5.49,5.49,0,0,0-4.5,2.35V40a9.5,9.5,0,0,1,19,0v1.85a5.49,5.49,0,0,0-4.5-2.35h-.5v1.57A2,2,0,0,0,42.75,43v4a2,2,0,0,0,1.5,1.93V50.5h.5a5.51,5.51,0,0,0,5.5-5.5V40A10.51,10.51,0,0,0,39.75,29.5Zm-5.5,11v8.94a4.5,4.5,0,0,1,0-8.94Zm11,8.94V40.53a4.5,4.5,0,0,1,0,8.94Z" transform="translate(-29 -29.25)"/></g></svg>'}},C=({className:e,layout:t,contributors:o,dangerousDek:i,dangerousHed:y,date:b,image:C,rubric:f,url:$,styleSettings:v,bylinesPosition:w,isContributor:k,maxContributors:T,maxContributorsNames:I,rubricVariation:x,shouldLinkBylines:B,signalType:E})=>{const D=v.map((e=>e.image)),H=function({rubric:e,image:t,dangerousDek:o,contributors:a,bylinesPosition:i,date:r}){let n=0;const s=[];return(null==e?void 0:e.name)&&(s.push("rubric"),n++),t&&o?s.push("hed","image","dek"):t&&!o?(n++,s.push("image","hed")):s.push("hed"),a&&"top"===i?s.splice(n,0,"bylines"):a&&s.push("bylines"),r&&s.push("date"),s}({rubric:f,image:C,dangerousDek:i,contributors:o,bylinesPosition:w,date:b}),N=n[x];return a.createElement(l,{layout:t,hasRubric:Boolean(null==f?void 0:f.name),hasDek:Boolean(i),hasBylines:Boolean(o),bylinesPosition:w,isContributor:k,styleSettings:v,className:r("smart-item",e),onClick:()=>{window.location=$},image:C},H.map((e=>{switch(e){case"hed":return a.createElement(m,{className:"smart-item__hed-link",href:$,key:"hedWrapper"},a.createElement(d,{className:"smart-item__hed",dangerouslySetInnerHTML:{__html:y}}));case"dek":return a.createElement(c,{key:"dek",className:"smart-item__dek",dangerouslySetInnerHTML:{__html:i}});case"rubric":return a.createElement(u,Object.assign({key:"rubric",className:"smart-item__rubric",as:N},f));case"image":return a.createElement(h,Object.assign({key:"asset",className:"smart-item__asset-container"},C,{styleSettings:D,isContributor:k,shouldYieldControlOfVideoPlayPause:!0,signalType:E,actionBarConfig:S}));case"bylines":return a.createElement(p,{key:"bylines",className:"smart-item__contributor",as:s,contributors:o,maxContributors:T,maxContributorsNames:I,bylinesPosition:w,shouldLink:B});case"date":return a.createElement(g,{key:"date",className:"smart-item__published-date"},b);default:return null}})))};C.propTypes={bylinesPosition:i.oneOf(["top","bottom"]),className:i.string,contributors:i.shape(s.propTypes.contributors),dangerousDek:i.string,dangerousHed:i.string.isRequired,date:i.string,image:i.shape(y.propTypes),isContributor:i.bool,layout:i.arrayOf(i.oneOf(["dense","side-by-side","stack"])),maxContributors:i.number,maxContributorsNames:i.number,rubric:i.shape(n.propTypes),rubricVariation:i.oneOf(b(n)),shouldLinkBylines:i.bool,signalType:i.string,styleSettings:i.arrayOf(i.shape({inset:i.bool,textAlign:i.oneOf(["start","center","end"]),image:i.shape({inset:i.bool,showOutline:i.bool})})),url:i.string.isRequired},C.defaultProps={isContributor:!1,layout:["dense","side-by-side","stack"],rubricVariation:"ItemAsText",shouldLinkBylines:!1,styleSettings:[]},C.displayName="SmartItem",e.exports=C},57086:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(31776);e.exports=a(i,"SmartItem")},58341:(e,t,o)=>{const{default:a,css:i}=o(51117),{BaseWrap:r}=o(74327),{injectStyles:n}=o(99315),{SmartItemBylines:s,SmartItemHed:l,SmartItemHedLink:d,SmartItemDek:m,SmartItemRubric:c,SmartItemPublishedDate:u}=o(90191),{SmartItemAssetContainer:p}=o(51901),g=o(67751),{minScreen:h,calculateSpacing:y}=o(79720),{minThresholds:b}=o(28657),{BylinePreamble:S}=o(72369),{ResponsiveImagePicture:C}=o(7230),f=i`
  --smart-item-inset: 0;
  --smart-item-asset-h-inset: 0;
  --smart-item-asset-v-inset: 0;

  ${h(`${b.lg}px`)} {
    --smart-item-asset-h-inset: 0;
    --smart-item-inset: ${y(4)};
  }
`,$=a(r).withConfig({displayName:"SmartItemWrapper"})`
  ${f}
  cursor: pointer;
  text-decoration: none;
  ${({bylinesPosition:e})=>"top"===e&&i`
      order: -1;
      ${S} {
        display: none;
      }
    `}
  ${({layout:e,styleSettings:t})=>n("layout",{layout:e,styleSettings:t},g)}

  ${p} {
    ${C} {
      ${h(`${b.lg}px`)} {
        width: auto;
      }
    }
  }
`;$.defaultProps={as:"div"},e.exports={StoryUnitWrapper:$,SmartItemBylines:s,SmartItemHed:l,SmartItemHedLink:d,SmartItemDek:m,SmartItemRubric:c,SmartItemPublishedDate:u}},67751:(e,t,o)=>{const{css:a}=o(51117),{SmartItemHedLink:i,SmartItemDek:r,SmartItemRubric:n,SmartItemBylines:s,SmartItemPublishedDate:l}=o(90191),{calculateSpacing:d}=o(79720),{SmartItemAssetContainer:m}=o(51901),{iconDimensions:c,denseDimensions:u}=o(91657),{getGridColumns:p}=o(88574),g={"side-by-side":(e,t={})=>a`
    --smart-item-layout: 'side-by-side';
    display: grid;
    grid-column-gap: ${d(2)};
    ${p};
    grid-template-rows: auto;
    width: 100%;
    height: min-content;
    gap: ${d(1)};

    ${n}, ${i}, ${r}, ${s} ,${l} {
      grid-column: 1;
    }

    ${m} {
      --aspect-ratio-box-max-height: ${d(19.5)};
      grid-column: 2;
      grid-row: 1/6;
      margin-top: 0;
      max-height: var(--aspect-ratio-box-max-height);

      .responsive-asset {
        position: relative;
      }
    }

    ${t.textAlign&&a`
      text-align: ${t.textAlign};
    `}

    ${t.inset&&a`
      padding: var(--smart-item-inset);
    `}
  `,dense:()=>a`
    --smart-item-layout: 'dense';
    display: block;
    ${n} {
      display: block;
    }

    & > *:not(:first-child) {
      margin-top: ${d(.5)};
    }

    ${m} {
      float: right;

      margin-bottom: ${d(1)};
      margin-left: ${d(2)};
      ${({hasDek:e})=>e&&a`
          margin-top: ${d(1)};
        `}

      ${({isContributor:e})=>a`
          ${e?c:u}
        `}
      &+${s} {
        margin-top: 0;
      }
    }

    &::after {
      display: table;
      clear: both;
      content: '';
    }
  `,stack:(e,t={})=>{var o;return a`
    --smart-item-layout: 'stack';
    gap: ${d(1)};

    ${t.inset&&a`
      & > * {
        padding-right: var(--smart-item-inset);
        padding-left: var(--smart-item-inset);
      }
    `}
    ${t.textAlign&&a`
      text-align: ${t.textAlign};
    `}

    display: flex;
    flex-direction: column;
    ${m} {
      ${(null===(o=t.image)||void 0===o?void 0:o.inset)&&a`
        --aspect-ratio-box-max-height: ${d(33.375)};
        max-height: var(--aspect-ratio-box-max-height);
      `}
      order: -2;
      margin-bottom: ${d(1)};

      .responsive-asset {
        display: block;
        position: relative;
        margin: 0 auto;
      }
    }

    ${({isContributor:e})=>e&&a`
        position: relative;
        ${m} {
          position: unset;
        }
      `}
  `}};e.exports=g},92607:(e,t,o)=>{const a=o(57086),i=o(47873),r=o(51111);e.exports={StoryUnit:a,FocusUnit:i,CardUnit:r}},43846:(e,t,o)=>{const a=o(51117).default.div.withConfig({displayName:"SmartComponentWrapper"})``;e.exports={SmartComponentWrapper:a}},93984:(e,t,o)=>{const a=o(67294),i=o(45697),{useIntl:r}=o(76186),n=o(70420).Z,{SelectedStoriesList:s,SelectedStoriesSectionTitle:l,SelectedStoriesGrid:d}=o(5418),m=o(57028),c=({items:e,sectionTitleVariation:t,selectedStoriesHeadline:o,selectedStoriesImageWidth:i,shouldUseDekForselectedStoriesHeadline:c,summaryItemVariation:u,shouldHideSelectedStoriesHeadline:p,shouldHideDangerousDek:g,trackingNamespace:h,isSpecialTheme:y})=>{const b=r();return e.length?a.createElement(d,{selectedStoriesImageWidth:i},!p&&a.createElement(l,{as:m[t],className:"SelectedStoriesSectionTitle",dangerousHed:c?o:b.formatMessage(n.selectedStoriesHeading),hasDividerBelow:!0}),a.createElement(s,{items:e,shouldHideFinalBorder:!0,shouldHideSponsoredAd:!0,hasMarginSpacing:!0,hideRubricItemSummary:!0,hasUnderlineHed:!1,shouldHideBylines:!0,shouldHideDangerousDek:g,summaryItemVariation:u,trackingNamespace:h,shouldEnableBundleComponentAnalytics:!0,isSpecial:y})):null};c.propTypes={isSpecialTheme:i.bool,items:i.arrayOf(i.shape({categories:i.shape({tags:i.array}),contributors:i.shape({author:i.shape({items:i.arrayOf(i.shape({dangerousBio:i.string,dangerousTitle:i.string,name:i.string,socialMedia:i.array,url:i.string}))})}),dangerousDek:i.string,dangerousHed:i.string,image:i.object,url:i.string})).isRequired,sectionTitleVariation:i.string,selectedStoriesHeadline:i.string,selectedStoriesImageWidth:i.number,shouldHideDangerousDek:i.bool,shouldHideSelectedStoriesHeadline:i.bool,shouldUseDekForselectedStoriesHeadline:i.bool,summaryItemVariation:i.string,trackingNamespace:i.string.isRequired},c.defaultProps={isSpecialTheme:!1,sectionTitleVariation:"TextCenter",shouldHideDangerousDek:!1,shouldHideSelectedStoriesHeadline:!1,shouldUseDekForselectedStoriesHeadline:!1,summaryItemVariation:"TextBelowDesktopOnlyThirds"},c.displayName="LargeDeviceSelectedStories",e.exports=c},77083:(e,t,o)=>{const a=o(67294),i=o(45697),{useIntl:r}=o(76186),n=o(85650),s=o(44031),l=o(70420).Z,{calculateSpacing:d}=o(79720),{componentTracking:m}=o(28601),{SelectedStoriesSectionTitle:c,SelectedStoriesCarousel:u,SelectedStory:p}=o(5418),g=o(57028),h=({items:e,isDotClickable:t,isSpecialTheme:o,sectionTitleVariation:i,selectedStoriesHeadline:h,shouldUseDekForselectedStoriesHeadline:y,summaryItemVariation:b,shouldHideSelectedStoriesHeadline:S,shouldHideDangerousDek:C,trackingNamespace:f})=>{const $=r();if(!e.length)return null;const v=s[b];return a.createElement(u,null,!S&&a.createElement(c,{as:g[i],className:"SelectedStoriesSectionTitle",dangerousHed:y?h:$.formatMessage(l.selectedStoriesHeading),hasDividerBelow:!1}),a.createElement(n,{hasControls:!1,hasPagination:!0,className:"selected-stories-carousel",isDotClickable:t},e.map(((e,t)=>a.createElement(n.CarouselItem,{width:"auto",spacing:d(1.5),key:e.copilotID,"data-testid":"SelectedStoriesSummaryList"},a.createElement(p,Object.assign({},e.image,e,{analyticsDataAttribute:m.addDataSectionTitleAttribute(!0,f,t),isSpecial:o,hideRubricItemSummary:!0,shouldHideBylines:!0,shouldHideDangerousDek:C,hasUnderlineHed:!1,hasBorder:!1,as:v})))))))};h.propTypes={isDotClickable:i.bool,isSpecialTheme:i.bool,items:i.arrayOf(i.shape({categories:i.shape({tags:i.array}),contributors:i.shape({author:i.shape({items:i.arrayOf(i.shape({dangerousBio:i.string,dangerousTitle:i.string,name:i.string,socialMedia:i.array,url:i.string}))})}),dangerousDek:i.string,dangerousHed:i.string,image:i.object,url:i.string})).isRequired,sectionTitleVariation:i.string,selectedStoriesHeadline:i.string,shouldHideDangerousDek:i.bool,shouldHideSelectedStoriesHeadline:i.bool,shouldUseDekForselectedStoriesHeadline:i.bool,summaryItemVariation:i.string,trackingNamespace:i.string.isRequired},h.defaultProps={isDotClickable:!1,isSpecialTheme:!1,sectionTitleVariation:"TextCenter",shouldHideDangerousDek:!1,shouldHideSelectedStoriesHeadline:!1,shouldUseDekForselectedStoriesHeadline:!1,summaryItemVariation:"TextBelowLeft"},h.displayName="SmallDeviceSelectedStories",e.exports=h},5418:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SelectedStoriesCarousel=t.SelectedStory=t.SelectedStoriesGrid=t.SelectedStoriesSectionTitle=t.SelectedStoriesList=void 0;const{default:a}=o(51117),{calculateSpacing:i,getTypographyStyles:r,maxScreen:n,minScreen:s}=o(79720),{maxThresholds:l}=o(28657),{BREAKPOINTS:d}=o(85326),m=o(32168),c=o(32246),{SummaryItemWrapper:u}=o(41849),{SummaryItemContent:p,SummaryItemDek:g}=o(88269),{SummaryItemHedBase:h}=o(27853),y=a(c).withConfig({displayName:"SelectedStoriesList"})``;t.SelectedStoriesList=y;const b=a.section.withConfig({displayName:"SelectedStoriesGrid"})`
  ${n(`${l.md}px`)} {
    display: none;
  }
  ${y} {
    padding: 0;

    ${u} {
      display: grid;
      grid-template-areas: 'image content';
      grid-template-columns: ${({selectedStoriesImageWidth:e})=>e?` ${i(e)} auto`:`${i(7.5)} auto`};
      gap: ${i(4)};
      margin-bottom: ${i(2)};
      padding-bottom: ${i(2)};

      :last-of-type {
        margin-bottom: 0;
        border-bottom: 0;
        padding-bottom: 0;
      }
    }

    ${p} {
      padding-top: 0;

      ${h} {
        ${r("typography.definitions.discovery.hed-core-secondary")};
      }

      ${g} {
        margin: 0;
      }
    }
  }
`;t.SelectedStoriesGrid=b;const S=a(m).withConfig({displayName:"SelectedStoriesSectionTitle"})`
  ${s(d.md)} {
    margin-top: ${i(5)};
    border-bottom-width: 1px;
  }

  ${s(d.md)} {
    margin-top: ${i(4)};
  }

  h2 {
    ${({theme:e})=>r(e,"typography.definitions.discovery.subhed-section-secondary")};
    justify-self: center;
  }

  ${n(d.md)} {
    margin-bottom: ${i(1)};
  }

  ${s(d.md)} {
    margin-bottom: ${i(2)};
  }
`;t.SelectedStoriesSectionTitle=S;const C=a.section.withConfig({displayName:"SelectedStory"})`
  text-align: left;

  .summary-item__content {
    padding-bottom: 0;
  }
`;t.SelectedStory=C;const f=a.section.withConfig({displayName:"SelectedStoriesCarousel"})`
  .selected-stories-carousel {
    margin-top: ${i(1)};
    margin-bottom: ${i(5)};

    .summary-item {
      width: ${i(23.75)};
    }
  }
  ${s(d.md)} {
    display: none;
  }
`;t.SelectedStoriesCarousel=f},94027:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const a=o(76186);t.default=(0,a.defineMessages)({profileLinkLabel:{id:"StackedNavigation.ProfileLinkLabel",defaultMessage:"My Profile",description:"Label for the profile link",isConfigurable:!0},navigationMenuButtonLabel:{id:"StackedNavigation.MenuButton",defaultMessage:"Open Navigation Menu",description:"Label for the menu button"},primaryLinksLabel:{id:"StackedNavigation.PrimaryLinksLabel",defaultMessage:"Primary",description:"ARIA label for the primary links"},utilityLinksLabel:{id:"StackedNavigation.UtilityLinksLabel",defaultMessage:"Utility",description:"ARIA label for utility links"},openSearchMenuLabel:{id:"StackedNavigation.OpenSearchMenuLabel",defaultMessage:"Open Search Menu",description:"ARIA label open search menu button"},searchLabel:{id:"StackedNavigation.SearchLabel",defaultMessage:"Search",description:"ARIA label for search link"},subscribeLabel:{id:"StackedNavigation.SubscribeLabel",defaultMessage:"Subscribe",description:"Text for the subscribe link"},drawerLabel:{id:"StackedNavigation.DrawerLabel",defaultMessage:"Navigation and Sign Up Menu",description:"ARIA label for the drawer modal"},bookmarkAlertLabel:{id:"StackedNavigation.BookmarkAlertLabel",defaultMessage:"Find anything you save across the site in your account",description:"Bookmark alert label before the link"},savedStoriesLabel:{id:"StackedNavigation.SavedStoriesLabel",defaultMessage:"",description:"Label for the link in bookmark alert"},primaryNavigationLabel:{id:"SiteHeader.ScrollingNavigation",defaultMessage:"Primary",description:"ARIA label for the whole primary navigation"}})},10710:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(98288),n=o(36895),{PaymentGateway:s}=o(28576),l=o(7046),{componentTracking:d}=o(28601),{trackComponent:m}=o(40199),{SubtopicDiscoveryTitle:c,SubtopicDiscoveryFirstHed:u,SubtopicDiscoveryHedContainer:p,SubtopicDiscoveryImage:g,SubtopicDiscoveryItemContainer:h,SubtopicDiscoverySubsequentHed:y,SubtopicDiscoveryAdRail:b,SubtopicDiscoveryGridContent:S,SubtopicDiscoveryAdRailContainer:C,SubtopicDiscoverySummaryItem:f}=o(61653),$=({subItems:e,subItemsLengthLimit:t})=>{if(!e||!e.length)return[];const[o,...a]=e,{image:i}=o||{},{contentType:r}=i||{};return r?[o,...a.slice(0,t)]:$({subItems:a,subItemsLengthLimit:t})},v=({item:e,subItemsLengthLimit:t,firstHedIdx:o,shouldEnableBundleComponentAnalytics:a,trackingNamespace:s,shouldUseSummaryItem:l})=>{const m=d.addDataSectionTitleAttribute(a,`${null==s?void 0:s.SubtopicDiscoveryItemHed} ${o+1} hero`),{dangerousCategoryTitle:c,parsedSubItems:b=[]}=e||{},S=$({subItems:b,subItemsLengthLimit:t});if(!S.length)return null;const[C,...v]=S,{artist:w,dangerousHed:k,genre:T,image:I,url:x}=C||{},{altText:B}=I||"";return i.createElement(h,null,i.createElement(p,null,i.createElement(n.DiscoveryCard,{name:c.label,url:c.link}),l?i.createElement(f,Object.assign({},C,{shouldHidePublishDate:!1,rubric:T,subHed:w,url:`/${x}/`})):i.createElement(i.Fragment,null,i.createElement(g,Object.assign({href:`/${x}`,"aria-label":B,className:"SubtopicDiscoveryImage"},m),i.createElement(r,Object.assign({},I,{isLazy:!0}))),i.createElement(u,Object.assign({href:`/${x}`,"aria-label":k,className:"SubtopicDiscoveryFirstHed"},m),i.createElement("h2",{dangerouslySetInnerHTML:{__html:k}})))),!l&&(v||[]).map(((e,t)=>{const{dangerousHed:r,url:n}=e||{},l=d.addDataSectionTitleAttribute(a,`${null==s?void 0:s.SubtopicDiscoveryItemHed} ${o+1} secondary`,t);return i.createElement(p,{key:t},i.createElement(y,Object.assign({href:`/${n}`,"aria-label":r,className:"SubtopicDiscoverySubsequentHed"},l),i.createElement("h2",{dangerouslySetInnerHTML:{__html:r}})))})))};v.propTypes={firstHedIdx:a.number,item:a.shape({dangerousCategoryTitle:a.shape({label:a.string,link:a.string}),parsedSubItems:a.arrayOf(a.shape({dangerousHed:a.string,image:a.object,url:a.string}))}),shouldEnableBundleComponentAnalytics:a.bool,shouldUseSummaryItem:a.bool,subItemsLengthLimit:a.number,trackingNamespace:a.object},v.defaultProps={shouldUseSummaryItem:!1};const w=({items:e,subItemsLengthLimit:t,shouldEnableBundleComponentAnalytics:o,trackingNamespace:a,shouldUseSummaryItem:r})=>e.map(((e,n)=>i.createElement(v,{key:n,item:e,subItemsLengthLimit:t,firstHedIdx:n,shouldEnableBundleComponentAnalytics:o,trackingNamespace:a,shouldUseSummaryItem:r}))),k=({dangerousDek:e,dangerousHed:t,items:o,shouldShowContainerTitle:a,subItemsLengthLimit:r,showAdRightRail:n,shouldEnableBundleComponentAnalytics:d,shouldUseSummaryItem:u,trackingNamespace:p})=>(i.useEffect((()=>{m("SubtopicDiscovery")}),[]),i.createElement(i.Fragment,null,t&&a&&i.createElement(c,{dangerousDek:e,dangerousHed:t,hedTag:"h2"}),i.createElement(S,{shouldUseSummaryItem:u},i.createElement(w,{items:o,subItemsLengthLimit:r,shouldEnableBundleComponentAnalytics:d,shouldUseSummaryItem:u,trackingNamespace:p})),n&&i.createElement(C,{className:"grid-layout__aside"},i.createElement(l,null,i.createElement(s,{group:"ads"},i.createElement(b,{position:"rail"}))))));k.propTypes={dangerousDek:a.string,dangerousHed:a.string,items:a.array,shouldEnableBundleComponentAnalytics:a.bool,shouldShowContainerTitle:a.bool,shouldUseSummaryItem:a.bool,showAdRightRail:a.bool,subItemsLengthLimit:a.number,trackingNamespace:a.object},k.defaultProps={dangerousDek:"",dangerousHed:"",items:[],shouldShowContainerTitle:!1,shouldUseSummaryItem:!1,showAdRightRail:!1,subItemsLengthLimit:2},k.displayName="SubtopicDiscovery",e.exports=k},86345:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(10710);e.exports=a(i,"SubtopicDiscovery")},61653:(e,t,o)=>{const a=o(51117).default,{calculateSpacing:i,getColorToken:r,getTypographyStyles:n,minScreen:s,minMaxScreen:l}=o(79720),{BaseText:d}=o(74327),m=o(32168),c=o(46647),{BREAKPOINTS:u}=o(85326),{applyGridSpacing:p}=o(62470),{universalGridCore:g}=o(61774),h=o(44031),{SummaryItemHedBase:y}=o(27853),b=a(m.LineAboveLineBelowTextCenter).withConfig({displayName:"Title"})`
  grid-column: 1/-1;
  grid-row: 1;
  margin-bottom: ${i(4)};
`,S=a(d).withConfig({displayName:"SubtopicDiscoveryFirstHed"})`
  text-decoration: none;
  line-height: 114%;

  & h2 {
    ${({theme:e})=>n(e,"typography.definitions.discovery.hed-bulletin-primary")}

    color: ${({theme:e})=>`${r(e,"colors.discovery.body.white.heading")};`}
  }
`;S.defaultProps={as:"a"};const C=a.div.withConfig({displayName:"SubtopicDiscoveryHedContainer"})`
  border-bottom: ${i(.125,"px")} solid
    ${r("colors.consumption.body.standard.divider")};

  &:last-child {
    border-bottom: none;
  }

  & .rubric--discovery {
    background-color: ${({theme:e})=>`${r(e,"colors.foundation.footer.bg")};`};
  }
`,f=a(d).withConfig({displayName:"SubtopicDiscoveryImage"})`
  display: block;
  position: relative;
  margin-bottom: ${i(2)};
`;f.defaultProps={as:"a"};const $=a.div.withConfig({displayName:"SubtopicDiscoveryItemContainer"})`
  grid-column: span 4;
  ${s(u.md)} {
    grid-column: span 3;
  }
`,v=a(d).withConfig({displayName:"SubtopicDiscoverySubsequentHed"})`
  text-decoration: none;
  line-height: 106%;

  & h2 {
    ${({theme:e})=>n(e,"typography.definitions.discovery.hed-bulletin-primary")}

    color: ${({theme:e})=>`${r(e,"colors.discovery.body.white.heading")};`}
  }
`;v.defaultProps={as:"a"};const w=a(c).withConfig({displayName:"SubtopicDiscoveryAdRail"})``,k=a.div.withConfig({displayName:"SubtopicDiscoveryAdRailContainer"})`
  display: block;
`,T=a.div.withConfig({displayName:"SubtopicDiscoveryGridContent"})`
  display: grid;
  grid-column: span 12;
  grid-template-columns: repeat(4, 1fr);
  ${l(u.sm,u.md)} {
    grid-row-gap: ${i(4)};
  }
  ${s(u.md)} {
    grid-template-columns: repeat(9, 1fr);
    column-gap: var(--grid-gap);
    row-gap: var(--grid-gap);
  }
  ${s(u.lg)} {
    grid-column: ${({shouldUseSummaryItem:e})=>e?"span 12":"span 11"};
  }
`,I=a("div").withConfig({displayName:"SubtopicDiscoveryGrid"})`
  ${g()};
  ${p("padding")};
`,x=a(h).withConfig({displayName:"SubtopicDiscoverySummaryItem"})`
  ${y} {
    ${({theme:e})=>n(e,"typography.definitions.discovery.hed-core-secondary")}
  }
`;e.exports={SubtopicDiscoveryTitle:b,SubtopicDiscoveryFirstHed:S,SubtopicDiscoveryHedContainer:C,SubtopicDiscoveryImage:f,SubtopicDiscoveryItemContainer:$,SubtopicDiscoverySubsequentHed:v,SubtopicDiscoveryAdRail:w,SubtopicDiscoveryGridContent:T,SubtopicDiscoveryAdRailContainer:k,SubtopicDiscoveryGrid:I,SubtopicDiscoverySummaryItem:x}},11748:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(85650),n=o(86667),s=o(44031),{Podcasts:l,PodcastsSectionTitleWrapper:d,PodcastsSectionTitle:m,CarouselWrapper:c,PodcastsList:u}=o(12912),{calculateSpacing:p}=o(79720),g=({dangerousHed:e,hasDividerAbove:t,hasDividerBelow:o,hasBorder:i,hasItemsRule:g,hideIssueDate:h,items:y,minItemsRequired:b,shouldHidePublishDate:S,textAlign:C})=>b&&(null==y?void 0:y.length)<b?null:a.createElement(l,{itemCount:y.length},a.createElement(d,null,a.createElement(m,{dangerousHed:e,hasDividerAbove:t,hasDividerBelow:o,textAlign:C})),3===y.length&&a.createElement(u,{as:n.ThreeColumns,hasItemsRule:g,hideIssueDate:h,items:y,shouldHidePublishDate:S}),a.createElement(c,null,a.createElement(r,{hasControls:!1,hasPagination:!0},y.map(((e,t)=>a.createElement(r.CarouselItem,{width:p(40),spacing:p(2),key:e.copilotID,"data-testid":"PodcastsList"},a.createElement(s,Object.assign({key:t},e,{hasBorder:i,shouldHidePublishDate:S,hasRule:g,hideIssueDate:h}))))))));g.propTypes={dangerousHed:i.string.isRequired,hasBorder:i.bool,hasDividerAbove:i.bool,hasDividerBelow:i.bool,hasItemsRule:i.bool,hideIssueDate:i.bool,items:i.arrayOf(i.shape({categories:i.shape({tags:i.array}),dangerousDek:i.string,dangerousHed:i.string,image:i.object,url:i.string})).isRequired,minItemsRequired:i.number,shouldHidePublishDate:i.bool,textAlign:i.string},g.defaultProps={hasBorder:!1,hasDividerAbove:!0,hasDividerBelow:!0,hasItemsRule:!1,hideIssueDate:!1,minItemsRequired:0,shouldHidePublishDate:!1,textAlign:"center"},e.exports=g},73015:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),{asThemedComponent:i}=o(3517),r=o(11748);e.exports=i(a(r,"SummaryAudioCollection"))},12912:(e,t,o)=>{const{default:a,css:i}=o(51117),r=o(32168),{SummaryItemDek:n}=o(88269),{SummaryItemBaseByline:s}=o(44621),l=o(48655),{GridItem:d}=o(14134),{calculateSpacing:m,getColorToken:c,maxScreen:u,minScreen:p}=o(79720),{applyGridSpacing:g}=o(62470),{BREAKPOINTS:h}=o(85326),{maxThresholds:y}=o(28657),b=a(l).withConfig({displayName:"PodcastsSectionTitleWrapper"})`
  ${g("padding")}

  ${d} {
    grid-column: 1/-1;
  }
`,S=a(r).withConfig({displayName:"SummaryAudioCollectionTitle"})`
  grid-column: 1/-1;
  border-top: 1px solid ${c("colors.discovery.body.white.accent")};
  border-bottom: 1px solid
    ${c("colors.discovery.body.white.accent")};
`,C=a.div.withConfig({displayName:"PodcastsList"})`
  padding-top: ${m(4)};
`,f=a(l.NoMargins).withConfig({displayName:"CarouselWrapper"})`
  ${g("padding")}

  ${d} {
    grid-column: 1/-1;
    width: 100%;
  }
`,$=a.section.withConfig({displayName:"SummaryAudioCollection"})`
  padding-top: ${m(5)};

  ${({theme:e})=>e&&`background: ${c(e,"colors.discovery.lead.secondary.background")};\n      }`}

  ${C} {
    ${n}, ${s} {
      display: none;
    }
    ${u(`${y.md}px`)} {
      display: none;
    }
  }

  ${f} {
    ${n}, ${s} {
      display: none;
    }

    ${({itemCount:e})=>3===e&&i`
        ${p(h.md)} {
          display: none;
        }
      `}
  }
`;e.exports={Podcasts:$,PodcastsSectionTitleWrapper:b,PodcastsSectionTitle:S,CarouselWrapper:f,PodcastsList:C}},58199:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),n=o(32168),s=o(32246),l=o(44031),{SummaryCollageEightTitle:d,SummaryCollageEightGrid:m,SummaryCollageEightTopTitle:c,SummaryCollageEightGridItemCollageFour:u,SummaryCollageEightGridItemList:p,SummaryCollageEightGridItemTitle:g,SummaryCollageEightSummaryCollageFour:h,SummaryCollageEightSummaryList:y,SummaryCollageEightRelatedRowMobileOnlyReorderTo3:b,SummaryCollageEightGridItemCollageFourTitle:S}=o(92912),{trackComponent:C}=o(40199),f=({className:e,curatedSearchHed:t,dangerousCategoryTitle:o,dangerousDek:i,dangerousHed:s,hasBackground:l,hasRoundedBorder:f,hasUnderlineHed:$,hideBottomBorders:v,hideRubricItemSummary:w,hideSummaryListDeks:k,hideVerticalBorders:T,isPartiallyCurated:I,isTitleFullWidth:x,items:B,recircRiver:E,rightColumnFeature:D,sectionTitleVariation:H,shouldEnableBundleComponentAnalytics:N,shouldHideBylines:P,shouldHideDangerousDek:M,shouldHidePublishDate:L,shouldShowRecipeBadge:F,shouldShowStackedRatingsCard:A,shouldUseDekAsHed:O,sumCollageFourItems:_,sumListItems:R,summaryListHed:V,summaryListSummaryItemVariation:W,summaryItemVariation:j,summarySectionTitleVariation:U,trackingNamespace:G})=>{r.useEffect((()=>{C("SummaryCollageEight")}),[]);const z=n[H],q=O?i:s,K=M?"":i,J=!!q,Q=V||t,Z=()=>r.createElement(g,{isPartiallyCurated:I,isTitleFullWidth:x},r.createElement(d,{as:z,dangerousHed:(I||x)&&o?o:q,isTitleFullWidth:x,dangerousDek:K}));let X={};return D&&(X={hasFeatured:!0,summaryItemFeatured:D}),r.createElement(m,{className:a("summary-collage-eight",{"summary-collage--without-vertical-borders":T},e),isPartiallyCurated:I,hasBackground:l},x&&r.createElement(c,{as:n.LineBelowTextCenter,dangerousHed:q,dangerousDek:K}),J&&!x&&Z(),r.createElement(u,{isPartiallyCurated:I,isTitleFullWidth:x},I&&!x&&r.createElement(S,{as:z,dangerousHed:q,dangerousDek:K}),r.createElement(h,{items:(I||x)&&_?_:B.slice(0,4),hasBorder:!v,hasUnderHeroItem:!0,hideLastFewSummaryImages:!1,hideSummaryListDeks:k,hideVerticalBorders:T,isPartiallyCurated:I,recircRiver:E,shouldEnableBundleComponentAnalytics:N,shouldHideBylines:P,trackingNamespace:null==G?void 0:G.main,underHeroItemVariation:j,hasRoundedBorder:f,shouldShowRecipeBadge:F,isTitleFullWidth:x,shouldShowStackedRatingsCard:A})),r.createElement(p,{hasHed:J,isPartiallyCurated:I,isTitleFullWidth:x},J&&x&&Z(),r.createElement(y,Object.assign({},X,{hasHed:J,dangerousHed:Q,hasUnderlineHed:$,hideBottomBorders:v,hideRubricItemSummary:w,shouldEnableBundleComponentAnalytics:N,shouldHideDangerousDek:!0,shouldHidePublishDate:L,shouldHoldImageSpace:!1,items:(I||x)&&R?R:B.slice(4),isPartiallyCurated:I,sectionTitleVariation:U,summaryItemVariation:W||j,recircRiver:E,shouldHideBylines:P,shouldShowStackedRatingsCard:A,trackingNamespace:null==G?void 0:G.rightRail,hasRoundedBorder:f}))),r.createElement(b,null))};f.propTypes={className:i.string,curatedSearchHed:i.string,dangerousCategoryTitle:i.string,dangerousDek:i.string,dangerousHed:i.string,hasBackground:i.bool,hasRoundedBorder:i.bool,hasUnderlineHed:i.bool,hideBottomBorders:i.bool,hideRubricItemSummary:i.bool,hideSummaryListDeks:i.bool,hideVerticalBorders:i.bool,isPartiallyCurated:i.bool,isTitleFullWidth:i.bool,items:i.arrayOf(i.shape(l.propTypes)),recircRiver:i.string,rightColumnFeature:i.shape({ctaUrl:i.string,header:i.string,ctaTextLabel:i.string,itemIndex:i.number,hideOnMobile:i.bool}),sectionTitleVariation:i.string,shouldEnableBundleComponentAnalytics:i.bool,shouldHideBylines:i.bool,shouldHideDangerousDek:i.bool,shouldHidePublishDate:i.bool,shouldShowRecipeBadge:i.bool,shouldShowStackedRatingsCard:i.bool,shouldUseDekAsHed:i.bool,sumCollageFourItems:i.object,sumListItems:i.object,summaryItemVariation:s.propTypes.summaryItemVariation,summaryListHed:i.string,summaryListSummaryItemVariation:i.string,summarySectionTitleVariation:i.string,trackingNamespace:i.object},f.defaultProps={hideBottomBorders:!1,hideRubricItemSummary:!1,hideSummaryListDeks:!1,hideVerticalBorders:!1,isPartiallyCurated:!1,items:[],sectionTitleVariation:"TextLeft",shouldHideBylines:!1,shouldHideDangerousDek:!0,shouldHidePublishDate:!0,shouldShowStackedRatingsCard:!1,shouldUseDekAsHed:!1,summaryItemVariation:"SideBySideThirdsImageRight",summaryListSummaryItemVariation:null,summarySectionTitleVariation:"TextLeft"},f.displayName="SummaryCollageEight",e.exports=f},59215:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(58199);e.exports=a(i,"SummaryCollageEight")},92912:(e,t,o)=>{const{default:a,createGlobalStyle:i,css:r}=o(51117),{BREAKPOINTS:n}=o(85326),{applyGridSpacing:s,cssVariablesGrid:l}=o(62470),{cssVariablesCollage:d}=o(61774),{calculateSpacing:m,getColorToken:c,getTypographyStyles:u,minScreen:p,maxScreen:g,minMaxScreen:h}=o(79720),{SectionTitleHed:y}=o(80577),{VersoIssueFeatureMagazineIssueDate:b,VersoIssueFeatureMagazineIssueName:S}=o(29697),C=o(23982),f=o(32246),{SummaryCollageFourUnderMainItem:$,SummaryCollageFourSummaryListItem:v,SummaryCollageFourMainItem:w}=o(52340),{StackedRatingsCardWrapper:k,ImageWrapper:T,ContentWrapper:I,Hed:x}=o(92729),B=r`
  ${I} {
    ${({shouldShowStackedRatingsCard:e})=>e&&"padding-left:0"}
  }
`,E=a.div.withConfig({displayName:"SummaryCollageEightTitle"})`
  ${y} {
    ${u("typography.definitions.discovery.subhed-section-collection")}
    ${g(n.md)} {
      justify-self: ${({isTitleFullWidth:e})=>e&&"center"};
    }
  }
`,D=a.div.withConfig({displayName:"SummaryCollageEightTitle"})`
  ${y} {
    ${u("typography.definitions.discovery.subhed-section-collection")}
    margin-bottom: ${m(3)};
  }
`,H=a.section.withConfig({displayName:"SummaryCollageEightGrid"})`
  ${l()}

  display: grid;
  gap: 0 var(--grid-gap);
  grid-template-columns: repeat(4, 1fr);
  ${s("padding")}
  margin: 0 auto;
  max-width: ${m(200)};

  ${p(n.md)} {
    grid-template-columns: repeat(12, 1fr);
  }

  ${p(n.lg)} {
    grid-template-rows: minmax(${m(4)}, auto) repeat(2, 1fr);
  }
  ${({isPartiallyCurated:e})=>e&&`\n    padding-top: ${m(3)};\n  \n    ${p(n.lg)} {\n      padding-top: ${m(4)};\n      grid-template-rows: minmax(${m(5)}, auto) repeat(1, 1fr);\n    }\n\n    ${p(n.xl)} {\n      padding-top: ${m(5)};\n    }\n  `}
  ${d()};

  .summary-item--has-border {
    &:last-child {
      @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
        margin-bottom: 0;
        border-bottom: 0;
      }
    }
  }

  ${({hasBackground:e})=>e&&r`
      background-color: ${c("colors.discovery.body.light.background")};
    `}
`,N=a.div.withConfig({displayName:"SummaryCollageEightTopTitle"})`
  grid-column: 1 / -1;
  margin-top: ${m(6)};
  margin-bottom: ${m(4)};
  border-bottom-color: ${c("colors.discovery.body.white.accent")};
  padding-bottom: ${m(2)};
  ${p(n.lg)} {
    margin-top: ${m(4)};
  }
`,P=a.div.withConfig({displayName:"SummaryCollageEightGridItemTitle"})`
  grid-column: 1 / -1;
  align-self: flex-end;
  order: 2;
  border-bottom: 1px solid
    ${c("colors.discovery.body.white.border")};
  padding-bottom: ${m(1)};

  ${p(n.lg)} {
    grid-column: 10 / span 3;
    grid-row: ${({isTitleFullWidth:e})=>e?"2 / span 2":"1 / span 1"};
    margin-left: calc(var(--border-offset) * -1);
    border-top: none;
    border-bottom: none;
    border-left: ${({isTitleFullWidth:e})=>e?"none;":`1px solid\n      ${c("colors.discovery.body.white.border")};`};
    padding-left: var(--border-offset);
    width: calc(100% + var(--border-offset));
  }
  ${({isPartiallyCurated:e})=>e&&`\n  border-bottom: none;\n  ${h(n.md,`calc(${n.lg} - 1px)`)} {\n    grid-row: 2 / span 1;\n    grid-column: 1 / span 12;\n  }\n`}
`,M=a.div.withConfig({displayName:"SummaryCollageEightGridItemCollageFour"})`
  grid-column: 1 / -1;
  order: 1;

  ${p(n.lg)} {
    grid-column-gap: var(--grid-gap);
    grid-column: 1 / span 9;
    grid-row: ${({isTitleFullWidth:e})=>e?"2 / span 4":"1 / span 3"};
    grid-row-gap: ${m(2)};
  }
  ${({isPartiallyCurated:e})=>e&&`\n  ${h(n.md,`calc(${n.lg} - 1px)`)} {\n    grid-column-gap: var(--grid-gap);\n    grid-column: 1 / span 12;\n    grid-row-gap: ${m(2)};\n    grid-row: 1 / span 1;\n    grid-template-rows: repeat(2, 0.75fr);\n  }\n  `}
`,L=a.div.withConfig({displayName:"SummaryCollageEightGridItemList"})`
  grid-column: 1 / -1;
  order: ${({hasHed:e})=>e?3:2};
  margin: 0;
  border-top: none;
  padding: 0;

  ${k} {
    display: grid;
    border-top: 1px solid ${c("colors.discovery.body.white.border")};
    ${T} {
      display: grid;
      grid-area: image;
      align-items: center;
    }
    ${I} {
      grid-area: content;
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  ${p(n.lg)} {
    grid-column: 10 / span 3;
    grid-row: ${({hasHed:e})=>e?"2 / span 2":"1 / span 3"};
    margin-left: calc(var(--border-offset) * -1);
    border-left: ${({isTitleFullWidth:e})=>e?"none;":`1px solid\n    ${c("colors.discovery.body.white.border")};`};
    padding-right: 0;
    padding-left: var(--border-offset);
    width: calc(100% + var(--border-offset));
  }

  ${({isPartiallyCurated:e})=>e&&`\n    ${h(n.md,`calc(${n.lg} - 1px)`)} {\n      border-left: none;\n      grid-column: 1 / span 12;\n      grid-row: 3 / span 1;\n    }\n  `}
`,F=r`
  ${w} {
    position: unset;
    margin-bottom: 0;
    border-bottom: none;
    ${({shouldShowStackedRatingsCard:e})=>e&&`padding-bottom: ${m(6)};`}

    ${x} {
      ${({shouldShowStackedRatingsCard:e})=>e&&u("typography.definitions.discovery.hed-feature")}
    }
    ${B}

    ${p(n.lg)} {
      grid-column: 4 / -1;
    }
    ${({isPartiallyCurated:e})=>e&&`\n    ${h(n.md,`calc(${n.lg} - 1px)`)} {\n      grid-column: 4 / -1;\n    }\n    `}
    @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
      padding-bottom: ${m(1)};
    }

    @media (min-width: 0) and (max-width: calc(${n.md} - 1px)) {
      padding-bottom: ${m(2)};
    }

    .summary-item__dek {
      display: block;
    }

    .summary-item__content {
      margin-bottom: 0;
      padding-bottom: 0;
    }

    .summary-item__image-link {
      padding-right: 0;

      @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
        margin-right: -${m(3)};
        margin-left: -${m(3)};
        ${({isPartiallyCurated:e})=>e&&`\n        margin-right: ${m(0)};\n        margin-left: ${m(0)};\n      `}
      }
    }
  }
  ${$} {
    border-bottom: none;
    ${p(n.lg)} {
      grid-column: 4 / -1;
    }

    @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
      display: ${({isTitleFullWidth:e})=>e?"none":"block"};
    }

    .summary-item__dek {
      display: block;
    }

    .summary-item__content {
      ${p(n.lg)} {
        margin-top: ${m(2)};
      }

      @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
        padding: ${m(2)} 0 ${m(4)};
      }
      @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
        padding-bottom: ${m(2)};
      }
      ${({isPartiallyCurated:e})=>e&&"\n        padding-top: none;\n      "}
    }

    .summary-item__content.summary-item__content--no-rubric {
      ${({isPartiallyCurated:e})=>e&&"\n        padding-top: none;\n      "}
    }

    .summary-item__image-link {
      ${p(n.lg)} {
        margin-top: ${m(2)};
      }
    }
    ${({isPartiallyCurated:e,isTitleFullWidth:t})=>(e||t)&&r`
        border-top: none;
      `}
  }

  ${v} {
    .summary-item:last-child {
      @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
        padding-bottom: ${m(1)};
      }
      @media (min-width: 0) and (max-width: calc(${n.md} - 1px)) {
        padding-bottom: ${m(2)};
      }
    }

    .summary-item {
      @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
        border-bottom: 0;
      }
    }

    ${k}:first-child {
      ${({shouldShowStackedRatingsCard:e})=>e&&`\n        border-bottom: 1px solid;\n        padding-bottom:0;\n      margin-bottom: ${m(2)};`}
      border-bottom-color:  ${c("colors.discovery.body.white.border")};
    }

    ${p(n.lg)} {
      grid-column: 1 / span 3;
      grid-row-start: 1;
      margin: 0 calc(var(--border-offset) * -1) 0 0;
      border-right: ${({isTitleFullWidth:e})=>e?"none;":`1px solid\n      ${c("colors.discovery.body.white.border")};`};
      border-left: none;
      padding-right: var(--border-offset);
      padding-left: 0;
    }

    ${({isPartiallyCurated:e})=>e&&`\n   ${p(n.md)} {\n     grid-column: 1 / span 3;\n     grid-row-start: 1;\n     margin: 0 calc(var(--border-offset) * -1) 0 0;\n     border-right: none;\n     border-left: none;\n     padding-right: var(--border-offset);\n     padding-left: 0;\n   }         \n   `}
    @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
      margin-bottom: ${m(2)};
    }

    @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
      margin-bottom: 0;
    }

    .summary-item__hed {
      /* TOFIX: Lots of overrides happening here, this reassigns the default token for .summary-item__hed */
      ${u("typography.definitions.discovery.hed-core-primary")}
    }

    /* If the flag to use StackedRatingsCard is enabled, update the type token of the StackedRatingsCard Hed.*/
    ${x} {
      ${({shouldShowStackedRatingsCard:e})=>e&&u("typography.definitions.discovery.hed-core-secondary")}
    }

    ${B}

    .summary-item__dek {
      display: block;
    }

    .summary-item--has-border {
      margin-bottom: 0;
    }

    .summary-item__content {
      padding-bottom: 0;
    }
  }
`,A=a(C).withConfig({displayName:"SummaryCollageEightSummaryCollageFour"})`
  && {
    grid-template-columns: repeat(4, 1fr);
    padding-top: 0;
    padding-right: 0;
    padding-left: 0;
    height: 100%;

    .summary-item,
    .summary-item--has-border {
      @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
        border-bottom: 0;
      }
    }

    .summary-list--collection-list {
      @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
        border-top: 0;
      }
    }

    ${p(n.lg)} {
      grid-template-columns: repeat(9, 1fr);
      grid-template-rows: minmax(${m(5)}, auto) 1fr;
    }

    ${({isPartiallyCurated:e})=>e&&`\n            ${h(n.md,`calc(${n.lg} - 1px)`)} {\n              grid-template-columns: repeat(9, 1fr);\n              grid-template-rows: minmax(${m(5)}, auto) 1fr;\n            }\n          `}

    &.summary-collage-four {
      ${F}
    }
  }
`,O=a(f.Collection).withConfig({displayName:"SummaryCollageEightSummaryList"})`
  &&& {
    margin: 0;
    border-top: none;
    padding: 0;

    * {
      bottom: auto;
      ${({shouldShowStackedRatingsCard:e})=>!e&&"width: auto;"}
    }

    video {
      width: 100%;
    }

    .summary-list__item {
      grid-template-areas: 'content image';
      grid-template-columns: 1fr 75px;

      padding-top: ${m(2)};
      padding-bottom: ${m(2)};

      &:first-of-type {
        ${p(n.lg)} {
          border-top: 1px solid
            ${c("colors.discovery.body.white.border")};
          padding-top: ${m(2.5)};
        }
      }

      &:last-of-type {
        ${p(n.lg)} {
          border-bottom: none;
        }
      }

      &.summary-item--has-border {
        margin-bottom: 0;
      }

      &.summary-item--layout-placement-side-by-side {
        grid-column-gap: var(--grid-gap);
      }

      .summary-item__image-link {
        align-self: start;
        max-width: 75px;
        height: auto;
      }

      .summary-item__hed {
        ${u("typography.definitions.discovery.hed-bulletin-primary")}
        margin-bottom: ${m(1)};
      }

      ${x} {
        ${({shouldShowStackedRatingsCard:e})=>e&&u("typography.definitions.discovery.hed-bulletin-primary")}
      }
    }
    ${B}
    ${({isPartiallyCurated:e})=>e&&`\n    .summary-list__item {\n      grid-template-columns: 1fr;\n\n      padding-top: ${m(2)};\n      padding-bottom: ${m(2)};\n\n      .summary-item__content.summary-item__content--no-rubric {\n        padding-top: 0px;\n      }\n\n      &:first-of-type {\n        border-top: none;\n        padding-top: ${m(2.5)};\n        ${h("0px",n.md)} {\n          padding-top: ${m(1)};\n        }\n      }\n\n      &:last-of-type {\n        ${p(n.lg)} {\n          border-bottom: none;\n        }\n      }\n\n      &:nth-child(4) {\n        ${h(n.md,n.lg)} {\n          border-bottom: none;\n        }\n      }\n\n      &.summary-item--has-border {\n        margin-bottom: 0;\n      }\n\n      &.summary-item--layout-placement-side-by-side {\n        grid-column-gap: var(--grid-gap);\n      }\n\n      .summary-item__image-link {\n        ${h("0px",`calc(${n.lg} - 1px)`)}{\n          display: none;\n        }\n        align-self: start;\n        max-width: 75px;\n        height: auto;\n      }\n\n      .summary-item__hed {\n        ${u("typography.definitions.discovery.hed-bulletin-primary")}\n        margin-bottom: ${m(1)};\n      }\n    }\n\n    ${h("768px",`calc(${n.lg} - 1px)`)} {\n      .summary-list__items {\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        column-gap: ${m(2)};\n      }\n    }\n  `}

    ${({isPartiallyCurated:e})=>!e&&`.summary-list__items > div:nth-last-of-type(2) {\n        margin-bottom: ${m(2)};\n        @media (min-width: 0px) and (max-width: calc(${n.lg} - 1px)) {\n          margin-bottom: 0;\n          padding-bottom: 0;\n        }\n    }`}

   ${({shouldShowStackedRatingsCard:e})=>e&&".summary-list__items > div:nth-last-of-type(2) {\n        margin-bottom: 0;\n      }"} 

    .summary-list__item--before-hidden {
      border-bottom: none;
    }

    .summary-item--bundle {
      .summary-item__hed {
        margin-bottom: 0;
      }

      .summary-item__dek {
        margin-top: ${m(.5)};
      }
    }

    ${({hasHed:e})=>!e&&`&& {\n    .summary-list__item {\n      &:first-of-type {\n       ${p(n.lg)} {\n          border-top: none;\n          padding-top: 0;\n        }\n      }\n    }\n      }`}
  }

  img {
    ${({hasRoundedBorder:e})=>e&&`\n      border-radius: ${m(1)};\n    `}
  }
`,_=i`
  .summary-collage-eight-related-row--mobile-only-reorder-to-3 {
    @media (min-width: 0) and (max-width: calc(${n.lg} - 1px)) {
      && {
        order: 2;
        margin-top: ${m(2)};
      }
    }

    ${b} {
      margin-bottom: 0;
    }

    ${S} {
      margin-top: ${m(.5)};
    }
  }
`;e.exports={SummaryCollageEightTitle:E,SummaryCollageEightGrid:H,SummaryCollageEightTopTitle:N,SummaryCollageEightGridItemCollageFour:M,SummaryCollageEightGridItemList:L,SummaryCollageEightGridItemTitle:P,SummaryCollageEightSummaryList:O,SummaryCollageEightSummaryCollageFour:A,SummaryCollageEightRelatedRowMobileOnlyReorderTo3:_,SummaryCollageEightGridItemCollageFourTitle:D}},1588:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(44031),n=o(32168),{SummaryCollageTwoColumnWrapper:s,SummaryCollageOneColumnWrapper:l,GridWithMargins:d,SummaryCollageFiftyFiftyTitleWrapper:m,Wrapper:c,StickyColumn:u,FeaturedSummaryItem:p,ShowMoreButtonWrapper:g}=o(21257),{TitleWrapper:h}=o(78153),{useColumnsComponent:y}=o(14225),b=o(86449),{sizes:S}=o(28657),{BaseWrap:C}=o(74327),{componentTracking:f}=o(28601),{useResizeObserver:$}=o(47041),{RESOLUTION_MAP:v}=o(77832),w=o(38915),k=({Ad:e,breakpoint:t,columnItemLimit:o,columnItemType:a,columnSummaryItemVariation:r,customButtonText:S,dangerousHed:k,dangerousDek:T,featuredItemHedTag:I,featuredSummaryItemVariation:x,hasBackground:B,hasBorder:E,hasCollapsedAd:D,hasPadding:H,hasPaddingTop:N,hasFeaturedItemMorePadding:P,hasFetauredItemStickyColumnPadding:M,hasLimitedHeightStickyColumn:L,hasRule:F,hasWrapperPadding:A,hideIssueDate:O,hideRubricItemSummary:_,hideSourceTagName:R,hasShowMoreButtonBottomMargin:V,hasRuleColumnItem:W,items:j,layout:U,mobileColumnItemType:G,mobileColumnSummaryItemVariation:z,mobImageAlignment:q,mosaicPosition:K,hasDekPaddingBottom:J,sectionTitleVariation:Q,shouldHideDekOnMobileView:Z,shouldHideItemCount:X,shouldEnableBundleComponentAnalytics:Y,shouldHidePublishDate:ee,showOneColumnReverse:te,hasShowMoreButton:oe,showMoreBtnStyle:ae,showMoreButtonURL:ie,showMoreButtonVariation:re,stickyPosition:ne,summaryItemStickTopThreshold:se,summaryItemVariation:le,trackingNamespace:de})=>{const[me,ce]=i.useState(v.NONE),[ue,pe]=i.useState(!1),[ge,he]=i.useState(0),ye=i.useRef(null),be=w[re],[Se,Ce]=y(me,ce),fe=i.useCallback((()=>()=>{if(window){const e=window.matchMedia(`(min-width: ${se}px)`);return Boolean(null==e?void 0:e.matches)}return!1}),[se]),[$e,ve]=i.useState(!1);if($((()=>se&&pe(fe()))),i.useEffect((()=>{se&&pe(fe())}),[se,pe,fe]),i.useEffect((()=>{if(!ye.current)return;const e=ye.current.querySelector(".summary-item__content");if(e){if("function"==typeof ResizeObserver){const t=new ResizeObserver((()=>{he((null==e?void 0:e.offsetHeight)||0)}));return t.observe(e),()=>{t.disconnect()}}he((null==e?void 0:e.offsetHeight)||0)}}),[ye]),i.useEffect((()=>{const e=()=>{window.innerWidth<1024?ve(!0):ve(!1)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)})),!((e=[])=>e.length>=4&&e.length<=7)(j))return null;const we=n[Q],[ke,...Te]=j,Ie=(null==de?void 0:de.hero)||k,xe=(null==de?void 0:de.aside)||k,Be=f.addDataSectionTitleAttribute(Y,Ie,(null==de?void 0:de.hero)?"":0),Ee="one-column"===U?l:s,De="one-column"===U?d:c,He=ue?"two-column":U,Ne=ue?"top":ne,Pe={columnItemLimit:o,columnItemType:a,columnSummaryItemVariation:r,hasRule:W,layout:U,items:Te,shouldEnableBundleComponentAnalytics:Y,trackingNamespace:xe,breakpoint:t,hasBackground:B,hasCollapsedAd:D,hideIssueDate:O,isLastElement:!0,hasDekPaddingBottom:J,shouldHoldImageSpace:!0,shouldHidePublishDate:ee,hideRubricItemSummary:_,hideSourceTagName:R};return $e&&(Pe.columnItemType=G||a,Pe.columnSummaryItemVariation=z||r,Pe.shouldHideDekOnMobileView=Z,Pe.imageAlignment=q,Pe.isLastElement=!1),ke&&I&&(ke.hedTag=I),i.createElement(Ee,{hasBackground:B,hasPaddingTop:N,hasWrapperPadding:A,showOneColumnReverse:te,breakpoint:t},k&&("one-column"===U?i.createElement(m,null,i.createElement(h,{hasPadding:H,as:we,dangerousHed:k,dangerousDek:T})):i.createElement(h,{hasPadding:H,as:we,dangerousHed:k,dangerousDek:T})),i.createElement(De,{hasDangerousHed:Boolean(k),layout:He,stickyPosition:Ne,breakpoint:t,isSummaryItemStickTopScreen:ue},i.createElement(u,{ref:ye,layout:He,stickyPosition:Ne,hasPadding:M,hasLimitedHeightStickyColumn:L,isSummaryItemStickTopScreen:ue,summaryItemContentHeight:ge},i.createElement(p,Object.assign({},ke,{className:"summary-collage-fifty-fifty-item-0",hasBorderOnMobileAndTabletOnly:!0,analyticsDataAttribute:Be,featuredSummaryItemVariation:x,hasBorder:E,hasMorePadding:P,hasRule:F,hideIssueDate:O,hideRubricItemSummary:_,hideSourceTagName:R,shouldHideItemCount:X,shouldHidePublishDate:ee,shouldHoldImageSpace:!0,shouldUseMediumBreakpoint:!0}))),i.createElement(C,null,"one-column"===U?i.createElement(i.Fragment,null,i.createElement(b,Object.assign({},Pe))):i.createElement(i.Fragment,null,i.createElement(Se,Object.assign({layout:U,items:Te,shouldEnableBundleComponentAnalytics:Y,trackingNamespace:xe,variation:le,breakpoint:t,Ad:e,mosaicPosition:K,hasCollapsedAd:D},Ce))))),oe&&i.createElement(g,{hasShowMoreButtonBottomMargin:V},i.createElement(be,{btnStyle:ae,label:S,ariaLabel:S,href:ie,inputKind:"link"})))};k.propTypes={Ad:a.func,breakpoint:a.oneOf(S),columnItemLimit:a.number,columnItemType:a.string,columnSummaryItemVariation:a.string,customButtonText:a.string,dangerousDek:a.string,dangerousHed:a.string,featuredItemHedTag:a.oneOf(["h2","h3"]),featuredSummaryItemVariation:a.string,hasBackground:a.bool,hasBorder:a.bool,hasCollapsedAd:a.bool,hasDekPaddingBottom:a.bool,hasFeaturedItemMorePadding:a.bool,hasFetauredItemStickyColumnPadding:a.bool,hasLimitedHeightStickyColumn:a.bool,hasPadding:a.bool,hasPaddingTop:a.bool,hasRule:a.bool,hasRuleColumnItem:a.bool,hasShowMoreButton:a.bool,hasShowMoreButtonBottomMargin:a.bool,hasWrapperPadding:a.bool,hideIssueDate:a.bool,hideRubricItemSummary:a.bool,hideSourceTagName:a.bool,items:a.arrayOf(a.shape(r.propTypes)).isRequired,layout:a.oneOf(["one-column","two-column"]),mobileColumnItemType:a.string,mobileColumnSummaryItemVariation:a.string,mobImageAlignment:a.oneOf(["top","default","bottom"]),mosaicPosition:a.object,sectionTitleVariation:a.string,shouldEnableBundleComponentAnalytics:a.bool,shouldHideDekOnMobileView:a.bool,shouldHideItemCount:a.bool,shouldHidePublishDate:a.bool,showMoreBtnStyle:a.oneOf(["filled","outlined","text"]),showMoreButtonURL:a.string,showMoreButtonVariation:a.oneOf(["Primary","Utility","UtilityInverted"]),showOneColumnReverse:a.bool,stickyPosition:a.oneOf(["top","bottom"]),summaryItemStickTopThreshold:a.number,summaryItemVariation:a.string,trackingNamespace:a.object},k.defaultProps={breakpoint:"lg",columnItemLimit:3,columnItemType:"RatingsCard",columnSummaryItemVariation:"SideBySideThirdsImageRight",customButtonText:"See More",featuredSummaryItemVariation:"OverlayCenterLimitedHeight",hasBackground:!1,hasBorder:!1,hasDekPaddingBottom:!0,hasFetauredItemStickyColumnPadding:!1,hasLimitedHeightStickyColumn:!1,hasPaddingTop:!0,hasRule:!1,hasRuleColumnItem:!1,hasShowMoreButton:!1,hasShowMoreButtonBottomMargin:!0,hasWrapperPadding:!0,hideIssueDate:!0,hideRubricItemSummary:!1,layout:"two-column",mobImageAlignment:"default",mosaicPosition:{},sectionTitleVariation:"LineAboveLineBelowTextCenter",shouldEnableBundleComponentAnalytics:!1,shouldHideDekOnMobileView:!1,shouldHideItemCount:!1,shouldHidePublishDate:!0,showMoreBtnStyle:"outlined",showMoreButtonURL:"",showMoreButtonVariation:"Utility",showOneColumnReverse:!1,stickyPosition:"top",summaryItemVariation:"TextBelowDesktopOnlyThirds"},k.displayName="SummaryCollageFiftyFifty",e.exports=k},77832:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RESOLUTION_MAP=void 0,t.RESOLUTION_MAP={LARGE:"large",SMALL:"small",MEDIUM:"medium",X_SMALL:"x-small",X_LARGE:"x-large",NONE:"none"}},14225:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useColumnsComponent=void 0;const a=o(67294),{RESOLUTION_MAP:i}=o(77832),r=o(99426),n=o(74600),s={[i.LARGE]:n,[i.MEDIUM]:r,[i.SMALL]:r,[i.X_SMALL]:r,[i.X_LARGE]:n,[i.NONE]:()=>null},l={[i.LARGE]:{isLastElement:!0},[i.MEDIUM]:{isLastElement:!1},[i.SMALL]:{isLastElement:!1},[i.X_SMALL]:{isLastElement:!1},[i.X_LARGE]:{isLastElement:!0},[i.NONE]:{}};t.useColumnsComponent=(e,t)=>{const o=a.useMemo((()=>s[e]),[e]),r=a.useMemo((()=>l[e]),[e]);return a.useEffect((()=>{const e=()=>{window.innerWidth>=1024?t(i.LARGE):window.innerWidth<1024&&window.innerWidth>=768?t(i.MEDIUM):t(i.SMALL)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]),[o,r]}},53167:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(1588);e.exports=a(i,"SummaryCollageFiftyFifty")},86449:(e,t,o)=>{const a=o(45697),i=o(67294),{Container:r,Column:n,SecondaryColumnWrapper:s,OneColumnWrapper:l}=o(21257),d=o(17983),{componentTracking:m}=o(28601),c=o(44031),u=({breakpoint:e,columnItemLimit:t,columnItemType:o,columnSummaryItemVariation:a,hasRule:u,hideIssueDate:p,items:g,isLastElement:h,hasDekPaddingBottom:y,hideRubricItemSummary:b,hideSourceTagName:S,trackingNamespace:C,shouldEnableBundleComponentAnalytics:f,shouldHideDekOnMobileView:$,shouldHidePublishDate:v,imageAlignment:w})=>{const k=g.slice(0,t),T="SummaryItem"===o?c[a]:d,I={leftColumn:[]};return k.forEach(((e,o)=>{const a=o+2,r=m.addDataSectionTitleAttribute(f,C,o,!1);I.leftColumn.push(i.createElement(l,{key:o,"data-slot":`${o+2}`},i.createElement(T,Object.assign({},e,{analyticsDataAttribute:r,key:`one-column-vertical-element-${o+1}`,className:`summary-collage-fifty-fifty-item-${o+1}`,hasBorder:!(o+1===t),hasRule:u,hideIssueDate:p,position:a,hedTag:"h3",hasDekPaddingBottom:y,shouldHoldImageSpace:!0,shouldHideDekOnMobileView:$,shouldHidePublishDate:v,imageAlignment:w,hideRubricItemSummary:b,hideSourceTagName:S}))))})),i.createElement(r,{breakpoint:e,isLastElement:h},i.createElement(s,null,Object.values(I).map(((e,t)=>i.createElement(n,{key:`one-columns-vertical-column-${t+1}`},[...e])))))};u.displayName="OneColumn",u.propTypes={breakpoint:a.string,columnItemLimit:a.number,columnItemType:a.string,columnSummaryItemVariation:a.string,hasDekPaddingBottom:a.bool,hasRule:a.bool,hideIssueDate:a.bool,hideRubricItemSummary:a.bool,hideSourceTagName:a.bool,imageAlignment:a.string,isLastElement:a.bool,items:a.array,shouldEnableBundleComponentAnalytics:a.bool,shouldHideDekOnMobileView:a.bool,shouldHidePublishDate:a.bool,trackingNamespace:a.string,variation:a.string},e.exports=u},99426:(e,t,o)=>{const a=o(27361),i=o(45697),r=o(67294),{PaymentGateway:n}=o(28576),{AdWrapper:s,Container:l,Column:d,SecondaryColumnWrapper:m}=o(21257),{connector:c}=o(92078),u=o(44031),{useOnAdFilled:p}=o(84540),{componentTracking:g}=o(28601),{TwoColumnsWithHorizontalAdMosaicWrapper:h}=o(29517),y=({Ad:e,breakpoint:t,adPosition:o,componentConfig:i,hasCollapsedAd:c,items:y,shouldEnableBundleComponentAnalytics:b,trackingNamespace:S,variation:C,mosaicPosition:f})=>{const{horizontalPosition:$}=f||{},v=u[C],w={leftColumn:[],rightColumn:[]},k={leftColumn:[],rightColumn:[]},[T,,I]=p("mid-content-ad"),[x,,B]=p("moasic-ad"),E=a(i,"SummaryItem.settings.hasBorderOnMobileAndTabletOnly",!1),D=r.createElement(h,{hasMobileOnlyBorder:E,key:`two-columns-vertical-native-ad-${y.length+1}`},r.createElement(s,{isHidden:!x},r.createElement(n,{group:"ads"},r.createElement(e,{position:"mosaic",onFilled:B}))));let H=$;return $>y.length&&(H=y.length),y.forEach(((e,t)=>{const o=g.addDataSectionTitleAttribute(b,S,t);((e,t,o)=>{o%2==0?t.leftColumn.push(e):t.rightColumn.push(e)})(r.createElement(v,Object.assign({},e,{analyticsDataAttribute:o,key:`two-columns-horizontal-element-${t+1}`,className:`summary-collage-fifty-fifty-item-${t+1}`,hedTag:"h3"})),t<4?w:k,t),(e=>{if(e===H-1){const t=e<4?w:k;let o;o=e<4?H%2==0?t.rightColumn:t.leftColumn:H%2==0?t.leftColumn:t.rightColumn,o.push(D)}})(t)})),r.createElement(l,{breakpoint:t},r.createElement(m,null,Object.values(w).map(((e,t)=>r.createElement(d,{key:`two-columns-horizontal-first-column-${t+1}`},[...e])))),r.createElement(s,{isHidden:null!=c?c:!T},r.createElement(n,{group:"ads"},r.createElement(e,{position:o||"mid-content",onFilled:I,shouldDisplayLabel:!0}))),(N=k,Object.values(N).some((e=>null==e?void 0:e.length))&&r.createElement(m,{hasTopSpacing:!0},Object.values(k).map(((e,t)=>r.createElement(d,{key:`two-columns-horizontal-second-column-${t+1}`},[...e]))))));var N};y.displayName="TwoColumnsWithHorizontalAd",y.propTypes={Ad:i.func,adPosition:i.string,breakpoint:i.string,componentConfig:i.object,hasCollapsedAd:i.bool,items:i.array,mosaicPosition:i.object,shouldEnableBundleComponentAnalytics:i.bool,trackingNamespace:i.string,variation:i.string},e.exports=c(y,{keysToPluck:["componentConfig"]})},74600:(e,t,o)=>{const a=o(45697),i=o(67294),{AdWrapper:r,Container:n,Column:s,SecondaryColumnWrapper:l}=o(21257),{PaymentGateway:d}=o(28576),m=o(44031),{useOnAdFilled:c}=o(84540),{componentTracking:u}=o(28601),p=({Ad:e,breakpoint:t,hasCollapsedAd:o,items:a,isLastElement:p,trackingNamespace:g,shouldEnableBundleComponentAnalytics:h,variation:y,mosaicPosition:b})=>{const{verticalPosition:S}=b||{},C=m[y],[f,,$]=c("rail-ad"),[v,,w]=c("moasic-ad"),k={leftColumn:[],rightColumn:[]};let T=S;return S&&S>a.length&&(T=a.length),a.forEach(((t,a)=>{const n=a+2,s=u.addDataSectionTitleAttribute(h,g,a);let l=[];const m=k.leftColumn.length;let c=k.rightColumn.length;var p;n>3&&o&&(c-=1),l=m<=c?k.leftColumn:k.rightColumn,l.push(i.createElement(C,Object.assign({},t,{analyticsDataAttribute:s,key:`two-columns-vertical-element-${a+1}`,className:`summary-collage-fifty-fifty-item-${a+1}`,position:n,hedTag:"h3"}))),3===n&&k.rightColumn.push(i.createElement(r,{isHidden:null!=o?o:!f,key:`two-columns-vertical-rail-ad-${a+1}`},i.createElement(d,{group:"ads"},i.createElement(e,{position:"rail",onFilled:$})))),T&&a===T-1&&l.push((p=a+1,i.createElement(r,{isHidden:null!=o?o:!v,key:`two-columns-vertical-native-ad-${p}`},i.createElement(d,{group:"ads"},i.createElement(e,{position:"mosaic",onFilled:w})))))})),i.createElement(n,{breakpoint:t,isLastElement:p},i.createElement(l,null,Object.values(k).map(((e,t)=>i.createElement(s,{key:`two-columns-vertical-column-${t+1}`},[...e])))))};p.displayName="TwoColumnsWithVerticalAd",p.propTypes={Ad:a.func,breakpoint:a.string,hasCollapsedAd:a.bool,hasTagLabel:a.bool,isLastElement:a.bool,items:a.array,mosaicPosition:a.object,shouldEnableBundleComponentAnalytics:a.bool,trackingNamespace:a.string,variation:a.string},e.exports=p},29517:(e,t,o)=>{const a=o(51117).default,{calculateSpacing:i}=o(79720),{applyMobileOnlyBorder:r}=o(34638),n=a.div.withConfig({displayName:"TwoColumnsWithHorizontalAdMosaicWrapper"})`
  margin-bottom: ${i(2)};
  ${r}
`;e.exports={TwoColumnsWithHorizontalAdMosaicWrapper:n}},21257:function(e,t,o){var a=this&&this.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o};const i=o(67294),{default:r,css:n}=o(51117),{maxThresholds:s,minThresholds:l}=o(28657),{BREAKPOINTS:d}=o(85326),{maxScreen:m,minScreen:c,calculateSpacing:u,getTypographyStyles:p,getColorToken:g}=o(79720),{applyGridSpacing:h,cssVariablesGrid:y}=o(62470),{GridItem:b}=o(14134),S=o(48655),C=o(44031),f=o(68437),{OverlaySummaryItemHed:$,OverlaySummaryItemResponsiveAsset:v,OverlaySummaryItemWrapper:w}=o(12365),{ContentWrapper:k,SideBySideRatingsCardWrapper:T}=o(69741),{SectionTitleRoot:I}=o(80577),{ClampContent:x}=o(57632),{SummaryItemWrapper:B,SummaryItemContent:E,SummaryItemDek:D}=o(88269),{SummaryItemImageLink:H}=o(86726),{SummaryItemHedBase:N}=o(27853),{ResponsiveImagePicture:P}=o(7230),M=r(S.WithMargins).withConfig({displayName:"SummaryCollageTwoColumnWrapper"})`
  padding: ${u(8)} 0;

  && {
    grid-row-gap: 0;
  }

  > ${b} {
    grid-column: 1/-1;
  }

  .summary-item.summary-item {
    margin-bottom: ${u(2)};
  }

  @media (max-width: ${l.lg}px) {
    .summary-item__content.summary-item__content {
      padding-bottom: 0;
    }
  }
  ${({hasPaddingTop:e})=>e?"":"padding-top: 0"}
`,L=r.div.withConfig({displayName:"OneColumnWrapper"})`
  margin-bottom: ${u(4)};

  @media (min-width: ${l.xl}px) {
    width: 100%;
  }
`,F=r.span.withConfig({displayName:"Title"})`
  margin-bottom: ${u(2)};
`,A=r.div.withConfig({displayName:"StickyColumn"})`
  width: 100%;
  @media (max-width: ${s.lg}px) {
    position: relative;
  }

  ${({stickyPosition:e="top",layout:t="two-column",hasLimitedHeightStickyColumn:o=!1,isSummaryItemStickTopScreen:a=!1})=>"one-column"!==t&&"top"===e&&n`
      @media (min-width: ${l.xl}px) {
        display: flex;
        position: sticky;
        max-height: 100vh;
        @media (max-height: 850px) {
          ${o&&"max-height: 100%;"}
        }
        margin-bottom: auto;
        top: ${a?u(8):0};
      }
    `}

  ${({layout:e=""})=>"one-column"!==e&&`\n    @media (max-width: ${s.lg}px) {\n      width: 100vw;\n      left: 50%;\n      right: 50%;\n      margin-left: -50vw;\n      margin-right: -50vw;\n    }\n  `}

  ${({layout:e="",hasPadding:t})=>"two-column"===e&&t&&`\n    @media (max-width: ${s.lg}px) {\n      padding-left: ${u(3)};\n      padding-right: ${u(3)};\n    }\n  `}

  ${w} {
    width: 100%;
  }
  ${B} {
    width: 100%;
  }
  ${v} {
    height: auto;
  }

  ${({isSummaryItemStickTopScreen:e,summaryItemContentHeight:t})=>e&&n`
      ${H} {
        margin-right: auto;
        margin-left: auto;
        width: fit-content;
        ${P} {
          img {
            object-fit: contain;
            max-height: calc(
              100vh - ${u(8)} - ${t}px -
                ${u(2)}
            );
          }
        }
      }
      ${E} {
        padding-top: ${u(4)};
        ${N} {
          margin-bottom: ${u(1)};
        }
      }
    `}
`,O=r.div.withConfig({displayName:"SummaryCollageOneColumnWrapper"})`
  ${({hasWrapperPadding:e})=>e?`\n      padding: ${u(4)} 0;\n\n      ${c(d.md)} {\n        padding: ${u(8)} 0;\n      }\n    `:"padding: 0;"}

  ${({hasBackground:e})=>e&&n`
      background-color: ${g("colors.discovery.body.light.background")};
    `}

  ${({showOneColumnReverse:e,breakpoint:t})=>e&&n`
      padding: 0;
      ${I} {
        border-top: 1px solid
          ${g("colors.discovery.body.white.accent")};
        border-bottom: 1px solid
          ${g("colors.discovery.body.white.accent")};
      }
      ${T} {
        flex-direction: row-reverse;
      }
      ${k} {
        flex-grow: 1;
        padding-right: ${u(4)};
        padding-left: 0;
        ${x} {
          -webkit-line-clamp: unset;
        }
      }

      ${L} {
        margin-bottom: ${u(2)};
        border-bottom: 1px solid
          ${g("colors.discovery.body.white.border")};
        padding-bottom: ${u(2)};

        &:last-child {
          border-bottom: 0;
        }
        ${m(`${s[t]}px`)} {
          margin-top: ${u(1)};
        }
      }

      ${A} {
        ${B} {
          ${m(`${s[t]}px`)} {
            border-bottom: 1px solid
              ${g("colors.discovery.body.white.border")};
            padding-bottom: ${u(3)};
          }
        }
      }

      ${B} {
        ${E} {
          padding-bottom: 0;
        }

        ${m(`${s[t]}px`)} {
          border: none;
          padding-bottom: 0;

          ${D} {
            text-align: left;
          }
        }
      }

      ${F} {
        border-top-color: ${g("colors.discovery.body.white.accent")};
        border-bottom-color: ${g("colors.discovery.body.white.accent")};
        ${m(`${s.lg}px`)} {
          margin-bottom: ${u(3)};
        }
      }
    `}
`,_=r(S.EvenAny).withConfig({displayName:"Wrapper"})`
  && {
    grid-auto-flow: row;

    @media (min-width: ${l.xl}px) {
      grid-auto-flow: column;
      grid-template-columns: minmax(0, 1fr) 50%;
    }
  }
`,R=r(S.WithMargins).withConfig({displayName:"GridWithMargins"})`
  grid-column: 1/-1;

  ${({stickyPosition:e,layout:t,isSummaryItemStickTopScreen:o})=>"one-column"===t&&"bottom"===e&&n`
      @media (min-width: ${l.xl}px) and (orientation: portrait) {
        & > div:nth-child(1) {
          display: flex;
          position: sticky;
          top: 0;
          margin-bottom: auto;
        }
      }
      @media (min-width: ${l.xl}px) and (orientation: landscape) {
        & > div:nth-child(1) {
          display: flex;
          position: sticky;
          @media (max-height: 1099px) {
            bottom: 0;
            margin-top: auto;
          }
          @media (min-height: 1100px) {
            top: ${o?u(8):0};
            margin-bottom: auto;
          }
        }
      }
    `}

  ${({hasDangerousHed:e})=>e&&"&& {\n      margin-top: var(--grid-gap);\n    }\n  "};

  ${({breakpoint:e})=>`&&& {\n      grid-auto-flow: row;\n  \n      @media (max-width: ${s[e]}px) {\n        grid-template-columns: 1fr;\n      }\n  \n      @media (min-width: ${s[e]+1}px) {\n        grid-auto-flow: column;\n        grid-template-columns: minmax(0, 1fr) 50%;\n      }\n    }\n  `}
`,V=r.div.withConfig({displayName:"SummaryCollageFiftyFiftyTitleWrapper"})`
  ${y()}
  margin: 0 auto;
  ${h("padding")}
  max-width: ${d.xxl};
`,W=r(S.EvenAny).withConfig({displayName:"SecondaryColumnWrapper"})`
  width: 100%;

  && {
    ${({hasTopSpacing:e})=>e&&`\n      margin-top: ${u(4)};\n  `}
  }

  > ${b} {
    grid-gap: ${u(2)};
    grid-auto-flow: row;
  }

  @media (min-width: ${l.lg}px) {
    width: 80%;
  }

  @media (min-width: ${l.xl}px) {
    width: 100%;
  }
`,j=r.div.withConfig({displayName:"Column"})`
  margin-bottom: auto;
`,U=r(j).withConfig({displayName:"Container"})`
  display: none;

  ${({isLastElement:e,breakpoint:t})=>!e&&`\n    @media (max-width: ${s[t]}px) {\n      display: block;\n    }\n\n    @media (max-width: ${s.md}px) {\n      ${W} {\n        row-gap: 0;\n      }\n    }\n  `}

  ${({isLastElement:e,breakpoint:t})=>e&&`\n    @media (min-width: ${s[t]+1}px) {\n      display: block;\n    }\n  `}
`,G=r.div.withConfig({displayName:"AdWrapper"})`
  max-width: 100%;

  @media (min-width: ${l.xl}px) {
    margin-bottom: ${u(5)};
  }

  ${({isHidden:e})=>e&&"\n    height: 0;\n    padding: 0;\n    margin: 0;\n    visibility: hidden;\n  "}
`;j.displayName="Column";const z=r((e=>{var{featuredSummaryItemVariation:t,contentType:o}=e,r=a(e,["featuredSummaryItemVariation","contentType"]);const n={recipe:f,review:C[t],article:C[t],gallery:C[t]}[o]||C[t];return i.createElement(n,Object.assign({},r,{contentType:o}))})).withConfig({displayName:"FeaturedSummaryItem"})`
  ${$} {
    ${p("typography.definitions.discovery.hed-break-out")}
  }

  ${({hasMorePadding:e})=>e&&`\n  @media (min-width: ${d.lg}) {\n    padding: 0 ${u(5)};\n  }\n\n  @media (min-width: ${d.xl}) {\n    padding: 0 ${u(10)};\n  }\n  \n  @media (min-width: ${d.xxl}) {\n    padding: 0 ${u(15)};\n  }\n  `};
`,q=r.div.withConfig({displayName:"ShowMoreButtonWrapper"})`
  display: grid;
  max-width: fit-content;
  place-items: center;
  ${({hasShowMoreButtonBottomMargin:e})=>(e=>{const t=e?8:0;return`\n    margin: ${u(4)} auto ${u(t)};\n    @media (min-width: ${d.lg}) {\n      margin: ${u(3)} auto ${u(t)};\n    }\n  `})(e)}
`;e.exports={SummaryCollageTwoColumnWrapper:M,SummaryCollageOneColumnWrapper:O,Wrapper:_,GridWithMargins:R,SummaryCollageFiftyFiftyTitleWrapper:V,Title:F,StickyColumn:A,SecondaryColumnWrapper:W,OneColumnWrapper:L,Column:j,Container:U,AdWrapper:G,FeaturedSummaryItem:z,ShowMoreButtonWrapper:q}},28716:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{useEffect:n,useState:s}=o(67294),l=o(23493),{componentTracking:d}=o(28601),m=o(32168),c=o(44031),u=o(7279),p=o(32574),{trackComponent:g}=o(40199),{SummaryCollageFiveBGWrapper:h,SummaryCollageFiveFooterWrapper:y,SummaryCollageFiveSectionTitle:b,SummaryCollageFiveItem:S,SummaryCollageFiveWrapper:C}=o(24701),{asConfiguredComponent:f}=o(36380),$=o(26215),v=({className:e,dangerousDek:t,dangerousHed:o,featuredFooter:i,hasBylineBeforeDek:f,hideRubricItemSummary:v,hideVerticalBorders:w,hasLightBackground:k,hasMinimalSummaryItem:T,hasSectionTitleDekColor:I,hasTopPadding:x,items:B,recircRiver:E,sectionTitleVariation:D,shouldAlignDekAtBottom:H,shouldHideBylines:N,shouldHideMetadataSecondary:P,shouldMakePrimaryCardSticky:M,shouldEnableBundleComponentAnalytics:L,shouldShowDek:F,shouldShowStackedRatingsCard:A,shouldTitleHasTopSpacing:O,shouldUseFeaturedFooter:_,shouldUseAlternativeStyle:R,summaryItemRubricVariation:V,summaryItemVariation:W,trackingNamespace:j,variations:U,variationName:G})=>{const[z,q]=s(0),K=()=>{const e=document.querySelector(".site-navigation");let t=0;e&&({offsetHeight:t}=e),q(t/8)};if(n((()=>{g("SummaryCollageFive",G)}),[G]),n((()=>{if(M){const e=l(K,150);return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}})),B.length<5)return null;const{shouldDisplayItemsBelow:J,shouldShowSubHed:Q}=U||{},Z=T?{shouldHideBylines:!0,hideRubricItemSummary:!0,shouldHidePublishDate:!0,shouldHideMetadataSecondary:!0,shouldHideIcon:!0,shouldHideDangerousDek:!0,hasUnderlineHed:!1,hasTighterVerticalSpacing:!0}:{},X=m[D]||m,Y=B.slice(0,5),ee=o;let te=0,oe={};return A&&(oe={hasIcon:!0,hasRoundedBorder:!1,hasRubric:!0,maxDekLines:0,maxHedLines:0}),r.createElement(h,{hasLightBackground:k},r.createElement(C,{className:a("summary-collage-five",e),dangerousHed:o,hasMinimalSummaryItem:T,hasTopPadding:x,hideVerticalBorders:w,shouldDisplayItemsBelow:J,shouldUseAlternativeStyle:R,shouldHideBottomMargin:!0},r.createElement(b,{as:X,dangerousHed:o,hedTag:"h2",className:"summary-collage-five__title",dangerousSubHed:Q&&t?t:void 0,dangerousDek:F&&t?t:void 0,hasSectionTitleDekColor:I,hasTopSpacing:O,shouldUseAlternativeStyle:R}),Y.filter((e=>e.image)).map(((e,t)=>{const o=c[J?0===t?"SideBySideTwoThirdsImageLeft":"SideBySideThirdsImageRightHedOnly":W],a=A?$:o,i=d.addDataSectionTitleAttribute(L,0===t?null==j?void 0:j.center:null==j?void 0:j.aside,t>0?te++:void 0);return r.createElement(S,Object.assign({as:a},e,oe,{DangerousHedProp:ee,key:t,hasMinimalSummaryItem:T,isSticky:M&&0===t,analyticsDataAttribute:i,hasBylineBeforeDek:f,headerHeight:z,hedTag:"h3",hideRubricItemSummary:v,shouldDisplayItemsBelow:J,summaryItemPosition:t+1,recircRiver:E,rubricVariation:V,shouldAlignDekAtBottom:H,shouldHideBylines:N,shouldHideMetadataSecondary:P,shouldUseAlternativeStyle:R},Z))})),_&&i&&i.link&&i.label&&r.createElement(y,null,r.createElement(u.Utility,{btnStyle:"text",href:i.link,inputKind:"link",label:i.label,ButtonIcon:p,hasEnableIcon:!0}))))};v.propTypes={className:i.string,dangerousDek:i.string,dangerousHed:i.string,featuredFooter:i.shape({link:i.string,label:i.string}),hasBylineBeforeDek:i.bool,hasLightBackground:i.bool,hasMinimalSummaryItem:i.bool,hasSectionTitleDekColor:i.bool,hasTopPadding:i.bool,hideRubricItemSummary:i.bool,hideVerticalBorders:i.bool,items:i.arrayOf(i.shape(c.propTypes)).isRequired,recircRiver:i.string,sectionTitleVariation:i.string,shouldAlignDekAtBottom:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldHideBylines:i.bool,shouldHideMetadataSecondary:i.bool,shouldMakePrimaryCardSticky:i.bool,shouldShowDek:i.bool,shouldShowStackedRatingsCard:i.bool,shouldTitleHasTopSpacing:i.bool,shouldUseAlternativeStyle:i.bool,shouldUseFeaturedFooter:i.bool,summaryItemRubricVariation:i.string,summaryItemVariation:i.string,trackingNamespace:i.object,variationName:i.string,variations:i.shape({shouldDisplayItemsBelow:i.bool,shouldShowSubHed:i.bool})},v.defaultProps={dangerousDek:"",hasBylineBeforeDek:!1,hasLightBackground:!1,hasMinimalSummaryItem:!1,hasSectionTitleDekColor:!1,hasTopPadding:!1,hideRubricItemSummary:!1,hideVerticalBorders:!1,sectionTitleVariation:"LineAboveLineBelowTextCenter",shouldAlignDekAtBottom:!1,shouldHideBylines:!1,shouldHideMetadataSecondary:!1,shouldMakePrimaryCardSticky:!1,shouldShowDek:!1,shouldShowStackedRatingsCard:!1,shouldUseAlternativeStyle:!1,summaryItemVariation:"TextBelowLeft",variations:{shouldDisplayItemsBelow:!1,shouldShowSubHed:!1}},v.displayName="SummaryCollageFive",e.exports=f(v,"SummaryCollageFive")},47736:(e,t,o)=>{e.exports=o(50684)},24701:(e,t,o)=>{const{default:a,css:i}=o(51117),{calculateSpacing:r,getColorToken:n,getTypographyStyles:s,getLinkStyles:l,minMaxScreen:d,minScreen:m,maxScreen:c}=o(79720),{minThresholds:u,maxThresholds:p}=o(28657),{cssVariablesCollage:g,universalGridCore:h}=o(61774),{BREAKPOINTS:y}=o(85326),{ButtonIconWrapper:b,ButtonLabel:S}=o(41909),{cssVariablesGrid:C,applyGridSpacing:f}=o(62470),{ResponsiveClipWrapper:$}=o(499),{SpanWrapper:v}=o(89676),{ResponsiveImageContainer:w}=o(7230),{RubricWrapper:k}=o(7320),{ContentWrapper:T,StackedRatingsCardWrapper:I}=o(92729),{applyGridMixin:x}=o(34638),{SummaryItemHedBase:B}=o(27853),{SummaryItemWrapper:E,SummaryItemStickyWrapper:D}=o(88269),H=a.div.withConfig({displayName:"SummaryCollageFiveFooterWrapper"})`
  display: flex;
  grid-column: 1 / -1;
  align-items: center;
  justify-content: flex-end;

  a {
    ${({theme:e})=>l(e,"colors.consumption.lead.standard.link")};
    ${b} {
      padding-left: ${r(.3)};

      .icon-arrow {
        width: 18px;
      }
    }
  }
  ${S} {
    ${({theme:e})=>s(e,"typography.definitions.foundation.link-secondary")};
  }
`,N=a.span.withConfig({displayName:"SummaryCollageFiveSectionTitle"})`
  grid-column: 1/-1;
  grid-row: 1;
  ${({shouldUseAlternativeStyle:e})=>e?`margin-bottom: ${r(0)};`:` margin-bottom: ${r(2)};\n    @media (min-width: ${y.md}) {\n      margin-bottom: ${r(1)};\n    }\n    @media (min-width: ${y.lg}) {\n      margin-bottom: ${r(0)};\n    }`}
`,P=`\n  &&& {\n    ${m(y.md)} {\n      padding-right: ${r(3)};\n      padding-left: ${r(3)};\n\n      .summary-item__content.summary-item__content--minimal {\n        padding-top: ${r(4)};\n      }\n\n      .summary-item__image {\n        padding-right: ${r(2)};\n        padding-left: ${r(2)};\n      }\n    }\n\n    @media (min-width: ${u.md+1}px) {\n      padding-right: ${r(1)};\n      padding-left: ${r(1)};\n\n      .summary-item__image {\n        padding: 0;\n      }\n    }\n\n    ${m(y.lg)} {\n      padding-right: ${r(3)};\n      padding-left: ${r(3)};\n\n      .summary-item__image {\n        padding: 0;\n      }\n    }\n  }\n`,M=i`
  .summary-item__hed {
    ${m(y.md)} {
      ${s("typography.definitions.discovery.hed-core-secondary")};
    }
  }
`,L=i`
  && {
    border-top: 1px solid ${n("colors.discovery.body.white.border")};
    padding-top: ${r(4)};
  }
`,F=i`
  .summary-item__hed {
    margin-bottom: 0.5rem;
  }
  ${d(0,`${p.md}px`)} {
    &&& {
      grid-column: 1 / span 12;
      grid-row: auto;
      grid-template-areas: 'content content content image';
      grid-template-columns: repeat(4, 1fr);

      &.summary-item--has-border-sides {
        && {
          border-right-style: none;
        }
      }
    }
    margin: 0;
    border-bottom: 1px solid
      ${n("colors.discovery.body.white.divider")};
    ${({shouldUseAlternativeStyle:e})=>e?"":"padding: 0 0 16px 0;"}
  }
`,A=i`
  &&& {
    grid-column: 1 / -1;
    grid-row: 2 / span 1;
    margin-right: 0;
    margin-left: 0;
    border-right: none;
    border-bottom: 1px solid
      ${n("colors.discovery.body.white.divider")};
    border-left: none;
    padding-right: 0;
    padding-bottom: 24px;
    padding-left: 0;
  }

  ${d(0,`${p.md}px`)} {
    padding-bottom: 16px;
  }

  ${m(y.md)} {
    margin-top: -8px;
  }

  &&& {
    .summary-item__hed {
      ${s("typography.definitions.discovery.hed-break-out")};
    }
  }

  .summary-item__dek {
    ${s("typography.definitions.discovery.description-core")};

    ${d(y.lg,`${p.xl}px`)} {
      max-height: 5rem;
      overflow: scroll;
      text-align: left;
      text-overflow: ellipsis;
    }
  }

  .summary-item__content {
    .rubric.summary-item__rubric {
      margin-bottom: 16px;
      ${d(y.md,`${p.lg}px`)} {
        margin-bottom: ${r(1)};
      }
    }
  }

  ${d(y.md,`${p.lg}px`)} {
    &.summary-item--layout-proportions-66-33.summary-item--layout-position-image-left {
      ${`\n  ${C()}\n    \n  display: grid;\n  grid-column-gap: ${r(2)};\n  grid-template-areas: 'image content';\n  grid-template-columns: repeat(2, 1fr);\n  align-items: center;\n\n  &.summary-item--layout-position-image-right {\n    grid-template-areas: 'content image';\n  }\n\n  &.summary-item--videodekposition {\n    ${m(`${p.md}px`)} {\n      border-bottom: 0;\n    }\n\n    .summary-item__image-link {\n      max-width: 100%;\n    }\n  }\n\n  &.summary-item--videodekposition:first-of-type {\n    ${c(y.md)} {\n      display: block;\n    }\n  }\n\n  .summary-item__asset-container--align-top {\n    align-self: start;\n  }\n\n  .summary-item__asset-container {\n    grid-area: image;\n  }\n\n  .summary-item__content {\n    grid-area: content;\n    padding-top: 0;\n  }\n\n  &.summary-item--videodekposition:first-of-type\n    > .summary-item__content--margintop {\n    padding-top: 0;\n    ${m(y.md)} {\n      margin-top: calculate-spacing(2);\n    }\n  }\n`};
      grid-template-columns: 1fr;
      align-items: start;

      .summary-item__asset-container,
      .summary-item__content {
        grid-column: 1 / -1;
        grid-row: auto;
      }

      .summary-item__asset-container {
        padding-bottom: 24px;
      }

      .summary-item__content.summary-item__content--bottom-dek {
        .summary-item__byline-date-icon--pre-dek {
          margin: 8px 0 14px 0;
        }
      }
    }
  }

  ${d(0,`${p.md}px`)} {
    &&& {
      grid-column: 1 / span 12;
      grid-row: auto;
      border-bottom: 1px solid
        ${n("colors.discovery.body.white.divider")};

      &.summary-item--has-border-sides {
        border-right-style: none;
      }
    }
    margin: 0;
    padding: 0 0 10px 0;

    &.summary-item--layout-proportions-66-33.summary-item--layout-position-image-left {
      ${x()}
      grid-template-columns: 1fr;
      align-items: start;

      .summary-item__asset-container,
      .summary-item__content {
        grid-column: 1 / -1;
        grid-row: auto;

        .rubric {
          &.summary-item__rubric {
            margin-bottom: 8px;
          }
        }
      }

      .summary-item__asset-container {
        padding-bottom: 16px;
      }
    }
  }
`,O=i`
  && {
    grid-column: 1 / 4;
    grid-row: 3 / span 1;
    padding-right: 16px;
  }

  &.summary-item--has-border-sides {
    border-right: none;
  }

  ${F}

  ${d(y.md,`${p.lg}px`)} {
    &&& {
      grid-column: 1 / 7;
      grid-row: 3 / span 1;
      border-bottom: 1px solid
        ${n("colors.discovery.body.white.divider")};
      padding-right: 12px;
    }

    padding-bottom: 24px;

    &.summary-item--has-border-sides {
      && {
        border-right-style: none;
      }
    }

    &::after {
      position: absolute;
      top: 0%;
      right: 0;
      border-right: 1px solid
        ${n("colors.discovery.body.white.divider")};
      height: 80%;
      content: '';
    }
  }
  ${d("1025px",`calc(${y.xl} - 1px)`)} {
    .summary-item__content--bottom-dek {
      margin-right: ${r(-4)};
      width: 100%;
    }
  }
`,_=i`
  &&& {
    grid-column: 4 / 7;
  }
  margin-left: calc(-1 * var(--grid-gap));
  padding-right: 16px;
  padding-left: 16px;

  ${d(y.md,`${p.lg}px`)} {
    &.summary-item--has-border-sides {
      && {
        border-right-style: none;
      }
    }

    &&& {
      grid-column: 7 / -1;
      grid-row: 3 / span 1;
      border-bottom: 1px solid
        ${n("colors.discovery.body.white.divider")};
      padding-right: 0;
      padding-left: 12px;
    }
    padding-bottom: 16px;
  }

  ${F}
  ${d("1025px",`calc(${y.xl} - 1px)`)} {
    .summary-item__content--bottom-dek {
      margin-right: ${r(-2)};
    }
  }
`,R=i`
  && {
    grid-column: 7 / 10;
    grid-row: 3 / span 1;
    padding-right: 16px;
  }
  margin-left: -16px;
  ${d(y.md,`${p.lg}px`)} {
    &&& {
      grid-column: 1 / 7;
      grid-row: 4 / span 1;
      margin-left: 0;
      padding-right: 12px;
      padding-bottom: 0;
    }
  }
  ${d(0,`${p.md}px`)} {
    margin-left: 0;
  }

  ${F}
  ${d("1025px",`calc(${y.xl} - 1px)`)} {
    .summary-item__content--bottom-dek {
      margin-right: ${r(-2)};
    }
  }
`,V=i`
  && {
    grid-column: 10 / -1;
    padding-left: 16px;
  }
  margin-left: calc(-1 * var(--grid-gap));

  ${d(y.md,`${p.lg}px`)} {
    grid-row: 4 / span 1;
    padding-bottom: 0;

    && {
      grid-column: 7/-1;
    }
    padding-left: 12px;
  }

  ${d(0,`${p.md}px`)} {
    &&& {
      border-bottom: none;
    }
  }
  ${d("1025px",`calc(${y.xl} - 1px)`)} {
    .summary-item__content--bottom-dek {
      margin-right: ${r(-1)};
    }
  }
  ${F}
  &.summary-item--has-border-sides {
    && {
      border-right-style: none;
    }
  }
`,W=a.div.withConfig({displayName:"SummaryCollageFiveItem"})`
  grid-column: 1 / -1; //1

  .summary-item__image,
  ${w} {
    width: 100%;
  }

  ${$} {
    margin-bottom: 0;
  }

  /* Remove bottom border from all devices except mobile */
  && {
    ${m(y.md)} {
      border-bottom: none;
    }
  }

  ${({shouldDisplayItemsBelow:e,summaryItemPosition:t})=>e&&i`
      &.summary-item--layout-placement-side-by-side {
        align-items: start;
      }

      &.summary-item--layout-position-image-right.summary-item--layout-proportions-33-66 {
        .summary-item__content {
          &.summary-item__content--no-rubric {
            padding-top: 0;
          }
        }
      }

      &.summary-item {
        ${$} {
          margin-bottom: 0;
        }
      }
      ${(e=>{switch(e){case 1:return A;case 2:return O;case 3:return _;case 4:return R;case 5:return V;default:return""}})(t)};
    `}

  /* 1. css-grid: spans 6 columns starting 3 columns in (desktop/tablet)
     2. css-grid: spans 2 rows starting from the first row (desktop/tablet)
     3. override featured summary-item typography token for this composition */
  ${({DangerousHedProp:e,hasMinimalSummaryItem:t,shouldDisplayItemsBelow:o,summaryItemPosition:a})=>{switch(a){case 1:return i`
          ${(e=>i`
  ${m(y.md)} {
    grid-column: 4 / span 6;
    margin-right: calc(var(--border-offset) * -1);
    margin-left: calc(var(--border-offset) * -1);
    border-right: 1px solid
      ${n("colors.discovery.body.white.border")};
    border-left: 1px solid
      ${n("colors.discovery.body.white.border")};
    padding-right: var(--border-offset);
    padding-left: var(--border-offset);

    &.summary-item--card {
      margin-right: 0;
      margin-left: 0;
      border: 0;
      padding: 0;
    }
  }

  &.summary-item:not(.summary-item--card) {
    .summary-item__content {
      padding-bottom: 0;
    }
  }

  .summary-item__content.summary-item__content--bottom-dek {
    position: relative;
    height: 100%;

    .summary-item__metadata-secondary-without-mobile-margin {
      margin-bottom: ${r(4)};
    }

    .summary-item__byline-date-icon--pre-dek {
      margin: 8px 0 14px 0;
    }
  }

  ${v}.summary-item__image {
    ${d(0,y.md)} {
      width: auto;
    }
  }

  ${e&&P}

  .summary-item__hed {
    ${s("typography.definitions.discovery.hed-break-out")};

    ${m(y.md)} {
      ${s("typography.definitions.discovery.hed-feature")};
    }
  }

  .summary-item__dek {
    @media (max-width: ${y.md}) {
      ${s("typography.definitions.discovery.description-feature")};
    }
  }

  &.summary-item--card {
    ${d(0,y.md)} {
      margin-right: ${r(-3)};
      margin-left: ${r(-3)};
    }

    .summary-item__content {
      ${m(y.lg)} {
        padding-top: ${r(4)};
      }
    }
  }

  &.summary-item {
    ${m(y.md)} {
      margin-bottom: 0;
    }
  }
`)(t)};
          ${e?"grid-row: 2 / span 2;":"grid-row: 1 / span 2;"}
        `;case 2:return i`
          ${M}
          ${m(y.md)} {
            position: relative; /* 2 */
            grid-column: 1 / span 3; /* 1 */
            grid-row: 2; /* 1 */
            ${!e&&"grid-row: 1;"}
            &.summary-item--card {
              margin-bottom: 0;
            }
          }
          ${t&&L}
        `;case 3:return i`
          ${M}
          &.summary-item {
            ${m(y.md)} {
              margin-bottom: 0;
            }
          }
          ${m(y.md)} {
            grid-column: 1 / span 3;
          }
        `;case 4:return i`
          ${M}
          ${m(y.md)} {
            position: relative; /* 2 */
            grid-column: 10 / span 3; /* 1 */
            grid-row: 2; /* 1 */
            ${!e&&"grid-row: 1;"}
            &.summary-item--card {
              margin-bottom: 0;
            }
          }
          ${t&&L}
        `;case 5:return i`
          ${M}
          &.summary-item {
            ${m(y.md)} {
              margin-bottom: 0;
            }
          }
          ${m(y.md)} {
            grid-column: 10 / span 3; /* 1 */
          }
          ${d(0,y.md)} {
            && {
              margin-bottom: 0;
              padding-bottom: 0;
            }
          }
        `;default:return""}}}

  ${({headerHeight:e})=>e&&`\n    ${D} {\n      top: ${r(e)};\n    }\n  `}
`,j=`\n&& {\n  .summary-item__rubric {\n    margin-bottom: ${r(2)};\n  }\n\n  .summary-item__hed {\n    margin-bottom: ${r(2)};\n  }\n\n  .summary-item--card {\n    .summary-item__content {\n      padding-top: ${r(2)};\n    }\n  }\n\n\n  ${m(y.lg)} {\n    .summary-item__rubric {\n      margin-bottom: ${r(2)};\n    }\n\n    .summary-item__hed {\n      margin-bottom: ${r(2)};\n\n      &.summary-item__hed--no-margin-bottom {\n        margin-bottom: 0;\n      }\n    }\n  }\n}\n`,U=`\n  ${m(y.lg)} {\n        .summary-item__dek {\n          margin-bottom: ${r(1)};\n        }\n\n        .summary-item__metadata-primary {\n          margin-bottom: ${r(1)};\n        }\n\n        .summary-item__metadata-secondary {\n          margin-bottom: ${r(2)};\n        }\n      }\n  }\n`,G=a("div").withConfig({displayName:"SummaryCollageFiveWrapper"})`
  ${g()};
  ${h()};
  ${f("padding")};

  ${d(0,y.md)} {
    ${N} {
      grid-column: 1 / span 12;
    }
  }

  ${()=>`\n  ${I} {\n    ${T} {\n      padding: ${r(2)} 0 0;\n    }\n\n    ${k} {\n      margin-bottom: ${r(1)};\n    }\n  }\n`};

  ${({hasTopPadding:e})=>e&&`padding-top: ${r(4)}`};

  ${d(0,`${p.md}px`)} {
    &&& {
      column-gap: 0;
    }
  }
  ${({shouldUseAlternativeStyle:e})=>e?`padding-bottom: ${r(5)};\n\n    ${m(y.lg)} {\n      row-gap: ${r(3)};\n    }\n  \n    ${d(`${p.md}px`,`${p.lg}px`)} {\n      row-gap: ${r(2)};\n    }\n  \n    ${c(y.md)} {\n      grid-gap: 0;\n    } `:` ${m(y.md)} {\n      padding-bottom: ${r(5)};`}

  ${({hasMinimalSummaryItem:e})=>e&&` ${m(y.lg)} {\n      padding-bottom: ${r(2)};\n    }`}

  ${({hideVerticalBorders:e})=>e&&" .summary-item {\n      margin-right: 0;\n      margin-left: 0;\n      border-right: 0;\n      border-left: 0;\n      padding: 0;\n    }"}

    ${({dangerousHed:e})=>e?` ${W}:not(:nth-child(2)) {\n            ${U}\n      };`:`${j}{\n          ${W}:not(:first-child) {\n              ${U}\n          }\n        };`}
        
    ${({shouldUseAlternativeStyle:e})=>e?`${B} {\n            margin: ${r(2)} 0;\n          }\n          ${E} {\n            padding-bottom: ${r(2)};\n            ${c(y.md)} {\n              padding: ${r(2)} 0;\n            }\n          }\n        \n      & > div[data-section-title='summary collage 5/hero'] {\n            ${c(y.md)} {\n              margin-top: ${r(3)};\n            }\n        \n            ${d(`${p.md}px`,`${p.lg}px`)} {\n              margin-top: ${r(1)};\n            }\n        \n            ${m(y.lg)} {\n              margin-top: 0;\n            }\n          }`:""}
`,z=a.div.withConfig({displayName:"SummaryCollageFiveBGWrapper"})`
  ${({hasLightBackground:e,theme:t})=>e&&`\n      background: ${n(t,"colors.discovery.body.light.background")};\n    `}
`;e.exports={SummaryCollageFiveBGWrapper:z,SummaryCollageFiveFooterWrapper:H,SummaryCollageFiveSectionTitle:N,SummaryCollageFiveItem:W,SummaryCollageFiveWrapper:G}},50684:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(28716);i.RowsWithDekAndItemsBelow=a(i,"RowsWithDekAndItemsBelow",{shouldDisplayItemsBelow:!0,shouldShowSubHed:!0},{}),e.exports=i},36066:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{useEffect:n,useState:s}=o(67294),l=o(50361),d=o(23493),m=o(32246),c=o(44031),{componentTracking:u}=o(28601),{trackComponent:p}=o(40199),{SummaryCollageFourUnderMainItem:g,SummaryCollageMainItemBadge:h,SummaryCollageFourMainItem:y,SummaryCollageFourSummaryListItem:b,SummaryCollageFourSubMainItem:S,SummaryCollageFourSubMainItem2:C,SummaryCollageFourWrapper:f}=o(52340),$=o(26215),v=({className:e,dangerousHed:t,shouldEnableSubItems:o,hasBordersForFirstAndLastItem:i,hasRoundedBorder:v,hasTitleBorder:w,hasUnderHeroItem:k,hideBottomBorders:T,hideRubricItemSummary:I,hideLastFewSummaryImages:x,hideSummaryListDeks:B,hideSummaryMainItemDeks:E,hideVerticalBorders:D,isMainSummaryItemSticky:H,items:N,recircRiver:P,shouldEnableBundleComponentAnalytics:M,shouldHideBylines:L,shouldHidePublishDate:F,shouldShowRecipeBadge:A,shouldUseHedCoreSecondaryToken:O,sectionTitleVariation:_,shouldShowStackedRatingsCard:R,summaryItemVariation:V,trackingNamespace:W,hasCoverCollage:j,underHeroItemVariation:U,isTitleFullWidth:G})=>{r.useEffect((()=>{p("SummaryCollageFour")}),[]);const[z,q]=s(0),K=()=>{let e=document.querySelector(".site-navigation").offsetHeight;e/=8,q(e)};n((()=>{if(H){const e=d(K,150);return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}}));const J=l(N),Q=x?J.map(((e,t)=>(t>1&&e.image&&!j&&(e.image=null),j&&0===t&&(e.rubricVariation="Inverted",e.shouldHideEventDate=!1,e.metadataPrimary=""),e))):J,Z="recipe"===Q[0].contentType,X=k?3:void 0,Y=u.addDataSectionTitleAttribute(M,(null==W?void 0:W.hero)||t),ee=u.addDataSectionTitleAttribute(M,(null==W?void 0:W.under)||t),te=j?c.OverlayCenter:c[V];let oe={};return R&&(oe={hasRubric:!0,ratingMethod:"starRating"}),r.createElement(f,{className:a("summary-collage-four",e,{"summary-collage--without-vertical-borders":D}),hasTitleBorder:w,hasCoverCollage:j},r.createElement(y,Object.assign({},Q[0],{hasCoverCollage:j,as:R?$:te,analyticsDataAttribute:Y,className:"summary-collage-four__main-item",headerHeight:z,hideRubricItemSummary:I,isMainSummaryItemSticky:H,recircRiver:P,shouldHideBylines:L,shouldHideDangerousDek:E,shouldHidePublishDate:F,hasBordersForFirstAndLastItem:i},oe,{hasRoundedBorder:v,isTitleFullWidth:G})),A&&Z&&r.createElement(h,{award:{badgeUrl:"/verso/static/epicurious/assets/icons/featuredRecipeBadge.svg"},hasStaticPositionedAward:!0}),!o&&r.createElement(b,{className:"summary-collage-four__summary-list-item",hasUnderHeroItem:k,hasBordersForFirstAndLastItem:i,hideBottomBorders:T,hideVerticalBorders:D,as:m.Collection,dangerousHed:t,shouldEnableBundleComponentAnalytics:M,shouldHideDangerousDek:B,items:Q.slice(1,X),sectionTitleVariation:_,summaryItemVariation:V,shouldHideBylines:L,shouldHidePublishDate:F,trackingNamespace:null==W?void 0:W.aside,recircRiver:P,hasCoverCollage:j,hasRoundedBorder:v,shouldUseHedCoreSecondaryToken:O,shouldShowStackedRatingsCard:R}),o&&r.createElement(r.Fragment,null,r.createElement(S,Object.assign({},Q[1],{hasCoverCollage:j,as:R?$:te,analyticsDataAttribute:Y,hideRubricItemSummary:I,recircRiver:P,shouldHideBylines:L,shouldHideDangerousDek:E,shouldHidePublishDate:F},oe)),r.createElement(C,Object.assign({},Q[2],{hasCoverCollage:j,as:R?$:te,analyticsDataAttribute:Y,hideRubricItemSummary:I,recircRiver:P,shouldHideBylines:L,shouldHideDangerousDek:E,shouldHidePublishDate:F},oe))),k&&r.createElement(g,Object.assign({},Q[3],{hasCoverCollage:j,as:R?$:c[U],analyticsDataAttribute:ee,className:"summary-collage-four__under-main-item",hideRubricItemSummary:I,recircRiver:P,shouldHideBylines:L,shouldHideDangerousDek:E,shouldHidePublishDate:F},oe)))};v.propTypes={className:i.string,dangerousHed:i.string,hasBordersForFirstAndLastItem:i.bool,hasCoverCollage:i.bool,hasRoundedBorder:i.bool,hasTitleBorder:i.bool,hasUnderHeroItem:i.bool,hideBottomBorders:i.bool,hideLastFewSummaryImages:i.bool,hideRubricItemSummary:i.bool,hideSummaryListDeks:i.bool,hideSummaryMainItemDeks:i.bool,hideVerticalBorders:i.bool,isMainSummaryItemSticky:i.bool,isTitleFullWidth:i.bool,items:i.arrayOf(i.shape(c.propTypes)).isRequired,recircRiver:i.string,sectionTitleVariation:i.string,shouldEnableBundleComponentAnalytics:i.bool,shouldEnableSubItems:i.bool,shouldHideBylines:i.bool,shouldHidePublishDate:i.bool,shouldShowRecipeBadge:i.bool,shouldShowStackedRatingsCard:i.bool,shouldUseHedCoreSecondaryToken:i.bool,summaryItemVariation:i.string,trackingNamespace:i.object,underHeroItemVariation:i.string},v.defaultProps={hasBordersForFirstAndLastItem:!1,hasTitleBorder:!0,hasUnderHeroItem:!1,hideBottomBorders:!1,hideLastFewSummaryImages:!0,hideRubricItemSummary:!1,hideSummaryListDeks:!0,hideSummaryMainItemDeks:!1,hideVerticalBorders:!1,isMainSummaryItemSticky:!1,sectionTitleVariation:"TextLeft",shouldEnableSubItems:!1,shouldHideBylines:!1,shouldHidePublishDate:!0,shouldShowStackedRatingsCard:!1,shouldUseHedCoreSecondaryToken:!1,summaryItemVariation:"TextBelowLeft",underHeroItemVariation:"TextBelowLeft"},e.exports=v},23982:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(36066);i.displayName="SummaryCollageFour",e.exports=a(i,"SummaryCollageFour")},52340:(e,t,o)=>{const{css:a,default:i}=o(51117),{calculateSpacing:r,getColorToken:n,minScreen:s,minMaxScreen:l,getTypographyStyles:d,getColorStyles:m}=o(79720),{applyGridSpacing:c}=o(62470),{cssVariablesCollage:u,universalGridCore:p}=o(61774),{SectionTitleHed:g}=o(80577),{SummaryListTitle:h}=o(41849),y=o(73699),{BadgeImage:b}=o(25143),{BREAKPOINTS:S}=o(85326),{OverlaySummaryItemHed:C,OverlaySummaryItemDate:f,OverlaySummaryItemContent:$}=o(12365),{SummaryItemContent:v}=o(88269),w=i.div.withConfig({displayName:"SummaryCollageFourMainItem"})`
  && {
    grid-column: 1 / -1;
    ${({isTitleFullWidth:e})=>e&&a`
        grid-row: 1 / span 3;
      `};
    margin-bottom: ${r(5)};
    border-bottom: 0;
    ${({hasCoverCollage:e})=>e&&`\n      height: ${r(90)};\n      margin-bottom: ${r(4)};\n      .rubric{\n        background-color: transparent;\n        padding: unset;\n      }\n      ${s(S.md)} {\n        margin-bottom: ${r(6)};\n      }\n    `};

    ${C} {
      ${({theme:e})=>d(e,"typography.definitions.discovery.hed-feature")};
      ${({theme:e})=>m(e,"color","colors.discovery.body.black.heading")};
      margin-top: ${r(.5)};
      margin-bottom: 0;
    }

    ${f} {
      margin-top: ${r(.75)};
    }

    ${$} {
      padding: 0 0 ${r(9)} 0;
    }

    img {
      object-fit: cover;
      object-position: top;
      ${({hasRoundedBorder:e})=>e&&"\n      border-radius:10px;\n    "}
    }

    ${s(S.lg)} {
      grid-column: ${({hasCoverCollage:e})=>e?"1 / span 12":"1 / span 8"};
      padding-right: 0;

      .summary-item__image-link,
      .summary-item__inline-video,
      .summary-item__content {
        padding-right: 0;
      }
    }

    ${({isMainSummaryItemSticky:e})=>e&&`\n      ${s(S.lg)} {\n        position: sticky;\n        margin-bottom: auto;\n      }\n    `};

    ${({headerHeight:e})=>e&&`\n      ${s(S.lg)} {\n        top: ${r(e)};\n      }\n    `};

    ${({hasBordersForFirstAndLastItem:e})=>e&&a`
        border-bottom: 1px solid
          ${n("colors.discovery.body.white.border")};
        ${s(S.sm)} {
          ${v} {
            margin-bottom: ${r(2)};
            padding-bottom: ${r(0)};
          }
          margin-bottom: ${r(2)};
          padding-bottom: ${r(0)};
        }
        ${s(S.md)} {
          ${v} {
            margin-bottom: ${r(2)};
            padding-bottom: ${r(0)};
          }
          margin-bottom: ${r(1)};
        }
        ${s(S.lg)} {
          ${v} {
            padding-bottom: ${r(0)};
          }
          margin-bottom: auto;
        }
      `}
  }

  .summary-item__hed {
    ${d("typography.definitions.discovery.hed-break-out")};

    ${s(S.md)} {
      ${d("typography.definitions.discovery.hed-feature")};
    }
  }

  .summary-item__dek {
    ${d("typography.definitions.discovery.description-feature")};
  }
`,k=i(w).withConfig({displayName:"SummaryCollageFourSubMainItem"})``,T=i(y).withConfig({displayName:"SummaryCollageMainItemBadge"})`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  z-index: 1;
  margin-top: ${r(2)};
  margin-left: ${r(1)};
  width: 100%;
  ${s(S.lg)} {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }
  ${b} {
    @media (max-width: ${S.md}) {
      width: 72px;
      height: 100%;
    }
  }
`,I=i(w).withConfig({displayName:"SummaryCollageFourSubMainItem2"})``,x=i.div.withConfig({displayName:"SummaryCollageFourSummaryListItem"})`
  && {
    grid-column: 1 / -1;
    margin: ${({hasCoverCollage:e})=>e?"0 auto":"0"};
    border-top: unset;
    padding: 0;

    .summary-item {
      margin: 0 0 ${r(2)};
      ${({hasCoverCollage:e})=>!e&&a`
          padding: ${r(2)} 0;
        `}
      ${({hideBottomBorders:e})=>!e&&a`
          border-bottom: 1px solid
            ${n("colors.discovery.body.white.border")};
        `}
        ${s(S.lg)} {
        position: relative;
        margin-bottom: 0;
        overflow: hidden;
      }

      &:first-child {
        padding-top: 0;
      }

      &:last-child {
        border-bottom: none;

        ${l(0,S.md)} {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        ${l(0,S.lg)} {
          &::after {
            display: none;
          }
        }
      }

      .summary-item__hed {
        ${({shouldUseHedCoreSecondaryToken:e})=>d(e?"typography.definitions.discovery.hed-core-secondary":"typography.definitions.discovery.hed-bulletin-primary")}
      }

      ${({hasCoverCollage:e})=>!e&&"\n        .summary-item__hed-link {\n          &::after {\n            display: none;\n          }\n        }  \n      "}

      .summary-item__metadata-primary,
      .summary-item__metadata-secondary {
        display: none;
      }
    }
  }

  ${({hasCoverCollage:e})=>!e&&`\n      && {\n        ${s(S.lg)} {\n          grid-column: 9 / -1;\n          margin-left: calc(var(--border-offset) * -1);\n          border-left: 1px solid\n            ${n("colors.discovery.body.white.border")};\n          padding-left: var(--border-offset);\n          width: calc(100% + var(--border-offset));\n        }\n      `}
  ${({hasCoverCollage:e})=>e&&`\n        &&{\n          ${c("padding")}\n          border-top: unset;\n          .summary-item {\n            margin: unset;\n            ${l(0,S.md)} {\n              margin-bottom: ${r(4)};\n              padding-bottom: ${r(2)};\n            }\n            &:last-child {\n              border-bottom: unset;\n              padding-bottom: ${r(5)};\n              ${s(S.md)} {\n                padding-bottom: ${r(2)};\n              }\n            }\n          }\n          ${s(S.md)} {\n              .summary-list__items{\n                display: grid;\n                grid-template-columns: repeat(12,1fr);\n                column-gap: var(--grid-gap);\n                row-gap: var(--grid-gap);\n        \n                .summary-list__item {\n                  &:nth-of-type(1){\n                    grid-column:1 / span 4;\n                  }\n                  &:nth-of-type(2){\n                    grid-column:5 / span 4;\n                  }\n                  &:nth-of-type(3){\n                    grid-column:9 / span 4;\n                  }\n                }\n              }\n            }\n          }  \n        }\n    `}

  ${({hideVerticalBorders:e})=>e&&"&&& {\n      border-left: 0;\n      padding-left: 0;\n      }"}

  ${({hasUnderHeroItem:e})=>e&&"grid-row-end: span 2;"}

  ${({hasBordersForFirstAndLastItem:e})=>e&&a`
      .summary-item:last-child {
        border-bottom: 1px solid
          ${n("colors.discovery.body.white.border")};
        ${s(S.sm)} {
          ${v} {
            padding-bottom: ${r(0)};
          }
          margin-bottom: ${r(0)};
          padding-bottom: ${r(2)};
        }
        ${s(S.md)} {
          ${v} {
            margin-bottom: ${r(2)};
            padding-bottom: ${r(0)};
          }
          padding-bottom: ${r(0)};
        }
        ${s(S.lg)} {
          margin-bottom: ${r(0)};
        }
      }
    `}
    img {
    ${({hasRoundedBorder:e})=>e&&"\n        border-radius:10px;\n      "}
  }
`,B=i.div.withConfig({displayName:"SummaryCollageFourUnderMainItem"})`
  grid-column: 1 / -1;

  ${s(S.lg)} {
    grid-column: ${({hasCoverCollage:e})=>e?"1 / span 12":"1 / span 8"};
    border-top: 1px solid ${n("colors.discovery.body.white.border")};
    border-bottom: none;
  }

  .summary-item__asset-container {
    ${s(S.lg)} {
      margin-top: ${r(1)};
    }
  }
`,E=i.div.withConfig({displayName:"SummaryCollageFourWrapper"})`
  ${p()}
  ${u()}
  ${({hasCoverCollage:e})=>!e&&c("padding")}

  ${({hasCoverCollage:e})=>e&&"\n    display: unset;\n    row-gap:unset;\n  "}

  ${h} {
    margin-bottom: 0;
  }

  ${g} {
    padding-left: 0;
  }

  ${({hasTitleBorder:e})=>e&&a`
      ${h} {
        border-top: 1px solid
          ${n("colors.discovery.body.white.divider")};
        border-bottom: 1px solid
          ${n("colors.discovery.body.white.border")};
      }
    `}
`;e.exports={SummaryCollageFourMainItem:w,SummaryCollageMainItemBadge:T,SummaryCollageFourSubMainItem:k,SummaryCollageFourSubMainItem2:I,SummaryCollageFourSummaryListItem:x,SummaryCollageFourUnderMainItem:B,SummaryCollageFourWrapper:E}},18553:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{useState:n,useEffect:s}=o(67294),l=o(32168),d=o(32246),m=o(44031),c=o(7046),{PaymentGateway:u}=o(28576),{SummaryCollageNineTitle:p,SummaryCollageNineTitleWrapper:g,SummaryCollageNineSummaryCollageFour:h,SummaryCollageNineSummaryList:y,SummaryCollageNineGrid:b,SummaryCollageNineGridItemList:S,SummaryCollageNineGridItemListButtonWrapper:C,SummaryCollageNineAdRailContainer:f,SummaryCollageNineAdRail:$,SummaryCollageNineSummaryCarousel:v,SummaryCollageNineSummaryListItems:w}=o(94569),k=o(28657),{trackComponent:T}=o(40199),I=o(38915),x=({className:e,curatedSearchHed:t,dangerousDek:o,dangerousHed:i,shouldEnableChannelFeatures:m,featuredDangerousHed:x,featuredFooter:B,hasUnderlineHed:E,hideBottomBorders:D,hideRubricItemSummary:H,hideVerticalBorders:N,hideBottomBordersforMainFour:P,listItemsLimit:M,isCenterAlignedWithTopDividerOnly:L,items:F,primarySummaryItemVariation:A,rightColumnFeature:O,recircRiver:_,sectionTitleVariation:R,shouldUseFeaturedTitleAndFooter:V,shouldEnableBundleComponentAnalytics:W,shouldHideBylines:j,shouldHideBylinesInSummaryList:U,shouldHideDangerousDek:G,shouldHideDangerousDekInFeaturedItems:z,shouldHideDangerousDekInSummaryList:q,shouldLimitListItemsOnMobile:K,shouldUseDekAsHed:J,showTopBorderInSummaryTitle:Q,summaryListSummaryItemVariation:Z,summaryListHed:X,summaryItemVariation:Y,summarySectionTitleVariation:ee,trackingNamespace:te,showSummaryCarousel:oe})=>{const[ae,ie]=r.useState(!0);r.useEffect((()=>{T("SummaryCollageNine")}),[]);const re=l[R],ne=J?o:V&&x||i,se=G?"":o,le=X||t,de=!!ne,[me,ce]=n(5);let ue={};return O&&(ue={hasFeatured:!0,summaryItemFeatured:O}),s((()=>{K&&window.innerWidth<k.minThresholds.xl&&ce(M)}),[M,K]),r.createElement(b,{className:a("summary-collage-nine",{"summary-collage--without-vertical-borders":N},e),enableChannelFeatures:m},ne&&r.createElement(g,{showTopBorderInSummaryTitle:Q,enableChannelFeatures:m},r.createElement(p,{as:re,dangerousHed:ne,dangerousDek:se,enableChannelFeatures:m})),r.createElement(h,{shouldEnableBundleComponentAnalytics:W,items:F.slice(0,4),hasBorder:!D,hideBottomBorders:P,hasUnderHeroItem:!0,hideLastFewSummaryImages:!1,hideSummaryListDeks:z,hideSummaryMainItemDeks:z,hideVerticalBorders:N,recircRiver:_,enableChannelFeatures:m,shouldHideBylines:j,summaryItemVariation:A,trackingNamespace:null==te?void 0:te.main,underHeroItemVariation:Y,shouldEnableSubItems:m}),m&&r.createElement(r.Fragment,null,r.createElement(w,{hideVerticalBorders:!0,as:d.Collection,shouldEnableBundleComponentAnalytics:W,hasSectionTitlePrimary:!1,shouldHideDangerousDek:!0,items:F.slice(0,4),summaryItemVariation:"TextBelowLeft",shouldHideBylines:j,shouldHidePublishDate:!0,trackingNamespace:null==te?void 0:te.aside,recircRiver:_,hasUnderlineHed:!1,rubricVariation:"DiscoveryItem"}),oe&&r.createElement(v,{items:F.slice(4,4+me),summaryItemVariation:"SideBySideDenseNoAsset",shouldEnableChannelFeatures:m,shouldShowViewAllButton:!1,shouldHideBylines:!0,shouldHideDangerousDek:!0,shouldHidePublishDate:!0,hasCarouselControls:!1,shouldHideCarouselFooter:!0,isSummaryHeadingSecondary:!0,shouldShowAllContentWhenDense:!0,hasModerateSpacing:!1})),r.createElement(S,{hasHed:de,isCenterAlignedWithTopDividerOnly:L,enableChannelFeatures:m,showSummaryCarousel:oe},r.createElement(y,Object.assign({},ue,{displayHed:ne,dangerousHed:le,enableChannelFeatures:m,footerWithLink:V?B:{},hasUnderlineHed:E,hideBottomBorders:D,hideRubricItemSummary:H,shouldEnableBundleComponentAnalytics:W,shouldHideDangerousDek:q,shouldHidePublishDate:!0,shouldHoldImageSpace:!1,items:F.slice(4,4+me),sectionTitleVariation:ee,summaryItemVariation:Z||Y,recircRiver:_,shouldHideBylines:j||U,trackingNamespace:null==te?void 0:te.rightRail})),r.createElement(C,null,K&&r.createElement(I.Primary,{className:"button--show-list",onClickHandler:()=>{ce(ae?5:M),ie(!ae)},label:ae?"Show More":"Show Less",inputKind:"button"}))),m&&r.createElement(f,{className:"grid-layout__aside"},r.createElement(c,null,r.createElement(u,{group:"ads"},r.createElement($,{position:"rail"})))))};x.propTypes={className:i.string,curatedSearchHed:i.string,dangerousDek:i.string,dangerousHed:i.string,featuredDangerousHed:i.string,featuredFooter:i.shape({link:i.string,label:i.string}),hasUnderlineHed:i.bool,hideBottomBorders:i.bool,hideBottomBordersforMainFour:i.bool,hideRubricItemSummary:i.bool,hideVerticalBorders:i.bool,isCenterAlignedWithTopDividerOnly:i.bool,items:i.arrayOf(i.shape(m.propTypes)),listItemsLimit:i.number,primarySummaryItemVariation:d.propTypes.summaryItemVariation,recircRiver:i.string,rightColumnFeature:i.shape({ctaUrl:i.string,header:i.string,ctaTextLabel:i.string,itemIndex:i.number,hideOnMobile:i.bool}),sectionTitleVariation:i.string,shouldEnableBundleComponentAnalytics:i.bool,shouldEnableChannelFeatures:i.bool,shouldHideBylines:i.bool,shouldHideBylinesInSummaryList:i.bool,shouldHideDangerousDek:i.bool,shouldHideDangerousDekInFeaturedItems:i.bool,shouldHideDangerousDekInSummaryList:i.bool,shouldLimitListItemsOnMobile:i.bool,shouldUseDekAsHed:i.bool,shouldUseFeaturedTitleAndFooter:i.bool,showSummaryCarousel:i.bool,showTopBorderInSummaryTitle:i.bool,summaryItemVariation:d.propTypes.summaryItemVariation,summaryListHed:i.string,summaryListSummaryItemVariation:i.string,summarySectionTitleVariation:i.string,trackingNamespace:i.object},x.defaultProps={hideBottomBorders:!1,hideRubricItemSummary:!1,hideVerticalBorders:!1,items:[],listItemsLimit:5,primarySummaryItemVariation:"TextBelowLeft",sectionTitleVariation:"TextLeft",shouldEnableChannelFeatures:!1,shouldHideBylines:!1,shouldHideDangerousDek:!0,shouldHideDangerousDekInFeaturedItems:!1,shouldHideDangerousDekInSummaryList:!0,shouldLimitListItemsOnMobile:!1,shouldUseDekAsHed:!1,shouldUseFeaturedTitleAndFooter:!1,showSummaryCarousel:!0,showTopBorderInSummaryTitle:!1,summaryItemVariation:"SideBySideThirdsImageRight",summaryListSummaryItemVariation:null,summarySectionTitleVariation:"TextLeft"},x.displayName="SummaryCollageNine",e.exports=x},78058:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(18553);i.displayName="SummaryCollageNine",e.exports=a(i,"SummaryCollageNine")},94569:(e,t,o)=>{const{css:a,default:i}=o(51117),{BREAKPOINTS:r}=o(85326),{calculateSpacing:n,getColorToken:s,getTypographyStyles:l,minScreen:d,maxScreen:m,minMaxScreen:c}=o(79720),{applyGridSpacing:u,cssVariablesGrid:p}=o(62470),{cssVariablesCollage:g}=o(61774),{GridWrapper:h,GridItem:y}=o(14134),{SectionTitleHed:b,SectionTitleDek:S}=o(80577),C=o(23982),f=o(32246),$=o(33946),{SummaryCollageFourUnderMainItem:v,SummaryCollageFourSummaryListItem:w,SummaryCollageFourMainItem:k,SummaryCollageFourSubMainItem:T,SummaryCollageFourSubMainItem2:I}=o(52340),{SummaryItemFeaturedWrapper:x,FeaturedTitle:B,FeaturedLink:E}=o(94092),{SummaryItemDek:D,SummaryItemHedLink:H,SummaryItemWrapper:N,SummaryItemContent:P,SummaryItemAssetContainer:M}=o(88269),{SummaryItemHedBase:L}=o(27853),{RubricWrapper:F}=o(7320),A=o(46647),O=i.div.withConfig({displayName:"SummaryCollageNineTitle"})`
  ${b} {
    ${l("typography.definitions.discovery.subhed-section-collection")}
  }
  ${({enableChannelFeatures:e})=>e&&`\n  ${S} {\n    margin-bottom: ${n(2)};\n  }\n  `}
`,_=i.div.withConfig({displayName:"SummaryCollageNineTitleWrapper"})`
  grid-column: 1 / -1;
  align-self: flex-end;
  order: 2;

  border-bottom: 1px solid
    ${s("colors.discovery.body.white.border")};
  padding-bottom: ${n(1)};

  ${d(r.lg)} {
    grid-column: 10 / span 3;
    grid-row: 1 / span 1;
    margin-left: calc(var(--border-offset) * -1);
    border-top: none;
    border-bottom: none;
    border-left: 1px solid
      ${s("colors.discovery.body.white.border")};
    padding-left: var(--border-offset);
    width: calc(100% + var(--border-offset));
  }

  ${({showTopBorderInSummaryTitle:e})=>{e&&a`
        border-top: 1px solid
          ${s("colors.discovery.body.white.border")};

        ${d(r.lg)} {
          position: relative;

          &::before {
            position: absolute;
            top: 0;
            left: var(--border-offset);
            background-color: ${s("colors.discovery.body.white.border")};
            width: calc(100% - var(--border-offset));
            height: 1px;
            content: '';
          }
        }
      `}}
`,R=i(C).withConfig({displayName:"SummaryCollageNineSummaryCollageFour"})`
  grid-column: 1 / -1;
  ${({enableChannelFeatures:e})=>e&&`\n  @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {\n    display: none;\n  }`};

  &&& {
    grid-template-columns: repeat(4, 1fr);
    order: 1;
    padding-top: 0;
    padding-right: 0;
    padding-left: 0;

    .summary-item,
    .summary-item--has-border {
      @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        border-bottom: 0;
      }
    }

    .summary-list--collection-list {
      @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        border-top: 0;
      }
    }

    ${({enableChannelFeatures:e,theme:t})=>e&&`\n      ${H} {\n        &::after {\ndisplay: none;\n        }\n      }\n        ${d(r.lg)} {\n          grid-row: 2;\n        }\n        ${k} {\n          ${d(r.lg)} {\n            grid-column: 4 / span 3;\n            grid-row: 1;\n          }\n          @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {\n            grid-column: 5 / span 4;\n            grid-row: 1;\n          }\n          @media (min-width: ${r.md}) and (max-width: calc(${r.lg} - 1px)) {\n            border-bottom: 1px solid ${s(t,"colors.discovery.body.white.border")};\n          }\n        }\n        ${T} {\n          ${d(r.lg)} {\n            grid-column: 1 / span 3;\n            grid-row: 1;\n          }\n          @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {\n            grid-column: 1 / span 4;\n            grid-row: 1;\n          }\n          @media (min-width: ${r.md}) and (max-width: calc(${r.lg} - 1px)) {\n            border-bottom: 1px solid ${s(t,"colors.discovery.body.white.border")};\n          }\n        }\n        ${I} {\n          ${d(r.lg)} {\n            grid-column: 1 / span 3;\n            grid-row: 2;\n          }\n          @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {\n            grid-column: 1 / span 4;\n            grid-row: 2;\n          }\n          @media (min-width: ${r.md}) and (max-width: calc(${r.lg} - 1px)) {\n            border-bottom: 1px solid ${s(t,"colors.discovery.body.white.border")};\n          }\n        }\n        ${v} {  \n          ${d(r.lg)} {\n            border-top: none;\n            grid-column: 4 / span 3;\n            grid-row: 2;\n          }\n          @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {\n            grid-column: 5 / span 4;\n            grid-row: 2;\n          }\n          @media (min-width: ${r.md}) and (max-width: calc(${r.lg} - 1px)) {\n            border-bottom: 1px solid ${s(t,"colors.discovery.body.white.border")};\n          }\n        }\n        @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {\ngrid-column: 1 / span 8;\ngrid-row: 2;\ngrid-template-columns: repeat(8, 1fr);\n        }\n        `}

    ${d(r.lg)} {
      grid-column-gap: var(--grid-gap);
      grid-column: 1 / span 9;
      ${({enableChannelFeatures:e})=>!e&&"\n      grid-row: 1 / span 3; "}
      grid-template-columns: repeat(9, 1fr);
      grid-template-rows: minmax(${n(5)}, auto) 1fr;
      grid-row-gap: ${n(2)};
    }
    ${k} {
      position: unset;
      margin-bottom: 0;
      border-bottom: none;

      ${({enableChannelFeatures:e})=>!e&&`\n      ${d(r.lg)} {\n        grid-column: 4 / -1;\n      }`}

      @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        padding-bottom: ${n(1)};
      }

      @media (min-width: 0) and (max-width: calc(${r.md} - 1px)) {
        padding-bottom: ${n(2)};
      }

      .summary-item__dek {
        display: block;
      }

      .summary-item__content {
        margin-bottom: 0;
        padding-bottom: 0;
      }

      .summary-item__image-link {
        padding-right: 0;

        @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        }
      }

      .summary-item__byline {
        @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
          margin-bottom: 0;
        }
      }
    }

    ${v} {
      border-bottom: none;
      @media (min-width: 0) and (max-width: calc(${r.lg})) {
        ${({enableChannelFeatures:e,theme:t})=>e&&`display: block; \n    @media (min-width: ${r.md}) and (max-width: calc(${r.lg} - 1px)) {\n      border-bottom: 1px solid ${s(t,"colors.discovery.body.white.border")};\n  }`}
      }
      ${({enableChannelFeatures:e})=>!e&&`\n        ${d(r.lg)} {\n          grid-column: 4 / -1;\n        }`}

      @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        display: block;
      }

      .summary-item__dek {
        display: block;
      }

      .summary-item__content {
        ${d(r.lg)} {
          ${({enableChannelFeatures:e})=>e?`margin-top: 0;\n    padding: ${n(2)} 0 ${n(4)};`:`margin-top: ${n(2)};`}
        }

        @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
          padding: ${n(2)} 0 ${n(4)};
        }

        @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
          padding-bottom: ${n(2)};
        }
      }

      .summary-item__image-link {
        ${d(r.lg)} {
          ${({enableChannelFeatures:e})=>e?"margin-top: 0;":`margin-top: ${n(2)};`}
        }
        @media (min-width: 0) and (max-width: calc(${r.lg})) {
          ${({enableChannelFeatures:e})=>e&&" max-width: 100%;"}
        }
      }
    }

    ${w} {
      .summary-item:last-child {
        @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
          padding-bottom: ${n(1)};
        }

        @media (min-width: 0) and (max-width: calc(${r.md} - 1px)) {
          padding-bottom: ${n(2)};
        }
      }
      ${d(r.lg)} {
        grid-column: 1 / span 3;
        grid-row-start: 1;
        margin: 0 calc(var(--border-offset) * -1) 0 0;
        border-right: 1px solid
          ${s("colors.discovery.body.white.border")};
        border-left: none;
        padding-right: var(--border-offset);
        padding-left: 0;
      }

      @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        margin-bottom: ${n(2)};
      }

      @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        margin-bottom: 0;
      }

      .summary-item__hed {
        /* TOFIX: Lots of overrides happening here, this reassigns the default token for .summary-item__hed */
        ${l("typography.definitions.discovery.hed-core-primary")}
      }

      .summary-item__dek {
        display: block;
      }

      .summary-item--has-border {
        margin-bottom: 0;
      }

      .summary-item__content {
        padding-bottom: 0;
      }

      .summary-item--has-rule .summary-item__hed-link::after {
        display: block;
      }
    }
  }
`,V=i(f.Collection).withConfig({displayName:"SummaryCollageNineSummaryList"})`
  ${N} {
    ${({enableChannelFeatures:e})=>e&&`\n   ${F} {\n   display: block;\n   grid-row: 1;\n   }\n ${P} {\n  grid-row: 2;\n}`}
  }

  &&& {
    order: 3;
    margin: 0;
    border-top: none;
    padding: 0;

    ${d(r.lg)} {
      grid-column: 10 / span 3;
      grid-row: 2 / span 2;
      margin-left: calc(var(--border-offset) * -1);
      border-left: 1px solid
        ${s("colors.discovery.body.white.border")};
      padding-right: 0;
      padding-left: var(--border-offset);
      width: calc(100% + var(--border-offset));
      height: 100%;
    }

    /* reset width of child elements */
    &: {
      width: auto;
    }

    .summary-list__item {
      grid-template-areas: 'content image';
      grid-template-columns: 1fr 75px;
      padding-top: ${n(2)};
      padding-bottom: ${n(2)};

      &:first-of-type {
        ${d(r.lg)} {
          border-top: 1px solid
            ${s("colors.discovery.body.white.border")};
          padding-top: ${n(2.5)};
        }
      }

      &:last-of-type {
        ${d(r.lg)} {
          border-bottom: none;
        }

        @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
          padding-bottom: 0;
        }
      }

      &.summary-item--has-border {
        margin-bottom: 0;
      }

      &.summary-item--layout-placement-side-by-side {
        grid-column-gap: var(--grid-gap);
      }

      .summary-item__image-link {
        align-self: start;
        max-width: 75px;
        height: auto;
      }

      .summary-item__hed {
        ${l("typography.definitions.discovery.hed-bulletin-primary")}
        margin-bottom: ${n(1)};
      }
    }
    ${({displayHed:e})=>!e&&` && {\n        order: 2;\n\n        ${d(r.lg)} {\n          grid-row: 1 / span 3;\n        }\n    \n        .summary-list__item {\n          &:first-of-type {\n            ${d(r.lg)} {\n              border-top: none;\n              padding-top: 0;\n            }\n          }\n        }\n      }\n    `}
  }
`,W=i.div.withConfig({displayName:"SummaryCollageNineGridItemList"})`
  ${({isCenterAlignedWithTopDividerOnly:e,theme:t})=>e&&`${h}{\n      ${y} {\n        .summary-list__items {\n          ${x} {\n            ${H} {\n              ${L} {\n                text-transform: capitalize;\n                line-height: 1.45em;\n                ${l(t,"typography.definitions.discovery.hed-core-secondary")};\n                color: ${s("colors.discovery.body.white.heading")};\n                padding-top: 0;\n              }\n            }\n\n            ${D} {\n              ${l(t,"typography.definitions.discovery.description-core")};\n              padding-bottom: 8px;\n              text-transform: none;\n              color: ${s(t,"colors.discovery.body.white.description")};\n            }\n\n            ${B} {\n              color:\n              ${s(t,"colors.consumption.lead.standard.context-signature")};\n              ${l(t,"typography.definitions.globalEditorial.context-primary")};\n              text-align: center;\n              padding-top: 20px;\n              border-bottom: none;\n              padding-bottom: 0;\n              border-top: 1px solid;\n              border-top-color: ${s(t,"colors.discovery.body.white.border")};;\n            }\n\n            ${E} {\n              padding-top:24px;\n              padding-bottom: 24px;\n              color: ${s(t,"colors.discovery.body.white.description")};\n            }\n          }\n        }\n      }\n    }`}

  grid-column: 1 / -1;
  order: ${({hasHed:e})=>e?3:2};

  ${({enableChannelFeatures:e,theme:t})=>e&&`\n  @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {\n    grid-column: 1 / span 12;\n    padding-top: 32px;\n}\n${N} {\n  border-bottom: 1px solid ${s(t,"colors.discovery.body.white.border")};\n}\n${M} {\n  display: none;\n}\n  `}

  ${({enableChannelFeatures:e,showSummaryCarousel:t})=>e&&t&&`\n    @media (min-width: 0) and (max-width: calc(${r.md} - 1px)) {\n      display: none;\n    }\n  `}

  ${d(r.lg)} {
    ${({enableChannelFeatures:e})=>e?"grid-column: 7 / span 2;":"grid-column: 10 / span 3;"}
    grid-row: ${({hasHed:e})=>e?"2 / span 2":"1 / span 3"};
  }

  .summary-list__item--before-hidden {
    border-bottom: none;
  }
`,j=i.div.withConfig({displayName:"SummaryCollageNineAdRailContainer"})`
  display: block;
  grid-column: 10 / span 3;
  @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
    display: none;
  }
`,U=i(A).withConfig({displayName:"SummaryCollageNineAdRail"})``,G=i.div.withConfig({displayName:"SummaryCollageNineGridItemListButtonWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;

  ${d(r.lg)} {
    display: none;
  }

  .button--show-list {
    margin-top: ${n(4)};
  }
`,z=i.div.withConfig({displayName:"SummaryCollageNineSummaryListItems"})`
  &&&&& {
    ${d(r.lg)} {
      display: none;
    }
  }

  && {
    grid-column: 1 / span 12;
    grid-row: 2;
    margin: 0;
    border-top: none;
    padding: 0;

    .summary-item {
      margin: 0 0 ${n(2)};
      padding: ${n(2.5)} 0;
      ${d(r.lg)} {
        position: relative;
        margin-bottom: 0;
        overflow: hidden;
      }

      &:first-child {
        ${d(r.lg)} {
          padding-top: 0;
        }
        ${m(r.md)} {
          padding-top: ${n(2.5)};
        }
      }

      &:last-child {
        ${c(0,r.md)} {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        ${c(0,r.lg)} {
          &::after {
            display: none;
          }
        }
      }

      .summary-item__hed {
        ${l("typography.definitions.discovery.hed-core-primary")}
        color:  ${s("colors.discovery.body.white.heading")};
      }

      .summary-item__metadata-primary,
      .summary-item__metadata-secondary {
        display: none;
      }
    }
  }

  && {
    ${d(r.lg)} {
      grid-column: 9 / -1;
      margin-left: calc(var(--border-offset) * -1);
      padding-left: var(--border-offset);
      width: calc(100% + var(--border-offset));
    }
    ${({hideVerticalBorders:e})=>e&&"&&& {\n    border-left: 0;\n    padding-left: 0;\n    }"}

    ${({hasUnderHeroItem:e})=>e&&"grid-row-end: span 3;"}

.summary-item:last-child {
      @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        border-bottom: 1px solid
          ${s("colors.discovery.body.white.border")};
        padding-bottom: ${n(2.5)};
      }
    }
    ${d(r.lg)} {
      grid-column: 1 / span 3;
      grid-row-start: 1;
      margin: 0 calc(var(--border-offset) * -1) 0 0;
      padding-right: var(--border-offset);
      padding-left: 0;
    }

    @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
      margin-bottom: ${n(2)};
    }

    @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
      margin-bottom: 0;
    }

    .summary-item__hed {
      /* TOFIX: Lots of overrides happening here, this reassigns the default token for .summary-item__hed */
      ${l("typography.definitions.discovery.hed-core-primary")}
    }

    .summary-item__dek {
      display: block;
    }

    .summary-item--has-border {
      margin-bottom: 0;
    }

    .summary-item__content {
      padding-bottom: 0;
    }

    .summary-item--has-rule .summary-item__hed-link::after {
      display: block;
    }
  }
`,q=i.div.withConfig({displayName:"SummaryCollageNineGrid"})`
  ${p()}
  ${g()}
    ${u("padding")}
  
    display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${r.xxl};
  row-gap: 0;

  ${d(r.md)} {
    grid-template-columns: repeat(12, 1fr);
  }

  ${({enableChannelFeatures:e,theme:t})=>e&&`\n  ${_} {\n      grid-column: 1 / span 12;\n      border-left: none;\n      border-bottom: none;\n      padding-bottom: 0;\n  }\n    ${R} {\n    ${L} {\n        ${l(t,"typography.definitions.discovery.hed-core-primary")}\n    }\n  }\n  \n    ${W} {\n      ${h} {\n        border-left: none;\n        ${N} {\n        &:first-of-type {\n          border-top: none;\n          padding-top: 0;\n        }\n        }\n      }\n      ${L} { \n        ${l(t,"typography.definitions.discovery.hed-core-secondary")}\n    } }\n  \n    `}

  ${d(r.lg)} {
    ${({enableChannelFeatures:e})=>e?" grid-template-rows: auto;":` grid-template-rows: minmax(${n(4)}, auto) repeat(2, 1fr);`}
  }

  .summary-item--has-border {
    &:last-child {
      @media (min-width: 0) and (max-width: calc(${r.lg} - 1px)) {
        margin-bottom: 0;
        border-bottom: 0;
      }
    }
  }
`,K=i($).withConfig({displayName:"SummaryCollageNineSummaryCarousel"})``;e.exports={SummaryCollageNineTitle:O,SummaryCollageNineTitleWrapper:_,SummaryCollageNineSummaryCollageFour:R,SummaryCollageNineSummaryList:V,SummaryCollageNineGrid:q,SummaryCollageNineGridItemList:W,SummaryCollageNineGridItemListButtonWrapper:G,SummaryCollageNineAdRailContainer:j,SummaryCollageNineAdRail:U,SummaryCollageNineSummaryCarousel:K,SummaryCollageNineSummaryListItems:z}},74795:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{asConfiguredComponent:n}=o(36380),s=o(32168),l=o(44031),{componentTracking:d}=o(28601),m=o(56662),{trackComponent:c}=o(40199),{SummaryCollageOneTitle:u,SummaryCollageOneCtaLink:p,SummaryCollageOneGridWithMargin:g,SummaryCollageOneIsFullBleed:h,SummaryCollageOneItemComponent:y,SummaryCollageOneAnchorLink:b,SummaryCollageOneCtaIcon:S,SummaryCollageOneAside:C,SummaryCollageOneDangerousDek:f,SectionTitleLinkHTML:$}=o(83695),v=o(72223),w=o(7046),{PaymentGateway:k}=o(28576),T=o(46647),I=({analyticsDataAttribute:e,ctaLink:t={},showCtaIcon:o=!1,dangerousDek:a,showCartoonLink:i})=>{if(i&&a)return r.createElement(f,{"data-testid":"SummaryCollageOneDangerousDek"},r.createElement($,{dangerouslySetInnerHTML:{__html:a}}));const{label:n,html:s,url:l,icon:d}=t;return s||n&&l?r.createElement(p,Object.assign({},e,{showCtaIcon:o}),o&&d&&r.createElement(S,{icon:d}),s?r.createElement("span",{dangerouslySetInnerHTML:{__html:s}}):r.createElement(b,{"data-testid":"SummaryCollageOneAnchorLink",href:l,dangerouslySetInnerHTML:{__html:n},showCtaIcon:o})):null};I.propTypes={analyticsDataAttribute:i.object,ctaLink:i.shape({html:i.string,label:i.string,url:i.string}),dangerousDek:i.string,showCartoonLink:i.bool,showCtaIcon:i.bool};const x=({className:e,ctaLink:t,customizedBackgroundColorToken:o,customizedBylineColorToken:i,customizedPublishDateColorToken:n,customizedSectionDekColorToken:p,customizedSectionDekTypeToken:b,customizedSectionTitleColorToken:S,dangerousDek:f,dangerousHed:$,hasFullWidthImage:x,hasListInDek:B,hasNoBottomPaddingContent:E,hasRoundedCorners:D,hasUnderlineHed:H,hideRubricItemSummary:N,items:P,isBorderContextSignature:M,recircRiver:L,sectionTitleVariation:F,shouldDisplayDangerousDek:A,shouldEmbedFeaturedVideo:O,shouldEnableBundleComponentAnalytics:_,shouldHideBylines:R,shouldHideDangerousDek:V,shouldHideDangerousHed:W,shouldHidePublishDate:j,shouldHideTitle:U,shouldUseHedFeatureToken:G,showAdRail:z,showCartoonLink:q,summaryItemRubricVariation:K,summaryItemVariation:J,trackingNamespace:Q,variations:{isFullBleedDarkBackground:Z,isSingleFeature:X,hasEnhancedDailyCartoon:Y,isHeroFeature:ee},variationName:te})=>{var oe,ae;r.useEffect((()=>{c("SummaryCollageOne",te)}),[te]);const ie=l[J],re=s[F];let ne={},se={};const le=O&&(null===(ae=null===(oe=P[0])||void 0===oe?void 0:oe.image)||void 0===ae?void 0:ae.scriptUrl);X&&(ne={hedTag:"h2"},Y?ne.link={}:f&&!A&&(ne.link={html:f}),se={shouldHoldImageSpace:!1});const de=d.addDataSectionTitleAttribute(_,(null==Q?void 0:Q.item)||$),me=d.addDataSectionTitleAttribute(_,(null==Q?void 0:Q.featuredLink)||$),ce=r.createElement(g,{"data-testid":"SummaryCollageOneSingleFeature",className:a("summary-collage-one",e),isHeroFeature:ee,isSingleFeature:X,hasFullWidthImage:x,isFullBleedDarkBackground:Z,hasEnhancedDailyCartoon:Y,showCartoonLink:q,shouldUseHedFeatureToken:G,customizedBackgroundColorToken:o,customizedSectionDekTypeToken:b,customizedSectionDekColorToken:p,hasRoundedCorners:D},!U&&$&&r.createElement(u,{isSingleFeature:X,customizedSectionTitleColorToken:S},r.createElement(re,Object.assign({},ne,{dangerousHed:$,isBorderContextSignature:M}))),r.createElement(v,{dangerousDek:f,shouldDisplayDangerousDek:A}),le?r.createElement(y,{as:m,analyticsDataAttribute:de,isFeatured:!0,item:P[0],key:P[0].copilotID,scriptUrl:P[0].image.scriptUrl}):r.createElement(y,Object.assign({},P[0],{analyticsDataAttribute:de,as:ie,hasNoBottomPaddingContent:E,hasUnderlineHed:H,hedTag:"h3",hideRubricItemSummary:N,shouldPlayInline:!0,recircRiver:L,rubricVariation:K,hasListInDek:B,shouldHideBylines:R,shouldHideDangerousDek:V,shouldHideDangerousHed:W,shouldHidePublishDate:j,customizedBylineColorToken:i,customizedPublishDateColorToken:n,responsiveCartoonVariation:Y&&"WithNoSocialIcons",hasWrapperButtonRole:!Y},se)),z&&r.createElement(C,null,r.createElement(w,null,r.createElement(k,{group:"ads"},r.createElement(T,{position:"rail"})))),X&&r.createElement(I,{ctaLink:t,analyticsDataAttribute:me,showCtaIcon:Y,dangerousDek:f,showCartoonLink:q}));return Z?r.createElement(h,{isFullBleedDarkBackground:Z},ce):ce};x.propTypes={className:i.string,ctaLink:i.shape({html:i.string,label:i.string,url:i.string,icon:i.string}),customizedBackgroundColorToken:i.string,customizedBylineColorToken:i.string,customizedPublishDateColorToken:i.string,customizedSectionDekColorToken:i.string,customizedSectionDekTypeToken:i.string,customizedSectionTitleColorToken:i.string,dangerousDek:i.string,dangerousHed:i.string,hasEnhancedDailyCartoon:i.bool,hasFullWidthImage:i.bool,hasListInDek:i.bool,hasNoBottomPaddingContent:i.bool,hasRoundedCorners:i.bool,hasUnderlineHed:i.bool,hideRubricItemSummary:i.bool,isBorderContextSignature:i.bool,items:i.arrayOf(i.shape(l.propTypes)).isRequired,recircRiver:i.string,sectionTitleVariation:i.string,shouldDisplayDangerousDek:i.bool,shouldEmbedFeaturedVideo:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldHideBylines:i.bool,shouldHideDangerousDek:i.bool,shouldHideDangerousHed:i.bool,shouldHidePublishDate:i.bool,shouldHideTitle:i.bool,shouldUseHedFeatureToken:i.bool,showAdRail:i.bool,showCartoonLink:i.bool,summaryItemRubricVariation:i.string,summaryItemVariation:i.oneOf(["TextBelowLeft","TextBelowCenter","TextBelowLeftCard","TextBelowCenterCard","ImageRatio43","ImageRatio169","ImageRatio11","CircularImage","TextBelowDesktopOnly","TextBelowDesktopOnlyImageRight","TextBelowDesktopOnlyThirds","TextBelowDesktopOnlyThirdsImageRight","TextBelowDesktopOnlyThirdsImageRightThumbnail","SideBySide","SideBySideImageRight","SideBySideThirds","SideBySideThirdsImageRight","SideBySideDarkBackgroundRight","SideBySideDesktopOnly","SideBySideDesktopOnlyImageRight","SideBySideDesktopOnlyThirds","SideBySideDesktopOnlyThirdsImageRight"]),trackingNamespace:i.object,variationName:i.string,variations:i.shape({isFullBleedDarkBackground:i.bool,isSingleFeature:i.bool,hasEnhancedDailyCartoon:i.bool,isHeroFeature:i.bool})},x.defaultProps={hasEnhancedDailyCartoon:!1,hasListInDek:!1,hasNoBottomPaddingContent:!1,hasRoundedCorners:!1,hideRubricItemSummary:!1,isBorderContextSignature:!1,sectionTitleVariation:"LineAboveLineBelowTextCenter",shouldEmbedFeaturedVideo:!1,shouldHideBylines:!1,shouldHideDangerousDek:!1,shouldHideDangerousHed:!1,shouldHidePublishDate:!1,shouldHideTitle:!1,showCartoonLink:!1,summaryItemVariation:"TextBelowLeft",variations:{}},x.displayName="SummaryCollageOne",e.exports=n(x,"SummaryCollageOne")},2863:(e,t,o)=>{e.exports=o(29938)},29938:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(74795);i.SingleFeature=a(i,"SingleFeature",{isSingleFeature:!0},{sectionTitleVariation:"LineAboveLineBelowTextLeft",shouldHideDangerousDek:!0,shouldHideDangerousHed:!0}),i.FullBleedDarkBackground=a(i,"FullBleedDarkBackground",{isFullBleedDarkBackground:!0},{shouldHideDangerousDek:!1,shouldHideDangerousHed:!1,shouldHideTitle:!0}),i.FullBleedDarkBackgroundWithTitle=a(i,"FullBleedDarkBackgroundWithTitle",{isFullBleedDarkBackground:!0},{shouldHideDangerousDek:!1,shouldHideDangerousHed:!1,shouldHideTitle:!1}),i.DailyCartoon=a(i,"DailyCartoon",{isSingleFeature:!0,hasEnhancedDailyCartoon:!0},{sectionTitleVariation:"SoftDivider",shouldHideDangerousDek:!0,shouldHideDangerousHed:!0,showAdRail:!0,showCartoonLink:!0}),i.HeroFeature=a(i,"HeroFeature",{isHeroFeature:!0},{shouldHideDangerousDek:!1,shouldHideDangerousHed:!1,shouldHideTitle:!0,summaryItemRubricVariation:"DiscoveryItem",summaryItemVariation:"SideBySideCenterImageLeft",shouldUseHedFeatureToken:!0}),e.exports=i},75674:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(32168),n=o(68017),s=o(32246),l=o(44031),{SectionTitle:d,SummaryCollageSevenSummaryList:m,SummaryCollageSevenWrapper:c,SummaryCollageSevenIsFullBleed:u}=o(75683),{trackComponent:p}=o(40199),g=({curatedSearchHed:e,dangerousHed:t,hasSectionTitleHedFeature:o,hasTopSpacing:a,hideBottomBorders:s,hideRubricItemSummary:l,hideTitleTopSpacing:g,hideVerticalBorders:h,items:y,isSpecial:b,isFullBleedSpecialBackground:S,sectionTitleVariation:C,imageAlignment:f,shouldHideBylines:$,shouldHideSpaceAtTop:v,shouldRemoveSummaryItemBorder:w,summaryItemVariation:k,summarySectionTitleVariation:T,recircRiver:I})=>{i.useEffect((()=>{p("SummaryCollageSeven")}),[]);const x=r[C],B=i.createElement(c,{"data-testid":"SummaryCollageSevenWrapper",dangerousHed:!t,hideVerticalBorders:h,hasTopSpacing:a,hasSectionTitleHedFeature:o,isSpecial:b},t&&i.createElement(d,{as:x,dangerousHed:t,hideTitleTopSpacing:g,isSpecial:b}),i.createElement(n,{items:y.slice(0,3),hideRubricItemSummary:l,hasBorder:!s,hideVerticalBorders:h,recircRiver:I,shouldHideBylines:$,shouldHideSpaceAtTop:v,isSpecial:b}),i.createElement(m,{hideRubricItemSummary:l,dangerousHed:e,shouldHideDangerousDek:!0,shouldHidePublishDate:!0,items:y.slice(3),sectionTitleVariation:T,summaryItemVariation:k,recircRiver:I,shouldHideBylines:$,hideBottomBorders:s,imageAlignment:f,isSpecial:b,shouldRemoveSummaryItemBorder:w}));return S?i.createElement(u,{isFullBleedSpecialBackground:S},B):B};g.propTypes={curatedSearchHed:a.string,dangerousHed:a.string,hasSectionTitleHedFeature:a.bool,hasTopSpacing:a.bool,hideBottomBorders:a.bool,hideRubricItemSummary:a.bool,hideTitleTopSpacing:a.bool,hideVerticalBorders:a.bool,imageAlignment:a.oneOf(["top","default","bottom"]),isFullBleedSpecialBackground:a.bool,isSpecial:a.bool,items:a.arrayOf(a.shape(l.propTypes)).isRequired,recircRiver:a.string,sectionTitleVariation:a.string,shouldHideBylines:a.bool,shouldHideSpaceAtTop:a.bool,shouldRemoveSummaryItemBorder:a.bool,summaryItemVariation:s.propTypes.summaryItemVariation,summarySectionTitleVariation:a.string},g.defaultProps={hasSectionTitleHedFeature:!1,hasTopSpacing:!1,hideBottomBorders:!1,hideRubricItemSummary:!1,hideTitleTopSpacing:!1,hideVerticalBorders:!1,imageAlignment:"default",isFullBleedSpecialBackground:!1,isSpecial:!1,sectionTitleVariation:"LineAboveLineBelowTextCenter",shouldHideBylines:!1,shouldHideSpaceAtTop:!1,shouldRemoveSummaryItemBorder:!1,summaryItemVariation:"NoAssetTextCenter",summarySectionTitleVariation:"TextCenter"},g.displayName="SummaryCollageSeven",e.exports=g},80272:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(75674);e.exports=a(i,"SummaryCollageSeven")},75683:(e,t,o)=>{const{css:a,default:i}=o(51117),{calculateSpacing:r,getColorToken:n,getTypographyStyles:s,getColorStyles:l,minScreen:d,minMaxScreen:m}=o(79720),{BREAKPOINTS:c}=o(85326),{cssVariablesCollage:u}=o(61774),p=o(48655),{SectionTitleHed:g}=o(80577),{SummaryCollageThreeItemWrapper:h,SummaryCollageThreeWrapper:y}=o(219),b=o(32246),{SummaryListTitle:S}=o(41849),{RubricWrapper:C}=o(7320),{GridItem:f}=o(14134),$=i(p.WithMargins).withConfig({displayName:"SummaryCollageSevenWrapper"})`
  ${u()};

  && {
    ${({hasTopSpacing:e})=>e?`\n          ${d(c.md)} {\n            margin-top: ${r(4)};\n          }\n        `:""}

    ${({isSpecial:e})=>e?`\n        padding-top: ${r(6)};\n        padding-bottom: ${r(6)};\n        `:""}
  }

  && {
    row-gap: 0;
  }

  > ${f} {
    ${({dangerousHed:e})=>!e&&"\n      &:first-child{\n        grid-column: 1/-1;\n        grid-row: 1;\n      }"}
  }
  > ${f} {
    grid-column: 1 / -1;
    ${d(c.lg)} {
      grid-column: span 9;
    }
    ${y} {
      > ${f}:first-child {
        ${d(c.lg)} {
          grid-column: 4 / -1;
          grid-row: 1 / span 2;
        }
      }
      > ${f}:not(:first-child) {
        ${d(c.lg)} {
          grid-column: 1 / span 3;
        }
      }
    }
  }
  > ${f}:last-child {
    grid-column: 1 / -1;
    ${d(c.lg)} {
      grid-column: 10 / span 3;
    }
  }
  ${S} {
    margin-bottom: ${r(2)};
  }

  ${S} ${g} {
    ${({hasSectionTitleHedFeature:e})=>a`
        ${s(e?"typography.definitions.discovery.hed-feature":"typography.definitions.discovery.subhed-section-tertiary")}
        padding: 0
      `}
  }

  ${a`
  ${y} {
    padding: 0;

    ${d(c.lg)} {
      grid-template-columns: repeat(9, 1fr);
      grid-template-rows: max-content;
    }

    .summary-item__metadata-secondary {
      margin-bottom: ${r(2)};
    }

    > ${f}:first-child {
      ${h} {
        ${d(c.lg)} {
          margin-left: calc(var(--border-offset) * -1);
          border-left: 1px solid
            ${n("colors.discovery.body.white.border")};
          padding-left: var(--border-offset);
        }

        .summary-item__hed {
          ${s("typography.definitions.discovery.hed-break-out")};
          ${d(c.md)} {
            ${s("typography.definitions.discovery.hed-feature")};
          }
        }

        .summary-item__dek {
          ${s("typography.definitions.discovery.description-feature")};
        }
      }
    }

    > ${f}:not(:first-child) {
      ${h} {
        .summary-item__hed {
          margin-bottom: ${r(2)};
          ${d(c.md)} {
            ${s("typography.definitions.discovery.hed-core-secondary")};
            margin-bottom: ${r(2)};
          }
        }
      }
    }
  }
`};

  ${y} {
    ${({hideVerticalBorders:e})=>e&&a`
        > ${f}:first-child {
          ${h} {
            margin-left: 0;
            border-left: 0;
            padding-left: 0;
          }
        }
      `}
  }
`,v=i.span.withConfig({displayName:"SectionTitle"})`
  ${({hideTitleTopSpacing:e})=>e?"":`\n      margin-top: ${r(2)};\n    `}
  margin-bottom: ${r(4)};

  ${m(0,c.md)} {
    margin-bottom: ${r(3)};
  }

  ${g} {
    ${({isSpecial:e,theme:t})=>e&&`${l(t,"color","colors.background.white")};`}
  }
`,w=i.div.withConfig({displayName:"SummaryCollageFourIsFullBleed"})`
  ${({isFullBleedSpecialBackground:e})=>e&&a`
      background-color: ${n("colors.consumption.lead.special.background")};
      max-width: 100%;
    `}
`,k=i(b.Collection).withConfig({displayName:"SummaryCollageSevenSummaryList"})`
  && {
    border-top: 0;
    padding: 0;

    ${d(c.lg)} {
      .summary-item--layout-proportions-33-66 {
        grid-gap: ${r(2)};
      }
    }
  }

  ${C}.summary-item__rubric {
    margin-bottom: ${r(1)};

    ${m(0,c.md)} {
      margin-bottom: ${r(2)};
    }
  }

  .summary-list__item:last-child {
    margin-bottom: 0;
    border-bottom: 0;
    padding-bottom: 0;
  }

  .summary-item__byline {
    margin-bottom: 0;
  }

  .summary-item__hed {
    ${s("typography.definitions.discovery.hed-bulletin-primary")}
  }

  && {
    .summary-item__hed-link::after {
      display: none;
    }
  }

  .summary-item__image-link {
    align-self: center;
  }

  .summary-item--layout-placement-side-by-side {
    .summary-item__hed {
      ${s("typography.definitions.discovery.hed-bulletin-primary")}

      margin-bottom: ${r(2)};

      ${m(0,c.md)} {
        ${s("typography.definitions.discovery.hed-bulletin-primary")}
      }
    }
  }
`;e.exports={SectionTitle:v,SummaryCollageSevenSummaryList:k,SummaryCollageSevenWrapper:$,SummaryCollageSevenIsFullBleed:w}},78014:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(32246),n=o(44031),{SummaryCollageSixSummaryList:s,SummaryCollageSixWrapper:l}=o(20202),{trackComponent:d}=o(40199),m=({className:e,dangerousHed:t,dangerousDek:o,desktopFeatureColSpan:a,hasDividerAboveHed:r,hasDividerBelowHed:n,hasSectionTitlePrimary:m,hasTitleBorder:c,hasTwoColumnLayout:u,hideRubricItemSummary:p,hideVerticalBorders:g,items:h,sectionTitleVariation:y,shouldEnableBundleComponentAnalytics:b,shouldHideBylines:S,shouldCondenseRightCells:C,summaryItemVariation:f,summaryListSummaryItemVariation:$,recircRiver:v,shouldHidePublishDate:w,hasBorder:k,shouldAlignDekInCenter:T,trackingNamespace:I})=>{i.useEffect((()=>{d("SummaryCollageSix")}),[]);const x=h.map(((e,t)=>(!u&&0!==t&&e.image&&(e.image=null),u&&(e.shouldHidePublishDate=w,e.hasBorder=k),e)));return i.createElement(l,{className:e,hasTwoColumnLayout:u,hasTitleBorder:c,hideVerticalBorders:g,shouldCondenseRightCells:C,summaryCollageColSpan:a,hasDividerBelowHed:n},i.createElement(s,{shouldAlignDekInCenter:T,hasTwoColumnLayout:u,dangerousHed:t,dangerousDek:o,hideRubricItemSummary:p,items:x,sectionTitleVariation:y,summaryItemVariation:$||f,recircRiver:v,shouldEnableBundleComponentAnalytics:b,shouldHideBylines:S,hasSectionTitlePrimary:m,hasDividerAboveHed:r,hasDividerBelowHed:n,trackingNamespace:I}))};m.propTypes={className:a.string,dangerousDek:a.string,dangerousHed:a.string,desktopFeatureColSpan:a.string,hasBorder:a.bool,hasDividerAboveHed:a.bool,hasDividerBelowHed:a.bool,hasSectionTitlePrimary:a.bool,hasTitleBorder:a.bool,hasTwoColumnLayout:a.bool,hideRubricItemSummary:a.bool,hideVerticalBorders:a.bool,items:a.arrayOf(a.shape(n.propTypes)).isRequired,recircRiver:a.string,sectionTitleVariation:a.string,shouldAlignDekInCenter:a.bool,shouldCondenseRightCells:a.bool,shouldEnableBundleComponentAnalytics:a.bool,shouldHideBylines:a.bool,shouldHidePublishDate:a.bool,summaryItemVariation:r.propTypes.summaryItemVariation,summaryListSummaryItemVariation:a.string,trackingNamespace:a.string},m.defaultProps={hasBorder:!0,hasDividerAboveHed:!0,hasDividerBelowHed:!0,hasTitleBorder:!0,hasTwoColumnLayout:!1,hideRubricItemSummary:!1,hideVerticalBorders:!1,sectionTitleVariation:"TextLeft",shouldAlignDekInCenter:!1,shouldCondenseRightCells:!1,shouldHideBylines:!1,shouldHidePublishDate:!0,summaryItemVariation:"TextBelowLeft",summaryListSummaryItemVariation:null},e.exports=m},61308:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(78014);i.displayName="SummaryCollageSix",e.exports=a(i,"SummaryCollageSix")},20202:(e,t,o)=>{const{css:a,default:i}=o(51117),{calculateSpacing:r,getColorToken:n,minMaxScreen:s,minScreen:l,getTypographyStyles:d}=o(79720),{BREAKPOINTS:m}=o(85326),{cssVariablesCollage:c,universalGridCore:u}=o(61774),{RubricWrapper:p}=o(7320),{SectionTitleHed:g}=o(80577),{SummaryListTitle:h}=o(41849),y=o(32246),b=i.div.withConfig({displayName:"SummaryCollageSixWrapper"})`
  ${h} {
    margin-bottom: ${r(2)};
  }

  ${s(0,m.md)} {
    ${({hasTwoColumnLayout:e})=>e&&`\n        margin: 0 ${r(3)};\n        .summary-list--collection-list {\n          padding: 0;\n        }\n      `}
  }

  ${({hasTitleBorder:e})=>e&&a`
      ${h} {
        border-bottom: ${({hasDividerBelowHed:e})=>e&&`1px solid ${n("colors.discovery.body.white.border")}`};
        border-top: ${({hasDividerAboveHed:e})=>e&&`1px solid ${n("colors.discovery.body.white.divider")}`};
        margin-bottom: ${r(4)};
      }

      ${g} {
        padding-left: 0;
      }
    `}

  ${({hideVerticalBorders:e,hasTwoColumnLayout:t})=>e&&!t&&a`
      &&& {
        .summary-item:first-child {
          margin-right: 0;
          border-right: 0;
          padding-right: 0;
        }
      }
    `}
  
  .summary-list__items {
    ${c()}
    ${u(!1)}
  }

  .summary-item {
    grid-column: 1 / -1;
    margin-bottom: ${r(5)};
    border-bottom: 1px solid
      ${n("colors.discovery.body.white.border")};
    padding-bottom: ${r(5)};

    ${l(m.lg)} {
      border-bottom: 0;
      padding-bottom: 0;
    }
  }

  .summary-item:first-child {
    ${({hasTwoColumnLayout:e})=>e&&`\n        ${l(m.md)} {\n          grid-column: 1 / span 6;\n        }\n    `}
    ${({hasTwoColumnLayout:e})=>!e&&a`
        ${l(m.lg)} {
          grid-column: 1 / span 8;
          grid-row: ${({shouldCondenseRightCells:e})=>e?"1 / span 6":"1 / span 5"};
          margin-right: calc(var(--border-offset) * -1);
          border-right: 1px solid
            ${n("colors.discovery.body.white.border")};
          border-bottom: 0;
          padding-right: var(--border-offset);
          ${({summaryCollageColSpan:e})=>"use6"===e&&"grid-column: 1 / span 6;"};
        }
      `}
  ${({hasTwoColumnLayout:e})=>!e&&a`
        ${p}.summary-item__rubric {
          margin-right: auto;
          margin-left: auto;
        }
        .summary-item__hed {
          ${d("typography.definitions.discovery.hed-break-out")};

          ${l(m.md)} {
            ${d("typography.definitions.discovery.hed-feature")};
          }
        }
      `}
   .summary-item__dek {
      ${d("typography.definitions.discovery.description-feature")};
    }
  }

  ${({hasTwoColumnLayout:e})=>!e&&a`
      .summary-item__hed-link::after {
        margin-right: auto;
        margin-left: auto;
      }

      .summary-item:not(:first-child) {
        ${l(m.lg)} {
          grid-column: 9 / span 4;
          margin-bottom: 0;
          border-bottom: 1px solid
            ${n("colors.discovery.body.white.border")};
          padding: 0 0 ${r(4)} 0;

          ${({summaryCollageColSpan:e})=>"use6"===e&&"grid-column: 7 / span 6;"};
        }

        .summary-item__hed {
          ${d("typography.definitions.discovery.hed-bulletin-primary")}
        }

        .summary-item__hed-link {
          &::after {
            display: none;
          }
        }

        .summary-item__hed {
          ${d("typography.definitions.discovery.hed-bulletin-secondary")}
        }

        .summary-item__dek,
        .summary-item__metadata-primary,
        .summary-item__metadata-secondary {
          display: none;
        }
      }
    `}
  ${({hasTwoColumnLayout:e,theme:t})=>e&&a`
      ${h} {
        margin-bottom: ${r(4)};
        padding: 0;
        padding-top: 0;
        padding-bottom: 0;

        * {
          ${d(t,"typography.definitions.discovery.subhed-section-secondary")};
        }
      }

      .summary-item {
        border-bottom: unset;

        .summary-item__content {
          flex: 5;
        }
      }
      ${s(0,m.md)} {
        .summary-item {
          &:nth-of-type(n + 3) {
            display: flex;
            column-gap: 1rem;

            .summary-item__asset-container {
              flex: 1;
              align-self: center;
            }
          }
        }
      }
      ${l(m.md)} {
        .summary-item {
          &:nth-of-type(2) {
            grid-column: 7 / span 6;
          }

          &:nth-of-type(n + 3) {
            grid-column: span 3;
            grid-row: 2;
          }
        }
      }
    `}

  .summary-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`,S=i(y.Collection).withConfig({displayName:"SummaryCollageSixSummaryList"})`
  ${p}.summary-item__rubric {
    margin-bottom: ${r(1)};
  }

  &&& {
    .summary-item__hed {
      margin-bottom: ${r(2)};
    }
  }

  .summary-item__publish-date {
    margin-bottom: ${r(3)};
  }

  .summary-list__items {
    .summary-list__item {
      .summary-item__hed {
        ${({hasTwoColumnLayout:e})=>e&&d("typography.definitions.discovery.hed-core-secondary")}
      }
      ${s(0,m.md)} {
        margin-bottom: ${({hasTwoColumnLayout:e})=>e?r(4):0};
      }
      padding-bottom: ${({hasTwoColumnLayout:e})=>e?"unset":0};
    }

    .summary-item:first-child {
      margin-bottom: ${({hasTwoColumnLayout:e})=>e?r(4):0};
    }
  }
`;e.exports={SummaryCollageSixSummaryList:S,SummaryCollageSixWrapper:b}},12956:(e,t,o)=>{const a=o(45697),i=o(67294),{useIntl:r}=o(76186),n=o(28917).Z,{componentTracking:s}=o(28601),l=o(7279),d=o(32168),m=o(44031),c=o(32246),u=o(56662),{trackComponent:p}=o(40199),{SummaryCollageThreeBGWrapper:g,SummaryCollageThreeButtonWrapper:h,SummaryCollageThreeTitle:y,SummaryCollageThreeDek:b,SummaryCollageThreeWrapper:S,SummaryCollageThreeItemWrapper:C}=o(219),{getVariationNames:f}=o(95545),$=o(17843),v=({buttonUrl:e,customTextForSeeMoreButton:t,dangerousHed:o,dangerousDek:a,desktopFeatureColSpan:c,desktopFeatureColSpanForVideo:f,hasBorder:v,hasExtraPadding:w,hasExtraBottomPadding:k,hasExtraTopPadding:T,hasIncreasedTitleSpacing:I,hasMinimalSummaryItem:x,hasModerateBottomMarginOnDek:B,hasNoBottomPadding:E,hasNoMarginBottonOnLastItem:D,hasNoMarginBottomLastItemHed:H,hasOtherTitleSpacing:N,hasTopSpacing:P,hideRubricItemSummary:M,hideVerticalBorders:L,isPrimaryItemFullBleed:F,items:A,isDenseSummaryCollageThree:O,isSpecial:_,recircRiver:R,sectionTitleVariation:V,shouldDisplayDangerousDek:W,shouldEmbedFeaturedVideo:j,shouldEnableBundleComponentAnalytics:U,shouldHideBylines:G,shouldHideDangerousDek:z,shouldHideDangerousDekFirstChild:q,shouldHidePublishDate:K,shouldHideSpaceAtTop:J,shouldUseDiscoveryTypeToken:Q,shouldShowSeeMoreButton:Z,shouldUseAlternativeStyle:X,showMoreButtonVariation:Y,summaryItemRubricVariation:ee,summaryItemVariation:te,theme:oe})=>{i.useEffect((()=>{p("SummaryCollageThree")}),[]);const{formatMessage:ae}=r(),ie=x?{shouldHideBylines:!0,hideRubricItemSummary:!0,shouldHidePublishDate:!0,shouldHideMetadataSecondary:!0,shouldHideIcon:!0,shouldHideDangerousDek:!0,hasUnderlineHed:!1,hasTighterVerticalSpacing:!0}:{},re=W&&a,ne=l[Y],se=d[V],le=m[te],de="SummaryCollageThreeItem",me=A.every((e=>"cnevideo"===e.contentType))?f:c;return i.createElement($,{palette:oe},i.createElement(g,null,i.createElement(S,{summaryCollageColSpan:me,dangerousHed:o,hasDangerousDek:re,hasExtraPadding:w,hasExtraBottomPadding:k,hasExtraTopPadding:T,hasMinimalSummaryItem:x,hasNoBottomPadding:E,hideVerticalBorders:L,hasTopSpacing:P&&!J,isDenseSummaryCollageThree:O,shouldShowSeeMoreButton:Z,shouldUseAlternativeStyle:X,hasModerateBottomMarginOnDek:B,hasNoMarginBottomLastItemHed:H,hasNoMarginBottonOnLastItem:D},o&&i.createElement(y,{as:se,dangerousHed:o,hasIncreasedTitleSpacing:I,hasOtherTitleSpacing:N,shouldUseAlternativeStyle:X}),re&&i.createElement(b,{dangerouslySetInnerHTML:{__html:a},shouldUseDiscoveryTypeToken:Q}),A.map(((e,t)=>{var a;const r=j&&(null===(a=null==e?void 0:e.image)||void 0===a?void 0:a.scriptUrl),n=s.addDataSectionTitleAttribute(U,o,t),l=0===t?q:z;return r?i.createElement(C,{as:u,"data-testid":de,analyticsDataAttribute:n,hasBorder:v,isFeatured:0===t,item:e,key:e.copilotID,scriptUrl:e.image.scriptUrl,isDenseSummaryCollageThree:O,shouldUseAlternativeStyle:X}):i.createElement(C,Object.assign({as:le,"data-testid":de},e,{analyticsDataAttribute:n,hasExtraPadding:w,hideRubricItemSummary:M,shouldHideDangerousDek:l,key:t,hedTag:"h3",recircRiver:R,rubricVariation:ee,shouldHideBylines:G},ie,{isPrimaryItemFullBleed:F,index:t,hasBorder:v,hasMinimalSummaryItem:x,isSpecial:_,shouldUseAlternativeStyle:X,shouldHidePublishDate:K}))})),Z&&i.createElement(h,null,i.createElement(ne,{btnStyle:"outlined",label:t||ae(n.seeMore),ariaLabel:t||ae(n.seeMore),href:e,inputKind:"link",isSpecial:_})))))},w=f(l);v.propTypes={buttonUrl:a.string,className:a.string,customTextForSeeMoreButton:a.string,dangerousDek:a.string,dangerousHed:a.string,desktopFeatureColSpan:a.oneOf(["use8","use9"]),desktopFeatureColSpanForVideo:a.oneOf(["use8","use9"]),hasBorder:a.bool,hasExtraBottomPadding:a.bool,hasExtraPadding:a.bool,hasExtraTopPadding:a.bool,hasIncreasedTitleSpacing:a.bool,hasMinimalSummaryItem:a.bool,hasModerateBottomMarginOnDek:a.bool,hasNoBottomPadding:a.bool,hasNoMarginBottomLastItemHed:a.bool,hasNoMarginBottonOnLastItem:a.bool,hasOtherTitleSpacing:a.bool,hasTopSpacing:a.bool,hideRubricItemSummary:a.bool,hideVerticalBorders:a.bool,isDenseSummaryCollageThree:a.bool,isPrimaryItemFullBleed:a.bool,isSpecial:a.bool,items:a.arrayOf(a.shape(m.propTypes)).isRequired,recircRiver:a.string,sectionTitleVariation:a.string,shouldDisplayDangerousDek:a.bool,shouldEmbedFeaturedVideo:a.bool,shouldEnableBundleComponentAnalytics:a.bool,shouldHideBylines:a.bool,shouldHideDangerousDek:a.bool,shouldHideDangerousDekFirstChild:a.bool,shouldHidePublishDate:a.bool,shouldHideSpaceAtTop:a.bool,shouldShowSeeMoreButton:a.bool,shouldUseAlternativeStyle:a.bool,shouldUseDiscoveryTypeToken:a.bool,showMoreButtonVariation:a.oneOf(w),summaryItemRubricVariation:a.string,summaryItemVariation:c.propTypes.summaryItemVariation,theme:a.oneOf(["standard","inverted","special"])},v.defaultProps={buttonUrl:"",desktopFeatureColSpan:"use8",desktopFeatureColSpanForVideo:"use8",hasBorder:!0,hasExtraBottomPadding:!1,hasExtraPadding:!1,hasExtraTopPadding:!1,hasIncreasedTitleSpacing:!1,hasMinimalSummaryItem:!1,hasModerateBottomMarginOnDek:!1,hasNoBottomPadding:!1,hasNoMarginBottomLastItemHed:!1,hasNoMarginBottonOnLastItem:!1,hasOtherTitleSpacing:!1,hasTopSpacing:!1,hideVerticalBorders:!1,isPrimaryItemFullBleed:!1,isSpecial:!1,sectionTitleVariation:"LineAboveLineBelowTextCenter",shouldEmbedFeaturedVideo:!1,shouldHideBylines:!1,shouldHideDangerousDek:!1,shouldHideDangerousDekFirstChild:!1,shouldHidePublishDate:!0,shouldHideSpaceAtTop:!1,shouldShowSeeMoreButton:!1,shouldUseAlternativeStyle:!1,shouldUseDiscoveryTypeToken:!1,showMoreButtonVariation:"UtilityInverted",summaryItemVariation:"TextBelowLeft",theme:"standard"},v.displayName="SummaryCollageThree",e.exports=v},68017:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(12956);e.exports=a(i,"SummaryCollageThree")},28917:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({seeMore:{id:"SummaryCollageThree.seeMore",defaultMessage:"See More Videos",description:"label text for see more button"}})},73933:(e,t,o)=>{const a=o(45697),i=o(67294),{useState:r,useEffect:n}=o(67294),s=o(50361),l=o(32246),d=o(44031),{getPropsForSummaryItemFeatured:m}=(o(94154),o(80111)),{componentTracking:c}=o(28601),{SummaryCollageTweleveSummaryListItem:u,SummaryCollageTweleveWrapper:p,SummaryCollageTweleveMainItem:g,SummaryCollageTweleveUnderMainItem:h,SummaryCollageTweleveSummaryList:y,SummaryCollageTweleveGrid:b,SummaryCollageTweleveGridItemList:S,SummaryCollageTweleveGridItemListButtonWrapper:C,SummaryCollageTweleveSummaryCarouselWrapper:f,SummaryCollageTweleveSummaryCarousel:$}=o(37790),v=o(28657),{trackComponent:w}=o(40199),k=o(38915),T=({curatedSearchHed:e,dangerousDek:t,dangerousHed:o,featuredDangerousHed:a,featuredFooter:f,hasUnderlineHed:$,hideRubricItemSummary:T,listItemsLimit:I,isCenterAlignedWithTopDividerOnly:x,items:B,rightColumnFeature:E,recircRiver:D,sectionTitleVariation:H,shouldUseFeaturedTitleAndFooter:N,shouldEnableBundleComponentAnalytics:P,shouldHideBylines:M,shouldHideDangerousDekInSummaryList:L,shouldLimitListItemsOnMobile:F,shouldUseDekAsHed:A,summaryListSummaryItemVariation:O,summaryListHed:_,summaryItemRubricVariation:R,summaryItemVariation:V,summarySectionTitleVariation:W,trackingNamespace:j})=>{const[U,G]=i.useState(!0);i.useEffect((()=>{w("SummaryCollageTweleve")}),[]);const z=A?t:N&&a||o,q=_||e,K=!!z,[J,Q]=r(6);let Z={};E&&(Z={hasFeatured:!0,summaryItemFeatured:E}),n((()=>{F&&window.innerWidth<v.minThresholds.xl&&Q(I)}),[I,F]);const X=s(B),Y=c.addDataSectionTitleAttribute(P,(null==j?void 0:j.hero)||o),ee=c.addDataSectionTitleAttribute(P,(null==j?void 0:j.under)||o),te=X.slice(4,6),oe=X.slice(11,12)[0],ae={clickHandler:{},hasUnderlineHed:!1,hideRubricItemSummary:T,recircRiver:D},{featuredProps:ie}=m(Object.assign(Object.assign({item:oe,index:5,sharedSummaryItemProps:ae},Z),{shouldHoldImageSpace:!0}));return i.createElement(b,null,i.createElement(p,null,i.createElement(g,Object.assign({},X[0],{as:d.TextBelowLeft,analyticsDataAttribute:Y,hideRubricItemSummary:!1,recircRiver:D,shouldHideBylines:M,shouldHideDangerousDek:!1,shouldHidePublishDate:!0,hasUnderlineHed:!1})),i.createElement(u,{hasUnderHeroItem:!0,hideVerticalBorders:!0,as:l.Collection,dangerousHed:o,shouldEnableBundleComponentAnalytics:P,shouldHideDangerousDek:!0,items:X.slice(1,4),sectionTitleVariation:H,summaryItemVariation:V,shouldHideBylines:M,shouldHidePublishDate:!0,trackingNamespace:null==j?void 0:j.aside,recircRiver:D,hasUnderlineHed:!1,rubricVariation:R}),te.map(((e,t)=>i.createElement(h,Object.assign({key:`underHereItem-${t}`},e,{as:d.SideBySideThirdsImageRight,analyticsDataAttribute:ee,hideRubricItemSummary:!1,recircRiver:D,shouldHideBylines:M,shouldHidePublishDate:!0,hasUnderlineHed:!1}))))),i.createElement(S,{hasHed:K,isCenterAlignedWithTopDividerOnly:x},i.createElement(y,Object.assign({},Z,{displayHed:z,dangerousHed:q,footerWithLink:N?f:{},hasUnderlineHed:$,hideRubricItemSummary:!1,shouldEnableBundleComponentAnalytics:P,shouldHideDangerousDek:L,shouldHidePublishDate:!0,shouldHoldImageSpace:!1,items:B.slice(6,6+J),sectionTitleVariation:W,summaryItemVariation:O||V,recircRiver:D,shouldHideBylines:!0,trackingNamespace:null==j?void 0:j.rightRail})),!1,i.createElement(C,null,F&&i.createElement(k.Primary,{className:"button--show-list",onClickHandler:()=>{Q(U?6:I),G(!U)},label:U?"Show More":"Show Less",inputKind:"button"}))))};T.propTypes={className:a.string,curatedSearchHed:a.string,dangerousDek:a.string,dangerousHed:a.string,featuredDangerousHed:a.string,featuredFooter:a.shape({link:a.string,label:a.string}),hasUnderlineHed:a.bool,hideRubricItemSummary:a.bool,hideVerticalBorders:a.bool,isCenterAlignedWithTopDividerOnly:a.bool,items:a.arrayOf(a.shape(d.propTypes)),listItemsLimit:a.number,recircRiver:a.string,rightColumnFeature:a.shape({ctaUrl:a.string,header:a.string,ctaTextLabel:a.string,itemIndex:a.number,hideOnMobile:a.bool,overrideFeaturedLinks:a.bool}),sectionTitleVariation:a.string,shouldEnableBundleComponentAnalytics:a.bool,shouldHideBylines:a.bool,shouldHideDangerousDek:a.bool,shouldHideDangerousDekInFeaturedItems:a.bool,shouldHideDangerousDekInSummaryList:a.bool,shouldLimitListItemsOnMobile:a.bool,shouldUseDekAsHed:a.bool,shouldUseFeaturedTitleAndFooter:a.bool,summaryItemRubricVariation:a.string,summaryItemVariation:l.propTypes.summaryItemVariation,summaryListHed:a.string,summaryListSummaryItemVariation:a.string,summarySectionTitleVariation:a.string,trackingNamespace:a.object},T.defaultProps={hideRubricItemSummary:!1,hideVerticalBorders:!1,items:[],listItemsLimit:6,sectionTitleVariation:"TextLeft",shouldHideBylines:!1,shouldHideDangerousDek:!0,shouldHideDangerousDekInFeaturedItems:!1,shouldHideDangerousDekInSummaryList:!0,shouldLimitListItemsOnMobile:!1,shouldUseDekAsHed:!1,shouldUseFeaturedTitleAndFooter:!1,summaryItemVariation:"SideBySideThirdsImageRight",summaryListSummaryItemVariation:null,summarySectionTitleVariation:"TextLeft"},T.displayName="SummaryCollageTweleve",e.exports=T},97171:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(73933);e.exports=a(i,"SummaryCollageTweleve")},37790:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i,getColorToken:r,minScreen:n,minMaxScreen:s,maxScreen:l,getTypographyStyles:d}=o(79720),{applyGridSpacing:m,cssVariablesGrid:c}=o(62470),{GridWrapper:u,GridItem:p}=o(14134),{cssVariablesCollage:g,universalGridCore:h}=o(61774),{RubricWrapper:y}=o(7320),{SectionTitleHed:b}=o(80577),{SummaryListTitle:S}=o(41849),C=o(33946),{CarouselSectionTitle:f,SummaryCarouselRow:$}=o(28642),v=o(32246),{SummaryItemHedBase:w}=o(27853),{BREAKPOINTS:k}=o(85326),{SummaryItemFeaturedWrapper:T,FeaturedTitle:I,FeaturedLink:x}=o(94092),{SummaryItemDek:B,SummaryItemHedLink:E,SummaryItemContent:D,SummaryItemWrapper:H,SummaryItemAssetContainer:N}=o(88269),P=a.div.withConfig({displayName:"SummaryCollageTweleveWrapper"})`
  ${h()}
  ${g()}
  ${m("padding")}
  ${S} {
    margin-bottom: 0;
  }

  ${b} {
    padding-left: 0;
  }
  grid-column: 1 / -1;

  &&& {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: ${i(0)};
    order: 1;
    padding-top: 0;
    padding-right: 0;
    padding-left: 0;
    ${n(k.lg)} {
      grid-column-gap: var(--grid-gap);
      grid-column: 1 / span 9;
      grid-row: 1 / span 3;
      grid-template-columns: repeat(9, 1fr);
      grid-template-rows:
        minmax(${i(5)}, auto) minmax(
          ${i(5)},
          auto
        )
        1fr;
      grid-row-gap: ${i(0)};
    }
  }
  ${l(k.md)} {
    .summary-item:first-child {
      padding-bottom: ${i(2.5)};
    }
  }

  .summary-item:last-child {
    align-self: start;
    border-bottom: 1px solid
      ${r("colors.discovery.body.white.border")};
    padding-bottom: ${i(2.5)};
  }

  .summary-item__content {
    padding-top: ${i(2.5)};
  }
  ${u} {
    border-top: none;
  }
`,M=a.div.withConfig({displayName:"SummaryCollageTweleveMainItem"})`
  && {
    grid-column: 1 / -1;
    ${n(k.lg)} {
      grid-column: 4 / 10;
      border-bottom: 0;
      padding-bottom: ${i(3)};
    }

    img {
      object-fit: cover;
      object-position: top;
    }
  }

  .summary-item__hed {
    ${d("typography.definitions.discovery.hed-feature")};
    color: ${r("colors.discovery.body.white.heading")};
  }
  ${n(k.lg)} {
    grid-column: 4 / -1;
  }

  .summary-item__dek {
    display: block;
    ${d("typography.definitions.discovery.description-core")};
    color: ${r("colors.discovery.body.white.description")};
  }

  .summary-item__content {
    padding-bottom: 0;
  }

  .summary-item__image-link {
    padding-right: 0;

    @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
      margin-right: -${i(3)};
      margin-left: -${i(3)};
    }
  }

  .summary-item__byline {
    margin-bottom: 0;
  }
  ${y}.summary-item__rubric {
    margin-bottom: ${i(2)};
    @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
      margin-bottom: ${i(1.5)};
    }
    color: ${r("colors.discovery.body.white.context-signature")};
  }

  .summary-item:first-child {
    padding-bottom: ${i(2.5)};
  }
`,L=a.div.withConfig({displayName:"SummaryCollageTweleveSummaryListItem"})`
  && {
    grid-column: 1 / -1;
    margin: 0;
    padding: 0;

    .summary-item {
      margin: 0 0 ${i(2)};
      padding: ${i(2.5)} 0;
      ${n(k.lg)} {
        position: relative;
        margin-bottom: 0;
        overflow: hidden;
      }

      &:first-child {
        ${n(k.lg)} {
          padding-top: 0;
        }
        ${l(k.md)} {
          padding-top: ${i(2.5)};
        }
      }

      &:last-child {
        ${s(0,k.md)} {
          margin-bottom: 0;
          padding-bottom: 0;
        }

        ${s(0,k.lg)} {
          &::after {
            display: none;
          }
        }
      }

      .summary-item__hed {
        ${d("typography.definitions.discovery.hed-core-primary")}
        color:  ${r("colors.discovery.body.white.heading")};
      }

      .summary-item__metadata-primary,
      .summary-item__metadata-secondary {
        display: none;
      }
    }
  }

  && {
    ${n(k.lg)} {
      grid-column: 9 / -1;
      margin-left: calc(var(--border-offset) * -1);
      padding-left: var(--border-offset);
      width: calc(100% + var(--border-offset));
    }
    ${({hideVerticalBorders:e})=>e&&"&&& {\n    border-left: 0;\n    padding-left: 0;\n    }"}

    ${({hasUnderHeroItem:e})=>e&&"grid-row-end: span 3;"}

.summary-item:last-child {
      @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
        border-bottom: none;
        padding-bottom: ${i(1)};
      }

      @media (min-width: 0) and (max-width: calc(${k.md} - 1px)) {
        padding-bottom: ${i(2)};
      }
    }
    ${n(k.lg)} {
      grid-column: 1 / span 3;
      grid-row-start: 1;
      margin: 0 calc(var(--border-offset) * -1) 0 0;
      padding-right: var(--border-offset);
      padding-left: 0;
    }

    @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
      margin-bottom: ${i(2)};
    }

    @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
      margin-bottom: 0;
    }

    .summary-item__hed {
      /* TOFIX: Lots of overrides happening here, this reassigns the default token for .summary-item__hed */
      ${d("typography.definitions.discovery.hed-core-primary")}
    }

    .summary-item__dek {
      display: block;
    }

    .summary-item--has-border {
      margin-bottom: 0;
    }

    .summary-item__content {
      padding-bottom: 0;
    }

    .summary-item--has-rule .summary-item__hed-link::after {
      display: block;
    }
  }
`,F=a.div.withConfig({displayName:"SummaryCollageTweleveUnderMainItem"})`
  grid-column: 1 / -1;
  border-top: 1px solid ${r("colors.discovery.body.white.border")};
  border-bottom: none;
  ${n(k.lg)} {
    grid-column: 4 / -1;
  }

  &.summary-item {
    .summary-item__hed {
      margin-bottom: ${i(1)};
      ${d("typography.definitions.discovery.hed-core-secondary")};
      color: ${r("colors.discovery.body.white.heading")};
    }

    &:first-of-type {
      padding-bottom: ${i(2.5)};
    }
  }

  .summary-item__dek {
    display: block;
  }

  .summary-item__asset-container {
    display: grid;
    align-self: baseline;
    padding-top: ${i(2.5)};
  }
  ${D} {
    padding-bottom: 0;
  }
`,A=a(v.Collection).withConfig({displayName:"SummaryCollageTweleveSummaryList"})`
  &&& {
    order: 3;
    margin: 0;
    border-top: none;
    padding: 0;

    ${n(k.lg)} {
      grid-column: 10 / span 3;
      grid-row: 2 / span 2;
      margin-left: calc(var(--border-offset) * -1);
      padding-right: 0;
      padding-left: var(--border-offset);
      width: calc(100% + var(--border-offset));
      height: 100%;
    }

    /* reset width of child elements */
    &: {
      width: auto;
    }
    ${S} {
      padding-top: 0;
      padding-bottom: 0;
      @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
        margin-top: ${i(3)};
        margin-bottom: ${i(3)};
        padding-top: ${i(.5)};
        padding-bottom: ${i(.5)};
      }
    }

    .summary-list__item {
      grid-template-areas: 'content image';
      grid-template-columns: 1fr 75px;
      padding-top: ${i(2.5)};
      padding-bottom: ${i(2.5)};

      ${N} {
        display: none;
      }

      &:first-of-type {
        ${n(k.lg)} {
          border-top: 1px solid
            ${r("colors.discovery.body.white.border")};
          padding-top: 0;
        }
      }

      &:last-of-type {
        @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
          border-bottom: none;
          padding-bottom: 0;
        }
      }

      &.summary-item--has-border {
        margin-bottom: 0;
      }

      &.summary-item--layout-placement-side-by-side {
        grid-column-gap: var(--grid-gap);
      }

      .summary-item__image-link {
        align-self: start;
        max-width: 75px;
        height: auto;
      }

      .summary-item__hed {
        margin-bottom: 0;
      }
    }
    ${({displayHed:e})=>!e&&` && {\n        order: 2;\n\n        ${n(k.lg)} {\n          grid-row: 1 / span 3;\n        }\n    \n        .summary-list__item {\n          &:first-of-type {\n              border-top: none;\n          }\n        }\n      }\n    `}
  }
`,O=a.div.withConfig({displayName:"SummaryCollageTweleveGridItemList"})`
  ${({isCenterAlignedWithTopDividerOnly:e,theme:t})=>e&&`${u}{\n      ${p} {\n        .summary-list__items {\n          ${T} {\n            border-bottom: 1px solid ${r(t,"colors.discovery.body.white.border")};\n            ${E} {\n              ${w} {\n                text-transform: capitalize;\n                line-height: 1.45em;\n                ${d(t,"typography.definitions.discovery.hed-core-secondary")};\n                color: ${r("colors.discovery.body.white.heading")};\n                padding-top: 0;\n              }\n            }\n\n            ${B} {\n              ${d(t,"typography.definitions.discovery.description-core")};\n              padding-bottom: 8px;\n              text-transform: none;\n              color: ${r(t,"colors.discovery.body.white.description")};\n            }\n\n            ${I} {\n              color:\n              ${r(t,"colors.consumption.lead.standard.context-signature")};\n              ${d(t,"typography.definitions.globalEditorial.context-primary")};\n              text-align: center;\n              padding-top: 20px;\n              border-bottom: none;\n              padding-bottom: 0;\n            }\n\n            ${x} {\n              padding-top:24px;\n              padding-bottom: 24px;\n              color: ${r(t,"colors.discovery.body.white.description")};\n            }\n            .summary-item__rubric{\n              display:none;\n            }\n          }\n        }\n      }\n    }`}

  grid-column: 1 / -1;
  order: ${({hasHed:e})=>e?3:2};

  ${n(k.lg)} {
    grid-column: 10 / span 3;
    grid-row: ${({hasHed:e})=>e?"2 / span 2":"1 / span 3"};
  }

  .summary-list__item--before-hidden {
    border-bottom: none;
  }
  ${E} {
    ${w} {
      ${d("typography.definitions.discovery.hed-bulletin-primary")};
      color: ${r("colors.discovery.body.white.heading")};
    }
  }
`,_=a.div.withConfig({displayName:"SummaryCollageTweleveGridItemListButtonWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;

  ${n(k.lg)} {
    display: none;
  }

  .button--show-list {
    margin-top: ${i(4)};
  }
`,R=a.div.withConfig({displayName:"SummaryCollageTweleveSummaryCarouselWrapper"})`
  ${({theme:e})=>`${T} {\n    border-bottom: 1px solid ${r(e,"colors.discovery.body.white.border")};\n  ${E} {\n    ${w} {\n      text-transform: capitalize;\n      line-height: 1.45em;\n      ${d(e,"typography.definitions.discovery.hed-core-secondary")};\n      color: ${r("colors.discovery.body.white.heading")};\n      padding-top: 0;\n    }\n  }\n  ${B} {\n    ${d(e,"typography.definitions.discovery.description-core")};\n    padding-bottom: 8px;\n    text-transform: none;\n    color: ${r(e,"colors.discovery.body.white.description")};\n  }\n  ${I} {\n    color:\n    ${r(e,"colors.consumption.lead.standard.context-signature")};\n    ${d(e,"typography.definitions.globalEditorial.context-primary")};\n    text-align: center;\n    padding-top: 20px;\n    border-bottom: none;\n    padding-bottom: 0;\n    border-top: 1px solid;\n    border-top-color: ${r(e,"colors.discovery.body.white.border")};\n  }\n  ${x} {\n    padding-top:24px;\n    padding-bottom: 24px;\n    color: ${r(e,"colors.discovery.body.white.description")};\n  }\n  .summary-item__asset-container{\n    margin-left: 57px;\n    margin-right: 57px;\n  }\n  ${n(k.md)} {\n    display: none;\n  }\n  ${y}.summary-item__rubric {\n    display: block;\n  }\n  ${H}{\n    grid-template-rows: auto;\n    ${D}{\n      grid-row: 1;\n    }\n    ${N}{\n      grid-row: 2;\n      max-width: 100%;\n    }\n  }\n}`}
  ${n(k.md)} {
    display: none;
  }
  ${y}.summary-item__rubric {
    display: block;
  }
  ${H} {
    grid-template-rows: auto;
    ${y} {
      grid-row: 1;
    }
    ${D} {
      grid-row: 2;
    }
  }

  .summary-item__rubric {
    display: none;
  }
  ${f} {
    margin: ${i(4)} 0 0 auto;
    padding-top: 0;
    padding-bottom: 0;
  }
  ${$} {
    padding-right: 0;
    padding-left: 0;
  }
`,V=a(C).withConfig({displayName:"SummaryCollageTweleveSummaryCarousel"})``,W=a.div.withConfig({displayName:"SummaryCollageTweleveGrid"})`
  ${c()}
  ${g()}
  ${m("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${k.xxl};
  row-gap: 0;

  ${n(k.md)} {
    grid-template-columns: repeat(12, 1fr);
  }

  ${n(k.lg)} {
    grid-template-rows: minmax(${i(4)}, auto) repeat(2, 1fr);
  }

  ${E} {
    ${w} {
      margin-bottom: ${i(1)};
    }
  }
  ${M} {
    ${E} {
      ${w} {
        margin-bottom: ${i(1)};
        @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
          margin-bottom: ${i(.5)};
        }
      }
    }
    ${B} {
      ${d("typography.definitions.discovery.description-feature")};
      margin-bottom: ${i(2)};
      @media (min-width: 0) and (max-width: calc(${k.lg} - 1px)) {
        margin-bottom: ${i(1)};
      }
    }
  }
  ${F} {
    padding-bottom: ${i(2.5)};
  }
`;e.exports={SummaryCollageTweleveMainItem:M,SummaryCollageTweleveSummaryListItem:L,SummaryCollageTweleveUnderMainItem:F,SummaryCollageTweleveWrapper:P,SummaryCollageTweleveSummaryList:A,SummaryCollageTweleveGrid:W,SummaryCollageTweleveGridItemList:O,SummaryCollageTweleveGridItemListButtonWrapper:_,SummaryCollageTweleveSummaryCarouselWrapper:R,SummaryCollageTweleveSummaryCarousel:V}},73416:(e,t,o)=>{const a=o(67294),i=o(45697),{renderToStaticMarkup:r}=o(97762),{useIntl:n}=o(76186),s=o(70420).Z,l=o(30182),d=o(93984),m=o(77083),c=o(57028),{SpotlightMainFeatureGrid:u,SpotlightMainFeatureHeader:p,SpotlightMainFeatureByline:g,SpotlightMainFeatureContent:h,SpotlightMainFeatureCover:y,SpotlightMainFeatureCoverImage:b,SpotlightMainFeatureCoverImageWrapper:S,SpotlightMainFeatureCredit:C,SpotlightMainFeatureLink:f,SpotlightMainFeatureBottomWrapper:$}=o(79790),{componentTracking:v}=o(28601),{SpotlightSectionTitle:w,SpotlightDangerousBottomDek:k}=o(25634),T="Author Spotlight/Story",I=({contributors:e,customizedContinueReadingText:t,dangerousDek:o,dangerousHed:i,hasMarginTopOnMobile:I,hasSpecialStyleForFeatureLink:x,hasRoundedCorners:B,image:E,isDotClickable:D,isSpecialTheme:H,related:N,rubric:P,sectionTitleDangerousHed:M,showSectionTitleInsideContent:L,sectionTitleVariation:F,selectedStories:A,selectedStoriesHeadline:O,selectedStoriesImageWidth:_,shouldUseDekForselectedStoriesHeadline:R,shouldHideDangerousDek:V,shouldHaveLargerFeaturedImage:W,shouldHideSelectedStoriesHeadline:j,shouldHideFeatureItemHeader:U,shouldHideFeatureItemByline:G,shouldHideFeatureItemCaption:z,shouldLazyLoadCoverImage:q,shouldUseDropCap:K=!1,hasAdditionalDropcapStyling:J,shouldShowDangerousBottomDek:Q,shouldShowSelectedStoriesBelowInMobile:Z,summaryItemVariation:X,summaryItemVariationWithNoAssest:Y,template:ee,url:te,showItemsAsList:oe})=>{const ae=n(),ie="spotlight-story"===ee?`Story Spotlight/${P.name}`:`Author Spotlight/${i}`,re=(e=!1)=>{const t=v.addDataSectionTitleAttribute(!0,ie,0);return e&&(t["data-section-title"]=`${t["data-section-title"]}-image`),Object.assign(Object.assign({},t),{href:te})},ne={dangerousHed:M,className:"SpotlightSectionTitle"};return a.createElement(u,null,a.createElement(y,null,L&&a.createElement(w,Object.assign({as:c[F],isSpecialTheme:H,shouldUseDekForselectedStoriesHeadline:R,showSectionTitleInsideContent:L},ne,{template:ee})),!U&&a.createElement(p,{"data-testid":"SpotlightMainFeatureHeader",isSpecialTheme:H,dangerouslySetInnerHTML:{__html:r(a.createElement("a",Object.assign({},re()),i))},template:ee}),!Z&&a.createElement(m,{items:A,shouldHideSelectedStoriesHeadline:j,sectionTitleVariation:F,selectedStoriesHeadline:O,shouldUseDekForselectedStoriesHeadline:R,shouldHideDangerousDek:V,isDotClickable:D,isSpecialTheme:H,trackingNamespace:T}),a.createElement(S,Object.assign({},re(!0),{tabIndex:"-1"}),a.createElement(b,Object.assign({"data-testid":"SpotlightCoverImage",template:ee,shouldHaveLargerFeaturedImage:W,isLazy:q},E,{hasRoundedCorners:B}))),!G&&a.createElement(g,{"data-testid":"SpotlightAuthorName",contributors:e,template:ee}),!z&&a.createElement(C,{"data-testid":"SpotlightMainFeatureCredit",dangerousCaptionText:"spotlight-contributor"===ee?"":E.caption,dangerousCredit:E.credit,template:ee})),a.createElement(a.Fragment,null,a.createElement(h,{"data-testid":"SpotlightMainFeatureContent",dangerouslySetInnerHTML:{__html:o+("spotlight-contributor"!==ee?r(a.createElement(f,Object.assign({isSpecialTheme:H,tabIndex:"-1"},re(),{dangerouslySetInnerHTML:{__html:t||ae.formatMessage(s.continueReadingText)}}))):"")},shouldUseDropCap:K,hasAdditionalDropcapStyling:J,isSpecialTheme:H,hasMarginTopOnMobile:I,template:ee,hasSpecialStyleForFeatureLink:x}),a.createElement(d,{items:A,sectionTitleVariation:F,selectedStoriesHeadline:O,shouldUseDekForselectedStoriesHeadline:R,shouldHideSelectedStoriesHeadline:j,shouldHideDangerousDek:V,trackingNamespace:T,isSpecialTheme:H,selectedStoriesImageWidth:_}),Z&&a.createElement(m,{items:A,shouldHideSelectedStoriesHeadline:j,sectionTitleVariation:F,selectedStoriesHeadline:O,shouldUseDekForselectedStoriesHeadline:R,shouldHideDangerousDek:V,isDotClickable:D,isSpecialTheme:H,trackingNamespace:T}),a.createElement($,null,a.createElement(l,Object.assign({items:N},Q&&O&&{shouldShowDangerousBottomDek:Q},{summaryItemVariation:X,summaryItemVariationWithNoAssest:Y,template:ee,trackingNamespace:ie,showItemsAsList:oe})),Q&&O&&a.createElement(k,{dangerouslySetInnerHTML:{__html:O},hasEnhancedTopSpacing:Q}))))};I.propTypes={contributors:i.shape({author:i.shape({items:i.arrayOf(i.shape({dangerousBio:i.string,dangerousTitle:i.string,name:i.string,socialMedia:i.array,url:i.string}))})}).isRequired,customizedContinueReadingText:i.string,dangerousDek:i.string.isRequired,dangerousHed:i.string.isRequired,hasAdditionalDropcapStyling:i.bool,hasMarginTopOnMobile:i.bool,hasRoundedCorners:i.bool,hasSpecialStyleForFeatureLink:i.bool,image:i.object.isRequired,isDotClickable:i.bool,isSpecialTheme:i.bool,related:i.arrayOf(i.shape({dangerousBio:i.string,dangerousTitle:i.string,name:i.string,socialMedia:i.array,url:i.string})),rubric:i.shape({name:i.string}),sectionTitleDangerousHed:i.string,sectionTitleVariation:i.string,selectedStories:i.arrayOf(i.shape({dangerousBio:i.string,dangerousTitle:i.string,name:i.string,socialMedia:i.array,url:i.string})),selectedStoriesHeadline:i.string,selectedStoriesImageWidth:i.number,shouldHaveLargerFeaturedImage:i.bool,shouldHideDangerousDek:i.bool,shouldHideFeatureItemByline:i.bool,shouldHideFeatureItemCaption:i.bool,shouldHideFeatureItemHeader:i.bool,shouldHideSelectedStoriesHeadline:i.bool,shouldLazyLoadCoverImage:i.bool,shouldShowDangerousBottomDek:i.bool,shouldShowSelectedStoriesBelowInMobile:i.bool,shouldUseDekForselectedStoriesHeadline:i.bool,shouldUseDropCap:i.bool,showItemsAsList:i.bool,showSectionTitleInsideContent:i.bool,summaryItemVariation:i.string,summaryItemVariationWithNoAssest:i.string,template:i.oneOf(["spotlight-story","spotlight-contributor","spotlight-article"]),url:i.string.isRequired},I.defaultProps={hasAdditionalDropcapStyling:!1,hasMarginTopOnMobile:!1,hasSpecialStyleForFeatureLink:!1,isDotClickable:!1,isSpecialTheme:!1,related:[],sectionTitleVariation:"TextCenter",selectedStories:[],shouldHaveLargerFeaturedImage:!1,shouldHideFeatureItemByline:!1,shouldHideFeatureItemCaption:!1,shouldHideFeatureItemHeader:!1,shouldHideSelectedStoriesHeadline:!1,shouldLazyLoadCoverImage:!1,shouldShowSelectedStoriesBelowInMobile:!1,shouldUseDekForselectedStoriesHeadline:!1,shouldUseDropCap:!1},e.exports=I},79790:function(e,t,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SpotlightMainFeatureBottomWrapper=t.SpotlightMainFeatureLink=t.SpotlightMainFeatureContent=t.SpotlightMainFeatureCredit=t.SpotlightMainFeatureByline=t.SpotlightMainFeatureCoverImageWrapper=t.SpotlightMainFeatureCoverImage=t.SpotlightMainFeatureCover=t.SpotlightMainFeatureHeader=t.SpotlightMainFeatureGrid=void 0;const i=a(o(48655)),r=o(14134),{default:n,css:s}=o(51117),{calculateSpacing:l,getColorStyles:d,getTypographyStyles:m,minMaxScreen:c,minScreen:u,maxScreen:p}=o(79720),{BREAKPOINTS:g}=o(85326),{maxThresholds:h}=o(28657),y=o(99956),{ResponsiveImageContainer:b}=o(7230),S=o(34042),C=o(31954),{BaseLink:f}=o(74327),$=n(i.default.NoMarginsTwoUp).withConfig({displayName:"SummarySpotlightGrid"})`
  /* up to md screens, we should not render a grid  */
  ${p(`${h.lg}px`)} {
    && {
      display: unset;
    }
  }

  > ${r.GridItem} {
    :nth-of-type(1) {
      text-align: center;
    }

    :nth-of-type(2) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      ${u(g.xxl)} {
        grid-column: span 5;
      }
    }
  }
`;t.SpotlightMainFeatureGrid=$;const v=n.h2.withConfig({displayName:"SpotlightMainFeatureHeader"})`
  margin: 0 auto;
  padding-bottom: ${l(3)};
  text-align: center;
  text-transform: uppercase;

  ${({template:e})=>"spotlight-contributor"===e&&s`
      ${u(g.md)} {
        padding-bottom: ${l(6)};
      }
    `}

  ${({isSpecialTheme:e,theme:t})=>e?s`
          ${m(t,"typography.definitions.discovery.hed-break-out")}
          ${d(t,"color","colors.consumption.lead.inverted.heading")};
        `:s`
          ${m(t,"typography.definitions.discovery.hed-feature")}
          ${d(t,"color","colors.discovery.body.light.heading")};
        `};

  ${u(g.lg)} {
    max-width: 80%;
  }

  a {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }
`;t.SpotlightMainFeatureHeader=v;const w=n.div.withConfig({displayName:"SpotlightMainFeatureCover"})``;t.SpotlightMainFeatureCover=w;const k=n.a.withConfig({displayName:"SpotlightMainFeatureCoverImageWrapper"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`;t.SpotlightMainFeatureCoverImageWrapper=k;const T=n(y).withConfig({displayName:"SpotlightMainFeatureCoverImage"})`
  display: inline-block;

  ${u(g.md)} {
    ${({shouldHaveLargerFeaturedImage:e})=>e?"max-width: 80%;":"max-width: 70%;"}
  }

  ${u(g.lg)} {
    ${b} {
      object-fit: cover;

      ${({template:e})=>"spotlight-story"===e&&s`
          max-height: 70vh;
        `}
    }
  }

  ${({template:e})=>"spotlight-contributor"===e&&s`
      ${u(g.md)} {
        max-width: ${l(50)};
      }
      ${p(`${h.md}px`)} {
        display: none;
      }
    `};

  img {
    ${({hasRoundedCorners:e})=>e&&s`
        border-radius: ${l(2)};
      `}
  }
`;t.SpotlightMainFeatureCoverImage=T;const I=n(C).withConfig({displayName:"SpotlightMainFeatureCredit"})`
  grid-area: dek;
  padding: 0 5%;
  text-align: center;

  ${p(`${h.lg}px`)} {
    margin-bottom: ${l(3)};
  }
  ${({theme:e})=>s`
      ${d(e,"color","colors.discovery.body.light.heading")};
    `};

  ${u(g.md)} {
    padding: 0 20%;

    ${({template:e})=>"spotlight-contributor"===e&&s`
        padding: 0;
      `}
  }

  ${({template:e})=>"spotlight-contributor"===e&&s`
      margin-top: ${l(6)};
      margin-bottom: 0;

      ${u(g.lg)} {
        margin-top: ${l(5)};
      }

      ${p(`${h.md}px`)} {
        display: none;
      }

      ${c(g.md,`${h.lg}px`)} {
        margin: ${l(6)} 0;
      }
    `};
`;t.SpotlightMainFeatureCredit=I;const x=n(S).withConfig({displayName:"SpotlightMainFeatureByline"})`
  margin-top: ${l(3)};
  margin-bottom: ${l(.8)};
  padding: 0;

  ${({template:e})=>"spotlight-contributor"===e&&s`
      display: none;
    `};

  span,
  a {
    ${m("typography.definitions.foundation.title-primary")};
  }

  span {
    text-transform: uppercase;

    ${({theme:e})=>s`
        ${d(e,"color","colors.discovery.body.light.heading")};
      `};
  }
`;t.SpotlightMainFeatureByline=x;const B=n(f).withConfig({displayName:"SpotlightMainFeatureLink"})``;t.SpotlightMainFeatureLink=B;const E=n.div.withConfig({displayName:"SpotlightMainFeatureContent"})`
  ${({isSpecialTheme:e,theme:t})=>e?s`
          ${m(t,"typography.definitions.consumptionEditorial.body-core")}
          ${d(t,"color","colors.consumption.lead.inverted.heading")};
        `:s`
          ${m(t,"typography.definitions.consumptionEditorial.body-core")}
          ${d(t,"color","colors.discovery.body.light.description")};
        `};

  ${({template:e,shouldUseDropCap:t})=>t&&"spotlight-contributor"!==e&&s`
      &::first-letter {
        ${({theme:e})=>m(e,"typography.definitions.consumptionEditorial.display-large")};

        /* These values were hard-coded to work with the tny-fiction BI. If your brand has
           a requirement for the dropcap, there may be some custom styling needed. */
        margin-bottom: ${l(-2)};
        float: left;
        padding: 9px 4px 0 0px;

        ${({hasAdditionalDropcapStyling:e})=>e&&` padding: ${l(2)} ${l(2)} ${l(2)} 0;`}
      }
    `}

  /* We declare the styles here because SpotlightMainFeatureLink is wrapped
     in renderToStaticMarkup. styled-components sets a component's styles
     in the DOM after mounting, a phase that won't happen if we render
     this component to static HTML during the production build. */
  ${B} {
    ${({isSpecialTheme:e,theme:t})=>e?s`
            ${d(t,"color","colors.consumption.lead.inverted.heading")};
          `:s`
            ${d(t,"color","colors.interactive.base.brand-primary")};
          `}

    ${({hasSpecialStyleForFeatureLink:e,theme:t})=>e&&s`
        ${d(t,"color","colors.consumption.body.standard.link")};
        ${m(t,"typography.definitions.foundation.link-primary")}
      `}

    display: block;
    margin: ${l(3)} 0 0 0;
    width: 100%;
    height: auto;
    text-align: center;
    text-decoration: none;
    text-underline-offset: 5px; /* this was agreed in VQA and is not one of our theme values */
    white-space: nowrap;

    ${u(g.md)} {
      display: inline-block;
      margin: 0 0 0 ${l(1)};
      width: auto;
      text-align: unset;
    }
  }

  ${B}:hover {
    text-decoration: underline;
  }

  ${({hasMarginTopOnMobile:e})=>e&&s`
      ${p(`${h.md}px`)} {
        margin-top: ${l(3)};
      }
    `}

  a {
    ${({isSpecialTheme:e,theme:t})=>e?s`
            ${d(t,"color","colors.consumption.lead.inverted.heading")};
          `:s`
            ${d(t,"color","colors.discovery.body.light.description")};
          `};
  }
`;t.SpotlightMainFeatureContent=E;const D=n.div.withConfig({displayName:"SpotlightMainFeatureBottomWrapper"})``;t.SpotlightMainFeatureBottomWrapper=D},30182:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(44031),{SpotlightRelatedItems:n,SpotlightRelatedItem:s}=o(45844),l=o(48655),{googleAnalytics:d,componentTracking:m}=o(28601),c=({items:e,shouldShowDangerousBottomDek:t,summaryItemVariation:o,summaryItemVariationWithNoAssest:i,template:c,trackingNamespace:u,showItemsAsList:p})=>{if(!e.length)return null;const g=1===e.length,h="spotlight-contributor"===c?r[i]:r[o],y="spotlight-contributor"===c?"Author Spotlight/Recirc":u;return a.createElement(n,Object.assign({single:g,"data-testid":"SpotlightRelatedItems",template:c},t&&{hideSummaryItemBottomSpacing:!0},{showItemsAsList:p}),a.createElement(l.NoMarginsTwoUp,null,e.map(((e,t)=>a.createElement(s,Object.assign({key:t},e.image,e,{analyticsDataAttribute:m.addDataSectionTitleAttribute(!0,y,"spotlight-contributor"===c?t:t+1),dangerousDek:`<a href="${e.url}">${e.dangerousHed}</a>`,alternateClickHandlerStrategy:t=>((e,t)=>{const o=e.nativeEvent;d.emitGoogleTrackingEvent(c,{hitType:"event",eventCategory:"click tracking",eventAction:{"data-section-title":y}}),o.target.parentElement.classList.contains("rubric__link")||(o.preventDefault(),o.metaKey?window.open(t.url,"_blank"):window.location=t.url)})(t,e),shouldHideDangerousHed:!0,shouldHideBylines:!0,hasBorder:!1,sideBySideVerticalAlign:"top","data-testid":"SpotlightRelatedItem",shouldShowAllContentWhenDense:!0,as:h}))))))};c.propTypes={items:i.arrayOf(i.shape({categories:i.shape({tags:i.array}),contributors:i.shape({author:i.shape({items:i.arrayOf(i.shape({dangerousBio:i.string,dangerousTitle:i.string,name:i.string,socialMedia:i.array,url:i.string}))})}),dangerousDek:i.string,dangerousHed:i.string,image:i.object,url:i.string})).isRequired,shouldShowDangerousBottomDek:i.bool,showItemsAsList:i.bool,summaryItemVariation:i.string,summaryItemVariationWithNoAssest:i.string,template:i.oneOf(["spotlight-story","spotlight-contributor","spotlight-article"]).isRequired,trackingNamespace:i.string.isRequired},c.defaultProps={summaryItemVariation:"SideBySideDense",summaryItemVariationWithNoAssest:"TextBelowDesktopOnlyNoAsset"},e.exports=c},45844:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SpotlightRelatedItem=t.SpotlightRelatedItems=void 0;const{default:a,css:i}=o(51117),{calculateSpacing:r,getColorStyles:n,maxScreen:s,minScreen:l}=o(79720),{BREAKPOINTS:d}=o(85326),{maxThresholds:m}=o(28657),{GridWrapper:c}=o(14134),{SummaryItemAssetContainer:u,SummaryItemContent:p,SummaryItemWrapper:g,SummaryItemDek:h}=o(88269),y=a.div.withConfig({displayName:"SpotlightRelatedItems",hasBorder:!1})`
  margin-top: ${r(3)};

  ${({template:e})=>"spotlight-contributor"===e&&i`
      margin-top: ${r(5)};
    `}

  ${l(d.md)} {
    margin-top: ${r(2)};
  }

  a {
    text-decoration: none;
  }

  ${({single:e})=>e&&i`
      ${l(d.md)} {
        align-self: unset;
      }
      ${c} {
        display: unset;
      }

      ${u} {
        display: none;
      }
    `}

  ${s(`${m.md}px`)} {
    ${g} {
      grid-gap: ${r(1)};
      grid-template-columns: none;
    }
  }

  .summary-item {
    border-top-width: 1px;
    border-top-style: solid;
    padding-top: ${r(2)};

    ${h} {
      margin-bottom: 0;

      &:hover {
        text-decoration: underline;
      }
    }

    ${({theme:e})=>n(e,"border-color","colors.discovery.body.white.border")};
  }

  ${({hideSummaryItemBottomSpacing:e})=>e&&i`
      ${u} {
        margin-bottom: 0;
      }
      ${p} {
        padding-bottom: 0;
      }
    `}

  ${({showItemsAsList:e})=>e&&`\n      ${c} {\n        grid-template-columns: repeat(1, 1fr);\n        grid-template-rows: repeat(2, auto);\n        grid-column-gap: 0;\n      }\n    `}
`;t.SpotlightRelatedItems=y;const b=a.div.withConfig({displayName:"SpotlightRelatedItem"})`
  ${u} {
    width: ${r(8)};
  }

  a {
    text-decoration: none;
  }
`;t.SpotlightRelatedItem=b},45395:(e,t,o)=>{const a=o(45697),i=o(67294),{asConfiguredComponent:r}=o(36380),n=o(73416),{SpotlightDangerousBottomDek:s,SpotlightSummaryContainer:l,SpotlightSummaryInnerContainer:d,SpotlightSummarySingleColumn:m,SpotlightSectionTitle:c,SpotlightSummaryGrid:u}=o(25634),{trackComponent:p}=o(40199),g=o(57028),{withCustomTheme:h}=o(36457),y=({customizedContinueReadingText:e,dangerousHed:t,dangerousDek:o,hasMarginTopOnMobile:a,hasRoundedCorners:r,hasSpecialStyleForFeatureLink:h,items:y,isDotClickable:b,isSpecialTheme:S,sectionTitleVariation:C,selectedStories:f,selectedStoriesImageWidth:$,shouldUseDekForselectedStoriesHeadline:v,shouldHaveBackgroundWhite:w,shouldHideDangerousDek:k,shouldHaveLargerFeaturedImage:T,shouldHideSelectedStoriesHeadline:I,shouldHideFeatureItemHeader:x,shouldHideFeatureItemCaption:B,shouldHideFeatureItemByline:E,shouldLazyLoadCoverImage:D,shouldUseLightColorBackground:H,shouldUseMainContentDropCap:N,hasAdditionalDropcapStyling:P,shouldShowDangerousBottomDek:M,shouldShowSelectedStoriesBelowInMobile:L,shouldStackHedAndDek:F,summaryItemVariation:A,summaryItemVariationWithNoAssest:O,template:_,showItemsAsList:R,variations:{showSectionTitleInsideContent:V}})=>{i.useEffect((()=>{p("SummarySpotlight")}),[]);const W=y[0],j={dangerousDek:v?"":o,dangerousHed:t,hasDividerBelow:!0,className:"SpotlightSectionTitle"};return i.createElement(l,{"data-testid":"SpotlightSummaryContainer",shouldHaveBackgroundWhite:w,shouldUseLightColorBackground:H,isSpecialTheme:S},i.createElement(d,null,i.createElement(m,null,!V&&i.createElement(c,Object.assign({"data-testid":"SpotlightOuterSectionTitle",as:g[C],isSpecialTheme:S,shouldUseDekForselectedStoriesHeadline:v,shouldStackHedAndDek:F},j,{template:_})),i.createElement(u,null,i.createElement(n,Object.assign({},W,{customizedContinueReadingText:e,sectionTitleVariation:C,showSectionTitleInsideContent:V},V&&{sectionTitleDangerousHed:t},{selectedStoriesHeadline:o,selectedStoriesImageWidth:$,hasMarginTopOnMobile:a,related:y.slice(1),selectedStories:f,isDotClickable:b,isSpecialTheme:S,shouldHideFeatureItemHeader:x,shouldUseDropCap:N,hasAdditionalDropcapStyling:P,shouldHideSelectedStoriesHeadline:I,shouldUseDekForselectedStoriesHeadline:v,shouldShowDangerousBottomDek:M,shouldShowSelectedStoriesBelowInMobile:L,shouldHaveLargerFeaturedImage:T,shouldHideFeatureItemCaption:B,shouldHideDangerousDek:k,shouldHideFeatureItemByline:E,summaryItemVariation:A,summaryItemVariationWithNoAssest:O,template:_,hasSpecialStyleForFeatureLink:h,showItemsAsList:R,shouldLazyLoadCoverImage:D,hasRoundedCorners:r}))),!M&&"spotlight-contributor"===_&&i.createElement(s,{"data-testid":"SpotlightMobileDangerousDek",dangerouslySetInnerHTML:{__html:o},hideOnTabletDesktop:!0}))))};y.propTypes={customizedContinueReadingText:a.string,dangerousDek:a.string.isRequired,dangerousHed:a.string.isRequired,hasAdditionalDropcapStyling:a.bool,hasMarginTopOnMobile:a.bool,hasRoundedCorners:a.bool,hasSpecialStyleForFeatureLink:a.bool,isDotClickable:a.bool,isSpecialTheme:a.bool,items:a.arrayOf(a.shape({categories:a.shape({tags:a.array}),contributors:a.shape({author:a.shape({items:a.arrayOf(a.shape({dangerousBio:a.string,dangerousTitle:a.string,name:a.string,socialMedia:a.array,url:a.string}))})}),dangerousDek:a.string,dangerousHed:a.string,image:a.object,url:a.string})).isRequired,sectionTitleVariation:a.string,selectedStories:a.arrayOf(a.shape({categories:a.shape({tags:a.array}),contributors:a.shape({author:a.shape({items:a.arrayOf(a.shape({dangerousBio:a.string,dangerousTitle:a.string,name:a.string,socialMedia:a.array,url:a.string}))})}),dangerousDek:a.string,dangerousHed:a.string,image:a.object,url:a.string})),selectedStoriesImageWidth:a.number,shouldHaveBackgroundWhite:a.bool,shouldHaveLargerFeaturedImage:a.bool,shouldHideDangerousDek:a.bool,shouldHideFeatureItemByline:a.bool,shouldHideFeatureItemCaption:a.bool,shouldHideFeatureItemHeader:a.bool,shouldHideSelectedStoriesHeadline:a.bool,shouldLazyLoadCoverImage:a.bool,shouldShowDangerousBottomDek:a.bool,shouldShowSelectedStoriesBelowInMobile:a.bool,shouldStackHedAndDek:a.bool,shouldUseDekForselectedStoriesHeadline:a.bool,shouldUseLightColorBackground:a.bool,shouldUseMainContentDropCap:a.bool,showItemsAsList:a.bool,summaryItemVariation:a.string,summaryItemVariationWithNoAssest:a.string,template:a.oneOf(["spotlight-story","spotlight-contributor","spotlight-article"]).isRequired,variations:a.shape({showSectionTitleInsideContent:a.bool})},y.defaultProps={hasAdditionalDropcapStyling:!1,hasMarginTopOnMobile:!1,hasSpecialStyleForFeatureLink:!1,isDotClickable:!1,isSpecialTheme:!1,sectionTitleVariation:"TextLeftWithLineBelowTitle",shouldHaveBackgroundWhite:!1,shouldHaveLargerFeaturedImage:!1,shouldHideDangerousDek:!1,shouldHideFeatureItemByline:!1,shouldHideFeatureItemCaption:!1,shouldHideFeatureItemHeader:!1,shouldHideSelectedStoriesHeadline:!1,shouldLazyLoadCoverImage:!1,shouldShowDangerousBottomDek:!1,shouldShowSelectedStoriesBelowInMobile:!1,shouldStackHedAndDek:!1,shouldUseDekForselectedStoriesHeadline:!1,shouldUseLightColorBackground:!1,variations:{}},y.displayName="SummarySpotlight",e.exports=r(h(y),"SummarySpotlight")},46714:(e,t,o)=>{const a=o(99147);e.exports=a},25634:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SpotlightSummaryGrid=t.SpotlightSectionTitle=t.SpotlightSummarySingleColumn=t.SpotlightSummaryInnerContainer=t.SpotlightSummaryContainer=t.SpotlightDangerousBottomDek=t.SpotlightMainFeatureHeader=void 0;const a=o(62470),{default:i,css:r}=o(51117),{calculateSpacing:n,getColorStyles:s,getColorToken:l,getTypographyStyles:d,getLinkStyles:m,minScreen:c,maxScreen:u}=o(79720),{BREAKPOINTS:p}=o(85326),{maxThresholds:g}=o(28657),h=o(32168),{SectionTitleDek:y,SectionTitleHed:b}=o(80577),{BaseText:S}=o(73049),C=i.section.withConfig({displayName:"SpotlightSummaryContainer"})`
  padding: ${n(3)};

  ${({shouldHaveBackgroundWhite:e,shouldUseLightColorBackground:t,isSpecialTheme:o,theme:a})=>e?`${s(a,"background-color","colors.background.white")};`:o?`${s(a,"background-color","colors.consumption.lead.special.background")};`:t?`${s(a,"background-color","colors.discovery.body.light.background")};`:`${s(a,"background-color","colors.background.light")};`}

  ${c(p.md)} {
    padding-top: ${n(6)};
    padding-bottom: ${n(6)};
  }

  ${(0,a.cssVariablesGrid)()}
  ${(0,a.applyGridSpacing)("padding")}
`;t.SpotlightSummaryContainer=C;const f=i.div.withConfig({displayName:"SpotlightSummaryInnerContainer"})`
  margin: 0 auto;
  max-width: calc(${p.xxl} - (2 * ${n(8)}));
`;t.SpotlightSummaryInnerContainer=f;const $=i.div.withConfig({displayName:"SpotlightSummarySingleColumn"})`
  .summary-item {
    width: 100%;
  }
`;t.SpotlightSummarySingleColumn=$;const v=i(h).withConfig({displayName:"SpotlightHeader"})`
  ${({shouldUseDekForselectedStoriesHeadline:e,showSectionTitleInsideContent:t,shouldStackHedAndDek:o})=>!e&&!t&&!o&&r`
      display: flex;
      justify-content: space-between;
    `}

  ${({template:e})=>"spotlight-contributor"===e&&r`
      ${u(`${g.md}px`)} {
        display: block;
        ${b} {
          width: 100%;
          text-align: center;
        }
      }
    `}
  margin-bottom: ${n(3)};
  border-bottom: ${n(.125)} solid
    ${l("colors.discovery.body.white.accent")};
  padding-bottom: ${n(2)};

  ${c(p.md)} {
    margin-bottom: ${n(4)};
  }

  ${y} {
    margin-top: 0;
    padding-top: 0;
    text-underline-offset: 3px; /* this was agreed in VQA and is not one of our theme values  */
    ${({theme:e})=>m(e,"colors.foundation.collapsed-menu.utility-link.default","colors.foundation.collapsed-menu.utility-link.hover","navigation")}
    ${({theme:e})=>d(e,"typography.definitions.foundation.link-primary")};

    a {
      text-decoration: none;
      transition-duration: unset;

      &:hover {
        text-decoration: underline;
      }
    }

    ${({template:e})=>"spotlight-contributor"===e&&r`
        ${u(`${g.md}px`)} {
          display: none;
        }
      `}

    ${({shouldStackHedAndDek:e})=>e&&r`
        padding-top: ${n(1.5,"px")};
      `}
  }

  ${({isSpecialTheme:e,theme:t})=>e&&r`
      ${b} {
        ${s(t,"color","colors.consumption.lead.inverted.heading")};
      }
      ${y} {
        ${s(t,"color","colors.consumption.lead.inverted.heading")};
      }
    `}

  ${({showSectionTitleInsideContent:e})=>e&&r`
      margin-bottom: ${n(1,"px")};
      border-bottom: none;
      padding-bottom: 0;
      ${c(p.md)} {
        margin-bottom: ${n(1,"px")};
      }
      ${b} {
        ${d("typography.definitions.discovery.subhed-section-tertiary")}
      }
    `}
`;t.SpotlightSectionTitle=v;const w=i(S).withConfig({displayName:"SpotlightDangerousBottomDek"})`
  margin-top: ${({hasEnhancedTopSpacing:e})=>n(e?2:3)};
  text-align: center;
  ${c(p.lg)} {
    text-align: left;
  }
  ${({hideOnTabletDesktop:e})=>e&&r`
      ${c(p.md)} {
        display: none;
      }
    `}
  ${({theme:e})=>d(e,"typography.definitions.foundation.link-primary")};

  a {
    text-decoration: none;
  }
`;t.SpotlightDangerousBottomDek=w;const k=i.section.withConfig({displayName:"SpotlightSummaryGrid"})`
  display: grid;
  ${(0,a.cssVariablesGrid)()}
  grid-template-areas:
  'stories'
  'body';
  grid-template-columns: 100%;

  ${c(p.md)} {
    grid-template-areas: 'body';
  }
`;t.SpotlightSummaryGrid=k;const T=i.h2.withConfig({displayName:"SpotlightMainFeatureHeader"})`
  margin: 0 auto;
  padding-bottom: ${n(3)};
  text-align: center;
  text-transform: uppercase;

  ${({isSpecialTheme:e,theme:t})=>e?r`
          ${d(t,"typography.definitions.discovery.hed-break-out")}
          ${s(t,"color","colors.consumption.lead.inverted.heading")};
        `:r`
          ${d(t,"typography.definitions.discovery.hed-feature")}
          ${s(t,"color","colors.discovery.body.brand.heading")};
        `};

  ${({theme:e})=>r`
      ${d(e,"typography.definitions.discovery.hed-feature")}
      ${s(e,"color","colors.discovery.body.brand.heading")};
    `};

  ${c(p.lg)} {
    max-width: 80%;
  }
`;t.SpotlightMainFeatureHeader=T},70420:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({continueReadingText:{id:"SummarySpotlight.ContinueReading",defaultMessage:"Continue reading Â»",description:"Continue reading Summary Spotlight article."},selectedStoriesHeading:{id:"SummarySpotlight.SelectedStories",defaultMessage:"Selected Stories",description:"Title of the selected stories section"}})},99147:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(45395);i.StorySummarySpotlight=a(i,"StorySummarySpotlight",{showSectionTitleInsideContent:!0},{sectionTitleVariation:"TextCenter",shouldShowDangerousBottomDek:!0,shouldLazyLoadCoverImage:!0,showItemsAsList:!1}),i.ContributorSummarySpotlight=a(i,"ContributorSummarySpotlight",{showSectionTitleInsideContent:!0},{sectionTitleVariation:"TextCenter",shouldShowDangerousBottomDek:!0,shouldLazyLoadCoverImage:!0}),e.exports=i},75259:function(e,t,o){var a=this&&this.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o};const i=o(45697),r=o(67294),{useIntl:n}=o(76186),s=o(23493),{connector:l}=o(92078),{trackComponent:d}=o(40199),m=o(68987),c=o(55399),{useViewportObserver:u}=o(47041),p=o(6058),{calculateSpacing:g}=o(79720),{StickyHeroAd:h}=o(46647),{default:y}=o(94027),b=o(77343),S=o(20210).Z,{TopStoryHeader:C,TopStoryHeroAdWrapper:f,TopStoryComponent:$,TopStoryPrimaryLinks:v,TopStoryWrapper:w,ToutsContainer:k,ToutsHeader:T,ToutsBody:I,stylePool:x,GlobalStyles:B}=o(50597),{StackedNavigationNavigationPrimaryLink:E}=o(61416),D=({content:e})=>{const t=n();return e?r.createElement(k,{className:"smart-item--tout"},r.createElement(T,{dangerouslySetInnerHTML:{__html:t.formatMessage(S.toutHead)}}),r.createElement(I,{dangerouslySetInnerHTML:{__html:e}})):null};D.propTypes={content:i.string.isRequired};const H=e=>{var t,{additionalContent:o,index:i,items:l,navigation:c,layoutConfigs:S}=e,k=a(e,["additionalContent","index","items","navigation","layoutConfigs"]);r.useEffect((()=>{d("TopStory")}),[]);const{formatMessage:T}=n(),I=r.useRef(),[H,N]=r.useState(!1),[P,M]=r.useState(!1),[L,F]=r.useState(0),[A,O]=r.useState(!1),[_,R]=r.useState(!1),[V,W]=r.useState(!1),[j,U]=r.useState(0),[G,z]=r.useState(!1),q=l.map((e=>Object.assign(Object.assign({},e),{additionalContent:o&&r.createElement(D,{content:o}),image:e.image&&Object.assign(Object.assign({},e.image),{isLazy:!1})})));u(".top-story__crown-ad",void 0,(e=>{N(!e)})),u(".top_story-component",{rootSelector:null,rootMargin:`-${g(9,"px")}`,threshold:0},(e=>{M(!e)}));const K=r.useCallback((e=>{var t;if(e){const e=null===(t=I.current)||void 0===t?void 0:t.getBoundingClientRect();F((null==e?void 0:e.top)||0)}O(e)}),[]);u(".top_story-component",{rootSelector:null,rootMargin:`${g(62.5,"px")}`,threshold:0},(e=>{R(!e)}));const J=r.useCallback((()=>{const e=window.pageYOffset;p.shouldUpdateScroll(V,e,j,"delta")&&(W(e-j>0),U(e))}),[V,j]);r.useEffect((()=>{const e=s(J,150);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[J]);const Q=(null===(t=S[k.id])||void 0===t?void 0:t.palette)||"",Z=P?"standard":Q;return r.createElement(r.Fragment,null,r.createElement(f,{className:"top-story__crown-ad",addPaddingToCrownAd:G},r.createElement(h,{shouldHoldSpace:!1,onFilled:e=>{e&&z(!0)}})),r.createElement(C,{ref:I,headerIsFixed:H,navIsFixed:P,headerTheme:Z,isDrawerOpen:A,"data-testid":"top-story__header"},r.createElement(m,{headerTheme:Z,onDrawerStateChange:K})),r.createElement(w,{navIsFixed:P,headerIsFixed:H,headerTheme:Z,palette:Q,shouldCollapseNavbar:V&&_,"data-testid":"top-story__wrapper"},r.createElement(v,{"data-testid":"StackedNavigationSectionPrimaryLinks"},r.createElement(E,{attributes:{"aria-label":T(y.primaryLinksLabel)},links:c.primaryLinks,shouldAllowNavItemHide:!0})),r.createElement($,{id:"topstory-content"},r.createElement(b,Object.assign({},k,{index:i,className:"top_story-component",items:q,themeExtensions:{componentStylePools:{SmartItem:x}}}))),r.createElement(B,{drawerTop:L})))};H.propTypes={additionalContent:i.string,index:i.number,items:i.array.isRequired,layoutConfigs:i.object,navigation:i.shape({primaryLinks:c.propTypes.links})},e.exports=l(H,{keysToPluck:["bundle","layoutConfigs","navigation"]})},88408:(e,t,o)=>{e.exports=o(75259)},20210:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({toutHead:{id:"TopStory.toutHead",defaultMessage:"<i>Also today . . .</i>",description:"Tout header for top story"}})},86977:(e,t,o)=>{const a=o(67294),{useState:i,useEffect:r}=o(67294),{useIntl:n}=o(76186),s=o(23279),l=o(41609),d=o(89734),m=o(45697),c=o(4131),u=o(86320),{VersoCommerceCollectionCuratedWrapper:p,VersoPlpCuratedWrapper:g,PaginationModalWrapper:h,FilterRow:y,FilterWrapper:b,FilterComponentGrid:S,FilterTotalItemWrapper:C}=o(2019),f=o(79778),$=o(44581),v=o(37099).Z,{mapTypeCategoryAndValue:w,queryParamsForPagination:k}=o(8638),T=["sort","page","format","branch"],I=({container:e,pimCollectionBundleLinks:t,isMobileView:o,shouldHideFilterComponent:m})=>{const{formatMessage:I}=n(),x=e=>{const t=e.filter(Boolean);return t.length?t.map((e=>v[e.label]?Object.assign(Object.assign({},e),{label:I(v[e.label])}):e)):[]},[B,E]=i(e),[D,H]=i({}),N=t&&t.length&&{label:"StorefrontBundle",value:"storefront",selectionType:"single",paramType:"path",counter:0,children:d(t,"label")},[P,M]=i(Object.assign(Object.assign({},e.pimFilterSortPaginationData),{filterData:x([N,...e.pimFilterSortPaginationData.filterData]),sortData:x(e.pimFilterSortPaginationData.sortData),optionsSelected:!1})),L=(e,t=[])=>t.length?e.map((e=>t.includes(e.value)?Object.assign(Object.assign({},e),{isSelected:!0}):e)):e,F=(e,t=[])=>t.length&&"multiple"===e.selectionType&&(null==t?void 0:t.length)||0;r((()=>{if(!P.optionsSelected){const{pathname:e,search:t}=window.location,o=e.split("/");o.splice(0,1);const a=o.join("/"),{sort:i="",queryString:r}=k(t);H({query:"",sort:i});const n=((e,t,o,a)=>{const i=l(a)?"":a.replace("?",""),{filterData:r,sortData:n}=e,s=new Map;return t.length&&s.set("storefront",[t]),i.length&&i.split("&").forEach((e=>{const[t,o]=e.split("="),a=decodeURIComponent(o).replace(/ /g,"+");if("type"===t&&r.length){const e=w({key:t,value:a.split("+")},r);e.key&&e.value&&s.set(e.key,e.value)}else T.includes(t)||s.set(t,a.split("+"))})),{filterData:r.map((e=>Object.assign(Object.assign({},e),{counter:F(e,s.get(e.value)),children:L(e.children,s.get(e.value))}))),sortData:l(o)?n:n.map((e=>Object.assign(Object.assign({},e),{default:e.value===o})))}})(P,a,i,r);M((e=>Object.assign(Object.assign(Object.assign({},e),n),{optionsSelected:!0})))}}),[P]);const A=(e,t)=>t.findIndex((t=>t.value===e.value)),O=s((({activeFilter:e,filterData:t})=>{const{pathname:o,search:a,origin:i}=window.location,r=l(a)?"?format=json":`${a}&format=json`,n=`${i}${o}${a}`;window.history.replaceState(null,"",n),fetch(`${o}${r}`).then((e=>e.json())).then((({bundle:o})=>{const i=o.containers.find((e=>"verso-pim-collection"===e.template)),{sort:r=""}=k(a);H({query:"",sort:r}),E(i);const{filterData:n}=i.pimFilterSortPaginationData;if(!l(e)){const o=A(e,t),a=A(e,n);a>-1&&n.splice(a,1,t[o])}M(Object.assign(Object.assign({},i.pimFilterSortPaginationData),{filterData:x([N,...n]),sortData:P.sortData,optionsSelected:!1}))})).catch((e=>{console.warn(e)}))}),1e3);return a.createElement(p,null,!m&&a.createElement(y,null,a.createElement(S,null,a.createElement(b,{isMobileView:o},a.createElement(f,{theme:"standard",filterSortData:P,isMobileView:o,totalItems:P.pagination.totalResults,showTotalItems:!0,isCentered:!1,hasBorders:!1,updateParentDataHandler:({pathChanged:e,filterData:t,activeFilter:o=null})=>{e&&window.location.reload(),O({filterData:t,activeFilter:o})},className:""})))),a.createElement(c,null,a.createElement(C,null,P.pagination.totalResults," ",I(v.items))),a.createElement(c,null,a.createElement(g,null,a.createElement(u,Object.assign({},B)))),a.createElement(c,null,a.createElement(h,null,P.pagination&&a.createElement($,Object.assign({},D,P.pagination,{additionalParams:["status","type","color","brand"]})))))};I.propTypes={container:m.object,isMobileView:m.bool,pimCollectionBundleLinks:m.array,shouldHideFilterComponent:m.bool},e.exports=I},3973:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(86977);e.exports=a(i,"VersoCommerceCollectionCurated")},2019:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i,getColorToken:r,minMaxScreen:n,getTypographyStyles:s,getColorStyles:l}=o(79720),{BaseWrap:d,BaseText:m}=o(74327),{BREAKPOINTS:c}=o(85326),u=o(48655),p=o(4131),{GridItem:g}=o(14134),h=a.div.withConfig({displayName:"VersoCommerceCollectionCuratedWrapper"})`
  ${({hasPaddingTop:e})=>e&&`padding-top: ${i(4)}`}
`,y=a.div.withConfig({displayName:"PaginationModalWrapper"})`
  display: flex;
  justify-content: center;
  padding-top: ${i(8)};
`,b=a(d).withConfig({displayName:"VersoPlpCuratedWrapper"})``,S=a(d).withConfig({displayName:"FilterWrapper"})`
  ${e=>e&&`\n  && {\n    padding-right: ${i(2)};\n    padding-left: ${i(2)};\n  }\n  `}
  padding-right: ${i(4)};
  padding-left: ${i(4)};
  ${n(0,c.md)} {
    padding-right: ${i(3)};
    padding-left: ${i(3)};
  }
`,C=a(u.NoMargins).withConfig({displayName:"FilterComponentGrid"})`
  > ${g} {
    grid-column: 1 / 9;

    @media (min-width: ${c.md}) {
      grid-column: 1 / -1;
    }
  }
`,f=a(p).withConfig({displayName:"FilterRow"})`
  border-bottom: 1px solid ${r("colors.foundation.menu.dividers")};
  height: ${i(6)};
`,$=a(m).withConfig({displayName:"FilterTotalItemWrapper"})`
  display: flex;
  justify-content: center;
  padding: ${i(3)} 0 ${i(3)} 0;
  ${({theme:e,typeToken:t})=>s(e,t)}
  ${({theme:e,colorToken:t})=>l(e,"color",t)};
`;$.defaultProps={as:"span",colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.globalEditorial.tags"},e.exports={VersoCommerceCollectionCuratedWrapper:h,VersoPlpCuratedWrapper:b,PaginationModalWrapper:y,FilterRow:f,FilterWrapper:S,FilterComponentGrid:C,FilterTotalItemWrapper:$}},37099:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({Category:{id:"VersoCommerceCollectionCurated.FilterBy.Category",defaultMessage:"Type",description:"Text for diplaying filter type label Type"},Brand:{id:"VersoCommerceCollectionCurated.FilterBy.Brand",defaultMessage:"Designer",description:"Text for diplaying filter type label Brand"},Size:{id:"VersoCommerceCollectionCurated.FilterBy.Size",defaultMessage:"Size",description:"Text for diplaying filter type label Size"},StorefrontBundle:{id:"VersoCommerceCollectionCurated.FilterBy.StorefrontBundle",defaultMessage:"Category",description:"Text for diplaying filter type label StorefrontBundle"},Color:{id:"VersoCommerceCollectionCurated.FilterBy.Color",defaultMessage:"Color",description:"Text for diplaying filter type label Color"},Type:{id:"VersoCommerceCollectionCurated.FilterBy.Type",defaultMessage:"Type",description:"Text for diplaying filter type label Type"},Popular:{id:"VersoCommerceCollectionCurated.SortBy.Popular",defaultMessage:"Most Wanted",description:"Text for diplaying sort by option label Popular"},Featured:{id:"VersoCommerceCollectionCurated.SortBy.Featured",defaultMessage:"Featured",description:"Text for diplaying sort by option label Featured"},items:{id:"VersoCommerceCollectionCurated.Items",defaultMessage:"Items",description:"Suffix text to append to the total count"},"Most Recent":{id:"VersoCommerceCollectionCurated.SortBy.MostRecent",defaultMessage:"New Arrivals",description:"Text for diplaying sort by option label Most Recent"},"Lowest Price":{id:"VersoCommerceCollectionCurated.SortBy.LowestPrice",defaultMessage:"Lowest Price",description:"Text for diplaying sort by option label Lowest Price"},"Highest Price":{id:"VersoCommerceCollectionCurated.SortBy.HighestPrice",defaultMessage:"Highest Price",description:"Text for diplaying sort by option label Highest Price"}})},71837:(e,t,o)=>{const a=o(94184),i=o(67294),r=o(73955),n=o(45697),{useIntl:s}=o(76186),l=o(64721),{CarouselRow:d,FeaturesRow:m,CarouselViewAll:c}=o(43154),{trackComponent:u}=o(40199),p=o(59771).Z,g=o(7279),h=o(85650),y=o(44031),b=o(59215),S=o(47736),C=o(23982),f=o(78058),$=o(97171),v=o(2863),w=o(80272),k=o(61308),T=o(68017),I=o(86667),x=o(75324),{venueTypes:B}=o(46796),{trackNavigationEvent:E}=o(68612),{componentTracking:D}=o(28601),H={};H[1]=v,H[3]=T,H[4]=C,H[5]=S,H[6]=k,H[7]=w,H[8]=b,H[9]=f,H[12]=$;const N={};N[2]=I.TwoColumns,N[4]=I.FourColumns,N[6]=I.FourColumns,N[8]=I.FourColumns;const P={Carousel:h,CollageOne:v,CollageThree:T,CollageFour:C,CollageFive:S,CollageFiveRowsWithDekAndItemsBelow:S.RowsWithDekAndItemsBelow,CollageSix:k,CollageSeven:w,CollageEight:b,CollageNine:f,CollageTweleve:$,GridTwoColumns:I.TwoColumns,GridTwoColumnsWithAd:I.TwoColumnsWithAdSection,GridThreeColumns:I.ThreeColumns,GridFourColumns:I.FourColumns,SummaryCollectionRow:x},M=({backgroundColor:e,carouselControlTheme:t,carouselContentAlign:o,carouselSummaryItemVariation:n,carouselItemProps:b,contentTypesForViewAll:S,container:C,controlButtonIcon:f,enableComponentsWithBackgroundColor:$,hasBorderOnMobileAndTabletOnly:v,hasBottomBorderOnLargeScreen:w,hasBottomBorderLargeMargin:k,hasCarouselButtonIncreasedMarginBottom:T,hasCarouselDekMarginBottom:x,hasCarouselTopMargin:M,hasCarouselSectionTitle:L,hasControls:F,hasCustomSlider:A,shouldUseCustomMargin:O,hasDividerAboveCarouselSectionTitle:_,hasDividerBelowCarouselSectionTitle:R,hasDecreasedSectionTitleMargin:V,hasFullBleedChevrons:W,hasFullBleedCarouselWithPaddingWrapperOnMobile:j,hasHeaderBorderTop:U,hasImageCenteredButton:G,hasIncreasedFooterMargin:z,hasIncreasedPaddingTop:q,hasIncreasedVerticalPadding:K,hasIncreasedVerticalPaddingTop:J,hasMarginOnDesktop:Q,hasMinimalVerticalSpacing:Z=!1,hasMobileControls:X,hasModerateSpacing:Y,hasNoCarouselBottomSpacing:ee,hasNoHorizontalScrollCarousel:te,hasNormalCaseStrapline:oe,hasNoTopBottomMarginOnMobile:ae,hasReducedBottomMargin:ie,hasReducedMargin:re,hasThinBorder:ne,hasUnderlineHed:se,hideDangerousDek:le,hideDesktopPagination:de,hideHeaderBorder:me,hideRubricItemSummary:ce,hideStrapline:ue,isCarouselFullBleed:pe,isCarouselFullBleedRight:ge,isCarouselBodyFullBleedRight:he,isDestinationBundle:ye,lowestHierarchy:be,paginationStyle:Se,shouldHideBylines:Ce,shouldOverrideTypeToken:fe,shouldPreferCollectionGrid:$e,shouldShowCarouselItemsViewed:ve,shouldTreatTabletLikeMobile:we,shouldUseAdInCollectionGrid:ke,shouldUseMediumBreakpoint:Te,summaryCollageVariation:Ie,summaryItemVariation:xe})=>{i.useEffect((()=>{u("VersoFeatures")}),[]);const{formatMessage:Be}=s(),Ee=C&&C.layout,De=(({items:e=[]},t,o,a,i)=>{var r;if(a&&P[a])return P[a];const n=e.length;return o&&0!==n&&n%3==0?I.ThreeColumnsWithAdSection:t?N[n]||H[n]||n&&H[9]||null:(null===(r=H[n])||void 0===r?void 0:r[i])||H[n]||N[n]||n&&H[9]||null})(C,$e,ke,Ee,Ie),[He]=i.useState((()=>De&&De.CarouselItem?parseInt(r(),10):0));if(!De)return null;const{curatedSearchHed:Ne="",shouldHideVideoDek:Pe,dangerousDek:Me,dangerousHed:Le,items:Fe,shouldEnableBundleComponentAnalytics:Ae,viewAllButton:Oe}=C,_e=y[n],Re=L?"":Le,Ve=Fe.some((e=>e.offers)),We=e=>l(S,e.contentType);if(De&&De.CarouselItem)return i.createElement(d,{backgroundColor:e,className:a("product__carousel",{"product__carousel--has-increased-padding":e,"product__carousel--has-moderate-padding":Y,"product__carousel--has-full-bleed":pe,"product__carousel--has-full-bleed-right":ge,"product__carousel--body-has-full-bleed-right":he}),hasOffersLink:Ve,hasCarouselTopMargin:M,shouldOverrideTypeToken:fe,hasFullBleedCarouselWithPaddingWrapperOnMobile:j,hasMarginOnDesktop:Q},i.createElement(h,{pos:He,contentAlign:o,controlPosition:"center",controlPlacement:"space-between",controlButtonIcon:f,className:a({"carousel--has-moderate-spacing":Y||ee}),dangerousHed:Le,hasCarouselTopMargin:M,hasCarouselDekMarginBottom:x,hasDecreasedSectionTitleMargin:V,hasHeaderBorderTop:U,hasIncreasedFooterMargin:z,hasModerateSpacing:Y,hasNoHorizontalScrollCarousel:te,hasPagination:!0,paginationStyle:Se,hideHeaderBorder:me,hasCarouselSectionTitle:L,hasDividerAboveCarouselSectionTitle:_,hasDividerBelowCarouselSectionTitle:R,hasControls:F,hasMobileControls:X,hasImageCenteredButton:G,hasCustomSlider:A,strapline:Me,title:Re,hideDesktopPagination:de,hideStrapline:ue,hasThinBorder:ne,hasNormalCaseStrapline:oe,shouldShowCarouselItemsViewed:ve,hasFullBleedChevrons:W,carouselControlTheme:t},Fe.map(((e,t)=>{const o=D.addDataSectionTitleAttribute(Ae,Le,t);return i.createElement(h.CarouselItem,Object.assign({},b,{key:`product-bundle-${t}`,carouselTitle:C.dangerousHed,carouselItemIndex:t,carouselItemName:e.dangerousHed,pos:He}),i.createElement(_e,Object.assign({},e,{analyticsDataAttribute:o,hasBorder:!1,hasBorderOnMobileAndTabletOnly:!1,hasRule:!0,hasUnderlineHed:se,clickHandlerHed:()=>((e,t,o,a,i)=>{E({type:"click",label:e,subject:"carousel",items:[{content_title:a.dangerousHed.replace(/<[^>]*>/g,""),content_type:a.contentType,content_url:window&&window.location.origin+a.url,content_id:a.id}],placement:"mid-content",index:o-1,total_index:i}),window.dataLayer&&window.dataLayer.push({event:"carousel-click","carousel-name":e,"carousel-position":t,"carousel-click-position":o,"carousel-click-text":a.dangerousHed})})(C.dangerousHed,He,t+1,e,Fe.length),hedTag:"h3",hideRubricItemSummary:(!ye||!B.includes(e.contentType))&&ce,isLazy:t>4,shouldHideBylines:!0,shouldHideDangerousDek:le,shouldHideIcon:!1,shouldHideMetadataSecondary:!1,shouldAppendReadMoreLinkForDek:We(e)})))}))),Oe&&Oe.shouldShowViewAllButton&&i.createElement(c,{hasCarouselButtonIncreasedMarginBottom:T},i.createElement(g,{href:Oe.viewAllSlug||"/",target:"_self",inputKind:"link",key:"carousel-footer-view-all-button",dataAttrs:{"data-test-id":"carousel-footer-view-all-button"},label:`${Be(p.viewAllButton)} ${be} ${Oe.viewAllContentType}`})));const je=$.length>0&&$.includes(Ee)?e:null,Ue=$.length>0&&$.includes(Ee);return i.createElement(m,{className:a("verso-features",{"verso-features--has-increased-padding":K,"verso-features--has-increased-padding-top":q}),hasMinimalVerticalSpacing:Z,hasReducedBottomMargin:ie,hasReducedMargin:re,hasIncreasedVerticalPaddingTop:J,hasNoTopBottomMarginOnMobile:ae,backgroundColor:je,shouldUseCustomMargin:O},i.createElement(De,Object.assign({},C,{hideRubricItemSummary:ce,recircRiver:(Ge=Ne,Ge.replace(/<[^>]*>/g,"")),shouldHideBylines:Ce,summaryItemVariation:xe,hasBottomBorderOnLargeScreen:w,hasBottomBorderLargeMargin:k,hasBorderOnMobileAndTabletOnly:v,shouldTreatTabletLikeMobile:we,shouldUseMediumBreakpoint:Te,shouldHideVideoDek:Pe,isInverted:Ue})));var Ge};M.defaultProps={backgroundColor:null,carouselControlTheme:"",carouselItemProps:{width:{sm:"85%",lg:"40%",xl:"28%",xxl:"28%"},spacing:{sm:"9px",md:"12px",lg:"16px",xl:"16px",xxl:"20px"}},carouselSummaryItemVariation:"TextBelowLeft",controlButtonIcon:"ChevronIcon",enableComponentsWithBackgroundColor:[],hasCarouselButtonIncreasedMarginBottom:!1,hasControls:!0,hasCustomSlider:!0,hasDecreasedSectionTitleMargin:!1,hasDividerAboveCarouselSectionTitle:!0,hasDividerBelowCarouselSectionTitle:!0,hasFullBleedCarouselWithPaddingWrapperOnMobile:!1,hasFullBleedChevrons:!1,hasHeaderBorderTop:!1,hasImageCenteredButton:!0,hasIncreasedFooterMargin:!1,hasIncreasedPaddingTop:!1,hasIncreasedVerticalPadding:!1,hasIncreasedVerticalPaddingTop:!1,hasMarginOnDesktop:!1,hasMobileControls:!0,hasModerateSpacing:!1,hasNoCarouselBottomSpacing:!1,hasNoHorizontalScrollCarousel:!1,hasNoTopBottomMarginOnMobile:!1,hasNormalCaseStrapline:!1,hasThinBorder:!1,hasUnderlineHed:!0,hideDangerousDek:!1,hideDesktopPagination:!1,hideHeaderBorder:!0,isCarouselBodyFullBleedRight:!1,isCarouselFullBleed:!1,isCarouselFullBleedRight:!1,shouldOverrideTypeToken:!1,shouldShowCarouselItemsViewed:!1},M.propTypes={backgroundColor:n.oneOf([null,"light","dark","brand","black","white"]),carouselContentAlign:n.oneOf(["left","center"]),carouselControlTheme:n.string,carouselItemProps:n.object,carouselSummaryItemVariation:n.string,container:n.object,contentTypesForViewAll:n.array,controlButtonIcon:n.oneOf(["ChevronIcon","ArrowIcon"]),enableComponentsWithBackgroundColor:n.array,hasBorderOnMobileAndTabletOnly:n.bool,hasBottomBorderLargeMargin:n.bool,hasBottomBorderOnLargeScreen:n.bool,hasCarouselButtonIncreasedMarginBottom:n.bool,hasCarouselDekMarginBottom:n.bool,hasCarouselSectionTitle:n.bool,hasCarouselTopMargin:n.bool,hasControls:n.bool,hasCustomSlider:n.bool,hasDecreasedSectionTitleMargin:n.bool,hasDividerAboveCarouselSectionTitle:n.bool,hasDividerBelowCarouselSectionTitle:n.bool,hasFullBleedCarouselWithPaddingWrapperOnMobile:n.bool,hasFullBleedChevrons:n.bool,hasHeaderBorderTop:n.bool,hasImageCenteredButton:n.bool,hasIncreasedFooterMargin:n.bool,hasIncreasedPaddingTop:n.bool,hasIncreasedVerticalPadding:n.bool,hasIncreasedVerticalPaddingTop:n.bool,hasMarginOnDesktop:n.bool,hasMinimalVerticalSpacing:n.bool,hasMobileControls:n.bool,hasModerateSpacing:n.bool,hasNoCarouselBottomSpacing:n.bool,hasNoHorizontalScrollCarousel:n.bool,hasNormalCaseStrapline:n.bool,hasNoTopBottomMarginOnMobile:n.bool,hasReducedBottomMargin:n.bool,hasReducedMargin:n.bool,hasThinBorder:n.bool,hasUnderlineHed:n.bool,hideDangerousDek:n.bool,hideDesktopPagination:n.bool,hideHeaderBorder:n.bool,hideRubricItemSummary:n.bool,hideStrapline:n.bool,isCarouselBodyFullBleedRight:n.bool,isCarouselFullBleed:n.bool,isCarouselFullBleedRight:n.bool,isDestinationBundle:n.bool,lowestHierarchy:n.string,paginationStyle:n.oneOf(["bullet","slider"]),shouldHideBylines:n.bool,shouldOverrideTypeToken:n.bool,shouldPreferCollectionGrid:n.bool,shouldShowCarouselItemsViewed:n.bool,shouldTreatTabletLikeMobile:n.bool,shouldUseAdInCollectionGrid:n.bool,shouldUseCustomMargin:n.bool,shouldUseMediumBreakpoint:n.bool,summaryCollageVariation:n.string,summaryItemVariation:n.string,viewAllButton:n.shape({shouldShowViewAllButton:n.bool,viewAllContentType:n.string,viewAllSlug:n.string})},M.displayName="VersoFeatures",e.exports=M},611:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(71837);e.exports=a(i,"VersoFeatures")},59771:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({viewAllButton:{id:"VersoFeatures.viewAllButton",defaultMessage:"View All",description:"Aria label text for verso feature view all button"}})},37637:(e,t,o)=>{const a=o(67294),i=o(45697),{useIntl:r}=o(76186),n=o(98288),s=o(32168),{componentTracking:l}=o(28601),{asConfiguredComponent:d}=o(36380),m=o(94077).Z,c=o(7279),{VersoIssueFeatureHed:u,VersoIssueFeatureDek:p,VersoIssueFeatureWrapper:g,VersoIssueFeatureSectionTitle:h,VersoIssueFeatureMain:y,VersoIssueFeatureDekContainer:b,VersoIssueFeatureTocWrap:S,VersoIssueFeatureToc:C,VersoIssueFeatureMagazineContainer:f,VersoIssueFeatureMagazineIssueDate:$,VersoIssueFeatureMagazineIssueName:v,VersoIssueFeatureMagazineIssueImage:w,VersoIssueFeatureMagazineLink:k,VersoIssueFeatureMagazineIssueCaption:T}=o(29697),{trackComponent:I}=o(40199),{getVariationNames:x}=o(95545),B=({btnStyle:e,buttonVariation:t,dangerousDek:o,dangerousHed:i,hideItemHed:d,hideSectionTitle:x,hideSourceDek:B,hideSourceHed:E,issueFeatureLabel:D,items:H,sectionTitleVariation:N="LineAboveLineBelowTextLeft",shouldEnableBundleComponentAnalytics:P,shouldEnableImageAccessibility:M,shouldUseButtonAsLink:L,shouldUseMagazineLinkFromBundleItem:F,shouldUseDescriptionPrimary:A,showImageCaption:O,trackingNamespace:_,variations:{contentAlign:R,isFullBleed:V,isDarkBackground:W,layoutPosition:j}})=>{var U,G;a.useEffect((()=>{I("VersoIssueFeature")}),[]);const{formatMessage:z}=r(),q=H[0];if(!q)return null;const K=l.addDataSectionTitleAttribute(P,null==_?void 0:_.toc),J=l.addDataSectionTitleAttribute(P,null==_?void 0:_.issueCover),Q=l.addDataSectionTitleAttribute(P,null==_?void 0:_.inlineLinks),Z=l.addDataSectionTitleAttribute(P,null==_?void 0:_.inlineHedLinks),X=F?q.url:"/magazine",Y=M?{tabIndex:-1,"aria-hidden":!0}:{},ee=s[N]||s,te=c[t],oe=D||z(m.issueFeatureLabel);return a.createElement(g,{dataTestId:"VersoIssueFeatureWrapper"},!x&&a.createElement(h,{as:ee,dangerousHed:i,hasDividerAbove:!0,hasDividerBelow:!0,hedTag:"h2",link:{html:o}}),a.createElement(y,{className:"verso-issue-feature__main",layoutPosition:j,isDarkBackground:W},a.createElement(b,{"data-testid":"VersoIssueFeatureDekContainer",contentAlign:R},!d&&a.createElement(u,Object.assign({"data-testid":"VersoIssueFeatureHed"},Z,{dangerouslySetInnerHTML:{__html:q.dangerousHed}})),a.createElement(p,Object.assign({"data-testid":"VersoIssueFeatureDek"},Q,{dangerouslySetInnerHTML:{__html:q.dangerousDek},shouldUseDescriptionPrimary:A})),a.createElement(S,Object.assign({"data-testid":"VersoIssueFeatureTocWrap"},K,{contentAlign:R}),L?a.createElement(te,{"data-testid":"VersoIssueFeatureButtonComponent",btnStyle:e,label:oe,ariaLabel:oe,href:X,inputKind:"link"}):a.createElement(C,{"data-testid":"VersoIssueFeatureToc",href:X},oe))),a.createElement(f,{"data-testid":"VersoIssueFeatureMagazineContainer"},!E&&a.createElement($,{className:"verso-issue-feature__magazine-issue-date","data-testid":"VersoIssueFeatureMagazineIssueDate",dangerouslySetInnerHTML:{__html:q.dangerousHed}}),!B&&(null===(U=q.source)||void 0===U?void 0:U.dek)&&a.createElement(v,{className:"verso-issue-feature__magazine-issue-name","data-testid":"VersoIssueFeatureMagazineIssueName"},q.source.dek),q.image&&a.createElement(w,Object.assign({"data-testid":"VersoIssueFeatureMagazineIssueImage"},J,{isFullBleed:V}),a.createElement(k,Object.assign({href:X,"data-testid":"VersoIssueFeatureMagazineLink"},Y),a.createElement(n,Object.assign({},q.image)))),O&&(null===(G=null==q?void 0:q.image)||void 0===G?void 0:G.caption)&&a.createElement(T,{"data-testid":"VersoIssueFeatureMagazineIssueCaption"},q.image.caption))))},E=x(c);B.propTypes={btnStyle:i.oneOf(["filled","outlined","text"]),buttonVariation:i.oneOf(E),dangerousDek:i.string,dangerousHed:i.string.isRequired,hideItemHed:i.bool,hideSectionTitle:i.bool,hideSourceDek:i.bool,hideSourceHed:i.bool,issueFeatureLabel:i.string,items:i.arrayOf(i.shape()).isRequired,sectionTitleVariation:i.string,shouldEnableBundleComponentAnalytics:i.bool,shouldEnableImageAccessibility:i.bool,shouldUseButtonAsLink:i.bool,shouldUseDescriptionPrimary:i.bool,shouldUseMagazineLinkFromBundleItem:i.bool,showImageCaption:i.bool,trackingNamespace:i.object,variations:i.shape({contentAlign:i.oneOf(["center","right","left"]),isDarkBackground:i.bool,isFullBleed:i.bool,layoutPosition:i.oneOf(["image-left","image-right"])})},B.defaultProps={btnStyle:"text",buttonVariation:"Primary",hideItemHed:!0,hideSectionTitle:!1,hideSourceDek:!1,hideSourceHed:!1,sectionTitleVariation:"LineAboveLineBelowTextLeft",shouldEnableImageAccessibility:!1,shouldUseButtonAsLink:!1,shouldUseDescriptionPrimary:!0,shouldUseMagazineLinkFromBundleItem:!1,showImageCaption:!0,variations:{contentAlign:"left",isDarkBackground:!1,isFullBleed:!1,layoutPosition:"image-right"}},B.displayName="VersoIssueFeature",e.exports=d(B,"VersoIssueFeature")},9039:(e,t,o)=>{e.exports=o(25463)},29697:(e,t,o)=>{const{default:a,css:i}=o(51117),{GridItem:r}=o(14134),n=o(48655),{BREAKPOINTS:s}=o(85326),{BaseLink:l,BaseText:d}=o(74327),{ResponsiveImageContainer:m}=o(7230),{calculateSpacing:c,getColorToken:u,minScreen:p,getTypographyStyles:g}=o(79720),h=a(d).withConfig({displayName:"VersoIssueFeatureDek"})`
  margin-top: 0;
  margin-bottom: ${c(6)};

  ${p(s.md)} {
    order: 2;
    margin-top: ${c(2)};
    margin-bottom: ${c(2)};
  }

  a {
    color: ${u("colors.discovery.lead.secondary.description")};
  }
  ${({shouldUseDescriptionPrimary:e})=>!e&&g("typography.definitions.discovery.description-core")};

  .small {
    font-variant: small-caps;
    text-transform: lowercase;
    font-style: normal;
  }
`;h.defaultProps={colorToken:"colors.discovery.lead.secondary.description",typeIdentity:"typography.definitions.discovery.description-feature"};const y=a(d).withConfig({displayName:"VersoIssueFeatureHed"})`
  margin-top: ${c(6)};
  ${p(s.md)} {
    margin-top: ${c(2)};
  }
`;y.defaultProps={colorToken:"colors.discovery.lead.primary.hed",typeIdentity:"typography.definitions.discovery.hed-core-primary"};const b=a(n.WithMargins).withConfig({displayName:"VersoIssueFeatureWrapper"})`
  > ${r} {
    grid-column: 1/-1;
  }
`,S=a.span.withConfig({displayName:"VersoIssueFeatureSectionTitle"})``,C=i`
  background-color: ${u("colors.discovery.body.dark.background")};
`,f=a(n.TwoUpFullBleedNoGap).withConfig({displayName:"VersoIssueFeatureMain"})`
  && {
    align-items: center;
    column-gap: ${c(4)};
  }

  > ${r}:first-child {
    order: 2;
  }

  > ${r} + ${r} {
    order: 1;
  }

  ${p(s.md)} {
    > ${r}:first-child {
      order: ${({layoutPosition:e})=>"image-left"===e?2:1};
    }

    > ${r} + ${r} {
      order: ${({layoutPosition:e})=>"image-left"===e?1:2};
    }
  }

  ${({isDarkBackground:e})=>e&&C}
`,$=a.div.withConfig({displayName:"VersoIssueFeatureDekContainer"})`
  text-align: center;
  ${p(s.md)} {
    ${({contentAlign:e})=>`text-align: ${e};`}
  }
`,v=a.div.withConfig({displayName:"VersoIssueFeatureTocWrap"})`
  margin-bottom: ${c(6)};
  text-align: center;
  ${p(s.md)} {
    margin-bottom: 0;
    ${({contentAlign:e})=>`text-align: ${e};`}
  }
`,w=a(l).withConfig({displayName:"VersoIssueFeatureToc"})``;w.defaultProps={as:"a",colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",colorToken:"colors.interactive.base.brand-primary",typeToken:"typography.definitions.foundation.link-primary"};const k=a.div.withConfig({displayName:"VersoIssueFeatureMagazineContainer"})`
  padding-top: ${c(4)};
  text-align: center;
  ${p(s.md)} {
    padding-top: 0;
  }
`,T=a(d).withConfig({displayName:"VersoIssueFeatureMagazineIssueDate"})``;T.defaultProps={as:"div",bottomSpacing:.5,typeIdentity:"typography.definitions.globalEditorial.context-primary"};const I=a(d).withConfig({displayName:"VersoIssueFeatureMagazineIssueName"})``;I.defaultProps={colorToken:"colors.discovery.body.white.context-signature",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const x=a.div.withConfig({displayName:"VersoIssueFeatureMagazineIssueImage"})`
  margin: auto;
  ${({isFullBleed:e})=>e?`\n       ${m} {\n          width: 100%;\n        }\n      `:`\n      max-width: 154px;\n      ${p(s.md)} {\n          max-width: 244px;\n      }\n      span {\n        box-shadow: 0 0 24px 0 rgba(45, 45, 45, 0.16);\n      }\n      padding: ${c(2)} 0;\n    `}
`,B=a(l).withConfig({displayName:"VersoIssueFeatureMagazineLink"})``,E=a(d).withConfig({displayName:"VersoIssueFeatureMagazineIssueCaption"})``;E.defaultProps={bottomSpacing:2,colorToken:"colors.interactive.base.dark",typeIdentity:"typography.definitions.globalEditorial.context-secondary"},e.exports={VersoIssueFeatureDek:h,VersoIssueFeatureHed:y,VersoIssueFeatureWrapper:b,VersoIssueFeatureSectionTitle:S,VersoIssueFeatureMain:f,VersoIssueFeatureDekContainer:$,VersoIssueFeatureTocWrap:v,VersoIssueFeatureToc:w,VersoIssueFeatureMagazineContainer:k,VersoIssueFeatureMagazineIssueDate:T,VersoIssueFeatureMagazineIssueName:I,VersoIssueFeatureMagazineIssueImage:x,VersoIssueFeatureMagazineLink:B,VersoIssueFeatureMagazineIssueCaption:E}},94077:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({issueFeatureLabel:{id:"VersoIssueFeature.IssueFeatureLabel",defaultMessage:"Table of Contents Â»",description:"Label for magazine link"}})},25463:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(37637);i.TextCenterImageLeftDark=a(i,"TextCenterImageLeftFullBleed",{contentAlign:"center",isDarkBackground:!0,layoutPosition:"image-left"},{}),i.TextCenterImageLeftFullBleed=a(i,"TextCenterImageLeftFullBleed",{contentAlign:"center",isFullBleed:!0,layoutPosition:"image-left"},{}),i.TextCenterImageLeftFullBleedDark=a(i,"TextCenterImageLeftFullBleedDark",{contentAlign:"center",isDarkBackground:!0,isFullBleed:!0,layoutPosition:"image-left"},{}),e.exports=i},68843:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(73955),n=o(85650),s=o(24394),l=o(37732),{Disclaimer:d}=o(5626),{Title:m,VersoNativeProductCarouselWrapper:c}=o(95397),{trackComponent:u}=o(40199),p={width:{sm:"calc(45% - 12px)",lg:"calc(28% - 12px)"},spacing:{sm:"0px",lg:"12px"}},g=({dangerousHed:e,hasNoHorizontalScrollCarousel:t,hasMargin:o,isSponsoredAffiliateLinksEnabled:i,items:g=[]})=>{const[h]=a.useState(parseInt(r(),10));return a.useEffect((()=>{u("VersoNativeProductCarousel")}),[]),a.createElement(c,{hasMargin:o},e&&a.createElement(m,{dangerousHed:e}),a.createElement(d.TextCenterNoTopRule,{isEnabled:g.length>0&&i}),g.length&&a.createElement(n,{className:"product__carousel__bundle",controlPosition:"center",controlPlacement:"space-between",hasNoHorizontalScrollCarousel:t,hasPagination:!0,dangerousHed:e,pos:h,isUpcEnabled:g[0].isUpcEnabled},g.map(((t,o)=>{const i=Object.assign(Object.assign({},t),{id:t.productId,offers:t.multipleOffers,layout:"ProductEmbed",index:o});return a.createElement(n.CarouselItem,Object.assign({},p,{key:`product-bundle-${o}`,carouselTitle:e,carouselItemIndex:o,carouselItemName:t.dangerousHed,pos:h}),t.isUpcEnabled?a.createElement(l,Object.assign({type:"embed",brand:t.productBrand,offers:t.multipleOffers,index:o},t,{className:"product__carousel__card",isLazy:!0,hedTag:"h3",data_item:i,hasImpressionTracking:!0,layout:"ContentCarousel"})):a.createElement(s,Object.assign({index:o},t,{className:"product__carousel__card",isLazy:!0,hedTag:"h3",layout:"ContentCarousel"})))}))))};g.propTypes={dangerousHed:i.string.isRequired,hasMargin:i.bool,hasNoHorizontalScrollCarousel:i.bool,isSponsoredAffiliateLinksEnabled:i.bool,items:i.array.isRequired},g.defaultProps={hasMargin:!1,hasNoHorizontalScrollCarousel:!0,isSponsoredAffiliateLinksEnabled:!1},g.displayName="VersoNativeProductCarousel",e.exports=g},93052:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(68843);e.exports=a(i,"VersoNativeProductCarousel")},95397:(e,t,o)=>{const a=o(51117).default,{calculateSpacing:i}=o(79720),{applyGridSpacing:r,cssVariablesGrid:n}=o(62470),s=a(o(32168).LineAboveLineBelowTextCenter).withConfig({displayName:"Title"})`
  margin-bottom: ${i(4)};
`,l=a.div.withConfig({displayName:"VersoNativeProductCarouselWrapper"})`
  ${n}
  ${({hasMargin:e})=>e&&r("padding")}
`;e.exports={Title:s,VersoNativeProductCarouselWrapper:l}},53041:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(75338),n=o(38047),{Disclaimer:s}=o(5626),{VersoNativeProductTitle:l}=o(77915),{trackComponent:d}=o(40199),m=({dangerousHed:e,isSponsoredAffiliateLinksEnabled:t,items:o=[]})=>{a.useEffect((()=>{d("VersoNativeProduct")}),[]);const i=o.length>=3,m=o.length<=2;return a.createElement(a.Fragment,null,e&&a.createElement(l,{dangerousHed:e}),a.createElement(s.TextCenterNoTopRule,{isEnabled:t}),i&&a.createElement(r,{childTypes:["product"]},o.map(((e,t)=>a.createElement(n.ImageTop,Object.assign({},e,{key:`native-product-embed-top-${t}`}))))),m&&a.createElement(r,{childTypes:["product"]},o.map(((e,t)=>a.createElement(n.ImageLeftWithButtonAndTextCentered,Object.assign({},e,{key:`native-product-embed-left-${t}`}))))))};m.propTypes={dangerousHed:i.string.isRequired,isSponsoredAffiliateLinksEnabled:i.bool,items:i.array.isRequired},m.displayName="VersoNativeProduct",e.exports=m},12731:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(53041);e.exports=a(i,"VersoNativeProduct")},77915:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i}=o(79720),r=a(o(32168).LineAboveLineBelowTextCenter).withConfig({displayName:"VersoNativeProductTitle"})`
  margin-bottom: ${i(4)};
`;e.exports={VersoNativeProductTitle:r}},59155:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(44682),n=o(50037),{VersoPlpCuratedWrapper:s}=o(41844),l=e=>{const{hed:t,dek:o,groups:a,gridConfig:l,hasAffiliateLinkDisabled:d,hasCarouselSliderPagination:m,templateLayout:c,isGrid:u,template:p,productVisualAsset:g,expertCardContent:h,productList:y=[],shouldAppendReadMoreLinkForDek:b,showShopNowButton:S,summaryItemVariation:C,isUpcEnabled:f,paginationStyle:$,shouldUseSmallHed:v,isPlpCurated:w,isContentCenter:k,shouldNavigateToNewTab:T,hasPadding:I,hasCustomSlider:x,hideDesktopPagination:B,hasBorder:E,shouldAffiliateDisclaimerPlpEnable:D,affiliateDisclaimer:H,isFirstProductListingCarousel:N}=e;return"VisualCarousel"===c?i.createElement(s,null,i.createElement(r,{hed:t,productList:y,productVisualAsset:g,expertCardContent:h,summaryItemVariation:C,shouldAppendReadMoreLinkForDek:b,showShopNowButton:S,isUpcEnabled:f,isContentCenter:k,isPlpCurated:w,shouldNavigateToNewTab:T,hideDesktopPagination:B,shouldAffiliateDisclaimerPlpEnable:D&&N,affiliateDisclaimer:H,hasAffiliateLinkDisabled:d})):i.createElement(s,null,i.createElement(n,{dangerousHed:t,dangerousDek:o,groups:a,gridConfig:l,isGrid:u,layout:c,hasCarouselSliderPagination:m,summaryItemVariation:C,shouldAppendReadMoreLinkForDek:b,showShopNowButton:S,isUpcEnabled:f,shouldUseSmallHed:v,isContentCenter:k,isPlpCurated:w,shouldNavigateToNewTab:T,paginationStyle:$,hasPadding:I,hasCustomSlider:x,hideDesktopPagination:B,hasBorder:E,shouldAffiliateDisclaimerPlpEnable:D&&("verso-pim-collection"===p||N),isPimCollectionContainer:"verso-pim-collection"===p,hasDisclaimerPlpSlug:D,affiliateDisclaimer:D&&H,hasAffiliateLinkDisabled:d}))};l.propTypes={affiliateDisclaimer:a.string,dek:a.string,expertCardContent:a.object,gridConfig:a.object,groups:a.array,hasAffiliateLinkDisabled:a.bool,hasBorder:a.bool,hasCarouselSliderPagination:a.bool,hasCustomSlider:a.bool,hasPadding:a.bool,hed:a.string,hideDesktopPagination:a.bool,isContentCenter:a.bool,isFirstProductListingCarousel:a.bool,isGrid:a.bool,isPlpCurated:a.bool,isUpcEnabled:a.bool,paginationStyle:a.string,productList:a.array,productVisualAsset:a.object,shouldAffiliateDisclaimerPlpEnable:a.bool,shouldAppendReadMoreLinkForDek:a.bool,shouldNavigateToNewTab:a.bool,shouldUseSmallHed:a.bool,showShopNowButton:a.bool,summaryItemVariation:a.string,template:a.string,templateLayout:a.string},e.exports=l},86320:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(59155);e.exports=a(i,"VersoPlpCurated")},41844:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i}=o(79720),r=a.div.withConfig({displayName:"VersoPlpCuratedWrapper"})`
  ${({hasPaddingTop:e})=>e&&`padding-top: ${i(4)}`}
`;e.exports={VersoPlpCuratedWrapper:r}},96437:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{trackComponent:n}=o(40199),{encodeImageURI:s}=o(83355),{LinkBanner:l}=o(51837),d=o(73346),m=o(98288),c=o(32168),{VersoSummarySpotlightByline:u,VersoSummarySpotlightContainer:p,VersoSummarySpotlightContentDivider:g,VersoSummarySpotlightLeadItem:h,VersoSummarySpotlightLeadItemContainer:y,VersoSummarySpotlightLeadItemWrapper:b,VersoSummarySpotlightSecondaryItems:S,VersoSummarySpotlightSecondaryItemsWrapper:C,VersoSummarySpotlightSectionTitle:f,VersoSummarySpotlightWrapper:$}=o(88425),v=({image:e,className:t,contributor:o,dangerousDek:i,dangerousHed:m,rubric:v,secondaryItems:w,sectionHed:k,url:T})=>{r.useEffect((()=>{n("VersoSummarySpotlight")}),[]);const I={links:w,bannerType:"visual-link-banner"},x=e.segmentedSources?{sm:Object.values(e.segmentedSources.sm).pop(),lg:Object.values(e.segmentedSources.lg).pop()}:"",B={smUrl:s(x.sm.url),lgUrl:s(x.lg.url)};return r.createElement($,{className:a("verso-summary-spotlight",t)},r.createElement(b,{imageSources:B},r.createElement(p,null,r.createElement(y,null,k&&r.createElement(f,null,r.createElement(c,{dangerousHed:k,hasDividerAbove:!0,hasDividerBelow:!1,textAlign:"left","data-testid":"section-title"})),r.createElement(h,null,r.createElement(d,{contentAlign:"left",dangerousHed:m,dangerousDek:i,rubric:v,url:T,hasLeftMargin:!1,rubricVariation:"Item",shouldDisplayDangerousDekOverlay:!0}),(null==o?void 0:o.items)&&r.createElement(u,Object.assign({},o)))),r.createElement(g,null))),r.createElement(C,null,r.createElement(p,null,r.createElement(S,null,r.createElement(l,{linkBannerData:I})))))};v.propTypes={className:i.string,contributor:i.object,dangerousDek:i.string.isRequired,dangerousHed:i.string.isRequired,image:i.shape(m.propTypes).isRequired,rubric:i.object,secondaryItems:i.array,sectionHed:i.string,url:i.string.isRequired},v.displayName="VersoSummarySpotlight",e.exports=v},70787:(e,t,o)=>{const a=o(96437),{asConfiguredComponent:i}=o(36380);e.exports=i(a,"VersoSummarySpotlight")},88425:(e,t,o)=>{const{default:a}=o(51117),{BREAKPOINTS:i}=o(85326),r="1279px",{applyGridSpacing:n,cssVariablesGrid:s}=o(62470),{calculateSpacing:l,getColorStyles:d,getColorToken:m,getTypographyStyles:c,maxScreen:u,minScreen:p}=o(79720),{OverlaySummaryItemBylines:g,OverlaySummaryItemContent:h,OverlaySummaryItemDek:y,OverlaySummaryItemHed:b}=o(12365),S=o(20450),{BylineLink:C,BylinePreamble:f}=o(72369),$=o(3805),{GridItem:v}=o(14134),{SectionTitleHed:w,SectionTitleRoot:k}=o(80577),{RubricName:T}=o(7320),{LinkBannerWrapper:I}=o(50054),{ImageWrapper:x,LeftScrollButton:B,LinkBannerRubric:E,NavLink:D,NavList:H,NavListItem:N,NavListItemContent:P,NavListWrapper:M,RightScrollButton:L,VisualTextWrap:F}=o(62920),A=a.section.withConfig({displayName:"VersoSummarySpotlightWrapper"})``,O=a.div.withConfig({displayName:"VersoSummarySpotlightContainer"})`
  margin: 0 auto;
  max-width: calc(${i.xxl} - (2 * ${l(8)}));
`,_=a.div.withConfig({displayName:"VersoSummarySpotlightSecondaryItemsWrapper"})`
  background: ${m("colors.consumption.lead.inverted.background")};
  padding-bottom: ${l(5)};
  ${s()}
  ${n("padding")}
`,R=a.div.withConfig({displayName:"VersoSummarySpotlightLeadItemWrapper"})`
  position: relative;
  background-position: top;
  background-size: cover;
  padding: ${l(3)};

  ${p(i.md)} {
    padding-top: ${l(5)};
    padding-bottom: ${l(5)};
  }
  ${s()}
  ${n("padding")}

    && {
    ${p(i.sm)} {
      padding-top: ${l(2.5)};
      padding-bottom: ${l(5)};
      ${({imageSources:e})=>e.smUrl?`\n                    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${e.smUrl});\n                `:""}
      aspect-ratio: 9/16;
    }
    ${p(i.md)}, ${p(i.lg)}, ${p(i.xl)} {
      padding-top: ${l(5)};
      ${({imageSources:e})=>e.lgUrl?`\n                background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url(${e.lgUrl});\n                `:""}
      aspect-ratio: 6/4;
    }
  }
`,V=a($).withConfig({displayName:"VersoSummarySpotlightLeadItemContainer"})`
  ${v} {
    :nth-of-type(1) {
      ${p(i.sm)} {
        grid-column: 1 / span 4;
      }
      ${p(i.md)} {
        grid-column: 1 / span 12;
      }
    }

    :nth-of-type(2) {
      ${p(i.sm)} {
        position: absolute;
        right: ${l(3)};
        bottom: ${l(10)};
        left: ${l(3)};
        grid-column: 1 / span 4;
      }
      ${p(i.md)} {
        display: grid;
        position: absolute;
        right: ${l(6)};
        bottom: ${l(10)};
        left: ${l(6)};
        grid-gap: inherit;
        grid-column: 1 / span 6;
        grid-template-columns: inherit;
      }
      ${p(i.xl)} {
        right: ${l(8)};
        left: ${l(8)};
      }
      ${p(i.xxl)} {
        right: ${l(20)};
        left: ${l(20)};
      }
    }
  }
`,W=a.span.withConfig({displayName:"VersoSummarySpotlightContentDivider"})`
  display: grid;
  grid-column: 1 /-1;
  margin-top: ${l(5)};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${m("colors.discovery.body.black.divider")};

  ${p(i.sm)} {
    position: absolute;
    right: ${l(3)};
    bottom: ${l(5)};
    left: ${l(3)};
  }
  ${p(i.md)} {
    display: grid;
    position: absolute;
    right: ${l(6)};
    bottom: ${l(5)};
    left: ${l(6)};
    grid-gap: inherit;
    grid-template-columns: inherit;
  }
  ${p(i.xl)} {
    right: ${l(8)};
    left: ${l(8)};
  }
  ${p(i.xxl)} {
    right: ${l(20)};
    left: ${l(20)};
  }
`,j=a.div.withConfig({displayName:"VersoSummarySpotlightSectionTitle"})`
  grid-column: 1 / span 12;
  ${w} {
    color: ${m("colors.discovery.body.black.heading")};
  }
  ${k} {
    ${({theme:e})=>d(e,"border-color","colors.discovery.body.black.divider")}
  }
`,U=a.div.withConfig({displayName:"VersoSummarySpotlightLeadItem"})`
  grid-column: 1 / span 6;
  text-decoration: none;

  ${b} {
    margin: 0;
    ${c("typography.definitions.discovery.hed-feature")};
    color: ${m("colors.discovery.body.black.heading")};

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  ${y} {
    margin-top: 0;
    ${c("typography.definitions.discovery.description-feature")};
    color: ${m("colors.discovery.body.black.description")};
  }

  && {
    ${h} {
      padding: 0 0 0 0;
    }
  }

  ${T} {
    ${c("typography.definitions.globalEditorial.context-primary")};
    color: ${m("colors.discovery.body.black.context-signature")};
  }

  ${b} {
    margin-top: ${l(2)};
    margin-bottom: ${l(1)};
    ${p(i.sm)} {
      margin-bottom: ${l(.5)};
    }
  }
  ${g} {
    margin: 0;
  }
`,G=a(S).withConfig({displayName:"VersoSummarySpotlightByline"})`
  ${f},
  ${C} {
    ${c("typography.definitions.globalEditorial.accreditation-core")};
    color: ${m("colors.discovery.body.black.accreditation")};
  }
  margin-top: ${l(2)};
`,z=a.div.withConfig({displayName:"VersoSummarySpotlightSecondaryItems"})`
  ${I} {
    position: unset;
    transform: none;
    transition: none;
    opacity: unset;
    border: none;
    background: ${m("colors.consumption.lead.inverted.background")};
  }
  ${E} {
    margin-bottom: ${l(1)};
    ${c("typography.definitions.globalEditorial.context-primary")};
    color: ${m("colors.discovery.body.black.context-signature")};
  }

  && {
    ${D} {
      ${c("typography.definitions.discovery.hed-core-secondary")};
      text-overflow: none;
      color: ${m("colors.discovery.body.black.heading")};
    }
    ${H} {
      grid-template-columns: auto;
      grid-template-rows: auto;
      padding-right: 0;
      padding-left: 0;

      ${p(i.md)} {
        max-width: 100%;
        overflow-x: hidden;
      }
    }
    ${N} {
      :nth-of-type(1) {
        grid-column: 1 / span 3;
      }

      :nth-of-type(2) {
        grid-column: 4 / span 3;
      }

      :nth-of-type(3) {
        grid-column: 7 / span 3;
      }

      :nth-of-type(4) {
        grid-column: 10 / span 3;
      }

      display: initial;

      :nth-of-type(1),
      :nth-of-type(2) {
        ${u(r)} {
          grid-row: 1;
        }
      }

      :nth-of-type(3),
      :nth-of-type(4) {
        ${u(r)} {
          grid-row: 2;
        }
      }

      :nth-of-type(1),
      :nth-of-type(3) {
        ${u(r)} {
          grid-column: 1 / span 6;
        }
      }

      :nth-of-type(2),
      :nth-of-type(4) {
        ${u(r)} {
          grid-column: 7 / span 6;
        }
      }

      :nth-of-type(1),
      :nth-of-type(2),
      :nth-of-type(3),
      :nth-of-type(4) {
        ${u("767px")} {
          grid-area: auto / 1 / auto / span 12;
        }
      }
    }

    ${P} {
      display: grid;
      grid-gap: 1rem;
      grid-template-columns: 3fr auto;
      align-items: start;

      *:first-child {
        order: 1;
      }

      ${u(r)} {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: ${m("colors.discovery.body.black.divider")};
        padding-bottom: ${l(1)};
      }
    }
    ${M} {
      height: auto;
      ${B}, ${L} {
        display: none;
      }
    }
    ${x} {
      margin-right: 0;
      width: ${l(12.5)};
    }
  }
  ${F} {
    order: 0;
    margin-right: 0;
    width: unset;
    overflow: unset;
    text-decoration: none;
    text-overflow: unset;
    -webkit-line-clamp: unset;

    span {
      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }
`;e.exports={VersoSummarySpotlightByline:G,VersoSummarySpotlightContainer:O,VersoSummarySpotlightContentDivider:W,VersoSummarySpotlightLeadItem:U,VersoSummarySpotlightLeadItemContainer:V,VersoSummarySpotlightLeadItemWrapper:R,VersoSummarySpotlightSecondaryItems:z,VersoSummarySpotlightSecondaryItemsWrapper:_,VersoSummarySpotlightSectionTitle:j,VersoSummarySpotlightWrapper:A}},10945:(e,t,o)=>{const a=o(45697),i=o(67294),{DiscoveryPullQuoteContainer:r,DiscoveryPullQuoteRubric:n,DiscoveryPullQuoteHead:s,DiscoveryPullQuoteHeadDiv:l,DiscoveryPullQuoteHeadLink:d,DiscoveryPullQuoteDek:m,DiscoveryPullQuoteSource:c,DiscoveryPullQuoteSourceLink:u}=o(90213),{trackComponent:p}=o(40199),g=({className:e,dangerousDek:t,dangerousHed:o,rubric:a,source:g,url:h,hasUnderline:y})=>(i.useEffect((()=>{p("DiscoveryPullQuote")}),[]),i.createElement(r,{className:e},a&&i.createElement(n,{dangerouslySetInnerHTML:{__html:a}}),i.createElement(s,null,y?i.createElement(d,{href:h,dangerouslySetInnerHTML:{__html:o}}):i.createElement(l,{href:h,dangerouslySetInnerHTML:{__html:o}})),t&&i.createElement(m,{dangerouslySetInnerHTML:{__html:t}}),g&&i.createElement(c,null,i.createElement(u,{href:h,dangerouslySetInnerHTML:{__html:g}}))));g.propTypes={className:a.string,dangerousDek:a.string,dangerousHed:a.string.isRequired,hasUnderline:a.bool,rubric:a.string,source:a.string,url:a.string.isRequired},g.defaultProps={hasUnderline:!0},g.displayName="DiscoveryPullQuote",e.exports=g},86596:(e,t,o)=>{e.exports=o(10945)},90213:(e,t,o)=>{const a=o(51117).default,{BaseLink:i}=o(74327),{BREAKPOINTS:r}=o(85326),{calculateSpacing:n,getColorStyles:s,getTypographyStyles:l}=o(79720),d=a.div.withConfig({displayName:"DiscoveryPullQuoteContainer"})`
  ${({theme:e})=>s(e,"background-color","colors.discovery.body.white.background")};

  padding: ${n(6)} ${n(2)};

  @media (min-width: ${r.md}) {
    padding: ${n(7)} ${n(2)};
  }

  text-align: center;
`,m=a.div.withConfig({displayName:"DiscoveryPullQuoteRubric"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-primary")};
  ${({theme:e})=>s(e,"color","colors.consumption.lead.standard.context-signature")};
`,c=a.div.withConfig({displayName:"DiscoveryPullQuoteHead"})`
  margin-top: ${n(2)};
`,u=a(i).withConfig({displayName:"DiscoveryPullQuoteHeadLink"})``;u.defaultProps={colorStaticLinkToken:"colors.consumption.body.standard.subhed",typeToken:"typography.definitions.consumptionEditorial.display-medium"};const p=a(i).withConfig({displayName:"DiscoveryPullQuoteHeadLink"})``;p.defaultProps={colorStaticLinkToken:"colors.consumption.body.standard.subhed",hasUnderline:!1,typeToken:"typography.definitions.consumptionEditorial.display-medium"};const g=a.div.withConfig({displayName:"DiscoveryPullQuoteDek"})`
  ${({theme:e})=>l(e,"typography.definitions.consumptionEditorial.description-feature")};
  ${({theme:e})=>s(e,"color","colors.consumption.body.standard.body")};
  margin-top: ${n(4)};
  @media (min-width: ${r.md}) {
    margin-top: ${n(5)};
  }
`,h=a.div.withConfig({displayName:"DiscoveryPullQuoteSource"})`
  margin-top: ${n(5)};
  @media (min-width: ${r.md}) {
    margin-top: ${n(6)};
  }
`,y=a(i).withConfig({displayName:"DiscoveryPullQuoteSourceLink"})``;y.defaultProps={colorStaticLinkToken:"colors.consumption.body.standard.subhed",typeToken:"typography.definitions.globalEditorial.context-title"},e.exports={DiscoveryPullQuoteContainer:d,DiscoveryPullQuoteRubric:m,DiscoveryPullQuoteHead:c,DiscoveryPullQuoteHeadDiv:p,DiscoveryPullQuoteHeadLink:u,DiscoveryPullQuoteDek:g,DiscoveryPullQuoteSource:h,DiscoveryPullQuoteSourceLink:y}},59526:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{trackComponent:n}=o(40199),s=o(55399),{TabsButtonPrimary:l,TabsPanel:d,TabsWrapper:m,TabsContentWrapper:c}=o(10258);function u({buttonLabel:e,className:t,defaultTab:o,hasBorder:i,marquee:u,showButton:p,tabContent:g,tabContentTextAlignment:h,tabLabelAlignment:y,tabLabels:b,tabLabelActiveClassName:S,tabLabelInactiveClassName:C,isPreventDefault:f}){r.useEffect((()=>{n("Tabs")}),[]);const[$,v]=r.useState(o),w=b&&b[o]?b[o]:"",[k,T]=r.useState(w.url),I=b.map(((e,t)=>({className:$===t?S:C,attributes:{tabIndex:0,role:"tab","aria-selected":$===t},text:e.text,url:e&&e.url?e.url:"",onClick:o=>{f&&o.preventDefault(),v(t),T(e&&e.url?e.url:""),"function"==typeof e.onClick&&e.onClick()}})));return r.createElement(m,{className:a("tabs-component",t),alignLeft:"left"===h,role:"tablist"},u,r.createElement(s.Section,{attributes:{"aria-label":"Secondary",tabIndex:-1},links:I,hasBorder:i,justify:y}),r.createElement(c,null,g.map(((e,t)=>t+1>b.length?(console.warn("Tabs: TabContent has more items than TabLabels, should be the same, Not building out extra tab content"),null):r.createElement(d,{isActive:$===t,key:t,role:"tabpanel",tabIndex:0},e))),k&&p&&r.createElement(l,{href:k,inputKind:"link",label:e})))}u.defaultProps={buttonLabel:"View All",defaultTab:0,hasBorder:!0,isPreventDefault:!0,showButton:!0,tabContentTextAlignment:"center",tabLabelActiveClassName:"tab-link tab-link--active",tabLabelAlignment:"center",tabLabelInactiveClassName:"tab-link"},u.propTypes={buttonLabel:i.string,className:i.string,defaultTab:i.number,hasBorder:i.bool,isPreventDefault:i.bool,marquee:i.element,showButton:i.bool,tabContent:i.array.isRequired,tabContentTextAlignment:i.oneOf(["center","left"]),tabLabelActiveClassName:i.string,tabLabelAlignment:i.oneOf(["center","left"]),tabLabelInactiveClassName:i.string,tabLabels:i.arrayOf(i.shape({onClick:i.function,text:i.oneOfType([i.string,i.object]),url:i.string})).isRequired},e.exports=u},44260:(e,t,o)=>{e.exports=o(59526)},96469:(e,t)=>{function o(e){const t=e.split("/");""===t[0]&&t.shift(),""===t[t.length-1]&&t.pop();const o=t[t.length-1];let a;return a=["article","gallery","series","membership"].includes(t[0])?`${t[0]}-${o}`:"special"===t[0]?`rich-${o}`:`post-${o}`,a}Object.defineProperty(t,"__esModule",{value:!0}),t.trackingProducts=void 0,t.trackingProducts=function(e){const t=[];for(let a=0;a<3;a++)e&&e[a]&&t.push(o(e[a].url));window.dataLayer&&window.location.href.search("/video")<0&&window.dataLayer.push({CriteoProductIDList:t})}},96236:function(e,t,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.withCustomTheme=void 0;const i=a(o(45697)),r=o(67294),{ThemeProvider:n}=o(51117);t.withCustomTheme=function(e){const t=t=>{const{componentBI:o}=t,{displayName:a}=e;if(!o||!a)return r.createElement(e,Object.assign({},t));const i=o[a]||null;return i?r.createElement(n,{"data-testid":"ComponentBIProvider",theme:i},r.createElement(e,Object.assign({},t))):r.createElement(e,Object.assign({},t))};return t.propTypes={componentBI:i.default.object},t}},36457:(e,t,o)=>{const a=o(96236);e.exports=a},99721:e=>{e.exports={default:({index:e})=>e,disable:()=>null,end:({length:e})=>e-1}},7086:(e,t,o)=>{const a=o(99721),i=o(30131),r=o(82596),n="default",s={index:0},l=()=>{};e.exports={getInterludePosition:(e,t,o)=>{const{strategy:{enabled:a,method:i=n,options:r=s}={}}=e,d=t[i]||l;return a&&d(Object.assign({length:o},r))},galleryStrategies:a,recipeStrategies:i,reviewStrategies:r}},30131:e=>{e.exports={default:()=>"default",disable:()=>null,start:()=>"start"}},82596:e=>{e.exports={default:({index:e})=>e,disable:()=>null,end:({length:e})=>e-1}},39578:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),n=o(98288),s=o(81145),{CelebratedEntrypointButton:l,CelebratedEntrypointContent:d,CelebratedEntrypointColumn:m,CelebratedEntrypointRow:c,CelebratedEntrypointText:u,CelebratedEntrypointTitle:p,CelebratedEntrypointResponsiveAsset:g,CelebratedEntrypointSponsor:h,CelebratedEntrypointWrapper:y}=o(34945),b=o(3326),S=({alignContent:e,asset:t,borders:o,className:i,ctaButtonvariations:n,ctaCode:S,dangerousButtonText:C,dangerousText:f,dangerousTitle:$,hasDekDescriptionTextStyle:v,hasBackground:w,isFullBleed:k,hasDeemphasizedColorStyle:T,hasHedLowerCaseText:I,hasTextAlignLeft:x,hedTextStyle:B,href:E,isDiscovery:D,isLiveStory:H,liveIndicatorHeight:N,rubric:P,shouldDisplayRubric:M,shouldDisplaySponsorName:L,shouldEnableAnimation:F,shouldHighlightDekText:A,shouldUseCutomColorLiveIndicator:O,sponsorByline:_,sponsorName:R,variations:V})=>{if(!(t&&C&&$&&f))return null;const W={label:C,inputKind:"link",target:"_blank",rel:"noopener noreferrer",href:S?`${E}${S}`:`${E}?itm_content=homepage&itm_campaign=${$.toLowerCase().replace(/\s+/g,"-")}-homepage-module`,variations:{typeStyle:n}},j=A?f.replace("<strong>",'<strong style="color: white; font-weight: 500;">'):f;return r.createElement(y,{className:a("celebrated-entrypoint",i),isFullBleed:k},r.createElement(c,{isFullBleed:k,alignContent:e,borders:o,color:V.color},r.createElement(m,{color:V.color},r.createElement(g,Object.assign({},t))),r.createElement(m,{color:V.color,className:"celebrated-entrypoint-column",shouldReducePadding:!0},r.createElement(d,{hasTextAlignLeft:x},H?r.createElement(b,{hasBackground:w,isDiscovery:D,shouldEnableAnimation:F,liveIndicatorHeight:N,shouldUseCutomColorLiveIndicator:O}):M&&P?["dark","black"].includes(V.color)?r.createElement(s.Inverted,{name:P}):r.createElement(s,{name:P}):null,r.createElement(p,{dangerouslySetInnerHTML:{__html:$},color:V.color,hedTextStyle:B,isLiveStory:H,hasHedLowerCaseText:I}),r.createElement(u,{dangerouslySetInnerHTML:{__html:j},color:V.color,hasDekDescriptionTextStyle:v,hasDeemphasizedColorStyle:T}),W.label?r.createElement(l,Object.assign({},W)):null,L&&_&&R?r.createElement(h,{color:V.color},`${_}  ${R}`):null))))};S.propTypes={alignContent:i.oneOf(["right","left"]),asset:i.shape(n.propTypes).isRequired,borders:i.oneOf(["on","off","bottom-only","top-only"]),className:i.string,ctaButtonvariations:i.oneOf(["primary","secondary","utility","utility-inverted","utility-pair-inverted","inverted-text","utility-pair-secondary"]),ctaCode:i.string,dangerousButtonText:i.string.isRequired,dangerousText:i.string.isRequired,dangerousTitle:i.string.isRequired,hasBackground:i.bool,hasDeemphasizedColorStyle:i.bool,hasDekDescriptionTextStyle:i.bool,hasHedLowerCaseText:i.bool,hasTextAlignLeft:i.bool,hedTextStyle:i.oneOf(["hedStyle","subHedStyle"]),href:i.string.isRequired,isDiscovery:i.bool,isFullBleed:i.bool,isLiveStory:i.bool,liveIndicatorHeight:i.string,rubric:i.string,shouldDisplayRubric:i.bool,shouldDisplaySponsorName:i.bool,shouldEnableAnimation:i.bool,shouldHighlightDekText:i.bool,shouldUseCutomColorLiveIndicator:i.bool,sponsorByline:i.string,sponsorName:i.string,variations:i.shape({color:i.oneOf(["black","brand","dark","light","white"])})},S.defaultProps={alignContent:"right",borders:"off",ctaButtonvariations:"primary",hasDeemphasizedColorStyle:!1,hasDekDescriptionTextStyle:!1,hasHedLowerCaseText:!0,hasTextAlignLeft:!1,hedTextStyle:"hedStyle",isFullBleed:!1,isLiveStory:!1,shouldDisplayRubric:!0,shouldDisplaySponsorName:!1,shouldHighlightDekText:!1,sponsorByline:"Sponsored By",variations:{color:"black"}},S.displayName="CelebratedEntryPoint",e.exports=S},81132:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380);e.exports=a(o(63603),"CelebratedEntryPoint")},34945:(e,t,o)=>{const{default:a}=o(51117),{BaseText:i}=o(74327),{calculateSpacing:r,getColorStyles:n,getTypographyStyles:s}=o(79720),{BREAKPOINTS:l}=o(85326),{applyGridSpacing:d,cssVariablesGrid:m}=o(62470),c=o(38915),u=o(98288),p=(e,t)=>`colors.discovery.body.${e}.${t}`,g=a.div.withConfig({displayName:"CelebratedEntrypointWrapper"})`
  ${({isFullBleed:e})=>e?"\n      --grid-margin: 0;\n      max-width: fix-content;\n    ":`\n      ${m()}\n      ${d("padding")}\n    \n      margin: 0 auto;\n      width: 100%;\n      max-width: ${l.xxl};\n     \n    `}
`,h=a.div.withConfig({displayName:"CelebratedEntrypointRow"})`
  display: flex;
  flex-direction: ${({alignContent:e})=>"right"===e?"row":"row-reverse"};
  padding-top: ${r(2.5,"px")};
  padding-bottom: ${r(2.5,"px")};
  width: 100%;
  height: 100%;

  ${({isFullBleed:e})=>e?`\n        margin-bottom: ${r(5,"px")};\n        margin-top: ${r(5,"px")};\n        @media (max-width: ${l.md}) {\n            margin-bottom: ${r(2.5,"px")};\n            margin-top: ${r(2.5,"px")};\n        }\n    `:`\n        margin-bottom: ${r(0,"px")};\n        margin-top: ${r(0,"px")};\n    `}

  ${({theme:e,borders:t,color:o})=>t?`\n        border-bottom: ${"on"===t||"bottom-only"===t?"1px solid":""}; \n        border-top: ${"on"===t||"top-only"===t?"1px solid":""};\n        ${n(e,"border-color",p(o,"border"))} \n    `:""}

    &::after {
    display: table;
    clear: both;
    content: '';
  }

  @media only screen and (max-width: ${l.lg}) {
    flex-direction: ${({alignContent:e})=>"right"===e?"column":"column-reverse"};
  }
`,y=a.div.withConfig({displayName:"CelebratedEntrypointColumn"})`
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;
  width: 50%;
  height: auto;

  &.celebrated-entrypoint-column {
    padding: ${r(2.5,"px")} ${r(5,"px")};
    @media (max-width: ${l.md}) {
      padding-top: ${r(5,"px")};
      padding-bottom: ${r(5,"px")};
      width: 100%;
      height: 100%;
    }
  }

  &&.celebrated-entrypoint-column {
    @media (max-width: ${l.md}) {
      ${({shouldReducePadding:e})=>e&&`\n          padding: ${r(2.5,"px")};`}
    }
  }

  @media only screen and (max-width: ${l.lg}) {
    width: 100%;
    height: 100%;
  }

  ${({theme:e,color:t})=>t?`\n        ${n(e,"background-color",p(t,"background"))} \n    `:""}
`,b=a.div.withConfig({displayName:"CelebratedEntrypointContent"})`
  ${({hasTextAlignLeft:e})=>e?"\n       text-align: left; \n      ":"text-align: center;"}
  && {
    @media (max-width: ${l.md}) {
      text-align: center;
    }
  }
`,S=a(i).withConfig({displayName:"CelebratedEntrypointText"})`
  margin-top: ${r(1,"px")};
  margin-bottom: ${r(3,"px")};
  ${({color:e,theme:t})=>e?`\n        ${s(t,"typography.definitions.discovery.description-core")}\n        ${n(t,"color",p(e,"description"))};\n    `:""}
  && {
    ${({hasDekDescriptionTextStyle:e,theme:t})=>e&&`\n        ${s(t,"typography.definitions.consumptionEditorial.description-core")}\n    `}

    ${({hasDeemphasizedColorStyle:e,theme:t})=>e&&`\n        ${n(t,"color","colors.consumption.body.inverted.body-deemphasized")}\n    `}
  }
`,C=a(i).withConfig({displayName:"CelebratedEntrypointTitle"})`
  margin-top: ${({isLiveStory:e})=>r(e?3:2,"px")};
  margin-bottom: ${r(0,"px")};
  ${({color:e,theme:t})=>e?`\n        ${n(t,"color",p(e,"heading"))};\n    `:""}

  ${({hedTextStyle:e,theme:t})=>"hedStyle"===e?`\n        ${s(t,"typography.definitions.discovery.hed-core-primary")}\n    `:`\n        ${s(t,"typography.definitions.discovery.subhed-section-primary")}\n    `}
    && {
    ${({hasHedLowerCaseText:e})=>!e&&"text-transform: uppercase;"}
  }
`,f=a(c).withConfig({displayName:"CelebratedEntrypointButton"})`
  margin-bottom: ${r(3,"px")};
`,$=a.div.withConfig({displayName:"CelebratedEntrypointSponsor"})`
  ${({color:e,theme:t})=>e?`\n        ${s(t,"typography.definitions.globalEditorial.syndication")};\n        ${n(t,"color",p(e,"syndication"))};\n    `:""}
`,v=a(u).withConfig({displayName:"CelebratedEntrypointResponsiveAsset"})`
  max-width: 100%;
  height: auto;
  object-fit: cover;
`;e.exports={CelebratedEntrypointWrapper:g,CelebratedEntrypointContent:b,CelebratedEntrypointColumn:y,CelebratedEntrypointRow:h,CelebratedEntrypointText:S,CelebratedEntrypointTitle:C,CelebratedEntrypointResponsiveAsset:v,CelebratedEntrypointSponsor:$,CelebratedEntrypointButton:f}},63603:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(39578);i.Default=a(i,"Black",{color:"black"}),i.Brand=a(i,"Brand",{color:"brand"}),i.Dark=a(i,"Dark",{color:"dark"}),i.Light=a(i,"Light",{color:"light"}),i.White=a(i,"White",{color:"white"}),e.exports=i},58442:(e,t,o)=>{const a=o(45697),i=o(67294),{trackComponent:r}=o(40199),{CollageVideoItemInlineVideoItem:n,CollageVideoItemResponsiveAsset:s,CollageVideoItemWrapper:l,CollageVideoItemRubric:d,CollageVideoItemHed:m,CollageVideoItemHeadingLink:c}=o(89997),u=({analyticsDataAttribute:e,className:t,hasNoUnderline:o,hedTag:a,isFeatured:u,item:p={},nonFeaturedItemConfig:g,scriptUrl:h,shouldAutoplay:y,isDenseSummaryCollageThree:b})=>{if(i.useEffect((()=>{r("CollageVideoItem")}),[]),!h)return null;const{dangerousHed:S}=p,C=i.createElement(m,{dangerouslySetInnerHTML:{__html:S},as:a}),f=u?i.createElement(s,Object.assign({},p,{shouldAutoplay:y,scriptUrl:h,hasNoUnderline:o})):i.createElement(n,Object.assign({},p,{scriptUrl:h},g,{hedTag:a,isDenseSummaryCollageThree:b,hasNoUnderline:o}));return i.createElement(l,Object.assign({className:t},e,{isDenseSummaryCollageThree:b}),f,b&&u&&i.createElement(d,{name:p.rubric.name}),b&&u&&i.createElement(c,{href:p.url},C))};u.propTypes={analyticsDataAttribute:a.object,className:a.string,hasNoUnderline:a.bool,hedTag:a.string,isDenseSummaryCollageThree:a.bool,isFeatured:a.bool,item:a.object.isRequired,nonFeaturedItemConfig:a.shape({playIconStyle:a.oneOf(["dark","white","cne"]),shouldHideIcon:a.bool,shouldPlayInline:a.bool}),scriptUrl:a.string.isRequired,shouldAutoplay:a.bool},u.defaultProps={analyticsDataAttribute:{},hasNoUnderline:!1,hedTag:"h2",isFeatured:!1,nonFeaturedItemConfig:{shouldHideIcon:!1,shouldPlayInline:!1},shouldAutoplay:!1},u.displayName="CollageVideoItem",e.exports=u},56662:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(58442);e.exports=a(i,"CollageVideoItem")},89997:(e,t,o)=>{const a=o(51117).default,{BaseLink:i,BaseText:r}=o(74327),{BREAKPOINTS:n}=o(85326),{calculateSpacing:s,getTypographyStyles:l,getColorStyles:d}=o(79720),m=o(98288),c=o(87664),{InlineVideoItemHeadingLink:u}=o(75430),{GridItem:p}=o(14134),g=o(36895),{SummaryCollageThreeItemWrapper:h}=o(219),y=a(m).withConfig({displayName:"CollageVideoItemResponsiveAsset"})`
  ${u} {
    ${({hasNoUnderline:e})=>e&&"\n  &:link {\n    text-decoration: none;\n  }\n  &:hover {\n    text-decoration: underline;\n  }\n  "}
  }

  @media (max-width: ${n.lg}) {
    margin-bottom: ${s(2)};
  }
`,b=a(g).withConfig({displayName:"CollageVideoItemRubric"})`
  display: block;
  margin-top: ${s(2)};
  margin-bottom: ${s(1)};
  ${({theme:e})=>d(e,"color","colors.discovery.body.white.context-signature")};
`,S=a(c).withConfig({displayName:"CollageVideoItemInlineVideoItem"})`
  ${u} {
    ${({hasNoUnderline:e})=>e&&"\n    &:link {\n      text-decoration: none;\n    }\n    &:hover {\n      text-decoration: underline;\n    }\n    "}
  }

  &.inline-video-item {
    padding-bottom: 0;
    @media (min-width: ${n.lg}) {
      border-width: 1px;
      border-bottom-style: solid;
    }
  }

  h2,
  h3 {
    ${({theme:e,isDenseSummaryCollageThree:t})=>l(e,t?"typography.definitions.discovery.hed-core-primary":"typography.definitions.discovery.hed-bulletin-primary")};
    @media (max-width: ${n.lg}) {
      margin-bottom: ${s(2)};
    }
    @media (min-width: ${n.lg}) {
    }
  }
`,C=a(r).withConfig({displayName:"CollageVideoItemHed"})`
  ${l("typography.definitions.discovery.hed-core-primary")}
  ${({theme:e})=>d(e,"color","colors.discovery.body.white.heading")};
  @media (min-width: ${n.md}) {
    margin-bottom: ${s(3)};
  }
`;C.defaultProps={bottomSpacing:2,topSpacing:0};const f=a(i).withConfig({displayName:"CollageVideoItemHeadingLink"})``;f.defaultProps={colorStaticLinkToken:"colors.discovery.body.white.heading",getLinkStyles:"global"};const $=a("div").withConfig({displayName:"CollageVideoItemWrapper"})`
  && {
    @media (min-width: ${n.lg}) {
      ${p}:nth-child(4) &${h} {
        padding-top: 0;
      }
    }
  }
  ${b} {
    @media (min-width: ${n.lg}) {
      display: none;
    }
  }
  ${C} {
    @media (min-width: ${n.lg}) {
      display: none;
    }
    @media (max-width: ${n.md}) {
      display: block;
    }
  }
`;e.exports={CollageVideoItemInlineVideoItem:S,CollageVideoItemResponsiveAsset:y,CollageVideoItemWrapper:$,CollageVideoItemRubric:b,CollageVideoItemHed:C,CollageVideoItemHeadingLink:f}},53287:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{useIntl:n}=o(76186),s=o(88891).Z,l=o(86425),d=o(81411),m=o(44260),{trackComponent:c}=o(40199),{EventsListWrapper:u,EventsListContainer:p,EventsListItem:g,EventsListItems:h,EventsListMonth:y,EventsListTitle:b}=o(90323),S=({className:e,events:t,links:o,marquee:i,shouldUseTabs:S,title:C,variations:f,variationName:$})=>{r.useEffect((()=>{c("EventsList",$)}),[$]);let v={};const{formatMessage:w}=n(),k=t.map(((e,t)=>(f.sortByMonth&&(v=function(e){return e.sort(((e,t)=>new Date(e.startDate)-new Date(t.startDate))).reduce(((e,t)=>{const o=t.startDate?new Date(t.startDate).toLocaleString("en-US",{month:"long"}):"";return e[o]?e[o].push(t):e[o]=[t],e}),{})}(e)),r.createElement(p,{key:t},f.sortByMonth&&e.length>0?r.createElement(r.Fragment,null,Object.keys(v).map(((e,t)=>r.createElement(y,{key:t,className:"events-list__month"},r.createElement(b,null,e),r.createElement(h,null,r.createElement(g,{key:t},v[e].map(((e,t)=>r.createElement(l,Object.assign({},e,{key:t,showVenue:!0})))))))))):r.createElement(r.Fragment,null,r.createElement(b,null,C||w(s.title)),e.length>0&&r.createElement(h,null,e.map(((e,t)=>r.createElement(g,{key:t},r.createElement(l,Object.assign({},e,{showVenue:!0}))))))))))),T=i&&i.items?r.createElement(d,Object.assign({},i,{heading:""})):null,I=S?r.createElement(m,{marquee:T,showButton:!1,tabContent:k,tabLabels:o}):r.createElement(r.Fragment,null,k);return r.createElement(u,{className:a("events-list",e),isSortByMonth:f.sortByMonth},I)};S.propTypes={className:i.string,events:i.arrayOf(i.arrayOf(i.object)).isRequired,links:i.arrayOf(i.object),marquee:i.object,shouldUseTabs:i.bool,title:i.string,variationName:i.string,variations:i.shape({sortByMonth:i.bool.isRequired})},S.defaultProps={shouldUseTabs:!1,variations:{sortByMonth:!1}},e.exports=S},74637:(e,t,o)=>{e.exports=o(23257)},88891:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({title:{id:"EventsList.Title",defaultMessage:"Featured Events",description:"EventsList component title"}})},23257:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(53287);i.SortByMonth=a(i,"SortByMonth",{sortByMonth:!0}),e.exports=i},66465:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(84632),n=o(99956),{trackComponent:s}=o(40199),l=o(36895),{FeatureRatingsCardWrapper:d,ImageWrapper:m,Image:c,Label:u,Link:p,ContentWrapper:g,Content:h,Body:y,Hed:b,Dek:S,MetaData:C,Rating:f,SourceTagNameWrapper:$}=o(50810),v=({analyticsDataAttribute:e,dangerousHed:t,dangerousDek:o,hedTag:a,hideRubricItemSummary:n,hideSourceTagName:v,image:w,imageLabels:k,rating:T,reviewsCount:I,rubric:x,shouldHoldImageSpace:B,sourceTagName:E,url:D})=>{i.useEffect((()=>{s("FeatureRatingsCard")}),[]);const H=w&&w.showImageWithoutLink,N=i.createElement(i.Fragment,null,i.createElement(c,Object.assign({},w,{shouldHoldImageSpace:B})),k&&k.length?k.map(((e,t)=>i.createElement(u,{key:t.toString()},e))):null);return D&&t?i.createElement(d,Object.assign({},e),w&&i.createElement(m,{onClick:()=>{H&&(window.location=D)}},H?N:i.createElement(p,{href:D},N)),i.createElement(g,null,i.createElement(h,null,i.createElement(y,null,!n&&x&&i.createElement(l,{name:x.name}),!v&&E&&i.createElement($,null,"Â ",`| From ${E}`),i.createElement(p,{href:D},i.createElement(b,{as:a,dangerouslySetInnerHTML:{__html:t}})),i.createElement(S,{dangerouslySetInnerHTML:{__html:o}}))),T&&I?i.createElement(C,null,i.createElement(r,null),i.createElement(f,null,T," (",I,")")):null)):null};v.propTypes={analyticsDataAttribute:a.object,dangerousDek:a.string,dangerousHed:a.string.isRequired,hedTag:a.string,hideRubricItemSummary:a.bool,hideSourceTagName:a.bool,image:a.shape(n.propTypes),imageLabels:a.arrayOf(a.string),rating:a.number,reviewsCount:a.number,rubric:a.shape(l.propTypes),shouldHoldImageSpace:a.bool,sourceTagName:a.string,url:a.string.isRequired},v.defaultProps={hedTag:"h3",hideRubricItemSummary:!1,shouldHoldImageSpace:!0},e.exports=v},68437:(e,t,o)=>{e.exports=o(66465)},50810:(e,t,o)=>{const a=o(51117).default,{BREAKPOINTS:i}=o(85326),{BaseText:r,BaseLink:n}=o(74327),{minScreen:s,calculateSpacing:l,getColorStyles:d,getDecoration:m}=o(79720),c=o(99956),u=a.div.withConfig({displayName:"FeatureRatingsCardWrapper"})``,p=a(n).withConfig({displayName:"Link"})``;p.defaultProps={colorToken:"colors.discovery.body.white.heading",linkStyle:"global"};const g=a.div.withConfig({displayName:"ImageWrapper"})`
  position: relative;
`,h=a(c).withConfig({displayName:"Image"})`
  img {
    border-radius: ${({theme:e})=>m(e,"cardRadiusMd")};

    ${s(i.md)} {
      border-radius: ${({theme:e})=>m(e,"cardRadiusLg")};
    }
  }
  cursor: pointer;
`,y=a(r).withConfig({displayName:"Label"})`
  position: absolute;
  top: ${l(1)};
  left: ${l(1)};
  margin: 0 ${l(1)} 0 0;
  border-radius: ${l(3)};
  padding: ${l(.5)} ${l(1)};

  ${({theme:e})=>d(e,"background","colors.discovery.body.brand.background")};

  ${s(i.md)} {
    top: ${l(2)};
    left: ${l(2)};
    padding: ${l(1)} ${l(2)};
  }
`;y.defaultProps={as:"div",colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.globalEditorial.tags"};const b=a.div.withConfig({displayName:"ContentWrapper"})`
  border-radius: ${({theme:e})=>m(e,"cardRadiusMd")};
  padding: ${l(2)} ${l(1)} ${l(1)};

  ${s(i.md)} {
    border-radius: ${({theme:e})=>m(e,"cardRadiusLg")};
    padding: ${l(2)} ${l(1)}
      ${l(1)};
  }

  ${s(i.lg)} {
    padding: ${l(3)} ${l(1)}
      ${l(1)};
  }
`,S=a.div.withConfig({displayName:"Content"})`
  padding: 0 0 ${l(2)};
`,C=a.div.withConfig({displayName:"Body"})``,f=a(r).withConfig({displayName:"Hed"})`
  margin: 0 0 ${l(1)};

  ${s(i.md)} {
    margin: 0 0 ${l(2)};
  }
`;f.defaultProps={as:"h3",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-feature"};const $=a(r).withConfig({displayName:"Dek"})``;$.defaultProps={as:"div",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.discovery.description-core"};const v=a.div.withConfig({displayName:"MetaData"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${l(4)};
`,w=a(r).withConfig({displayName:"Rating"})`
  margin: 0 ${l(1)};
`;w.defaultProps={as:"div",colorToken:"colors.discovery.body.white.accreditation",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const k=a(r).withConfig({displayName:"SourceTagNameWrapper"})`
  display: inline-block;
`;k.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.heading",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={FeatureRatingsCardWrapper:u,Link:p,ImageWrapper:g,Image:h,Label:y,ContentWrapper:b,Content:S,Body:C,Hed:f,Dek:$,MetaData:v,Rating:w,SourceTagNameWrapper:k}},97113:(e,t,o)=>{const a=o(45697),i=o(67294),{trackComponent:r}=o(40199),{FeedItemWrapper:n,FeedItemTime:s,FeedItemContent:l,FeedItemLink:d,FeedItemHead:m,FeedItemDek:c}=o(10933),u=({className:e,dangerousDek:t,dangerousHed:o,href:a,publishDate:u})=>(i.useEffect((()=>{r("FeedItem")}),[]),i.createElement(n,{className:e},i.createElement(s,null,u),i.createElement(l,null,i.createElement(d,{href:a},i.createElement(m,{dangerouslySetInnerHTML:{__html:o}})),i.createElement(c,{dangerouslySetInnerHTML:{__html:t}}))));u.propTypes={className:a.string,dangerousDek:a.string.isRequired,dangerousHed:a.string.isRequired,href:a.string.isRequired,publishDate:a.string.isRequired},u.displayName="FeedItem",e.exports=u},71017:(e,t,o)=>{e.exports=o(97113)},10933:(e,t,o)=>{const a=o(51117).default,{BaseLink:i,BaseText:r}=o(74327),{getColorStyles:n,calculateSpacing:s,getTypographyStyles:l}=o(79720),{BREAKPOINTS:d}=o(85326),m=a.div.withConfig({displayName:"FeedItemWrapper"})`
  border-width: 0 0 1px;
  border-style: solid;
  ${({theme:e})=>n(e,"border-color","colors.discovery.body.white.divider")};
  padding-top: ${s(2)};
  padding-bottom: ${s(2)};
  text-align: left;

  @media (min-width: ${d.md}) {
    display: grid;
    grid-column: 1 / span 12;
    grid-template-columns: repeat(12, 1fr);
  }

  &:first-of-type {
    border: 1px 0 0;
    border-style: solid;
    ${({theme:e})=>n(e,"border-color","colors.discovery.body.white.divider")};
  }
`,c=a.time.withConfig({displayName:"FeedItemTime"})`
  ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-tertiary")};
  display: block;
  margin-bottom: ${s(2)};
  ${({theme:e})=>n(e,"color","colors.discovery.body.white.context-tertiary")};

  @media (min-width: ${d.md}) {
    grid-column: 1;
    margin-top: ${s(.5)};
  }
`,u=a.div.withConfig({displayName:"FeedItemContent"})`
  @media (min-width: ${d.md}) {
    grid-column: 2 / span 8;
    margin-top: ${s(.5)};
  }
`,p=a(i).withConfig({displayName:"FeedItemLink"})`
  margin-top: 0;
  margin-bottom: ${s(2)};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;p.defaultProps={colorToken:"colors.discovery.body.white.heading",typeToken:"typography.definitions.discovery.hed-bulletin-primary"};const g=a(r).withConfig({displayName:"FeedItemHead"})`
  margin-top: 0;
  margin-bottom: ${s(2)};
  text-decoration: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;g.defaultProps={as:"h2",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-bulletin-primary"};const h=a.div.withConfig({displayName:"FeedItemDek"})`
  ${({theme:e})=>l(e,"typography.definitions.discovery.description-core")};
  ${({theme:e})=>n(e,"color","colors.discovery.body.white.description")};
`;e.exports={FeedItemWrapper:m,FeedItemTime:c,FeedItemContent:u,FeedItemLink:p,FeedItemHead:g,FeedItemDek:h}},81073:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(94959);e.exports=a(i,"ImageSlideShow")},94959:(e,t,o)=>{const a=o(45697),i=o(67294),{useState:r,useEffect:n,useRef:s}=i,{injectIntl:l}=o(76186),d=o(23279),m=o(23493),c=o(17431).Z,u=o(7279),{BREAKPOINTS:p}=o(85326),g=o(98288),h=o(54831),{ImageSlideShowWrapper:y,ImageSlideShowHeader:b,ImageSlideShowFooter:S,ImageSlideShowTitle:C,ImageSlideShowCarousel:f,ImageSlideShowCarouselList:$,ImageSlideShowCarouselItem:v,ImageSlideShowCarouselArrow:w,ImageSlideShowSlideMobileText:k,ImageSlideShowSlideText:T,ImageSlideShowSlideCaption:I,ImageSlideShowSlideCredit:x,ImageSlideShowSlideImage:B,ImageSlideShowLastSlide:E,ImageSlideShowLastSlideLink:D,ImageSlideShowLastSlideHed:H,ImageSlideShowLastSlideDek:N,ImageSlideShowCTA:P,ImageSlideShowCarouselButton:M}=o(20215);let L=null;const F=({dek:e,endSlideDek:t,endSlideHed:o,galleryLink:a,galleryLinkLabel:l,hasMarginTop:F,hasTitleDividerAbove:A,hasTitleDividerAboveDek:O,hasTitleDividerBelow:_,hed:R,hideLastSlide:V,intl:W,maxAllowedSlides:j,slideItems:U,trackingNamespace:G})=>{var z,q;const[K,J]=r(0),[Q,Z]=r(0),[X,Y]=r(!1),ee=s(null),te=s(null),[oe,ae]=r(!0),[ie,re]=r(!1),ne=e=>{window.dataLayer&&e&&window.dataLayer.push({event:e})},{forwardButton:se,backwardButton:le,lastSlideButton:de,swipe:me,viewMoreCTA:ce}=G,ue=`(min-width: ${p.md})`;U.length=U.length<=j?U.length:j;const pe=U.length+(V?0:1),[ge,he]=r(!1),[ye,be]=r(!1);n((()=>{ee.current&&(ee.current.style.opacity=1);const e=()=>{if(te.current){const e=[...te.current.children].map((e=>e.offsetLeft));Z(e);const t=[...ee.current.querySelectorAll("[class^=ImageSlideShowSlideImage]")];let o=0;t.forEach((e=>{e.style.minHeight=0})),t.forEach((e=>{o<e.offsetHeight&&(o=e.offsetHeight)})),t.forEach((e=>{e.style.minHeight=`${o}px`})),[...ee.current.querySelectorAll("button")].forEach((e=>{e.style.opacity=1,e.style.top=o/2-22+"px"}))}const e=window.matchMedia(ue).matches;Y(e),e&&(U<4||j<4)&&re(!0)},t=d(e,200);return window.addEventListener("resize",t),setTimeout(e,1e3),()=>{window.removeEventListener("resize",t),clearTimeout(e)}}),[ee,j,ue,U]);const Se=U.filter((e=>{const{width:t,height:o}=e.image.sources.sm;return t/o>=1})).length===U.length,Ce=()=>{const e=1+(X&&!Se?3:1);if(K<pe-e){const t=K+1;J(t),t>0&&oe&&ae(!1),t===pe-e&&re(!0),X&&te.current.scrollTo({left:Q[t],behavior:"smooth"}),ne(se)}},fe=()=>{if(K>0){const e=K-1;J(e),0!==e||oe||ae(!0),X&&te.current.scrollTo({left:Q[e],behavior:"smooth"}),ie&&re(!1),ne(le)}},$e=X?0:24,ve=m((()=>{!ye&&X||(L=setTimeout((()=>{if(clearTimeout(L),te.current&&Q){const e=te.current.scrollLeft+$e,t=Q.reduce(((t,o)=>Math.abs(o-e)<Math.abs(t-e)?o:t)),o=Q.indexOf(t);J(o),o>0&&oe&&ae(!1),0!==o||oe||ae(!0);const a=Se?2:X?4:1;o===pe-a&&K===pe-a&&re(!0),o<pe-a&&re(!1),X||ne(me)}he(!1)}),1e3),ge||he(!0))}),3e3,{trailing:!1});return i.createElement(y,{hasMarginTop:F},i.createElement(b,null,i.createElement(C,{dangerousHed:R,dangerousDek:e,hasDividerAbove:A,hasDividerAboveDek:O,hasDividerBelow:_,textAlign:"center","data-testid":"section-title"})),i.createElement(f,{ref:ee,tabIndex:"0",onKeyDown:e=>{39===e.keyCode?Ce():37===e.keyCode&&fe()}},i.createElement(M,{"data-testid":"ImageSlideShowPrevButton",direction:"prev",isInactive:oe,onClick:()=>fe(),type:"button"},i.createElement(w,{type:"prev"})),i.createElement(M,{"data-testid":"ImageSlideShowNextButton",direction:"next",isInactive:ie,onClick:()=>Ce(),type:"button"},i.createElement(w,{type:"next"})),i.createElement($,{onScroll:()=>{ve()},onMouseOver:()=>be(!0),onMouseOut:()=>be(!1),ref:te,style:{transform:"translateX(0)"}},U.map(((e,t)=>{if(!e.image)return null;const{caption:o,credit:a}=e;return i.createElement(v,{key:`slide-${t}`,isLandscape:Se,style:{position:"relative"}},i.createElement(B,{key:`slide-${t}`},i.createElement(g,Object.assign({},e.image))),(a||o)&&i.createElement(T,null,a&&i.createElement(x,{dangerouslySetInnerHTML:{__html:a}}),o&&i.createElement(I,{dangerouslySetInnerHTML:{__html:o}})))})),!V&&i.createElement(v,{isLandscape:Se},i.createElement(D,{href:a,onClick:()=>ne(de)},i.createElement(B,null,i.createElement(E,null,i.createElement(H,null,o),i.createElement(N,null,t||W.formatMessage(c.lastSlideCTA))))))),i.createElement(k,null,i.createElement(h,{caption:null===(z=U[K])||void 0===z?void 0:z.caption,credit:null===(q=U[K])||void 0===q?void 0:q.credit}))),i.createElement(S,null,a&&i.createElement(P,{"data-testid":"ImageSlideShowCTA"},i.createElement(u.Utility,{btnStyle:"outlined",href:a,inputKind:"link",label:l||W.formatMessage(c.galleryLink),onClickHandler:()=>{ne(ce)},target:"_self"}))))};F.propTypes={dek:a.string,endSlideDek:a.string,endSlideHed:a.string,galleryLink:a.string,galleryLinkLabel:a.string,hasMarginTop:a.bool,hasTitleDividerAbove:a.bool,hasTitleDividerAboveDek:a.bool,hasTitleDividerBelow:a.bool,hed:a.string,hideLastSlide:a.bool,intl:a.object,maxAllowedSlides:a.number,slideItems:a.array,trackingNamespace:a.object},F.defaultProps={maxAllowedSlides:10,trackingNamespace:{backwardButton:"ImageSlideShow Control Backward",forwardButton:"ImageSlideShow Control Forward",lastSlideButton:"ImageSlideShow gallery link",swipe:"ImageSlideShow carousel swipe",viewMoreCTA:"ImageSlideShow View All Button"}},e.exports=l(F)},54831:(e,t,o)=>{const a=o(67294),{useEffect:i,useRef:r,useState:n}=a,s=o(45697),{ContentUpdatorWrapper:l,ImageSlideShowSlideCaption:d,ImageSlideShowSlideCredit:m}=o(20215),c=({caption:e,credit:t})=>{const[o,s]=n(1),[c,u]=n(""),[p,g]=n(""),h=r(null);return i((()=>(h.current||e===c&&t===p||(s(0),h.current=setTimeout((()=>{s(1),u(e),g(t),h.current=null}),300)),()=>{clearTimeout(h.current),h.current=null})),[e,c,t,p]),a.createElement(l,{style:{opacity:o}},a.createElement(m,{dangerouslySetInnerHTML:{__html:p}}),a.createElement(d,{dangerouslySetInnerHTML:{__html:c}}))};c.propTypes={caption:s.string,credit:s.string},e.exports=c},20215:(e,t,o)=>{const a=o(51117).default,{calculateSpacing:i,getColorToken:r,getTypographyStyles:n}=o(79720),{BREAKPOINTS:s}=o(85326),{applyGridSpacing:l,cssVariablesGrid:d}=o(62470),m=o(32168),c=o(57013),u=a.div.withConfig({displayName:"ImageSlideShowWrapper"})`
  ${d()}
  ${({hasMarginTop:e})=>e&&`margin-top: ${i(4)};`}
`,p=a.div.withConfig({displayName:"ImageSlideShowHeader"})`
  ${l("padding")}
`,g=a.div.withConfig({displayName:"ImageSlideShowFooter"})`
  ${l("padding")}
`,h=a(m).withConfig({displayName:"ImageSlideShowTitle"})``,y=a.div.withConfig({displayName:"ImageSlideShowCarousel"})`
  position: relative;
  transition: opacity 0.3s ease-in;
  opacity: 0;
  margin: ${i(4)} 0;
  overflow: hidden;

  @media (min-width: ${s.md}) {
    ${d()}
    ${l("margin")}
    overflow: visible;
  }
`,b=a.ul.withConfig({displayName:"ImageSlideShowCarouselList"})`
  display: flex;
  position: relative;
  transition: transform 0.3s cubic-bezier(0.34, 0.83, 1.06, 0.65);
  margin: 0;
  padding: 0;
  padding-right: ${i(4)};

  padding-left: ${i(1.5)};
  list-style: none;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${s.md}) {
    padding: 0;
    ${d()}
  }
`,S=a.li.withConfig({displayName:"ImageSlideShowCarouselItem"})`
  display: flex;
  position: relative;
  flex-grow: 1;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  align-self: stretch;
  margin-left: ${i(1.5)};
  width: 100%;
  max-width: calc(100% - ${i(4.5)});
  max-height: 100%;
  scroll-snap-align: center;

  &:last-child,
  &:last-of-type {
    margin-right: ${i(3)};
  }

  @media (min-width: ${s.md}) {
    align-content: start;
    margin: 0 1.35%;
    width: inherit;
    max-width: 100%;
    scroll-snap-align: start;

    ${({isLandscape:e})=>"width: "+(e?"48.6%":"23%")};

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`,C=a.button.withConfig({displayName:"ImageSlideShowCarouselButton"})`
  display: none;
  position: absolute;
  top: calc(50% - 22px);
  transition: opacity 0.3s ease-in;
  opacity: 0;
  background: none;
  ${({direction:e})=>"prev"===e?"left: -44px":"right: -44px"};
  fill: ${({isInactive:e})=>r(e?"colors.interactive.base.light":"colors.interactive.base.black")};
  pointer-events: ${({isInactive:e})=>e?"none":"auto"};

  @media (min-width: ${s.md}) {
    display: block;
  }
`,f=a(c).withConfig({displayName:"ImageSlideShowCarouselArrow"})`
  ${({type:e})=>`transform: scaleX(${"prev"===e?"-1":"1"})`};
`,$=a.div.withConfig({displayName:"ImageSlideShowCarouselSwipe"})``,v=a.div.withConfig({displayName:"ImageSlideShowSlide"})``,w=a.div.withConfig({displayName:"ImageSlideShowSlideImage"})`
  display: flex;
  position: relative;
  align-items: center;
  background-color: ${r("colors.consumption.body.inverted.bg-photo")};
  width: 100%;
`,k=a.div.withConfig({displayName:"ImageSlideShowSlideMobileText"})`
  width: 100%;

  @media (min-width: ${s.md}) {
    display: none;
  }
`,T=a.div.withConfig({displayName:"ContentUpdatorWrapper"})`
  transition: opacity 0.3s linear;
  min-height: 50px;
`,I=a.div.withConfig({displayName:"ImageSlideShowSlideText"})`
  display: none;
  width: 100%;

  @media (min-width: ${s.md}) {
    display: block;
  }
`,x=a.p.withConfig({displayName:"ImageSlideShowSlideCredit"})`
  margin: ${i(1.5)} 0 0;
  width: 100%;
  text-align: center;
  color: ${r("colors.consumption.body.standard.body-deemphasized")};

  ${({theme:e})=>n(e,"typography.definitions.globalEditorial.accreditation-core")}
`,B=a.p.withConfig({displayName:"ImageSlideShowSlideCaption"})`
  margin: ${i(.5)} 0 0;
  width: 100%;
  text-align: center;
  color: ${r("colors.discovery.body.light.description")};

  ${({theme:e})=>n(e,"typography.definitions.consumptionEditorial.description-core")}
`,E=a.div.withConfig({displayName:"ImageSlideShowLastSlide"})`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  flex-wrap: wrap;
  background-color: ${r("colors.consumption.body.inverted.bg-photo")};
  padding: 0 ${i(2)};
`,D=a.h3.withConfig({displayName:"ImageSlideShowLastSlideHed"})`
  align-self: end;
  margin-top: 0;
  width: 100%;
  text-align: center;
  color: ${r("colors.consumption.lead.inverted.heading")};
  ${({theme:e})=>n(e,"typography.definitions.discovery.hed-feature")}
`,H=a.p.withConfig({displayName:"ImageSlideShowLastSlideDek"})`
  align-self: end;
  width: 100%;
  text-align: center;
  color: ${r("colors.consumption.lead.inverted.description")};
  ${({theme:e})=>n(e,"typography.definitions.globalEditorial.context-secondary")}
`,N=a.a.withConfig({displayName:"ImageSlideShowLastSlideLink"})`
  width: 100%;
  text-decoration: none;

  &:hover,
  &:focus {
    p {
      text-decoration: underline;
    }
  }

  & > div {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    @media (min-width: ${s.lg}) {
      padding-bottom: ${i(4)};
    }
  }
`,P=a.div.withConfig({displayName:"ImageSlideShowCTA"})`
  margin-bottom: ${i(5)};
  text-align: center;
`;e.exports={ImageSlideShowWrapper:u,ImageSlideShowHeader:p,ImageSlideShowFooter:g,ImageSlideShowTitle:h,ImageSlideShowCarousel:y,ImageSlideShowCarouselList:b,ImageSlideShowCarouselItem:S,ImageSlideShowCarouselButton:C,ImageSlideShowCarouselArrow:f,ImageSlideShowCarouselSwipe:$,ImageSlideShowSlide:v,ImageSlideShowSlideImage:w,ImageSlideShowSlideMobileText:k,ContentUpdatorWrapper:T,ImageSlideShowSlideText:I,ImageSlideShowSlideCaption:B,ImageSlideShowSlideCredit:x,ImageSlideShowLastSlide:E,ImageSlideShowLastSlideLink:N,ImageSlideShowLastSlideHed:D,ImageSlideShowLastSlideDek:H,ImageSlideShowCTA:P}},17431:(e,t,o)=>{const a=o(76186);t.Z=(0,a.defineMessages)({galleryLink:{id:"ImageSlideShow.galleryLink",defaultMessage:"See the gallery",description:"CTA to gallery"},lastSlideCTA:{id:"ImageSlideShow.lastSlideCTA",defaultMessage:"Explore the gallery",description:"Last slide overlay call to action"}})},30233:(e,t,o)=>{const a=o(23493),i=o(45697),r=o(67294),{connector:n}=o(92078),s=o(17843),{trackComponent:l}=o(40199),d=o(51378),m=o(31956),{NavigationListWrapper:c}=o(35433),{googleAnalytics:u}=o(28601),{getComponentPosition:p,isBannerIntoView:g}=o(24149),h=(e,t,o)=>{u.emitUniqueGoogleTrackingEvent("navigation-list-impression",{componentPosition:e,layout:t,hed:o})},y=({className:e,hasAnchorLinkListDivider:t,hasBackgroundColorWhite:o,hasBorder:i,hasSquareChevronSlider:n,hasHeaderBorder:m,hasUnderline:y,hideBackgroundColor:b,isInvertedTheme:S,hasRoundedCornerCards:C,navigationListData:f,palette:$,shouldCenterAlignContent:v,shouldDisplayDangerousDek:w,shouldEnableBundleComponentAnalytics:k,shouldIncreaseCardSizeOnDesktop:T,layout:I,theme:x,trackingNamespace:B})=>{r.useEffect((()=>{l("NavigationList",I)}),[I]);const{hed:E,dek:D,links:H}=f,N=r.useRef(),[P,M]=r.useState(!1);if(r.useEffect((()=>{const e=a((()=>{var e;const t=null===(e=N.current)||void 0===e?void 0:e.getBoundingClientRect().top;M(t<=0)}),50);return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[I]),r.useEffect((()=>{const e=p(N),t=a((()=>{g(N)&&(h(e,I,E),window.removeEventListener("scroll",t,!1))}),100);if(!g(N))return window.addEventListener("scroll",t,!1),function(){window.removeEventListener("scroll",t,!1)};h(e,I,E)}),[I,E]),!H.length)return null;const L={dek:D,hasAnchorLinkList:"NavigationListAnchored"===I||"NavigationListTextOverlayOnImage"===I,hasAnchorLinkListDivider:t,hasSquareChevronSlider:n,hasUnderline:y,hed:E,isBannerPositionTop:P,isFeatured:"featured"===x,hasRoundedCornerCards:C,hasHeaderBorder:m,layout:I,links:H.map((e=>Object.assign(Object.assign({},e),{isExternal:!1,onClick:()=>((e,t,o)=>{u.emitGoogleTrackingEvent("navigation-list-click",{"gtm.elementUrl":e,layout:t,text:o})})(e.url,I,e.text)}))),shouldCenterAlignContent:v||H.length>=1&&H.length<=10,shouldDisplayDangerousDek:w,shouldEnableBundleComponentAnalytics:k,shouldIncreaseCardSizeOnDesktop:T,trackingNamespace:B};return r.createElement(s,{palette:S?"inverted":$},r.createElement(c,{ref:N,"data-testid":"NavigationList",hasBackgroundColorWhite:o,hasBorder:i,hideBackgroundColor:b,hasHeaderBorder:m,isBannerPositionTop:P,isSubNavigation:L.isSubNavigation,className:e,layout:L.layout},r.createElement(d,Object.assign({},L))))};y.displayName="NavigationList",y.propTypes={className:i.string,hasAnchorLinkListDivider:i.bool,hasBackgroundColorWhite:i.bool,hasBorder:i.bool,hasHeaderBorder:i.bool,hasRoundedCornerCards:i.bool,hasSquareChevronSlider:i.bool,hasUnderline:i.bool,hideBackgroundColor:i.bool,isBannerPositionTop:i.bool,isCentered:i.bool,isInvertedTheme:i.bool,layout:i.oneOf(["NavigationListSubnavigation","NavigationListAnchored","NavigationListTextOverlayOnImage"]),navigationListData:m.propTypes.linkBannerData,palette:i.oneOf(["standard","inverted"]),shouldCenterAlignContent:i.bool,shouldDisplayDangerousDek:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldIncreaseCardSizeOnDesktop:i.bool,theme:i.string,trackingNamespace:i.string},y.defaultProps={hasAnchorLinkListDivider:!1,hasBackgroundColorWhite:!1,hasBorder:!1,hasRoundedCornerCards:!1,hasSquareChevronSlider:!1,hasUnderline:!1,hideBackgroundColor:!1,isCentered:!0,isInvertedTheme:!1,layout:"NavigationListAnchored",navigationListData:{hed:"",dek:"",links:[]},palette:"standard",shouldCenterAlignContent:!1,shouldDisplayDangerousDek:!1,shouldIncreaseCardSizeOnDesktop:!1};const b=n(y,{keysToPluck:["navigationListData"]});e.exports={NavigationList:y,connectedNavigationList:b}},93210:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),{NavigationList:i,connectedNavigationList:r}=o(30233);e.exports=a(r,"NavigationList"),e.exports.NavigationList=a(i,"NavigationList")},35433:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationListWrapper=t.DESKTOP_HEIGHT=t.MOBILE_HEIGHT=void 0;const{default:a}=o(51117),{getColorStyles:i}=o(79720),{isInverted:r}=o(37332),{BREAKPOINTS:n}=o(85326);t.MOBILE_HEIGHT=60,t.DESKTOP_HEIGHT=60,t.NavigationListWrapper=a.section.withConfig({displayName:"NavigationListWrapper"})`
  position: relative;
  ${({isBannerPositionTop:e})=>e&&"box-shadow: rgb(0 0 0 / 10%) 0px 1px 6px;"}
  ${({hasBorder:e,theme:t})=>e&&`\n    border-top: 1px solid;\n    border-bottom: 1px solid;\n    ${i(t,"border-color",r(t)?"colors.discovery.body.dark.divider":"colors.discovery.body.light.divider")};\n  `}
  ${({hideBackgroundColor:e})=>e&&"\n    &&&{\n      background-color: transparent;\n      box-shadow: transparent 0px 1px 6px;\n    }"}

  ${({theme:e,layout:t,hasBackgroundColorWhite:o})=>{let a;return a=r(e)?"colors.discovery.body.dark.background":"NavigationListSubnavigation"===t||o?"colors.background.white":"colors.discovery.body.light.background",i(e,"background",a)}};

  ${({layout:e})=>"NavigationListSubnavigation"===e&&`\n      display: flex;\n      flex-direction: column;\n      align-items: flex-start;\n      padding: 20px 24px;\n        \n      @media (min-width: ${n.md}) {\n        padding: 0px 64px 20px;\n      }\n  `}
`},51378:(e,t,o)=>{const a=o(67294),i=o(45697),{NavigationListLinkList:r}=o(95574),n=({hasGradient:e,hasSquareChevronSlider:t,hasUnderline:o,hasAnchorLinkList:i,hasAnchorLinkListDivider:n,hasHeaderBorder:s,hed:l,dek:d,isCentered:m,hasRoundedCornerCards:c,layout:u,links:p,shouldCenterAlignContent:g,shouldDisplayDangerousDek:h,shouldEnableBundleComponentAnalytics:y,shouldIncreaseCardSizeOnDesktop:b})=>{const S={text:"NavigationListSubnavigation"===u?l:null};return a.createElement(r,{hed:l,dek:d,hasGradient:e,hasSquareChevronSlider:t,hasUnderline:o,hasAnchorLinkList:i,hasAnchorLinkListDivider:n,hasHeaderBorder:s,isCentered:m,hasRoundedCornerCards:c,layout:u,links:p,primaryLink:S.text&&S,shouldCenterAlignContent:g,shouldDisplayDangerousDek:h,shouldEnableBundleComponentAnalytics:y,shouldIncreaseCardSizeOnDesktop:b})};n.propTypes={dek:i.string,hasAnchorLinkList:i.bool,hasAnchorLinkListDivider:i.bool,hasGradient:i.bool,hasHeaderBorder:i.bool,hasRoundedCornerCards:i.bool,hasSquareChevronSlider:i.bool,hasUnderline:i.bool,hed:i.string,isCentered:i.bool,layout:i.string,links:i.arrayOf(i.shape({url:i.string,text:i.string,isExternal:i.bool,onClick:i.func})),shouldCenterAlignContent:i.bool,shouldDisplayDangerousDek:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldIncreaseCardSizeOnDesktop:i.bool},n.defaultProps={hasAnchorLinkListDivider:!1,hasGradient:!1,hasRoundedCornerCards:!1,hasSquareChevronSlider:!1,hasUnderline:!1,isCentered:!1,shouldDisplayDangerousDek:!1,shouldIncreaseCardSizeOnDesktop:!1},e.exports=n},95574:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NavigationListLinkList=t.DESKTOP_HEIGHT=t.MOBILE_HEIGHT=void 0;const a=o(79720),{default:i,css:r}=o(51117),{calculateSpacing:n,getColorStyles:s,getTypographyStyles:l}=o(79720),{BREAKPOINTS:d}=o(85326),{isInverted:m}=o(37332),c=o(24445),{ButtonWrapper:u}=o(41909),{NavListWrapper:p,NavList:g,NavListItem:h,NavPrimaryItem:y,NavLink:b,VisualTextWrap:S}=o(62920),{ResponsiveImageContainer:C,ResponsiveImagePicture:f}=o(7230),{SpanWrapper:$}=o(89676),{CarouselHeader:v,CarouselTitle:w,CarouselList:k,CarouselWrapper:T}=o(95764),{SummaryDekDefault:I}=o(96567);t.MOBILE_HEIGHT=60,t.DESKTOP_HEIGHT=60,t.NavigationListLinkList=i(c).withConfig({displayName:"NavigationListLinkList"})`
  ${v} {
    padding-bottom: 0;
  }

  ${w} {
    ${({hasAnchorLinkListDivider:e})=>l(e?"typography.definitions.discovery.subhed-section-primary":"typography.definitions.discovery.hed-core-primary")};
    ${({theme:e})=>s(e,"color",m(e)?"colors.discovery.body.dark.description":"colors.discovery.body.light.description")};

    ${({theme:e,hasAnchorLinkListDivider:t})=>t&&s(e,"color","colors.discovery.body.light.heading")};
  }

  ${I} {
    ${l("typography.definitions.discovery.description-page")};
    margin-top: ${n(2)};
    margin-bottom: ${n(2)};
    padding-bottom: ${n(3)};
  }

  ${h} {
    height: ${t.MOBILE_HEIGHT-1}px;

    @media (min-width: ${d.md}) {
      height: ${t.DESKTOP_HEIGHT-1}px;
    }
  }

  ${b} {
    ${({hasUnderline:e})=>e&&"&:link {\n          text-decoration: underline;\n        }\n        "}

    &:link,
    &:visited {
      ${({theme:e})=>s(e,"color",m(e)?"colors.discovery.body.dark.description":"colors.discovery.body.light.description")};
    }
  }

  ${S} {
    ${l("typography.definitions.discovery.hed-bulletin-secondary")};
  }

  ${({hasCarouselControls:e})=>e&&"&& {\n        height: 100%\n      }"}
  ${y} {
    ${b} {
      ${({theme:e})=>l(e,"typography.definitions.globalEditorial.context-primary")};
    }
  }

  ${b} {
    display: block;
  }

  ${u} {
    ${({hasSquareChevronSlider:e})=>e&&" border-radius: unset;\n    "}
  }

  ${h} {
    ${({hasRoundedCornerCards:e})=>e?`\n    ${C}, ${f}, ${$}::after {\n      border-radius: 10px;\n    }\n    `:`${C}, ${f}, ${$}::after {\n      border-radius: 0px;\n    }\n    `}

    ${f} {
      ${({shouldIncreaseCardSizeOnDesktop:e})=>e?`\n        @media (min-width: ${d.xl}) {\n          width: 150px;\n          height: 200px;\n        }\n        img {\n          @media (min-width: ${d.xl}) {\n            width: 150px;\n            height: 200px;\n          }\n        }`:""}
    }
  }

  ${({layout:e,theme:t})=>"NavigationListSubnavigation"===e?r`
        ${p} {
          display: flex;
          flex-direction: column;
          align-items: center;
          border-top: 1px solid;
          border-bottom: 1px solid;
          border-color: ${(0,a.getColorToken)(t,"colors.interactive.base.black")};
          padding: 20px 0 calc(20px - 0.75rem) 0;
          gap: calc(20px - 0.75rem);
          width: 100%;
          overflow-x: inherit;

          @media (min-width: ${d.md}) {
            padding: 20px 0 calc(20px - 1rem) 0;
            gap: calc(20px - 1rem);
          }
        }

        ${y} {
          margin: 0;

          ${b} {
            ${s(t,"color","colors.discovery.body.white.context-signature")};
            ${l(t,"typography.definitions.globalEditorial.context-title")};
          }
        }

        ${g} {
          flex-wrap: wrap;
          justify-content: center;
          white-space: normal;
          --grid-margin: 0;
        }

        ${h} {
          flex-shrink: inherit;
          height: auto;
          text-transform: uppercase;
        }
      `:"NavigationListTextOverlayOnImage"===e?r`
        ${S} {
          position: absolute;
          bottom: ${n(.5)};
          padding-right: ${n(1)};
          padding-left: ${n(1)};
          ${b} {
            ${s(t,"color","colors.interactive.base.white")};
          }
        }

        ${$}::after {
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(0deg, black, transparent 70%);
          width: 100%;
          height: 100%;
          content: '';
        }

        ${h} {
          &:hover::before,
          &:focus-visible::before {
            ${s(t,"background-color","colors.discovery.body.white.background")};
            right: ${n(1)};
            left: ${n(1)};
            z-index: 1;
            margin-top: ${n(1)};
            margin-bottom: ${n(1)};
            width: auto;

            @media (max-width: ${d.md}) {
              margin-bottom: 6px;
            }
          }
        }
        ${k} {
          padding: 0 ${n(8)} 0 ${n(8)};
          @media (max-width: ${d.md}) {
            padding: 0 ${n(3)} 0 ${n(3)};
          }
        }
        ${T} {
          padding-top: ${n(2.5)};
          padding-bottom: ${n(2.5)};
        }
      `:""}
`},51188:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),{trackComponent:n}=o(40199),s=o(48655),l=o(98288),d=o(7279),{PromoBoxButtonContainer:m,PromoBoxButtonPrimary:c,PromoBoxButtonSecondary:u,PromoBoxCallout:p,PromoBoxCalloutContent:g,PromoBoxContent:h,PromoBoxText:y,PromoBoxTitle:b,PromoBoxResponsiveAsset:S,PromoBoxWrapper:C}=o(71751),{componentTracking:f,googleAnalytics:$}=o(28601),{useViewportObserver:v}=o(47041),w=({asset:e,secondaryButtonVariation:t,className:o,dangerousButtonText:i,dangerousSecondaryButtonText:l,dangerousText:w,dangerousTitle:k,hasFullWidthForAsset:T,hasTopLine:I,hasFullGridWidth:x,href:B,secondaryHref:E,secondaryButtonPosition:D,showSecondaryButton:H,shouldEnableBackgroundImgForMobile:N,shouldEnableBundleComponentAnalytics:P,shouldFetchBITokens:M,trackingNamespace:L,isInverted:F,isInvertedTheme:A,variations:O,variationName:_})=>{r.useEffect((()=>{n("PromoBox",_)}),[_]),v(".promo-box",void 0,(e=>{e&&$.emitUniqueGoogleTrackingEvent("promobox-impression",{href:B})}));const R={inputKind:H?"link":"text",isCardVariation:O.showCard,label:i,secondaryButtonPosition:D,href:B},V=Object.assign(Object.assign({},R),{btnStyle:"outlined",label:l,href:H&&E}),W=O.showCard?s.NoMargins:s.WithMargins,j=O.showCard?s.WithMargins:"div",U=f.addDataSectionTitleAttribute(P,(null==L?void 0:L.primary)||i),G=f.addDataSectionTitleAttribute(P,(null==L?void 0:L.secondary)||l);return r.createElement(C,{href:E?void 0:`${B}`,className:a("promo-box",o),contentAlign:O.contentAlign,isCardVariation:O.showCard,hasTopLine:I,hasFullGridWidth:x,as:B?"a":"div",hasFullWidthForAsset:T,shouldFetchBITokens:M},e&&r.createElement(S,Object.assign({},e,{contentAlign:O.contentAlign,isCardVariation:O.showCard,hasFullWidthForAsset:T,shouldEnableBackgroundImgForMobile:N})),r.createElement(h,{as:j,isCardVariation:O.showCard},r.createElement(p,{className:"promo-box__callout",isCardVariation:O.showCard,isInverted:F,contentAlign:O.contentAlign},k&&r.createElement(g,{as:W,isCardVariation:O.showCard},r.createElement(b,{contentAlign:O.contentAlign,isCardVariation:O.showCard,dangerouslySetInnerHTML:{__html:k},isInvertedTheme:A,isInverted:F})),w&&r.createElement(g,{as:W,isCardVariation:O.showCard},r.createElement(y,{className:"promo-box__text",contentAlign:O.contentAlign,isCardVariation:O.showCard,dangerouslySetInnerHTML:{__html:w},isInvertedTheme:A,isInverted:F})),r.createElement(m,{secondaryButtonPosition:D},R.label&&r.createElement(c,Object.assign({},R,U,{isInverted:F})),H&&V.label&&r.createElement(u,Object.assign({},V,G,{as:d[t]}))))))};w.propTypes={asset:i.shape(l.propTypes),className:i.string,dangerousButtonText:i.string,dangerousSecondaryButtonText:i.string,dangerousText:i.string,dangerousTitle:i.string,hasFullGridWidth:i.bool,hasFullWidthForAsset:i.bool,hasTopLine:i.bool,href:i.string.isRequired,isInverted:i.bool,isInvertedTheme:i.bool,secondaryButtonPosition:i.string,secondaryButtonVariation:i.string,secondaryHref:i.string,shouldEnableBackgroundImgForMobile:i.bool,shouldEnableBundleComponentAnalytics:i.bool,shouldFetchBITokens:i.bool,showSecondaryButton:i.bool,trackingNamespace:i.object,variationName:i.string,variations:i.shape({contentAlign:i.oneOf(["below"]),showCard:i.bool})},w.defaultProps={hasFullGridWidth:!1,hasFullWidthForAsset:!1,hasTopLine:!0,isInverted:!1,isInvertedTheme:!1,shouldEnableBackgroundImgForMobile:!1,shouldFetchBITokens:!1,showSecondaryButton:!1,variations:{showCard:!0}},w.displayName="PromoBox",e.exports=w},98797:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380);e.exports=a(o(36873),"PromoBox")},71751:(e,t,o)=>{const a=o(51117).default,{BaseText:i,BaseWrap:r}=o(74327),{getColorStyles:n,calculateSpacing:s,getTypographyStyles:l,getColorToken:d,getDecoration:m}=o(79720),{applyGridSpacing:c}=o(62470),{BREAKPOINTS:u}=o(85326),{GridItem:p}=o(14134),g=o(98288),h=o(7279),y=a(r).withConfig({displayName:"PromoBoxWrapper"})`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;

  ${({theme:e,hasTopLine:t,shouldFetchBITokens:o=!0})=>t?`\n        border-top: ${o?m(e,"dividerWidth"):"1px"} solid;\n        ${n(e,"border-color",o?"colors.discovery.body.white.border":"colors.discovery.body.white.divider")};\n        padding-top: ${s(6)};\n      `:""}

  ${({isCardVariation:e})=>e?`\n      display: grid;\n      position: relative;\n      grid-template-columns: repeat(12, 1fr);\n\n      @media (min-width: ${u.md}) {\n        ${c("margin",!0)}\n      }\n  `:""}

      ${({hasFullGridWidth:e})=>e&&`@media (min-width: ${u.md}) {\n      margin-left: 0;\n      margin-right: 0;\n    }`}
    
  ${({contentAlign:e})=>"below"===e?"\n    flex-wrap: wrap;\n  ":""}

  ${({hasFullWidthForAsset:e})=>e&&`\n    &:focus-visible {\n      outline-offset: ${s(.5)};\n    }\n  `}
`,b=a(g).withConfig({displayName:"PromoBoxResponsiveAsset"})`
  width: 100%;

  ${({isCardVariation:e})=>e?`\n    grid-column: 1/-1;\n    grid-row: 1;\n    z-index: 1;\n\n    &.responsive-asset {\n      display: none;\n    }\n    @media (min-width: ${u.md}) {\n      &.responsive-asset {\n        display: block;\n      }\n    }\n  `:""}

  ${({contentAlign:e})=>"below"===e?"\n   &::after {\n     display: none;\n   }\n  ":""}

  ${({hasFullWidthForAsset:e})=>e&&"\n  .responsive-image__image {\n    width: 100%;\n  }\n"}

  ${({shouldEnableBackgroundImgForMobile:e})=>e&&`\n    @media (max-width: ${u.md}) {\n      &.responsive-asset {\n        display: block;\n      }\n    } \n  `}
`,S=a.div.withConfig({displayName:"PromoBoxCallout"})`
  position: relative;
  text-decoration: none;

  ${({theme:e,isCardVariation:t})=>t?`\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    ${n(e,"background-color","colors.discovery.body.brand.background")};\n    padding: ${s(2)} ${s(2)};\n    text-align: center;\n    text-decoration: none;\n\n    @media (min-width: ${u.md}) {\n      padding: ${s(6)} ${s(7)};\n    }\n  `:""}

  ${({contentAlign:e})=>"below"===e?`\n    margin-top: ${s(1)};\n\n    @media (min-width: ${u.md}) {\n      margin-top: ${s(5)};\n    }\n  `:""}

  ${({isInverted:e,theme:t})=>e&&`${n(t,"background-color","colors.discovery.body.black.background")}`}
`,C=a(i).withConfig({displayName:"PromoBoxText"})`
  margin-top: ${s(1)};
  text-align: center;

  ${({contentAlign:e,theme:t})=>"below"===e?`\n    ${l(t,"typography.definitions.discovery.description-core")}\n    ${n(t,"color","colors.discovery.body.white.description")};\n    margin-top: ${s(2)};\n  `:""}

  @media (min-width: ${u.md}) {
    margin-top: ${s(2)};
  }

  ${({isCardVariation:e,theme:t})=>e?`\n    ${l(t,"typography.definitions.discovery.description-core")}\n    ${n(t,"color","colors.discovery.body.brand.description")};\n    margin-top: ${s(2)};\n\n    @media (min-width: ${u.md}) {\n      margin-top: ${s(3)}\n    }\n  `:""}

  ${({isInvertedTheme:e,theme:t})=>e?`color: ${d(t,"colors.background.white")}}`:""}

  ${({isInverted:e,theme:t})=>e&&`color: ${d(t,"colors.background.white")};`}
`;C.defaultProps={as:"div",colorToken:"colors.discovery.body.black.description",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const f=a(i).withConfig({displayName:"PromoBoxTitle"})`
  margin-top: ${s(2)};
  text-align: center;

  ${({contentAlign:e,theme:t})=>"below"===e?`\n    margin-top: 0;\n    ${n(t,"color","colors.discovery.body.white.heading")};\n  `:""}

  @media (min-width: ${u.md}) {
    ${({theme:e})=>l(e,"typography.definitions.discovery.hed-break-out")}
  }

  ${({isCardVariation:e,theme:t})=>e?`\n      ${l(t,"typography.definitions.discovery.hed-core-primary")}\n      ${n(t,"color","colors.discovery.body.brand.heading")};\n      margin-top: 0;\n      width: 100%;\n\n      @media (min-width: ${u.md}) {\n        ${l(t,"typography.definitions.discovery.hed-feature")}\n        width: 100%;\n      }\n\n      @media (min-width: ${u.lg}) {\n        ${l(t,"typography.definitions.discovery.hed-break-out")}\n      }\n  `:""}
  ${({isInvertedTheme:e,theme:t})=>e?`color: ${d(t,"colors.background.white")}}`:""}

  ${({isInverted:e,theme:t})=>e&&`color: ${d(t,"colors.background.white")};`}
`;f.defaultProps={as:"span",colorToken:"colors.discovery.body.black.heading",typeIdentity:"typography.definitions.discovery.hed-core-primary"};const $=a(r).withConfig({displayName:"PromoBoxButtonContainer"})`
  display: flex;
  flex-direction: ${({secondaryButtonPosition:e})=>"inverted"===e?"column-reverse":"column"};
  align-items: center;
  justify-content: center;
`,v=a(h.Primary).withConfig({displayName:"PromoBoxButtonPrimary"})`
  margin-top: ${({isCardVariation:e})=>s(e?2:1)};

  @media (min-width: ${u.md}) {
    margin-top: ${({isCardVariation:e,secondaryButtonPosition:t})=>{s("inverted"===t?2:e?4:5)}};
  }

  ${({isInverted:e,theme:t})=>e&&`background-color: ${d(t,"colors.background.black")};\n    color: ${d(t,"colors.background.white")};\n    \n    &:hover {\n      background-color: ${d(t,"colors.background.white")};\n      color: ${d(t,"colors.background.black")};\n    }\n    `}
`,w=a.button.withConfig({displayName:"PromoBoxButtonSecondary"})`
  margin-top: ${({isCardVariation:e})=>s(e?2:1)};

  @media (min-width: ${u.md}) {
    margin-top: ${({isCardVariation:e,secondaryButtonPosition:t})=>{s("inverted"!==t?2:e?4:5)}};
  }
`,k=a.div.withConfig({displayName:"PromoBoxContent"})`
  ${({isCardVariation:e})=>e?`\n        && {\n          grid-column: 1/-1;\n          grid-row: 1;\n          z-index: 2;\n        }\n\n        ${p} {\n          grid-column: 1/-1;\n        }\n\n        @media (min-width: ${u.md}) {\n          ${p} {\n            grid-column: 3/11;\n          }\n        }\n      `:""}
`,T=a.div.withConfig({displayName:"PromoBoxCalloutContent"})`
  ${p} {
    grid-column: span 4;

    @media (min-width: ${u.md}) {
      grid-column: 3 / span 8;
    }
  }

  ${({isCardVariation:e})=>e?`\n        @media (min-width: ${u.md}) {\n          ${p} {\n            grid-column: span 12;\n          }\n        }\n      `:""}
`;e.exports={PromoBoxCallout:S,PromoBoxCalloutContent:T,PromoBoxText:C,PromoBoxTitle:f,PromoBoxButtonContainer:$,PromoBoxButtonPrimary:v,PromoBoxButtonSecondary:w,PromoBoxWrapper:y,PromoBoxResponsiveAsset:b,PromoBoxContent:k}},36873:(e,t,o)=>{const{asVariation:a}=o(95545),i=o(51188);i.TextBelow=a(i,"TextBelow",{contentAlign:"below",showCard:!1}),e.exports=i},53079:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(84632),{sizesFullName:n}=o(28657),s=o(22068),l=o(99956),{trackComponent:d}=o(40199),{SummaryItemFloatingIcon:m,SummaryItemImageIcon:c}=o(86726),u=o(5337),p=o(10931),g=o(36895),{SideBySideRatingsCardWrapper:h,ImageWrapper:y,Image:b,Label:S,Link:C,ContentWrapper:f,Content:$,Body:v,Hed:w,Dek:k,MetaData:T,Rating:I,SideBySideRatingsCardDate:x,SourceTagNameWrapper:B}=o(69741),E=({analyticsDataAttribute:e,contentType:t,dangerousHed:o,dangerousDek:a,date:l,hedTag:E,image:D,imageLabels:H,isAudioArticle:N,issueDate:P,rating:M,hasDekPaddingBottom:L,hideIssueDate:F,hideRubricItemSummary:A,hideSourceTagName:O,reviewsCount:_,rubric:R,shouldHideDekOnMobileView:V,shouldHidePublishDate:W,shouldHoldImageSpace:j,sourceTagName:U,url:G})=>{if(i.useEffect((()=>{d("SideBySideRatingsCard")}),[]),!G||!o)return null;const{medium:z}=n,q=V,K=D&&D.showImageWithoutLink,J=i.createElement(i.Fragment,null,i.createElement(b,Object.assign({},D,{shouldHoldImageSpace:j})),H&&H.length?H.map(((e,t)=>i.createElement(S,{key:t.toString()},e))):null);return i.createElement(h,Object.assign({},e),D&&i.createElement(y,{onClick:()=>{K&&(window.location=G)}},K?J:i.createElement(C,{href:G},J),N&&i.createElement(m,null,i.createElement(u,null)),"gallery"===t&&i.createElement(c,{ButtonIcon:()=>i.createElement(p,null),inputKind:"text",isIconButton:!0,label:"icon",position:"left"})),i.createElement(f,null,i.createElement($,{removePaddingOnMobileView:q,hasDekPaddingBottom:L},i.createElement(v,null,!A&&R&&i.createElement(g,{name:R.name}),!O&&U&&i.createElement(B,null,"Â ",`| From ${U}`),i.createElement(C,{href:G},i.createElement(w,{as:E,dangerouslySetInnerHTML:{__html:o}})),i.createElement(s,{lines:2,breakpoint:z},i.createElement(k,{dangerouslySetInnerHTML:{__html:a},shouldHideDekOnMobileView:V})),((e,t,o,a)=>{let r="";return!o&&a?r=a:!e&&t&&(r=t),r&&i.createElement(x,{dangerouslySetInnerHTML:{__html:r}})})(W,l,F,P))),M&&_?i.createElement(T,null,i.createElement(r,null),i.createElement(I,null,M," (",_,")")):null))};E.propTypes={analyticsDataAttribute:a.object,contentType:a.string,dangerousDek:a.string,dangerousHed:a.string.isRequired,date:a.string,hasDekPaddingBottom:a.bool,hedTag:a.string,hideIssueDate:a.bool,hideRubricItemSummary:a.bool,hideSourceTagName:a.bool,image:a.shape(l.propTypes),imageLabels:a.arrayOf(a.string),isAudioArticle:a.bool,issueDate:a.string,rating:a.number,reviewsCount:a.number,rubric:a.shape(g.propTypes),shouldHideDekOnMobileView:a.bool,shouldHidePublishDate:a.bool,shouldHoldImageSpace:a.bool,sourceTagName:a.string,url:a.string.isRequired},E.defaultProps={hasDekPaddingBottom:!0,hedTag:"h3",hideIssueDate:!0,hideRubricItemSummary:!1,isAudioArticle:!1,shouldHideDekOnMobileView:!1,shouldHidePublishDate:!0,shouldHoldImageSpace:!0},e.exports=E},17983:(e,t,o)=>{e.exports=o(53079)},69741:(e,t,o)=>{const{default:a}=o(51117),{BREAKPOINTS:i}=o(85326),{BaseText:r,BaseLink:n}=o(74327),{minScreen:s,calculateSpacing:l,getColorStyles:d,getDecoration:m}=o(79720),c=o(99956),u=a.div.withConfig({displayName:"SideBySideRatingsCardWrapper"})`
  display: flex;
  flex-direction: row;
`,p=a(n).withConfig({displayName:"Link"})``;p.defaultProps={colorToken:"colors.discovery.body.white.heading",linkStyle:"global"};const g=a.div.withConfig({displayName:"ImageWrapper"})`
  position: relative;
  width: 40%;

  ${s(i.md)} {
    width: 50%;
  }
`,h=a(c).withConfig({displayName:"Image"})`
  img {
    border-radius: ${({theme:e})=>m(e,"cardRadiusSm")};

    ${s(i.md)} {
      border-radius: ${({theme:e})=>m(e,"cardRadiusMd")};
    }

    ${s(i.lg)} {
      border-radius: ${({theme:e})=>m(e,"cardRadiusLg")};
    }
  }

  cursor: pointer;
`,y=a(r).withConfig({displayName:"Label"})`
  position: absolute;
  top: ${l(1)};
  left: ${l(1)};
  margin: 0 ${l(.5)} 0 0;
  border-radius: ${l(3)};
  padding: ${l(.5)} ${l(1)};

  ${({theme:e})=>d(e,"background","colors.discovery.body.brand.background")};

  ${s(i.md)} {
    margin: 0 ${l(1)} 0 0;
  }

  ${s(i.lg)} {
    top: ${l(2)};
    left: ${l(2)};
    padding: ${l(1)} ${l(2)};
  }
`;y.defaultProps={as:"div",colorToken:"colors.discovery.body.brand.heading",typeIdentity:"typography.definitions.globalEditorial.tags"};const b=a.div.withConfig({displayName:"ContentWrapper"})`
  border-radius: ${({theme:e})=>m(e,"cardRadiusSm")};
  padding: 0 0 0 ${l(2)};
  width: 60%;

  ${s(i.md)} {
    border-radius: ${({theme:e})=>m(e,"cardRadiusMd")};
    padding: 0 0 0 ${l(3)};
    width: 50%;
  }

  ${s(i.lg)} {
    border-radius: ${({theme:e})=>m(e,"cardRadiusLg")};
    padding: 0 0 0 ${l(4)};
  }
`,S=a.div.withConfig({displayName:"Content"})`
  ${({hasDekPaddingBottom:e,removePaddingOnMobileView:t})=>e?t?`\n        ${s(i.md)} {\n          padding: 0 0 ${l(2)};\n        }\n      `:`padding: 0 0 ${l(2)};`:"padding-bottom: 0;"}
`,C=a.div.withConfig({displayName:"Body"})``,f=a(r).withConfig({displayName:"Hed"})`
  margin: 0 0 ${l(1)};
`;f.defaultProps={as:"h3",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.hed-core-secondary"};const $=a(r).withConfig({displayName:"Dek"})`
  ${({shouldHideDekOnMobileView:e})=>e&&`\n   display: none;\n   \n    ${s(i.md)} {\n      display: block;\n    }\n  `}
`;$.defaultProps={as:"div",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.discovery.description-core"};const v=a.div.withConfig({displayName:"MetaData"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: ${l(4)};
`,w=a(r).withConfig({displayName:"Rating"})`
  margin: 0 ${l(1)};
`;w.defaultProps={as:"div",colorToken:"colors.discovery.body.white.accreditation",typeIdentity:"typography.definitions.globalEditorial.numerical-small"};const k=a(r).withConfig({displayName:"SideBySideRatingsSideBySideRatingsCardDate"})`
  display: block;
  align-self: center;
  margin-top: ${l(1)};
`;k.defaultProps={as:"time",colorToken:"colors.discovery.body.white.context-tertiary",typeIdentity:"typography.definitions.globalEditorial.context-tertiary"};const T=a(r).withConfig({displayName:"SourceTagNameWrapper"})`
  display: inline-block;
`;T.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.heading",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={SideBySideRatingsCardWrapper:u,Link:p,ImageWrapper:g,Image:h,Label:y,ContentWrapper:b,Content:S,Body:C,Hed:f,Dek:$,MetaData:v,Rating:w,SideBySideRatingsCardDate:k,SourceTagNameWrapper:T}},5947:(e,t,o)=>{const a=o(45697),i=o(67294),{trackComponent:r}=o(40199),{asConfiguredComponent:n}=o(36380),s=o(32168),{EmbedWrapper:l,EmbedWrapperHed:d,EmbedWrapperDek:m,EmbedBody:c,GridWrapper:u}=o(97893),p=({body:e,copilotId:t,dangerousDek:o,dangerousHed:a,gridVariationForEmbed:n,isEmbedWrapperFullBleed:p,sectionTitleVariation:g,shouldUseConstrainedParagraph:h,shouldUseGridForEmbed:y,shouldUseGridWrapperForEmbed:b})=>{i.useEffect((()=>{r("VersoEmbed")}),[]);const S=s[g],C=u[n],f=i.createElement(c,{constrainPagragraph:h,body:e,className:"verso-embed-container",shouldDisableMaxWidth:!0}),$=i.createElement(i.Fragment,null,a&&i.createElement(d,{as:S,dangerousHed:a}),o&&i.createElement(m,{dangerouslySetInnerHTML:{__html:o}}));return i.createElement(i.Fragment,null,b&&i.createElement(C,null,i.createElement(i.Fragment,null,$,f)),y&&i.createElement(l,{copilotId:t,isEmbedWrapperFullBleed:p},$,f),!y&&!b&&i.createElement(i.Fragment,null,$,f))};p.propTypes={body:a.array,copilotId:a.string,dangerousDek:a.string,dangerousHed:a.string,gridVariationForEmbed:a.string,isEmbedWrapperFullBleed:a.bool,sectionTitleVariation:a.string,shouldUseConstrainedParagraph:a.bool,shouldUseGridForEmbed:a.bool,shouldUseGridWrapperForEmbed:a.bool},p.defaultProps={gridVariationForEmbed:"NarrowContentWithWideAdRail",isEmbedWrapperFullBleed:!1,sectionTitleVariation:"LineAboveLineBelowTextCenter",shouldUseGridForEmbed:!0,shouldUseGridWrapperForEmbed:!1},p.displayName="VersoEmbed",e.exports=n(p,"VersoEmbed")},46098:(e,t,o)=>{e.exports=o(5947)},84291:(e,t,o)=>{const a=o(67294),i=o(45697),{connector:r}=o(92078),n=o(91902),s=o(93906),l=o(8902),d={commerceEvents:o(81845),packageBundle:s,directoryBundle:s,destinationBundle:l,podcastBundle:o(45953),versoUniversalBundle:o(22967)},{trackComponent:m}=o(40199),c=e=>{a.useEffect((()=>{m("BundlePage")}),[]);const{bundle:{namespace:t}}=e,o=d[t];return o&&"function"==typeof o?a.createElement(o,null):a.createElement(n,null)};c.propTypes={bundle:i.shape({namespace:i.string}).isRequired},e.exports=r(c,{keysToPluck:["bundle"]})},17626:(e,t,o)=>{e.exports=o(84291)},40270:(e,t,o)=>{const a=o(45697),i=o(67294),{connector:r}=o(92078),n=o(9855),s=o(8921),l=o(54617),d=o(88451),{PaymentGateway:m}=o(28576),c=o(4131),u=o(46647),{CommerceEventsPageWrapper:p,CommerceEventsHeader:g,CommerceEventsPageDisclaimer:h,CommerceEventsRCAPageDisclaimer:y}=o(47576),b=e=>{const{attributes:t,bundle:{affiliateDisclaimer:o,bundleBody:a,containers:r,dangerousBundleDek:b,isInvertedTheme:S,bundleTitle:C,hasProductLisitingCarousel:f,lede:$,rcaDisclaimer:v},showBackgroundGradientColor:w,className:k,fullPageTheme:T="standard",shouldUseBundleHeader:I,shouldUseCommerceEventsHeader:x,showBookmark:B,spacingAboveAd:E}=e;return i.createElement(p,Object.assign({},t,{fullPageTheme:S?"inverted":T,className:k,showBackgroundGradientColor:w,hasBaseAds:!0,isInverted:S}),B&&i.createElement(n,{analyticsType:"commerce-events-bundle"}),f&&i.createElement(h,{isInverted:S,disclaimerHtml:o}),x&&i.createElement(i.Fragment,null,i.createElement(g,{contentAlign:"center",isInverted:S},i.createElement("h1",null,C)),$&&i.createElement(d,{lede:$})),I&&i.createElement(d,{dangerousDek:b,hed:C,lede:$}),v&&i.createElement(y,{isInverted:S,disclaimerHtml:v}),a&&i.createElement(l,{body:a}),i.createElement(s,{containers:r,bundleProps:e,isInvertedTheme:S,hasStickyLinkBanner:!0}),i.createElement(m,{group:"ads"},i.createElement(c,{bottomSpacing:7,topSpacing:E},i.createElement(u,{position:"footer",shouldHoldSpace:!0}))))};b.propTypes={attributes:a.object,bundle:a.shape({affiliateDisclaimer:a.string,containers:a.arrayOf(a.object),dangerousBundleDek:a.string,isInvertedTheme:a.bool,bundleBody:a.array,bundleTitle:a.string,hasProductLisitingCarousel:a.bool,lede:a.object,rcaDisclaimer:a.string}).isRequired,className:a.string,featureFlags:a.object,fullPageTheme:a.oneOf(["standard","inverted"]),shouldUseBundleHeader:a.bool,shouldUseCommerceEventsHeader:a.bool,showBackgroundGradientColor:a.bool,showBookmark:a.bool,spacingAboveAd:a.number},b.defaultProps={shouldUseBundleHeader:!1,shouldUseCommerceEventsHeader:!0,showBookmark:!1},b.displayName="CommerceEventsBundlePage",e.exports=r(b,{keysToPluck:["bundle","featureFlags"]})},81845:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(40270);e.exports=a(i,"CommerceEventsBundlePage")},47576:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i,getColorStyles:r,getColorToken:n,getTypographyStyles:s,minScreen:l}=o(79720),{getPattern:d}=o(7595),{BREAKPOINTS:m}=o(85326),c=o(20886),{asConfiguredComponent:u}=o(36380),{Disclaimer:p}=o(5626),g=o(69756),{MultiPackageContainer:h}=o(42041),{FireworkEmbedContainer:y}=o(33481),{SectionTitleHed:b}=o(80577),S=a(c).withConfig({displayName:"CommerceEventsPageWrapper"})`
  ${({showBackgroundGradientColor:e,theme:t})=>e&&d(t,"page-background")};

  ${({showBackgroundGradientColor:e})=>e&&"\n      position: static;\n  "};

  ${({shouldHidePadding:e})=>!e&&`\n      padding-top: ${i(8)};\n      @media (min-width: ${m.lg}) {\n        padding-top: ${i(21)}\n      }\n  `};

  ${h} {
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: center;

    > * {
      width: 100%;
    }

    ${y} {
      ${b} {
        ${({isInverted:e,theme:t})=>e?`color: ${n(t,"colors.background.brand")};\n              ${s(t,"typography.definitions.discovery.page-hed-section")} `:""}
      }
    }
  }
  ${({hasBackground:e,theme:t})=>e&&t&&d(t,"page-background")}
  .promo-box {
    border-top: none;
  }
`,C=a(g).withConfig({displayName:"CommerceEventsHeader"})`
  ${({isInverted:e,theme:t})=>e&&`\n    background: ${n(t,"colors.background.black")};\n    border-color: ${n(t,"colors.background.black")};\n    `}

  h1 {
    ${({theme:e})=>s(e,"typography.definitions.utility.assistive-text")}
    ${({isInverted:e,theme:t})=>e&&`\n      color: ${n(t,"colors.consumption.body.inverted.accent")};                \n    `}
  }
`,f=a(u(p.TextCenterNoTopRule,"Disclaimer")).withConfig({displayName:"CommerceEventsPageDisclaimer"})`
  grid-column: 1 / -1;
  justify-content: center;
  font-style: italic;
  ${({isInverted:e,theme:t})=>e&&`background: ${n(t,"colors.consumption.lead.inverted.background")};`}
  p {
    padding: 0 ${i(2)};
    line-height: 1.125rem;
    ${({isInverted:e,theme:t})=>e&&`color: ${n(t,"colors.consumption.lead.inverted.link")};`}
    ${s("typography.definitions.globalEditorial.context-secondary")};
  }

  ${l(m.md)} {
    grid-column: 3 / span 8;
  }
`,$=a(f).withConfig({displayName:"CommerceEventsRCAPageDisclaimer"})`
  ${({theme:e})=>`${r(e,"background","colors.discovery.body.light.background")};\n  `}

  p {
    ${s("typography.definitions.consumptionEditorial.citation")};
    font-style: italic;
  }
`;e.exports={CommerceEventsPageWrapper:S,CommerceEventsHeader:C,CommerceEventsPageDisclaimer:f,CommerceEventsRCAPageDisclaimer:$}},56542:(e,t,o)=>{const a=o(94184),i=o(67294),r=o(45697),{connector:n}=o(92078),s=o(20886),{DestinationBundleBodyWrapper:l}=o(48785),d=o(8921),m=o(32803),c=o(54617),u=o(88451),p=o(46647),{PaymentGateway:g}=o(28576),h=o(9855),{trackComponent:y}=o(40199),b=e=>{i.useEffect((()=>{y("DestinationBundlePage")}),[]);const{attributes:t,bundle:{bundleBody:o,bundleTitle:r,containers:n,hierarchy:b,headerPosition:S,isDestinationBundle:C,lede:f,shouldEnableBodyReadMore:$},className:v,headerType:w,shouldDecorateHeader:k,shouldOverrideTypeToken:T,showBookmark:I,showHeaderOnTop:x}=e,B=b?b[b.length-1].name:"";return i.createElement(s,Object.assign({},t,{className:a("destination-bundle-page",v),hasBaseAds:!0}),I&&i.createElement(h,{analyticsType:"destination-bundle"}),b&&i.createElement(m,{hierarchy:b}),i.createElement(u,{headerPosition:S,headerType:w,hed:r,isDestinationBundle:C,lede:f,shouldDecorateHeader:k,shouldOverrideTypeToken:T,showHeaderOnTop:x}),i.createElement(l,{shouldOverrideTypeToken:T},o&&i.createElement(c,{body:o,isCollapsible:$})),i.createElement(d,{containers:n,bundleProps:e,lowestHierarchy:B}),i.createElement(g,{group:"ads"},i.createElement(p,{position:"footer",shouldHoldSpace:!0})))};b.propTypes={attributes:r.object,bundle:r.object,className:r.string,featureFlags:r.object,headerType:r.string,shouldDecorateHeader:r.bool,shouldOverrideTypeToken:r.bool,showBookmark:r.bool,showHeaderOnTop:r.bool},b.defaultProps={headerType:"full-bleed-header",shouldDecorateHeader:!0,shouldOverrideTypeToken:!1,showBookmark:!1,showHeaderOnTop:!1},b.displayName="DestinationBundlePage",e.exports=n(b,{keysToPluck:["bundle","featureFlags"]})},8902:(e,t,o)=>{const a=o(56542),{asConfiguredComponent:i}=o(36380);e.exports=i(a,"DestinationBundlePage")},48785:(e,t,o)=>{const a=o(51117).default,{calculateSpacing:i,getTypographyStyles:r,getColorToken:n}=o(79720),{BREAKPOINTS:s}=o(85326),{BundleBodyContainer:l}=o(34240),d=a.div.withConfig({displayName:"DestinationBundleBodyWrapper"})`
  background-color: ${({theme:e})=>n(e,"colors.background.light")};
  padding-bottom: ${i(4)};

  .article__body {
    margin-bottom: 0;
  }

  .aricle__body div > p {
    margin-bottom: 0;
  }

  ${l} {
    color: ${({theme:e})=>n(e,"colors.consumption.body.standard.body")};
    ${({theme:e,shouldOverrideTypeToken:t})=>r(e,t?"typography.definitions.consumptionEditorial.subhed-aux-secondary":"typography.definitions.consumptionEditorial.description-core")}
  }

  ${l}

  p:first-child {
    margin-bottom: 0;
    padding-top: ${i(4)};

    @media (min-width: ${s.md}) {
      padding-top: ${i(5)};
    }
  }

  .button__icon-container {
    padding-left: ${i(.6)};
  }

  .button__label {
    ${({theme:e})=>r(e,"typography.definitions.utility.button-bulletin")};
  }
`;e.exports={DestinationBundleBodyWrapper:d}},20835:function(e,t,o){var a=this&&this.__rest||function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(o[a[i]]=e[a[i]])}return o};const i=o(18446),r=o(45697),n=o(67294),{default:s}=o(45698),l=o(6811),{shouldRenderNothing:d}=o(28052),{connectDomain:m}=o(92078),c=m("payment"),u=m("featureFlags"),p=o(4131),g=o(7046),{getInterludePosition:h,reviewStrategies:y}=o(7086),b=o(46647),S=o(86982),{PaymentGateway:C}=o(28576),f=o(58878),$=o(85086),v=o(56851),{HomepageChannelBody:w,HomepageSummaryListAside:k}=o(47909),T=new s({a:function(e){const{isExternal:t}=e,o=a(e,["isExternal"]);return{type:t?v:"a",props:o}},h2:function(e={}){return"sidebar:heading"===e.type?{type:f,props:e.props}:e},"inline-embed":$,blockquote:({props:e})=>({type:S,props:e})});function I(e){const t=e[0],o=e[1]||{},a="inline-embed"===t&&"callout:feature-large"===o.type,i="inline-embed"===t&&"callout:feature-medium"===o.type;return a||i||"ad"===t}function x(e,t){return`${e}-${t}`}class B{constructor({GeneralContentWrapper:e=(()=>null),FullBleedContentWrapper:t=(()=>null),RailContent:o=(()=>null),payment:a,featureFlags:i,interlude:r,shouldUsePaddingTopForHomePageBody:n}){this.interludeProps=r,this.interludePosition=(null==r?void 0:r.strategy)&&h(r,y),this.GeneralContentWrapper=e,this.FullBleedContentWrapper=t,this.shouldUsePaddingTopForHomePageBody=n,this.RailContent=o,this.chunkCount=0,this.shouldRenderMidContent=!d("ads",a,i)}closeSmallGroup(e,t,o){let a=t;if(e.length>0){++this.chunkCount;const i=this.GeneralContentWrapper;a=[...t,n.createElement(i,{shouldUsePaddingTopForHomePageBody:this.shouldUsePaddingTopForHomePageBody,key:x("small-group",o)},n.createElement(w,{className:"body__container article__body",shouldEnableDataJourneyHook:!1},T.convert(["div",{className:"body__inner-container"},...e])),n.createElement(k,null,n.createElement(g,null,this.RailContent(this.chunkCount))))]}return a}wrapInFullSizeContainer(e,t,o){const a=this.FullBleedContentWrapper;return[...t,n.createElement(a,{key:x("full",o)},n.createElement(w,{className:"channel--body body__container",shouldEnableDataJourneyHook:!1},T.convert(e)))]}visit(e){const t=function(e){return function(e){return Array.isArray(e)&&"string"==typeof e[0]}(e)&&e[1]&&"object"==typeof e[1]&&!Array.isArray(e[1])?e.slice(2):e.slice(1)}(e);let o=[],a=[];return this.isSingleChunk=!t.some((e=>"ad"===e[0])),this.finalAdSet=!1,t.forEach(((e,t)=>{const[i]=e;if("ad"===i?this.shouldRenderMidContent&&(o=this.closeSmallGroup(a,o,t),a=[],o=[...o,n.createElement(p,{className:"full-bleed-ad row-mid-content-ad",key:x("ad",t)},n.createElement(C,{group:"ads"},n.createElement(b,{position:"mid-content",shouldDisplayLabel:!0,shouldHoldSpace:!0})))]):I(e)?(o=this.closeSmallGroup(a,o,t),a=[],o=this.wrapInFullSizeContainer(e,o,t)):a=[...a,e],this.interludePosition===t)if(I(e)||"ad"===i)o=[...o,n.createElement(l,Object.assign({},this.interludeProps,{isRightRail:!1}))];else{const e=(({brand:e,interludeOverrideId:t,playerBase:o,isRailEligible:a,isTitleLinkDisabled:i})=>["inline-embed",{type:"cneinterlude",props:{brand:e,interludeOverrideId:t,playerBase:o,isRailEligible:a,isRightRail:!1,isTitleLinkDisabled:i}}])(Object.assign(Object.assign({},this.interludeProps),{isRightRail:!1}));a=[...a,e]}})),o=this.closeSmallGroup(a,o,"final"),this.finalAdSet=!0,o}}const E=({FullBleedContentWrapper:e,GeneralContentWrapper:t,RailContent:o,jsonml:a,payment:i,featureFlags:r,interlude:n,shouldUsePaddingTopForHomePageBody:s})=>new B({FullBleedContentWrapper:e,GeneralContentWrapper:t,RailContent:o,jsonml:a,payment:i,featureFlags:r,interlude:n,shouldUsePaddingTopForHomePageBody:s}).visit(a);E.propTypes={className:r.string,featureFlags:r.object,FullBleedContentWrapper:r.oneOfType([r.func,r.object]),GeneralContentWrapper:r.oneOfType([r.func,r.object]),interlude:r.object,jsonml:r.array.isRequired,payment:r.object,RailContent:r.func},e.exports=n.memo(c(u(E)),i),e.exports.Chunks=E},50521:(e,t,o)=>{const a=o(94184),i=o(45697),r=o(67294),n=o(9370),s=o(46647),l=o(15565),{connector:d}=o(92078),m=o(4131),{PaymentGateway:c}=o(28576),u=o(32803),p=o(8921),g=o(33570),h=o(48655),y=o(61784),b=o(85622),S=o(20835),C=o(42820),f=o(26291),{trackComponent:$}=o(40199),{HomepageWrapper:v,HomepageHiddenContent:w,HomepageHeader:k,HomepageSubHeader:T,HomepageBodyWrapperGrid:I,HomePageGridNarrowContentWithWideAdRail:x,HomePageDisclaimerWrapper:B,HomePageDisclaimer:E,HomePageDisclaimerBorder:D,HomepageBundleBody:H,HomepageSectionTitle:N}=o(47909),P=o(88451),M=o(54617),L=e=>{r.useEffect((()=>{$("HomePage")}),[]);const{attributes:t,bundle:{bundleBody:o,contributors:i,dangerousBundleDek:d,bundleTitle:L,containers:F,hideAffiliateDisclaimer:A,hierarchy:O,homepagePromoUnitOrder:_=[],isSubChannel:R,paginatedPage:V,publishDate:W,sponsoredContentHeaderProps:j,shouldEnableSubNavigation:U,shouldUseContentHeader:G,showDisclaimer:z,isSponsored:q,lede:K,seoHiddenHeader:J,showBreadCrumb:Q,hasProductLisitingCarousel:Z,hasGridFourColumnsLayout:X,headerChipLinks:Y,footerChipLinks:ee,dangerousMoreBeautyText:te},backgroundColorSettingForNewsletter:oe,channelItems:{list:ae=null,searchUrl:ie=""}={},channelFilter:re=null,channelItemsTotal:ne=null,className:se,isPaddingRequired:le,dispatch:de,featureFlags:{hideHomepageHeader:me,excludedParams:ce,showBundleBodyOnChannels:ue,shouldRemoveBackgroundColor:pe},hasBackground:ge=!1,hasFullBleedBackground:he=!1,hasReducedMargin:ye=!1,headerIcon:be=null,tickerMarginTopType:Se="small",hideErrorTextPadding:Ce=!1,hasVersoFeaturesReducedMargin:fe=!1,isNewsletterDisclaimerCenterAligned:$e=!1,shouldHideSidePadding:ve=!1,fullPageTheme:we="standard",navigation:{subchannelLinks:ke,hasChannelNavigation:Te},shouldCenterBundleBodyContent:Ie,shouldHidePadding:xe,shouldHidePaddingBottom:Be=!1,shouldShowChannelFilter:Ee=!1,shouldShowFooterAdPadding:De=!1,shouldUseSectionTitle:He=!1,showBundleBody:Ne=!1,showSearchFilter:Pe=!1,hasDisclaimerBackground:Me=!0,hasDisclaimerBorderBottom:Le=!1,hasHomePageDisclaimerDisabled:Fe=!1,showSubChannelHed:Ae=!1,spacingAboveAd:Oe,shouldUseBundleHeader:_e=!1,shouldOverrideColorToken:Re=!1,hasTopStory:Ve=!1,hasEvenSpacing:We=!1,shouldHideAds:je=!1}=e;let Ue=se;Ue=le&&Ue?Ue.replace("ad--mid-content","ad--mid-content-with-padding"):se;const Ge=F.filter((e=>_.indexOf(e.template)<0)),ze=Ge.find((e=>"verso-river"===e.template)),qe=h.NarrowContentWithWideAdRail;if(ze&&(ae&&ae.length?ze.items=ae:ze.noChannelItems=!0,ie&&(ze.searchUrl=ie),ne&&(ze.totalResults=ne),re&&(ze.filter=re)),ce&&"undefined"!=typeof URLSearchParams){const e=new URLSearchParams(window.location.search);ce.forEach((t=>e.delete(t)));const t=""!==e.toString()?`${window.location.pathname}?${e.toString()}`:window.location.pathname;window.history.replaceState({},document.title,t)}const Ke=L||d;de({type:"SET_KEY",key:"isHomepage",value:!0});const Je=Ie?I:x;return r.createElement(v,Object.assign({},t,{className:a("homepage",Ue),additionalNavigation:Te?r.createElement(l,null):null,fullPageTheme:we,hasBackground:ge,hasFullBleedBackground:he,hasBaseAds:!0,hideHeader:Te||Ve,hideErrorTextPadding:Ce,isNewsletterDisclaimerCenterAligned:$e,shouldHideSidePadding:ve,shouldHidePadding:xe||Ve,shouldOverrideColorToken:Re,backgroundColorSettingForNewsletter:oe,shouldHidePaddingBottom:Be,shouldShowFooterAdPadding:De,isHeroAdVisible:!Ve,hasEvenSpacing:We,shouldHideAds:je,shouldScrollToTopStory:Ve}),q&&r.createElement(y,Object.assign({},j,{className:"light-theme"})),O&&O.length>1&&Q&&r.createElement(u,{hierarchy:O,shouldRemoveBackgroundColor:pe,shouldUseContentHeaderColorForLink:G}),J&&r.createElement(w,null,J),!me&&Ke&&!G&&(_e&&!K||!_e)&&r.createElement(k,{dangerousHed:L,subHed:Ae&&R?null:d,lede:K,toggleChipsWithLink:Y,shouldEnableSubNavigation:U,type:"header"}),!me&&Ke&&G&&!_e&&r.createElement(C,{contributors:i,dangerousHed:L,dangerousDek:d,publishDate:W,showBreadCrumb:Q}),_e&&Ke&&!G&&K&&r.createElement(P,{contributors:i,dangerousDek:d,hed:L,lede:K}),He&&Ke&&!G&&!_e&&r.createElement(N,{dangerousHed:L,dangerousDek:d,image:be,hasDividerAbove:!1,isFeatured:!0,shouldUseAlternateHedColor:!0}),Ne&&o&&r.createElement(H,null,r.createElement(M,{body:o})),Z&&!(A||Fe)&&r.createElement(B,{hasGridFourColumnsLayout:X,hasDisclaimerBackground:Me},r.createElement(E,null),Le&&r.createElement(D,null)),ue&&1===V&&o&&r.createElement(S,{FullBleedContentWrapper:Je,GeneralContentWrapper:Je,shouldUsePaddingTopForHomePageBody:G,RailContent:()=>r.createElement(c,{group:"ads"},r.createElement(s,{position:"rail"})),jsonml:o}),(null==ke?void 0:ke.length)>0&&r.createElement(f,{links:ke,hasBorders:!0,isCentered:!0,isSlim:!0}),R&&Ae&&!me&&Ke&&!G&&r.createElement(T,{showSubChannelHed:Ae,dangerousHed:L,subHed:d,lede:K,toggleChipsWithLink:Y,"data-testid":"HomepageSubHeader",type:"header"}),Pe&&r.createElement(b,{url:ie}),Ee&&r.createElement(g.Inverted,{storyCount:ne||0}),r.createElement(p,{containers:Ge,bundleProps:e,hasVersoFeaturesReducedMargin:fe,tickerMarginTopType:Se,hasReducedMargin:ye,hasEvenSpacingMultiPackageRow:We}),ee&&ee.length>0&&r.createElement(k,{dangerousHed:te,hasMinimalVerticalPadding:!0,toggleChipsWithLink:ee,className:"footer-toggle-chip-links",type:"footer",hedTag:"h2"}),z&&r.createElement(n,{ContentWrapper:qe}),!je&&r.createElement(c,{group:"ads"},r.createElement(m,{bottomSpacing:7,topSpacing:Oe},r.createElement(s,{position:"footer",shouldHoldSpace:!0}))))};L.propTypes={attributes:i.object,backgroundColorSettingForNewsletter:i.string,bundle:i.shape({bundleBody:i.array,bundleTitle:i.string,containers:i.arrayOf(i.object),contributors:i.object,dangerousBundleDek:i.string,hideAffiliateDisclaimer:i.bool,hierarchy:i.array,homepagePromoUnitOrder:i.arrayOf(i.string),paginatedPage:i.number,seoHiddenHeader:i.string,showBreadCrumb:i.bool,showDisclaimer:i.bool,shouldEnableSubNavigation:i.bool,shouldUseContentHeader:i.bool,sponsoredContentHeaderProps:i.object,isSubChannel:i.bool,isSponsored:i.bool,lede:i.object,hasProductLisitingCarousel:i.bool,hasGridFourColumnsLayout:i.bool,headerChipLinks:i.array,footerChipLinks:i.array,dangerousMoreBeautyText:i.string,publishDate:i.string,hasTopStory:i.bool}).isRequired,bundleTitle:i.string,channelFilter:i.string,channelItems:i.shape({list:i.array,searchUrl:i.string}),channelItemsTotal:i.number,className:i.string,dangerousBundleDek:i.string,dispatch:i.func,featureFlags:i.object,fullPageTheme:i.oneOf(["standard","inverted"]),hasBackground:i.bool,hasDisclaimerBackground:i.bool,hasDisclaimerBorderBottom:i.bool,hasEvenSpacing:i.bool,hasFullBleedBackground:i.bool,hasHomePageDisclaimerDisabled:i.bool,hasReducedMargin:i.bool,hasTopStory:i.bool,hasVersoFeaturesReducedMargin:i.bool,headerIcon:i.object,hideErrorTextPadding:i.bool,isNewsletterDisclaimerCenterAligned:i.bool,isPaddingRequired:i.bool,lede:i.object,navigation:i.shape({subchannelLinks:i.arrayOf(i.object),hasChannelNavigation:i.bool}).isRequired,newsletter:i.object,shouldCenterBundleBodyContent:i.bool,shouldHideAds:i.bool,shouldHidePadding:i.bool,shouldHidePaddingBottom:i.bool,shouldHideSidePadding:i.bool,shouldOverrideColorToken:i.bool,shouldShowChannelFilter:i.bool,shouldShowFooterAdPadding:i.bool,shouldUseBundleHeader:i.bool,shouldUseSectionTitle:i.bool,showBundleBody:i.bool,showSearchFilter:i.bool,showSubChannelHed:i.bool,spacingAboveAd:i.number,tickerMarginTopType:i.oneOf(["small","none","large"])},L.displayName="HomePage",e.exports=d(L,{keysToPluck:["bundle","channelFilter","channelItems","channelItemsTotal","featureFlags","navigation","newsletter","hasTopStory"]})},91902:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(50521);e.exports=a(i,"HomePage")},34565:(e,t,o)=>{const a=o(67294),i=o(45697),{connector:r}=o(92078),n=o(8921),s=o(54617),l=o(88451),d=o(15565),m=o(46647),{PaymentGateway:c}=o(28576),{PackageBundlePageWrapper:u,PackageBundlePageSubchannelNavigation:p}=o(64789),{trackComponent:g}=o(40199),h=e=>{a.useEffect((()=>{g("PackageBundlePage")}),[]);const{attributes:t,bundle:{containers:o,dangerousBundleDek:i,directoryCategories:r,bundleTitle:h,lede:y,bundleBody:b,isDirectoryBundle:S},navigation:{hasChannelNavigation:C,subchannelLinks:f},className:$}=e;return a.createElement(u,Object.assign({},t,{additionalNavigation:C?a.createElement(d,null):null,className:$,hasBaseAds:!0}),a.createElement(l,{dangerousDek:i,hed:h,lede:y,isDirectoryBundle:S,directoryCategories:r}),(null==f?void 0:f.length)>0&&a.createElement(p,{links:f,hasBorders:!0,isCentered:!0,isSlim:!0}),S&&a.createElement(c,{group:"ads"},a.createElement(m,{position:"mid-content",shouldHoldSpace:!0,shouldDisplayLabel:!0})),b&&a.createElement(s,{body:b}),a.createElement(n,{containers:o,bundleProps:e,hasStickyLinkBanner:!0}),a.createElement(c,{group:"ads"},a.createElement(m,{position:"footer",shouldHoldSpace:!0})))};h.propTypes={attributes:i.object,bundle:i.object,className:i.string,featureFlags:i.object,navigation:i.shape({hasChannelNavigation:i.bool,subchannelLinks:i.arrayOf(i.object)})},e.exports=r(h,{keysToPluck:["bundle","featureFlags","newsletter","navigation"]})},93906:(e,t,o)=>{e.exports=o(34565)},64789:(e,t,o)=>{const a=o(51117).default,{BREAKPOINTS:i}=o(85326),{calculateSpacing:r,minScreen:n}=o(79720),{SummaryCollectionGridSectionTitle:s}=o(84105),l=o(20886),d=o(26291),{getPattern:m}=o(7595),{RubricLink:c}=o(7320),{maxThresholds:u}=o(28657),{NewsletterSubscribeFormWrapper:p}=o(42793),g=a(l).withConfig({displayName:"PackageBundlePageWrapper"})`
  ${s} {
    margin-top: ${r(2)};
  }

  ${n(i.md)} {
    ${s} {
      margin-top: 0;
    }
  }
  ${({theme:e})=>m(e,"page-background")}

  ${p} {
    grid-column: -1 / 1;
    margin-top: ${r(5)};
    margin-bottom: ${r(5)};

    ${n(i.lg)} {
      grid-column: 3 / span 8;
    }
  }

  .package-bundle-page__collection-grid-item {
    @media (max-width: ${u.md}px) {
      .summary-item__image-link {
        margin-bottom: auto;
      }
    }

    .summary-item__content {
      @media (max-width: ${u.md}px) {
        margin-bottom: auto;
        line-height: 0;

        .summary-item__dek {
          display: none;
        }
      }

      ${n(i.md)} {
        .summary-item__rubric {
          padding-top: ${r(2)};
        }
      }

      ${c} {
        &:link,
        &:visited {
          text-decoration: none;
        }

        &:active,
        &:focus,
        &:hover {
          text-decoration: underline;
        }
      }

      .summary-item__hed {
        margin-bottom: 0;
      }

      .summary-item__byline-date-icon {
        margin-top: ${r(1)};
      }
    }
  }
`,h=a(d).withConfig({displayName:"PackageBundlePageSubchannelNavigation"})`
  margin-bottom: ${r(2)};

  li {
    margin-bottom: 0;
  }
`;e.exports={PackageBundlePageWrapper:g,PackageBundlePageSubchannelNavigation:h}},97929:(e,t,o)=>{const a=o(67294),{useIntl:i}=o(76186),r=o(45697),{default:n}=o(45698),{connector:s}=o(92078),l=o(46647),{PaymentGateway:d}=o(28576),m=o(4131),{trackComponent:c}=o(40199),u=o(8921),p=o(36125),g=o(86982),h=o(85086),{processLinks:y,processSidebarHeadings:b}=o(54436),S=o(83074).Z,{PodcastDetailPageWrapper:C,PodcastDetailBodyWrapperGrid:f,PodcastDetailChannelBody:$,PodcastRecircContextualHeader:v,PodcastDetailPageRecircItem:w,PodcastDetailPageGrid:k,PodcastDetailPageRecircWrapper:T,DekWrapper:I,PodcastDetailContentHeader:x,DekClamp:B,Dek:E}=o(91547),D=new n({a:y,h2:b,"inline-embed":h,blockquote:({props:e})=>({type:g,props:e})}),H=e=>{a.useEffect((()=>{c("PodcastDetailedPage")}),[]);const{formatMessage:t}=i(),{attributes:o,bundle:{id:r,bundleBody:n,dangerousBundleDek:s,bundleTitle:g,containers:h,bundleRubric:y,lede:b,paginatedPage:H,podcastPagePrimaryCta:N,podcastPagePrimaryCtaLabel:P,podcastContentHeaderTheme:M},fullPageTheme:L="standard",contentHeaderVariation:F,spacingAboveAd:A}=e;let O,_,R={};h.forEach((e=>{"verso-features"===e.template?_=e:"verso-river"===e.template?O=e:"verso-podcast-recirc"===e.template&&(R=e)}));const V=R.items&&R.items.length?R.items[0]:"",W=p[F]||p,j=a.createElement(E,{dangerouslySetInnerHTML:{__html:s}});return a.createElement(C,Object.assign({},o,{fullPageTheme:L,hasBaseAds:!0,hasFooterAd:!1,podcastContentHeaderTheme:M}),1===H&&a.createElement(a.Fragment,null,a.createElement(x,{as:W,lede:b,rubric:y,dangerousHed:g,podcastPagePrimaryCta:N,podcastPagePrimaryCtaLabel:P,externalLinks:null==_?void 0:_.items,theme:M,publishDate:""}),a.createElement(I,null,a.createElement(B,{lines:4,isCollapsible:!0,breakpoint:"xxxl"},j)),n&&a.createElement(f,{key:`podcast-detail${r}`},a.createElement($,{className:"body__container article__body"},D.convert([...n]))),a.createElement(d,{group:"ads"},a.createElement(m,{bottomSpacing:7,topSpacing:A},a.createElement(l,{position:"mid-content",shouldDisplayLabel:!0,shouldHoldSpace:!0}))),V&&a.createElement(k,null,a.createElement(T,null,a.createElement(v,null,t(S.contextualHeader)),a.createElement(w,{dangerousDek:V.dangerousDek,dangerousHed:V.dangerousHed,rubric:V.rubric,image:V.image,hasBorder:!1,url:V.url,contextualHeader:t(S.contextualHeader)})))),O&&O.items.length>0&&a.createElement(a.Fragment,null,a.createElement(k,null,a.createElement(u,{containers:[O],bundleProps:e,hasVersoFeaturesReducedMargin:!1,hasReducedMargin:!1}))),a.createElement(d,{group:"ads"},a.createElement(m,{bottomSpacing:7,topSpacing:7},a.createElement(l,{position:"footer",shouldHoldSpace:!0}))))};H.propTypes={attributes:r.object,bundle:r.shape({id:r.string,bundleBody:r.array,bundleTitle:r.string,bundleRubric:r.object,containers:r.arrayOf(r.object),dangerousBundleDek:r.string,lede:r.object,paginatedPage:r.number,podcastPagePrimaryCta:r.string,podcastPagePrimaryCtaLabel:r.string,podcastContentHeaderTheme:r.string}).isRequired,contentHeaderVariation:r.string,fullPageTheme:r.oneOf(["standard","inverted"]),spacingAboveAd:r.number,theme:r.string},H.defaultProps={contentHeaderVariation:"PodcastContentHeader",theme:"standard"},e.exports=s(H,{keysToPluck:["bundle","featureFlags"]})},45953:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(97929);e.exports=a(i,"PodcastDetailedPage")},91547:(e,t,o)=>{const{default:a,css:i}=o(51117),{calculateSpacing:r,minScreen:n,maxScreen:s,getColorToken:l,getTypographyStyles:d}=o(79720),m=o(94753),{getPattern:c}=o(7595),{BREAKPOINTS:u}=o(85326),{BasePageMainContent:p}=o(90079),g=o(22068),h=o(20886),{BaseText:y}=o(73049),{maxThresholds:b}=o(28657),S=o(94806),C=o(44031),{SummaryListWrapper:f}=o(41849),{SummaryRiverSection:$,SummaryRiverTitleWrapper:v}=o(3183),{SummaryItemHedLink:w,SummaryItemAssetContainer:k,SummaryItemContent:T,SummaryItemContextualHeader:I,SummaryItemRubric:x}=o(88269),{SummaryItemImageLink:B}=o(86726),{SummaryItemCTAPodcastWrapper:E}=o(21739),{SummaryItemHedBase:D}=o(27853),{universalGridCore:H}=o(61774),{applyGridSpacing:N}=o(62470),P=o(48655),{GridItem:M}=o(14134),{ContentHeaderAccreditation:L}=o(19658),{PodcastContentHeaderDivider:F}=o(32279),{RubricName:A}=o(7320),O=a(m).withConfig({displayName:"PodcastDetailChannelBody"})`
  grid-column: 1/-1;
  margin-bottom: 1rem;

  ${n(u.md)} {
    grid-column: 3 / span 8;
  }
`,_=a("div").withConfig({displayName:"PodcastDetailContentHeader"})``,R=a("div").withConfig({displayName:"PodcastDetailBodyWrapperGrid"})`
  ${H()}
  ${N("padding")}
    padding-bottom: ${r(2)};
`,V=a("div").withConfig({displayName:"DekWrapper"})`
  ${H()}
  ${N("padding")}
  padding-top:${r(5)};

  > * {
    grid-column: 1 / -1;
    margin-top: ${r(2)};
    margin-bottom: ${r(2)};
  }

  a,
  a:not(.button):link {
    color: ${l("colors.consumption.body.standard.link")};
  }

  a:not(.button):hover {
    color: ${l("colors.consumption.lead.standard.link-hover")};
  }
`,W=a(g).withConfig({displayName:"DekClamp"})`
  ${({breakpoint:e})=>e&&i`
      ${n(u[e])} {
        button {
          display: none;
        }
      }
      @media (min-width: ${u.lg}) {
        grid-column: 3 / span 8;
      }
      text-align: center;
      ${s(`${b.md}px`)} {
        width: 100%;
      }
    `}
`,j=a("div").withConfig({displayName:"Dek"})``,U=a(h).withConfig({displayName:"PodcastDetailPageWrapper"})`
  ${({podcastContentHeaderTheme:e})=>"inverted"===e&&i`
      ${L} {
        padding-top: ${r(1.5)};
      }
      ${F} {
        display: none;
      }
    `}
  ${({theme:e})=>c(e,"main-background")}
  .ad__slot--hero .cns-ads-stage {
    ${({shouldHidePaddingBottom:e})=>!e&&"padding-bottom: 0;"}
  }
  ${p} {
    &::before {
      display: block;
      ${({shouldHidePadding:e})=>!e&&`height: ${r(1,"px")};`}
      content: '';
    }
  }

  .ad-container.ad-container-reduced-margin {
    .ad--mid-content {
      @media (min-width: ${u.md}) {
        margin-bottom: ${r(2)};
        padding: 0 0 0 0;
      }
    }
  }

  .ad-container {
    .ad--mid-content {
      @media (min-width: ${u.md}) {
        margin-bottom: ${r(2)};
        padding: 0 0 0 0;
      }
    }
  }

  .ad-container.ad-container-reduced-margin {
    .ad--mid-content-with-padding {
      @media (min-width: ${u.md}) {
        padding: 0 0 ${r(2)} 0;
      }
    }
  }

  .cns-ads-slot-type-footer {
    padding: 0;
  }
  ${({hasBackground:e,theme:t})=>e&&t&&c(t,"page-background")}
`,G=a("div").withConfig({displayName:"PodcastDetailPageRecircWrapper"})`
  --grid-margin: ${r(6)};
  padding-top: calc(1 * var(--grid-margin));
  padding-right: calc(1 * var(--grid-margin));
  padding-left: calc(1 * var(--grid-margin));

  ${E} {
    @media (max-width: calc(${u.md} - 1px)) {
      display: grid;
    }

    a {
      max-width: ${r(25)};
      @media (max-width: calc(${u.md} - 1px)) {
        grid-column: 3/5;
        max-width: ${r(22.5)};
      }
    }
  }

  ${k} {
    align-self: baseline;
    max-width: 100%;
    @media (max-width: calc(${u.md} - 1px)) {
      display: grid;
    }
  }

  ${B} {
    @media (max-width: calc(${u.md} - 1px)) {
      grid-column: 3/5;
      width: ${r(19.375)};
      height: ${r(19.375)};
    }
  }

  ${T} {
    padding: 0;
    @media (max-width: calc(${u.md} - 1px)) {
      text-align: center;
    }

    ${A} {
      color: ${l("colors.discovery.body.white.context-signature")};
      ${({theme:e})=>d(e,"typography.definitions.globalEditorial.context-primary")};
    }
  }
  ${I} {
    @media (max-width: calc(${u.md} - 1px)) {
      display: none;
    }
  }
  ${x} {
    @media (max-width: calc(${u.md} - 1px)) {
      margin-bottom: ${r(.5)};
      padding-top: ${r(2.5)};
      max-width: 100%;
    }
  }
`,z=a(C.PodcastRecirc).withConfig({displayName:"PodcastDetailPageRecircItem"})`
  ${w} {
    &::after {
      border-bottom: 0;
    }
  }
  > ${M} {
    grid-column: 1 / -1;
    @media (min-width: ${u.lg}) {
      grid-column: 3 / span 8;
    }
  }
`,q=a(S).withConfig({displayName:"PodcastDetailPageSummaryRiver"})`
  .grid {
    row-gap: 0.25rem;
  }
  ${n(u.lg)} {
    .grid {
      row-gap: 0.75rem;
    }
    ${$}:first-child ${f}::before {
      grid-column: 1/-5;
    }
    && ${f} {
      .grid-layout__content {
        grid-column: 1/-4;
      }
    }
    ${f} {
      grid-template-columns: repeat(12, 1fr);

      .summary-item--layout-placement-side-by-side-desktop-only {
        grid-template-columns: repeat(9, 1fr);

        .summary-item__content {
          grid-column: 4/-1;
        }

        .summary-item__asset-container {
          grid-column: 1/-7;
          align-self: baseline;
        }
      }
    }
    ${w} {
      ${D} {
        ${({theme:e})=>d(e,"typography.definitions.discovery.hed-core-primary")};
      }
    }
    ${v} {
      ${N("padding")};
      margin-bottom: 0;
      padding: ${r(8)} ${r(6)}
        ${r(8)} ${r(6)};
    }
  }
`,K=a(P.NoMargins).withConfig({displayName:"PodcastDetailPageGrid"})`
  > ${M} {
    grid-column: 1 / -1;
    @media (min-width: ${u.lg}) {
      grid-column: 3 / span 8;
    }
    @media (max-width: ${u.lg}) {
      margin-top: ${r(4)};
    }
  }
`,J=a(y).withConfig({displayName:"PodcastRecircContextualHeader"})`
  padding-bottom: ${r(2.5)};
  text-align: center;
  @media (min-width: ${u.md}) {
    display: none;
  }
`;J.defaultProps={as:"div",colorToken:"colors.discovery.body.white.description",typeIdentity:"typography.definitions.globalEditorial.context-primary"},e.exports={PodcastDetailPageWrapper:U,PodcastDetailBodyWrapperGrid:R,PodcastDetailChannelBody:O,PodcastDetailContentHeader:_,PodcastRecircContextualHeader:J,PodcastDetailPageRecircWrapper:G,PodcastDetailPageSummaryRiver:q,PodcastDetailPageRecircItem:z,PodcastDetailPageGrid:K,DekWrapper:V,Dek:j,DekClamp:W}},55832:(e,t,o)=>{const a=o(67294),i=o(45697),{connector:r}=o(92078),n=o(8921),s=o(46647),{PaymentGateway:l}=o(28576),{UniversalBundlePageWrapper:d}=o(40415),{componentsMapper:m}=o(20466),{trackComponent:c}=o(40199),u=e=>{a.useEffect((()=>{c("UniversalBundlePage")}),[]);const{attributes:t,bundle:o,bundle:{containers:i},navigation:r,className:u,universalLayout:p}=e,g=(m[p]||m.default).header;return a.createElement(d,Object.assign({},t,{className:u,hasBaseAds:!0}),(h=g)&&"function"==typeof h&&a.createElement(g,{bundle:o,navigation:r}),a.createElement(n,{containers:i,bundleProps:e,hasStickyLinkBanner:!0}),a.createElement(l,{group:"ads"},a.createElement(s,{position:"footer",shouldHoldSpace:!0})));var h};u.propTypes={attributes:i.object,bundle:i.object,className:i.string,featureFlags:i.object,navigation:i.shape({subchannelLinks:i.arrayOf(i.object)}),universalLayout:i.string},u.defaultProps={universalLayout:"default"},e.exports=r(u,{keysToPluck:["bundle","featureFlags","newsletter","navigation","universalLayout"]})},20466:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.componentsMapper=void 0;const a=o(6170),i=o(22986);t.componentsMapper={default:{header:a},"tentpole-events":{header:i}}},22967:(e,t,o)=>{const{asConfiguredComponent:a}=o(36380),i=o(55832);e.exports=a(i,"UniversalBundlePage")},40415:(e,t,o)=>{const a=o(51117).default,i=o(20886),{MultiPackageContainer:r}=o(42041),{getPattern:n}=o(7595),{createMultipackageContainerStyles:s}=o(61774),l=a(i).withConfig({displayName:"UniversalBundlePageWrapper"})`
  ${({theme:e})=>n(e,"page-background")};
  ${s(r)}
`;e.exports={UniversalBundlePageWrapper:l}},6170:(e,t,o)=>{const a=o(67294),i=o(45697),r=o(54617),n=o(26291),{HomepageHeader:s}=o(47909),{HomePageDisclaimerWrapper:l,HomePageDisclaimer:d}=o(47909),{trackComponent:m}=o(40199),c=e=>{a.useEffect((()=>{m("DefaultHeader")}),[]);const{bundle:{dangerousBundleDek:t,bundleTitle:o,lede:i,bundleBody:c,hasProductLisitingCarousel:u,hideAffiliateDisclaimer:p,headerChipLinks:g,shouldEnableSubNavigation:h,shouldEnableLede:y},navigation:{subchannelLinks:b}}=e;return a.createElement(a.Fragment,null,a.createElement(s,{dangerousHed:o,subHed:t,lede:i,toggleChipsWithLink:g,shouldEnableSubNavigation:h,shouldEnableLede:y,type:"header"}),c&&a.createElement(r,{body:c}),u&&!p&&a.createElement(l,null,a.createElement(d,null)),(null==b?void 0:b.length)>0&&a.createElement(n,{links:b,hasBorders:!0,isCentered:!0,isSlim:!0}))};c.propTypes={bundle:i.object,navigation:i.shape({subchannelLinks:i.arrayOf(i.object)})},e.exports=c},22986:(e,t,o)=>{const a=o(45697),i=o(67294),r=o(54617),{HomePageDisclaimerWrapper:n,HomePageDisclaimer:s}=o(47909),{trackComponent:l}=o(40199),{TentpoleHeaderHed:d,TentpoleHeaderGrid:m,TentpoleHeaderGridCol:c,TentpoleHeaderSection:u,TentpoleHeaderDekText:p,TentpoleHeaderWrapper:g}=o(15109),h=e=>{const{bundle:{bundleBody:t,dangerousBundleDek:o,bundleTitle:a,isHiddenDisclaimer:h,lede:y}}=e;return i.useEffect((()=>{l("TentpoleHeader")}),[]),i.createElement(g,null,y&&i.createElement(u,{lede:y,captionWidth:"fullbleed",hideLedeCaption:!0}),i.createElement(m,null,i.createElement(c,null,a&&i.createElement(d,{dangerouslySetInnerHTML:{__html:a}}),o&&i.createElement(p,{dangerouslySetInnerHTML:{__html:o}}),!h&&i.createElement(n,null,i.createElement(s,null)))),t&&i.createElement(r,{body:t}))};h.propTypes={bundle:a.object},h.displayName="TentpoleHeader",e.exports=h},15109:(e,t,o)=>{const{default:a}=o(51117),{calculateSpacing:i,minScreen:r}=o(79720),{BREAKPOINTS:n}=o(85326),{applyGridSpacing:s,cssVariablesGrid:l}=o(62470),{BaseText:d}=o(74327),m=o(32554),c=a.div.withConfig({displayName:"TentpoleHeaderWrapper"})`
  margin-bottom: ${i(4)};
`,u=a.header.withConfig({displayName:"TentpoleHeaderGrid"})`
  ${l()}

  display: grid;
  grid-column: 1;
  grid-row: 1;
  grid-template-columns: repeat(4, 1fr);
  ${r(n.lg)} {
    grid-template-columns: repeat(12, 1fr);
  }
  column-gap: var(--grid-gap);
  z-index: 1;
  width: 100%;
  row-gap: var(--grid-gap);
  ${s("padding")};
`,p=a.div.withConfig({displayName:"TentpoleHeaderGridCol"})`
  grid-column: 1 / -1;
  text-align: center;
  ${r(n.lg)} {
    grid-column: 4 / -4;
  }
`,g=a(m).withConfig({displayName:"TentpoleHeaderSection"})``,h=a(d).withConfig({displayName:"TentpoleHeaderHed"})`
  margin-top: ${i(4)};
  margin-bottom: ${i(4)};
`;h.defaultProps={as:"h1",colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.discovery.page-hed-section"};const y=a(d).withConfig({displayName:"TentpoleHeaderDekText"})`
  margin-bottom: ${i(1)};
`;y.defaultProps={colorToken:"colors.consumption.body.standard.body",typeIdentity:"typography.definitions.discovery.description-page"},e.exports={TentpoleHeaderWrapper:c,TentpoleHeaderHed:h,TentpoleHeaderGrid:u,TentpoleHeaderGridCol:p,TentpoleHeaderSection:g,TentpoleHeaderDekText:y}},8638:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isValidCategory=t.checkFilterApplied=t.flatCategoryList=t.checkAndMapFilterParamValue=t.mapTypeCategoryAndValue=t.convertStringAsSlug=t.queryParamsForPagination=t.convertQueryParamToApiParam=t.extractCommerceProductKeyfromIdentifier=t.isCommerceProduct=void 0;const a=["Type"],i=["type","color","brand"],r=["type","color","brand","sort"],{parseQueryParams:n}=o(57208);t.isCommerceProduct=e=>!(!e.metadata||"contentreference"!==e.metadata.contentType||"commerce-tools"!==e.provider),t.extractCommerceProductKeyfromIdentifier=e=>{const[t,...o]=e.identifier.split(":");return o.join(":")},t.convertQueryParamToApiParam=e=>{if(!e)return"";const t=e.split("&"),o=[];return t.forEach((e=>{const[t,a]=e.split("=");if(i.includes(t)){const e=decodeURIComponent(a).replace(/ /g,"+").split("+");o.push(`${t}::${e.join()}`)}})),o.join("|")},t.queryParamsForPagination=e=>{if(!e)return"";const t=e.replace("?","").split("&"),o=[];let a="",r="";return t.forEach((e=>{const[t,n]=e.split("=");if(i.includes(t)){const e=decodeURIComponent(n).replace(/ /g,"+");o.push(`${t}=${e}`)}else"sort"===t?a=decodeURIComponent(n):"page"===t&&(r=n)})),{queryString:o.join("&"),sort:a,page:r}},t.convertStringAsSlug=e=>e.toLowerCase().replace(/[^\w ]+/g,"").replace(/ +/g,"-"),t.mapTypeCategoryAndValue=({key:e,value:o},a)=>{const i=a.find((t=>t.label.toLowerCase()===e.toLowerCase())),r=i&&i.children.filter((e=>o.includes((0,t.convertStringAsSlug)(e.label)))).map((e=>e.value));return{key:(null==i?void 0:i.value)||e,value:r}},t.checkAndMapFilterParamValue=(e,o,r="")=>{const n=e.replace("?","").split("&"),s=[];return n.forEach((e=>{const[n,l]=e.split("="),d=(l?decodeURIComponent(l).replace(/ /g,"+"):"").split("+"),m=a.map((e=>e.toLowerCase()));if(d&&n&&m.includes(n.toLowerCase())){if("type"===r){const e=o.filter((e=>d.includes((0,t.convertStringAsSlug)(e.label)))).map((e=>e.value));e.length&&s.push(`categoryId::${e.join()}`)}}else n&&i.includes(n)&&s.push(`${n}::${d.join()}`)})),s.join("|")},t.flatCategoryList=e=>{let o=[];return e.map((e=>(e.children&&e.children.length&&(o=[...o,...e.children]),e))).concat(o.length?(0,t.flatCategoryList)(o):o)},t.checkFilterApplied=e=>{if(!e)return!1;const t=n(e);return r.find((e=>e in t))},t.isValidCategory=(e,t,o)=>!(t.key.startsWith("gpc-")||o&&o.id===e||t.id!==e)},4848:function(e,t,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=a(o(17626));(0,a(o(72010)).default)(i.default)}},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={id:e,loaded:!1,exports:{}};return a[e].call(o.exports,o,o.exports,r),o.loaded=!0,o.exports}r.m=a,e=[],r.O=(t,o,a,i)=>{if(!o){var n=1/0;for(m=0;m<e.length;m++){for(var[o,a,i]=e[m],s=!0,l=0;l<o.length;l++)(!1&i||n>=i)&&Object.keys(r.O).every((e=>r.O[e](o[l])))?o.splice(l--,1):(s=!1,i<n&&(n=i));if(s){e.splice(m--,1);var d=a();void 0!==d&&(t=d)}}return t}i=i||0;for(var m=e.length;m>0&&e[m-1][2]>i;m--)e[m]=e[m-1];e[m]=[o,a,i]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,a){if(1&a&&(e=this(e)),8&a)return e;if("object"==typeof e&&e){if(4&a&&e.__esModule)return e;if(16&a&&"function"==typeof e.then)return e}var i=Object.create(null);r.r(i);var n={};t=t||[null,o({}),o([]),o(o)];for(var s=2&a&&e;"object"==typeof s&&!~t.indexOf(s);s=o(s))Object.getOwnPropertyNames(s).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,r.d(i,n),i},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e={2037:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var a,i,[n,s,l]=o,d=0;if(n.some((t=>0!==e[t]))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(l)var m=l(r)}for(t&&t(o);d<n.length;d++)i=n[d],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(m)},o=globalThis.webpackChunkverso=globalThis.webpackChunkverso||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})(),r.nc=void 0;var n=r.O(void 0,[6716,2241,2409,4735,5565,4334,8801,4806,6128,2041,2315,3528,9626,37,1751,5135,6604,443],(()=>r(4848)));n=r.O(n)})();