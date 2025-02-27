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
let denyStampDIV = document.querySelector(`.passport__deny-stamp`)
let approveStampDIV = document.querySelector(`.passport__approve-stamp`)
let resolutionSECTION = document.querySelector(`.resolution`)
let resolutionP = document.querySelector(`.resolution__text`)
let resetDIV = document.querySelector(`.booth__reset`)
let numberDeniedP = document.querySelector(`.aggregate__number-denied`)
let numberApprovedP = document.querySelector(`.aggregate__number-approved`)
let approvedBarDIV = document.querySelector(`.aggregate__approved-bar`)
let dialogueP = document.querySelector(`.booth__dialogue`)
let proceedBUTTON = document.querySelector(`.proceed`)

var decision = `none`
var level = 1
var approved = 0
var denied = 0
var autoDenyLevel = 0
var timerRunning = false

let displayCount = function(number){
    timerDIV.textContent = number
}

let autoDeny = function(){

    decision = `deny`
    dialogueP.textContent = ``
    denyEntrant()

}

let startTimer = function(){
    autoDenyLevel = level
    timerDIV.textContent = `60`
    if (!timerRunning) i=59
    if (timerRunning) i=60
    timerDIV.style.display = `block`
    if (!timerRunning){
            timerRunning = true
            setInterval(function(){
            if(decision === `none` && i === 0 && autoDenyLevel===level){
                i=-1
                autoDeny()
            }
            else if(decision === `none`){
                timerDIV.textContent = i.toString()
                i--
            }
        }, 1000);
    }
    
    // let j = 0

    // for (let i=60;i>=0;i--){
    //     setTimeout(displayCount, (j*1000), i)
    //     setTimeout(autoDeny, 60000)
	//     j++
    // }
}

let updatePhoto = function(photo){
    photoFIGURE.style.background = photo
    photoFIGURE.style.backgroundColor = `#a29490`
    photoFIGURE.style.backgroundSize = `cover`
    photoFIGURE.style.backgroundPosition = `center`
}

let displayLevel = function(){
    startTimer()
    if (level === 1){
        proceedBUTTON.textContent = `Next Entrant`
        entrantFIGURE.style.background = `url(dist/img/entrants/fur_hat.png)`
        dialogueP.textContent = `"I'm returning from official business abroad."`
        updatePhoto(`url(dist/img/photos/big_forehead_photo.png)`)
        passportCountryP.textContent = `Obristan`
        nameP.textContent = `Ludum, Dari`
        dobP.textContent = `10.08.1946`
        sexP.textContent = `M`
        issP.textContent = `Lorndaz`
        expP.textContent = `25.11.1982`
        passportNoP.textContent = `Q1E1P-PMGVA`
    }
    else if (level === 2){
        entrantFIGURE.style.background = `url(dist/img/entrants/green_shirt.png)`
        entrantFIGURE.style.height = `190px`
        entrantFIGURE.style.marginTop = `25px`
        dialogueP.textContent = `"I heard there's a cool party in Lorndaz tonight."`
        updatePhoto(`url(dist/img/photos/brunette_lady_photo.png)`)
        passportCountryP.textContent = `Antegria`
        nameP.textContent = `Escalli, Marie`
        dobP.textContent = `12.12.1953`
        sexP.textContent = `F`
        issP.textContent = `Marmero`
        expP.textContent = `20.05.1990`
        passportNoP.textContent = `Z3F1O-ESTWQ`
    }
    else if (level === 3){
        entrantFIGURE.style.background = `url(dist/img/entrants/grumpy_lady.png)`
        entrantFIGURE.style.height = `190px`
        entrantFIGURE.style.marginTop = `25px`
        dialogueP.textContent = `"I am returning from a funeral in Kolechia."`
        updatePhoto(`url(dist/img/photos/grumpy_lady_photo.png)`)
        passportCountryP.textContent = `Obristan`
        nameP.textContent = `Katsenja, Elisa`
        dobP.textContent = `22.01.1930`
        sexP.textContent = `F`
        issP.textContent = `Mergerous`
        expP.textContent = `01.10.1985`
        passportNoP.textContent = `J6L6N-WGAZL`
    }
    else if (level === 4){
        entrantFIGURE.style.background = `url(dist/img/entrants/moustaced_immigrant.png)`
        entrantFIGURE.style.height = `190px`
        entrantFIGURE.style.marginTop = `25px`
        dialogueP.textContent = `"I'm here for work."`
        updatePhoto(`url(dist/img/photos/vengeful_father_photo.png)`)
        passportCountryP.textContent = `Kolechia`
        nameP.textContent = `Kallo, Kordon`
        dobP.textContent = `19.06.1952`
        sexP.textContent = `M`
        issP.textContent = `Altan`
        expP.textContent = `14.02.1987`
        passportNoP.textContent = `1A2B3-ZYXWV`
    }
    else if (level === 5){
        entrantFIGURE.style.background = `url(dist/img/entrants/sad_lady.png)`
        entrantFIGURE.style.height = `190px`
        entrantFIGURE.style.marginTop = `25px`
        dialogueP.textContent = `"I have urgent business in Mergerous."`
        updatePhoto(`url(dist/img/photos/sad_lady_photo.png)`)
        passportCountryP.textContent = `Antegria`
        nameP.textContent = `Piersovska, Shae`
        dobP.textContent = `18.12.1951`
        sexP.textContent = `F`
        issP.textContent = `Glorian`
        expP.textContent = `12.11.1982`
        passportNoP.textContent = `B2X5H-YPEQI`
    }
    else if (level === 6){
        entrantFIGURE.style.background = `url(dist/img/entrants/village_woman.png)`
        entrantFIGURE.style.height = `190px`
        entrantFIGURE.style.marginTop = `25px`
        dialogueP.textContent = `"I am returning to my village."`
        updatePhoto(`url(dist/img/photos/village_woman_photo.png)`)
        passportCountryP.textContent = `Obristan`
        nameP.textContent = `Graire, Stepheni`
        dobP.textContent = `16.02.1944`
        sexP.textContent = `F`
        issP.textContent = `Fardesto`
        expP.textContent = `09.03.1988`
        passportNoP.textContent = `V7L2U-DWAPS`
    }
}

