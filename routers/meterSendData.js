const express = require("express")
const router = express.Router()

router.post('/send_meter', async(req, res) => {
    global.io.sockets.emit('meter', req.body);

    return res.status(200).json({ "data": req.body });

});

module.exports = router;