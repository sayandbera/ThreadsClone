import PostListItem, { PostWithUser } from "@/components/PostListItem";
import { supabase } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { ActivityIndicator, FlatList, Text } from "react-native";

const fetchPosts = async () => {
  const { data } = await supabase
    .from("posts")
    .select("*, user:profiles(*)")
    .throwOnError(); // Fetches posts and attempts to join profiles

  return data;
};

const HomeScreen = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  // Add type assertion here to assure TypeScript of the filtered type
  const validPosts =
    (data?.filter((post) => post.user) as PostWithUser[]) || [];

  return (
    <FlatList
      data={validPosts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostListItem post={item} />}
    />
  );
};

export default HomeScreen;
