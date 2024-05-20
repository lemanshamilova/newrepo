const router = require('express').Router()
const controller=require("../controller/controller")

router.get("/products",controller.getAllData)
router.get("/products/:id",controller.getById)
router.delete("/products/:id",controller.deleteById)
router.post("/products",controller.postData)
router.put("/products/:id",controller.putById)
router.patch("/products/:id",controller.patchById)

module.exports=router
