import { StyleSheet, ScrollView, Image } from "react-native";
import { Text, View } from "../components/Themed";

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {/* Hero Section */}
        <Image 
          source={{ uri: 'https://placehold.co/600x300/png?text=Skate+Hive' }}
          style={styles.heroImage}
        />
        
        <Text style={styles.title}>SkateHive</Text>
        <Text style={styles.subtitle}>The Essential Tool for Skaters</Text>
        
        <Text style={styles.description}>
          If a skate tool is essential for a skater, our app is the next must-have in their setup.
        </Text>

        {/* Features Section */}
        <View style={styles.featuresContainer}>
          <Text style={styles.sectionTitle}>With it, skaters can:</Text>
          {[
            "See what their friends are up to",
            "Discover new tricks and trends",
            "Find the best spots to skate",
            "Chat privately with their crew",
            "Follow a dedicated feed and magazine",
            "Locate the nearest skate shop",
            "Get help with the help button",
            "Compete to win rewards"
          ].map((feature, index) => (
            <Text key={index} style={styles.featureItem}>✅ {feature}</Text>
          ))}
        </View>

        {/* Progress Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>From amateur to pro:</Text>
          <Text style={styles.text}>
            Start as an amateur, level up to advanced, and maybe even reach pro status.
          </Text>
        </View>

        {/* Blockchain Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The game-changer? Blockchain.</Text>
          <Text style={styles.text}>
            Your content is yours. No censorship, no middlemen. Earn rewards by posting, 
            engaging, and contributing to the community.
          </Text>
        </View>

        {/* Community Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>A Social-Fi for skaters</Text>
          <Text style={styles.text}>
            Connecting riders, skate shops, spots, and crews.
          </Text>
        </View>

        {/* Stats Section */}
        <View style={styles.statsSection}>
          <Text style={styles.highlight}>
            And it's already happening! SkateHive has 1,700 skaters pushing the culture forward.
          </Text>
        </View>

        {/* Call to Action */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaText}>
            This is more than an app—it's the next essential tool for skaters worldwide. 
            Let's build it together.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heroImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "600",
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  featuresContainer: {
    width: '100%',
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  featureItem: {
    fontSize: 18,
    marginBottom: 5,
  },
  section: {
    width: '100%',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  statsSection: {
    width: '100%',
    marginBottom: 30,
  },
  highlight: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: 'center',
    lineHeight: 24,
  },
  ctaSection: {
    width: '100%',
    marginBottom: 30,
  },
  ctaText: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 24,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
