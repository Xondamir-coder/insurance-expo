<template>
	<main class="terms">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<Legal
			title="Terms & Conditions"
			subtitle="Welcome to Bank Expo! By accessing or using this website, you agree to comply with and be bound by the following terms and conditions. If you do not agree to these terms, please refrain from using our site."
			:content="content" />
	</main>
</template>

<script setup>
const breadcrumbs = [
	{
		to: '/',
		label: 'Home'
	},
	{
		to: '/terms-of-service',
		label: 'Terms of service'
	}
];
const content = [
	{
		title: 'Use of the Website',
		subtitle:
			'The Expo Insurance Exhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services.',
		texts: [
			'You must be at least [Insert Age, e.g., 18 years] to use this website.',
			'You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit the use of this website by any third party.',
			'Unauthorized use of this website may give rise to a claim for damages or be a criminal offense.'
		]
	},
	{
		title: 'Intellectual Property Rights',
		subtitle: null,
		texts: [
			'All content on this website, including but not limited to text, images, logos, and code, is owned by or licensed to Bank Expo.',
			'You may not reproduce, distribute, or otherwise exploit any content on this website without prior written consent from us.'
		]
	},
	{
		title: 'User Account',
		subtitle: null,
		texts: [
			'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
			'You agree to notify us immediately of any unauthorized use of your account.',
			'We reserve the right to terminate accounts that violate these terms.'
		]
	},
	{
		title: 'User Account',
		subtitle: null,
		texts: [
			'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
			'You agree to notify us immediately of any unauthorized use of your account.',
			'We reserve the right to terminate accounts that violate these terms.'
		]
	},
	{
		title: 'User Account',
		subtitle: null,
		texts: [
			'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
			'You agree to notify us immediately of any unauthorized use of your account.',
			'We reserve the right to terminate accounts that violate these terms.'
		]
	},
	{
		title: 'User Account',
		subtitle: null,
		texts: [
			'If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials.',
			'You agree to notify us immediately of any unauthorized use of your account.',
			'We reserve the right to terminate accounts that violate these terms.'
		]
	}
];

useHead({
	title: `Terms of Service - Expo Insurance ${new Date().getFullYear()}`,
	meta: [
		{
			name: 'description',
			content:
				'Review the terms of service for using the Expo Insurance website. Learn about your rights, responsibilities, and the conditions of use.'
		},
		{
			property: 'og:title',
			content: `Terms of Service - Expo Insurance ${new Date().getFullYear()}`
		},
		{
			property: 'og:description',
			content:
				'Review the terms of service for using the Expo Insurance website. Learn about your rights, responsibilities, and the conditions of use.'
		},
		{ property: 'og:url', content: 'https://insurexpo.uz/terms-of-service' },
		{ property: 'og:type', content: 'website' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{
			name: 'twitter:title',
			content: `Terms of Service - Expo Insurance ${new Date().getFullYear()}`
		},
		{
			name: 'twitter:description',
			content:
				'Review the terms of service for using the Expo Insurance website. Learn about your rights, responsibilities, and the conditions of use.'
		}
	],
	link: [{ rel: 'canonical', href: 'https://insurexpo.uz/terms-of-service' }]
});
</script>

<style lang="scss" scoped>
.terms {
	display: flex;
	gap: clamp(20px, 3vw, 30px);
	flex-direction: column;
}
</style>
