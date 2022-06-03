import logicalId from './logicalId';

const ref = <R extends Record<string, unknown>>(
  resource: R,
): { Ref: keyof R } => ({
  Ref: logicalId(resource),
});

export default ref;
