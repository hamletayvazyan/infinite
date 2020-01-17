$(document).ready(function () {
    var timer = 3000;
    var positionNum = 4;
    let a = setTimeout(tick, timer);
    setInterval(() => {
        // console.log($('#asd').position().top);
        if($('#asd').position().top < 1180 && $('#asd').position().top > 900){
            $('#asd').removeClass('animate-barrier');
            timer *= 3;
            a = setTimeout(tick, timer)
        }
    }, 100);
    function tick() {
        // console.log('asd', timer);
        $('#asd').addClass('animate-barrier');
    }

    $(document).keyup(function (e) {
        switch (e.which) {
            case 38: // up
                console.log(e);
                break;
            case 40: // down
                console.log(e);
                break;
            case 37: // left
                positionNum = positionNum == 26 ? 4 :
                    positionNum == 50 ? 26 :
                    positionNum == 70 ? 50 : 4;
                $('#car').css('left', positionNum+'%');
                break;
            case 39: // right
                positionNum = positionNum == 4 ? 26 :
                    positionNum == 26 ? 50 :
                    positionNum == 50 ? 70 : 70;
                $('#car').css('left', positionNum+'%');
                break;
            default:
                return // top
        }
        e.preventDefault();
    });
});
