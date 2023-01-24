import { useLayoutEffect } from 'react';
import {
	Image,
	Text,
	View,
	StyleSheet,
	ScrollView,
	Button,
} from 'react-native';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/subtitle';
import MealsDetails from '../components/MealsDetails';
import { MEALS } from '../data/dummy-data';
function MealsDetailsScreen({ route, navigation }) {
	const mealId = route.params.mealId;
	function headerButtonPressHandler() {
		console.log('headerButtonPressHandler');
	}
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						onPress={
							headerButtonPressHandler
						}
						icon="star"
						color="white"
					/>
				);
			},
		});
	}, [navigation, headerButtonPressHandler]);

	const selectMeal = MEALS.find((meal) => meal.id === mealId);
	return (
		<ScrollView style={styles.rootContainer}>
			<View>
				<Image
					style={styles.image}
					source={{
						uri: selectMeal.imageUrl,
					}}
				/>
				<Text style={styles.title}>
					{selectMeal.title}
				</Text>
				<MealsDetails
					duration={selectMeal.duration}
					affordability={
						selectMeal.affordability
					}
					complexity={
						selectMeal.complexity
					}
					textStyle={styles.detailText}
				/>
				<View style={styles.listOuterContainer}>
					<View
						style={
							styles.listContainer
						}
					>
						<Subtitle>
							Ingredients
						</Subtitle>
						<List
							data={
								selectMeal.ingredients
							}
						/>
						<Subtitle>
							Steps
						</Subtitle>
						<List
							data={
								selectMeal.steps
							}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

export default MealsDetailsScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 32,
	},
	image: {
		width: '100%',
		height: 350,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 24,
		margin: 8,
		textAlign: 'center',
		color: 'white',
	},
	detailText: {
		color: 'white',
	},
	listContainer: {
		width: '80%',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
});
