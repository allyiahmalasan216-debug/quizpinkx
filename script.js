const world = document.getElementById("world");
const player = document.getElementById("player");

const scoreText = document.getElementById("score");
const livesText = document.getElementById("lives");
const levelText = document.getElementById("level");
const message = document.getElementById("message");

const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");
const jumpBtn = document.getElementById("jumpBtn");

let playerX = 70;
let playerY = 128;
let velocityY = 0;

const gravity = 0.7;
const jumpPower = 14;
const speed = 5;

let movingLeft = false;
let movingRight = false;
let facingRight = true;
let onGround = false;

let score = 0;
let lives = 3;
let currentLevel = 1;

let platforms = [];
let fruits = [];
let finishX = 0;

let gameRunning = true;


/* =========================
   LEVELS
========================= */

const levels = {

1: {
    length: 3000,

    platforms: [
        [0,100,500],
        [620,100,350],
        [1080,150,300],
        [1500,100,400],
        [1980,170,350],
        [2440,100,500]
    ],

    fruits: [
        [200,150,"🍓"],
        [720,150,"🍎"],
        [1150,200,"🍊"],
        [1630,150,"🍓"],
        [2070,220,"🍎"],
        [2580,150,"🍊"]
    ]
},

2: {
    length: 3500,

    platforms: [
        [0,100,350],
        [480,140,230],
        [820,200,250],
        [1200,110,200],
        [1500,170,250],
        [1900,120,180],
        [2200,200,250],
        [2600,100,180],
        [2900,160,400]
    ],

    fruits: [
        [150,150,"🍓"],
        [540,190,"🍎"],
        [900,250,"🍊"],
        [1260,160,"🍓"],
        [1580,220,"🍎"],
        [1960,170,"🍊"],
        [2280,250,"🍓"],
        [2670,150,"🍎"],
        [3050,210,"🍊"]
    ]
},

3: {
    length: 4200,

    platforms: [
        [0,100,300],
        [430,170,180],
        [750,230,180],
        [1070,120,160],
        [1360,200,170],
        [1680,120,150],
        [1980,250,180],
        [2310,140,150],
        [2600,210,170],
        [2900,120,140],
        [3200,240,180],
        [3500,120,160],
        [3800,180,350]
    ],

    fruits: [
        [100,150,"🍓"],
        [470,220,"🍎"],
        [790,280,"🍊"],
        [1110,170,"🍓"],
        [1400,250,"🍎"],
        [1720,170,"🍊"],
        [2020,300,"🍓"],
        [2350,190,"🍎"],
        [2640,260,"🍊"],
        [2940,170,"🍓"],
        [3240,290,"🍎"],
        [3540,170,"🍊"],
        [3900,230,"🍓"]
    ]
},

4: {
    length: 5000,

    platforms: [
        [0,100,250],
        [380,180,150],
        [680,260,140],
        [1000,140,130],
        [1300,230,130],
        [1600,120,120],
        [1900,280,140],
        [2220,150,120],
        [2500,240,130],
        [2800,120,120],
        [3100,270,140],
        [3420,150,120],
        [3700,250,140],
        [4050,130,120],
        [4350,290,150],
        [4650,160,300]
    ],

    fruits: [
        [80,150,"🍓"],
        [420,230,"🍎"],
        [720,310,"🍊"],
        [1040,190,"🍓"],
        [1340,280,"🍎"],
        [1640,170,"🍊"],
        [1940,330,"🍓"],
        [2260,200,"🍎"],
        [2540,290,"🍊"],
        [2840,170,"🍓"],
        [3140,320,"🍎"],
        [3460,200,"🍊"],
        [3740,300,"🍓"],
        [4090,180,"🍎"],
        [4390,340,"🍊"],
        [4710,210,"🍓"]
    ]
},

5: {
    length: 6000,

    platforms: [
        [0,100,220],
        [350,200,120],
        [650,300,110],
        [950,160,100],
        [1230,270,100],
        [1510,130,90],
        [1780,320,100],
        [2070,180,90],
        [2350,300,100],
        [2630,140,90],
        [2900,330,100],
        [3180,170,90],
        [3450,300,100],
        [3720,130,90],
        [3990,340,100],
        [4260,180,90],
        [4530,300,100],
        [4800,140,90],
        [5070,330,100],
        [5340,180,90],
        [5610,250,300]
    ],

    fruits: [
        [60,150,"🍓"],
        [380,250,"🍎"],
        [680,350,"🍊"],
        [980,210,"🍓"],
        [1260,320,"🍎"],
        [1540,180,"🍊"],
        [1810,370,"🍓"],
        [2100,230,"🍎"],
        [2380,350,"🍊"],
        [2660,190,"🍓"],
        [2930,380,"🍎"],
        [3210,220,"🍊"],
        [3480,350,"🍓"],
        [3750,180,"🍎"],
        [4020,390,"🍊"],
        [4290,230,"🍓"],
        [4560,350,"🍎"],
        [4830,190,"🍊"],
        [5100,380,"🍓"],
        [5370,230,"🍎"],
        [5700,300,"🏆"]
    ]
}

};


