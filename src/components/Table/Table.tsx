import { useEffect, useState } from "react";

interface UserI {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

const Table = () => {
  const [results, setResults] = useState<UserI[]>([]);

  useEffect(() => {
    fetch("https://reqres.in/api/users?per_page=5")
      .then((response) => response.json())
      .then((data) => {
        setResults(data.data);
      });
  }, []);

  const resultsTable = () => {
    return results.map((singleUser) => {
      return (
        <div>{`${singleUser.id} ${singleUser.first_name} ${
          singleUser.last_name
        } ${new Date().getFullYear()}`}</div>
      );
    });
  };

  return <div>{resultsTable()}</div>;
};

export default Table;
