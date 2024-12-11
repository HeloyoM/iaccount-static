import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import DropDown from './DropDown';
import { addOutcome } from '@/api/balance';
import CreateOutcome from '@/dto/createOutcome.dto';
import useDropdown from './hooks/useDropdown';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Food',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Transportation',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Clothings',
    },
];
const AppDropdown = () => {
    const [amount, setAmount] = React.useState(0);
    const [source, setSource] = useState('');

    const onSourceSelected = (id: string) => {
        setSource(id)

        toggleShowingDropwdown()
    }

    const { dropdownButton, showDropdown, list, toggleShowingDropwdown } = useDropdown({ onSourceSelected, data: DATA, source: source, style: styles.button })

    const addRecord = () => {
        const outcome: CreateOutcome = {
            amount,
            currency: '12',
            source
        }
        addOutcome(outcome)
    }

    return (
        <>
            <View style={{ display: 'flex', padding: 5, margin: '6%', flexDirection: 'row', justifyContent: 'center' }}>

                {dropdownButton}

                <Text>₪</Text>

                <TextInput
                    onFocus={source && showDropdown ? toggleShowingDropwdown : () => { }}
                    style={styles.input}
                    value={amount.toString()}
                    onChangeText={(t: string) => setAmount(Number(t))}
                    keyboardType="numeric"
                    placeholder="Type a number"
                />


            </View>

            {amount && <Button onPress={addRecord}>
                add
            </Button>}

            {showDropdown && list}

        </>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        width: '30%',
        paddingHorizontal: 10,
        margin: 5,
        zIndex: 1,
    },
    input: {
        width: '80%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom: 20,
    },
    output: {
        fontSize: 18,
        color: '#333',
    },
    buttonText: {
        flex: 1,
        textAlign: 'center',
    },
    dropdown: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: 50,
    },
    addBtn: {

    }
});

export default AppDropdown;