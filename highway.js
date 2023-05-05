window.onload = _ => {

    // Highway Road
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
        document.querySelector('.highway-road').innerHTML = highwayHtml
    }

    // Car List
    let carListHtml = ''
    carList.forEach(car => {
        carListHtml = carListHtml + `
        <div class="car" style="left: ${210 + (200 + 14) * (car.col - 1)}px; top: ${car.top}px">
            <img src="./img/${car.img}.svg" alt="${car.name}">
        </div>
        `
    })
    document.querySelector('.car-list').innerHTML = carListHtml


}


const carList = [
    {name: '', col: 3, top: 1200, img: 'car_police'},
    {name: '', col: 1, top: 700, img: 'car'},
    {name: '', col: 2, top: 900, img: 'car_taxi'},
    {name: '', col: 3, top: 2100, img: 'car_jeep'},
]
