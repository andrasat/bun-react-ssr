import * as React from 'react'
import { renderToReadableStream } from 'react-dom/server'
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from 'react-router-dom/server'
import routes from '@utils/routes'

Bun.serve({
  hostname: '127.0.0.1',
  port: 8081,
  async fetch(req: Request) {
    const { query, dataRoutes } = createStaticHandler(routes)

    const context = await query(req)

    if (context instanceof Response) return context

    const router = createStaticRouter(dataRoutes, context)
    const stream = await renderToReadableStream(
      <React.StrictMode>
        <StaticRouterProvider router={router} context={context} />
      </React.StrictMode>
    )
    return new Response(stream, {
      headers: { 'Content-Type': 'text/html' },
    })
  },
})

process.stdout.write('Your App running at http://localhost:8081\n')