/* =========================
   LOAD LEVEL
========================= */

function loadLevel(level) {

    world.innerHTML = "";

    world.appendChild(player);

    platforms = [];
    fruits = [];

    /* PLATFORMS */

    levels[level].platforms.forEach(p => {

        const platform = document.createElement("div");

        platform.className = "platform";

        platform.style.left = p[0] + "px";
        platform.style.bottom = p[1] + "px";
        platform.style.width = p[2] + "px";

        world.appendChild(platform);

        platforms.push({
            left: p[0],
            bottom: p[1],
            width: p[2],
            height: 28
        });

    });


    /* FRUITS */

    levels[level].fruits.forEach(f => {

        const fruit = document.createElement("div");

        fruit.className = "fruit";

        fruit.textContent = f[2];

        fruit.style.left = f[0] + "px";
        fruit.style.bottom = f[1] + "px";

        world.appendChild(fruit);

        fruits.push({
            element: fruit,
            collected: false
        });

    });


    /* FINISH */

    finishX = levels[level].length - 180;

    const finish = document.createElement("div");

    finish.className = "finish";

    finish.style.left = finishX + "px";
    finish.style.bottom = "100px";

    world.appendChild(finish);


    /* RESET PLAYER */

    playerX = 70;
    playerY = 128;

    velocityY = 0;

    facingRight = true;

    player.classList.remove("facing-left");

    levelText.textContent = level;
}


/* =========================
   PLATFORM COLLISION
========================= */

function checkPlatforms() {

    onGround = false;

    const playerWidth = 42;
    const playerHeight = 75;

    for (const platform of platforms) {

        const playerLeft = playerX;
        const playerRight = playerX + playerWidth;

        const playerBottom = playerY;
        const playerTop = playerY + playerHeight;

        const platformLeft = platform.left;
        const platformRight =
            platform.left + platform.width;

        const platformTop =
            platform.bottom + platform.height;


        const horizontalCollision =
            playerRight > platformLeft &&
            playerLeft < platformRight;


        const landing =
            playerBottom <= platformTop &&
            playerBottom >= platformTop - 25;


        if (
            horizontalCollision &&
            velocityY <= 0 &&
            landing
        ) {

            playerY = platformTop;

            velocityY = 0;

            onGround = true;

        }
    }
}


/* =========================
   COLLECT FRUITS
========================= */

function collectFruits() {

    fruits.forEach(fruit => {

        if (fruit.collected) return;

        const playerRect =
            player.getBoundingClientRect();

        const fruitRect =
            fruit.element.getBoundingClientRect();


        if (
            playerRect.left < fruitRect.right &&
            playerRect.right > fruitRect.left &&
            playerRect.top < fruitRect.bottom &&
            playerRect.bottom > fruitRect.top
        ) {

            fruit.collected = true;

            fruit.element.remove();

            score++;

            scoreText.textContent = score;
        }

    });
}


/* =========================
   CAMERA
========================= */

function updateCamera() {

    let cameraX =
        playerX -
        window.innerWidth / 2;


    if (cameraX < 0) {
        cameraX = 0;
    }


    const maxCamera =
        levels[currentLevel].length -
        window.innerWidth;


    if (cameraX > maxCamera) {
        cameraX = maxCamera;
    }


    world.style.left =
        -cameraX + "px";
}


/* =========================
   CHARACTER DIRECTION
========================= */

function updateDirection() {

    if (facingRight) {

        player.classList.remove("facing-left");

    } else {

        player.classList.add("facing-left");

    }
}


/* =========================
   CHARACTER ANIMATION
========================= */

function updateAnimation() {

    if (!onGround) {

        player.classList.add("jumping");

    } else {

        player.classList.remove("jumping");

    }


    if (movingLeft || movingRight) {

        player.classList.add("running");

    } else {

        player.classList.remove("running");

    }
}


/* =========================
   JUMP
========================= */

function jump() {

    if (!gameRunning || gamePaused) {

        if (lives <= 0) {

            lives = 3;
            score = 0;
            currentLevel = 1;

            livesText.textContent = lives;
            scoreText.textContent = score;

            message.innerHTML = "";

            gameRunning = true;

            loadLevel(1);
        }

        return;
    }


    if (onGround) {

        velocityY = jumpPower;

        onGround = false;

    }
}


/* =========================
   FALL / LIFE
========================= */

function checkFall() {

    if (playerY < -160) {

        lives--;

        livesText.textContent = lives;


        if (lives <= 0) {

            gameRunning = false;

            message.innerHTML =
                "💔 GAME OVER 💔<br>Press ⬆ to restart";

        } else {

            playerX = 70;

            playerY = 150;

            velocityY = 0;

        }
    }
}


/* =========================
   FINISH LEVEL
========================= */

