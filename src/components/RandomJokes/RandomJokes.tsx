import Button from "../Button/Button"
import Spinner from "../Spinner/Spinner"
import {
  JokeCard,
  JokesContainer,
  RandomJokesWrapper,
  JokeText,
} from "./styles"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import {
  randomJokesSliceActions,
  randomJokesSliceSelectors,
} from "../../store/redux/randomJokes/randomJokesSlice"
import { v4 } from "uuid"

function RandomJokes() {
  const dispatch = useAppDispatch()
  const { data, error, status } = useAppSelector(
    randomJokesSliceSelectors.jokeData,
  )

  const getJoke = () => {
    dispatch(randomJokesSliceActions.getJoke())
  }

  const deleteJokes = ()=>{
    dispatch(randomJokesSliceActions.deleteAllJokes())
  }

  console.log(data)
  const jokes = data.map((joke: any) => {
    return (
      <JokeText>
        {joke.setup} - {joke.panchline}
      </JokeText>
    )
  })

  return (
    <RandomJokesWrapper>
      <JokeCard key={v4()}>
        <Button name="GET JOKES" onClick={getJoke} />
        {status === "loading" && <Spinner />}
        <JokesContainer>{jokes}</JokesContainer>
        <Button name="DELETE JOKES" onClick={deleteJokes}/>
      </JokeCard>
    </RandomJokesWrapper>
  )
}

export default RandomJokes
