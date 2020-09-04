import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default ({ value }) => (
	<View style={styles.container}>
		<Text style={styles.text}>{value}</Text>
	</View>
)

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "center"
	},
	text: {
		color: 'black'
	}
})