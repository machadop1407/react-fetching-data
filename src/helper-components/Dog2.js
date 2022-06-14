import React from "react";
import { useQuery } from "react-query";

import { getDog } from "../Fetchers";

function Dog2() {
  const { data } = useQuery("dog", getDog());

  return <img src={data?.url} width={100} />;
}

export default Dog2;
