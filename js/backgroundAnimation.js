var imgIndex;

var tran = 1;


var number=[1085];
for(var z = 0;z<1085;z++){
    number[z] = 0;
}

function stopShowPic(){
    tran=3;
    var btnStop=document.getElementById("stopShowBG");
    $(btnStop).hide();
    var btnStart=document.getElementById("startShowBG");
    $(btnStart).show();
}

function startShowPic(){
    tran=1;
    var btnStart=document.getElementById("startShowBG");
    $(btnStart).hide();
     var btnStop=document.getElementById("stopShowBG");
    $(btnStop).show();
}

function beginShowPic(){
    var a = document.getElementById("background-img");
    var i = Math.floor(Math.random() * 1085 );
    number[i]++;
    $.ajax({
        url:"https://unsplash.it/1920/1080/?image=" + i,
        method:"GET",
        success:function(){
            a.setAttribute("src","https://unsplash.it/1920/1080/?image=" + i);
            $(a).fadeIn(3000);
            var c = document.getElementById("curtain");
            $(c).fadeIn(1000);
            var d = document.getElementById("middle1");
            $(d).fadeIn(1500);
            setTimeout("changeImg()",10000);
        },
        error: function(){
            beginShowPic();
        }
    });
}
    function changeImg(){
        if(tran === 1){
            var bg = document.getElementById("bg");
            var i = Math.floor(Math.random() * 1085 );
            number[i]++;
            $.ajax({
                url:"https://unsplash.it/1920/1080/?image=" + i,
                method:"GET",
                success: function(){
                    changeImgStyle("https://unsplash.it/1920/1080/?image=" + i);
                    setTimeout("changeImg()",10000);
                },
                error: function(){
                        changeImg();
                }
            });
        }else{
            setTimeout("changeImg()",10000);
        }
    }
    
    function changeImgStyle(imgUrl){
        var j = ~~(Math.random() * 9);
        var bg = document.getElementById("background-img");
        $(bg).hide();
        bg.setAttribute("src",imgUrl);
        if(j === 0){//fade in
            $(bg).fadeIn(2000);
        }else if(j === 1){//right -> left
            bg.setAttribute("style","left:100%;top:0%");
            $(bg).animate({
                left: "0%"
            },2000);
        }else if(j === 2){//left -> right
            bg.setAttribute("style","left:-100%;top:0%");
            $(bg).animate({
                left: "0%"
            },2000);
        }else if(j === 3){//top -> buttom
            bg.setAttribute("style","left:0%;top:-100%");
            $(bg).animate({
                top: "0%"
            },2000);
        }else if(j === 4){//buttom -> top
            bg.setAttribute("style","left:0%;top:100%");
            $(bg).animate({
                top: "0%"
            },2000);
        }else if(j === 5){//lefttop -> rightbuttom
            bg.setAttribute("style","left:-100%;top:-100%");
            $(bg).animate({
                top: "0%",
                left:"0%"
            },2000);
        }else if(j === 6){//leftbuttom -> righttop
            bg.setAttribute("style","left:-100%;top:100%");
            $(bg).animate({
                top: "0%",
                left:"0%"
            },2000);
        }else if(j === 7){//rightbuttom -> lefttop
            bg.setAttribute("style","left:100%;top:100%");
            $(bg).animate({
                top: "0%",
                left:"0%"
            },2000);
        }else if(j === 8){//righttop -> leftbuttom
            bg.setAttribute("style","left:100%;top:-100%");
            $(bg).animate({
                top: "0%",
                left:"0%"
            },2000);
        }
        console.log(j);
    }
    function printNumber(){
        for(var p = 0 ; p < 1085;p++){
            if(number[p] > 0){
                console.log(p);
            }
        }
    }
