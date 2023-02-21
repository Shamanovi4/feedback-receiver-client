import React, { forwardRef } from 'react'
import classes from './Input.module.scss'

interface Props {
  name: string
  notValid: boolean
  placeholder: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = forwardRef(
  (props: Props, ref: React.Ref<HTMLInputElement>) => {
    const inputWrapperClasses = [
      classes.inputWrapper,
      props.notValid ? classes.notValid : '',
    ]

    return (
      <div className={inputWrapperClasses.join(' ')}>
        <input
          ref={ref}
          className={classes.input}
          type='text'
          placeholder={props.placeholder}
          name={props.name}
          onChange={props.onChange}
        />
      </div>
    )
  }
)
