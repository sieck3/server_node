const router = require('express').Router()

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

module.exports = router