import { Paths } from '@/utils/Paths';
import React, { useState } from 'react'
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native'

type ItemProps = {
    item: any,
    onSelect: (id: string) => void
};

type Props = {
    data: any[]
    style: string | any
    source: string
    onSourceSelected: (id: string) => void
}

const useDropdown = ({ data, style, source, onSourceSelected }: Props) => {
    const [showDropdown, setShowDropdown] = useState(false);

    const path = 'outcome'
    const default_placeholder = {
        outcome: 'Category',
        income: 'Source'
    }

    const toggleShowingDropwdown = () => {
        setShowDropdown(prev => !prev);
    }

    const selectedPlaceholder = () => {
        if (!source) return null

        else return data.find(s => s.id === source)?.title
    }

    const dropdownButton = (
        <TouchableOpacity style={style} onPress={toggleShowingDropwdown}>
            <Text>{selectedPlaceholder() ? selectedPlaceholder() : path === Paths.OUTCOME ? default_placeholder.outcome : default_placeholder.income}</Text>
        </TouchableOpacity>
    )

    const list = (
        <FlatList
            data={data}
            renderItem={({ item }) => <Item onSelect={onSourceSelected} item={item} />}
            keyExtractor={item => item.id}
        />
    )

    return { dropdownButton, list, toggleShowingDropwdown, showDropdown }
}

export default useDropdown

const Item = ({ item, onSelect }: ItemProps) => (
    <View style={styles.item} onTouchStart={() => onSelect(item.id)}>
        <Text style={styles.title}>{item.title}</Text>
    </View>
);

const styles = StyleSheet.create({
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
})
