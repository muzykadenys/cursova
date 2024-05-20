import Card from "@/Card/Card";
import Form from "@/Form/Form";
import Header from "@/Header/Header";
import useDBHook from "@/hooks/useDBHook";
import { valueSortBy } from "@/other/ConstValues";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import { all } from "axios";

function removeElementByFieldValue(arr: any, field: any, value: any) {
  return arr.length === 1
    ? []
    : arr.filter((item: any) => item[field] !== value);
}

function compareDepartureDates(a: any, b: any) {
  const dateA: any = new Date(a.departureDate);
  const dateB: any = new Date(b.departureDate);
  return dateA - dateB;
}

function Hero() {
  const { getAllTickets, addTicket, deleteTicket } = useDBHook();
  const [allTickets, setAllTickets] = useState<any | null>(null);
  const [allTicketsDisplay, setAllTicketsDisplay] = useState<any>([]);
  const [searchVal, setSearchVal] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("");

  const DeleteTicket = async (ticketId: string) => {
    await deleteTicket(ticketId).then((res: any) => {
      if (res.data)
        setAllTickets((val: any) => {
          console.log(val);
          return removeElementByFieldValue(val, "ticketId", ticketId);
        });
    });
  };

  function searchFlightsByFuzzy(array: any, searchString: string): any {
    const fuse = new Fuse(array, {
      keys: [
        "departureDate",
        "destination",
        "flightNumber",
        "name",
        "ticketId",
      ],
      includeScore: true,
      threshold: 0.35, // Adjust the threshold as needed
    });

    const result = fuse.search(searchString);
    return result.map((item: any) => item.item);
  }

  const sortListBy = () => {
    setAllTickets((arr: any) => {
      const arrCopy = [...arr];

      if (sortBy === valueSortBy.date)
        setAllTicketsDisplay(arrCopy.sort(compareDepartureDates));
      else if (sortBy === valueSortBy.destination)
        setAllTicketsDisplay(
          [
            ...arrCopy.reverse().sort((a, b) => {
              if (a.destination < b.destination) return -1;
              if (a.destination > b.destination) return 1;
              return 0;
            }),
          ]
            .slice()
            .reverse()
        );
      else setAllTicketsDisplay(arr);

      return arr;
    });
  };

  useEffect(() => {
    if (allTickets && allTickets.length !== 0)
      setAllTicketsDisplay(
        searchVal === ""
          ? allTickets
          : searchFlightsByFuzzy(allTickets, searchVal)
      );
  }, [searchVal, allTickets]);

  useEffect(() => {
    if (allTickets && allTickets.length !== 0) sortListBy();
  }, [sortBy, allTickets]);

  useEffect(() => {
    getAllTickets().then((res: any) => {
      if (res.data) setAllTickets(res.data);
    });
  }, []);

  return (
    <>
      <Form />

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
              {allTicketsDisplay
                .slice()
                .reverse()
                .map((el: any, index: number) => (
                  <Card
                    data={el}
                    key={`HCW_${index}`}
                    DeleteTicket={DeleteTicket}
                  />
                ))}
            </>
          ) : (
            <span className="loading loading-spinner loading-md"></span>
          )}
        </div>
      </div>
    </>
  );
}

export default Hero;
