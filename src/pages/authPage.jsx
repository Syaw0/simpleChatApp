import React, { useState } from 'react';
import Flex from '../styles/styledComponents/flex';
import Text from '../styles/styledComponents/text';
import Input from '../components/global/input';
import PrimaryButton from '../components/global/primaryButton';
import ShadowButton from '../components/global/shadowButton';
import SuccessMessage from '../components/global/successMessage';
import ErrorMessage from '../components/global/ErrorMessage';

function AuthPage() {
  const [inputValues, setInputValues] = useState({ username: '', password: '' });
  const [waiting, setWaiting] = useState(false);
  const [fromType, setFromType] = useState('signup');

  const usernameInputChange = (e) => {
    const { value } = e.target;
    setInputValues((state) => ({ ...state, username: value }));
  };

  const passwordInputChange = (e) => {
    const { value } = e.target;
    setInputValues((state) => ({ ...state, password: value }));
  };

  const clickOnSignup = () => {
    setWaiting(true);
    // set request
  };

  const clickOnLogin = () => {
    setWaiting(true);
  };

  const clickOnChangeForm = () => {
    setFromType(fromType === 'signup' ? 'login' : 'signup');
  };

  return (
    <Flex
      className="index2"
      css={{
        padding: '0 $23',
        '@bp2': {
          padding: '0 $17',
        },

        '@bp3': {
          padding: '0 $10',
        },
        '@bp4': {
          padding: '0 $3',
        },
      }}
      justify="center"
      align="center"
      dir="column"
    >
      <Text css={{
        logo: '600',
        color: '$onBg',
        padding: '$3 0',
        borderBottom: '1px solid $onBg300',
        width: '100%',
        textAlign: 'center',
      }}
      >
        Exmore
      </Text>

      <Flex
        justify="center"
        css={{
          '& #signupLogin': {
            marginTop: '$4',
          },
          '&>*': {
            width: '50%',
            '@bp0': {
              width: '60%',
            },

            '@bp1': {
              width: '80%',
            },
            '@bp2': {
              width: '100%',
            },
          },
        }}
        align="center"
        dir="column"
      >
        <Text css={{
          headline4_i: '500',
          color: '$onBg900',
          width: '100%',
          textAlign: 'center',
          marginTop: '$8',
          marginBottom: '$4',
        }}
        >

          {fromType === 'signup'
            ? 'Welcome to Exmore fill the form and sign up 🍂 ' : ' Welcome Back  💕'}

        </Text>

        <Input
          disabled={waiting}
          placeholder="enter your username"
          label="Username"
          type="text"
          name="username"
          id="username"
          value={inputValues.username}
          onchange={usernameInputChange}
        />

        <Input
          disabled={waiting}
          placeholder="enter your password"
          label="Password"
          type="password"
          name="password"
          id="password"
          value={inputValues.password}
          onchange={passwordInputChange}
        />

        <PrimaryButton
          disabled={waiting}
          name="signupLogin"
          id="signupLogin"
          onclick={fromType === 'signup' ? clickOnSignup : clickOnLogin}
        >
          {fromType === 'signup'
            ? 'Signup' : 'Login'}
        </PrimaryButton>

        <ShadowButton
          disabled={waiting}
          name="changeFormType"
          id="changeFormType"
          onclick={clickOnChangeForm}
        >
          {fromType === 'signup' ? ' Already have account?' : ' Create a new account!'}

        </ShadowButton>

      </Flex>

    </Flex>
  );
}

export default AuthPage;
