import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    padding: 15,
    flex: 1,
    backgroundColor: 'rgba(0, 129, 138, 0.59)',

  },
  getStartedContainer: {
    flex: 1,
  },
  titleContainer: {
    padding: 5,
    marginTop: 30,
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    marginBottom: 30,

  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
  holder: {
    flex: 1,
  },
  holderDesc: {
    padding: 25,
    marginTop: 20,
  },
  descText: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
  },
  holderButtons: {
    flex: 1,
    padding: 25,
  },

  buttons: {
    marginTop: '10%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  oneButton: {
    alignItems: 'center',
    backgroundColor: '#ffcc00',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    elevation: 20,

  },
  buttonTextWrapper: {
    flex: 1,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700'
  },
  icon: {
    flex: 0.2,
    color: '#f7be16'
  },
});
