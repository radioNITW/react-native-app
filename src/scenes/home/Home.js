import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  root: {
    flex: 6,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#1b3487'
  },
  root2: {
    flex: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,

  },
  title: {
    fontSize: 24,
    marginTop: 25,
    marginBottom: 5,
    color: 'white'
  },
  title2: {
    fontSize: 10,
    marginTop: 115,
    marginBottom: 5,
    color: 'white',
  },
  webview:{
    flex: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  }
})

const Home = ({ navigation }) => (
  <>
  <StatusBar barStyle="light-content" backgroundColor="#121247"/>
  <View style={styles.root}>
    
    <Text style={styles.title}>Radio NITW</Text>
    {/*<Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate('Details', { from: 'Home' })
      }}
    />*/}
    </View>
    <View style={styles.root2}>
    <WebView style={styles.webview}
      source={{html: '<iframe src="http://campusradio.live/public/radio_nitw/embed?theme=light" frameborder="0" allowtransparency="true" style="width: 30%; min-height: 150px; border: 0;"></iframe>'}}
      style={{marginTop: 10, width: 1200}}
    />
    </View>
    <View style={styles.root}>
          </View>
     
    </>
  
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
