import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Avatar } from 'react-native-elements';
import {
  POPPINS_REGULAR,
  WHITE,
  POPPINS_BOLD,
  POPPINS_MEDIUM,
  STEEL_GRAY,
} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const mock = [
  {
    id: 1,
    name: 'Los Angeles Lakers',
  },
  {
    id: 2,
    name: 'Golden State Warriors',
  },
  {
    id: 3,
    name: 'Chicago Bulls',
  },
  {
    id: 4,
    name: 'Boston Celtics',
  },
];

const PollListItem = ({ id, name }) => (
  <LinearGradient
    key={id}
    style={styles.item}
    colors={['#382461', '#2A2156', '#1F1F4D']}>
    <Text style={styles.itemText}>{name}</Text>
  </LinearGradient>
);

const CardHeader = () => (
  <View style={styles.headerContainer}>
    <Avatar size="medium" icon={{ name: 'user', type: 'font-awesome' }} />
    <View>
      <Text style={styles.title}>Public Poll</Text>
      <Text style={styles.name}>Kelly Hodges</Text>
    </View>
  </View>
);

const PollCard = () => (
  <LinearGradient
    colors={[
      'rgba(168, 61, 127, 1)',
      'rgba(111, 29, 122, 0.51)',
      'rgba(76, 9, 119, 0.2)',
      'rgba(3, 17, 67, 0.6)',
    ]}
    start={{ x: 0.0, y: 0.5 }}
    end={{ x: 0.3, y: 0.5 }}
    locations={[0, 0.3, 0.8, 0.9]}
    style={styles.linearGradient}>
    <CardHeader />
    <Text style={styles.cardTitle}>
      What is the greatest NBA team in the history?
    </Text>
    <FlatList
      data={mock}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <PollListItem {...item} />}
    />
  </LinearGradient>
);

const styles = StyleSheet.create({
  linearGradient: {
    borderRadius: 18,
    height: 333,
    paddingTop: 12,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 12,
    marginBottom: 15,
  },
  headerContainer: {
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
});

export default PollCard;
