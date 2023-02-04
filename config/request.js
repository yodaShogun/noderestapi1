import {pool} from './postgres.js'


export const fetchUsers = async () => {
    try{
      const res = await pool.query('SELECT * FROM users ORDER BY id')
      return res.rows;
    }catch(error){
      return "Error"
    }
}


