import { valueSortBy } from "@/other/ConstValues";
import { ChangeEvent, Dispatch, SetStateAction } from "react";

type HeaderType = {
  searchVal: string;
  setSearchVal: Dispatch<SetStateAction<string>>;
  sortBy: string;
  setSortBy: Dispatch<SetStateAction<string>>;
};

function Header(props: HeaderType) {
  const { searchVal, setSearchVal, sortBy, setSortBy } = props;

  const SetOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchVal(e.target.value);
  };

  return (
    <div className="HeaderComp">
      <div className="HeaderComp_Wrap">
        <div className="HeaderComp_Wrap_Create">Add Ticket</div>

        <div className="HeaderComp_Wrap_Search">
          <input
            placeholder="search"
            value={searchVal}
            onChange={SetOnChange}
          />
        </div>

        <div className="HeaderComp_Wrap_SortWrap">
          <div className="HeaderComp_Wrap_SortWrap_Text">Sort:</div>

          <div
            className={`HeaderComp_Wrap_SortWrap_Btn HeaderComp_Wrap_SortWrap_Btn${
              sortBy === valueSortBy.destination ? "Active" : ""
            }`}
            onClick={() => {
              setSortBy((el: string) =>
                el === valueSortBy.destination ? "" : valueSortBy.destination
              );
            }}
          >
            By Destination
          </div>

          <div
            className={`HeaderComp_Wrap_SortWrap_Btn HeaderComp_Wrap_SortWrap_Btn${
              sortBy === valueSortBy.date ? "Active" : ""
            }`}
            onClick={() => setSortBy(valueSortBy.date)}
          >
            By Date
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
