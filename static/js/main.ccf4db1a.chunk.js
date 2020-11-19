(this["webpackJsonpmovies-react"]=this["webpackJsonpmovies-react"]||[]).push([[0],{106:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(17),n=a.n(c),s=(a(50),a(27)),i=a(18),o=a(9);t.default=function(e){return e.results?Object(r.jsxs)("div",{children:[Object(r.jsx)(s.a,{className:n.a.main,children:e.results.map((function(e){return Object(r.jsxs)(s.a.Item,{className:n.a.item,children:[Object(r.jsx)("img",{alt:"slider img",className:n.a.poster,src:"https://image.tmdb.org/t/p/original".concat(e.backdrop_path)}),Object(r.jsx)(s.a.Caption,{children:Object(r.jsxs)("div",{className:n.a.carousel__row,children:[Object(r.jsx)("div",{className:n.a.title,children:e.title}),Object(r.jsx)("div",{className:n.a.overview,children:e.overview})]})})]},e.id)}))}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:n.a.home__main__title,children:"Upcoming Movies"})}),Object(r.jsx)("div",{className:n.a.card__row,children:e.results.slice(0,3).map((function(e){return Object(r.jsxs)("div",{className:n.a.card,children:[Object(r.jsx)("div",{children:Object(r.jsx)(o.NavLink,{to:"/movieblock/"+e.id,children:Object(r.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path)})})}),Object(r.jsx)("div",{className:n.a.card__title,children:e.title})]},e.id)}))})]}):Object(r.jsx)(i.a,{})}},107:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(9),n=a(18),s=a(6),i=a.n(s);t.default=function(e){if(!e.results)return Object(r.jsx)(n.a,{});for(var t=[],a=1;a<=e.totalPagesCount;a++)t.push(a);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:i.a.pages__row,children:Object(r.jsx)("div",{className:"btn-group mr-2",role:"group","aria-label":"First group",children:t.map((function(t){return Object(r.jsx)("button",{onClick:function(){return e.onPageChanged(t)},type:"button",className:"btn btn-secondary",children:t})}))})}),Object(r.jsx)("div",{className:i.a.main__row,children:e.results?e.results.map((function(e){return Object(r.jsx)("div",{className:i.a.movie__block,children:Object(r.jsxs)("div",{className:i.a.row,children:[Object(r.jsx)("div",{children:Object(r.jsx)(c.NavLink,{to:"/movieblock/"+e.id,children:Object(r.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path)})})}),Object(r.jsxs)("div",{className:i.a.text__block,children:[Object(r.jsx)("div",{className:i.a.title,children:e.title}),Object(r.jsx)("div",{className:i.a.date,children:e.release_date})]})]})},e.id)})):null}),Object(r.jsx)("div",{className:i.a.pages__row,children:Object(r.jsx)("div",{className:"btn-group mr-2",role:"group","aria-label":"First group",children:t.map((function(t){return Object(r.jsx)("button",{onClick:function(){return e.onPageChanged(t)},type:"button",className:"btn btn-secondary",children:t})}))})})]})}},108:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(9),n=a(18),s=a(6),i=a.n(s);t.default=function(e){if(!e.results)return Object(r.jsx)(n.a,{});for(var t=[],a=1;a<=e.totalPageCount;a++)t.push(a);return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:i.a.pages__row,children:Object(r.jsx)("div",{className:"btn-group mr-2",role:"group","aria-label":"First group",children:t.map((function(t){return Object(r.jsx)("button",{onClick:function(){return e.onPageChanged(t)},type:"button",className:"btn btn-secondary",children:t})}))})}),Object(r.jsx)("div",{className:i.a.main__row,children:e.results?e.results.map((function(e){return Object(r.jsx)("div",{className:i.a.movie__block,children:Object(r.jsxs)("div",{className:i.a.row,children:[Object(r.jsx)("div",{children:Object(r.jsx)(c.NavLink,{to:"/movieblock/"+e.id,children:Object(r.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path)})})}),Object(r.jsxs)("div",{className:i.a.text__block,children:[Object(r.jsx)("div",{className:i.a.title,children:e.title}),Object(r.jsx)("div",{className:i.a.date,children:e.release_date})]})]})},e.id)})):null}),Object(r.jsx)("div",{className:i.a.pages__row,children:Object(r.jsx)("div",{className:"btn-group mr-2",role:"group","aria-label":"First group",children:t.map((function(t){return Object(r.jsx)("button",{onClick:function(){return e.onPageChanged(t)},type:"button",className:"btn btn-secondary",children:t})}))})})]})}},109:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(0),n=a.n(c),s=a(19),i=a.n(s),o=(a(61),a(7)),l=(a(62),a(24)),u=a(3),d=a(14),j=a(25),b=a.n(j),_=b.a.create({baseURL:"https://api.themoviedb.org/3/"}),m=function(e){return _.get("movie/popular?api_key=59b515f14ca7817fa52949d84c435157&page=".concat(e))},p=function(e){return _.get("movie/top_rated?api_key=59b515f14ca7817fa52949d84c435157&page=".concat(e))},g=function(e){return _.get("movie/".concat(e,"?api_key=59b515f14ca7817fa52949d84c435157"))},O=function(e){return _.get("movie/".concat(e,"/images?api_key=59b515f14ca7817fa52949d84c435157"))},h=function(e){return _.get("movie/".concat(e,"/videos?api_key=59b515f14ca7817fa52949d84c435157"))},f=function(){return _.get("/movie/upcoming?api_key=59b515f14ca7817fa52949d84c435157")},v="SET_RESULTS",x="SET_BLOCK",w="SET_IMAGES",N={data:{},block:null,images:[]},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(u.a)(Object(u.a)({},e),{},{data:t.data});case x:return Object(u.a)(Object(u.a)({},e),{},{block:t.block});case w:return Object(u.a)(Object(u.a)({},e),{},{images:t.images});default:return e}},A=a(18),P="SET_RESULST",y={results:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(u.a)(Object(u.a)({},e),{},{results:t.results});default:return e}},E=a(84).default,S=Object(o.o)((function(e){return Object(c.useEffect)((function(){var t=e.match.params.movieId;e.getVideos(t)}),[]),Object(r.jsx)(E,Object(u.a)({},e))})),R=Object(d.b)((function(e){return{results:e.trailer.results}}),{getVideos:function(e){return function(t){h(e).then((function(e){var a;t((a=e.data.results,{type:P,results:a}))}))}}})(S),B=a(16),U=a.n(B),L=function(e){if(!e.data)return Object(r.jsx)(A.a,{});for(var t="https://image.tmdb.org/t/p/original"+e.data.backdrop_path,a=0;a<3;a++);return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:U.a.bg,style:{backgroundImage:"url(".concat(t,")"),width:"100%",height:"780px",backgroundRepeat:"no-repeat",margin:"0 auto",marginBottom:"100px",backgroundPosition:"50% 50%"},children:[Object(r.jsx)("div",{className:U.a.title,children:e.data.title}),Object(r.jsx)("div",{className:U.a.text,children:e.data.overview})]}),Object(r.jsxs)("div",{className:U.a.info,children:[Object(r.jsx)("div",{className:U.a.info__title,children:"Info"}),Object(r.jsxs)("div",{className:U.a.genres,children:[" Genres: \xa0",e.data.genres?e.data.genres.map((function(e){return Object(r.jsxs)("span",{children:[e.name,","]},e.id)})):null]}),Object(r.jsxs)("div",{className:U.a.date,children:["Release Date: ",e.data.release_date,","]}),Object(r.jsxs)("div",{className:U.a.runtime,children:["Runtime: ",e.data.runtime," minutes."]}),Object(r.jsx)("div",{})]}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:U.a.img__row,children:e.images?e.images.slice(0,3).map((function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("img",{className:U.a.img_element,alt:"imgElement",src:"https://image.tmdb.org/t/p/w300/".concat(e.file_path)})},e.file_path)})):null})}),Object(r.jsx)("div",{className:U.a.trailer,children:Object(r.jsx)(R,{})})]})},T=Object(o.o)((function(e){return Object(c.useEffect)((function(){var t=e.match.params.movieId;e.getResults(t),e.getImages(t)}),[]),Object(r.jsx)(L,Object(u.a)({},e))})),I=Object(d.b)((function(e){return Object(l.a)({data:e.block.data,images:e.block.images},"images",e.block.images)}),{getResults:function(e){return function(t){g(e).then((function(e){var a;t((a=e.data,{type:v,data:a}))}))}},getImages:function(e){return function(t){O(e).then((function(e){var a;t((a=e.data.backdrops,{type:w,images:a}))}))}}})(T),F=a(36),H=a.n(F),z=function(e){return Object(r.jsx)("div",{className:H.a.row,children:Object(r.jsx)("div",{className:H.a.title,children:"moviedb"})})},V=a(21),M=a.n(V),Q=(a(50),a(9)),D=Q.NavLink,G=(0,Q.withRouter)((function(e){return Object(r.jsxs)("div",{className:M.a.row,children:[Object(r.jsxs)("div",{className:M.a.link__row,children:[Object(r.jsx)("div",{children:Object(r.jsx)(D,{className:M.a.link,to:"/toprated",children:"Top Rated"})}),Object(r.jsx)("div",{children:Object(r.jsx)(D,{className:M.a.link,to:"/popular",children:"Popular"})})]}),Object(r.jsx)("div",{className:M.a.drop__down,children:Object(r.jsxs)("div",{className:"dropdown",children:[Object(r.jsx)("button",{className:"btn btn-dark dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Menu"}),Object(r.jsxs)("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton",children:[Object(r.jsx)(D,{to:"/toprated",className:"dropdown-item",children:"Top Rated"}),Object(r.jsx)(D,{to:"/popular",className:"dropdown-item",children:"Popular"})]})]})}),Object(r.jsx)("div",{children:Object(r.jsx)(D,{to:"/search",children:Object(r.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA+gAAAPoBsD8l7AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAILSURBVEiJrZU9axVBFIaf991bBqugYMRCLSSioEZQFIJKfoCFKPgPLNPYCLERbESFICJCIEUK0dZCMATBIo0pggE/MGBUxEJFlAjRPRbZ651s7u5d4Q4MzOyceZ9zZs6cVUSQNkmG7LyJ44EOQewD3gsWcngO+VREfKFpi4h/HdgtsqfCUdM/QXYm3VfXE/HsnPDPkthnoSfCr4TzdM14GlAjALBL+EdHQLPA3lJ0W4yvCq+17cDjPQGARDaXeHalzjPgSOLMKjDcA5Cd7XiezTUKG19MHJqptTW+0QmZ/Y0uDiS8WOz7UGfrQAeLhPoWEYsNMy8Ez4rpdkl7qmwNMbw+1FIT8XbL4UUy3VYD0LvCr53/AzCk9iuVdiIWivEOSVubAoI4XAz/AB8rAevPv+2VLzcRl3QCNFqgZiPid539gPBykRE5tE72yKAB4ddJ5h1t8JJbp5JS8At8Cci6iI8Kv0le/ONeKa32c86UXQ8YTyJ7K5jPYckwFOgAxDFAG64CzQdxH/LJiFjbdD4bPcwuCH/tUU1D6IHwSunbQ6BVWU2TYxgyvi28VBL+LvQIGIkIjCfLYOMZwLWAEmwQGAEGN6+1xrpFZzxFUs8a/TRqit5EBeROXwDFUV2rgNzsC6CA3OoGAU/0BQDI+G4XyMu+AAqIjacT8VVojfUNUEAy43vCy9A6HRH8BW9kjn/uFSCEAAAAAElFTkSuQmCC"})})}),Object(r.jsx)("div",{className:M.a.title,children:Object(r.jsx)(D,{to:"/",className:M.a.title,children:"moviedb"})})]})})),J=a(37),K=a.n(J),Y=a(53),Z="SET_RESULTS",W={results:[]},X=function(e){return{type:Z,results:e}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Z:return Object(u.a)(Object(u.a)({},e),{},{results:t.results});default:return e}},$=a(106).default,ee=Object(d.b)((function(e){return{results:e.home.results}}),{getResults:function(e){return function(){var e=Object(Y.a)(K.a.mark((function e(t){var a;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:a=e.sent,t(X(a.data.results));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){return Object(c.useEffect)((function(){e.getResults()}),[]),Object(r.jsx)($,Object(u.a)({},e))})),te="SET_RESULTS",ae="SET_CURERNT_PAGE",re={results:[],currentPage:1,pageSize:20,totalPagesCount:5},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(u.a)(Object(u.a)({},e),{},{results:t.results});case ae:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});default:return e}},ne=a(107).default,se=Object(d.b)((function(e){return{results:e.popular.results,currentPage:e.popular.currentPage,pageSize:e.popular.pageSize,totalPagesCount:e.popular.totalPagesCount}}),{getResults:function(e){return function(t){m(e).then((function(e){t(function(e){return{type:te,results:e}}(e.data.results))}))}},setCurrentPage:function(e){return{type:ae,currentPage:e}}})((function(e){Object(c.useEffect)((function(){e.getResults(e.currentPage)}),[e.currentPage]);return Object(r.jsx)(ne,Object(u.a)(Object(u.a)({},e),{},{onPageChanged:function(t){e.setCurrentPage(t),e.getResults(e.currentPage)}}))})),ie=a(38),oe=a(6),le=a.n(oe),ue=a(54),de=a.n(ue),je=a(9),be=function(e){var t=Object(c.useState)(""),a=Object(ie.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)([]),l=Object(ie.a)(i,2),u=l[0],d=l[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:Object(r.jsx)("input",{autoFocus:!0,placeholder:"Search for a movie...",className:de.a.input,onKeyPress:function(e){"Enter"===e.key&&b.a.get("https://api.themoviedb.org/3/search/movie?api_key=59b515f14ca7817fa52949d84c435157&query=".concat(n)).then((function(e){d(e.data.results)}))},onChange:function(e){return s(e.target.value),Object(r.jsx)(o.c,{to:"/search"})},type:"text",value:n})}),Object(r.jsx)("div",{className:le.a.main__row,children:u?u.map((function(e){return Object(r.jsx)("div",{className:le.a.movie__block,children:Object(r.jsxs)("div",{className:le.a.row,children:[Object(r.jsx)("div",{children:Object(r.jsx)(je.NavLink,{to:"/movieblock/"+e.id,children:Object(r.jsx)("img",{alt:"poster",src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path)})})}),Object(r.jsxs)("div",{className:le.a.text__block,children:[Object(r.jsx)("div",{className:le.a.title,children:e.title}),Object(r.jsx)("div",{className:le.a.date,children:e.release_date})]})]})},e.id)})):null})]})},_e="SET_RESULTS",me="SET_CURRENT_PAGE",pe={results:[],pageSize:20,currentPage:1,totalPageCount:5},ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(u.a)(Object(u.a)({},e),{},{results:t.results});case me:return Object(u.a)(Object(u.a)({},e),{},{currentPage:t.currentPage});default:return e}},Oe=a(108).default,he=Object(d.b)((function(e){return{results:e.topRated.results,currentPage:e.topRated.currentPage,pageSize:e.topRated.pageSize,totalPageCount:e.topRated.totalPageCount}}),{getResults:function(e){return function(t){p(e).then((function(e){t(function(e){return{type:_e,results:e}}(e.data.results))}))}},setCurrentPage:function(e){return{type:me,currentPage:e}}})((function(e){Object(c.useEffect)((function(){e.getResults(e.currentPage)}),[e.currentPage]);return Object(r.jsx)(Oe,Object(u.a)(Object(u.a)({},e),{},{onPageChanged:function(t){e.setCurrentPage(t),e.getResults(e.currentPage)}}))}));var fe=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(G,{}),Object(r.jsx)(o.d,{path:"/movieblock/:movieId",render:function(){return Object(r.jsx)(I,{})}}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)(o.d,{path:"/popular",render:function(){return Object(r.jsx)(se,{})}}),Object(r.jsx)(o.d,{path:"/toprated",render:function(){return Object(r.jsx)(he,{})}}),Object(r.jsx)(o.d,{exact:!0,path:"/",render:function(){return Object(r.jsx)(ee,{})}}),Object(r.jsx)(o.d,{path:"/preloader",render:function(){return Object(r.jsx)(A.a,{})}}),Object(r.jsx)(o.d,{path:"/search",render:function(){return Object(r.jsx)(be,{})}})]}),Object(r.jsx)(z,{})]})},ve=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,111)).then((function(t){var a=t.getCLS,r=t.getFID,c=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),r(e),c(e),n(e),s(e)}))},xe=a(55),we="SET_RESULTS",Ne={results:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case we:return Object(u.a)(Object(u.a)({},e),{},{results:t.results});default:return e}},Ae=a(31),Pe=Ae.createStore,ye=Ae.combineReducers,Ce=Ae.applyMiddleware,Ee=Pe(ye({popular:ce,topRated:ge,block:k,slider:ke,trailer:C,home:q}),Ce(xe.a));i.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(je.BrowserRouter,{children:Object(r.jsx)(d.a,{store:Ee,children:Object(r.jsx)(fe,{})})})}),document.getElementById("root")),ve()},16:function(e,t,a){e.exports={row:"Block_row__2M7VN",text__block:"Block_text__block__2wO5w",info:"Block_info__1OXKO",title:"Block_title__mhKfU",text:"Block_text__1BUEA",bg:"Block_bg__1u3aj",genres:"Block_genres__22398",date:"Block_date__3c9Jc",runtime:"Block_runtime__3IP3I",info__title:"Block_info__title__1JnPv",img_element:"Block_img_element__2geVN",img__row:"Block_img__row__na4fB",trailer:"Block_trailer__2UULr"}},17:function(e,t,a){e.exports={poster:"Home_poster__2sEb8",main:"Home_main__380F2",home__main__title:"Home_home__main__title__2pRiy",carousel__row:"Home_carousel__row__3zrvo",item:"Home_item__6O02H",title:"Home_title__37644",card__row:"Home_card__row__3iE4y",card:"Home_card__1nQDY",card__title:"Home_card__title__1ZttG"}},18:function(e,t,a){"use strict";var r=a(1),c=a.p+"static/media/Gear-0.4s-200px.89d1b6a1.svg",n=a(52),s=a.n(n);t.a=function(e){return Object(r.jsx)("div",{className:s.a.row,children:Object(r.jsx)("img",{alt:"Preloader",src:c})})}},21:function(e,t,a){e.exports={row:"Header_row__l8WnO",drop__down:"Header_drop__down__3wUUz",link__row:"Header_link__row__1RI37",link:"Header_link__1rQVV",title:"Header_title__1dcuJ",search:"Header_search__1uTEi"}},26:function(e,t,a){e.exports={row:"Trailer_row__12enS",video__item:"Trailer_video__item__22f4g"}},36:function(e,t,a){e.exports={row:"Footer_row__1VoAA",title:"Footer_title__37_6_"}},52:function(e,t,a){e.exports={row:"Preloder_row__3y7-1"}},54:function(e,t,a){e.exports={input:"Search_input__2N8-0"}},6:function(e,t,a){e.exports={main__row:"Popular_main__row__1n7zn",movie__block:"Popular_movie__block__3DDTO",row:"Popular_row__3a-Cb",text__block:"Popular_text__block__2KsM0",title:"Popular_title__2Qnlz",date:"Popular_date__2s7kM",current__page:"Popular_current__page__1WycR",pages__row:"Popular_pages__row__3FCQE"}},61:function(e,t,a){},62:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(26),n=a.n(c),s=a(85).default;t.default=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:n.a.row,children:e.results.map((function(e){return Object(r.jsx)("div",{className:n.a.video__item,children:Object(r.jsx)(s,{className:n.a.viaeo,url:"https://www.youtube.com/watch?v=".concat(e.key)})})}))})})}}},[[109,1,2]]]);
//# sourceMappingURL=main.ccf4db1a.chunk.js.map