export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Ce_productCategory {
	richTextDescription?: string,
	slug?: string,
	name: string,
	c_child?: EntityReference[],
	c_parent?: EntityReference[],
	c_relatedProducts?: EntityReference[],
	c_relatedSite?: EntityReference[],
	c_shortSlug?: string,
	id: string,
}
