"use strict";var precacheConfig=[["/my-webpage/index.html","d0542129b63db71934dd2f26e0971176"],["/my-webpage/static/css/main.39c46e5d.css","ccf0b584e86f8417ccb35a864c358391"],["/my-webpage/static/js/main.3871652b.js","c2e921c2c0b7011219c80585c05ff933"],["/my-webpage/static/media/hobbies.6bc2ecde.png","6bc2ecdedd01a402c1b5b8eb6440ff94"],["/my-webpage/static/media/icon1.50d09691.png","50d09691dbc67c5e6c7138425d495714"],["/my-webpage/static/media/icon2.15f91d8c.png","15f91d8c17be0765e14f9af3e02b9e9c"],["/my-webpage/static/media/jumbotron-projects.7c714cab.gif","7c714cab765d96d1dcecfc963d2b4c26"],["/my-webpage/static/media/jumbotron.898d72eb.jpg","898d72ebd84633469bd568987588ddec"],["/my-webpage/static/media/personal.f0717043.jpg","f0717043a1e2337d5dc0ba296ddbadc2"],["/my-webpage/static/media/programming.15861e3b.jpg","15861e3bb65a4bd6ea7b40f6f6f1795c"],["/my-webpage/static/media/project1_2.3e30c12a.png","3e30c12a9502d43420b6e644ca9d6a2a"],["/my-webpage/static/media/project2_reward.a717cc27.jpg","a717cc27eb5db5af67bf30df8ddde800"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/my-webpage/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});