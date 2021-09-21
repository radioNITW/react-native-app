import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import { colors } from 'theme'
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
    backgroundColor: '#1b3487'
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    marginTop: 5,
    color: 'white'
  },
  root2: {
    flex: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginLeft: 0,
    marginRight: 0,
  },

})

const Profile = ({ navigation }) => (
  <>
  <StatusBar barStyle="light-content" backgroundColor="#121247" />
    <View style={styles.root}>
    
    <Text style={styles.title}>Request a Song</Text>
    </View>
    <View style={styles.root2}>
    <WebView 
      source={{html: '<iframe src="http://campusradio.live/public/radio_nitw/embed-requests?theme=light" frameborder="0" allowtransparency="true" style="width: 40%; min-height: 950px; border: 0;"></iframe>'}}
      style={{marginTop: 0, width: 1000}}
    />
    </View>
    
  </>
)

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
