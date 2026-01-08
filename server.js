const jsonServer = require('json-server')
const cors = require('cors')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Enable CORS for all origins (your Vercel frontend)
server.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

server.use(middlewares)

// Custom routes for additional functionality
server.use(jsonServer.bodyParser)

// Log all requests
server.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

server.use(router)

const PORT = process.env.PORT || 3001
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`)
  console.log(`Endpoints:`)
  console.log(`  GET/POST   /listings`)
  console.log(`  GET/PUT/DELETE /listings/:id`)
  console.log(`  GET/POST   /studiochain_listings`)
  console.log(`  GET/PUT/DELETE /studiochain_listings/:id`)
})
