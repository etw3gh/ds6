import React, { Component } from 'react'
import InfoCard from '../components/infocard'
import { Container, Row, Col } from 'reactstrap'

export default class SourceCode extends Component {

  render() {

    const ds6Card = <InfoCard img='https://ds6.ca/img/logo.png'
                              link='https://github.com/openciti/ds6'
                              title='ds6'
                              subtitle='Current repo'
                              text='Current dinesasfe front end, based on CoreUI React Starter' />
    const dinesafe6Card = <InfoCard img='https://ds6.ca/img/logo.png'
                              link='https://github.com/openciti/dinesafe6'
                              title='dinesafe6'
                              subtitle='Legacy repo'
                              text='Original react front end project. Has been refactored (see ds6)' />
    const opencitiCard = <InfoCard img='https://avatars1.githubusercontent.com/u/4270738?v=3&u=38b9c2c07cc136c9c7c3e257bdb41efa41e121e2&s=400'
                              link='https://github.com/openciti?tab=repositories'
                              title='openciti'
                              subtitle='My github'
                              text='A collection of projects and demos' />
    const starterCard = <InfoCard img='https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/raw/master/React_Starter/public/img/logo.png'
                              link='https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/tree/master/React_Starter'
                              title='CoreUI'
                              subtitle='Bootstrap Template built as framework'
                              text='CoreUI was designed as its own extended version of Bootstrap.' />

    return (
      <Container>
        <Row>
          <Col>{ds6Card}</Col>
          <Col>{starterCard}</Col>
        </Row>
        <Row>
          <Col>{opencitiCard}</Col>
          <Col>{dinesafe6Card}</Col>
        </Row>
      </Container>
    )
  }
}
