export type Question = {
  id: number;
  users_id: number;
  title: string;
  type: string[];
  state: string;
  content: string;
  read_count: number;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  is_anomyous: boolean;
};
