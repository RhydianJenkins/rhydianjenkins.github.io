import { init } from "$lib/mongo";

export const get = async () => {
    const { db } = await init();
    const collection = await db.collection("data");
    const findOne = await collection.findOne();
	return {
        code: 200,
        body: {
            title: 'Test Success!',
            body: findOne
        }
    };
};
