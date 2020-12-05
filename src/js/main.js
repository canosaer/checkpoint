//sample passport no: Q1E1P-PMGVA

let beginBUTTON = document.querySelector(`.begin`)
let introSECTION = document.querySelector(`.intro`)
let topRowSECTION = document.querySelector(`.top-row`)
let referenceSECTION = document.querySelector(`.reference`)
let timerDIV = document.querySelector(`.timer`)
let entrantFIGURE = document.querySelector(`.booth__entrant`)
let photoFIGURE = document.querySelector(`.passport__photo`)
let passportCountryP = document.querySelector(`.passport__country`)
let nameP = document.querySelector(`.passport__name`)
let dobP = document.querySelector(`.passport__dob`)
let sexP = document.querySelector(`.passport__sex`)
let issP = document.querySelector(`.passport__iss`)
let expP = document.querySelector(`.passport__exp`)
let passportNoP = document.querySelector(`.passport__number`)
let passportDIV = document.querySelector(`.booth__passport`)
let passportSECTION = document.querySelector(`.passport`)
let passportStyles = window.getComputedStyle(passportSECTION)
let crossDIV = document.querySelector(`.stamps__cross`)
let checkDIV = document.querySelector(`.stamps__check`)
let citiesH1 = document.querySelector(`.cities__heading`)
let bookDIVS = document.querySelectorAll(`.cities__book`)
let bookStyles = window.getComputedStyle(bookDIVS[0])
let citiesSPAN = document.querySelector(`.cities__expand`)
let obristanBookFIGURE = document.querySelector(`.cities__book_obristan`)
let kolechiaBookFIGURE = document.querySelector(`.cities__book_kolechia`)
let antegriaBookFIGURE = document.querySelector(`.cities__book_antegria`)
let journalDIV = document.querySelector(`.cities__display`)
let journalCountryH2 = document.querySelector(`.cities__country`)
let journalEntryLIS = document.querySelectorAll(`.cities__entry`)

var decision = `none`;

let displayCount = function(number){
    timerDIV.textContent = number
}

let autoDeny = function(){
    if(decision === `none`){
        console.log(`You have denied entry`)
    }
}

let startTimer = function(){
    timerDIV.textContent = `60`
    
    let j = 0

    for (let i=60;i>=0;i--){
        setTimeout(displayCount, (j*1000), i)
        setTimeout(autoDeny, 60000)
	    j++
    }
}

let updatePhoto = function(photo){
    photoFIGURE.style.background = photo
    photoFIGURE.style.backgroundColor = `#a29490`
    photoFIGURE.style.backgroundSize = `cover`
    photoFIGURE.style.backgroundPosition = `center`
}

let levelOne = function(){
    startTimer()
    entrantFIGURE.style.background = `url(../../dist/img/entrants/fur_hat.png)`
    updatePhoto(`url(../../dist/img/photos/big_forehead_photo.png)`)
    passportCountryP.textContent = `Obristan`
    nameP.textContent = `Ludum, Dari`
    dobP.textContent = `10.08.1946`
    sexP.textContent = `M`
    issP.textContent = `Lorndaz`
    expP.textContent = `25.11.1982`
    passportNoP.textContent = `Q1E1P-PMGVA`
}

passportDIV.addEventListener(`click`, function(){
    if(passportStyles.getPropertyValue(`opacity`) === `0`){
        passportSECTION.style.opacity = `1`
        crossDIV.style.display = `block`
        checkDIV.style.display = `block`
    }
    else {
        passportSECTION.style.opacity = `0`
        crossDIV.style.display = `none`
        checkDIV.style.display = `none`
    }

})

beginBUTTON.addEventListener(`click`, function(){
    introSECTION.style.display = `none`
    topRowSECTION.style.display = 'flex'
    referenceSECTION.style.display = `flex`
    levelOne()
})

citiesH1.addEventListener(`click`, function(){
    if(bookStyles.getPropertyValue(`display`) === `none`){
        citiesSPAN.textContent = `<>`
        for(let i=0; i<bookDIVS.length; i++){
            bookDIVS[i].style.display = `flex`
        }
    }
    else{
        citiesSPAN.textContent = `><`
        for(let i=0; i<bookDIVS.length; i++){
            bookDIVS[i].style.display = `none`
        }
        journalDIV.style.display = `none`
    }
})

obristanBookFIGURE.addEventListener(`click`, function(){
    journalDIV.style.display = `flex`
    journalCountryH2.textContent = `Obristan`
    journalEntryLIS[0].textContent = `• Skal`
    journalEntryLIS[1].textContent = `• Lorndaz`
    journalEntryLIS[2].textContent = `• Mergerous`
})

kolechiaBookFIGURE.addEventListener(`click`, function(){
    journalDIV.style.display = `flex`
    journalCountryH2.textContent = `Kolechia`
    journalEntryLIS[0].textContent = `• Yurko City`
    journalEntryLIS[1].textContent = `• Vedor`
    journalEntryLIS[2].textContent = `• Grestin`
})

antegriaBookFIGURE.addEventListener(`click`, function(){
    journalDIV.style.display = `flex`
    journalCountryH2.textContent = `Antegria`
    journalEntryLIS[0].textContent = `• Marmero`
    journalEntryLIS[1].textContent = `• Glorian`
    journalEntryLIS[2].textContent = `• Grouse`
})