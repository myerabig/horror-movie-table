function changeToTitle() {
    document.getElementById("titleSearchbar").style = "display: block";
    document.getElementById("yearSearchbar").style = "display: none";
    document.getElementById("directorSearchbar").style = "display: none";
    document.getElementById("actorSearchbar").style = "display: none";

    document.getElementById("titleOption").style = "color: white";
    document.getElementById("yearOption").style = "color: orange";
    document.getElementById("directorOption").style = "color: orange";
    document.getElementById("actorOption").style = "color: orange";
}

function changeToYear() {
    document.getElementById("titleSearchbar").style = "display: none";
    document.getElementById("yearSearchbar").style = "display: block";
    document.getElementById("directorSearchbar").style = "display: none";
    document.getElementById("actorSearchbar").style = "display: none";

    document.getElementById("titleOption").style = "color: orange";
    document.getElementById("yearOption").style = "color: white";
    document.getElementById("directorOption").style = "color: orange";
    document.getElementById("actorOption").style = "color: orange";
}

function changeToDirector() {
    document.getElementById("titleSearchbar").style = "display: none";
    document.getElementById("yearSearchbar").style = "display: none";
    document.getElementById("directorSearchbar").style = "display: block";
    document.getElementById("actorSearchbar").style = "display: none";

    document.getElementById("titleOption").style = "color: orange";
    document.getElementById("yearOption").style = "color: orange";
    document.getElementById("directorOption").style = "color: white";
    document.getElementById("actorOption").style = "color: orange";
}

function changeToActor() {
    document.getElementById("titleSearchbar").style = "display: none";
    document.getElementById("yearSearchbar").style = "display: none";
    document.getElementById("directorSearchbar").style = "display: none";
    document.getElementById("actorSearchbar").style = "display: block";

    document.getElementById("titleOption").style = "color: orange";
    document.getElementById("yearOption").style = "color: orange";
    document.getElementById("directorOption").style = "color: orange";
    document.getElementById("actorOption").style = "color: white";
}

function titleSearch() {
    var movies = "";
    var search = document.getElementById("titleSearchbar").value;
    var titleName = "";
    var searchHeader = "<tr><th width=\"14%\">Title</th><th width=\"3%\">Release Year</th><th width=\"10%\">Director</th><th width=\"2%\">IMDB Rating/10</th><th width=\"10%\">Subgenre</th><th width=\"15%\">Lead Actor(s)</th><th width=\"45%\">Plot Summary</th><th width=\"2%\">Runtime (minutes)</th></tr>";

    document.getElementById("movieChart").style = "display: none";
    document.getElementById("searchTable").style = "display: block";
    document.getElementById("searchTable").innerHTML = searchHeader;

    for (let i = 0; i < document.getElementsByClassName("row").length; i++) {
        titleName = document.getElementsByClassName("row")[i].getElementsByClassName("title")[0].getElementsByTagName("a")[0].innerHTML;

        if (titleName.indexOf(search) != -1) {
            movies += document.getElementsByClassName("row")[i].outerHTML;
        }
    }

    if (document.getElementById("titleSearchbar").value == "") {
        document.getElementById("movieChart").style = "display: block";
        document.getElementById("searchTable").style = "display: none";
    }

    document.getElementById("searchTable").innerHTML = searchHeader + movies;
}

function yearSearch() {
    var movies = "";
    var search = document.getElementById("yearSearchbar").value;
    var yearName = "";
    var searchHeader = "<tr><th width=\"14%\">Title</th><th width=\"3%\">Release Year</th><th width=\"10%\">Director</th><th width=\"2%\">IMDB Rating/10</th><th width=\"10%\">Subgenre</th><th width=\"15%\">Lead Actor(s)</th><th width=\"45%\">Plot Summary</th><th width=\"2%\">Runtime (minutes)</th></tr>";

    document.getElementById("movieChart").style = "display: none";
    document.getElementById("searchTable").style = "display: block";
    document.getElementById("searchTable").innerHTML = searchHeader;

    for (let i = 0; i < document.getElementsByClassName("row").length; i++) {
        yearName = document.getElementsByClassName("row")[i].getElementsByClassName("releaseYear")[0].innerHTML;

        if (yearName.indexOf(search) != -1) {
            movies += document.getElementsByClassName("row")[i].outerHTML;
        }
    }

    if (document.getElementById("yearSearchbar").value == "") {
        document.getElementById("movieChart").style = "display: block";
        document.getElementById("searchTable").style = "display: none";
    }

    document.getElementById("searchTable").innerHTML = searchHeader + movies;
}

function directorSearch() {
    var movies = "";
    var search = document.getElementById("directorSearchbar").value;
    var directorName = "";
    var searchHeader = "<tr><th width=\"14%\">Title</th><th width=\"3%\">Release Year</th><th width=\"10%\">Director</th><th width=\"2%\">IMDB Rating/10</th><th width=\"10%\">Subgenre</th><th width=\"15%\">Lead Actor(s)</th><th width=\"45%\">Plot Summary</th><th width=\"2%\">Runtime (minutes)</th></tr>";

    document.getElementById("movieChart").style = "display: none";
    document.getElementById("searchTable").style = "display: block";
    document.getElementById("searchTable").innerHTML = searchHeader;

    for (let i = 0; i < document.getElementsByClassName("row").length; i++) {
        directorName = document.getElementsByClassName("row")[i].getElementsByClassName("director")[0].innerHTML;

        if (directorName.indexOf(search) != -1) {
            movies += document.getElementsByClassName("row")[i].outerHTML;
        }
    }

    if (document.getElementById("directorSearchbar").value == "") {
        document.getElementById("movieChart").style = "display: block";
        document.getElementById("searchTable").style = "display: none";
    }

    document.getElementById("searchTable").innerHTML = searchHeader + movies;
}

function actorSearch() {
    var movies = "";
    var search = document.getElementById("actorSearchbar").value;
    var actorName = "";
    var searchHeader = "<tr><th width=\"14%\">Title</th><th width=\"3%\">Release Year</th><th width=\"10%\">Director</th><th width=\"2%\">IMDB Rating/10</th><th width=\"10%\">Subgenre</th><th width=\"15%\">Lead Actor(s)</th><th width=\"45%\">Plot Summary</th><th width=\"2%\">Runtime (minutes)</th></tr>";

    document.getElementById("movieChart").style = "display: none";
    document.getElementById("searchTable").style = "display: block";
    document.getElementById("searchTable").innerHTML = searchHeader;

    for (let i = 0; i < document.getElementsByClassName("row").length; i++) {
        actorName = document.getElementsByClassName("row")[i].getElementsByClassName("actors")[0].innerHTML;

        if (actorName.indexOf(search) != -1) {
            movies += document.getElementsByClassName("row")[i].outerHTML;
        }
    }

    if (document.getElementById("actorSearchbar").value == "") {
        document.getElementById("movieChart").style = "display: block";
        document.getElementById("searchTable").style = "display: none";
    }

    document.getElementById("searchTable").innerHTML = searchHeader + movies;
}