import React from 'react'
import { Text } from 'native-base'
import { StyleSheet, View } from 'react-native'

interface Props {
  value: number
}

export default class Result extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render(): JSX.Element {
    return (
      <View>
        <Text style={styles.text}>{this.props.value}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center'
  }
})
