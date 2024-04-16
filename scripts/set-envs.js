const { mkdirSync, writeFileSync } = require('fs');

require('dotenv').config();

//para crear el archivo con la variable de entorno
const targetPath= './src/environments/environment.ts'

const envFileContent = `
  export const environment = {
    mapbox_key: "${ process.env['MAPBOX_KEY']}",
    otra: "Propiedad"
  };
`;

//recursivo en true porque si existe se va a sobrescribir
mkdirSync('./src/environments', {recursive: true});

writeFileSync( targetPath, envFileContent );
