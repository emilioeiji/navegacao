import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'
import PassoStack from '../components/PassoStack'
import { NavigationContainer } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

export default props => (

    <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'blue',
        tabBarLabelStyle: { fontSize: 30 }
    }}>
        <Tab.Screen name='TelaA' component={TelaA} />
        <Tab.Screen name='TelaB' component={TelaB} />
        <Tab.Screen name='TelaC' component={TelaC} />
    </Tab.Navigator>

)