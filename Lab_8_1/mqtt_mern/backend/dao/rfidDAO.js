let rfid

export default class rfidDAO {
  static async injectDB(conn) {
    if (rfid) {
      return
    }
    try {
        rfid = await conn.db(process.env.NS).collection("rfid")
    } catch (e) {
      console.error(`Unable to establish a collection handle in rfidDAO: ${e}`)
    }
  }

  static async getAllRooms({
    page = 0,
    roomPerPage = 12,
  } = {}) {
    let query
    query = {}
  
      let cursor
      
      try {
        cursor = await rfid
          .find(query)
      } catch (e) {
        console.error(`Unable to issue find command, ${e}`)
        return { roomList: [], totalNumRoom: 0 }
      }
  
      const displayCursor = cursor.limit(roomPerPage).skip(roomPerPage * page)
  
      try {
          const roomList = await displayCursor.toArray()
          const totalNumRoom = await rfid.countDocuments(query)
    
          return { roomList, totalNumRoom }
        } catch (e) {
          console.error(
            `Unable to convert cursor to array or problem counting documents, ${e}`,
          )
          return { roomList: [], totalNumRoom: 0 }
        }
      }

      static async addCard(card_id, room) {
        try {
          const card_info = { card_id: card_id,
              room: room,
            }
    
          return await rfid.insertOne(card_info)
        } catch (e) {
          console.error(`Unable to post card info: ${e}`)
          return { error: e }
        }
      }
    
      static async deleteCardById(card_id) {
    
        try {
          const deleteResponse = await rfid.deleteOne({
            card_id: card_id,
          })
    
          return deleteResponse
        } catch (e) {
          console.error(`Unable to delete card: ${e}`)
          return { error: e }
        }
      }
}