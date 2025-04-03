$(document).ready(function() {
    if ($('#lightbox').length === 0) {
        $('body').append(`
            <div id="lightbox" class="lightbox">
                <div class="lightbox-content">
                    <img src="" alt="Enlarged Image" class="lightbox-image" />
                    <span class="lightbox-close">×</span>
                </div>
            </div>
        `);
    }

    $('#projects.single .desktop-12.columns img').on('click', function() {
        var imgSrc = $(this).attr('src');
        $('#lightbox .lightbox-image').attr('src', imgSrc);
        $('#lightbox').addClass('active');
    });

    $('.lightbox-close').on('click', function() {
        $('#lightbox').removeClass('active');
    });

    $('#lightbox').on('click', function(e) {
        if (e.target === this) {
            $(this).removeClass('active');
        }
    });

    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && $('#lightbox').hasClass('active')) {
            $('#lightbox').removeClass('active');
        }
    });
});