$(document).ready(function(){
    var humiraEyebrow = "#humira-eyebrow";
    
    $.ajaxSetup({
        scriptCharset: "utf-8",
        contentType: "application/json; charset=utf-8"
    });

    $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://pharmacysolutions.webflow.io/elements') + '&callback=?', function(data){
        var $page = $(data.contents),
            $contents = $page.filter(humiraEyebrow);
        
        if ($contents.length == 0) {
            $contents = $page.find(humiraEyebrow);
        }
        
        $(humiraEyebrow).html($contents.html());
    });

});