const websocket = require("ws");

const wss = new websocket.Server({port:8882});

wss.on("connection",ws =>{
  console.log("new client connected");

  ws.on("close", () => {
      console.log("client has disconnected");
  })
});