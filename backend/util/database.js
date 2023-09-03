require('dotenv').config({path:"/Users/akashkumar/Downloads/GroupchatApp/backend/.env"});
console.log('db name='+process.env.DATABASE_NAME);
const Sequelize=require('sequelize');
const sequelize=new Sequelize(process.env.DATABASE_NAME,process.env.DATABASE_USERNAME,process.env.DATABASE_PASSWORD,{dialect: 'mysql',host:process.env.DATABASE_HOST});
module.exports=sequelize;