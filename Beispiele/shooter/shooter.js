


const agent = {
    firstName: "James",
    lastName: "Bond",
    lives: 5,
    positionX: 200,
    positionY: 200,
    weapon: ["Berreta 9mm", "AK-47", "Granatenwerfer"],
    bullets: 10,
    actualWeaponIndex: 0,
    printAgent() {
        console.log(`Agent ${this.firstName} ${this.lastName} | Lives ${this.lives} | Position (${this.positionX}, ${this.positionY}) | Weapon: ${this.GetActualWeapon()} | Bullets: ${this.bullets}`);
    },
    damage() {
        this.lives--;
    },
    walkForward() {
        this.positionY -= 5;
    },
    walkBackward() {
        this.positionY += 5;
    },
    walkLeft() {
        this.positionX -= 5;
    },
    walkRight() {
        this.positionX += 5;
    },
    GetActualWeapon() {
        return this.weapon[this.actualWeaponIndex];
    },
    changeWeapon() {
        this.actualWeaponIndex++;
        this.actualWeaponIndex = this.actualWeaponIndex % this.weapon.length;
    },
    shoot() {
        this.bullets--;
    }
};



agent.printAgent();
agent.damage();
agent.printAgent();
agent.walkForward();
agent.walkRight();
agent.changeWeapon();
agent.shoot();
agent.printAgent();
agent.shoot();
agent.shoot();
agent.shoot();
agent.changeWeapon()
agent.printAgent();
