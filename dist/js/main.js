let beginBUTTON=document.querySelector(".begin"),introSECTION=document.querySelector(".intro"),topRowSECTION=document.querySelector(".top-row"),referenceSECTION=document.querySelector(".reference"),timerDIV=document.querySelector(".timer"),entrantFIGURE=document.querySelector(".booth__entrant"),photoFIGURE=document.querySelector(".passport__photo"),passportCountryP=document.querySelector(".passport__country"),nameP=document.querySelector(".passport__name"),dobP=document.querySelector(".passport__dob"),sexP=document.querySelector(".passport__sex"),issP=document.querySelector(".passport__iss"),expP=document.querySelector(".passport__exp"),passportNoP=document.querySelector(".passport__number"),passportDIV=document.querySelector(".booth__passport"),passportSECTION=document.querySelector(".passport"),passportStyles=window.getComputedStyle(passportSECTION),crossDIV=document.querySelector(".stamps__cross"),checkDIV=document.querySelector(".stamps__check"),citiesH1=document.querySelector(".cities__heading"),bookDIVS=document.querySelectorAll(".cities__book"),bookStyles=window.getComputedStyle(bookDIVS[0]),citiesSPAN=document.querySelector(".cities__expand"),obristanBookFIGURE=document.querySelector(".cities__book_obristan"),kolechiaBookFIGURE=document.querySelector(".cities__book_kolechia"),antegriaBookFIGURE=document.querySelector(".cities__book_antegria"),journalDIV=document.querySelector(".cities__display"),journalCountryH2=document.querySelector(".cities__country"),journalEntryLIS=document.querySelectorAll(".cities__entry"),denyStampDIV=document.querySelector(".passport__deny-stamp"),approveStampDIV=document.querySelector(".passport__approve-stamp"),resolutionSECTION=document.querySelector(".resolution"),resolutionP=document.querySelector(".resolution__text"),resetDIV=document.querySelector(".booth__reset"),numberDeniedP=document.querySelector(".aggregate__number-denied"),numberApprovedP=document.querySelector(".aggregate__number-approved"),approvedBarDIV=document.querySelector(".aggregate__approved-bar");var decision="none",level=1,approved=0,denied=0;let displayCount=function(e){timerDIV.textContent=e},autoDeny=function(){"none"===decision&&(decision="deny",resolveLevel())},startTimer=function(){timerDIV.textContent="60";let e=0;for(let t=60;t>=0;t--)setTimeout(displayCount,1e3*e,t),setTimeout(autoDeny,6e4),e++},updatePhoto=function(e){photoFIGURE.style.background=e,photoFIGURE.style.backgroundColor="#a29490",photoFIGURE.style.backgroundSize="cover",photoFIGURE.style.backgroundPosition="center"},levelOne=function(){startTimer(),entrantFIGURE.style.background="url(dist/img/entrants/fur_hat.png)",updatePhoto("url(dist/img/photos/big_forehead_photo.png)"),passportCountryP.textContent="Obristan",nameP.textContent="Ludum, Dari",dobP.textContent="10.08.1946",sexP.textContent="M",issP.textContent="Lorndaz",expP.textContent="25.11.1982",passportNoP.textContent="Q1E1P-PMGVA"},resolveLevel=function(){1===level&&("deny"===decision?resolutionP.textContent='"You obviously need to have your eyes checked. You\'ll hear from my superiors about this." The man leaves in a huff with a threatening glare.':"approve"===decision&&(resolutionP.textContent='"Thank you." The man proceeds beyond the checkpoint with an authoritative air about him.'),decision="none",axios.get("http://circuslabs.net:3000/data/canosa-checkpoint-1-denied").then((function(e){denied=e.data.data.value,numberDeniedP.textContent=denied})),axios.get("http://circuslabs.net:3000/data/canosa-checkpoint-1-approved").then((function(e){approved=e.data.data.value,numberApprovedP.textContent=approved;let t=approved/(approved+denied)*100;approvedBarDIV.style.width=t+"%"})))};passportDIV.addEventListener("click",(function(){"0"===passportStyles.getPropertyValue("opacity")?(passportSECTION.style.opacity="1",crossDIV.style.display="block",checkDIV.style.display="block"):(passportSECTION.style.opacity="0",crossDIV.style.display="none",checkDIV.style.display="none")})),beginBUTTON.addEventListener("click",(function(){introSECTION.style.display="none",topRowSECTION.style.display="flex",referenceSECTION.style.display="flex",levelOne()})),citiesH1.addEventListener("click",(function(){if("none"===bookStyles.getPropertyValue("display")){citiesSPAN.textContent="<>";for(let e=0;e<bookDIVS.length;e++)bookDIVS[e].style.display="flex"}else{citiesSPAN.textContent="><";for(let e=0;e<bookDIVS.length;e++)bookDIVS[e].style.display="none";journalDIV.style.display="none"}})),obristanBookFIGURE.addEventListener("click",(function(){journalDIV.style.display="flex",journalCountryH2.textContent="Obristan",journalEntryLIS[0].textContent="• Skal",journalEntryLIS[1].textContent="• Lorndaz",journalEntryLIS[2].textContent="• Mergerous"})),kolechiaBookFIGURE.addEventListener("click",(function(){journalDIV.style.display="flex",journalCountryH2.textContent="Kolechia",journalEntryLIS[0].textContent="• Yurko City",journalEntryLIS[1].textContent="• Vedor",journalEntryLIS[2].textContent="• Grestin"})),antegriaBookFIGURE.addEventListener("click",(function(){journalDIV.style.display="flex",journalCountryH2.textContent="Antegria",journalEntryLIS[0].textContent="• Marmero",journalEntryLIS[1].textContent="• Glorian",journalEntryLIS[2].textContent="• Grouse"})),crossDIV.addEventListener("click",(function(){decision="deny",axios.post(`http://circuslabs.net:3000/data/canosa-checkpoint-${level}-denied`,{type:"number",action:"++"}),timerDIV.style.display="none",denyStampDIV.style.display="block",crossDIV.style.display="none",checkDIV.style.display="none",setTimeout((function(){passportSECTION.style.display="none",denyStampDIV.style.display="none",resolutionSECTION.style.display="flex",resolveLevel()}),1e3)})),resetDIV.addEventListener("click",(function(){axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-1-approved",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-1-denied",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-2-approved",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-2-denied",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-3-approved",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-3-denied",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-4-approved",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-4-denied",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-5-approved",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-5-denied",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-6-approved",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-6-denied",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-7-approved",{type:"number",action:"=",value:0}),axios.post("http://circuslabs.net:3000/data/canosa-checkpoint-7-denied",{type:"number",action:"=",value:0})}));
//# sourceMappingURL=main.js.map