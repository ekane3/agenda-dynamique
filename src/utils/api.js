const ENDPOINT = 'https://www.externe.agenda-dynamique.com/externe';

/**
 * Récupère les evenements selon la recherche.
 * @constructor
 * @param {number} page - La page à rechercher.
 * @param {string} lieu - identifiant du lieu sur lequel filtrer.
 * @param {string} groupe - identifiant du groupe de lieu sur lequel filtrer.
 * @param {string} theme - identifiant du thème sur lequel filtrer.
 * @param {string} structure - identifiant de la structure dont on veut les évènements.
 * @param {string} date - format YYYY-MM-DD. date à partir de laquelle les événement sont récupérés.
 * @param {number} pageLength - La longeur d'une page (nombre d'évenements contenus dans une page).
 */

const getEvent = async ({
  page = 0,
  lieu,
  groupe,
  theme,
  structure,
  date,
  pageLength = 20,
}) => {
  let finalUrl = ENDPOINT + '/flux.php?type=0';
  if (page && page >= 0) {
    finalUrl += `&pg=${page}`;
  }
  if (lieu) {
    finalUrl += `&idl=${lieu}`;
  }
  if (groupe) {
    finalUrl += `&gl=${groupe}`;
  }
  if (theme) {
    finalUrl += `&idt=${theme}`;
  }
  if (structure) {
    finalUrl += `&ids=${structure}`;
  }
  if (pageLength && pageLength > 10 && pageLength < 100) {
    finalUrl += `&npp=${pageLength}`;
  }
  if (date) {
    finalUrl += `&date=${date}`;
  }
  try {
    const rawData = await fetch(finalUrl);
    const cleanData = await rawData.json();
    return cleanData;
  } catch (e) {
    throw 'Une erreur est survenue lors de la recuperation des données';
  }
};

const getOptions = async () => {
  try {
    const rawData = await fetch(ENDPOINT + '/optionjson.php');
    const cleanData = await rawData.json();
    return cleanData;
  } catch (e) {
    throw 'Une erreur est survenue lors de la recuperation des options';
  }
};

export default {getEvent, getOptions};
