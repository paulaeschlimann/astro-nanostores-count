import { atom } from 'nanostores'
import { persistentAtom } from '@nanostores/persistent'

//export const count = atom(0)

export const counterStore = persistentAtom('count', 0, {
  encode: JSON.stringify,
  decode: JSON.parse,
})