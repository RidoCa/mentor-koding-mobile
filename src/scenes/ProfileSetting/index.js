import React, { Component } from 'react'
import { AsyncStorage, ToastAndroid } from 'react-native'
import { user } from 'services'
import {
  Container,
  Tabs,
  ScrollableTab,
  Tab,
  Text,
  TabHeading,
  Button
} from 'native-base'

import { Header } from 'components'
import material from 'native-base-theme/variables/material'

import ProfileInfo from './ProfileInfo'
import Skill from './Skill'
import MentorSetting from './MentorSetting'
import SocialMedia from './SocialMedia'

class ProfileSettings extends Component {
  state = {
    input: {
      name: '',
      address: '',
      phone: '',
      education: '',
      job: '',
      description: '',
      isMentor: false,
      skills: [],
      socialMedia: {
        github: '',
        linkedin: '',
        facebook: '',
        instagram: ''
      }
    }
  }

  componentDidMount() {
    this.getProfile()
  }

  getProfile() {
    AsyncStorage.getItem('profile').then(value => {
      const profile = JSON.parse(value)
      this.setState({ input: { ...profile } })
    })
  }

  changeInput(name, value) {
    const { input } = this.state
    if (this.isSocialMediaInput(name)) input['socialMedia'][name] = value
    else input[name] = value
    this.setState({ input })
  }

  isSocialMediaInput(name) {
    return (
      name === 'github' ||
      name === 'linkedin' ||
      name === 'facebook' ||
      name === 'instagram'
    )
  }

  addSkill(skill) {
    let skills = this.state.input.skills
    if (this.isSkillValid(skill)) {
      skills.push(skill)
      let input = this.state.input
      input.skills = skills
      this.setState({ input })
    } else {
      ToastAndroid.show('Keahlian sudah ada', ToastAndroid.LONG)
    }
  }

  removeSkill(skill) {
    let skills = this.state.input.skills.filter(item => item !== skill)
    let input = this.state.input
    input.skills = skills
    this.setState({ input })
  }

  isSkillValid(skill) {
    return this.state.input.skills.indexOf(skill) === -1
  }

  submit() {
    user.update(this.state.input).then(data => {
      this.setProfile()
    })
  }

  setProfile() {
    user.profile().then(data => {
      AsyncStorage.setItem('profile', JSON.stringify(data)).then(() => {
        this.props.navigation.navigate('Profile')
      })
    })
  }

  render() {
    return (
      <Container>
        <Header
          title={'Pengaturan Profil'}
          navigation={this.props.navigation}
        />

        <Tabs renderTabBar={() => <ScrollableTab />} style={{ marginTop: -15 }}>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Informasi Profil</Text>
              </TabHeading>
            }>
            <ProfileInfo
              input={this.state.input}
              onChange={(name, value) => this.changeInput(name, value)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Keahlian</Text>
              </TabHeading>
            }>
            <Skill
              skills={this.state.input.skills}
              onAddSkill={skill => this.addSkill(skill)}
              onRemoveSkill={skill => this.removeSkill(skill)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Pengaturan Mentor</Text>
              </TabHeading>
            }>
            <MentorSetting
              input={this.state.input}
              onChange={(name, value) => this.changeInput(name, value)}
            />
          </Tab>
          <Tab
            heading={
              <TabHeading style={{ backgroundColor: material.brandPrimary }}>
                <Text>Media Sosial</Text>
              </TabHeading>
            }>
            <SocialMedia
              input={this.state.input}
              onChange={(name, value) => this.changeInput(name, value)}
            />
          </Tab>
        </Tabs>

        <Button block success borderRadius={0} onPress={() => this.submit()}>
          <Text>Simpan</Text>
        </Button>
      </Container>
    )
  }
}

export default ProfileSettings
