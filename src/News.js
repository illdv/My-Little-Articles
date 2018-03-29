import React, { Component } from 'react'
import FormInput from './FormInput'
import ListArticles from './ListArticles'

import data from './data'


class News extends Component {

  state = {
    data,
    input: '',
    area: ''
  }


  StateSet = (value, key) => {
    this.setState({ [key]: value })
  }

  addedArticle = (data) => {
    this.setState({ data, input: '', area: '' })
  }
  render() {

    return <div>
      <h1>Статьи</h1>
      <ListArticles data={this.state.data} />
      <FormInput {...this.state} onChange={this.StateSet} onClick={this.addedArticle} />
    </div>
  }
}

export default News