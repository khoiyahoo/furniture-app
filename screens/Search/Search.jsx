import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import styles from "./search.style";
import { COLORS, SIZES } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { apiSearchProduct } from "../../services/products";
import axios from "axios";
import { BASE_URL } from "../../ultils/apiUrl";
import { FlatList } from "react-native";
import { Image } from "react-native";
import ProductCardView from "../../components/products/ProductCardView";

const Search = () => {
  const navigation = useNavigation();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = async () => {
    // try {
    //   const res = await axios.get(
    //     `${BASE_URL}/api/v1/products/search/${searchTerm}`
    //   );
    //   console.log(res.data.response);
    // } catch (err) {
    //   console.log(err);
    // }
    apiSearchProduct(searchTerm)
      .then((res) => {
        setSearchResult(res.data.response);
      })
      .catch((err) => {
        console.log(err, "----");
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Ionicons name="camera-outline" size={24} style={styles.searchIcon} />
        </TouchableOpacity>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="What are you looking for ?"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
            <Feather
              name="search"
              size={SIZES.large}
              color={COLORS.lightWhite}
            />
          </TouchableOpacity>
        </View>
      </View>
      {searchResult?.length === 0 ? (
        <View>
          <Image
            source={require("../../assets/images/not_found.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          numColumns={2}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ columnGap: SIZES.small - 10 }}
          renderItem={({ item }) => <ProductCardView item={item} />}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
