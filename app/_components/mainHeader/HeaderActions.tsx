import Link from "next/link";
import React from "react";

const HeaderActions = () => {
  return (
    <div className="headerActions">
      <button className="action">
        <Link href="/lpr-test" target="_blank">
          Test Our API
        </Link>{" "}
      </button>
    </div>
  );
};

export default HeaderActions;
