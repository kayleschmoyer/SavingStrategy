import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text, Card } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Bucket 1" subtitle="Bills due around the 5th" />
        <Card.Content>
          <Text>Total: $0.00</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Bucket 2" subtitle="Bills due around the 20th" />
        <Card.Content>
          <Text>Total: $0.00</Text>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Bucket 3" subtitle="Fixed date bills" />
        <Card.Content>
          <Text>Total: $0.00</Text>
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={() => navigation.navigate('AddBill')} style={styles.button}>
        Add Bill
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
});
