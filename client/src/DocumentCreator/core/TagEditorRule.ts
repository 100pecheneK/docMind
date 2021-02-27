import { TBlock } from "./@types"
import { IStategy } from "./Strategy"
import { ITag } from "./Tag"

export interface ITagEditorRule {
  tag: ITag
  strategy: IStategy
  isSuccess: (block: TBlock) => ReturnType<IStategy['isTruthy']>
}
export class TagEditorRule implements ITagEditorRule {
  tag: ITag
  strategy: IStategy
  constructor(tag: ITag, srtategy: IStategy) {
    this.tag = tag
    this.strategy = srtategy
  }
  isSuccess(block: TBlock) {
    if (block.type !== this.tag.value) {
      return false
    }
    return this.strategy.isTruthy(block)
  }
}
