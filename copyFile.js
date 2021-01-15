const {
    promises: fsPromises,
    constants: {
      COPYFILE_EXCL
    }
  } = require('fs');
  
  // destination.txt will be created or overwritten by default.
  fsPromises.copyFile('creado.txt', 'destination.txt')
    .then(() => console.log('source.txt was copied to destination.txt'))
    .catch(() => console.log('The file could not be copied'));