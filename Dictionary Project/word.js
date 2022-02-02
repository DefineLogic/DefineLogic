var sql = 'SELECT * FROM entries where word = ? ';

function queryDb(key, con, res) {
    con.query(sql, [key], function(err, result) {
        res.send(result);
    });
}
module.exports = queryDb;