// 这两步对canvas初始化
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// 设置canvas的高和宽
canvas.width = 1024
canvas.height = 576

// 遍历collisions数组，把他分成每70个数据一组，因为我在Tiled绘制地图时地图的宽度我设置为70像素
// 这样做是把每一行都分离开，使得一个一维数组变成二维数组，目的是为了精准的获取到某个数据的位置
const collisionsMap = []
for (let i = 0; i < collisions.length; i += 70) {
  collisionsMap.push(collisions.slice(i, 70 + i))
}

// 遍历战斗区域数组，与collisions数组同理
const battleZonesMap = []
for (let i = 0; i < battleZonesData.length; i += 70) {
  battleZonesMap.push(battleZonesData.slice(i, 70 + i))
}


/* 这里是为了使得碰撞体和战斗区域能够完美的契合地图（因为我们导出地图时是以400%导出）
注意：改变这里的数据其实并没有改变玩家的位置，只是改变了地图的位置，玩家的位置也只是看起来改变了 */
const offset = {
  x: -735,
  y: -650
}

// 碰撞数据的数组，也就是每一个1025对象所组成的数组，每一个1025对象里保存着他在地图上的位置
const boundaries = []
// 遍历每行数据，寻找碰撞体（注意这里的forEach用法）
collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})
// 通过以上方法，成功把碰撞体的位置数据添加到boundaries数组中

// 寻找战斗区域，与碰撞区域同理
const battleZones = []
battleZonesMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      battleZones.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

// canvas引入图片
// 1.引入主地图 
const image = new Image()
image.src = './img/Pellet Town.png'

// 2.引入在玩家之上的图层，也就是图层在玩家layer之上的这部分，使得这部分可以覆盖玩家对象
const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

// 3.引入角色动作
// 3.1 上
const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'
// 3.1 下
const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'
// 3.1 左
const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'
// 3.1 右
const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'



// 创建玩家对象，Sprite是classes.js里定义的类
const player = new Sprite({
  // 玩家的起始位置
  position: {
    // 下面x和y的值这样写是为了使得玩家起始位置永远位于视角中心点,192是玩家图片的长，68是宽
    x: canvas.width / 2 - 192 / 4,
    y: canvas.height / 2 - 68 / 2
  },
  // 玩家的样子
  image: playerDownImage,

  frames: {
    max: 4,
    hold: 10
  },
  // 所包含的所有动作
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

// 地图
const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

// 能覆盖玩家的部分地图
const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foregroundImage
})

// 定义key,为了后面
const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

const movables = [background, ...boundaries, foreground, ...battleZones]

// 检测物体一与物体二是否碰撞
function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  )
}

const battle = {
  initiated: false
}

