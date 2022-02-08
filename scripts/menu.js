var currentUserID;
function SetUserID (id)
{
    currentUserID = id;
    console.log("Novo id: "+currentUserID);
    document.getElementById("mainframe").src = "./main.html"; 
}