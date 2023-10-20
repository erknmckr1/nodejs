export const notFount = (req,res)=>{
    res.status(404).render('/error/404page', {title:"Page Not Found"})
  }