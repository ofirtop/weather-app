(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{48:function(e,t,r){e.exports=r(82)},53:function(e,t,r){},54:function(e,t,r){},82:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(20),c=r.n(i),o=(r(53),r(54),r(18)),s=function(e){return n.a.createElement("nav",{className:"blue darken-2"},n.a.createElement("div",{className:"border-black"},n.a.createElement(o.b,{to:"/",className:"left brand"},"iWeather"),n.a.createElement("ul",{className:"right nav-links"},n.a.createElement("li",null,n.a.createElement(o.c,{to:"/"},"Home")),n.a.createElement("li",null,n.a.createElement(o.c,{to:"/favorites"},"Favorites")))))},l=r(19),u=r(12),p=r(13),m=r(16),h=r(14),f=r(17),d=r(9),v=r(22),g=r.n(v),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"215854",t=(arguments.length>1&&arguments[1],"".concat("https://dataservice.accuweather.com/forecasts/v1/daily/5day/").concat(e,"?apikey=").concat("gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII"," "));return g.a.get(t).then(function(e){return e.data}).catch(function(e){throw e})},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"215854",t="".concat("https://dataservice.accuweather.com/currentconditions/v1/").concat(e,"?apikey=").concat("gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII"," ");return g.a.get(t).then(function(e){return{isDayTime:e.data[0].IsDayTime,weatherIcon:e.data[0].WeatherIcon,weatherDescription:e.data[0].WeatherText,temperatureImperialVal:e.data[0].Temperature.Imperial.Value,temperatureImperialUnit:e.data[0].Temperature.Imperial.Unit,temperatureMetricVal:e.data[0].Temperature.Metric.Value,temperatureMetricUnit:e.data[0].Temperature.Metric.Unit}}).catch(function(e){throw e})},I=function(e,t){return function(r,a){E(e).then(function(a){a.cityId=e,a.isCurrent=t,r({type:"SET_WEATHER",weather:a})}).catch(function(e){r({type:"WEATHER_ERROR",error:e})})}},O=function(e){var t="".concat("https://dataservice.accuweather.com/locations/v1/cities/autocomplete","?apikey=").concat("gQ307OUWQ0rbqOqwiGr85Z3JDQBtEEII","&q=").concat(e," ");return g.a.get(t).then(function(e){return e.data}).catch(function(e){throw e})},b={saveToStorage:C,loadFromStorage:T,formatTime:function(e){var t=new Date(e).getHours(),r=new Date(e).getMinutes(),a=new Date(e).getSeconds(),n=new Date(e).getDate(),i=new Date(e).getMonth()+1,c=new Date(e).getFullYear();return n+"/"+i+"/"+c+"  "+N(t)+":"+N(r)+":"+N(a)}};function C(e,t){var r=JSON.stringify(t);localStorage.setItem(e,r)}function T(e){var t=localStorage.getItem(e);if(t)return JSON.parse(t)}function N(e){return e<10?"0"+e:e}var w=function(e,t,r){return function(a,n){O(e).then(function(e){var n={};e.forEach(function(e){n[e.LocalizedName+","+e.Country.LocalizedName]=null}),a({type:"SET_CITIES_OPTIONS",optionalCities:n});var i=e[0],c={cityId:i.Key,cityName:i.LocalizedName,countryName:i.Country.LocalizedName,isCurrent:r,isFavorite:t};a({type:"SET_CITY_INFO",cityInfo:c})}).catch(function(e){a({type:"LOCATION_ERROR",error:e})})}},S=function(e){return{type:"TOGGLE_FAVORITE_STATUS",cityId:e}},j=(r(77),r(26)),F=r(31),W=r.n(F),D=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleChange=function(e){r.props.getCityInfo(e.target.value,!1,!0)},r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.getElementById("autocomplete-input");W.a.Autocomplete.init(t,{data:this.props.optionalCities,onAutocomplete:function(t){var r=t.indexOf(","),a=t.substring(0,r);e.props.getCityInfo(a,!1,!0)}})}},{key:"render",value:function(){console.log("rendering..."),console.log(this.props.optionalCities);var e=document.getElementById("autocomplete-input");if(e){var t=W.a.Autocomplete.getInstance(e);this.props.optionalCities&&t.updateData(this.props.optionalCities)}return n.a.createElement("form",{onSubmit:this.handleSubmit,className:"container filter-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col s12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"input-field col s12"},n.a.createElement("i",{className:"material-icons prefix"},"textsms"),n.a.createElement("input",{type:"text",id:"autocomplete-input",onChange:this.handleChange,className:"autocomplete"}),n.a.createElement("label",{htmlFor:"autocomplete-input"},"Search for weather location"))))))}}]),t}(a.Component),k=Object(d.b)(function(e){return{optionalCities:e.location.optionalCities}},function(e){return{getCityInfo:function(t,r,a){return e(w(t,r,a))}}})(D),M=function(e){var t=e.day,r=t.Temperature.Maximum.Value,a=Math.round(f(t.Temperature.Maximum.Value)),i=t.Temperature.Minimum.Value,c=Math.round(f(t.Temperature.Minimum.Value)),o=t.Temperature.Maximum.Unit,s=t.Day.Icon;s<10&&(s="0".concat(s));var l=t.Night.Icon;l<10&&(l="0".concat(l));var u="https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/".concat(s,"-s.png"),p="https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/".concat(l,"-s.png"),m="c"===e.scale?"hide":"",h="c"!==e.scale?"hide":"";function f(e){return 5/9*(e-32)}return n.a.createElement("div",{className:"card week-day"},n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"card-title"},["Sun","Mon","Tue","Wed","Thu","Fri","Sat"][new Date(t.Date).getDay()]),n.a.createElement("img",{src:u,title:e.day.Day.IconPhrase,alt:e.day.Day.IconPhrase}),n.a.createElement("p",{className:m},"Max ",r,o),n.a.createElement("p",{className:h},"Max ",a,"C"),n.a.createElement("hr",null),n.a.createElement("img",{src:p,title:e.day.Night.IconPhrase,alt:e.day.Night.IconPhrase}),n.a.createElement("p",{className:m},"Min ",i,o),n.a.createElement("p",{className:h},"Min ",c,"C")))},_=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(r=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleToggleFavorite=function(){var e=r._getCurrentCity(r.props.citiesInfo);r.props.toggleFavoriteStatus(e.cityId)},r.handleToggleScale=function(){r.props.toggleScale()},r.handleToggleTheme=function(){r.props.toggleTheme()},r}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.location.isFavoritesLoaded||this.props.loadFavoritesFromStorage();var t=this.props.match.params.cityId;if(t){var r=this.props.citiesInfo.find(function(e){return e.cityId===t});r&&this.props.getCityInfo(r.cityName,!0,!0)}if(!this.props.citiesInfo.find(function(e){return e.isCurrent})){var a=b.loadFromStorage("favorites");if(a){var n=a.find(function(t){return t===e.props.defaultCityName});this.props.getCityInfo(this.props.defaultCityName,!!n,!0)}else this.props.getCityInfo(this.props.defaultCityName,!1,!0)}}},{key:"componentDidUpdate",value:function(e,t){var r=e.citiesInfo.filter(function(e){return void 0!==e&&!0===e.isCurrent}),a=this.props.citiesInfo.filter(function(e){return void 0!==e&&!0===e.isCurrent});!r.length&&a.length?(this.props.getForcast(a[0].cityId),this.props.getWeather(a[0].cityId,!0)):r.length&&a.length&&r[0].cityId!==a[0].cityId&&(this.props.getForcast(a[0].cityId),this.props.getWeather(a[0].cityId,!0)),e.locationError!==this.props.locationError&&""!==this.props.locationError&&this.notify(this.props.locationError),e.weatherError!==this.props.weatherError&&""!==this.props.weatherError&&this.notify(this.props.weatherError)}},{key:"_getCurrentCity",value:function(e){var t=e.filter(function(e){return e.isCurrent});return t.length?t[0]:null}},{key:"isCurrentFavorite",value:function(){var e=this.props.citiesInfo.find(function(e){return e.isCurrent});return!!e&&!!e.isFavorite}},{key:"isCurrentCelsius",value:function(){return"c"===this.props.scale}},{key:"notify",value:function(e){Object(j.b)(e)}},{key:"render",value:function(){var e,t,r,a,i,c,o=this,s=this.props.currentWeather.filter(function(e){return e.isCurrent});s.length&&(t=s[0].weatherDescription,r=s[0].temperatureImperialVal,a=s[0].temperatureImperialUnit,c=s[0].temperatureMetricVal,i=s[0].temperatureMetricUnit,(e=s[0].weatherIcon)<10&&(e="0".concat(e)));var l,u,p="https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/".concat(e,"-s.png"),m=this.props.citiesInfo.find(function(e){return void 0!==e&&e.isCurrent});m&&(l=m.countryName,u=m.cityName);var h=this.props.forcast,f=this.props.forcastDescription,d=h?h.map(function(e,t){return n.a.createElement(M,{scale:o.props.scale,day:e,key:t})}):n.a.createElement("h4",null,"There is currently no forcast show"),v=this.isCurrentCelsius()?"hide":"",g=this.isCurrentCelsius()?"":"hide",y=this.isCurrentCelsius()?"F":"C",E=this.isCurrentFavorite()?"Remove Favorite":"Add to Favorites",I=this.isCurrentFavorite()?{color:"red"}:{color:"grey"},O="light"===this.props.theme?"D":"L",b="light"===this.props.theme?"main-container":"main-container-dark",C="light"===this.props.theme?{color:"black"}:{color:"white"};return n.a.createElement("div",{className:b},n.a.createElement(k,null),n.a.createElement("div",{className:"flex-space-between action-bar"},n.a.createElement("div",{className:"flex curr-city"},n.a.createElement("img",{className:"large-image",src:p,title:t,alt:t}),n.a.createElement("div",{className:"flex-col"},n.a.createElement("div",{style:C},u,", ",l),n.a.createElement("div",{className:v,style:C},r,a),n.a.createElement("div",{className:g,style:C},c,i))),n.a.createElement("div",{className:"flex centered add-fav"},n.a.createElement("i",{className:"small material-icons",style:I},"favorite"),n.a.createElement("button",{className:"btn toggle-fav blue darken-2",onClick:this.handleToggleFavorite},E),n.a.createElement("div",{className:"right setting-action"},n.a.createElement("button",{className:"btn toggle-setting blue darken-2",title:"Temperature System [Fahrenheit \\ Celsius]",onClick:this.handleToggleScale},y),n.a.createElement("button",{className:"btn toggle-setting blue darken-2",title:"Change Theme [Dark \\ Light]",onClick:this.handleToggleTheme},O)))),n.a.createElement("div",{style:C,className:"center main-description"},t),n.a.createElement("ul",{className:"forcast-list"},d),n.a.createElement("p",{className:"center blue-text darken-2 secondary-description"},f))}}]),t}(a.Component),R=Object(d.b)(function(e){return{citiesInfo:e.location.citiesInfo,defaultCityName:e.location.defaultCityName,isFavoritesLoaded:e.location.isFavoritesLoaded,favorites:e.location.favorites,forcast:e.weather.forcast,forcastDescription:e.weather.forcastDescription,currentWeather:e.weather.currentWeather,weatherError:e.weather.error,locationError:e.location.error,scale:e.setting.currentScale,theme:e.setting.currentTheme}},function(e){return{getCityInfo:function(t,r,a){return e(w(t,r,a))},getForcast:function(t){e(function(e){return function(t,r){y(e,t).then(function(e){t({type:"SET_FORCAST",forcast:e})}).catch(function(e){t({type:"WEATHER_ERROR",error:e})})}}(t))},getWeather:function(t,r){e(I(t,r))},toggleFavoriteStatus:function(t){e(S(t))},toggleScale:function(){e({type:"TOGGLE_SCALE"})},toggleTheme:function(){e({type:"TOGGLE_THEME"})},loadFavoritesFromStorage:function(){e(function(e,t){var r=T("favorites");r||(r=[]),e({type:"LOAD_FAVORITES_FROM_STORAGE",favorites:r})})}}})(_),A=function(e){var t=e.composedInfo.cityInfo.cityName,r=e.composedInfo.cityInfo.cityId,a=e.composedInfo.cityInfo.countryName,i=e.composedInfo.currentWeather.temperatureImperialVal,c=Math.round(5/9*(i-5/9*32-32)),s=e.composedInfo.currentWeather.temperatureImperialUnit,l=e.composedInfo.currentWeather.weatherDescription,u=e.composedInfo.currentWeather.weatherIcon;u<10&&(u="0".concat(u));var p="https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/".concat(u,"-s.png"),m="c"===e.scale?"hide":"",h="c"!==e.scale?"hide":"";return n.a.createElement(o.b,{to:"/"+r},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-content"},n.a.createElement("div",null,t,", ",a),n.a.createElement("div",{className:m},i,s),n.a.createElement("div",{className:h},c,"C"),n.a.createElement("img",{src:p,title:l,alt:l}),n.a.createElement("div",null,l))))},L=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=[];this.props.citiesInfo.length&&this.props.citiesInfo.forEach(function(r){e.props.currentWeather.length&&e.props.currentWeather.forEach(function(e){e.cityId===r.cityId&&r.isFavorite&&t.push({cityInfo:r,currentWeather:e})})});var r=t.length?t.map(function(t,r){return n.a.createElement(A,{scale:e.props.scale,composedInfo:t,key:r})}):n.a.createElement("div",{className:""},"No Favorites Selected ");return n.a.createElement("ul",{className:"forcast-list center"},r)}}]),t}(a.Component),x=Object(d.b)(function(e){return{citiesInfo:e.location.citiesInfo,currentWeather:e.weather.currentWeather,scale:e.setting.currentScale}})(L),G=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.props.favorites&&this.props.favorites.forEach(function(t){var r=e.props.citiesInfo.find(function(e){return e.cityName===t});r?(S(t),e.props.getWeather(r.cityId,r.isCurrent)):e.props.getCityInfo(t,!0,!1)})}},{key:"componentDidUpdate",value:function(e,t){var r=this;this.props.citiesInfo.forEach(function(e){r.props.favorites.find(function(t){return e.cityName===t})&&(r.props.weather&&r.props.weather.currentWeather.find(function(t){return t.cityId===e.cityId})||r.props.getWeather(e.cityId,e.isCurrent))})}},{key:"render",value:function(){var e="light"===this.props.theme?{background:"white"}:{background:"black"};return n.a.createElement("div",{className:"max-container",style:e},n.a.createElement(x,null))}}]),t}(a.Component),U=Object(d.b)(function(e){return{citiesInfo:e.location.citiesInfo,favorites:e.location.favorites,currentWeather:e.location.currentWeather,theme:e.setting.currentTheme}},function(e){return{getCityInfo:function(t,r,a){return e(w(t,r,a))},getWeather:function(t,r){e(I(t,r))},toggleFavoriteStatus:function(t){e(S(t))}}})(G);r(80),r(81);var V=function(){return n.a.createElement(o.a,{basename:"/weather-app"},n.a.createElement(j.a,null),n.a.createElement("div",{className:"App"},n.a.createElement(s,null),n.a.createElement(l.c,null,n.a.createElement(l.a,{exact:!0,path:"/",component:R}),n.a.createElement(l.a,{path:"/favorites",component:U}),n.a.createElement(l.a,{path:"/:cityId",component:R}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=r(15),J=r(7),Q=r(3),q={favorites:[],isFavoritesLoaded:!1,citiesInfo:[],optionalCities:[],defaultCityName:"Tel Aviv",error:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_FAVORITES_FROM_STORAGE":return Object(Q.a)({},e,{isFavoritesLoaded:!0,favorites:t.favorites,error:""});case"SET_CITY_INFO":var r=Object(J.a)(e.citiesInfo);t.cityInfo.isCurrent&&r.forEach(function(e){return e.isCurrent=!1});var a=r.find(function(e){return e.cityId===t.cityInfo.cityId});return a?(a.isCurrent=t.cityInfo.isCurrent,Object(Q.a)({},e,{citiesInfo:Object(J.a)(r),error:""})):Object(Q.a)({},e,{citiesInfo:[].concat(Object(J.a)(r),[t.cityInfo]),error:""});case"TOGGLE_FAVORITE_STATUS":var n=Object(J.a)(e.citiesInfo),i=n.find(function(e){return e.cityId===t.cityId});i.isFavorite=!i.isFavorite;var c=Object(J.a)(e.favorites),o=c.indexOf(i.cityName);return i.isFavorite?o<0&&(c=[].concat(Object(J.a)(c),[i.cityName])):o>=0&&c.splice(o,1),C("favorites",c),Object(Q.a)({},e,{favorites:c,citiesInfo:Object(J.a)(n),error:""});case"SET_CITIES_OPTIONS":return Object(Q.a)({},e,{optionalCities:t.optionalCities});case"LOCATION_ERROR":return Object(Q.a)({},e,{error:JSON.stringify(t.error)});default:return e}},P={forcast:[],forcastDescription:"",currentWeather:[],error:""},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FORCAST":return Object(Q.a)({},e,{forcast:t.forcast.DailyForecasts,forcastDescription:t.forcast.Headline.Text,error:""});case"SET_WEATHER":var r=Object(J.a)(e.currentWeather),a=!1,n=r.map(function(e){return e.cityId===t.weather.cityId?(a=!0,t.weather):e});return a?Object(Q.a)({},e,{currentWeather:Object(J.a)(n),error:""}):Object(Q.a)({},e,{currentWeather:[].concat(Object(J.a)(e.currentWeather),[t.weather]),error:""});case"WEATHER_ERROR":return Object(Q.a)({},e,{error:JSON.stringify(t.error)});default:return e}},Y={currentScale:"c",currentTheme:"light",error:""},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;switch((arguments.length>1?arguments[1]:void 0).type){case"TOGGLE_SCALE":var t="f"===e.currentScale?"c":"f";return Object(Q.a)({},e,{currentScale:t});case"TOGGLE_THEME":var r="light"===e.currentTheme?"dark":"light";return Object(Q.a)({},e,{currentTheme:r});default:return e}},K=Object(H.combineReducers)({weather:z,location:B,setting:Z}),$=r(46),X=r(47),ee=Object(H.createStore)(K,Object(X.composeWithDevTools)(Object(H.applyMiddleware)($.a)));c.a.render(n.a.createElement(d.a,{store:ee},n.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[48,1,2]]]);
//# sourceMappingURL=main.ce1d8671.chunk.js.map