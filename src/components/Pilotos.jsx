import React from 'react';
import uuid from 'react-uuid';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaPilotos, DatosTablaPilotos } from '../data/DatosPilotos';

class Pilotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: DatosTablaPilotos[0] };
  }

  changeSelected = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <div className="main-site">
        <h1>Pilotos</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>{TitulosTablaPilotos.id}</th>
                    <th>{TitulosTablaPilotos.field1}</th>
                    <th>{TitulosTablaPilotos.field2}</th>
                    <th>{TitulosTablaPilotos.field3}</th>
                  </tr>
                </thead>
                <tbody>
                  {DatosTablaPilotos.map((item) => {
                    return (
                      <tr
                        key={uuid()}
                        onClick={() => this.changeSelected(item)}
                      >
                        <td>{item.Nombre}</td>
                        <td>{item.Edad}</td>
                        <td>{item.Nacionalidad}</td>
                        <td>{item.Equipo}</td>
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
                    {this.state.selectedItem.Nombre}
                  </Card.Title>
                  <Card.Text>
                  {this.state.selectedItem.Nacionalidad}
                  </Card.Text>
                  <Card.Text>
                    {this.state.selectedItem.descripción}
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

export default Pilotos;