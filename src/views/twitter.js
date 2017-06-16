import React, { Component } from 'react'
import TwitterTL from '../components/twitter'
import { Container, Row, Col } from 'reactstrap'

export default class TwitterView extends Component {

  render() {

    return (
      <Container>
        <Row>
          <Col><TwitterTL /></Col>
        </Row>
      </Container>
    )
  }
}
