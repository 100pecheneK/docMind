import { OutputData } from '@editorjs/editorjs'
import {
  AlignmentType,
  convertInchesToTwip,
  convertMillimetersToTwip,
  Document,
  Footer,
  PageNumber,
  PageNumberFormat,
  Paragraph,
  StyleLevel,
  TableOfContents,
  TextRun,
} from 'docx'
import { ListFormat } from 'typescript'
import TextParser from './core/TextParser'

export default class DocumentCreator {
  TextParser: typeof TextParser
  constructor() {
    this.TextParser = TextParser
  }
  create(data: OutputData): Document {
    const document = new Document({
      creator: 'Mishas Docx Generator',
      title: 'From text generator',
      description: 'Generated with <3',
      styles: {
        default: {
          heading1: {
            run: {
              font: 'Times New Roman',
              size: 16 * 2,
              allCaps: true,
              bold: true,
            },
            paragraph: {
              alignment: AlignmentType.CENTER,
              spacing: {
                line: 240,
              },
            },
          },
          heading2: {
            run: {
              font: 'Times New Roman',
              size: 14 * 2,
              bold: true,
            },
            paragraph: {
              alignment: AlignmentType.LEFT,
              spacing: {
                line: 360,
              },
              indent: {
                firstLine: convertMillimetersToTwip(12.5),
              },
            },
          },
        },
        paragraphStyles: [
          {
            id: 'paragraph',
            name: 'paragraph',
            run: {
              font: 'Times New Roman',
              size: 14 * 2,
            },
            paragraph: {
              indent: {
                firstLine: convertMillimetersToTwip(12.5),
              },
              alignment: AlignmentType.JUSTIFIED,
              spacing: {
                line: 360,
              },
            },
          },
          {
            id: 'PageNumber',
            run: {
              size: 14 * 2,
            },
          },
        ],
      },
      numbering: {
        config: [
          {
            reference: 'underedList',
            levels: [
              {
                level: 0,
                alignment: AlignmentType.LEFT,
                text: '–',
                style: {
                  run: {
                    size: 14 * 2,
                  },
                  paragraph: {
                    alignment: AlignmentType.JUSTIFIED,
                    indent: {
                      firstLine: convertMillimetersToTwip(12.5),
                    },
                    spacing: {
                      line: 360,
                    },
                    leftTabStop: convertMillimetersToTwip(20),
                  },
                },
              },
            ],
          },
          {
            reference: 'orderedList',
            levels: [
              {
                level: 0,
                alignment: AlignmentType.LEFT,
                text: '%1.',
                style: {
                  run: {
                    size: 14 * 2,
                  },
                  paragraph: {
                    alignment: AlignmentType.JUSTIFIED,
                    indent: {
                      firstLine: convertMillimetersToTwip(12.5),
                    },
                    spacing: {
                      line: 360,
                    },
                    leftTabStop: convertMillimetersToTwip(20),
                  },
                },
              },
            ],
          },
        ],
      },
    })
    const textParser = new this.TextParser()
    const children = textParser.parseBlocks(data.blocks)
    document.addSection({
      children,
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.END,
              style: 'PageNumber',
              children: [
                new TextRun({
                  children: [PageNumber.CURRENT],
                }),
              ],
            }),
          ],
        }),
      },
      properties: {
        pageNumberStart: 2,
        pageNumberFormatType: PageNumberFormat.DECIMAL,
      },
    })
    return document
  }
}
