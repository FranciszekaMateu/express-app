const { connect } = require('mongoose')

const url = 'mongodb+srv://omgmyshot:fran2003@cluster0.haawu7c.mongodb.net/?retryWrites=true&w=majority'
const dbConnection = async () => {
    return await connect(url, err => {
        if (err) {
            console.log('No se puede conectar mongodb: ', err)
            process.exit()
        }
        console.log('DB conectada ')
    })
}
module.exports = {dbConnection}