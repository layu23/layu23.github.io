document.onreadystatechange = function() {
        if (document.readyState == "complete") {
            $("#loading").css("display", "none");
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
//     function doOnload() {
//         setTimeout("downloadFile()",1000);
//     }
//     function downloadFile() {
//         downloadCss("https://layu23.github.io/layu23.github.io/lib/base.css");
//         downloadJS("https://layu23.github.io/layu23.github.io/lib/yu.js");
//    }
   
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
    $(".goTop").click(function() {
        $("html, body").animate({
            scrollTop: $("body").offset().top
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    })

});
//技能信息
$(".skills>li>div").mouseenter(function() {
    var skillsNum = $(this).data("skillsNum");
    $(this).html(skillsNum);
})
$(".skills>li>div").mouseleave(function() {
    var skillsName = $(this).data("skillsName");
    $(this).html(skillsName);
});
//按钮特效喜欢
$(".showMore").hover(function() {
    $(this).html("<span class='glyphicon glyphicon-eye-open'></span>");
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
//二维码
$(".change").click(function() {
    if ($("#qqCode").is(":hidden")) {
        $("#twoCode").attr("hidden", true);
        $("#qqCode").removeAttr("hidden");
    } else {
        $("#qqCode").attr("hidden", true);
        $("#twoCode").removeAttr('hidden');
    }
});
//学习页面按钮
$(".study-button").click(function (){
    var studyCourse = $(this).data("studyCourse");
    if(studyCourse=='html'){
        $('.study-course>div').css({'background-color':'#FFCA0A','color':'#000'});
        $('.study-course>div').html('&lt;html&gt;');
    }else if(studyCourse=='css'){
        $('.study-course>div').css({'background-color':'#DE8100','color':'#fff'});
        $('.study-course>div').html('css');
    }else if(studyCourse=='js'){
        $('.study-course>div').css({'background-color':'#EDE387','color':'#fff'});
        $('.study-course>div').html('JavaScript');
    }else{
        $('.study-course>div').css({'background-color':'#3B200C','color':'#fff'});
        $('.study-course>div').html('java');
    }
})

