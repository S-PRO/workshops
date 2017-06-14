import { Middleware, KoaMiddlewareInterface } from 'routing-controllers';

@Middleware({ type: 'before' })
export class CustomErrorHandler implements KoaMiddlewareInterface {

  async use(context: any, next: (err?: any) => Promise<any>) {
    try {
      await next();
    } catch (e) {
      console.log('Catched an error:', e);
      let payload = e;
      if (e.isBoom) {
        payload = e.output.payload;
        payload.data = e.data;
      }
      context.status = payload.statusCode || payload.status || 500;
      context.body = payload;
    }
  }
}
