(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[3528],{76559:(e,i,t)=>{const a=t(67294),o=t(41609),l=t(45697),{useIntl:r}=t(76186),{calculateSpacing:n}=t(79720),{getSlots:s}=t(86972),d=t(67924),c=t(41334),m=t(32168),{Disclaimer:g}=t(5626),u=t(85650),{trackComponent:p}=t(40199),{componentTracking:h,googleAnalytics:C}=t(28601),{CarouselWrapper:b,ChipWrapper:y,EditorCard:$,EditorDescription:f,EditorDetails:T,EditorName:E,EditorResponsiveAsset:S,EditorsPicksCarousel:D,EditorTitle:k,FilterableSummaryListDynamicGridItemLayout:v,FilterableSummaryListGrid:w,FilterableSummaryListWrapper:P,FilterableSummaryListGridFullBleed:N,TitleWrapper:A,TitleToggleChipListWrapper:x}=t(78153),{ArticleGalleryCarouselBtnWrapper:B,ArticleGalleryCarouselButton:L}=t(28642),G=t(12102).Z,M={spacing:{sm:n(1.5),xl:n(2)},width:{sm:"60%",lg:"27%",xl:`calc(24% - ${n(1.5)})`,xxl:`calc(21% - ${n(1.5)})`}},I=({affiliateDisclaimer:e,buttonConfig:i,children:t,className:l,carouselControlTheme:n,controlButtonIcon:I,controlPlacement:F,controlPosition:H,dangerousDek:U,dangerousHed:W,defaultToggleChipTitle:O,editor:R,isPimCollectionContainer:z,hasBorderBottom:j,hasGridBottomPadding:V,hasCarouselSliderPagination:q,hasControls:K,hasCustomMargin:Z,hasCustomSlider:_,hasImpressionTracking:J,hasModerateSpacingOnCarousel:Q,hasModerateSpacingOnMobile:X,hasNavigationButtonVariation:Y,hasNoHorizontalScrollCarousel:ee,paginationStyle:ie,hasPadding:te,hasPagination:ae,hasProductDisclaimerAlternativeStyle:oe,hasTitleMarginTop:le,hasTitleNoMargin:re,hasToggleGridColor:ne,hasHigherHorizontalPadding:se,sectionTitleVariation:de,selectedToggleChipTitle:ce,shouldAppendFilterInUrl:me,shouldChipsRedirectOnClick:ge,shouldDisplaySingleSlot:ue,shouldHideMarginOnCarousel:pe,shouldHideMarginUnderDek:he,shouldNotDisplayAllLabel:Ce,shouldEnableBundleComponentAnalytics:be,shouldEnableProductDisclaimer:ye,shouldShowDangerousDek:$e,shouldUseInteractiveBrandColor:fe,hasDisclaimerPlpSlug:Te,shouldUseAlternativeTitleStyle:Ee,hasCarouselControl:Se,toggleChipRole:De,trackingNamespace:ke,isDotClickable:ve,layout:we,pos:Pe,gridConfig:Ne,isEditorsPicksCarousel:Ae,shouldAffiliateDisclaimerPlpEnable:xe,isPlpCurated:Be,hideDesktopPagination:Le,isUpcEnabled:Ge})=>{a.useEffect((()=>{p("FilterableSummaryList")}),[]);const{formatMessage:Me}=r(),{slots:Ie,urlData:Fe}=s(t),He=Object.keys(Ie),[Ue,We]=a.useState(He),[Oe,Re]=a.useState(Ue[0]),[ze,je]=a.useState(O),Ve=W||U,qe=(null==ke?void 0:ke.toggle)||W,Ke=(null==ke?void 0:ke.card)||W;if(0===Ue.length)return null;const Ze=Ue.length>1||ue,_e=i.hasCtaLink?Me(G.atArticleGalleryCarouselBtnTextWithCtaLink,{categoryName:i.name}):Me(G.atArticleGalleryCarouselBtnText,{categoryName:i.name}),{isDynamicGridItemLayout:Je,shouldDisplayDenseGrid:Qe}=Ne||{},Xe=()=>a.Children.map(Ie[Oe].props.children,((e,i)=>{const t=h.addDataSectionTitleAttribute(be,`${Ke}/${Oe}/`,i,!1),o=a.cloneElement(e,{analyticsDataAttribute:t});return a.createElement("div",null,o)})),Ye=()=>a.createElement(b,null,a.createElement(g.TextCenterNoTopRule,{isEnabled:ye&&!Te&&Se,hasHigherHorizontalPadding:se,hasProductDisclaimerAlternativeStyle:oe,disclaimerHtml:e}),a.createElement(u,{hideDesktopPagination:Le,hasControls:K,hasNavigationButtonVariation:Y,hasPagination:ae,controlButtonIcon:Y?"ArrowIcon":I,shouldHideMarginOnCarousel:pe,hasModerateSpacingOnCarousel:Q,controlPlacement:F,controlPosition:H,isDotClickable:ve,hasPadding:te,hasNoHorizontalScrollCarousel:ee,hasImpressionTracking:J,paginationStyle:q&&"slider"===ie?ie:"bullet",isPlpCurated:Be,hasCustomSlider:q&&_,dangerousHed:Ve,pos:Pe,carouselControlTheme:n},a.Children.map(Ie[Oe].props.children,((e,i)=>{const t=h.addDataSectionTitleAttribute(be,`${Ke}/${Oe}/`,i,!1),o=a.cloneElement(e,{analyticsDataAttribute:t}),l=`${Ve}/${Oe}`;return a.createElement(u.CarouselItem,Object.assign({},be,M,{key:`${Oe}-${i}`,carouselTitle:l,carouselItemIndex:i,carouselItemName:e.props.dangerousHed,pos:Pe,isUpcEnabled:Ge}),o)}))),i.showButton&&i.url&&a.createElement(B,null,a.createElement("div",{className:"more-products"},a.createElement(L,{className:"article-gallery__more-button",label:_e,btnStyle:"outlined",ariaLabel:_e,href:i.hasCtaLink?i.url:`/products/shop${i.url}`,inputKind:"link"}))));return a.useEffect((()=>{var e;{const i=decodeURIComponent(null===(e=null===window||void 0===window?void 0:window.location)||void 0===e?void 0:e.hash),t=Ue.findIndex((e=>`#${e.toLowerCase()}`===i.toLowerCase()));Re(Ue[t>=0?t:0])}}),[Ue]),a.createElement(P,{className:l,hasToggleGridColor:ne,hasPadding:te,hasBorderBottom:j},a.createElement(x,{hasDangerousDek:$e&&U,hasCustomMargin:Z,shouldUseAlternativeTitleStyle:Ee,shouldUseInteractiveBrandColor:fe},Ve&&a.createElement(A,{className:"section-title",hasPadding:te,hasTitleMarginTop:le,as:m[de],dangerousHed:W,dangerousDek:U,hasTitleNoMargin:re,affiliateDisclaimer:e,shouldAffiliateDisclaimerPlpEnable:xe,shouldHideMarginUnderDek:he,hasHigherHorizontalPadding:se,hasProductDisclaimerAlternativeStyle:oe}),z&&a.createElement(g.TextCenterNoTopRule,{isEnabled:ye,disclaimerHtml:e}),Ze&&a.createElement(y,{className:"clip-list",hasToggleGridColor:ne,hasPadding:te,hasModerateSpacingOnMobile:X},a.createElement(c,{contentAlign:"center",layout:"nowrap",hasToggleGridColor:ne,label:ze},Ue.map(((e,i)=>{const t=h.addDataSectionTitleAttribute(be,`${qe}/${e}`),o=e===Oe;return Ce&&"All"===e?null:a.createElement(d,{index:i,analyticsDataAttribute:t,key:e,isChecked:o,hasToggleGridColor:ne,onChange:i=>((e,i)=>{var t;Re(i),ue&&(e.detail.checked?(We([i]),ce&&je(ce)):(Re(He[0]),We(He),je(O))),t=i,C.emitUniqueGoogleTrackingEvent("toggle-click",{clickText:t,clickType:"body"})})(i,e),isAnchorUrl:me,redirectUrl:Fe[i],shouldUrlRedirect:ge,shouldDisplaySingleChip:ue,role:De},e)}))))),Ae&&!o(R)?a.createElement(D,null,a.createElement($,null,R.editorPhoto&&a.createElement(S,Object.assign({},R.editorPhoto)),a.createElement(T,null,a.createElement(E,null,R.name),a.createElement(k,null,R.title)),a.createElement(f,null,R.editorNote)),Ye()):function(){switch(we){case"GridFourColumns":return Je?a.createElement(v,{shouldDisplayDenseGrid:Qe,hasGridBottomPadding:V,isUpcEnabled:Ge},Xe()):a.createElement(w,{isUpcEnabled:Ge},Xe());case"FullBleed":return a.createElement("div",null,Xe());case"FullBleedSideBySideContent":return a.createElement(N,null,Xe());default:return Ye()}}())};I.propTypes={affiliateDisclaimer:l.string,buttonConfig:l.object,carouselControlTheme:l.string,children:l.node.isRequired,className:l.string,controlButtonIcon:l.oneOf(["ChevronIcon","ArrowIcon"]),controlPlacement:l.oneOf(["right","space-between"]),controlPosition:l.oneOf(["top","bottom","center"]),dangerousDek:l.string,dangerousHed:l.string,defaultToggleChipTitle:l.string,editor:l.object,gridConfig:l.object,hasBorderBottom:l.bool,hasCarouselControl:l.bool,hasCarouselSliderPagination:l.bool,hasControls:l.bool,hasCustomMargin:l.bool,hasCustomSlider:l.bool,hasDisclaimerPlpSlug:l.bool,hasGridBottomPadding:l.bool,hasHigherHorizontalPadding:l.bool,hasImpressionTracking:l.bool,hasModerateSpacingOnCarousel:l.bool,hasModerateSpacingOnMobile:l.bool,hasNavigationButtonVariation:l.bool,hasNoHorizontalScrollCarousel:l.bool,hasPadding:l.bool,hasPagination:l.bool,hasProductDisclaimerAlternativeStyle:l.bool,hasTitleMarginTop:l.bool,hasTitleNoMargin:l.bool,hasToggleGridColor:l.bool,hideDesktopPagination:l.bool,isDotClickable:l.bool,isEditorsPicksCarousel:l.bool,isPimCollectionContainer:l.bool,isPlpCurated:l.bool,isUpcEnabled:l.bool,layout:l.string,paginationStyle:l.string,pos:l.number,sectionTitleVariation:l.string,selectedToggleChipTitle:l.string,shouldAffiliateDisclaimerPlpEnable:l.bool,shouldAppendFilterInUrl:l.bool,shouldChipsRedirectOnClick:l.bool,shouldDisplaySingleSlot:l.bool,shouldEnableBundleComponentAnalytics:l.bool,shouldEnableProductDisclaimer:l.bool,shouldHideMarginOnCarousel:l.bool,shouldHideMarginUnderDek:l.bool,shouldNotDisplayAllLabel:l.bool,shouldShowDangerousDek:l.bool,shouldUseAlternativeTitleStyle:l.bool,shouldUseInteractiveBrandColor:l.bool,toggleChipRole:l.string,trackingNamespace:l.shape({toggle:l.string,card:l.string})},I.displayName="FilterableSummaryList",I.defaultProps={buttonConfig:{name:"",showButton:!1,url:""},carouselControlTheme:"",controlButtonIcon:"ChevronIcon",controlPlacement:"space-between",controlPosition:"center",hasControls:!0,hasCustomMargin:!1,hasDisclaimerPlpSlug:!1,hasHigherHorizontalPadding:!1,hasImpressionTracking:!1,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hasTitleMarginTop:!1,isDotClickable:!1,isEditorsPicksCarousel:!1,shouldAppendFilterInUrl:!0,shouldChipsRedirectOnClick:!1,shouldDisplaySingleSlot:!1,shouldEnableBundleComponentAnalytics:!1,shouldEnableProductDisclaimer:!1,shouldNotDisplayAllLabel:!1,shouldUseAlternativeTitleStyle:!1,shouldUseInteractiveBrandColor:!1},I.displayName="FilterableSummaryList",e.exports=I},33528:(e,i,t)=>{const{asConfiguredComponent:a}=t(36380),o=t(76559);e.exports=a(o,"FilterableSummaryList")},78153:(e,i,t)=>{const{css:a,default:o}=t(51117),{calculateSpacing:l,minScreen:r,maxScreen:n,minMaxScreen:s,getColorToken:d,getTypographyStyles:c,getColorStyles:m}=t(79720),{SectionTitleDivider:g}=t(80577),{CarouselControlButton:u,CarouselList:p,CarouselWrapper:h}=t(95764),C=t(48655),{BREAKPOINTS:b}=t(85326),y=t(99956),{ToggleButton:$}=t(27e3),{SummaryItemContent:f}=t(88269),{SummaryItemHedBase:T}=t(27853),E=o(C.EvenFour).withConfig({displayName:"FilterableSummaryListGrid"})`
  &.grid-even.grid-items-4 {
    ${r(b.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &&& {
    ${({isUpcEnabled:e})=>e&&`\n      ${s(0,b.md)} {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        \n          padding-right: ${l(2)};\n          padding-left: ${l(2)};\n          column-gap: ${l(1)};\n        \n      }\n      \n        padding-right: ${l(3)};\n        padding-left: ${l(3)};\n        column-gap: ${l(2)};\n      \n    `}
  }

  &.grid-even {
    ${s(0,b.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${l(3)};
      padding-left: ${l(3)};
    }
    padding-right: ${l(4)};
    padding-left: ${l(4)};
  }

  &.grid {
    row-gap: ${l(6)};
  }
`,S=o(C.EvenFour).withConfig({displayName:"FilterableSummaryListGridFullBleed"})`
  &.grid-even.grid-items-4 {
    ${s(0,b.md)} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      padding-top: ${l(3)};
      padding-right: ${l(1)};
      padding-left: ${l(1)};
    }
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: ${l(3)};
    padding-left: 0;
    row-gap: ${l(4)};
  }
`,D=o(C.DynamicGridItemLayout).withConfig({displayName:"FilterableSummaryListDynamicGridItemLayout"})`
  &.grid-even.grid-items-4 {
    ${r(b.md)} {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  &&& {
    ${({isUpcEnabled:e})=>e&&`\n      ${s(0,b.md)} {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        \n          padding-right: ${l(2)};\n          padding-left: ${l(2)};\n          column-gap: ${l(1)};\n        \n      }\n      \n        padding-right: ${l(3)};\n        padding-left: ${l(3)};\n        column-gap: ${l(2)};\n      \n    `}
  }

  &.grid-even {
    ${s(0,b.md)} {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-right: ${l(3)};
      padding-left: ${l(3)};
    }
    padding-right: ${l(4)};
    padding-left: ${l(4)};
  }

  &.grid {
    row-gap: ${l(6)};
    ${({shouldDisplayDenseGrid:e=!0})=>!e&&"grid-auto-flow:row;"}

    ${({hasGridBottomPadding:e=!1})=>e&&`padding-bottom:${l(8)};`}
  }
`,k=o.section.withConfig({displayName:"FilterableSummaryListWrapper"})`
  ${({theme:e,hasBorderBottom:i})=>i&&`border-bottom: 1px solid ${d(e,"colors.consumption.lead.standard.divider")};`}

  ${({hasPadding:e,hasToggleGridColor:i})=>e&&!i?`padding: ${l(4)} 0 ${l(4)};`:""}
`,v=o.div.withConfig({displayName:"TitleToggleChipListWrapper"})`
  ${g} {
    ${({hasDangerousDek:e,hasCustomMargin:i})=>!e&&i?`margin-bottom: ${l(0)};`:`margin-bottom: ${l(5)};`}
  }
  ${({shouldUseAlternativeTitleStyle:e})=>e&&a`
      .section-title {
        margin: 0;
        border-top: none;
        padding-top: 0;

        @media (max-width: ${b.md}) {
          h2 {
            text-align: center;
          }
        }
      }

      @media (max-width: ${b.md}) {
        .list-wrapper {
          overflow-y: hidden;
          overflow-x: scroll;

          &::-webkit-scrollbar {
            display: none;
          }
        }
      }

      @media (min-width: ${b.md}) {
        ${m("border-color","colors.consumption.lead.standard.context-signature")};

        display: flex;
        align-items: center;
        border-top: 2px solid;
        gap: 2rem;

        .clip-list {
          margin: 0;

          .list-wrapper {
            padding: 0;
            gap: ${l(3)};

            button {
              border-radius: 0;
              background: none;
              padding: 0.2rem 0;
              font-size: 13px;
              font-weight: bold;

              &[aria-checked='false'] {
                ${m("color","colors.interactive.base.border")};
              }

              &[aria-checked='true'] {
                ${m("color","colors.interactive.base.black")};
                border-bottom: 1px solid;
              }

              &:hover,
              &:focus {
                box-shadow: none;
              }
            }
          }
        }
      }
    `}

  ${$} {
    ${({shouldUseInteractiveBrandColor:e})=>e&&a`
        &[aria-checked='false'] {
          ${e?m("background-color","colors.interactive.base.brand-secondary"):m("color","colors.interactive.base.black")};
        }
      `}
  }
`,w=o.div.withConfig({displayName:"TitleWrapper"})`
  ${({hasTitleMarginTop:e})=>{const i=l(4);return`margin: ${e?i:"0"} 0 ${i} 0;`}}

  ${({shouldHideMarginUnderDek:e})=>e&&"margin-bottom: 0;"};
  ${({hasPadding:e})=>e&&`padding-left: ${l(3)};\n    padding-right:  ${l(3)};\n   `}
  ${({hasTitleNoMargin:e})=>e&&"margin: 0;"}
`,P=o.div.withConfig({displayName:"ChipWrapper"})`
  ${({hasToggleGridColor:e})=>e?`padding-bottom: ${l(4)};`:`margin: ${l(4)} 0 0 0;`}
  ${n(b.md)} {
    ${({hasModerateSpacingOnMobile:e})=>e&&`margin: ${l(2)} 0 0 0;`}
  }
`,N=o.div.withConfig({displayName:"CarouselWrapper"})`
  ${u} {
    margin-top: 1rem;

    &:disabled {
      display: none;
    }
  }

  ${p} {
    ${n(b.md)} {
      scroll-padding: ${l(3)};
    }
  }

  ${f} {
    ${T} {
      @media (max-width: ${b.md}) {
        ${({theme:e})=>c(e,"typography.definitions.discovery.hed-core-secondary")};
      }
    }
  }
`,A=o.section.withConfig({displayName:"EditorsPicksCarousel"})`
  display: grid;
  grid-template-columns: 100%;
  margin-top: ${l(4)};
  overflow-x: hidden;
  @media (min-width: ${b.lg}) {
    grid-column-gap: ${l(4)};
    grid-template-columns: calc(20% - ${l(4)}) 80%;
    ${h} {
      margin-top: 0;
    }
  }
  ${p} {
    margin: 0;
  }
`,x=o.div.withConfig({displayName:"EditorCard"})`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  @media (min-width: ${b.lg}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
    margin: ${l(4)} 0;
  }
`,B=o(y).withConfig({displayName:"EditorResponsiveAsset"})`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`,L=o.div.withConfig({displayName:"EditorDetails"})`
  margin-left: ${l(1)};
  @media (min-width: ${b.lg}) {
    grid-column: 1;
    margin: ${l(1)} 0 0;
  }
`,G=o.div.withConfig({displayName:"EditorName"})`
  ${({theme:e})=>c(e,"typography.definitions.consumptionEditorial.subhed-aux-secondary")};
`,M=o.div.withConfig({displayName:"EditorTitle"})`
  ${({theme:e})=>c(e,"typography.definitions.globalEditorial.accreditation-feature")};
`,I=o.div.withConfig({displayName:"EditorDescription"})`
  grid-column: 1 / span 2;
  margin-top: ${l(1.5)};
  ${({theme:e})=>c(e,"typography.definitions.consumptionEditorial.description-embed")}
  @media (min-width: ${b.lg}) {
    margin-top: ${l(2.5)};
  }
`;e.exports={CarouselWrapper:N,ChipWrapper:P,EditorCard:x,EditorDescription:I,EditorDetails:L,EditorName:G,EditorResponsiveAsset:B,EditorsPicksCarousel:A,EditorTitle:M,FilterableSummaryListDynamicGridItemLayout:D,FilterableSummaryListGrid:E,FilterableSummaryListWrapper:k,FilterableSummaryListGridFullBleed:S,TitleWrapper:w,TitleToggleChipListWrapper:v}},12102:(e,i,t)=>{const a=t(76186);i.Z=(0,a.defineMessages)({atArticleGalleryCarouselBtnText:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnText",defaultMessage:"VIEW ALL {categoryName}",description:"Article and Gallery carousel button text"},atArticleGalleryCarouselBtnTextWithCtaLink:{id:"FilterableSummaryList.AtArticleGalleryCarouselBtnTextWithCtaLink",defaultMessage:"{categoryName}",description:"Article and Gallery carousel button text for cta link"}})},75985:(e,i,t)=>{const a=t(67294),o=t(45697),{trackComponent:l}=t(40199),r=({children:e,name:i})=>{if(a.useEffect((()=>{l("Slot")}),[]),!i)throw new Error("A slot must contain a name!");return e};r.propTypes={children:o.node.isRequired,name:o.string.isRequired},e.exports={Slot:r,getSlots:(e,i=[])=>{const t=new Set(i),o={};let l;const n=[];return a.Children.forEach(e,(e=>{l=e.props.name,n.push(e.props.url),e.type===r&&l&&(0===t.size||t.has(l))&&(o[l]=e)})),{slots:o,urlData:n}}}},86972:(e,i,t)=>{e.exports=t(75985)}}]);