import React from 'react'
import './styles/main.css'

class Questions extends React.Component {
  render() {
    let questionsContainer = this.props.currentQuestions.map((questionObj, i, questionsList) => {
      return (
        <QuestionLine 
          questionTitle={questionsList[i].title}
          questionBody={questionsList[i].body}
          key={i}
        />
      )
    })
    return (
      <div className="container">
        <h1 className="container-title">FAQ</h1>
        <ul className="container-questions">
          {questionsContainer}
        </ul>
      </div>
    )
  }
}

class QuestionLine extends React.Component {
  state = {
    hidden: 'hidden',
    bold: '',
    rotate: 'arrow-down',
  }

  handleClick = (event) => {
    this.state.hidden === 'hidden' ? 
    this.setState({
      hidden: '',
      bold: 'bold',
      rotate: 'arrow-down up',
    }) :
    this.setState({
      hidden: 'hidden',
      bold: '',
      rotate: 'arrow-down',
    })
  }

  render() {
    return (
      <li 
        className="container-questions_question"
        onClick={this.handleClick}
      >
        <h5 className={this.state.bold}>
          {this.props.questionTitle}
        </h5>
        <span 
          className={this.state.rotate} 
          onClick={this.handleClick}
        >
        </span>
        <p className={this.state.hidden}>
          {this.props.questionBody}
        </p>
      </li>
    )
  }
}

export default Questions


