
class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.vaccineList = [];
    }

    vaccine() {
        let vaccinem2 = {
            name: "m2"
        }
        if (this.vaccineList.length > 0) {

            if (this.vaccineList == "m2") {
                this.vaccineList.push("n3")
            } else {
                this.vaccineList.push(vaccinem2)
            }
        }
    }

    allVaccine() {
        if (this.vaccineList.length > 0) {
            this.vaccineList.forEach((vacinei => {
                console.log(vacinei)
            }))
        } else {
            console.log("no hay ninguna vacuna");
        }
    }

    getName() {
        return this.name;
    }
    setName(name) {
        return this.name = name;
    }

}

const animal1 = new Animal('Dog', 3);
const animal2 = new Animal('Cat', 5);

console.log(animal1.getName())
console.log(animal2.allVaccine());
console.log(animal1.name());
animal1.vaccine()

animal1.vaccine()

