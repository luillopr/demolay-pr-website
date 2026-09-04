const btn = document.getElementById("lang");
let lang = "es";
btn.addEventListener("click", () => {
 lang = lang === "es" ? "en" : "es";
 document.documentElement.lang = lang;
 document.querySelectorAll("[data-es]").forEach((el) => {
   el.textContent = el.dataset[lang];
 });
 btn.textContent = lang === "es" ? "EN" : "ES";
});

const menu = document.querySelector(".menu");
const nav = document.querySelector(".site-header nav");
menu.addEventListener("click", () => {
 nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach((a) => {
 a.addEventListener("click", () => {
   nav.classList.remove("open");
 });
});
