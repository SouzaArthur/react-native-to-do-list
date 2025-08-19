import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'
import { useState } from 'react'

function GoalInput({ onAddGoalButtonPress, isModalVisible, handleEndNewGoal }) {
    const [typedGoal, setTypedGoal] = useState('')

    function onTextGoalChange(typedText) {
        setTypedGoal(typedText)
    }

    function buttonPressed() {
        if (!typedGoal) return
        onAddGoalButtonPress(typedGoal)
        setTypedGoal('')
        handleEndNewGoal()
    }

    return (
        <Modal
            visible={isModalVisible}
            animationType={'slide'}
        >
            <View style={styles.inputContainer}>
                <Image
                    source={require('../assets/images/task-icon.png')}
                    style={styles.taskIcon}
                />
                <TextInput
                    onChangeText={onTextGoalChange}
                    style={styles.inputText}
                    placeholder="Your goals!"
                    value={typedGoal}
                />
                <View style={styles.buttonsContainer}>
                    <View style={styles.button}>
                        <Button onPress={handleEndNewGoal} title="Cancel" />
                    </View>
                    <View style={styles.button}>
                        <Button onPress={buttonPressed} title="Add goal!" />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#3a0b99ff',
        paddingBottom: 100
    },
    inputText: {
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingLeft: 8,
        backgroundColor: '#9382e8ff'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'space-between',
        width: 250,
    },
    button: {
        width: 100,
    },
    taskIcon: {
        width: 100,
        height: 100,
        margin: 50,
    }
})

export default GoalInput
