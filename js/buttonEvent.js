function closeDIV(){
    var b = document.getElementById("curtain");
    var c = document.getElementById("btnExpand");
    $(b).animate({
        left:'120%',
        top:'15px',
        height:'0px',
        width:'0px',
        opacity:'0'
    });
    $(c).fadeIn();
}

function openDIV(){
    var b = document.getElementById("curtain");
    var c = document.getElementById("btnExpand");
    $(b).animate({
        left:'25%',
        top:'15%',
        height:'70%',
        width:'50%',
        opacity:'0.5'
    });
    $(c).fadeOut();
}