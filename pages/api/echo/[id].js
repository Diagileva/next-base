export default function getById(req,res) {
//    res.statusCode = 200
//    res.setHeader('Content-type', 'application/json')
//    res.end(req.query.id)
    res.json({yourId: req.query.id})
}

//http://localhost:3000/api/echo/42