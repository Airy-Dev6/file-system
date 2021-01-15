
const fs = require('fs')

/* function cb (error) {
    fefre
} */

fs.writeFile('creado.txt', 'Hola desde node jeje :D', 'utf8', (error) => {
    if (error) {
        console.error('error: ', error)
        return
    }
    console.log('Archivo escrito exitosamente')
})