import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import styles from "./productList.style";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants";
import { useState, useEffect } from "react";
import { apiGetAllProduct } from "../../services/products";
import ProductCardView from "./ProductCardView";
const ProductList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = () => {
    apiGetAllProduct()
      .then((res) => {
        setData(res.data.response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        // key={(item) => item}
        renderItem={({ item }) => <ProductCardView item={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator}></View>}
        contentContainerStyle={{ columnGap: SIZES.small - 10 }}
      />
    </View>
  );
};

export default ProductList;
