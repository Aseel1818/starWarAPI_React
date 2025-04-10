const StarWarsService =  {
    async getPeople(){
        const reponse = await fetch("https://swapi.dev/api/people/");
        return reponse.json();
    }
}

export default StarWarsService;