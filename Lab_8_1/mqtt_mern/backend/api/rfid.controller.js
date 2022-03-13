import rfidDAO from "../dao/rfidDAO.js"

export default class rfidController{
    static async apiGetAllRooms(req, res, next) {
      const roomPerPage = req.query.roomPerPage ? parseInt(req.query.roomPerPage, 10) : 12
      const page = req.query.page ? parseInt(req.query.page, 10) : 0
    
      const { roomList, totalNumroom } = await rfidDAO.getAllRooms({
        page,
        roomPerPage,
      })
  
      let response = {
        room: roomList,
        page: page,
        entries_per_page: roomPerPage,
        total_results: totalNumroom,
      }
      res.json(response)
  }

  static async apiAddCard(req, res, next) {
    try{
        const card_id = req.body.card_id
        const room = req.body.room

        const addResponse = await rfidDAO.addCard(
            card_id,
            room,
        )
        res.json({status: "success"})
    }catch(e){
        res.status(500).json({ error: e.message })
    }
  }

  static async apiDeleteCardById(req, res, next){
    try{
        const card_id = req.query.card_id

        const deleteResponse = await rfidDAO.deleteCardById(
            card_id,
          )
        res.json({ status: "success" })
    }catch(e){
        res.status(500).json({ error: e.message })
    }
  }
}