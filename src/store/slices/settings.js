import {createSlice} from '@reduxjs/toolkit';
import {
  _setDarkTheme,
  _setShowCommunes,
  _setLieu,
  _setTheme,
  _setGeolocation,
  _setGroupeLieu,
  _setOptions,
  _setUseGeolocation,
} from '../actions/settings';

const initialState = {
  darkTheme: false,
  showCommunes: false,
  useGeolocation: false,
  groupeLieu: undefined,
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
    setGroupeLieu: _setGroupeLieu,
    setTheme: _setTheme,
    setUseGeoLocation: _setUseGeolocation,
    setGeoLocation: _setGeolocation,
    setOptions: _setOptions,
    restore: (state, action) => (state = initialState),
  },
});

export default settingsSlice;
