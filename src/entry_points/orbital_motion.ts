import * as p5 from "p5"
import { Life, PassiveLife } from "../classes/life"
import { calculateOrbitalVelocity, Vector } from "../classes/physics"
import { GravitationalTerrain, Terrain } from "../classes/terrain"
import { VanillaWorld, World } from "../classes/world"
import { random } from "../utilities"

const main = (p: p5) => {
  let world: World
  const size = 800
  const worldSize = isThumbnail ? new Vector(280, 160) : new Vector(size, size)
  const lifeSize = 20
  const numberOfLives = isThumbnail ? 6 : 60
  const gravityCenter = worldSize.mult(0.5)
  const gravity = 200

  p.setup = () => {
    const canvas = p.createCanvas(worldSize.x, worldSize.y)
    if (isThumbnail) {
      canvas.parent("canvas-parent")
    }

    const terrains: Terrain[] = [
      new GravitationalTerrain(worldSize, gravityCenter, gravity),
    ]
    world = new VanillaWorld(worldSize, terrains)

    const lives = randomLives()
    world.addLives(lives)
  }

  p.draw = () => {
    world.next()
    world.draw(p)
  }

  function randomLives(): Life[] {
    const lives: PassiveLife[] = []
    for (let i = 0; i < numberOfLives; i += 1) {
      const position = worldSize.randomized()
      lives.push(new PassiveLife(position, lifeSize))
    }
    lives.forEach(life => {
      life.velocity = calculateOrbitalVelocity(life.position, gravityCenter, gravity)
    })

    return lives
  }
}

const sketch = new p5(main)
