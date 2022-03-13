import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

function App() {

  const [room, setRoom] = useState([]);
  const [new_card_id, setNewCardID] = useState("");
  const [new_room, setNewRoom] = useState("");

  useEffect(() => {
    Axios.get(`http://192.168.1.106:5000/api/v1/rfid/getAllRooms`).then((response) => {
      setRoom(response.data.room)
    })
  }, []);

  const addCard = () => {
    Axios.post(`http://192.168.1.106:5000/api/v1/rfid/addCard`, {
      card_id: new_card_id,
      room: new_room,
    }).then((response) => {
      setRoom([...room, {card_id: new_card_id, room: new_room}])
    })
  };

  const deleteCardById = (card_id) => {
    Axios.delete(`http://192.168.1.106:5000/api/v1/rfid/deleteCard?card_id=${card_id}`).then((response) => {
      setRoom(room.filter((item) => item.card_id !== card_id))
    })
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
      </nav>
      <div className="container mt-3">
        <div className="row pb-1">
          <div className="input-group col-lg-4">
            <input
                type="text"
                className="form-control"
                placeholder="Card ID ..." 
                onChange={(event) => {
                  setNewCardID(event.target.value);
                }}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Room number ..."
              onChange={(event) => {
                setNewRoom(event.target.value);
              }}
            />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={addCard}
                >
                  Add card
                </button>
              </div>
            </div>
        </div>
          <div className="row">
            {room.map((room_info) =>{
              return (
                <div className="col-lg-4 pb-1">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Room: {room_info.room}</h5>
                      <p className="card-text">
                        <strong>Card ID: </strong>{room_info.card_id}<br/>
                      </p>
                      <div className="row">
                        <button className="btn btn-primary col-lg-5 mx-1 mb-1"
                        onClick={() => deleteCardById(room_info.card_id)}>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </div>
  );
}

export default App;
