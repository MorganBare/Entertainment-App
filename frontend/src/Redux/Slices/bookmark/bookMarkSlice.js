import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTrending } from "utils/API_Functions/getData";
import { randomizeData } from "utils/API_Functions/getRandomData";

export const fetchTrending = createAsyncThunk(
  "bookMark/fetchTrending",
  async () => {
    const data = await getTrending("all", "week");
    return randomizeData(data);
  }
);

export const fetchTvSeries = createAsyncThunk(
  "bookMark/fetchTvSeries",
  async () => {
    const data = await getTrending("tv", "day");
    return randomizeData(data);
  }
);

export const fetchMovies = createAsyncThunk(
  "bookMark/fetchMovies",
  async () => {
    const data = await getTrending("movie", "week");
    return randomizeData(data);
  }
);

const initialState = {
  bookMark: [],
  trending: [],
  tvSeries: [],
  movies: [],
};

const bookMarkSlice = createSlice({
  name: "bookMark",
  initialState,
  reducers: {
    addBookMark: (state, { payload }) => {
      state.bookMark.push(payload);
    },
    removeBookMark: (state, { payload }) => {
      state.bookMark = state.bookMark.filter((book) => book.id !== payload.id);
    },
  },
  extraReducers: (builder) => {
    // Fetch Trending
    builder.addCase(fetchTrending.fulfilled, (state, { payload }) => {
      state.trending = payload;
    });
    builder.addCase(fetchTrending.rejected, (state, { payload }) => {
      console.log(payload);
    });
    builder.addCase(fetchTrending.pending, (state, { payload }) => {
      console.log(payload);
    });

    // Fetch TvSeries
    builder.addCase(fetchTvSeries.fulfilled, (state, { payload }) => {
      state.tvSeries = payload;
    });
    builder.addCase(fetchTvSeries.rejected, (state, { payload }) => {
      console.log(payload);
    });
    builder.addCase(fetchTvSeries.pending, (state, { payload }) => {
      console.log(payload);
    });

    // Fetch Movies
    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.movies = payload;
    });
    builder.addCase(fetchMovies.rejected, (state, { payload }) => {
      console.log(payload);
    });
    builder.addCase(fetchMovies.pending, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export const { addBookMark, removeBookMark } = bookMarkSlice.actions;

export const selectTrending = (state) => state.bookMark.trending;
export const selectTvSeries = (state) => state.bookMark.tvSeries;
export const selectMovies = (state) => state.bookMark.movies;
export const selectBookMark = (state) => state.bookMark.bookMark;

export default bookMarkSlice.reducer;
