import { Entypo, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, Alert, ImageSourcePropType, RefreshControl } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import Data from '../constants/Data';


export default function ScrollViewScreen() {
    type person = {
        name: string,
        address: string,
        image: ImageSourcePropType
    }
    const data = Data;

    const [refresh, setRefresh] = useState<boolean>(false)
    const [load, setLoad] = useState<boolean>(false)

    const onRefresh = () => {
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 2200)

    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={<RefreshControl
                    refreshing={refresh}
                    onRefresh={onRefresh}
                />}
                style={styles.container}>
                {data.map((detail: person) => {
                    return (
                        <ListItem
                            bottomDivider
                            onPress={() => {
                                Alert.alert(detail.name)
                            }}
                        >
                            <Avatar size={90} rounded source={detail.image} />
                            <ListItem.Content>
                                <ListItem.Title style={styles.listitle}>
                                    {detail.name}
                                </ListItem.Title>
                                <ListItem.Subtitle style={styles.listsubtitle}>
                                    {detail.address}
                                </ListItem.Subtitle>
                            </ListItem.Content>
                            <Entypo name="chevron-down" size={24} color="black" />
                        </ListItem>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listitle: {
        fontSize: 18,
        fontFamily: 'poppins-semi-bold'
    },
    listsubtitle: {
        fontFamily: 'poppins-semi-bold'
    }

})
