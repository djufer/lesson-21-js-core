
$(document).ready(function () {
    let res = $('#s1').text();
    res += $('.s2').text();
    res += $('#second i').text();
    res += $("#second q").text();
    res += $('[target="_blank"]').text();
    res += $(".extra:nth-of-type(1)").text();
    alert(res)
})