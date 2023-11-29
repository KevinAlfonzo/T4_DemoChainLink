module.exports = {
  networks: {
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io/v3/69bca8b775e14c28ae52af78ffe4206a'),
      network_id: 4, // ID de red de Rinkeby
      gas: 5500000, // Límite de gas
      confirmations: 2, // Número de confirmaciones
      timeoutBlocks: 200, // Número de bloques de tiempo de espera
      skipDryRun: true // Salta la verificación del funcionamiento del contrato en la red
    }
  },
  // Resto de la configuración...
};