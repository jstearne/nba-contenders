const getData = async () => {
    console.log("Querying the system. Please stand by...");
    const request = await fetch('https://www.balldontlie.io/api/v1/players');
    const hoopData = await request.json();
    return hoopData;
}
getData()
    .then(hoopData => {
        console.log("Here's the API data you requested: ", hoopData); // sanity check
        // document.getElementById("stat").innerText = '"' + metData.title + '"'; // update id=title with title data
        // document.getElementById("stat").innerText = metData.artistDisplayName + ", " + metData.objectDate;
        // document.getElementById("stat").innerHTML = `<img src="${metData.primaryImageSmall}">` ;
    });