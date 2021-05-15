export const allCountires = async () => {
  try {
    const listJSON = await fetch('https://restcountries.eu/rest/v2/all');
    const resCountires = await listJSON.json();
    return resCountires;
  } catch (error) {
    console.log('error in API to show all countries list ===>' + error);
  }
};

export const allCountiresByName = async (name) => {
  try {
    const listJSON = await fetch(
      `https://restcountries.eu/rest/v2/name/${name}`
    );
    const resCountires = await listJSON.json();
    return resCountires;
  } catch (error) {
    console.log('error in API to show list countries by Name ===>' + error);
  }
};
