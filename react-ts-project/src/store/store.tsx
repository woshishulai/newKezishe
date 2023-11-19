import { configureStore } from '@reduxjs/toolkit'
//初始化
import home from "./module/home/slice"
//引入模块的仓库

//创建库
export const store = configureStore({
  //每个模块下的库
  reducer: {
    home:home
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch