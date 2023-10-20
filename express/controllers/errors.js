export const notFount = (req,res)=>{
    res.status(404).render('404page', {title:"Page Not Found"})
  }