const string = `/* 你好，我是温金凤
 * 接下来我演示一下如何画一只皮卡丘
 * 首先，需要准备皮卡丘的皮肤
 */
.skin {
    background: #fee433;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose {
    width: 0;
    height: 0;
    border: 10px solid #000;
    border-color: #000 transparent transparent;
}
.nose:before {
    content: "";
    display: block;
    width: 20px;
    height: 5px;
    background: #000;
    border-radius: 10px / 5px 5px 0px 0px;
}
/* 
 * 接下来，画皮卡丘的眼睛
 */
.eye {
    background: #2e2e2e;
    border: 2px solid #000;
    width: 50px;
    height: 50px;
    border-radius: 50%;
} 
/*
 * 眼睛里面的珠子
 */
.eye:before {
    content: "";
    display: block;
    border: 2px solid #000;
    background: #fff;
    width: 26px;
    height: 26px;
    border-radius: 50%;
}
/*
 * 左眼
 */
.eye.left {
    transform: translateX(-105px);
}
/*
 * 右眼
 */
.eye.right {
    transform: translateX(105px);
}
/*
 * 接下来，画皮卡丘的嘴巴
 *
 * 上嘴唇
 */
.mouth .up .lip {
    border: 2px solid #000;
    height: 25px;
    width: 80px;
    background: #fee433;
}
.mouth .up .lip.left {
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg);
}
.mouth .up .lip.right {
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg);
}
/*
 * 下嘴唇
 */
.mouth .down .yuan1 {
    width: 150px;
    height: 1000px;
    border: 2px solid #000;
    border-radius: 75px / 350px;
    background: #9b000a;
    overflow: hidden;
}  
/*
 * 小舌头
 */
.mouth .down .yuan1:after {
    width: 200px;
    height: 300px;
    background: #ff485f;
    border-radius: 100px / 150px;
} 
/*
 * 然后，画皮卡丘的脸
 */
.face {
    width: 68px;
    height: 68px;
    background: #f00;
    border: 2px solid #000;
    border-radius: 50%;
}  
/* 
 * 将脸放到正确的位置
 */
.face.left {
    transform: translate(-140px);
}
.face.right {
    transform: translate(140px);
}  
/*
 * 好了，这只皮卡丘送给你
 */`;

export default string;