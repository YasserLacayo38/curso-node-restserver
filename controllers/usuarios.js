    const {response}= require('express');

const usuarioGet= (req, res=response) => {

  const params= req.query;
    res.json({
        msg:"get API-controlador",
        params
    })
  }


const usuarioPut=  (req, res=response) => {
  const id=req.params.id;
    res.json({
        msg:"put API-controlador",
        id
    })
  }

  const usuarioPost= (req, res=response) => {
    const body=req.body;

    res.json({
        msg:"post API-controlador",
        body
    })
  }

  const usuarioDelete= (req, res=response) => {
    res.json({
        ok: true,
        msg:"delete API-controlador"
    })
  }

  const usuarioPatch= (req, res=response) => {
    res.json({
        ok: true,
        msg:"patch API-controlador"
    })
  }

module.exports={
    usuarioGet,
    usuarioPut,
    usuarioPost,
    usuarioDelete,
    usuarioPatch
}