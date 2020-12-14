export interface Owner {
  nsid: string;
  username: string;
  realname: string;
  location?: any;
  iconserver: string;
  iconfarm: number;
  path_alias: string;
}

export interface Title {
  _content: string;
}

export interface Description {
  _content: string;
}

export interface Visibility {
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export interface Dates {
  posted: string;
  taken: string;
  takengranularity: string;
  takenunknown: string;
  lastupdate: string;
}

export interface Editability {
  cancomment: number;
  canaddmeta: number;
}

export interface Publiceditability {
  cancomment: number;
  canaddmeta: number;
}

export interface Usage {
  candownload: number;
  canblog: number;
  canprint: number;
  canshare: number;
}

export interface Comments {
  _content: string;
}

export interface Notes {
  note: any[];
}

export interface People {
  haspeople: number;
}

export interface Tag {
  id: string;
  author: string;
  authorname: string;
  raw: string;
  _content: string;
  machine_tag: number;
}

export interface Tags {
  tag: Tag[];
}

export interface Url {
  type: string;
  _content: string;
}

export interface Urls {
  url: Url[];
}

export interface PhotoInfo {
  id: string;
  secret: string;
  server: string;
  farm: number;
  dateuploaded: string;
  isfavorite: number;
  license: string;
  safety_level: string;
  rotation: number;
  originalsecret: string;
  originalformat: string;
  owner: Owner;
  title: Title;
  description: Description;
  visibility: Visibility;
  dates: Dates;
  views: string;
  editability: Editability;
  publiceditability: Publiceditability;
  usage: Usage;
  comments: Comments;
  notes: Notes;
  people: People;
  tags: Tags;
  urls: Urls;
  media: string;
}

export interface Info {
  photo: PhotoInfo;
  stat: string;
}
