import React, { useEffect, useState } from "react";

function Fetch() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((resp) => resp.json())
      .then((apiData) => {
        setData(apiData.message);
      });
  }, []);
  return (
    <div>
      <img width={500} src={data} />
    </div>
  );
}

export default Fetch;
