import { useState } from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    Button
} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [listOfGoals, setListOfGoals] = useState([])

    function onAddGoalButtonPress(typedGoal) {
        setListOfGoals((listOfGoals) => [
            ...listOfGoals,
            { text: typedGoal, key: Math.random().toString() },
        ]);
    }

    function handleItemDeletion(itemId){
        setListOfGoals(currentList => currentList.filter(item => item.key !== itemId));
    }

    function handleAddNewGoal(){
        setIsModalVisible(true);
    }

    function handleEndNewGoal(){
        setIsModalVisible(false);
    }

    return (    
        <View style={styles.container}>
            <Button title={'Add new Goal'} onPress={handleAddNewGoal}/>
            <GoalInput handleEndNewGoal={handleEndNewGoal} onAddGoalButtonPress={onAddGoalButtonPress} isModalVisible={isModalVisible}/>
            <View style={styles.listGoals}>
                <FlatList
                    data={listOfGoals}
                    renderItem={(itemData) => {
                        return <GoalItem itemData={itemData} handleItemDeletion={handleItemDeletion} />
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingTop: 70,
        backgroundColor: "#3a0b99ff"
    },
    listGoals: {
        flex: 8,
        marginTop: 10
    },
})
