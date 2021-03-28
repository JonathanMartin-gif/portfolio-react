import React from 'react'
import github1 from '../assets/images/javascript2.png'
import github2 from '../assets/images/React.png'
import Card from '../components/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

class Carousel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 0,
          title: 'Local Library Project',
          subTitle: 'A local library with data populated with Javascript.',
          imgSrc: github1,
          link:
            'https://jonathanmartin-gif.github.io/project-local-library-master/public/',
          selected: false,
        },
        {
          id: 1,
          title: 'Decoder Ring Project',
          subTitle:
            'A Decoder Ring that Decodes and Encodes using Javascript Algorithms.',
          imgSrc: github1,
          link: 'https://jonathanmartin-gif.github.io/project-decoder-ring/',
          selected: false,
        },
        {
          id: 2,
          title: 'Pomodoro Timer',
          subTitle: 'A time project in React.js.',
          imgSrc: github2,
          link: 'https://pomodoro-timer-914gb43pj.vercel.app/',
          selected: false,
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

export default Carousel
