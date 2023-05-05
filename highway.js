window.onload = _ => {

    let highway = document.querySelector('#highway-road')
    let highwayHtml = ''
    for(let i=0;i<100;i++){
        highwayHtml = highwayHtml + `
    <div class="highway-section">
        <div class="plant-section">
            <img src="plant.png" alt="plant">
        </div>
        <div class="road-line">
            <div class="line solid white"></div>
        </div>
        <div class="road-block"></div>
        <div class="road-line">
            <div class="line white"></div>
        </div>
        <div class="road-block"></div>
        <div class="road-line">
            <div class="line white"></div>
        </div>
        <div class="road-block"></div>
        <div class="road-line">
            <div class="line solid white"></div>
        </div>
        <div class="road-block"></div>
        <div class="road-line">
            <div class="line solid white"></div>
        </div>
        <div class="plant-section">
            <img src="plant.png" alt="plant">
        </div>
    </div>
`
        highway.innerHTML = highwayHtml
    }
}
