require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan riot sad exchange hockey casino swallow genre'; 
let testAccounts = [
"0xff8fdff573d16a87d476be979270224ebf8b4404a05d968adc66c6ef7399953e",
"0x3a232f07bac24fbeeee7a43418950e327920517db6e62792e1c89f554992ecc7",
"0xce0ba17616d380dceba7ec878e56c93317398c58d1973f6a2b949a714a8961eb",
"0x33cf83148d76e7f909aaecef9fc11560c7155822148a5ab2bed3e19dd8d8cb8c",
"0x44f15a7dfa3721fcd8e8e45e6a4a2b1b989b06d2543e62f5656175e6e8a61898",
"0xaefbe46b93cd30208da400029c8a3793c03ed78988ce5f6d278b2bd3d5c32d63",
"0x9b01eb258fb08577ff72b16aef63601cb2119ef72c884b15a59c950d1f5b5efc",
"0xca46d33b80e491315c9668f870fca7adde0fba536529945f67749d1a2e0d369a",
"0x00a7ab3b8a761e0582c6fcb4c76e896f79e3f5d37d3ef8f907274f98a1d8ef29",
"0x105fec5a19ab6c261db84bc1ca1687d475f21b7e4324223ea6792d60a61ade54"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


