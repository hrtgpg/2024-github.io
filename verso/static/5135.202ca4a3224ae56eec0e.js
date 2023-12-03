(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[5135],{71515:(e,t,i)=>{const a=i(45697),o=i(67294),{BaseWrap:n}=i(74327),{ContentWithCTAWrapper:r,ContentWithCTAButtonWrapper:l}=i(40535),{trackComponent:d}=i(40199),s=({contentComponent:e,ctaComponent:t,attributes:i={}})=>(o.useEffect((()=>{d("ContentWithCTA")}),[]),o.createElement(r,Object.assign({},i,{"data-testid":"ContentWithCTA"}),o.createElement(n,null,e),o.createElement(l,null,t)));s.propTypes={attributes:a.object,contentComponent:a.node.isRequired,ctaComponent:a.node.isRequired},e.exports=s},75945:(e,t,i)=>{e.exports=i(71515)},40535:(e,t,i)=>{const a=i(51117).default,{calculateSpacing:o}=i(79720),n=a.div.withConfig({displayName:"ContentWithCTAWrapper"})`
  display: grid;
  grid-gap: ${o(1)};
  grid-template-columns: 1fr;
  overflow-anchor: none;
`,r=a.div.withConfig({displayName:"ContentWithCTAButtonWrapper"})`
  display: flex;
  align-items: center;
  justify-content: center;
`;e.exports={ContentWithCTAWrapper:n,ContentWithCTAButtonWrapper:r}},26002:(e,t,i)=>{const a=i(45697),o=i(67294),{connector:n}=i(92078),r=i(77638),{CuratedShowsSectionTitle:l}=i(15207),{trackComponent:d}=i(40199),s=({dangerousHed:e,items:t,hideCuratedShowsList:i,subHed:a,variationValue:n,variationName:s})=>{o.useEffect((()=>{d("CuratedShowsSection",s)}),[s]);const[p]=t;return p?o.createElement("section",{"data-testid":"CuratedShowsSection"},e&&o.createElement(l,{subHed:a,dangerousHed:e,subHedPosition:"above"}),o.createElement(r,Object.assign({},p,{hasCuratedShowsVariation:n,hideCuratedShowsList:i}))):null};s.propTypes={dangerousHed:a.string,hideCuratedShowsList:a.bool,items:a.array,subHed:a.string,variationName:a.string,variationValue:a.string},e.exports=n(s,{keysToPluck:[]})},65135:(e,t,i)=>{e.exports=i(26002)},15207:(e,t,i)=>{const a=i(51117).default,{calculateSpacing:o,getColorToken:n,getTypographyStyles:r}=i(79720),{BREAKPOINTS:l}=i(85326),d=a(i(17272)).withConfig({displayName:"CuratedShowsSectionTitle"})`
  && {
    padding: ${o(3)};
    text-align: center;

    @media (min-width: ${l.md}) {
      padding: ${o(5)};
    }

    .section-header__hed {
      color: ${({theme:e})=>n(e,"colors.discovery.body.white.heading")};

      ${({theme:e})=>r(e,"typography.definitions.discovery.subhed-section-primary")}
    }

    .section-header__subhed {
      ${({theme:e})=>r(e,"typography.definitions.globalEditorial.context-primary")}

      padding-bottom: ${o(2)};

      color: ${({theme:e})=>n(e,"colors.discovery.body.white.accent")};
    }
  }
`;d.displayName="CuratedShowsSectionTitle",e.exports={CuratedShowsSectionTitle:d}},69792:(e,t,i)=>{const a=i(45697),o=i(67294),{useState:n}=i(67294),{useIntl:r}=i(76186),l=i(21065).Z,d=i(48349),s=i(59111),p=i(55738),u=i(32512),g=i(22457),c=i(69379),m=i(17366),h=i(16126),y=i(70734),{CuratedShowsWrapper:f,CuratedShowsFullWrapper:v,CuratedShowsListWrapper:w,CuratedShowsGridWrapper:C,CuratedShowsViewAllWrapper:b,CuratedShowsDrawer:N}=i(32484),{trackComponent:x}=i(40199),S=({curatedShows:e,allShows:t,label:i,hasCuratedShowsVariation:a,hideCuratedShowsList:h})=>{o.useEffect((()=>{x("CuratedShows")}),[]);const[S,k]=n(!1),{formatMessage:G}=r(),$=""===i?G(l.buttonLabel):i;switch(a){case"CuratedShowsWithImage":return o.createElement(f,null,!h&&o.createElement(w,{hideCuratedShowsList:h},o.createElement(y,null,o.createElement(c,{hasAtoZIndex:!0,groupedLinks:t,hasFilter:!0,filterLabel:G(l.groupedNavigationFilterLabel)}))),o.createElement(C,{hideCuratedShowsList:h},o.createElement(y,null,o.createElement(m,{items:e}))),o.createElement(b,null,o.createElement(s.Utility,{btnStyle:"text",label:$,onClickHandler:()=>{k(!0),d.emitGoogleTrackingEvent("view_all_shows")},ButtonIcon:()=>o.createElement(p,{width:"1rem",height:"1rem"}),iconPosition:"after",hasEnableIcon:!0})),o.createElement(N,{isOpen:S,onClose:()=>{k(!1)},contentLabel:G(l.drawerContentLabel),showCloseButton:!0,hideOnDesktop:!0},o.createElement(c,{hasAtoZIndex:!0,groupedLinks:t,hasFilter:!0,filterLabel:G(l.groupedNavigationFilterLabel)})));case"CuratedShowsWithSummaryCarousel":return o.createElement(f,null,o.createElement(v,null,o.createElement(y,null,o.createElement(u,{groupedLinks:t,hasFilter:!0,filterLabel:G(l.groupedNavigationSummaryCarouselFilterLabel)}))));case"CuratedShowsWithBrowser":return o.createElement(f,null,o.createElement(v,null,o.createElement(y,null,o.createElement(g,{hasAtoZIndex:!0,groupedLinks:t,hasFilter:!0,filterLabel:G(l.groupedNavigationBrowserFilterLabel)}))));default:return null}};S.defaultProps={hasCuratedShowsVariation:"CuratedShowsWithImage",label:""},S.propTypes={allShows:c.groupedLinksShape.isRequired,curatedShows:a.arrayOf(a.shape(h.propTypes)).isRequired,hasCuratedShowsVariation:a.string,hideCuratedShowsList:a.bool,label:a.string},e.exports=S},77638:(e,t,i)=>{e.exports=i(69792)},32484:(e,t,i)=>{const a=i(51117).default,{calculateSpacing:o,getColorToken:n}=i(79720),{BREAKPOINTS:r}=i(85326),l=i(38167),{GroupedNavigationWrapper:d}=i(97168),{universalGridCore:s}=i(61774),{applyGridSpacing:p}=i(62470),u=a("div").withConfig({displayName:"CuratedShowsWrapper"})`
  ${s()}
  ${p("padding")}
  &&& {
    row-gap: 0;
  }
`,g=a.div.withConfig({displayName:"CuratedShowsFullWrapper"})`
  grid-column: 1 / -1;
`,c=a(l.Right).withConfig({displayName:"CuratedShowsDrawer"})`
  &&& {
    padding: 0 ${o(4)};
  }
`,m=a.div.withConfig({displayName:"CuratedShowsListWrapper"})`
  display: none;

  @media (min-width: ${r.lg}) {
    display: block;
    position: sticky;
    top: ${o(8)};
    margin-bottom: auto;
    border: 1px solid
      ${({theme:e})=>n(e,"colors.discovery.body.white.divider")};
    height: 100%;
    max-height: calc(100vh - ${o(8)});
    ${({hideCuratedShowsList:e})=>!e&&`\n      grid-column: 1 / span 3;\n      @media (min-width: ${r.xxl}) {\n        grid-column: 1 / span 2;\n      }\n    `}

    ${d} {
      position: absolute;
      padding-left: ${o(2)};
      width: 100%;
    }
  }
`,h=a.div.withConfig({displayName:"CuratedShowsGridWrapper"})`
  grid-column: 1 / -1;
  margin-bottom: auto;

  @media (min-width: ${r.lg}) {
    ${({hideCuratedShowsList:e})=>e?"grid-column: 1 / -1;":"\n      grid-column: 4 / -1;\n    "}
    border: 1px solid
      ${({theme:e})=>n(e,"colors.discovery.body.white.divider")};
  }

  @media (min-width: ${r.xxl}) {
    ${({hideCuratedShowsList:e})=>e?"grid-column: 1 / -1;":"\n      grid-column: 3 / -1;\n    "}
  }
`,y=a.div.withConfig({displayName:"CuratedShowsViewAllWrapper"})`
  display: flex;
  grid-column: 1 / -1;
  grid-row: 2;
  justify-content: center;
  border-top: 1px solid
    ${({theme:e})=>n(e,"colors.discovery.body.white.divider")};
  padding-top: ${o(2)};

  .button__icon-container--after {
    display: flex;
    padding-left: ${o(.5)};
    fill: ${({theme:e})=>n(e,"colors.interactive.base.brand-secondary")};
  }

  @media (min-width: ${r.lg}) {
    display: none;
  }
`;e.exports={CuratedShowsWrapper:u,CuratedShowsDrawer:c,CuratedShowsFullWrapper:g,CuratedShowsListWrapper:m,CuratedShowsGridWrapper:h,CuratedShowsViewAllWrapper:y}},21065:(e,t,i)=>{const a=i(76186);t.Z=(0,a.defineMessages)({groupedNavigationFilterLabel:{id:"CuratedShows.GroupedNavigationFilterLabel",defaultMessage:"Search for a designer...",description:"CuratedShows component grouped navigation filter label"},groupedNavigationBrowserFilterLabel:{id:"CuratedShows.GroupedNavigationBrowserFilterLabel",defaultMessage:"Search...",description:"CuratedShows component grouped navigation filter label"},groupedNavigationSummaryCarouselFilterLabel:{id:"CuratedShows.GroupedNavigationSummaryCarouselFilterLabel",defaultMessage:"Search...",description:"CuratedShows component grouped navigation filter label"},buttonLabel:{id:"CuratedShows.ButtonLabel",defaultMessage:"View all shows",description:"CuratedShows component button label"},drawerContentLabel:{id:"CuratedShows.DrawerContentLabel",defaultMessage:"Runway All Shows navigation",description:"CuratedShows component drawer content label"}})},84070:(e,t,i)=>{const a=i(45697),o=i(67294),{useState:n}=i(67294),r=i(48349),l=i(75945),d=i(16126),{SummaryGridCompactGridFive:s,SummaryGridCompactGridSix:p,SummaryGridCompactExpandButton:u,SummaryGridCompactWrapper:g,SummaryGridCompactHeaderWrapper:c}=i(58026),m=i(32168),{trackComponent:h}=i(40199),y=({items:e,dangerousHed:t,hasButton:i,hasMobilePaddingBottom:a,hasUnderlineHed:y,showPrice:f,showSummaryGridCompactGridSix:v})=>{o.useEffect((()=>{h("SummaryGridCompact")}),[]);const[w,C]=n(10),b=o.createElement(g,null,t&&o.createElement(c,null,o.createElement(m,{dangerousHed:t,hasDividerAbove:!0,hasDividerBelow:!0,textAlign:"center","data-testid":"section-title"})),v?o.createElement(p,null,e.map(((e,t)=>o.createElement(d,Object.assign({},e,{key:t,hasMobilePaddingBottom:a,hasUnderlineHed:y}))))):o.createElement(s,null,e.slice(0,w).map(((e,t)=>o.createElement(d,Object.assign({},e,{key:t,showPrice:f,hasUnderlineHed:y})))))),N=e.length>w&&i&&o.createElement(u,{label:"Show more",btnStyle:"outlined",onClickHandler:()=>{C(w+(()=>{const t=e.length-w;return t>10?10:t})()),r.emitGoogleTrackingEvent("show_more")},isInline:!0});return o.createElement(l,{contentComponent:b,ctaComponent:N})};y.propTypes={dangerousHed:a.string,hasButton:a.bool,hasMobilePaddingBottom:a.bool,hasUnderlineHed:a.bool,items:a.arrayOf(a.shape(d.propTypes)).isRequired,showPrice:a.bool,showSummaryGridCompactGridSix:a.bool},y.defaultProps={hasButton:!0,showPrice:!1,showSummaryGridCompactGridSix:!1},e.exports=y},17366:(e,t,i)=>{e.exports=i(84070)},58026:(e,t,i)=>{const{default:a,css:o}=i(51117),n=i(48655),{calculateSpacing:r}=i(79720),l=i(59111),{GridItem:d}=i(14134),s=o`
  && {
    column-gap: ${r(1)};
    row-gap: ${r(1)};
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  img {
    animation: fadein 0.5s;
  }
`,p=a(n.EvenFive).withConfig({displayName:"SummaryGridCompactGridFive"})`
  ${s}
`,u=a(n.EvenSix).withConfig({displayName:"SummaryGridCompactGridSix"})`
  ${s} {
    && {
      column-gap: ${r(2)};
    }
  }
`,g=a.div.withConfig({displayName:"SummaryGridCompactWrapper"})``,c=a(n).withConfig({displayName:"SummaryGridCompactHeaderWrapper"})`
  > ${d} {
    grid-column: 1/-1;
    margin-bottom: ${r(4)};
  }
`,m=a(l.Primary).withConfig({displayName:"SummaryGridCompactExpandButton"})`
  margin-bottom: ${r(4)};
`;e.exports={SummaryGridCompactGridFive:p,SummaryGridCompactGridSix:u,SummaryGridCompactExpandButton:m,SummaryGridCompactWrapper:g,SummaryGridCompactHeaderWrapper:c}},42530:(e,t,i)=>{const a=i(45697),o=i(67294),{filter:n}=i(26503),{AtoZIndexWrapper:r,AtoZIndexList:l,AtoZIndexLink:d,AtoZIndexText:s,AtoZHeading:p,AtoZIndexValue:u}=i(13876),g=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],c=({links:e,navId:t,setLinkValue:i,isPaginated:a,setFilterResult:c})=>{if(!e||!e.length)return null;const m=e=>{e.preventDefault();const t=document.getElementById(e.target.hash.replace("#",""));if(!t)return;const{offsetTop:i}=t,a=i-90,o=4*(a-window.pageYOffset)/400;let n;n=setInterval((function(){const e=Math.ceil(window.pageYOffset);e>=a&&o>=0||e<=a&&o<=0?clearInterval(n):window.scrollBy(0,o)}),4)},h=t=>{t.preventDefault();const a=t.target.hash.replace("#","").split("-")[1];i(a),c((()=>n([e[a]],"")))};return o.createElement(r,{"data-testid":"AtoZIndexWrapper"},o.createElement(p,null,"Browse by letter:"),o.createElement(l,null,g.map((i=>{const n=e.find((e=>e.groupName===i)),r=e.findIndex((e=>e.groupName===i)),l=a?r:t,p=a?h:m;return n?o.createElement(u,{key:i},o.createElement(d,{"data-testid":"AtoZIndexLink",href:"#"+("#"===n.groupName?`other-${l}`:`${n.groupName.toLowerCase()}-${l}`),onClick:p},i)):o.createElement(u,{key:i},o.createElement(s,null,i," "))}))))};c.propTypes={isPaginated:a.bool,links:a.arrayOf(a.shape({groupName:a.string.isRequired})),navId:a.string,setFilterResult:a.func,setLinkValue:a.func},e.exports=c},162:(e,t,i)=>{const a=i(45697),o=i(67294),{useIntl:n}=i(76186),{useState:r}=i(67294),l=i(73955),d=i(48349),s=i(83066),{asConfiguredComponent:p}=i(36380),{filter:u,useDebounce:g}=i(26503),c=i(42530),m=i(46647),h=i(7046),{PaymentGateway:y}=i(28576),{trackComponent:f}=i(40199),{GroupedNavigationWrapper:v,GroupedNavigationFilter:w,GroupedNavigationFilterContent:C,GroupedNavigationFilterBrowser:b,GroupedNavigationFilterInput:N,GroupedNavigationContent:x,GroupedNavigationLinks:S,GroupedNavigationGroup:k,GroupedNavigationAdRail:G,GroupedNavigationNoResult:$,GroupedNavigationQuote:E}=i(13876),L=i(51546).Z,F=i(32168),I=({className:e,dangerousHed:t,groupedLinks:i,hasAtoZIndex:a,hasFilter:p,analyticsEventForFilter:I,filterLabel:A,showContentDivider:W,isPaginated:T})=>{o.useEffect((()=>{f("GroupedNavigationHasBrowser")}),[]);const{formatMessage:P}=n(),B=l(),[H,Z]=r(""),_=T?[i[0]]:i,[R,O]=g(_,200),[D,M]=r("0");return i&&i.length?o.createElement(v,{className:e,hasFilter:p,"data-testid":"GroupedNavigationWrapper"},t&&o.createElement(F,{dangerousHed:t,hasDividerAbove:!0,hasDividerBelow:!0,textAlign:"center","data-testid":"section-title"}),p&&o.createElement(w,{isPaginated:T},o.createElement(C,null,o.createElement(s,null),o.createElement(N,{placeholder:A,"aria-label":A||P(L.filterInputAriaLabelText),name:"filter",type:"text",onChange:e=>{const t=e.target.value,a=T?[i[D]]:i;Z(t),O((()=>u(a,t)))},onFocus:()=>{I&&d.emitGoogleTrackingEvent(I)},value:H})),o.createElement(b,{isPaginated:T},a&&o.createElement(c,{links:i,navId:B,setLinkValue:M,isPaginated:T,setFilterResult:O}))),o.createElement(G,null,R.length>0?o.createElement(x,{hasFilter:p},o.createElement(S,null,R.map((e=>{if(!e.links)return null;const t=e.links.map((e=>{const t=!0===e.isSecondary?"link--secondary":"link--primary";return Object.assign(Object.assign({},e),{className:t})})),i={};return a&&(i.id="#"===e.groupName?`other-${B}`:`${e.groupName.toLowerCase()}-${B}`),o.createElement(k,{key:e.groupName,className:"grouped-navigation__group",links:t,linkClassName:"grouped-navigation__link",heading:e.groupName,showContentDivider:W,shouldStyleListItems:!0,attributes:i,isPaginated:T})})))):o.createElement($,null,"0 results for"," ",o.createElement(E,null,'"',H,'"')),o.createElement(y,{group:"ads"},o.createElement(h,null,o.createElement(m,{position:"rail"}))))):null},A=a.shape({text:a.string.isRequired,url:a.string.isRequired,isSecondary:a.bool,analyticsEvent:a.string}),W=a.arrayOf(a.shape({links:a.arrayOf(A),groupName:a.string,groupId:a.string}));I.propTypes={analyticsEventForFilter:a.string,className:a.string,dangerousHed:a.string,filterLabel:a.string,groupedLinks:W,hasAtoZIndex:a.bool,hasFilter:a.bool,isPaginated:a.bool,showContentDivider:a.bool},I.defaultProps={filterLabel:"Search..",hasAtoZIndex:!0,hasFilter:!1,isPaginated:!1,showContentDivider:!1},I.displayName="GroupedNavigationHasBrowser",e.exports=p(I,"GroupedNavigationHasBrowser"),e.exports.groupedLinksShape=W},22457:(e,t,i)=>{e.exports=i(162)},13876:(e,t,i)=>{const a=i(51117).default,{BaseLink:o,BaseText:n}=i(74327),{calculateSpacing:r,getLinkStyles:l,getTypographyStyles:d,getColorStyles:s,getInputFieldStyles:p}=i(79720),u=i(55399),g=i(48655),{BREAKPOINTS:c}=i(85326),m=a.div.withConfig({displayName:"GroupedNavigationWrapper"})`
  padding-top: ${r(4)};
  scroll-behavior: smooth;
  ${({hasFilter:e})=>e&&`padding-top: ${r(2)};`}

  .navigation__heading {
    ${({theme:e})=>d(e,"typography.definitions.foundation.link-feature")};
    margin: 0;
    line-height: normal;
    ${({theme:e})=>s(e,"color","colors.foundation.expanded-utility.nav-link.default")};
  }

  .navigation__list-item {
    width: 50%;
    white-space: normal;
    @media (min-width: ${c.lg}) {
      width: 33.3%;
    }
  }

  .navigation__list {
    margin-bottom: 0;
  }

  .content-divider {
    display: block;
    margin-bottom: ${r(2)};
    border-bottom-width: ${r(.5)};
    border-bottom-style: solid;
    ${({theme:e})=>s(e,"border-bottom-color","colors.discovery.lead.secondary.accent")};
    padding-top: ${r(1)};
    width: ${r(3)};
  }

  .grouped-navigation__link {
    ${({theme:e})=>l(e,"colors.foundation.expanded-utility.nav-link.default","colors.foundation.expanded-utility.nav-link.hover","navigation")}

    &.link--primary {
      ${({theme:e})=>d(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>d(e,"typography.definitions.discovery.hed-bulletin-primary")};
    }
  }
`,h=a.div.withConfig({displayName:"GroupedNavigationFilter"})`
  position: static;
  border-width: 0 0 1px;
  border-style: none;
  padding-top: 2rem;
  width: 100%;

  ${({isPaginated:e})=>e&&`\n  border-bottom: 1px solid rgb(223, 223, 223);\n  padding-bottom: ${r(4)};\n  `}

  ${({theme:e})=>s(e,"color","colors.discovery.body.white.divider")};

  .icon {
    position: absolute;
    top: 10px;
    pointer-events: none;
  }
  @media (min-width: ${c.lg}) {
    display: flex;
    flex-direction: row;
  }
`,y=a.div.withConfig({displayName:"GroupedNavigationFilterContent"})`
  position: relative;
  width: 100%;
  text-align: left;
  @media (min-width: ${c.lg}) {
    width: 25%;
  }
`,f=a.div.withConfig({displayName:"GroupedNavigationFilterBrowser"})`
  position: relative;
  padding-top: 5%;
  width: 100%;
  text-align: left;
  @media (min-width: ${c.lg}) {
    ${({isPaginated:e})=>e?"padding-top: 0px;":"padding-top: 1%;"};
    padding-left: 2%;
    width: 75%;
  }
`,v=a(n).withConfig({displayName:"GroupedNavigationFilterInput"})`
  ${({theme:e})=>p(e,"normal","background")};
  ${({theme:e})=>p(e,"normal","text")};
  border: 1px solid #d8d8d8;
  padding-left: 48px;
  width: 100%;
  height: 50px;
`;v.defaultProps={as:"input",typeIdentity:"typography.definitions.foundation.link-secondary"};const w=a.div.withConfig({displayName:"GroupedNavigationContent"})`
  display: flex;
  width: 100%
    ${({hasFilter:e})=>e&&`\n      padding-top: ${r(4)};\n\n  `};
  height: 100%;
`,C=a(g.ContentWithAdRail).withConfig({displayName:"GroupedNavigationAdRail"})`
  &&& {
    margin: 0 0;
    padding: 0 0;
    height: 100%;
    --grid-margin: 0;
  }
`,b=a.div.withConfig({displayName:"GroupedNavigationLinks"})`
  flex: 1;
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  @media (min-width: ${c.lg}) {
    padding-top: 2rem;
  }

  && li {
    padding-bottom: ${r(2)};

    &.link--primary {
      ${({theme:e})=>d(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>d(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,N=a(u).withConfig({displayName:"GroupedNavigationGroup"})`
  margin-bottom: 15px;
  ${({isPaginated:e})=>!e&&"border-bottom: 1px solid #dddddd;"}

  &:last-child {
    border-bottom: 0;
  }
`,x=a.div.withConfig({displayName:"GroupedNavigationIndex"})`
  position: static;
  padding-right: ${r(1)};
  overflow-y: auto;
`,S=a(n).withConfig({displayName:"AtoZIndexWrapper"})`
  width: 100%;
  text-align: center;

  @media (min-width: ${c.lg}) {
    text-align: left;
  }
`;S.defaultProps={as:"nav"};const k=a(n).withConfig({displayName:"AtoZIndexList"})`
  display: inline;
  top: 10px;
  margin-top: 0;
  padding: 0;
  list-style: none;
`;k.defaultProps={as:"ul"};const G=a(n).withConfig({displayName:"AtoZIndexValue"})`
  display: inline-block;
  width: 25px;
`;G.defaultProps={as:"span"};const $=a(o).withConfig({displayName:"AtoZIndexLink"})`
  display: inline;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
  letter-spacing: 0;
`;$.defaultProps={colorSecondaryLinkToken:"colors.foundation.expanded-utility.nav-link.hover",colorStaticLinkToken:"colors.foundation.expanded-utility.nav-link.default",colorToken:"colors.foundation.expanded-utility.nav-link.default",linkStyle:"navigation",typeToken:"typography.definitions.foundation.link-feature"};const E=a(n).withConfig({displayName:"AtoZIndexText"})`
  display: inline;
  padding-top: ${r(.25)};
  padding-bottom: ${r(.25)};
  color: #757575;
`;E.defaultProps={as:"li",colorToken:"colors.foundation.expanded-utility.nav-link.default",typeIdentity:"typography.definitions.foundation.link-feature"};const L=a(n).withConfig({displayName:"AtoZHeading"})`
  top: 10px;
  padding-right: 10px;
  padding-bottom: 4%;
  color: rgb(0, 0, 0);

  @media (min-width: ${c.lg}) {
    display: inline;
    padding-bottom: 0%;
  }
`;L.defaultProps={typeIdentity:"typography.definitions.foundation.link-feature"};const F=a(n).withConfig({displayName:"GroupedNavigationNoResult"})`
  margin: 30px 10px;
  text-align: center;
  text-transform: lowercase;
  color: rgb(0, 0, 0);
`;F.defaultProps={as:"div",typeIdentity:"typography.definitions.foundation.title-primary"};const I=a(n).withConfig({displayName:"GroupedNavigationQuote"})`
  color: rgb(0, 0, 0);
`;I.defaultProps={as:"span",typeIdentity:"typography.definitions.foundation.title-primary"},e.exports={GroupedNavigationAdRail:C,GroupedNavigationWrapper:m,GroupedNavigationFilter:h,GroupedNavigationFilterContent:y,GroupedNavigationFilterBrowser:f,GroupedNavigationFilterInput:v,GroupedNavigationContent:w,GroupedNavigationLinks:b,GroupedNavigationGroup:N,GroupedNavigationIndex:x,GroupedNavigationNoResult:F,GroupedNavigationQuote:I,AtoZIndexWrapper:S,AtoZIndexList:k,AtoZIndexLink:$,AtoZIndexText:E,AtoZIndexValue:G,AtoZHeading:L}},51546:(e,t,i)=>{const a=i(76186);t.Z=(0,a.defineMessages)({filterInputAriaLabelText:{id:"GroupedNavigationHasBrowser.FilterInputAriaLabel",defaultMessage:"Filter links",description:"Grouped Navigation Filter component aria label text",isConfigurable:!0}})},26503:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounce=t.filter=void 0;const{useState:a,useCallback:o}=i(67294),n=i(23279);t.filter=(e,t)=>{if(!(null==t?void 0:t.trim()))return e;const i=e=>e.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/gi,"");return e.map((e=>{var a;return Object.assign(Object.assign({},e),{links:null===(a=e.links)||void 0===a?void 0:a.filter((e=>/(\s|')/.test(t)?i(e.text).includes(i(t)):e.text.match(/([a-zA-Z]\.){2,}/)?e.text.split(" ").filter((e=>i(e).startsWith(i(t)))).length:e.text.split(/([ \-'窶�.]+)/).filter((e=>i(e).startsWith(i(t)))).length))})})).filter((e=>{var t;return null===(t=e.links)||void 0===t?void 0:t.length}))},t.useDebounce=(e,t)=>{const[i,r]=a(e),l=o(n((e=>{r(e)}),t),[]);return[i,e=>{l(e)}]}},12058:(e,t,i)=>{const a=i(45697),o=i(67294),{useIntl:n}=i(76186),{useState:r}=i(67294),l=i(48349),d=i(83066),{asConfiguredComponent:s}=i(36380),{filter:p,useDebounce:u}=i(80476),{trackComponent:g}=i(40199),{GroupedNavigationWrapper:c,GroupedNavigationFilter:m,GroupedNavigationFilterContent:h,GroupedNavigationFilterInput:y,GroupedNavigationContent:f,GroupedNavigationLinks:v,GroupedNavigationGroup:w,GroupedNavigationNoResult:C,GroupedNavigationQuote:b}=i(49134),N=i(78042).Z,{SummaryCarouselRow:x}=i(28642),S=i(85650),k=i(32168),G={width:{sm:"50%",lg:"40%",xl:"20%"},spacing:{sm:"0px",md:"0px",lg:"0px",xl:"0px",xxl:"0px"}},$=({className:e,dangerousHed:t,groupedLinks:i,showContentDivider:a=!0,hasFilter:s=!1,analyticsEventForFilter:$,filterLabel:E})=>{o.useEffect((()=>{g("GroupedNavigationHasSummaryCarousel")}),[]);const{formatMessage:L}=n(),F=o.useRef(null),[I,A]=r(""),[W,T]=u(i,200);let P=[];if(W.length>0){P=[];let e=0;W.forEach((t=>{(!P.length||e>=9)&&(P.push([]),e=0),t.links&&(e=e+t.links.length+1),e<9?P[P.length-1].push(t):(P.push([]),P[P.length-1].push(t),e=t.links.length)})),P.length%2!=0&&(P.push([]),P[P.length-1].push({groupName:"",links:[]}))}return i&&i.length?o.createElement(c,{className:e,hasFilter:s,"data-testid":"GroupedNavigationWrapper"},t&&o.createElement(k,{dangerousHed:t,hasDividerAbove:!0,hasDividerBelow:!0,textAlign:"center","data-testid":"section-title"}),s&&o.createElement(m,null,o.createElement(h,null,o.createElement(d,null),o.createElement(y,{placeholder:E,"aria-label":E||L(N.filterInputAriaLabelText),name:"filter",type:"text",onChange:e=>{const t=e.target.value;A(t),T((()=>p(i,t)))},onFocus:()=>{$&&l.emitGoogleTrackingEvent($)},value:I}))),o.createElement(f,{hasFilter:s},o.createElement(v,{ref:F},W.length>0?o.createElement(x,{backgroundColor:"white"},o.createElement(S,{contentAlign:"center",controlPosition:"center",controlPlacement:"space-between",hasControls:!0,hasModerateSpacing:!0,hasNoHorizontalScrollCarousel:!1,hasPagination:!0,hideHeaderBorder:!0,isDotClickable:!0,hasIncreasedPadding:!0},P.map(((e,t)=>o.createElement(S.CarouselItem,Object.assign({},G,{key:`product-bundle-${t}`}),e.map((e=>{if(!e.links)return null;const t=e.links.map((e=>{const t=!0===e.isSecondary?"link--secondary":"link--primary";return Object.assign(Object.assign({},e),{className:t})}));return o.createElement(w,{key:e.groupName,className:"grouped-navigation__group",links:t,linkClassName:"grouped-navigation__link",heading:e.groupName,showContentDivider:a,shouldStyleListItems:!0,attributes:{}})}))))))):o.createElement(C,null,"0 results for"," ",o.createElement(b,null,'"',I,'"'))))):null},E=a.shape({text:a.string.isRequired,url:a.string.isRequired,isSecondary:a.bool,analyticsEvent:a.string}),L=a.arrayOf(a.shape({links:a.arrayOf(E),groupName:a.string,groupId:a.string}));$.propTypes={analyticsEventForFilter:a.string,className:a.string,dangerousHed:a.string,filterLabel:a.string,groupedLinks:L,hasFilter:a.bool,showContentDivider:a.bool},$.displayName="GroupedNavigationHasSummaryCarousel",e.exports=s($,"GroupedNavigationHasSummaryCarousel"),e.exports.groupedLinksShape=L},32512:(e,t,i)=>{e.exports=i(12058)},49134:(e,t,i)=>{const a=i(51117).default,{BaseText:o}=i(74327),{calculateSpacing:n,getLinkStyles:r,getTypographyStyles:l,getColorStyles:d,getInputFieldStyles:s}=i(79720),p=i(55399),{BREAKPOINTS:u}=i(85326),g=a.div.withConfig({displayName:"GroupedNavigationWrapper"})`
  padding-top: ${n(4)};

  ${({hasFilter:e})=>e&&`padding-top: ${n(2)};`}

  .navigation__heading {
    ${({theme:e})=>l(e,"typography.definitions.foundation.title-primary")};
    margin: 0;
    line-height: normal;
    ${({theme:e})=>d(e,"color","colors.foundation.expanded-utility.nav-link.default")};
  }

  .navigation__list-item {
    white-space: normal;
  }

  .content-divider {
    display: block;
    margin-bottom: ${n(2)};
    border-bottom-width: ${n(.5)};
    border-bottom-style: solid;
    ${({theme:e})=>d(e,"border-bottom-color","colors.discovery.lead.secondary.accent")};
    padding-top: ${n(1)};
    width: ${n(2)};
  }

  .grouped-navigation__link {
    ${({theme:e})=>r(e,"colors.foundation.expanded-utility.nav-link.default","colors.foundation.expanded-utility.nav-link.hover","navigation")}

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,c=a.div.withConfig({displayName:"GroupedNavigationFilter"})`
  position: static;
  border-width: 0 0 1px;
  border-style: none;
  padding-top: 2rem;
  width: 100%;

  ${({theme:e})=>d(e,"color","colors.discovery.body.white.divider")};

  .icon {
    position: absolute;
    top: 10px;
    pointer-events: none;
  }
`,m=a.div.withConfig({displayName:"GroupedNavigationFilterContent"})`
  position: relative;
  width: 100%;
  text-align: center;
`,h=a(o).withConfig({displayName:"GroupedNavigationFilterInput"})`
  ${({theme:e})=>s(e,"normal","background")};
  ${({theme:e})=>s(e,"normal","text")};
  border: 1px solid #d8d8d8;
  padding-left: 48px;
  width: 385px;
  height: 50px;
  @media (max-width: ${u.lg}) {
    width: 100%;
  }
`;h.defaultProps={as:"input",typeIdentity:"typography.definitions.foundation.link-secondary"};const y=a.div.withConfig({displayName:"GroupedNavigationContent"})`
  display: flex;
  width: 100%
    ${({hasFilter:e})=>e&&`\n      padding-top: ${n(4)};\n      height: calc(100% - 60px);\n      width: 100%\n\n  `};
  height: 100%;
`,f=a.div.withConfig({displayName:"GroupedNavigationLinks"})`
  flex: 1;
  padding-top: 2rem;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  && li {
    padding-bottom: ${n(2)};

    &.link--primary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-primary")};
    }

    &.link--secondary {
      ${({theme:e})=>l(e,"typography.definitions.foundation.link-secondary")};
    }
  }
`,v=a(o).withConfig({displayName:"GroupedNavigationNoResult"})`
  margin: 30px 10px;
  text-align: center;
  text-transform: lowercase;
  color: rgb(0, 0, 0);
`;v.defaultProps={as:"div",typeIdentity:"typography.definitions.foundation.title-primary"};const w=a(o).withConfig({displayName:"GroupedNavigationQuote"})`
  color: rgb(0, 0, 0);
`;w.defaultProps={as:"span",typeIdentity:"typography.definitions.foundation.title-primary"};const C=a(p.Vertical).withConfig({displayName:"GroupedNavigationGroup"})`
  padding-right: 1rem;
`,b=a.div.withConfig({displayName:"GroupedNavigationIndex"})`
  position: static;
  padding-right: ${n(1)};
  overflow-y: auto;
`;e.exports={GroupedNavigationWrapper:g,GroupedNavigationFilter:c,GroupedNavigationFilterContent:m,GroupedNavigationFilterInput:h,GroupedNavigationContent:y,GroupedNavigationLinks:f,GroupedNavigationGroup:C,GroupedNavigationIndex:b,GroupedNavigationNoResult:v,GroupedNavigationQuote:w}},78042:(e,t,i)=>{const a=i(76186);t.Z=(0,a.defineMessages)({filterInputAriaLabelText:{id:"GroupedNavigationHasSummaryCarousel.FilterInputAriaLabel",defaultMessage:"Filter links",description:"Grouped Navigation Filter component aria label text",isConfigurable:!0}})},80476:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useDebounce=t.filter=void 0;const{useState:a,useCallback:o}=i(67294),n=i(23279);t.filter=(e,t)=>{if(!(null==t?void 0:t.trim()))return e;const i=e=>e.toString().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z0-9\s]/gi,"");return e.map((e=>{var a;return Object.assign(Object.assign({},e),{links:null===(a=e.links)||void 0===a?void 0:a.filter((e=>/(\s|')/.test(t)?i(e.text).includes(i(t)):e.text.match(/([a-zA-Z]\.){2,}/)?e.text.split(" ").filter((e=>i(e).startsWith(i(t)))).length:e.text.split(/([ \-'窶�.]+)/).filter((e=>i(e).startsWith(i(t)))).length))})})).filter((e=>{var t;return null===(t=e.links)||void 0===t?void 0:t.length}))},t.useDebounce=(e,t)=>{const[i,r]=a(e),l=o(n((e=>{r(e)}),t),[]);return[i,e=>{l(e)}]}}}]);