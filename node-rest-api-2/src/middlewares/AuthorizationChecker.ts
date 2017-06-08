import { Action } from 'routing-controllers';

/**
 * Authorization checker sample.
 * @param action - request action
 */
export async function AuthorizationChecker(action: Action) {
  const token = action.request.headers['authorization'];
  return !!token;
}
