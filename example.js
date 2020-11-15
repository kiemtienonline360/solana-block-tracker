const createInfuraProvider = require('eth-json-rpc-infura/src/createProvider')
const PollingBlockTracker = require('./src/polling')


const provider = createInfuraProvider({ network: 'mainnet', projectId: 'b8304d906c2049c986b2a70ff391c373' })
const blockTracker = new PollingBlockTracker({ provider })

blockTracker.on('sync', ({ newBlock, oldBlock }) => {
  if (oldBlock) {
    console.log(`sync #${Number(oldBlock)} -> #${Number(newBlock)}`)
  } else {
    console.log(`first sync #${Number(newBlock)}`)
  }
})
