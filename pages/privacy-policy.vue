<template>
	<main class="policy">
		<Breadcrumbs :breadcrumbs="breadcrumbs" />
		<Legal
			title="Privacy Policy"
			subtitle="The Expo Insurance Exhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services."
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
		to: '/privacy-policy',
		label: 'Privacy Policy'
	}
];
const content = [
	{
		title: 'About the Expo Insurance Exhibition',
		subtitle:
			'The Expo Insurance Exhibition is a premier international event uniting banking institutions from Uzbekistan and around the globe under one roof. As a dynamic platform for collaboration, innovation, and growth, the exhibition serves as a gateway to the future of banking and financial services.',
		texts: null
	},
	{
		title: 'About the Expo Insurance Exhibition',
		subtitle:
			'The Expo Insurance Exhibition is designed to bring together banks, financial institutions, fintech companies, and industry experts to foster collaboration and exchange ideas. This event provides a unique opportunity for participants to:',
		texts: [
			'Showcase their latest financial products and services.',
			'Explore cutting-edge banking technologies and solutions.',
			'Build connections with global and regional industry leaders.',
			'Expand their customer base through direct engagement.'
		]
	},
	{
		title: 'Who Should Attend?',
		subtitle: 'The Expo Insurance Exhibition is open to a diverse audience, including:',
		texts: [
			'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
			'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
			'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
		]
	},
	{
		title: 'Who Should Attend?',
		subtitle: 'The Expo Insurance Exhibition is open to a diverse audience, including:',
		texts: [
			'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
			'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
			'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
		]
	},
	{
		title: 'Who Should Attend?',
		subtitle: 'The Expo Insurance Exhibition is open to a diverse audience, including:',
		texts: [
			'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
			'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
			'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
		]
	},
	{
		title: 'Who Should Attend?',
		subtitle: 'The Expo Insurance Exhibition is open to a diverse audience, including:',
		texts: [
			'General Public: Individuals interested in learning about modern banking solutions and financial literacy.',
			'Fintech Innovators: Startups and tech companies revolutionizing the financial sector..',
			'Government and Regulators: Policy-makers and authorities shaping the banking landscape.'
		]
	}
];

useHead({
	title: `Privacy Policy - Expo Insurance ${new Date().getFullYear()}`,
	meta: [
		{
			name: 'description',
			content:
				'Learn how Expo Insurance collects, uses, and protects your personal information. Review our privacy policy to understand your rights and our practices.'
		},
		{
			property: 'og:title',
			content: `Privacy Policy - Expo Insurance ${new Date().getFullYear()}`
		},
		{
			property: 'og:description',
			content:
				'Learn how Expo Insurance collects, uses, and protects your personal information. Review our privacy policy to understand your rights and our practices.'
		},
		{ property: 'og:url', content: 'https://insurexpo.uz/privacy-policy' },
		{ property: 'og:type', content: 'website' },
		{ name: 'twitter:card', content: 'summary_large_image' },
		{
			name: 'twitter:title',
			content: `Privacy Policy - Expo Insurance ${new Date().getFullYear()}`
		},
		{
			name: 'twitter:description',
			content:
				'Learn how Expo Insurance collects, uses, and protects your personal information. Review our privacy policy to understand your rights and our practices.'
		}
	],
	link: [{ rel: 'canonical', href: 'https://insurexpo.uz/privacy-policy' }]
});
</script>

<style lang="scss" scoped>
.policy {
	display: flex;
	gap: clamp(20px, 3vw, 30px);
	flex-direction: column;
}
</style>
