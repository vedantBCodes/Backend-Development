// Middleware function to protect a specific route by providing this middleware funciton to a specific route

function protectRoute(req, res, next)
{
    let token = req.query.token;
    if(token === "pass123")
    {
        console.log("Access granted");
        next();
    }
    res.send("Access denied ! Incorrect token ");
}

module.exports = protectRoute ;