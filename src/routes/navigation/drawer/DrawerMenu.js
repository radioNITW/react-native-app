import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView, Text } from 'react-native'
import Button from 'components/Button'
import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    backgroundColor: colors.purple,
    
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
}

const DrawerMenu = (props) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.purple}
        backgroundColor={colors.purple}
        onPress={() => {
          props.navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.main}>
      <Text style={{fontSize:30, color:'white'}}>Radio Stations</Text>
    </View>
    <View >
    <Button style={{marginTop:40, marginBottom:10, marginHorizontal: 16,}}
      title="NIT Warangal"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
      {/* navigation.navigate('Home', { from: 'Home' }) */}
      }}
    />
    <Button style={{marginTop:10, marginBottom:650, marginHorizontal: 16,}}
      title="Other Colleges coming soon"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
      }}
    />
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
