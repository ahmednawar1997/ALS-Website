    var fburl = "https://graph.facebook.com/10156941660014653/photos?access_token=228935561310828|pqjFwOtwWp0B8xp2uM5HbLXlaec"

    $.getJSON(fburl, function(data){
        $.each(data.data, function( index, value ) {
            var imgURL = value.id;
            $('#gallery').append(`<div class="col-lg-3 col-md-4 col-sm-6 col-6">
            <a class="d-block mb-4 h-100 example-image-link" href="https://graph.facebook.com/${imgURL}/picture?type=normal"
             data-lightbox="example-set" data-title="Click the right half of the image to move forward.">
                <img class="img-fluid img-thumbnail" src="https://graph.facebook.com/${imgURL}/picture?type=normal" alt="">
            </a>
        </div>`)
          });
});


   
