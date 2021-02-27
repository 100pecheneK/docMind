import { HandlerType, ICondition, TBlock } from '../../@types'
import { TListBlock, TListStyle } from './Handler'

export interface IListCondition extends ICondition<TListBlock> {
  style: TListStyle
}

export default class ListCondition implements IListCondition {
  handler: HandlerType
  payload?: TBlock
  style: TListStyle
  constructor({ handler, style }: { handler: HandlerType; style: TListStyle }) {
    this.handler = handler
    this.style = style
  }
  isTruthy(block: TBlock<TListBlock>) {
    if (block.data.style === this.style) {
      this.payload = block
      return this.handler
    }
    return false
  }
}
