window.onload = _ => {

    // Highway Road
    let highwayHtml = ''
    for(let i=0;i<100;i++){
        highwayHtml = highwayHtml + `
    <div class="highway-section" id="${i}">
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
        document.querySelector('.road').innerHTML = highwayHtml
    }

    // Car List
    let carListHtml = ''
    sceneList.forEach((scene, index) => {

        carListHtml = carListHtml + `
        <div 
            class="scene-title" 
            style="left: ${0}px; top: ${index * sceneGap + 600}px"
        >
            ${scene.title}
        </div>
        `

        scene.cars.forEach(car => {
            if (car.dialog) {
                carListHtml = carListHtml + `
                            <div class="car" style="left: ${205 + (200 + 14) * (car.col - 1)}px; top: ${car.top + index * sceneGap}px">
                                <div class="speed">${car.speed}km/h</div>
                                <img src="./img/${car.img}.svg" alt="${car.name}">
                                <div class="dialog">${car.dialog}</div>
                            </div>
                            `
            } else {
                carListHtml = carListHtml + `
                            <div class="car" style="left: ${205 + (200 + 14) * (car.col - 1)}px; top: ${car.top + index * sceneGap}px">
                                <div class="speed">${car.speed}km/h</div>
                                <img src="./img/${car.img}.svg" alt="${car.name}">
                            </div>
                            `
            }
        })
    })
    document.querySelector('.car-list').innerHTML = carListHtml
}

const sceneGap = 3000

const sceneList = [
    // scene 1   // 三连堵
    {
        title: '三连堵',
        cars: [
            {name: '',        col: 1,   speed: 100, top: 1100,             img: 'car',        dialog: ""},
            {name: '',        col: 2,   speed: 100, top: 900,              img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 100, top: 2100,             img: 'car_jeep',   dialog: ""},
            {name: '',        col: 3,   speed: 100, top: 1000,             img: 'truck',      dialog: ""},
            {name: '',        col: 1,   speed: 110, top: 1600,             img: 'car_yellow', dialog: "左边那个 SB，闪不动你了还。在超车道，应该快点走，避免三车并排，可真行，逛上大街了还。速度压的是真稳。"},
        ]
    },

    // scene 2   // 骑线
    {
        title: '骑线',
        cars: [
            {name: '',        col: 1.4, speed: 105, top:  1100, img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 95,  top:  2100, img: 'car_mini',   dialog: "。。。"},
            {name: '',        col: 3,   speed: 95,  top:  1000, img: 'truck',      dialog: ""},
            {name: '',        col: 1,   speed: 110, top:  1600, img: 'car_yellow', dialog: "靠，这边又来个骑线的，科三是怎么过的。右后方的小绿豆开的都比你好。"},
        ]
    },

    // scene 3   // 右侧超车
    {
        title: '右侧超车',
        cars: [
            {name: '',        col: 1, speed: 105, top:  1100, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 105, top:  1100, img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 95,  top:  2200, img: 'car_mini',   dialog: ""},
            {name: '',        col: 3,   speed: 125, top:  1400, img: 'car_yellow', dialog: "我只能从右侧超车了"},
        ]
    },

    // scene 4   // 移动路障
    {
        title: '移动路障',
        cars: [
            {name: '',        col: 1, speed: 95, top:  1300, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 95, top:  1100, img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 95,  top:  1300, img: 'car',   dialog: ""},
            {name: '',        col: 1, speed: 95, top: 500 + 1300, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 95, top: 500 + 1100, img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 95,  top: 500 + 1300, img: 'car',   dialog: ""},
            {name: '',        col: 1, speed: 95, top: 500 * 2 + 1300, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 95, top: 500 * 2 + 1100, img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 95,  top: 500 * 2 + 1300, img: 'car',   dialog: ""},
            {name: '',        col: 1,   speed: 98, top:  500 * 2 + 1800, img: 'car_yellow', dialog: "又堵了？为什么堵啊"},
        ]
    },

    // scene 5   // 无论你跑多快，总有一个大众会超你
    {
        title: '大众封神',
        cars: [
            {name: '',        col: 1, speed: 120, top:  1100, img: 'car',        dialog: "那句话真没错，无论你跑多快，总有一个大众会超你。"},
            {name: '',        col: 3,   speed: 95,  top:  1500, img: 'car_mini',   dialog: ""},
            {name: '',        col: 2,   speed: 150, top:  900, img: 'car_yellow', dialog: "我只能从右侧超车了"},
        ]
    },
]
