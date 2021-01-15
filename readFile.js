const fs = require('fs')

fs.readFile('creado.txt', 'utf8',(error, data)=> {
    if (error) {
        console.error('error: ', error)
        return
    }
    console.log('El contenido del archivo es: ')
    console.log(data)
})