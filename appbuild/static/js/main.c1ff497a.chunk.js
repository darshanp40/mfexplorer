(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(34)},23:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(14),r=a.n(i),c=a(6),l=a(7),o=a(9),d=a(8),u=a(10),m=a(36),h=a(35),f=a(3),p=a(37),y={name:"Fund Name",category:"Category",minimum_investment:"Minimum Investment",rating:"Rating",yoy_return:"Returns yoy %",riskometer:"Riskometer"},b={Low:1,"Moderately Low":2,Moderate:3,"Moderately High":4,High:5},v={name:"Fund Name",nav:"NAV",expense_ratio:"Expense Ratio",dividend_type:"Dividend Type",scheme_class:"Scheme Class",rating:"Ratings",return_3yr:"Returns 3Y",return_5yr:"Returns 5Y",yoy_return:"Returns YOY",riskometer:"Riskometer",minimum_sip_subscription:"Min SIP"},k=(a(23),function(e,t){switch(t){case"rating":for(var a=[],n=1;n<=5;n++)a.push(s.a.createElement("svg",{key:n,viewBox:"0 0 51 48",className:"widget-svg widget-selected",style:{width:"14px",height:"14px",transition:"transform 0.2s ease-in-out 0s"}},s.a.createElement("path",{className:"widget",d:"m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z",style:{fill:n<e?"rgb(255, 128, 0)":"rgb(203, 211, 227)",transition:"fill 0.2s ease-in-out 0s"}})));return a;case"riskometer":return g(e);case"minimum_investment":case"minimum_sip_subscription":case"nav":return _(e);default:return e}}),g=function(e){for(var t=[],a=1;a<=5;a++)t.push(s.a.createElement("div",{key:a,className:a<=b[e]?"filled":""}));return t},_=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},E=function(e){return s.a.createElement("div",{className:"fund-container"},s.a.createElement("div",{className:"fund-selector mt-checkbox"},s.a.createElement("input",{type:"checkbox",className:"mt-checkbox-input",name:"fund-selector",id:e.data.scheme_key}),s.a.createElement("label",{className:"mt-checkbox-label",htmlFor:e.data.scheme_key})),s.a.createElement("label",{className:"fund-details",htmlFor:e.data.scheme_key},s.a.createElement("div",{className:"row"},Object.keys(y).map(function(t,a){return s.a.createElement("div",{key:a,className:"section col-xs-12 col-sm-6 col-md-4 col-lg-2"},s.a.createElement("h5",{className:"field-label"},y[t]),s.a.createElement("div",{className:"field-details ".concat(t)},k(e.data[t],t)))}))),s.a.createElement("div",{className:"clear-both"}))},N=(a(25),function(e){return s.a.createElement("div",{className:"sidebar ".concat(e.toggleClass)},s.a.createElement("div",{className:"close-button",onClick:e.toggleSidebar}),s.a.createElement("h3",{className:"sidebar-header"},"Filters"),s.a.createElement("div",{className:"filters"},e.filters&&Object.keys(e.filters).map(function(t,a){return s.a.createElement("div",{key:a,className:"filter-container"},s.a.createElement("h4",{className:"filter-category"},e.filters[t].displayText),s.a.createElement("div",{className:"filter-value-container"},e.filters[t].data.map(function(a,n){return s.a.createElement("div",{key:n,className:"filter"},s.a.createElement("div",{className:"mt-checkbox"},s.a.createElement("input",{type:"checkbox",className:"mt-checkbox-input",name:t,id:a.key,onClick:e.filterData}),s.a.createElement("label",{className:"mt-checkbox-label",htmlFor:a.key},a.key.replace(/_/g," "))))})))})))});function C(e){this.url=e.url,this.method=e.method,this.credentials=e.credentials?e.credentials:"include",this.headers={},Object.assign(this.headers,e.headers?e.headers:{"Content-Type":"application/json;charset=utf-8"}),this.body=JSON.stringify(e.body)}C.prototype.buildRequest=function(){return fetch(this.url,{method:this.method,cache:"no-cache",headers:this.headers,credentials:this.credentials,body:this.body})};a(27);var j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={sidebarClass:"",fundsToCompare:[]},a.fundClicked=a.fundClicked.bind(Object(f.a)(Object(f.a)(a))),a.toggleSidebar=a.toggleSidebar.bind(Object(f.a)(Object(f.a)(a))),a.compareFunds=a.compareFunds.bind(Object(f.a)(Object(f.a)(a))),a.applyFilters=a.applyFilters.bind(Object(f.a)(Object(f.a)(a))),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"filterFunds",value:function(e){var t=this.state.funds;Object.keys(e).map(function(a){return e[a].checked.length&&(t=t.filter(function(t){return e[a].checked.indexOf(t[a].toLowerCase())>-1})),t}),this.setState({filteredFunds:t})}},{key:"applyFilters",value:function(e){var t=e.target.name,a=this.state.filters;e.target.checked?a[t].checked.push(e.target.id.toLowerCase().split("_").join(" ")):a[t].checked.splice(a[t].checked.indexOf(e.target.id.toLowerCase()),1),this.filterFunds(a),this.setState({filters:a})}},{key:"compareFunds",value:function(){this.state.fundsToCompare.length<=1?alert("Please select at least two funds"):this.props.history.push({pathname:"/compare",state:{fundsToCompare:this.state.fundsToCompare}})}},{key:"componentDidMount",value:function(){this.requestMFList(),this.attachEventListener()}},{key:"attachEventListener",value:function(){document.querySelector(".funds-list").addEventListener("click",this.fundClicked)}},{key:"fundClicked",value:function(e){if("checkbox"===e.target.type){var t=this.state.fundsToCompare;if(e.target.checked)t.push(e.target.id);else{var a=t.indexOf(e.target.id);t.splice(a,1)}this.setState({fundsToCompare:t})}}},{key:"requestMFList",value:function(){var e=this;new C({url:"https://api.piggy.co.in/v2/mf/search/",method:"POST",credentials:"omit",body:{search:"",rows:20,filters:{minimum_investments:-1,minimumInvestment:-1}}}).buildRequest().then(function(e){return e.json()}).then(function(t){t&&t.data&&e.updateMFDetails(t.data)})}},{key:"updateMFDetails",value:function(e){var t={filters:{category:{displayText:"Category",data:e.facets.category,checked:[]},riskometer:{displayText:"Riskometer",data:e.facets.riskometer,checked:[]}},funds:e.search_results,filteredFunds:e.search_results};this.setState(t)}},{key:"toggleSidebar",value:function(){this.setState(function(e){return{sidebarClass:"open"===e.sidebarClass?"":"open"}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"parent"},s.a.createElement(N,{filterData:this.applyFilters,toggleClass:this.state.sidebarClass,toggleSidebar:this.toggleSidebar,filters:this.state.filters}),s.a.createElement("div",{className:"header text-right"},s.a.createElement("div",{className:"hamburger",onClick:this.toggleSidebar},s.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30",height:"30",focusable:"false"},s.a.createElement("path",{stroke:"#c635d7",strokeWidth:"2",strokeLinecap:"round",strokeMiterlimit:"10",d:"M4 7h22M4 15h22M4 23h22"}))),s.a.createElement("button",{className:"btn btn-brand",onClick:this.compareFunds},"Compare (",this.state.fundsToCompare.length,")")),s.a.createElement("div",{className:"funds-list"},this.state&&this.state.filteredFunds&&this.state.filteredFunds.length&&this.state.filteredFunds.map(function(e,t){return s.a.createElement(E,{key:t,data:e})})))}}]),t}(n.Component),O=Object(p.a)(j),x=(a(32),function(e){return s.a.createElement("div",{className:"parent"},s.a.createElement("div",{className:"scrollable-table"},s.a.createElement("div",{className:"field-header"},Object.keys(v).map(function(e,t){return s.a.createElement("div",{key:t,className:"field ".concat(e)},s.a.createElement("h5",{className:"field-data"},v[e]))})),s.a.createElement("div",{className:"field-body"},e.data.length&&e.data.map(function(e,t){return s.a.createElement("div",{key:t,className:"field-row"},Object.keys(v).map(function(t,a){return s.a.createElement("div",{key:a,className:"field-value ".concat(t)},s.a.createElement("span",{className:"field-data-value"},k(e[t],t)))}))}))))}),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(d.a)(t).call(this,e))).state={fundsToCompare:[],fundsData:[]},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props&&this.props.location&&this.props.location.state&&this.props.location.state.fundsToCompare&&this.props.location.state.fundsToCompare.length>1?(this.setState({fundsToCompare:this.props.location.state.fundsToCompare}),this.fetchFundsDetails(this.props.location.state.fundsToCompare)):this.props.history.push({pathname:"/"})}},{key:"fetchFundsDetails",value:function(e){var t=this,a=e.map(function(e){return"https://api.piggy.co.in/v1/mf/?key="+e}).map(function(e){return fetch(e).then(function(e){return e.json()})});Promise.all(a).then(function(e){for(var a=[],n=0;n<e.length;n++){var s=e[n];a.push({name:s.data.mutual_fund.details.name,objective:s.data.mutual_fund.details.objective,nav:s.data.mutual_fund.nav,plan_type:s.data.mutual_fund.plan_type,expense_ratio:s.data.mutual_fund.expense_ratio,dividend_type:s.data.mutual_fund.dividend_type,category:s.data.mutual_fund.details.category,scheme_class:s.data.mutual_fund.details.scheme_class,rating:s.data.mutual_fund.details.rating,return_3yr:s.data.mutual_fund.details.return_3yr,return_5yr:s.data.mutual_fund.details.return_5yr,yoy_return:s.data.mutual_fund.details.yoy_return,riskometer:s.data.mutual_fund.details.riskometer,exit_load:s.data.mutual_fund.details.exit_load,exit_load_text:s.data.mutual_fund.details.exit_load,is_elss:s.data.mutual_fund.details.is_elss,minimum_sip_subscription:s.data.mutual_fund.details.minimum_sip_subscription})}t.setState({fundsData:a,dumpedData:e})})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"compare-container"},s.a.createElement("div",{className:"header text-left"},s.a.createElement("button",{className:"btn btn-brand",onClick:function(){e.props.history.push({pathname:"/"})}},"Back to Home")),s.a.createElement("div",{className:"funds-container"},this.state.fundsData&&this.state.fundsData.length&&s.a.createElement(x,{data:this.state.fundsData})))}}]),t}(n.Component),F=Object(p.a)(w),S=function(){return s.a.createElement(O,null)},T=function(){return s.a.createElement(F,null)},D=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(m.a,null,s.a.createElement("div",{className:"container-fluid"},s.a.createElement(h.a,{path:"/",exact:!0,component:S}),s.a.createElement(h.a,{path:"/compare",exact:!0,component:T})))}}]),t}(n.Component);r.a.render(s.a.createElement(D,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.c1ff497a.chunk.js.map