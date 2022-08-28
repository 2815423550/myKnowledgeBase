// 这两步对canvas初始化
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// 设置canvas的高和宽
canvas.width = 1024
canvas.height = 576

// canvas引入图片
  // 1.引入主地图 
const image = new Image()
image.src = './img/maptest.png'

// 遍历collisions数组，把他分成每70个数据一组，因为我在Tiled绘制地图时地图的宽度我设置为70像素
  // 这样做是把每一行都分离开，提高后面遍历碰撞体的效率（或许此处还有更好的算法）
  const collisionsMap = []
  for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i))
  }
