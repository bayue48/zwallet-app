import {StyleSheet} from 'react-native';

import {height} from '../utils/size';

const fontRegular = {fontFamily: 'NunitoSans-Regular'};

const authStyles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFCFF',
  },
  topContainer: {
    flex: 1,
    height: height / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title1: {
    ...fontRegular,
    fontSize: 26,
    color: '#6379F4',
    fontWeight: 'bold',
  },
  bottomContainer: {
    flex: 1,
    paddingTop: 30,
    minHeight: height / 6.5,
    backgroundColor: '#FFF',
    padding: 15,
    elevation: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    textAlign: 'center',
  },
  bottomContainer2: {
    flex: 1,
    paddingTop: 30,
    height: height - height / 3.5,
    minHeight: height / 6.5,
    backgroundColor: '#FFF',
    padding: 15,
    elevation: 1,
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    textAlign: 'center',
  },
  title2: {
    ...fontRegular,
    color: '#3A3D42',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  wrapSubtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    ...fontRegular,
    fontSize: 16,
    color: 'rgba(58, 61, 66, 0.6)',
    textAlign: 'center',
    maxWidth: 300,
  },
  btnForgotPass: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 15,
  },
  forgotPass: {
    ...fontRegular,
    color: 'rgba(58, 61, 66, 0.8);',
    fontSize: 14,
  },
  error: {
    ...fontRegular,
    textAlign: 'center',
    color: '#FF5B37',
    fontSize: 16,
    marginVertical: 20,
  },
  signUpSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
    minHeight: 5,
  },
  signUpText1: {
    ...fontRegular,
    color: 'rgba(58, 61, 66, 0.8);',
    fontSize: 16,
    marginRight: 5,
  },
  signUpText2: {
    ...fontRegular,
    color: '#6379F4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomArea: {
    flex: 1,
    // alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default authStyles;
