import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavbarD from '../components/navbar';
import Footer from '../components/footer';

function Cadastro() {
  return (
    
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="Email" />
        <Form.Text className="text-muted">
   
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="Senha" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <Button variant="primary" type="Submit">
        Cadastrar
      </Button>
    </Form>
  );
}

export default Cadastro;