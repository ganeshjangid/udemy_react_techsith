import { useState, useEffect } from "react";

const initProfile = {
  followers: 0,
  public_repos: 0,
};

function useCustomFetch(url: string) {
  const [data, setData] = useState(initProfile);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function customFetch(URL: string) {
    try {
      let response = await fetch(URL);
      let json = await response.json();
      setData({
        followers: json.followers,
        public_repos: json.public_repos,
      });
      setLoading(false);
    } catch (Error: any) {
      setError(Error);
      setLoading(false);
    }
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      customFetch(url);
    }, 3000);
  }, [url]);

  return [data, error, loading];
}

export default useCustomFetch;
