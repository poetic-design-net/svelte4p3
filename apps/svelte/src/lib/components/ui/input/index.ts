export type FormInputEvent<T extends Event = Event> = {
  currentTarget: EventTarget & HTMLInputElement
} & T
export type InputEvents = {
  blur: FormInputEvent<FocusEvent>
  change: FormInputEvent
  click: FormInputEvent<MouseEvent>
  focus: FormInputEvent<FocusEvent>
  focusin: FormInputEvent<FocusEvent>
  focusout: FormInputEvent<FocusEvent>
  input: FormInputEvent<InputEvent>
  keydown: FormInputEvent<KeyboardEvent>
  keypress: FormInputEvent<KeyboardEvent>
  keyup: FormInputEvent<KeyboardEvent>
  mouseenter: FormInputEvent<MouseEvent>
  mouseleave: FormInputEvent<MouseEvent>
  mousemove: FormInputEvent<MouseEvent>
  mouseover: FormInputEvent<MouseEvent>
  paste: FormInputEvent<ClipboardEvent>
  wheel: FormInputEvent<WheelEvent>
}

export { default as Root, default as Input } from './input.svelte'
