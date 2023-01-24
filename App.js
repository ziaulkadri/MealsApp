import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screens/CatagoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="MealsCategories"
					screenOptions={{
						headerStyle: {
							backgroundColor:
								'#351401',
						},
						headerTintColor:
							'white',
						contentStyle: {
							backgroundColor:
								'#3f2f25',
						},
					}}
				>
					<Stack.Screen
						name="MealsCategories"
						component={
							CategoriesScreen
						}
						options={{
							title: 'All Categories',
						}}
					/>
					<Stack.Screen
						name="MealsOverview"
						component={
							MealsOverviewScreen
						}
						// options={({
						// 	route,
						// 	navigation,
						// }) => {
						// 	const catId =
						// 		route
						// 			.params
						// 			.categoryId;
						// 	return {
						// 		title: catId,
						// 	};
						// }}
					/>
					<Stack.Screen
						name="MealDetail"
						component={
							MealsDetailsScreen
						}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	container: {},
});
