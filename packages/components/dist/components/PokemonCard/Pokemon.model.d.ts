export interface Stats {
  base_stat: number;
  effort: number;
  stat: Stat;
}
export interface Stat {
  name: string;
  url: string;
}
export interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}
