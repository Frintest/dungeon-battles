import { Weapon } from "./Weapon.js";
import { Bullet } from "./Bullet.js";

export class Hero {
	constructor(name, lifeCount, avatarSrc, weaponName, x, y, canvas, ctx) {
		this.name = name;
		this.lifeCount = lifeCount;
		this.avatarSrc = avatarSrc;
		this.x = x;
		this.y = y;
		this.width = 40;
		this.height = 40;
		this.angle = 0;
		this.speed = 5;
		this.dx = 0;
		this.dy = 0;
		this.weaponName = weaponName;
		this.canvas = canvas;
		this.ctx = ctx;
	}

	drawHero = () => {
		const avatar = new Image();
		avatar.src = `./img/${this.avatarSrc}`;
		avatar.onload = () => {
			this.ctx.save();
			this.ctx.translate(this.x, this.y);
			this.ctx.rotate(this.angle);
			this.ctx.drawImage(avatar, -this.width / 2, -this.height / 2, this.width, this.height);
			this.ctx.restore();
		};
	};

	updateCoords = () => {
		this.x += this.dx;
		this.y += this.dy;

		if (this.x < this.width / 2) {
			this.x = this.width / 2;
		}
		if (this.x > this.canvas.width - this.width / 2) {
			this.x = this.canvas.width - this.width / 2;
		}
		if (this.y < this.height / 2) {
			this.y = this.height / 2;
		}
		if (this.y > this.canvas.height - this.height / 2) {
			this.y = this.canvas.height - this.height / 2;
		}
	};

	death = () => {
		this.lifeCount = 0;
	};

	drawWeapon = () => {
		const weapon = new Weapon(this.weaponName, 0, this.x, this.y, this.angle, this.ctx);
		weapon.drawWeapon();
	};

	shot = () => {
		const bullet = new Bullet(this.x, this.y, this.angle, this.ctx);
		bullet.draw();
		bullet.updateCoords();
	};
}