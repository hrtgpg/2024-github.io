(globalThis.webpackChunkverso=globalThis.webpackChunkverso||[]).push([[9626],{42820:(e,n,t)=>{const{asConfiguredComponent:o}=t(36380),{asThemedComponent:i}=t(3517),a=t(36125);e.exports=i(o(a,"ContentHeader"))},96921:(e,n,t)=>{const o=t(45697),i=t(67294),{connect:a}=t(59800),{useIntl:r}=t(76186),s=t(36990).Z,d=t(13366).default,l=t(81768),p=t(98288),{googleAnalytics:c}=t(28601),{asConfiguredComponent:g}=t(36380),{doCloseModal:y}=t(47057),{trackComponent:u}=t(40199),{SignInModalBaseWrapper:b,SignInModalCloseButton:h,SignInModalButtons:m,SignInModalDek:f,SignInModalHed:S,SignInModalEmail:B,SignInModalSignInSection:C,SignInModalSpotIllustration:v,SignInModalSignInLink:I,SignInModalHedSpanTag:x}=t(31047),M=({analyticsType:e,authSource:n,brandIdentityAssets:t,className:o,closeButtonCallback:a,dangerousDek:g,dangerousHed:M,dangerousHedSpanTag:k,hasLargeMargins:w,hasRoundedCornersButtons:$,isVisible:L,redirectURL:P,source:H,type:N})=>{i.useEffect((()=>{u("SignInModal")}),[]);const T=n=>c.emitGoogleTrackingEvent(n,{signInModalType:e});L&&T("signin-modal-impression");let _=`${d.oidcAuth}?redirectURL=${encodeURIComponent(P)}&skipAccountLink=true&authSource=${n}`;H&&(_=`${_}&source=${H}`);const A=t.signInModalAsset[N]||t.signInModalAsset.default,{formatMessage:O}=r();return i.createElement(b,{className:o,hasLargeMargins:w,closeTimeoutMS:400,isOpen:L},i.createElement(h,{isIconButton:!0,ariaLabel:O(s.closeButtonAriaLabel),label:O(s.closeButtonLabel),onClickHandler:()=>{y(),T("signin-modal-close"),a&&a()},role:"button",ButtonIcon:l}),i.createElement(S,null,M||O(s.hed),i.createElement(x,null,k||O(s.hedSpanTag))),i.createElement(v,null,i.createElement(p,Object.assign({},A))),i.createElement(f,{dangerouslySetInnerHTML:{__html:g}}),i.createElement(m,{hasRoundedCornersButtons:$},i.createElement(B,{label:O(s.oidcSignUpButtonLabel),href:_,inputKind:"link",rel:"link",iconPosition:"before",onClickHandler:()=>T("signin-modal-oidc-sign-in-click"),"data-testid":"SignInModalEmail"})),i.createElement(C,null,O(s.oidcSignInText)," ",i.createElement(I,{href:_,onClick:()=>T("signin-modal-oidc-sign-in-click")},O(s.oidcSignInLinkText)),"voting"===N&&i.createElement("div",null," ﾂ�ﾂｻ")))};M.displayName="SignInModal",M.defaultProps={authSource:"sign-in-modal",hasLargeMargins:!1,redirectURL:"/",type:"default"},M.propTypes={analyticsType:o.string.isRequired,authSource:o.string,brandIdentityAssets:o.shape({signInModalAsset:o.shape({default:o.object,crosswords:o.object,voting:o.object})}).isRequired,className:o.string,closeButtonCallback:o.func,dangerousDek:o.string,dangerousHed:o.string,dangerousHedSpanTag:o.string,hasLargeMargins:o.bool,hasRoundedCornersButtons:o.bool,isVisible:o.bool,redirectURL:o.string,source:o.string,type:o.oneOf(["default","crosswords","voting"])};const k=g(M,"SignInModal");e.exports=a((e=>{const{signInModalConfig:n,brandIdentityAssets:t}=e;return Object.assign({brandIdentityAssets:t},n)}))(k)},9855:(e,n,t)=>{e.exports=t(96921)},31047:function(e,n,t){var o=this&&this.__rest||function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(t[o[i]]=e[o[i]])}return t};const i=t(67294),a=t(83253),r=t(45697),{default:s,css:d}=t(51117),{BaseText:l,BaseLink:p}=t(74327),{calculateSpacing:c}=t(79720),{BREAKPOINTS:g,ZINDEX_MAP:y}=t(85326),u=t(7279),{getColorToken:b,getTypographyStyles:h}=t(79720),{ResponsiveImagePicture:m}=t(7230),{ButtonWrapper:f}=t(41909),S=s(l).withConfig({displayName:"SignInModalHed"})`
  text-align: center;
`;S.defaultProps={as:"div",colorToken:"colors.discover.body.white.heading",topSpacing:1,typeIdentity:"typography.definitions.consumptionEditorial.display-small"};const B=s.span.withConfig({displayName:"SignInModalHedSpanTag"})`
  display: block;
`,C=s.p.withConfig({displayName:"SignInModalDek"})`
  ${h("typography.definitions.consumptionEditorial.body-core")}
  text-align: center;
  color: ${b("colors.discover.body.white.description")};
  @media (max-width: ${g.md}) {
    margin-bottom: ${c(3)};
  }
`,v=s(l).withConfig({displayName:"SignInModalSpotIllustration"})`
  margin: ${c(1.5)} auto;
  text-align: center;

  ${m} {
    width: 200px;
    height: 170px;
  }
`;v.defaultProps={as:"div",typeIdentity:"typography.definitions.consumptionEditorial.body-core"};const I=s(u.Primary).withConfig({displayName:"SignInModalButtonPrimary"})`
  margin-bottom: ${c(1)};
  width: 100%;
`,x=s(u.Primary).withConfig({displayName:"SignInModalButtonPrimaryOutlined"})`
  width: 100%;
`,M=s(u.Utility).withConfig({displayName:"SignInModalCloseButton"})`
  position: absolute;
  top: ${c(1)};
  right: ${c(1)};
  padding: 0;
  fill: ${b("colors.discovery.body.light.context-tertiary")};

  &,
  &:focus,
  &:hover {
    border: 0;
    background-color: transparent;
  }
`,k=s(u.Utility).withConfig({displayName:"SignInModalEmail"})`
  margin-top: 0;
  padding: 0;
`,w=s.div.withConfig({displayName:"SignInModalButtons"})`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-bottom: ${c(2)};
  width: 100%;

  ${k} {
    padding: 0;
    width: 100%;
  }

  ${({hasRoundedCornersButtons:e})=>e&&`\n    ${f} {\n      border-radius: 4px;\n    }\n  `}
`,$=d`
  &&& {
    padding: ${c(8)} ${c(5)};
    min-height: ${c(62)};
  }
  ${v} {
    margin: ${c(1.5)} auto;

    ${m} {
      width: 175px;
      height: 175px;
    }
  }

  ${C} {
    margin-bottom: ${c(2)};
  }

  ${w} {
    margin-bottom: ${c(4)};

    @media (max-width: ${g.md}) {
      padding-bottom: 0;
    }
  }
`;function L(e){var{className:n}=e,t=o(e,["className"]);const r=`${n}__content`,s=`${n}__overlay`;return i.createElement(a,Object.assign({portalClassName:n,className:r,overlayClassName:s},t))}L.propTypes={className:r.string};const P=s(L).withConfig({displayName:"SignInModalBaseWrapper"})`
  &__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${y.interstitialLayer};

    background-color: rgba(
      ${b("colors.background.black",{rgbOnly:!0})},
      0
    );

    &.ReactModal__Overlay--after-open {
      transition: background-color 750ms;
      opacity: 1;
      background-color: rgba(
        ${b("colors.background.black",{rgbOnly:!0})},
        0.4
      );
    }

    &.ReactModal__Overlay--after-close {
      transition: background-color 750ms;
      background-color: rgba(
        ${b("colors.background.black",{rgbOnly:!0})},
        0
      );
    }
  }

  &__content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${b("colors.background.white")};
    padding: ${c(5)};
    width: ${c(60)};
    max-height: calc(100% - ${c(1,"px")});
    overflow-y: auto;

    @media (max-width: ${g.md}) {
      transform: translateY(-50%)
        translateX(calc(-50% - ${c(2,"px")}));

      margin: 0 ${c(2,"px")};
      padding: ${c(4)} ${c(5)}
        ${c(4)} ${c(5)};
      width: auto;
      min-width: ${c(38)};
      max-width: ${c(60)};
    }

    ${I}
    ${x}
    ${({hasLargeMargins:e})=>!0===e&&$}
  }
`,H=s(l).withConfig({displayName:"SignInModalSignInSection"})`
  display: flex;
  justify-content: center;
  width: 100%;
`;H.defaultProps={as:"div",colorToken:"colors.discovery.body.light.context-tertiary",typeIdentity:"typography.definitions.utility.assistive-text"};const N=s(p).withConfig({displayName:"SignInModalSignInLink"})`
  && {
    z-index: ${y.interstitialLayer};
    margin-left: 5px;
    text-decoration: underline;
  }
`;N.defaultProps={colorToken:"colors.interactive.base.black",typeToken:"typography.definitions.utility.assistive-text"},e.exports={SignInModalBaseWrapper:P,SignInModalCloseButton:M,SignInModalButtons:w,SignInModalDek:C,SignInModalEmail:k,SignInModalHed:S,SignInModalSignInSection:H,SignInModalSignInLink:N,SignInModalSpotIllustration:v,SignInModalHedSpanTag:B}},36990:(e,n,t)=>{const o=t(76186);n.Z=(0,o.defineMessages)({oidcSignUpButtonLabel:{id:"SignInModal.OidcSignUpButtonLabel",defaultMessage:"Create account",description:"SignInModal component OIDC SignUp button label"},closeButtonLabel:{id:"SignInModal.CloseButtonLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button label"},closeButtonAriaLabel:{id:"SignInModal.CloseButtonAriaLabel",defaultMessage:"Close Sign In Modal",description:"SignInModal component close button aria label"},hed:{id:"SignInModal.Hed",defaultMessage:"Save stories ",description:"SignInModal component hed text",isConfigurable:!0},hedSpanTag:{id:"SignInModal.HedSpanTag",defaultMessage:"with an account",description:"SignInModal component hed spanTag text",isConfigurable:!0},oidcSignInText:{id:"SignInModal.OidcSignInText",defaultMessage:"Already have an account?",description:"SignInModal component OIDC SignIn Text"},oidcSignInLinkText:{id:"SignInModal.OidcSignInLinkText",defaultMessage:"Sign in",description:"SignInModal component OIDC SignIn Link Text"}})},96705:(e,n,t)=>{const o=t(94184),i=t(45697),a=t(67294),{useIntl:r}=t(76186),s=t(10229).Z,{trackComponent:d}=t(40199),{SponsoredContentHeaderWrapper:l,SponsoredContentHeaderExternalLink:p,SponsoredContentHeaderInfoBox:c,SponsoredContentHeaderBylineText:g,SponsoredContentHeaderResponsiveAsset:y,SponsoredContentHeaderSponsorName:u}=t(57561),{getBylineText:b,getLogoRatio:h,getSponsoredHeaderDisplayOptions:m,getValidBylineOption:f}=t(931),S=({brandName:e,bylineOption:n,bylineVariant:t,campaignUrl:i,className:S,sponsorLogo:B,sponsorName:C})=>{a.useEffect((()=>{d("SponsoredContentHeader")}),[]);const v=r(),I=f(n),{isBrandedLegacy:x,shouldDisplayLogo:M}=m({bylineOption:I,bylineVariant:t,hasLogo:!!B}),k=b({intl:v,bylineOption:I,brandName:e,sponsorName:C}),w=h({sponsorLogo:B});return a.createElement(l,{isBrandedLegacy:x,className:o(S,I.replace("_","-")),"data-testid":"SponsoredContentHeaderWrapper"},a.createElement(p,{additionalRelVals:["sponsored"],href:i||void 0,attributes:{"aria-label":v.formatMessage(s.sponsoredLinkCTA,{sponsorName:C})}},a.createElement(c,{isBrandedLegacy:x},a.createElement(g,{isBrandedLegacy:x,"data-testid":"SponsoredContentHeaderBylineText"},k),M?a.createElement(y,{altText:B.altText,constrainLogoByWidth:w>1,isBrandedLegacy:x,sources:B.sources}):a.createElement(u,{isBrandedLegacy:x},C))))};S.propTypes={brandName:i.string.isRequired,bylineOption:i.string.isRequired,bylineVariant:i.string.isRequired,campaignUrl:i.string.isRequired,className:i.string,sponsorLogo:i.any,sponsorName:i.string.isRequired},S.displayName="SponsoredContentHeader",e.exports=S},61784:(e,n,t)=>{const{asConfiguredComponent:o}=t(36380);e.exports=o(t(96705),"SponsoredContentHeader")},57561:(e,n,t)=>{const o=t(51117).default,{BaseText:i}=t(74327),{calculateSpacing:a,getColorStyles:r,getTypographyStyles:s}=t(79720),d=t(99956),l=t(56851),p=o.div.withConfig({displayName:"SponsoredContentHeaderWrapper"})`
  display: flex;
  justify-content: center;
  ${({theme:e})=>r(e,"background-color","colors.discovery.body.light.background")};
  padding: ${a(2)};
  width: 100%;
  min-height: 80px;

  ${({isBrandedLegacy:e})=>e?`\n    grid-column: 1 / -1;\n    padding: unset;\n    height: 60px;\n    min-height: unset;\n\n    &.light-theme {\n      ${({theme:e})=>r(e,"background-color","colors.background.light")}\n    }\n  `:""}
`,c=o(l).withConfig({displayName:"SponsoredContentHeaderExternalLink"})`
  text-decoration: none;
`,g=o.div.withConfig({displayName:"SponsoredContentHeaderInfoBox"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${({isBrandedLegacy:e})=>e?"& { flex-direction: unset; }":""}
`,y=o(i).withConfig({displayName:"SponsoredContentHeaderBylineText"})`
  ${({theme:e,isBrandedLegacy:n})=>n?`\n      ${s(e,"typography.definitions.globalEditorial.context-primary")};\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-end;\n      padding-right: ${a(2)};\n      height: 100%;\n\n      &.light-theme {\n        ${r(e,"color","colors.discovery.body.light.heading")}\n      }\n    }\n  `:""}
`;y.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.globalEditorial.syndication"};const u=o(d).withConfig({displayName:"SponsoredContentHeaderResponsiveAsset"})`
  &.responsive-asset {
    display: flex;
    align-items: center;
    margin-top: ${a(1)};
    overflow: visible;

    ${({theme:e,isBrandedLegacy:n})=>n?`\n      justify-content: flex-start;\n      margin-top: unset;\n      padding-left: ${a(2)};\n      border-left: 1px solid;\n      ${r(e,"border-color","colors.discovery.body.light.divider")};\n    `:""}
  }

  &.responsive-image {
    height: 60px;

    img {
      height: 100%;
    }

    ${({constrainLogoByWidth:e})=>e?"{\n      width: 60px;\n      height: unset;\n\n      img {\n        height: unset;\n      }\n    }":""}
  }
`,b=o(i).withConfig({displayName:"SponsoredContentHeaderSponsorName"})`
  display: flex;
  align-items: center;
  margin-top: ${a(.5)};

  ${({isBrandedLegacy:e,theme:n})=>e?`\n    justify-content: flex-start;\n    margin-top: unset;\n    padding-left: ${a(.5)};\n\n    &.light-theme {\n      ${r(n,"color","colors.discovery.body.light.syndication")};\n    }\n  `:""}
`;b.defaultProps={as:"div",colorToken:"colors.consumption.lead.standard.syndication",typeIdentity:"typography.definitions.consumptionEditorial.description-feature"},e.exports={SponsoredContentHeaderWrapper:p,SponsoredContentHeaderExternalLink:c,SponsoredContentHeaderInfoBox:g,SponsoredContentHeaderBylineText:y,SponsoredContentHeaderResponsiveAsset:u,SponsoredContentHeaderSponsorName:b}},10229:(e,n,t)=>{const o=t(76186);n.Z=(0,o.defineMessages)({bylineBrandXAdvertiser:{id:"SponsoredContentHeader.BylineBrandXAdvertiser",defaultMessage:"{brandName} X",description:"Byline text when it's a brand and an advertiser"},bylineBrandPresentsAdvertiser:{id:"SponsoredContentHeader.BylineBrandPresentsAdvertiser",defaultMessage:"{brandName} Presents",description:"Byline text when it's a brand presenting an advertiser"},bylineBrandedContent:{id:"SponsoredContentHeader.BylineBrandedContent",defaultMessage:"Branded Content By",description:"Byline text for branded content"},bylineCreated:{id:"SponsoredContentHeader.BylineCreated",defaultMessage:"Created By {brandName} For",description:"Byline text for created by brand"},bylinePaidPost:{id:"SponsoredContentHeader.BylinePaidPost",defaultMessage:"PAID POST",description:"Byline text for a paid post"},bylinePaidPostByAdvertiser:{id:"SponsoredContentHeader.BylinePaidPostByAdvertiser",defaultMessage:"Paid Post by {sponsorName}, Brought to you By Business Reporter",description:"Byline text by advertiser for a paid post"},bylineProduced:{id:"SponsoredContentHeader.BylineProduced",defaultMessage:"Produced By",description:"Byline text for produced by"},bylineProducedByAdvertiser:{id:"SponsoredContentHeader.BylineProducedByAdvertiser",defaultMessage:"Produced By",description:"Byline text for produced by advertiser"},bylinePresentedByAdvertiser:{id:"SponsoredContentHeader.BylinePresentedByAdvertiser",defaultMessage:"Presented By",description:"Byline text for presented by advertiser"},bylineProducedByBrand:{id:"SponsoredContentHeader.BylineProducedByBrand",defaultMessage:"Produced By {brandName} With",description:"Byline text for produced by brand"},bylineSponsored:{id:"SponsoredContentHeader.BylineSponsored",defaultMessage:"Sponsored content",description:"Byline text for sponsored content"},bylineSponsoredContent:{id:"SponsoredContentHeader.BylineSponsoredContent",defaultMessage:"Sponsored Content By",description:"Byline text for sponsored content with a sponsor name"},bylineInCollaboration:{id:"SponsoredContentHeader.BylineInCollaboration",defaultMessage:"In Collaboration With",description:"Byline text for in collaboration with"},bylineSponsoredBy:{id:"SponsoredContentHeader.BylineSponsoredBy",defaultMessage:"Sponsored By",description:"Byline text for sponsored by"},bylineInPartnership:{id:"SponsoredContentHeader.BylineInPartnership",defaultMessage:"In Partnership With",description:"Byline text for in partnership with"},bylineAdvertisementFeatureWith:{id:"SponsoredContentHeader.BylineAdvertisementFeatureWith",defaultMessage:"Advertisement Feature With",description:"Byline text for advertisement feature with"},bylineOriginalContentBy:{id:"SponsoredContentHeader.BylineOriginalContentBy",defaultMessage:"Original Content By",description:"Byline text for Original Content By"},sponsoredLinkCTA:{id:"SponsoredContentHeader.SponsoredLinkCTA",defaultMessage:"Click to go to {sponsorName}'s website",description:"Call to action for sponsored link"}})},931:(e,n,t)=>{const o=t(10229).Z,i="produced_by_advertiser",a={brand_x_advertiser:o.bylineBrandXAdvertiser,brand_presents_advertiser:o.bylineBrandPresentsAdvertiser,branded_content:o.bylineBrandedContent,created:o.bylineCreated,original_content_by:o.bylineOriginalContentBy,paid_post:o.bylinePaidPost,paid_post_by_advertiser_brought_to_you_by_business_reporter:o.bylinePaidPostByAdvertiser,produced:o.bylineProduced,produced_by_advertiser:o.bylineProducedByAdvertiser,presented_by_advertiser:o.bylinePresentedByAdvertiser,produced_by_brand:o.bylineProducedByBrand,sponsored:o.bylineSponsored,sponsored_content:o.bylineSponsoredContent,in_collaboration:o.bylineInCollaboration,sponsored_by:o.bylineSponsoredBy,in_partnership:o.bylineInPartnership,advertisement_feature_with:o.bylineAdvertisementFeatureWith};function r(e){return Object.prototype.hasOwnProperty.call(a,e)?e:i}e.exports={BYLINE_TEMPLATES:a,getBylineText:function({intl:e,bylineOption:n=i,brandName:t,sponsorName:o}){return e.formatMessage(a[n],{brandName:t,sponsorName:o})},getLogoRatio:function({sponsorLogo:e}){var n,t,o,i;return((null===(t=null===(n=null==e?void 0:e.sources)||void 0===n?void 0:n.sm)||void 0===t?void 0:t.height)||0)/((null===(i=null===(o=null==e?void 0:e.sources)||void 0===o?void 0:o.sm)||void 0===i?void 0:i.width)||1)},getSponsoredHeaderDisplayOptions:function({bylineOption:e,bylineVariant:n,hasLogo:t}){const o=r(e),i="sponsored"===o||"produced"===o;return{isBrandedLegacy:i,shouldDisplayLogo:t&&("logo"===n||i)}},getValidBylineOption:r}},13366:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.proxyApiRoutes=void 0,n.default=Object.freeze({oidcAuth:"/auth/initiate",oidcAuthSessionEnd:"/auth/session/end",oidcAccountSignOut:"/auth/end",oidcExchange:"/auth/exchange",oidcForgotPassword:"/auth/forgot",oidcLanding:"/auth/complete",oidcMagicLink:"/auth/request-link",oidcRefresh:"/auth/refresh",oidcRefreshRedirect:"/auth/refresh-redirect",oauth:{jwks:"/.well-known/jwks",oidcConfig:"/.well-known/openid-configuration",authorizationGrant:"/api/utility/oauth/authorization",tokenExchange:"/api/utility/oauth/token"}}),n.proxyApiRoutes=Object.freeze({authenticate:"/v2/authenticate",googleAuthenticate:"/v2/sso/google",marketingPermissions:"/v2/marketing-permissions",newsletterSubscriptions:"/v2/newsletter-subscriptions",requestPasswordReset:"/v2/reset-password-token",resetPassword:"/v2/users/reset-password",requestSignInHelp:"/v2/magic-link/send",sailthruNewsletterSubscriptions:"/v2/newsletter/sailthru",swgAuthenticate:"/v2/swg/authenticate",swgSubscribe:"/v2/swg/subscription",userDetails:"/v2/users",userLookup:"/v2/users/lookup"})},29750:e=>{e.exports=function(e,n,t){return e==e&&(void 0!==t&&(e=e<=t?e:t),void 0!==n&&(e=e>=n?e:n)),e}},74691:(e,n,t)=>{var o=t(29750),i=t(14841);e.exports=function(e,n,t){return void 0===t&&(t=n,n=void 0),void 0!==t&&(t=(t=i(t))==t?t:0),void 0!==n&&(n=(n=i(n))==n?n:0),o(i(e),n,t)}}}]);