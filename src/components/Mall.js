import React from 'react'
import { Container, Header, Left, Right, Body, Button, Title, Icon, Content, ListItem, Text, CheckBox } from 'native-base';

class Mall extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <Container>
        <Header>
            <Left>
                <Button
                  onPress={() => this.props.navigator.pop()}
                  transparent>
                    <Icon name='arrow-back' />
                </Button>
            </Left>
            <Body>
                <Title>Mall Detail</Title>
            </Body>
            <Right>
                <Button transparent>
                    <Icon name='menu' />
                </Button>
            </Right>
        </Header>
    </Container>
    )
  }
}

export default Mall
