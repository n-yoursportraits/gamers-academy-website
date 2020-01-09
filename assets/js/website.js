(function () {
    'use strict';

    var startCountdownTimer = function () {
        var countDownDate = new Date();
        countDownDate.setHours(24, 0, 0, 0);

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the elements
            document.getElementById('countdown-timer--hours').innerHTML = hours + 'h';
            document.getElementById('countdown-timer--minutes').innerHTML = minutes + 'min';
            document.getElementById('countdown-timer--seconds').innerHTML = seconds + 'sek';

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById('announcement-bar').style.display = 'none';
            } else {
                document.getElementById('announcement-bar').style.display = 'flex';
            }
        }, 1000);
    };

    var init = function () {
        startCountdownTimer();
    };

    init();
})();