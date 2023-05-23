$(document).ready(function () {

    // scroll function 


    $(".scrollTop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, "slow");           // scroll home
    });

    mybutton = document.getElementById("myBtn");
    window.onscroll = function () { scrollFunction() }

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    $(function () {
        $('a[href*=\\#]:not([href=\\#])').on('click', function () {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');      // scroll rest function 
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        });
    });

// scroll function ends


    $("#toastCross").on("click", function () {
        $("#none").hide();
    });


    $("#signupForm").on("submit", function (e) {
        e.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            url: "signup.php",
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data == 00) {
                    alert("Can't Save Record.");
                } else if (data == 0) {
                    alert("Can't Save Record or can't upload the pic");
                }else {
                    $("#signupForm").trigger("reset");
                    $(".text-reset").click();
                    $("#none").show();
                }
            }
        });
    });

});