import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// fungsi dari sequelize
const { DataTypes } = Sequelize;

const User = db.define('users',{
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName: true
});

export default User;

// fungsi untuk men generate table jika table user tidak terdapat dalam database
(async () => {
    await db.sync();
})();