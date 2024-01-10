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
});