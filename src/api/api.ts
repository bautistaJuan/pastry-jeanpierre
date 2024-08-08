const MY_ENVIROMENTS = import.meta.env.VITE_CONTENFUL_ENVIRONMENT_ID;
const MY_TOKEN = import.meta.env.VITE_CONTENTFUL_TOKEN;
const MY_SPACE = import.meta.env.VITE_CONTENTFUL_SPACE_ID;

const URL = `https://cdn.contentful.com/spaces/${MY_SPACE}/environments/${MY_ENVIROMENTS}/entries?access_token=${MY_TOKEN}`;

export function contenfulAPISec1() {
  const fetchAPI = fetch(URL)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);

      return data;
    });
  return fetchAPI;
}
