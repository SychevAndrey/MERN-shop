import { Container, Pagination } from 'semantic-ui-react';
import { useRouter } from 'next/router';

//TODO: bug with routing with header and active page

function ProductPagination({ totalPages }) {
  const router = useRouter();

  return <Container
  textAlign="center"
  style={{ margin: '2em'}}>
    <Pagination 
      defaultActivePage={1}
      totalPages={totalPages}
      onPageChange={(event, data) => { 
        router.push(`/?page=${data.activePage}`);
      }}
    />
  </Container>;
}

export default ProductPagination;
