import React from 'react';
import { Card, Container, Table, Row, Col } from 'react-bootstrap';
import { TitulosTablaPilotos, DatosTablaPilotos } from '../data/DatosPilotos';
class Pilotos extends React.Component {
  constructor(props) {
    super(props);

  }

  changeStateClicked(item){

    this.setState({
      NombrePulsado: item.Nombre,
      EdadPulsado: item.Edad,
      NacionalidadPulsado: item.Nacionalidad,
      EquipoPulsado: item.Equipo,
      ImagenPulsado: item.imagen,
      DescripcionPulsado: item.descripción
    });

  }

  render() {
    return (
      <div className="main-site">
        <h1>Pilotos</h1>
        <Container>
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped>
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
                      <tr>
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
                <Card.Img variant="top" src={DatosTablaPilotos[2].imagen} />
                <Card.Body>
                  <Card.Title>
                    {DatosTablaPilotos[2].nombre} {DatosTablaPilotos[2].equipo}
                  </Card.Title>
                  <Card.Text>
                    Piloto: {DatosTablaPilotos[2].Nombre}
                    <p />
                    {DatosTablaPilotos[2].descripción}
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