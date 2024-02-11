let mainVisual = document.querySelector(".mainVisual"),
    directionInfo = document.querySelector(".directionInfo"),
    content = document.querySelector(".content"),
    rotCom = document.querySelector("#rotCom");

let textArea = document.querySelectorAll(".directionInfo .textArea"),
    directionTitle = document.querySelectorAll(".directionInfo h2"),
    textTitle = document.querySelectorAll(".directionInfo .textArea .title"),
    subText = document.querySelectorAll(".directionInfo .textArea .subText"),
    iconArea = document.querySelectorAll(".directionInfo .textArea .iconArea");

let mainTitleArea = document.querySelector(".mainTitleArea"),
    dotBg = document.querySelector(".dotBg");

window.addEventListener("scroll", () => {
  let scrollY = Math.floor(this.scrollY),
      comRotate = Math.floor(scrollY / 10);

  if(rotCom) {
    rotCom.style.transform = "rotate(" + comRotate + "deg)";

  if (300 > scrollY) {
    mainVisual.classList.add("on");
    directionInfo.classList.remove("on");
    content.classList.remove("on");
  } else if (300 < scrollY && scrollY <= 4300) {
    mainVisual.classList.remove("on");
    directionInfo.classList.add("on");
    content.classList.remove("on");
  } else if (4300 < scrollY) {
    mainVisual.classList.remove("on");
    directionInfo.classList.remove("on");
    content.classList.add("on");
  }

  //  viewport 모바일,태블릿 일 경우 스크롤 이벤트시 숨김처리
  if (300 < scrollY) {
    mainTitleArea.classList.add("off");
    dotBg.classList.add("off");
  } else {
    mainTitleArea.classList.remove("off");
    dotBg.classList.remove("off");
  }
  

  if (300 < scrollY && scrollY <= 1300) {
    textArea[0].classList.add("on");
    directionTitle[0].classList.add("on");
    textTitle[0].classList.add("on");
    subText[0].classList.add("on");
    iconArea[0].classList.add("on");
  } else {
    textArea[0].classList.remove("on");
    directionTitle[0].classList.remove("on");
    textTitle[0].classList.remove("on");
    subText[0].classList.remove("on");
    iconArea[0].classList.remove("on");
  }

  if (1300 < scrollY && scrollY <= 2300) {
    textArea[1].classList.add("on");
    directionTitle[1].classList.add("on");
    textTitle[1].classList.add("on");
    subText[1].classList.add("on");
    iconArea[1].classList.add("on");
  } else {
    textArea[1].classList.remove("on");
    directionTitle[1].classList.remove("on");
    textTitle[1].classList.remove("on");
    subText[1].classList.remove("on");
    iconArea[1].classList.remove("on");
  }

  if (2300 < scrollY && scrollY <= 3300) {
    textArea[2].classList.add("on");
    directionTitle[2].classList.add("on");
    textTitle[2].classList.add("on");
    subText[2].classList.add("on");
    iconArea[2].classList.add("on");
  } else {
    textArea[2].classList.remove("on");
    directionTitle[2].classList.remove("on");
    textTitle[2].classList.remove("on");
    subText[2].classList.remove("on");
    iconArea[2].classList.remove("on");
  }

  if (3300 < scrollY && scrollY <= 4300) {
    textArea[3].classList.add("on");
    directionTitle[3].classList.add("on");
    textTitle[3].classList.add("on");
    subText[3].classList.add("on");
    iconArea[3].classList.add("on");
  } else {
    textArea[3].classList.remove("on");
    directionTitle[3].classList.remove("on");
    textTitle[3].classList.remove("on");
    subText[3].classList.remove("on");
    iconArea[3].classList.remove("on");
  }
  }
  
});


function mainPageScrollYSave () {
  let subPageLink = Array.from(document.querySelectorAll(".subPageLink"))

  subPageLink.forEach((item) => {
      item.addEventListener("click" , function(e) {
        e.preventDefault()
        sessionStorage.setItem('mainPageScrollY', window.scrollY);

        window.location.href = item.getAttribute("href")
      })
  })
} 
mainPageScrollYSave()



/* 서브페이지 */
let fadeInClass;
let heightTop = [];
let heightBottom = [];
let fadePointTop = [];
let fadePointBottom = [];
let windowHeight = Math.floor(window.innerHeight)
let mainImgBox = document.querySelector('.mainImgBox');
let titleArea = document.querySelector('.titleArea');

function subPageFadeIn() {    
    let scrollY = Math.floor(this.scrollY)

    if (window.matchMedia("(min-width: 801px)").matches && document.querySelector('.fadeInWebTab')) {          
        fadeInClass = Array.from(document.querySelectorAll('.fadeInWebTab'));
    } else if (window.matchMedia("(max-width: 800px)").matches && document.querySelector('.fadeInMobile')) { 
        fadeInClass = Array.from(document.querySelectorAll('.fadeInMobile'));
    }

  if(fadeInClass !== undefined) {
    for(let i = 0; i < fadeInClass.length; i++) {   
        heightTop[i] = Math.floor(fadeInClass[i].getBoundingClientRect().top)
        heightBottom[i] = Math.floor(fadeInClass[i].getBoundingClientRect().bottom)
        fadePointTop[i] = Math.floor(heightTop[i] + scrollY - windowHeight)
        fadePointBottom[i] = Math.floor(heightBottom[i] * 0.9 + scrollY)

        if(fadePointTop[i] <= scrollY && scrollY < fadePointBottom[i]) {
            fadeInClass[i].classList.add('on')

            if(fadeInClass[0].classList.contains('on')){
                mainImgBox.classList.add('on')
                titleArea.classList.add('on')
            }

            /* 모든 요소에 on 클래스가 붙은 경우 스크롤 이벤트 종료 */
            if(fadeInClass.every(item => item.classList.contains('on'))) {
                return
            }
        }
      }
  }
}

// magazine01 페이지 scrollBar의 컬러 변경 이벤트
function scrollBarColorChange () {
    let scrollY = Math.floor(this.scrollY)
    let scrollBar = document.querySelector('.scrollBar');

    if(fadeInClass !== undefined) {
      let scrollBarChangePoint = fadeInClass[0].clientHeight - scrollY
      if(scrollY > scrollBarChangePoint){
          scrollBar.classList.remove('on')
      } else {
          scrollBar.classList.add('on')
      }
    }
}

let backBtn = Array.from(document.querySelectorAll(".backBtn > a"))

backBtn.forEach((item) => {
  item.addEventListener("click",function(e) {
    e.preventDefault()

    window.history.back()

    window.addEventListener('load', () => {
      let mainScrollY = parseInt(sessionStorage.getItem("mainPageScrollY"))
      window.scrollTo(0, mainScrollY);
    })
  })
})

window.addEventListener('load', () => {
  subPageFadeIn()
  scrollBarColorChange()
})
window.addEventListener('scroll', () => {
  subPageFadeIn()
  scrollBarColorChange()
})
window.addEventListener('resize', () => {
  subPageFadeIn()
  scrollBarColorChange()
})
