import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  quizContainer: {
    flex: 1,
    padding: 10,
  },
  quizCard: {
    // backgroundColor: 'gray',
    flex: 1,
  },
  quizTitle: {
    // backgroundColor: 'green',
    height: 50,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quiz: {
    // backgroundColor: 'yellow',
    flex: 1,
    padding: 10,
  },
  navigates: {
    height: 100,
    flexDirection: 'row',
    // backgroundColor: 'gray',
  },

  navigateButtons: {
    backgroundColor: '#ffcc00',
    width: 150,
    height: 50,
    margin: 1,
    borderRadius: 50,
    alignItems: 'center',
    paddingTop: 10,
    elevation: 3,
    marginLeft: 10,
  },
  buttonGo: {
    position: 'absolute',
    right: 10,
  },
});
