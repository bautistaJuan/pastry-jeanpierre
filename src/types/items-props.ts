export interface Items {
  title: string;
  description: string;
  file: {
    contentType: string;
    details: {
      size: number;
      image: {
        height: number;
        width: number;
      };
    };
    fileName: string;
    url: string;
  };
  fields: {
    title: string;
    description: string;
    file: {
      contentType: string;
      details: {
        size: number;
        image: {
          height: number;
          width: number;
        };
      };
      fileName: string;
      url: string;
    };
  };
}
export interface propCard {
  title: string;
  imgUrl: string;
}
