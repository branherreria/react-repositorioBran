import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaCoches, DatosTablaCoches } from '../data/DatosCoches';

class Coches extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: '', tableData:[] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  async componentDidMount() {
    const response = await fetch('https://disneyapi.dev/docs');
    const responseData = await response.json();
    this.setState({ tableData: responseData.data.slice(0.19), selectedItem: responseData.data[0]});
  }

  render() {
    return (
      <div className="main-site">
        <h1>Disney</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Personaje</th>
                    <th>Titulo</th>
                    <th></th>
                    <th>Titulo</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.Title}</td>
                        <td>{item.Col}</td>
                        <td>{item.imagen}</td>
                        <td>{item.color}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.state.selectedItem.imagen} />
                <Card.Body>
                  <Card.Title>
                    {this.state.selectedItem.marca}{' '}
                    {this.state.selectedItem.modelo}
                  </Card.Title>
                  <Card.Text>
                    Matrícula: {this.state.selectedItem.matricula}
                    <p />
                    {this.state.selectedItem.descripcion}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Coches;