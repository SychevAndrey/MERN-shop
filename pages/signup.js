import { useState, useEffect } from 'react';
import { Header, Button, Form, Icon, Message, Segment } from 'semantic-ui-react';
import Link from 'next/link';
import catchErrors from '../utils/catchErrors';
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { handleLogin } from "../utils/auth";

const INITIAL_USER = {
  name: '',
  email: '',
  password: '',
}

function Signup() {
  const [user, setUser] = useState(INITIAL_USER);
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true);
      setError('');
      const url = `${baseUrl}/api/signup`;
      const payload = {...user};
      const res = await axios.post(url, payload);
      handleLogin(res.data);
    } catch (error) {
      catchErrors(error, setError)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const isUser = Object.values(user).every(el => Boolean(el))
    if (isUser) setDisabled(false);
  }, [user])

  return <>
    <Header as="h2" block>
      <Icon name="signup" color="orange" />
    Create New Account
  </Header>
    <Form error={Boolean(error)} loading={loading} onSubmit={handleSubmit}>
      <Message error header="Oops!" content={error} />
      <Segment>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          label="Name"
          placeholder="Name"
          name="name"
          onChange={handleChange}
          value={user.name}
        />
        <Form.Input
          fluid
          icon="envelope"
          iconPosition="left"
          label="Email"
          placeholder="Email"
          name="email"
          type="email"
          onChange={handleChange}
          value={user.email}
        />
        <Form.Input fluid type="password" icon="lock" iconPosition="left" label="Password" placeholder="Password" name="password" onChange={handleChange} value={user.password} />
        <Button disabled={disabled || loading} icon="signup" color="orange" type="submit" content="Signup" />
      </Segment>
    </Form>
    <Message attached="bottom" warning>
      <Icon name="help" />
    Existing user?{" "}
      <Link href='/login'><a>Log in here</a></Link>{" "}instead.
  </Message>
  </>;
}

export default Signup;
