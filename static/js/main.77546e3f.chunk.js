(this.webpackJsonpfunwithapi=this.webpackJsonpfunwithapi||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(3),r=n.n(i),a=(n(13),n(4)),j=n(5),o=n(8),l=n(6),h=(n(14),n(7)),u=(n(15),n(0)),d=function(e){var t=e.residents,n=Object(s.useState)(t),c=Object(h.a)(n,2),i=c[0],r=c[1];return Object(s.useEffect)((function(e){return fetch(t).then((function(e){return e.json()})).then((function(e){return r(e.name)}))}),[]),Object(u.jsx)("p",{className:"Residents",children:i})},p=(n(17),function(e){var t=e.name,n=e.population,s=e.gravity,c=e.terrain,i=e.residents.map((function(e,t){return Object(u.jsx)(d,{residents:e},t)}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"planetName",children:t}),Object(u.jsxs)("div",{className:"planetItems",children:[Object(u.jsx)("h3",{children:"Population:"}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("h3",{children:"Gravity:"}),Object(u.jsx)("p",{children:s}),Object(u.jsx)("h3",{children:"Terrain:"}),Object(u.jsx)("p",{children:c}),Object(u.jsx)("h3",{children:"Characters from here:"}),Object(u.jsx)("div",{children:i})]})]})}),b=(n(18),function(e){var t=e.planetsforchild,n=t.map((function(e,n){return Object(u.jsx)(p,{name:t[n].name,population:t[n].population,gravity:t[n].gravity,terrain:t[n].terrain,residents:t[n].residents},n)}));return Object(u.jsx)("div",{className:"PlanetList",children:n})}),f=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={planets:[],residents:[]},e}return Object(j.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.py4e.com/api/planets/").then((function(e){return e.json()})).then((function(t){e.setState({planets:t.results})}))}},{key:"render",value:function(){var e=this.state.planets;return Object(u.jsxs)("div",{className:"bodyAll",children:[Object(u.jsx)("header",{className:"App-header",children:"This site makes calls to swapi.dev api for data on Star Wars planets."}),Object(u.jsx)("div",{className:"intro",children:Object(u.jsxs)("h1",{className:"introh1",children:["STAR WARS ",Object(u.jsx)("br",{})," PLANETS"]})}),Object(u.jsx)("div",{className:"App-MainComponent",children:Object(u.jsx)(b,{planetsforchild:e})})]})}}]),n}(s.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),i(e),r(e)}))};r.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.77546e3f.chunk.js.map