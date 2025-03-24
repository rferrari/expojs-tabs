import { StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { Text, View } from "../components/Themed";
import { Ionicons } from '@expo/vector-icons';

const DUMMY_POSTS = [
  {
    id: '1',
    type: 'tweet',
    author: 'SkaterDude',
    handle: '@sk8er',
    content: 'Just landed my first kickflip! 🛹',
    likes: 42,
    comments: 5,
    timestamp: '2m'
  },
  {
    id: '2',
    type: 'long',
    author: 'Pro Skater',
    handle: '@proskater',
    content: `Here's my comprehensive guide to maintaining your skateboard... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    likes: 128,
    comments: 23,
    timestamp: '1h',
    image: 'https://placeholder.com/300x200'
  },
];

export default function TabTwoScreen() {
  const renderPost = (post) => {
    const isLongPost = post.type === 'long';
    
    return (
      <View key={post.id} style={[styles.post, isLongPost && styles.longPost]}>
        <View style={styles.postHeader}>
          <Text style={styles.author}>{post.author}</Text>
          <Text style={styles.handle}>{post.handle}</Text>
          <Text style={styles.timestamp}>{post.timestamp}</Text>
        </View>
        
        <Text style={[
          styles.content,
          isLongPost && styles.longPostContent
        ]}>
          {post.content}
        </Text>
        
        {isLongPost && post.image && (
          <Image
            source={{ uri: post.image }}
            style={styles.postImage}
          />
        )}
        
        <View style={styles.interactions}>
          <TouchableOpacity style={styles.interactionButton}>
            <Ionicons name="chatbubble-outline" size={20} />
            <Text>{post.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.interactionButton}>
            <Ionicons name="heart-outline" size={20} />
            <Text>{post.likes}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.feed}>
        {DUMMY_POSTS.map(post => renderPost(post))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  feed: {
    flex: 1,
    width: '100%',
  },
  post: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  longPost: {
    backgroundColor: '#000',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  author: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  handle: {
    color: '#666',
    marginRight: 5,
  },
  timestamp: {
    color: '#666',
    fontSize: 12,
  },
  content: {
    fontSize: 16,
    marginBottom: 10,
  },
  longPostContent: {
    fontSize: 15,
    lineHeight: 22,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  interactions: {
    flexDirection: 'row',
    marginTop: 10,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
});
