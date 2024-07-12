import "../../../assets/images/luger.png";
import { Bullet } from "./Bullet.js";

export class Weapon {
	constructor(name, damageCount, x, y, angle, canvas, ctx) {
		this.name = name;
		this.damageCount = damageCount;
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.width = 32;
		this.height = 20;
		this.canvas = canvas;
		this.ctx = ctx;
		this.bullets = [];
	}

	drawWeapon = () => {
		const weapon = new Image();
		weapon.src = "./img/luger.png";
		weapon.onload = () => {
			this.ctx.save();
			this.ctx.translate(this.x, this.y);
			this.ctx.rotate(this.angle);
			this.ctx.drawImage(weapon, 0, 0, this.width, this.height);
			this.ctx.restore();
		};
	};

	updateCoords = (x, y) => {
		this.x = x;
		this.y = y;
	};

	updateAngleWeapon = (angle) => {
		this.angle = angle;
	};

	createBullet = () => {
		const bullet = new Bullet(this.angle, this.canvas, this.ctx, this.x, this.y);
		this.bullets.push(bullet);
	};

	shot = () => {
		this.bullets.forEach((bullet) => {
			if (!bullet.getIsOffScreen()) {
				bullet.updateCoords();
				bullet.draw();
			}
		});
	};
}
