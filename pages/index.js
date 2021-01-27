import styled from 'styled-components'

import db from '../db.json'
import Widget from '../src/components/Widget'
import QuizBackground from '../src/components/QuizBackground'
import QuizContainer from '../src/components/QuizContainer'
import QuizLogo from '../src/components/QuizLogo'
import Footer from '../src/components/Footer'
import GithubCorner from '../src/components/GithubCorner'

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>LOTR Master Quiz</h1>
          </Widget.Header>
          <Widget.Content>
            <h3>That You Shall Not Pass!</h3>
            <p>
              Despite being released well over a decade ago, The Lord of the Rings 
              movies remains just as prevalent in our culture. It looks like 
              this Tolkien fantasy isn’t going anywhere anytime soon, which is good 
              for those us who like to venture back into Middle-earth at least 
              a few times every year.
            </p>
            <p>
              So for this quiz, we’ll be focusing on some more of the obscure trivia 
              and facts from the original trilogy.
            </p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Related Quizzes</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem ipsum</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GithubCorner projectUrl="https://github.com/rmmarquini" />
    </QuizBackground>
  )
}
