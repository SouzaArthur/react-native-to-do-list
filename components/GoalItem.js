import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem({itemData, handleItemDeletion}) {
    return (
        <Pressable onPress={handleItemDeletion.bind(this, itemData.item.key)}>
            <View style={styles.goalContainer}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    goalContainer: {
        borderRadius: 10,
        backgroundColor: '#5e4ea3',
        margin: 8,
        padding: 10,
    },
    goalText: {
        color: 'white',
    },
})

export default GoalItem
