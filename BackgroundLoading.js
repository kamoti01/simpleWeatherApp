import React, {Component} from 'react'
import { View, ImageBackground, ActivityIndicator, Text} from 'react-native'


export default class BackgroundLoading extends Component {
	render(){
		const justifyPic = 'center'
		return(
			<View style={{flex:1}}>
				<ImageBackground 
					style = {{flex:1, justifyPic, 
					width:'100%', height:'100%'}}
					source = {require('./src/Images/trail.jpg')}
				>
				<ActivityIndicator size="large" color="#0000ff" style={{marginTop:300}}/>
				</ImageBackground>
			</View>
			);
	}
}

