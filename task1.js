function Unit(type, health, maxHealth, maxDistance) {
   this.type = type;
   this.health = health;
   this.maxHealth = maxHealth;
   this.maxDistance = maxDistance;
};

Unit.prototype.isReadyToMove = function (distance) {
   return this.maxDistance >= distance
};

Unit.prototype.isReadyToFight = function () {
   return this.health >= this.maxHealth / 2
};

Unit.prototype.restore = function () {
   if (this.health !== this.maxHealth) {
      return this.health = this.maxHealth
   }
};

Unit.prototype.clone = function () {
   const clone = new Unit(this.type, this.health, this.maxHealth, this.maxDistance)
   return clone
}

function Army(defaultUnits) {
   this.units = [];
   if (defaultUnits) {
      this.combineUnits(defaultUnits)
   };
}

Army.prototype.isReadyToMove = function (distance) {
   return this.units.every(unit => unit.isReadyToMove(distance))
}

Army.prototype.isReadyToFight = function () {
   return this.units.every(unit => unit.isReadyToFight())
}

 Army.prototype.restore = function () {
    return this.units.forEach(unit => unit.restore())
 }

 Army.prototype.getReadyToMoveUnits = function (distance) {
    const readyToMoveUnits = this.units.filter(unit => unit.isReadyToMove(distance))
    console.log(readyToMoveUnits)
    return readyToMoveUnits
 }

Army.prototype.combineUnits = function (array) {
   array.forEach(element => {
      this.units.push(element)
   });
}
 Army.prototype.cloneUnit = function(unitId) {
    const cloneId = this.units[unitId].clone()
    return cloneId
 }

const mage = new Unit("mage", 400, 1000, 20);
const warrior = new Unit("warrior", 1000, 1500, 30);
const healer = new Unit("healer", 600, 800, 25);
const buffer = new Unit("buffer", 800, 1200, 20);

const units1 = [];

units1.push(mage);
units1.push(warrior);
units1.push(healer);
units1.push(buffer);

const army = new Army(units1)