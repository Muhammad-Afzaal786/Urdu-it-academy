export const dynamic = "force-dynamic";

import { Fragment } from "react";
import SearchResults from "./SearchResult";

export const metadata = {
  title: "Search Result - Urdu It Academy",
};

export default function SearchResult({ searchParams }) {
  return (
    <Fragment>
      <SearchResults searchParams={searchParams} />
    </Fragment>
  );
}