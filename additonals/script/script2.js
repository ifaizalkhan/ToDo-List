let darkMode = false;
function toggleMode() {
    let lc = document.getElementsByClassName("list-container");
    let lh = document.getElementsByClassName("list-heading");
    let td = document.querySelector(".add-card");
    let to = document.querySelector("#to-do");
    let ip = document.querySelector("#in-progress");
    let co = document.querySelector("#completed");
    let mh = document.querySelector(".main-heading");
    let sw=document.querySelector(".stats1");
    let sw2=document.querySelector(".stats2");
    to.classList.toggle("special-class1");
    ip.classList.toggle("special-class2");
    co.classList.toggle("special-class3");
  
    if (!darkMode) {
      document.body.style.backgroundColor = "white";
      document.body.style.backgroundImage = "radial-gradient(circle at center top, rgb(185 197 199), rgb(105 113 147) 75%)";
      td.style.backgroundColor = "rgb(0 0 0 / 26%)";
      td.children[0].style.color = "black";
      for (let z = 0; z < lc.length; z++) {
        lc[z].style.backgroundColor = "#100f2938";
        lh[z].style.color = "#27007d";
      }
      td.children[1].style.backgroundColor = "#6907ab";
      mh.style.color = "#200367";
      sw.style.zIndex="2";
      sw2.style.zIndex="1";
      darkMode = !darkMode;
    }
  
    else {
      document.body.style.backgroundColor = "black";
      document.body.style.backgroundImage ="radial-gradient(circle at top,#362979,#000000 80%)";
      td.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
      td.children[0].style.color = "white";
      for (let z = 0; z < lc.length; z++) {
        lc[z].style.backgroundColor = "#796fd41f";
        lh[z].style.color = "#856fb5";
      }
      td.children[1].style.backgroundColor = "#aa34f9";
      mh.style.color = "white";
      sw2.style.zIndex="2"
      sw.style.zIndex="1";
      darkMode = !darkMode;
    }
  }