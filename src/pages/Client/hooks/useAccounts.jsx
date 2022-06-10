import { useState, useEffect } from "react";
import apiCaller from "../../../utils/apiCaller";

const useAccounts = (clientNumber) => {
  const [accounts, setAccounts] = useState([]);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(false);

  const getAccounts = async () => {
    setFetching(true);
    try {
      const accounts = await apiCaller(`/account/${clientNumber}`);
      setAccounts(accounts);
    } catch (error) {
      setError(true);
    }
    setFetching(false);
  };

  useEffect(() => {
    getAccounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { accounts, fetching, error };
};

export default useAccounts;
