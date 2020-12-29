import string from "./css.js"; //导入

let string2 = '';

const player = {
  id: undefined,
  time: 40,
  //界面ui
  ui: {
    text: document.querySelector("#text"),
    html: document.querySelector("#html"),
  },
  //哈希
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast",
  },
  n: 0,
  init: () => {
    player.ui.text.innerHTML = string.substr(0, player.n);
    player.ui.html.innerHTML = string.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: () => {
    for (let key in player.events) {
      //判断key是否为自身的属性，排除继承的属性
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]; //pause / play / slow
        document.querySelector(key).onclick = player[value];
        //以 value 作为 player 的属性去取 player 对应的 player.pause / player.play...
      }
    }
  },
  run: () => {
    player.n += 1;
    if (player.n+1 >= string.length) {
      //取消 setInterval() 设置的定时任务。
      window.clearInterval(player.id);
    }
    if (string[player.n] === "\n") {
      //如果是回车，就不照搬
      string2 += "<br>";
    }else if(string[player.n]===" "){
        string2+="&nbsp;";
    }else {
      //如果不是回车，就照搬
      string2 += string[player.n];
    }
    player.ui.text.innerHTML = string2;
    //console.log(n + ":" + string.substr(0, player.n));
    //player.ui.text.innerText = string.substr(0, player.n);
    player.ui.html.innerHTML = string.substr(0, player.n);
    player.ui.text.scrollTop = player.ui.text.scrollHeight; //控制滚动条在最下面
  },
  pause: () => {
    window.clearInterval(player.id);
  },
  play: () => {
    player.id = setInterval(player.run, player.time);
  },
  slow: () => {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: () => {
    player.pause();
    player.time = 40;
    player.play();
  },
  fast: () => {
    player.pause();
    player.time = 0;
    player.play();
  },
};

player.init();
