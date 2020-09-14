const file = require('./file')
const mysql = require('./mysql')


// 中国诗词 - 对应数据库名
const chinesePoetry = {
  caocaoshiji: { // 曹操诗集
    path: '../caocaoshiji',
    nameStart: 'caocao'
  },
  // songci: { // 宋词作者
  //   path: '../ci',
  //   nameStart: 'author'
  // },
  // songciauthor: { // 宋词
  //   path: './ci',
  //   nameStart: 'ci.song'
  // }
}

async function start () {
  for (let i of Object.keys(chinesePoetry)) {
    let obj = await file.readdir(chinesePoetry[i], i)
    // console.log(obj)

    for (let j of obj.files) {
      // console.log(`${ chinesePoetry[i].path }/${ j }`)
      let jsonList = await file.readFile(`${ chinesePoetry[i].path }/${ j }`)
      for (let k of jsonList) {
        await mysql.insertData(k)
      }
    }
  }
}

start()
