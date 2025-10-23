const express = require('express');
const router = express.Router();

router.get('/registration', (red,res)=>{
    res.send('its cool')
    
})

module.exports = router;