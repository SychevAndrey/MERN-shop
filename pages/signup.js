import { Button, Form, Icon, Message, Segment } from 'semantic-ui-react';
import Link from 'next/link'

function Signup() {
  return <>
    <Message
      attached
      icon="settings"
      header="Get started!"
      content="Create a new account"
      color="teal"
    />
  <Header as="h2" block>
    <Icon name="add" color="orange" />
    Create New Account
  </Header>
  <Form>
    <Segment>
      <Form.Input fluid icon="user" iconPosition="left" label="Name" placeholder="Name" name="name"/>
      <Form.Input fluid icon="envelope" iconPosition="left" label="Email" placeholder="Email" name="email"/>
      <Form.Input fluid icon="lock" iconPosition="left" label="Password" placeholder="Password" name="password"/>
      <Button icon="signup" color="orange" type="submit" content="Signup" />
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
