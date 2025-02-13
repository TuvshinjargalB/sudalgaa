// 1) Карт дээш доош хөдөлгөх эхний jQuery код хэвээр
$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: '5px'
        }, 'slow');
    });
});

// 2) Зүрхнүүдийг хулгананы хөдөлгөөнөөр санамсаргүй байрлалд шилжүүлдэг хэсэг хэвээр
$(document).ready(function () {
    $(document).mousemove(function (event) {
        var mouseX = event.pageX;
        var mouseY = event.pageY;

        $('.heart').each(function () {
            var heart = $(this);
            heart.css({
                top: mouseY + Math.random() * 50 - 25 + 'px',
                left: mouseX + Math.random() * 50 - 25 + 'px',
                transform: 'rotate(' + (Math.random() * 360) + 'deg)'
            });
        });
    });
});

// 3) "Yes" товч дээр дарахад second.html рүү шилжих
$(document).ready(function () {
    $('#yesBtn').click(function () {
        window.location.href = 'second.html';
    });
});

// 4) "No" товчийг хулгана дөхөх үед санамсаргүй байрлал руу "зугтаадаг" болгох
$(document).ready(function () {
    $('#noBtn').on('mouseover', function () {
        var maxX = $(window).width() - $(this).outerWidth();
        var maxY = $(window).height() - $(this).outerHeight();
        var newLeft = Math.random() * maxX;
        var newTop = Math.random() * maxY;
        
        $(this).css({
            position: 'absolute',
            left: newLeft + 'px',
            top: newTop + 'px'
        });
    });
});
