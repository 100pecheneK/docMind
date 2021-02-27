import { API, OutputData } from '@editorjs/editorjs'
import { Packer } from 'docx'
import { saveAs } from 'file-saver'
import React, { useEffect, useState } from 'react'
import EditorJs from 'react-editor-js'
import { EDITOR_JS_TOOLS } from './constants'
import DocumentCreator from './DocumentCreator'

//! Это для получения текста внутри тега (?<=>)([\w\sа-яёА-ЯЁ]*)(?=<\/)
export default function App() {
  const [editorData, setEditorData] = useState<OutputData>({
    time: 1613567257488,
    blocks: [
      {
        type: 'header',
        data: {
          text: 'Заголовки',
          level: 1,
        },
      },
      {
        type: 'header',
        data: {
          text: 'Заголовок 2',
          level: 2,
        },
      },
      {
        type: 'header',
        data: {
          text: 'Заголовок 3',
          level: 3,
        },
      },
      {
        type: 'header',
        data: {
          text: 'Заголовок 4',
          level: 4,
        },
      },
      {
        type: 'header',
        data: {
          text: 'Заголовок 5',
          level: 5,
        },
      },
      {
        type: 'header',
        data: {
          text: 'Параграфы',
          level: 2,
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст..&nbsp;',
        },
      },
      {
        type: 'paragraph',
        data: {
          text:
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, кото',
        },
      },
      {
        type: 'header',
        data: {
          text: 'Списки',
          level: 1,
        },
      },
      {
        type: 'list',
        data: {
          style: 'ordered',
          items: [
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, кото',
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, кото',
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, кото',
            '123',
            '123456',
            '123456789',
          ],
        },
      },
      {
        type: 'list',
        data: {
          style: 'unordered',
          items: [
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, кото',
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, кото',
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, кото',
          ],
        },
      },
      {
        type: 'list',
        data: {
          style: 'unordered',
          items: ['А что если список', 'Будет&nbsp;', 'с тирешкой', 'а?'],
        },
      },
      {
        type: 'header',
        data: {
          text: 'Таблицы',
          level: 1,
        },
      },
      {
        type: 'table',
        data: {
          content: [
            [
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">123фыва</div></div>',
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">Верх 1&nbsp;</div></div>',
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">Верх 2</div></div>',
            ],
            [
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">213ыфва</div></div>',
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">1</div></div>',
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">2</div></div>',
            ],
            [
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">123фыва</div></div>',
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">1</div></div>',
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">2</div></div>',
            ],
            [
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">123фаыва</div></div>',
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">12</div></div>',
              '<div class="tc-table__area"><div class="tc-table__inp" contenteditable="true">312</div></div>',
            ],
          ],
        },
      },
    ],
    version: '2.15.1',
  })
  function generate() {
    const documentCreator = new DocumentCreator()
    const document = documentCreator.create(editorData)
    Packer.toBlob(document).then(blob => {
      saveAs(blob, 'example.docx')
      console.log('Document created successfully')
    })
  }

  function onEditorChange(...args: any[]) {
    const data: OutputData = args[1]
    setEditorData(prev => ({ ...prev, ...data }))
  }
  return (
    <div className='App'>
      <button onClick={generate}>Generate</button>

      <EditorJs
        onChange={onEditorChange}
        tools={EDITOR_JS_TOOLS}
        data={editorData}
      />
      <hr />
      <pre>{JSON.stringify(editorData, null, 4)}</pre>
    </div>
  )
}
