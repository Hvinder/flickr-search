export interface ApiResponse {
  photos: Photos;
  stat: string;
}

export interface Photos {
  page: number;
  pages: number;
  perpage: number;
  photo: Photo[];
  total: string;
}

export interface Photo {
  farm: number;
  id: string;
  isfamily: number;
  isfriend: number;
  ispublic: number;
  owner: string;
  secret: string;
  server: string;
  title: string;
}
