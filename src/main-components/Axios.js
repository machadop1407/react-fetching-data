import React, { useEffect, useState } from "react";
import axios from "axios";

function Axios() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get("https://dog.ceo/api/breeds/image/random").then((resp) => {
      setData(resp.data.message);
    });
  }, []);
  return (
    <div>
      <img width={500} src={data} />
    </div>
  );
}

export default Axios;
