export default interface Font {
  entities: Array<FontItem>;
  loading: "idle" | "pending" | "succeeded" | "failed";
  expireTime: number;
}

export interface FontItem {
  family: string;
  subsets: string[];
  version: string;
  category: string;
  variants: string[];
}
