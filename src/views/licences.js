import React, { Component } from 'react'
import InfoCard from '../components/infocard'
import { Container, Row, Col } from 'reactstrap'

export default class Licences extends Component {

  render() {

    const gpl3 = <InfoCard img='http://blog.blackducksoftware.com/hs-fs/hubfs/GPL3-header.png?t=1497307767395&width=1200&name=GPL3-header.png'
                           link='https://www.gnu.org/licenses/gpl-3.0.en.html'
                           title='GNU GENERAL PUBLIC LICENSE'
                           subtitle='Version 3, 29 June 2007'
                           text='Richard Stallman is watching' />
    const toronto = <InfoCard img='http://www.houselink.on.ca/wp-content/uploads/2015/07/untitled.png'
                              link='http://www1.toronto.ca/wps/portal/contentonly?vgnextoid=4a37e03bb8d1e310VgnVCM10000071d60f89RCRD'
                              title='City of Toronto Open Data Licence'
                              subtitle='Version 1.0'
                              text='Open Government Licence' />


    return (
      <Container>
        <Row>
          <Col>{gpl3}</Col>
          <Col>{toronto}</Col>
        </Row>
      </Container>
    )
  }
}
