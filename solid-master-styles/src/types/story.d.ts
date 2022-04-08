import type {
  Args as DefaultArgs,
  Annotations,
  BaseStory,
} from '@storybook/addons'

type HTMLReturnType = any

export type Story<Args = DefaultArgs> =
  BaseStory<Args, HTMLReturnType> &
  Annotations<Args, HTMLReturnType>
