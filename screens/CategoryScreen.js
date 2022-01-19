import { View, FlatList } from 'react-native';
import styles from '../assets/Style';
import ProductGridTile from './../components/ProductGridTile';
import { PRODUCTS } from '../data/dummy-data';

export default function CategoryScreen({ route, navigation }) {

  const categoryID = route.params.categoryID
  const displayedProducts = PRODUCTS.filter(item => item.catID == categoryID)
  const renderGridItem = ({ item }) => {
    return (
      <ProductGridTile
        imageURL={item.imageURL}
        title={item.title}
        price={item.finalPriceIncDel}
        onSelect={() => {
          navigation.navigate("Product", {
            productID: item.id,
            productTitle: item.title,
          });
        }}
      />
    );
  };

  return (
    <View style={styles.BG}>
      <FlatList
        data={displayedProducts}
        keyExtractor={(item) => item.id}
        renderItem={renderGridItem}
      />
    </View>
  );
}