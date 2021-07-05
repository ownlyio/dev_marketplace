let newsletter_form;

let pad_zeroes = (number) => {
    number = number.toString();

    while(number.length < 2) {
        number = "0" + number;
    }

    return number;
};

let start_countdown = () => {
    let countDownDate = new Date("Jul 15, 2021 00:00:00").getTime();

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;

        let days = pad_zeroes(Math.floor(distance / (1000 * 60 * 60 * 24)));
        let hours = pad_zeroes(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        let minutes = pad_zeroes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        let seconds = pad_zeroes(Math.floor((distance % (1000 * 60)) / 1000));

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);

        if (distance < 0) {
            clearInterval(x);
            $("#days").text("00");
            $("#hours").text("00");
            $("#minutes").text("00");
            $("#seconds").text("00");
        }
    }, 1000);
};

$(document).ready(function() {
    start_countdown();
});

$(document).on("submit", "#newsletter-form", async (event) => {
    event.preventDefault();

    newsletter_form = $("#newsletter-form");
    newsletter_form.find("[type='submit']").prop("disabled", true);

    let data = new FormData(event.target);
    fetch(event.target.action, {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        $("#signing-up-success").removeClass("d-none");
        newsletter_form.find("input").val("");

        $("#newsletter-form [type='submit']").prop("disabled", false);

        setTimeout(function() {
            $("#signing-up-success").addClass("d-none");
        }, 5000);
    }).catch(error => {
        console.log('Oops! There was a problem submitting your form');
    });
});