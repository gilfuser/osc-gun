const OSC = require('osc-js')

const config = { 
    udpServer: {
        host: '0.0.0.0',// @param {string} Hostname of udp server to bind to
        port: 41234,    // @param {number} Port of udp server to bind to
    },
    udpClient: { port: 57120 },
}

const osc = new OSC({ plugin: new OSC.BridgePlugin(config) })

osc.open() // start a WebSocket server on port 8080


osc.on( '*', oscMessage => {
  console.log("message: ", oscMessage);
});

console.log("node osc server started")
