import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      author: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  }

  state = {
    isOpen: false,
    counter: 0
  }

  setCounter = () =>
    this.setState((prevState) => ({ counter: ++prevState.counter }))



  render() {
    console.log('rendering');

    const { article } = this.props

    return <article onClick={this.setCounter}
    >
      <h3>{article.author}</h3>
      <p>{article.text}</p>
      <p> {this.state.isOpen ? <p>{article.bigText ? article.bigText : 'Подробностей нет'}</p> : null}
      </p>
      <button onClick={() => {
        this.setState({ isOpen: !this.state.isOpen });
      }}>Подробнее
      </button>
      <span>{this.state.counter}</span>
    </article>
  }

}

export default Article