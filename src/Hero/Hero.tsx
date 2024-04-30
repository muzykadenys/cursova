import Card from "@/Card/Card";
import Header from "@/Header/Header";
import useDBHook from "@/hooks/useDBHook";
import { useEffect, useState } from "react";

function Hero() {
  const { getAllTickets } = useDBHook();
  const [allTickets, setAllTickets] = useState<any | null>(null);
  const [searchVal, setSearchVal] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const DeleteTicket = (ticketId: string) => {};

  useEffect(() => {
    getAllTickets().then((res: any) => {
      if (res.data) setAllTickets(res.data);
    });
  }, []);

  return (
    <>
      <div className="HeroComp">
        <Header
          searchVal={searchVal}
          setSearchVal={setSearchVal}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="HeroComp_Wrap">
          {allTickets !== null ? (
            <>
              {allTickets.map((el: any, index: number) => (
                <Card
                  data={el}
                  key={`HCW_${index}`}
                  DeleteTicket={DeleteTicket}
                />
              ))}
            </>
          ) : (
            <>loading...</>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
