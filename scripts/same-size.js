jQuery(function($){
    var maxHeight = {};
    $('[data-same-height]').each(function(i, e) {
        var $e = $(e);
        var key = $e.data('same-height');
        console.log(key);
        if (maxHeight[key] === undefined) {
            maxHeight[key] = 0;
        }
        if($e.height() > maxHeight[key]) {
           maxHeight[key] = $e.height(); 
           console.log(maxHeight);
        } else {
            console.log($e.height());
        }
    });
    $('[data-same-height]').each(function(i, e) {
        var $e = $(e);
        var key = $e.data('same-height');
        $e.height(maxHeight[key]); 
       console.log(maxHeight);
    });
});
