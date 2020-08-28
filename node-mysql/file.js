/**
 * 读取本地 json 文件中的数据
 */
const fs = require('fs')

// 读取目录
async function readdir (obj, name) {
  return new Promise((resolve, reject) => {
    fs.readdir(obj.path, (err, data) => {
      if (err) {
        console.log('readdir error', err)
        reject(err)
      } else {
        resolve({ name, files: data.filter(i => i.includes(obj.start)) })
      }
    })
  })
}

// 读取 json 文件
async function readFile (path) {
  // console.log(path)
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log('readFile error', err)
        reject(err)
      } else {
        resolve(JSON.parse(data))
      }
    })
  })
}

module.exports = {
  readdir,
  readFile
}
