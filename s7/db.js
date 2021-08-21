const { Sequelize } = require('sequelize')

const Product = require('./models/product')
const Review = require('./models/review')

const sequelize = new Sequelize(
  'ligefin', 'admin', 'doyidet297', {
    host: 'mysql-46184-0.cloudclusters.net',
    dialect: 'mysql',
    port: 19896
  }
)

const models = [
  Product,
  Review
]

for(let model of models){
  model(sequelize)
}

const { products, reviews } = sequelize.models
reviews.belongsTo(products)

module.exports = sequelize