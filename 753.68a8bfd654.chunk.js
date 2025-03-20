"use strict";(self.webpackChunk_microsoft_powerpages_mf_shared=self.webpackChunk_microsoft_powerpages_mf_shared||[]).push([[753],{6753:(t,e,n)=>{n.r(e),n.d(e,{usePagesStore:()=>f});var o=n(2487),r=n(3954),a=n(6064);const{useSyncExternalStoreWithSelector:u}=a;let s=!1;const i=t=>{"function"!=typeof t&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e="function"==typeof t?(0,o.createStore)(t):t,n=(t,n)=>function(t,e=t.getState,n){n&&!s&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),s=!0);const o=u(t.subscribe,t.getState,t.getServerState||t.getState,e,n);return(0,r.useDebugValue)(o),o}(e,t,n);return Object.assign(n,e),n},c=t=>t?i(t):i;var l=n(3768);
/*!
 * Copyright (C) Microsoft Corporation. All rights reserved.
 */
const f=c((0,l.immer)((t=>({portalTheme:{},isEditingMode:!0,controlsMap:{},controlsDataStore:{},controlsNameMap:{},initialDataStore:{},controlsCountByType:{},setEditingMode:e=>t((t=>{t.isEditingMode=e})),addControl:(e,n)=>t((t=>{t.controlsMap[e]=n})),initControl:(e,n,o,r)=>t((t=>{const a=t.controlsCountByType[n]||0,u=(null==o?void 0:o.name)||"".concat(n,"_").concat(a+1);t.controlsNameMap[e]=u,t.controlsCountByType[n]=a+1,Object.freeze(null==o?void 0:o.children),Object.freeze(null==o?void 0:o.system);const s=o?{...o,...t.initialDataStore[u],name:u}:{...t.initialDataStore[u],name:u};t.controlsDataStore[u]={...s},t.controlsDataStore[u]=s,(null==o||!o.name)&&(null==r||r((t=>Object.assign(t,{...s}))))})),setControlMap:e=>t((t=>{t.controlsMap={...e}})),setPortalTheme:e=>t((t=>{t.portalTheme=e})),setControlData:(e,n)=>t((t=>{t.controlsDataStore[e]={...t.controlsDataStore[e],...n}})),setInitialData:e=>e&&t((t=>{t.initialDataStore={...e}}))}))))},8693:(t,e,n)=>{
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o=n(7518);var r="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},a=o.useState,u=o.useEffect,s=o.useLayoutEffect,i=o.useDebugValue;function c(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!r(t,n)}catch(t){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(t,e){return e()}:function(t,e){var n=e(),o=a({inst:{value:n,getSnapshot:e}}),r=o[0].inst,l=o[1];return s((function(){r.value=n,r.getSnapshot=e,c(r)&&l({inst:r})}),[t,n,e]),u((function(){return c(r)&&l({inst:r}),t((function(){c(r)&&l({inst:r})}))}),[t]),i(n),n};e.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:l},1274:(t,e,n)=>{
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var o=n(7518),r=n(7630);var a="function"==typeof Object.is?Object.is:function(t,e){return t===e&&(0!==t||1/t==1/e)||t!=t&&e!=e},u=r.useSyncExternalStore,s=o.useRef,i=o.useEffect,c=o.useMemo,l=o.useDebugValue;e.useSyncExternalStoreWithSelector=function(t,e,n,o,r){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=c((function(){function t(t){if(!i){if(i=!0,u=t,t=o(t),void 0!==r&&d.hasValue){var e=d.value;if(r(e,t))return s=e}return s=t}if(e=s,a(u,t))return e;var n=o(t);return void 0!==r&&r(e,n)?e:(u=t,s=n)}var u,s,i=!1,c=void 0===n?null:n;return[function(){return t(e())},null===c?void 0:function(){return t(c())}]}),[e,n,o,r]);var S=u(t,f[0],f[1]);return i((function(){d.hasValue=!0,d.value=S}),[S]),l(S),S}},7630:(t,e,n)=>{t.exports=n(8693)},6064:(t,e,n)=>{t.exports=n(1274)}}]);
//# sourceMappingURL=753.68a8bfd654.chunk.js.map