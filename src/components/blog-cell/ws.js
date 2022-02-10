export const wsConnect = (url, channel, onMessage) => {
  const client = new WebSocket(url + "/" + channel);
  client.onmessage = onMessage
  return client;
};

export const wsSend = ({ wsClient, channel, sendor, message }) => {
  wsClient.send(JSON.stringify({ channel, message, sendor }));
};
