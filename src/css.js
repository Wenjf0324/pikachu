const string = ` /* 你好，我是温金凤
 * 接下来我演示一下如何画一只皮卡丘
 * 首先，需要准备皮卡丘的皮肤
 */
.skin {
    background: #ffe432;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose {
    width: 0px;
    height: 0px;
    border: 10px solid #000;
    border-color: #000 transparent transparent;
    border-bottom: none;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
    z-index: 10;
}
.yuan {
    position: absolute;
    top: -15px;
    left: -10px;
    width: 20px;
    height: 5px;
    background: #000;
    border-radius: 10px / 5px 5px 0px 0px;
}
/* 
 * 接下来，画皮卡丘的眼睛
 */
.eye {
    width: 49px;
    height: 49px;
    background: #2e2e2e;
    border: 2px solid #000;
    position: absolute;
    left: 50%;
    top: 120px;
    margin-left: -32px;
    border-radius: 50%;
} 
/*
 * 眼睛里面的珠子
 */
.eye::before {
    content: "";
    display: block;
    border: 2px solid #000;
    width: 24px;
    height: 24px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: 4px;
    top: 0px;
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
.mouth .upperLip .lip {
    height: 25px;
    width: 80px;
    border: 2px solid #000;
    position: absolute;
    background: #ffe432;
}
.mouth .upperLip .lip.left {
    right: 25%;
    border-bottom-left-radius: 40px 25px;
    border-top: none;
    border-right: none;
    transform: rotate(-20deg) translateX(-54px);
}
.mouth .upperLip .lip.right {
    left: 25%;
    border-bottom-right-radius: 40px 25px;
    border-top: none;
    border-left: none;
    transform: rotate(20deg) translateX(54px);
}
/*
 * 下嘴唇
 */
.mouth .down {
    height: 115px;
    position: absolute;
    top: 8px;
    width: 100%;
    overflow: hidden;
}
.mouth .down .yuan1 {
    border: 2px solid #000;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px / 350px;
    background: #9b000a;
    overflow: hidden;
}  
/*
 * 小舌头
 */
.mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    background: #ff485f;
    position: absolute;
    bottom: -210px;
    left: 50%;
    margin-left: -100px;
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
    position: absolute;
    left: 50%;
    top: 200px;
    margin-left: -38px;
    z-index: 3;
}  
/* 
 * 将脸放到正确的位置
 */
.face.left {
    transform: translate(-140px);
    border-radius: 50%;
}
.face.right {
    transform: translate(140px);
    border-radius: 50%;
}  
/*
 * 好了，这只皮卡丘送给你
 */`;
export default string; //导出
