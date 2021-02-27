// import { OutputData } from '@editorjs/editorjs'
// export type TBlock = OutputData['blocks']

import { ISectionOptions } from 'docx'

export type TBlock<T = Object> = {
  type: string
  data: T
}
export interface IHandler {
  block: TBlock
  get: () => any
}
export type HandlerType = { new (...args: any[]): IHandler }
export interface ICondition<T = Object> {
  handler: HandlerType
  payload?: TBlock
  isTruthy: (block: TBlock<T>) => false | HandlerType
}
