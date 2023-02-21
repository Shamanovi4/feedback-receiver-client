import React, { createRef, FormEvent, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { createFeedback } from '../../store/actions'
import { Input } from '../UI/Input/Input'
import { TextArea } from '../UI/TextArea/TextArea'
import classes from './FeedbackForm.module.scss'

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function validate(value: string, valueToChange: string) {
  let isValid = true

  if (value.trim() === '') isValid = false
  if (valueToChange === 'email') isValid = validateEmail(value)

  return isValid
}

const initialState = {
  name: { value: '', isValid: false, isTouched: false },
  email: { value: '', isValid: false, isTouched: false },
  message: { value: '', isValid: false, isTouched: false },
}

export const FeedbackForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const nameRef = createRef<HTMLInputElement>()
  const emailRef = createRef<HTMLInputElement>()
  const messageRef = createRef<HTMLTextAreaElement>()
  const [formState, setFormState] = useState(initialState)
  const dispatch = useDispatch()

  const handleChange = (value: string, valueToChange: string) => {
    setFormState({
      ...formState,
      [valueToChange]: {
        value,
        isValid: validate(value, valueToChange),
        isTouched: true,
      },
    })
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (
      nameRef.current?.value &&
      nameRef.current?.value.trim() !== '' &&
      emailRef.current?.value &&
      validateEmail(emailRef.current?.value) &&
      messageRef.current?.value &&
      messageRef.current?.value.trim() !== ''
    ) {
      dispatch(
        createFeedback(
          nameRef.current?.value,
          emailRef.current?.value,
          messageRef.current?.value
        )
      )
      setFormState(initialState)
      formRef.current?.reset()
    }
  }

  return (
    <div className={classes.feedback}>
      <div className={classes.feedbackWrapper}>
        <form
          className={classes.feedbackForm}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <p className={classes.feedbackFormHeading}>Reach out to us!</p>
          <div className={classes.feedbackFormGroup}>
            <Input
              ref={nameRef}
              name='name'
              placeholder='Your name*'
              notValid={
                formState.name.isValid === false &&
                formState.name.isTouched === true
              }
              onChange={(event) => handleChange(event.target.value, 'name')}
            />
            <Input
              ref={emailRef}
              name='email'
              placeholder='Your e-mail*'
              notValid={
                formState.email.isValid === false &&
                formState.email.isTouched === true
              }
              onChange={(event) => handleChange(event.target.value, 'email')}
            />
          </div>
          <div className={classes.feedbackFormInputWrapper}>
            <TextArea
              ref={messageRef}
              name='message'
              placeholder='Your message*'
              notValid={
                formState.message.isValid === false &&
                formState.message.isTouched === true
              }
              onChange={(event) => handleChange(event.target.value, 'message')}
            />
          </div>
          <button className={classes.feedbackFormButton}>Send message</button>
        </form>
      </div>
    </div>
  )
}
