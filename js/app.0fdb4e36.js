(function(e){function t(t){for(var n,r,i=t[0],l=t[1],a=t[2],u=0,m=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);p&&p(t);while(m.length)m.shift()();return c.push.apply(c,a||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==s[l]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=o[0]))}return e}var n={},s={app:0},c=[];function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/pokeapp/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var p=l;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23"),s={class:""},c=Object(n["f"])("img",{class:"w-60 my-0 mx-auto",src:"http://www.phileasfoggs.com/wp-content/uploads/2019/09/PoGO-Gotta-Catch-Em-All.png"},null,-1);function r(e,t){var o=Object(n["v"])("router-link"),r=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["e"])(n["a"],null,[Object(n["f"])("div",s,[Object(n["h"])(o,{class:"flex justify-center",to:"/"},{default:Object(n["A"])((function(){return[c]})),_:1})]),Object(n["h"])(r)],64)}var i=o("6b0d"),l=o.n(i);const a={},p=l()(a,[["render",r]]);var u=p,m=o("6c02"),d={class:"grid grid-cols-3"};function b(e,t,o,s,c,r){var i=Object(n["v"])("Pokemon");return Object(n["q"])(),Object(n["e"])("div",d,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(e.pokemons,(function(e){return Object(n["q"])(),Object(n["d"])(i,{class:"w-full",key:e.id,pokemon:e},null,8,["pokemon"])})),128))])}var f=o("5530"),g=(o("b0c0"),{class:"w-full"}),k={class:"flex justify-center items-center flex-row px-3"},j={class:"w-full m-2 border-black border-2 rounded-xl p-2"},O={class:"w-full text-center font-bold p-1"},v={class:"w-full my-5"},y=["src"],h={class:"w-full"},x=["src"],w={class:"flex justify-center"},P=Object(n["f"])("button",{class:"m-0 border-gray-400 bg-gray-200 border-2 py-1 px-2 rounded-md"}," VIEW DETAILS ",-1);function S(e,t,o,s,c,r){var i=Object(n["v"])("router-link");return Object(n["q"])(),Object(n["e"])("div",g,[Object(n["f"])("div",k,[Object(n["f"])("div",j,[Object(n["f"])("div",O,[Object(n["f"])("h4",null,Object(n["x"])(o.pokemon.name),1)]),Object(n["f"])("div",v,[Object(n["f"])("img",{class:"w-60 h-64 my-0 mx-auto",src:o.pokemon.logo},null,8,y)]),Object(n["f"])("div",h,[Object(n["f"])("img",{class:"w-16 h-14 my-1 mx-auto",src:c.type},null,8,x)]),Object(n["f"])("div",w,[Object(n["h"])(i,{to:{name:"pokemon-view",params:{id:o.pokemon.id}}},{default:Object(n["A"])((function(){return[P]})),_:1},8,["to"])])])])])}var q={name:"pokemon",props:["pokemon"],data:function(){return{type:null}},mounted:function(){"Electric"==this.pokemon.type?this.type="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYDW5_ufFZ18IoCLWHTZoIye8TCcD2cB220jM5PSi8b3swMLXBsVz2QvWlKwYHBfj_SWo&usqp=CAU":"Psychic"==this.pokemon.type?this.type="https://static.vecteezy.com/system/resources/thumbnails/000/585/566/small/006-11.jpg":"Fire"==this.pokemon.type?this.type="https://png.pngtree.com/png-vector/20190226/ourmid/pngtree-fire-logo-icon-design-template-vector-png-image_705403.jpg":"Plant"==this.pokemon.type?this.type="https://media.istockphoto.com/vectors/abstract-green-leaf-logo-icon-vector-design-ecology-icon-set-eco-icon-vector-id1045368942?k=20&m=1045368942&s=170667a&w=0&h=X6TYI6qsklBF9V84ubmXNG_WVYTwOHlIFbXYzVci0MQ=":"Water"==this.pokemon.type?this.type="https://static.vecteezy.com/system/resources/thumbnails/000/596/073/small/14052019-21.jpg":"Air"==this.pokemon.type&&(this.type="https://media.istockphoto.com/vectors/water-wave-logo-illustration-vector-id1154675016?k=20&m=1154675016&s=612x612&w=0&h=U3Ow0VbzIB31339iFkiYaivBrmxzZ6I98w9prVoOS5w=")}};const _=l()(q,[["render",S]]);var M=_,B=o("5502"),T={name:"pokemon-list",components:{Pokemon:M},computed:Object(f["a"])({},Object(B["b"])({pokemons:"pokemons"}))};const W=l()(T,[["render",b]]);var I=W,A={class:"my-5 mx-auto"},F=["src"],V={class:"text-center"},z={class:"font-bold text-4xl p-2 mb-3"},C={class:"p-1 block text-gray-700 text-xl"},E=Object(n["g"])(),Y=Object(n["f"])("br",null,null,-1),G={class:"p-1 block text-gray-700 text-xl"},L=Object(n["f"])("br",null,null,-1),D={class:"p-1 block text-gray-700 text-xl"};function N(e,t,o,s,c,r){return Object(n["q"])(),Object(n["e"])("div",A,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(r.getPokemon,(function(e){return Object(n["q"])(),Object(n["e"])("div",{class:"flex justify-around items-center flex-row",key:e.id},[Object(n["f"])("div",null,[Object(n["f"])("img",{src:e.logo},null,8,F)]),Object(n["f"])("div",V,[Object(n["f"])("h2",z,Object(n["x"])(e.name),1),Object(n["f"])("span",C," Type: "+Object(n["x"])(e.type),1),E,Y,Object(n["f"])("span",G," Evolution: "+Object(n["x"])(e.evolution),1),L,Object(n["f"])("span",D,"Species: "+Object(n["x"])(e.species),1)])])})),128))])}o("4de4"),o("d3b7"),o("caad"),o("2532");var X={name:"pokemon-list",data:function(){return{params:this.$route.params.id}},computed:{getPokemon:function(){var e=this;return this.$store.state.pokemons.filter((function(t){return t.id.includes(e.params)}))}}};const H=l()(X,[["render",N]]);var Z=H,J=[{path:"/",name:"pokemon-list",component:I},{path:"/view/:id",name:"pokemon-view",component:Z}],Q=Object(m["a"])({history:Object(m["b"])("/pokeapp/"),routes:J}),U=Q,$=[{id:"1",name:"Pikachu",evolution:"Raichu",species:"Mouse Pokemon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",type:"Electric"},{id:"2",name:"Mew",evolution:"Mewtwo",species:"New Species Pokémon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/151.png",type:"Psychic"},{id:"3",name:"Charmander",evolution:"Charmeleon",species:"Lizard Pokémon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",type:"Fire"},{id:"4",name:"Bulbasaur",evolution:"Ivysaur",species:"Seed Pokémon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",type:"Plant"},{id:"5",name:"Squirtle",evolution:"Wartortle, Blastoise",species:"Tiny Turtle Pokémon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",type:"Water"},{id:"6",name:"Pidgeot",evolution:"Pidgeot",species:"Bird Pokémon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png",type:"Air"},{id:"7",name:"Chikorita",evolution:"Bayleaf, Meganium",species:"Leaf Pokémon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/152.png",type:"Plant"},{id:"8",name:"Psyduck",evolution:"Golduck",species:"Duck Pokémon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/054.png",type:"Water"},{id:"9",name:"Vulpix",evolution:"Ninetales",species:"Fox Pokémon",logo:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png",type:"Fire"}],K=$,R=Object(B["a"])({state:{pokemons:K},getters:{pokemons:function(e){return e.pokemons}},mutations:{},actions:{},modules:{}});o("ba8c");Object(n["c"])(u).use(R).use(U).mount("#app")},ba8c:function(e,t,o){}});
//# sourceMappingURL=app.0fdb4e36.js.map