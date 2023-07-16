//Balloon POP Typing Game

let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');
let gameCanvas = document.querySelector('#gameCanvas');
let gameCtx = gameCanvas.getContext("2d");
let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;
let gameWidth = gameCanvas.width = window.innerWidth;
let gameHeight = gameCanvas.height = window.innerHeight;
let x = 0;
let y = 0;


var popImage = document.getElementById('popImage');

// Initial step
var pg = 0;
var totalPg = 100;

let updatePgBar = () => {

    let loader = () => {
        let loaderImg = new Image();
        loaderImg.src = "./img/Loaderimg.png";
        loaderImg.onload = function () {
            ctx.drawImage(loaderImg, 0, 0, canvas.width, canvas.height);
        };
    };
    // Function Invoking
    loader();

    // Calculate the progress bar width
    const pgWidth = (pg / totalPg / 3) * canvas.width;

    // Draw the progress bar
    ctx.fillStyle = "blue";
    ctx.fillRect(width / 3.30, height / 1.76, pgWidth, 19);

    // Check if the progress is complete
    if (pg >= totalPg) {
        // Clear the canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Loading screen Image
        const backgroundImage = new Image();
        backgroundImage.src = './img/bg.jpg';
        backgroundImage.onload = function () {
            // Draw the background image on the canvas
            ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        };

        var image = new Image();
        image.src = './img/cloud.png';
       

        function animate() {
            ctx.drawImage(backgroundImage, 0, 0, width, height);
            ctx.drawImage(image, x, y, 300, 200);
            ctx.drawImage(image, x-100, y+20, 300, 200);
            ctx.drawImage(image, x + 340, y-10, 350, 140);
            ctx.drawImage(image, x - 340, y-10, 350, 140);
            ctx.drawImage(image, x + 700, y+5, 400, 170);
            ctx.drawImage(image, x - 700, y+5, 400, 170);
            ctx.drawImage(image, x + 1010, y, 170, 100);
            ctx.drawImage(image, x - 1010, y, 170, 100);
            ctx.drawImage(image, x + 1160, y + 5, 300, 170);
            ctx.drawImage(image, x - 1160, y + 5, 300, 170);
            ctx.drawImage(image, x + 1380, y - 15, 100, 180);
            ctx.drawImage(image, x - 1380, y - 15, 100, 180);
            ctx.drawImage(image, x + 1650, y+25, 70, 50);
            ctx.drawImage(image, x - 1650, y+25, 70, 50);
            ctx.drawImage(image, x + 2000, y, 150, 120);
            ctx.drawImage(image, x - 2000, y, 150, 120);
            ctx.drawImage(image, x + 2300, y, 130, 100);
            ctx.drawImage(image, x - 2300, y, 130, 100);
            x += 1.3;
            if (x > canvas.width) {
                x = -image.width;
            };
            drawButton();
            requestAnimationFrame(animate);

        };
        animate();
        var backgroundSound = document.getElementById('backgroundSound')
        backgroundSound.play();
    };
};

// Start the game and update the progress bar
function startGame() {
    // Simulate the progress increment
    const increment = 4;
    const interval = setInterval(() => {
        // Increase the progress
        pg += increment;

        // Update the progress bar and main screen
        updatePgBar();
        // Check if the progress is complete
        if (pg >= totalPg) {
            // Game is complete, stop the interval
            clearInterval(interval);
        }
    }, 120); // Duration
}
startGame();

var image = new Image();
image.src = "./img/bg.jpg";
image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

var buttonX = width / 2.7; // starting position of button from left
var buttonY = height / 1.25; // starting position of button from top
var buttonWidth = 440; // Width of the button
var buttonHeight = 130; // Height of the button

image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
};

function drawButton() {
    //T
    var imageA1 = new Image();
    imageA1.src = "./img/T.png";
    ctx.drawImage(imageA1, width - width / 1.4, height - height / 1.1, 100, 200);
    // Y
    var imageA1 = new Image();
    imageA1.src = "./img/Y.png";
    ctx.drawImage(imageA1, width - width / 1.55, height - height / 1.1, 100, 200);
    // P
    var imageA1 = new Image();
    imageA1.src = "./img/P.png";
    ctx.drawImage(imageA1, width - width / 1.74, height - height / 1.1, 100, 200);
    // I
    var imageA1 = new Image();
    imageA1.src = "./img/I.png";
    ctx.drawImage(imageA1, width - width / 1.98, height - height / 1.1, 100, 200);
    // N
    var imageA1 = new Image();
    imageA1.src = "./img/N.png";
    ctx.drawImage(imageA1, width - width / 2.3, height - height / 1.1, 100, 200);
    // G
    var imageA1 = new Image();
    imageA1.src = "./img/G.png";
    ctx.drawImage(imageA1, width - width / 2.75, height - height / 1.1, 100, 200);
    // B
    var imageA1 = new Image();
    imageA1.src = "./img/B.png";
    ctx.drawImage(imageA1, width / 4, height / 3, 100, 200);
    // A
    var imageA1 = new Image();
    imageA1.src = "./img/A.png";
    ctx.drawImage(imageA1, width / 3.1, height / 3, 100, 200);
    // L
    var imageA1 = new Image();
    imageA1.src = "./img/L.png";
    ctx.drawImage(imageA1, width / 2.55, height / 3, 100, 200);
    // L
    var imageA1 = new Image();
    imageA1.src = "./img/L1.png";
    ctx.drawImage(imageA1, width / 2.16, height / 3, 100, 200);
    // O
    var imageA1 = new Image();
    imageA1.src = "./img/O.png";
    ctx.drawImage(imageA1, width / 1.87, height / 3, 100, 200);
    // O
    var imageA1 = new Image();
    imageA1.src = "./img/O1.png";
    ctx.drawImage(imageA1, width / 1.65, height / 3, 100, 200);
    // N
    var imageA1 = new Image();
    imageA1.src = "./img/N.png";
    ctx.drawImage(imageA1, width / 1.48, height / 3, 100, 200);


    ctx.fillStyle = "rgba(240, 240, 240, 0.0)"; // Button background color
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight);

    ctx.font = "80px Comic Sans MS";
    ctx.strokeStyle = "#36ADE8";
    ctx.lineWidth = 10;
    ctx.strokeText("StartGame", buttonX + 10, buttonY + buttonHeight / 2 + 6);
    ctx.fillStyle = "white";
    ctx.fillText("StartGame", buttonX + 10, buttonY + buttonHeight / 2 + 6);
}

