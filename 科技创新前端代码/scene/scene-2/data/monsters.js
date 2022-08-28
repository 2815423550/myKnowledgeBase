// 战斗场景的主角和怪物的属性
const monsters = {
  // 玩家
  Emby: {
    position: {
      // x: 280,
      x: 330,
      y: 325
    },
    image: {
      // src: './img/embySprite.png'
      src: './img/playerRight.png'
    },
    frames: {
      max: 4,
      hold: 50
    },
    animate: true,
    name: 'Emby',
    attacks: [attacks.Tackle, attacks.Fireball]
  },
  //怪物 
  Draggle: {
    position: {
      x: 800,
      y: 100
    },
    image: {
      src: './img/draggleSprite.png'
    },
    frames: {
      max: 4,
      hold: 30
    },
    animate: true,
    isEnemy: true,
    name: 'Draggle',
    attacks: [attacks.Tackle, attacks.Fireball]
  }
}
