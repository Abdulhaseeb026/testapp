import * as React from 'react'
import { Button as PaperButton } from 'react-native-paper'

export type ButtonProps = React.ComponentProps<typeof PaperButton>

const Button = (props: ButtonProps) => {
  const { children, onPress, icon } = props

  return (
    <PaperButton {...props} icon={icon} mode="contained" onPress={onPress}>
      {children}
    </PaperButton>
  )
}

export default Button
