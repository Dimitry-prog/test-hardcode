import UserList from "./components/UserList";
import Pagination from "./components/Pagination";
import Filters from "./components/Filters";
import useUsersInfo from "./hooks/useUsersInfo";
import './index.css';

export default function App() {
  const {
    users,
    values,
    setValues,
    isLoading,
    error,
    pagination,
    setPagination,
    hasMoreUsers
  } = useUsersInfo();

  return (
    <>
      <Filters values={values} setValues={setValues} isDisabled={isLoading}/>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <UserList users={users} />
      )}
      <Pagination
        hasNext={hasMoreUsers}
        pagination={pagination}
        setPagination={setPagination}
        isDisabledBtn={isLoading}
      />
    </>
  );
}
