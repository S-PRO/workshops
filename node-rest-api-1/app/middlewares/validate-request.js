import Ajv from 'ajv';
import Boom from 'boom';

export default schema => {
  const ajv = new Ajv();

  return async (ctx, next) => {
    const valid = ajv.validate(schema, ctx.request.body);
    if (!valid) throw Boom.badRequest('Validation error.', ajv.errors);
    await next();
  }
}