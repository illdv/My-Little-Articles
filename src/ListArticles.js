import React from 'react'
import Article from './Article'

class ListArticles extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.data !== nextProps.data
  }

  render() {
    return this.props.data.map((article, index) =>
      <Article article={article} key={index} />
    )

  }

}




export default ListArticles