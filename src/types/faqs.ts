export interface LinkedEntities {
	entityId: string,
	name?: string,
	fieldId: string,
	subfieldDescriptorPath?: string[],
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface ComplexImage {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	details?: string,
	description?: string,
	alternateText?: string,
	clickthroughUrl?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Faq {
	answer?: string,
	businessId?: string,
	countryCode?: string,
	yextId?: string,
	entityTypeId?: string,
	externalAuthorizationSource?: string,
	externalAuthorizedIdentities?: string[],
	externalBlockedIdentities?: string[],
	landingPageUrl?: string,
	linkedEntities?: LinkedEntities[],
	savedFilters?: string[],
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	localeCode?: string,
	question: string,
	slug?: string,
	logo?: ComplexImage,
	name: string,
	c_relatedSite?: EntityReference[],
	c_shortSlug?: string,
	folder?: any,
	keywords?: string[],
	labels?: any,
	entityId: string,
	timezone?: any,
}
