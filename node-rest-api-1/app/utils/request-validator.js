import Ajv from 'ajv';
import Boom from 'boom';

export default function(schema) {
  return function(target, key, descriptor) {
    if (!schema) return descriptor;

    const ajv = new Ajv();

    descriptor.value = new Proxy(target[key], {
      apply: async function(method, self, [ctx, next, ...args]) {
        const valid = ajv.validate(schema, ctx.request.body);
        if (valid) return method.call(self, ctx, next, ...args);
        throw Boom.badRequest('Validation error.', ajv.errors);
      },
    });

    return descriptor;
  };
}
