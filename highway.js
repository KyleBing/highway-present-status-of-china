window.onload = _ => {

    // Highway Road
    let highwayHtml = ''
    for(let i=0;i<120;i++){
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
        document.querySelector('.road').innerHTML = highwayHtml
    }

    // Car List
    let carListHtml = ''
    sceneList.forEach((scene, index) => {

        carListHtml = carListHtml + `
        <div 
            id="${index + 1}"
            class="scene-title" 
            style="left: ${0}px; top: ${index * sceneGap + 500}px"
        >
            ${index + 1}. ${scene.title}
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

const sceneGap = 3500

const sceneList = [
    // scene 1   // 密不透风
    {
        title: '密不透风',
        cars: [
            {name: '',        col: 1,   speed: 100, top: 1100,             img: 'car',        dialog: ""},
            {name: '',        col: 2,   speed: 100, top: 900,              img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 100, top: 2100,             img: 'car_jeep',   dialog: ""},
            {name: '',        col: 3,   speed: 100, top: 1000,             img: 'truck',      dialog: ""},
            {name: '',        col: 1,   speed: 110, top: 1600,             img: 'car_yellow', dialog: "左边那个，闪不动你了还。避免三车并行，逛上大街了还。要么加速，要么减速变道。你这速度压的是真稳。"},
        ]
    },

    // scene 2   // 骑线
    {
        title: '骑士',
        cars: [
            {name: '',        col: 1.4, speed: 105, top:  1100, img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 95,  top:  2100, img: 'car_mini',   dialog: "。。。"},
            {name: '',        col: 3,   speed: 95,  top:  1000, img: 'truck',      dialog: ""},
            {name: '',        col: 1,   speed: 110, top:  1600, img: 'car_yellow', dialog: "这边又来个骑线的，科三是怎么过的。右后方的小绿豆开的都比你好。"},
        ]
    },

    // scene 3   // 移动路障
    {
        title: '移动路障',
        cars: [
            {name: '',        col: 1, speed: 105, top:  1100, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 105, top:  1100, img: 'car',        dialog: ""},
            {name: '',        col: 3,   speed: 95,  top:  2200, img: 'truck',   dialog: ""},
            {name: '',        col: 3,   speed: 125, top:  1400, img: 'car_yellow', dialog: "我只能从右侧超车了"},
        ]
    },

    // scene 4   // 批量移动路障
    {
        title: '批量移动路障',
        cars: [
            {name: '',        col: 1, speed: 124, top:  500, img: 'car_yellow',        dialog: "堵车的尽头是一马平川"},
            {name: '',        col: 1, speed: 95, top:  1300, img: 'car',        dialog: "高速就是得稳着开"},
            {name: '',        col: 2, speed: 95, top:  1100, img: 'car',        dialog: "我有错吗"},
            {name: '',        col: 3,   speed: 95,  top:  1300, img: 'car',   dialog: "我正常行驶中"},
            {name: '',        col: 1, speed: 95, top: 500 + 1300, img: 'car',        dialog: "我不急"},
            {name: '',        col: 2, speed: 95, top: 500 + 1100, img: 'car',        dialog: "我也不急"},
            {name: '',        col: 3,   speed: 95,  top: 500 + 1300, img: 'car',   dialog: "我更不急"},
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
            {name: '',        col: 2,   speed: 150, top:  900, img: 'car_yellow', dialog: "只是不喜欢跟其它车并行。"},
        ]
    },

    // scene 6   // 无紧急情况走应急车道
    {
        title: '无紧急情况走应急车道',
        cars: [
            {name: '',        col: 1, speed: 25, top:  800, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 25, top:  900, img: 'car',        dialog: ""},
            {name: '',        col: 1, speed: 25, top:  1250, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 25, top:  1300, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 25, top:  2000, img: 'car',        dialog: ""},
            {name: '',        col: 3, speed: 25, top:  1100, img: 'car',        dialog: "SB"},
            {name: '',        col: 3, speed: 25, top:  1500, img: 'car',        dialog: "SB，快拍照"},
            {name: '',        col: 3, speed: 25, top:  2100, img: 'truck',        dialog: ""},
            {name: '',        col: 4, speed: 50, top:  1100, img: 'car',        dialog: "还是我聪明，妈妈都夸我"},
            {name: '',        col: 4, speed: 50, top:  1800, img: 'car',        dialog: "别人走我也走，又碍着谁"},
            {name: '',        col: 3,   speed: 20,  top:  800, img: 'car_mini',   dialog: "SB"},
            {name: '',        col: 1,   speed: 20, top:  1600, img: 'car_yellow', dialog: "建议无故走应急车道直接扣 12 分"},
            {name: '',        col: 4,   speed: 60, top:  2900, img: 'car_embulas', dialog: "前面什么情况，我车上有病人啊！！！"},
        ]
    },

    // scene 7   // 无论你跑多快，总有一个大众会超你
    {
        title: '无故刹车',
        cars: [
            {name: '',        col: 1, speed: 110, top:  900, img: 'car_break',        dialog: ""},
            {name: '',        col: 1,   speed: 110, top:  1600, img: 'car_yellow', dialog: "前方无车，也没有限速摄像头，你也没超速，有必要点刹车吗。空气阻力压不住你吗。"},
            {name: '',        col: 3,   speed: 95,  top:  1500, img: 'car_mini',   dialog: ""},
        ]
    },

    // scene last   // 无论你跑多快，总有一个大众会超你
    {
        title: '我',
        cars: [
            {name: '',        col: 1, speed: 120, top:  1100, img: 'car',        dialog: ""},
            {name: '',        col: 2, speed: 110, top:  1500, img: 'car',        dialog: ""},
            {name: '',        col: 1, speed: 120, top:  1800, img: 'car',        dialog: ""},
            {name: '',        col: 2,   speed: 110,  top:  2000, img: 'car_mini',   dialog: ""},
            {name: '',        col: 3,   speed: 176, top:  1000, img: 'car_yellow', dialog: "我只是不要命"},
        ]
    },
]


