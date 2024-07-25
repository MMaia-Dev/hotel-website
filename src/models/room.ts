type coverImage = {
    url: string;
}

type Image = {
    _key: string;
    url: string;
}

type Amenity = {
    _key: string;
    amenity: string;
    title: string;
}

type Slug = {
    _type: string;
    current: string;    
}

export type Room = {
    _id: string;
    name: string;
    coverImage: coverImage;
    description: string;
    dimension: string;
    discount: number;
    price: number;
    images: Image[];
    isBooked: boolean;
    isFeatured: boolean;
    numberOfBeds: number;
    offeredAmeninties: Amenity[];
    slug: Slug;
    specialNote: string;
    type: string;

}