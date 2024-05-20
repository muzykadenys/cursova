type CardType = {
  data: any
  DeleteTicket: (ticketId: string) => void
}

function Card(param: CardType) {
  const { data, DeleteTicket } = param

  return (
    <div className="CardEl">
      <div className="CardEl_Main">
        <div className="CardEl_Main_Wrap">
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Ticket Id</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">{data.ticketId}</div>
          </div>
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Destination</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">
              {data.destination}
            </div>
          </div>
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Flight Number</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">
              {data.flightNumber}
            </div>
          </div>
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Name</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">{data.name}</div>
          </div>
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Departure Date</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">
              {data.departureDate}
            </div>
          </div>
        </div>
      </div>

      <div className="CardEl_Bottom">
        <button className="CardEl_Bottom_Btn" onClick={() => DeleteTicket(data.ticketId)}>
          Delete
        </button>
      </div>
    </div>
  )
}

export default Card
