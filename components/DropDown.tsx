import { Paths } from '@/utils/Paths'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

type DropdownProps = {
    style: string | any
    toggleShowingDropwdown: () => void
    placeholder: string
    selectedPlaceholder: () => string
}

const DropDown = ({ style, toggleShowingDropwdown, placeholder, selectedPlaceholder }: DropdownProps) => {
    const { path } = useLocalSearchParams();

    return (
        <TouchableOpacity style={style} onPress={toggleShowingDropwdown}>
            <Text>{placeholder ? selectedPlaceholder() : path === Paths.OUTCOME ? default_placeholder.outcome : default_placeholder.income}</Text>
        </TouchableOpacity>
    )
}
export default DropDown


const default_placeholder = {
    outcome: 'Category',
    income: 'Source'
}