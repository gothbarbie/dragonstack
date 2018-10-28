const pool = require('../../databasePool')

class TraitTable {
  static getTraitId({ traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT id FROM trait WHERE "traitType" = $1 AND "traitValue" = $2',
        [traitType, traitValue],
        (error, response) => {
          if (error) return reject(error)

          const traitId = response.rows[0].id

          resolve({ traitId })
        }
      )
    })
  }
}

// Comment out to test
// TraitTable.getTraitId({
//   traitType: 'backgroundColor',
//   traitValue: 'green',
// })
//   .then(({ traitId }) => console.log(traitId))
//   .catch(error => console.error(error))

module.exports = TraitTable