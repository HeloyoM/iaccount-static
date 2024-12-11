import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

type ItemProps = {
    item: any,
    onSelect: (id: string) => void
};

const Item = ({ item, onSelect }: ItemProps) => (
    <View style={styles.item} onTouchStart={() => onSelect(item.id)}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
);

const AppDropdown = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [price, setPrice] = React.useState('');
    const [source, setSource] = useState('');

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

    const toggleShowingDropwdown = () => {
        setShowDropdown(prev => !prev)
    }

    const selectedSource = () => {
        return DATA.find(s => s.id === source)?.title
    }

    const onSourceSelected = (id: string) => {
        setSource(id)

        toggleShowingDropwdown()
    }

    return (
        <>
            <View style={{ display: 'flex', padding: 5, margin: '6%', flexDirection: 'row', justifyContent: 'center' }}>

                <TouchableOpacity style={styles.button} onPress={toggleShowingDropwdown}>
                    <Text>{source ? selectedSource() : 'Source'}</Text>
                </TouchableOpacity>


                <Text>₪</Text>

                <TextInput
                    onFocus={source && showDropdown ?toggleShowingDropwdown : ()=>{}}
                    style={styles.input}
                    value={price}
                    onChangeText={setPrice}
                    keyboardType="numeric"
                    placeholder="Type a number"
                />


            </View>

            {price && <Button onPress={() => console.log('Pressed')}>
                add
            </Button>}

            {
                showDropdown && <FlatList
                    data={DATA}
                    renderItem={({ item }) => <Item onSelect={onSourceSelected} item={item} />}
                    keyExtractor={item => item.id}
                />
            }
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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
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