window.onclick = function(e){
    var id =  e.target.id;
    if (id === 'sent'){
        var author = document.getElementById('author').value
        var comment = document.getElementById('comment').value
        if(author != "" && comment !=  ""){
            $( "#comment_output" ).append("<div class='comment'>" +
                                    "<p class='comment_auth'> Naam: </p>" +
                                    "<p>" + author + "</p>" +
                                    "<p class='comment_comm'> Comment: </p>" +
                                    "<p>" + comment + "</p>" + "</div>");
        } else {
            alert("Vul aub alle velden in.");
        }
    }

    if (id === 'contact_sent'){
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var comment = document.getElementById('comment').value
        if(!validateEmail(email)){
            alert("Voer aub een geldige email in ");
        } else if (name != "" && email != "" && comment !=  "") {
            alert("Beste " + name + ", uw contactaanvraag is ontvangen!");
        } else {
            alert("Vul aub alle velden in.");
        }
    }
}

function validateEmail($email){
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailRegex.test($email);
}
