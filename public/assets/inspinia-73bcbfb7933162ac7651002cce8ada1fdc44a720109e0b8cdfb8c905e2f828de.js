function localStorageSupport(){return"localStorage"in window&&null!==window.localStorage}function animationHover(e,o){e=$(e),e.hover(function(){e.addClass("animated "+o)},function(){window.setTimeout(function(){e.removeClass("animated "+o)},2e3)})}function SmoothlyMenu(){!$("body").hasClass("mini-navbar")||$("body").hasClass("body-small")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},200)):$("body").hasClass("fixed-sidebar")?($("#side-menu").hide(),setTimeout(function(){$("#side-menu").fadeIn(400)},100)):$("#side-menu").removeAttr("style")}function WinMove(){$("[class*=col]").sortable({handle:".ibox-title",connectWith:"[class*=col]",tolerance:"pointer",forcePlaceholderSize:!0,opacity:.8}).disableSelection()}$(document).ready(function(){function e(){var e=$("body > #wrapper").height()-61;$(".sidebar-panel").css("min-height",e+"px");var o=$("nav.navbar-default").height(),a=$("#page-wrapper").height();o>a&&$("#page-wrapper").css("min-height",o+"px"),o<a&&$("#page-wrapper").css("min-height",$(window).height()+"px"),$("body").hasClass("fixed-nav")&&(o>a?$("#page-wrapper").css("min-height",o+"px"):$("#page-wrapper").css("min-height",$(window).height()-60+"px"))}$(this).width()<769?$("body").addClass("body-small"):$("body").removeClass("body-small"),$("#side-menu").metisMenu(),$(".collapse-link").on("click",function(){var e=$(this).closest("div.ibox"),o=$(this).find("i");e.children(".ibox-content").slideToggle(200),o.toggleClass("fa-chevron-up").toggleClass("fa-chevron-down"),e.toggleClass("").toggleClass("border-bottom"),setTimeout(function(){e.resize(),e.find("[id^=map-]").resize()},50)}),$(".close-link").on("click",function(){$(this).closest("div.ibox").remove()}),$(".fullscreen-link").on("click",function(){var e=$(this).closest("div.ibox"),o=$(this).find("i");$("body").toggleClass("fullscreen-ibox-mode"),o.toggleClass("fa-expand").toggleClass("fa-compress"),e.toggleClass("fullscreen"),setTimeout(function(){$(window).trigger("resize")},100)}),$(".close-canvas-menu").on("click",function(){$("body").toggleClass("mini-navbar"),SmoothlyMenu()}),$("body.canvas-menu .sidebar-collapse").slimScroll({height:"100%",railOpacity:.9}),$(".right-sidebar-toggle").on("click",function(){$("#right-sidebar").toggleClass("sidebar-open")}),$(".sidebar-container").slimScroll({height:"100%",railOpacity:.4,wheelStep:10}),$(".open-small-chat").on("click",function(){$(this).children().toggleClass("fa-comments").toggleClass("fa-remove"),$(".small-chat-box").toggleClass("active")}),$(".small-chat-box .content").slimScroll({height:"234px",railOpacity:.4}),$(".check-link").on("click",function(){var e=$(this).find("i"),o=$(this).next("span");return e.toggleClass("fa-check-square").toggleClass("fa-square-o"),o.toggleClass("todo-completed"),!1}),$(".navbar-minimalize").on("click",function(e){e.preventDefault(),$("body").toggleClass("mini-navbar"),SmoothlyMenu()}),$(".tooltip-demo").tooltip({selector:"[data-toggle=tooltip]",container:"body"}),e(),$(window).bind("load",function(){$("body").hasClass("fixed-sidebar")&&$(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.9})}),$(window).scroll(function(){$(window).scrollTop()>0&&!$("body").hasClass("fixed-nav")?$("#right-sidebar").addClass("sidebar-top"):$("#right-sidebar").removeClass("sidebar-top")}),$(window).bind("load resize scroll",function(){$("body").hasClass("body-small")||e()}),$("[data-toggle=popover]").popover(),$(".full-height-scroll").slimscroll({height:"100%"})}),$(window).bind("resize",function(){$(this).width()<769?$("body").addClass("body-small"):$("body").removeClass("body-small")}),$(document).ready(function(){if(localStorageSupport()){var e=localStorage.getItem("collapse_menu"),o=localStorage.getItem("fixedsidebar"),a=localStorage.getItem("fixednavbar"),i=localStorage.getItem("boxedlayout"),l=localStorage.getItem("fixedfooter"),s=$("body");"on"==o&&(s.addClass("fixed-sidebar"),$(".sidebar-collapse").slimScroll({height:"100%",railOpacity:.9})),"on"==e&&(s.hasClass("fixed-sidebar"),s.hasClass("body-small")||s.addClass("mini-navbar")),"on"==a&&($(".navbar-static-top").removeClass("navbar-static-top").addClass("navbar-fixed-top"),s.addClass("fixed-nav")),"on"==i&&s.addClass("boxed-layout"),"on"==l&&$(".footer").addClass("fixed")}});