let resolveLevel = function(){
    if(level === 1){
        if(decision ===`deny`){
            resolutionP.textContent = `"You obviously need to have your eyes checked. You'll hear from my superiors about this." The man leaves in a huff with a threatening glare.`
        }
        else if(decision ===`approve`){
            resolutionP.textContent = `"Thank you." The man proceeds beyond the checkpoint with an authoritative air about him.`
        }
        decision = `none`
        axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-1-denied').then(function (response) {
            denied = response.data.data.value
            numberDeniedP.textContent = denied
            axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-1-approved').then(function (response) {
                approved = response.data.data.value
                numberApprovedP.textContent = approved
                totalResponses = approved+denied
                let approvedWidth = (approved / totalResponses)*100
                approvedBarDIV.style.width = `${approvedWidth}%`
            })
        })
    }
    else if(level === 2){
        if(decision ===`deny`){
            resolutionP.textContent = `"Dude, not cool." The man staggers out of the booth.`
        }
        else if(decision ===`approve`){
            resolutionP.textContent = `"Thanks bro!" The man gives you a sly wink and stumbles from the booth past the checkpoint.`
        }
        decision = `none`
        axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-2-denied').then(function (response) {
            denied = response.data.data.value
            numberDeniedP.textContent = denied
            axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-2-approved').then(function (response) {
                approved = response.data.data.value
                numberApprovedP.textContent = approved
                totalResponses = approved+denied
                let approvedWidth = (approved / totalResponses)*100
                approvedBarDIV.style.width = `${approvedWidth}%`
            })
        })
    }
    else if(level === 3){
        if(decision ===`deny`){
            resolutionP.textContent = `"You are a terrible person." The woman leaves the booth with a look of confusion and anger.`
        }
        else if(decision ===`approve`){
            resolutionP.textContent = `"Thank you, dear." The woman leaves the booth with a long face and proceeds past the checkpoint.`
        }
        decision = `none`
        axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-3-denied').then(function (response) {
            denied = response.data.data.value
            numberDeniedP.textContent = denied
            axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-3-approved').then(function (response) {
                approved = response.data.data.value
                numberApprovedP.textContent = approved
                totalResponses = approved+denied
                let approvedWidth = (approved / totalResponses)*100
                approvedBarDIV.style.width = `${approvedWidth}%`
            })
        })
    }
    else if(level === 4){
        if(decision ===`deny`){
            resolutionP.textContent = `The man grumbles something about being ripped off and leaves the booth.`
        }
        else if(decision ===`approve`){
            resolutionP.textContent = `"Excellent! Thank you very much." The man leaves and goes beyond the checkpoint with a smile on his face.`
        }
        decision = `none`
        axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-4-denied').then(function (response) {
            denied = response.data.data.value
            numberDeniedP.textContent = denied
            axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-4-approved').then(function (response) {
                approved = response.data.data.value
                numberApprovedP.textContent = approved
                totalResponses = approved+denied
                let approvedWidth = (approved / totalResponses)*100
                approvedBarDIV.style.width = `${approvedWidth}%`
            })
        })
    }
    else if(level === 5){
        if(decision ===`deny`){
            resolutionP.textContent = `"Sorry, my mistake." The woman leaves the booth with an embarassed look.`
        }
        else if(decision ===`approve`){
            resolutionP.textContent = `"Have a nice day." The woman solemnly proceeds past the checkpoint.`
        }
        decision = `none`
        axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-5-denied').then(function (response) {
            denied = response.data.data.value
            numberDeniedP.textContent = denied
            axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-5-approved').then(function (response) {
                approved = response.data.data.value
                numberApprovedP.textContent = approved
                totalResponses = approved+denied
                let approvedWidth = (approved / totalResponses)*100
                approvedBarDIV.style.width = `${approvedWidth}%`
            })
        })
    }
    else if(level === 6){
        if(decision ===`deny`){
            resolutionP.textContent = `The woman moves to detonate a bomb cleverly concealed beneath her clothes, but is tackled by security and dragged away.`
        }
        else if(decision ===`approve`){
            resolutionP.textContent = `"Glory to Obristan." The woman leaves the booth and cautiously makes her way through the checkpoint.`
        }
        decision = `none`
        axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-6-denied').then(function (response) {
            denied = response.data.data.value
            numberDeniedP.textContent = denied
            axios.get('http://circuslabs.net:3000/data/canosa-checkpoint-6-approved').then(function (response) {
                approved = response.data.data.value
                numberApprovedP.textContent = approved
                totalResponses = approved+denied
                let approvedWidth = (approved / totalResponses)*100
                approvedBarDIV.style.width = `${approvedWidth}%`
            })
        })
        proceedBUTTON.textContent = `Play Again`
        level = 0;
    }
    level++
}

