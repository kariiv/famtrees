type Mouse = {x: null|number, y:null|number, radius:number};


class ParticleAnimation {

    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D | null;
    particles: Particle[];
    mouse: Mouse;
    keepRadius: number;
    // @ts-ignore
    particlesCount: number;
    particleColor: string;

    constructor(canvas: HTMLCanvasElement, color: string = '#fff', radius: number = 80) {
        this.canvas = canvas;
        this.particleColor = color;

        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.keepRadius = radius;

        this.mouse = {
            x: null,
            y: null,
            radius: (this.canvas.height/this.keepRadius) * (this.canvas.width/this.keepRadius)
        }

        this.setCanvasSize()

        window.addEventListener("mousemove",  event => {
            this.mouse.x = event.x;
            this.mouse.y = event.y;
        });

        window.addEventListener('resize', () => {
            this.setCanvasSize()
            this.build()
        })
        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        })
    }

    setCanvasSize() {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.particlesCount = (this.canvas.height * this.canvas.width) / 9000;
        this.mouse.radius = (this.canvas.height/this.keepRadius) * (this.canvas.width/this.keepRadius)
    }

    build() {
        this.particles = []
        for (let i = 0; i < this.particlesCount; i++) {
            let size = (Math.random() * 5) + 1;
            let size2 = size * 2
            let x = (Math.random() * ((this.canvas.width - size2) - size2) + size2)
            let y = (Math.random() * ((this.canvas.height - size2) - size2) + size2)
            let directionX = (Math.random() * 2) - 1;
            let directionY = (Math.random() * 2) - 1;
            let color = this.particleColor;
            this.particles.push(new Particle(x, y, directionX, directionY, size, color));
        }
    }

    animate() {
        requestAnimationFrame(() => this.animate());

        const { canvas, mouse, particles, ctx } = this;
        ctx!.clearRect(0,0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++)
            particles[i].update(canvas, mouse, ctx!);

        this.connect();
    }

    connect() {
        const { particles, canvas, ctx } = this;
        const distD = 7
        let opacityValue = 1.0;
        for (let a = 0; a < particles.length; a++) {
            for (let b = a; b < particles.length; b++) {
                const aX = particles[a].x;
                const aY = particles[a].y;
                const bX = particles[b].x;
                const bY = particles[b].y;
                let distance = (aX - bX) * (aX - bX) + (aY - bY) * (aY - bY);

                if (distance < (canvas.width/distD) * (canvas.height/distD)) {
                    opacityValue = 0.6 - (distance/10000)
                    ctx!.strokeStyle = `rgba(255,255,255,${opacityValue})`;
                    ctx!.beginPath();
                    ctx?.moveTo(aX, aY);
                    ctx?.lineTo(bX, bY);
                    ctx?.stroke();
                }
            }
        }
    }
}

class Particle {

    x: number;
    y: number;
    directionX: number;
    directionY: number;
    size: number;
    color: string;

    constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x,this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(canvas: HTMLCanvasElement, mouse: Mouse, ctx: CanvasRenderingContext2D) {
        // Keep particle in canvas
        if (this.x > canvas.width || this.x < 0)
            this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0)
            this.directionY = -this.directionY;

        // Collision with mouse
        const { x, y, radius} = mouse;
        if (x && y) {
            let dx = x - this.x;
            let dy = y - this.y;
            let distance = Math.sqrt(dx*dx + dy*dy);

            if (distance < radius + this.size) {
                const size10 = this.size * 10;
                if (x < this.x && this.x < canvas.width - size10)
                    this.x += 10;
                if (x > this.x && this.x > size10)
                    this.x -= 10;
                if (y < this.y && this.y < canvas.height - size10)
                    this.y += 10;
                if (y > this.y && this.y > size10)
                    this.y -= 10;
            }
        }
        this.x += this.directionX;
        this.y += this.directionY;
        this.draw(ctx);
    }
}

export default ParticleAnimation;