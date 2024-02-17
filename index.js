
function srch(){
    var srch_input = document.getElementById("search").value;
    var current_url = window.location.href;
    var search_url = current_url+"#"+srch_input;
    window.location.href = search_url;
    
}