import React from 'react'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import thinkful from '../assets/images/Thinkful-Certificaiton.jpg'

class CarouselTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'ThinkFul Certification',
          subTitle: `A coding boot-camp where I learned the fundamentals of software engineering.`,
          imgSrc: thinkful,
          link: 'https://www.thinkful.com/',
          selected: true,
        },
      ],
    }
  }
  handleCardClick = (id, card) => {
    let items = [...this.state.items]
    items[id].selected = items[id].selected ? false : true
    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false
      }
    })
    this.setState({
      items,
    })
  }

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      )
    })
  }
  render() {
    return (
      <Container fluid={true}>
        <Row className='justify-content-around'>
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    )
  }
}

export default CarouselTwo
