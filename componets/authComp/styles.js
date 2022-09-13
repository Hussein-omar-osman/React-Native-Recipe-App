import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  loginFormView: {
    flex: 1,
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#eaeaea',
    backgroundColor: '#fafafa',
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: 'tomato',
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    width: 350,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: 'transparent',
  },
});

export default styles;