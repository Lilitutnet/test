let butRight = document.querySelector('.control-but-right')
let butLeft = document.querySelector('.control-but-left')
let cards = document.querySelector('.main-members-cards')

let stageButRight = document.querySelector('.stage-but-right-mobile')
let stageButLeft = document.querySelector('.stage-but-left-mobile')
let stageList = document.querySelector('.main-stage-list')
let itemList = document.querySelector('.list-item')
let controlNumber = document.querySelector('.control-number')
let controlStageBlock = document.querySelectorAll('.control-stage-block')

let controlMobile = document.querySelector('.control-mobile')
let memberButRight = document.querySelector('.members-but-right-mobile')
let memberButLeft = document.querySelector('.members-but-left-mobile')
let controlNumberMobile = document.querySelector('.control-number-mobile')
let stageNum = 1
let memberNum= 1
var timer


// Десктоп
// скролл участников по клику

butRight.addEventListener('click', membersAnimeRight)
butLeft.addEventListener('click', membersAnimeLeft)

function membersAnimeRight(){
    cards.style.transform = "translateX(-100%)"
    controlNumber.innerHTML = "6"
    butRight.disabled = true
    butLeft.disabled = false   
}

function membersAnimeLeft(){
    cards.style.transform = "translateX(0)"
    controlNumber.innerHTML = "3"
    butLeft.disabled = true
    butRight.disabled = false
}

// Проверка
// Проверка десктоп или моб

if (window.screen.width > 768){
    console.log('desktop')
    autoScroll()
    setInterval(autoScroll, 8000)
} else if (window.screen.width <= 768){
    console.log ('mobile')
    autoScrollMobile()
}

// Автоскролл
// автоскролл участников десктоп    
function autoScroll(){      
    setTimeout (membersAnimeRight, 4000)
    setTimeout (membersAnimeLeft, 8000)
}

//  автоскролл участников моб
function autoScrollMobile(){
    timer = setTimeout(autoMemberMobile, 4000)
}
function autoMemberMobile(){
    if (memberNum < 6){
        memberNum = memberNum + 1      
    } else if( memberNum == 6){
        memberNum = 1
    }
    controlMembersMobile()
    autoScrollMobile()   
}

//  Мобильная версия
// скролл участников по клику 
memberButRight.addEventListener('click', function(){
    memberNum += 1
    controlMembersMobile()
})
memberButLeft.addEventListener('click', function(){
    memberNum = memberNum - 1
    controlMembersMobile()
})


function controlMembersMobile(){
    if(memberNum == 1){
        memberButRight.disabled = false
        memberButLeft.disabled = true
    }  else if( memberNum== 6){
        memberButRight.disabled = true
        memberButLeft.disabled = false
    } else {
        memberButRight.disabled = false
        memberButLeft.disabled = false
    }
    cards.style.transform = `translateX(${(memberNum-1)*-361}px)`
    controlNumberMobile.innerHTML = memberNum
}

// Мобильная версия
// Скролл Этапов по клику
stageButRight.addEventListener('click', stageRight)
function stageRight(){
    stageNum += 1
    stageButLeft.disabled = false
    if(stageNum < 5){    
        stageButRight.disabled = false
    }  else if (stageNum == 5){
        stageButRight.disabled = true
    }
  
    stageList.style.transform= `translateX(${(stageNum-1)*-355}px`
    controlStageBlock[stageNum - 1].style.backgroundColor = '#313131'
    controlStageBlock[stageNum - 2].style.backgroundColor = '#D9D9D9'
}

stageButLeft.addEventListener('click', stageLeft)
function stageLeft(){
    stageNum = stageNum - 1
    stageButRight.disabled = false
    if(stageNum == 1){ 
        stageButLeft.disabled = true
        
    }  else if(stageNum > 1){ 
        stageButLeft.disabled = false
    } 

    stageList.style.transform= `translateX(${(stageNum - 1)*-375}px`
    controlStageBlock[stageNum-1].style.backgroundColor = '#313131'
    controlStageBlock[stageNum].style.backgroundColor = '#D9D9D9'
}