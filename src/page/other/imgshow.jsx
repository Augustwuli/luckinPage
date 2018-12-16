import React, {Component} from 'react'
import Path from '@/tool/path'

export default class ImgShow extends Component {
  render () {
    return (
      <div>
        <p>下面是插入的图片</p>
        <img src={Path('favicon.ico')}  alt='react'/>
        <div className="use_bg_img"></div>
      </div>
    )
  }
}