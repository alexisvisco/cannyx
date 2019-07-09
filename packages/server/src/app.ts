import Koa from 'koa'
import body from 'koa-body'
import cors from 'koa-cors'
import { ConnectionOptions, createConnection } from 'typeorm'
import * as Signale from 'signale'
import entities from './entities'

const databaseOptions: ConnectionOptions = {
	username: 'cannyx',
	password: 'cannyx',
	database: 'cannyx',
	host: 'localhost',
	port: 5432,
	entities: entities,
	type: 'postgres',
	synchronize: true,
	logging: false
}

const run = async () => {
	await createConnection(databaseOptions)
	const application = new Koa()

	application.use(cors({ methods: 'GET,HEAD,PUT,POST,PATCH,DELETE', credentials: true }))
	application.use(body({ multipart: true, json: true }))

	application.listen({ port: 8000 })
}

run()
	.then(() => Signale.info('Server start on port 8000'))
	.catch((err) => Signale.fatal(err))