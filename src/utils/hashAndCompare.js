import bcrypt from 'bcryptjs'
export const hashPassword= ({plainPassword,saltRound=process.env.SALT_ROUND}={})=>{
    const hash = bcrypt.hashSync(plainPassword,parseInt(saltRound))
    return hash;
}

//? here i was testing what will happen if i didnt use compare object {}={plain,hashedvalue} 
//! and just use an empty object passed to the function's parameters ;

export const comparePassword = ({plainPassword,dataBaseSavedPassword}={})=>{
    const match = bcrypt.compareSync(plainPassword,dataBaseSavedPassword);
    return match;
}