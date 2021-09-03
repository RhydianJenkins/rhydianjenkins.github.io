import { init } from "$lib/mongo";

export const get = async (request) => {
    const { db } = await init();
    const collection = await db.collection("test_collection_name");
    const document = await collection.findOne({ name: request.params.name }); // TODO sanitise?
	return {
        code: document ? 200 : 400,
        body: {
            title: document ? 'Found!' : 'Not found!',
            found: !!document,
            document: document || null
        }
    };
};
