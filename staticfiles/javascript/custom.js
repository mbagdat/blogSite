// The source of demo preview has been stripped and compressed for security reasons.
jQuery(document).ready(function (b) {
    jQuery("a.myproject").fancybox();
    jQuery("a.myvideo").fancybox({
        width: "65%",
        height: "80%",
        autoScale: true,
        type: "iframe"
    });
    var a = jQuery(".portfolio").clone();
    jQuery(".filter a").click(function (f) {
        jQuery(".filter li").removeClass("current");
        var c = jQuery(this).parent().attr("class");
        if (c == "all") {
            var d = a.find("li")
        } else {
            var d = a.find("li[data-type~=" + c + "]")
        }
        jQuery(".portfolio").quicksand(d, {
            duration: 500,
            easing: "easeInOutQuad",
            enhancement: function () {
                jQuery("a.myproject").fancybox();
                jQuery("a.myvideo").fancybox({
                    width: "65%",
                    height: "80%",
                    autoScale: true,
                    type: "iframe"
                });
                jQuery(".titleClass").tipTip({
                    maxWidth: "180px",
                    edgeOffset: 10,
                    defaultPosition: "right",
                    delay: 0,
                })
            }
        });
        jQuery(this).parent().addClass("current");
        f.preventDefault()
    });
    jQuery("#tabs li").click(function () {
        jQuery("#tabs li").removeClass("active");
        jQuery(this).addClass("active");
        jQuery(".tab_content").hide();
        var c = jQuery(this).find("a").attr("href");
        jQuery(c).fadeIn();
        return false
    });
    jQuery(".home-slider").bxSlider({
        slideWidth: 1185,
        minSlides: 1,
        maxSlides: 1,
        touchEnabled: true,
        slideMargin: 0,
        auto: true,
        pagerType: "full",
        autoControls: true
    });
    jQuery(".project-slider").bxSlider({
        slideWidth: 800,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        auto: true,
        autoControls: true
    })
});
jQuery(document).ready(function (a) {
    a(".titleClass").tipTip({
        maxWidth: "180px",
        edgeOffset: 10,
        defaultPosition: "right",
        delay: 0,
    });
    a(".serviceClass").tipTip({
        maxWidth: "250px",
        edgeOffset: 10,
        defaultPosition: "top",
        delay: 0,
    })
});