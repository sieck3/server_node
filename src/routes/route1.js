const router = require("express").Router()

//const login = require('/').login

function infoSession(req,res){
    let thisDate = new Date()
    console.log('Ruta recibida: '+req.protocol+'://'+req.get('host'))
    console.log('Fecha = '+'dia: '+thisDate.getDate()+' hora: '+thisDate.getHours()+':'+thisDate.getMinutes()+':'+thisDate.getSeconds())
}


router.route("/ruta1")
    .get((req,res)=>{
        
       //res.send("Ruta 1")
        infoSession(req,res)
      
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