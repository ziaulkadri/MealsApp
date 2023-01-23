import { Pressable, Text, View, StyleSheet, Platform } from 'react-native';

function CatagoryGridTile({ title, color, onPress }) {
	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: '#ccc' }}
				style={({ pressed }) => [
					styles.buttonStyle,
					pressed
						? styles.buttonPressed
						: null,
				]}
				onPress={onPress}
			>
				<View
					style={[
						styles.innerContainer,
						{
							backgroundColor:
								color,
						},
					]}
				>
					<Text style={styles.title}>
						{title}
					</Text>
				</View>
			</Pressable>
		</View>
	);
}

export default CatagoryGridTile;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		// style for ios
		backgroundColor: 'white',
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 0 },
		shadowRadius: 16,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	buttonStyle: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		borderRadius: 8,
		alignItems: 'center',
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
});
