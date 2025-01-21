import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user.error);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <div>
      <h3>Users List</h3>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.users ? (
        <ul>
          {user.users.map((use) => (
            <li key={use.id}>{use.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
