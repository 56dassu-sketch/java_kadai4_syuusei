
// ハンバーガーメニュー

// 要素取得
const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");

const overlay = document.getElementById("overlay");

// ハンバーガークリック
hamburger.addEventListener("click", () => {

  // ×になる
  hamburger.classList.toggle("active");

  // メニュー表示
  menu.classList.toggle("active");

  // 背景暗く
  overlay.classList.toggle("active");

});

// 背景クリックで閉じる
overlay.addEventListener("click", () => {

  hamburger.classList.remove("active");

  menu.classList.remove("active");

  overlay.classList.remove("active");

});

// PICK UP ドラッグスクロール

// 要素取得
const slider = document.querySelector(".pickup-slider");

const track = document.querySelector(".pickup-track");

// 中身を複製
track.innerHTML += track.innerHTML;

// ドラッグ判定
let isDragging = false;

// 元画像1セット分
let loopWidth;

// マウス位置
let currentX = 0;

// 読み込み後

window.addEventListener("load", () => {

  loopWidth = track.scrollWidth / 2;

  // 真ん中スタート
  slider.scrollLeft = loopWidth / 2;

});

// マウス押した時

slider.addEventListener("mousedown", () => {

  isDragging = true;

  slider.classList.add("dragging");

});

// マウス離した時

document.addEventListener("mouseup", () => {

  isDragging = false;

  slider.classList.remove("dragging");

});

// マウス移動量取得

slider.addEventListener("mousemove", (e) => {

  if(!isDragging) return;

  e.preventDefault();

  currentX = e.movementX;

});

// 滑らかスクロール

function smoothScroll(){

  slider.scrollLeft -= currentX * 0.9;

  currentX *= 0.85;

  // シームレス無限
  if(slider.scrollLeft >= loopWidth){

    slider.scrollLeft -= loopWidth / 2;

  }

  if(slider.scrollLeft <= 0){

    slider.scrollLeft += loopWidth / 2;

  }

  requestAnimationFrame(smoothScroll);

}

smoothScroll();


// FEATURE フェードイン

const cards = document.querySelectorAll(".card");

function fadeInCards(){

  cards.forEach((card) => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100){

      card.classList.add("show");

    }

  });

}

// スクロール時
window.addEventListener("scroll", fadeInCards);

// 読み込み時
window.addEventListener("load", fadeInCards);

fadeInCards();