function checkFinish() {

    if (playerX >= finishX) {

        gameRunning = false;


        if (currentLevel < 5) {

            message.innerHTML =
                "🌸 LEVEL " +
                currentLevel +
                " COMPLETE! 🌸";


            setTimeout(() => {

                currentLevel++;

                message.innerHTML = "";

                gameRunning = true;

                loadLevel(currentLevel);

            }, 1500);


        } else {

            message.innerHTML =
                "🏆 YOU WIN! 🩷<br>" +
                "ALL 5 LEVELS COMPLETE!";

        }
    }
}


/* =========================
   MAIN GAME LOOP
========================= */

function update() {

    if (!gameRunning || gamePaused) {

        requestAnimationFrame(update);

        return;
    }


    /* MOVE LEFT */

    if (movingLeft) {

        playerX -= speed;

        facingRight = false;
    }


    /* MOVE RIGHT */

    if (movingRight) {

        playerX += speed;

        facingRight = true;
    }


    /* DON'T GO OUTSIDE */

    if (playerX < 0) {

        playerX = 0;
    }


    /* GRAVITY */

    velocityY -= gravity;

    playerY += velocityY;


    /* COLLISIONS */

    checkPlatforms();

    collectFruits();

    checkFall();

    checkFinish();


    /* CHARACTER POSITION */

    player.style.left =
        playerX + "px";

    player.style.bottom =
        playerY + "px";


    /* CHARACTER */

    updateDirection();

    updateAnimation();


    /* CAMERA */

    updateCamera();


    requestAnimationFrame(update);
}


/* =========================
   KEYBOARD
========================= */

document.addEventListener("keydown", event => {

    const key = event.key.toLowerCase();


    if (
        event.key === "ArrowLeft" ||
        key === "a"
    ) {

        movingLeft = true;

        facingRight = false;

        updateDirection();
    }


    if (
        event.key === "ArrowRight" ||
        key === "d"
    ) {

        movingRight = true;

        facingRight = true;

        updateDirection();
    }


    if (
        event.key === "ArrowUp" ||
        event.key === " " ||
        key === "w"
    ) {

        event.preventDefault();

        jump();
    }

});


document.addEventListener("keyup", event => {

    const key = event.key.toLowerCase();


    if (
        event.key === "ArrowLeft" ||
        key === "a"
    ) {

        movingLeft = false;
    }


    if (
        event.key === "ArrowRight" ||
        key === "d"
    ) {

        movingRight = false;
    }

});


/* =========================
   MOBILE BUTTONS
========================= */

function holdButton(button, start, stop) {

    button.addEventListener(
        "touchstart",
        event => {

            event.preventDefault();

            start();

        },
        { passive: false }
    );


    button.addEventListener(
        "touchend",
        event => {

            event.preventDefault();

            stop();

        },
        { passive: false }
    );


    button.addEventListener(
        "mousedown",
        start
    );


    button.addEventListener(
        "mouseup",
        stop
    );


    button.addEventListener(
        "mouseleave",
        stop
    );
}


/* LEFT */

holdButton(
    leftBtn,

    () => {

        movingLeft = true;

        facingRight = false;

        updateDirection();

    },

    () => {

        movingLeft = false;

    }
);


/* RIGHT */

holdButton(
    rightBtn,

    () => {

        movingRight = true;

        facingRight = true;

        updateDirection();

    },

    () => {

        movingRight = false;

    }
);


/* JUMP */

jumpBtn.addEventListener(
    "touchstart",
    event => {

        event.preventDefault();

        jump();

    },
    { passive: false }
);


jumpBtn.addEventListener(
    "mousedown",
    jump
);


/* =========================
   START GAME
========================= */

loadLevel(1);

update();
/* =========================
   PAUSE / MENU / EXIT
========================= */

let gamePaused = false;


/* PAUSE */

function togglePause() {

    if (!gameRunning) return;

    gamePaused = true;

    document
        .getElementById("pauseMenu")
        .classList
        .remove("hidden");
}


/* RESUME */

function resumeGame() {

    gamePaused = false;

    document
        .getElementById("pauseMenu")
        .classList
        .add("hidden");
}


/* MAIN MENU */

function goMainMenu() {

    gamePaused = false;
    gameRunning = false;

    document
        .getElementById("pauseMenu")
        .classList
        .add("hidden");

    document
        .getElementById("mainMenu")
        .classList
        .remove("hidden");
}


/* PLAY FROM MAIN MENU */

function startFromMenu() {

    document
        .getElementById("mainMenu")
        .classList
        .add("hidden");

    score = 0;
    lives = 3;
    currentLevel = 1;

    scoreText.textContent = score;
    livesText.textContent = lives;
    levelText.textContent = currentLevel;

    gameRunning = true;

    loadLevel(1);
}


/* EXIT GAME */

function exitGame() {

    gameRunning = false;
    gamePaused = false;

    document
        .getElementById("pauseMenu")
        .classList
        .add("hidden");

    document
        .getElementById("mainMenu")
        .classList
        .add("hidden");

    message.innerHTML =
        "👋 Thanks for playing! 🎀<br>" +
        "<small>Tap PLAY to start again.</small>";

    document
        .getElementById("mainMenu")
        .classList
        .remove("hidden");
}