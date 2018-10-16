import React, { Component } from 'react'
import {
  Content,
  Input,
  Text,
  Button,
  Container,
  View,
  Grid,
  Col,
  Icon
} from 'native-base'

import styled from 'styled-components/native'

import Item from '../../components/Item'
import Header from '../../components/Header'

class SignupSelectSkill extends Component {
  state = {
    data: ['React Native', 'React', 'Angular', 'Node JS', 'Graphql']
  }

  renderItems() {
    return this.state.data.map((item, index) => (
      <Wrapper key={index}>
        <View
          flexDirection={'row'}
          alignItems={'center'}
          justifyContent={'space-between'}>
          <Text>{item}</Text>
          <Button danger bordered small>
            <Icon name={'close'} />
          </Button>
        </View>
      </Wrapper>
    ))
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Kemampuan Anda'} />

        <View padding={15}>
          <View marginBottom={15}>
            <Text>Pilih Kemampuan Yang Anda Kuasai</Text>
            <Text note>
              Masukkan kemampuan yang anda kuasai sehingga pengguna lain dapat
              belajar kepada anda, lewati jika anda tidak ingin menjadi mentor
            </Text>
          </View>

          <Item regular>
            <Input placeholder="Masukkan kemampuan yang dikuasai" />
          </Item>

          <Button block>
            <Text>Tambahkan Kemampuan</Text>
          </Button>
        </View>

        <Content padder>{this.renderItems()}</Content>

        <View flexDirection={'row'}>
          <Button
            success
            block
            flex={1}
            borderRadius={0}
            onPress={() => navigate('Main')}>
            <Text>Simpan</Text>
          </Button>

          <Button
            danger
            bordered
            block
            flex={1}
            borderRadius={0}
            onPress={() => navigate('Main')}>
            <Text>Lewati</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

const Wrapper = styled.View`
  border: solid 2px #e1e1e1;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 15px;
`

export default SignupSelectSkill
