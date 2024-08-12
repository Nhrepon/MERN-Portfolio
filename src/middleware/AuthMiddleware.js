
const {decodeToken} = require("../utility/TokenHelper");

const AuthMiddleware=(req, res, next)=>{
try {
    let token=req.cookies['token'];

    !token? token = req.headers['token'] : req.cookies["token"];

    const decode=decodeToken(token);

    if(decode != null){
        const {email, userId}=decode;
        req.headers.email=email;
        req.headers.userId=userId;
        next();

    }else{
        return res.status(401).json({status:"fail", data:"Unauthorized user"});
    }

} catch (error) {
    return {status:"fail", data:error}
}
}



module.exports=AuthMiddleware;