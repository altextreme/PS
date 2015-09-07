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

            var url = window.location.pathname, 
                urlRegExp = new RegExp(url.replace(/\/$/,'') + "$"),
                activeClass = "w--current";
            
            $('.nav-link').each(function(){
                if (urlRegExp.test($(this).href.replace(/\/$/,''))){
                    $(this).addClass(activeClass);
                }
            });

            $('.w-dropdown-link').each(function(){
                if (urlRegExp.test($(this).href.replace(/\/$/,''))){
                    $(this).addClass(activeClass).closest(".w-dropdown").find(".nav-link").addClass(activeClass);
                }
            });
        });
    });

});