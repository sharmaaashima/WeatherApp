import "react-native-gesture-handler";

import DetailScreen from "./src/pages/DetailScreen";
import Navigation from "./src/navigation/stackNavigation";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <Navigation />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
