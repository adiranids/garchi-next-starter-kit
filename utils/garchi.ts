import GarchiCMS from "@garchicms/garchi-node-sdk";

export const garchi = new GarchiCMS({
    api_key: process.env.GARCHI_API_KEY,
});