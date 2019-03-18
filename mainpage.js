function changetoTitle(){
    document.getElementById("titleSearchBar").style = "display: block";
    document.getElementById("yearSearchBar").style = "display: none";
    document.getElementById("directorSearchBar").style = "display: none";
    document.getElementById("actorSearchBar").style = "display: none";

    document.getElementById("titleOption").style = "color: white";
    document.getElementById("yearOption").style = "color: orange";
    document.getElementById("directorOption").style = "color: orange";
    document.getElementById("actorOption").style = "color: orange";
}

function changetoYear(){
    document.getElementById("titleSearchBar").style = "display: none";
    document.getElementById("yearSearchBar").style = "display: block";
    document.getElementById("directorSearchBar").style = "display: none";
    document.getElementById("actorSearchBar").style = "display: none";

    document.getElementById("titleOption").style = "color: orange";
    document.getElementById("yearOption").style = "color: white";
    document.getElementById("directorOption").style = "color: orange";
    document.getElementById("actorOption").style = "color: orange";
}

function changetoDirector(){
    document.getElementById("titleSearchBar").style = "display: none";
    document.getElementById("yearSearchBar").style = "display: none";
    document.getElementById("directorSearchBar").style = "display: block";
    document.getElementById("actorSearchBar").style = "display: none";

    document.getElementById("titleOption").style = "color: orange";
    document.getElementById("yearOption").style = "color: orange";
    document.getElementById("directorOption").style = "color: white";
    document.getElementById("actorOption").style = "color: orange";
}

function changetoActor(){
    document.getElementById("titleSearchBar").style = "display: none";
    document.getElementById("yearSearchBar").style = "display: none";
    document.getElementById("directorSearchBar").style = "display: none";
    document.getElementById("actorSearchBar").style = "display: block";

    document.getElementById("titleOption").style = "color: orange";
    document.getElementById("yearOption").style = "color: orange";
    document.getElementById("directorOption").style = "color: orange";
    document.getElementById("actorOption").style = "color: white";
}

function titleSearch(){
    var movies = "";
    var search = document.getElementById("searchbar").value;
    var titleName = "";
    var searchHeader = "<tr><th width=\"14%\">Title</th><th width=\"3%\">Release Year</th><th width=\"10%\">Director</th><th width=\"2%\">IMDB Rating/10</th><th width=\"10%\">Subgenre</th><th width=\"15%\">Lead Actor(s)</th><th width=\"45%\">Plot Summary</th><th width=\"2%\">Runtime (minutes)</th></tr>";

    document.getElementById("movieChart").style = "display: none";
    document.getElementById("searchTable").style = "display: block";
    document.getElementById("searchTable").innerHTML = searchHeader;

    for (let i = 0; i < document.getElementsByClassName("row").length; i++){
        titleName = document.getElementsByClassName("row")[i].getElementsByClassName("title")[0].getElementsByTagName("a")[0].innerHTML;

        if(titleName.indexOf(search) != -1){
            movies += document.getElementsByClassName("row")[i].outerHTML;
        }
    }

    if(document.getElementById("searchbar").value == ""){
        document.getElementById("movieChart").style = "display: block";
        document.getElementById("searchTable").style = "display: none";
    }

    document.getElementById("searchTable").innerHTML = searchHeader + movies;
}