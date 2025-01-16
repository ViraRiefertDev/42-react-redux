import axios from "axios"
import { createAppSlice } from "../../createAppSlice"
import { RandomJokesSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"
import { v4 } from "uuid"

const randomJokesInitialState: RandomJokesSliceState = {
  data: [],
  error: undefined,
  status: "default",
}

export const RandomJokesSlice = createAppSlice({
  name: "RANDOM_JOKES",
  initialState: randomJokesInitialState,
  //* 1. middleware создаем в объекте reducers вместе с обычными reducers (тоесть на равне с ними)
  reducers: create => ({
    //* 2. Создаем middleware с помощью метода asyncThunk из объекта create
    //* метод asyncThunk принимает 2 аргумента
    //* 1-й аргумент: асинхронная функция, которая будет отправлять запрос
    //* 2-й аргумент: объект с 3-мя методами, которые обрабатывают результат выполнения асинхронной функции
    getJoke: create.asyncThunk(
      //* асинхронная функция может принимать 2 аргумента
      //* 1-й аргумент arc, он позволяет передевать данные из компонента в асинхронную функцию, например, для отправки данных на сервер при работе с методами post
      //* 2-й аргумент thunkApi, это объект, который содержит вспомогательные функции для работы с асинхронными функциями
      async (arg, thunkApi) => {
        try {
          const result = await axios.get(
            "https://official-joke-api.appspot.com/random_joke",
          )
          //* 3. В случае успешного завершения запроса, возвращаем полученные данные, для того, чтобы получить их в обработчике fulfilled
          return result.data
        } catch (error) {
          //* 4. В случае ошибки, отправляем её в обработчик rejected с помощью метода rejectWithValue из apiThunk
          thunkApi.rejectWithValue(error)
        }
      },
      {
        //* 5. Обрабатываем событие ожидания ответа
        pending: (state: RandomJokesSliceState) => {
          state.status = "loading"
          //* если осталась с предыдущего запроса ошибка ее надо очистить
          state.error = undefined
        },
        //* 6. Обработка успешного результата
        fulfilled: (state: RandomJokesSliceState, action: any) => {
          state.status = "success"
          state.data = [
            ...state.data,
            {
              id: v4(),
              joke: `${action.payload.setup} - ${action.payload.punchline}`,
            },
          ]
        },
        //* 7. Обработка ошибки
        rejected: (state: RandomJokesSliceState, action: any) => {
          state.status = "error"
          state.error = action.payload
        },
      },
    ),
    deleteAllJokes: create.reducer(() => randomJokesInitialState),
    deleteJokeById: create.reducer(
      (state: RandomJokesSliceState, action: PayloadAction<string>) => {
        state.data = state.data.filter(joke => joke.id !== action.payload)
      },
    ),
  }),
  selectors: {
    jokeData: (state: RandomJokesSliceState) => state,
  },
})

export const randomJokesSliceActions = RandomJokesSlice.actions
export const randomJokesSliceSelectors = RandomJokesSlice.selectors
