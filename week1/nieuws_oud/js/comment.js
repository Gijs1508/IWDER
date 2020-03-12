window.onclick = function(e){
    var id =  e.target.id;
    if (id === 'sent'){
        var author = document.getElementById('author').value
        var comment = document.getElementById('comment').value
        $( "#comment_output" ).append("<div class='comment'>" +
                                "<p class='comment_auth'> Naam: </p>" +
                                "<p>" + author + "</p>" +
                                "<p class='comment_comm'> Comment: </p>" +
                                "<p>" + comment + "</p>" + "</div>");
    }

    if (id === 'contact_sent'){
        var name = document.getElementById('name').value
        alert("Beste " + name + ", uw contactaanvraag is ontvangen!");
    }
}
