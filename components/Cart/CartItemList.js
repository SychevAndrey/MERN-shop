import { Header, Segment, Button, Icon } from "semantic-ui-react";

function CartItemList() {
  const user = false;

  return (
    <Segment secondary color="violet" inverted textAlign="center" placeholder>
      <Header icon>
        <Icon name="shopping basket" />
        No products in your cart. Add some!
      </Header>
      <div>
        {user ? (
          <Button color="teal">View Products</Button>
        ) : (
          <Button color="teal">Login to Add Products</Button>
        )}
      </div>
    </Segment>
  );
}

export default CartItemList;
