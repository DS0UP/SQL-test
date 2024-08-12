const pool = require("../config/DB")

exports.save = async (data) => {
    const conn = await pool.getConnection();
    try {
        await conn.query("insert into phone (name, phone, age) values(?, ?, ?)", [
            data.name,
            data.phone,
            data.age
        ]);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    } finally {
        conn.release();
    }
}

exports.findAll = async () => {
    const conn = await pool.getConnection();
    try {
        let spl = "select * from phone";
        let [result] = await conn.query(spl);
        return result;
    } catch (err) {
        console.log(err);
        return false;
    } finally {
        conn.release();
    }
}