let denyEntrant = function(){
    autoDenyLevel++
    decision = `deny`
    axios.post(`http://circuslabs.net:3000/data/canosa-checkpoint-${level}-denied`, {
        type: 'number',
        action: '++'
    })
    timerDIV.style.display = `none`
    denyStampDIV.style.display = `block`
    crossDIV.style.display = `none`
    checkDIV.style.display = `none`
    dialogueP.textContent = ``
    setTimeout(function(){
        passportSECTION.style.display = `none`
        denyStampDIV.style.display = `none`
        resolutionSECTION.style.display = `flex`
        resolveLevel()
    }, 1000);
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
    displayLevel()
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

crossDIV.addEventListener(`click`, denyEntrant)

checkDIV.addEventListener(`click`, function(){
    autoDenyLevel++
    decision = `approve`
    axios.post(`http://circuslabs.net:3000/data/canosa-checkpoint-${level}-approved`, {
        type: 'number',
        action: '++'
    })
    timerDIV.style.display = `none`
    approveStampDIV.style.display = `block`
    crossDIV.style.display = `none`
    checkDIV.style.display = `none`
    dialogueP.textContent = ``
    setTimeout(function(){
        passportSECTION.style.display = `none`
        approveStampDIV.style.display = `none`
        resolutionSECTION.style.display = `flex`
        resolveLevel()
    }, 1000);
})

proceedBUTTON.addEventListener(`click`, function(){
    resolutionSECTION.style.display = `none`
    passportSECTION.style.display = `flex`
    passportSECTION.style.opacity = `0`
    displayLevel()
})
















resetDIV.addEventListener(`click`, function(){
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-1-approved', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-1-denied', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-2-approved', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-2-denied', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-3-approved', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-3-denied', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-4-approved', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-4-denied', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-5-approved', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-5-denied', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-6-approved', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-6-denied', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-7-approved', {
        type: 'number',
        action: '=',
        value: 0
    })
    axios.post('http://circuslabs.net:3000/data/canosa-checkpoint-7-denied', {
        type: 'number',
        action: '=',
        value: 0
    })
})