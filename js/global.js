$(document).ready(function(){
    var element = [
            "#humira-eyebrow",
            "#home-header",
            "#patient-header",
            "#patient-header-logged-in",
            "#hcp-header",
            "#hcp-header-logged-in",
            "#24-hour-panel",
            "#patient-footer",
            "#patient-footer-logged-in",
            "#hcp-footer",
            "#hcp-footer-logged-in",
            "#global-footer"
        ];
    
    $.ajaxSetup({
        scriptCharset: "utf-8",
        contentType: "application/json; charset=utf-8"
    });

    $.each(element, function(i, el){
        $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://pharmacysolutions.webflow.io/elements') + '&callback=?', function(data){
            var $page = $(data.contents),
                $contents = $page.filter(el);
            
            if ($contents.length == 0) {
                $contents = $page.find(el);
            }
            
            $(el).html($contents.html());
        }).done(function(){

            $(".w-nav-link").each(function(){
                var path;
                
                if ($(this).attr("href").indexOf("webflow.io") > -1){
                    path = location.pathname.split("webflow.io/")[1];
                } else {
                    path = location.pathname.split("/")[1];
                }

                console.log("path = " + path);

                if ($(this).attr("href").indexOf(path) > -1) {
                    $(this).addClass("w--current");
                }
            });

            $(".w-dropdown-link").each(function(){
                var path;
                
                if ($(this).attr("href").indexOf("webflow.io") > -1){
                    path = location.pathname.split("webflow.io/")[1];
                } else {
                    path = location.pathname.split("/")[1];
                }

                if ($(this).attr("href").indexOf(path) > -1) {
                    $(this).addClass("w--current");
                    $(this).closest(".w-nav-link").addClass("w--current");
                }
            });

            // $('.w-nav-link[href^="/' + location.pathname.split("/")[1] + '"]').addClass('w--current');

            // $('.w-dropdown-link[href^="/' + location.pathname.split("/")[1] + '"]').addClass('w--current').closest(".w-nav-link").addClass("w--current");
        });
    });

});