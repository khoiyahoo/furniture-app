import { FlatList, Text, View } from "react-native";
import React from "react";
import { SIZES, COLORS } from "../../constants";
import ProductCardView from "./ProductCardView";
import styles from "./productRow.style";
import useFetch from "../../hook/useFetch";
import { ActivityIndicator } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { apiGetAllProduct } from "../../services/products";

const ProductRow = () => {
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
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          key={(item) => item}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.small - 10 }}
        />
      )}
    </View>
  );
};
export default ProductRow;
