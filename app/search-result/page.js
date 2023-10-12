"use client"
import { useSearchParams } from 'next/navigation'

import { Fragment } from "react";
import SearchResults from "./SearchResult";

export const metadata = {
  title: "Search Result - Urdu It Academy",
};

export default function SearchResult() {
  const searchParams = useSearchParams();
  return (
    <Fragment>
      <SearchResults searchParams={searchParams} />
    </Fragment>
  );
}