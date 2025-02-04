import { groq } from "next-sanity";

export const getFeaturedRoomQuery =  groq`*[_type == "hotelRoom" && isFeatured == true][0] {
    _id,
    description,
    discount,
    images,
    name,
    price,
    slug,
    isFeatured,
    coverImage
    }`;