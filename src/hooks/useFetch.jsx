import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        setPending(false);
      })
      .catch((err) => {
        setError(true);
        setPending(false);
        setData(false);
      });
  }, [url]);

  return { data, pending, error };
};

export default useFetch;
