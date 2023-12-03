(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[2041],{42813:(e,t,i)=>{const o=i(94184),n=i(45697),a=i(67294),{default:r}=i(45698),{trackComponent:d}=i(40199),{processLinks:s,processCeros:l,processTiktok:m,processSidebarHeadings:p}=i(54436),g=i(86982),c=i(85086),{BodyWrapper:$}=i(81717),h=new r({a:s,blockquote:({props:e})=>({type:g,props:e}),ceros:l,h2:p,tiktok:m,"inline-embed":c}),y=({body:e,className:t,children:i,shouldDisableMaxWidth:n,shouldEnableDataJourneyHook:r=!0,shouldEnableFullArticleInverted:s})=>{a.useEffect((()=>{d("Body")}),[]);const l={className:o("body",t),shouldDisableMaxWidth:n,shouldEnableFullArticleInverted:s};return r&&(l["data-journey-hook"]="client-content"),a.createElement($,Object.assign({},l,{"data-testid":"BodyWrapper"}),i||h.convert(e))};y.propTypes={body:n.array,children:n.node,className:n.string,shouldDisableMaxWidth:n.bool,shouldEnableDataJourneyHook:n.bool,shouldEnableFullArticleInverted:n.bool},y.defaultProps={body:["div"],shouldDisableMaxWidth:!1},e.exports=y},94753:(e,t,i)=>{e.exports=i(42813)},42041:(e,t,i)=>{const{default:o,css:n}=i(51117),{BREAKPOINTS:a,ZINDEX_MAP:r}=i(85326),{applyGridSpacing:d,cssVariablesGrid:s}=i(62470),{calculateSpacing:l,minScreen:m,maxScreen:p,minMaxScreen:g,getColorToken:c,getTypographyStyles:$}=i(79720),h=i(7279),{universalGridCore:y}=i(61774),u=i(4131),{RowWrapper:b}=i(21920),x=i(48655),{GridItem:f}=i(14134),{SummaryRiverSection:v}=i(3183),{SummaryCollageOneGridWithMargin:k}=i(83695),{SectionTitleHed:w}=i(80577),{EmbedBody:C}=i(97893),{FeaturesRow:S}=i(43154),{TickerWrapper:T}=i(31828),{TopStoryWrapper:I}=i(50597),B=`\n  ${s()}\n  ${d("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${a.xxl};\n`,N=o(u).withConfig({displayName:"MultiPackageBaseRow"})`
  &:first-child,
  & ~ & {
    ${({hasMarginTopMultiPackageRow:e})=>e?"":"margin-top: 0;"}
  }

  ${({hasRightAndLeftMargin:e})=>e?`\n        ${m(a.md)} {\n          padding: ${l(0)} ${l(8)};\n        }`:""}

  inline-embed[name='align-right'] {
    text-align: right;
  }

  inline-embed[name='align-center'] {
    text-align: center;
  }
`,_=o(h.Utility).withConfig({displayName:"MultiPackageRow"})`
  &&& {
    align-items: center;
    width: auto;
  }
`,P=o(N).withConfig({displayName:"MultiPackageRow"})`
  ${({hasNoTopMargin:e})=>e?"":`margin-top: ${l(7)};`}

  ${({hasLightBgForLinkBanner:e,hasPlpFilterableContainerLightBackgroundColor:t,theme:i,isInvertedTheme:o})=>e||t?`background-color: ${c(i,"colors.discovery.body.light.background")};`:o?`background-color: ${c(i,"colors.consumption.lead.inverted.background")};`:""}

  ${({hasMediumMargin:e,hasNoBottomMargin:t,hasReducedMargin:i,isNativeAd:o})=>e?`margin-bottom: ${l(4)};`:t||o&&i?"margin-bottom: 0;":i?`margin-bottom: ${l(2)};`:`margin-bottom: ${l(7)};`}

  ${({hasMarginBottomMultiPackageRow:e})=>e?`\n          ${m(a.lg)} {\n            margin-bottom: ${l(5)};\n          }\n          ${g(a.md,a.lg)} {\n            margin-bottom: ${l(4)};\n          }\n          ${g(0,a.md)} {\n            margin-bottom: ${l(3)};\n          }`:""}

  ${({hasNoTopBottomMarginOnMobile:e})=>e?`  ${g(0,a.md)} {\n            margin-top: 0;\n            margin-bottom: 0;\n          }`:""}

  ${({hasStickyLinkBanner:e})=>e?`\n        position: sticky;\n        top: 0px;\n        z-index: ${r.interstitialLayer};\n      `:""}

  /* TODO: this should be a configuration for a layout
     Specificity is required due to star selector in homepage  */
  ${m(a.lg)} {
    ${b}.homepage__half-column-row + && {
      width: 50%;
      max-width: 800px;
      ${w} {
        ${$("typography.definitions.discovery.subhed-section-secondary")};
      }
    }
    .homepage__half-column-row + && > ${k} {
      padding-left: var(--grid-gap);
    }
    ${v} {
      margin: 0 auto;
      max-width: 1600px;
    }
  }
`,W=o(x.WithMargins).withConfig({displayName:"DiscoveryQuoteRow"})`
  ${({hasTopAndBottomBorderQuote:e,theme:t})=>e?`\n    border-top:1px solid ${c(t,"colors.discovery.body.white.divider")};\n\n    border-bottom:1px solid ${c(t,"colors.discovery.body.white.divider")};`:""}

  ${f} {
    grid-column: 1/-1;

    ${m(a.md)} {
      grid-column: 3/11;
    }
  }
`,M=n`
  &.puzzles-games-landing-page {
    .ticker-wrapper {
      margin-bottom: 0;
    }

    .ticker-view > div:nth-child(2) {
      margin-top: ${l(4)};
    }

    .summary-collage-six-puzzles-games .summary-item:first-child h3 {
      ${$("typography.definitions.discovery.description-core")};
      font-size: ${l(4)};
    }

    .verso-features {
      margin-bottom: ${l(4)};
    }

    > div:nth-child(3)
      .summary-collage-six-puzzles-games
      .summary-list--collection-list {
      ${p(a.lg)} {
        padding-top: 0;
      }
    }

    .summary-river-puzzles-games {
      h2 {
        font-size: 24px;
      }

      & > section {
        .summary-item:last-child {
          border-bottom: 0;
        }

        > div {
          margin-bottom: ${l(2)};

          > div:first-child {
            margin-bottom: 0;
          }
        }
      }

      .summary-item {
        padding-top: ${l(2)};
      }
    }

    .summary-item--is-dense .summary-item__asset-container {
      ${g(0,a.xl)} {
        display: block;
      }

      ${m(a.xl)} {
        float: none;
        margin-left: 0;
      }
    }

    .summary-list--collection-list {
      ${g(0,a.lg)} {
        border-top: 0;
        padding-top: 0;
      }
    }

    .summary-list__items .summary-item:not(:first-child) {
      margin-bottom: 0;
      padding-bottom: ${l(2)};
    }

    .summary-list__items .summary-item:first-child {
      ${g(0,a.lg)} {
        padding-bottom: ${l(2)};
      }

      ${m(a.lg)} {
        padding-bottom: 0;
      }
    }

    .summary-collage-six-puzzles-games .summary-item h3 {
      ${$("typography.definitions.discovery.hed-core-secondary")};
    }

    .summary-collage-six-puzzles-games h2,
    .summary-collection-grid h2 {
      ${$("typography.definitions.discovery.subhed-section-primary")};
    }

    .verso-embed-row inline-embed h1 {
      margin: 0;
      font-size: ${l(5.5)};
    }

    .verso-embed-row {
      margin: ${l(4)} 0;
    }

    ${C} {
      max-width: initial;
    }

    .verso-features h2 {
      font-size: 24px;
    }

    .summary-collage-six-puzzles-games h2 {
      font-size: 20px;
    }

    .summary-item__dek > a {
      ${$("typography.definitions.foundation.link-primary")};
      display: block;
      padding-top: ${l(2.5)};
      text-decoration: none;
      color: ${c("colors.interactive.base.brand-primary")};
    }

    .summary-item__dek > a:hover {
      text-decoration: underline;
    }
  }
`,L=o.div.withConfig({displayName:"MultiPackageContainer"})`
  ${({showFooterAdPadding:e})=>e&&`padding-bottom: ${l(10,"px")};`}

  ${({customClass:e})=>e&&"puzzles-games-landing-page"===e&&M}
  ${({hasMarginBottomMultiPackageRow:e})=>e?"\n            .verso-features {\n              && {\n                margin-bottom: 0;\n              }\n            }\n          ":""}

  ${({hasEvenSpacingMultiPackageRow:e})=>e&&n`
      > ${P}, > .ad-container {
        margin-top: ${l(6)};
        margin-bottom: 0;
        ${m(a.md)} {
          margin-top: ${l(7)};
          margin-bottom: 0;
        }

        :last-child {
          margin-bottom: ${l(6)};
          ${m(a.md)} {
            margin-bottom: ${l(7)};
          }
        }
      }

      > ${P} {
        :first-child {
          margin-top: 0;
        }

        :empty {
          margin-top: 0;
          margin-bottom: 0;
        }
        > ${S} {
          margin-bottom: 0;
        }
      }

      > ${I} + .journey-unit__container,
      > .ticker-view {
        + * {
          margin-top: 0;
        }
        > ${b}, ${T} {
          margin-top: 0;
          margin-bottom: 0;
        }
      }
    `}
`,E=o.div.withConfig({displayName:"SectionJumpLinksWrapper"})`
  ${({theme:e})=>(e=>`\n    background: ${c(e,"colors.consumption.body.inverted.display-texture")};\n    ${m(a.md)} {\n      width: ${a.md};\n      padding: ${l(3)} ${l(9)} ${l(5)} ${l(9)};\n    }\n    padding: ${l(2)} ${l(5)} ${l(3.5)} ${l(5)};\n    margin: auto;\n    div {\n      div {\n        h1 {\n          text-align: center;\n        }\n        div {\n          a {\n            font-family: Konnect, helvetica, sans-serif;\n            font-style: normal;\n            line-height: ${l(2.4,"rem")};\n            font-size: ${l(2)};\n            &:not(.button):link,\n            &:not(.button):visited {\n              color: rgb(0, 0, 0);\n            }\n          }\n          display: grid;\n          ${m(a.md)} {\n            grid-template-columns: 1fr 1fr 1fr;\n            grid-row-gap: ${l(1.5)};\n          }\n          grid-template-columns: 1fr 1fr;\n          grid-row-gap: ${l(1)};\n        }\n      }\n    }\n  }\n  `)(e)}
`,F=o(P).withConfig({displayName:"MultiPackageReadMore"})`
  display: flex;
  justify-content: center;
`,D=o.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${B}
`,A=o.div.withConfig({displayName:"EventsListWrapper"})`
  ${s()}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${m(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,R=o.div.withConfig({displayName:"PromoBoxWrapper"})`
  ${B}
`,z=o.div.withConfig({displayName:"NewsletterWrapper"})`
  ${B}

  padding-top: ${l(6)};
  padding-bottom: ${l(6)};

  ${m(a.md)} {
    padding-top: ${l(9)};
    padding-bottom: ${l(9)};
  }
`,O=o.div.withConfig({displayName:"CMUnitWrapper"})`
  ${B}

  ${m(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,H=o.div.withConfig({displayName:"SubTopicDiscoveryWrapper"})`
  ${y(!0)}
  ${d("padding")}

  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};

  ${m(a.lg)} {
    padding-right: var(--grid-margin);
    padding-left: var(--grid-margin);
  }
`,U=o.div.withConfig({displayName:"TickerWrapper"})`
  ${({isInvertedTheme:e})=>e?`\n        ${s()}\n        ${d("padding",!0)}`:`${B}`}
`,j=o("div").withConfig({displayName:"MultipackageNoItemsBlock"})`
  ${s()}
  ${d("padding")}
  margin: 0 auto;
  margin-bottom: ${l(4)};
  width: 100%;
  max-width: ${a.xxl};
  color: white;
  font-family: 'LabGrotesque';
  ${({hasRule:e,theme:t})=>e?`\n        &::before {\n          border-top: 1px solid ${c(t,"colors.discovery.body.white.divider")};\n          content: '';\n          grid-column: 1/-1;\n          margin-bottom: ${l(4)};\n          display: block;\n        }\n      `:""}

  h3 {
    margin: 0 auto;
    width: fit-content;
    ${$("typography.definitions.consumptionEditorial.subhed-break-secondary")}
  }

  p {
    font-family: Proxima Nova;
    font-size: 12px;
  }
`,G=o.div.withConfig({displayName:"MultiPackageBodyWrapperGrid"})`
  ${y()}
  ${d("padding")}
`;e.exports={CMUnitWrapper:O,DiscoveryQuoteRow:W,EventsListWrapper:A,MultiPackageContainer:L,MultiPackageRow:P,MultiPackageReadMore:F,NewsFeedWrapper:R,NewsletterWrapper:z,PromoBoxWrapper:D,SubTopicDiscoveryWrapper:H,TickerWrapper:U,MultipackageNoItemsBlock:j,MultiPackageBodyWrapperGrid:G,SectionJumpLinksWrapper:E,UtilityButton:_}},51901:(e,t,i)=>{const{default:o}=i(51117),{BaseWrap:n}=i(74327),{injectStyles:a}=i(99315),r=i(32605),{contributorIconStyles:d}=i(91657),{ActionBarWrapper:s}=i(74655),{calculateSpacing:l}=i(79720),m=o(n).withConfig({displayName:"SmartItemAssetContainer"})`
  ${({styleSettings:e})=>e&&a("styleSettings",{styleSettings:e},r)}

  ${s} {
    position: absolute;
    right: ${l(.75)};
    bottom: ${l(.75)};
    z-index: 1;

    ${({isContributor:e})=>e&&`\n     right: ${l(-.75)};\n     bottom: 0; \n     &::before {\n      border-radius: 50%;\n     }\n    `}
  }

  .responsive-asset {
    ${({isContributor:e})=>e&&d};
  }

  .responsive-asset,
  .responsive-clip {
    height: 100%;
  }
`;e.exports={SmartItemAssetContainer:m}},91657:(e,t,i)=>{const{css:o}=i(51117),{getColorStyles:n,calculateSpacing:a}=i(79720),{AspectRatioContainer:r}=i(71711),d=o`
  width: ${a(8)};
  height: ${a(8)};
`,s=o`
  width: ${a(14)};
  height: ${a(10.5)};
`,l=o`
  ${d}
  overflow: visible;

  ${r} {
    position: relative;
  }

  .aspect-ratio--overlay-container {
    overflow: visible;
  }

  img {
    ${({theme:e})=>n(e,"background-color","colors.discovery.lead.secondary.background")};
    border-radius: 50%;
    overflow: hidden;
    vertical-align: top;
  }
`;e.exports={iconDimensions:d,denseDimensions:s,contributorIconStyles:l}},32605:(e,t,i)=>{const{css:o}=i(51117),{getColorToken:n}=i(79720);e.exports=(e,t={})=>o`
  position: relative;
  text-align: center;

  picture {
    height: 100%;
  }

  img {
    border: ${({theme:e})=>t.showOutline?`1px solid ${n(e,"colors.discovery.body.white.border")}`:"none"};
    height: 100%;
  }

  ${({insetType:e})=>t.inset&&(({insetType:e})=>"focus"===e?o`
        margin: var(--smart-item-asset-v-inset) var(--smart-item-asset-h-inset);
      `:o`
        padding: 0 var(--smart-item-asset-h-inset);
      `)({insetType:e})}
`},96143:(e,t,i)=>{const{default:o,css:n}=i(51117),{BaseWrap:a}=i(74327),{injectStyles:r}=i(99315),{SmartItemRubric:d,SmartItemHedLink:s,SmartItemPublishedDate:l}=i(90191),{TextContainer:m,FocusUnitBylines:p,FocusUnitDek:g,FocusUnitHed:c}=i(83797),{ActionBarWrapper:$,ActionBarButtonText:h,ActionBarButton:y}=i(74655),u=i(20700),{getTypographyStyles:b,minScreen:x,calculateSpacing:f,getColorStyles:v}=i(79720),{minThresholds:k}=i(28657),w=n`
  --smart-item-asset-h-inset: ${f(3)};
  --smart-item-asset-v-inset: ${f(3)};
  ${x(`${k.lg}px`)} {
    --smart-item-asset-h-inset: ${f(2)};
  }
  ${x(`${k.xl}px`)} {
    --smart-item-asset-h-inset: ${f(6)};
    --smart-item-asset-v-inset: ${f(4)};
  }
`,C=o(a).withConfig({displayName:"FocusUnitWrapper"})`
  ${w}
  ${({layout:e,styleSettings:t})=>r("layout",{layout:e,styleSettings:t},u)};

  ${({theme:e})=>"standard"!==e.palette&&"background: rgba(0,0,0);"}

  ${c} {
    ${({presetCategory:e})=>b("TEXT_ONLY"===e?"typography.definitions.discovery.hed-break-out":"typography.definitions.discovery.hed-feature")};
  }

  ${({signalType:e})=>e&&`\n      ${x(`${k.lg}px`)} {\n        ${m} {\n          padding-top: ${f(8)};\n        }\n      }\n    `}

  &:hover {
    cursor: pointer;
  }
`,S=e=>"transparent"===e||"inverted"===e?"black":"white",T=o.div.withConfig({displayName:"FocusUnitActionBarWrapper"})`
  display: flex;
  justify-content: center;

  ${$} {
    background: transparent;
    height: ${f(6)};

    ${y} {
      border: none;
      background: none;
      text-decoration: none;
    }

    ${h} {
      ${b("typography.definitions.globalEditorial.context-title")};
    }

    ${({theme:e})=>`\n        ${v(e,"border-color",`colors.discovery.body.${S(e.palette)}.border`)};\n\n        ${h} {\n          ${v(e,"color",`colors.discovery.body.${S(e.palette)}.accent`)};\n        }\n    \n        svg {\n          path {\n            ${v(e,"fill",`colors.discovery.body.${S(e.palette)}.accent`)};\n          }\n        }\n        \n      `}
  }
`;e.exports={FocusUnitWrapper:C,FocusUnitActionBarWrapper:T,SmartItemBylines:p,SmartItemHedLink:s,SmartItemHed:c,SmartItemDek:g,SmartItemRubric:d,SmartItemPublishedDate:l,TextContainer:m}},83797:(e,t,i)=>{const{default:o}=i(51117),{SmartItemBylines:n,SmartItemDek:a,SmartItemHed:r,SmartItemPublishedDate:d,SmartItemRubric:s,SmartItemHedLink:l,BoldAsByline:m}=i(90191),p=o.div.withConfig({displayName:"TextContainer"})`
  text-align: center;
`,g=o(n).withConfig({displayName:"FocusUnitBylines"})``;g.defaultProps={typeIdentity:"typography.definitions.globalEditorial.accreditation-feature"};const c=o(a).withConfig({displayName:"FocusUnitDek"})``;c.defaultProps={typeIdentity:"typography.definitions.discovery.description-feature"};const $=o(r).withConfig({displayName:"FocusUnitHed"})``,h=o.div.withConfig({displayName:"AdditionalContentWrapper"})`
  ul {
    & > li {
      ${m}
    }
  }
`;e.exports={AdditionalContentWrapper:h,TextContainer:p,FocusUnitHed:$,FocusUnitDek:c,FocusUnitBylines:g,FocusUnitRubric:s,FocusUnitHedLink:l,FocusUnitPublishedDate:d}},20700:(e,t,i)=>{const{css:o}=i(51117),{calculateSpacing:n,minMaxScreen:a,minScreen:r}=i(79720),{SmartItemAssetContainer:d}=i(51901),{TextContainer:s,FocusUnitBylines:l,FocusUnitPublishedDate:m,AdditionalContentWrapper:p}=i(83797),{minThresholds:g,maxThresholds:c}=i(28657),{applyStyleExtensions:$}=i(99315),h=$("SmartItem"),y=o`
  ${({additionalContent:e})=>e?o`
          --aspect-ratio-box-max-height: ${n(100)};
        `:o`
          --aspect-ratio-box-max-height: ${n(75)};
          ${a(`${g.lg}px`,`${c.xl}px`)} {
            --aspect-ratio-box-max-height: ${n(65.25)};
          }
          ${r(`${g.xxl}px`)} {
            --aspect-ratio-box-max-height: ${n(81)};
          }
        `}
  min-height: var(--aspect-ratio-box-max-height);
`,u=o`
  /*
   Targets sibling of each direct child
  */
  > * + * {
    margin-top: ${n(2)};
  }

  ${l} + ${m} {
    margin-top: ${n(1)};
  }
`,b={"side-by-side":(e,t={})=>{var i,a,l;return o`
    --smart-item-layout: 'side-by-side';
    display: flex;
    width: 100%;
    ${y};

    ${d} {
      flex-basis: ${(null===(i=t.image)||void 0===i?void 0:i.inset)?"calc(50% - var(--smart-item-asset-h-inset))":"50%"};

      .responsive-asset {
        img {
          object-fit: ${(null===(a=t.image)||void 0===a?void 0:a.inset)?"contain":"cover"};
          ${!(null===(l=t.image)||void 0===l?void 0:l.inset)&&o`
            height: auto;
            min-height: 100%;
          `}
        }
      }
    }

    ${({textPosition:e})=>e&&o`
        flex-direction: ${"end"===e&&"row-reverse"};
      `}

    ${s} {
      display: flex;
      flex-basis: 50%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: ${n(3)};
      ${u}

      & > * {
        max-width: 500px;
      }

      ${r(`${g.xl}px`)} {
        padding-right: ${n(6)};
        padding-left: ${n(6)};
      }
    }
    ${o`
  ${({additionalContent:e})=>e&&o`
      display: grid;
      ${({textPosition:e})=>"end"===e?o`
              grid-template-areas:
                'image content'
                'image additionalContent';
            `:o`
              grid-template-areas:
                'content image'
                'additionalContent image';
            `};
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr min-content;
      ${d} {
        grid-area: image;
      }
      ${p} {
        grid-area: additionalContent;
      }
      ${s} {
        grid-area: content;
      }
    `}
`};
    ${h("side-by-side",t,e)};
  `},stack:(e,t={})=>o`
    --smart-item-layout: 'stack';
    display: flex;
    flex-direction: column;
    ${s} {
      margin: ${n(6)} ${n(3)};
      ${u}
    }
    ${d} {
      margin-top: 0;
    }
    ${o`
  ${({additionalContent:e})=>e&&`\n    ${p}{\n      order:2;\n    }\n `}
`};
    ${h("stack",t,e)};
  `,overlay:(e,t={})=>o`
    --smart-item-layout: 'overlay';
    display: grid;
    position: relative;
    grid-template-areas: 'content';
    ${y};
    ${s} {
      display: flex;
      grid-area: content;
      flex-direction: column;
      justify-content: ${t.textAlign||"start"};
      z-index: 1;
      margin: auto;
      padding: ${n(4)} ${n(3)};
      width: 100%;
      height: 100%;
      ${u}
    }
    ${d} {
      position: unset;
      grid-area: content;

      .responsive-asset {
        img {
          object-fit: cover;
          width: 100%;
        }
      }

      &::after {
        ${(({textAlign:e})=>o`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: ${`linear-gradient(${"end"===e?"to top":"to bottom"}, rgb(0, 0, 0) 0, transparent 65%)`};
  content: '';
  pointer-events: none;
`)({textAlign:t.textAlign})}
      }
    }
    ${r(`${g.lg}px`)} {
      ${s} {
        padding: ${n(4)} 0;
        max-width: ${n(62)};
      }
      ${p} {
        max-width: ${n(62)};
      }
    }

    ${r(`${g.xl}px`)} {
      ${s} , ${p} {
        max-width: ${n(70)};
      }
    }

    ${o`
  ${({additionalContent:e})=>e&&`\n    grid-template-areas: "content" \n                         "additionalContent";\n    grid-template-rows: 1fr min-content;\n    ${d}{\n      grid-area: content-start/content-start/additionalContent-end/additionalContent-end;\n    }\n    ${p}{\n      margin:auto;\n      grid-area: additionalContent;\n      z-index:1;\n    }\n \n `}
`}
    ${h("overlay",t,e)};
  `};e.exports=b},90191:(e,t,i)=>{const{default:o,css:n}=i(51117),{BaseText:a,BaseLink:r}=i(74327),{BylinePreamble:d,BylineLink:s,BylineName:l}=i(72369),{getColorStyles:m,getTypographyStyles:p,minScreen:g}=i(79720),{minThresholds:c}=i(28657),$=n`
  ${({invertedColorToken:e,theme:t})=>["inverted","transparent"].includes(t.palette)&&e&&m("color",e)};
`,h=n`
  & > b,
  & > strong {
    font-size: inherit; /* inherits parent font size and sets 1em to refer parent font size */
    ${g(`${c.lg}px`)} {
      font-size: inherit; /* inherits parent font size and sets 1em to refer parent font size */
    }
  }

  & > b,
  & > strong {
    ${p("typography.definitions.globalEditorial.accreditation-feature")};
    font-size: calc(1em - 1px); /* subtracts 1px from parent font size */
    font-weight: inherit;
    ${g(`${c.lg}px`)} {
      font-size: calc(1em - 1px);
    }
  }
`,y=o(a).withConfig({displayName:"SmartItemBaseText"})`
  ${({colorToken:e})=>m("color",e)};
  ${({typeIdentity:e})=>p(e)};
  ${$};
`,u=o(y).withConfig({displayName:"SmartItemHed"})``;u.defaultProps={as:"h3",colorToken:"colors.discovery.body.white.heading",invertedColorToken:"colors.discovery.body.black.heading",typeIdentity:"typography.definitions.discovery.hed-core-primary"};const b=o(y).withConfig({displayName:"SmartItemDek"})`
  ${h}
`;b.defaultProps={colorToken:"colors.discovery.body.white.description",invertedColorToken:"colors.discovery.body.black.description",typeIdentity:"typography.definitions.discovery.description-core"};const x=o(y).withConfig({displayName:"SmartItemRubric"})``;x.defaultProps={colorToken:"colors.discovery.body.white.context-signature",invertedColorToken:"colors.discovery.body.black.context-signature",typeIdentity:"typography.definitions.globalEditorial.context-primary"};const f=o(y).withConfig({displayName:"SmartItemBylines"})`
  p,
  ${d}, ${s}, ${l} {
    margin: 0;
    text-align: inherit;
    ${({colorToken:e})=>m("color",e)};
    ${({typeIdentity:e})=>p(e)};
    ${$};
  }
`;f.defaultProps={colorToken:"colors.discovery.body.white.accreditation",invertedColorToken:"colors.discovery.body.black.accreditation",typeIdentity:"typography.definitions.globalEditorial.accreditation-core"};const v=o(y).withConfig({displayName:"SmartItemPublishedDate"})``;v.defaultProps={colorToken:"colors.discovery.body.white.context-tertiary",invertedColorToken:"colors.discovery.body.black.context-tertiary",typeIdentity:"typography.definitions.globalEditorial.context-tertiary"};const k=o(y).withConfig({displayName:"SmartItemHedLink"})`
  display: block;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;k.defaultProps={as:"a",colorToken:"colors.discovery.body.white.heading",invertedColorToken:"colors.discovery.body.black.heading"};const w=o(r).withConfig({displayName:"SmartItemCTA"})`
  &::after {
    content: ' ﾂｻ';
  }
`;w.defaultProps={as:"a",colorToken:"colors.interactive.base.black",hasUnderline:!1,typeIdentity:"typography.definitions.utility.button-utility"},e.exports={SmartItemBylines:f,SmartItemHedLink:k,SmartItemHed:u,SmartItemDek:b,SmartItemRubric:x,SmartItemPublishedDate:v,SmartItemBaseText:y,SmartItemCTA:w,BoldAsByline:h}},99315:(e,t,i)=>{const{css:o}=i(51117),{minScreen:n,minMaxScreen:a}=i(79720),{minThresholds:r,maxThresholds:d}=i(28657),s=new Map([["layout",({layout:e,styleSettings:t=[]},i)=>{const[s,l,m]=e,[p,g,c]=t;if(s&&!l&&!m)return i[s]("mobile",p);const $=o`
    ${a(0,`${d.md}px`)} {
      ${i[s]("mobile",p)}
    }
  `,h=o`
    ${a(`${r.lg}px`,`${d.lg}px`)} {
      ${i[l]("tablet",g)}
    }
  `,y=o`
    ${n(`${r.xl}px`)} {
      ${i[m]("desktop",c)}
    }
  `,u=o`
    ${a(0,`${d.lg}px`)} {
      ${i[s]("mobile",p)}
    }
  `,b=o`
    ${n(`${r.lg}px`)} {
      ${i[l]("tablet",g)}
    }
  `;return s!==l||g?l!==m||c?o`
    ${$}
    ${h}
    ${y}
  `:o`
      ${$}
      ${b}
    `:o`
      ${u}
      ${y}
    `}],["styleSettings",({styleSettings:e=[]},t)=>{const[i,s,l]=e;if(i&&!s&&!l)return t("mobile",i);const m=o`
    ${a(0,`${d.md}px`)} {
      ${t("mobile",i)}
    }
  `,p=o`
    ${a(`${r.lg}px`,`${d.lg}px`)} {
      ${t("tablet",s)}
    }
  `,g=o`
    ${n(`${r.xl}px`)} {
      ${t("desktop",l)}
    }
  `,c=o`
    ${n(`${r.lg}px`)} {
      ${t("tablet",s)}
    }
  `,$=o`
    ${a(0,`${d.lg}px`)} {
      ${t("mobile",i)}
    }
  `;return i&&s&&!l?o`
      ${m}
      ${c}
    `:i&&l&&!s?o`
      ${$}
      ${g}
    `:o`
    ${m}
    ${p}
    ${g}
  `}]]);e.exports={injectStyles:function(e,t,i){return s.get(e)(t,i)},applyStyleExtensions:e=>(t,i,n)=>({theme:a})=>{const{componentStylePools:r}=a;return r&&r[e]?r[e].slice().reverse().map((e=>{if(e[t])return e[t](n,i)})).filter(Boolean).reduce(((e,t)=>o`
            ${e}
            ${t}
          `),""):""}}},83695:(e,t,i)=>{const{default:o,css:n}=i(51117),{SectionTitleLinkHTML:a,SectionTitleLinkWrapper:r}=i(80577),{BREAKPOINTS:d}=i(85326),{maxThresholds:s}=i(28657),{applyGridSpacing:l,cssVariablesGrid:m}=i(62470),{RubricLink:p}=i(7320),{SectionTitleRoot:g,SectionTitleHed:c}=i(80577),{calculateSpacing:$,maxScreen:h,minScreen:y,minMaxScreen:u,getTypographyStyles:b,getColorToken:x,getColorStyles:f}=i(79720),{BaseLink:v}=i(74327),{SocialIconsList:k}=i(96860),{SpanWrapper:w}=i(89676),{StickyBoxWrapper:C}=i(29659),{SummaryItemBylinePublishDate:S}=i(44621),{BylinePreamble:T,BylineName:I}=i(72369),{SummaryItemWrapper:B}=i(88269),{SummaryDekDefault:N}=i(96567),_=o.div.withConfig({displayName:"SummaryCollageOneAside"})`
  display: none;
  grid-row: 1 / -1;
  justify-self: end;

  ${C} {
    top: ${$(10)};
  }

  ${u(d.md,`${s.lg}px`)} {
    display: block;
    grid-column: 7 / -1;
  }

  ${y(d.lg)} {
    display: block;
    grid-column: 9 / -1;
  }
`,P=o.div.withConfig({displayName:"SummaryCollageOneTitle"})`
  grid-column: 1 / -1;

  ${g} {
    > h2 {
      color: ${({customizedSectionTitleColorToken:e})=>e&&x(e)};
    }
  }
  ${({isSingleFeature:e})=>!e&&`\n      margin-bottom: ${$(2)};\n\n      ${y(d.md)} {\n        margin-bottom: ${$(1)};\n      }\n\n      ${y(d.lg)} {\n        margin-bottom: ${$(0)};\n      }\n    `}
`,W=o.div.withConfig({displayName:"SummaryCollageOneCtaIcon"})`
  border-radius: ${$(1)};
  background-color: ${({theme:e})=>x(e,"colors.discovery.lead.secondary.background")};
  background-image: ${({icon:e})=>`url('${e}')`};
  width: ${$(6)};
  height: ${$(6)};

  ${y(d.lg)} {
    margin-right: ${$(2)};
  }

  ${h(`${s.lg}px`)} {
    margin-bottom: ${$(2)};
  }
`,M=o(v).withConfig({displayName:"SummaryCollageOneAnchorLink"})`
  ${b("typography.definitions.foundation.link-primary")}
  display: inline-block;
  margin-bottom: ${$(2)};
  vertical-align: top;

  ${y(d.lg)} {
    margin-bottom: ${({showCtaIcon:e})=>e?0:$(4)};
  }
`,L=o.div.withConfig({displayName:"SummaryCollageOneCtaLink"})`
  grid-column: 1 / -1;
  text-align: center;

  span {
    display: block;
    width: 100%;
    text-align: center;
  }

  ${({showCtaIcon:e})=>e&&`\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      \n      ${y(d.lg)} {\n        flex-direction: row;\n      }\n    `}
`;M.defaultProps={colorSecondaryLinkToken:"colors.interactive.base.dark",colorStaticLinkToken:"colors.interactive.base.brand-primary",linkStyle:"global"};const E=n`
  ${m()}
  ${l("padding")}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${d.xxl};
  row-gap: var(--grid-gap);

  .summary-item--layout-placement-text-below {
    &.summary-item--text-align-left,
    &.summary-item--text-align-center {
      .summary-item__hed {
        ${b("typography.definitions.discovery.hed-break-out")};
      }

      .summary-item__dek {
        ${b("typography.definitions.discovery.description-feature")};
      }
    }
  }

  ${({theme:e,shouldUseHedFeatureToken:t})=>t&&`\n      .summary-item .summary-item__hed {\n        ${b(e,"typography.definitions.discovery.hed-feature")};\n      }\n    `};

  .summary-item__hed-link {
    &::after {
      border-bottom: 1px solid
        ${x("colors.discovery.body.white.accent")};
    }
  }

  .summary-item__content:empty {
    display: none;
  }

  ${k} {
    justify-content: center;
  }

  ${y(d.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,F=o.div.withConfig({displayName:"SummaryCollageOneItemComponent"})`
  grid-column: 1 / -1;

  &&& {
    border-bottom: 0;

    .summary-item__content {
      margin: 0;
      @media (min-width: 0) and (max-width: ${d.lg}) {
        margin: 0;
      }
      ${({customizedBylineColorToken:e})=>e&&n`
          ${I}, ${T} {
            color: ${x(e)};
          }
        `}
      ${({customizedPublishDateColorToken:e})=>e&&n`
          ${S} {
            color: ${x(e)};
          }
        `}
    }
    @media (min-width: 0) and (max-width: ${d.md}) {
      padding-bottom: 0;
    }
  }
`,D=n`
  &&& {
    grid-gap: ${$(4)};
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }

  ${F} {
    display: grid;
    align-items: center;
  }

  ${w}.summary-item__image {
    .summary-item__image {
      display: grid;
      justify-items: center;
      ${({hasEnhancedDailyCartoon:e})=>e&&`\n          ${y(d.lg)} {\n            gap: ${$(3)};\n          }\n        `}

      picture {
        max-width: ${$(37.5)};

        ${y(d.lg)} {
          max-width: ${({hasEnhancedDailyCartoon:e})=>$(e?68.75:50)};
        }

        ${h(`${s.md}px`)} {
          max-width: ${({hasEnhancedDailyCartoon:e})=>$(e?68.75:50)};
        }
      }
    }

    .responsive-cartoon__caption {
      margin-top: 0;
      ${y(d.lg)} {
        margin-top: ${({hasEnhancedDailyCartoon:e})=>e?0:$(2)};
        width: 85%;
      }
    }
  }
`,A=n`
  ${u(0,d.lg)} {
    .summary-item__asset-container {
      ${l("margin",!0)};
    }
  }
`,R=n`
  &&& {
    grid-template-rows: unset;
    background-color: ${x("colors.discovery.body.dark.background")};
    max-width: ${d.xxl};

    ${u(d.sm,d.md)} {
      column-gap: ${$(9)};
      margin: ${$(0)};
      padding: ${$(0)};
    }
    ${y(d.md)} {
      column-gap: ${$(3)};
      margin: ${$(0)};
      padding: ${$(5)} ${$(3)};
    }
    ${y(d.lg)} {
      margin: ${$(0)};
      padding: ${$(7)} ${$(6)};
    }
    ${y(d.xl)} {
      column-gap: 2rem;
      margin: ${$(0)};
      padding: ${$(10)} ${$(8)};
    }
    ${y(d.xxl)} {
      column-gap: 2rem;
      margin: auto;
      padding: ${$(10)} ${$(8)};
    }
  }
  ${p} {
    color: ${x("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__rubric {
    color: ${x("colors.discovery.body.dark.context-signature")};
  }

  .summary-item__dek {
    color: ${x("colors.discovery.body.dark.description")};
  }

  .summary-item__hed--hed-core-primary {
    ${b("typography.definitions.discovery.hed-core-primary")}
    color: ${x("colors.discovery.body.dark.heading")};
  }

  .summary-item__hed {
    color: ${x("colors.discovery.body.dark.heading")};
  }

  .summary-item--dark-background-right {
    ${y(d.md)} {
      grid-column: 2 / -2;
      margin: ${$(0)} ${$(-3)};
    }
    ${y(d.lg)} {
      grid-column: 2 / -2;
      margin: ${$(0)} ${$(-3)};
      padding: ${$(0)};
    }
    ${y(d.xl)} {
      grid-column: 2 / -2;
      margin: ${$(0)} ${$(-4)};
      padding: ${$(0)};
    }
    ${y(d.xxl)} {
      grid-column: 2 / -2;
      margin: ${$(0)};
      padding: ${$(0)};
    }

    .summary-item__asset-container {
      ${y(d.md)} {
        margin-left: ${$(-3)};
      }
      ${y(d.xl)} {
        margin-left: ${$(0)};
      }
    }
  }

  .summary-item__content {
    margin: ${$(0)};
    ${y(d.md)} {
      padding-right: ${$(3)};
    }
    ${y(d.lg)} {
      padding-right: ${$(5)};
    }
    ${y(d.xl)} {
      padding-right: ${$(3)};
    }
    ${y(d.xxl)} {
      padding-right: ${$(6)};
    }
  }
`,z=o.div.withConfig({displayName:"SummaryCollageOneGridWithMargin"})`
  ${E}
  ${({isSingleFeature:e})=>e&&D}

  ${({hasFullWidthImage:e})=>e&&A}
  
  ${({isFullBleedDarkBackground:e})=>e&&R}

  ${({hasEnhancedDailyCartoon:e,theme:t})=>e&&n`
      ${u(d.md,`${s.lg}px`)} {
        ${P}, ${F}, ${L} {
          grid-column: 1 / 7;
        }
      }

      ${h(`${s.lg}px`)} {
        &&& {
          gap: ${$(3)};
        }
      }

      ${y(d.lg)} {
        &&& {
          grid-row-gap: 0;
        }

        ${L} {
          margin-top: ${$(4)};
        }

        ${P}, ${F}, ${L} {
          grid-column: 1 / 9;
        }
      }

      ${g} {
        display: flex;
        justify-content: center;
        margin-bottom: ${$(3)};

        ${c} {
          ${b(t,"typography.definitions.discovery.subhed-section-primary")};
        }
      }
    `}

    ${({showCartoonLink:e})=>e&&n`
      ${h(`${s.lg}px`)} {
        &&& {
          grid-row-gap: 0;
        }
      }
    `}
      ${N} {
    color: ${({customizedSectionDekColorToken:e})=>e&&x(e)};
    ${({customizedSectionDekTypeToken:e})=>e&&b(e)};
  }

  ${({customizedBackgroundColorToken:e,hasRoundedCorners:t})=>(e||t)&&n`
      ${B} {
        border-radius: ${({hasRoundedCorners:e})=>e?"20px":""};
        background-color: ${({customizedBackgroundColorToken:e})=>e?x(e):""};
        padding-bottom: 0;

        .aspect-ratio--overlay-container {
          ${y(d.sm)} {
            border-top-left-radius: ${({hasRoundedCorners:e})=>e?"20px":""};
            border-top-right-radius: ${({hasRoundedCorners:e})=>e?"20px":""};
          }
          ${y(d.md)} {
            border-top-left-radius: ${({hasRoundedCorners:e})=>e?"20px":""};
            border-top-right-radius: ${({hasRoundedCorners:e})=>e?"0px":""};
            border-bottom-left-radius: ${({hasRoundedCorners:e})=>e?"20px":""};
          }
        }
      }

      .summary-item__content {
        ${h(d.md)} {
          padding-top: ${$(4)};
          padding-right: ${$(3)};
          padding-bottom: ${$(7)};
          padding-left: ${$(3)};
        }
      }
    `}
`,O=o.div.withConfig({displayName:"SummaryCollageOneIsFullBleed"})`
  ${({isFullBleedDarkBackground:e})=>e&&n`
      background-color: ${x("colors.discovery.body.dark.background")};
      max-width: 100%;
    `}
`,H=o(r).withConfig({displayName:"SummaryCollageOneDangerousDek"})`
  display: flex;
  justify-content: center;
  margin-top: ${$(4)};
  padding-left: 0;
  ${({theme:e})=>f(e,"color","colors.interactive.base.black")};

  ${h(`${s.md}px`)} {
    grid-column: 1 / -1;
  }

  ${u(d.md,`${s.lg}px`)} {
    grid-column: 1 / 7;
  }

  ${y(d.lg)} {
    grid-column: 1 / 9;
  }
`;e.exports={SummaryCollageOneTitle:P,SummaryCollageOneCtaLink:L,SummaryCollageOneGridWithMargin:z,SummaryCollageOneIsFullBleed:O,SummaryCollageOneItemComponent:F,SummaryCollageOneAnchorLink:M,SummaryCollageOneCtaIcon:W,SummaryCollageOneAside:_,SectionTitleLinkHTML:a,SummaryCollageOneDangerousDek:H}},50597:(e,t,i)=>{const{default:o,css:n,createGlobalStyle:a}=i(51117),{SmartItemBaseText:r}=i(90191),{StackedNavigationHeader:d,StackedNavigationTop:s,StackedNavigationGrid:l,StackedNavigationSectionLogoSize:m,StackedNavigationSectionPrimaryLinks:p,StackedNavigationBottom:g,StackedNavigationSectionUtilityLinksLogin:c}=i(61416),{StandardNavigationDropdown:$}=i(87649),{PersistentTopWrapper:h}=i(87634),{NavigationInternalLink:y,NavigationExternalLink:u}=i(18797),{ResponsiveImageContainer:b}=i(7230),{TextContainer:x}=i(96143),{DrawerModalWrapper:f}=i(4328),{SmartItemAssetContainer:v}=i(51901),{StickyHeroAdWrapper:k}=i(66562),{maxThresholds:w,minThresholds:C}=i(28657),{calculateSpacing:S,getColorStyles:T,getColorToken:I,minScreen:B,maxScreen:N}=i(79720),{BREAKPOINTS:_,ZINDEX_MAP:P}=i(85326),W=n`
  --top-story-header-height: ${S(7)};
  ${B(_.lg)} {
    --top-story-header-height: ${S(9)};
    --top-story-header-height-fixed: ${S(8)};
    --top-story-nav-bar-height: ${S(6)};
  }
`,M=o(r).withConfig({displayName:"ToutsHeader"})``;M.defaultProps={as:"div",colorToken:"colors.discovery.body.white.description",invertedColorToken:"colors.discovery.body.black.description",typeIdentity:"typography.definitions.discovery.description-core"};const L=o(r).withConfig({displayName:"ToutsBody"})`
  & > ul {
    display: grid;
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: ${S(1)};
  }
`;L.defaultProps={as:"div",colorToken:"colors.discovery.body.white.description",invertedColorToken:"colors.discovery.body.black.description",typeIdentity:"typography.definitions.discovery.description-core"};const E=o(r).withConfig({displayName:"ToutsContainer"})`
  text-align: center;
  ${N(`${w.md}px`)} {
    padding: ${S(3)};
  }
  ${B(`${C.lg}px`)} {
    margin-top: ${S(3)};
    padding-top: 0;
    padding-bottom: ${S(3)};
  }

  ${M} {
    margin-bottom: ${S(1)};
  }
`;E.defaultProps={as:"div",colorToken:"colors.discovery.body.white.description",invertedColorToken:"colors.discovery.body.black.description",typeIdentity:"typography.definitions.discovery.description-feature"};const F=n`
  height: auto;
  min-height: unset;
  ${B(`${C.lg}px`)} {
    min-height: ${S(68)};
  }
  ${B(`${C.xl}px`)} {
    min-height: ${S(75)};
    ${({theme:e})=>"transparent"!==e.palette?n`
            height: calc(
              100vh -
                (
                  var(--top-story-header-height) +
                    var(--top-story-nav-bar-height, 0px)
                )
            );
          `:n`
            height: calc(100vh - var(--top-story-nav-bar-height, 0px));
          `};
  }
  ${N(`${w.md}px`)} {
    ${x} {
      min-height: 167vw;
    }
  }
`,D={overlay:()=>n`
    --top-story-layout: 'overlay';
    ${F}

    ${N(`${w.md}px`)} {
      justify-content: stretch;
      ${x} {
        padding-bottom: ${S(3)};
      }
      ${v} {
        position: relative;
        grid-area: content;
      }
    }

    ${B(`${C.lg}px`)} {
      ${x} {
        padding-bottom: ${({additionalContent:e})=>e?0:S(3)};
      }
    }

    ${B(`${C.xl}px`)} {
      ${x} {
        padding-bottom: ${({additionalContent:e})=>S(e?3:6)};
      }
    }
    ${x} {
      ${({presetCategory:e,additionalContent:t})=>"TEXT_ONLY"===e&&!t&&n`
          padding-bottom: 0;
        `}
    }
  `,stack:(e,t={})=>{var i;return n`
    --top-story-layout: 'stack';
    ${(null===(i=null==t?void 0:t.image)||void 0===i?void 0:i.inset)&&n`
      ${E} {
        padding-top: 0;
      }
    `}
  `},"side-by-side":(e,t={})=>{var i;return n`
      --top-story-layout: 'side-by-side';
      ${B(`${C.lg}px`)} {
        ${(null===(i=null==t?void 0:t.image)||void 0===i?void 0:i.inset)&&n`
          --smart-item-asset-h-inset: ${S(3)};
          --smart-item-asset-v-inset: ${S(3)};
        `}

        ${x} {
          ${({additionalContent:e})=>e&&n`
              padding-bottom: 0;
            `};
        }
        ${E} {
          padding-right: ${S(3)};
          padding-left: ${S(3)};
        }
      }
      ${B(`${C.xl}px`)} {
        ${E} {
          padding-right: ${S(6)};
          padding-left: ${S(6)};
        }
      }
      ${x}, ${E} {
        margin: 0 auto;
      }
      ${F}
    `}},A=o.div.withConfig({displayName:"TopStoryHeroAdWrapper"})`
  grid-area: ad;

  ${({addPaddingToCrownAd:e})=>e&&`\n    ${k} {\n      padding: ${S(1)} 0;\n\n      ${B(_.md)} {\n        padding: ${S(2)} 0;\n      }\n    }\n    `}
`,R=o.div.withConfig({displayName:"TopStoryHeader"})`
  ${W};

  position: ${({headerIsFixed:e})=>e?"fixed":"sticky"};
  top: 0;
  left: 0;
  grid-area: header;
  z-index: ${P.persistentTopLayer+1};
  width: 100%;

  ${B(_.lg)} {
    ${s} {
      padding: ${S(2)} 0;
      height: ${({navIsFixed:e})=>e?"var(--top-story-header-height-fixed)":"var(--top-story-header-height)"};
    }

    ${m} ${b} {
      transition: width 0.3s cubic-bezier(0, 0.59, 0.32, 1);
      width: ${({navIsFixed:e})=>S(e?16:21.626)};
      height: ${({navIsFixed:e})=>e&&S(3.75)};
    }

    &&& {
      ${l} {
        height: ${({navIsFixed:e})=>e?"var(--top-story-header-height-fixed)":"var(--top-story-header-height)"};
      }
    }
  }

  ${h} {
    position: relative;
    max-height: var(--top-story-header-height);
  }

  ${d} {
    box-shadow: none;

    ${({isDrawerOpen:e})=>e&&n`
        & {
          transition: none;
        }
      `}

    ${N(`${w.lg}px`)} {
      ${g} {
        transition: none;
      }
    }
  }

  ${({headerTheme:e})=>"transparent"===e&&n`
      background-image: linear-gradient(rgba(0, 0, 0, 0.5), transparent);
    `}

  && ${d} {
    border-bottom: none;

    ${s}, ${g} {
      border-bottom: ${({navIsFixed:e,theme:t})=>e?`\n          1px solid;\n          ${T(t,"border-bottom-color","colors.foundation.menu.dividers")};\n        `:"none"};
    }

    ${c} {
      ${$} {
        box-shadow: none;
      }
      ${$}::before {
        content: none;
      }
    }
  }
`,z=o.div.withConfig({displayName:"TopStoryComponent"})`
  grid-area: content;
`,O=o(p).withConfig({displayName:"TopStoryPrimaryLinks"})`
  grid-area: navigation;
`,H=o.div.withConfig({displayName:"TopStoryWrapper"})`
  ${W};

  ${({headerIsFixed:e,palette:t})=>e?`margin-top: ${"transparent"===t?0:"var(--top-story-header-height)"};`:`margin-top: ${"transparent"===t?"calc(-1 * var(--top-story-header-height))":0};`}

  display: grid;
  grid-template-areas:
    'content'
    'navigation';
  grid-template-rows: repeat(12, auto);

  ${({navIsFixed:e})=>e&&n`
      margin-bottom: var(--top-story-nav-bar-height, 0px);
    `}

  ${({palette:e,theme:t})=>"standard"===e&&n`
      ${z} {
        ${N(`${w.lg}px`)} {
          border-bottom: 1px solid;
          ${T(t,"border-bottom-color","colors.interactive.base.border")};
        }
      }
    `}

  && {
    ${O} {
      display: none;
      grid-row: -1;
      align-items: center;
      transition: height 0.3s cubic-bezier(0, 0.59, 0.32, 1);
      z-index: ${P.persistentBottomLayer};
      border-bottom: 1px solid;
      height: var(--top-story-nav-bar-height);
      overflow: hidden;

      ${({theme:e})=>T(e,"border-bottom-color","colors.foundation.menu.dividers")};

      ${({theme:e})=>T(e,"background-color","colors.foundation.menu-bg.collapsed")};

      ${({theme:e,palette:t,navIsFixed:i})=>"standard"===t&&!i&&`\n          border-top: 1px solid;\n          ${T(e,"border-top-color","colors.foundation.menu.dividers")};\n        `}

      ${({navIsFixed:e})=>e&&n`
          position: fixed;
          left: 0;
          top: var(--top-story-header-height-fixed);
          width: 100%;
        `}

      ${y}, ${u} {
        ${({theme:e})=>T(e,"color","colors.foundation.collapsed-menu.nav-link.default")};
      }

      ${({shouldCollapseNavbar:e})=>e&&n`
          border-bottom: none;
          height: 0;
        `}
    }

    ${B(_.lg)} {
      ${O} {
        display: flex;
      }
    }
  }

  overflow: hidden;
`,U=a`
  ${f} {
    .drawer__overlay {
      &.drawer__overlay--opening {
        transition: none;
      }

      &.drawer__overlay--closing {
        transition: none;
      }

      &.drawer__overlay--opening.drawer--overlay-color-white {
        background-color: rgba(
          ${I("colors.interactive.base.white",{rgbOnly:!0})},
          1
        );
      }
    }

    .drawer--megamenu-topstory {
      padding-top: ${({drawerTop:e})=>n`calc(${e}px + ${S(6)})`};
    }
  }
`;e.exports={TopStoryHeader:R,TopStoryHeroAdWrapper:A,TopStoryComponent:z,TopStoryPrimaryLinks:O,TopStoryWrapper:H,ToutsContainer:E,ToutsHeader:M,ToutsBody:L,stylePool:D,GlobalStyles:U}},43154:(e,t,i)=>{const{default:o,css:n}=i(51117),{calculateSpacing:a,minScreen:r,getColorToken:d,getTypographyStyles:s,maxScreen:l,minMaxScreen:m}=i(79720),{BREAKPOINTS:p}=i(85326),g=i(4131),{CarouselControlButton:c,CarouselFooter:$,CarouselList:h,CarouselListItem:y,CarouselTitle:u,CarouselWrapper:b,CurrentSlideIndicatorWrapper:x,CarouselSectionTitle:f}=i(95764),v=o.div.withConfig({displayName:"CarouselViewAll"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${a(2)} 0;
  width: 100%;

  ${({hasCarouselButtonIncreasedMarginBottom:e})=>e&&`\n      margin-bottom: ${a(6)};\n    `}
`,k=()=>n`
    ${m(0,`calc(${p.md} - 1px)`)} {
      padding-right: ${a(3)};
    }

    ${m(p.md,`calc(${p.xl} - 1px)`)} {
      padding-right: ${a(6)};
    }

    ${m(p.xl,p.xxl)} {
      padding-right: ${a(8)};
    }
  `,w=o(g).withConfig({displayName:"CarouselRow"})`
  margin: 0 auto;

  &.product__carousel--has-increased-padding {
    padding-top: ${a(5)};
    padding-bottom: ${a(5)};
  }

  &.product__carousel--has-moderate-padding {
    padding-top: ${a(5)};
    padding-bottom: ${a(5)};

    @media (min-width: ${p.md}) {
      padding-top: ${a(5)};
    }

    @media (min-width: ${p.xl}) {
      padding-top: ${a(7)};
      padding-bottom: ${a(7)};
    }
  }

  &.product__carousel--has-full-bleed {
    ${b} {
      padding-right: 0;
      padding-left: 0;
      max-width: 100%;
    }
    ${h} {
      margin: 0;
    }
  }

  &.product__carousel--has-full-bleed-right {
    ${b} {
      ${l(p.xxl)} {
        padding-right: 0;
      }
    }

    ${$} {
      ${k()};
    }
  }

  &.product__carousel--body-has-full-bleed-right {
    ${b} {
      ${l(p.xxl)} {
        padding-right: 0;
        ${f},${x} {
          margin-right: 4rem;
        }
        ${x} {
          margin-top: 2rem;
        }
      }
      ${l(p.xl)} {
        ${f},${x} {
          margin-right: 3rem;
        }
      }
      ${l(p.md)} {
        ${f},${x} {
          margin-right: 1.5rem;
        }
      }
    }
    ${$} {
      ${k()};
    }
  }

  ${u} {
    ${({theme:e})=>s(e,"typography.definitions.discovery.subhed-section-primary")};

    color: ${({theme:e})=>d(e,"colors.discovery.body.light.heading")};
  }

  ${b} {
    margin: 0 auto;
    margin-bottom: ${a(4)};
    padding-right: ${a(3)};
    padding-left: ${a(3)};
    ${({hasFullBleedCarouselWithPaddingWrapperOnMobile:e})=>e&&` @media (max-width: ${p.md}) {\n        padding: 0;\n      }\n    `}
    max-width: ${p.lg};
    ${({hasCarouselTopMargin:e})=>e&&`margin: ${a(4)} auto;`}

    @media (min-width: ${p.md}) {
      padding-right: ${a(6)};
      padding-left: ${a(6)};
      max-width: ${p.lg};
    }

    @media (min-width: ${p.lg}) {
      padding-right: ${a(6)};
      padding-left: ${a(6)};
      max-width: ${p.xl};
    }

    @media (min-width: ${p.xl}) {
      padding-right: ${a(8)};
      padding-left: ${a(8)};
      max-width: ${p.xxl};
    }

    @media (min-width: ${p.xxl}) {
      padding-bottom: ${a(5)};
    }

    &.carousel--has-moderate-spacing {
      @media (min-width: ${p.xxl}) {
        padding-bottom: 0;
      }

      ${h} {
        margin-top: ${a(4)};
        @media (min-width: ${p.xl}) {
          margin-top: ${a(5)};
        }
      }
    }
  }

  ${h} {
    margin-top: ${a(2)};
    background: none;
    overflow-x: auto;
  }

  ${c} {
    &:disabled {
      display: none;
    }
  }

  ${y} {
    ${({hasMarginOnDesktop:e})=>e&&"\n    margin: 0 32px 0 0;\n    &:first-of-type {\n      margin-left: -1px;\n    }\n    &:last-of-type {\n      margin-right: 0;\n    }\n  "}
    ${({hasFullBleedCarouselWithPaddingWrapperOnMobile:e})=>e&&"\n    @media (max-width: 760px) {\n      margin: 0;\n      padding-left: 12px;\n    \n      &:last-of-type {\n        padding-right: 24px; \n        width: 96%;\n      }\n      &:first-of-type {\n        padding-left: 24px; \n        width: 92%;\n      }\n    }\n  "}
    .summary-item__rubric {
      ${({theme:e})=>s(e,"typography.definitions.globalEditorial.context-primary")};

      color: ${({theme:e})=>d(e,"colors.discovery.body.light.context-signature")};
    }
  }

  .summary-item__content {
    padding-bottom: ${a(2)};
    width: auto;

    @media (min-width: ${p.xxl}) {
      padding-bottom: ${a(4)};
    }
  }

  .summary-item--bundle {
    .summary-item__content {
      width: auto;
    }

    .summary-item__hed {
      margin-top: 0;
      margin-bottom: ${a(1)};
    }
  }

  .summary-item {
    .summary-item__hed {
      width: auto;
      ${({shouldOverrideTypeToken:e,theme:t})=>s(t,e?"typography.definitions.discovery.hed-core-secondary":"typography.definitions.discovery.hed-core-primary")};

      color: ${({theme:e})=>d(e,"colors.discovery.body.light.heading")};
    }
  }

  .summary-item__hed-link::after {
    ${({theme:e})=>`\n        border-bottom: 1px solid ${d(e,"colors.discovery.body.light.accent")};\n      )};\n      `}

    .summary-item__dek {
      ${({shouldOverrideTypeToken:e,theme:t})=>s(t,e?"typography.definitions.discovery.description-core":"typography.definitions.discovery.description-feature")};

      color: ${({theme:e})=>d(e,"colors.discovery.body.light.description")};
    }
  }
`,C=o(g).withConfig({displayName:"FeaturesRow"})`
  ${({hasMinimalVerticalSpacing:e,hasReducedBottomMargin:t,hasReducedMargin:i,hasIncreasedVerticalPaddingTop:o,hasNoTopBottomMarginOnMobile:n,shouldUseCustomMargin:d})=>o?`margin-top: ${a(5)};`:e?`margin-bottom: ${a(2)};`:i?"margin-bottom: 0;":t?`margin-bottom: ${a(3)};`:n?`\n          ${r(p.sm)} {\n            margin-top: 0;\n            margin-bottom: 0;\n          }`:d?`margin-bottom: ${a(5)};`:`margin-bottom: ${a(7)};`}

  &.verso-features--has-increased-padding {
    padding-top: ${a(6)};
    padding-bottom: ${a(6)};

    @media (min-width: ${p.md}) {
      padding-top: ${a(8)};
      padding-bottom: ${a(8)};
    }

    @media (min-width: ${p.xl}) {
      padding-top: ${a(10)};
      padding-bottom: ${a(10)};
    }
  }

  &.verso-features--has-increased-padding-top {
    padding-top: ${a(8)};
  }
`;e.exports={CarouselRow:w,FeaturesRow:C,CarouselViewAll:v}},14694:(e,t,i)=>{const o=i(45697),n=i(67294),a=i(94184),{BlockquoteEmbedWrapper:r,BlockquoteEmbedContent:d,BlockquoteEmbedFooter:s,BlockquoteEmbedCite:l}=i(45470),{trackComponent:m}=i(40199),p=({attributes:e,children:t,citeUrl:i,className:o,dangerousAttribution:p,hasParagraphMargin:g,hasSmallMargins:c,hasTopBorder:$,shouldUseBodyColor:h})=>(n.useEffect((()=>{m("BlockquoteEmbed")}),[]),n.createElement(r,Object.assign({},e,{cite:i,hasTopBorder:$,hasSmallMargins:c,className:a(o,"blockquote-embed")}),n.createElement(d,{hasParagraphMargin:g,shouldUseBodyColor:h,className:"blockquote-embed__content"},t),p&&n.createElement(s,null,n.createElement(l,{dangerouslySetInnerHTML:{__html:p}}))));p.propTypes={attributes:o.object,children:o.oneOfType([o.arrayOf(o.node),o.node]).isRequired,citeUrl:o.string,className:o.string,dangerousAttribution:o.string,hasParagraphMargin:o.bool,hasSmallMargins:o.bool,hasTopBorder:o.bool,shouldUseBodyColor:o.bool},p.defaultProps={hasSmallMargins:!1,hasTopBorder:!0,shouldUseBodyColor:!1},p.displayName="BlockquoteEmbed",e.exports=p},86982:(e,t,i)=>{const{asConfiguredComponent:o}=i(36380),n=i(14694);e.exports=o(n,"BlockquoteEmbed")},31828:(e,t,i)=>{const o=i(51117).default,n=i(98288),{BaseText:a,BaseLink:r}=i(74327),{BREAKPOINTS:d}=i(85326),{ButtonWrapper:s}=i(41909),{getTypographyStyles:l,calculateSpacing:m,getColorStyles:p}=i(79720),g=o.section.withConfig({displayName:"TickerWrapper"})`
  ${"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"}
  ${({layoutPlacement:e})=>"text-below-mobile-only"===e&&`\n      flex-direction: column;\n      @media (min-width: ${d.md}) {\n        flex-direction: row;\n      }`}

  ${({applyStyleForLandscapeImg:e})=>e&&`\n      @media (max-width: ${d.md}) {\n        flex-direction: column;\n      }\n      `}
  ${({hasBorders:e,isInverted:t,theme:i})=>e&&`\n      border-width: 1px 0;\n      border-style: solid;\n      ${p(i,"border-color","colors.discovery.body.white.divider")};\n    `}

  ${({hasSolidBorders:e,theme:t})=>e&&`border-width: 4px 0px;\n    border-style: solid;\n    ${p(t,"border-color","colors.interactive.base.black")};`}

  ${({isInverted:e,theme:t})=>e&&`\n      ${p(t,"background","colors.consumption.lead.inverted.heading-background")};\n    `}

  padding: ${m(2)} 0;

  @media (min-width: ${d.md}) {
    padding: ${m(1)} 0;
  }

  min-height: 88px;

  ${({marginTopType:e})=>"small"===e?`margin-top: ${m(1)};`:"large"===e?`margin-top: ${m(4)};`:"none"===e?"margin-top: 0;":""}

  ${({hasMinimalBottomMargin:e})=>e&&`margin-bottom: ${m(2)};`}

  ${({hideTopBorder:e})=>e&&"\n  border-top: 0px\n"}

  ${({isSpecialTheme:e,theme:t})=>e&&`\n    ${p(t,"background","colors.consumption.body.special.bg-photo")};\n  `}
`,c=o.span.withConfig({displayName:"TickerText"})`
  ${"\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"}
  flex-direction: column;
  align-items: flex-start;
  ${({applyStyleForLandscapeImg:e})=>e&&`\n    @media (max-width: ${d.md}){\n      align-items: center;\n      gap: 0;\n    };`}
  @media (min-width: ${d.md}) {
    flex-direction: row;
    gap: 5px;
    align-items: center;
  }

  ${({layoutPlacement:e})=>"side-by-side"===e?`\n      margin-left: ${m(3)};\n      gap: ${m(1)};\n      @media (min-width: ${d.md}) {\n        margin-left: 0;\n      }\n    `:"dense"===e?"\n      display: block;\n    ":""}

  ${({applyStyleForLandscapeImg:e})=>e&&`\n    @media (max-width: ${d.md}) {\n      &{\n        ${s}{\n          margin-top: ${m(2)};\n        }\n      }\n    }\n  `}
  ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")}
      ${({applyStyleForNoImage:e})=>e&&`\n          @media (max-width: ${d.md}) {\n            & {\n              ${s} {\n                margin: 0 auto;\n              }\n            }\n          }\n        `}
`,$=o(n).withConfig({displayName:"TickerImage"})`
  position: relative;
  height: auto;

  ${({imagePosition:e})=>"right"===e&&`\n    order: 2;\n    margin-top: ${m(2)};\n\n    @media (min-width: ${d.md}) {\n      margin-top: 0;\n      margin-left: ${m(2)};\n    }\n  `};

  ${({imagePosition:e,layoutPlacement:t})=>"left"===e&&"dense"===t&&`\n    margin-right: ${m(2)};\n    `};

  ${({imagePosition:e})=>"left"===e&&`\n  @media (min-width: ${d.md}) {\n    margin-right: ${m(2)};\n  }\n  `};

  ${({hasRoundedImage:e})=>e&&`\n    border-radius: ${m(1)}\n  `};

  ${({imageMinWidth:e})=>e&&`\n      min-width: ${e}px;\n    `}
`,h=o(a).withConfig({displayName:"TickerHed"})`
  ${({layoutPlacement:e})=>"text-below-mobile-only"===e&&`\n      text-align: center;\n      margin: ${m(2)} 0 ${m(2)} 0;\n      @media (min-width: ${d.md}) {\n        margin: 0 ${m(2)} 0 ${m(2)};\n      }\n      `}

  ${({isLink:e,layoutPlacement:t})=>e&&"dense"===t?`margin-right: ${m(.5)}`:e?"":`\n      @media (min-width: ${d.md}) {\n        margin-right: ${m(2)};\n      }\n    `};
  ${({isInverted:e,theme:t})=>p(t,"color",e?"colors.consumption.lead.inverted.heading":"colors.consumption.lead.standard.heading")};

  ${({isLink:e,layoutPlacement:t})=>e&&"dense"!==t&&`\n    padding-bottom: 0;\n    @media (min-width: ${d.md}) {\n      padding-right: 0;\n    }\n  `}

  ${({typeTokenSet:e,theme:t})=>"utility"===e?l(t,"typography.definitions.utility.body"):""};
  @media (max-width: ${d.md}) {
    ${({applyStyleForLandscapeImg:e})=>e&&`margin-top: ${m(2)};`}
    ${({applyStyleForNoImage:e})=>e&&"margin-top: 0;"}
  }
`;h.defaultProps={as:"span",colorToken:"colors.discovery.body.white.heading",typeIdentity:"typography.definitions.discovery.description-feature"};const y=o(r).withConfig({displayName:"TickerLink"})`
  ${({typeTokenSet:e,theme:t})=>l(t,"utility"===e?"typography.definitions.utility.button-utility":"typography.definitions.discovery.description-feature")}

  &:visited,
  &:link {
    ${({isInverted:e,theme:t})=>p(t,"color",e?"colors.interactive.base.white":"colors.interactive.base.brand-primary")};
  }

  &:hover {
    ${({isInverted:e,theme:t})=>p(t,"color",e?"colors.interactive.base.brand-primary":"colors.interactive.base.dark")};
  }

  &:focus {
    ${({isInverted:e,theme:t})=>p(t,"color",e?"colors.interactive.base.brand-primary":"colors.interactive.base.dark")};
  }
  @media (max-width: ${d.md}) {
    ${({applyStyleForNoImage:e})=>e&&"margin: 0 auto;"}
  }
`;e.exports={TickerHed:h,TickerText:c,TickerImage:$,TickerWrapper:g,TickerLink:y}},97893:(e,t,i)=>{const{default:o,css:n}=i(51117),{BREAKPOINTS:a}=i(85326),{applyGridSpacing:r,cssVariablesGrid:d}=i(62470),{calculateSpacing:s,minScreen:l,getColorToken:m,getTypographyStyles:p,firstLetterDropCap:g}=i(79720),{BaseText:c}=i(74327),$=i(48655),h=i(94753),y=`\n  ${d()}\n  ${r("padding")}\n\n  margin: 0 auto;\n  width: 100%;\n  max-width: ${a.xxl};\n`,u=o.div.withConfig({displayName:"EmbedWrapper"})`
  ${y}

  ${({isEmbedWrapperFullBleed:e})=>e&&n`
      padding-right: 0;
      padding-left: 0;
      max-width: 100%;
    `}
`,b=o.div.withConfig({displayName:"EmbedWrapperHed"})`
  margin-bottom: ${s(2)};
`,x=o(c).withConfig({displayName:"EmbedWrapperDek"})`
  margin: 0 auto ${s(2)};
  padding-right: ${s(1)};
  padding-left: ${s(1)};
  max-width: ${s(75)};
  text-align: center;
  ${p("typography.definitions.consumptionEditorial.description-core")}
`,f=o($).withConfig({displayName:"GridWrapper"})`
  ${y}
`,v=o(h).withConfig({displayName:"EmbedBody"})`
  p.has-dropcap {
    margin-top: ${s(4,"px")};

    &::first-letter {
      ${g};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${m("colors.consumption.lead.standard.heading")};
      }
    }
  }
  ${({constrainPagragraph:e})=>e&&`\n      inline-embed{\n        display: block;\n        p {\n          display:inline-block;\n          max-width: ${s(40.875)};\n          ${l(a.lg)} {\n            max-width: ${s(91.5)};\n          }\n        }\n      }\n    `}
`;e.exports={EmbedWrapper:u,EmbedWrapperHed:b,EmbedWrapperDek:x,EmbedBody:v,GridWrapper:f}}}]);