canvas.addEventListener("click", function (event) {
    var rect = canvas.getBoundingClientRect();
    var mouseX = event.clientX - rect.left;
    var mouseY = event.clientY - rect.top;
    if (
        mouseX > buttonX &&
        mouseX < buttonX + buttonWidth &&
        mouseY > buttonY &&
        mouseY < buttonY + buttonHeight
    ) {

        // Load the background image
        const backgroundImage = new Image();
        backgroundImage.src = './img/bg.jpg';
        backgroundImage.onload = function () {
            // Start the game loop after the image has loaded
            // gameLoop();
        };
        //New


        // Balloon variables
        let balloons = [];
        let balloonImages = ['./img/balloon1.png', './img/balloon2.png', './img/balloon3.png', './img/balloon4.png', './img/balloon5.png', './img/balloon6.png', './img/balloon7.png'];

        // Game Score variables
        let score = 0;
        let balloonsPassed = 0;

        // Add event listener for key presses
        document.addEventListener('keydown', keyDownHandler, false);

        // Create a balloon object
        function createBalloon() {
            let balloon = {
                x: Math.random() * (gameCanvas.width - 50),
                y: gameCanvas.height,
                image: getRandomBalloonImage(),
                text: getRandomLetter()
            };
            balloons.push(balloon);
        }

        // Generate a random letter
        function getRandomLetter() {
            let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            return letters[Math.floor(Math.random() * letters.length)];
        }

        // Get a random balloon image URL
        function getRandomBalloonImage() {
            return balloonImages[Math.floor(Math.random() * balloonImages.length)];
        }

        // Check if the typed letter matches the balloon letter
        function checkLetter(letter) {
            for (let i = 0; i < balloons.length; i++) {
                if (balloons[i].text === letter) {
                    // Show the pop image at the balloon's position
                    showPopImage(balloons[i].x, balloons[i].y);
                    balloons.splice(i, 1);
                    score++;
                    return true;
                }
            }
            return false;
        }

        // Show the pop image at the given position
        function showPopImage(x, y) {
            // Position the pop image at the balloon's location
            popImage.style.position = 'absolute';
            popImage.style.transform = `translate(${x}px, ${y}px)`;

            // Make the pop image visible
            popImage.style.visibility = 'visible';

            // Hide the pop image after 500 milliseconds
            setTimeout(function () {
                popImage.style.visibility = 'hidden';
            }, 500);
        }

        // Handle key down events
        function keyDownHandler(event) {
            let letter = String.fromCharCode(event.keyCode);
            if (checkLetter(letter)) {
                console.log('Pop!');
            }
        }
        //new

        function gameLoop() {
            canvas.style.display = 'none';
            gameCanvas.style.display = 'block';
            // Render the background image
            gameCtx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

            //new
            // Move and draw balloons
            for (let i = 0; i < balloons.length; i++) {
                let balloon = balloons[i];
                balloon.y -= 2;

                // Draw the balloon image
                var balloonImage = new Image();
                balloonImage.src = balloon.image;
                gameCtx.drawImage(balloonImage, balloon.x - 40, balloon.y - 70, 80, 100);

                //new
                // Draw the letter inside the balloon
                gameCtx.font = '26px Arial';
                gameCtx.fillStyle = 'Black';
                gameCtx.textAlign = 'center';
                gameCtx.fillText(balloon.text, balloon.x, balloon.y - 15);

                // Check if ten balloons have passed
                if (balloonsPassed >= 5) {
                    // Stop the game or perform any other actions
                    console.log('Game Over');
                    Swal.fire(
                        'Game Over',
                        'Your Score is ' + score,
                        'success'
                    );
                    return; // Exit the update function
                }

                // Check if balloon has reached the top of the screen
                if (balloon.y < 0) {
                    balloons.splice(i, 1);
                    console.log('Missed!');
                    balloonsPassed++;
                }

            }
            // Display the score
            gameCtx.font = '30px Arial';
            gameCtx.fillStyle = 'black';
            gameCtx.textAlign = 'left';
            gameCtx.fillText('Score: ' + score, 10, 30);

            // Create new balloons every second
            if (Math.random() < 0.02) {
                createBalloon();
            }
            requestAnimationFrame(gameLoop);

        }
        gameLoop();

    }
}
);  