import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Input, Button, Overlay} from 'react-native-elements';

// TODO: Validate if SafeAreaView is required
function LoginView({navigation}) {
  const [login, setLogin] = useState({user: '', password: ''});
  const [displayErrror, setDisplayError] = useState(false);

  const toggleError = () => {
    setDisplayError(!displayErrror);
  };

  const validateLogin = () => {
    console.log('validating');
    const {user, password} = login;
    if (!user || user.length === 0 || !password || password.length === 0) {
      toggleError();
      return;
    }

    if (password === '1234') {
      navigation.navigate('Home', {user});
    }
  };

  return (
    <View>
      <Overlay isVisible={displayErrror} onBackdropPress={toggleError}>
        <Text>Todos los campos son requeridos.</Text>
      </Overlay>
      <Input
        leftIcon={{type: 'font-awesome', name: 'user'}}
        placeholder="username"
        onChangeText={value => setLogin({...login, user: value})}
      />
      <Input
        leftIcon={{type: 'font-awesome', name: 'lock'}}
        placeholder="password"
        onChangeText={value => setLogin({...login, password: value})}
      />
      <Button type="clear" title="Login" onPress={validateLogin} />
    </View>
  );
}

export default LoginView;
