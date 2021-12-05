// ============ LOGIN FUNCTION ============

function login(){
    var email= $.trim($("#email").val());
    var password= $.trim($("#password").val());
    if(email != "" && password != ""){
        $.ajax({
            url: 'http://localhost:8080/api/user/'+email+"/"+password,
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            error: function (result) { alert('Error: Ver log para detalles.'); console.log(result); },
            success: function (respuesta) {
                console.log(respuesta);
                if (respuesta.id == null) {
                    alert("No existe un usuario con estos datos.")
                } else {
                    alert('Bienvenido '+respuesta.name);
                }
                $(':input').val('');
                $("#email").focus();
            }           
        });
        
        return false;       
    }   
}

// ============ SHOW/HIDE PASSWORD ============

function showPassword() {
    var cambio = document.getElementById("password");
    if (cambio.type == "password") {
        cambio.type = "text";
        $('#icon').removeClass('bi bi-eye').addClass('bi bi-eye-slash');
    } else {
        cambio.type = "password";
        $('#icon').removeClass('bi bi-eye-slash').addClass('bi bi-eye');
    }
}

// $(document).ready(function () {
//     //CheckBox mostrar contraseña
//     $('#ShowPassword').click(function () {
//         $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
//     });
// });