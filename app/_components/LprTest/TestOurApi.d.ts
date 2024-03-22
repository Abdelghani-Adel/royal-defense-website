type ILprTestReq = {
    name: string;
    email: string;
    phone: string;
    image: File;
}

type ILprTestDetection = {
    confidence: number;
    plate_image: string;
    plate_number: string;
}

type ILprTestRes = {
    data: ILprTestDetection[];
    full_image: string;
    status: number | null;
    success: boolean | null
}