import { RiBold, RiDoubleQuotesL, RiH1, RiH2, RiItalic } from '@remixicon/react'
import Blockquote from '@tiptap/extension-blockquote'
import Highlight from '@tiptap/extension-highlight'
import Placeholder from '@tiptap/extension-placeholder'
import Typography from '@tiptap/extension-typography'
import { BubbleMenu, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'

function Tiptap() {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Typography,
      Blockquote,
      Placeholder.configure({
        placeholder: 'Tell your story...',
        emptyEditorClass: 'is-editor-empty',
        emptyNodeClass: 'is-empty'
      })
    ],
    content: '<h1></h1>',
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      }
    }
  })

  return (
    <>
      {editor && <BubbleMenu className="bubble-menu bg-black rounded-md pt-[2px] text-white" tippyOptions={{ duration: 100 }} editor={editor}>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active text-green-200' : ''}
        >
          <RiBold size={20} />
        </button>
        <span className='seperator'></span>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'is-active text-green-200' : ''}
        >
          <RiItalic size={20} />
        </button>
        <span className='seperator'></span>
        <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'is-active text-green-200' : ''}>
          <RiH2 size={20} />
        </button>
        <span className='seperator'></span>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'is-active' : ''}
        >
          <RiDoubleQuotesL size={20} />
        </button>
      </BubbleMenu >}

      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap
