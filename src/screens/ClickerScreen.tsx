import { Clicker, AppHeader } from '../components'
import { Content, Container } from 'native-base'
import { CounterState } from '../store/reducers/states'
import Action from '../store/actions/interfaces/Action'
import * as Actions from '../store/actions'
import React, { Dispatch } from 'react'
import { connect } from 'react-redux'

interface PropsConnectedState {
  value: number
}
interface PropsConnectedDispatcher {
  handlePressIncrement: () => void
  handlePressDecrement: () => void
}

interface Props extends PropsConnectedState, PropsConnectedDispatcher {
  navigation: { navigate: (screen: string) => void }
}

class ClickerScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  onShowResultPress = () => {
    this.props.navigation.navigate('ResultScreen')
  }

  render(): JSX.Element {
    return (
      <Container>
        <AppHeader headerText={'click'} />
        <Content padder>
          <Clicker
            showResult={this.onShowResultPress}
            handlePressIncrement={this.props.handlePressIncrement}
            handlePressDecrement={this.props.handlePressDecrement}
          />
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = ({ counter }: { counter: CounterState }): PropsConnectedState => {
  return {
    value: counter.value
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Action<any>>): PropsConnectedDispatcher => {
  return {
    handlePressIncrement: () => {
      return dispatch(Actions.increment())
    },
    handlePressDecrement: () => {
      return dispatch(Actions.decrement())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClickerScreen as React.ComponentClass<Props>)
