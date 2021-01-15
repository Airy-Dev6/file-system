const fs = require('fs')

fs.appendFile('creado.txt', ' append jeje', 'utf8', (error) => {
    if (error) {
        console.error('error', error)
        return
    }
    console.log('archivo adjuntado')
})
