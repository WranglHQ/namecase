(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.NameCase=f()}})(function(){var define,module,exports;return function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r}()({1:[function(require,module,exports){(function(){var namecase=function(input,opt){var output=[];if(isArray(input)){return input.map(function(i){return namecase(i)})}if(typeof input==="string"){return nc(input,opt)}return input};namecase.checkName=function(name){return name===name.toLowerCase()||name===name.toUpperCase()};namecase.normalize=function(name){return name.replace(/\s{2,}/g," ")};var nc=function(el,opt){opt=opt||{};el=el.trim().toLowerCase();var splitters=[{s:/\s/,r:" "},{s:/\-/,r:"-"},{s:/\'/,r:"'"},{s:/\"/,r:'"'},{s:/\(/,r:"("},{s:/\./,r:"."}];for(var i=0;i<splitters.length;i++){var elArr=el.split(splitters[i].s);for(var j=0;j<elArr.length;j++){elArr[j]=elArr[j].charAt(0).toUpperCase()+elArr[j].slice(1)}el=elArr.join(splitters[i].r)}if(new RegExp(/\bMac[A-Za-z]{2,}[^aciozj]\b/).test(el)||new RegExp(/\bMc/).test(el)){el=el.replace(/\b(Ma?c)([A-Za-z]+)/,function(x,y,z){return y+z.charAt(0).toUpperCase()+z.substring(1)});el=el.replace(/\bMacEvicius\b/,"Macevicius").replace(/\bMacHado\b/,"Machado").replace(/\bMacHar\b/,"Machar").replace(/\bMacHin\b/,"Machin").replace(/\bMacHlin\b/,"Machlin").replace(/\bMacIas\b/,"Macias").replace(/\bMacIulis\b/,"Maciulis").replace(/\bMacKie\b/,"Mackie").replace(/\bMacKle\b/,"Mackle").replace(/\bMacKlin\b/,"Macklin").replace(/\bMacQuarie\b/,"Macquarie").replace(/\bMacOmber\b/,"Macomber").replace(/\bMacIn\b/,"Macin").replace(/\bMacKintosh\b/,"Mackintosh").replace(/\bMacKen\b/,"Macken").replace(/\bMacHen\b/,"Machen").replace(/\bMacHiel\b/,"Machiel").replace(/\bMacIol\b/,"Maciol").replace(/\bMacKell\b/,"Mackell").replace(/\bMacKlem\b/,"Macklem").replace(/\bMacKrell\b/,"Mackrell").replace(/\bMacLin\b/,"Maclin").replace(/\bMacKey\b/,"Mackey").replace(/\bMacKley\b/,"Mackley").replace(/\bMacHell\b/,"Machell").replace(/\bMacHon\b/,"Machon")}el=el.replace(/\bMacmurdo/,"MacMurdo").replace(/\bMacisaac/,"MacIsaac").replace(/\bAl(?=\s+\w)/g,"al").replace(/\bAp\b/g,"ap").replace(/\bBen(?=\s+\w)\b/g,"ben").replace(/\bDell([ae])\b/g,"dell$1").replace(/\bD([aeiu])\b/g,"d$1").replace(/\bDe([lr])\b/g,"de$1").replace(/\bEl\b/g,"el").replace(/\bLa\b/g,"la").replace(/\bL([eo])\b/g,"l$1").replace(/\bVan(?=\s+\w)/g,"van").replace(/\bVon\b/g,"von").replace(/\b(?:\d{4}|(?:[IVX])(?:X{0,3}I{0,3}|X{0,2}VI{0,3}|X{0,2}I?[VX]))$/i,function(v){return v.toUpperCase()}).replace(/\b[0-9](x)\b/,function(v){return v.toUpperCase()}).replace(/\b[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]{2}\s/,function(v){return v.toUpperCase()}).replace(/\bMR\s/,"Mr").replace(/\bMS\s/,"Ms").replace(/\bDR\s/,"Dr").replace(/\bST\s/,"St").replace(/\bJR\s/,"Jr").replace(/\bSR\s/,"Sr").replace(/\bLT\s/,"Lt").replace(/\bThe\b/g,"the").replace(/\bOf\b/g,"of").replace(/\bAnd\b/g,"and").replace(/\bY\s/g,"y").replace(/\s{2,}/g," ");if(opt.hasOwnProperty("individualFields")&&opt.individualFields===true){return el}return el.charAt(0).toUpperCase()+el.substring(1)};if(typeof module!=="undefined"&&module&&module.exports){module.exports=namecase}else{NameCase=namecase}}).call(this);var toString={}.toString;var isArray=Array.isArray||function(arr){return toString.call(arr)=="[object Array]"};[].map||(Array.prototype.map=function(a){for(var b=this,c=b.length,d=[],e=0,f;e<b;)d[e]=e in b?a.call(arguments[1],b[e],e++,b):f;return d})},{}]},{},[1])(1)});