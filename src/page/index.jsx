import React, {Component} from 'react'
import List from '@/components/list'

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount (){
  }

  getData () {}

  render () {
    let {list} = this.state
    return (
      <div>
        <div className="banner"></div>
        <div className="input-group">
          <input className="content input" type="text" placeholder="请输入手机号" />
          <div className="content button">免费领取</div>
        </div>
        <List list={list}></List>
      </div>
    )
  }
}