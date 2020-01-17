$(document).ready(function () {
    var timer = 3000;
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
});
