const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Configuramos el alias '@' para que apunte a la raíz del proyecto
        config.resolve.alias['@'] = path.join(__dirname);
    
        // Retornamos la configuración modificada
        return config;
      },

}

module.exports = nextConfig

