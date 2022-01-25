import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import FormSelect from 'react-bootstrap/esm/FormSelect';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', password: '' };
    this.login = this.login.bind(this);
    this.inputUser = React.createRef();
    this.inputPassword = React.createRef();
  }

  login() {
    //this.setState({ user: 'Pepito', password: '1234' });
    this.setState({
      user: this.inputUser.current.value, 
      password: this.inputPassword.current.value
    });
    localStorage.setItem('user', this.state.user);
  }

  render() {
    if (this.state !== null && this.state.user !== null && this.state.user !== "") {
      return (
        <div className="main-site">
          <h1>Bienvenido {this.state.user}!</h1>
        </div>
      );
    } else {
      return (
        <div className="main-site">
          <h1>Bienvenido!</h1>

          <Container>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control ref={this.inputUser} type="email" placeholder="Introduce tu correo" />
                <Form.Text className="text-muted">
                  No compartiremos tu email con nadie NUNCA
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  ref={this.inputPassword}
                  type="password"
                  placeholder="Introduce la palabrita mágica"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recordarme" />
              </Form.Group>
              <Button variant="primary" type="button" onClick={this.login}>
                Submit
              </Button>
            </Form>
          </Container>
        </div>
      );
    }
  }
}
export default Home;
