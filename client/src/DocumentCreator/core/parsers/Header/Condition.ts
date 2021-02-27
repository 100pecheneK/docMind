import { HandlerType, ICondition, TBlock } from '../../@types'
import { HeaderLevelType, THeaderBlock } from './Handler'

export interface IHeaderCondition extends ICondition<THeaderBlock> {
  level: HeaderLevelType
}

export default class HeaderCondition implements IHeaderCondition {
  level: HeaderLevelType
  handler: HandlerType
  payload?: TBlock
  constructor({
    level,
    handler,
  }: {
    level: HeaderLevelType
    handler: HandlerType
  }) {
    this.level = level
    this.handler = handler
  }
  isTruthy(block: TBlock<THeaderBlock>) {
    if (block.data.level === this.level) {
      this.payload = block
      return this.handler
    }
    return false
  }
}
