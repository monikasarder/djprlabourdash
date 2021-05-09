/*!
  * Bootstrap Table of Contents v1.0.1 (http://afeld.github.io/bootstrap-toc/)
* Copyright 2015 Aidan Feldman
* Licensed under MIT (https://github.com/afeld/bootstrap-toc/blob/gh-pages/LICENSE.md) */
  !function(a){"use strict";window.Toc={helpers:{findOrFilter:function(e,t){var n=e.find(t);return e.filter(t).add(n).filter(":not([data-toc-skip])")},generateUniqueIdBase:function(e){return a(e).text().trim().replace(/\'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]\.\/\(\)\*\\\n\t\b\v]/g,"-").replace(/-{2,}/g,"-").substring(0,64).replace(/^-+|-+$/gm,"").toLowerCase()||e.tagName.toLowerCase()},generateUniqueId:function(e){for(var t=this.generateUniqueIdBase(e),n=0;;n++){var r=t;if(0<n&&(r+="-"+n),!document.getElementById(r))return r}},generateAnchor:function(e){if(e.id)return e.id;var t=this.generateUniqueId(e);return e.id=t},createNavList:function(){return a('<ul class="nav navbar-nav"></ul>')},createChildNavList:function(e){var t=this.createNavList();return e.append(t),t},generateNavEl:function(e,t){var n=a('<a class="nav-link"></a>');n.attr("href","#"+e),n.text(t);var r=a("<li></li>");return r.append(n),r},generateNavItem:function(e){var t=this.generateAnchor(e),n=a(e),r=n.data("toc-text")||n.text();return this.generateNavEl(t,r)},getTopLevel:function(e){for(var t=1;t<=6;t++){if(1<this.findOrFilter(e,"h"+t).length)return t}return 1},getHeadings:function(e,t){var n="h"+t,r="h"+(t+1);return this.findOrFilter(e,n+","+r)},getNavLevel:function(e){return parseInt(e.tagName.charAt(1),10)},populateNav:function(r,a,e){var i,s=r,c=this;e.each(function(e,t){var n=c.generateNavItem(t);c.getNavLevel(t)===a?s=r:i&&s===r&&(s=c.createChildNavList(i)),s.append(n),i=n})},parseOps:function(e){var t;return(t=e.jquery?{$nav:e}:e).$scope=t.$scope||$("page-1-content"),t}},init:function(e){(e=this.helpers.parseOps(e)).$nav.attr("data-toggle","toc");var t=this.helpers.createChildNavList(e.$nav),n=this.helpers.getTopLevel(e.$scope),r=this.helpers.getHeadings(e.$scope,n);this.helpers.populateNav(t,n,r)}},a(function(){a('nav[data-toggle="toc"]').each(function(e,t){var n=a(t);Toc.init(n)})})}(jQuery);
