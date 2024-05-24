import {
  Button,
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

const DATA = [
  {
    id: "bd7acbea-c1b1-426c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-3c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-32da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7acbea-c1b21-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-345da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7a1cbea-c1123b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac168afc-1-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "586914a0f-3da11-471f-bd96-145571e29d72",
    title: "Third Item",
  },
  {
    id: "bd7ac1bea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68af1c-c605-48d3-a41f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-1471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
type ItemProps = { title: string };

const Item = ({ title }: ItemProps) => (
  <View style={styles.item}>
    <ScrollView horizontal style={styles.scrollView}>
      <Button title="Left button" />
      <Button title="Right button" />
    </ScrollView>
  </View>
);
export default function Swipe() {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  scrollView: {},
});
