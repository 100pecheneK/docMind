import {
  AlignmentType,
  HeadingLevel,
  PageBreak,
  Paragraph,
  TextRun,
} from 'docx'
import { IHandler, TBlock } from '../../@types'

export type HeaderLevelType = 1 | 2
export type THeaderBlock = {
  level: HeaderLevelType
  text: string
}
export class H_1 implements IHandler {
  block: TBlock<THeaderBlock>
  constructor(block: TBlock<THeaderBlock>) {
    this.block = block
  }
  get() {
    const paragraph = new Paragraph({
      heading: HeadingLevel.HEADING_1,
      pageBreakBefore: true,
      text: this.block.data.text,
      children: [
        new TextRun({
          break: 2,
        }),
      ],
    })
    return paragraph
  }
}
export class H_2 implements IHandler {
  block: TBlock<THeaderBlock>
  constructor(block: TBlock<THeaderBlock>) {
    this.block = block
  }
  get() {
    const paragraph = new Paragraph({
      text: this.block.data.text,
      heading: HeadingLevel.HEADING_2,
    })
    return paragraph
  }
}
