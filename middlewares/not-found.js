const notFound = (req,res)=> res.status(404).send('Oops!!! route does not exist');


module.exports = notFound;