$(document).ready(function() {
    $('#check').click(function() {
        $('.menu').fadeToggle();
    });
    $('#shop .row').hide();
    $('#shop .row:first').show();
    $('#shop ul li').click(function() {
        $('#shop .row').hide();
        var activeTab = $(this).find("a").attr("href");
        $(activeTab).fadeIn();
        return false;
    });
     $('#shop .block-container img').click(function() {
        $('#shop .row').hide();
        var activeimg = $(this).attr("href");
        $(activeimg).fadeIn();
        return false;
    });
    $('.link').click(function(){
        var targetId=$(this).attr("href");
        var linkScroll=$(targetId).offset().top;
        $('html,body').animate({
            scrollTop: linkScroll-30
        }, 1000)
    });
    $("#login").click(function(){
        $(".login").fadeIn()
    });
    $(".login").submit(function(){
        alert("目前沒有網路請稍後在試")
        $(".login").fadeOut()
        $(".login input").val("");
        return false;
    });
    $(".login-close").click(function(){
        $(".login,.join,.reg").fadeOut()
    });
    $(".event-join").click(function(){
        $(".join").fadeIn()
    });
    $(".join").submit(function(){
        alert("目前沒有網路請稍後在試")
        $(".join").fadeOut()
        $(".join input").val("");
        return false;
    });
    $("#contact").submit(function(){
        alert("目前沒有網路請稍後在試")
        $("#contact input").val("");
        return false;
    });
    $('.e-book').click(function(){
        alert('已成功訂閱');
        return false;
    });
    $('#reg').click(function(){
        $('.reg').fadeIn();
         $(".login").fadeOut();
    });
});   
var blockContainer = document.querySelector(".block-container");
var blocks = Array.from(document.querySelectorAll(".block"));
var isMouseOnBlock = false;
var leftPositions = blocks.map((block, i) => i * 250);

blockContainer.onmouseover = e => isMouseOnBlock = true;
blockContainer.onmouseout = e => isMouseOnBlock = false;

setInterval(function () {
    leftPositions.forEach((leftPosition, i) => blocks[i].style.left = leftPosition + "px");

    if (!isMouseOnBlock) {
        leftPositions = leftPositions.map(leftPosition => {
            leftPosition--;

            if (leftPosition == -250) {
                leftPosition = (blocks.length - 1) * 250;
            }

            return leftPosition;
        });
    }
}, 10);
