var Author = require('../model/author');

var tabAuthor = new Array();

class AuthorService{
    constructor(){
       
    }

    add(Author) {
        tabAuthor.push(Author);
        console.log(tabAuthor);
    }

    all() {
        console.log(tabAuthor);
        return tabAuthor;
    }

    getById(id)
    {
        var author = tabAuthor.find(author => author._id == id);
        return author;
    }

    getByFirstName(firstName)
    {
        var author = tabAuthor.find(author => author.first_name == firstName);
        return author;
    }

    update(authorUpdate)
    {
        for(var cpt in tabAuthor)
        {
            if(tabAuthor[cpt]._id == authorUpdate._id)
            {
                tabAuthor[cpt].first_name = authorUpdate.first_name;
                tabAuthor[cpt].last_name = authorUpdate.last_name;
                tabAuthor[cpt].email = authorUpdate.email;
                break;
            }
        }
    }

    delete(id)
    {
        for( var cpt in tabAuthor)
        {
            if(tabAuthor[cpt]._id == id)
            {
                tabAuthor.splice(cpt, 1);
            }
        }
    }
}

module.exports = AuthorService;