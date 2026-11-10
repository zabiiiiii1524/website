/* =========================
   ハンバーガーメニュー
========================= */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const menuClose = document.getElementById("menuClose");


menuButton.addEventListener("click", function () {

    menu.classList.add("open");

});


menuClose.addEventListener("click", function () {

    menu.classList.remove("open");

});


/* メニュー内のリンクをクリックしたら閉じる */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("open");

    });

});



/* =========================
   メイン画像スライダー
========================= */

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextButton = document.getElementById("next");
const prevButton = document.getElementById("prev");

let currentSlide = 0;


/* スライド切り替え */

function showSlide(index) {

    slides.forEach(function (slide) {

        slide.classList.remove("active");

    });


    dots.forEach(function (dot) {

        dot.classList.remove("active");

    });


    slides[index].classList.add("active");
    dots[index].classList.add("active");

    currentSlide = index;

}


/* 次 */

function nextSlide() {

    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide(currentSlide);

}


/* 前 */

function prevSlide() {

    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);

}


nextButton.addEventListener("click", nextSlide);

prevButton.addEventListener("click", prevSlide);


/* 自動スライド */

setInterval(function () {

    nextSlide();

}, 5000);


/* ドット */

dots.forEach(function (dot, index) {

    dot.addEventListener("click", function () {

        showSlide(index);

    });

});



/* =========================
   レストラン絞り込み
========================= */

const categoryButtons =
    document.querySelectorAll(".category");

const restaurantCards =
    document.querySelectorAll(".restaurant-card");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        /* 選択中のカテゴリーを変更 */

        categoryButtons.forEach(function (item) {

            item.classList.remove("active");

        });

        button.classList.add("active");


        const category =
            button.dataset.category;


        /* カードを絞り込み */

        restaurantCards.forEach(function (card) {

            const categories =
                card.dataset.category;


            if (
                category === "all" ||
                categories.includes(category)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});



/* =========================
   キーワード検索
========================= */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", function () {

    const keyword =
        searchInput.value.toLowerCase();


    restaurantCards.forEach(function (card) {

        const name =
            card.dataset.name.toLowerCase();


        const text =
            card.textContent.toLowerCase();


        if (
            name.includes(keyword) ||
            text.includes(keyword)
        ) 
        {

            card.style.display = "block";

        } else {

            card.style.display = "none";
            
        }

    });

});