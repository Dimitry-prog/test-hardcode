import { useEffect, useState } from "react";
import { Query, requestUsers, User } from "../api/api.ts";
import useDebounce from "./useDebounce.ts";

const useUsersInfo = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState<Pick<Query, "name" | "age">>({
    name: "",
    age: ""
  });
  const [pagination, setPagination] = useState<Pick<Query, "limit" | "offset">>(
    {
      limit: 4,
      offset: 0
    }
  );
 const debouncedValues = useDebounce(values, 500);

  const [hasMoreUsers, setHasMoreUsers] = useState<boolean>(true);

  useEffect(() => {
    const fetchedUser = async () => {
      setIsLoading(true);
      try {
        const users = await requestUsers({
          name: debouncedValues.name,
          age: debouncedValues.age,
          limit: pagination.limit,
          offset: pagination.offset
        });
        setUsers(users);
        setIsLoading(false);
        if (users.length < pagination.limit) {
          setHasMoreUsers(false);
        }
      } catch (e) {
        const error = e as string;
        setError(error);
        console.log(e);
      }
    };
    fetchedUser();
  }, [debouncedValues, pagination]);

  return {
    users,
    values,
    setValues,
    isLoading,
    error,
    pagination,
    setPagination,
    hasMoreUsers
  };
};

export default useUsersInfo;
