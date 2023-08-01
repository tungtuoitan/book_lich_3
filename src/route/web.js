import express from "express"
import homecontroller from "../controllers/homecontroller"

let router = express.Router()

let initWebRoutes = (app) => {
    router.get('/',homecontroller.getHomePage)
    
    
    router.get('/input',homecontroller.inputForm)
    router.post('/post-crud',homecontroller.postCRUD)
    router.get('/edit/',homecontroller.openEditForm)
    router.post('/update-edited-data/',homecontroller.updateEditedData    )
    router.get('/del/',homecontroller.del)  

    
    return app.use("/",router)

}

export default initWebRoutes