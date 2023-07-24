
const getGifts = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=tNR0yc3HWcpC8Mb9s6u3SKPJTO7GyGwo&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
   
    const gifs = data.map( img => ({
        id : img.id,
        title: img.title,
        ulr : img.images.downsized_medium.url,
    }));
    //  console.log({gifs});
   return gifs;
}

export default getGifts;