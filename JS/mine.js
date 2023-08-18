let sideBarWidth = $(".sideBar").innerWidth();
$("form p").html("<span>100</span> Characyer Reamining");
$(".sideBar").css('left',`${-sideBarWidth}`);

$(".openNav").click(function(){
    $(".sideBar").css('left',"0");
    $(".openNav").css('left',`${sideBarWidth}`)
})

$(".fa-close").click(function(){
    $(".sideBar").css('left',`${-sideBarWidth}`);
    $(".openNav").css('left',"0")
})

$("#duration h2").click(function(eventInfo){
    let allItems = $(eventInfo.target).parent().siblings();
    allItems.children("div").slideUp();
    $(eventInfo.target).next().slideToggle();
})

$("textarea").on('input',function(){
    let text = $("textarea").val();
    let textLength = text.length;
    $("form p").html(`<span>${100-textLength}</span> Characyer Reamining`)
})

// Set the date we're counting down to
var countDownDate = new Date("Oct 25, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
    $("#details div").html(`
        <div class="position-absolute top-50 start-50 translate-middle">
            <span class="border p-5">${days} D</span>
            <span class="border p-5">${hours} h</span>
            <span class="border p-5">${minutes} m</span>
            <span class="border p-5">${seconds} s</span>
        </div>   
    `)

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        $("#details div").html("EXPIRED");
    }
}, 1000);
