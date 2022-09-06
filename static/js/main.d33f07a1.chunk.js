(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/BarGraph.5f48d35b.jpg"},15:function(e,a,t){e.exports=t.p+"static/media/LineGraph.6229492f.jpg"},16:function(e,a,t){e.exports=t.p+"static/media/Multi-graph.d0144eeb.png"},21:function(e,a,t){e.exports=t(38)},30:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),o=t(13),i=t.n(o);t(30);var s=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"header__text-content"},n.a.createElement("h1",{className:"header__title"},"Air Traffic"),n.a.createElement("p",{className:"header__subtitle"})))};var l=function(){return n.a.createElement("div",{className:"description__text-content"},n.a.createElement("h2",{className:"description__title"},"Intro"),n.a.createElement("p",{className:"description__paragraph"},"There are three files containing data about air traffic, CO2 emission, and pre-departure delays of European airports. Four data visualizations were created based on these data which are air traffic of airports over 6 years, the effect of COVID-19 on air traffic, CO2 emission by states, and the amount of pre-departure delays by airports."),n.a.createElement("p",{className:"description__paragraph"}," ",'To prepare the air traffic data, the missing values were dropped as it meant that there was no data received from the airport operators and I worked only with the data received from network manager. All columns for each dataset were converted to lower case, state names that are not in English were replaced, duplicates were checked and found none. I have realized that airport traffic of Istanbul Ataturk starts going down significantly after 2019 and the data for the air traffic of iGA Istanbul Airport starts from 2019. Apparently, Istanbul Ataturk was replaced by iGA Istanbul Airport. Therefore, I will combine the data of both airports under "Istanbul Airport".'," "),n.a.createElement("p",{className:"description__paragraph"},"Top 10 busiest airports were found by creating a pivot table and data filtered for only those airports. I left the year 2022 out of the analysis as the data aren't complete yet. Data was filtered again using pivot table to find average daily air traffic (arrivals and departures) per airport for each year from 2016-2021 and the values were rounded down. This data was exported on an excel document and sent over to the Software Engineering student. The analysis showed that until 2020, each airport had a constant amount of air traffic which had not changed over the years."," "),n.a.createElement("p",{className:"description__paragraph"},"During pandemic, the passenger traffic reduced significantly due to flight restrictions. For COVID analysis, air traffic data was filtered for years 2020 and up, as well as the top 10 airports. A Pivot table was created to find daily air traffic for each month from January 2020 to July 2022. Line graph was plotted, and following conclusions were made; due to COVID-19, there has been a significant decrease in air traffic all across Europe. Air traffic has slowed down again after each major variant (Delta-Nov 2020, Omicron-Nov 2021). iGA Istanbul Airport, Amsterdam - Schiphol, and Paris-Charles-de-Gaulle have recovered quicker compared to other airports. As of July 2022, London - Heathrow and Madrid - Barajas haven't returned to their pre-COVID days."," "),n.a.createElement("p",{className:"description__paragraph"},"To prepare the data about delays, all missing values were dropped and worked with the remaining data because replacing them would mess up the data as almost 73% of the data for delays were missing. The missing values could be due to no data entry from the airport operator. A column was created to store average delays per flight. For this column used flt_dep_ifr_2 column was instead of flt_dep_1 column because it comes from the airport operator, same as dly_all_pre_2 values. There are slight differences in some rows between both flt_dep columns as one comes from the network manager and the other is from airport operator. The data was filtered for 2021 because the data from 2022 aren't complete and there weren\u2019t many flights during 2020 due to COVID. A Pivot table was created to find airports with most delays and a horizontal bar graph was plotted. The analysis showed that Luxembourg Airport had by far the most delays per flight in 2021, with an average of 59 minutes. 5 of the top 15 are German airports, meaning that 33% of the delays happen in Germany among the highest ranking. Italy is responsible for 27% of top ranked."),n.a.createElement("p",{className:"description__paragraph"},"For the analysis of CO2 emission data, a column was created to calculate CO2 emissions per flight. States that have highest CO2 emission per flight were found. A pivot table was created to find average CO2 emissions per flight per state for each year from 2010 to 2022. Columns were created to store the percentage change of CO2 emissions and traffic between years as it might be needed for further analysis. The data was filtered for the top 12 states. An area chart was created for each state through faceting. The analysis showed that Luxembourg has the highest CO2 emissions among other states and have worsened significantly over time. Cyprus is the only state that has shown a slight improvement. The data shows that most of the states had a slight increase in emissions before 2020, which went down during 2020 due to COVID-19. The report was sectioned for each analysis to provide easier reading and understanding."))},c=t(6);var d=function(e){var a=e.dataTitle,t=e.dataImage,r=e.children,o=e.isOpen;return n.a.createElement("div",{className:" data__content  ".concat(o?"data__content_is-open":"data__content_transform")},n.a.createElement("h2",{className:"data__title"},a),n.a.createElement("div",{className:"data__grid"},n.a.createElement("img",{src:t,onClick:function(e){console.log(e.target)},alt:"graph",className:"data__graph"}),n.a.createElement("p",{className:"data__text-container"},r)))};var m=function(){return n.a.createElement("div",{className:"cover__content"},n.a.createElement("div",{className:"cover__text-content"},n.a.createElement("h2",{className:"cover__title"},"Select your data"),n.a.createElement("p",{className:"cover__subtitle"},"Click on one of the buttons to view the different data")),n.a.createElement("ul",{className:"cover__label"},n.a.createElement("li",{className:"cover__label_item"},"Ready to go?"),n.a.createElement("li",{className:"cover__label_item"},"Heat Map"),n.a.createElement("li",{className:"cover__label_item"},"CO2 by flight"),n.a.createElement("li",{className:"cover__label_item"},"Top 10 European Airports")))};var h=function(e){var a=e.button,t=e.setButton,r=e.closeAll,o=e.children;return n.a.createElement("button",{className:"data__menu-btn  ".concat(a?"data__menu-btn_active":""),onClick:function(){return a?r():t()},type:"button"},o)};var p=function(e){var a=e.toggleMenu;return n.a.createElement("button",{className:"mobile__menu_button",onClick:a})};var u=function(){return n.a.createElement("div",{className:"mobile__cover_content"},n.a.createElement("div",{className:"cover__text-content"},n.a.createElement("h2",{className:"cover__title"},"Select your data"),n.a.createElement("p",{className:"cover__subtitle"},"Click on one of the buttons to view the different data")),n.a.createElement("ul",{className:"cover__label"},n.a.createElement("li",{className:"cover__label_item"},"Heat Map"),n.a.createElement("li",{className:"cover__label_item"},"Heat Map"),n.a.createElement("li",{className:"cover__label_item"},"Heat Map"),n.a.createElement("li",{className:"cover__label_item"},"Top 10 European Airports")))};var f=function(e){e.isOpen;var a=e.dataOneOpen,t=e.handleDataOne,r=e.dataTwoOpen,o=e.handleDataTwo,i=e.dataThreeOpen,s=e.handleDataThree,l=e.dataFourOpen,c=e.handleDataFour,d=e.handleCloseAll;return n.a.createElement("div",{className:"mobile__menu_is-open mobile__menu"},n.a.createElement("div",{className:"mobile__data-btn_container"},n.a.createElement(h,{button:a,setButton:t,closeAll:d},"Heat Map"),n.a.createElement(h,{button:r,setButton:o,closeAll:d},"map 2"),n.a.createElement(h,{button:i,setButton:s,closeAll:d},"map 3"),n.a.createElement(h,{button:l,setButton:c,closeAll:d},"Top 10")),n.a.createElement(u,null))},y=(t(31),t(20));var b=function(){return n.a.createElement("div",{className:"line-chart"},n.a.createElement(y.a,{datasetIdKey:"id",width:4,height:2,data:{labels:["2016","2017","2018","2019","2020","2021"],datasets:[{id:0,label:" Amsterdam -Schiphol",data:[{x:1,y:1339},{x:2,y:1392},{x:3,y:1400},{x:4,y:1395},{x:5,y:644},{x:6,y:788}],borderColor:"limegreen",borderWidth:2,tension:.3},{id:1,label:" Barcelona",data:[{x:1,y:840},{x:2,y:886},{x:3,y:919},{x:4,y:943},{x:5,y:334},{x:6,y:448}],borderColor:"red",borderWidth:2,tension:.3},{id:2,label:" Frankfurt",data:[{x:1,y:1264},{x:2,y:1302},{x:3,y:1403},{x:4,y:1407},{x:5,y:580},{x:6,y:717}],borderColor:"#9e27b3",borderWidth:2,tension:.3},{id:3,label:" Istanbul",data:[{x:1,y:1242},{x:2,y:1235},{x:3,y:1250},{x:4,y:893},{x:5,y:504},{x:6,y:761}],borderColor:"yellow",borderWidth:2,tension:.4,titleColor:"red"},{id:4,label:" Z\xfcrich",data:[{x:1,y:717},{x:2,y:722},{x:3,y:744},{x:4,y:737},{x:5,y:287},{x:6,y:344}],borderColor:"#ffb14a",borderWidth:2,tension:.3},{id:5,label:" London -Heathrow",data:[{x:1,y:1297},{x:2,y:1304},{x:3,y:1309},{x:4,y:1309},{x:5,y:559},{x:6,y:535}],borderColor:"#1666fa",borderWidth:2,tension:.3},{id:6,label:" Madrid -Barajas",data:[{x:1,y:1033},{x:2,y:1061},{x:3,y:1122},{x:4,y:1167},{x:5,y:452},{x:6,y:596}],borderColor:"hotpink",borderWidth:2,tension:.3},{id:7,label:" Munich",data:[{x:1,y:1070},{x:2,y:1100},{x:3,y:1124},{x:4,y:1134},{x:5,y:394},{x:6,y:412}],borderColor:"#8f46c7",borderWidth:2,tension:.3,color:"#666"},{id:8,label:" Paris -Charles-de-Gaulle",data:[{x:1,y:1309},{x:2,y:1322},{x:3,y:1337},{x:4,y:1383},{x:5,y:603},{x:6,y:701}],borderColor:"cyan",borderWidth:2,tension:.3},{id:9,label:" Rome - Fiumicino",data:[{x:1,y:857},{x:2,y:814},{x:3,y:842},{x:4,y:848},{x:5,y:282},{x:6,y:312}],borderColor:"turquoise",borderWidth:2,tension:.3}]},options:{responsive:!0,maintainAspectRatio:!0,aspectRatio:2,plugins:{datalabels:{color:"red"},tooltip:{},legend:{labels:{color:"white",boxWidth:15,boxHeight:15,padding:15,font:{size:10,family:"comfortaa"}},align:"start",position:"right"}},scales:{y:{title:{display:!0,text:"Total arrivals / departures per day",padding:5,color:"white"},ticks:{color:"white",font:{size:10}},grid:{color:"silver"}},x:{ticks:{color:"white",font:{size:10}},grid:{color:"silver",borderWidth:1}}}}}))};var g=function(e){var a=e.dataTitle,t=e.children,r=e.isOpen;return n.a.createElement("div",{className:" data__content  ".concat(r?"data__content_is-open":"data__content_transform")},n.a.createElement("h2",{className:"data__title"},a),n.a.createElement("div",{className:"interactive__grid"},n.a.createElement("div",{className:"interactive__graph"},n.a.createElement(b,null)),n.a.createElement("p",{className:" interactive__text-container "},t)))},_=t(14),v=t.n(_),w=t(15),E=t.n(w),x=t(16),N=t.n(x);var O=function(){var e=Object(r.useState)(!1),a=Object(c.a)(e,2),t=a[0],o=a[1],i=Object(r.useState)(!1),s=Object(c.a)(i,2),l=s[0],u=s[1],y=Object(r.useState)(!1),b=Object(c.a)(y,2),_=b[0],w=b[1],x=Object(r.useState)(!1),O=Object(c.a)(x,2),C=O[0],A=O[1],T=Object(r.useState)(!1),I=Object(c.a)(T,2),D=I[0],k=I[1];function F(){S(),o(!0)}function j(){S(),u(!0)}function B(){S(),w(!0)}function M(){S(),A(!0)}function S(){o(!1),u(!1),w(!1),A(!1)}return n.a.createElement("div",{className:"main__modal"},n.a.createElement(p,{toggleMenu:function(){S(),k(!0)},isMenuOpen:D}),n.a.createElement("div",{className:"data__menu-btn_container"},n.a.createElement(h,{button:t,setButton:F,closeAll:S},"Delayed..."),n.a.createElement(h,{button:l,setButton:j,closeAll:S},"map 2"),n.a.createElement(h,{button:_,setButton:B,closeAll:S},"CO2"),n.a.createElement(h,{button:C,setButton:M,closeAll:S},"Top 10")),n.a.createElement("div",{className:"main__content"},n.a.createElement(f,{isOpen:D,dataOneOpen:t,handleDataOne:F,dataTwoOpen:l,handleDataTwo:j,dataThreeOpen:_,handleDataThree:B,isDataFourOpen:C,handleDataFour:M,handleCloseAll:S}),n.a.createElement(m,null),n.a.createElement(d,{dataTitle:"Airports that can't keep up",dataImage:v.a,name:"one",isOpen:t,isClosed:S},"Figure 1: Average pre-departure delays of top 15 airports with most delays per flight in 2021. Luxembourg Airport by far had most delays per flight in 2021 with an average of 59 minutes. 5 of the top 15 are German airports meaning that 33% of the delays happen in Germany among the highest ranking. Italy is responsible for 27% of top ranked."),n.a.createElement(d,{dataTitle:"Emissions at the airport",dataImage:E.a,name:"two",isOpen:l},"Figure 2: Average daily air traffic of top 10 busiest airports in Europe from January 2020 to July 2022. Due to COVID-19, there has been a significant decrease in air traffic all across Europe. Air traffic has slowed down again after each major variant (Delta-Nov 2020, Omicron-Nov 2021). iGA Istanbul Airport, Amsterdam - Schiphol, and Paris-Charles-de-Gaulle have recovered quicker compared to other airports. As of July 2022, London - Heathrow and Madrid - Barajas haven't returned to their pre-COVID days."),n.a.createElement(d,{dataTitle:"CO2 Emissions Per Flight",dataImage:N.a,name:"three",isOpen:_},"Figure 3: CO2 emission(in million tonnes) per flight by top 12 states with the highest emission from 2010 to 2022. Luxembourg has the highest CO2 emission among other states and have worsened significantly over time. Cyprus is the only state that has shown a slight improvement. The data shows that most of the states had a little increase in emission before 2020 which went down during 2020 due to COVID-19."),n.a.createElement(g,{dataTitle:"Top 10 Airports",name:"four",isOpen:C},"(Interactive) Figure 4: Daily air traffic of top 10 busiest airports in Europe from 2016 to 2021. Until 2020, each airport had a constant amount of air traffic which had not changed over the years. During pandemic, the passenger traffic reduced significantly due to flight restrictions. As of 2021, air traffic in Europe has yet to recover fully.")))};var C=function(){return n.a.createElement("div",{className:"description__text-content description__text-content-conclusion "},n.a.createElement("h2",{className:"description__title"},"Conclusion"),n.a.createElement("p",{className:"description__paragraph"},"Top 10 busiest airports were found by creating a pivot table and data filtered for only those airports. I left the year 2022 out of the analysis as the data aren't complete yet. Data was filtered again using pivot table to find average daily air traffic (arrivals and departures) per airport for each year from 2016-2021 and the values were rounded down. This data was exported on an excel document and sent over to the Software Engineering student. The analysis showed that until 2020, each airport had a constant amount of air traffic which had not changed over the years."))};var A=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"footer__content"},n.a.createElement("p",{className:"footer__creator"},"Created by: Bet\xfcl Yildirim & Jake Johnson"),n.a.createElement("p",{className:"footer__cite"},"Menu icon by Icons8")))};var T=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("section",{className:"page"},n.a.createElement(s,null),n.a.createElement(l,null),n.a.createElement(O,null),n.a.createElement(C,null),n.a.createElement("div",{className:"box"}),n.a.createElement(A,null)))},I=t(19),D=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,39)).then(function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,o=a.getLCP,i=a.getTTFB;t(e),r(e),n(e),o(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(I.a,{basename:"/code-bridge-1"},n.a.createElement(T,null)))),D()}},[[21,1,2]]]);
//# sourceMappingURL=main.d33f07a1.chunk.js.map