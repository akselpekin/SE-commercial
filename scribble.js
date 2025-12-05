const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.prepend(canvas);

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = '-1';
canvas.style.pointerEvents = 'none';
canvas.style.opacity = '0.4';

let width, height;
let walkers = [];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    ctx.clearRect(0, 0, width, height);
}

window.addEventListener('resize', resize);
resize();

class Walker {
    constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.lineWidth = Math.random() * 3 + 2; 
    }

    update() {
        this.vx += (Math.random() * 1 - 0.5);
        this.vy += (Math.random() * 1 - 0.5);

        const speed = Math.sqrt(this.vx*this.vx + this.vy*this.vy);
        const maxSpeed = 3;
        if (speed > maxSpeed) {
            this.vx = (this.vx / speed) * maxSpeed;
            this.vy = (this.vy / speed) * maxSpeed;
        }

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;
    }

    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x - this.vx, this.y - this.vy);
        ctx.lineTo(this.x, this.y);
        
        ctx.strokeStyle = 'rgba(50, 50, 50, 0.15)';
        ctx.lineWidth = this.lineWidth;
        ctx.lineCap = 'round';
        ctx.stroke();
    }
}

for(let i=0; i<3; i++) {
    walkers.push(new Walker());
}

function animate() {
    walkers.forEach(w => {
        w.update();
        w.draw();
    });
    
    if (Math.random() < 0.05) {
        ctx.fillStyle = 'rgba(245, 245, 245, 0.01)';
        ctx.fillRect(0, 0, width, height);
    }

    requestAnimationFrame(animate);
}

animate();
