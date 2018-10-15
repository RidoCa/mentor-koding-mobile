import React, { Component } from 'react'
import { Tabs, Tab, Text, TabHeading, Icon } from 'native-base'
import styled from 'styled-components/native'

import material from '../../../native-base-theme/variables/material'

import ProfileInfo from './ProfileInfo'
import Skills from './Skills'
import Review from './Review'
import SocialMedia from './SocialMedia'

class CustomTabs extends Component {
  render() {
    return (
      <Container>
        <TabWrapper>
          <Tabs
            style={{ marginTop: -40 }}
            tabBarUnderlineStyle={{ backgroundColor: material.brandPrimary }}>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#fff' }}>
                  <Icon
                    name={'information-outline'}
                    style={{ color: '#555' }}
                  />
                </TabHeading>
              }>
              <ProfileInfo />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#fff' }}>
                  <Icon name={'settings-outline'} style={{ color: '#555' }} />
                </TabHeading>
              }>
              <Skills />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#fff' }}>
                  <Icon name={'star-half'} style={{ color: '#555' }} />
                </TabHeading>
              }>
              <Review />
            </Tab>
            <Tab
              heading={
                <TabHeading style={{ backgroundColor: '#fff' }}>
                  <Icon name={'web'} style={{ color: '#555' }} />
                </TabHeading>
              }>
              <SocialMedia />
            </Tab>
          </Tabs>
        </TabWrapper>
      </Container>
    )
  }
}

const Container = styled.View`
  background-color: #fff;
  flex: 2;
  justify-content: space-around;
  align-items: center;
`
const TabWrapper = styled.View`
  padding: 15px;
`
const CustomTabHeading = styled(TabHeading)`
  background-color: #fff;
`

export default CustomTabs