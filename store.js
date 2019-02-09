


module.exports = class store{

    constructor(){

        this.data = [];
        var starWars1 = {"id":"1","name" : "A New Hope"}
        var starWars2 = {"id":"2","name" : "Empire Strikes Back"}
        var starWars3 = {"id":"3","name" : "Return of the Jedi"}

        this.data.push(starWars1);
        this.data.push(starWars2);
        this.data.push(starWars3);

    }

    save(film){
        if (this.retrieve(film.id)){
            this.update(film.id,film);
        }else{
            this.data.push(film);
        }
        
    }

    indexOfFilm(film){
        var index = this.data.findIndex(function(storedFilm){
            return storedFilm.id === film.id;
        })
        return index;  
    }

    indexOf(id){
        var index = this.data.findIndex(function(storedFilm){
            return storedFilm.id === id;
        })
        return index;  
    }

    retrieve(id){
        var film = this.data.find(function(storedFilm){
            return storedFilm.id === id;
        })
        return film;
    }

    update(id, film){
        var index = this.indexOf(id);
        this.data[index] = film;
    }

    remove(id){

        var film = this.retrieve(id);
        if (film){
            this.data.splice(this.data.indexOf(film),1);
            return true;
        }else{
            return false;
        }
        

       
    }

    getAll(){
        return this.data;
    }
}