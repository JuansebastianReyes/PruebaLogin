//$('#login').click(function(){
//    var data = { email : $('#email').val(), password : $('#pass').val() };
//    $.ajax({
//            url : 'http://3.15.92.223:5050/swagger/index.html',
//            data : data, 
//            method : 'get', //en este caso
//            dataType : 'json',
//            success : function(response){
//                   //codigo de exito
//                   console.log(response)
//            },
//            error: function(error){
//                   //codigo error
//            }
//    });
//});




function login(){
    
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    console.log(password);

    if(password=="Test123" && user == "testuser"){
      location.href="saludo.html"
    }else{
      document.getElementById("err").innerHTML = "Usuario o contraseña inválidos, por favor intente de nuevo";
    }
    
}


