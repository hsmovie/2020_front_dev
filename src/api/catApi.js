/* eslint-disable no-useless-catch */
const API_ENDPOINT = 'https://api.thecatapi.com/v1';

const request = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return await response.json();
  } else {
    throw await response.json();
  }
};

export const searchCats = async (keyword) => {
  try {
    const breeds = await request(`${API_ENDPOINT}/breeds/search?q=${keyword}`);
    const requests = breeds.map(async (breed) => {
      return await request(
        `${API_ENDPOINT}/images/search?limit=20&breed_ids=${breed.id}`
      );
    });
    const responses = await Promise.all(requests);
    const result = Array.prototype.concat.apply([], responses);
    return {
      data: result,
      ok: true,
    };
  } catch (e) {
    return {
      data: e,
    };
  }
};

export const fetchRandomCats = async () => {
  try {
    const result = await request(`${API_ENDPOINT}/images/search?limit=20`);
    return {
      data: result,
      ok: true,
    };
  } catch (e) {
    return { data: e };
  }
};
