import React, { useEffect, useRef, useState } from "react"
import { Form, Stack } from "react-bootstrap"
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  UseFormStateReturn,
} from "react-hook-form"
import "./textEditor.scss"
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

interface InputTextEditorProps {
  control?: any
  name?: string
  placeholder?: any
  label?: any
  defaultValue?: any
  rules?: any
  disabled?: boolean
  errorMessage?: any
  inputProps?: any
  onChangeValue?: (value: any) => void
  onBlurInput?: (value: any) => void
  required?: boolean
}

const API_URL = "https://77em4-8080.sse.codesandbox.io";
const UPLOAD_ENDPOINT = "upload_files";

const InputTextEditor: React.FC<InputTextEditorProps> = ({
  control,
  name,
  placeholder,
  label,
  defaultValue = "",
  rules,
  disabled,
  errorMessage,
  onChangeValue,
  onBlurInput,
  required,
}) => {
  const valueRef = useRef(null)
  const [hasError, setHasError] = useState<boolean>(false)
  const [quillValue, setQuillValue] = useState("")

  useEffect(() => {
    if (errorMessage && errorMessage !== "") {
      setHasError(true)
    } else {
      setHasError(false)
    }
  }, [errorMessage])

  const toolbarOptions = [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "uploadImage",
    'blockQuote',
    'insertTable',
    'mediaEmbed',
    'undo',
    'redo',
  ]

  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append("files", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            // fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
            //   method: "post",
            //   body: body
            //   // mode: "no-cors"
            // })
            //   .then((res) => res.json())
            //   .then((res) => {
            //     resolve({
            //       default: `${API_URL}/${res.filename}`
            //     });
            //   })
            //   .catch((err) => {
            //     reject(err);
            //   });
          });
        });
      }
    };
  }
  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  const renderComponent = (params: {
    field: ControllerRenderProps<any, any>
    fieldState: ControllerFieldState
    formState: UseFormStateReturn<any>
  }) => {
    const { onChange, onBlur, value, name } = params?.field
    if (value !== valueRef.current) {
      valueRef.current = value
    }
    

    return (
      <Stack>
        <Form.Label>
          {label}
          {required && <span className='text-danger'> *</span>}
        </Form.Label>
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: toolbarOptions,
            extraPlugins: [uploadPlugin]
          }}
          onChange={(event, editor) => {
            const data = editor.getData()
            onChange(data)
            onChangeValue && onChangeValue(data)
          }}
          onBlur={(event, editor) => {
            const data = editor.getData()
            onBlurInput && onBlurInput(data)
          }}
        />
        {hasError && (
          <Form.Control.Feedback type='invalid'>
            {errorMessage}
          </Form.Control.Feedback>
        )}
      </Stack>
    )
  }

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={renderComponent}
      rules={rules}
    />
  )
}

export default InputTextEditor
