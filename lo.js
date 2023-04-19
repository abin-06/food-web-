function funtiondate()
{
    var email=document.getElementById("email").value
    var passwer=document.getElementById("passwer").value
    if(email=="admin"&& passwer=="user")
    {
        alert("login succesfully");
        return false;
    }
    else
    {
        alert("login failed");
    }
}