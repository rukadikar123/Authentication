import jwt from 'jsonwebtoken'

export const generateJWTToken=(id)=>{
    try {
        const token= jwt.sign({id},process.env.JWT_SECRET,{
            expiresIn:"4d"
        })

        return token
    } catch (error) {
        console.log(error);
        
    }
}