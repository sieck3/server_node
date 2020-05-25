const router = require("express").Router()
let NbVisitas = 0
//const login = require('/').login

function infoSession(req,res){
    let thisDate = new Date()
    console.log('Ruta recibida: '+req.protocol+'://'+req.get('host'))
    console.log('Fecha = '+'dia: '+thisDate.getDate()+'/'+(thisDate.getMonth()+1)+'/'+' hora: '+thisDate.getHours()+':'+thisDate.getMinutes()+':'+thisDate.getSeconds())
}


router.route("/ruta1")
    .get((req,res)=>{
        
       //res.send("Ruta 1")
        infoSession(req,res)
        NbVisitas++
        console.log('visias: '+NbVisitas)
      
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