var ball = document.getElementById('ball');
var rod1 = document.getElementById('rod1');
var rod2 = document.getElementById('rod2');

const storeName = "PPName";
const storeScore = "PPMaxScore";
const rod1Name = "Rod 1";
const rod2Name = "Rod 2";

let score,
    maxScore,
    movement,
    rod,
    ballSpeedX = 2,
    ballSpeedY = 2;

let gameOn = false;

(function () {
    rod = localStorage.getItem(storeName);
    maxScore = localStorage.getItem(storeScore);

    if (rod === null || maxScore === null) {
        alert("This is the first time you are playing this game. LET'S START");
        maxScore = 0;
        rod = rod1Name;
    } else {
        alert(rod + " has maximum score of " + maxScore * 100);
    }

    resetBoard(rod);
})();

function resetBoard(rodName) {
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;

    rod1.style.left = (windowWidth - rod1.offsetWidth) / 2 + 'px';
    rod2.style.left = (windowWidth - rod2.offsetWidth) / 2 + 'px';
    ball.style.left = (windowWidth - ball.offsetWidth) / 2 + 'px';

    if (rodName === rod2Name) {
        ball.style.top = (rod1.offsetTop + rod1.offsetHeight) + 'px';
        ballSpeedY = 2;
    } else if (rodName === rod1Name) {
        ball.style.top = (rod2.offsetTop - ball.offsetHeight) + 'px';
        ballSpeedY = -2;
    }

    score = 0;
    gameOn = false;
}

function storeWin(rod, score) {
    if (score > maxScore) {
        maxScore = score;
        localStorage.setItem(storeName, rod);
        localStorage.setItem(storeScore, maxScore);
    }

    clearInterval(movement);
    resetBoard(rod);

    alert(rod + " wins with a score of " + (score * 100) + ". Max score is: " + (maxScore * 100));
}

window.addEventListener('keypress', function (event) {
    let rodSpeed = 20;

    let rodRect = rod1.getBoundingClientRect();

    if (event.code === "KeyD" && ((rodRect.x + rodRect.width) < window.innerWidth)) {
        rod1.style.left = (rod1.offsetLeft + rodSpeed) + 'px';
        rod2.style.left = rod1.style.left;
    } else if (event.code === "KeyA" && (rodRect.x > 0)) {
        rod1.style.left = (rod1.offsetLeft - rodSpeed) + 'px';
        rod2.style.left = rod1.style.left;
    }

    if (event.code === "Enter" && !gameOn) {
        gameOn = true;

        let ballRect = ball.getBoundingClientRect();
        let ballX = ball.offsetLeft;
        let ballY = ball.offsetTop;
        let ballDia = ballRect.width;

        let rod1Height = rod1.offsetHeight;
        let rod2Height = rod2.offsetHeight;
        let rod1Width = rod1.offsetWidth;
        let rod2Width = rod2.offsetWidth;

        movement = setInterval(function () {
            let windowWidth = window.innerWidth;
            let windowHeight = window.innerHeight;

            // Move ball
            ballX += ballSpeedX;
            ballY += ballSpeedY;

            let rod1X = rod1.offsetLeft;
            let rod2X = rod2.offsetLeft;

            ball.style.left = ballX + 'px';
            ball.style.top = ballY + 'px';

            // Wall collision
            if ((ballX + ballDia) > windowWidth || ballX < 0) {
                ballSpeedX = -ballSpeedX;
            }

            let ballPos = ballX + ballDia / 2;

            // Check Rod 1
            if (ballY <= rod1Height) {
                if (ballPos < rod1X || ballPos > (rod1X + rod1Width)) {
                    storeWin(rod2Name, score);
                } else {
                    ballSpeedY = -ballSpeedY;
                    score++;
                }
            }

            // Check Rod 2
            else if ((ballY + ballDia) >= (windowHeight - rod2Height)) {
                if (ballPos < rod2X || ballPos > (rod2X + rod2Width)) {
                    storeWin(rod1Name, score);
                } else {
                    ballSpeedY = -ballSpeedY;
                    score++;
                }
            }
        }, 10);
    }
});
