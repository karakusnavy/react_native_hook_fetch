
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

function App() {
  useEffect(() => {
    fetchFortnite()
  }, [])
  const [Items, setItem] = useState()
  const fetchFortnite = async () => {
    const data = await fetch('https://api.myjson.com/bins/14exl6');
    const items = await data.json()
    setItem(items)
  }
  return (
    <View style={{ flex: 1 }} >
      {
        Items.map((item) =>
          <View style={styles.card} >
            <View style={{ flexDirection: 'column' }} >
              <View style={{ flexDirection: 'row' }} >
                <Text style={{ fontWeight: 'bold' }} >Name: </Text>
                <Text>{item.name}</Text>
              </View>
              <View style={{ flexDirection: 'row' }} >
                <Text style={{ fontWeight: 'bold' }} >Age: </Text>
                <Text>{item.age}</Text>
              </View>
            </View>
            <View style={styles.cardhold} >
              <TouchableOpacity style={styles.cardholdbutton} >
                <Text>View Detail</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: 'whitesmoke',
    marginTop: 10
  },
  cardhold: {
    alignItems: 'flex-end',
    flex: 1,
  },
  cardholdbutton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    elevation: 1,
    borderRadius: 10
  }
});
export default App;
