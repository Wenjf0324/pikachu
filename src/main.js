import string from "./css.js";

const player = {
  n: 1,
  id: undefined,
  time: 25,
  ui: {
    text: document.querySelector("#text"),
    styleTag: document.querySelector("#styleTag"),
    buttons: document.querySelectorAll('#buttons > button')
  },
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  init: () => {
    player.ui.text.innerHTML = string.substr(0, player.n);
    player.ui.styleTag.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      //判断key是否为自身的属性，排除继承的属性
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key];
        const currentBtn = document.querySelector(key)
        currentBtn.onclick =()=>{
          player.selected(currentBtn)
          player[value](); //以value作为player的属性去取player对象对应的player.pause/player.play...
        }
      }
    }
  },
  selected: (selectedButton) => {
    for(let i = 0; i< player.ui.buttons.length; i++){
      const current = player.ui.buttons[i]
      if(current.className === 'active'){
        current.classList.remove('active')
      }
    }
    selectedButton.classList.add('active')
  },
  run: () => {
    player.n += 1;
    if (player.n+1 >= string.length) {
      window.clearInterval(player.id);
    }
    player.ui.text.innerText = string.substr(0, player.n);
    player.ui.styleTag.innerHTML = string.substr(0, player.n);
    player.ui.text.scrollTop = player.ui.text.scrollHeight; //控制滚动条在最下面
  },
  pause: () => {
    window.clearInterval(player.id); 
    
  },
  play: () => {
    window.clearInterval(player.id);
    player.id = setInterval(player.run, player.time);
  },
  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 25;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
