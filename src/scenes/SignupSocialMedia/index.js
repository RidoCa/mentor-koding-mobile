import React, { Component } from 'react'
import {
  Content,
  Input,
  Text,
  Button,
  Container,
  Textarea,
  View
} from 'native-base'

import Item from '../../components/Item'
import TextIcon from '../../components/TextIcon'
import Header from '../../components/Header'

class SignupSocialMedia extends Component {
  state = {
    input: {
      github: '',
      linkedin: '',
      facebook: '',
      instagram: ''
    }
  }

  changeInput(value, name) {
    let input = this.state.input
    input[name] = value
    this.setState({ input })
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Header navigation={this.props.navigation} title={'Media Sosial'} />

        <Content padder>
          <TextIcon icon={'github-circle'} text={'Github'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Github"
              value={this.state.input.github}
              onChangeText={text => this.changeInput(text, 'github')}
            />
          </Item>

          <TextIcon icon={'linkedin-box'} text={'Linkedin'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Linkedin"
              value={this.state.input.linkedin}
              onChangeText={text => this.changeInput(text, 'linkedin')}
            />
          </Item>

          <TextIcon icon={'facebook-box'} text={'Facebook'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Facebook"
              value={this.state.input.facebook}
              onChangeText={text => this.changeInput(text, 'facebook')}
            />
          </Item>

          <TextIcon icon={'instagram'} text={'Instagram'} size={16} />
          <Item regular>
            <Input
              placeholder="Masukkan Username Instagram"
              value={this.state.input.instagram}
              onChangeText={text => this.changeInput(text, 'instagram')}
            />
          </Item>

          <View flexDirection={'row'} justifyContent={'space-between'}>
            <Button success block onPress={() => navigate('SignupSelectSkill')}>
              <Text>Simpan</Text>
            </Button>

            <Button
              danger
              bordered
              block
              onPress={() => navigate('SignupSelectSkill')}>
              <Text>Lewati</Text>
            </Button>
          </View>
        </Content>
      </Container>
    )
  }
}

export default SignupSocialMedia