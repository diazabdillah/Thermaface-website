module.exports = {
    get: function(con, callback) {
      con.query("SELECT * FROM home", callback)
    },
  }