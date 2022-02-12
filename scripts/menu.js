var currentUserID;
var mainframe = document.getElementById("mainframe");

function SetUserID (id)
{
    currentUserID = id;
    console.log("Novo id: "+currentUserID);
    mainframe.src = "./main.html"; 
}

function User (id)
{
    fetch("http://vacsina.servegame.com:8000/"+id, 
    {
        method: 'get',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' }
    })
    .then((resp) => resp.json())
    .then(function (data) {
        //console.log('Request succeeded with JSON response', data);
        console.log(data);
        if(data == "-1") mainframe.src = "./user.html";
        else mainframe.src = "./main.html";
        //CreateCookie(data);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
}

User(currentUserID)