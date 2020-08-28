const Sequelize = require('sequelize')

const config = {
  database: 'chinese-poetry',
  username: 'root',
  password: '123456',
  host: 'localhost',
  port: 3306
}

// 创建 Sequelize 对象，连接数据库
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

// 定义模型，告诉 Sequelize 如何映射数据库表
const Table = sequelize.define('caocaoshiji', {
  id: {
    type: Sequelize.STRING(64),
    primaryKey: true
  },
  title: Sequelize.STRING(255),
  paragraphs: Sequelize.TEXT,
  updateTime: Sequelize.DATE,
  isDelete: Sequelize.TINYINT
}, {
  timestamps: false
})

// 往数据库中添加数据
async function insertData (k) {
  return new Promise(async resolve => {
    await Table.create({
      id: new Date().getTime(),
      title: k.title,
      paragraphs: k.paragraphs.toString(),
      isDelete: 0
    }, { logging: false }) // 不打印日志
    resolve()
  })
}

module.exports = {
  insertData
}
