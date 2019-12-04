function setAnimalSound(sound) {
  return target => {
    target.prototype.sound = sound
    return target
  }
}

@setAnimalSound('oink')
class Pig {
  say() {
    return this.sound
  }
}

@setAnimalSound('quack')
class Duck {
  say() {
    return this.sound
  }
}

const pig = new Pig()
const duck = new Duck();

export { pig, duck }