// 动画方法
function animate() {
  // 这一步使得动画成为动画————也就是一直循环，使得图片成为动画（这个requestAnimationFrame函数我也没看明白，总之就是这么一个道理）
  const animationId = window.requestAnimationFrame(animate)

  // 以下所执行的顺序必须原地图第一，因为碰撞区域基于原地图，战斗区域基于原地图....
  // 画出地图
  background.draw()
  // 画出碰撞区域
  boundaries.forEach((boundary) => {
    boundary.draw()
  })
  // 画出战斗区域
  battleZones.forEach((battleZone) => {
    battleZone.draw()
  })
  // 画出玩家
  player.draw()
  // 画出可覆盖玩家的地图区域
  foreground.draw()

  // moving这里定义了是否处于运动状态
  let moving = true
  player.animate = false

  // 如果现在处于战斗状态，则return，也就是不再进行return后面的所以代码
  if (battle.initiated) return
  // 激活战斗
  if (keys.w.pressed || keys.a.pressed || keys.s.pressed || keys.d.pressed) {

    for (let i = 0; i < battleZones.length; i++) {
      const battleZone = battleZones[i]

      // 这下面使得玩家角色处于战斗区域的部分大于玩家角色部分的一半时才有可能触发战斗
      const overlappingArea =
        (Math.min(
          player.position.x + player.width,
          battleZone.position.x + battleZone.width
        ) -
          Math.max(player.position.x, battleZone.position.x)) *
        (Math.min(
          player.position.y + player.height,
          battleZone.position.y + battleZone.height
        ) -
          Math.max(player.position.y, battleZone.position.y))

      //下面这里是调用上面定义的rectangularCollision方法来检验玩家与战斗区域是否碰撞
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: battleZone
        }) &&
        overlappingArea > (player.width * player.height) / 2 &&
        Math.random() < 0.01
        // 以上这个算法，使得玩家角色和战斗区域的重叠区域大于玩家角色的一半，则视为进入战斗区域
        //  Math.random() < 0.01  这里的0.01是调节触发战斗的几率
      ) {
        /* 停用当前动画循环（也就是开始战斗），这里的animationId是上面定义的
     const animationId = window.requestAnimationFrame(animate)，cancelAnimationFrame方法是
     使得原本animationId动画停止，animationId动画也就是上面定义的animate动画，
     你可以理解为：处于大地图的动画结束  */
        window.cancelAnimationFrame(animationId)

        // 大地图音乐停止
        audio.Map.stop()
        // 战斗音乐开始
        audio.initBattle.play()
        audio.battle.play()

        battle.initiated = true
        // 这里开始试用gsap动画，（前提是index.html里已经引入了gsap.js）
        // gsap.to 是gsap方法的使用，#overlappingDiv是通过id选中所要进行运用该gsap方法的参数
        gsap.to('#overlappingDiv', {

          // 透明值，index.html里的overlappingDiv容器的opacity设为0，下面设为1，使得overlappingDiv容器的内容出现
          opacity: 1,
          // 动画重复次数
          repeat: 3,
          // 使得动画播放是:1——> 0 ——>1（注意：这里的动画是 闪了两下 这里与下面的238行共同构成闪三下的效果）
          yoyo: true,
          // 播放速度
          duration: 0.4,

          // 这里的onComplete方法是我们自己定义的，第一个onComplete意为动画结束后，我们要做的事情
          onComplete() {
            gsap.to('#overlappingDiv', {
              opacity: 1,
              duration: 0.4,

              // 这里的onComplete做的事情是切换场景，也就是闪烁的动画结束，开始进入战斗场景
              onComplete() {
                gsap.to('#overlappingDiv', {
                  // opacity: 0 overlappingDiv容器的内容消失，动画结束
                  opacity: 0,
                  duration: 0.4
                })
                // 开始调用以下两个方法，详情可前往battleScene.js
                initBattle()
                animateBattle()
              }
            })
          }
        })
        break
      }
    }
  }

  // keys.w.pressed向上运动,lastKey === 'w'
  if (keys.w.pressed && lastKey === 'w') {
    // 开始运动动画
    player.animate = true
    // 改变玩家样子
    player.image = player.sprites.up

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      // 1.如果玩家遇到碰撞体
      //这里也是调用上面定义的rectangularCollision方法来检验玩家与碰撞区域是否碰撞
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      )
      // 2.moving = false，break不再执行下面语句，也就没有执行运动语句，也就没有前进，即运动停止
      {
        moving = false
        break
      }
    }

    // 3.如果moving=true，则可以继续前进
    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}

// 定义lastKey,为了按下多个键时可以按照最后按下的键运动
let lastKey = ''

// 监听键盘按下,并且定义w,a,s,d键所触发的属性
window.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

// 监听键盘抬起,与按下同理
window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})

// 定义鼠标点击音乐播放,默认关闭.(无法做到一打开游戏自动播放音乐,我也没办法)
let clicked = false
addEventListener('click', () => {
  if (!clicked) {
    audio.Map.play()
    clicked = true
  }
})

// 背包事件
let bag = document.getElementById('bag')
let sum = 1
window.addEventListener('keydown', (e) => {
  if (e.key == 'b') {
    sum++
    if (sum % 2 == 0) {
      bag.style.display = 'inline'
    } else {
      bag.style.display = 'none'
    }
  }
})
