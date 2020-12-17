import { Header, Table, Checkbox, Icon } from "semantic-ui-react";
import baseUrl from "../../utils/baseUrl";
import cookie from "js-cookie";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import formatDate from "../../utils/formatDate";

function AccountPermissions() {
  const [users, setUsers] = useState([]);
  const token = cookie.get("token");
  const usersUrl = `${baseUrl}/api/users`;

  useEffect(() => {
    const getUsers = async () => {
      const payload = { headers: { Authorization: token } };
      const response = await axios.get(usersUrl, payload);
      setUsers(response.data);
    };
    getUsers();
  }, []);

  async function changeUserPermissions(userId, isAdmin) {
    const payload = { _id: userId, role: isAdmin ? "admin" : "user" };
    const { data: updatedUser } = await axios.put(usersUrl, payload);
    const newUsers = users.map((user) => {
      if (user._id === updatedUser._id) {
        user.role = updatedUser.role;
      }
      return user;
    });
    setUsers(newUsers);
  }

  return (
    <div style={{ margin: "2em 0" }}>
      <Header as="h2">
        <Icon name="settings" />
        User Permissions
      </Header>
      <Table compact celled definition>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Joined</Table.HeaderCell>
            <Table.HeaderCell>Updated</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((user) => (
            <UserPermission
              changeUserPermissions={changeUserPermissions}
              key={user._id}
              user={user}
            />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

function UserPermission({ user, changeUserPermissions }) {
  const { name, email, createdAt, updatedAt, role, _id } = user;
  const [isAdmin, setAdmin] = useState(role === "admin");
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    changeUserPermissions(user._id, isAdmin);
  }, [isAdmin]);

  return (
    <Table.Row>
      <Table.Cell collapsing>
        <Checkbox
          checked={isAdmin}
          onChange={() => setAdmin((prevState) => !prevState)}
          toggle
        />
      </Table.Cell>
      <Table.Cell>{name}</Table.Cell>
      <Table.Cell>{email}</Table.Cell>
      <Table.Cell>{formatDate(createdAt)}</Table.Cell>
      <Table.Cell>{formatDate(updatedAt)}</Table.Cell>
      <Table.Cell>{role}</Table.Cell>
    </Table.Row>
  );
}

export default AccountPermissions;
