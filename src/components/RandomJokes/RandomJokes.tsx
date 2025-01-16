import Button from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import {
  JokeCard,
  JokesContainer,
  RandomJokesWrapper,
  JokeText,
  SpinnerWrapper,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  randomJokesSliceActions,
  randomJokesSliceSelectors,
} from "../../store/redux/randomJokes/randomJokesSlice"
import { v4 } from "uuid"

import RandomJoke from "./components/RandomJoke/RandomJoke"
import { IRandomJoke } from "./types"

function RandomJokes() {
  const dispatch = useAppDispatch()
  const { data, error, status } = useAppSelector(
    randomJokesSliceSelectors.jokeData,
  )

  const getJoke = () => {
    dispatch(randomJokesSliceActions.getJoke())
  }

  const deleteJokes = () => {
    dispatch(randomJokesSliceActions.deleteAllJokes())
  }
  const handleDeleteJoke = (id: string) => {
    dispatch(randomJokesSliceActions.deleteJokeById(id))
  }

  console.log(data)
  const jokes = data.map((joke: IRandomJoke) => {
    return (
      <JokeText>
        <RandomJoke
          jokeText={joke.joke}
          onDeleteJoke={() => handleDeleteJoke(joke.id)}
        />
      </JokeText>
    )
  })

  return (
    <RandomJokesWrapper>
      <JokeCard key={v4()}>
        <Button name="GET JOKES" onClick={getJoke} />
        <SpinnerWrapper>{status === "loading" && <Spinner />}</SpinnerWrapper>
        <JokesContainer>{jokes}</JokesContainer>
        {
          (data.length !== 0 && (
            <Button name="DELETE JOKES" onClick={deleteJokes} />
          ))
        }
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes
