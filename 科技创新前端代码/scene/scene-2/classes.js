class Sprite {
  
  // Sprite对象的属性
  constructor(
    // 这里的每一个属性都是一个对象，而这里整体的属性为一整个对象，这样做是为了避免创建新的sprite对象时传的值必须按顺序
    {
      // 这里的position是一个对象，具有x和y值，至于他是在哪里定义的对象，我不知道
    position,
    velocity,
    image,
    // max: 1, hold: 10 这里的max为“有多少帧的动画”，hold为“控制动画播放速度，可见72行”，这里的数值都只是初始默认值，
    // 实际动画的参数以后面 new Sprite时赋的值为准
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    rotation = 0
   }
  ) 
  
  {
    this.position = position
    this.image = new Image()
    // 没看懂
    this.frames = { ...frames, val: 0, elapsed: 0 }
    
    this.image.onload = () => {
      // 宽度为：图片宽度除以帧数，也就是使得只出现一个帧的动画
      this.width = this.image.width / this.frames.max
      // 高度为图片高度
      this.height = this.image.height
    }
    this.image.src = image.src

    this.animate = animate
    this.sprites = sprites
    this.opacity = 1

    this.rotation = rotation
  }

  // Sprite对象的方法————运动
  draw() {
    c.save()

    // 移动
    c.translate(
      this.position.x + this.width / 2,
      this.position.y + this.height / 2
    )

    //转向？ 
    c.rotate(this.rotation)
    c.translate(
      -this.position.x - this.width / 2,
      -this.position.y - this.height / 2
    )
    c.globalAlpha = this.opacity

    // 
    c.drawImage(
      this.image,
      this.frames.val * this.width,
      0,
      this.image.width / this.frames.max,
      this.image.height,
      this.position.x,
      this.position.y,
      this.image.width / this.frames.max,
      this.image.height
    )

    
    c.restore()

    if (!this.animate) return

// 以下构成了动画的逐帧运动效果
    if (this.frames.max > 1) {
      this.frames.elapsed++
    }
    // this.frames.hold 这里的值越大，动画播放越慢
    if (this.frames.elapsed % this.frames.hold === 0) {
      if (this.frames.val < this.frames.max - 1) this.frames.val++
      else this.frames.val = 0
    }
  }
}

//Monster对象
class Monster extends Sprite {
  // 属性
  constructor({
    position,
    velocity,
    image,
    frames = { max: 1, hold: 10 },
    sprites,
    animate = false,
    rotation = 0,
    isEnemy = false,
    name,
    attacks
  })
   
  {
    super({
      position,
      velocity,
      image,
      frames,
      sprites,
      animate,
      rotation
    })
    this.health = 100
    this.isEnemy = isEnemy
    this.name = name
    this.attacks = attacks
  }

  faint() {
    document.querySelector('#dialogueBox').innerHTML = this.name + ' fainted!'
    gsap.to(this.position, {
      y: this.position.y + 20
    })
    gsap.to(this, {
      opacity: 0
    })
    audio.battle.stop()
    audio.victory.play()
  }

  // 攻击
  attack({ attack, recipient, renderedSprites }) {
    document.querySelector('#dialogueBox').style.display = 'block'
    document.querySelector('#dialogueBox').innerHTML =
      this.name + ' used ' + attack.name

    let healthBar = '#enemyHealthBar'
    if (this.isEnemy) healthBar = '#playerHealthBar'

    let rotation = 1
    if (this.isEnemy) rotation = -2.2

    recipient.health -= attack.damage

    switch (attack.name) {
      case 'Fireball':
        audio.initFireball.play()
        const fireballImage = new Image()
        fireballImage.src = './img/fireball.png'
        const fireball = new Sprite({
          position: {
            x: this.position.x,
            y: this.position.y
          },
          image: fireballImage,
          frames: {
            max: 4,
            hold: 10
          },
          animate: true,
          rotation
        })
        renderedSprites.splice(1, 0, fireball)

        gsap.to(fireball.position, {
          x: recipient.position.x,
          y: recipient.position.y,
          onComplete: () => {
            // 敌人实际上被击中
            audio.fireballHit.play()
            gsap.to(healthBar, {
              width: recipient.health + '%'
            })

            gsap.to(recipient.position, {
              x: recipient.position.x + 10,
              yoyo: true,
              repeat: 5,
              duration: 0.08
            })

            gsap.to(recipient, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08
            })
            renderedSprites.splice(1, 1)
          }
        })

        break
      case 'Tackle':
        const tl = gsap.timeline()

        let movementDistance = 20
        if (this.isEnemy) movementDistance = -20

        tl.to(this.position, {
          x: this.position.x - movementDistance
        })
          .to(this.position, {
            x: this.position.x + movementDistance * 2,
            duration: 0.1,
            onComplete: () => {
              // 敌人实际上被击中
              audio.tackleHit.play()
              gsap.to(healthBar, {
                width: recipient.health + '%'
              })

              gsap.to(recipient.position, {
                x: recipient.position.x + 10,
                yoyo: true,
                repeat: 5,
                duration: 0.08
              })

              gsap.to(recipient, {
                opacity: 0,
                repeat: 5,
                yoyo: true,
                duration: 0.08
              })
            }
          })
          .to(this.position, {
            x: this.position.x
          })
        break
    }
  }
}

class Boundary {
  static width = 48
  static height = 48
  constructor({ position }) {
    this.position = position
    this.width = 48
    this.height = 48
  }

  draw() {
    c.fillStyle = 'rgba(255, 0, 0, 0)'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}
