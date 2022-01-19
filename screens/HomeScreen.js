import { View, Text, FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import styles from '../assets/Style'
import CategoryGridTile from '../components/CategoryGridTile'


export default function HomeScreen({ navigation }) {
  const renderGridItem = ({ item }) => {
    return (
      <CategoryGridTile
        title={item.title}
        color={item.color}
        imgURL={item.imgURL}
        onSelect={() => {
          navigation.navigate("Category", {
            categoryID: item.id,
            categoryName: item.title
          });
        }}
      />
    );
  };

  return (
    <View style={styles.BG}>
      <View style={styles.container}>
        <Text style={[styles.titles,{fontSize:50}]}>Categories</Text>
      </View>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
      />
    </View>
  );
}
