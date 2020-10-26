const express = require('express'),
    app = express(),
    port=4444,
    mc = require(`./controllers/messages_controller`)
app.use(express.json())
const messagesBaseUrl = '/api/messages'
app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read)
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete)
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})


