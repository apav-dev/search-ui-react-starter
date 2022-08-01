export interface LinkedEntities {
	entityId: string,
	name?: string,
	fieldId: string,
	subfieldDescriptorPath?: string[],
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Ce_productCategory {
	businessId?: string,
	countryCode?: string,
	yextId?: string,
	entityTypeId?: string,
	savedFilters?: string[],
	localeCode?: string,
	linkedEntities?: LinkedEntities[],
	richTextDescription?: string,
	slug?: string,
	name: string,
	c_child?: EntityReference[],
	c_parent?: EntityReference[],
	c_relatedProducts?: EntityReference[],
	c_relatedSite?: EntityReference[],
	c_shortSlug?: string,
	folder?: any,
	labels?: any,
	entityId: string,
}
