
gsap.to("header", {
    backgroundColor: "#000",
    height: "80px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "header",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        start: "top -30%",
        end: "top -80%",
        scrub: 2,
    }
});



const canvas = document.getElementById('bubbleCanvas');
const ctx = canvas.getContext('2d');
let bubbles = [];

// Resize the canvas to the full window size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Bubble constructor
function Bubble(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx; // Horizontal speed
    this.dy = dy; // Vertical speed
    this.alpha = 1; // Transparency

    this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(173, 216, 230, ${this.alpha})`; // Light blue bubbles
        ctx.fill();
        ctx.closePath();
    };

    this.update = function () {
        this.x += this.dx;
        this.y += this.dy;
        this.alpha -= 0.005; // Fade the bubble over time

        // Remove the bubble if it fades out completely
        if (this.alpha <= 0) {
            bubbles.splice(bubbles.indexOf(this), 1);
        }

        this.draw();
    };
}

// Function to add bubbles on mouse events
function createBubbles(event) {
    const x = event.clientX;
    const y = event.clientY;
    const numberOfBubbles = 5; // Create 5 bubbles on each event

    for (let i = 0; i < numberOfBubbles; i++) {
        const radius = Math.random() * 20 + 10; // Random radius between 10 and 30
        const dx = (Math.random() - 0.5) * 2; // Random horizontal movement
        const dy = Math.random() * -3 - 1; // Random upward movement
        bubbles.push(new Bubble(x, y, radius, dx, dy));
    }
}

// Animate the bubbles
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    bubbles.forEach(bubble => bubble.update());
    requestAnimationFrame(animate);
}

// Event listeners for mouse movement and clicks
window.addEventListener('resize', resizeCanvas);
canvas.addEventListener('mousemove', createBubbles);
canvas.addEventListener('click', createBubbles);

// Initial setup
resizeCanvas();
animate();


//menu
const menuBtn = document.getElementById('menu-btn');
const dropdownMenu = document.getElementById('dropdown-menu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// Optional: Close the dropdown when clicking outside
window.addEventListener('click', (event) => {
    if (!menuBtn.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});