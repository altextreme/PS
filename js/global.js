$(document).ready(function(){
    var element = [
            "#humira-eyebrow"
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
        });
    });

});