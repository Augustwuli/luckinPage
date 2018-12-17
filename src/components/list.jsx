import React, {Component} from 'react'

export default class List extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: ['1','2','3','4','5','6','7','8','9']
    }
  }

  componentDidMount(){}

  render () {
    let {list} = this.state
    let dom = null
    if (list.length !==0) {
      let listDom = list.map((i, k) => {
        return (
        <li className="item" key={k}></li>
        )
      })
      dom = (
        <div className="product_list">
          <ul>{listDom}</ul>
        </div>
      )
    }
    return (
      dom
    )
  }
}