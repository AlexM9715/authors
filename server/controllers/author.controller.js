const {Author} = require("./../models/author.model")

//Get All
module.exports.allAuthors = (req, res) => {
    Author.find()
        .then(authors => res.json(authors))
        .catch(err => res.status(400).json(err))
}

//Get One
module.exports.oneAuthor = (req, res) => {
    Author.findOne({_id : req.params.id})
    .then(author => res.json(author))
    .catch(err => res.status(400).json(err))
}

//Create
module.exports.createAuthor = (req, res) => {
    Author.create(req.body) //info to create object inside()
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(400).json(err))
}

//Update
module.exports.updateAuthor = (req, res) => {
    Author.findByIdAndUpdate(
        {_id : req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

//Delete
module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id : req.params.id})
        .then(response => res.json(response))
        .catch(err => res.status(400).json(err))
}