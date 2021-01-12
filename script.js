const menu = document.getElementById("menu");
const title = document.getElementById("title");
const links = document.querySelectorAll(".link");
// const nav = menu.querySelectorAll('ul li')

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const wrapper = document.querySelector(".wrapper");

sign_up_btn.addEventListener("click", () => {
  wrapper.classList.add("sign-up-mode");
  setTimeout(() => {
    title.classList.add("change");
  }, 1000);
  setTimeout(() => {
    links.forEach(link => link.classList.add("change"));
  }, 870);
});

sign_in_btn.addEventListener("click", () => {
  wrapper.classList.remove("sign-up-mode");
  setTimeout(() => {
    title.classList.remove("change");
  }, 870);
  setTimeout(() => {
    links.forEach(link => link.classList.remove("change"));
  }, 1000);
});
