import React from 'react';
import {View, StyleSheet, Image} from 'react-native'

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket For Sale</AppText>
                <AppText style={styles.subTitle}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="Mosh Teacher"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: '100%',
        height: 300
    },
    title: {
        fontSize: 24,
        fontWeight: '800'
    },
    subTitle: {
        color: colors.secondary,
        fontWeight:'bold',
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 40
    }
})

export default ListingDetailsScreen;