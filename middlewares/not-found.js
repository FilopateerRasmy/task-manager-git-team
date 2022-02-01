const notFound = (req,res)=> res.status(404).send('Oops!!! route does not exist');
console.log(notFound);

module.exports = notFound;