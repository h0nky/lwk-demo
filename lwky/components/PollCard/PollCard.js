import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  POPPINS_REGULAR,
  WHITE,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  CARD_GRADIENT,
  CARD_ITEM_GRADIENT,
  VIOLENT_EGGPLANT,
} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import { mockData } from './mockData';

const PollListItem = ({ id, name }) => (
  <LinearGradient key={id} style={styles.item} colors={CARD_ITEM_GRADIENT}>
    <Text style={styles.itemText}>{name}</Text>
  </LinearGradient>
);

const VotesLabel = () => (
  <View style={styles.labelContainer}>
    <Text style={styles.labelNumber}>0</Text>
    <Text style={styles.labelText}>votes</Text>
  </View>
);

const PollCardHeader = () => (
  <View style={styles.cardHeaderContainer}>
    <View style={styles.userInfo}>
      <Avatar size="medium" icon={{ name: 'user', type: 'font-awesome' }} />
      <View>
        <Text style={styles.title}>Public Poll</Text>
        <Text style={styles.name}>Kelly Hodges</Text>
      </View>
    </View>
    <VotesLabel />
  </View>
);

const PollCard = () => (
  <LinearGradient
    colors={CARD_GRADIENT}
    start={{ x: -0.1, y: -0.1 }}
    end={{ x: 1, y: 1 }}
    locations={[0, 0.3, 0.8, 0.9]}
    style={styles.container}>
    <PollCardHeader />
    <Text style={styles.cardTitle}>
      What is the greatest NBA team in the history?
    </Text>
    <FlatList
      data={mockData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PollListItem {...item} />}
    />
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    borderRadius: 18,
    height: 333,
    paddingTop: 12,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  cardHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 10,
    fontFamily: POPPINS_REGULAR,
    lineHeight: 16,
    color: WHITE,
  },
  name: {
    fontSize: 12,
    fontFamily: POPPINS_BOLD,
    color: WHITE,
    lineHeight: 18,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: POPPINS_MEDIUM,
    lineHeight: 22,
    color: WHITE,
    marginVertical: 12,
  },
  itemText: {
    color: WHITE,
    fontSize: 12,
    lineHeight: 18,
  },
  item: {
    paddingLeft: 15,
    marginBottom: 8,
    justifyContent: 'center',
    height: 40,
    borderRadius: 15,
  },
  labelContainer: {
    backgroundColor: VIOLENT_EGGPLANT,
    width: 52,
    height: 52,
    borderRadius: 52 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelText: {
    color: WHITE,
    fontSize: 11,
  },
  labelNumber: {
    color: WHITE,
    fontSize: 16,
    fontFamily: POPPINS_BOLD,
  },
});

export default PollCard;
