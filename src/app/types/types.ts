type BookType = {
  id: number;
  title: string;
  content: string;
  price: number;
  thumbnail: { url: string };
  createdAt: string;
  updatedAt: string;
};

type Purchase = {
  id: string;
  userId: string;
  bookId: string;
  sessionId: string;
  createdAt: string;
};

type User = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export type { BookType, Purchase, User };
