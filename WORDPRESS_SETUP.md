# WordPress Integration Setup Guide

This React application is designed to work with WordPress as a headless CMS using the WordPress REST API and Advanced Custom Fields (ACF).

## Prerequisites

### WordPress Setup Required

1. **WordPress Installation** with the following plugins:
   - Advanced Custom Fields (ACF) Pro
   - Contact Form 7
   - ACF to REST API (optional, for better API support)

### Required WordPress Content

#### 1. Create a "Home" Page
Create a page with the slug `home` that contains the following ACF fields:

**Hero Section Fields:**
- `hero_headline` (Rich Text) - Main headline with HTML formatting
- `hero_subheadline` (Text) - Subtitle text
- `hero_description` (Textarea) - Description text
- `hero_image` (Image) - Hero background image
- `cta_primary_text` (Text) - Primary CTA button text
- `cta_secondary_text` (Text) - Secondary CTA button text
- `trust_indicator_1` (Text) - First trust indicator
- `trust_indicator_2` (Text) - Second trust indicator  
- `trust_indicator_3` (Text) - Third trust indicator
- `social_proof_text` (Text) - Social proof description
- `client_rating` (Number) - Client rating (e.g., 4.9)
- `businesses_served` (Number) - Number of businesses served
- `hero_card_title` (Text) - Hero card title
- `hero_card_description` (Textarea) - Hero card description
- `hero_card_features` (Repeater) - Features list
  - `feature` (Text) - Individual feature

**Services Section Fields:**
- `services_title` (Rich Text) - Services section title with HTML
- `services_description` (Textarea) - Services section description
- `services` (Repeater) - Services list
  - `title` (Text) - Service title
  - `description` (Textarea) - Service description
  - `icon` (Select) - Icon name (Globe, Search, TrendingUp, Smartphone, Users, Zap)
  - `features` (Repeater) - Service features
    - `feature` (Text) - Individual feature
- `services_cta_title` (Text) - Services CTA title
- `services_cta_description` (Textarea) - Services CTA description
- `services_cta_primary` (Text) - Primary CTA text
- `services_cta_secondary` (Text) - Secondary CTA text
- `services_cta_phone` (Text) - Phone number

**Portfolio Section Fields:**
- `portfolio_title` (Rich Text) - Portfolio section title
- `portfolio_description` (Textarea) - Portfolio section description
- `portfolio_cta_title` (Text) - Portfolio CTA title
- `portfolio_cta_description` (Textarea) - Portfolio CTA description
- `portfolio_cta_primary` (Text) - Primary CTA text
- `portfolio_cta_secondary` (Text) - Secondary CTA text
- `portfolio_cta_phone` (Text) - Phone number

**Contact Section Fields:**
- `contact_title` (Rich Text) - Contact section title
- `contact_description` (Textarea) - Contact section description
- `contact_phone` (Text) - Phone number
- `contact_email` (Email) - Email address
- `contact_location` (Text) - Location
- `phone_description` (Text) - Phone description
- `email_description` (Text) - Email description
- `location_description` (Text) - Location description
- `trust_indicators` (Repeater) - Trust indicators list
  - `indicator` (Text) - Individual indicator
- `form_title` (Text) - Contact form title
- `form_description` (Textarea) - Contact form description

#### 2. Create Custom Post Types (Optional)

**Portfolio Post Type:**
- Post type: `portfolio`
- Fields:
  - `category` (Text) - Project category
  - `description` (Textarea) - Project description
  - `featured_image` (Image) - Project image
  - `results` (Text) - Project results
  - `live_url` (URL) - Live project URL

**Testimonials Post Type:**
- Post type: `testimonials`
- Fields:
  - `content` (Textarea) - Testimonial content
  - `author` (Text) - Testimonial author
  - `rating` (Number) - Star rating (1-5)

#### 3. Site Settings (ACF Options Page)
Create an ACF Options page with:
- `site_title` (Text) - Site title
- `site_description` (Textarea) - Site description
- `logo` (Image) - Site logo
- `contact_phone` (Text) - Global contact phone
- `contact_email` (Email) - Global contact email

#### 4. Contact Form 7 Setup
Create a Contact Form 7 form with the following fields:
- `your-name` - Name field
- `your-email` - Email field
- `your-phone` - Phone field
- `business-name` - Business name field
- `current-website` - Current website field
- `project-description` - Project description textarea
- `timeline` - Timeline select field

## Environment Configuration

1. Copy `.env.example` to `.env`
2. Update `VITE_WORDPRESS_URL` with your WordPress site URL
3. Optionally update `VITE_CF7_FORM_ID` with your Contact Form 7 form ID

```bash
# Example .env file
VITE_WORDPRESS_URL=https://yoursite.com
VITE_CF7_FORM_ID=1
```

## WordPress Plugins Required

### 1. Advanced Custom Fields (ACF) Pro
```
Plugin: Advanced Custom Fields PRO
Purpose: Create and manage custom fields for content
Required: Yes
```

### 2. Contact Form 7
```
Plugin: Contact Form 7
Purpose: Handle contact form submissions
Required: Yes
```

### 3. ACF to REST API (Optional)
```
Plugin: ACF to REST API
Purpose: Better ACF integration with REST API
Required: No (but recommended)
```

## WordPress Permissions

Ensure your WordPress REST API is enabled and accessible:

1. **REST API Access**: The React app needs read access to:
   - `/wp-json/wp/v2/pages`
   - `/wp-json/wp/v2/portfolio` (if using custom post type)
   - `/wp-json/wp/v2/testimonials` (if using custom post type)
   - `/wp-json/acf/v3/options` (for site settings)

2. **Contact Form 7 API**: Write access to:
   - `/wp-json/contact-form-7/v1/contact-forms/{id}/feedback`

## Content Management Workflow

1. **Update Content**: Edit the "Home" page in WordPress admin
2. **Manage Portfolio**: Add/edit portfolio items via the custom post type
3. **Manage Testimonials**: Add/edit testimonials via the custom post type
4. **Site Settings**: Update global settings via ACF Options page
5. **Forms**: Contact form submissions are handled automatically

## Development Notes

- The app includes fallback content if WordPress is unavailable
- All content is cached for 5-10 minutes for performance
- Images should be uploaded to WordPress Media Library
- All styling and animations are preserved from the original design
- The app is fully responsive and SEO-optimized

## Troubleshooting

### Common Issues:

1. **CORS Errors**: Ensure your WordPress site allows CORS from your domain
2. **404 Errors**: Check that WordPress REST API is enabled
3. **Missing Content**: Verify ACF fields are configured correctly
4. **Form Not Submitting**: Check Contact Form 7 plugin is active and form ID is correct

### Testing the Integration:

1. Visit `/wp-json/wp/v2/pages?slug=home` to test page access
2. Visit `/wp-json/contact-form-7/v1/contact-forms` to verify CF7 API
3. Check browser console for any API errors

## Support

For WordPress-specific issues:
- Check WordPress and plugin documentation
- Ensure all required plugins are active and up-to-date
- Verify field names match exactly as specified in this guide