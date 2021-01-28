import React from 'react';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import QuizLogo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import GithubCorner from '../src/components/GithubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>

        <QuizLogo />

        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <h3>{db.subtitle}</h3>
            <p>{db.description}</p>
            <p>{db.explanationText}</p>

            <h3>Would you want to play!?</h3>
            <br />
            <form onSubmit={(infosDoEvento) => {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Tell me your name, mortal!"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Let's play ${name}`}
              </Button>
            </form>
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
      <GithubCorner projectUrl="https://github.com/rmmarquini/aluraquiz-lotr" />
    </QuizBackground>
  );
}
