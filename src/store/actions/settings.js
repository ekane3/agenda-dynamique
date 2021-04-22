export const _setDarkTheme = (state, action) => {
  state.darkTheme = action.payload || !state.darkTheme;
};

export const _setShowCommunes = (state, action) => {
  state.showCommunes = action.payload || !state.showCommunes;
};

export const _setLieu = (state, action) => {
  state.lieu = action.payload;
};

export const _setTheme = (state, action) => {
  state.theme = action.payload;
};

export const _setGelocation = (state, action) => {
  state.geolocation = action.payload;
};
