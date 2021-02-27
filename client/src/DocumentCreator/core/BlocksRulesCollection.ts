import { TBlock } from "./@types"
import { ITagEditorRule } from "./TagEditorRule"

export interface IBlocksRulesCollection {
  tags: ITagEditorRule[]
  find: (block: TBlock) => ReturnType<ITagEditorRule['isSuccess']>
}
export default class BlocksRulesCollection implements IBlocksRulesCollection {
  tags: ITagEditorRule[]
  constructor(tags: ITagEditorRule[]) {
    this.tags = tags
  }
  find(block: TBlock) {
    for (let i in this.tags) {
      const conditionResult = this.tags[i].isSuccess(block)
      if (conditionResult) {
        return conditionResult
      }
    }
    return false
  }
}
