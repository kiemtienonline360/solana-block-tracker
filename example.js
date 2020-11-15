const SolanaQuery = require('solana-query');
const PollingBlockTracker = require('./src/polling');

const MAINNET_ENDPOINT_URL = 'https://api.mainnet-beta.solana.com';
const provider = new SolanaQuery(MAINNET_ENDPOINT_URL);
const blockTracker = new PollingBlockTracker({ provider })

blockTracker.on('sync', ({ newBlock, oldBlock }) => {
  if (oldBlock) {
    console.log(new Date(), `Sync #${Number(oldBlock)} -> #${Number(newBlock)}`)
  } else {
    console.log(new Date(), `First sync #${Number(newBlock)}`)
  }
})
