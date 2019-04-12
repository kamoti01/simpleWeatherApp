import React, {Component} from 'react'
import {View} from 'react-native'
import {Icon, Text} from 'react-native-elements'
/*				<Icon
				  name='cloud'
				  type='font-awesome'
				  color='#f50'
				  size={100}
			    />
				<Text style={{color: '#fff', marginTop:30}} h1>Your Weather</Text>
				<Text style={{color: '#fff', marginTop:30, marginBottom: 80}} h3>Everyday.</Text>

			    */
export default class OverlayText extends Component {
	render(){
		return(
			<View style={{height: '100%', flex: 1, flexDirection: 'column', paddingTop: 100, alignItems: 'center'}}>	
			<Icon
				  name='cloud'
				  type='font-awesome'
				  color='#f50'
				  size={100}
			    />
			</View>
		);
	}
}

