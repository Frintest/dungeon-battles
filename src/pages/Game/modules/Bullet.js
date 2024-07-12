export class Bullet {
	constructor(angle, canvas, ctx, weaponX, weaponY) {
		this.angle = angle;
		this.x = weaponX + (Math.cos(this.angle) * 20 - Math.sin(this.angle) * 5);
		this.y = weaponY + (Math.sin(this.angle) * 20 + Math.cos(this.angle) * 5);
		this.speed = 5;
		this.width = 20;
		this.height = 4;
		this.canvas = canvas;
		this.ctx = ctx;
	}

	updateCoords = () => {
		this.x += this.speed * Math.cos(this.angle);
		this.y += this.speed * Math.sin(this.angle);
	};

	draw = () => {
		this.ctx.save();
		this.ctx.translate(this.x, this.y);
		this.ctx.rotate(this.angle);
		this.ctx.fillStyle = "#ffffff";
		this.ctx.fillRect(0, -this.height / 2, this.width, this.height);
		this.ctx.restore();
	};

	isOffScreen = () => {
		return (
			this.x < 0 ||
			this.x > this.canvas.width ||
			this.y < 0 ||
			this.y > this.canvas.height
		);
	};

	getIsOffScreen = () => {
		return this.isOffScreen();
	}
}
