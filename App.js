import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
      <><View style={styles.header}>
      <Text>Title</Text>
    </View><View style={styles.container}>
        <Image source={{
          uri: `https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGlmdjdtOWY0aHJwbndxNWVjMDZmeHltYW9hbXg0MDJ6Ymx5eGFobCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/f8DhfShuYeMhGRES8x/200.webp`
        }}
          style={styles.img} />
      </View></>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    backgroundColor: '#eee',
  },
  img: {
    height: '200px',
  }
});
