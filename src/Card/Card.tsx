type CardType = {
  data: any;
  DeleteTicket: (ticketId: string) => void;
};

function Card(param: CardType) {
  const { data, DeleteTicket } = param;

  return (
    <div className="CardEl">
      <div className="CardEl_Main">
        <div className="CardEl_Main_Wrap">
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Ticket Id</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">
              23sddst2344324ew
            </div>
          </div>
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Destination</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">Lviv, Ukraine</div>
          </div>
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Flight Number</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">23234</div>
          </div>
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Name</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">Denys Muzyka</div>
          </div>
          <div className="CardEl_Main_Wrap_Textbox">
            <div className="CardEl_Main_Wrap_Textbox_Title">Departure Date</div>
            <div className="CardEl_Main_Wrap_Textbox_Text">16.06.2024</div>
          </div>
        </div>
      </div>

      <div className="CardEl_Bottom">
        <button className="CardEl_Bottom_Btn" onClick={() => DeleteTicket("")}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
