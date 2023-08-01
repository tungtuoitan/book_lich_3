import db from '../models/index'
import bcrypt from 'bcrypt'
const salt = bcrypt.genSaltSync(10)

let createNewUser = async (data)=>{
    let hashPassFromBcrypt = await hashUserPassword(data.password)
    let create = await db.User.create({
        email: data.email,
      password: hashPassFromBcrypt,
      firstName: data.first_name,
      lastName: data.last_name,
      address: data.address,
      phonenumber: data.phonenumber,
      gender: data.sex === 'Male' ? true : false,
      roleId: data.role,
    })
    return create
    
}
let hashUserPassword = (pass)=>{
    return new Promise( async (resolve,reject)=>{
        try{
            let hashPass = await bcrypt.hashSync(pass, salt)
            resolve(hashPass)


        }catch(e){
            reject(e)
        }

    })

}

let updateEditedData = async(data,id)=>{
    
   await db.User.update({
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        address: data.address
      } ,
      {where: {id:id}})
}

export default {
    createNewUser: createNewUser,
    updateEditedData: updateEditedData
}