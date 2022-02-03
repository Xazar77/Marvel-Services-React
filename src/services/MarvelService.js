


class MarvelService {
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=2b41a4868fc7f6cacdf31c2bd6d5e245'
    _baseOffset = 210
    getResoursce = async (url) => {
        let res = await fetch(url)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status ${res.status}`)
            
        }
        return await res.json()
    }

    getAllCharacters = async(offset = this._baseOffset) => {
        const res = await this.getResoursce(`${this._apiBase}characters?limit=9&offset=${offset}&${this._apiKey}`)
        return res.data.results.map(this._transformCharacter)
    
    }

    getCharacter = async (id) => {
        const res = await this.getResoursce(`${this._apiBase}characters/${id}?${this._apiKey}`)
        // return this._transformCharacter(res)  //  1 Вариант
        return this._transformCharacter(res.data.results[0])  // 2 ВАРИАНТ
    }

    // _transformCharacter = (res) => {    //  1 Вариант
    _transformCharacter = (char) => {     // 2 ВАРИАНТ
        return {
            // name: res.data.results[0].name,                           //  1 Вариант
            // description: res.data.results[0].description,
            // thumbnail:  res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
            // homepage:  res.data.results[0].urls[0].url,
            // wiki: res.data.results[0].urls[1].url

            id: char.id,
            name: char.name,                            // 2 ВАРИАНТ
            description: char.description,
            thumbnail:  char.thumbnail.path + '.' + char.thumbnail.extension,
            homepage:  char.urls[0].url,
            wiki: char.urls[1].url,
            comics: char.comics.items

        }
    }
}
export default MarvelService