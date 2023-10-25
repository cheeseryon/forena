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

    if (window.matchMedia("(min-width: 801px)").matches) {          
        fadeInClass = Array.from(document.querySelectorAll('.fadeInWebTab'));
    } else if (window.matchMedia("(max-width: 800px)").matches) { 
        fadeInClass = Array.from(document.querySelectorAll('.fadeInMobile'));
    }

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

// magazine01 페이지 scrollBar의 컬러 변경 이벤트
function scrollBarColorChange () {
    let scrollBar = document.querySelector('.scrollBar');

    let scrollY = Math.floor(this.scrollY)
    let scrollTrans = fadeInClass[0].clientHeight - scrollY
    if(scrollY > scrollTrans){
        scrollBar.classList.remove('on')
    } else {
        scrollBar.classList.add('on')
    }
}

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
