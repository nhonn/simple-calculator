import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

export default ({ label, onClick, variant }) => (
	<TouchableOpacity onPress={onClick} style={[styles.button, styles[variant]]}>
		<Text style={styles.text}>{label}</Text>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	button: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	text: {
		color: "black",
	},
	normal: {
		backgroundColor: "white",
	},
	operator: {
		backgroundColor: "orange",
	},
	func: {
		backgroundColor: "green",
	},
	equal: {
		backgroundColor: "turquoise",
	}
})