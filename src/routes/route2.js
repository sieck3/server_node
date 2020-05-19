const router = require("express").Router()

router.route("/ruta2")
    .get((req,res)=>{
       res.send("Ruta 2 Welcome")

    })


module.exports = router