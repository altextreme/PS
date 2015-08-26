$(document).ready(function(){
    
    $.ajaxSetup({
        scriptCharset: "utf-8",
        contentType: "application/json; charset=utf-8"
    });

    // $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent('http://pharmacysolutions.webflow.io/elements') + '&callback=?', function(data){
    //     var $page = $(data.contents),
    //         $contents = $page.filter('#humira-eyebrow');
        
    //     if ($contents.length == 0) {
    //         $contents = $page.find('#humira-eyebrow');
    //     }
        
    //     $("#humira-eyebrow").html($contents.html());
    // });
    
});