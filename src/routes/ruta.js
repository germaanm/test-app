const { Router } = require('express');
const router = Router();

const servicios = require('./data.json');
console.log(servicios);

router.get('/', (req,res) =>{
    res.json(servicios);
});

router.get('/:id', (req,res) =>{
    const {id} = req.params;
    servicios.forEach(servicio => {
        if(servicio.id == id){
            res.json(servicio);
        }
    });
    console.log(id);
});

router.post('/', (req,res) =>{
    const {title} = req.body;
    if(title){
        const id = servicios.length +1;
        const nuevoServicio = {...req.body, id};
        servicios.push(nuevoServicio);
        // console.log(nuevoServicio);
        res.send(servicios);
        res.status(200).json(servicios);
    }
    else{
        res.status(500).json({error:'No Data'});
        res.send("Error: No Data")
    }
});

module.exports = router;