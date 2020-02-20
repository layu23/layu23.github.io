document.onreadystatechange = function() {
        if (document.readyState == "complete") {
            $("#loading").css("display", "none");
        }
    }
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
    $("#goLike").click(function() {
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
//按钮特效
$(".showMore").hover(function() {
    $(this).html("<span class='glyphicon glyphicon-eye-open'></span>");
});
$(".showMore").mouseleave(function() {
    $(this).html("MORE");
});
//按钮特效
$(".showMe").hover(function() {
    $(this).html("<span class='glyphicon glyphicon-eye-open'></span>");
});
$(".showMe").mouseleave(function() {
    $(this).html("我的简历");
});
//二维码
var flagImg = true;
$(".btn-success").click(function() {
    if (flagImg) {
        $("#twoCode").attr("hidden", true);
        $("#qqCode").removeAttr("hidden");
        flagImg = false;
    } else {
        $("#qqCode").attr("hidden", true);
        $("#twoCode").removeAttr('hidden');
        flagImg = true;
    }
});

// function doOnload() {
//     setTimeout(downloadFile(), 1000);
// }
// window.onload = doOnload;

// function downloadFile() {
//     downloadCss("https://layu23.github.io/layu23.github.io/lib/base.css");
//     downloadJS("https://layu23.github.io/layu23.github.io/lib/yu.js");
// }

// function downloadCss(url) {
//     var ele = document.createElement('link');
//     ele.rel = "stylesheet";
//     ele.type = "text/css";
//     ele.href = url;
//     document.body.appendChild(ele);
// }

// function downloadJS(url) {
//     var ele = document.createElement('script');
//     ele.src = url;
//     document.body.appendChild(ele);
// }