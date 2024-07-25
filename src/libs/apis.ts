import { Room } from "@/models/room";
import sanityClient from "./sanity";
import * as queries from "./sanityQueries";

export async function getFeaturedRooms() {
    const result = await sanityClient.fetch<Room>(queries.getFeaturedRoomQuery , {}, {
        cache: "no-cache",})

    return result    

}