import React from 'react'
import OSSE from '../assets/images/OSSE.jpg'
import localLibrary from '../assets/images/LocalLibrary.jpg'
import decoderRing from '../assets/images/DecoderRing.jpg'
import pomodoro from '../assets/images/Pomodoro.jpg'
import githubFlash from '../assets/images/React.png'
import githubGrub from '../assets/images/express.png'
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
          title: 'Old School Space Empire',
          subTitle: `A browser based multiplayer space strategy game where you build you're empire to rule the universe.`,
          imgSrc: OSSE,
          link: 'https://oldschoolspaceeempire.com',
          selected: true,
        },
        {
          id: 1,
          title: 'Local Library Project',
          subTitle: 'A local library with data populated with Javascript.',
          imgSrc: localLibrary,
          link:
            'https://jonathanmartin-gif.github.io/project-local-library-master/public/',
          selected: true,
        },
        {
          id: 2,
          title: 'Decoder Ring Project',
          subTitle:
            'A Decoder Ring that Decodes and Encodes using Javascript Algorithms.',
          imgSrc: decoderRing,
          link: 'https://jonathanmartin-gif.github.io/project-decoder-ring/',
          selected: true,
        },
        {
          id: 3,
          title: 'Pomodoro Timer',
          subTitle: 'A time project in React.js.',
          imgSrc: pomodoro,
          link: 'https://pomodoro-timer-914gb43pj.vercel.app/',
          selected: true,
        },
        {
          id: 4,
          title: 'FlashCard App',
          subTitle: `A flash-card application built with react.js from API calls. 
            Please note that there is a live version of this project, 
            but the back-end still needs to be created.`,
          imgSrc: githubFlash,
          link: 'https://github.com/JonathanMartin-gif/FlashCardAppReact',
          selected: true,
        },
        {
          id: 5,
          title: 'GrubDash API',
          subTitle: `A API built for a GrubDash front-end using Node.js/Express.js. 
            This is only the API with no database.`,
          imgSrc: githubGrub,
          link: 'https://github.com/JonathanMartin-gif/GrubDash_Back_End',
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

export default Carousel
