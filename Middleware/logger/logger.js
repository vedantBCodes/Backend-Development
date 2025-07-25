function logger(req, res , next)
{
   console.log(`Request path ${req.path} , Request method ${req.method}`);
   next();
}

module.exports = logger;