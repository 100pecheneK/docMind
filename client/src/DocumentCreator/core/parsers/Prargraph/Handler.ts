import { AlignmentType, Paragraph } from 'docx'
import { IHandler, TBlock } from '../../@types'

type TParagraphBlock = {
  text: string
}

export class P implements IHandler {
  block: TBlock<TParagraphBlock>
  constructor(block: TBlock<TParagraphBlock>) {
    this.block = block
  }
  get() {
    const paragraph = new Paragraph({
      text: this.block.data.text,
      style: 'paragraph',
    })
    return paragraph
  }
}
