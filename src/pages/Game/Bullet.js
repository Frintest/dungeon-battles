export class Bullet {
	constructor(x, y, angle, ctx) {
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.speed = 10;
		this.width = 20;
		this.height = 4;
		this.ctx = ctx;
	}

	updateCoords() {
		this.x += this.speed * Math.cos(this.angle);
		this.y += this.speed * Math.sin(this.angle);
	}

	draw() {
		this.ctx.save();
		this.ctx.translate(this.x, this.y);
		this.ctx.rotate(this.angle);
		this.ctx.fillStyle = "#ffffff";
		this.ctx.fillRect(0, 0, this.width, this.height);
		this.ctx.restore();
	}
}
