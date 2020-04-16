document.onreadystatechange = function() {
        if (document.readyState == "complete") {
            $("#loading").fadeOut(100);
            $(".win").fadeOut();
            // doOnload();
        }
    }
    var num = document.getElementsByTagName('img').length;
        var img = document.getElementsByTagName("img");
        // 存储图片加载到的位置，避免每次都从第一张图片开始遍历
        var n = 0;
        // 页面载入完毕加载可视区域内的图片
        lazyload();                                
        window.onscroll = lazyload;
        // 监听页面滚动事件
        function lazyload() {
            // 可见区域高度
            var seeHeight = document.documentElement.clientHeight;
            // 滚动条距离顶部高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            for (var i = n; i < num; i++) {
                if (img[i].offsetTop < seeHeight + scrollTop) {
                    if (img[i].getAttribute("src") == "http://pic.yupoo.com/fanyu24/890e6bf8/b50cd725.png") {
                        img[i].src = img[i].getAttribute("data-src");
                    }
                    n = i + 1;
                }
            }
        }
    function doOnload() {
        setTimeout("downloadFile()",1000);
    }
    function downloadFile() {
        downloadCss("https://layu23.github.io/layu23.github.io/lib/base.css");
        downloadJS("https://layu23.github.io/layu23.github.io/lib/yu.js");
   }
   
//    function downloadCss(url) {
//        var ele = document.createElement('link');
//        ele.rel = "stylesheet";
//        ele.type = "text/css";
//        ele.href = url;

//        document.body.appendChild(ele);
//    }
   
//    function downloadJS(url) {
//        var ele = document.createElement('script');
//        ele.src = url;
//        document.body.appendChild(ele);
//    }
    //跳转效果
$(document).ready(function() {
    $(".goAbout").click(function() {
        $("html, body").animate({
            scrollTop: $("#about").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $("#goContact").click(function() {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $(".goLike").click(function() {
        $("html, body").animate({
            scrollTop: $("#like").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });

    function goTop() {
        $("html, body").animate({
            scrollTop: $("body").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    }

    $(".goTop").click(goTop);
    $(".goHome").click(goTop);

});

//按钮特效喜欢
$(".showMore").hover(function() {
    $(this).html("<span class='glyphicon glyphicon-heart'></span>");
});
$(".showMore").mouseleave(function() {
    $(this).html("MORE");
});
//按钮特效简历
$(".showMe").hover(function() {
    $(this).html("<span class='glyphicon glyphicon-user'></span>");
});
$(".showMe").mouseleave(function() {
    $(this).html("我的简历");
});
$(function(){
    $('[data-toggle="tooltip"]').tooltip()
})
//学习页面按钮
$(".study-button").click(function (){
    var studyCourse = $(this).data("studyCourse");
    if(studyCourse=='vue'){
        $('.study-course>div').css({'background-color':'#FFCA0A','color':'#000'});
        $('.study-course>div').html('Vue');
    }else if(studyCourse=='css'){
        $('.study-course>div').css({'background-color':'#DE8100','color':'#fff'});
        $('.study-course>div').html('css');
    }else if(studyCourse=='js'){
        $('.study-course>div').css({'background-color':'#EDE387','color':'#fff'});
        $('.study-course>div').html('JavaScript');
    }
})

//鼠标滚轮事件
window.onscroll=function (){
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    if(scrollTop>600){
        $('.goTop').fadeIn('slow');
    }else{
        $('.goTop').fadeOut('slow');
    }
    if(scrollTop>300){
        $('.likesShow').css({'opacity':'1','transform':'translateY(-20px)'});
        $('.yuSay').css({'opacity':'1','transform':'translateY(-20px)'});
    }
    if(scrollTop>800){
        $('.contactMe').css({'opacity':'1','transform':'translateY(-20px)'});
    }
    if(scrollTop>50){
        $('.likesMenu').css({'background':'#0D1740','border-bottom-left-radius':'20px','border-bottom-right-radius':'20px'})
    }
    if(scrollTop<50){
        $('.likesMenu').css({'background':'#fff','border-bottom-left-radius':'0','border-bottom-right-radius':'0'})
    }
}

//喜欢页面切换效果
function likesChange(index){
    //跳转最上面
    
    var lis = $('.likesMenu>li');
    lis.each(function(){
        $(this).removeClass('active');
    })
    var see = document.getElementsByClassName('want-see-you');
    $('.want-see-you').each(function(){
        $(this).css({'display':'none'});
    })
    see[index].style.display = 'block';
    $("html, body").animate({
        scrollTop: $("body").offset().top-40
    }, {
        duration: 500,
        easing: "swing"
    });
    
}

//定时改变轮播图文字
    onload = changeImgText();
    var times;
    function changeImgText(){
        times = setInterval(function(){
            $('.imgText').each(function (){
                if($(this).css('display') != 'none'){
                    $(this).fadeOut('slow');
                }else{
                    $(this).fadeIn('slow');
                }
            });
        },1000)
    }
    $('.imgText').mouseover(function(){
        clearInterval(times);
    }).mouseout(function(){
        changeImgText();
    });

    
