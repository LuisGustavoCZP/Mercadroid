let username = "";
let password = "";

function CreateCookie (userhash){
    // Cria uma nova data no futuro 01/01/2020
    var date = new Date();
    date.setTime(date.getTime() + (30*24*60*60*1000));
    // Converte a data para GMT
    // Wed, 01 Jan 2020 02:00:00 GMT
    date = date.toGMTString();
    // Cria o cookie
    document.cookie = `userhash=${userhash}; expires=${date};`;
}

function Login () 
{
    const user = {"user":username, "pass":password};
    fetch("http://vacsina.servegame.com:8000/user", 
    {
        method: 'post',
        mode: 'cors',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' }
    })
    .then((resp) => resp.json())
    .then(function (data) {
        //console.log('Request succeeded with JSON response', data);
        console.log(data);
        window.parent.SetUserID(data);
        //CreateCookie(data);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
}

$("#username").on("input", (e) => 
{
    username = e.target.value;
    e.target.classList.add("notempty");
});
$("#password").on("input", (e) => 
{
    password = e.target.value;
});
//username = 

//Login ();