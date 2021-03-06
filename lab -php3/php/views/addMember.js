$("#form-addMember").submit(function(e){
    e.preventDefault();

    $.ajax({
        url: "./models/addMember.php",
        method: "POST",
        cache: false,
        data: $(this).serialize(),
        beforeSend: function(){
            $(":submit").attr("disabled",true);
        },
        success: function (msg) {
            console.log(msg);
            $(":submit").attr("disabled",false);
            $(".card-body").load("./views/memberJ.php");
        }
    });
});