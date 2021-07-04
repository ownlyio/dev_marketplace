let pad_zeroes = (number) => {
    number = number.toString();

    while(number.length < 2) {
        number = "0" + number;
    }

    return number;
};

$(document).ready(function() {
    let countDownDate = new Date("Jul 15, 2021 00:00:00").getTime();

    let x = setInterval(function() {

        // Get today's date and time
        let now = new Date().getTime();

        // Find the distance between now and the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = pad_zeroes(Math.floor(distance / (1000 * 60 * 60 * 24)));
        let hours = pad_zeroes(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        let minutes = pad_zeroes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        let seconds = pad_zeroes(Math.floor((distance % (1000 * 60)) / 1000));

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);
});