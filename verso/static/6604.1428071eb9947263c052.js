(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[6604],{34240:(e,n,i)=>{const{default:o}=i(51117),{BREAKPOINTS:a}=i(85326),{applyGridSpacing:t,cssVariablesGrid:r}=i(62470),{minScreen:d,calculateSpacing:s,getColorToken:l,getTypographyStyles:m,firstLetterDropCap:g}=i(79720),{maxThresholds:p}=i(28657),c=i(94753),h=i(22068),{AssetEmbedWrapper:$,AssetEmbedAssetContainer:u}=i(42158),y=o.div.withConfig({displayName:"Wrapper"})`
  ${r()}

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: var(--grid-gap);
  margin: 0 auto;
  width: 100%;
  max-width: ${a.xxl};
  row-gap: var(--grid-gap);
  ${t("padding")}

  ${d(a.md)} {
    grid-template-columns: repeat(12, 1fr);
  }
`,b=o(h).withConfig({displayName:"BundleBodyClamp"})`
  grid-column: 1/-1;

  ${d(a.md)} {
    grid-column: 3/11;
  }
`,f=o(c).withConfig({displayName:"BundleBodyContainer"})`
  grid-column: 1/-1;

  ${d(a.md)} {
    grid-column: 3/11;
  }

  ${({shouldOverrideTypeToken:e})=>m(e?"typography.definitions.consumptionEditorial.body-core":"typography.definitions.consumptionEditorial.subhed-aux-secondary")}

  @media (max-width: ${p.md}px) {
    ${({shouldOverrideTypeToken:e})=>m("typography.definitions.consumptionEditorial.body-core")};
  }

  p:first-child {
    padding-top: ${s(4)};
    @media (min-width: ${a.lg}) {
      padding-top: ${s(9)};
    }
  }

  p.has-dropcap {
    margin-top: ${s(4,"px")};

    &::first-letter {
      ${g};
    }

    &.has-dropcap__lead-standard-heading {
      &::first-letter {
        padding: 0.1em 0.05em 0 0;
        color: ${l("colors.consumption.lead.standard.heading")};
        @media (min-width: ${a.lg}) {
          font-size: 95px; /* Defined by design */
        }
      }
    }
  }
  ${({shouldOverrideSpacing:e})=>e&&`\n    h2,\n    h3,\n    h4,\n    h5 {\n      margin: ${s(5,"px")} 0;\n    }\n    `}

  ${$} {
    display: grid;
    grid-gap: 1.25rem;
    grid-template-columns: repeat(4, 1fr);

    @media (min-width: ${a.md}) {
      grid-template-columns: repeat(8, 1fr);
    }

    ${u} {
      grid-column: 2 / span 2;

      @media (min-width: ${a.md}) {
        grid-column: 3 / span 4;
      }
    }
  }
`;e.exports={Wrapper:y,BundleBodyClamp:b,BundleBodyContainer:f}},219:(e,n,i)=>{const{default:o,css:a}=i(51117),{BREAKPOINTS:t}=i(85326),{calculateSpacing:r,minScreen:d,maxScreen:s,minMaxScreen:l,getTypographyStyles:m,getColorStyles:g,getColorToken:p}=i(79720),{BaseText:c,BaseWrap:h}=i(74327),$=i(48655),{cssVariablesCollage:u}=i(61774),{maxThresholds:y}=i(28657),{GridItem:b}=i(14134),{SectionTitleHed:f}=i(80577),{InlineVideoItemHed:w}=i(75430),{RubricName:S}=i(7320),{SummaryItemHedLink:v}=i(88269),{SummaryItemHedBase:C}=i(27853),x=`\n  ${d(t.lg)} {\n    border-right: 0;\n    padding-right: 0;\n  }\n`,k=o.div.withConfig({displayName:"SummaryCollageThreeItemWrapper"})`
  ${({theme:e})=>"inverted"===e.palette?`\n          ${S} {\n            ${g(e,"color","colors.discovery.body.black.context-signature")};\n          }\n\n          ${v} {\n            &:hover,\n            &:focus,\n            &:active {\n              ${g(e,"color","colors.discovery.body.black.heading")};\n            }\n\n            ${C} {\n              ${g(e,"color","colors.discovery.body.black.heading")};\n            }\n          }\n        `:""}
  ${e=>a`
    height: 100%;
    ${l(0,t.lg)} {
      .inline-video-item {
        border-bottom: 0;
      }
    }
    ${e.isPrimaryItemFullBleed&&0===e.index&&`&{\n      .summary-item__image-link {\n        ${l(0,`${y.lg}px`)} {\n          margin-right: ${r(-3)};\n          margin-left: ${r(-3)};\n        }\n      }\n     \n    }`}

    ${!e.hasBorder&&"\n      border-bottom: 0;\n    "}
  `}
  ${({shouldUseAlternativeStyle:e})=>e?`\n  .summary-item__rubric {\n    margin: ${r(2)} 0;\n  }\n\n  .summary-item__hed-link {\n    margin-bottom: ${r(2)};\n  }\n\n  .summary-item__dek {\n    margin-bottom: ${r(2)};\n  }\n\n  .summary-item__content {\n    padding: 0;\n  }\n\n  .summary-item__byline-date-icon {\n    margin-bottom: ${r(2)};\n  }\n\n  ${s(t.lg)} {\n    .summary-item__byline-date-icon {\n      margin-bottom: ${r(4)};\n    }\n  }`:""};
`,_=(e,n,i,o=0,g=!1)=>a`
  &:nth-child(${o+1}) {
    ${d(t.lg)} {
      grid-column: 1 / span 8;
      grid-row: span 2;
      ${d(t.lg)} {
        margin-right: calc(var(--border-offset) * -1);
        ${n&&" margin-right: 0;"}
      }
    }
    ${k} {
      ${(e=>a`
  ${({theme:e})=>"inverted"===e.palette?a`
          ${d(t.lg)} {
            border-right: 1px solid
              ${p("colors.discovery.body.black.divider")};
          }
        `:a`
          ${d(t.lg)} {
            border-right: 1px solid
              ${p("colors.discovery.body.white.border")};
          }
        `}

  ${d(t.lg)} {
    border-bottom: 0;
    ${({shouldUseAlternativeStyle:e})=>e?`padding-right: ${r(2)}`:"padding-right: var(--border-offset)"};

    ${e&&" padding-right: 0;\n    "}
  }

  .summary-item__hed {
    ${m("typography.definitions.discovery.hed-break-out")}
  }

  .summary-item__dek {
    ${m("typography.definitions.discovery.description-feature")}
  }
`)(n)};
    }
  }

  &:nth-child(1n + ${o+2}) {
    ${d(t.lg)} {
      grid-column: 9 / span 4;
    }
    ${k} {
      ${(e=>a`
  ${d(t.lg)} {
    padding: 0 0 ${r(2)} 0;
    ${e&&`\n        padding-bottom: ${r(2.5)};\n      `}
    ${({shouldUseAlternativeStyle:e})=>e?"padding: 0":`padding: 0 0 ${r(2)} 0`};

    .summary-item__hed {
      margin-bottom: ${r(2)};
    }

    .summary-item__hed-link::after {
      margin-bottom: ${r(2)};
    }

    .summary-item__dek {
      ${({shouldUseAlternativeStyle:e})=>e?`margin-bottom: ${r(1)}`:`margin-bottom: ${r(2)}`};
    }

    .summary-item__metadata-primary {
      margin-bottom: ${r(1)};
    }

    .summary-item__metadata-secondary {
      margin-bottom: ${r(2)};
    }

    .summary-item__content {
      padding-bottom: 0;
    }
  }
`)(i)};
    }
  }

  &:nth-child(${o+3}) {
    ${k} {
      ${((e,n,i)=>a`
  ${l(0,t.lg)} {
    border-bottom: none;
    padding-bottom: 0;

    ${i&&`\n        ${w} {\n          margin-bottom: 0;\n        }\n      `}
  }

  ${d(t.md)} {
    padding-bottom: 0;

    .inline-video-item {
      border-bottom: none;
    }
  }
  ${s(t.md)} {
    ${n&&".inline-video-item {\n        border-bottom: 1px solid black;\n      }\n    "}
  }
  ${({shouldUseAlternativeStyle:e})=>e?`${l(t.md,t.lg)} {\n      .summary-item__byline-date-icon {\n        margin-bottom: 0;\n      }\n    }`:`${d(t.lg)} {\n      padding-top: ${r(4)};\n    }`};

  ${e&&"\n    padding-bottom: 0;\n  "}
`)(e,i,g)};
    }
  }
`,T=o.div.withConfig({displayName:"SummaryCollageThreeTitle"})`
  ${({theme:e})=>"inverted"===e.palette?`\n          ${f} {\n            ${g(e,"color","colors.discovery.body.black.heading")};\n          }\n        `:""}

  ${({shouldUseAlternativeStyle:e})=>e?"":`margin-bottom: ${r(2)};`};
  ${({hasIncreasedTitleSpacing:e,hasOtherTitleSpacing:n})=>n?`\n        margin-bottom: ${r(2)};\n        padding-top: ${r(6)};\n\n        ${d(t.lg)}{\n          margin-bottom: ${r(3)};\n          padding-top: ${r(5)};\n        }\n      `:e?`\n        margin-bottom: ${r(4)};\n        padding-top: ${r(4)};\n      `:""}
`,H=o(c).withConfig({displayName:"SummaryCollageThreeDek"})`
  ${({theme:e})=>"inverted"===e.palette?`\n          ${g(e,"color","colors.discovery.body.black.heading")};\n        `:""}

  padding-right: ${r(1)};
  padding-left: ${r(1)};
  max-width: 600px;
  text-align: center;
  ${m("typography.definitions.consumptionEditorial.description-core")}
  ${({shouldUseDiscoveryTypeToken:e,theme:n})=>e&&`${m(n,"typography.definitions.discovery.description-page")};`};
`,P=o($.WithMargins).withConfig({displayName:"SummaryCollageThreeWrapper"})`
  ${({hasExtraTopPadding:e})=>e&&`padding-top: ${r(5)};`}

  && {
    ${({hasTopSpacing:e})=>e?`\n          ${d(t.md)} {\n            margin-top: ${r(4)};\n          }\n        `:""}
  }

  > ${b} {
    ${({dangerousHed:e})=>e&&"\n        &:first-child {\n          grid-column: 1/-1;\n          grid-row: 1;\n          margin-bottom: 0px;\n        }\n      "}

    ${({dangerousHed:e,hasDangerousDek:n})=>!e&&n&&`\n        &:first-child {\n          grid-column: 1/-1;\n          margin: 0 auto;\n          margin-bottom: ${r(2)};\n        }\n      `}
  }

  > ${b} {
    ${({hasDangerousDek:e,dangerousHed:n,hasModerateBottomMarginOnDek:i})=>e&&n&&`\n       &:nth-child(2){\n        grid-column: 1/-1;\n        margin: 0 auto;\n        margin-bottom: ${r(4)};\n        ${d(t.lg)} {\n          margin-bottom: ${r(6)};\n          ${i&&`margin-bottom: ${r(4)}`}\n        }\n       }\n     `}
  }

  > ${b} {
    grid-column: 1 / -1;
    ${({shouldUseAlternativeStyle:e})=>e?`\n    &:nth-child(3),\n    &:nth-child(4) {\n      ${d(t.lg)} {\n        ${k} {\n          margin-top: ${r(3)};\n        }\n      }\n    }`:`margin-bottom: ${r(2)}`};

    ${d(t.lg)} {
      margin-bottom: 0;
    }
    ${({hasNoMarginBottonOnLastItem:e})=>e&&a`
        &:last-child {
          ${s(t.lg)} {
            margin-bottom: 0;
          }
        }
      `}
  }

  && {
    ${u()}
    row-gap: 0;
  }

  ${k} {
    ${({shouldUseAlternativeStyle:e})=>e?`\n    ${({hasBorder:e})=>e&&`border-bottom: 1px solid\n    ${p("colors.discovery.body.white.border")};`}`:`\n    border-bottom: 1px solid\n      ${p("colors.discovery.body.white.border")};\n      `};

    ${({hasBorder:e})=>e&&`border-bottom: 1px solid\n      ${p("colors.discovery.body.white.border")};`}
    padding-bottom: 0;

    ${d(t.lg)} {
      border-bottom: 0;
    }
  }

  ${k} {
    .summary-item__hed {
      ${m("typography.definitions.discovery.hed-core-primary")};

      ${d(t.lg)} {
        ${m("typography.definitions.discovery.hed-core-secondary")};
      }
    }
  }

  .inline-video-item__image-link {
    margin-bottom: ${r(2)};
  }

  .inline-video-item__hed {
    ${({isDenseSummaryCollageThree:e})=>e?`\n            margin-bottom: ${r(2.5)};\n          `:`margin-bottom: ${r(2)}`}
  }

  ${({dangerousHed:e,hasDangerousDek:n,hasMinimalSummaryItem:i,hideVerticalBorders:o,isDenseSummaryCollageThree:t,hasNoMarginBottomLastItemHed:r})=>(e&&!n||n&&!e)&&a`
      > ${b} {
        ${_(i,o,t,1,r)}
      }
    `}

  ${({dangerousHed:e,hasDangerousDek:n,summaryCollageColSpan:i})=>(e&&!n||n&&!e)&&"use9"===i&&a`
      > ${b} {
        ${d(t.lg)} {
          &:nth-child(2) {
            grid-column: 1 / span 9;
          }

          &:nth-child(1n + 3) {
            grid-column: 10 / span 3;
          }
          &:nth-child(5) {
            grid-column: 1 / -1;
          }
        }
      }
    `}
    
    ${({dangerousHed:e,hasDangerousDek:n,hasMinimalSummaryItem:i,hideVerticalBorders:o,isDenseSummaryCollageThree:t})=>!e&&!n&&a`
      > ${b} {
        ${_(i,o,t,0)}
      }
    `}

${({dangerousHed:e,hasDangerousDek:n,summaryCollageColSpan:i})=>!e&&!n&&"use9"===i&&a`
      > ${b} {
        ${d(t.lg)} {
          &:nth-child(1) {
            grid-column: 1 / span 9;
          }

          &:nth-child(1n + 2) {
            grid-column: 10 / span 3;
          }
        }
      }
    `}

${({summaryCollageColSpan:e})=>"use4"===e&&a`
      > ${b} {
        ${d(t.lg)} {
          &:nth-child(1) {
            grid-column: 1 / span 12;
          }

          &:nth-child(2) {
            grid-column: 1 / span 4;

            ${k} {
              border: none;

              .summary-item__hed {
                ${m("typography.definitions.discovery.hed-core-primary")};
              }
            }
          }

          &:nth-child(3) {
            grid-column: 5 / span 4;
          }

          &:nth-child(4) {
            grid-column: 9 / span 4;

            ${k} {
              padding-top: 0;
            }
          }
        }

        ${s(t.lg)} {
          &:nth-child(2) {
            ${k} {
              .summary-item__hed {
                ${m("typography.definitions.discovery.hed-core-primary")};
              }
            }
          }
        }
      }
    `}

    ${({dangerousHed:e,hasDangerousDek:n,hasMinimalSummaryItem:i,hideVerticalBorders:o,isDenseSummaryCollageThree:t})=>e&&n&&a`
      > ${b} {
        ${_(i,o,t,2)}
      }
    `}

  > ${b} {
    ${({shouldShowSeeMoreButton:e})=>e&&`\n      &:last-child {\n        grid-column: 1 / -1;\n        margin: 0 auto;\n        ${s(`${y.md}px`)} {\n          padding-bottom: ${r(5)};\n        }\n\n        ${d(t.lg)} {\n          padding-top: ${r(4)};\n        }\n      }\n    `}
  }

  ${({dangerousHed:e,hasDangerousDek:n,summaryCollageColSpan:i})=>e&&n&&"use9"===i&&`\n      > ${b} {\n        ${d(t.lg)} {\n          &:nth-child(3) {\n            grid-column: 1 / span 9;\n          }\n\n          &:nth-child(1n + 4) {\n            grid-column: 10 / span 3;\n          }\n        }\n      }\n    `}

  ${({hasExtraBottomPadding:e})=>e?`\n          padding-bottom: ${r(5)};\n        `:""}
  
    ${({hasExtraPadding:e})=>e&&`\n    > ${b}{ \n        &:nth-child(1) {\n          ${k} {\n            ${d(t.lg)} {\n              padding-right: ${r(4)};\n            }\n          }\n        }\n\n        &:nth-child(2),\n        &:nth-child(3) {\n          ${k} {\n            ${({shouldUseAlternativeStyle:e})=>e?`\n            ${d(t.lg)} {\n              padding-left: ${r(2)};`:`padding-left: ${r(2)};`};\n            }\n          }\n        }\n      }\n    `}

    ${({dangerousHed:e,hasDangerousDek:n,hideVerticalBorders:i})=>!e&&!n&&i&&`\n        > ${b}{ \n            &:nth-child(1) {\n              ${d(t.lg)} {\n                margin-right: 0;\n              }\n              ${k} {\n                ${x}\n              }\n            }\n        }\n    `}

    ${({dangerousHed:e,hasDangerousDek:n,hideVerticalBorders:i})=>(e&&!n||n&&!e)&&i&&`\n      > ${b}{ \n          &:nth-child(2) {\n            ${d(t.lg)} {\n              margin-right: 0;\n            }\n            ${k} {\n              ${x}\n            }\n          }\n      }\n    `}

    ${({dangerousHed:e,hasDangerousDek:n,hasMinimalSummaryItem:i})=>!e&&!n&&i&&`\n      .summary-item__content.summary-item__content--minimal {\n        padding-bottom: ${r(2)};\n      }\n    `}

  ${d(t.md)} {
    padding-bottom: ${({isDenseSummaryCollageThree:e})=>e?`${r(2.5)}`:`${r(5)}`};
    ${({hasNoBottomPadding:e})=>e&&"padding-bottom: 0;"}
  }
`,B=o(h).withConfig({displayName:"SummaryCollageThreeBGWrapper"})`
  ${({theme:e})=>"inverted"===e.palette?`\n          ${g(e,"background","colors.discovery.body.black.background")};\n        `:""}
`,N=o(h).withConfig({displayName:"SummaryCollageThreeButtonWrapper"})``;e.exports={SummaryCollageThreeBGWrapper:B,SummaryCollageThreeButtonWrapper:N,SummaryCollageThreeTitle:T,SummaryCollageThreeDek:H,SummaryCollageThreeWrapper:P,SummaryCollageThreeItemWrapper:k}},10258:(e,n,i)=>{const o=i(51117).default,{calculateSpacing:a,getColorStyles:t}=i(79720),r=i(7279),d=o.div.withConfig({displayName:"TabsWrapper"})`
  grid-column: 1 / span 12;
  text-align: center;
  ${({alignLeft:e})=>e?"text-align: left;":""}

  .tab-link.tab-link--active {
    ${({theme:e})=>t(e,"color","colors.discovery.lead.primary.link-hover")};
  }
`,s=o.div.withConfig({displayName:"TabsContentWrapper"})``,l=o.div.withConfig({displayName:"TabsPanel"})`
  display: ${({isActive:e})=>e?"block":"none"};
`,m=o(r.Primary).withConfig({displayName:"TabsButtonPrimary"})`
  margin-top: ${a(5)};
`;e.exports={TabsButtonPrimary:m,TabsPanel:l,TabsWrapper:d,TabsContentWrapper:s}},90323:(e,n,i)=>{const o=i(51117).default,{BaseText:a}=i(74327),{calculateSpacing:t,getColorStyles:r}=i(79720),{BREAKPOINTS:d}=i(85326),{TabsContentWrapper:s}=i(10258),l=o.ul.withConfig({displayName:"EventsListItems"})`
  padding: 0;
  list-style-type: none;
`,m=o(a).withConfig({displayName:"EventsListItem"})``;m.defaultProps={as:"li"};const g=o(a).withConfig({displayName:"EventsListTitle"})`
  margin: 0 0 ${t(4)} 0;
  padding: 0;
  @media (min-width: ${d.md}) {
    margin: 0 0 ${t(4)} 0;
  }
`;g.defaultProps={as:"h1",colorToken:"colors.discovery.body.light.heading",typeIdentity:"typography.definitions.discovery.subhed-section-secondary"};const p=o.div.withConfig({displayName:"EventsListContainer"})``,c=o.div.withConfig({displayName:"EventsListMonth"})``,h=o.div.withConfig({displayName:"EventsListWrapper"})`
  ${({theme:e,isSortByMonth:n})=>r(e,"background-color",n?"colors.discovery.body.white.background":"colors.discovery.body.light.background")};

  padding: ${t(4)} ${t(2)};

  @media (min-width: ${d.md}) {
    padding: ${t(6)} ${t(3)};
  }

  ${s} {
    ${g} {
      margin-top: ${t(4)};
    }
    ${p} {
      text-align: left;
    }
  }

  ${({isSortByMonth:e})=>e&&`\n  ${c} {\n    margin: 0 0 ${t(6)} 0;\n\n    @media (min-width: ${d.md}) {\n      margin: 0 0 ${t(7)} 0;\n    }\n\n    &:last-of-type {\n      margin: 0;\n    }\n  }\n  ${g} {\n    margin: 0 0 ${t(2)} 0;\n  }\n`};
`;e.exports={EventsListWrapper:h,EventsListContainer:p,EventsListItem:m,EventsListItems:l,EventsListMonth:c,EventsListTitle:g}},66298:(e,n,i)=>{const o=i(94184),a=i(45697),t=i(67294),{UtilityBarWrapper:r}=i(81024),{trackComponent:d}=i(40199),s=({children:e,className:n,hideDividers:i,hasTopDivider:a,variations:s,variationName:l})=>{t.useEffect((()=>{d("UtilityBar",l)}),[l]);const{isMultiple:m}=s;return t.createElement(r,{className:o(n,"utility-bar"),"data-testid":"UtilityBar",hasTopDivider:a,hideDividers:i,isMultiple:m},e)};s.propTypes={children:a.shape([a.arrayOf(a.node),a.node]),className:a.string,hasTopDivider:a.bool,hideDividers:a.bool,variationName:a.string,variations:a.shape({isMultiple:a.bool})},s.defaultProps={hideDividers:!1,variations:{}},e.exports=s},3265:(e,n,i)=>{e.exports=i(56111)},81024:(e,n,i)=>{const{default:o}=i(51117),{getColorStyles:a,calculateSpacing:t,getTypographyStyles:r}=i(79720),{BREAKPOINTS:d}=i(85326),s=o.div.withConfig({displayName:"UtilityBarWrapper"})`
  ${({hasTopDivider:e})=>e?"border-top: 1px solid;":""};

  &:only-child {
    ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  }

  border-bottom: 1px solid;
  ${({theme:e})=>a(e,"border-color","colors.consumption.body.standard.divider")};
  padding-bottom: 0;

  @media (min-width: ${d.md}) {
    padding: ${t(1.875)} 0;
  }

  @media (min-width: 0) and (max-width: ${d.md}) {
    margin-bottom: ${t(2.5)};
  }

  .dropdown {
    display: flex;
    align-items: center;

    @media (min-width: 0) and (max-width: ${d.md}) {
      margin-bottom: ${t(3.75)};
    }

    .dropdown__assistive-label {
      ${r("typography.definitions.utility.label")};
      padding: 0 ${t(2)} 0 0;
    }

    .dropdown__field {
      @media (min-width: 0) and (max-width: ${d.sm}) {
        margin-left: auto;
        width: ${t(21)};
      }
    }
  }

  ${({isMultiple:e})=>e&&`\n      .dropdown + .dropdown {\n        padding: ${t(2)} 0 0;\n      }\n\n      @media (min-width: ${d.sm}) and (max-width: ${d.md}) {\n        .dropdown__field {\n          margin-left: auto;\n          width: ${t(21)};\n        }\n      }\n\n      @media (min-width: ${d.md}) {\n        display: flex;\n\n        .dropdown {\n          display: inline-flex;\n\n          + .dropdown {\n            padding: 0 0 0 ${t(7)};\n          }\n        }\n      }\n    `}

  ${({hideDividers:e})=>e&&"\n      border-top: none;\n      border-bottom: none;\n    "}
`;e.exports={UtilityBarWrapper:s}},56111:(e,n,i)=>{const{asVariation:o}=i(95545),a=i(66298);a.Multiple=o(a,"Multiple",{isMultiple:!0}),e.exports=a},47909:(e,n,i)=>{const{default:o,css:a}=i(51117),{calculateSpacing:t,minScreen:r,getLinkStyles:d,getTypographyStyles:s,getColorToken:l,getColorStyles:m}=i(79720),g=i(17272),p=i(94753),{getPattern:c}=i(7595),{INTERACTIVE:h}=i(85326),{BREAKPOINTS:$}=i(85326),{EventsListWrapper:u}=i(90323),{BasePageMainContent:y}=i(90079),{SectionHeaderSubhed:b}=i(8610),f=i(20886),{asConfiguredComponent:w}=i(36380),{Disclaimer:S}=i(5626),{SectionTitleHed:v}=i(80577),{BundleBodyContainer:C}=i(34240),{MultiPackageContainer:x,NewsletterWrapper:k}=i(42041),{SummaryCollectionGridDek:_}=i(84105),{SummaryCollageThreeWrapper:T,SummaryCollageThreeItemWrapper:H}=i(219),{NewsletterSubscribeFormWrapper:P,NewsletterSubscribeFormDek:B,NewsletterSubscribeFormDisclaimer:N,NewsletterSubscribeFormValidation:D,NewsletterSubscribeFormInputsWrapper:M,NewsletterSubscribeFormHedDekWrapper:W}=i(42793),{ProductEmbedWrapper:L,ProductEmbedContent:A,ProductEmbedHed:E,ProductEmbedCTA:I}=i(12810),{ProductOfferListWrapper:R}=i(92334),{ProductOfferCtaBlock:O,ProductOfferWrapper:U,ProductOfferPriceBlock:F}=i(49524),{UtilityValidationDescriptionWrapper:G}=i(79875),{ButtonLabel:V}=i(41909),{universalGridCore:K}=i(61774),{applyGridSpacing:j}=i(62470),z=i(48655),{RowWrapper:q}=i(21920),J=i(32168),{createMultipackageContainerStyles:Q}=i(61774),X=o("h1").withConfig({displayName:"HomepageHiddenContent"})`
  display: none;
`,Y=o(g).withConfig({displayName:"HomepageHeader"})`
  .news-feed-row {
    /* If homepage header and news feed is first section bypass header styles */
    .navigation--section {
      margin-top: -${t(5)};
      border-top: 0;
    }
  }
`,Z=o(g).withConfig({displayName:"HomepageHeader"})``,ee=o.div.withConfig({displayName:"HomePageDisclaimerWrapper"})`
  padding: 1rem;

  .disclaimer {
    padding: 0;
  }
  ${({hasGridFourColumnsLayout:e,hasDisclaimerBackground:n,theme:i})=>e&&a`
      ${n?m(i,"background-color","colors.background.light"):null};
      margin-top: ${t(-7)};
      padding-bottom: ${t(3)};
      ${r($.md)} {
        margin-top: ${t(-5)};
      }
    `}
`,ne=o(w(S.TextCenterNoTopRule,"Disclaimer")).withConfig({displayName:"HomePageDisclaimer"})`
  grid-column: 1 / -1;
  justify-content: center;
  font-style: italic;

  p {
    ${l("colors.interactive.base.black")};
    ${s("typography.definitions.globalEditorial.context-secondary")};
    padding: 0;
    line-height: 1.125rem;
  }

  ${r($.md)} {
    grid-column: 3 / span 8;
  }
`,ie=o.div.withConfig({displayName:"HomePageDisclaimerBorder"})`
  margin: ${t(4)} ${t(2)} ${t(1)};
  border-bottom: 1px solid
    ${l("colors.discovery.body.white.divider")};

  @media (min-width: 0) and (max-width: ${$.md}) {
    margin: ${t(4)} ${t(1)} ${t(1)};
  }
`,oe=o(p).withConfig({displayName:"HomepageChannelBody"})`
  grid-column: 1/-1;
  margin-bottom: 1rem;

  ${r($.md)} {
    grid-column: 3/11;
  }
`,ae=o("aside").withConfig({displayName:"HomepageSummaryListAside"})`
  height: 100%;
`,te=`\n  ul {\n    position: initial;\n    z-index: 2;\n    overflow-x: auto;\n    li {\n      @media (min-width: 0) and (max-width: ${$.md}) {\n        margin: 0 10px 0 10px;\n      }\n      .product__carousel__card {\n        margin-bottom: 0;\n        width: 100%;\n        height: 100%;\n        ${A} {\n          ${E} {\n            overflow: hidden;\n            ${R} > ${U} {\n              ${O} > a {\n                ${V} {\n                  ${s("typography.definitions.foundation.link-primary")};\n                }\n              }\n            }\n          }\n          ${I} {\n            margin-right: 0;\n            margin-left: 0;\n            ${r($.md)} {\n              margin-right: 0;\n              margin-left: 0;\n            }\n          }\n        }\n      }\n    }\n    @media (min-width: 0) and (max-width: ${$.md}) {\n      li:first-of-type {\n        margin: 0 10px 0 0;\n      }\n      li:last-of-type {\n        margin: 0 0 0 10px;\n      }\n      li {\n        margin: 0 10px 0 10px;\n      }\n    }\n  }\n`,re=o(f).withConfig({displayName:"HomepageWrapper"})`
  ${({shouldHidePadding:e})=>!e&&`\n      padding-top: ${t(8)};\n      @media (min-width: ${$.lg}) {\n        padding-top: ${t(21)}\n      }\n  `};

  .homepage__half-column-row--with-border {
    ${r($.lg)} {
      &:not(:last-of-type) {
        border-right: 1px solid
          ${l("colors.discovery.lead.secondary.divider")};
      }
      /* catch-all to prevent a right border from showing
         if two half columns sit beside each other */
      + .homepage__half-column-row--with-border {
        border-right: none;
      }
    }
  }

  .homepage__native-ad .ad--promo .ad__slot--promo {
    display: block;
  }

  .homepage__plp-filterable-row {
    background: ${l("colors.discovery.body.light.background")};
  }

  .homepage__newsletter-row {
    background: ${l("colors.discovery.body.light.background")};
    ${({hasFullBleedBackground:e,theme:n})=>!e&&`\n       background: none;\n       margin-top: ${t(8)};\n       ${k} {\n         background-color: ${l(n,"colors.consumption.body.special.bg-card")};\n          ${r($.lg)} {\n            ${P} {\n              display: grid;\n              grid-template-columns: repeat(12, 1fr);\n              ${W} {\n                grid-column: 3 / span 8;\n              }\n              ${M} {\n                grid-column: 4 / span 6;\n              }\n            }\n          }\n         }\n     `};

    ${P} {
      ${M} {
        ${D} {
          ${G} {
            ${({hideErrorTextPadding:e})=>e&&" padding: 0;\n           "};
          }
          ${N} {
            ${({isNewsletterDisclaimerCenterAligned:e})=>e&&"\n               text-align: center;\n             "};
            ${({shouldOverrideColorToken:e,theme:n})=>e&&`\n               color: ${l(n,"colors.discovery.body.light.description")};\n               a {\n                 color: ${l(n,"colors.discovery.body.light.description")};\n               }\n             `};
          }
        }
      }
    }
  }

  .homepage__related-row {
    background-color: ${l("colors.discovery.body.light.background")};
  }

  .newletter-container-layout {
    display: grid;
    ${({theme:e,backgroundColorSettingForNewsletter:n})=>n?`background-color: ${l(e,`colors.discovery.body.${n}.background`)}`:`${l("colors.background.light")}`};

    .newsletter-subscribe-form {
      grid-column: 1 / span 6;
      margin: 0 auto;
    }
  }

  .homepage__half-column-row {
    &:not(:last-of-type) {
      ${r($.lg)} {
        ${v} {
          ${s("typography.definitions.discovery.subhed-section-secondary")};
        }
        width: 50%;
        max-width: ${t(100,"px")};
      }

      > .grid {
        ${r($.lg)} {
          padding-right: var(--grid-gap);
        }
      }
    }
  }

  ${u} {
    background: transparent;

    .recirc-list.recirc-list--text-overlay {
      margin-top: 0;
    }
  }

  ${({theme:e})=>c(e,"main-background")}
  .ad__slot--hero .cns-ads-stage {
    ${({shouldHidePaddingBottom:e})=>!e&&"padding-bottom: 0;"}
  }

  ${b},
  ${_} {
    a {
      ${({theme:e})=>d(e,"colors.consumption.body.standard.link","colors.consumption.body.standard.link-hover")};
      transition: color ${h.timingLinkDefault} ease;
    }
    text-align: center;
  }
  ${b} {
    padding-right: ${({shouldHideSidePadding:e})=>e?0:t(3)};
    padding-left: ${({shouldHideSidePadding:e})=>e?0:t(3)};
  }
  ${P} {
    grid-column: 1 / -1;

    ${r($.md)} {
      grid-column: 3 / span 8;
    }

    ${r($.lg)} {
      grid-column: 4 / span 6;
    }
  }

  .newsletter-subscribe-form__hed {
    margin-top: 0;
    margin-bottom: ${t(2)};
    ${({shouldOverrideColorToken:e})=>e&&`\n   color: ${l("colors.discovery.body.light.heading")};`};
    ${r($.md)} {
      margin-bottom: ${t(2)};
    }
  }
  ${B} {
    margin-top: 0;
    margin-bottom: ${t(2)};
    ${({shouldOverrideColorToken:e,theme:n})=>e&&`\n   color: ${l(n,"colors.discovery.body.light.description")};\n    a {\n     color: ${l(n,"colors.discovery.body.light.description")};\n   }`};

    ${r($.md)} {
      margin-bottom: ${t(4)};
    }
  }
  ${y} {
    &::before {
      display: block;
      ${({shouldHidePadding:e})=>!e&&`height: ${t(1,"px")};`}
      content: '';
    }

    .channelfilter-wrapper {
      grid-template-columns: 1fr;
    }

    ${x} {
      > .product__list {
        margin-right: ${t(7)};
        margin-left: ${t(7)};
        @media (min-width: 0) and (max-width: ${$.md}) {
          margin-right: ${t(3)};
          margin-left: ${t(3)};
        }

        .callout--group {
          margin: auto;
          > ${L} {
            ${A} > ${R} {
              ${U} > ${O} {
                a > ${V} {
                  ${s("typography.definitions.foundation.link-primary")};
                }
              }
            }
          }
        }
      }

      .cm-unit-row {
        margin-bottom: ${t(2)};

        ${({hasEvenSpacing:e})=>e&&a`
            margin-top: ${t(6)};
            margin-bottom: 0;
            ${r($.md)} {
              margin-top: ${t(7)};
              margin-bottom: 0;
            }
          `}

        .consumer-marketing-unit {
          grid-column: 1 / -1;
          border-top: 1px solid
            ${l("colors.discovery.body.white.divider")};
          padding-top: ${t(2)};

          ${r($.md)} {
            margin-top: ${t(2)};
          }
        }
      }

      > .product__carousel {
        max-width: 1600px;

        div {
          > button.carousel-control-button--back {
            box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.15);
          }

          > button.carousel-control-button--forward {
            box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
          }
        }

        ${te}
      }

      > div > div[data-testid='SummaryRiverWrapper'] {
        section[data-testid='SummaryRiverSection'] .summary-item--bundle {
          grid-column-gap: var(--grid-gap);
          margin: 0;
        }
      }
    }

    ${({hasEvenSpacing:e})=>e&&a`
        ~ ${q}:not(:empty) {
          margin-top: ${t(6)};
          ${r($.md)} {
            margin-top: ${t(7)};
          }
        }
      `}
  }

  .summary-item--bundle {
    .summary-item__content {
      @media (min-width: ${$.sm}) {
        width: auto;
      }
      @media (min-width: ${$.md}) {
        padding-right: 0;
        padding-left: 0;
      }

      @media (min-width: ${$.md}) {
        margin: 0;
      }
    }

    .summary-item__hed,
    .summary-item__byline {
      @media (min-width: ${$.md}) {
        margin: 0;
      }
    }
  }

  .summary-collage-five {
    .summary-item--bundle {
      @media (min-width: ${$.md}) {
        .summary-item__hed {
          margin-bottom: ${t(2)};
          width: unset;
        }

        .summary-item__hed--no-margin-bottom {
          margin-bottom: 0;
          width: unset;
        }
      }
    }
  }

  .summary-collection-grid--four-columns,
  .summary-collage-one,
  ${T} ${H}:first-child {
    .summary-item__image {
      display: block;

      &.responsive-asset {
        margin-right: 0;
        margin-left: 0;
      }

      @media (min-width: ${$.md}) {
        margin-right: 0;
        margin-left: 0;
      }
    }

    .responsive-clip {
      margin-right: 0;
      margin-left: 0;
    }
  }

  ${Q(x)}

  .ad-container.ad-container-reduced-margin {
    .ad--mid-content {
      @media (min-width: ${$.md}) {
        margin-bottom: ${t(2)};
        padding: 0 0 0 0;
      }
    }
  }

  .ad-container {
    .ad--mid-content {
      margin-bottom: ${t(2)};
      padding: 0 0 0 0;
    }
  }

  .ad-container.ad-container-reduced-margin {
    .ad--mid-content-with-padding {
      @media (min-width: ${$.md}) {
        padding: 0 0 ${t(2)} 0;
      }
    }
  }

  .ticker-view--has-special-theme {
    background-color: ${({theme:e})=>l(e,"colors.consumption.body.special.bg-photo")};
  }

  ${({shouldShowFooterAdPadding:e})=>!e&&".cns-ads-slot-type-footer {\n    padding: 0;\n  }"}

  ${A} {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  ${F} {
    justify-content: left;
    margin-left: 0;
  }

  .footer-toggle-chip-links {
    padding-bottom: 30px;

    .section-header__container--minimal-padding {
      padding: ${t(2)} 0 0;
    }
  }

  ${({hasBackground:e,theme:n})=>e&&n&&c(n,"page-background")};
`,de=o.div.withConfig({displayName:"HomepageBodyWrapperGrid"})`
  ${K()}
  ${j("padding")}
`,se=o(z.NarrowContentWithWideAdRail).withConfig({displayName:"HomePageGridNarrowContentWithWideAdRail"})`
  ${({shouldUsePaddingTopForHomePageBody:e})=>e&&`padding-top: ${t(4)};\n`}
`,le=o.div.withConfig({displayName:"HomepageBundleBody"})`
  ${C} {
    margin-top: ${t(5)};
    margin-bottom: ${t(5)};

    @media (min-width: ${$.lg}) {
      margin-top: ${t(6)};
      margin-bottom: ${t(6)};
    }

    p:first-child {
      margin-top: 0;
      padding-top: 0;
      @media (min-width: ${$.lg}) {
        padding-top: 0;
      }
    }

    p:last-child {
      margin-bottom: 0;
    }
  }
`,me=o(J.IconAbove).withConfig({displayName:"HomepageSectionTitle"})``;e.exports={HomepageWrapper:re,HomepageHiddenContent:X,HomepageHeader:Y,HomepageSubHeader:Z,HomepageChannelBody:oe,HomepageSummaryListAside:ae,HomepageBodyWrapperGrid:de,HomePageDisclaimerWrapper:ee,HomePageDisclaimer:ne,HomePageDisclaimerBorder:ie,HomePageGridNarrowContentWithWideAdRail:se,HomepageBundleBody:le,HomepageSectionTitle:me}},84528:(e,n,i)=>{const{defineMessages:o}=i(76186);e.exports=o({noResultsHed:{id:"SearchPage.NoResultsHed",defaultMessage:"No stories found for your search",description:"Hed text when no results are found"},resultsHed:{id:"SearchPage.ResultsHed",defaultMessage:"Search stories from {brandName}",description:"Hed text when results are found"},resultswithWordHed:{id:"SearchPage.resultswithWordHed",defaultMessage:"Search results for ",description:"Hed text when results are found"},noResultsContentHed:{id:"SearchPage.noResultsContentHed",defaultMessage:"We didn't find any recipes, articles or videos for ",description:"SubHed text when no results are found"},noResultsSubHed:{id:"SearchPage.noResultsSubHed",defaultMessage:"We didn't find any ",description:"SubHed text when no results are found"},searchInputAriaLabel:{id:"SearchPage.SearchInputAriaLabel",defaultMessage:"search",description:"ARIA label for the search box"},searchInputPlaceholder:{id:"SearchPage.SearchInputPlaceholder",defaultMessage:'Try "Racial justice"',description:"Placeholder text for the search box",isConfigurable:!0},searchButtonLabel:{id:"SearchPage.SearchButtonLabel",defaultMessage:"Search",description:"Label for the search button"},sortLabel:{id:"SearchPage.SortLabel",defaultMessage:"Sort by",description:"Label for the sort dropdown"},loadMoreButtonLabel:{id:"SearchPage.LoadMoreButtonLabel",defaultMessage:"More Stories",description:""},loadMoreLoadingLabel:{id:"SearchPage.LoadMoreLoadingLabel",defaultMessage:"Loading ...",description:""},clearAll:{id:"SearchPage.ClearAll",defaultMessage:"Clear All",description:"Text in SearchPage component to clear filters"},sortBy:{id:"SearchPage.SortBy",defaultMessage:"Sort By",description:"SearchPage component sort by text for sorting result"},noResultsFound:{id:"SearchPage.NoResultsFound",defaultMessage:"Sorry we can't display any results for those filtering options, please try again",description:"Message to be shown if no results are found when filtered."},filterResults:{id:"SearchPage.FilterResults",defaultMessage:"Filter Results",description:"SearchPage component filter results text"},loading:{id:"SearchPage.Loading",defaultMessage:"Loading ...",description:"SearchPage component loading text"},moreStories:{id:"SearchPage.MoreStories",defaultMessage:"More Stories",description:"SearchPage component more stories text"},showAllArtists:{id:"SearchPage.showAllArtists",defaultMessage:"SHOW ALL ARTISTS",description:"SearchPage component show all artist"},showAllAuthors:{id:"SearchPage.showAllAuthors",defaultMessage:"SHOW ALL AUTHORS",description:"SearchPage component show all author"},resultsHedForIssueDate:{id:"SearchPage.ResultsHedOnIssueDate",defaultMessage:" Search Results from {issueDate} issue",description:"Hed text when results are found for issueDate"}})}}]);