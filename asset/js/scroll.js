let th = document.querySelector("main > div").clientHeight;
let cm = _main.clientHeight;
th = th - cm;
let line = document.getElementById("line");
let svgbar = document.getElementById("svgbar");
let _section = document.querySelectorAll("main > div > section");
let _secH = 0;
let _span = document.querySelectorAll("main > #scrollfix > span");
let _spanH = 0;

//
//
//
_main.addEventListener("scroll", (e) => {
 let st = e.target.scrollTop;
  // console.log(st);
  line.style.width = (st * 100) / th + "%";
  svgbar.style.display = "flex";
  if (st > 1 && st < _section[0].getAttribute("data-height")) {
    svgbar.style.top = _spanH / 2 + "px";
  } else if (
    st > _section[0].getAttribute("data-height") &&
    st < _section[2].getAttribute("data-height")
  ) {
    svgbar.style.top = _spanH * 1.5 + "px";
  } else if (
    st > _section[2].getAttribute("data-height") &&
    st < _section[3].getAttribute("data-height")
  ) {
    svgbar.style.top = _spanH * 2.5 + "px";
  } else if (st > _section[3].getAttribute("data-height")) {
    svgbar.style.top = _spanH * 3.5 + "px";
  } else {
    svgbar.style.display = "none";
  }
});

_section.forEach((val, index) => {
  _secH += val.clientHeight;

  // console.log("im x " + index + ": " + _secH);
  val.setAttribute("data-height", _secH);
  let _x = val.getAttribute("data-height");
  console.log(_x);
});

_span.forEach((i, index) => {
  _spanH = i.clientHeight;
  i.addEventListener("click", () => {
    svgbar.style.display = "flex";
    console.log(index);
    switch (index) {
      case 0:
        s0()
        break;
      case 1:
        s1()
        break;
      case 2:
        s2()
        break;
      case 3:
        s3();
        break;
      default:
        break;
    }
  });
});

function s0() {
  svgbar.style.top = _spanH / 2 + "px";
  _main.scrollTop = 0
}
function s1() {
  svgbar.style.top = _spanH * 1.5 + "px";
  _main.scrollTop = _section[1].getAttribute("data-height");
}
function s2() {
  svgbar.style.top = _spanH * 2.5 + "px";
  _main.scrollTop = _section[3].getAttribute("data-height");
}
function s3() {
  svgbar.style.top = _spanH * 3.5 + "px";
  _main.scrollTop = _section[4].getAttribute("data-height");
}
