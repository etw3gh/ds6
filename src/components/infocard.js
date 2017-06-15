import React, { Component } from 'react'
import { Button, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle } from 'reactstrap'


export default class InfoCard extends Component {
  render() {
    const P = this.props
    return (
      <Card>
        <CardImg top width="100%" height='200px ' src={P.img} />
        <CardBlock>
          <CardTitle>{P.title}</CardTitle>
          <CardSubtitle>{P.subtitle}</CardSubtitle>
          <CardText>{P.text}</CardText>
          <a href={P.link}><Button className='primary'>Link</Button></a>
        </CardBlock>
      </Card>
    )
  }
}
