/** @format */

const d = document;

const hamburgerMenu = d.querySelector("#hamburger-menu");
const nav = d.querySelector("#navbar");
const closeBtn = d.querySelector("#close-btn");
const featureBtn = d.querySelector("#features-btn");
const companyBtn = d.querySelector("#company-btn");
const featureUl = d.querySelector("#features-ul");
const companyUl = d.querySelector("#company-ul");
const featureBtnArrow = d.querySelector("#features-btn-arrow");
const companyBtnArrow = d.querySelector("#company-btn-arrow");

hamburgerMenu.addEventListener("click", () => {
  nav.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  const screenSize = window.innerWidth;

  if (screenSize >= 768) {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
});

featureBtn.addEventListener("click", () => {
  featureUl.style.display =
    featureUl.style.display === "block" ? "none" : "block";

  featureBtnArrow.style.transition = "transform 0.3s ease";

  featureBtnArrow.style.transform = featureBtnArrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
});

companyBtn.addEventListener("click", () => {
  companyUl.style.display =
    companyUl.style.display === "block" ? "none" : "block";

  companyBtnArrow.style.transition = "transform 0.3s ease";

  companyBtnArrow.style.transform = companyBtnArrow.style.transform === "rotate(180deg)" ? "rotate(0deg)" : "rotate(180deg)";
});
