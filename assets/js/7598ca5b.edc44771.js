"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[944],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(t),m=a,p=f["".concat(c,".").concat(m)]||f[m]||d[m]||r;return t?o.createElement(p,i(i({ref:n},u),{},{components:t})):o.createElement(p,i({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5586:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},assets:function(){return u},toc:function(){return d},default:function(){return m}});var o=t(3117),a=t(102),r=(t(7294),t(3905)),i=["components"],s={slug:"moonraker-config-changes",title:"Moonraker is now safe to update",authors:["miklschmidt"],tags:["RatOS","Releases"]},c=void 0,l={permalink:"/blog/moonraker-config-changes",editUrl:"https://github.com/Rat-OS/RatOS/edit/master/site/blog/2022-10-17-moonraker-config-changes.mdx",source:"@site/blog/2022-10-17-moonraker-config-changes.mdx",title:"Moonraker is now safe to update",description:"Major moonraker config and file changes",date:"2022-10-17T00:00:00.000Z",formattedDate:"October 17, 2022",tags:[{label:"RatOS",permalink:"/blog/tags/rat-os"},{label:"Releases",permalink:"/blog/tags/releases"}],readingTime:2.145,truncated:!1,authors:[{name:"Mikkel Schmidt",title:"Creator of RatOS",url:"https://github.com/miklschmidt",imageURL:"https://github.com/miklschmidt.png",key:"miklschmidt"}],frontMatter:{slug:"moonraker-config-changes",title:"Moonraker is now safe to update",authors:["miklschmidt"],tags:["RatOS","Releases"]},nextItem:{title:"RatOS V1.1 Released!",permalink:"/blog/ratos-v1-1-released"}},u={authorsImageUrls:[void 0]},d=[{value:"Major moonraker config and file changes",id:"major-moonraker-config-and-file-changes",children:[],level:2},{value:"Checking if your moonraker config is managed",id:"checking-if-your-moonraker-config-is-managed",children:[],level:2},{value:"Updating to a managed config",id:"updating-to-a-managed-config",children:[],level:2},{value:"Missing files after update",id:"missing-files-after-update",children:[],level:2}],f={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"major-moonraker-config-and-file-changes"},"Major moonraker config and file changes"),(0,r.kt)("p",null,"As you might know, a couple of weeks ago, I issued a warning about updating moonraker due to a major change that involved file restructuring, config changes and deprecations. I now believe i've ironed out all the kinks, and I can now say that the update is safe to do, as long as you update RatOS first, as usual."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"There are a few things to note about this update:")),(0,r.kt)("p",null,"Users who installed RatOS before 1.2.1 have an unmanaged moonraker config, this means that it's up to the user to manage it and RatOS can't correct it when things need updating. Fear not though, as most of this is automated by moonraker itself. When you update moonraker, make sure to keep an eye on the notifications in the topmenu, there's a chance you might have to follow the instructions in there to finish the config validation. If you're asked to enter a sudo password, the default is ",(0,r.kt)("inlineCode",{parentName:"p"},"raspberry"),"."),(0,r.kt)("h2",{id:"checking-if-your-moonraker-config-is-managed"},"Checking if your moonraker config is managed"),(0,r.kt)("p",null,"To check if you have a managed config (and thus don't need to do anything besides clicking the update buttons), you can look in your moonraker.conf for ",(0,r.kt)("inlineCode",{parentName:"p"},"[include config/moonraker.conf]"),", if that is present, you have a managed moonraker config. If it's not, you have an unmanaged config, and you'll have to follow the instructions in the notification, if any is present."),(0,r.kt)("h2",{id:"updating-to-a-managed-config"},"Updating to a managed config"),(0,r.kt)("p",null,"For those who wish to update their moonraker configuration to be managed by RatOS you can do so by making sure RatOS is updated and then replace the contents of moonraker.conf with the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# Load the RatOS moonraker defaults\n[include config/moonraker.conf]\n\n# If you use a non standard ip range in your local network, \n# you can specify it under trusted_clients here.\n[authorization]\ncors_domains:\n    http://app.fluidd.xyz\n    https://app.fluidd.xyz\n    https://my.mainsail.xyz\n    http://my.mainsail.xyz\n    http://*.local\n    http://*.lan\ntrusted_clients:\n    127.0.0.1\n    10.0.0.0/8\n    127.0.0.0/8\n    169.254.0.0/16\n    172.16.0.0/12\n    192.168.0.0/16\n    FE80::/10\n    ::1/128\n    FD00::/8\n")),(0,r.kt)("p",null,"Any changes you've made or want to make to the moonraker config, goes after this. The moonraker config works just like the klipper config, so you can override sections and parameters just like you're used to, they just need to come after the ",(0,r.kt)("inlineCode",{parentName:"p"},"[include]")," statement. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/configuration/includes-and-overrides"},"Includes and Overides")," for more information on how the config merging works."),(0,r.kt)("h2",{id:"missing-files-after-update"},"Missing files after update"),(0,r.kt)("p",null,"If you're missing files after updating (can happen if you do things out of order), you can run the following macro to restore them: ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE_AND_RESTORE_PRINTER_DATA_DIRS"),". Restart moonraker and reload mainsail after running the macro."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nThank you for bearing with me, and happy printing!\n")))}m.isMDXComponent=!0}}]);