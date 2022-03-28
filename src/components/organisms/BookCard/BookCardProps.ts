export interface BookCardProps {
    id: number,
    inLibrary: boolean,
    finished: boolean,
    img: string;
    title: string;
    author: string;
    views: string;
    duration: string;
    synopsis: string;
    handleAddtoLibrary?: Function
  }