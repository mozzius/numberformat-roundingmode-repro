import "@formatjs/intl-locale/polyfill-force";
import "@formatjs/intl-pluralrules/polyfill-force";
import "@formatjs/intl-numberformat/polyfill-force";
import "@formatjs/intl-pluralrules/locale-data/en";
import "@formatjs/intl-numberformat/locale-data/en";

import { Text, SafeAreaView, StyleSheet } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        {"1050 -> "}
        {Intl.NumberFormat("en-US", {
          notation: "compact",
          maximumFractionDigits: 1,
          roundingMode: "trunc",
        }).format(1050)}
      </Text>
      <Text style={styles.paragraph}>(should be 1k)</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    padding: 8,
    gap: 16,
  },
  paragraph: {
    fontSize: 18,
    textAlign: "center",
  },
});
