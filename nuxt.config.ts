// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
				compatibilityDate: '2024-11-01',
				devtools: { enabled: true },

				vite: {
								css: {
												preprocessorOptions: {
																scss: {
																				additionalData:
																								'@use "~/assets/styles/abstracts/_variables.scss" as *; @use "~/assets/styles/abstracts/_mixins.scss" as *;'
																}
												}
								}
				},

				css: [
								'~/assets/styles/main.scss' // Replace with the path to your SCSS file
				],

				modules: ['nuxt-swiper', '@nuxtjs/seo'],
				app: {
								head: {
												title: 'Expo Insurance',
												htmlAttrs: {
																lang: 'en'
												},
												meta: [
																// Basic Metadata
																{
																				name: 'description',
																				content:
																								'Your trusted partner for innovative financial solutions and seamless banking experiences.'
																},
																{
																				name: 'author',
																				content: 'Spacelabs | https://spacelabs.studio'
																},
																{
																				name: 'keywords',
																				content:
																								'banking, financial solutions, secure banking, personal banking, business banking'
																},
																// Social Media Sharing (Open Graph)
																{
																				property: 'og:title',
																				content: 'Expo Insurance - Secure Financial Solutions'
																},
																{
																				property: 'og:description',
																				content:
																								'Partner with Expo Insurance for secure and seamless banking services tailored to your personal and business needs.'
																},
																{
																				property: 'og:url',
																				content: 'https://insurexpo.uz'
																},
																{
																				property: 'og:type',
																				content: 'website'
																},
																// Twitter Card Metadata
																{
																				name: 'twitter:card',
																				content: 'summary_large_image'
																},
																{
																				name: 'twitter:title',
																				content: 'Expo Insurance - Secure Financial Solutions'
																},
																{
																				name: 'twitter:description',
																				content:
																								'Your trusted partner for innovative financial solutions and seamless banking experiences.'
																},
																// Accessibility & SEO
																{
																				name: 'robots',
																				content: 'index, follow'
																}
												]
								}
				}
});