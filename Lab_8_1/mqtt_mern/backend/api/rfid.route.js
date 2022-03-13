import express from "express"
import rfidController from "./rfid.controller.js"

const router = express.Router()

router.route("/getAllRooms").get(rfidController.apiGetAllRooms)
router.route("/addCard").post(rfidController.apiAddCard)
router.route("/deleteCard").delete(rfidController.apiDeleteCardById)

export default router