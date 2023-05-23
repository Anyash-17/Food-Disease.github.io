$(document).ready(function(){

    $("#home").on("click",function(){
        $("#showHome").show();
        $("#showDiseases").hide();
    });

    $("#diseases").on("click", function(){
        $("#showHome").hide();
        $("#showDiseases").show();
    });

    showProfile();

    function showProfile() {
        $.ajax({
            url: "showProfile.php",
            type: 'GET',
            success: function (data) {
                $("#showprofile").html(data);
            }
        });
    }

    $("#cPassword").on("submit", function (e) {
        e.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            url: "changePassword.php",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                $("#cPassword").trigger("reset");
                $("#changePassword").modal('hide');
            }
        });
    });

    $("#checkboxDetail").on("submit", function(e){
        e.preventDefault();

        var formData = new FormData(this);

        $.ajax({
            url: "getDetails.php",
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {
                console.log(data);
                $("#showSolutions").html(data);
                $("#checkboxDetail").trigger("reset");
            }
        });
    });

    $("#savePassword").on("click", function () {
        let text = document.getElementById("inputPassword5").value;
        let regx = /^(?!.* )(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
        if (regx.test(text)) {
            document.getElementById("np").innerHTML = " ";
        } else {
            document.getElementById("np").innerHTML = "Password Must Contain of 8 letters and must have one small alphabet, one large alphabet, one digit and one symbol.<br>";
            return false;
        }

        let text1 = document.getElementById("inputPassword6").value;
        let regx1 = /^(?!.* )(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/;
        if (regx1.test(text1)) {
            document.getElementById("rnp").innerHTML = " ";
        } else {
            document.getElementById("rnp").innerHTML = "Password Must Contain of 8 letters and must have one small alphabet, one large alphabet, one digit and one symbol.<br>";
            return false;
        }

        firstPass = document.getElementById("inputPassword5").value;
        secondPass = document.getElementById("inputPassword6").value;
        if (firstPass !== secondPass) {
            document.getElementById("rnp").innerHTML = "Password is not matching";
            return false;
        }
    });
});