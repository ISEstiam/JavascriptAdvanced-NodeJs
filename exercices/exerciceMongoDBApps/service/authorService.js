var Author = require('../model/author');

//var tabAuthor = new Array();

class AuthorService{
    constructor(req, res){
        this.req = req;
        this.res = res;
     }

    add(newAuthor) {
        newAuthor.save((err) => {
            if(err) this.res.send(err);
            else this.res.send("Auteur ajouté");
        });
    }

    all() {
        Author.find((err, authors) =>{
            if(err) res.send(err);
            else
            {
                res.json(authors);
                console.log(authors.length)
            } 
        });
    }

    getById(id)
    {
        Author.findById(id, (err, author) => {
            if(err) res.send(err);
            else return author;
        });
    }

    getByFirstName(firstName)
    {
        Author.findOne({first_name: firstName}, (err, author) => {
            if(err) res.send(err);
            else return author;
        });
    }

    update(id, authorUpdate)
    {
        Author.findById(id, (err, author) => {
            if(err) res.send(err)
            else{
                author.first_name = authorUpdate.first_name;
                author.last_name = authorUpdate.last_name;
                author.email = authorUpdate.email;
                
                author.save((err) => {
                    if (err) res.send(err);
                    else res.send("Mise à jour OK");
                });
            }
        });

        authorUpdate.save((err) => {
            if (err) res.send(err);
            else res.send("Mise à jour OK");
        });
    }

    delete(id)
    {
        Author.remove({_id:id}, (err) => {
            if (err) res.send(err);
            else res.send("Auteur supprimé OK");
        });
    }
}

module.exports = AuthorService;