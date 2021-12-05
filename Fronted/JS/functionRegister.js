function save() {
    debugger;
    var name = $.trim($("#name").val());
    var email = $.trim($("#email").val());
    var password = $.trim($("#password").val());
    var confirmPassword = $.trim($("#confirmPassword").val());
    if (name != "" && email != "" && password != "" && confirmPassword != "") {
        if (password != confirmPassword) {
            alert("Las contraseñas no coinciden");
            $("#confirmPassword").focus();
        } else {
            $.ajax({
                url: 'http://localhost:8070/api/user/new',
                data: JSON.stringify({
                    "email": email,
                    "password": password,
                    "name": name
                }),
                type: 'POST',
                contentType: 'application/json',
                //dataType: 'json',
                error: function (result) { alert('Error: Ver log para detalles.'); console.log(result); },
                success: function (respuesta) {
                    /*console.log(respuesta);
                    if (respuesta.id == null) {
                        alert("No fue posible crear la cuenta.")
                        //$("#nombre").focus();
                        //$("#email").focus();
                    } else {*/
                        alert('Cuenta creada de forma correcta.');
                        
                        $("#formf").trigger("reset");
                    //$(':input').val('');
                    //$("#nombre").focus();
                }
            });
        }
        return false;
    }

}

