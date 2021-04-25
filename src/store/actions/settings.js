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

export const _setGeolocation = (state, action) => {
  state.geolocation = action.payload;
};

export const _setGroupeLieu = (state, action) => {
  state.groupeLieu = action.payload;
};

export const _setOptions = (state, action) => {
  const {groupe_lieu, lieu, theme} = action.payload;
  state.groupeLieu = groupe_lieu;
  state.lieu = lieu;
  state.theme = theme;
};

export const _setUseGeolocation = (state, action) => {
  state.useGeolocation = action.payload;
};
