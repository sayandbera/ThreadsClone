import { Post, User } from "./types"; // Assuming types.ts is in the same directory or adjust the path

// --- Dummy Users ---
export const dummyUsers: User[] = [
  {
    id: "u1",
    username: "johndoe",
    name: "John Doe",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    bio: "Lover of coffee and code. Building cool things.",
  },
  {
    id: "u2",
    username: "janismith",
    name: "Jani Smith",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    bio: "Exploring the world, one photo at a time. React Native enthusiast.",
  },
  {
    id: "u3",
    username: "alex_p",
    name: "Alex Peterson",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "Musician, developer, and dreamer. Always learning.",
  },
  {
    id: "u4",
    username: "sarah_lee",
    name: "Sarah Lee",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
    bio: "Foodie and tech geek. Sharing my adventures.",
  },
  {
    id: "u5",
    username: "mike_r",
    name: "Mike Ross",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    bio: "Just a guy trying to make the internet a better place.",
  },
];

// --- Dummy Posts ---
// Note: For simplicity, 'parent' and 'replies' are initially null/empty.
// You might need more complex logic to fully link them if required.
export const dummyPosts: Post[] = [
  // User 1 Posts
  {
    id: "p1",
    createdAt: "2025-04-26T10:00:00Z",
    content: "Just deployed a new feature for the Threads clone! #ReactNative",
    user_id: "u1",
    user: dummyUsers[0],
    parent_id: null,
    parent: null,
    replies: [], // Will be populated later if needed
  },
  {
    id: "p2",
    createdAt: "2023-10-26T11:30:00Z",
    content: "Anyone else finding state management tricky sometimes?",
    user_id: "u1",
    user: dummyUsers[0],
    parent_id: null,
    parent: null,
    replies: [],
  },
  // User 2 Posts
  {
    id: "p3",
    createdAt: "2024-07-26T10:15:00Z",
    content: "Loving the autumn colors on my hike today! 🍂",
    user_id: "u2",
    user: dummyUsers[1],
    parent_id: null,
    parent: null,
    replies: [],
  },
  {
    id: "p4",
    createdAt: "2023-10-26T14:00:00Z",
    content: "Thinking about learning Swift next. Any recommendations?",
    user_id: "u2",
    user: dummyUsers[1],
    parent_id: null,
    parent: null,
    replies: [],
  },
  // User 3 Posts
  {
    id: "p5",
    createdAt: "2025-01-26T10:30:00Z",
    content: "New song idea brewing... 🎶",
    user_id: "u3",
    user: dummyUsers[2],
    parent_id: null,
    parent: null,
    replies: [],
  },
  // User 4 Posts
  {
    id: "p6",
    createdAt: "2023-10-26T11:00:00Z",
    content: "Tried the new cafe downtown. Amazing pastries! 🥐",
    user_id: "u4",
    user: dummyUsers[3],
    parent_id: null,
    parent: null,
    replies: [],
  },
  // User 5 Posts
  {
    id: "p7",
    createdAt: "2023-10-26T12:00:00Z",
    content: "Debugging CSS can be... fun. 😅",
    user_id: "u5",
    user: dummyUsers[4],
    parent_id: null,
    parent: null,
    replies: [],
  },

  // --- Replies ---

  // Reply to p1 (by User 2)
  {
    id: "p8",
    createdAt: "2023-10-26T10:05:00Z",
    content: "Awesome! Congrats on the launch!",
    user_id: "u2",
    user: dummyUsers[1],
    parent_id: "p1",
    parent: null, // Set parent object later if needed
    replies: [],
  },
  // Reply to p1 (by User 5)
  {
    id: "p9",
    createdAt: "2023-10-26T10:10:00Z",
    content: "Great work! Looking forward to trying it out.",
    user_id: "u5",
    user: dummyUsers[4],
    parent_id: "p1",
    parent: null,
    replies: [],
  },
  // Reply to p2 (by User 3)
  {
    id: "p10",
    createdAt: "2023-10-26T11:35:00Z",
    content: "Definitely! Zustand has been a lifesaver for me.",
    user_id: "u3",
    user: dummyUsers[2],
    parent_id: "p2",
    parent: null,
    replies: [],
  },
  // Reply to p4 (by User 1)
  {
    id: "p11",
    createdAt: "2023-10-26T14:10:00Z",
    content: "Hacking with Swift by Paul Hudson is a great resource!",
    user_id: "u1",
    user: dummyUsers[0],
    parent_id: "p4",
    parent: null,
    replies: [],
  },
  // Reply to p6 (by User 2)
  {
    id: "p12",
    createdAt: "2023-10-26T11:05:00Z",
    content: "Ooh, need to check that place out!",
    user_id: "u2",
    user: dummyUsers[1],
    parent_id: "p6",
    parent: null,
    replies: [],
  },
  // Reply to p10 (nested reply, by User 1)
  {
    id: "p13",
    createdAt: "2023-10-26T11:40:00Z",
    content: "Seconding Zustand! Very simple and effective.",
    user_id: "u1",
    user: dummyUsers[0],
    parent_id: "p10",
    parent: null,
    replies: [],
  },
  // Another top-level post (User 3)
  {
    id: "p14",
    createdAt: "2023-10-27T09:00:00Z",
    content: "Morning coffee and coding session. Perfect start.",
    user_id: "u3",
    user: dummyUsers[2],
    parent_id: null,
    parent: null,
    replies: [],
  },
  // Reply to p7 (by User 4)
  {
    id: "p15",
    createdAt: "2023-10-26T12:15:00Z",
    content: "I feel your pain! Chrome DevTools is my best friend.",
    user_id: "u4",
    user: dummyUsers[3],
    parent_id: "p7",
    parent: null,
    replies: [],
  },
];
