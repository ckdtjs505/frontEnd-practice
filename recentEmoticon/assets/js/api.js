let access_key = `b44e8c37cf2639a8c1382bad72b6ab8ef837ea75`;

const Url = "https://emoji-api.com/categories/";

export function getEmoticonsData(list) {
    return fetch(`${Url}${list}?access_key=${access_key}`)
    .then(response => response.json());
}
