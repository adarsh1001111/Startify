export type IContextType = {
  user: IUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  checkAuthUser: () => Promise<boolean>;
};
export type INavLink = {
  imgURL: string;
  route: string;
  label: string;
};

export type IUpdateUser = {
  userId: string;
  name: string;
  bio: string;
  imageId: string;
  imageUrl: URL | string;
  file: File[];
};

export type INewPitch = {
  userId: string;
  caption: string;
  file: File[];
  location?: string;
  types?: string;
};

export type IUpdatePitch = {
  pitchId: string;
  caption: string;
  videoId: string;
  videoUrl: URL;
  file: File[];
  location?: string;
  types?: string;
};

export type IUser = {
  id: string;
  name: string;
  username: string;
  email: string;
  imageUrl: string;
  Description: string;
};

export type INewUser = {
  name: string;
  email: string;
  username: string;
  password: string;
};
