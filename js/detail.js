/* =========================
   ハンバーガーメニュー
========================= */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");
const menuClose = document.getElementById("menuClose");

if (menuButton && menu) {
    menuButton.addEventListener("click", function () {
        menu.classList.add("open");
    });
}

if (menuClose && menu) {
    menuClose.addEventListener("click", function () {
        menu.classList.remove("open");
    });
}


/* =========================
   メニューリンクをクリックしたら閉じる
========================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        if (menu) {
            menu.classList.remove("open");
        }
    });
});


/* =========================
   お気に入り
========================= */

// URLから店舗IDを取得
const params = new URLSearchParams(window.location.search);
const restaurantId = params.get("id") || "1";

// お気に入りボタン
const favoriteButton = document.getElementById("favoriteButton");

if (favoriteButton) {

    // 店舗ごとの保存キー
    const favoriteKey = "aniva-favorite-" + restaurantId;

    // 保存されているお気に入り状態を確認
    const isFavorite = localStorage.getItem(favoriteKey);

    if (isFavorite === "true") {
        favoriteButton.classList.add("is-favorite");
        favoriteButton.textContent = "♥";
    }


    // お気に入りボタンをクリック
    favoriteButton.addEventListener("click", function () {

        const currentlyFavorite =
            favoriteButton.classList.contains("is-favorite");

        if (currentlyFavorite) {

            // お気に入り解除
            favoriteButton.classList.remove("is-favorite");
            favoriteButton.textContent = "♡";

            localStorage.removeItem(favoriteKey);

        } else {

            // お気に入り登録
            favoriteButton.classList.add("is-favorite");
            favoriteButton.textContent = "♥";

            localStorage.setItem(favoriteKey, "true");
        }

    });
}