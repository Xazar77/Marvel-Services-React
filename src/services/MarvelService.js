


class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=2b41a4868fc7f6cacdf31c2bd6d5e245'
    getResoursce = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
            
        }
        return await res.json()
    }

    getAllCharacters = () => {
        return this.getResoursce(`${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`)
    }

    getCharacter = (id) => {
        return this.getResoursce(`${this._apiBase}characters/${id}?${this._apiKey}`)
    }
}
export default MarvelService