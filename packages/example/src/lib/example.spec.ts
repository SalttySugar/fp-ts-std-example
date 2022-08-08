import {unsafeUnwrap} from "fp-ts-std/TaskEither";
import { flow } from "fp-ts/lib/function";
import { example } from './example';

describe('example', () => {
  it('should work', () => {
    expect(
      flow(
        example,
        unsafeUnwrap,
      )
    ).not.toThrow();
  });
});
