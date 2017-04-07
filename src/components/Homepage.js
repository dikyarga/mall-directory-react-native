import React from 'react'
import {
  View,
  Image,
  Navigator,
  TouchableHighlight,
} from 'react-native';
import { Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Text } from 'native-base';

class Homepage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      malls: [
        {
          name: 'Gandaria City',
          description: 'Mall Gandaria City adalah mall 7 Lantai yang berada di daerah Kebayoran Lama Utara, Kebayoran Lama, Jakarta Selatan, yang dioperasikan oleh Pakuwon Jati',
          count: {
            fashion: 99,
            food: 88
          }
        },
        {
          name: 'Plaza Indonesia',
          description: 'Plaza Indonesia adalah mall 7 Lantai yang berada di daerah Kebayoran Lama Utara, Kebayoran Lama, Jakarta Selatan, yang dioperasikan oleh Pakuwon Jati',
          count: {
            fashion: 77,
            food: 66
          }
        },
        {
          name: 'AEON Mall',
          description: 'Aeon Mall adalah mall 7 Lantai yang berada di daerah Kebayoran Lama Utara, Kebayoran Lama, Jakarta Selatan, yang dioperasikan oleh Pakuwon Jati',
          count: {
            fashion: 109,
            food: 121
          }
        }
      ]
    }
  }

  render() {
    return (
      <Container>
               <Header>
                   <Left>
                       <Button transparent>
                           <Icon name='menu' />
                       </Button>
                   </Left>
                   <Body>
                       <Title>Matory</Title>
                   </Body>
                   <Right />
               </Header>
               <Content>
                 {
                   this.state.malls.map((mall, index) => {
                     console.log('terima navigator : ', this.props.navigator);
                     return (

                         <Card
                           key={index}
                           style={{ padding: 10}}>
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>{ mall.name }</Text>
                                            <Text note>Jakarta Selatan</Text>
                                        </Body>
                                    </Left>
                                  </CardItem>
                                  <CardItem cardBody>
                                      <Image
                                        style={{width: '100%', height: 200}}
                                        source={{uri: 'https://unsplash.it/400/200?image=1048'}}/>
                                  </CardItem>
                                  <CardItem content>
                                      <Text>{ mall.description }</Text>
                                  </CardItem>


                                      <Button
                                        onPress={() => this.props.navigator.push({id: 'mall'})}
                                        transparent>
                                          <Icon active name="md-basket" />
                                          <Text>{ mall.count.fashion } Fashion Store</Text>
                                      </Button>

                                      <Button transparent>
                                          <Icon active name="md-wine" />
                                          <Text>{ mall.count.food } Food & Drink Restourant</Text>
                                      </Button>
                           </Card>

                     )
                   })
                 }

               </Content>
           </Container>
    )
  }
}

export default Homepage
