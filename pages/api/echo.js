export default function echo(req,res) {
    res.statusCode = 200
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify({
        message: req.query.message ?? 'Base Message'
    }))
}

//http://localhost:3000/api/echo?message=hello