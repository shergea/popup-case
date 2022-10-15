/* eslint-disable no-nested-ternary */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Font, { FontItem } from "../../models/font";
import Setting from "../../models/setting";

const fontsCacheDuration = 30 * 1000;

export const fetchFonts = createAsyncThunk(
  "home/fetchFonts",
  async () => {
    const response = await fetch("https://apiv2.popupsmart.com/api/googlefont");
    return (await response.json()) as Array<FontItem>;
  },
  {
    condition: (_, { getState }): boolean => {
      const { home }: { home: HomeReducerModel } = getState() as any;
      const { expireTime } = home.font;
      const now = new Date().getTime();
      if (expireTime > now) {
        return false;
      }
      return true;
    },
  },
);

interface HomeReducerModel {
  setting: Setting;
  font: Font;
}

const initialState: HomeReducerModel = {
  setting: {
    headline: "NEW STUFF",
    description: "Sign up for our newsletter and get 15% off your first order!",
    successMessage: "Success",
    buttonText: "GET MY 30% OFF",
    font: null,
  },
  font: {
    entities: [],
    loading: "idle",
    expireTime: 0,
  },
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setSetting: (state, action: PayloadAction<Setting>): void => {
      state.setting = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchFonts.fulfilled, (state, action) => {
      state.font.entities = action.payload
        .filter((x) => x.category !== "monospace")
        .sort((a, b) =>
          a.family > b.family ? 1 : b.family > a.family ? -1 : 0,
        );
      state.font.loading = "succeeded";
      state.font.expireTime = new Date().getTime() + fontsCacheDuration;
    });
  },
});

export const { setSetting } = homeSlice.actions;

export const selectHome = (state: any) => state.home;

export default homeSlice.reducer;
