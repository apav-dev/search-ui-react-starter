export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface ComplexImage {
	image: Image,
	details?: string,
	description?: string,
	clickthroughUrl?: string,
}

export interface EntityReference {
	entityId: string,
	name: string,
}

export interface Faq {
	answer?: string,
	externalAuthorizationSource?: string,
	externalAuthorizedIdentities?: string[],
	externalBlockedIdentities?: string[],
	landingPageUrl?: string,
	nudgeEnabled?: boolean,
	primaryConversationContact?: any,
	question: string,
	slug?: string,
	logo?: ComplexImage,
	name: string,
	c_relatedSite?: EntityReference[],
	c_shortSlug?: string,
	keywords?: string[],
	id: string,
	timezone?: any,
}
