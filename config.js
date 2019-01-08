/* -------------------------------
        QUERY PARAMETERS
  ------------------------------- */

// example: index.html?d=0
// example: index.html?o=100
// example: index.html?startFromRand=true

var startFromRand = false;


/* -----------------------------------------------------
    Check for stuff in the URL
-------------------------------------------------------- */

// https://davidwalsh.name/query-string-javascript

var urlParams = new URLSearchParams(window.location.search);

function updateGameOptions() {

    if (urlParams.has('rand')) {
        startFromRand = true;
    }

    if (urlParams.has('o')) {
        AI_offense_percent = urlParams.get('o');
        $('#offRange').val(AI_offense_percent);
    }

    if (urlParams.has('d')) {
        AI_defense_percent = urlParams.get('d');
        $('#defRange').val(AI_defense_percent);
    }

}

