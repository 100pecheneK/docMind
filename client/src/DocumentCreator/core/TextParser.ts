import { ISectionOptions } from 'docx'
import { TBlock } from './@types'
import BlocksRulesCollection from './BlocksRulesCollection'
import parsers from './parsers'
import { OrStrategy } from './Strategy'
import { Tag } from './Tag'
import { TagEditorRule } from './TagEditorRule'

const blocksRulesCollection = new BlocksRulesCollection([
  new TagEditorRule(
    new Tag('header'),
    new OrStrategy(parsers.header.Condition, [
      { level: 1, handler: parsers.header.handlers.H_1 },
      { level: 2, handler: parsers.header.handlers.H_2 },
    ])
  ),
  new TagEditorRule(
    new Tag('paragraph'),
    new OrStrategy(parsers.paragraph.Condition, [
      { handler: parsers.paragraph.handlers.P },
    ])
  ),
  new TagEditorRule(
    new Tag('list'),
    new OrStrategy(parsers.list.Condition, [
      { style: 'ordered', handler: parsers.list.handlers.OL },
      { style: 'unordered', handler: parsers.list.handlers.UL },
    ])
  ),
])

export default class TextParser {
  parseBlocks(blocks: TBlock[]) {
    return blocks
      .map(block => blocksRulesCollection.find(block))
      .reduce<ISectionOptions['children']>((result, conditionResult) => {
        if (!conditionResult) return result
        const paragraph = new conditionResult.handler(
          conditionResult.payload
        ).get()
        if (Array.isArray(paragraph)) {
          result.push(...paragraph)
        } else {
          result.push(paragraph)
        }
        return result
      }, [])
  }
}
