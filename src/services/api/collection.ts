import { FieldValues } from 'react-hook-form';
import { CollectionItemProps, CollectionProps } from '../../@types/collections';
import { api } from '.';
import { User } from '../../@types/user';

export interface CreateNewCollectionAndAddOnCollectionArgs {
	owner_id: string;
	token: string;
	item: CollectionItemProps;
}

export const retrieveAllUserCollections = async (userId: string, token: string): Promise<CollectionProps[] | null | undefined> => {
	if (!userId || !token) throw new Error();

	try {
		const response = await api.get(`/collections/users/${userId}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		return response.data.collections;
		// eslint-disable-next-line
	} catch (error) {
		throw new Error();
	}
};

export const retrieveCollectionDetails = async (collection_id: string, token: string) => {
	try {
		const response = await api.get(`/collections/${collection_id}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		return response.data.collection;
	} catch (error) {
		throw new Error();
	}
};

export const createNewCollection = async (data: FieldValues, { user, token }: { user: User, token: string }): Promise<CollectionProps | undefined> => {
	try {
		const response = await api.post('/collections/create', {
			user_id: user.id,
			title: data.title,
		}, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		return response.data.new_collection;
		// eslint-disable-next-line
	} catch { }
};

export const addOnCollection = async ({
	collection_id, item, token,
}: { collection_id: string, item: CollectionItemProps, token: string }) => {
	try {
		const response = await api.patch(`/collections/${collection_id}/add_item`, {
			item,
		}, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	} catch (error) {
		throw Error();
	}
};

export const createNewCollectionAndAddItem = async (data: FieldValues, { owner_id, token, item }:
	CreateNewCollectionAndAddOnCollectionArgs) => {
	try {
		const response = await api.post(`/collections/create_and_add_item/owner/${owner_id}`, {
			collection_title: data.title, item,
		}, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});

		return response.data.collection;
	} catch (error) {
		throw Error();
	}
};

export const deleteOneCollection = async (collection_id: string, token: string) => {
	try {
		await api.delete(`/collections/${collection_id}`, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	} catch (error) {
		throw new Error();
	}
};

export const renameCollectionTitle = async (collection_id: string, new_title: string, token: string) => {
	try {
		await api.patch(`/collections/${collection_id}/change_title`, {
			new_title,
		}, {
			headers: {
				authorization: `Bearer ${token}`,
			},
		});
	} catch (error) {
		throw new Error();
	}
};
