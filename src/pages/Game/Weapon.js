import "../../assets/images/luger.png";

export class Weapon {
	constructor(name, damageCount, x, y, angle, ctx) {
		this.name = name;
		this.damageCount = damageCount;
		this.x = x;
		this.y = y;
		this.angle = angle;
		this.width = 32;
		this.height = 20;
		this.ctx = ctx;
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
}
