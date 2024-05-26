import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import Swipe from "@/components/Swipe";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <GestureHandlerRootView>
        <Swipe />
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
