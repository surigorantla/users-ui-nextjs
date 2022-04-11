const fetcherFn =  (url) => fetch(url).then((res) => res.json())
export default fetcherFn;