import { defaultLocale } from "yup"
import { RandomJokeProps } from "./types"
import Button from "../../../Button/Button"
import { JokeContainer, Joke, ButtonWrapper } from "./styles"

function RandomJoke({ jokeText, onDeleteJoke }: RandomJokeProps) {
  return (
    <JokeContainer>
      <Joke>{jokeText}</Joke>
      <ButtonWrapper>
        <Button name="Delete Joke" onClick={onDeleteJoke}/>
      </ButtonWrapper>
    </JokeContainer>
  )
}

export default RandomJoke
