"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[360],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9222:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},l="Troubleshooting",p={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"My steppers are running backwards!",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Slicer Configuration",permalink:"/docs/slicers"},next:{title:"Manual Firmware Compilation",permalink:"/docs/manual-firmware-compilation"}},c=[{value:"My steppers are running backwards!",id:"my-steppers-are-running-backwards",children:[],level:2},{value:"Everytime i update my changes are gone.",id:"everytime-i-update-my-changes-are-gone",children:[],level:2},{value:"Klipper says the MCU is unable to connect",id:"klipper-says-the-mcu-is-unable-to-connect",children:[],level:2},{value:"I updated klipper and now i get an error!",id:"i-updated-klipper-and-now-i-get-an-error",children:[],level:2},{value:"Get help",id:"get-help",children:[],level:2}],u={toc:c};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h2",{id:"my-steppers-are-running-backwards"},"My steppers are running backwards!"),(0,a.kt)("p",null,"Refer to the stepper section at the top of printer.cfg, you can add or remove ",(0,a.kt)("inlineCode",{parentName:"p"},"!")," in front of the dir_pin to reverse the direction of that particular stepper."),(0,a.kt)("h2",{id:"everytime-i-update-my-changes-are-gone"},"Everytime i update my changes are gone."),(0,a.kt)("p",null,"You're not supposed to change ",(0,a.kt)("em",{parentName:"p"},"any")," files inside the managed RatOS config/ folder. You should ",(0,a.kt)("em",{parentName:"p"},"only")," change your printer.cfg, if you need to change settings refer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/configuration/includes-and-overrides"},"Inlcudes & Overrides Documentation")," section.\n",(0,a.kt)("img",{alt:"Hands off the RatOS Managed Config Folder!",src:r(7350).Z})),(0,a.kt)("h2",{id:"klipper-says-the-mcu-is-unable-to-connect"},"Klipper says the MCU is unable to connect"),(0,a.kt)("p",null,"Double check your USB connection, try another cable (the one that comes with the board usually works), and check that your firmware was flashed correctly (refer to the guide for your board).\nIf you need to flash new firmware (for example autoflashing will not work if you upgrade klipper before flashing your board and it's properly connected), use the ",(0,a.kt)("inlineCode",{parentName:"p"},"COMPILE_BINARIES")," macro to generate new firmware binaries for all supported boards. Then download the binary for your board from the ",(0,a.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder in the Machine tab, and flash it via SD card."),(0,a.kt)("h2",{id:"i-updated-klipper-and-now-i-get-an-error"},"I updated klipper and now i get an error!"),(0,a.kt)("p",null,"When you update klipper you might see an error that looks like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Firmware version mismatch between host and guest",src:r(5254).Z})),(0,a.kt)("p",null,"This is because klipper made changes to a part of the MCU firmware that we use. Klipper is telling us that the version of klipper running on the Pi is newer than the version running on the MCU. To fix this, we have to flash the board with a new version of the firmware. For convenience, and ease of use, the newest firmware is compiled and put in the ",(0,a.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder which you can find in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MACHINE")," tab in Mainsail. You can use this to flash your MCU the same way you did initially, via SD Card. RatOS attempts to flash supported boards automatically when klipper is updated. If you're getting this error you're probably using a board which does not support automatic flashing via USB. It's also possible that you updated klipper without having your board flashed and connected. In that case, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"COMPILE_BINARIES")," macro to generate new firmware binaries for all supported boards. Then download the binary for your board from the ",(0,a.kt)("inlineCode",{parentName:"p"},"firmware_binaries")," folder in the Machine tab, and flash that via SD card."),(0,a.kt)("h2",{id:"get-help"},"Get help"),(0,a.kt)("p",null,"For further support check out the RatOS-support and klipper channels on Discord. Use the invite link below to join."),(0,a.kt)("a",{href:"https://discord.gg/ratrig",class:"button button--primary"},"Join the Unnofficial RatRig Discord Community"))}d.isMDXComponent=!0},7350:function(e,t,r){t.Z=r.p+"assets/images/config-folder-783bb1478f027bfd6ad4aab7505bc287.png"},5254:function(e,t,r){t.Z=r.p+"assets/images/firmware_version_mismatch-456c9561ecf03b8fc5c498f42ce6a891.png"}}]);