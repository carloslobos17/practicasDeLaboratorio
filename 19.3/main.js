class Zombie{
    constructor(vida){
        this.vida = vida
    }
    get Vida(){
        return this.vida
    }
    bajar(golpe){
        return this.vida = this.vida - golpe 
    }
}

class Sword{
    constructor(tipo, dano){
        this.tipo = tipo
        this.dano = dano
    }
    get Dano(){
        return this.dano
    }

    atacar(){
    }
}

class Tierra extends Sword{
    constructor(){
        super("tierra",10)
    }
    atacar(){
        return this.dano
    }
}

class Netherite extends Sword{
    constructor(){
        super("netherite",100)
    }
    atacar(){
        return this.dano
} 
}

class Piedra extends Sword{
    constructor(){
        super("piedra",50)
    }
    atacar(){
        return this.dano
} 
}

let zombie1 = new Zombie("100")

let sword1 = new Tierra()
let sword2 = new Netherite()
let sword3 = new Piedra()



document.getElementById('attackButton').addEventListener('click', function() {
    document.querySelector('.sword').style.transform = 'rotate(-45deg)';
    let Dano = sword1.atacar();
    console.log(zombie1.bajar(Dano));
if (zombie1.Vida === 0) {
    return console.log("el zombie se murio");
    
}
    setTimeout(function() {
      document.querySelector('.sword').style.transform = 'rotate(0deg)';
    }, 500);
  });