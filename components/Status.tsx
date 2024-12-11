import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import today from '../utils/getCurrentYYMM'
import { Card } from 'react-native-paper'
import { Link } from 'expo-router'

export const Status = () => {

    return (
        <View style={styles.container}>
            <Text>{today.year + ' ' + today.month}</Text>
            <Text>Status: 0 </Text>

            <View style={styles.mainBtns}>
                <Card style={[styles.card, styles.outcome]}>
                    <Card.Content>
                        <Text>Add Outcome</Text>
                    </Card.Content>
                </Card>

                <Card style={[styles.card, styles.income]}>
                    <Card.Content >
                        <Link href="/Transaction" style={styles.label}>Add Income</Link>
                    </Card.Content>
                </Card>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    mainBtns: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '90%',
        width: '75%'
    },
    label: {
        fontWeight: 'bold'
    },
    card: {
        width: 150,
        height: 150,
        borderRadius: 8,
        borderColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    income: {
        backgroundColor: 'green'
    },
    outcome: {
        backgroundColor: 'red'
    }
})