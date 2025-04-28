const API_BASE_URL = 'https://best-blog-api.dev/api/v1'

const getPostsWithIndex = {
	resCode: `
{
	"success": true,
	"page": 1,
	"next_page_available": true,
	"posts": [
		{
			"title": "How Apple Outperformed Google and Microsoft in AI Rollout",
			"slug": "how-apple-outperformed-google-and-microsoft-in-ai-rollout-179239",
			"date": "2024-06-17T05:00:29",
			"categorie": {
				"name": "Artificial Intelligence",
				"slug": "artificial-intelligence"
			},
			"image": "https://www.technewsworld.com/wp-content/uploads/sites/3/2024/06/Tim-Cook-WWDC24.jpg",
			"description": "Over the last several weeks, we’ve had Google I/O, which highlighted the rollout of Google’s Gemini AI engine for smartphones; Microsoft Build, which focused on its Copilot+ rollout for PCs; and Apple’s WWDC24 video, which showcased the rollout of AI on both PCs and smartphones. Let’s explore these AI product rollouts this week."
		},
		{...},
      {...},
      // more post
	]
}

`,
	code: `const res = await fetch('${API_BASE_URL}/posts')
// more post get to use ?page=2 and more index
const data = await res.json()
console.log(data);`,
}

const getPostBySlug = {
	resCode: `
	{
	"success": true,
	"post": {
		"title": "Copyleaks Study Finds Explosive Growth of AI Content on the Web",
		"slug": "copyleaks-study-finds-explosive-growth-of-ai-content-on-the-web-179161",
		"date": "2024-05-01T05:00:46",
		"categorie": {
			"name": "Artificial Intelligence",
			"slug": "artificial-intelligence"
		},
		"content": "<p>More line html content </p>",
		"image": "https://www.technewsworld.com/wp-content/uploads/sites/3/2024/04/AI-content-generation.jpg",
		"meta_seo": {
			"title": "Copyleaks Study Finds Explosive Growth of AI Content on the Web",
			"description": "Since ChatGPT arrived on the net in 2022, AI-generated content has soared more than 8,000%, according to a study released Tuesday by Copyleaks. The study,",
			"image": "https://www.technewsworld.com/wp-content/uploads/sites/3/2024/04/AI-content-generation.jpg",
			"url": "https://www.technewsworld.com/story/copyleaks-study-finds-explosive-growth-of-ai-content-on-the-web-179161.html"
		}
	}
}
`,
	code: `const res = await fetch('${API_BASE_URL}/post/{slug}')
// slug add from post and get full post
const data = await res.json()
console.log(data);`,
}

const getPostByCategory = {
	resCode: `
{
	"success": true,
	"page": 1,
	"next_page_available": true,
	"posts": [
		{
			"title": "How Apple Outperformed Google and Microsoft in AI Rollout",
			"slug": "how-apple-outperformed-google-and-microsoft-in-ai-rollout-179239",
			"date": "2024-06-17T05:00:29",
			"categorie": {
				"name": "Artificial Intelligence",
				"slug": "artificial-intelligence"
			},
			"image": "https://www.technewsworld.com/wp-content/uploads/sites/3/2024/06/Tim-Cook-WWDC24.jpg",
			"description": "Over the last several weeks, we’ve had Google I/O, which highlighted the rollout of Google’s Gemini AI engine for smartphones; Microsoft Build, which focused on its Copilot+ rollout for PCs; and Apple’s WWDC24 video, which showcased the rollout of AI on both PCs and smartphones. Let’s explore these AI product rollouts this week."
		},
		{...},
      {...},
      // more post
	]
}
`,
	code: `const res = await fetch('${API_BASE_URL}/posts/{category}')
// more post get to use ?page=2 and more index
const data = await res.json()
console.log(data);`,
}

const getListCategories = {
	resCode: `
{
	"success": true,
	"categories": [
		{
			"name": "Artificial Intelligence",
			"slug": "artificial-intelligence"
		},
		{
			"name": "Online Entertainment",
			"slug": "online-entertainment"
		},
		{
			"name": "Emerging Tech",
			"slug": "emerging-tech"
		},
		{
			"name": "Technology",
			"slug": "technology"
		},
		{
			"name": "How To",
			"slug": "how-to"
		},
		{
			"name": "Home Tech",
			"slug": "home-tech"
		},
		{
			"name": "Mobile Apps",
			"slug": "mobile-apps"
		},
		{
			"name": "Applications",
			"slug": "applications"
		},
		{
			"name": "Cybersecurity",
			"slug": "cybersecurity"
		},
		{
			"name": "Hardware",
			"slug": "hardware"
		},
		{
			"name": "Chips",
			"slug": "chips"
		},
		{
			"name": "Developers",
			"slug": "developers"
		},
		{
			"name": "Tech Blog",
			"slug": "tech-blog"
		},
		{
			"name": "Internet",
			"slug": "internet"
		},
		{
			"name": "Uncategorized",
			"slug": "uncategorized"
		},
		{
			"name": "Personal Computers",
			"slug": "personal-computers"
		},
		{
			"name": "Operating Systems",
			"slug": "operating-systems"
		},
		{
			"name": "Smartphones",
			"slug": "smartphones"
		},
		{
			"name": "Science",
			"slug": "science"
		},
		{
			"name": "Computing",
			"slug": "computing"
		},
		{
			"name": "Robotics",
			"slug": "robotics"
		},
		{
			"name": "Data Management",
			"slug": "data-management"
		},
		{
			"name": "Health",
			"slug": "health"
		},
		{
			"name": "Privacy",
			"slug": "privacy"
		},
		{
			"name": "Space",
			"slug": "space"
		},
		{
			"name": "IT Leadership",
			"slug": "it-leadership"
		},
		{
			"name": "Audio/Video",
			"slug": "audio-video"
		},
		{
			"name": "Analytics",
			"slug": "analytics"
		},
		{
			"name": "Gaming",
			"slug": "gaming"
		}
	]
}

`,
	code: `const res = await fetch('${API_BASE_URL}/categories')
// list all categories for menu and more
const data = await res.json()
console.log(data);`,
}

const apiCodesSchema = {
	getPostsWithIndex,
	getPostBySlug,
	getPostByCategory,
	getListCategories,
}

export default apiCodesSchema
