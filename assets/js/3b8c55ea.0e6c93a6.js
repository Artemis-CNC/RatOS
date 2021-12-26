"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[217],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),c=s(n),h=r,m=c["".concat(p,".").concat(h)]||c[h]||u[h]||o;return n?a.createElement(m,i(i({ref:e},d),{},{components:n})):a.createElement(m,i({ref:e},d))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9250:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return c}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={id:"installation",title:"Installating RatOS",sidebar_label:"Installation",sidebar_position:1},p="Installation",s={unversionedId:"installation",id:"installation",isDocsHomePage:!1,title:"Installating RatOS",description:"Raspberry Pi Installation",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/docs/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"installation",title:"Installating RatOS",sidebar_label:"Installation",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Initial Configuration",permalink:"/docs/configuration"}},d=[{value:"Raspberry Pi Installation",id:"raspberry-pi-installation",children:[{value:"WIFI (Optional)",id:"wifi-optional",children:[],level:3}],level:2},{value:"Preparing your control board",id:"preparing-your-control-board",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Updating",id:"updating",children:[],level:2}],u={toc:d};function c(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"raspberry-pi-installation"},"Raspberry Pi Installation"),(0,o.kt)("p",null,"Download the newest release (download the RatOS-","*",".zip file under the assets dropdown) of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Rat-Os/RatOS/releases"},"RatOS on github"),".\nThen follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/installation/installing-images/"},"The offical raspberry pi guide")," to write that image to the SD card that goes into your raspberry pi (8GB or larger)"),(0,o.kt)("p",null,"Note: this will destroy all data on the card!"),(0,o.kt)("a",{class:"button button--primary",href:"https://github.com/Rat-Os/RatOS/releases"},"Download RatOS"),(0,o.kt)("h3",{id:"wifi-optional"},"WIFI (Optional)"),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Do ",(0,o.kt)("strong",{parentName:"p"},"NOT")," use a textprocessor such as Wordpad, it will mangle the file and your pi won't boot. Notepad, Notepad++, VSCode are all fine."))),(0,o.kt)("p",null,"When the process is complete, find the ",(0,o.kt)("inlineCode",{parentName:"p"},"/boot")," volume / folder on the sd card. If you're having trouble finding the boot volume, try reinserting the SD card into your PC. Edit the ",(0,o.kt)("inlineCode",{parentName:"p"},"ratos-wpa-supplicant.txt")," file found on the boot volume in a text editor and fill out your wifi information. ",(0,o.kt)("strong",{parentName:"p"},"Remember to change the country code at the bottom of the file.")),(0,o.kt)("p",null,"When that is done insert the SD card into the Raspberry Pi, but don't turn on your printer / Raspberry Pi just yet."),(0,o.kt)("h2",{id:"preparing-your-control-board"},"Preparing your control board"),(0,o.kt)("p",null,"See the documentation for your specific board."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-11"},"BIGTREETECH Octopus v1.1")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-446"},"BIGTREETECH Octopus Pro 446")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/octopus-pro-429"},"BIGTREETECH Octopus Pro 429")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/btt/skr-pro-12"},"BIGTREETECH SKR Pro v1.2")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/boards/fysetc/spider-11"},"Fysetc Spider v1.1")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"With the control board connected via USB to your Raspberry Pi, turn on your printer. After a couple of minutes, open your browser and navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://RatOS.local"},"http://RatOS.local/")," and proceed to the ",(0,o.kt)("a",{parentName:"p",href:"configuration"},"configuration guide"),"."),(0,o.kt)("h2",{id:"updating"},"Updating"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"It is important that you ",(0,o.kt)("strong",{parentName:"p"},"don't")," update the klipper package ",(0,o.kt)("em",{parentName:"p"},"before")," your board connects correctly, because firmware updates will not compile or flash automatically before your board is properly flashed and connected."))),(0,o.kt)("p",null,"After you've configured your printer.cfg and everything is working, go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"MACHINE")," tab in Mainsail. You'll see a sheet with the title \"Update Manager\", if you're familiar with Fluidd or Mainsail, you'll notice a new entry called ",(0,o.kt)("inlineCode",{parentName:"p"},"RatOS"),". This ",(0,o.kt)("inlineCode",{parentName:"p"},"RatOS")," package will update all the config files in the config folder, improvements, support for hotends, macros, extruders, new boards etc, will be coming to your printer this way in the future. ",(0,o.kt)("strong",{parentName:"p"},"Be sure to keep this up to date, especially if you update klipper"),". In general, it's advisable to keep all your packages up to date, but if you're happy with how your printer works and there's nothing interesting for you in the updates, it's OK to delay updating until a later time. Klipper is a continually evolving product, that also means that bugs ",(0,o.kt)("em",{parentName:"p"},"do happen"),". In the rare circumstance that bugs are introduced, they're usually fixed very quickly, but if you have a bunch of important prints coming up, maybe delay the updates till afterwards. Now we've got that out of the way, ",(0,o.kt)("strong",{parentName:"p"},"please go ahead and update everything to the latest version"),"."))}c.isMDXComponent=!0}}]);