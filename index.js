class Heroi {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  
    atacar() {
      let atack;
  
      switch (this.type) {
        case "mago":
          atack = "magia";
          break;
        case "guerreiro":
          atack = "espada";
          break;
        case "monge":
          atack = "artes marciais";
          break;
        case "ninja":
          atack = "shuriken";
          break;
        default:
          atack = "usou um ataque desconhecido";
          break;
      }
  
      console.log(`O ${this.type} atacou usando ${atack}`);
    }
  }
  
  const heroi1 = new Heroi("Gandalf", 1000, "mago");
  const heroi2 = new Heroi("Aragorn", 35, "guerreiro");
  
  heroi1.atacar();
  heroi2.atacar();