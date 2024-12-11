import SoftwareNameHeader from '@/components/Header/SoftwareNameHeader'
import React from 'react'
import { Text, View } from 'react-native'
import today from '../utils/getCurrentYYMM'
import AppDropdown from '@/components/AppDropdown';

const Transaction = () => {
    return (
        <View>
            <SoftwareNameHeader />

            <Text>{today.year + ' ' + today.month}</Text>

            <Text>Status: 0 </Text>

            <AppDropdown />

        </View>
    )
}
export default Transaction