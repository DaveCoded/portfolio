import React from "react"
import axios from "axios"

class Interests extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imageURL: "",
    }
  }

  componentDidMount() {
    const url =
      "https://cors-anywhere.herokuapp.com/https://www.goodreads.com/review/list?v=2&key=yeYsYflJgVmwmObQSkvFyQ&id=20537975&shelf=currently-reading"

    axios.get(url).then(res => {
      const parser = new DOMParser()
      let xmlDoc = parser.parseFromString(res.data, "text/xml")
      const imageURL = xmlDoc.getElementsByTagName("image_url")[0].childNodes[0]
        .nodeValue
      this.setState({ imageURL: imageURL })
    })
  }

  render() {
    return (
      <div>
        <p>
          I'm interested in far too many things, so end up keeping various
          hobbies on an <em>ad hoc</em> rotation. I always have a good book on
          the go, and something beyond my level to learn on the piano.
        </p>
        <p>
          At the moment, other than all the time I dedicate to coding, I am
          starting two podcasts, one with friends and one bizarre solo project
          that may or may not ever be published.
        </p>
        <p>
          Otherwise I'm currently improving my drawing and Illustrator and
          Photoshop skills, playing chess online and learning card tricks.
        </p>
        <img src={this.state.imageURL} alt="Currently Reading" />
      </div>
    )
  }
}

export default Interests
