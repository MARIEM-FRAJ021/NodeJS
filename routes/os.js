var express= require('express');
var router=express.Router(); // create a new js Router
var os= require('os');
var fs=require('fs');
/*router.get('/',(req,res,next)=>{ //get request// afficher des infos sur le serveur
    res.json({
        hostname:os.hostname(),
        type:os.type(),
        platform:os.platform(),
    })
});*/
/*router.get('/cpus',(req,res,next)=>{
    res.json({
        cpus:os.cpus() //Returns an array of objects containing information about 
        //each CPU/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent
        // in: user, nice, sys, idle, and irq).
    })
});*/

router.get('/cpus/:id',(req,res,next)=>{
    res.json({cpus:os.cpus()[req.params.id]
    })
  });
  

module.exports=router;


