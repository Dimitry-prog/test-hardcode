import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Query } from "../api/api.ts";

type PaginationProps = {
  hasNext: boolean;
  pagination: Pick<Query, "limit" | "offset">;
  setPagination: Dispatch<
    SetStateAction<Pick<Query, "limit" | "offset">>
  >;
  isDisabledBtn: boolean;
};

const Pagination = ({
                      hasNext,
                      pagination,
                      setPagination,
                      isDisabledBtn
                    }: PaginationProps) => {
  const currentPage = Math.round(
    (pagination.offset + pagination.limit) / pagination.limit
  );

  const handleLimitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setPagination((prev) => ({
      ...prev,
      [e.target.name]: parseInt(e.target.value, 10)
    }));
  };

  const handleNextPage = () => {
    if (!hasNext) return;
    const offset = currentPage * pagination.limit;
    setPagination((prev) => ({
      ...prev,
      offset
    }));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      const offset = (currentPage - 2) * pagination.limit;
      setPagination((prev) => ({
        ...prev,
        offset
      }));
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
      <div>
        By page:
        <select onChange={handleLimitChange} name="limit" defaultValue="4">
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
        </select>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handlePrevPage} disabled={isDisabledBtn} type="button">
          prev
        </button>
        <p>page: {currentPage}</p>
        <button onClick={handleNextPage} disabled={isDisabledBtn} type="button">
          next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
