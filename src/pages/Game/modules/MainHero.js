import { Hero } from "./Hero.js";

const keys = {
	w: false,
	a: false,
	s: false,
	d: false,
	e: false,
};

export class MainHero extends Hero {
	updateDirection = () => {
		this.dx = 0;
		this.dy = 0;

		if (keys.w) this.dy = -this.speed;
		if (keys.a) this.dx = -this.speed;
		if (keys.s) this.dy = this.speed;
		if (keys.d) this.dx = this.speed;
	};

	handleKeyDown = (evt) => {
		if (evt.key === "w") keys.w = true;
		if (evt.key === "a") keys.a = true;
		if (evt.key === "s") keys.s = true;
		if (evt.key === "d") keys.d = true;

		this.updateDirection();
	};

	handleKeyUp = (evt) => {
		if (evt.key === "w") keys.w = false;
		if (evt.key === "a") keys.a = false;
		if (evt.key === "s") keys.s = false;
		if (evt.key === "d") keys.d = false;

		this.updateDirection();
	};

	handleMouseMove = (evt) => {
		const rect = this.canvas.getBoundingClientRect();
		const mouseX = evt.clientX - rect.left;
		const mouseY = evt.clientY - rect.top;

		this.angle = Math.atan2(mouseY - this.y, mouseX - this.x);
	};

	handleShotKey = (evt) => {
		if (evt.key === "e") {
			this.isShot = true;
			this.createBullet();
		}
	};

	handleMoveKeys = () => {
		window.addEventListener("keydown", (evt) => {
			this.handleKeyDown(evt);
			this.handleShotKey(evt);
		});
		window.addEventListener("keyup", this.handleKeyUp);
		window.addEventListener("mousemove", this.handleMouseMove);
	}
}
