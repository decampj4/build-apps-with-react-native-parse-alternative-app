import React from 'react-native';
var {
  View,
  StyleSheet,
  Text,
  AsyncStorage,
} = React;

export default class Tweets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  componentWillMount() {
    AsyncStorage.getItem('username')
      .then((username) => {
        this.setState({
          username: username
        });
      });
  }

  render() {
    if (!this.state.username) {
      return <Text>Loading...</Text>
    }
    
    return (
      <View style={styles.container}>
        <Text>Welcome back {this.state.username}!</Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});