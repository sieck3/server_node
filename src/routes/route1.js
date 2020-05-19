const router = require("express").Router()

router.route("/ruta1")
    .get((req,res)=>{
       res.send("Ruta 1 Welcome")

    })

/*
router.route('/')
    .get((req, res) => {
        res.send({
            "nombre": "Cesar"
        })
    })

    .post((req,res)=>{
        res.send(
            {
                "type":"POST"
            }
        )
    }

    )
*/

module.exports = router