import React, { Component } from 'react'


class TestInput extends Component {

  state = {
    disabled: true,
  }


  handleCheck = (e) => this.setState({
    disabled: !e.target.checked
  })


  handleChange = key => e => {
    this.props.onChange(e.target.value, key)
  }

  submit = (inp, ar) => e => {
    e.preventDefault()
    const { input, area, data } = this.props

    this.props.onClick([...data, { author: input, text: area }]
    )
    inp.value = ''
    ar.value = ''
  }

  render() {
    return <form>

      <input input={this.props.input} onChange={this.handleChange('input')} placeholder='введите значение' ref={input => this.input = input} />

      <textarea area={this.props.area} onChange={this.handleChange('area')} placeholder='Текст новости' ref={area => this.area = area}
      ></textarea>

      <label>
        <input onChange={this.handleCheck} type='checkbox' />Я согласен с правилами
        </label>

      <button onClick={this.submit(this.input, this.area)} disabled={this.state.disabled || !this.props.input || !this.props.area}>
        Добавить
      </button>

    </form>
  }

}

export default TestInput