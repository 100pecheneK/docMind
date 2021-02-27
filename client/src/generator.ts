import { OutputData } from '@editorjs/editorjs'
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TabStopPosition,
  TabStopType,
  TextRun,
} from 'docx'
import TextParser from './DocumentCreator/core/TextParser'



export default class DocumentCreator {
  TextParser: typeof TextParser
  constructor() {
    this.TextParser = TextParser
  }
  create(data: OutputData): Document {
    const document = new Document()
    const textParser = new this.TextParser()
    const children = textParser.parseBlocks(data.blocks)
    document.addSection({
      children,
    })
    return document
  }
}
