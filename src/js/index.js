import {
  $,
  init,
  onClick,
  onClickHash,
  onReady,
  vAnim,
  vAnimList,
  vAnimRun,
} from "../../core/cfjs";

init({
  loadedAnimAfter: ".header",
  onScrollThrottle: 10,
});
onReady(() => {
  vAnimRun(".footer", () => vAnimRun("#hero"));
});

onClick("header-burger", () => {
  bc.toggle("header-menu-active");
});

onClickHash(() => {
  bc.remove("header-menu-active");
});

vAnim(".anim", (el) => el.classList.add("run"));
vAnimList("#about ul");
vAnimList("#prices ul");
vAnimList("#for-who ul");
vAnimList("#services ul");


// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav');
// burger.addEventListener('click', () => {
//   burger.classList.toggle('active');
//   nav.classList.toggle('open');
// });
