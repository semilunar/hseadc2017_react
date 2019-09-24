import React from 'react'
import Avatar from './Avatar'
import Button from './Button'

export default class Menubar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { name, handleClick, avatar, button } = this.props

    return (
      <div>
        Menubar
        <Avatar name={name} color={avatar.color} handleClick={handleClick} />
        <Button name={name} color={button.color} handleClick={handleClick} />
      </div>
    )
  }
}
