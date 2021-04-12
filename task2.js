function Animal(type, gender) {
    this.type = type;
    this.gender = gender;
    this.jump = function () {
        return `${this.type} is jumping`
    }
    this.walk = function () {
        return `${this.type} is walking`
    }
}

Animal.prototype.mammal = function () {
    if (this.gender === "female") {
        return `${this.type} is female so she gives milk`
    } else {
        return `${this.type} is male so NO MILK`
    }
}

Animal.prototype.steal = function(){
    if (this.type === "raccoon"){
        return "Енот Украл=)"
    }else{
        return "Все на месте"
    }
}

const raccoon = new Animal("raccoon", "male");
const cat = new Animal("cat", "female")