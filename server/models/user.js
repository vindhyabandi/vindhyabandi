const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    user_id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL UNIQUE,
    user_email VARCHAR(255) NOT NULL UNIQUE,
    user_password VARCHAR(255),
    CONSTRAINT customer_pk PRIMARY KEY(user_id)
  )`;
  await con.query(sql);
}
createTable();

//function to get all customers
let getUsers = async () => {
    const sql = `SELECT * FROM users`;
  return await con.query(sql);
};

async function getUsers(user) {
    let sql;
    if(user.userId) {
      sql = `SELECT * FROM customers
        WHERE customer_id = ${user.userId}
      `;
    } else {
      sql = `SELECT * FROM users
        WHERE username = "${user.username}"
      `;
    }
    return await con.query(sql);
  }

  async function login(username, password) {
    const user = await userExists(username);
    if(!user[0]) throw Error('User not found')
    if(user[0].user_password !== password) throw Error("Password is incorrect");
  
    return user[0];
  }
  
  async function register(user) {
    const u = userExists(user.username);
    if(u.length>0) throw Error("Username already exists");
  
    const sql = `INSERT INTO users (username, user_password)
      VALUES ("${user.username}", "${user.password}")
    `;
  
    const insert = await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
  }
  
  async function deleteUser(userId) {
    const sql = `DELETE FROM users
      WHERE user_id = ${userId}
    `;
    await con.query(sql);
   
  }
  
  async function userExists(username) {
    const sql = `SELECT * FROM users
      WHERE username = "${username}"
    `;
    return await con.query(sql);
  }
  
  async function editUser(customer) {
    const sql = `UPDATE users SET
      username = "${user.userName}"
      WHERE user_id = ${user.userId}
    `;
    const update = await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
  }
  
  
  module.exports = { getUsers, login, register, deleteUser, editUser, getUser, createTable };