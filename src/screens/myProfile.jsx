/* eslint-disable react/prop-types */
import React from 'react';
import { Button as LinkButton, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Content, Form, Header, Input, Item, Label, Title,
} from 'native-base';
import * as UserActions from '../reducers/user';
import LoginOrRegister from '../components/loginOrRegister';

function MyProfile(props) {
  return (
    <View
      style={{
        flex: 1,
        alignSelf: 'stretch',
      }}
    >
      <Header>
        <Title style={{ paddingTop: 10 }}>
          My Profile
        </Title>
      </Header>

      {!props.user && (
        <LoginOrRegister
          login={props.login}
          register={props.register}
          logout={props.logout}
          loading={props.loading}
          error={props.error}
        />
      )}

      {props.user && (
        <Content>
          <Form>
            <Item>
              <Item fixedLabel>
                <Label>Name</Label>
                <Input
                  disabled
                  placeholder={props.user.name}
                />
              </Item>
            </Item>
            <Item disabled>
              <Item fixedLabel>
                <Label>Email</Label>
                <Input
                  disabled
                  placeholder={props.user.email}
                />
              </Item>
            </Item>
            <Item disabled>
              <Item fixedLabel>
                <Label>Address</Label>
                <Input
                  disabled
                  placeholder={props.user.address}
                />
              </Item>
            </Item>
            <Item disabled>
              <Item fixedLabel>
                <Label>Postcode</Label>
                <Input
                  disabled
                  placeholder={props.user.postcode}
                />
              </Item>
            </Item>
            <Item disabled>
              <Item fixedLabel>
                <Label>City</Label>
                <Input
                  disabled
                  placeholder={props.user.city}
                />
              </Item>
            </Item>
          </Form>
          <LinkButton
            title="Logout"
            onPress={() => props.logout()}
          />
        </Content>
      )}
    </View>
  );
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user || null,
    loading: state.userReducer.loading,
    error: state.userReducer.error,
  };
}

function mapStateActionsToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapStateActionsToProps,
)(MyProfile);
