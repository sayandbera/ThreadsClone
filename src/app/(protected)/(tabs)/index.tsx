import PostListItem from "@/components/PostListItem";
import { dummyPosts } from "@/dummyData";
import React from "react";
import { FlatList } from "react-native";

const HomeScreen = () => {
  return (
    <FlatList
      data={dummyPosts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
};

export default HomeScreen;
