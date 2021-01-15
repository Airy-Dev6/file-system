const fs = require('fs')

fs.unlink('creado.txt', (error) => {
    if (error) {
        console.error(error)
        return
    }

    console.log('se borro el archivo')
})