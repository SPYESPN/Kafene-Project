const setLoginContents = () => getLocalData('login') && window.location.replace('./order.html');

$(document).ready(function(e) {
    setLoginContents();

    $('#loginForm').submit((e) => {
        e.preventDefault();
        let userName = $('#username').val();
        let password = $('#password').val();
    if(userName == 0 ){
            alert('Please fill userNmae and Password');
        }

     else if(userName === password )
      {
            setLocalData('login', true);
            alert('Login Successful!');
            window.location.href = './order.html'  
        }
        else{
            alert('Please enter the valid credential!');
        }


    })

});