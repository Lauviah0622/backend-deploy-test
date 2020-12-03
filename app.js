const express = require('express');

const  app = express();
const port = process.env.PORT || 5001;


// router.get('', pageController.commentsPage);

app.get('/', function(req, res) {
    res.send('test gogogogo')
})

console.log(123);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})

