import { HandlerType, ICondition, TBlock } from '../../@types'

export default class ParagraphCondition implements ICondition {
  handler: HandlerType
  payload?: TBlock
  constructor({ handler }: { handler: HandlerType }) {
    this.handler = handler
  }
  isTruthy(block: TBlock) {
    this.payload = block
    return this.handler
  }
}
