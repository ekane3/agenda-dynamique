import {createSlice} from '@reduxjs/toolkit';
import {
  _setDarkTheme,
  _setShowCommunes,
  _setLieu,
  _setTheme,
  _setGelocation,
} from '../actions/settings';

const initialState = {
  darkTheme: false,
  showCommunes: false,
  lieu: undefined,
  theme: undefined,
  geolocation: undefined,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setDarkTheme: _setDarkTheme,
    setShowCommunes: _setShowCommunes,
    setLieu: _setLieu,
    setTheme: _setTheme,
    setGeoLocation: _setGelocation,
    restore: (state, action) => (state = initialState),
  },
});

export default settingsSlice;
