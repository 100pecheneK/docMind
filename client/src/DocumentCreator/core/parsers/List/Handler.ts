import { Paragraph } from 'docx'
import { IHandler, TBlock } from '../../@types'

export type TListStyle = 'ordered' | 'unordered'
export type TListBlock = {
  style: TListStyle
  items: string[]
}

export class UL implements IHandler {
  block: TBlock<TListBlock>
  constructor(block: TBlock<TListBlock>) {
    this.block = block
  }
  get() {
    const paragraph = this.block.data.items.map(
      text =>
        new Paragraph({
          style: 'paragraph',
          numbering: {
            reference: 'underedList',
            custom: true,
            level: 0,
          },
          text,
        })
    )
    return paragraph
  }
}

export class OL implements IHandler {
  block: TBlock<TListBlock>
  constructor(block: TBlock<TListBlock>) {
    this.block = block
  }
  get() {
    const paragraph = this.block.data.items.map(
      text =>
        new Paragraph({
          style: 'paragraph',
          numbering: {
            reference: 'orderedList',
            custom: true,
            level: 0,
          },
          text,
        })
    )
    return paragraph
  }
}
