(this.webpackJsonpfunwithapi=this.webpackJsonpfunwithapi||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n.n(i),c=n(4),r=n.n(c),a=(n(13),n(5)),l=n(6),j=n(8),h=n(7),d=(n(14),n(3)),o=(n(15),n(0)),b=function(e){var t=e.residents,n=Object(i.useState)(t),s=Object(d.a)(n,2),c=s[0],r=s[1],a=Object(i.useState)("invisible"),l=Object(d.a)(a,2),j=l[0],h=l[1];Object(i.useEffect)((function(e){return fetch(t).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]);return Object(o.jsxs)("div",{className:"residentsElement",children:[Object(o.jsx)("div",{children:Object(o.jsxs)("p",{className:"residents",onClick:function(){h("invisible"===j?"visible":"invisible")},children:[" ",c.name]})}),"invisible"===j&&null,"visible"===j&&Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"residentInfo",children:[Object(o.jsxs)("p",{children:["Height: ",c.height]}),Object(o.jsxs)("p",{children:["Hair Color: ",c.hair_color]}),Object(o.jsxs)("p",{children:["Birth Year: ",c.birth_year]}),Object(o.jsxs)("p",{children:["Gender: ",c.gender]})]})})]})},u=(n(17),function(e){var t=e.name,n=e.population,i=e.gravity,s=e.terrain,c=e.residents.map((function(e,t){return Object(o.jsx)(b,{residents:e},t)}));return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"planetName",children:t}),Object(o.jsxs)("div",{className:"planetItems",children:[Object(o.jsx)("h3",{children:"Population:"}),Object(o.jsx)("p",{children:n}),Object(o.jsx)("h3",{children:"Gravity:"}),Object(o.jsx)("p",{children:i}),Object(o.jsx)("h3",{children:"Terrain:"}),Object(o.jsx)("p",{children:s}),Object(o.jsx)("h3",{children:"Characters from here:"}),Object(o.jsx)("div",{children:c})]})]})}),p=(n(18),function(e){var t=e.planetsforchild,n=t.map((function(e,n){return Object(o.jsx)(u,{name:t[n].name,population:t[n].population,gravity:t[n].gravity,terrain:t[n].terrain,residents:t[n].residents},n)}));return Object(o.jsx)("div",{className:"PlanetList",children:n})}),O=function(e){Object(j.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={planets:[],residents:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://swapi.py4e.com/api/planets/").then((function(e){return e.json()})).then((function(t){e.setState({planets:t.results})}))}},{key:"render",value:function(){var e=this.state.planets;return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{className:"App-header",children:"This site makes calls to swapi.dev api for data on Star Wars planets."}),Object(o.jsxs)("div",{className:"bodyAll",children:[Object(o.jsx)("div",{className:"intro",children:Object(o.jsxs)("h1",{className:"introh1",children:["STAR WARS ",Object(o.jsx)("br",{})," PLANETS"]})}),Object(o.jsx)("div",{className:"App-MainComponent",children:Object(o.jsx)(p,{planetsforchild:e})})]})]})}}]),n}(i.Component),f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),s(e),c(e),r(e)}))};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(O,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.8ccab1d9.chunk.js.map