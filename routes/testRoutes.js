import express from "express"
import testController from "../controllers/testController.js"
const router = express.Router()

router.get('/get', testController.getTest)

export default router
