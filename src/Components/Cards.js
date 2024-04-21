import Card from 'react-bootstrap/Card';

function TextExample() {
  return (
    <Card style={{ width: '20rem', height: '20rem' }}>
      <Card.Body>
        <Card.Title>What is Techcore?</Card.Title>
        <Card.Text>
          Techcore is a non profit orginization that is dedicated towards reducing the digital divide in education. 
          We understand that not every school has enough funds to be able to purchase computers.  

        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default TextExample;