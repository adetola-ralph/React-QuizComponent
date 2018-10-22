import React, { Component } from 'react';

// Components
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends Component {
  handleClick(buttonText) {
    const { showNextQuestionHandler } = this.props;
    if (buttonText === this.props.quiz_question.answer) {
      showNextQuestionHandler();
    }
  }

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            {
              this.props.quiz_question.answer_options.map((answer, index) => 
                <QuizQuestionButton key={index} button_text={answer} clickHandler={this.handleClick.bind(this)}/>
              )
            }
          </ul>
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
