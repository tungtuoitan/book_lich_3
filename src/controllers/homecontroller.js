import db from "../models/index.js";
import CRUDService from "../services/CRUDService.js";

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs", { data: data });
  } catch (e) {
    console.log(e);
  }
};
let inputForm = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("input-form.ejs");
  } catch (e) {
    console.log(e);
  }
};
let postCRUD =  async (req, res) => {
    let message = await CRUDService.createNewUser(req.body)
    let data = await db.User.findAll()

  return res.render('homepage.ejs', {data: data})
};

let openEditForm = (req,res)=>{
  return res.render('edit.ejs', {i: Number(req.query.id)})
}
let updateEditedData = async (req,res)=>{
  let data = await db.User.findAll()

  await CRUDService.updateEditedData(req.body, Number(req.query.id))
  
  data = await db.User.findAll()
  return res.render('homepage.ejs',{data:data})
}

let del = async (req,res)=>{
  console.log('this is in >>>>> del function')
   await db.User.destroy({where: {id: Number(req.query.id)}})
  let data = await db.User.findAll()

  return res.render('homepage.ejs' ,{data: data})
}



export default {
  getHomePage: getHomePage,
  inputForm: inputForm,
  postCRUD: postCRUD,
  openEditForm:openEditForm,
  updateEditedData:updateEditedData,
  del:del
};
