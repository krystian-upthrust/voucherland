import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function VouchersBanner() {
  const [disable, setDisable] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (search === "") setDisable(true);
    else setDisable(false);
  }, [search]);

  return (
    <div className="vouchers_banner" data-testid="vouchersbanner">
      <h2>Daily new deals</h2>
      <form className="vouchers_banner_searchbar">
        <input
          type="search"
          placeholder="Search for shop/brand"
          data-testid="voucherspage-search-input"
          onChange={(event) => setSearch(event.target.value)}
        />
        <button data-testid="voucherspage-search-btn" disabled={disable}>
          search <FiSearch />
        </button>
      </form>
    </div>
  );
}
