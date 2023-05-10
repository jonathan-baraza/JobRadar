import { useState, useEFfect, useEffect } from "react";
import axios from "axios";

import { RAPID_API_KEY } from "react-native-dotenv";

const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: {
      ...query,
    },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.request(options);
      console.log("from hook");
      setData(response.data.data);
      console.log("data here");
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
      setError(error);
      alert(error?.message || "There is an error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };
  return { loading, data, error, refetch };
};

export default useFetch;
