import React, {Component} from 'react'
import { View, ImageBackground, Stylesheet, ActivityIndicator} from 'react-native'
import OverlayText from './OverlayText.js'
import HeaderComponent from './HeaderComponent'

export default class BackgroundImage extends Component {


	render(){
		const justifyPic = 'center'
		return(
			<View style={{flex:1}}>
				<ImageBackground 
					style = {{flex:1, justifyPic, 
					width:'100%', height:'100%'}}
					source = {require('../Images/trail.jpg')}
				>
				< HeaderComponent />
					<OverlayText />
					
				</ImageBackground>
			</View>
			);
	}
}

