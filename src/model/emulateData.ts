export class Genre {
    #id: string
    #title: string

    getId = () : string => {
        return this.#id;
    }

    getTitle = () : string => {
        return this.#title;
    }

    constructor(id: string, title: string) {
        this.#id = id
        this.#title = title
    }
}

export class Joke {
    #id: string
    #header: string
    #text: string
    #genre: string

    getId = () : string => {
        return this.#id;
    }
    getHeader = () : string => {
        return this.#header;
    }
    getText = () : string => {
        return this.#text;
    }
    getGenre = () : string => {
        return this.#genre;
    }
    constructor(id: string, genre: string, text: string, header: string) {
        this.#id = id
        this.#text = text
        this.#header = header
        this.#genre = genre
    }
}

export class EmulateData {
    #genres: Genre[]
    #jokes: Joke[]

    getAllJokes = () => {
        return this.#jokes;
    }

    getAllGenres = () => {
        return this.#genres;
    }

    getJokesByGenre = (id: string) => {
        return this.getAllJokes().filter(j => j.getGenre() == id)
    }

    getGenre = (id: string) => {
        return this.#genres.find(g => g.getId() == id)
    }

    initShtirlic = () => {
        var genreShtirlic = this.addGenre("shtirlic", "Шутки про Штирлица");
        this.#jokes.push(new Joke(
            '0', 
            genreShtirlic, 
            'К Штирлицу летел свинец. Штирлиц свернул за угол. Свинец с хрюканьем промчался мимо.', 
            'Штирлиц и свинец'
        ));

        this.#jokes.push(new Joke(
            '1', 
            genreShtirlic, 
            'До Штирлица не дошло письмо из Центра. Он перечитал ещё раз, но все равно не дошло.', 
            'Штирлиц и письмо'
        ));

        this.#jokes.push(new Joke(
            '2', 
            genreShtirlic, 
            '— Холмс! Почему эти люди бегут перед нашей машиной? — Это же элементарно, Ватсон! Вы уже полчаса едете по тротуару.', 
            'Штирлиц и Холмс'
        ));
    }

    initProgers = () => {
        var genreProgers = this.addGenre("progers", "Шутки про Программистов");
        this.#jokes.push(new Joke(
            '0',
            genreProgers,
            'Программист звонит в библиотеку. — Здравствуйте, Катю можно? — Она в архиве. — Разархивируйте ее пожалуйста. Она мне срочно нужна!',
            'Катя'
        ));
        
        this.#jokes.push(new Joke(
            '1',
            genreProgers,
            '— Настоящий программист всегда должен ложиться спать или в 1:28 или в 2:56... Ну, на крайний случай, в 5:12. — А вставать в 10:24. Ну, на крайний случай, в 20:48.',
            'Режим'
        ));


    }

    init = () => {        
        this.initShtirlic();     
        this.initProgers();
    }

    addGenre = (id: string, title: string) => {
        var newGenre = new Genre(id, title);
        this.#genres.push(newGenre);
        return newGenre.getId();
    }

    hasGenre = (id: string) => {
        return (this.#genres.find(g => g.getId() == id));
    }

    addJoke = (id: string, genre: string, text: string, header: string) => {
        if (!this.hasGenre(genre)) {
            this.addGenre(genre, genre);
        }
        this.#jokes.push(new Joke(
            id, 
            genre, 
            text, 
            header
        ));
    }

    constructor() {
        this.#genres = []
        this.#jokes = []

        this.init();
    }
};
