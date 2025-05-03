// import { Post } from "@/types";
import { Tables } from "@/types/database.types";
import { Ionicons } from "@expo/vector-icons";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Image, Pressable, Text, View } from "react-native";

dayjs.extend(relativeTime);

export type PostWithUser = Tables<"posts"> & {
  user: Tables<"profiles">;
};

export default function PostListItem({ post }: { post: PostWithUser }) {
  return (
    <View className="flex-row p-4 border-b border-gray-800/70">
      {/* User Avatar */}
      <View className="mr-3">
        <Image
          source={{
            uri:
              post.user.avatar_url === null ? undefined : post.user.avatar_url,
          }}
          className="w-12 h-12 rounded-full"
        />
      </View>

      {/* Content */}
      <View className="flex-1">
        {/* User Info */}
        <View className="flex-row items-center">
          <Text className="text-white font-bold mr-2">
            {post.user.username}
          </Text>
          <Text className="text-gray-500">
            {dayjs(post.created_at).fromNow()}
          </Text>
        </View>

        {/* Post Content */}
        <Text className="text-white text-lg mt-3 mb-3">{post.content}</Text>

        {/* Interaction Buttons */}
        <View className="flex-row gap-5 mt-2">
          <Pressable className="flex-row items-center">
            <Ionicons name="heart-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="chatbubble-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </Pressable>

          <Pressable className="flex-row items-center">
            <Ionicons name="repeat-outline" size={20} color="#d1d5db" />
            <Text className="text-gray-300 ml-2">0</Text>
          </Pressable>

          <Pressable>
            <Ionicons name="paper-plane-outline" size={20} color="#d1d5db" />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
