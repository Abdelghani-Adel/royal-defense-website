type ILprTestReq = {
  name: string;
  email: string;
  phone: string;
  image: File;
};

type ILprTestDetection = {
  confidence: number;
  plate_image: string;
  plate_number: string;
};

type ILprTestRes = {
  data: ILprTestDetection[];
  full_image: string;
  status: number | null;
  success: boolean | null;
};

type IScrollableContentProps = {
  data: {
    smallTitle: string;
    title: string;
    description: string;
    image: string;
  };
  onActive: (image: string) => void;
};

type ILprRegisterForm = {
  name: null | string;
  email: null | string;
  phone: null | string;
  company: null | string;
};

type ILprRegisterKey = "name" | "email" | "phone" | "company";
