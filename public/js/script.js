const getData = async () => {
    console.log("Querying the system. Please stand by...");
    const request = await fetch(`http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2017'&player_id='493316'`);
    const hoopData = await request.json();
    return hoopData;
}
getData()
    .then(hoopData => {
        console.log("Here's the API data you requested: ", hoopData); // sanity check
        // document.getElementById("stat1").innerText = '"' + metData.title + '"'; // update id=title with title data
        // document.getElementById("stat2").innerText = metData.artistDisplayName + ", " + metData.objectDate;
        // document.getElementById("stat3").innerHTML = `<img src="${metData.primaryImageSmall}">` ;
    });


// Functional Sports API. Baseball's is probably the best one, others are very light on content
// Baseball: https://appac.github.io/mlb-data-api-docs/#top
// CFB: https://api.collegefootballdata.com/api/docs/?url=/api-docs.json
// Basketball: https://www.balldontlie.io/