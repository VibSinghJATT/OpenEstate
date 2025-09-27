export default function handler(req,res){
  const {method, propertyId, tokens, user} = req.body||{}
  res.status(200).json({
    ok:true,
    message:`Simulated ${method||'bank'} payment success for ${tokens||0} tokens on ${propertyId||'unknown'} by ${user||'user'}`
  })
}
