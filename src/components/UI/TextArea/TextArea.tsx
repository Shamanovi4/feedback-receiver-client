import React, { forwardRef } from 'react'
import classes from './TextArea.module.scss'

interface Props {
  name: string
  notValid: boolean
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
}

export const TextArea = forwardRef(
  (props: Props, ref: React.Ref<HTMLTextAreaElement>) => {
    const textAreaWrapperClasses = [
      classes.textAreaWrapper,
      props.notValid ? classes.notValid : '',
    ]

    return (
      <div className={textAreaWrapperClasses.join(' ')}>
        <textarea
          ref={ref}
          className={classes.textArea}
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
        />
      </div>
    )
  }
)
