// --------------  завдання 1---------------------
$(document).ready(function () {
    // $(".add").click(() => {
    // $(".screen-block").addClass("red");
    $(".green-block").animate(
        {
            height: "0px",
        },
        120000, function () {
            $('.count2').hide();
            $('.count1').show();
        }
    );
    $(".green-block").animate(
        {
            height: "456px",
        },

        60000
    );
});
